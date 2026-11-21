import { catalogField, slugFor } from "@/lib/catalogStore";
import { BlogInputError, imageType } from "@/lib/blogStore";
import { publicImage, saveRemoteCatalog } from "@/lib/supabaseContent";
import { publicSupabase } from "@/lib/supabaseServer";

export async function getCaseStudies(related?: "services" | "products", slug?: string) {
  const client = publicSupabase();
  if (!client) return [];

  let query = client.from("case_studies")
    .select("slug,title,summary,client_name,challenge,approach,results,image_path,image_alt,service_slug,product_slug,created_at")
    .is("deleted_at", null);
  if (slug) query = query.eq("slug", slug);
  if (related === "services") query = query.not("service_slug", "is", null);
  if (related === "products") query = query.not("product_slug", "is", null);

  const { data } = await query.order("created_at", { ascending: false }).throwOnError();
  const entries = data ?? [];
  if (related) {
    const idColumn = related === "services" ? "service_slug" : "product_slug";
    const linked = [...new Set(entries.map((entry) => entry[idColumn]).filter(Boolean))];
    if (!linked.length) return [];
    const { data: active } = await client.from(related).select("slug").in("slug", linked).is("deleted_at", null).throwOnError();
    const available = new Set((active ?? []).map((entry) => entry.slug));
    return entries.filter((entry) => available.has(entry[idColumn])).map(withImage);
  }
  return entries.map(withImage);

  function withImage(row: (typeof entries)[number]) {
    return { ...row, image: row.image_path ? publicImage(client!, row.image_path) : undefined };
  }
}

export async function saveCaseStudy(form: FormData, edit?: { slug: string; revision: string }) {
  const field = catalogField;
  const title = field(form, "name", "a title", 100);
  const slug = edit?.slug ?? slugFor(title);
  if (!slug) throw new BlogInputError("Use a title containing letters or numbers.");
  const cover = form.get("cover");
  const hasCover = cover instanceof File && cover.size > 0;
  if (hasCover && cover.size > 3 * 1024 * 1024) throw new BlogInputError("Choose a cover image up to 3 MB.");
  const bytes = hasCover ? Buffer.from(await cover.arrayBuffer()) : undefined;
  return saveRemoteCatalog("case_studies", slug, {
    title,
    summary: field(form, "description", "a summary", 400),
    client_name: field(form, "client", "a client name", 120, false) || null,
    challenge: field(form, "challenge", "the challenge", 8000),
    approach: field(form, "approach", "the approach", 8000),
    results: field(form, "results", "the results", 8000),
    image_alt: field(form, "imageAlt", "a cover image description", 200, hasCover),
    service_slug: field(form, "service", "a service", 100, false) || null,
    product_slug: field(form, "product", "a product", 100, false) || null,
  }, bytes ? { bytes, type: imageType(bytes) } : undefined, edit?.revision);
}
