import { NextResponse } from "next/server";
import { privilegedSupabase } from "@/lib/supabaseServer";

const origins = new Set([
  "http://localhost:3000",
  "https://axstudios.tech",
  "https://axstudiostech.netlify.app",
]);

const fields = {
  name: 150, email: 254, company: 150, phone: 60, website: 300, business: 5000,
  automation: 5000, interest: 120, projectSize: 120, timeline: 120,
} as const;

function cors(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && !origins.has(origin)) return undefined;
  return {
    Vary: "Origin",
    "Cache-Control": "no-store",
    ...(origin ? {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    } : {}),
  };
}

export function OPTIONS(request: Request) {
  const headers = cors(request);
  return new Response(null, { status: headers ? 204 : 403, headers });
}

export async function POST(request: Request) {
  const headers = cors(request);
  if (!headers) return NextResponse.json({ success: false, message: "Origin is not allowed." }, { status: 403 });
  const reply = (success: boolean, message: string, status: number) => NextResponse.json({ success, message }, { status, headers });

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return reply(false, "Use JSON for contact submissions.", 415);
  }

  const client = privilegedSupabase();
  if (!client) return reply(false, "Contact storage is unavailable.", 503);

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 15000) return reply(false, "Your inquiry is too long.", 413);
    body = JSON.parse(raw);
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("Invalid body");
  } catch {
    return reply(false, "The inquiry is invalid.", 400);
  }

  const values = {} as Record<keyof typeof fields, string>;
  for (const key of Object.keys(fields) as (keyof typeof fields)[]) {
    const raw = body[key];
    if (raw != null && typeof raw !== "string") return reply(false, "The inquiry is invalid.", 400);
    const value = typeof raw === "string" ? raw.trim() : "";
    if (value.length > fields[key]) return reply(false, "One of the fields exceeds its maximum length.", 400);
    values[key] = value;
  }
  if (!values.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) || !values.business || !values.automation) {
    return reply(false, "Enter your name, a valid email, business details, and project details.", 400);
  }

  const { projectSize, ...submission } = values;
  const { error } = await client.from("contact_submissions").insert({ ...submission, project_size: projectSize });
  if (error) {
    console.error("Contact storage failed", error.code);
    return reply(false, "We could not save your inquiry. Please try again.", 500);
  }
  return reply(true, "Your inquiry was received.", 201);
}
