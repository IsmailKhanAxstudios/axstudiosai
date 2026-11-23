import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudies } from "@/lib/caseStudies";
import { absoluteUrl, articleMetadata, breadcrumbData, organizationId } from "@/lib/seo";
import StructuredData from "@/components/ui/StructuredData";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [study] = await getCaseStudies(undefined, (await params).slug);
  return study ? articleMetadata(`/case-studies/${study.slug}`, study.title, study.summary, study.image, study.created_at) : {};
}

export default async function CaseStudyPage({ params }: Props) {
  const [study] = await getCaseStudies(undefined, (await params).slug);
  if (!study) notFound();

  return (
    <article className="relative mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <StructuredData data={{
        "@context": "https://schema.org", "@type": "Article", headline: study.title,
        description: study.summary, datePublished: study.created_at, image: study.image,
        mainEntityOfPage: absoluteUrl(`/case-studies/${study.slug}`), author: { "@id": organizationId }, publisher: { "@id": organizationId },
      }} />
      <StructuredData data={breadcrumbData([
        { name: "Home", path: "/" },
        { name: "Case Studies", path: "/case-studies" },
        { name: study.title, path: `/case-studies/${study.slug}` },
      ])} />
      <Link href="/case-studies" className="text-sm text-[rgb(var(--accent-text))] hover:underline">← Case studies</Link>
      <h1 className="mt-4 break-words text-3xl font-bold sm:text-5xl">{study.title}</h1>
      {study.client_name && <p className="mt-3 text-sm font-medium text-[rgb(var(--accent-text))]">{study.client_name}</p>}
      <p className="mt-4 text-lg leading-relaxed text-secondary-text">{study.summary}</p>
      {study.image && <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl"><Image src={study.image} alt={study.image_alt} fill unoptimized className="object-cover" /></div>}
      <div className="mt-8 space-y-7">
        {[["Challenge", study.challenge], ["Approach", study.approach], ["Results", study.results]].map(([heading, text]) => (
          <section key={heading}>
            <h2 className="mb-2 text-xl font-semibold">{heading}</h2>
            <p className="whitespace-pre-wrap break-words leading-relaxed text-secondary-text">{text}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
