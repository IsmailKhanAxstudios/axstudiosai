"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminConfigured, endAdminSession, hasAdminSession, startAdminSession, validCredentials } from "@/lib/adminAuth";
import { BlogInputError, deleteBlogPost, saveBlogPost } from "@/lib/blogStore";
import { createCatalogEntry } from "@/lib/catalogStore";
import { catalogTable, isManagedKind, type ManagedKind } from "@/lib/catalogAdmin";
import { saveCaseStudy } from "@/lib/caseStudies";
import { sessionSupabase, supabaseConfig } from "@/lib/supabaseServer";
import { ContentConflict, deleteRemoteCatalog } from "@/lib/supabaseContent";

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
  const client = await sessionSupabase();
  let accepted = false;
  if (client && email.length <= 254 && password.length <= 256) {
    const { data } = await client.auth.signInWithPassword({ email, password });
    accepted = data.user?.app_metadata.axstudios_role === "admin";
    if (data.user && !accepted) await client.auth.signOut({ scope: "local" });
  } else if (!client) {
    accepted = validCredentials(email, password);
  }
  if (!accepted) {
    failures.set(ip, { ...attempt, count: attempt.count + 1 });
    return "The email or password is incorrect.";
  }

  failures.delete(ip);
  const host = requestHeaders.get("host")?.split(":")[0];
  const isLocal = host === "localhost" || host === "127.0.0.1";
  const secure = requestHeaders.get("x-forwarded-proto") === "https" ||
    (process.env.NODE_ENV === "production" && !isLocal);
  if (!client) await startAdminSession(secure);
  redirect("/admin");
}

export async function logout() {
  await endAdminSession();
  redirect("/admin/login");
}

async function changeBlog(operation: () => Promise<string>) {
  if (!(await hasAdminSession())) return { error: "Your session expired. Sign in again to manage posts." };
  if (!supabaseConfig() && (process.env.VERCEL || process.env.NETLIFY) && !process.env.AXSTUDIOS_BLOG_DIR) {
    return { error: "This deployment needs a persistent blog storage directory before posts can be published." };
  }

  let slug: string;
  try {
    slug = await operation();
  } catch (error) {
    if (error instanceof BlogInputError || error instanceof ContentConflict) return { error: error.message };
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

function refreshCatalog(kind: ManagedKind) {
  revalidatePath("/");
  revalidatePath("/services");
  revalidatePath("/services/ai-cost-optimization");
  revalidatePath("/products");
  revalidatePath("/solutions");
  revalidatePath("/case-studies");
  revalidatePath("/services/[slug]", "page");
  revalidatePath("/case-studies/[slug]", "page");
  revalidatePath(`/admin/catalog/${kind}`);
}

export async function addCatalogEntry(kind: ManagedKind, form: FormData, edit?: { slug: string; revision: string }) {
  if (!(await hasAdminSession())) return { error: "Your session expired. Sign in again to manage the catalog." };
  if (!isManagedKind(kind)) return { error: "Choose a valid catalog section." };
  if (!supabaseConfig() && (edit || kind === "case-studies")) return { error: "Connect Supabase to manage these entries." };
  if (!supabaseConfig() && (process.env.VERCEL || process.env.NETLIFY) && !process.env.AXSTUDIOS_BLOG_DIR) {
    return { error: "This deployment needs persistent storage before entries can be added." };
  }
  try {
    if (kind === "case-studies") await saveCaseStudy(form, edit);
    else await createCatalogEntry(kind, form, edit);
  } catch (error) {
    if (error instanceof BlogInputError || error instanceof ContentConflict) return { error: error.message };
    console.error("Catalog entry could not be saved", error);
    return { error: "The entry could not be saved. Check that catalog storage is writable and try again." };
  }
  refreshCatalog(kind);
  return { success: true };
}

export async function removeCatalogEntry(kind: ManagedKind, slug: string, revision: string) {
  if (!(await hasAdminSession())) return { error: "Your session expired. Sign in again to manage the catalog." };
  if (!isManagedKind(kind) || !supabaseConfig()) return { error: "Catalog deletion is unavailable." };
  try {
    await deleteRemoteCatalog(catalogTable(kind), slug, revision);
  } catch (error) {
    if (error instanceof ContentConflict) return { error: error.message };
    console.error("Catalog entry could not be deleted", error);
    return { error: "The entry could not be deleted. Try again." };
  }
  refreshCatalog(kind);
  return { success: true };
}
