import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { aiOptimization } from "@/lib/aiOptimization";
import { getPublicServices } from "@/lib/catalogStore";
import { absoluteUrl, breadcrumbData, organizationId, pageMetadata } from "@/lib/seo";
import StructuredData from "@/components/ui/StructuredData";

export const dynamic = "force-dynamic";

async function getService() {
  return (await getPublicServices()).find((service) => service.id === "ai-cost-optimization");
}

export async function generateMetadata(): Promise<Metadata> {
  const service = await getService();
  return service ? pageMetadata(service.href, "LLM Cost Optimization & AI FinOps", "Reduce LLM API costs and latency with model routing, prompt caching, and token usage analysis. Benchmark changes against your current AI workflows.") : {};
}

export default async function AICostOptimizationPage() {
  const service = await getService();
  if (!service) notFound();
  return (
    <article className="relative mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <StructuredData data={{ "@context": "https://schema.org", "@type": "Service", name: service.title,
        description: service.description, url: absoluteUrl(service.href), serviceType: "AI cost optimization",
        provider: { "@id": organizationId } }} />
      <StructuredData data={breadcrumbData([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.title, path: service.href },
      ])} />
      <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--accent-text))] hover:underline">
        <ArrowLeft className="size-4" aria-hidden="true" /> All services
      </Link>
      <header className="my-9 max-w-3xl">
        <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-secondary-text">{service.description}</p>
        <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[rgb(var(--primary))] px-5 py-3 text-sm font-semibold text-[#24100b] hover:opacity-90">
          Discuss your AI costs <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </header>
      <div className="grid gap-4 lg:grid-cols-3">
        {aiOptimization.sections.map(({ title, capabilities }) => (
          <section key={title} className="rounded-2xl border border-foreground/10 bg-surface/70 p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-foreground">{title}</h2>
            <ul className="mt-4 divide-y divide-foreground/10">
              {capabilities.map((capability) => (
                <li key={capability.title} className="py-4 first:pt-0 last:pb-0">
                  <h3 className="text-sm font-semibold text-foreground">{capability.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-secondary-text">{capability.description}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
