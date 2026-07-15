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
    title: "E-Commerce Platform",
    description:
      "A full-stack online store with real-time inventory, secure checkout, and an admin dashboard for managing products and orders.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop",
    tech: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "https://github.com/MurdoCodes",
  },
  {
    title: "AI Automation Suite",
    description:
      "A SaaS toolkit for web scraping, data extraction, and workflow automation powered by Puppeteer and AI integrations.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    tech: ["TypeScript", "Puppeteer", "AWS"],
    liveUrl: "#",
    repoUrl: "https://github.com/MurdoCodes",
  },
  {
    title: "Mobile Fitness Tracker",
    description:
      "A cross-platform React Native app for tracking workouts, setting goals, and visualizing progress with offline support.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop",
    tech: ["React Native", "Firebase", "TypeScript"],
    liveUrl: "#",
    repoUrl: "https://github.com/MurdoCodes",
  },
  {
    title: "Portfolio CMS",
    description:
      "A headless CMS-powered portfolio builder with dynamic content management, SEO optimization, and blazing-fast delivery.",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=500&fit=crop",
    tech: ["Next.js", "Tailwind", "Node.js"],
    liveUrl: "#",
    repoUrl: "https://github.com/MurdoCodes",
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
