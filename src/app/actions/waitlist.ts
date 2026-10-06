"use server";

export type WaitlistState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Partial<Record<"name" | "phone" | "email" | "role", string>> };

const ROLES = ["farmer", "buyer", "partner", "investor"] as const;

// Saves a waitlist signup by POSTing it as JSON to WAITLIST_WEBHOOK_URL
// (e.g. a Google Apps Script web app that appends a row to a Sheet;
// see docs/waitlist-google-sheet.md).
export async function joinWaitlist(_prev: WaitlistState, formData: FormData): Promise<WaitlistState> {
  // Honeypot: real people never see or fill this field.
  if (formData.get("website")) return { status: "success" };

  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const role = String(formData.get("role") ?? "");
  const community = String(formData.get("community") ?? "").trim();

  const fieldErrors: NonNullable<Extract<WaitlistState, { status: "error" }>["fieldErrors"]> = {};
  if (name.length < 2) fieldErrors.name = "Please enter your name.";
  if (phone && !/^\+?[\d\s-]{9,15}$/.test(phone)) fieldErrors.phone = "Enter a valid phone number.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = "Enter a valid email address.";
  if (!phone && !email) fieldErrors.phone = "Enter a phone number or an email address.";
  if (!ROLES.includes(role as (typeof ROLES)[number])) fieldErrors.role = "Choose one.";
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors };
  }

  const signup = {
    name: name.slice(0, 120),
    phone: phone.slice(0, 30),
    email: email.slice(0, 120),
    role,
    community: community.slice(0, 120),
    createdAt: new Date().toISOString(),
  };

  const webhook = process.env.WAITLIST_WEBHOOK_URL;
  if (!webhook) {
    if (process.env.NODE_ENV !== "production") {
      console.log(`[waitlist] WAITLIST_WEBHOOK_URL not set; signup: ${JSON.stringify(signup)}`);
      return { status: "success" };
    }
    console.error("[waitlist] WAITLIST_WEBHOOK_URL is not configured");
    return { status: "error", message: "Sign-ups are not open yet. Please try again soon." };
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signup),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error("[waitlist] failed to save signup", err);
    return { status: "error", message: "Something went wrong. Please try again." };
  }

  return { status: "success" };
}
