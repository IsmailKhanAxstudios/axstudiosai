import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/hero/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import AIWorkflowCanvas from "@/components/sections/AIWorkflowCanvas";
import ProductsSection from "@/components/sections/ProductsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ExploreWithAI from "@/components/blog/ExploreWithAI";
import { connection } from "next/server";
import { getPublicServices } from "@/lib/catalogStore";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/", "AI Agency in Dubai for Automation, AI Cost Optimization & MVPs",
  "AxStudios is a Dubai AI agency helping businesses automate workflows, optimize AI costs, and build custom AI software, SaaS products, and launch-ready MVPs.");

export default async function HomePage() {
  await connection();
  const services = await getPublicServices();
  return (
    <>
      <Hero />
      <ExploreWithAI company />
      <ServicesSection services={services} />
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
