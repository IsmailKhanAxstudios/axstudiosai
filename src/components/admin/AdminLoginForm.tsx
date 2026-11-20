"use client";

import { useActionState } from "react";
import { login } from "@/app/admin/actions";

const field = "w-full rounded-xl border border-line bg-background px-4 py-3 text-foreground";

export default function AdminLoginForm() {
  const [error, formAction, pending] = useActionState(login, "");

  return (
    <form action={formAction} className="mt-6 space-y-4">
      <label className="block space-y-2 text-sm font-medium">
        <span>Admin email</span>
        <input type="email" name="email" maxLength={254} autoComplete="username" required className={field} />
      </label>
      <label className="block space-y-2 text-sm font-medium">
        <span>Password</span>
        <input type="password" name="password" maxLength={256} autoComplete="current-password" required className={field} />
      </label>
      {error && <p role="alert" className="text-sm text-[rgb(var(--accent-text))]">{error}</p>}
      <button type="submit" disabled={pending} className="w-full rounded-full bg-[rgb(var(--primary))] px-5 py-3 text-sm font-semibold text-[#24100b] disabled:opacity-60">
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
