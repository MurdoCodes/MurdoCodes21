import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { getProjects } from "@/data/projects";

export default function Projects() {
  const projects = getProjects();

  return (
    <section id="work" className="relative z-5 px-6 md:px-16 py-24">
      <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-medium max-w-lg">
          Featured work — case studies, not just screenshots.
        </h2>
        <div className="section-tag">{"// 03 — PROJECTS"}</div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-7">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
