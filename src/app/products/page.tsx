import type { Metadata } from "next";
import ProductsSection from "@/components/sections/ProductsSection";

export const metadata: Metadata = {
  title: "Our Products | AxStudios",
  description: "Explore products from AxStudios, starting with DomiumPro.",
};

export default function ProductsPage() {
  return <ProductsSection />;
}
