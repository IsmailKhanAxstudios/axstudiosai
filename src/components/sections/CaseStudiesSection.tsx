import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getCaseStudies } from "@/lib/caseStudies";

export default async function CaseStudiesSection({ related, directory = false }: { related?: "services" | "products"; directory?: boolean }) {
  const studies = await getCaseStudies(related);
  if (!studies.length) return directory ? <p className="mt-8 text-center text-secondary-text">No case studies have been published yet.</p> : null;

  return (
    <section aria-labelledby="case-studies-heading" className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 id="case-studies-heading" className={directory ? "sr-only" : "mb-7 text-center text-3xl font-bold lg:text-5xl"}>
        Case <span className="text-[rgb(var(--accent-text))]">Studies</span>
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {studies.map((study) => (
          <li key={study.slug}>
            <Link href={`/case-studies/${study.slug}`} className="group block h-full overflow-hidden rounded-2xl border border-foreground/10 bg-surface/80 hover:[border-color:rgb(var(--primary)/0.6)]">
              {study.image && <div className="relative aspect-video"><Image src={study.image} alt={study.image_alt} fill unoptimized className="object-cover" /></div>}
              <div className="p-5">
                {study.client_name && <p className="mb-2 text-xs font-medium text-secondary-text">{study.client_name}</p>}
                <h3 className="flex items-start justify-between gap-2 text-lg font-semibold">{study.title}<ArrowUpRight className="size-4 shrink-0 text-[rgb(var(--accent-text))]" aria-hidden="true" /></h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-text">{study.summary}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
