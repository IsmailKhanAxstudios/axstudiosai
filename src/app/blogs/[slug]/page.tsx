import ArticleBody from "@/components/blog/ArticleBody";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import { formatBlogEventDate, parseBlogArticle } from "@/lib/blogArticle";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ExploreWithAI from "@/components/blog/ExploreWithAI";
import { getPublicBlogPost } from "@/lib/blogStore";
import { siteOrigin } from "@/lib/site";
import { absoluteUrl, articleMetadata, breadcrumbData, organizationId } from "@/lib/seo";
import StructuredData from "@/components/ui/StructuredData";

type BlogPageProps = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = await getPublicBlogPost((await params).slug);
  if (!post) return {};

  return articleMetadata(`/blogs/${post.slug}`, post.title, post.summary, post.imageUrl, post.publishedAt);
}

export default async function BlogPage({ params }: BlogPageProps) {
  const post = await getPublicBlogPost((await params).slug);
  if (!post) notFound();
  const { body, tags, eventDate } = parseBlogArticle(post.content);

  return (
    <article className="relative mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <StructuredData data={{
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: post.title, keywords: tags.length ? tags : undefined, description: post.summary, image: absoluteUrl(post.imageUrl),
        mainEntityOfPage: absoluteUrl(`/blogs/${post.slug}`), datePublished: post.publishedAt,
        author: post.author === "AxStudios" ? { "@id": organizationId } : { "@type": "Person", name: post.author },
        publisher: { "@id": organizationId },
      }} />
      <StructuredData data={breadcrumbData([
        { name: "Home", path: "/" },
        { name: "Blogs", path: "/blogs" },
        { name: post.title, path: `/blogs/${post.slug}` },
      ])} />
      <Link href="/blogs" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--accent-text))] hover:underline">
        <ArrowLeft className="size-4" aria-hidden="true" /> All blogs
      </Link>
      <header className="border-b border-foreground/10 pb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[rgb(var(--accent-text))]">{post.category}</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-secondary-text">{post.summary}</p>
        {eventDate && (
          <p className="mt-4 text-sm font-semibold text-foreground">
            Event date <time dateTime={eventDate} className="ml-2 font-normal text-secondary-text">{formatBlogEventDate(eventDate)}</time>
          </p>
        )}
        {post.publishedAt && (
          <p className="mt-4 text-sm text-secondary-text">
            {post.author} <span aria-hidden="true">·</span>{" "}
            <time dateTime={post.publishedAt}>{new Intl.DateTimeFormat("en", { dateStyle: "medium", timeZone: "UTC" }).format(new Date(post.publishedAt))}</time>
          </p>
        )}
      </header>
      <ExploreWithAI articleUrl={new URL(`/blogs/${post.slug}`, siteOrigin).href} />
      <figure className="mt-8">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-foreground/10 bg-field">
          <Image
            src={post.imageUrl}
            unoptimized={post.imageUrl.startsWith("https://")}
            alt={post.imageAlt}
            fill
            sizes="(min-width: 768px) 720px, 100vw"
            loading="eager"
            className="object-cover"
          />
        </div>
        {post.coverSource && (
          <figcaption className="mt-2 text-right text-xs text-secondary-text">
            <a href={post.coverSource} className="underline underline-offset-4 hover:text-foreground">Photo on Unsplash</a>
          </figcaption>
        )}
      </figure>
      <div className="pt-8"><ArticleBody content={body} /></div>
      {tags.length > 0 && (
        <ul aria-label="Article tags" className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-3 py-1 text-sm text-secondary-text">{tag}</li>
          ))}
        </ul>
      )}
      <NewsletterSignup />
    </article>
  );
}
