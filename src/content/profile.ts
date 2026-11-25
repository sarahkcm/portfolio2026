// Single source of truth for portfolio copy.
// Source: ~/career/05-portfolio/portfolio-content-v1.md (confirmed by the owner, 2026-11-23).
// Do not add claims here that are not in that document.

export const site = {
  name: "Sarah Kacem",
  role: "QA Engineer",
  tagline: "Quality engineering, test automation and AI-assisted testing",
  title: "Sarah Kacem | QA Engineer — Quality Engineering & AI-assisted Testing",
  description:
    "QA Engineer with professional experience in web and mobile testing, API testing and production validation, plus independent projects in test automation and AI-assisted testing.",
  location: "Tunisia",
  availability: "Open to remote opportunities and international relocation",
  // Public CV variant without a phone number (built from the master CV).
  cvPath: "/Sarah_Kacem_CV.pdf",
};

export const contact = {
  linkedin: "https://www.linkedin.com/in/sarah-kacem-abab541a1/",
  github: "https://github.com/sarahkcm",
  email: "sarahkacem08@icloud.com",
};

export const hero = {
  intro: [
    "I work at the intersection of software quality, test engineering, and automation.",
    "With professional experience in web and mobile QA, API testing and production validation, plus independent automation projects, I focus on identifying quality risks and building more reliable testing workflows.",
    "Currently exploring how AI-assisted systems and automation can improve the way software is tested.",
  ],
};

export const about = [
  "My background combines front-end development and software quality assurance.",
  "I started my career in front-end development before moving into QA engineering. That gave me a broader understanding of how applications are built, how their components interact, and how defects affect users.",
  "My professional work covers testing web platforms, iOS and Android applications, APIs, database behavior, localization, and production releases.",
  "Alongside my professional work, I build independent projects exploring browser automation, AI-assisted testing, and multi-agent QA workflows.",
  "I am particularly interested in making software testing more systematic, reliable, and evidence-driven.",
];

// Hero "profile checks": each line restates a confirmed fact from the sections below.
export const checks = [
  {
    suite: "At Bonat, since February 2022",
    scope: "professional" as const,
    items: [
      "Functional, exploratory and regression testing",
      "Web, iOS and Android apps, including a physical iPhone",
      "API testing with Postman",
      "Read-only SQL checks in PostgreSQL and MySQL",
      "Arabic localization, RTL and accessibility",
      "End-to-end tests with Cypress and Playwright",
    ],
  },
  {
    suite: "Independent projects",
    scope: "independent" as const,
    items: [
      "Browser automation with Playwright and Cypress",
      "AI-assisted test generation grounded in evidence",
      "QA agents that keep a human in the loop",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  meta?: string;
  summary: string[];
  groups: { title: string; items: string[] }[];
};

export const experience: Experience[] = [
  {
    role: "QA Engineer",
    company: "Bonat",
    period: "February 2022 – Present",
    meta: "Remote from Tunisia",
    summary: [
      "Bonat is a customer loyalty and rewards platform operating in the Saudi Arabian market, covering customer engagement, loyalty programs, rewards, promotions and merchant management.",
      "I work across its customer-facing applications and internal platforms with a team of six developers, validating functionality, investigating defects and improving product quality.",
    ],
    groups: [
      {
        title: "Responsibilities",
        items: [
          "Functional, exploratory and regression testing.",
          "Testing web applications and iOS and Android mobile apps.",
          "Production validation of the iOS customer app on a physical iPhone.",
          "API testing with Postman (requests, collections and environments).",
          "Investigating production issues and verifying fixes.",
          "Read-only database checks on PostgreSQL and MySQL.",
          "Validating analytics events in PostHog and CleverTap, including a production event audit.",
          "Testing Arabic localization, RTL layouts and accessibility.",
          "Managing and verifying defects in Jira and ClickUp.",
        ],
      },
      {
        title: "Quality improvement initiatives",
        items: [
          "Promote a shared testing approach: developer-owned unit tests and QA-owned end-to-end validation.",
          "Encourage developers to write and maintain unit tests.",
          "Build end-to-end tests for complete user journeys on my own initiative, first with Cypress and later Playwright, run locally.",
        ],
      },
    ],
  },
  {
    role: "Front-end / Integrator Developer",
    company: "Space Dev",
    period: "June 2021 – January 2022",
    summary: [
      "Built responsive React and Next.js applications in TypeScript from Figma designs, styled with Tailwind CSS, before moving into software quality assurance.",
    ],
    groups: [
      { title: "Stack", items: ["React", "Next.js", "TypeScript", "Figma-to-frontend implementation", "Tailwind CSS"] },
    ],
  },
];

export type SkillGroup = { title: string; scope: "professional" | "independent" | "background" | "tools"; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Quality Assurance",
    scope: "professional",
    items: [
      "Functional testing",
      "Exploratory testing",
      "Regression testing",
      "Mobile testing (iOS and Android)",
      "Production validation",
      "Localization and RTL testing",
      "Accessibility testing",
    ],
  },
  { title: "API and Data", scope: "professional", items: ["Postman", "PostgreSQL", "MySQL (read-only validation)", "PostHog", "CleverTap"] },
  { title: "End-to-end Tests", scope: "professional", items: ["Cypress", "Playwright", "Run locally, not in CI"] },
  {
    title: "Automation and Engineering",
    scope: "independent",
    items: ["Playwright", "Cypress", "Jest", "GitHub Actions / CI/CD", "Docker", "Appium / WebdriverIO (in development)"],
  },
  {
    title: "AI-assisted Development",
    scope: "independent",
    items: ["Claude Code", "AI-assisted test generation", "QA agents", "Multi-agent testing workflows"],
  },
  { title: "Development Background", scope: "background", items: ["TypeScript", "React", "Next.js"] },
  { title: "Tools", scope: "tools", items: ["Jira", "ClickUp", "GitHub"] },
];

export const education = [
  { title: "Licence in Product Design", detail: "Institut Supérieur des Beaux-Arts de Tunis", year: "2021" },
  { title: "Full-Stack JavaScript Bootcamp", detail: "RebootKamp Tunisia", year: "2022" },
  { title: "Baccalauréat in Computer Science", detail: "", year: "2014" },
];

// Levels exactly as confirmed: English is the working language; French and Arabic native.
export const languages = [
  { name: "English", level: "Working language" },
  { name: "French", level: "Native" },
  { name: "Arabic", level: "Native" },
];
