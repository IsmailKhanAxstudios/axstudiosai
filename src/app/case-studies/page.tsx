import Link from "next/link";
import { connection } from "next/server";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/case-studies", "AI Automation & Software Case Studies",
  "Explore AxStudios case studies on AI automation, AI agents, custom software, and product development.");

export default async function CaseStudiesPage() {
  await connection();
  return (
    <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold sm:text-5xl">AxStudios <span className="text-[rgb(var(--accent-text))]">Case Studies</span></h1>
        <p className="mt-4 text-lg leading-relaxed text-secondary-text">
          See the challenges, implementation decisions, and results behind our AI automation and software projects.
        </p>
      </header>
      <CaseStudiesSection directory />
      <p className="mt-6 text-center text-secondary-text">Looking for examples of what we can build? <Link href="/solutions" className="text-foreground underline underline-offset-4">Explore our solutions and demos</Link>.</p>
    </div>
  );
}
