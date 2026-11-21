import { randomUUID } from "node:crypto";
import { mediaBucket, publicSupabase, sessionSupabase } from "@/lib/supabaseServer";

type PublicClient = NonNullable<ReturnType<typeof publicSupabase>>;
type WritableClient = NonNullable<Awaited<ReturnType<typeof sessionSupabase>>>;

type BlogRow = {
  slug: string; revision: string; title: string; category: string; summary: string; author: string;
  content: string; image_path: string | null; image_alt: string; cover_source: string | null;
  published_at: string | null;
};

const blogColumns = "slug,revision,title,category,summary,author,content,image_path,image_alt,cover_source,published_at";

export class ContentConflict extends Error {}

export function publicImage(client: PublicClient, path: string) {
  return client.storage.from(mediaBucket).getPublicUrl(path).data.publicUrl;
}

function mapBlog(client: PublicClient, row: BlogRow) {
  return {
    slug: row.slug, revision: row.revision, title: row.title, category: row.category,
    summary: row.summary, author: row.author, content: row.content, imageAlt: row.image_alt,
    imageUrl: row.image_path ? publicImage(client, row.image_path) : `/blogs/${row.slug}.webp`,
    publishedAt: row.published_at ?? undefined,
    coverSource: row.cover_source ?? undefined,
  };
}

export async function remoteBlogs(client: PublicClient) {
  const { data } = await client.from("blog_posts").select(blogColumns).is("deleted_at", null)
    .order("published_at", { ascending: false, nullsFirst: false }).order("sort_order").order("slug").throwOnError();
  return (data ?? []).map((row) => mapBlog(client, row));
}

export async function remoteBlog(client: PublicClient, slug: string) {
  const { data } = await client.from("blog_posts").select(blogColumns).eq("slug", slug)
    .is("deleted_at", null).maybeSingle().throwOnError();
  return data ? mapBlog(client, data) : undefined;
}

async function writableClient() {
  const client = await sessionSupabase();
  if (!client) throw new Error("Supabase session is unavailable");
  return client;
}

async function uploadImage(client: WritableClient, folder: string, slug: string, bytes: Buffer, type: string) {
  const path = `${folder}/${slug}/${randomUUID()}`;
  const { error } = await client.storage.from(mediaBucket).upload(path, bytes, { contentType: type, upsert: false });
  if (error) throw error;
  return path;
}

async function discardImage(client: WritableClient, path: string | null | undefined) {
  if (path) {
    const { error } = await client.storage.from(mediaBucket).remove([path]);
    if (error) console.error("Supabase image cleanup failed", error.message);
  }
}

export async function saveRemoteBlog(
  post: { slug: string; title: string; category: string; summary: string; author: string; content: string; imageAlt: string },
  image?: { bytes: Buffer; type: string },
  revision?: string,
) {
  const client = await writableClient();
  const table = client.from("blog_posts");
  const current = revision ? (await table.select("image_path,cover_source").eq("slug", post.slug)
    .eq("revision", revision).is("deleted_at", null).maybeSingle().throwOnError()).data : undefined;
  if (revision && !current) throw new ContentConflict("This post changed or was deleted. Reopen it from the dashboard.");

  const newPath = image ? await uploadImage(client, "blogs", post.slug, image.bytes, image.type) : undefined;
  const values = {
    title: post.title, category: post.category, summary: post.summary, author: post.author, content: post.content,
    image_alt: post.imageAlt, revision: randomUUID(),
    image_path: newPath ?? current?.image_path ?? null,
    cover_source: newPath ? null : current?.cover_source ?? null,
  };

  const result = revision
    ? await table.update(values).eq("slug", post.slug).eq("revision", revision).is("deleted_at", null).select("slug").maybeSingle()
    : await table.insert({ ...values, slug: post.slug, published_at: new Date().toISOString() }).select("slug").single();
  if (result.error || !result.data) {
    await discardImage(client, newPath);
    if (result.error?.code === "23505") throw new ContentConflict("That URL is already in use. Choose a different slug.");
    if (result.error) throw result.error;
    throw new ContentConflict("This post changed or was deleted. Reopen it from the dashboard.");
  }
  if (newPath) await discardImage(client, current?.image_path);
  return post.slug;
}

export async function deleteRemoteBlog(slug: string, revision: string) {
  const client = await writableClient();
  const { data } = await client.from("blog_posts").update({ deleted_at: new Date().toISOString(), revision: randomUUID() })
    .eq("slug", slug).eq("revision", revision).is("deleted_at", null).select("image_path").maybeSingle().throwOnError();
  if (!data) throw new ContentConflict("This post changed or was already deleted. Refresh the dashboard.");
  await discardImage(client, data.image_path);
}

type CatalogTable = "services" | "products" | "case_studies";

export async function saveRemoteCatalog(
  tableName: CatalogTable,
  slug: string,
  values: Record<string, unknown>,
  image?: { bytes: Buffer; type: string },
  revision?: string,
) {
  const client = await writableClient();
  const table = client.from(tableName);
  const previous = revision
    ? (await table.select(tableName === "services" ? "slug" : "slug,image_path")
        .eq("slug", slug).eq("revision", revision).is("deleted_at", null).maybeSingle().throwOnError()).data
    : undefined;
  if (revision && !previous) throw new ContentConflict("This entry changed or was deleted. Reopen it from the dashboard.");

  const oldPath = previous && "image_path" in previous ? previous.image_path as string | null : null;
  const folder = tableName === "case_studies" ? "case-studies" : tableName;
  const path = image ? await uploadImage(client, folder, slug, image.bytes, image.type) : undefined;
  const changes = { ...values, revision: randomUUID(), ...(path ? { image_path: path } : {}) };
  const result = revision
    ? await table.update(changes).eq("slug", slug).eq("revision", revision).is("deleted_at", null).select("slug").maybeSingle()
    : await table.insert({ ...changes, slug }).select("slug").single();
  if (result.error || !result.data) {
    await discardImage(client, path);
    if (result.error?.code === "23505") throw new ContentConflict("An entry with that name already exists.");
    if (result.error?.code === "23503") throw new ContentConflict("The selected service or product is no longer available.");
    if (result.error) throw result.error;
    throw new ContentConflict("This entry changed or was deleted. Reopen it from the dashboard.");
  }
  if (path) await discardImage(client, oldPath);
}

export async function deleteRemoteCatalog(tableName: CatalogTable, slug: string, revision: string) {
  const client = await writableClient();
  const { data } = await client.from(tableName).update({ deleted_at: new Date().toISOString(), revision: randomUUID() })
    .eq("slug", slug).eq("revision", revision).is("deleted_at", null)
    .select(tableName === "services" ? "slug" : "slug,image_path").maybeSingle().throwOnError();
  if (!data) throw new ContentConflict("This entry changed or was already deleted. Refresh the dashboard.");
  if ("image_path" in data) await discardImage(client, data.image_path as string | null);
}
