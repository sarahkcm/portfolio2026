import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { about, contact, education, experience, hero, languages, site, skills } from "@/content/profile";
import { projects } from "@/content/projects";
import { asset } from "@/lib";
import { ButtonLink, Chip, Section } from "@/components/ui";
import { CheckRun } from "@/components/CheckRun";
import { FeaturedProject, ProjectColumn } from "@/components/ProjectCard";

const atWork = skills.filter((g) => g.scope === "professional" || g.scope === "tools");
const independent = skills.filter((g) => g.scope === "independent");
const background = skills.filter((g) => g.scope === "background");

export default function Home() {
  const [featured, ...others] = projects;
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:pb-28">
        <div>
          <h1 id="hero-title" className="text-[44px] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-[68px]">
            {site.name}
            <span className="mt-2 block font-medium text-ink-3">{site.role}</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink">{hero.intro[0]}</p>
          <div className="mt-4 max-w-xl space-y-3 text-[16px] leading-relaxed text-ink-2">
            {hero.intro.slice(1).map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/#projects">View projects</ButtonLink>
            <ButtonLink href="/#contact" variant="secondary">Contact me</ButtonLink>
            <ButtonLink href={asset(site.cvPath)} variant="secondary" download>
              <Download size={16} aria-hidden /> Download CV
            </ButtonLink>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-2">
            <li className="inline-flex items-center gap-1.5"><MapPin size={15} aria-hidden className="text-ink-3" />Based in {site.location}</li>
            <li className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-pass" aria-hidden />{site.availability}</li>
          </ul>
        </div>
        <CheckRun />
      </section>

      {/* About */}
      <Section id="about" title="About" tone="wash">
        <p className="max-w-2xl text-[22px] font-medium leading-snug tracking-[-0.01em] text-ink">{about[1]}</p>
        <div className="mt-6 max-w-2xl space-y-4 text-[17px] leading-relaxed text-ink-2">
          {[about[0], ...about.slice(2)].map((p) => <p key={p}>{p}</p>)}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <ol className="space-y-16">
          {experience.map((job) => (
            <li key={job.company} className="grid gap-4 md:grid-cols-[170px_1fr] md:gap-10">
              <div className="text-sm text-ink-3">
                <p className="font-medium text-ink-2">{job.period}</p>
                {job.meta && <p className="mt-1">{job.meta}</p>}
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-ink">
                  {job.role}, <span className="text-accent">{job.company}</span>
                </h3>
                <div className="mt-3 max-w-3xl space-y-3 text-[16px] leading-relaxed text-ink-2">
                  {job.summary.map((s) => <p key={s}>{s}</p>)}
                </div>
                {job.groups.map((g) => (
                  <div key={g.title} className="mt-7">
                    <h4 className="text-sm font-semibold text-ink">{g.title}</h4>
                    {g.title === "Stack" ? (
                      <ul className="mt-3 flex flex-wrap gap-2">{g.items.map((i) => <li key={i}><Chip>{i}</Chip></li>)}</ul>
                    ) : (
                      <ul className="mt-3 grid gap-x-8 gap-y-2.5 text-[15px] leading-snug text-ink-2 md:grid-cols-2">
                        {g.items.map((i) => (
                          <li key={i} className="flex gap-3"><span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" aria-hidden />{i}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Independent projects" note="Built on my own time, outside my role at Bonat. No company systems, data or code appear here." tone="wash">
        <FeaturedProject project={featured} />
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {others.map((p) => <ProjectColumn key={p.slug} project={p} />)}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" note="Split by where I used them, so it is clear what is professional experience.">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Used in my role at Bonat", groups: atWork, bar: "border-accent", label: "text-accent" },
            { title: "Used in my independent projects", groups: independent, bar: "border-indep", label: "text-indep" },
          ].map((col) => (
            <div key={col.title} className={`rounded-2xl border-t-[3px] bg-surface p-6 sm:p-7 ${col.bar}`}>
              <h3 className={`text-[15px] font-semibold ${col.label}`}>{col.title}</h3>
              <div className="mt-5 space-y-6">
                {col.groups.map((g) => (
                  <div key={g.title}>
                    <h4 className="text-sm font-medium text-ink">{g.title}</h4>
                    <ul className="mt-2.5 flex flex-wrap gap-2">{g.items.map((i) => <li key={i}><Chip>{i}</Chip></li>)}</ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {background.map((g) => (
          <p key={g.title} className="mt-6 text-[15px] text-ink-2">
            <span className="font-medium text-ink">{g.title}</span> from front-end work at Space Dev: {g.items.join(", ")}.
          </p>
        ))}
      </Section>

      {/* Education & Languages */}
      <Section id="education" title="Education and languages" tone="wash">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <ul className="divide-y divide-line border-y border-line">
            {education.map((e) => (
              <li key={e.title} className="flex items-baseline justify-between gap-6 py-4">
                <div>
                  <p className="font-medium text-ink">{e.title}</p>
                  {e.detail && <p className="mt-0.5 text-sm text-ink-2">{e.detail}</p>}
                </div>
                <p className="text-sm tabular-nums text-ink-3">{e.year}</p>
              </li>
            ))}
          </ul>
          <ul className="divide-y divide-line border-y border-line">
            {languages.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between py-4">
                <span className="font-medium text-ink">{l.name}</span>
                <span className="text-sm text-ink-3">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" aria-labelledby="contact-title" className="bg-night text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <h2 id="contact-title" className="text-[28px] font-semibold tracking-[-0.02em] sm:text-[32px]">Get in touch</h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-night-2">
            I am interested in roles in software quality, test automation and AI-assisted testing, remote or with relocation.
          </p>
          <a href={`mailto:${contact.email}`} className="mt-10 inline-flex items-center gap-3 break-all text-2xl font-semibold tracking-[-0.02em] underline decoration-white/25 underline-offset-[6px] hover:decoration-white sm:text-4xl">
            <Mail className="shrink-0" size={28} aria-hidden />
            {contact.email}
          </a>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={contact.linkedin} variant="ghost-dark" external><Linkedin size={16} aria-hidden /> LinkedIn</ButtonLink>
            <ButtonLink href={contact.github} variant="ghost-dark" external><Github size={16} aria-hidden /> GitHub</ButtonLink>
            <ButtonLink href={asset(site.cvPath)} variant="ghost-dark" download><Download size={16} aria-hidden /> Download CV</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
