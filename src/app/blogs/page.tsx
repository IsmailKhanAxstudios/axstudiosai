import { formatBlogEventDate, parseBlogArticle } from "@/lib/blogArticle";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import { getBlogCategories } from "@/lib/blogCategories";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ExploreWithAI from "@/components/blog/ExploreWithAI";
import { getPublicBlogPosts } from "@/lib/blogStore";
import { siteOrigin } from "@/lib/site";

export const metadata = pageMetadata(
  "/blogs",
  "AI, Business & Markets Blog",
  "Explore AxStudios articles on AI innovation, software development, business, finance, stocks, and commodities.",
);

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | string[] }>;
}) {
  const { category } = await searchParams;
  const blogPosts = await getPublicBlogPosts();
  const categories = getBlogCategories(blogPosts.map(({ category }) => category));
  const active = categories.find((topic) => topic.toLowerCase() === category);
  const posts = active ? blogPosts.filter((post) => post.category.toLowerCase() === active.toLowerCase()) : blogPosts;

  const today = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Dubai", dateStyle: "short" }).format(new Date());
  const upcomingEvents = blogPosts.flatMap(({ slug, title, content }) => {
    const { eventDate } = parseBlogArticle(content);
    return eventDate && eventDate >= today ? [{ slug, title, eventDate }] : [];
  }).sort((a, b) => a.eventDate.localeCompare(b.eventDate));

  return (
    <section className="relative pb-20 pt-28 sm:pt-32" aria-labelledby="blogs-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-8 max-w-2xl text-center">
          <h1 id="blogs-heading" className="text-3xl font-bold text-foreground lg:text-5xl">
            Our <span className="text-[rgb(var(--accent-text))]">Blogs</span>
          </h1>
          <p className="mt-4 text-lg text-secondary-text">
            Perspectives on AI, technology, business, and markets.
          </p>
        </header>
        <ExploreWithAI company />
        <nav
          aria-label="Blog categories"
          className="mb-9 -mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0"
        >
          {[undefined, ...categories].map((topic) => {
            const selected = topic === active;

            return (
              <Link
                key={topic ? `category:${topic}` : "all"}
                href={topic ? `/blogs?category=${encodeURIComponent(topic.toLowerCase())}` : "/blogs"}
                scroll={false}
                aria-current={selected ? "page" : undefined}
                className={`shrink-0 snap-start rounded-full border px-3 py-2 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
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
        {posts.length === 0 && (
          <p className="rounded-2xl border border-foreground/10 bg-surface/70 px-5 py-10 text-center text-secondary-text">
            {active ? `No articles in ${active} yet.` : "No articles have been published yet."}
          </p>
        )}
        {posts.length > 0 && (
          <div className="mx-auto max-w-5xl">
            <input id="headlines-only" type="checkbox" role="switch" className="peer sr-only" />
            <label
              htmlFor="headlines-only"
              className="mb-3 inline-flex min-h-11 cursor-pointer items-center gap-3 rounded text-sm font-medium text-foreground peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-checked:[&>span]:bg-[rgb(var(--primary))] peer-checked:[&>span>span]:translate-x-4"
            >
              Headlines only
              <span aria-hidden="true" className="inline-flex h-6 w-10 items-center rounded-full border border-foreground/25 bg-surface p-0.5">
                <span className="size-4 rounded-full bg-foreground transition-transform motion-reduce:transition-none" />
              </span>
            </label>
            <ul
              className="divide-y divide-foreground/10 border-y border-foreground/10 peer-checked:[&_.article-preview]:hidden"
              aria-label={active ? active + " posts" : "All posts"}
            >
              {posts.map(({ slug, category, title, author, imageUrl, imageAlt }) => (
                <li key={slug} className="px-1 py-4 sm:px-3">
                  <Link href={"/blogs/" + slug} className="group flex items-start gap-3 rounded-lg sm:gap-5">
                    <div className="article-preview relative aspect-video w-24 shrink-0 overflow-hidden rounded-lg bg-field sm:w-40 md:w-48">
                      <Image
                        src={imageUrl}
                        unoptimized={imageUrl.startsWith("https://")}
                        alt={imageAlt}
                        fill
                        sizes="(min-width: 768px) 192px, (min-width: 640px) 160px, 96px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="article-preview mb-1.5 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--accent-text))]">
                        {category}
                      </p>
                      <h2 className="break-words text-base font-semibold leading-snug text-foreground underline-offset-4 group-hover:underline sm:text-xl">
                        {title}
                        <ArrowUpRight className="ml-1 inline-block size-4 text-[rgb(var(--accent-text))]" aria-hidden="true" />
                      </h2>
                      <p className="article-preview mt-2 text-sm text-secondary-text">{author}</p>
                    </div>
                  </Link>
                  <div className="article-preview mt-2">
                    <ExploreWithAI articleUrl={new URL("/blogs/" + slug, siteOrigin).href} compact />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mx-auto max-w-5xl">
          <section aria-labelledby="upcoming-events" className="mt-12 rounded-2xl border border-line bg-surface p-5 sm:p-8">
            <h2 id="upcoming-events" className="text-xl font-semibold text-foreground sm:text-2xl">Upcoming Events</h2>
            <p className="mt-2 text-sm text-secondary-text">Dates to watch in business, markets, and technology.</p>
            {upcomingEvents.length ? (
              <ul className="mt-4 divide-y divide-foreground/10">
                {upcomingEvents.map(({ slug, title, eventDate }) => (
                  <li key={slug}>
                    <Link href={"/blogs/" + slug} className="group flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-5">
                      <time dateTime={eventDate} className="shrink-0 text-sm font-medium text-[rgb(var(--accent-text))] sm:w-28">{formatBlogEventDate(eventDate)}</time>
                      <span className="font-semibold text-foreground underline-offset-4 group-hover:underline">{title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-secondary-text">No upcoming events have been posted yet.</p>
            )}
          </section>
          <NewsletterSignup />
        </div>
      </div>
    </section>
  );
}
