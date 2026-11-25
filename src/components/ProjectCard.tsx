import Link from "next/link";
import type { Project } from "@/content/projects";
import { FlowDiagram } from "@/components/FlowDiagram";

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="relative grid gap-10 rounded-2xl border border-line bg-paper p-6 sm:p-9 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
      <div>
        <p className="text-sm font-medium text-indep">{project.name}</p>
        <h3 className="mt-1.5 text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-[28px]">{project.title}</h3>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-2">{project.summary}</p>
        <p className="mt-5 text-[13px] text-ink-3">{project.status}</p>
        <Link href={`/projects/${project.slug}/`} className="mt-6 inline-flex text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">
          Read the MAXIMUS case study
        </Link>
      </div>
      <div className="space-y-8">
        {project.highlights && (
          <dl className="grid grid-cols-2 divide-x divide-line border-y border-line sm:grid-cols-4">
            {project.highlights.map((h) => (
              <div key={h.label} className="px-3 py-3.5 first:pl-0">
                <dd className="text-xl font-semibold tracking-tight text-ink">{h.value}</dd>
                <dt className="mt-1 text-xs leading-snug text-ink-3">{h.label}</dt>
              </div>
            ))}
          </dl>
        )}
        <FlowDiagram flow={project.flow} compact />
      </div>
    </article>
  );
}

export function ProjectColumn({ project }: { project: Project }) {
  return (
    <article className="flex flex-col border-t-2 border-indep/50 pt-5">
      <p className="text-sm font-medium text-indep">{project.name}</p>
      <h3 className="mt-1 text-lg font-semibold tracking-tight text-ink">{project.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{project.summary}</p>
      <p className="mt-4 text-[13px] text-ink-3">{project.status}</p>
      <Link href={`/projects/${project.slug}/`} className="mt-4 inline-flex text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">
        Read about {project.name}
      </Link>
    </article>
  );
}
