import { Router } from "express";
import { Resend } from "resend";

const router = Router();
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

router.post("/", async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    if (resend) {
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL ?? "portfolio@murdocodes.com",
        to: process.env.CONTACT_TO_EMAIL ?? "hello@murdocodes.com",
        subject: `New portfolio inquiry from ${name}`,
        replyTo: email,
        text: message,
      });
    } else {
      // No email provider configured yet — log so nothing is silently lost
      console.log("Contact form submission (no email provider configured):", {
        name,
        email,
        message,
      });
    }

    // TODO: persist the lead to a database (e.g. via Prisma/Postgres)
    // once you want a record of inquiries beyond email.

    return res.json({ ok: true });
  } catch (err) {
    console.error("Failed to process contact submission:", err);
    return res.status(500).json({ error: "Failed to send message." });
  }
});

export default router;
