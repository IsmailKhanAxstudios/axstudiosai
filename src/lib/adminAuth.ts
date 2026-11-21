import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { sessionSupabase, supabaseConfig } from "@/lib/supabaseServer";

const cookieName = "axstudios_admin";
const lifetime = 8 * 60 * 60;

function signed(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("base64url");
}

function equals(left: string, right: string) {
  const first = Buffer.from(left);
  const second = Buffer.from(right);
  return first.length === second.length && timingSafeEqual(first, second);
}

export function adminConfigured() {
  if (supabaseConfig()) return true;
  return Boolean(
    process.env.AXSTUDIOS_ADMIN_EMAIL &&
    /^[a-f0-9]{32}:[a-f0-9]{128}$/i.test(process.env.AXSTUDIOS_ADMIN_PASSWORD_HASH ?? "") &&
    (process.env.AXSTUDIOS_ADMIN_SESSION_SECRET?.length ?? 0) >= 32,
  );
}

export function validCredentials(email: string, password: string) {
  if (!adminConfigured() || password.length > 256) return false;
  const [salt, expected] = process.env.AXSTUDIOS_ADMIN_PASSWORD_HASH!.split(":");
  const actual = scryptSync(password, salt, 64).toString("hex");
  return equals(actual, expected) && email.toLowerCase() === process.env.AXSTUDIOS_ADMIN_EMAIL!.toLowerCase();
}

export async function startAdminSession(secure: boolean) {
  const secret = process.env.AXSTUDIOS_ADMIN_SESSION_SECRET!;
  const value = `${Math.floor(Date.now() / 1000) + lifetime}.${randomBytes(16).toString("hex")}`;
  (await cookies()).set(cookieName, `${value}.${signed(value, secret)}`, {
    httpOnly: true,
    secure,
    sameSite: "strict",
    maxAge: lifetime,
    path: "/",
  });
}

export async function hasAdminSession() {
  const client = await sessionSupabase();
  if (client) {
    const { data } = await client.auth.getUser();
    return data.user?.app_metadata.axstudios_role === "admin";
  }
  const secret = process.env.AXSTUDIOS_ADMIN_SESSION_SECRET;
  const token = (await cookies()).get(cookieName)?.value;
  if (!adminConfigured() || !secret || !token || token.length > 128) return false;
  const [expires, nonce, signature, ...extra] = token.split(".");
  return Boolean(
    expires && nonce && signature && !extra.length &&
    Number(expires) > Date.now() / 1000 &&
    equals(signature, signed(`${expires}.${nonce}`, secret)),
  );
}

export async function endAdminSession() {
  const client = await sessionSupabase();
  if (client) await client.auth.signOut({ scope: "local" });
  (await cookies()).delete(cookieName);
}
