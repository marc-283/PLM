/* ================= Phrasebook ("Sprachführer") =================
   Many languages, four quick sections each: introduce yourself, survival basics, love, insults & swearing.
   Every phrase: native text, a pronunciation guide, the meaning, 🔊 and 🐢. Languages that are not built in
   can be written by the AI assistant and are kept on this device. */
const PB_LEVEL = { 1: ["🟢", TB("harmlos", "mild")], 2: ["🟡", TB("frech", "rude")], 3: ["🔴", TB("derb", "strong")] };
function pbCustom() { try { const a = JSON.parse(lsGet("plm.pb.custom") || "[]"); return Array.isArray(a) ? a : []; } catch { return []; } }
function pbSaveCustom(a) { lsSet("plm.pb.custom", JSON.stringify(a)); for (const p of a) PB_TAGS[p.code] = PB_TAGS[p.code] || p.tag; }
for (const p of pbCustom()) PB_TAGS[p.code] = PB_TAGS[p.code] || p.tag;
const pbAll = () => PHRASEBOOK.concat(pbCustom());
const pbFind = (code) => pbAll().find((p) => p.code === code) || null;
const pbName = (p) => (UI === "en" ? p.en : p.de);
const pbSort = (a) => a.slice().sort((x, y) => pbName(x).localeCompare(pbName(y), LOC));
/* phrase lines → items: intro/basics "key|text|pron", insults "text|pron|de|en|level|note" */
function pbItems(p, cat) {
  const name = (lsGet("plm.pbName") || "").trim();
  const fill = (t) => (name ? t.replace(/…/g, name) : t);
  if (cat === "insults") {
    const lines = Array.isArray(p.insults) ? p.insults : String(p.insults || "").split("\n").filter((l) => l.trim()).map((l) => { const f = l.split("|"); return { t: f[0], pron: f[1], de: f[2], en: f[3], lvl: Number(f[4]) || 2, note: f[5] || "" }; });
    return lines.map((x) => ({ t: x.t, pron: x.pron || "", mean: UI === "en" ? x.en || x.de : x.de, lvl: x.lvl || 2, note: UI === "en" ? "" : x.note || "" })).sort((a, b) => a.lvl - b.lvl); // mild first
  }
  const map = new Map();
  if (Array.isArray(p[cat])) for (const x of p[cat]) map.set(x.key, x);
  else for (const l of String(p[cat] || "").split("\n")) { const f = l.split("|"); if (f.length >= 2 && f[0].trim()) map.set(f[0].trim(), { t: f[1].trim(), pron: (f[2] || "").trim(), note: (f[3] || "").trim() }); }
  return (PB_KEYS[cat] || []).filter(([k]) => map.has(k)).map(([k, tb]) => {
    const x = map.get(k);
    return { key: k, t: fill(x.t), pron: x.pron || "", mean: L10(tb).replace("{L}", pbName(p)), raw: x.t, note: UI === "en" ? "" : x.note || "" };
  });
}
function pbListHTML() {
  const q = normAns(state.pbQ || "").trim();
  const all = pbSort(pbAll()), hit = (p) => !q || [p.de, p.en, p.native, p.code].some((s) => normAns(s || "").includes(q));
  const list = all.filter(hit);
  let last = "", out = "";
  for (const p of list) {
    const letter = pbName(p).charAt(0).toUpperCase();
    if (!q && letter !== last) { out += `<div class="pbletter">${esc(letter)}</div>`; last = letter; }
    out += `<button class="row" data-action="pblang" data-arg="${esc(p.code)}"><span class="badge pbflag" aria-hidden="true">${esc(p.flag || "🌐")}</span>
      <span class="main"><span class="t1">${esc(pbName(p))}${p.ai ? `<span class="tag">${T("KI")}</span>` : ""}</span><span class="t2">${esc(p.native || "")}</span></span><span class="val"></span><span class="chev" aria-hidden="true">›</span></button>`;
  }
  const raw = (state.pbQ || "").trim();
  if (!list.length) out += `<p class="hint" style="margin:14px 0">${T("„{0}“ ist noch nicht dabei.", [esc(raw)])}</p>`;
  if (raw && aiOn()) out += `<button class="btn primary" style="width:100%;margin-top:12px" data-action="pb-ai" data-arg="${esc(raw)}">${T("✦ „{0}“ mit KI erstellen", [esc(raw)])}</button>`;
  else if (!list.length) out += `<p class="hint">${T("Mit dem KI-Assistenten (Einstellungen › KI-Assistent) kann PLM jede weitere Sprache erstellen.")}</p>`;
  return out;
}
function viewPhrasebook() {
  return `${backBar()}
    <h1 class="vtitle">${T("Sprachführer")}</h1>
    <p class="meta">${T("{0} Sprachen · Vorstellen, Basics, Liebe, Beleidigungen – mit Aussprache zum Anhören", [num(pbAll().length)])}</p>
    <label class="searchbar">${ICON_SEARCH}<input id="pbQ" type="search" enterkeyhint="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="${T("Sprache suchen …")}" value="${esc(state.pbQ || "")}" aria-label="${T("Sprache suchen")}"></label>
    <div id="pbList" class="pblist-langs">${pbListHTML()}</div>`;
}
function pbSay(text, code) {
  if (!canSpeak()) return "";
  return `<button type="button" class="th-say" data-action="th-say" data-arg="${esc(text)}" data-p="${esc(code)}" aria-label="${T("Anhören")}">${ICON_SPEAK}</button><button type="button" class="th-say slow" data-action="th-say-slow" data-arg="${esc(text)}" data-p="${esc(code)}" aria-label="${T("Langsam anhören")}">${ICON_SLOW}</button>`;
}
function pbListBody(p, cat) {
  const items = pbItems(p, cat), mine = !!langOf(p.code);
  const row = (x, i) => `<div class="pbi">
      <div class="pbi-main"><span class="pbi-t" lang="${esc(p.tag || p.code)}">${esc(x.t)}</span>${x.pron && x.pron !== x.t ? `<span class="pbi-p">${esc(x.pron)}</span>` : ""}
        <span class="pbi-m">${x.lvl ? `<span class="pblvl" title="${esc(L10(PB_LEVEL[x.lvl][1]))}">${PB_LEVEL[x.lvl][0]} ${esc(L10(PB_LEVEL[x.lvl][1]))}</span> ` : ""}${esc(x.mean)}</span>
        ${x.note ? `<small class="pbi-n">${esc(x.note)}</small>` : ""}</div>
      <div class="pbi-b">${pbSay(x.t, p.code)}${mine ? `<button type="button" class="th-say" data-action="pb-add" data-arg="${i}" aria-label="${T("Als Karte lernen")}">+</button>` : ""}</div></div>`;
  return items.map(row).join("") || `<p class="hint">${T("Für diesen Bereich gibt es hier noch nichts.")}</p>`;
}
function viewPbLang(v) {
  const p = pbFind(v.p);
  if (!p) return `${backBar()}<h1 class="vtitle">${T("Nicht gefunden")}</h1>`;
  const cat = PB_CATS.some((c) => c.id === state.pbCat) ? state.pbCat : "intro";
  const mine = !!langOf(p.code), catT = PB_CATS.find((c) => c.id === cat);
  return `${backBar()}
    <div class="pbhead"><span class="pbbig" aria-hidden="true">${esc(p.flag || "🌐")}</span><div><h1 class="vtitle">${esc(pbName(p))}</h1><p class="meta">${esc(p.native || "")}${p.ai ? ` · ${T("von der KI erstellt")}` : ""}</p></div></div>
    <div class="seg pbcats" role="group" aria-label="${T("Bereich")}">${PB_CATS.map((c) => `<button data-action="pb-cat" data-arg="${c.id}" aria-pressed="${c.id === cat}">${c.icon} ${esc(L10(c.t))}</button>`).join("")}</div>
    <p class="hint pbdesc">${esc(L10(catT.d))}</p>
    ${cat === "intro" ? `<label class="field pbname"><span class="label">${T("Dein Name (für „Ich heiße …“)")}</span><input id="pbName" autocomplete="given-name" maxlength="30" value="${esc(lsGet("plm.pbName") || "")}" placeholder="${T("z. B. Anna")}"></label>` : ""}
    <div class="pblist">${pbListBody(p, cat)}</div>
    <p class="hint pbfoot">${T("Umschrift für Deutschsprachige: GROSS = betonte Silbe. Am genauesten ist das Anhören – 🐢 spricht langsam.")}${!pickVoice(p.code) && canSpeak() ? `<br>${T("Auf diesem Gerät ist noch keine {0}-Stimme installiert – iPhone: Einstellungen › Bedienungshilfen › Gesprochene Inhalte › Stimmen.", [esc(pbName(p))])}` : ""}</p>
    ${mine ? "" : `<p class="hint">${T("Tipp: Mit „+ Sprache“ auf der Startseite kannst du Sätze auch als Karten lernen, wenn PLM die Sprache kennt.")}</p>`}
    ${p.ai ? `<button class="btn danger" data-action="pb-del" data-arg="${esc(p.code)}" style="margin-top:14px">${T("KI-Sprache löschen")}</button>` : ""}`;
}
function pbAddCard(i) {
  const top = topView(), p = pbFind(top.p), cat = state.pbCat || "intro";
  if (!p || !langOf(p.code)) return;
  const x = pbItems(p, cat)[Number(i)]; if (!x) return;
  const key = sameKey({ lang: p.code, type: "word", tg: x.t }), exists = state.cards.find((c) => sameKey(c) === key);
  if (exists) { toast(T("Ist schon in deinen Karten")); return; }
  const c = normCard({ lang: p.code, type: "word", tg: x.t, de: x.mean || "", ml: UI === "en" ? "en" : undefined, pos: "s", deck: "Sprachführer", topic: L10(PB_CATS.find((c2) => c2.id === cat).t), note: x.note || "" });
  if (!c) return;
  state.cards.push(c); reindex(); save();
  toast(T("„{0}“ ist jetzt eine Karte im Projekt „Sprachführer“", [x.t]));
}
/* ---------- AI: write a phrasebook page for any other language ---------- */
const PB_ITEM = { type: "object", additionalProperties: false, required: ["key", "text", "pron"], properties: { key: { type: "string" }, text: { type: "string" }, pron: { type: "string" } } };
const AI_PB_SCHEMA = { type: "object", additionalProperties: false, required: ["code", "bcp47", "flag", "name_de", "name_en", "native_name", "intro", "basics", "love", "insults"],
  properties: { code: { type: "string" }, bcp47: { type: "string" }, flag: { type: "string" }, name_de: { type: "string" }, name_en: { type: "string" }, native_name: { type: "string" },
    intro: { type: "array", items: PB_ITEM }, basics: { type: "array", items: PB_ITEM }, love: { type: "array", items: PB_ITEM },
    insults: { type: "array", items: { type: "object", additionalProperties: false, required: ["text", "pron", "german", "english", "level", "note"], properties: { text: { type: "string" }, pron: { type: "string" }, german: { type: "string" }, english: { type: "string" }, level: { type: "integer" }, note: { type: "string" } } } } } };
