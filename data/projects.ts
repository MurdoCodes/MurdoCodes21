export type Project = {
  slug: string;
  name: string;
  thumbLabel: string;
  summary: string;
  problem: string;
  role: string;
  outcome: string;
  stack: string[];
  liveUrl?: string;
  codeUrl?: string;
};

// This array is the placeholder "database". When Payload CMS is wired up,
// replace getProjects()/getProjectBySlug() bodies with fetch calls to
// Payload's REST API (e.g. `${PAYLOAD_URL}/api/projects`) and this file
// can be deleted. Keeping the same field names means zero changes
// needed in any component that consumes Project.
const projects: Project[] = [
  {
    slug: "ascarma-company-portfolio",
    name: "Ascarma Company Portfolio",
    thumbLabel: "ASCARMA",
    summary:
      "A corporate portfolio website for Ascarma Company, built on a modern, full-stack architecture utilizing Payload CMS, Next.js, and PostgreSQL.",
    problem:
      "Ascarma needed a corporate site their non-technical team could update themselves, without waiting on a developer for every content change.",
    role:
      "Designed and built the full stack: Payload CMS content models, Next.js frontend, and PostgreSQL data layer, plus editor training for the client's team.",
    outcome:
      "Shipped a fast, SEO-friendly site with a self-serve admin panel, cutting content-update turnaround from days to minutes.",
    stack: ["Payload CMS", "Next.js", "PostgreSQL"],
    liveUrl: "https://ascarma.com.au/",
  },
  {
    slug: "xray-ai-automation",
    name: "XRAY AI Automation",
    thumbLabel: "XRAY AI",
    summary:
      "A web automation platform for XRAY AI, designed to audit website health, evaluate AI search engine visibility, and perform comprehensive digital performance checks.",
    problem:
      "Businesses had no easy way to see how visible their site was to AI search engines and crawlers, on top of standard technical health checks.",
    role:
      "Built the automation and audit pipeline end-to-end using Playwright, integrated multiple AI providers, and wired up billing.",
    outcome:
      "Delivered an automated multi-point audit tool covering technical health, AI visibility, and performance, with Stripe billing built in.",
    stack: ["Anthropic", "Perplexity", "OpenAI", "Playwright", "Stripe", "Brevo"],
    liveUrl: "https://xrayai.online/",
  },
  {
    slug: "credit-sidekick",
    name: "Credit SideKick",
    thumbLabel: "CREDIT SIDEKICK",
    summary:
      "A self-service credit management platform enabling users to monitor their credit, access financial education, and repair their credit reports, currently onboarding founding members ahead of its iOS and Android app launch.",
    problem:
      "Consumers needed an affordable, self-service way to monitor and repair their credit without hiring an expensive credit-repair agency.",
    role:
      "Full-stack build of the web platform and mobile app foundations: real-time features via Socket.IO, Redis caching, Prisma data layer, and Stripe subscriptions.",
    outcome:
      "Currently onboarding founding members pre-launch, with iOS and Android apps in progress on the same backend.",
    stack: [
      "Expo",
      "NativeWind",
      "Redux",
      "Zustand",
      "Node.js",
      "Express",
      "AWS",
      "Postmark",
      "Stripe",
      "Socket.IO",
      "Redis",
      "Prisma",
      "Google Gemini",
    ],
    liveUrl: "https://creditsidekick.ai/",
  },
  {
    slug: "live-traders",
    name: "Live Traders",
    thumbLabel: "LIVE TRADERS",
    summary:
      "A real-time live trading platform built on WordPress, utilizing a custom plugin for core business logic, Red5Pro WebRTC for low-latency live video streaming, and Socket.IO for instant data communication.",
    problem:
      "The client needed low-latency live video streaming combined with real-time trading data, layered on top of an existing WordPress site.",
    role:
      "Built a custom WordPress plugin for the core business logic, integrated Red5Pro WebRTC streaming, and added Socket.IO for instant data sync.",
    outcome:
      "Delivered a stable low-latency streaming experience for live trading sessions, now running in production.",
    stack: ["WordPress", "Express.js", "Socket.IO", "Red5Pro WebRTC"],
    liveUrl: "https://livetraders.com/",
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
