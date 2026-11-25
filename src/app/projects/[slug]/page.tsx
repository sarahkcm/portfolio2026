import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { Chip, IndependentTag } from "@/components/ui";
import { FlowDiagram } from "@/components/FlowDiagram";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: `${p.name}: ${p.title}`, description: p.summary, openGraph: { title: `${p.name}: ${p.title}`, description: p.summary } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="mx-auto max-w-4xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
      <Link href="/#projects" className="inline-flex items-center gap-1.5 text-sm text-ink-2 hover:text-accent">
        <ArrowLeft size={15} aria-hidden /> All projects
      </Link>

      <header className="mt-10">
        <IndependentTag />
        <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-ink sm:text-[56px]">
          {project.name}
          <span className="mt-1 block font-medium text-ink-3">{project.title}</span>
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-ink-2">{project.summary}</p>
        <p className="mt-5 text-sm text-ink-3">Status: {project.status}</p>
      </header>

      {project.highlights && (
        <dl className="mt-10 grid grid-cols-2 divide-x divide-line border-y border-line sm:grid-cols-4">
          {project.highlights.map((h) => (
            <div key={h.label} className="px-4 py-4 first:pl-0">
              <dd className="text-2xl font-semibold tracking-tight text-ink">{h.value}</dd>
              <dt className="mt-1 text-xs text-ink-3">{h.label}</dt>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-12 rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <FlowDiagram flow={project.flow} />
      </div>

      <div className="mt-14 space-y-12">
        {project.sections.map((s) => (
          <section key={s.heading} aria-labelledby={`h-${s.heading}`}>
            <h2 id={`h-${s.heading}`} className="text-[22px] font-semibold tracking-tight text-ink">{s.heading}</h2>
            {s.body?.map((b) => <p key={b} className="mt-4 max-w-3xl text-[16px] leading-relaxed text-ink-2">{b}</p>)}
            {s.list && (
              <ul className="mt-4 max-w-3xl space-y-2.5 text-[16px] leading-relaxed text-ink-2">
                {s.list.map((i) => (
                  <li key={i} className="flex gap-3"><span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />{i}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <section aria-labelledby="h-stack">
          <h2 id="h-stack" className="text-xl font-semibold tracking-tight text-ink">Stack</h2>
          <ul className="mt-4 flex flex-wrap gap-2">{project.stack.map((t) => <li key={t}><Chip>{t}</Chip></li>)}</ul>
        </section>
      </div>

      <nav aria-label="Next project" className="mt-20 border-t border-line pt-8">
        <Link href={`/projects/${next.slug}/`} className="group inline-flex flex-col">
          <span className="text-xs text-ink-3">Next project</span>
          <span className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-ink group-hover:text-accent">
            {next.name}: {next.title} <ArrowRight size={17} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </nav>
    </article>
  );
}
