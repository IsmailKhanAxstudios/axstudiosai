import Link from "next/link";
import { connection } from "next/server";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/case-studies", "AI Automation & Custom Software Case Studies",
  "Read AxStudios case studies to see how we approach AI workflow automation, custom software development, and SaaS product delivery.");

export default async function CaseStudiesPage() {
  await connection();
  return (
    <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold sm:text-5xl">AI &amp; Software <span className="text-[rgb(var(--accent-text))]">Case Studies</span></h1>
        <p className="mt-4 text-lg leading-relaxed text-secondary-text">
          See the business challenges, technical decisions, and results behind our workflow automation and custom software projects.
        </p>
      </header>
      <CaseStudiesSection directory />
      <p className="mt-6 text-center text-secondary-text">Looking for examples of what we can build? <Link href="/solutions" className="text-foreground underline underline-offset-4">Explore our solutions and demos</Link>.</p>
    </div>
  );
}
