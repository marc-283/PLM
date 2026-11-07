/* Checks the phrasebook data: every language has every intro/basics/love phrase, a pronunciation and 7+ insults with a level. */
const fs = require("fs"), vm = require("vm"), path = require("path");
const root = path.join(__dirname, "..");
const ctx = { console };
vm.createContext(ctx);
const dataDir = path.join(root, "src/data");
const files = fs.readdirSync(dataDir).filter((f) => f.endsWith(".js")).sort();
let src = "";
for (const f of files) if (/^(20-theory-it|4\d-)/.test(f)) src += fs.readFileSync(path.join(dataDir, f), "utf8") + "\n";
vm.runInContext(src + ";globalThis.PB = { PHRASEBOOK, PB_KEYS, PB_TAGS, PB_CATS };", ctx);
const { PHRASEBOOK, PB_KEYS, PB_TAGS } = ctx.PB;
const errs = [], E = (m) => errs.push(m);
const codes = new Set();
for (const p of PHRASEBOOK) {
  if (codes.has(p.code)) E(`${p.code}: duplicate`); codes.add(p.code);
  if (!/^[a-z]{2,3}-[A-Z]{2}$/.test(p.tag)) E(`${p.code}: tag ${p.tag}`);
  if (!p.flag || !p.de || !p.en || !p.native) E(`${p.code}: names/flag missing`);
  if (PB_TAGS[p.code] !== p.tag) E(`${p.code}: PB_TAGS`);
  for (const cat of ["intro", "basics", "love"]) {
    const lines = p[cat].split("\n").filter((l) => l.trim());
    const keys = lines.map((l) => l.split("|")[0]);
    for (const l of lines) { const f = l.split("|"); if (f.length < 3 || f.length > 4 || !f[1].trim() || !f[2].trim()) E(`${p.code} ${cat}: bad line "${l}"`); if (!PB_KEYS[cat].some(([k]) => k === f[0])) E(`${p.code} ${cat}: unknown key ${f[0]}`); }
    for (const [k] of PB_KEYS[cat]) if (!keys.includes(k) && !(p.code === "en" && k === "english")) E(`${p.code} ${cat}: missing ${k}`);
    if (new Set(keys).size !== keys.length) E(`${p.code} ${cat}: duplicate key`);
  }
  const name = p.intro.split("\n").find((l) => l.startsWith("name|"));
  if (name && !name.split("|")[1].includes("…")) E(`${p.code}: name line without …`);
  if (name && (name.split("|")[1].match(/…/g) || []).length !== 1) E(`${p.code}: name line needs exactly one …`);
  const ins = p.insults.split("\n").filter((l) => l.trim());
  if (ins.length < 7) E(`${p.code}: only ${ins.length} insults`);
  for (const l of ins) { const f = l.split("|"); if (f.length !== 6 || !f[0] || !f[1] || !f[2] || !f[3] || !/^[123]$/.test(f[4])) E(`${p.code} insults: bad line "${l}"`); }
  const lv = ins.map((l) => Number(l.split("|")[4]));
  if (!lv.includes(1) && !lv.includes(2)) E(`${p.code}: no mild insults`);
}
console.log(`${PHRASEBOOK.length} languages: ${PHRASEBOOK.map((p) => p.code).join(" ")}`);
if (errs.length) { console.log(errs.join("\n")); console.log(`${errs.length} ERRORS`); process.exit(1); }
console.log("phrasebook ok");
