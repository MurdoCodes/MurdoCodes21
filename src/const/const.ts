const navLinksArray = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const aboutData = {
  title: "About Me",
  subtitle: "Passionate Coder & Adventurer",
  description:
    "I'm a full stack developer with 5+ years of experience building AI-first applications, scalable SaaS platforms, and automation tools. I thrive on solving complex problems with clean, maintainable code — and when I'm not at the keyboard, you'll find me outdoors pushing limits and exploring new trails.",
  bulletPoints: [
    "Lone wolf mentality",
    "Climbing mountains",
    "Building robust solutions",
  ],
  image: "/me/5.jpg",
};

type Skill = {
  name: string;
  level: number;
};

type SkillCategory = {
  category: string;
  skills: Skill[];
};

const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS / Tailwind", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 75 },
      { name: "REST APIs", level: 88 },
      { name: "Firebase", level: 85 },
      { name: "AWS", level: 78 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 92 },
      { name: "Webpack", level: 75 },
      { name: "Puppeteer", level: 88 },
      { name: "React Native", level: 82 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 78 },
    ],
  },
];

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
};

const projectsData: Project[] = [
  {
    title: "Ascarma Company Portfolio",
    description:
      "A corporate portfolio website for Ascarma Company, built on a modern, full-stack architecture utilizing Payload CMS, Next.js, and PostgreSQL.",
    image: "/projects/ascarma.png",
    tech: ["React", "Next.js", "Payload CMS", "Node.js", "PostgreSQL"],
    liveUrl: "https://ascarma.com.au/",
    repoUrl: "#",
  },
  {
    title: "XRAY AI Automation",
    description:
      "A web automation platform for XRAY AI, designed to audit website health, evaluate AI search engine visibility, and perform comprehensive digital performance checks.",
    image: "/projects/xray-ai.png",
    tech: [
      "Next.js",
      "Tailwind",
      "Node.js",
      "PostgreSQL",
      "Anthropic",
      "Perplixity",
      "OpenAI",
      "Playwright",
      "Stripe",
      "Brevo",
    ],
    liveUrl: "https://xrayai.online/",
    repoUrl: "#",
  },
  {
    title: "Credit SideKick",
    description:
      "A self-service credit management platform that enables users to monitor their credit, access financial education, and repair their credit reports, currently onboarding founding members ahead of its iOS and Android app launch.",
    image: "/projects/credit-sidekick.png",
    tech: [
      "React Native",
      "Expo",
      "Firebase",
      "TypeScript",
      "Tailwind",
      "nativewind",
      "redux",
      "zustand",
      "nodejs",
      "express.js",
      "aws",
      "postmark",
      "stripe",
      "socket.io",
      "redis",
      "prisma",
      "Google Gemini",
    ],
    liveUrl: "https://creditsidekick.ai/",
    repoUrl: "#",
  },
  {
    title: "Live Traders",
    description:
      "A real-time live trading platform built on WordPress, utilizing a custom plugin for core business logic, Red5Pro WebRTC for low-latency live video streaming, and Socket.IO for instant data communication.",
    image: "/projects/livetraders.png",
    tech: ["WordPress", "Node.js", "Express.js", "Socket.IO", "Red5Pro WebRTC"],
    liveUrl: "https://livetraders.com/",
    repoUrl: "#",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/MurdoCodes",
    icon: "github" as const,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lidel-kim-daddie/",
    icon: "linkedin" as const,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/bagduybagduyniminokoy",
    icon: "instagram" as const,
  },
];

export { navLinksArray, aboutData, skillsData, projectsData, socialLinks };
export type { Skill, SkillCategory, Project };
