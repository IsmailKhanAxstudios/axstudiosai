import { sessionSupabase, publicSupabase } from "@/lib/supabaseServer";
import { publicImage } from "@/lib/supabaseContent";

export type ManagedKind = "services" | "products" | "case-studies";
export const managedKinds = { services: "service", products: "product", "case-studies": "case study" } as const;

export function isManagedKind(kind: string): kind is ManagedKind {
  return Object.hasOwn(managedKinds, kind);
}

export function catalogTable(kind: ManagedKind) {
  return kind === "case-studies" ? "case_studies" : kind;
}

export type ManagedEntry = {
  slug: string; revision: string; name: string; description?: string; category?: string; features?: string[];
  image?: string; imageAlt?: string; website?: string; client?: string; challenge?: string;
  approach?: string; results?: string; service?: string; product?: string;
};

export async function getManagedEntries(kind: ManagedKind, slug?: string): Promise<ManagedEntry[]> {
  const [client, images] = await Promise.all([sessionSupabase(), Promise.resolve(publicSupabase())]);
  if (!client || !images) return [];
  let query = client.from(catalogTable(kind)).select("*").is("deleted_at", null);
  if (slug) query = query.eq("slug", slug);
  const { data } = await query.order("created_at", { ascending: false }).order("slug").throwOnError();
  return (data ?? []).map((entry) => ({
    slug: entry.slug, revision: entry.revision, name: entry.title ?? entry.name,
    description: entry.description ?? entry.summary ?? undefined, category: entry.category ?? undefined, features: entry.features,
    image: entry.image_path ? publicImage(images, entry.image_path) : undefined,
    imageAlt: entry.image_alt ?? undefined, website: entry.website ?? undefined, client: entry.client_name ?? undefined,
    challenge: entry.challenge, approach: entry.approach, results: entry.results,
    service: entry.service_slug ?? undefined, product: entry.product_slug ?? undefined,
  }));
}
