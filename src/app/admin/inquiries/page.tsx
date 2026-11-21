import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { logout } from "@/app/admin/actions";
import AdminNavigation from "@/components/admin/AdminNavigation";
import { hasAdminSession } from "@/lib/adminAuth";
import { sessionSupabase } from "@/lib/supabaseServer";

export const metadata: Metadata = { title: "Contact inquiries | AxStudios", robots: { index: false, follow: false } };

export default async function InquiriesPage() {
  if (!(await hasAdminSession())) redirect("/admin/login");
  const client = await sessionSupabase();
  const result = await client?.from("contact_submissions")
    .select("id,name,email,company,phone,website,business,automation,interest,project_size,timeline,created_at")
    .order("created_at", { ascending: false }).limit(100);

  return (
    <section className="relative mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <header className="mb-7 flex flex-wrap items-start justify-between gap-4">
        <h1 className="text-3xl font-bold">Contact inquiries</h1>
        <form action={logout}>
          <button className="rounded-full border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-foreground/5">Sign out</button>
        </form>
      </header>
      <AdminNavigation active="inquiries" />
      {!client ? <p className="text-secondary-text">Connect Supabase to receive inquiries here.</p>
        : result?.error ? <p className="text-secondary-text">Inquiries could not be loaded.</p>
        : !result?.data?.length ? <p className="text-secondary-text">No inquiries yet.</p>
        : (
          <ul className="divide-y divide-foreground/10 rounded-2xl border border-foreground/10 bg-surface/80">
            {result.data.map((inquiry) => (
              <li key={inquiry.id} className="p-5">
                <details>
                  <summary className="cursor-pointer break-words font-medium">{inquiry.name} · {inquiry.email}</summary>
                  <p className="mt-2 text-sm text-secondary-text"><time dateTime={inquiry.created_at}>{new Intl.DateTimeFormat("en", { dateStyle: "medium", timeZone: "UTC" }).format(new Date(inquiry.created_at))}</time></p>
                  <dl className="mt-4 space-y-3 text-sm">
                    {[
                      ["Company", inquiry.company], ["Phone", inquiry.phone], ["Website", inquiry.website],
                      ["Business", inquiry.business], ["Project details", inquiry.automation],
                      ["Service", inquiry.interest], ["Project size", inquiry.project_size], ["Timeline", inquiry.timeline],
                    ].filter(([, value]) => Boolean(value)).map(([label, value]) => (
                      <div key={label}><dt className="font-medium">{label}</dt><dd className="whitespace-pre-wrap break-words text-secondary-text">{value}</dd></div>
                    ))}
                  </dl>
                </details>
              </li>
            ))}
          </ul>
        )}
    </section>
  );
}
