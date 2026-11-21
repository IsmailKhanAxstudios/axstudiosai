import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies, headers } from "next/headers";

export const mediaBucket = "axstudios-media";

export function supabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  return url && key ? { url, key } : undefined;
}

const auth = { autoRefreshToken: false, persistSession: false, detectSessionInUrl: false };
const global = { fetch: (url: RequestInfo | URL, init?: RequestInit) => fetch(url, { ...init, cache: "no-store" }) };

export function publicSupabase() {
  const config = supabaseConfig();
  return config ? createClient(config.url, config.key, { auth, global }) : undefined;
}

export function privilegedSupabase() {
  const config = supabaseConfig();
  const secret = process.env.SUPABASE_SECRET_KEY;
  return config && secret ? createClient(config.url, secret, { auth, global }) : undefined;
}

export async function sessionSupabase() {
  const config = supabaseConfig();
  if (!config) return undefined;

  const [store, request] = await Promise.all([cookies(), headers()]);
  const host = request.get("host")?.split(":")[0];
  const local = host === "localhost" || host === "127.0.0.1";
  const secure = request.get("x-forwarded-proto") === "https" || (process.env.NODE_ENV === "production" && !local);
  return createServerClient(config.url, config.key, {
    global,
    cookies: {
      getAll: () => store.getAll(),
      setAll(values) {
        try {
          for (const { name, value, options } of values) store.set(name, value, { ...options, httpOnly: true, secure });
        } catch {
          // Server Components are read-only. The admin proxy refreshes cookies.
        }
      },
    },
  });
}
