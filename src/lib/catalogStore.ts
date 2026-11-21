import { mkdir, mkdtemp, readdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { blogDirectory, BlogInputError, imageType } from "@/lib/blogStore";
import { defaultProducts, defaultServices } from "@/lib/catalogDefaults";
import { publicSupabase } from "@/lib/supabaseServer";
import { publicImage, saveRemoteCatalog } from "@/lib/supabaseContent";

export type CatalogKind = "services" | "products";
type Entry = { slug: string; name: string; description: string; createdAt: string };
type SavedService = Entry & { category: string; features: string[] };
type SavedProduct = Entry & { imageAlt: string; imageType: string; website?: string };

export type PublicService = {
  title: string;
  description: string;
  category: string;
  features: readonly string[];
  icon: (typeof defaultServices)[number]["icon"] | "Sparkles";
  href: string;
  id?: string;
  linkLabel?: string;
};

type PublicProduct = {
  slug?: string;
  name: string;
  image: string;
  imageAlt?: string;
  description?: string;
  sample?: boolean;
  website?: string;
};

function directory(kind: CatalogKind) {
  return join(/* turbopackIgnore: true */ blogDirectory(), "_catalog", kind);
}

function isMissing(error: unknown) {
  return (error as NodeJS.ErrnoException).code === "ENOENT";
}

export function slugFor(title: string) {
  return title.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").slice(0, 100).replace(/^-|-$/g, "");
}

async function readEntries<T extends Entry>(kind: CatalogKind): Promise<T[]> {
  const root = directory(kind);
  try {
    const entries = (await readdir(/* turbopackIgnore: true */ root, { withFileTypes: true }))
      .filter((entry) => !entry.name.startsWith(".") && entry.isDirectory());
    const records = await Promise.all(entries.map(async ({ name }) =>
      JSON.parse(await readFile(join(/* turbopackIgnore: true */ root, name, "entry.json"), "utf8")) as T,
    ));
    return records.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  } catch (error) {
    if (isMissing(error)) return [];
    throw error;
  }
}

export async function getPublicServices(): Promise<PublicService[]> {
  const client = publicSupabase();
  if (client) {
    const { data } = await client.from("services").select("slug,title,category,description,features,icon,href,link_label")
      .is("deleted_at", null).order("sort_order").order("created_at", { ascending: false }).order("slug").throwOnError();
    return (data ?? []).map(({ slug, ...service }) => ({
      ...service, id: slug, href: `/services/${slug}`, linkLabel: "Explore service",
    }));
  }
  const added = await readEntries<SavedService>("services");
  return [
    ...defaultServices.map((service) => {
      const id = "id" in service ? service.id : service.href.split("/").at(-1) ?? slugFor(service.title);
      return { ...service, id, href: `/services/${id}`, linkLabel: "Explore service" };
    }),
    ...added.map((service): PublicService => ({
      id: service.slug,
      title: service.name,
      description: service.description,
      category: service.category,
      features: service.features,
      icon: "Sparkles",
      href: `/services/${service.slug}`,
      linkLabel: "Explore service",
    })),
  ];
}

export async function getPublicProducts(): Promise<PublicProduct[]> {
  const client = publicSupabase();
  if (client) {
    const { data } = await client.from("products").select("slug,name,description,image_path,image_alt,sample,website")
      .is("deleted_at", null).order("sort_order").order("created_at", { ascending: false }).order("name").throwOnError();
    return (data ?? []).map((product) => ({
      slug: product.slug, name: product.name, description: product.description ?? undefined,
      image: publicImage(client, product.image_path), imageAlt: product.image_alt,
      sample: product.sample, website: product.website ?? undefined,
    }));
  }
  const added = await readEntries<SavedProduct>("products");
  return [
    defaultProducts[0],
    ...added.map((product) => ({
      name: product.name,
      description: product.description,
      image: `/api/product-covers/${product.slug}`,
      imageAlt: product.imageAlt,
      website: product.website,
    })),
    ...defaultProducts.slice(1),
  ];
}

export async function readProductCover(slug: string) {
  if (slug.length > 100 || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return undefined;
  const root = directory("products");
  try {
    const entry = JSON.parse(await readFile(join(/* turbopackIgnore: true */ root, slug, "entry.json"), "utf8")) as SavedProduct;
    const path = join(/* turbopackIgnore: true */ root, slug, "cover");
    const bytes = await readFile(/* turbopackIgnore: true */ path);
    return { bytes, type: entry.imageType };
  } catch (error) {
    if (isMissing(error)) return undefined;
    throw error;
  }
}

export function catalogField(form: FormData, key: string, label: string, max: number, required = true) {
  const raw = form.get(key);
  const value = typeof raw === "string" ? raw.trim() : "";
  if (!value && required) throw new BlogInputError(`Enter ${label}.`);
  if (value.length > max) throw new BlogInputError(`Use at most ${max} characters for ${label}.`);
  return value;
}

function productWebsite(value: string) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if (["https:", "http:"].includes(url.protocol) && !url.username && !url.password) return url.href;
  } catch {
    // Show the same error for malformed and unsupported URLs.
  }
  throw new BlogInputError("Enter a product website that starts with https:// or http://.");
}

