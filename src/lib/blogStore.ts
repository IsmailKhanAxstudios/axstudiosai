import { randomUUID } from "node:crypto";
import { mkdir, open, readdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { blogPosts, getBlogPost } from "@/lib/blogPosts";
import { publicSupabase } from "@/lib/supabaseServer";
import { deleteRemoteBlog, remoteBlog, remoteBlogs, saveRemoteBlog } from "@/lib/supabaseContent";

export type EditablePost = {
  slug: string;
  revision: string;
  title: string;
  category: string;
  summary: string;
  author: string;
  content: string;
  imageAlt: string;
  imageUrl: string;
  publishedAt?: string;
  coverSource?: string;
};

type SavedPost = Omit<EditablePost, "imageUrl" | "revision"> & {
  revision?: string;
  imageType?: string;
  coverKey?: string;
};
type SavedRecord = SavedPost | { deleted: true };

export class BlogInputError extends Error {}

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function blogDirectory() {
  return resolve(/* turbopackIgnore: true */ process.env.AXSTUDIOS_BLOG_DIR ?? ".axstudios-data/blogs");
}

function errorCode(error: unknown) {
  return (error as NodeJS.ErrnoException).code;
}

function validSlug(slug: string) {
  return slug.length <= 100 && slugPattern.test(slug);
}

async function readRecord(slug: string): Promise<SavedRecord | undefined> {
  if (!validSlug(slug)) return undefined;
  try {
    return JSON.parse(await readFile(join(blogDirectory(), slug, "post.json"), "utf8"));
  } catch (error) {
    if (errorCode(error) === "ENOENT") return undefined;
    throw error;
  }
}

function savedPostView(post: SavedPost): EditablePost {
  const imageUrl = post.imageType
    ? `/api/blog-covers/${post.slug}${post.coverKey ? `?v=${post.coverKey}` : ""}`
    : `/blogs/${post.slug}.webp`;
  return {
    slug: post.slug,
    revision: post.revision ?? "original",
    title: post.title,
    category: post.category,
    summary: post.summary,
    author: post.author,
    content: post.content,
    publishedAt: post.publishedAt,
    imageAlt: post.imageAlt,
    imageUrl,
    coverSource: post.coverSource,
  };
}

function sampleView(post: (typeof blogPosts)[number]): EditablePost {
  return {
    slug: post.slug,
    revision: "original",
    title: post.title,
    category: post.category,
    summary: post.summary,
    author: "AxStudios",
    content: post.sections.map(({ heading, body }) => `## ${heading}\n\n${body}`).join("\n\n"),
    imageUrl: `/blogs/${post.slug}.webp`,
    imageAlt: "",
    coverSource: post.coverSource,
  };
}

export async function getPublicBlogPosts() {
  const client = publicSupabase();
  if (client) return remoteBlogs(client);
  let slugs: string[];
  try {
    slugs = (await readdir(/* turbopackIgnore: true */ blogDirectory(), { withFileTypes: true }))
      .filter((entry) => entry.isDirectory() && validSlug(entry.name))
      .map((entry) => entry.name);
  } catch (error) {
    if (errorCode(error) !== "ENOENT") throw error;
    slugs = [];
  }

  const records = new Map(await Promise.all(slugs.map(async (slug) => [slug, await readRecord(slug)] as const)));
  const uploaded = [...records.values()]
    .filter((record): record is SavedPost => Boolean(record && !("deleted" in record) && !getBlogPost(record.slug)))
    .map(savedPostView)
    .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));

  for (const sample of blogPosts) {
    const record = records.get(sample.slug);
    if (record && "deleted" in record) continue;
    uploaded.push(record ? savedPostView(record) : sampleView(sample));
  }
  return uploaded;
}

export async function getPublicBlogPost(slug: string) {
  if (!validSlug(slug)) return undefined;
  const client = publicSupabase();
  if (client) return remoteBlog(client, slug);
  const record = await readRecord(slug);
  if (record) return "deleted" in record ? undefined : savedPostView(record);

  const sample = getBlogPost(slug);
  return sample ? sampleView(sample) : undefined;
}

export async function readBlogCover(slug: string) {
  const record = await readRecord(slug);
  if (!record || "deleted" in record || !record.imageType) return undefined;
  try {
    const path = join(/* turbopackIgnore: true */ blogDirectory(), slug, record.coverKey ?? "cover");
    const bytes = await readFile(/* turbopackIgnore: true */ path);
    return { bytes, type: record.imageType };
  } catch (error) {
    if (errorCode(error) === "ENOENT") return undefined;
    throw error;
  }
}

function field(form: FormData, key: string, label: string, max: number, required = true) {
  const raw = form.get(key);
  const value = typeof raw === "string" ? raw.trim() : "";
  if (required && !value) throw new BlogInputError(`Enter ${label}.`);
  if (value.length > max) throw new BlogInputError(`${label} must be at most ${max} characters.`);
  return value;
}

