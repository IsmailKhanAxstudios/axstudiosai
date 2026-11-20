import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Plus, Search } from "lucide-react";
import DeletePostButton from "@/components/admin/DeletePostButton";
import { hasAdminSession } from "@/lib/adminAuth";
import { getPublicBlogPosts } from "@/lib/blogStore";
import { logout } from "./actions";

export const metadata: Metadata = {
  title: "Blog admin | AxStudios",
  robots: { index: false, follow: false },
};

const messages: Record<string, string> = {
  created: "Article published.",
  updated: "Changes saved.",
  deleted: "Article deleted.",
};

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[]; changed?: string | string[] }>;
}) {
  if (!(await hasAdminSession())) redirect("/admin/login");

  const { q, changed } = await searchParams;
  const query = typeof q === "string" ? q.trim().slice(0, 100) : "";
  const message = typeof changed === "string" && Object.hasOwn(messages, changed) ? messages[changed] : "";
  const allPosts = await getPublicBlogPosts();
  const search = query.toLowerCase();
  const posts = search ? allPosts.filter((post) => [post.title, post.category, post.slug].some((value) => value.toLowerCase().includes(search))) : allPosts;

  return (
    <section className="relative mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <header className="mb-7 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Manage blog posts</h1>
          <p className="mt-2 text-secondary-text">Create and update the articles on the <Link href="/blogs" className="underline underline-offset-4">public blog</Link>.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/admin/new" className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--primary))] px-4 py-2 text-sm font-semibold text-[#24100b]">
            <Plus className="size-4" aria-hidden="true" /> New post
          </Link>
          <form action={logout}>
            <button className="rounded-full border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-foreground/5">Sign out</button>
          </form>
        </div>
      </header>

      {message && <p role="status" className="mb-4 rounded-xl border border-foreground/10 bg-surface px-4 py-3 text-sm">{message}</p>}
      <form action="/admin" className="mb-4 flex flex-wrap items-center gap-2">
        <label className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-line bg-surface px-3">
          <Search className="size-4 shrink-0 text-muted" aria-hidden="true" />
          <span className="sr-only">Search posts</span>
          <input name="q" type="search" defaultValue={query} maxLength={100} placeholder="Search title or category" className="min-w-0 flex-1 rounded-lg bg-transparent py-2.5 text-sm text-foreground" />
        </label>
        <button className="rounded-xl border border-foreground/20 px-4 py-2.5 text-sm font-medium hover:bg-foreground/5">Search</button>
        {query && <Link href="/admin" className="px-1 text-sm text-secondary-text underline">Clear</Link>}
      </form>

      <div className="rounded-2xl border border-foreground/10 bg-surface/80">
        <div className="flex items-center justify-between border-b border-foreground/10 px-5 py-4">
          <h2 className="font-semibold">Published articles</h2>
          <p className="text-sm text-secondary-text">{posts.length}{query ? ` of ${allPosts.length}` : ""}</p>
        </div>
        {posts.length ? (
          <ul className="divide-y divide-foreground/10">
            {posts.map((post) => (
              <li key={post.slug} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                <div className="min-w-0 flex-1 basis-56">
                  <p className="break-words font-medium text-foreground">{post.title}</p>
                  <p className="mt-1 break-words text-sm text-secondary-text">
                    {post.category}{post.publishedAt ? ` · ${new Intl.DateTimeFormat("en", { dateStyle: "medium", timeZone: "UTC" }).format(new Date(post.publishedAt))}` : ""}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link href={`/blogs/${post.slug}`} className="rounded-lg px-3 py-2 text-sm text-secondary-text hover:bg-foreground/5 hover:text-foreground">
                    View<span className="sr-only"> {post.title}</span>
                  </Link>
                  <Link href={`/admin/posts/${post.slug}`} className="rounded-lg border border-foreground/10 px-3 py-2 text-sm font-medium hover:bg-foreground/5">
                    Edit<span className="sr-only"> {post.title}</span>
                  </Link>
                  <DeletePostButton slug={post.slug} title={post.title} revision={post.revision} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-5 text-sm text-secondary-text">{query ? "No posts match that search." : "No posts yet. Create your first article to get started."}</p>
        )}
      </div>
    </section>
  );
}
