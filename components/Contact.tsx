import Reveal from "./Reveal";

const contactLinks = [
  {
    label: "Email",
    value: "murdoc21daddie@gmail.com",
    href: "mailto:murdoc21daddie@gmail.com",
    hint: "Best for formal inquiries",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/lidel-kim-daddie",
    href: "https://www.linkedin.com/in/lidel-kim-daddie/",
    hint: "Connect for roles & collaborations",
  },
  {
    label: "WhatsApp",
    value: "+63 949 396 7410",
    href: "https://wa.me/639493967410",
    hint: "Quick messages welcome",
  },
  {
    label: "GitHub",
    value: "github.com/MurdoCodes",
    href: "https://github.com/MurdoCodes",
    hint: "See my code & contributions",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-5 px-6 md:px-16 py-28 text-center"
    >
      <Reveal>
        <div className="section-tag flex justify-center mb-4">
          {"// 04 — CONTACT"}
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-medium max-w-2xl mx-auto">
          Have a project, or a role worth climbing toward?
        </h2>
        <p className="text-muted max-w-md mx-auto mt-5 text-[15.5px]">
          Reach out directly — I&apos;m open to full-time roles, contracts, and
          interesting projects.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-12 text-left">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="group bg-card border border-line rounded-md p-6 transition-colors hover:border-ember/40"
            >
              <span className="section-tag text-[11px]">
                {link.label.toUpperCase()}
              </span>
              <p className="font-display text-lg font-medium mt-2 group-hover:text-ember transition-colors">
                {link.value}
              </p>
              <p className="text-muted text-xs mt-1.5">{link.hint}</p>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
