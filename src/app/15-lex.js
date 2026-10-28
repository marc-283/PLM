/* ================= Verb dictionary: lookup, suggestions, conjugation for every language with an engine ================= */
const CONJ_LANGS = ["it", "en", "es", "fr"];
const canConj = (code) => CONJ_LANGS.includes(code);
const LEX_CACHE = {};
function parseFlags(s) {
  const o = {};
  for (const part of String(s || "").split(";")) {
    const t = part.trim(); if (!t) continue;
    const i = t.indexOf(":");
    if (i < 0) o[t] = true; else o[t.slice(0, i).trim()] = t.slice(i + 1).trim();
  }
  return o;
}
function starterVerbsIt() {
  const out = [];
  for (const p of STARTER.it || []) for (const part of p.parts || []) if (part.kind === "verbs") out.push(...part.verbs);
  return out;
}
function enIrregular() {
  const out = [];
  for (const p of STARTER.en || []) for (const part of p.parts || []) if (part.kind === "enverbs") for (const line of part.data.split("\n")) {
    const [inf, past, pp, de] = line.split("|").map((x) => (x || "").trim());
    if (inf) out.push({ inf, past, pp, de });
  }
  return out;
}
/* Entries: { inf, de, en, o (flags), past, pp, rank, key } – first line wins, order ≈ frequency */
function lexOf(code) {
  if (LEX_CACHE[code]) return LEX_CACHE[code];
  const out = [], seen = new Set();
  const push = (e) => { const key = bareAns(normAns(e.inf)); if (!key || seen.has(key)) return; seen.add(key); out.push({ ...e, key, rank: out.length }); };
  for (const line of String(VERBS[code] || "").split("\n")) {
    if (!line.trim()) continue;
    const f = line.split("|").map((x) => x.trim());
    if (code === "en") push({ inf: f[0], de: f[1] || "", en: "", past: f[2] || "", pp: f[3] || "", o: {} });
    else push({ inf: f[0], de: f[1] || "", en: f[2] || "", o: parseFlags(f[3]) });
  }
  if (code === "it") for (const v of starterVerbsIt()) push({ inf: v.v, de: v.de, en: "", o: {} });
  if (code === "en") for (const v of enIrregular()) push({ inf: v.inf, de: v.de, en: "", past: v.past, pp: v.pp, o: {} });
  return (LEX_CACHE[code] = out);
}
const lexEntry = (code, inf) => { const k = bareAns(normAns(inf)); return lexOf(code).find((e) => e.key === k) || null; };

