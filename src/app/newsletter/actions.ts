"use server";

import { privilegedSupabase } from "@/lib/supabaseServer";

export async function subscribe(_previous: { message: string; success: boolean }, form: FormData) {
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  const success = { message: "You’re subscribed to AxStudios updates.", success: true };
  if (form.get("company_website")) return success;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || form.get("consent") !== "on") {
    return { success: false, message: "Enter a valid email and confirm you’d like to receive updates." };
  }

  const client = privilegedSupabase();
  if (!client) return { success: false, message: "Newsletter signup is temporarily unavailable." };
  const { error } = await client.from("newsletter_subscribers")
    .upsert({ email, consent_version: "newsletter-v1" }, { onConflict: "email", ignoreDuplicates: true });
  if (error) {
    console.error("Newsletter signup failed", error.code);
    return { success: false, message: "We couldn’t save your signup. Please try again." };
  }
  return success;
}
