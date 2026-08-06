import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-card border border-line rounded-md overflow-hidden">
      <div className="relative h-48 flex items-center justify-center font-display text-[15px] text-muted">
        <div className="absolute inset-0 bg-gradient-to-br from-ember/10 to-transparent" />
        <span className="relative">{project.thumbLabel}</span>
      </div>
      <div className="p-7">
        <h3 className="font-display text-xl font-medium mb-2.5">{project.name}</h3>
        <p className="text-muted text-sm leading-relaxed mb-4">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.slice(0, 3).map((tag) => (
            <span key={tag} className="stack-tag text-[10.5px] px-2.5 py-1.5">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-5 font-mono text-xs text-ember">
          <Link href={`/projects/${project.slug}`} className="hover:underline">
            View case study →
          </Link>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:underline">
              Live site ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
