import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/hero/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import AIWorkflowCanvas from "@/components/sections/AIWorkflowCanvas";
import ProductsSection from "@/components/sections/ProductsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ExploreWithAI from "@/components/blog/ExploreWithAI";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExploreWithAI company />
      <ServicesSection />
      <AIWorkflowCanvas />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
        >
          Explore more solutions
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <ProductsSection preview />
      <ProcessSection />
    </>
  );
}
