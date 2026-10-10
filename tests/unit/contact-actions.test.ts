import { beforeEach, describe, expect, it, vi } from "vitest";

const sendMock = vi.fn().mockResolvedValue({ error: null });

vi.mock("next/headers", () => ({
  headers: vi
    .fn()
    .mockResolvedValue(new Headers({ "x-forwarded-for": "1.2.3.4" })),
}));

vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: { send: sendMock },
  })),
}));

function formData(fields: Record<string, string>) {
  const data = new FormData();
  for (const [key, value] of Object.entries(fields)) data.set(key, value);
  return data;
}

describe("sendContactMessage", () => {
  beforeEach(() => {
    sendMock.mockClear();
    process.env.RESEND_API_KEY = "test-key";
  });

  it("rejects missing required fields without sending email", async () => {
    const { sendContactMessage } = await import("@/app/contact/actions");

    const result = await sendContactMessage(
      { status: "idle" },
      formData({ name: "", email: "", message: "" }),
    );

    expect(result.status).toBe("error");
    expect(result.fieldErrors?.name).toBeTruthy();
    expect(result.fieldErrors?.email).toBeTruthy();
    expect(result.fieldErrors?.message).toBeTruthy();
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("rejects an invalid email format", async () => {
    const { sendContactMessage } = await import("@/app/contact/actions");

    const result = await sendContactMessage(
      { status: "idle" },
      formData({ name: "Sam", email: "not-an-email", message: "Hi" }),
    );

    expect(result.status).toBe("error");
    expect(result.fieldErrors?.email).toBeTruthy();
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("silently succeeds for honeypot-filled submissions without sending email", async () => {
    const { sendContactMessage } = await import("@/app/contact/actions");

    const result = await sendContactMessage(
      { status: "idle" },
      formData({
        name: "Bot",
        email: "bot@example.com",
        message: "spam",
        company: "Acme",
      }),
    );

    expect(result.status).toBe("success");
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("sends the email and reports success for a valid submission", async () => {
    const { sendContactMessage } = await import("@/app/contact/actions");

    const result = await sendContactMessage(
      { status: "idle" },
      formData({ name: "Sam", email: "sam@example.com", message: "Hello" }),
    );

    expect(result.status).toBe("success");
    expect(sendMock).toHaveBeenCalledTimes(1);
  });
});
