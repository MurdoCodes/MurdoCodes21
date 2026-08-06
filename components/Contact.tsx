"use client";

import { useState, type ComponentType } from "react";
import {
  HiOutlineMail,
  HiOutlineCalendar,
  HiOutlineBriefcase,
} from "react-icons/hi";
import { FaLinkedin, FaWhatsapp, FaGithub, FaFilePdf } from "react-icons/fa";
import Reveal from "./Reveal";

const RESUME_ID = "1T7GdF9iy-Q_eFL2ojTN49MZkP9sGZROO";
const RESUME_VIEW = `https://drive.google.com/file/d/${RESUME_ID}/view?usp=sharing`;
const RESUME_DOWNLOAD = `https://drive.google.com/uc?export=download&id=${RESUME_ID}`;
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

const hiringDetails = [
  "Open to remote full-time, contract, and freelance work.",
  "Davao City, Philippines (UTC+8) — flexible overlap with US & AU time zones.",
  "For roles: email or LinkedIn · Quick questions: WhatsApp.",
  "Typically replies within 24 hours.",
  "Remote-first · Open to relocation for the right role.",
];

type IconComponent = ComponentType<{ className?: string }>;

type LinkCard = {
  type: "link";
  label: string;
  value: string;
  href: string;
  hint: string;
  icon: IconComponent;
  copyValue?: string;
  external?: boolean;
};

type ResumeCard = {
  type: "resume";
  label: string;
  value: string;
  hint: string;
  icon: IconComponent;
};

type ContactCard = LinkCard | ResumeCard;

const emailCard: LinkCard = {
  type: "link",
  label: "Email",
  value: "murdoc21daddie@gmail.com",
  href: "mailto:murdoc21daddie@gmail.com",
  hint: "Primary inbox — best for formal inquiries",
  icon: HiOutlineMail,
  copyValue: "murdoc21daddie@gmail.com",
};

const contactCards: ContactCard[] = [
  {
    type: "resume",
    label: "Resume",
    value: "Lidel Kim Bautista Daddie",
    hint: "Full work history, skills & experience",
    icon: FaFilePdf,
  },
  {
    type: "link",
    label: "LinkedIn",
    value: "linkedin.com/in/lidel-kim-daddie",
    href: "https://www.linkedin.com/in/lidel-kim-daddie/",
    hint: "Connect for roles & collaborations",
    icon: FaLinkedin,
    external: true,
  },
  {
    type: "link",
    label: "WhatsApp",
    value: "+63 949 396 7410",
    href: "https://wa.me/639493967410",
    hint: "Quick messages welcome",
    icon: FaWhatsapp,
    copyValue: "+639493967410",
    external: true,
  },
  {
    type: "link",
    label: "GitHub",
    value: "github.com/MurdoCodes",
    href: "https://github.com/MurdoCodes",
    hint: "See my code & contributions",
    icon: FaGithub,
    external: true,
  },
  {
    type: "link",
    label: "Schedule a call",
    value: CALENDLY_URL ? "Book a 15-min intro" : "Email to schedule",
    href: CALENDLY_URL ?? "mailto:murdoc21daddie@gmail.com?subject=Intro call request",
    hint: CALENDLY_URL
      ? "Pick a time that works for you"
      : "Add your Calendly URL in .env — email works in the meantime",
    icon: HiOutlineCalendar,
    external: Boolean(CALENDLY_URL),
  },
  {
    type: "link",
    label: "Featured work",
    value: "View case studies",
    href: "#work",
    hint: "Production apps & project deep dives",
    icon: HiOutlineBriefcase,
  },
];

function CardIcon({ icon: Icon }: { icon: IconComponent }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-line bg-bg text-ember group-hover:border-ember/40 transition-colors">
      <Icon className="h-[18px] w-[18px]" aria-hidden />
    </span>
  );
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="font-mono text-[10px] text-muted hover:text-ember transition-colors"
    >
      {copied ? "Copied!" : "Copy to clipboard"}
    </button>
  );
}

function ContactLinkCard({
  card,
  featured = false,
}: {
  card: LinkCard;
  featured?: boolean;
}) {
  const isExternal = card.external ?? card.href.startsWith("http");
  const Icon = card.icon;

  return (
    <a
      href={card.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="group bg-card border border-line rounded-md p-6 transition-colors hover:border-ember/40 flex flex-col"
    >
      <div
        className={`flex gap-4 ${featured ? "sm:items-center sm:justify-between" : "items-start"}`}
      >
        <div className="flex items-start gap-4 min-w-0 flex-1">
          <CardIcon icon={Icon} />
          <div className="min-w-0 flex-1">
            <span className="section-tag text-[11px]">{card.label.toUpperCase()}</span>
            <p className="font-display text-lg font-medium mt-2 group-hover:text-ember transition-colors">
              {card.value}
            </p>
            <p className="text-muted text-xs mt-1.5">{card.hint}</p>
          </div>
        </div>
        {featured && card.copyValue && (
          <div className="shrink-0 pl-14 sm:pl-0">
            <CopyButton value={card.copyValue} />
          </div>
        )}
      </div>
      {!featured && card.copyValue && (
        <div className="mt-auto pt-3 pl-14">
          <CopyButton value={card.copyValue} />
        </div>
      )}
    </a>
  );
}

function ResumeCardBlock({ card }: { card: ResumeCard }) {
  const Icon = card.icon;

  return (
    <div className="group bg-card border border-line rounded-md p-6 flex flex-col">
      <div className="flex items-start gap-4">
        <CardIcon icon={Icon} />
        <div className="min-w-0 flex-1">
          <span className="section-tag text-[11px]">{card.label.toUpperCase()}</span>
          <p className="font-display text-lg font-medium mt-2">{card.value}</p>
          <p className="text-muted text-xs mt-1.5">{card.hint}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-auto pt-4 pl-14 font-mono text-xs text-ember">
        <a
          href={RESUME_VIEW}
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          View PDF →
        </a>
        <a
          href={RESUME_DOWNLOAD}
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          Download ↓
        </a>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative z-5 px-6 md:px-16 py-28 text-center">
      <Reveal>
        <div className="section-tag flex justify-center mb-4">{"// 04 — CONTACT"}</div>
        <h2 className="font-display text-3xl md:text-5xl font-medium max-w-2xl mx-auto">
          Have a project, or a role worth climbing toward?
        </h2>
        <p className="text-muted max-w-md mx-auto mt-5 text-[15.5px]">
          Reach out directly — I&apos;m open to full-time roles, contracts, and
          interesting projects.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="max-w-3xl mx-auto mt-10 bg-card border border-line rounded-md p-6 md:p-8 text-left">
          <p className="section-tag text-[11px] mb-4">HIRING INFO</p>
          <ul className="space-y-2.5 text-[14px] text-muted leading-relaxed">
            {hiringDetails.map((detail) => (
              <li key={detail} className="flex gap-2.5">
                <span className="text-ember shrink-0">→</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="max-w-3xl mx-auto mt-8 text-left space-y-4">
          <ContactLinkCard card={emailCard} featured />

          <div className="grid sm:grid-cols-2 gap-4">
            {contactCards.map((card) =>
              card.type === "resume" ? (
                <ResumeCardBlock key={card.label} card={card} />
              ) : (
                <ContactLinkCard key={card.label} card={card} />
              )
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
