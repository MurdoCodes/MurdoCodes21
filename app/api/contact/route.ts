import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { name, email, message } = body as { name: string; email: string; message: string };

  // Forward to the standalone Express service (see /server), which
  // handles actual email sending (e.g. via Resend/Postmark) and lead
  // storage. Set EXPRESS_API_URL in .env.local once that service is
  // deployed. Falling back to just logging keeps local dev working
  // without the second service running.
  const expressUrl = process.env.EXPRESS_API_URL;

  if (expressUrl) {
    try {
      const res = await fetch(`${expressUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Express service rejected the request");
    } catch (err) {
      console.error("Failed to forward contact request:", err);
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }
  } else {
    console.log("New contact form submission:", { name, email, message });
  }

  return NextResponse.json({ ok: true });
}
