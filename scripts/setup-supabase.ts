import { readFile, readdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import { createClient } from "@supabase/supabase-js";
import { loadEnvConfig } from "@next/env";
import { blogPosts } from "../src/lib/blogPosts";
import { defaultProducts, defaultServices } from "../src/lib/catalogDefaults";

loadEnvConfig(process.cwd());
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const secret = process.env.SUPABASE_SECRET_KEY;
const email = "admin@axstudios.tech";
const password = process.env.AXSTUDIOS_BOOTSTRAP_PASSWORD;
const directory = resolve(process.env.AXSTUDIOS_BLOG_DIR ?? ".axstudios-data/blogs");

if (!url || !secret || !password) throw new Error("Configure the Supabase URL, server-only secret key, and temporary AXSTUDIOS_BOOTSTRAP_PASSWORD first.");

const client = createClient(url, secret, {
  auth: { autoRefreshToken: false, persistSession: false, detectSessionInUrl: false },
});
const media = client.storage.from("axstudios-media");
const slugFor = (title: string) => title.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

async function readSnapshot<T>(path: string, filename: string) {
  const entries = await readdir(path, { withFileTypes: true }).catch((error: NodeJS.ErrnoException) => {
    if (error.code === "ENOENT") return [];
    throw error;
  });
  const records = new Map<string, T>();
  for (const entry of entries) {
    if (!entry.isDirectory() || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.name)) continue;
    const record = await readFile(join(path, entry.name, filename), "utf8").catch((error: NodeJS.ErrnoException) => {
      if (error.code !== "ENOENT") throw error;
    });
    if (record) records.set(entry.name, JSON.parse(record));
  }
  return records;
}

async function upload(objectPath: string, path: string, contentType: string) {
  const { error } = await media.upload(objectPath, await readFile(path), { contentType, upsert: false });
  if (error && error.statusCode !== "409") throw error;
  return objectPath;
}

async function missing(table: string, slug: string) {
  const { data, error } = await client.from(table).select("slug").eq("slug", slug).maybeSingle();
  if (error) throw error;
  return !data;
}

async function seed(table: string, row: Record<string, unknown>) {
  const { error } = await client.from(table).upsert(row, { onConflict: "slug", ignoreDuplicates: true });
  if (error) throw error;
}

type LocalBlog = {
  deleted?: boolean; revision?: string; title: string; category: string; summary: string; author: string;
  content: string; imageAlt: string; imageType?: string; coverKey?: string; publishedAt?: string; coverSource?: string;
};
type LocalService = { name: string; category: string; description: string; features: string[]; createdAt: string };
type LocalProduct = { name: string; description: string; imageAlt: string; imageType: string; website?: string; createdAt: string };

