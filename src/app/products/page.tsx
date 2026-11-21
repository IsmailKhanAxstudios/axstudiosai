import { pageMetadata } from "@/lib/seo";
import { connection } from "next/server";
import ProductsSection from "@/components/sections/ProductsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";

export const metadata = pageMetadata(
  "/products",
  "Software Products & Micro-SaaS",
  "Explore software products from AxStudios, including DomiumPro for property management, and preview micro-SaaS product concepts.",
);

export default async function ProductsPage() {
  await connection();
  return (
    <>
      <ProductsSection />
      <CaseStudiesSection related="products" />
    </>
  );
}
