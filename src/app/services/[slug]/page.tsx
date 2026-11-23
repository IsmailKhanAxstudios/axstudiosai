import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import StructuredData from "@/components/ui/StructuredData";
import { getPublicServices } from "@/lib/catalogStore";
import { absoluteUrl, breadcrumbData, organizationId, pageMetadata } from "@/lib/seo";
import { serviceDetails, serviceSearchContent } from "@/lib/serviceDetails";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

async function findService(slug: string) {
  return (await getPublicServices()).find((service) => service.id === slug);
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = await findService(slug);
  if (!service) return {};
  const content = serviceSearchContent[slug];
  return pageMetadata(service.href, content?.title ?? service.title, service.description);
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = await findService(slug);
  if (!service) notFound();
  const details = serviceDetails[slug];
  const content = serviceSearchContent[slug];

  return (
    <article className="relative mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <StructuredData data={{ "@context": "https://schema.org", "@type": "Service", name: service.title,
        description: service.description, url: absoluteUrl(service.href), serviceType: service.title,
        provider: { "@id": organizationId } }} />
      <StructuredData data={breadcrumbData([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.title, path: service.href },
      ])} />
      <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--accent-text))] hover:underline">
        <ArrowLeft className="size-4" aria-hidden="true" /> All services
      </Link>
      <header className="my-8">
        <p className="mb-3 text-sm font-semibold text-[rgb(var(--accent-text))]">{service.category}</p>
        <h1 className="break-words text-3xl font-bold sm:text-5xl">{service.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-secondary-text">{service.description}</p>
      </header>
      <div className="space-y-4">
        {content && (
          <section className="rounded-2xl border border-foreground/10 bg-surface/80 p-5 sm:p-6">
            <h2 className="text-xl font-semibold">What you could build</h2>
            <p className="mt-2 leading-relaxed text-secondary-text">{content.example}</p>
          </section>
        )}
        {details && (
          <section className="rounded-2xl border border-foreground/10 bg-surface/80 p-5 sm:p-6">
            <h2 className="text-xl font-semibold">Who is this service for?</h2>
            <p className="mt-2 leading-relaxed text-secondary-text">{details.fit}</p>
          </section>
        )}
        {service.features.length > 0 && (
          <section className="rounded-2xl border border-foreground/10 bg-surface/80 p-5 sm:p-6">
            <h2 className="text-xl font-semibold">What does the service include?</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-secondary-text">
              {service.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </section>
        )}
        {details && (
          <section className="rounded-2xl border border-foreground/10 bg-surface/80 p-5 sm:p-6">
            <h2 className="text-xl font-semibold">How we deliver it</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-secondary-text">
              {details.deliverables.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        )}
      </div>
      <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[rgb(var(--primary))] px-5 py-3 text-sm font-semibold text-[#24100b]">
        Discuss your project <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
