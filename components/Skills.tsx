import Reveal from "./Reveal";

type Skill = { name: string; level: 1 | 2 | 3 | 4 };
type Column = { title: string; skills: Skill[] };

const columns: Column[] = [
  {
    title: "FRONTEND",
    skills: [
      { name: "React / Next.js", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "Tailwind CSS", level: 3 },
      { name: "React Native", level: 3 },
    ],
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Node.js / Express", level: 4 },
      { name: "PostgreSQL", level: 3 },
      { name: "Payload CMS", level: 3 },
      { name: "AWS", level: 2 },
    ],
  },
  {
    title: "AI & AUTOMATION",
    skills: [
      { name: "Puppeteer / Playwright", level: 4 },
      { name: "OpenAI / Anthropic APIs", level: 3 },
      { name: "Socket.IO", level: 3 },
      { name: "Docker / CI-CD", level: 2 },
    ],
  },
];

function Dots({ level }: { level: number }) {
  return (
    <div className="flex gap-1.5">
      {[1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${i <= level ? "bg-ember" : "bg-line"}`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-5 px-6 md:px-16 py-24">
      <Reveal>
        <div className="section-tag mb-4">// 02 — TOOLBOX</div>
        <h2 className="font-display text-3xl md:text-4xl font-medium max-w-xl">
          Technologies and tools I use to build reliable, scalable products.
        </h2>
        <p className="text-muted text-sm mt-3">
          Dots show working depth — not a made-up percentage.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-px bg-line border border-line mt-14">
        {columns.map((col, i) => (
          <Reveal key={col.title} delay={i * 100} className="bg-bg p-8">
            <h3 className="section-tag mb-5">{col.title}</h3>
            <div className="space-y-0">
              {col.skills.map((s) => (
                <div
                  key={s.name}
                  className="flex justify-between items-center py-2.5 border-b border-line last:border-none text-[14.5px]"
                >
                  <span>{s.name}</span>
                  <Dots level={s.level} />
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
