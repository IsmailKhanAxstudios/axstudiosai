"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminConfigured, endAdminSession, hasAdminSession, startAdminSession, validCredentials } from "@/lib/adminAuth";
import { BlogInputError, deleteBlogPost, saveBlogPost } from "@/lib/blogStore";

const windowMs = 15 * 60 * 1000;
const failures = new Map<string, { count: number; reset: number }>();

export async function login(_previous: string, form: FormData) {
  if (!adminConfigured()) return "Admin sign-in is unavailable on this deployment.";

  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",").at(-1)?.trim() || "local";
  const now = Date.now();
  for (const [key, entry] of failures) {
    if (entry.reset <= now) failures.delete(key);
  }
  const attempt = failures.get(ip) ?? { count: 0, reset: now + windowMs };
  if (attempt.count >= 8) return "Too many sign-in attempts. Try again in 15 minutes.";

  const email = String(form.get("email") ?? "").trim();
  const password = String(form.get("password") ?? "");
  if (!validCredentials(email, password)) {
    failures.set(ip, { ...attempt, count: attempt.count + 1 });
    return "The email or password is incorrect.";
  }

  failures.delete(ip);
  const host = requestHeaders.get("host")?.split(":")[0];
  const isLocal = host === "localhost" || host === "127.0.0.1";
  const secure = requestHeaders.get("x-forwarded-proto") === "https" ||
    (process.env.NODE_ENV === "production" && !isLocal);
  await startAdminSession(secure);
  redirect("/admin");
}

export async function logout() {
  await endAdminSession();
  redirect("/admin/login");
}

async function changeBlog(operation: () => Promise<string>) {
  if (!(await hasAdminSession())) return { error: "Your session expired. Sign in again to manage posts." };
  if (process.env.VERCEL && !process.env.AXSTUDIOS_BLOG_DIR) {
    return { error: "This deployment needs a persistent blog storage directory before posts can be published." };
  }

  let slug: string;
  try {
    slug = await operation();
  } catch (error) {
    if (error instanceof BlogInputError) return { error: error.message };
    console.error("Blog change failed", error);
    return { error: "The change could not be saved. Check that blog storage is writable and try again." };
  }

  revalidatePath("/blogs");
  revalidatePath(`/blogs/${slug}`);
  revalidatePath("/admin");
  return { slug };
}

export async function publish(form: FormData) {
  return changeBlog(() => saveBlogPost(form));
}

export async function updatePost(slug: string, revision: string, form: FormData) {
  return changeBlog(() => saveBlogPost(form, { slug, revision }));
}

export async function removePost(slug: string, revision: string) {
  return changeBlog(async () => {
    await deleteBlogPost(slug, revision);
    return slug;
  });
}
