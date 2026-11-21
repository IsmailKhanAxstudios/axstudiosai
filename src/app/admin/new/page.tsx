import { getBlogCategories } from "@/lib/blogCategories";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import BlogEditor from "@/components/admin/BlogEditor";
import { hasAdminSession } from "@/lib/adminAuth";
import { getPublicBlogPosts } from "@/lib/blogStore";

export const metadata: Metadata = {
  title: "New blog post | AxStudios",
  robots: { index: false, follow: false },
};

export default async function NewPostPage() {
  if (!(await hasAdminSession())) redirect("/admin/login");
  const posts = await getPublicBlogPosts();
  const categories = getBlogCategories(posts.map((post) => post.category));

  return (
    <section className="relative mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <Link href="/admin" className="text-sm text-secondary-text underline underline-offset-4">All posts</Link>
      <h1 className="mb-6 mt-3 text-3xl font-bold">New blog post</h1>
      <BlogEditor categories={categories} />
    </section>
  );
}
