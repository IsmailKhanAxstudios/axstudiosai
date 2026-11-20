import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AdminLoginForm from "@/components/admin/AdminLoginForm";
import { hasAdminSession } from "@/lib/adminAuth";

export const metadata: Metadata = {
  title: "Admin sign-in | AxStudios",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  if (await hasAdminSession()) redirect("/admin");

  return (
    <section className="relative mx-auto max-w-lg px-4 pb-20 pt-28 sm:pt-32">
      <div className="rounded-2xl border border-foreground/10 bg-surface p-6 sm:p-8">
        <h1 className="text-3xl font-bold">Admin sign-in</h1>
        <p className="mt-2 text-secondary-text">Sign in to publish articles on the AxStudios blog.</p>
        <AdminLoginForm />
      </div>
    </section>
  );
}
