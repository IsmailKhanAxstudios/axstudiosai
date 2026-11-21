"use client";

import Link from "next/link";
import { useActionState } from "react";
import { subscribe } from "./actions";

export default function NewsletterForm() {
  const [state, action, pending] = useActionState(subscribe, { message: "", success: false });
  if (state.success) return <p role="status" className="font-medium text-foreground">{state.message}</p>;

  return (
    <form action={action} className="space-y-4">
      <label className="block text-sm font-medium">
        Email address
        <input name="email" type="email" autoComplete="email" maxLength={254} required className="mt-2 w-full rounded-xl border border-line bg-background p-3 text-base" />
      </label>
      <div hidden><input name="company_website" autoComplete="off" tabIndex={-1} /></div>
      <label className="flex items-start gap-2 text-sm leading-relaxed text-secondary-text">
        <input name="consent" type="checkbox" required className="mt-1 size-4 shrink-0 accent-[rgb(var(--primary))]" />
        <span>I’d like to receive AxStudios newsletter updates. Read our <Link href="/privacy-policy" className="underline underline-offset-4">Privacy Policy</Link>.</span>
      </label>
      {state.message && <p role="alert" className="text-sm text-foreground">{state.message}</p>}
      <button disabled={pending} className="rounded-full bg-[rgb(var(--primary))] px-5 py-3 text-sm font-semibold text-[#24100b] disabled:opacity-60">
        {pending ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}
