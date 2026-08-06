import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Contours from "@/components/Contours";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getProjectBySlug, getProjects } from "@/data/projects";

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} | MurdoCodes`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <Contours />
      <Nav />

      <article className="relative z-5 px-6 md:px-16 py-16 max-w-3xl mx-auto">
        <Link href="/#work" className="font-mono text-xs text-ember hover:underline">
          ← Back to projects
        </Link>

        <Reveal className="mt-8">
          <div className="section-tag mb-4">CASE STUDY</div>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight">
            {project.name}
          </h1>
          <p className="text-muted mt-5 text-lg leading-relaxed">{project.summary}</p>

          <div className="flex flex-wrap gap-2.5 mt-7">
            {project.stack.map((tag) => (
              <span key={tag} className="stack-tag">{tag}</span>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-ember text-bg font-semibold text-sm px-6 py-3 rounded-sm"
              >
                Visit live site ↗
              </a>
            )}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Reveal>
            <h2 className="section-tag mb-3">THE PROBLEM</h2>
            <p className="text-[15px] leading-relaxed text-muted">{project.problem}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-tag mb-3">MY ROLE</h2>
            <p className="text-[15px] leading-relaxed text-muted">{project.role}</p>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="section-tag mb-3">THE OUTCOME</h2>
            <p className="text-[15px] leading-relaxed text-muted">{project.outcome}</p>
          </Reveal>
        </div>
      </article>

      <Footer />
    </>
  );
}
