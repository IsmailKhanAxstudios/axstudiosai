import Link from "next/link";
import { ArrowRight, Braces, Lightbulb, Rocket } from "lucide-react";

const phases = [
  {
    title: "Define the scope",
    icon: Lightbulb,
    description: "Identify the problem, agree on what belongs in the first release, and write the requirements.",
  },
  {
    title: "Design and build",
    icon: Braces,
    description: "Map the data and integrations, then build and test the agreed features in reviewable increments.",
  },
  {
    title: "Launch and improve",
    icon: Rocket,
    description: "Deploy the release, hand it over, and use real feedback to decide what to improve next.",
  },
];

export default function ProcessSection() {
  return (
    <section aria-labelledby="process-heading" className="relative pb-16 pt-9 sm:pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-8 max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-foreground/80 [border-color:rgb(var(--primary)/0.3)]">
            <Rocket className="size-4 text-[rgb(var(--accent-text))]" aria-hidden="true" />
            OUR PROCESS
          </p>
          <h2 id="process-heading" className="text-3xl font-bold text-foreground lg:text-5xl">
            From idea <span className="text-[rgb(var(--accent-text))]">to launch</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-text sm:text-lg">
            We agree on what to build, share progress as we go, and use feedback to improve after launch.
          </p>
        </header>
        <ol className="mx-auto grid max-w-5xl divide-y divide-foreground/10 rounded-2xl border bg-surface/70 [border-color:rgb(var(--primary)/0.25)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {phases.map(({ title, icon: Icon, description }) => (
            <li key={title} className="p-6 sm:p-7">
              <span className="grid size-11 place-items-center rounded-xl bg-[rgb(var(--primary)/0.12)] text-[rgb(var(--accent-text))]">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-text">{description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--primary))] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            Discuss your project <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