/* ---------- Italian: options for itConj from the starter pack, the dictionary and "like" bases ---------- */
const AUX_OF = new Map(QZ.itAux.map(([v, a]) => [v, a]));
function itOpts(inf0, depth) {
  const inf = normAns(inf0), sv = starterVerbsIt().find((x) => normAns(x.v) === inf) || null, e = lexEntry("it", inf);
  let o = {};
  if (e && e.o.like && (depth || 0) < 3) {
    const base = e.o.like, bo = itOpts(base, (depth || 0) + 1);
    const a = base.replace(/rsi$/, "re"), b = inf.replace(/rsi$/, "re");
    let n = 0; while (n < a.length && n < b.length && a[a.length - 1 - n] === b[b.length - 1 - n]) n++;
    const bPre = a.slice(0, a.length - n), iPre = b.slice(0, b.length - n);
    const map = (f) => f.split(" / ").map((x) => { x = x.trim(); return x.startsWith(bPre) ? iPre + x.slice(bPre.length) : x; }).join(" / ");
    const refl = /rsi$/.test(inf);
    for (const k of ["P", "I", "F", "C", "CP", "CI", "PR", "IMP"]) if (bo[k] && !(refl && k === "IMP")) o[k] = splitForms(bo[k]).map(map).join(", ");
    if (!o.IMP && !refl && IT_IMP_IRR[base]) o.IMP = splitForms(IT_IMP_IRR[base]).map(map).join(", ");
    if (bo.pp) o.pp = map(bo.pp);
    if (bo.irr) o.irr = 1;
    if (bo.isc) o.isc = 1;
  }
  if (sv) { const { v, de, ex, exDe, note, ...rest } = sv; o = { ...o, ...rest }; } // eslint-disable-line no-unused-vars
  if (e) {
    const f = e.o;
    for (const k of ["P", "I", "F", "C", "CP", "IMP", "pp"]) if (f[k]) o[k] = f[k];
    if (f.irr) o.irr = 1;
    if (f.isc) o.isc = 1;
    if (f.e) o.aux = "essere"; else if (f.ae && !sv) o.aux = "avere";
    if (f.ae) o.both = 1;
  }
  if (!o.aux) o.aux = AUX_OF.get(inf) === "essere" ? "essere" : "avere";
  if (IT_ISC.has(inf)) o.isc = 1;
  if (!o.IMP && IT_IMP_IRR[inf]) o.IMP = IT_IMP_IRR[inf];
  return o;
}
function ownVerbCard(code, inf) {
  const k = bareAns(normAns(inf)).replace(/^to /, "");
  return state.cards.find((c) => c.lang === code && c.type === "verb" && bareAns(normAns(c.tg)).replace(/^to /, "") === k) || null;
}
function withCardTables(r, card) {
  if (r && card && card.tables) for (const [k, f] of Object.entries(card.tables)) if (Array.isArray(f) && f.some(Boolean)) r[k] = f;
  return r;
}
function itTables(inf, extra) {
  const card = ownVerbCard("it", inf), o = { ...itOpts(inf), ...(extra || {}) };
  if (card && card.isc) o.isc = 1;
  if (card && card.aux) o.aux = card.aux;
  const r = itConj(inf, o);
  if (r && o.both) r._both = 1;
  return withCardTables(r, card);
}
function enTables(inf0) {
  const inf = normAns(inf0).replace(/^to /, ""), e = lexEntry("en", inf);
  const r = enConj(inf, e && e.past ? { past: e.past, pp: e.pp || e.past } : {});
  return withCardTables(r, ownVerbCard("en", inf));
}
function esOpts(inf) { const e = lexEntry("es", inf); return e ? { ...e.o } : {}; }
function frOpts(inf) {
  const e = lexEntry("fr", inf), f = e ? e.o : {}, o = {};
  if (f.e) o.aux = "être";
  for (const k of ["è", "ll", "tt"]) if (f[k]) o.e = k;
  for (const k of ["P", "pp", "fut", "S", "imp"]) if (f[k]) o[k] = f[k];
  return o;
}
/* Tables for any supported language; extra = settings from the card editor (aux, isc) */
function verbTables(code, inf, extra) {
  if (!inf || !String(inf).trim()) return null;
  if (code === "it") return itTables(inf, extra);
  if (code === "en") return enTables(inf);
  if (code === "es") return withCardTables(esConj(inf, { ...esOpts(inf), ...(extra || {}) }), ownVerbCard("es", inf));
  if (code === "fr") return withCardTables(frConj(inf, { ...frOpts(inf), ...(extra || {}) }), ownVerbCard("fr", inf));
  return null;
}
/* Tenses shown in the lookup, with their person labels */
const IT_LOOKUP_TENSES = ["Presente", "Passato prossimo", "Imperfetto", "Futuro semplice", "Condizionale presente", "Imperativo", "Congiuntivo presente", "Congiuntivo imperfetto"];
const LOOKUP = {
  it: { tenses: IT_LOOKUP_TENSES, pers: ["io", "tu", "lui / lei", "noi", "voi", "loro"], imp: "Imperativo", impPers: ["tu", "Lei", "noi", "voi", "Loro"] },
  es: { tenses: ES_TENSES, pers: ["yo", "tú", "él / ella / usted", "nosotros", "vosotros", "ellos / ustedes"], imp: "Imperativo", impPers: ["tú", "usted", "nosotros", "vosotros", "ustedes"] },
  fr: { tenses: FR_TENSES, pers: ["je", "tu", "il / elle", "nous", "vous", "ils / elles"], imp: "Impératif", impPers: ["(tu)", "(nous)", "(vous)"] },
  en: { tenses: ["Stammformen", "Present simple", "Present progressive", "Past simple", "Present perfect", "Future (will)"], pers: ["I", "you", "he / she / it", "we", "you", "they"], stem: ["infinitive", "past simple", "past participle"] }
};
function persFor(code, tense) {
  const lk = LOOKUP[code]; if (!lk) { const L = langOf(code); return (L && L.persons) || []; }
  if (tense === lk.imp) return lk.impPers;
  if (tense === "Stammformen") return lk.stem;
  return lk.pers;
}
/* Pronoun + form, as it is said: "io sono", "j'ai", "yo hablo" */
function withPron(code, pron, form) {
  const p = String(pron || "").split("/")[0].replace(/[()]/g, "").trim();
  if (!form || !p) return form || "";
  if (code === "fr") return frJoin(p, form);
  if (code === "es" && ["usted", "ustedes"].includes(p)) return form;
  return `${p} ${form}`;
}
/* Meaning in the app language */
function verbMeaning(code, inf) {
  const e = lexEntry(code, inf), card = ownVerbCard(code, inf);
  if (UI === "en" && code !== "en") { if (e && e.en) return e.en; if (card && card.ml === "en") return card.de; }
  if (UI === "en" && code === "en") return e && e.past ? `${e.past}, ${e.pp}` : "";
  return (e && e.de) || (card && !card.ml ? card.de : "") || "";
}
const verbIrregular = (code, inf) => {
  const e = lexEntry(code, inf), k = normAns(inf);
  if (code === "it") return !!(e && e.o.irr) || !!(starterVerbsIt().find((x) => normAns(x.v) === k) || {}).irr || !!(e && e.o.like);
  if (code === "en") return !!(e && e.past);
  if (code === "es") return !!(ES_IRR[k] || esBase(k) || (e && Object.keys(e.o).length));
  if (code === "fr") return !!(FR_IRR[k.replace(/^(se |s')/, "")] || frBase(k.replace(/^(se |s')/, "")));
  return false;
};

