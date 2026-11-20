import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ExploreWithAI from "@/components/blog/ExploreWithAI";
import { getPublicBlogPosts } from "@/lib/blogStore";
import { siteOrigin } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blogs | AxStudios",
  description: "Articles on AI automation, product development, and taking software from idea to launch.",
  alternates: { canonical: "/blogs" },
};

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | string[] }>;
}) {
  const { category } = await searchParams;
  const blogPosts = await getPublicBlogPosts();
  const categories = [...new Set(blogPosts.map(({ category }) => category))].sort();
  const active = categories.find((topic) => topic.toLowerCase() === category);
  const posts = active ? blogPosts.filter((post) => post.category === active) : blogPosts;

  return (
    <section className="relative pb-20 pt-28 sm:pt-32" aria-labelledby="blogs-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-8 max-w-2xl text-center">
          <h1 id="blogs-heading" className="text-3xl font-bold text-foreground lg:text-5xl">
            Our <span className="text-[rgb(var(--accent-text))]">Blogs</span>
          </h1>
          <p className="mt-4 text-lg text-secondary-text">
            Practical ideas for building software, automating work, and launching better products.
          </p>
        </header>
        <ExploreWithAI company />
        <nav aria-label="Blog categories" className="mb-9 flex flex-wrap justify-center gap-2">
          {[undefined, ...categories].map((topic) => {
            const selected = topic === active;

            return (
              <Link
                key={topic ?? "all"}
                href={topic ? `/blogs?category=${encodeURIComponent(topic.toLowerCase())}` : "/blogs"}
                scroll={false}
                aria-current={selected ? "page" : undefined}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  selected
                    ? "bg-[rgb(var(--primary)/0.1)] text-[rgb(var(--accent-text))] [border-color:rgb(var(--primary)/0.45)]"
                    : "border-foreground/10 bg-surface/70 text-secondary-text hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                {topic ?? "All posts"}
              </Link>
            );
          })}
        </nav>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-label={active ? `${active} posts` : "All posts"}>
          {posts.map(({ slug, category, title, summary, imageUrl, imageAlt }) => (
            <li key={slug} className="flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-surface/70 transition-colors [border-color:rgb(var(--primary)/0.2)] hover:[border-color:rgb(var(--primary)/0.65)]">
              <ExploreWithAI articleUrl={new URL(`/blogs/${slug}`, siteOrigin).href} compact />
              <Link
                href={`/blogs/${slug}`}
                className="group block flex-1 focus-visible:outline-offset-[-3px]"
              >
                <div className="relative aspect-video overflow-hidden border-b border-foreground/10 bg-field">
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    sizes="(min-width: 1280px) 392px, (min-width: 1024px) 32vw, (min-width: 640px) 49vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="mb-3 flex items-center justify-between gap-3 text-[rgb(var(--accent-text))]">
                    <span className="text-xs font-semibold uppercase tracking-wider">{category}</span>
                    <ArrowUpRight className="size-5 shrink-0" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-text">{summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
