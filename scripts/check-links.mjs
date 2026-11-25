// Crawls the static export in ./out and verifies every internal href/src resolves to a file.
import { readdirSync, readFileSync, statSync, existsSync } from "fs";
import { join } from "path";

const OUT = "out";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
if (!existsSync(OUT)) { console.error("out/ missing — run the build first"); process.exit(1); }
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const html = walk(OUT).filter((f) => f.endsWith(".html"));
const resolve = (u) => {
  let p = u.split("#")[0].split("?")[0];
  if (!p) return true;
  if (BASE && p.startsWith(BASE)) p = p.slice(BASE.length) || "/";
  const f = join(OUT, decodeURIComponent(p));
  return existsSync(f) && (statSync(f).isFile() || existsSync(join(f, "index.html")));
};
let bad = 0, checked = 0; const ids = new Map();
for (const f of html) {
  const s = readFileSync(f, "utf8");
  ids.set(f, new Set([...s.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  for (const [, u] of s.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:|#)/.test(u) || u.includes("/_next/")) continue;
    checked++;
    if (!resolve(u)) { bad++; console.error(`✗ ${f} → ${u}`); }
  }
}
const home = ids.get(join(OUT, "index.html")) ?? new Set();
for (const a of ["about", "experience", "projects", "skills", "education", "contact", "main"]) if (!home.has(a)) { bad++; console.error(`✗ missing anchor #${a}`); }
if (bad) { console.error(`\n${bad} broken link(s)`); process.exit(1); }
console.log(`✓ links: ${checked} internal links across ${html.length} pages resolve; all section anchors present`);