export function imageType(bytes: Buffer) {
  if (bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) return "image/png";
  if (bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255) return "image/jpeg";
  if (bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP") return "image/webp";
  throw new BlogInputError("Choose a JPEG, PNG, or WebP image.");
}

const busyPosts = new Set<string>();

async function writePost<T>(slug: string, work: (directory: string) => Promise<T>) {
  if (!validSlug(slug)) throw new BlogInputError("Use lowercase letters, numbers, and hyphens for the URL slug.");
  if (busyPosts.has(slug)) throw new BlogInputError("This post is being updated. Try again in a moment.");

  busyPosts.add(slug);
  const directory = join(blogDirectory(), slug);
  try {
    await mkdir(directory, { recursive: true });
    const lockPath = join(directory, ".write-lock");
    const lock = await open(lockPath, "wx").catch((error: unknown) => {
      if (errorCode(error) === "EEXIST") throw new BlogInputError("This post is being updated. Try again in a moment.");
      throw error;
    });
    try {
      return await work(directory);
    } finally {
      await lock.close();
      await rm(lockPath, { force: true });
    }
  } finally {
    busyPosts.delete(slug);
  }
}

async function commit(directory: string, record: SavedRecord) {
  const temporary = join(directory, `.post-${randomUUID()}.tmp`);
  try {
    await writeFile(temporary, JSON.stringify(record), { flag: "wx" });
    await rename(temporary, join(/* turbopackIgnore: true */ directory, "post.json"));
  } finally {
    await rm(temporary, { force: true });
  }
}

function discardCover(directory: string, previous?: SavedRecord) {
  if (previous && !("deleted" in previous) && previous.imageType) {
    // The metadata is already committed, so a cleanup failure must not undo it.
    return rm(join(/* turbopackIgnore: true */ directory, previous.coverKey ?? "cover"), { force: true }).catch(() => {});
  }
}

export async function saveBlogPost(form: FormData, edit?: { slug: string; revision: string }) {
  const title = field(form, "title", "a title", 160);
  const customSlug = edit ? "" : field(form, "slug", "URL slug", 100, false);
  const slug = edit?.slug ?? (customSlug || title.toLowerCase().normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").slice(0, 100).replace(/^-|-$/g, ""));

  const categoryInput = field(form, "category", "a category", 40);
  const existingCategory = (await getPublicBlogPosts()).find((post) => post.category.toLowerCase() === categoryInput.toLowerCase());
  const summary = field(form, "summary", "a summary", 300);
  const author = field(form, "author", "an author", 100, false) || "AxStudios";
  const content = field(form, "content", "the article content", 40000);
  const image = form.get("cover");
  const hasImage = image instanceof File && image.size > 0;
  if ((!edit && !hasImage) || (hasImage && image.size > 3 * 1024 * 1024)) {
    throw new BlogInputError("Choose a cover image up to 3 MB.");
  }
  const imageAlt = field(form, "imageAlt", "cover image description", 200, hasImage);
  const bytes = hasImage ? Buffer.from(await image.arrayBuffer()) : undefined;
  const newImageType = bytes ? imageType(bytes) : undefined;

  if (publicSupabase()) {
    if (!validSlug(slug)) throw new BlogInputError("Use lowercase letters, numbers, and hyphens for the URL slug.");
    return saveRemoteBlog({ slug, title, category: existingCategory?.category ?? categoryInput, summary, author, content, imageAlt },
      bytes && newImageType ? { bytes, type: newImageType } : undefined, edit?.revision);
  }

  return writePost(slug, async (directory) => {
    const previous = await readRecord(slug);
    const current = await getPublicBlogPost(slug);
    if (edit) {
      if (!current || current.revision !== edit.revision) {
        throw new BlogInputError("This post changed or was deleted. Reopen it from the blog dashboard.");
      }
    } else if (previous || current) {
      throw new BlogInputError("That URL is already in use. Choose a different slug.");
    }

    const previousPost = previous && !("deleted" in previous) ? previous : undefined;
    const revision = randomUUID();
    const coverKey = bytes ? `cover-${revision}` : previousPost?.coverKey;
    const post: SavedPost = {
      slug, title, summary, author, content, revision, imageAlt, coverKey,
      category: existingCategory?.category ?? categoryInput,
      imageType: newImageType ?? previousPost?.imageType,
      coverSource: bytes ? undefined : current?.coverSource,
      publishedAt: edit ? current?.publishedAt : new Date().toISOString(),
    };

    if (bytes && coverKey) await writeFile(join(directory, coverKey), bytes, { flag: "wx" });
    try {
      await commit(directory, post);
    } catch (error) {
      if (bytes && coverKey) await rm(join(directory, coverKey), { force: true });
      throw error;
    }
    if (bytes) await discardCover(directory, previousPost);
    return slug;
  });
}

export async function deleteBlogPost(slug: string, revision: string) {
  if (publicSupabase()) return deleteRemoteBlog(slug, revision);
  return writePost(slug, async (directory) => {
    const previous = await readRecord(slug);
    const current = await getPublicBlogPost(slug);
    if (!current || current.revision !== revision) {
      throw new BlogInputError("This post changed or was already deleted. Refresh the blog dashboard.");
    }
    await commit(directory, { deleted: true });
    await discardCover(directory, previous);
  });
}
