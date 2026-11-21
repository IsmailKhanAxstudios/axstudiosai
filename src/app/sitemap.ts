import type { MetadataRoute } from "next";
import { getPublicBlogPosts } from "@/lib/blogStore";
import { getPublicServices } from "@/lib/catalogStore";
import { getCaseStudies } from "@/lib/caseStudies";
import { absoluteUrl, publicPages } from "@/lib/seo";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, services, studies] = await Promise.all([getPublicBlogPosts(), getPublicServices(), getCaseStudies()]);
  return [
    ...publicPages.map((path) => ({ url: absoluteUrl(path) })),
    ...services.map((service) => ({ url: absoluteUrl(service.href) })),
    ...posts.map((post) => ({ url: absoluteUrl(`/blogs/${post.slug}`), lastModified: post.publishedAt })),
    ...studies.map(({ slug, created_at }) => ({ url: absoluteUrl(`/case-studies/${slug}`), lastModified: created_at })),
  ];
}