async function main() {
  const managementToken = process.env.SUPABASE_ACCESS_TOKEN;
  if (managementToken) {
    const projectHost = new URL(url!).hostname;
    if (!/^[a-z0-9]+\.supabase\.co$/.test(projectHost)) throw new Error("Use the hosted Supabase project URL.");
    const ref = projectHost.split(".")[0];
    const response = await fetch(`https://api.supabase.com/v1/projects/${ref}/config/auth`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${managementToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        site_url: "https://axstudios.tech",
        uri_allow_list: [
          "http://localhost:3000/admin/login",
          "https://axstudios.tech/admin/login",
          "https://axstudiostech.netlify.app/admin/login",
        ].join(","),
        disable_signup: true,
      }),
    });
    if (!response.ok) throw new Error(`Supabase Auth settings could not be configured (HTTP ${response.status}).`);
  }

  const priorBlogs = await readSnapshot<LocalBlog>(directory, "post.json");
  for (const [index, sample] of blogPosts.entries()) {
    if (!(await missing("blog_posts", sample.slug))) continue;
    const prior = priorBlogs.get(sample.slug);
    const objectPath = prior?.deleted ? null : prior?.imageType
      ? await upload(`blogs/${sample.slug}/imported`, join(directory, sample.slug, prior.coverKey ?? "cover"), prior.imageType)
      : await upload(`blogs/${sample.slug}/sample.webp`, join("public", "blogs", `${sample.slug}.webp`), "image/webp");
    await seed("blog_posts", {
      slug: sample.slug, title: prior?.title ?? sample.title, category: prior?.category ?? sample.category,
      summary: prior?.summary ?? sample.summary, author: prior?.author ?? "AxStudios",
      content: prior?.content ?? sample.sections.map(({ heading, body }) => `## ${heading}\n\n${body}`).join("\n\n"),
      image_path: objectPath, image_alt: prior?.imageAlt ?? "",
      cover_source: prior?.imageType ? null : prior?.coverSource ?? sample.coverSource,
      published_at: prior?.publishedAt ?? null, deleted_at: prior?.deleted ? new Date().toISOString() : null, sort_order: index,
    });
  }
  const sampleSlugs = new Set(blogPosts.map(({ slug }) => slug));
  for (const [slug, post] of priorBlogs) {
    if (sampleSlugs.has(slug) || post.deleted || !(await missing("blog_posts", slug))) continue;
    const path = post.imageType ? await upload(`blogs/${slug}/imported`, join(directory, slug, post.coverKey ?? "cover"), post.imageType) : null;
    await seed("blog_posts", {
      slug, title: post.title, category: post.category, summary: post.summary, author: post.author, content: post.content,
      image_path: path, image_alt: post.imageAlt, cover_source: post.coverSource, published_at: post.publishedAt,
    });
  }
  for (const [index, service] of defaultServices.entries()) {
    const slug = "id" in service ? service.id : service.href.split("/").at(-1) ?? slugFor(service.title);
    await seed("services", {
      slug, title: service.title, description: service.description, category: service.category,
      features: service.features, icon: service.icon, href: service.href,
      link_label: "linkLabel" in service ? service.linkLabel : null, sort_order: index,
    });
  }
  for (const [slug, service] of await readSnapshot<LocalService>(join(directory, "_catalog", "services"), "entry.json")) {
    await seed("services", {
      slug, title: service.name, category: service.category, description: service.description,
      features: service.features, link_label: "Discuss this service", created_at: service.createdAt,
    });
  }
  for (const [index, product] of defaultProducts.entries()) {
    const slug = slugFor(product.name);
    if (!(await missing("products", slug))) continue;
    const path = await upload(`products/${slug}/${product.image.split("/").at(-1)}`, join("public", product.image.slice(1)), product.image.endsWith(".png") ? "image/png" : "image/webp");
    await seed("products", {
      slug, name: product.name, description: "description" in product ? product.description : null,
      image_path: path, image_alt: "imageAlt" in product ? product.imageAlt : "",
      sample: "sample" in product && product.sample, sort_order: index === 0 ? 0 : 100 + index,
    });
  }
  const productsPath = join(directory, "_catalog", "products");
  for (const [slug, product] of await readSnapshot<LocalProduct>(productsPath, "entry.json")) {
    if (!(await missing("products", slug))) continue;
    const path = await upload(`products/${slug}/imported`, join(productsPath, slug, "cover"), product.imageType);
    await seed("products", {
      slug, name: product.name, description: product.description, image_path: path, image_alt: product.imageAlt,
      website: product.website, created_at: product.createdAt,
    });
  }

  const { data, error } = await client.auth.admin.listUsers({ page: 1, perPage: 100 });
  if (error) throw error;
  const existing = data.users.find((user) => user.email?.toLowerCase() === email);
  const result = existing
    ? await client.auth.admin.updateUserById(existing.id, { password, email_confirm: true, app_metadata: { ...existing.app_metadata, axstudios_role: "admin" } })
    : await client.auth.admin.createUser({ email, password, email_confirm: true, app_metadata: { axstudios_role: "admin" } });
  if (result.error) throw result.error;
  console.log("Supabase content, images, and admin account are ready.");
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
