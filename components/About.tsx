import Reveal from "./Reveal";

const stack = ["Next.js", "TypeScript", "Node.js", "Payload CMS", "PostgreSQL", "AWS"];

const stats = [
  { value: "5+", label: "YEARS SHIPPING" },
  { value: "12+", label: "PRODUCTION APPS" },
  { value: "4", label: "FEATURED CASE STUDIES" },
];

export default function About() {
  return (
    <section id="about" className="relative z-5 px-6 md:px-16 py-24 grid md:grid-cols-2 gap-14 items-start">
      <Reveal>
        <div className="section-tag mb-4">// 01 — ABOUT</div>
        <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight max-w-md">
          Ships production code the way you&apos;d plan a route: methodically,
          with a fallback for everything.
        </h2>
        <div className="flex flex-wrap gap-2.5 mt-5">
          {stack.map((s) => (
            <span key={s} className="stack-tag">{s}</span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150}>
        <p className="text-muted text-[15.5px] leading-relaxed max-w-md">
          Five years building AI-first applications, scalable SaaS platforms,
          and automation tools — from real-time trading systems to
          credit-repair platforms onboarding their first users. I work best
          alone on hard problems, then bring back something that just works.
        </p>
        <div className="flex gap-11 mt-10">
          {stats.map((s) => (
            <div key={s.label}>
              <b className="font-display text-3xl block">{s.value}</b>
              <span className="text-xs text-muted font-mono">{s.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
