// Independent projects. Every statement is limited to what the owner confirmed and what
// the private repositories show. No company systems, data, URLs, screenshots or code.

export type Project = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  status: string;
  stack: string[];
  highlights?: { label: string; value: string }[];
  sections: { heading: string; body?: string[]; list?: string[] }[];
  flow: { title: string; caption: string; steps: { label: string; detail: string }[] };
};

export const projects: Project[] = [
  {
    slug: "maximus",
    name: "MAXIMUS",
    title: "AI-assisted QA Automation Platform",
    summary:
      "MAXIMUS explores how AI can support software testing. It combines browser exploration, test generation, automated execution, and evaluation of testing outcomes. I designed and built it with AI coding agents (Claude Code), and I own its architecture decisions, integrations, and quality gates.",
    status: "In development. Public demo in preparation.",
    stack: ["TypeScript", "Next.js", "Playwright", "Cypress", "Jest", "GitHub Actions", "Supabase / PostgreSQL", "Docker", "Anthropic SDK"],
    highlights: [
      { label: "GitHub Actions workflows", value: "28" },
      { label: "Jest test files", value: "865" },
      { label: "Mutation testing", value: "Yes" },
      { label: "AI-output evaluations", value: "Yes" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "AI can write test code quickly, but a generated test is only useful if what it asserts is true for the application under test. Selectors and expectations invented by a model produce tests that fail for the wrong reasons, or pass while checking nothing.",
          "MAXIMUS is built around one rule: a generated test may only assert what was actually observed in the application.",
        ],
      },
      {
        heading: "What it does",
        list: [
          "Playwright-based browser exploration that captures page context and element maps.",
          "AI-assisted Cypress test generation grounded in that captured page evidence.",
          "A validation step and deterministic repair passes before generated specs are run.",
          "Automated test execution, failure classification and a learning loop that feeds outcomes into later generations.",
          "Real-device iOS testing with Appium / WebdriverIO (in development).",
        ],
      },
      {
        heading: "Engineering quality controls",
        body: [
          "The platform is tested and gated like a product: 28 GitHub Actions workflows, 865 Jest test files, mutation testing and evaluations of AI-generated output.",
          "CI checks enforce route authorization, architecture boundaries and sandboxed execution of generated test code.",
        ],
      },
      {
        heading: "Design principles",
        list: [
          "Evidence or silence: anything not observed is marked as inferred or blocked, never asserted.",
          "Fix the cause of a failure pattern, not each failing test one by one.",
          "Fail loudly: errors surface instead of being swallowed.",
          "Generated code runs in a sandbox, separate from the platform itself.",
        ],
      },
      {
        heading: "How it was built",
        body: [
          "I designed and built MAXIMUS with AI coding agents (Claude Code). I made the architecture decisions, defined the quality gates and integrations, and reviewed and verified the output.",
        ],
      },
      {
        heading: "Availability",
        body: [
          "The source code is private. A public demo running against a public practice application is in preparation and is not yet available.",
        ],
      },
    ],
    flow: {
      title: "Generation pipeline",
      caption: "Conceptual implementation overview, not a product interface.",
      steps: [
        { label: "Explore", detail: "Playwright visits the app and captures page context and element maps" },
        { label: "Ground", detail: "Captured evidence becomes the only facts a test may assert" },
        { label: "Generate", detail: "Claude writes Cypress specs from that evidence" },
        { label: "Validate", detail: "Static checks and deterministic repair passes reject weak specs" },
        { label: "Execute", detail: "Specs run in a sandbox with recorded artifacts" },
        { label: "Learn", detail: "Failures are classified and outcomes feed the next generation" },
      ],
    },
  },
  {
    slug: "lux",
    name: "LUX",
    title: "QA Workflow Agent",
    summary: "An LLM agent that supports QA workflows: it interprets tickets, works in browser and mobile environments, and records test results.",
    status: "Personal tool, not a company product",
    stack: ["Claude Code", "Chrome automation", "Real-device iOS", "Chat interface"],
    sections: [
      {
        heading: "Purpose",
        body: [
          "Much of a QA engineer's day is mechanical: reading a ticket and its discussion, setting up the environment, stepping through the scenarios and writing down what happened. LUX takes on those mechanical steps so that my attention goes to judgement: what to test and whether a result is really a defect.",
        ],
      },
      {
        heading: "How it works",
        list: [
          "Reads a ticket together with its comments and linked items to understand what changed and what is expected.",
          "Works in a real browser and on a real iPhone to carry out the test scenarios.",
          "Records each result with its evidence, such as screenshots or recordings.",
          "Reports back through a chat interface, and asks for confirmation before acting on anything outside its scope.",
        ],
      },
      {
        heading: "Human in the loop",
        body: ["LUX does not decide on its own what counts as a pass. Results, and anything written to a shared system, are reviewed and approved by me."],
      },
      {
        heading: "Confidentiality",
        body: [
          "LUX was used in real QA work, so no screenshots, tickets, data or code from that work are published here. Any future demonstration will use a public practice application and synthetic data.",
        ],
      },
    ],
    flow: {
      title: "Verification flow",
      caption: "Conceptual workflow, shown without any real ticket or company data.",
      steps: [
        { label: "Intake", detail: "Read the ticket, its comments and linked items" },
        { label: "Plan", detail: "Derive the scenarios to verify" },
        { label: "Execute", detail: "Run them in a real browser or on a real iPhone" },
        { label: "Evidence", detail: "Capture screenshots and recordings for each result" },
        { label: "Review", detail: "I review the results before anything is recorded" },
      ],
    },
  },
  {
    slug: "yummi",
    name: "YUMMI",
    title: "Test Automation Agent",
    summary: "Converts manually verified test cases into reusable Playwright specs.",
    status: "Personal tool, not a company product",
    stack: ["Claude Code", "Playwright", "TypeScript"],
    sections: [
      {
        heading: "Purpose",
        body: [
          "Manual verification produces knowledge that is usually lost once a ticket closes: the exact steps that were checked and the result that was expected. YUMMI turns test cases that have already been verified by hand into Playwright specs, so they can be run again as regression tests.",
        ],
      },
      {
        heading: "How it works",
        list: [
          "Receives a case that was verified manually, including its steps and expected result.",
          "Writes a Playwright spec for that case, kept in a separate package per application under test.",
          "Works in its own isolated workspace, so it never changes the main codebase directly.",
          "Hands the spec back for review before it becomes part of a suite.",
        ],
      },
      {
        heading: "Why it matters",
        body: ["It connects manual and automated testing: what I already verified by hand becomes coverage that can be run again."],
      },
      {
        heading: "Confidentiality",
        body: ["No specs, selectors or application details from real work are published. Examples will use a public practice application."],
      },
    ],
    flow: {
      title: "From manual case to spec",
      caption: "Conceptual workflow.",
      steps: [
        { label: "Verified case", detail: "Steps and expected result from a manual verification" },
        { label: "Author", detail: "Write a Playwright spec in an isolated workspace" },
        { label: "Review", detail: "Spec is reviewed before joining a suite" },
        { label: "Regression", detail: "The case can now be run again automatically" },
      ],
    },
  },
  {
    slug: "runeterra",
    name: "Runeterra",
    title: "Multi-agent QA System",
    summary:
      "An experimental multi-agent architecture with planning, specialist testing, adversarial review, evidence auditing, and human approval at key decision points.",
    status: "Experimental",
    stack: ["TypeScript", "Node.js", "Claude Code", "Playwright", "Vite"],
    sections: [
      {
        heading: "The question",
        body: [
          "Can a group of AI agents carry out a structured QA process, with clear responsibilities and independent checks, without anyone accepting a result on a single agent's word?",
        ],
      },
      {
        heading: "Architecture",
        list: [
          "An analyst agent turns a ticket into a test plan, with an accountable owner for each test case.",
          "An independent reviewer challenges the plan before it reaches me for approval.",
          "Specialist agents execute their assigned cases: happy path, negative and security, edge cases, API and data, visual, and regression.",
          "Independent auditors check coverage, evidence and user-journey integrity, and an adversarial reviewer challenges the results. These reviewers never execute tests themselves.",
          "Only one agent can write results to a shared system, and only after my approval.",
        ],
      },
      {
        heading: "Guardrails enforced in code",
        list: [
          "Every deliverable has a contract with deterministic checks; for example, a PASS without an existing evidence file is rejected.",
          "Reviewers have no browser, device, shell or edit rights, and cannot review their own work.",
          "Results obtained by bypassing the user interface are flagged unless they are explicitly labelled as API testing or setup.",
          "An agent counts as operational only after a real, authorized run with a valid deliverable.",
        ],
      },
      {
        heading: "Status",
        body: ["Runeterra is an experiment in how far a structured, auditable multi-agent QA process can go. It is not a commercial product."],
      },
    ],
    flow: {
      title: "Review chain",
      caption: "Conceptual architecture.",
      steps: [
        { label: "Plan", detail: "Analyst drafts cases with owners" },
        { label: "Challenge", detail: "Independent reviewer checks the plan" },
        { label: "Approve", detail: "Human approval" },
        { label: "Execute", detail: "Specialists run their cases with evidence" },
        { label: "Audit", detail: "Coverage, evidence and journey integrity checks" },
        { label: "Approve", detail: "Human approval before anything is written" },
      ],
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