async function aiPbGen(query) {
  if (!aiOn()) { toast(T("Dafür brauchst du den KI-Assistenten (Einstellungen › KI-Assistent)")); return; }
  const job = { n: 0 }; state.aiJob = job;
  const paint = () => { if (state.aiJob !== job) return; $("studyIn").innerHTML = `<div class="st-top"><button class="mbtn" data-action="ai-job-cancel" aria-label="${T("Abbrechen")}">✕</button><div class="st-prog"><span class="indet"></span></div><span></span><span></span></div>
    <div class="st-done"><span class="label">${T("Sprachführer")}</span><h1 class="vtitle">${T("KI schreibt „{0}“ …", [esc(query)])}</h1><p class="hint">${job.n ? T("{0} Zeichen erhalten", [num(job.n)]) : T("Das dauert etwa eine halbe Minute.")}</p></div>`; };
  $("study").hidden = false; document.body.style.overflow = "hidden"; paint();
  const finish = () => { if (state.aiJob === job) { state.aiJob = null; $("study").hidden = true; document.body.style.overflow = ""; } };
  const keys = (cat) => PB_KEYS[cat].map(([k, tb]) => `${k} = "${tb.en.replace("{L}", "<the language>")}"`).join("; ");
  const system = `You write one page of a pocket phrasebook for German speakers. The user names a language (possibly in German, possibly with a typo). Identify it; if it is not a real human language, return empty arrays.
- code: ISO 639-1 code if there is one (else 639-3), lower case. bcp47: the tag a speech synthesizer would use (e.g. "sw-KE"). flag: one flag emoji of a country where it is widely spoken. name_de / name_en: the language name in German and English. native_name: its own name.
- intro: one item for each key: ${keys("intro")}. Where a name goes, write "…".
- basics: one item for each key: ${keys("basics")}.
- love: one item for each key: ${keys("love")}. Where the words depend on who speaks to whom, use the most common form.
- text: natural, everyday, correct, in the language's usual script. pron: for Latin-script languages a simple respelling for German speakers with the stressed syllable in CAPITALS (e.g. Italian "Mi chiamo" → "mi KJAA-mo"); for other scripts the standard romanization (with tones or stress marks where usual).
- insults: 8 common, real-life swear words and insults, from mild to coarse (like "shit", "idiot", "shut up", "bitch", "damn it"), with German and English meaning, level 1 = mild, 2 = rude, 3 = strong, and a short German note (literal meaning or where it's used, may be empty). No slurs against any group (ethnicity, religion, sexuality, disability), nothing about violence.`;
  try {
    const r = await aiCall({ system, content: `Language: ${query}`, schema: AI_PB_SCHEMA, maxTokens: 6000, effort: "low", onText: (n) => { job.n = n; paint(); } });
    if (state.aiJob !== job) return;
    finish();
    const d = r.json || {};
    if (!(d.intro || []).length && !(d.basics || []).length) throw new Error(T("Diese Sprache hat die KI nicht erkannt – Schreibweise prüfen."));
    let code = String(d.code || "x").toLowerCase().replace(/[^a-z-]/g, "").slice(0, 8) || "x";
    if (PHRASEBOOK.some((p) => p.code === code)) { go("pblang", code); return; }
    const one = (s) => clean1(String(s || "")).slice(0, 200);
    const p = { code, ai: true, tag: one(d.bcp47) || code, flag: one(d.flag).slice(0, 8) || "🌐", de: one(d.name_de) || query, en: one(d.name_en) || query, native: one(d.native_name),
      intro: (d.intro || []).map((x) => ({ key: one(x.key), t: one(x.text), pron: one(x.pron) })), basics: (d.basics || []).map((x) => ({ key: one(x.key), t: one(x.text), pron: one(x.pron) })), love: (d.love || []).map((x) => ({ key: one(x.key), t: one(x.text), pron: one(x.pron) })),
      insults: (d.insults || []).slice(0, 12).map((x) => ({ t: one(x.text), pron: one(x.pron), de: one(x.german), en: one(x.english), lvl: Math.min(3, Math.max(1, Number(x.level) || 2)), note: one(x.note) })) };
    pbSaveCustom(pbCustom().filter((x) => x.code !== code).concat([p]));
    state.pbQ = ""; state.pbCat = "intro";
    go("pblang", code);
  } catch (e) { if (state.aiJob === job) { finish(); toast(e.message); } }
}
Object.assign(VIEWS, { phrasebook: viewPhrasebook, pblang: viewPbLang });
Object.assign(VIEW_LABEL, { phrasebook: T("Sprachführer"), pblang: T("Sprachführer") });
