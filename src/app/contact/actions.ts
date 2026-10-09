"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

const CONTACT_TO = "samueladams412@gmail.com";
const CONTACT_FROM = "Sam Adams <contact@mail.samuelkadams.com>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

// Best-effort only: resets whenever the function instance is recycled. Fine
// for a low-traffic personal contact form, not a substitute for a real store.
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionsByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );

  if (timestamps.length >= RATE_LIMIT_MAX) {
    submissionsByIp.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  submissionsByIp.set(ip, timestamps);
  return false;
}

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: real visitors never fill this in. Bots that do get a fake
  // success with no email sent, so they don't learn to look elsewhere.
  if (String(formData.get("company") ?? "").trim().length > 0) {
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Enter your name.";
  if (!email || !EMAIL_RE.test(email)) {
    fieldErrors.email = "Enter a valid email address.";
  }
  if (!message) fieldErrors.message = "Enter a message.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors };
  }

  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Too many submissions. Please try again in a few minutes.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; cannot send contact message.");
    return {
      status: "error",
      message:
        "Something went wrong sending your message. Please email directly instead.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message:
          "Something went wrong sending your message. Please email directly instead.",
      };
    }
  } catch (err) {
    console.error("Failed to send contact message:", err);
    return {
      status: "error",
      message:
        "Something went wrong sending your message. Please email directly instead.",
    };
  }

  return { status: "success" };
}
