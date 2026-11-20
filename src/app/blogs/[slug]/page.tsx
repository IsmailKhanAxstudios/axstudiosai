import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ExploreWithAI from "@/components/blog/ExploreWithAI";
import { getPublicBlogPost } from "@/lib/blogStore";
import { siteOrigin } from "@/lib/site";

type BlogPageProps = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = await getPublicBlogPost((await params).slug);
  if (!post) return {};

  return {
    title: `${post.title} | AxStudios`,
    description: post.summary,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: { images: [post.imageUrl] },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const post = await getPublicBlogPost((await params).slug);
  if (!post) notFound();

  return (
    <article className="relative mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <Link href="/blogs" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--accent-text))] hover:underline">
        <ArrowLeft className="size-4" aria-hidden="true" /> All blogs
      </Link>
      <header className="border-b border-foreground/10 pb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[rgb(var(--accent-text))]">{post.category}</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-secondary-text">{post.summary}</p>
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
      <div className="space-y-8 pt-8">
        {post.content.split(/\r?\n[ \t]*\r?\n/).map((block, index) => {
          const heading = block.match(/^##\s+([^\r\n]+)(?:\r?\n|$)/);
          if (heading) {
            const body = block.slice(heading[0].length).trim();
            return (
              <div key={index}>
                <h2 className="text-xl font-semibold text-foreground">{heading[1]}</h2>
                {body && <p className="mt-2 whitespace-pre-wrap leading-relaxed text-secondary-text">{body}</p>}
              </div>
            );
          }
          return <p key={index} className="whitespace-pre-wrap leading-relaxed text-secondary-text">{block}</p>;
        })}
      </div>
    </article>
  );
}
