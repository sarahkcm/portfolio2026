import { Check } from "lucide-react";
import { checks } from "@/content/profile";

// Hero panel styled as a test run. Each assertion restates a confirmed fact shown in full below.
export function CheckRun() {
  const total = checks.reduce((n, s) => n + s.items.length, 0);
  let i = 0;
  return (
    <figure className="rounded-2xl border border-line bg-surface shadow-[0_24px_48px_-32px_rgba(27,29,58,0.35)]">
      <figcaption className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <span className="font-mono text-[13px] text-ink-2">profile.checks</span>
        <span className="check-sum font-mono text-[13px] text-pass" style={{ ["--n" as string]: total }}>
          {total} passed
        </span>
      </figcaption>
      <div className="space-y-5 px-5 py-5">
        {checks.map((suite) => (
          <div key={suite.suite}>
            <p className={`text-[13px] font-medium ${suite.scope === "independent" ? "text-indep" : "text-accent"}`}>{suite.suite}</p>
            <ul className="mt-2.5 space-y-2">
              {suite.items.map((item) => {
                const idx = i++;
                return (
                  <li key={item} className="check-line flex items-start gap-3 font-mono text-[13px] leading-snug text-ink" style={{ ["--i" as string]: idx }}>
                    <span className="check-mark mt-px inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-pass-soft text-pass" style={{ ["--i" as string]: idx }}>
                      <Check size={12} strokeWidth={3} aria-hidden />
                    </span>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </figure>
  );
}
