import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/hero/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import AIWorkflowCanvas from "@/components/sections/AIWorkflowCanvas";
import ProductsSection from "@/components/sections/ProductsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import { connection } from "next/server";
import { getPublicServices } from "@/lib/catalogStore";

const automationExamples = [
  {
    title: "Sales and CRM automation",
    description: "Capture website inquiries, create or update CRM records, and assign the next follow-up so sales teams can see who owns each lead.",
  },
  {
    title: "AI agents for customer support",
    description: "Give support teams an agent that can search approved documentation, draft replies, and hand off requests that need a human decision.",
  },
  {
    title: "Internal tools and approval workflows",
    description: "Connect forms, databases, and back-office systems so staff can submit requests, route approvals, and track status in one place.",
  },
];

export default async function HomePage() {
  await connection();
  const services = await getPublicServices();
  return (
    <>
      <Hero />
      <ServicesSection services={services} />
      <AIWorkflowCanvas />
      <section aria-labelledby="automation-examples" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 id="automation-examples" className="text-center text-2xl font-bold sm:text-3xl">
          What can your team automate?
        </h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {automationExamples.map(({ title, description }) => (
            <li key={title} className="rounded-2xl border border-foreground/10 bg-surface/80 p-5">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-text">{description}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            Explore workflow automation solutions
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
      <ProductsSection preview />
      <ProcessSection />
    </>
  );
}
