import { getBlogCategories } from "@/lib/blogCategories";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import BlogEditor from "@/components/admin/BlogEditor";
import { hasAdminSession } from "@/lib/adminAuth";
import { getPublicBlogPost, getPublicBlogPosts } from "@/lib/blogStore";

export const metadata: Metadata = {
  title: "Edit blog post | AxStudios",
  robots: { index: false, follow: false },
};

export default async function EditPostPage({ params }: { params: Promise<{ slug: string }> }) {
  if (!(await hasAdminSession())) redirect("/admin/login");
  const post = await getPublicBlogPost((await params).slug);
  if (!post) notFound();

  const posts = await getPublicBlogPosts();
  const categories = getBlogCategories(posts.map((entry) => entry.category));

  return (
    <section className="relative mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <Link href="/admin" className="text-sm text-secondary-text underline underline-offset-4">All posts</Link>
      <h1 className="mb-6 mt-3 text-3xl font-bold">Edit blog post</h1>
      <BlogEditor key={post.revision} categories={categories} post={post} />
    </section>
  );
}
