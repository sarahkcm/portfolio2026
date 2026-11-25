import Link from "next/link";
import type { ReactNode } from "react";

export function Section({ id, title, note, children, tone = "plain" }: { id: string; title: string; note?: ReactNode; children: ReactNode; tone?: "plain" | "wash" }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-28 ${tone === "wash" ? "bg-surface" : ""}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-16">
          <div>
            <h2 id={`${id}-title`} className="text-[28px] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[32px]">{title}</h2>
            {note && <div className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink-3">{note}</div>}
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function IndependentTag({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-indep-soft px-2.5 py-0.5 text-xs font-medium text-indep ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-indep" aria-hidden />
      Independent project
    </span>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center rounded-md bg-wash px-2.5 py-1 text-[13px] text-ink-2">{children}</span>;
}

export function ButtonLink({ href, children, variant = "primary", external = false, download = false }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "ghost-dark"; external?: boolean; download?: boolean }) {
  const cls = {
    primary: "bg-accent text-white hover:bg-ink",
    secondary: "border border-line bg-surface text-ink hover:border-ink/30",
    "ghost-dark": "border border-white/20 text-white hover:border-white/50",
  }[variant];
  const base = `inline-flex h-11 items-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors ${cls}`;
  if (external || download) {
    return (
      <a href={href} className={base} {...(download ? { download: "" } : { target: "_blank", rel: "noopener noreferrer" })}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={base}>
      {children}
    </Link>
  );
}
