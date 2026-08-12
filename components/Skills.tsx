import Reveal from "./Reveal";

type Category = { title: string; skills: string[] };

const categories: Category[] = [
  {
    title: "LANGUAGES",
    skills: [
      "TypeScript",
      "JavaScript",
      "PHP",
      "SQL / NoSQL",
      "HTML5",
      "CSS3",
      "XML",
      "JSON",
    ],
  },
  {
    title: "FRAMEWORKS",
    skills: [
      "React",
      "React Native",
      "Expo",
      "Next.js",
      "Node.js",
      "Express.js",
      "Laravel",
      "Vue.js",
      "Prisma ORM",
      "Tailwind CSS",
      "WordPress",
    ],
  },
  {
    title: "DATABASES",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    title: "CLOUD & DEVOPS",
    skills: ["AWS", "Docker", "Git", "Vagrant", "Nginx", "PM2", "Linux (Ubuntu)"],
  },
  {
    title: "AI & LLM",
    skills: [
      "OpenAI (GPT-4, Assistants API)",
      "Google Gemini AI",
      "Google AI Studio",
      "Anthropic Claude API",
      "Perplexity API",
      "ElevenLabs",
      "AI Agent Development",
      "Prompt Engineering",
      "Function / Tool Calling",
      "RAG",
      "AI Voice Integrations",
      "AI Workflow Automation",
    ],
  },
  {
    title: "INTEGRATIONS & APIS",
    skills: [
      "Stripe",
      "Twilio",
      "Postmark",
      "Brevo",
      "AWS SDK",
      "Axios",
      "SVIX",
      "Puppeteer",
      "WebSocket / Socket.IO",
      "WebRTC",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-5 px-6 md:px-16 py-24">
      <Reveal>
        <div className="section-tag mb-4">{"// 02 — TOOLBOX"}</div>
        <h2 className="font-display text-3xl md:text-4xl font-medium max-w-xl">
          Technologies and tools I use to build reliable, scalable products.
        </h2>
        <p className="text-muted text-sm mt-3">
          Full stack coverage from frontend and mobile through AI, automation, and cloud.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line mt-14">
        {categories.map((category, i) => (
          <Reveal key={category.title} delay={i * 80} className="bg-bg p-8">
            <h3 className="section-tag mb-5">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="stack-tag text-[10.5px] px-2.5 py-1.5">
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
