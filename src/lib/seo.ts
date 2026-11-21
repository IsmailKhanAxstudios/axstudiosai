import type { Metadata } from "next";
import { siteOrigin } from "@/lib/site";

export const organizationId = `${siteOrigin}/#organization`;
export const websiteId = `${siteOrigin}/#website`;

export function absoluteUrl(path: string) {
  return new URL(path, siteOrigin).href;
}

export function pageMetadata(path: string, title: string, description: string, image?: string): Metadata {
  const branded = `${title} | AxStudios`;
  const url = absoluteUrl(path);
  return {
    title: branded,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", siteName: "AxStudios", title: branded, description, url, ...(image ? { images: [absoluteUrl(image)] } : {}) },
    twitter: { card: image ? "summary_large_image" : "summary", title: branded, description, ...(image ? { images: [absoluteUrl(image)] } : {}) },
  };
}

export function articleMetadata(path: string, title: string, description: string, image?: string, publishedTime?: string): Metadata {
  const base = pageMetadata(path, title, description, image);
  return { ...base, openGraph: { ...base.openGraph, type: "article", publishedTime } };
}

export const publicPages = [
  "/", "/about", "/services", "/solutions", "/products", "/case-studies", "/blogs", "/contact",
  "/newsletter", "/privacy-policy", "/terms-and-conditions",
] as const;
