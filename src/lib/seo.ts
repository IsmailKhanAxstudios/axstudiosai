import type { Metadata } from "next";
import { siteOrigin } from "@/lib/site";

export const organizationId = `${siteOrigin}/#organization`;
export const websiteId = `${siteOrigin}/#website`;
export const defaultSocialImage = "/opengraph-image";

export const homeSearchTitle = "AI Automation Agency in Dubai";
export const homeSearchDescription =
  "AxStudios is a Dubai AI automation agency building custom AI agents, business workflow integrations, AI-powered web apps, SaaS products, and startup MVPs.";

const keywordsByPath: Record<string, string[]> = {
  "/": [
    "AxStudios", "Ax Studios", "AI automation agency Dubai", "AI automation UAE",
    "business workflow automation", "custom AI agents", "AI integration services",
    "CRM automation", "AI consulting Dubai", "AI automation audit",
    "LLM cost optimization", "AI-powered web applications", "custom software development",
    "SaaS development", "MVP development",
  ],
  "/about": ["AxStudios Dubai", "AI automation company UAE", "AI software development agency Dubai"],
  "/services": ["AI automation services", "AI agent development", "CRM and ERP integration", "AI strategy consulting", "LLM optimization", "custom SaaS development", "MVP development agency"],
  "/solutions": ["AI automation use cases", "lead routing automation", "customer support automation", "back-office automation", "workflow automation ROI calculator"],
  "/products": ["DomiumPro", "property management software", "micro-SaaS products", "approval workflow software", "product feedback dashboard"],
  "/case-studies": ["AI automation case studies", "workflow automation examples", "custom software projects", "SaaS development case studies"],
  "/blogs": ["AI blog", "software development articles", "AI tools", "product engineering", "business and market insights"],
  "/contact": ["AI strategy call", "AI automation consultation Dubai", "hire an AI development agency"],
  "/newsletter": ["AI automation newsletter", "LLM cost optimization tips", "SaaS development insights"],
  "/services/ai-automation": ["business process automation", "AI workflow automation", "CRM automation", "lead routing automation"],
  "/services/ai-agents": ["custom AI agent development", "AI support agents", "knowledge base automation", "human-in-the-loop AI"],
  "/services/ai-web-applications": ["AI web application development", "AI customer portals", "AI dashboards", "document summarization"],
  "/services/custom-ai-saas-development": ["custom AI SaaS development", "SaaS product development", "AI software development", "internal business tools"],
  "/services/ai-automation-audit": ["AI automation audit", "workflow assessment", "automation roadmap", "AI readiness assessment"],
  "/services/ai-consultancy": ["AI consulting Dubai", "AI strategy consulting", "AI vendor evaluation", "enterprise AI pilot"],
  "/services/ai-integration": ["AI integration services", "CRM integration", "ERP integration", "API integration", "data pipelines"],
  "/services/ai-maintenance": ["AI system monitoring", "AI maintenance services", "LLM observability", "workflow error monitoring"],
  "/services/chrome-extensions": ["custom Chrome extension development", "Chrome browser automation", "Chrome Web Store submission"],
  "/services/mvp-development": ["MVP development for startups", "SaaS MVP development", "minimum viable product", "startup product launch"],
  "/services/ai-cost-optimization": ["LLM cost optimization", "AI FinOps", "AI token costs", "model routing", "prompt caching", "LLM latency optimization"],
};

export function absoluteUrl(path: string) {
  return new URL(path, siteOrigin).href;
}

export function pageMetadata(path: string, title: string, description: string, image?: string): Metadata {
  const branded = `${title} | AxStudios`;
  const url = absoluteUrl(path);
  const socialImage = absoluteUrl(image ?? defaultSocialImage);
  const openGraphImage = image
    ? socialImage
    : { url: socialImage, width: 1200, height: 630, alt: "AxStudios AI automation and custom software" };
  return {
    title: branded,
    description,
    keywords: keywordsByPath[path] ?? [],
    alternates: { canonical: url },
    openGraph: { type: "website", locale: "en_US", siteName: "AxStudios", title: branded, description, url, images: [openGraphImage] },
    twitter: { card: "summary_large_image", title: branded, description, images: [socialImage] },
  };
}

export function articleMetadata(path: string, title: string, description: string, image?: string, publishedTime?: string, keywords: string[] = []): Metadata {
  const base = pageMetadata(path, title, description, image);
  return { ...base, keywords, openGraph: { ...base.openGraph, type: "article", publishedTime } };
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