/* ---------- Suggestions while typing: infinitive, typo, conjugated form or meaning ---------- */
const FORM_INDEX = {};
const formKeys = (f) => {
  const s = bareAns(normAns(String(f).replace(/\([^)]*\)/g, "").replace(/\/[aeis]+\b/g, "")));
  const out = new Set();
  for (const alt of s.split(/\s*\/\s*|,\s*/)) { const a = alt.trim(); if (!a) continue; out.add(a); const w = a.split(" "); if (w.length > 1) out.add(w[w.length - 1]); }
  return [...out];
};
function formIndex(code) {
  if (FORM_INDEX[code]) return FORM_INDEX[code];
  const idx = new Map();
  for (const e of lexOf(code)) {
    let r = null; try { r = verbTables(code, e.inf); } catch { r = null; }
    if (!r) continue;
    for (const [tn, forms] of Object.entries(r)) {
      if (tn.startsWith("_") || !Array.isArray(forms)) continue;
      forms.forEach((f, i) => { if (!f) return; for (const k of formKeys(f)) if (k.length >= 2 && k !== e.key && !idx.has(k)) idx.set(k, { inf: e.inf, tense: tn, i, form: f }); });
    }
  }
  return (FORM_INDEX[code] = idx);
}
function verbCandidates(code) {
  const list = lexOf(code).slice();
  for (const c of state.cards) if (c.lang === code && c.type === "verb" && !lexEntry(code, c.tg)) list.push({ inf: c.tg, de: c.de, en: c.ml === "en" ? c.de : "", o: {}, key: bareAns(normAns(c.tg)), rank: 900 });
  return list;
}
function verbSuggest(code, q0, max) {
  const q = bareAns(normAns(q0)).replace(/^to /, "");
  if (!q) return [];
  const best = new Map();
  const put = (e, score, via) => { const cur = best.get(e.key); if (!cur || score < cur.score) best.set(e.key, { e, score, via }); };
  const cands = verbCandidates(code);
  for (const e of cands) {
    const k = code === "en" ? e.key.replace(/^to /, "") : e.key;
    if (k === q) put(e, 0, "");
    else if (k.startsWith(q)) put(e, 1 + (k.length - q.length) / 40, "");
    else if (q.length >= 3 && (lev(q, k.slice(0, q.length)) <= 1 || (q.length >= 5 && lev(q, k) <= 2))) put(e, 3, "typo");
    if (q.length >= 3) {
      const mean = bareAns(normAns(`${e.de} ; ${e.en || ""}`)).replace(/\bto /g, ""), words = mean.split(/[;,()\s]+/);
      if (words.some((w) => w && w.startsWith(q)) || (q.includes(" ") && mean.split(/\s*;\s*/).some((m) => m.startsWith(q)))) put(e, 2.5, "meaning");
    }
  }
  if (q.length >= 2 && canConj(code)) {
    const idx = formIndex(code), byInf = new Map(cands.map((e) => [e.inf, e]));
    for (const [k, v] of idx) {
      const e = byInf.get(v.inf); if (!e) continue;
      if (k === q) put(e, 0.5, { form: v.form, tense: v.tense, i: v.i });
      else if (q.length >= 3 && k.startsWith(q)) put(e, 2 + e.rank / 2000, { form: v.form, tense: v.tense, i: v.i });
      else if (q.length >= 3 && !k.includes(" ") && k.length >= q.length && lev(q, k.slice(0, q.length)) <= 1) put(e, 3.5 + e.rank / 2000, { form: v.form, tense: v.tense, i: v.i });
    }
  }
  return [...best.values()].sort((a, b) => a.score - b.score || a.e.rank - b.e.rank).slice(0, max || 8);
}
function sugMeaning(code, e) {
  if (UI === "en" && code !== "en") return e.en || "";
  if (UI === "en" && code === "en") return e.past ? `${e.past} · ${e.pp}` : "";
  return e.de || "";
}
function conjSugHTML(code, q) {
  if (!q || !q.trim()) return "";
  const list = verbSuggest(code, q);
  if (!list.length) return `<p class="hint sug-none">${T("Kein passendes Verb gefunden")}</p>`;
  return list.map(({ e, via }) => {
    const m = sugMeaning(code, e);
    const how = via && typeof via === "object" ? `<small class="sug-how">${esc(via.form)} · ${esc(dn(via.tense))}</small>` : via === "typo" ? `<small class="sug-how">${T("meintest du …?")}</small>` : "";
    return `<button type="button" class="sugrow" data-action="th-verb" data-arg="${esc(e.inf)}"><span class="sug-v">${esc(e.inf)}</span>${m ? `<span class="sug-m">– ${esc(m)}</span>` : ""}${how}</button>`;
  }).join("");
}
function updateConjSug() {
  const inp = $("conjIn"), box = $("conjSug"); if (!inp || !box) return;
  const t = topView(), code = (t.p && t.p.lang) || "it";
  box.innerHTML = conjSugHTML(code, inp.value);
  box.hidden = !inp.value.trim();
}
/* What the typed text refers to: an infinitive, or a conjugated form of one */
function resolveVerb(code, text) {
  const q = normAns(text).replace(code === "en" ? /^to / : /^$/, "");
  if (!q) return null;
  const e = lexEntry(code, q) || (ownVerbCard(code, q) ? { inf: ownVerbCard(code, q).tg } : null);
  if (e) return { inf: e.inf };
  if (canConj(code)) { const hit = formIndex(code).get(bareAns(q)); if (hit) return { inf: hit.inf, from: hit }; }
  return verbTables(code, q) ? { inf: q } : null;
}
