import { pageMetadata } from "@/lib/seo";
import { connection } from "next/server";
import ProductsSection from "@/components/sections/ProductsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";

export const metadata = pageMetadata(
  "/products",
  "Property Management Software & Micro-SaaS Products",
  "Explore DomiumPro property management software and AxStudios micro-SaaS concepts for workflow approvals, project briefs, and product feedback.",
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
