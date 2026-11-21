import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { logout } from "@/app/admin/actions";
import AdminNavigation from "@/components/admin/AdminNavigation";
import CatalogEditor from "@/components/admin/CatalogEditor";
import DeletePostButton from "@/components/admin/DeletePostButton";
import { hasAdminSession } from "@/lib/adminAuth";
import { getManagedEntries, isManagedKind } from "@/lib/catalogAdmin";
import { getPublicProducts, getPublicServices } from "@/lib/catalogStore";
import { supabaseConfig } from "@/lib/supabaseServer";

export const metadata: Metadata = {
  title: "Catalog admin | AxStudios",
  robots: { index: false, follow: false },
};

export default async function CatalogAdminPage({ params, searchParams }: {
  params: Promise<{ kind: string }>;
  searchParams: Promise<{ edit?: string; changed?: string }>;
}) {
  if (!(await hasAdminSession())) redirect("/admin/login");
  const { kind } = await params;
  if (!isManagedKind(kind)) notFound();
  const { edit, changed } = await searchParams;
  const configured = supabaseConfig();
  const title = kind === "case-studies" ? "case studies" : kind;
  const publicHref = `/${kind}`;
  const dashboard = `/admin/catalog/${kind}`;
  const [managed, services, products] = await Promise.all([
    getManagedEntries(kind),
    kind === "case-studies" ? getManagedEntries("services") : [],
    kind === "case-studies" ? getManagedEntries("products") : [],
  ]);
  const entries = configured ? managed : kind === "services"
    ? (await getPublicServices()).map((service) => ({ slug: "", revision: "", name: service.title, category: service.category }))
    : kind === "products" ? (await getPublicProducts()).map((product) => ({ slug: "", revision: "", name: product.name, description: product.description })) : [];

  const entry = typeof edit === "string" ? managed.find((item) => item.slug === edit) : undefined;
  if (edit && !entry) notFound();
  const message = changed === "created" ? "Entry published." : changed === "updated" ? "Changes saved." : changed === "deleted" ? "Entry deleted." : "";

  return (
    <section className="relative mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <header className="mb-7 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Manage {title}</h1>
          <p className="mt-2 text-secondary-text">View the <Link href={publicHref} className="underline underline-offset-4">public page</Link>.</p>
        </div>
        <form action={logout}>
          <button className="rounded-full border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-foreground/5">Sign out</button>
        </form>
      </header>
      <AdminNavigation active={kind} />
      {message && <p role="status" className="mb-4 rounded-xl border border-foreground/10 bg-surface px-4 py-3 text-sm">{message}</p>}
      <div className="grid items-start gap-5 md:grid-cols-2">
        <CatalogEditor
          key={entry?.revision ?? kind}
          kind={kind} entry={entry}
          services={services.map(({ slug, name }) => ({ slug, name }))}
          products={products.map(({ slug, name }) => ({ slug, name }))}
        />
        <section className="min-w-0 rounded-2xl border border-foreground/10 bg-surface/80">
          <div className="flex items-center justify-between border-b border-foreground/10 px-5 py-4">
            <h2 className="font-semibold">Published {title}</h2>
            <span className="text-sm text-secondary-text">{entries.length}</span>
          </div>
          {entries.length ? (
            <ul className="divide-y divide-foreground/10">
              {entries.map((item) => (
                <li key={item.slug || item.name} className="flex flex-wrap items-start justify-between gap-3 px-5 py-3">
                  <div className="min-w-0 flex-1 basis-36">
                    <p className="break-words font-medium">{item.name}</p>
                    {"category" in item && item.category && <p className="mt-1 break-words text-sm text-secondary-text">{item.category}</p>}
                  </div>
                  {item.revision && (
                    <div className="flex flex-wrap gap-2">
                      {kind === "case-studies" && <Link href={`/case-studies/${item.slug}`} className="rounded-lg px-3 py-2 text-sm hover:bg-foreground/5">View</Link>}
                      <Link href={`${dashboard}?edit=${item.slug}`} className="rounded-lg border border-foreground/10 px-3 py-2 text-sm hover:bg-foreground/5">
                        Edit<span className="sr-only"> {item.name}</span>
                      </Link>
                      <DeletePostButton slug={item.slug} title={item.name} revision={item.revision} kind={kind} />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : <p className="p-5 text-sm text-secondary-text">No {title} published yet.</p>}
        </section>
      </div>
    </section>
  );
}
