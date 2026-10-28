/* Checks the course files: structure, translations, exercises, dialogues. Run after `python3 build.py`. */
const fs = require("fs"), vm = require("vm"), path = require("path");
const root = path.join(__dirname, "..");
const ctx = { console };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, "src/core.js"), "utf8") + "\n;globalThis.ENG={itConj,esConj,frConj,enConj,ES_TENSES,FR_TENSES,IT_TENSES};", ctx);
vm.runInContext("globalThis.TB = (de, en) => ({ de, en }); globalThis.COURSES = {}; globalThis.courseReg = (c, d) => { COURSES[c] = d; };", ctx);
for (const f of ["20-theory-it.js", "21-theory-en.js"]) vm.runInContext(fs.readFileSync(path.join(root, "src/data", f), "utf8").replace(/^const TB = .*$/m, "").replace(/^const THEORY = /m, "globalThis.THEORY = "), ctx);
const QUIZ_IDS = ["it-art-def", "it-art-indef", "it-art-mix", "it-plural", "it-presente-reg", "it-presente-irr", "it-aux", "it-pp", "it-imperfetto", "it-pp-imp", "it-futuro", "it-condizionale", "it-imperativo", "it-prep", "en-tense", "en-ppps", "en-cond", "en-art", "en-modal", "en-mistakes", "en-irr"];
const POS = ["", "n", "v", "adj", "adv", "ph", "s", "x"];
const BLOCKS = ["p", "h", "tip", "table", "ex", "conj", "quiz"];
const TENSES = { it: ctx.ENG.IT_TENSES, es: ctx.ENG.ES_TENSES, fr: ctx.ENG.FR_TENSES, en: ["Stammformen", "Present simple", "Present progressive", "Past simple", "Present perfect", "Future (will)"] };
const conj = (code, v) => ({ it: ctx.ENG.itConj, es: ctx.ENG.esConj, fr: ctx.ENG.frConj, en: ctx.ENG.enConj }[code](v, {}));
let errs = 0, warn = 0;
const E = (where, msg) => { errs++; console.log("ERR ", where, "–", msg); };
const W = (where, msg) => { warn++; if (process.env.V) console.log("warn", where, "–", msg); };
const tb = (x) => x && typeof x === "object" && x.de && x.en;
const ids = new Set();
const files = fs.existsSync(path.join(root, "course")) ? fs.readdirSync(path.join(root, "course")).filter((f) => f.endsWith(".js")) : [];
const summary = [];
for (const f of files) {
  try { vm.runInContext(fs.readFileSync(path.join(root, "course", f), "utf8"), ctx); } catch (e) { E(f, "does not run: " + e.message); continue; }
}
for (const [code, C] of Object.entries(ctx.COURSES)) {
  const counts = [];
  for (const lv of C.levels) {
    counts.push(`${lv.id}:${lv.lessons.length}`);
    for (const l of lv.lessons) {
      const at = `${code}/${lv.id}/${l.id}`;
      if (!l.id || ids.has(l.id)) E(at, "missing or duplicate id"); ids.add(l.id);
      if (!tb(l.t) || !tb(l.goal)) E(at, "title/goal needs TB(de, en)");
      const words = String(l.words || "").split("\n").map((x) => x.trim()).filter((x) => x && !x.startsWith("#"));
      if (words.length < 8) W(at, `only ${words.length} words`);
      const seen = new Set();
      words.forEach((line, i) => {
        const f = line.split("|").map((x) => x.trim());
        if (f.length < 2 || !f[0] || !f[1]) E(at, `word ${i + 1}: needs target|de: ${line}`);
        if (code !== "en" && !f[2]) E(at, `word ${i + 1}: English missing: ${line}`);
        if (f[3] && !POS.includes(f[3])) E(at, `word ${i + 1}: pos "${f[3]}"`);
        if (f[4] && !f[5]) E(at, `word ${i + 1}: example without translation`);
        if (f[4] && code !== "en" && !f[6]) E(at, `word ${i + 1}: example without English translation`);
        if (f.length > 7) E(at, `word ${i + 1}: too many fields: ${line}`);
        if (seen.has(f[0])) E(at, `word twice: ${f[0]}`); seen.add(f[0]);
      });
      const say = String(l.say || "").split("\n").map((x) => x.trim()).filter(Boolean);
      say.forEach((line, i) => { const f = line.split("|"); if (f.length < 2 || (code !== "en" && f.length < 3) || f.length > 3) E(at, `sentence ${i + 1}: ${line}`); });
      for (const b of l.gram || []) {
        if (!BLOCKS.includes(b[0])) E(at, `block type ${b[0]}`);
        if (["p", "h", "tip"].includes(b[0]) && !tb(b[1])) E(at, `block ${b[0]} needs TB`);
        if (b[0] === "table") { const n = b[1].head.length; b[1].rows.forEach((r, i) => { if (r.length !== n) E(at, `table row ${i + 1} has ${r.length} cells, head ${n}`); }); }
        if (b[0] === "ex") b[1].forEach((x, i) => { if (!x[0] || !x[1] || (code !== "en" && !x[2])) E(at, `example ${i + 1} incomplete`); });
        if (b[0] === "conj") for (const v of b[1].verbs) { const r = conj(code, v); if (!r) E(at, `conj: ${v} not conjugated`); else for (const t of b[1].tenses) if (!r[t] && !(code === "it" && ["Imperativo"].includes(t))) W(at, `conj: ${v} has no ${t} (engine)`); for (const t of b[1].tenses) if (!TENSES[code].includes(t)) E(at, `conj tense ${t}`); }
        if (b[0] === "quiz" && !QUIZ_IDS.includes(b[1])) E(at, `quiz ${b[1]}`);
      }
      for (const q of l.quiz || []) if (!QUIZ_IDS.includes(q)) E(at, `quiz ${q}`);
      if (l.th && !(ctx.THEORY[code] || []).some((c) => c.id === l.th)) E(at, `theory chapter ${l.th}`);
      (l.drill || []).forEach((d, i) => {
        const w = `${at} drill ${i + 1}`;
        if (typeof d[0] !== "string") E(w, "question missing"); else if (!/___/.test(d[0]) && !Array.isArray(d[1])) E(w, `typed item needs ___: ${d[0]}`);
        if ((d[0].match(/___/g) || []).length > 1) E(w, "more than one gap");
        if (Array.isArray(d[1])) { if (d[1].length < 2 || !(d[2] >= 0 && d[2] < d[1].length)) E(w, "bad options/answer"); if (new Set(d[1]).size !== d[1].length) E(w, "duplicate options"); if (d[3] && !tb(d[3])) E(w, "why needs TB"); }
        else { if (typeof d[1] !== "string" || !d[1]) E(w, "typed answer missing"); if (d[2] && !tb(d[2])) E(w, "why needs TB"); }
      });
      if (l.forms) { for (const v of l.forms.verbs) if (!conj(code, v)) E(at, `forms verb ${v}`); for (const t of l.forms.tenses) if (!TENSES[code].includes(t)) E(at, `forms tense ${t}`); }
      if (l.talk) {
        const t = l.talk;
        if (!tb(t.t) || !tb(t.scene) || !t.who) E(at, "talk needs t, scene, who");
        const lines = String(t.lines || "").split("\n").map((x) => x.trim()).filter(Boolean);
        if (lines.length < 6) W(at, `talk has ${lines.length} lines`);
        let mine = 0;
        lines.forEach((line, i) => {
          const f = line.split("|");
          if (!["a", "me"].includes(f[0]) || !f[1] || !f[2] || (code !== "en" && !f[3])) E(at, `talk line ${i + 1}: ${line}`);
          if (f.length > 5) E(at, `talk line ${i + 1}: too many fields`);
          const slots = (f[1].match(/\{\w+\}/g) || []);
          if (slots.length > 1) E(at, `talk line ${i + 1}: more than one slot`);
          if (f[0] === "me") { mine++; if (slots.length && !/…/.test(f[2])) E(at, `talk line ${i + 1}: slot but no … in prompt`); for (const a of (f[4] || "").split(";").map((x) => x.trim()).filter(Boolean)) if ((a.match(/\{\w+\}/g) || []).length !== slots.length) E(at, `talk line ${i + 1}: alternative slots differ: ${a}`); }
          if (f[0] === "a" && slots.length && !(t.slots && t.slots[slots[0].slice(1, -1)])) W(at, `talk line ${i + 1}: partner uses slot without default`);
        });
        if (!mine) E(at, "talk without learner lines");
      } else W(at, "no talk");
    }
  }
  summary.push(`${code} ${counts.join(" ")}`);
}
console.log(summary.join("\n"));
console.log(errs ? `\n${errs} ERRORS` : `\ncourses ok${warn ? ` (${warn} warnings, V=1 to show)` : ""}`);
process.exit(errs ? 1 : 0);
