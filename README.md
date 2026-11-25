# Sarah Kacem — QA Engineer portfolio

Static portfolio site: Next.js 16 (App Router, static export), TypeScript, Tailwind CSS 4, Lucide icons, Geist fonts.
Deployed to GitHub Pages as a project site: `https://sarahkcm.github.io/portfolio2026/`.

## Structure
```
src/content/profile.ts     all personal copy (single source of truth; mirrors portfolio-content-v1.md)
src/content/projects.ts    the four independent projects and their case-study pages
src/app/page.tsx           home: hero, about, experience, projects, skills, education, contact
src/app/projects/[slug]/   statically generated case studies (maximus, lux, yummi, runeterra)
src/components/            Nav, Footer, ProjectCard, FlowDiagram, ui primitives
public/                    Sarah_Kacem_CV.pdf (public variant: no phone number), og.png, favicon.svg, .nojekyll
scripts/check-links.mjs        verifies every internal link/asset in out/ resolves + section anchors exist
scripts/check-confidential.mjs fails on internal domains, ticket IDs, secrets, phone numbers, colleague names
.github/workflows/deploy.yml   typecheck → lint → confidentiality → build → link check → deploy to Pages
```

## Develop
```bash
npm install
npm run dev                                   # http://localhost:3000
NEXT_PUBLIC_BASE_PATH=/portfolio2026 npm run verify   # full local check, same as CI
```

## Publish to GitHub Pages (one-time setup)
1. Push `main` to `github.com/sarahkcm/portfolio2026` (the repo must be **public** on a free plan).
2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The push triggers **Deploy to GitHub Pages** (Actions tab). When it is green, the site is at
   `https://sarahkcm.github.io/portfolio2026/`.
4. Open the live site and check: home, all four project pages, Download CV, the mobile menu.

Base path: the workflow sets `NEXT_PUBLIC_BASE_PATH=/portfolio2026`. If you later use a custom domain
or rename the repo to `sarahkcm.github.io`, set it to an empty string.

## Confidentiality rules
No employer screenshots, data, URLs, tickets, credentials or code. Demos and examples must use a public
practice application or synthetic data. MAXIMUS source code stays private. `npm run check:confidential`
enforces the mechanical part of this; human review covers the rest.
