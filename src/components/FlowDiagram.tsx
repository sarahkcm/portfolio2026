import type { Project } from "@/content/projects";

// Accessible, text-based pipeline: an ordered list drawn as connected steps.
export function FlowDiagram({ flow, compact = false }: { flow: Project["flow"]; compact?: boolean }) {
  return (
    <figure>
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="text-sm font-semibold text-ink">{flow.title}</span>
        <span className="text-[13px] text-ink-3">{flow.caption}</span>
      </figcaption>
      <ol className={`mt-5 grid gap-x-4 ${compact ? "gap-y-4 grid-cols-2 sm:grid-cols-3" : "gap-y-6 sm:grid-cols-2 lg:grid-cols-3"}`}>
        {flow.steps.map((s, i) => (
          <li key={`${s.label}-${i}`} className="border-t-2 border-accent/70 pt-3">
            <p className="flex items-baseline gap-2 text-sm font-semibold text-ink">
              <span className="font-mono text-xs text-accent">{i + 1}</span>
              {s.label}
            </p>
            {!compact && <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">{s.detail}</p>}
          </li>
        ))}
      </ol>
    </figure>
  );
}
