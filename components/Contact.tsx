"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative z-5 px-6 md:px-16 py-28 text-center">
      <Reveal>
        <div className="section-tag flex justify-center mb-4">{"// 04 — CONTACT"}</div>
        <h2 className="font-display text-3xl md:text-5xl font-medium max-w-2xl mx-auto">
          Have a project, or a role worth climbing toward?
        </h2>
        <p className="text-muted max-w-md mx-auto mt-5 mb-10 text-[15.5px]">
          Drop a message and I&apos;ll get back to you as soon as possible.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left space-y-4">
          <input
            required
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border border-line rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-ember transition-colors"
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border border-line rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-ember transition-colors"
          />
          <textarea
            required
            placeholder="Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-transparent border border-line rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-ember transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-ember text-bg font-semibold py-3.5 rounded-sm text-sm transition-opacity disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : status === "sent" ? "Message sent" : "Send message"}
          </button>
          {status === "error" && (
            <p className="text-xs text-center text-ember">
              Couldn&apos;t send that. Try again or email me directly.
            </p>
          )}
        </form>
      </Reveal>

      <div className="flex gap-7 justify-center font-mono text-xs text-muted mt-12">
        <a href="https://github.com/MurdoCodes" target="_blank" rel="noreferrer" className="hover:text-ember transition-colors">
          GITHUB
        </a>
        <a href="https://www.linkedin.com/in/lidel-kim-daddie/" target="_blank" rel="noreferrer" className="hover:text-ember transition-colors">
          LINKEDIN
        </a>
        <a href="mailto:hello@murdocodes.com" className="hover:text-ember transition-colors">
          EMAIL
        </a>
      </div>
    </section>
  );
}
