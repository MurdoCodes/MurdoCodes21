"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiTypescript,
  SiPuppeteer,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { FiCloud } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projectsData } from "@/const/const";

const techIconMap: Record<string, ReactNode> = {
  React: <SiReact className="size-4" />,
  "Node.js": <SiNodedotjs className="size-4" />,
  PostgreSQL: <SiPostgresql className="size-4" />,
  TypeScript: <SiTypescript className="size-4" />,
  Puppeteer: <SiPuppeteer className="size-4" />,
  AWS: <FiCloud className="size-4" />,
  Firebase: <SiFirebase className="size-4" />,
  "React Native": <SiReact className="size-4" />,
  "Next.js": <SiNextdotjs className="size-4" />,
  Tailwind: <SiTailwindcss className="size-4" />,
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A selection of work spanning e-commerce, automation, mobile, and web
            platforms.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group bg-card border border-border rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-primary/20"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary-soft">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          title={tech}
                          className="p-1.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {techIconMap[tech] ?? (
                            <span className="text-xs font-medium">{tech}</span>
                          )}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 text-sm">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="text-text-muted hover:text-primary transition-colors"
                        >
                          Live
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-primary transition-colors"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