export async function createCatalogEntry(kind: CatalogKind, form: FormData, edit?: { slug: string; revision: string }) {
  const field = catalogField;
  const name = field(form, "name", "a name", 100);
  const slug = edit?.slug ?? slugFor(name);
  if (edit && !publicSupabase()) throw new BlogInputError("Connect Supabase to edit catalog entries.");
  if (!slug) throw new BlogInputError("Use a name containing letters or numbers.");

  const existingEntries = kind === "services"
    ? (await getPublicServices()).map(({ title, id }) => ({ name: title, id }))
    : (await getPublicProducts()).map((product) => ({ name: product.name, id: product.slug }));
  if (existingEntries.some((entry) => (!edit || entry.id !== edit.slug) && slugFor(entry.name) === slugFor(name))) {
    throw new BlogInputError("An entry with that name already exists.");
  }

  const base = {
    slug, name, description: field(form, "description", "a description", 400, kind === "services" || !edit),
    createdAt: new Date().toISOString(),
  };

  let entry: SavedService | SavedProduct;
  let cover: Buffer | undefined;
  if (kind === "services") {
    const features = field(form, "features", "features", 1200, false)
      .split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    if (features.length > 8 || features.some((feature) => feature.length > 150)) {
      throw new BlogInputError("Enter up to eight features, with at most 150 characters per line.");
    }
    entry = { ...base, category: field(form, "category", "a category", 40), features };
  } else {
    const upload = form.get("cover");
    const hasCover = upload instanceof File && upload.size > 0;
    if ((!edit && !hasCover) || (hasCover && upload.size > 3 * 1024 * 1024)) {
      throw new BlogInputError("Choose a cover image up to 3 MB.");
    }
    if (hasCover) cover = Buffer.from(await upload.arrayBuffer());
    entry = {
      ...base,
      imageAlt: field(form, "imageAlt", "a cover image description", 200, hasCover),
      imageType: cover ? imageType(cover) : "",
      website: productWebsite(field(form, "website", "a product website", 500, false)),
    };
  }

  if (publicSupabase()) {
    if ("features" in entry) {
      return saveRemoteCatalog("services", slug, {
        title: name, description: entry.description, category: entry.category, features: entry.features,
        ...(!edit ? { link_label: "Discuss this service" } : {}),
      }, undefined, edit?.revision);
    }
    return saveRemoteCatalog("products", slug, {
      name, description: entry.description || null, image_alt: entry.imageAlt, website: entry.website ?? null,
    }, cover ? { bytes: cover, type: entry.imageType } : undefined, edit?.revision);
  }

  const root = directory(kind);
  await mkdir(root, { recursive: true });
  const staging = await mkdtemp(join(/* turbopackIgnore: true */ root, ".draft-"));
  const destination = join(/* turbopackIgnore: true */ root, slug);
  try {
    await writeFile(join(staging, "entry.json"), JSON.stringify(entry));
    if (cover) await writeFile(join(staging, "cover"), cover);
    try {
      await rename(staging, destination);
    } catch (error) {
      const duplicate = await readFile(join(/* turbopackIgnore: true */ destination, "entry.json"), "utf8")
        .catch((readError: unknown) => { if (!isMissing(readError)) throw readError; });
      if (duplicate) throw new BlogInputError("An entry with that name already exists.");
      throw error;
    }
  } finally {
    await rm(staging, { recursive: true, force: true });
  }
}
