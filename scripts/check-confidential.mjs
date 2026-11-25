// Fails if the source or the built site contains private company or personal details.
// Allowed: the employer name "Bonat" and its public one-line description.
import { readdirSync, readFileSync, statSync, existsSync } from "fs";
import { join, extname } from "path";

const roots = ["src", "public", ...(existsSync("out") ? ["out"] : [])];
const TEXT = new Set([".ts", ".tsx", ".css", ".md", ".svg", ".html", ".txt", ".json", ".js"]);
const rules = [
  [/bonat\.io|zimam|store-stg|admin-stg|app-stg|core-api|dashboard-stg/i, "internal domain or system name"],
  [/clickup\.com\/t\/|\b869[a-z0-9]{6}\b|\b1amvuf[a-z0-9]+/i, "ticket link or ID"],
  [/posthog\.[a-z]+\.io|supabase\.co|xox[bap]-|sk-ant-|ghp_[A-Za-z0-9]/, "service URL or secret"],
  [/\+?216[\s-]?\d{2}[\s-]?\d{3}[\s-]?\d{3}|54\s?291\s?648/, "phone number"],
  [/\b(Hichem|Yassine|Ahmed|Bilel|mosbah)\b/i, "colleague name"],
  [/\bmerchant\s?(id\s?)?\d{3,}|\b1098\b|\b117280\b/i, "real record ID"],
];
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
let bad = 0;
for (const f of roots.flatMap(walk)) {
  if (!TEXT.has(extname(f))) continue;
  const lines = readFileSync(f, "utf8").split("\n");
  lines.forEach((l, i) => rules.forEach(([re, why]) => { if (re.test(l)) { bad++; console.error(`✗ ${f}:${i + 1} ${why}: ${l.trim().slice(0, 120)}`); } }));
}
if (bad) { console.error(`\n${bad} confidentiality issue(s).`); process.exit(1); }
console.log(`✓ confidentiality: ${roots.join(", ")} clean`);
