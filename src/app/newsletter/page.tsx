import { pageMetadata } from "@/lib/seo";
import NewsletterForm from "./NewsletterForm";

export const metadata = pageMetadata("/newsletter", "AI Automation & Product Development Newsletter",
  "Subscribe to AxStudios updates on practical AI automation, token cost optimization, SaaS development, and new products.");

export default function NewsletterPage() {
  return (
    <section className="relative mx-auto max-w-2xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <h1 className="text-3xl font-bold sm:text-5xl">The AxStudios <span className="text-[rgb(var(--accent-text))]">newsletter</span></h1>
      <p className="mt-4 text-lg leading-relaxed text-secondary-text">
        Get updates on AI automation, ways to reduce model costs, and what we learn building SaaS products and MVPs.
      </p>
      <div className="mt-8 rounded-2xl border border-foreground/10 bg-surface p-5 sm:p-8"><NewsletterForm /></div>
    </section>
  );
}
