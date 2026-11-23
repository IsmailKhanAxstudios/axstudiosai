import type { Metadata } from "next";
import { siteOrigin } from "@/lib/site";

export const organizationId = `${siteOrigin}/#organization`;
export const websiteId = `${siteOrigin}/#website`;
export const defaultSocialImage = "/opengraph-image";

export function absoluteUrl(path: string) {
  return new URL(path, siteOrigin).href;
}

export function pageMetadata(path: string, title: string, description: string, image?: string): Metadata {
  const branded = `${title} | AxStudios`;
  const url = absoluteUrl(path);
  const socialImage = absoluteUrl(image ?? defaultSocialImage);
  return {
    title: branded,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", locale: "en_US", siteName: "AxStudios", title: branded, description, url, images: [socialImage] },
    twitter: { card: "summary_large_image", title: branded, description, images: [socialImage] },
  };
}

export function articleMetadata(path: string, title: string, description: string, image?: string, publishedTime?: string): Metadata {
  const base = pageMetadata(path, title, description, image);
  return { ...base, openGraph: { ...base.openGraph, type: "article", publishedTime } };
}

export function breadcrumbData(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}

export const publicPages = [
  "/", "/about", "/services", "/solutions", "/products", "/case-studies", "/blogs", "/contact",
  "/newsletter", "/privacy-policy", "/terms-and-conditions",
] as const;
