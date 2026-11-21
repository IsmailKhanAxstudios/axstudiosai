"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { addCatalogEntry } from "@/app/admin/actions";
import type { ManagedEntry, ManagedKind } from "@/lib/catalogAdmin";

const field = "w-full rounded-xl border border-line bg-background px-4 py-2.5 text-foreground";
const label = "block space-y-2 text-sm font-medium";

type Choice = { slug: string; name: string };

export default function CatalogEditor({ kind, entry, services, products }: {
  kind: ManagedKind; entry?: ManagedEntry; services: Choice[]; products: Choice[];
}) {
  const router = useRouter();
  const submitting = useRef(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const item = kind === "services" ? "service" : kind === "products" ? "product" : "case study";
  const dashboard = `/admin/catalog/${kind}`;

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
      const result = await addCatalogEntry(kind, data, entry && { slug: entry.slug, revision: entry.revision });
      if (result.error) setError(result.error);
      else {
        form.reset();
        router.replace(`${dashboard}?changed=${entry ? "updated" : "created"}`);
        router.refresh();
      }
    } catch {
      setError("The entry could not be saved. Your entries are still here. Try again.");
    } finally {
      submitting.current = false;
      setPending(false);
    }
  }

  return (
    <form onSubmit={submit} className="min-w-0 rounded-2xl border border-foreground/10 bg-surface/80 p-5 sm:p-6">
      <h2 className="mb-5 text-lg font-semibold">{entry ? "Edit" : "Add"} {item}</h2>
      <fieldset disabled={pending} className="min-w-0 space-y-4">
        <label className={label}>
          <span>{kind === "case-studies" ? "Title" : "Name"}</span>
          <input name="name" maxLength={100} required defaultValue={entry?.name} className={field} />
        </label>
        <label className={label}>
          <span>{kind === "case-studies" ? "Summary" : "Description"}</span>
          <textarea name="description" rows={3} maxLength={400} required={kind !== "products" || !entry} defaultValue={entry?.description ?? ""} className={field} />
        </label>
        {kind === "services" ? (
          <>
            <label className={label}><span>Category</span><input name="category" maxLength={40} required defaultValue={entry?.category} className={field} /></label>
            <label className={label}>
              <span>Features (optional)</span>
              <textarea name="features" rows={4} maxLength={1200} defaultValue={entry?.features?.join("\n")} className={field} />
              <span className="block text-xs text-secondary-text">Enter one feature per line, up to eight.</span>
            </label>
          </>
        ) : (
          <>
            {entry?.image && (
              <div className="relative aspect-video max-w-xs overflow-hidden rounded-xl border border-foreground/10">
                <Image src={entry.image} alt={entry.imageAlt ?? ""} fill unoptimized className="object-cover" />
              </div>
            )}
            <label className={label}>
              <span>{entry?.image ? "Replace cover image (optional)" : kind === "case-studies" ? "Cover image (optional)" : "Cover image"}</span>
              <input name="cover" type="file" accept="image/jpeg,image/png,image/webp" required={!entry && kind === "products"} className={field} />
              <span className="block text-xs text-secondary-text">JPEG, PNG, or WebP up to 3 MB.</span>
            </label>
            <label className={label}>
              <span>Cover image description</span>
              <input name="imageAlt" maxLength={200} required={!entry && kind === "products"} defaultValue={entry?.imageAlt} className={field} />
            </label>
            {kind === "products" && (
              <label className={label}>
                <span>Product website (optional)</span>
                <input name="website" type="url" maxLength={500} placeholder="https://" defaultValue={entry?.website} className={field} />
              </label>
            )}
          </>
        )}
        {kind === "case-studies" && (
          <>
            <label className={label}><span>Client name (optional)</span><input name="client" maxLength={120} defaultValue={entry?.client} className={field} /></label>
            {(["challenge", "approach", "results"] as const).map((key) => (
              <label key={key} className={label}>
                <span className="capitalize">{key}</span>
                <textarea name={key} rows={4} maxLength={8000} required defaultValue={entry?.[key]} className={field} />
              </label>
            ))}
            {([{ name: "service", options: services }, { name: "product", options: products }] as const).map(({ name, options }) => (
              <label key={name} className={label}>
                <span>Related {name} (optional)</span>
                <select name={name} defaultValue={entry?.[name] ?? ""} className={field}>
                  <option value="">None</option>
                  {options.map((option) => <option key={option.slug} value={option.slug}>{option.name}</option>)}
                </select>
              </label>
            ))}
          </>
        )}
      </fieldset>
      {error && <p role="alert" className="mt-4 text-sm text-[rgb(var(--accent-text))]">{error}</p>}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button type="submit" disabled={pending} className="rounded-full bg-[rgb(var(--primary))] px-5 py-2.5 text-sm font-semibold text-[#24100b] disabled:opacity-60">
          {pending ? "Saving…" : entry ? "Save changes" : `Add ${item}`}
        </button>
        {entry && <Link href={dashboard} className="text-sm text-secondary-text underline">Cancel</Link>}
      </div>
    </form>
  );
}
