import type { MetadataRoute } from "next";
import { getPublicBlogPosts } from "@/lib/blogStore";
import { getPublicServices } from "@/lib/catalogStore";
import { getCaseStudies } from "@/lib/caseStudies";
import { absoluteUrl, publicPages } from "@/lib/seo";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, services, studies] = await Promise.all([getPublicBlogPosts(), getPublicServices(), getCaseStudies()]);
  return [
    ...publicPages.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: path === "/blogs" || path === "/case-studies" ? "weekly" as const : path === "/privacy-policy" || path === "/terms-and-conditions" ? "yearly" as const : "monthly" as const,
      priority: path === "/" ? 1 : path === "/services" || path === "/products" || path === "/solutions" ? 0.9 : path === "/privacy-policy" || path === "/terms-and-conditions" ? 0.3 : 0.7,
    })),
    ...services.map((service) => ({ url: absoluteUrl(service.href), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...posts.map((post) => ({ url: absoluteUrl(`/blogs/${post.slug}`), images: post.imageUrl ? [absoluteUrl(post.imageUrl)] : [], changeFrequency: "yearly" as const, priority: 0.7 })),
    ...studies.map(({ slug, image }) => ({ url: absoluteUrl(`/case-studies/${slug}`), images: image ? [image] : [], changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
