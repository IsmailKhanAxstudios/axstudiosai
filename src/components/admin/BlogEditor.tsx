"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";
import { publish, updatePost } from "@/app/admin/actions";
import type { EditablePost } from "@/lib/blogStore";

const field = "w-full rounded-xl border border-line bg-background px-4 py-2.5 text-foreground";
const label = "block space-y-2 text-sm font-medium";

export default function BlogEditor({ categories, post }: { categories: string[]; post?: EditablePost }) {
  const router = useRouter();
  const submitting = useRef(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const cover = data.get("cover");
    setError("");
    if (cover instanceof File && cover.size > 3 * 1024 * 1024) {
      setError("Choose a cover image up to 3 MB.");
      return;
    }

    submitting.current = true;
    setPending(true);
    try {
      const result = post ? await updatePost(post.slug, post.revision, data) : await publish(data);
      if (result.error) {
        setError(result.error);
      } else if (result.slug) {
        router.push(`/admin?changed=${post ? "updated" : "created"}`);
      }
    } catch {
      setError("The change could not be saved. Your entries are still here. Try again.");
    } finally {
      submitting.current = false;
      setPending(false);
    }
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-foreground/10 bg-surface/80 p-5 sm:p-8">
      <fieldset disabled={pending} className="grid min-w-0 gap-5 sm:grid-cols-2">
        <label className={`${label} sm:col-span-2`}>
          <span>Title</span>
          <input name="title" required maxLength={160} defaultValue={post?.title} className={field} />
        </label>
        <label className={label}>
          <span>Category</span>
          <input name="category" required maxLength={40} list="blog-categories" defaultValue={post?.category} className={field} />
          <datalist id="blog-categories">
            {categories.map((category) => <option key={category} value={category} />)}
          </datalist>
        </label>
        <label className={label}>
          <span>Author (optional)</span>
          <input name="author" maxLength={100} placeholder="AxStudios" defaultValue={post?.author} className={field} />
        </label>
        <label className={`${label} sm:col-span-2`}>
          <span>{post ? "Article URL" : "URL slug (optional)"}</span>
          {post ? (
            <span className="block break-all text-sm text-secondary-text">/blogs/{post.slug}</span>
          ) : (
            <input name="slug" maxLength={100} pattern="[a-z0-9]+(-[a-z0-9]+)*" placeholder="Created from the title if left blank" className={field} />
          )}
        </label>
        {post && (
          <div className="relative aspect-video w-full max-w-xs overflow-hidden rounded-xl border border-foreground/10 sm:col-span-2">
            <Image src={post.imageUrl} unoptimized={post.imageUrl.startsWith("https://")} alt={post.imageAlt} fill sizes="320px" className="object-cover" />
          </div>
        )}
        <label className={`${label} sm:col-span-2`}>
          <span>{post ? "Replace cover image (optional)" : "Cover image"}</span>
          <input type="file" name="cover" required={!post} accept="image/jpeg,image/png,image/webp" className={`${field} file:mr-3 file:rounded-lg file:border-0 file:bg-field file:px-3 file:py-1.5 file:text-foreground`} />
          <span className="block text-xs text-secondary-text">JPEG, PNG, or WebP up to 3 MB.</span>
        </label>
        <label className={`${label} sm:col-span-2`}>
          <span>Cover image description</span>
          <input name="imageAlt" required={!post} maxLength={200} defaultValue={post?.imageAlt} className={field} />
        </label>
        <label className={`${label} sm:col-span-2`}>
          <span>Summary</span>
          <textarea name="summary" rows={3} required maxLength={300} defaultValue={post?.summary} className={field} />
        </label>
        <label className={`${label} sm:col-span-2`}>
          <span>Article content</span>
          <textarea name="content" rows={12} required maxLength={40000} defaultValue={post?.content} className={field} />
          <span className="block text-xs text-secondary-text">Use a blank line between paragraphs. Start a line with “## ” to add a section heading.</span>
        </label>
      </fieldset>
      {error && <p role="alert" className="mt-4 text-sm text-[rgb(var(--accent-text))]">{error}</p>}
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={pending} className="rounded-full bg-[rgb(var(--primary))] px-5 py-3 text-sm font-semibold text-[#24100b] disabled:opacity-60">
          {pending ? "Saving…" : post ? "Save changes" : "Publish article"}
        </button>
        <Link href="/admin" className="text-sm text-secondary-text hover:text-foreground">Cancel</Link>
      </div>
    </form>
  );
}
