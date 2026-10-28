/* ================= Theory: grammar chapters, verb lookup, new words, exercises ================= */
const L10 = (o) => (o == null ? "" : typeof o === "string" ? o : UI === "en" ? o.en : o.de);
const stripTags = (h) => String(h).replace(/<[^>]+>/g, "");
const THEORY_SECS = [["words", TB("Wörter & Grammatik", "Words & grammar")], ["verbs", TB("Verben & Zeitformen", "Verbs & tenses")], ["phrases", TB("Wendungen & Stolperfallen", "Phrases & pitfalls")]];
const theoryLangs = () => langs().filter((L) => (THEORY[L.code] && THEORY[L.code].length) || canConj(L.code) || (typeof courseOf === "function" && courseOf(L.code)));
const chapterOf = (code, id) => (THEORY[code] || []).find((c) => c.id === id) || null;
const sayBtn = (text, code, big) => (canSpeak() ? `<button type="button" class="th-say${big ? " big" : ""}" data-action="th-say" data-arg="${esc(text)}" data-p="${esc(code)}" aria-label="${T("Anhören")}">${ICON_SPEAK}</button>` : "");

/* ---------- Verb tables for the lookup and the exercises ---------- */
const IT_PERS = ["io", "tu", "lui / lei", "noi", "voi", "loro"], IT_PERS_IMP = ["tu", "Lei", "noi", "voi", "Loro"];
function conjCard(code, verb, tense, forms) {
  const pers = persFor(code, tense), plain = tense === "Stammformen" || tense === (LOOKUP[code] || {}).imp;
  const speakText = forms.map((f, i) => (!f ? "" : plain ? f : withPron(code, pers[i], f))).filter(Boolean).join(", ");
  const rows = forms.map((f, i) => (f ? `<tr><td class="p">${esc(code === "fr" && !plain && /^je$/.test(pers[i]) && frVowel(f) ? "j'" : pers[i] || "")}</td><td><b>${esc(f)}</b></td></tr>` : "")).join("");
  return `<div class="th-conj"><div class="th-conj-h"><span><b>${esc(verb)}</b><small>${esc(dn(tense))}</small></span>${sayBtn(speakText, code)}</div>
    <table><tbody>${rows}</tbody></table></div>`;
}

/* ---------- Blocks ---------- */
function blockHTML(b, code) {
  const [t, a] = b;
  if (t === "p") return `<p class="th-p">${L10(a)}</p>`;
  if (t === "h") return `<h3 class="th-h">${L10(a)}</h3>`;
  if (t === "tip") return `<div class="th-tip"><span aria-hidden="true">💡</span><p>${L10(a)}</p></div>`;
  if (t === "table") {
    return `<div class="tablewrap th-tw"><table class="th-t"><thead><tr>${a.head.map((h) => `<th>${L10(h)}</th>`).join("")}</tr></thead>
      <tbody>${a.rows.map((r) => `<tr>${r.map((c, i) => `<td${i === 0 && a.head.length > 2 ? ' class="th-first"' : ""}>${i === a.say ? `<span class="th-cell">${L10(c)}${sayBtn(stripTags(L10(c)), code)}</span>` : L10(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }
  if (t === "ex") return `<div class="th-ex">${a.map((x) => { const tr = UI === "en" ? x[2] : x[1]; return `<div class="th-exi">${sayBtn(x[0], code)}<div><span class="th-tg">${x[0]}</span>${tr ? `<small>${tr}</small>` : ""}</div></div>`; }).join("")}</div>`;
  if (t === "conj") {
    const cards = [];
    for (const v of a.verbs) { const r = verbTables(code, v); if (!r) continue; for (const tn of a.tenses) if (r[tn]) cards.push(conjCard(code, v, tn, r[tn])); }
    return `<div class="th-conjgrid">${cards.join("")}</div>`;
  }
  if (t === "quiz") { const q = QUIZ_DEF[a]; return q ? `<button class="btn primary th-quizbtn" data-action="quiz-start" data-arg="${esc(a)}">✎ ${T("Üben: {0}", [L10(q.title)])}</button>` : ""; }
  if (t === "irr") {
    return `<div class="tablewrap th-tw"><table class="th-t"><thead><tr><th>Infinitive</th><th>Past simple</th><th>Past participle</th>${UI === "en" ? "" : `<th>${T("Deutsch")}</th>`}</tr></thead>
      <tbody>${enIrregular().map((v) => `<tr><td><span class="th-cell"><b>${esc(v.inf)}</b>${sayBtn(`${v.inf}, ${v.past}, ${v.pp}`, "en")}</span></td><td>${esc(v.past)}</td><td>${esc(v.pp)}</td>${UI === "en" ? "" : `<td class="th-de">${esc(v.de)}</td>`}</tr>`).join("")}</tbody></table></div>`;
  }
  return "";
}

/* ---------- Views ---------- */
function theoryPills(code, view) {
  const ls = view === "conj" ? langs().filter((L) => canConj(L.code)) : theoryLangs();
  if (ls.length < 2) return "";
  return `<div class="pills" role="group" aria-label="${T("Sprache")}">${ls.map((L) => `<button data-action="th-lang" data-arg="${esc(L.code)}" data-p="${esc(view)}" aria-pressed="${L.code === code}">${esc(lname(L))}</button>`).join("")}</div>`;
}
const newCardsOf = (code) => state.cards.filter((c) => c.lang === code && !c.susp && !isLearned(c));
function viewTheory(v) {
  const code = v.p, L = langOf(code), chs = THEORY[code] || [];
  if (!L) return `${backBar()}<h1 class="vtitle">${T("Nicht gefunden")}</h1>`;
  const nw = newCardsOf(code).length;
  const tools = `<section class="sec">
      ${canConj(code) ? navRow("nav", "conj", T("Verb nachschlagen"), code === "en" ? T("Stammformen und Zeitformen – z. B. go, went, gone") : T("Jedes Verb in allen wichtigen Zeitformen – auch mit Übersetzung suchen"), "", badgeTxt("⇄", L.color), ` data-p="${esc(JSON.stringify({ lang: code }))}"`) : ""}
      ${navRow("nav", "newwords", T("Neue Wörter ansehen"), nw ? T("{0} noch nicht gelernt – in Ruhe durchlesen und anhören", [num(nw)]) : T("Alle Wörter sind schon im Lernen"), nw ? `<small>${num(nw)}</small>` : "", badgeTxt("Aa", L.color), ` data-p="${esc(code)}"`)}
    </section>`;
  const secs = THEORY_SECS.map(([k, title]) => {
    const list = chs.filter((c) => c.sec === k);
    if (!list.length) return "";
    return `<section class="sec"><div class="sechead"><h2 class="sectitle">${L10(title)}</h2></div>
      ${list.map((c) => navRow("nav", "chapter", L10(c.title), L10(c.sub), "", badgeTxt(L10(c.title).replace(/[^\p{L}]/gu, "").slice(0, 2), L.color), ` data-p="${esc(JSON.stringify({ lang: code, id: c.id }))}"`)).join("")}</section>`;
  }).join("");
  let cg = "";
  if (hasCourse(code) && needCourse(code)) cg = courseLevels(code).map((lv) => {
    const ls = lv.lessons.filter((l) => l.gram && l.gram.length);
    if (!ls.length) return "";
    return `<section class="sec"><div class="sechead"><h2 class="sectitle">${T("Kurs {0}: Grammatik", [lv.id])}</h2></div>
      ${ls.map((l) => navRow("lesson-gram", l.id, gramTitle(l), T("Lektion {0} · {1}", [l.n, L10(l.t)]), "", badgeTxt(lv.id, L.color), ` data-p="${esc(code)}"`)).join("")}</section>`;
  }).join("");
  return `${backBar()}
    <h1 class="vtitle" style="color:${L.color}">${T("Theorie")}</h1>
    <p class="meta">${esc(lname(L))} · ${T("Grammatik zum Nachlesen, mit Beispielen zum Anhören und Übungen")}</p>
    ${theoryPills(code, "theory")}
    ${chs.length ? tools + secs : tools}${cg}
    ${!chs.length && !cg ? `<p class="hint">${T("Für diese Sprache gibt es noch keine Theorie.")}</p>` : ""}`;
}
function gramTitle(l) { const h = (l.gram || []).find((b) => b[0] === "h"); return h ? stripTags(L10(h[1])) : L10(l.t); }
function viewChapter(v) {
  const { lang: code, id } = v.p || {}, L = langOf(code), ch = chapterOf(code, id);
  if (!L || !ch) return `${backBar()}<h1 class="vtitle">${T("Nicht gefunden")}</h1>`;
  const list = THEORY[code], i = list.indexOf(ch), prev = list[i - 1], next = list[i + 1];
  const nav = (c, lbl) => (c ? `<button class="btn grow th-navbtn" data-action="th-goto" data-arg="${esc(c.id)}"><small>${lbl}</small>${esc(L10(c.title))}</button>` : "");
  return `${backBar()}
    <h1 class="vtitle" style="color:${L.color}">${esc(L10(ch.title))}</h1>
    <p class="meta">${esc(L10(ch.sub))}</p>
    <article class="th-body">${ch.blocks.map((b) => blockHTML(b, code)).join("")}</article>
    <div class="btnrow th-nav">${nav(prev, T("‹ Zurück"))}${nav(next, T("Weiter ›"))}</div>`;
}
const CONJ_CHIPS = {
  it: ["essere", "avere", "andare", "fare", "stare", "venire", "potere", "volere", "dovere", "sapere", "bere", "parlare", "prendere", "dormire", "capire", "chiamarsi"],
  en: ["be", "have", "go", "do", "make", "take", "get", "come", "see", "know", "think", "say"],
  es: ["ser", "estar", "tener", "ir", "hacer", "poder", "querer", "decir", "hablar", "comer", "vivir", "llamarse"],
  fr: ["être", "avoir", "aller", "faire", "pouvoir", "vouloir", "venir", "prendre", "parler", "finir", "attendre", "s'appeler"]
};
function viewConj(v) {
  const p = v.p || {}, code = p.lang || "it", L = langOf(code);
  if (!L) return `${backBar()}<h1 class="vtitle">${T("Nicht gefunden")}</h1>`;
  if (!canConj(code)) return `${backBar()}<h1 class="vtitle">${T("Verb nachschlagen")}</h1><p class="hint">${T("Für {0} gibt es noch keine automatische Konjugation. Eigene Verbkarten mit Formen kannst du unter Konjugation anlegen.", [esc(lname(L))])}</p>`;
  const typed = (p.verb || "").trim();
  let body = "";
  if (typed) {
    const hit = resolveVerb(code, typed), verb = hit ? hit.inf : typed, r = hit ? verbTables(code, verb) : null;
    if (!r) {
      const sug = verbSuggest(code, typed, 5);
      body = `<p class="neg">${code === "it" ? T("„{0}“ ist kein italienischer Infinitiv (-are, -ere, -ire, -arsi …).", [esc(typed)]) : T("„{0}“ wurde nicht erkannt.", [esc(typed)])}</p>${sug.length ? `<p class="hint">${T("Meintest du:")}</p><div class="sugbox static">${conjSugHTML(code, typed)}</div>` : ""}`;
    } else {
      const lk = LOOKUP[code], tenses = lk ? lk.tenses : Object.keys(r).filter((k) => !k.startsWith("_"));
      const irr = verbIrregular(code, verb), meaning = verbMeaning(code, verb), own = ownVerbCard(code, verb), known = !!(lexEntry(code, verb) || own);
      const auxTxt = code === "it" && r._aux ? (r._both ? T("Passato prossimo mit avere oder essere") : T("Passato prossimo mit {0}", [r._aux])) : code === "fr" && r._aux === "être" ? T("Passé composé mit être") : "";
      const from = hit && hit.from ? `<p class="th-from">${T("„{0}“ ist {1} von {2}", [esc(typed), esc(`${dn(hit.from.tense)}${persFor(code, hit.from.tense)[hit.from.i] ? ", " + persFor(code, hit.from.tense)[hit.from.i] : ""}`), `<b>${esc(verb)}</b>`])}</p>` : "";
      body = `${from}<div class="th-verbhead"><h2>${esc(verb)}</h2>${sayBtn(verb, code, true)}<p class="meta">${[meaning ? `<span class="th-mean">${esc(meaning)}</span>` : "", irr ? T("unregelmäßig") : T("regelmäßig"), auxTxt].filter(Boolean).join(" · ")}</p></div>
        <div class="th-conjgrid">${tenses.filter((tn) => r[tn] && r[tn].some(Boolean)).map((tn) => conjCard(code, verb, tn, r[tn])).join("")}</div>
        ${!known ? `<p class="hint">${T("Regelmäßig gebildet – bei unbekannten Verben bitte gegenprüfen.")}</p>` : ""}
        <div class="btnrow">${own ? `<button class="btn grow" data-action="verb" data-arg="${esc(own.id)}">${T("Deine Karte öffnen ›")}</button>` : `<button class="btn grow" data-action="conj-card" data-arg="${esc(verb)}">${T("+ Als Karte lernen")}</button>`}</div>`;
    }
  }
  const ph = { it: T("z. B. essere, bevo, trinken"), en: T("z. B. go, went, gehen"), es: T("z. B. tener, tengo, haben"), fr: T("z. B. être, suis, sein") }[code];
  return `${backBar()}
    <h1 class="vtitle" style="color:${L.color}">${T("Verb nachschlagen")}</h1>
    <p class="meta">${esc(lname(L))} · ${T("Infinitiv, Verbform oder Übersetzung eingeben")}</p>
    ${theoryPills(code, "conj")}
    <form class="th-search" id="conjForm" autocomplete="off"><input id="conjIn" class="psel" value="${esc(typed)}" placeholder="${esc(ph)}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="search" aria-label="${T("Verb")}" aria-controls="conjSug"><button class="btn primary" type="submit">${T("Anzeigen")}</button></form>
    <div class="sugbox" id="conjSug" role="listbox" aria-label="${T("Vorschläge")}" hidden></div>
    ${body || `<div class="chips th-verbchips">${(CONJ_CHIPS[code] || []).map((x) => `<button class="chipbtn" data-action="th-verb" data-arg="${esc(x)}">${esc(x)}</button>`).join("")}</div>`}`;
}
function viewNewWords(v) {
  const code = v.p, L = langOf(code);
  if (!L) return `${backBar()}<h1 class="vtitle">${T("Nicht gefunden")}</h1>`;
  const list = newCardsOf(code).sort((a, b) => a.created - b.created), limit = state.showAll ? list.length : 120;
  const groups = new Map();
  for (const c of list.slice(0, limit)) { const k = `${c.deck}\u0000${c.topic || ""}`; if (!groups.has(k)) groups.set(k, []); groups.get(k).push(c); }
  const rows = [...groups].map(([k, cs]) => { const [deck, topic] = k.split("\u0000"); return `<section class="sec"><div class="sechead"><h2 class="sectitle th-small">${esc(dn(deck))}${topic ? ` · ${esc(dn(topic))}` : ""}</h2></div>
    ${cs.map((c) => `<div class="th-word">${sayBtn(c.type === "cloze" ? fillCloze(c.tg) : c.tg, code)}<div class="th-word-main"><span class="th-tg">${esc(c.type === "cloze" ? fillCloze(c.tg) : c.tg)}</span><span class="th-de">${esc(c.de)}</span>${c.ex ? `<small>${esc(c.ex)}${c.exDe ? ` – ${esc(c.exDe)}` : ""}</small>` : ""}</div></div>`).join("")}</section>`; }).join("");
  return `${backBar()}
    <h1 class="vtitle" style="color:${L.color}">${T("Neue Wörter")}</h1>
    <p class="meta">${esc(lname(L))} · ${T("{0} noch nicht gelernt", [num(list.length)])}</p>
    ${list.length ? `<div class="btnrow"><button class="btn primary grow" data-action="nw-learn" data-arg="${esc(code)}">${T("▶ Lernen")}</button><button class="btn grow" data-action="nw-preview" data-arg="${esc(code)}">${T("Als Karten durchgehen")}</button></div>
      <p class="hint">${T("„Lernen“ nimmt die neuen Wörter in deinen Wiederholungsplan auf (so viele pro Tag, wie eingestellt). „Durchgehen“ zeigt sie nur als Karten, ohne Plan.")}</p>` : `<p class="hint">${T("Alle Wörter sind schon im Lernen. Lade ein Starter-Paket oder importiere neue Wörter.")}</p>`}
    ${rows}
    ${list.length > limit ? `<button class="btn" data-action="show-all">${T("Alle {0} anzeigen", [num(list.length)])}</button>` : ""}`;
}
/* A verb from the lookup becomes a card with all its tables */
function addVerbCard(code, inf) {
  const L = langOf(code), r = verbTables(code, inf);
  if (!L || !r) return;
  if (ownVerbCard(code, inf)) { toast(T("Das Verb ist schon in deinen Karten")); return; }
  const e = lexEntry(code, inf), tables = {};
  for (const [k, f] of Object.entries(r)) if (!k.startsWith("_")) tables[k] = f;
  for (const t of L.tenses) if (!tables[t.n] && r[t.n]) tables[t.n] = r[t.n];
  const en = UI === "en" && e && e.en;
  const c = normCard({ lang: code, type: "verb", tg: e ? e.inf : inf, de: en ? e.en : (e ? e.de : ""), ml: en ? "en" : undefined, pos: "v", deck: "Verben", topic: "", tables, aux: r._aux === "essere" ? "essere" : undefined });
  if (!c) return;
  if (!c.de) { openCard(c); return; }
  state.cards.push(c); reindex(); save(); render();
  toast(T("„{0}“ ist jetzt eine Karte im Projekt „Verben“", [c.tg]));
}
Object.assign(VIEWS, { theory: viewTheory, chapter: viewChapter, conj: viewConj, newwords: viewNewWords });
Object.assign(VIEW_LABEL, { theory: T("Theorie"), chapter: T("Kapitel"), conj: T("Verb nachschlagen"), newwords: T("Neue Wörter") });

/* ================= Exercises (quiz) ================= */
const pick = (a, n) => shuffle(a.slice()).slice(0, n);
const rnd = (a) => a[Math.floor(Math.random() * a.length)];
function itArt(word, g, def) {
  const w = word.toLowerCase(), pl = g.endsWith("p"), f = g[0] === "f";
  const vowel = /^[aeiouàèéìòù]/.test(w) || /^h[aeiou]/.test(w);
  const special = /^(s[^aeiouàèéìòù]|z|gn|ps|pn|x|y|i[aeiou])/.test(w);
  if (def) { if (f) return pl ? "le" : vowel ? "l'" : "la"; if (pl) return vowel || special ? "gli" : "i"; return vowel ? "l'" : special ? "lo" : "il"; }
  if (f) return vowel ? "un'" : "una";
  return special ? "uno" : "un";
}
const withArt = (art, w) => (art.endsWith("'") ? art + w : `${art} ${w}`);
const gloss = (n) => (UI === "en" ? n[3] : n[2]);
function choiceQ(q, opts, right, extra) {
  const order = extra && extra.keep ? opts.map((_, i) => i) : shuffle(opts.map((_, i) => i));
  return { q, opts: order.map((i) => opts[i]), right: order.indexOf(right), ...(extra || {}) };
}
function genArt(def, n) {
  const pool = QZ.itNouns.filter((x) => def || !x[1].endsWith("p"));
  const qs = pick(pool, n).map((x) => {
    const pl = x[1].endsWith("p"), opts = def ? (pl ? ["i", "gli", "le"] : ["il", "lo", "l'", "la"]) : ["un", "uno", "una", "un'"], art = itArt(x[0], x[1], def);
    return choiceQ(`___ ${x[0]}`, opts, opts.indexOf(art), { sub: gloss(x), say: withArt(art, x[0]), why: artWhy(x[0], x[1], art) });
  });
  if (def) { // a few nouns from the learner's own cards
    const own = state.cards.filter((c) => c.lang === "it" && c.type === "word" && c.pos === "n").map((c) => /^(il|lo|la|l'|i|gli|le)\s*([\p{L}]+)$/u.exec(c.tg.trim())).filter(Boolean);
    for (const m of pick(own, Math.min(3, own.length))) {
      const art = m[1], pl = ["i", "gli", "le"].includes(art), opts = pl ? ["i", "gli", "le"] : ["il", "lo", "l'", "la"];
      if (!qs.some((q) => q.say === withArt(art, m[2]))) qs[Math.floor(Math.random() * qs.length)] = choiceQ(`___ ${m[2]}`, opts, opts.indexOf(art), { say: withArt(art, m[2]), sub: T("aus deinen Karten") });
    }
  }
  return qs;
}
function artWhy(w, g, art) {
  const f = g[0] === "f", pl = g.endsWith("p");
  const gen = f ? T("weiblich") : T("männlich"), num1 = pl ? T("Plural") : T("Singular");
  const start = /^[aeiouàèéìòù]/i.test(w) ? T("Vokal am Anfang") : /^(s[^aeiou]|z|gn|ps|pn|x|y)/i.test(w) ? T("beginnt mit s + Konsonant, z, gn, ps …") : T("Konsonant am Anfang");
  return `${gen}, ${num1}, ${start} → ${art}`;
}
function genForms(verbs, tenses, n, persons, code) {
  code = code || "it";
  const qs = [], tries = n * 6;
  for (let k = 0; k < tries && qs.length < n; k++) {
    const v = rnd(verbs), tn = rnd(tenses), r = verbTables(code, v);
    if (!r || !r[tn]) continue;
    const pers = persFor(code, tn), imp = tn === (LOOKUP[code] || {}).imp, idxs = (persons || pers.map((_, i) => i)).filter((i) => r[tn][i]);
    if (!idxs.length) continue;
    const i = rnd(idxs), ans = r[tn][i];
    if (qs.some((q) => q.ans === ans)) continue;
    qs.push({ q: `${esc(pers[i])} · <b>${esc(v)}</b>`, sub: imp ? `${tn} (!)` : tn, ans, say: imp ? ans.split(" / ")[0] : withPron(code, pers[i], ans.split(" / ")[0].replace(/\([^)]*\)/g, "")) });
  }
  return qs;
}
const IT_IRR_CORE = ["essere", "avere", "andare", "fare", "stare", "venire", "potere", "volere", "dovere", "sapere", "dire", "uscire", "dare", "bere", "rimanere"];
const enGenChoice = (items, n) => pick(items, n).map((x) => choiceQ(esc(x[0]).replace("___", "<span class=\"gap\">…</span>"), x[1], x[2], { why: x[3] ? L10(x[3]) : "", say: x[1][x[2]].includes("…") ? "" : x[0].replace("___", x[1][x[2]]) }));
const QUIZ_DEF = {
  "it-art-def": { lang: "it", title: TB("bestimmter Artikel", "definite article"), gen: () => genArt(true, 12) },
  "it-art-indef": { lang: "it", title: TB("unbestimmter Artikel", "indefinite article"), gen: () => genArt(false, 12) },
  "it-art-mix": { lang: "it", title: TB("alle Artikel gemischt", "all articles mixed"), gen: () => shuffle(genArt(true, 7).concat(genArt(false, 7))) },
  "it-plural": { lang: "it", title: TB("Plural bilden", "forming plurals"), gen: () => pick(QZ.itPlural, 12).map(([s, p]) => ({ q: `${esc(s)} → …`, sub: T("Plural mit Artikel"), ans: p, say: p })) },
  "it-presente-reg": { lang: "it", title: TB("Präsens, regelmäßig", "present tense, regular"), gen: () => genForms(IT_REG_VERBS, ["Presente"], 12) },
  "it-presente-irr": { lang: "it", title: TB("Präsens, unregelmäßig", "present tense, irregular"), gen: () => genForms(IT_IRR_CORE, ["Presente"], 12) },
  "it-aux": { lang: "it", title: TB("avere oder essere?", "avere or essere?"), gen: () => pick(QZ.itAux, 12).map(([v, a]) => { const r = verbTables("it", v); const f = r && r["Passato prossimo"] ? r["Passato prossimo"][0] : ""; return choiceQ(`<b>${esc(v)}</b>`, ["avere", "essere"], a === "essere" ? 1 : 0, { sub: T("Passato prossimo mit …?"), why: f ? `io ${f}` : "", say: f ? `io ${f.split("/")[0]}` : "", keep: true }); }) },
  "it-pp": { lang: "it", title: TB("Passato prossimo bilden", "forming the passato prossimo"), gen: () => genForms(["parlare", "mangiare", "andare", "venire", "fare", "dire", "prendere", "vedere", "leggere", "scrivere", "essere", "stare", "arrivare", "partire", "uscire", "bere", "aprire", "rimanere", "dormire", "capire"], ["Passato prossimo"], 12) },
  "it-imperfetto": { lang: "it", title: TB("Imperfetto bilden", "forming the imperfetto"), gen: () => genForms(["parlare", "abitare", "avere", "essere", "fare", "dire", "bere", "prendere", "leggere", "dormire", "andare", "venire", "stare"], ["Imperfetto"], 12) },
  "it-pp-imp": { lang: "it", title: TB("Passato prossimo oder Imperfetto?", "passato prossimo or imperfetto?"), gen: () => pick(QZ.itPpImp, 10).map((x) => choiceQ(esc(x[0]).replace("___", "<span class=\"gap\">…</span>"), x[1], x[2], { why: L10(x[3]), say: x[0].replace("___", x[1][x[2]]).replace(" ,", ","), keep: true })) },
  "it-futuro": { lang: "it", title: TB("Futuro bilden", "forming the future"), gen: () => genForms(["parlare", "prendere", "dormire", "cercare", "mangiare"].concat(IT_IRR_CORE), ["Futuro semplice"], 12) },
  "it-condizionale": { lang: "it", title: TB("Condizionale bilden", "forming the conditional"), gen: () => genForms(["parlare", "prendere", "dormire", "potere", "volere", "dovere", "essere", "avere", "andare", "fare", "venire", "piacere"], ["Condizionale presente"], 12) },
  "it-imperativo": { lang: "it", title: TB("Imperativ bilden", "forming the imperative"), gen: () => {
    const qs = genForms(["parlare", "aspettare", "prendere", "scrivere", "dormire", "finire", "andare", "fare", "stare", "dire", "venire", "essere", "avere"], ["Imperativo"], 9, [0, 1, 2, 3]);
    for (const v of pick(["parlare", "toccare", "preoccuparsi", "aspettare", "mangiare", "andare"], 3)) { const inf = v.replace(/rsi$/, "rti"); qs.push({ q: `tu · <b>${esc(v)}</b>`, sub: T("verneint (!)"), ans: `non ${inf}`, say: `non ${inf}` }); }
    return shuffle(qs);
  } },
  "it-prep": { lang: "it", title: TB("Präpositionen", "prepositions"), gen: () => {
    const preps = { di: "del dello dell' della dei degli delle", a: "al allo all' alla ai agli alle", da: "dal dallo dall' dalla dai dagli dalle", in: "nel nello nell' nella nei negli nelle", su: "sul sullo sull' sulla sui sugli sulle" };
    const arts = ["il", "lo", "l'", "la", "i", "gli", "le"], typed = [];
    for (let k = 0; k < 6; k++) { const p = rnd(Object.keys(preps)), ai = Math.floor(Math.random() * 7), ans = preps[p].split(" ")[ai]; if (!typed.some((q) => q.ans === ans)) typed.push({ q: `<b>${p} + ${arts[ai]}</b> = …`, ans, say: ans }); }
    return shuffle(typed.concat(pick(QZ.itPrepCtx, 6).map((x) => choiceQ(esc(x[0]).replace("___", "<span class=\"gap\">…</span>"), x[1], x[2], { say: x[0].replace("___ ", x[1][x[2]].endsWith("'") ? x[1][x[2]] : x[1][x[2]] + " ") }))));
  } },
  "en-tense": { lang: "en", title: TB("die richtige Zeitform", "the right tense"), gen: () => enGenChoice(QZ.enTense, 10) },
  "en-ppps": { lang: "en", title: TB("Past simple oder Present perfect?", "past simple or present perfect?"), gen: () => enGenChoice(QZ.enPpPs, 10) },
  "en-cond": { lang: "en", title: TB("If-Sätze", "if-clauses"), gen: () => enGenChoice(QZ.enCond, 8) },
  "en-art": { lang: "en", title: TB("a, an, the oder nichts?", "a, an, the or nothing?"), gen: () => enGenChoice(QZ.enArt, 12) },
  "en-modal": { lang: "en", title: TB("Modalverben", "modal verbs"), gen: () => enGenChoice(QZ.enModal, 8) },
  "en-mistakes": { lang: "en", title: TB("typische Fehler", "typical mistakes"), gen: () => pick(QZ.enMistakes, 10).map((x) => choiceQ(T("Was ist richtig?"), x[1], x[2], { say: x[1][x[2]] })) },
  "en-irr": { lang: "en", title: TB("unregelmäßige Verben", "irregular verbs"), gen: () => pick(enIrregular(), 12).map((v) => { const pp = Math.random() < 0.5; return { q: `<b>${esc(v.inf)}</b>`, sub: pp ? "past participle" : "past simple", ans: pp ? v.pp : v.past, say: `${v.inf}, ${v.past}, ${v.pp}` }; }) }
};

/* def: { lang, title, gen() → questions, onDone(pct) }
   question: { q (HTML), sub, opts + right (choice) | ans (typed) | tiles + ans (build the sentence) , listen (play instead of showing), say, why } */
function startQuiz(id) { const def = QUIZ_DEF[id]; if (def) runQuiz({ ...def, id }); }
function runQuiz(def) {
  const qs = def.gen().filter(Boolean);
  if (!qs.length) { toast(T("Dafür gibt es gerade keine Aufgaben")); return; }
  for (const q of qs) if (q.tiles) q.picked = [];
  state.quiz = { def, id: def.id, lang: def.lang, qs, i: 0, ok: 0, wrong: [], res: null, t0: Date.now() };
  $("study").hidden = false; document.body.style.overflow = "hidden";
  renderQuiz();
  const q = qs[0]; if (q.listen && canSpeak()) speak(q.listen, def.lang, { quiet: true });
}
function closeQuiz() {
  const Q = state.quiz; if (!Q) return;
  const done = Q.i + (Q.res ? 1 : 0);
  if (done) { const st = statOf(today(), Q.lang, true); st.s += Math.round((Date.now() - Q.t0) / 1000); save(); }
  stopSpeak();
  state.quiz = null; $("study").hidden = true; document.body.style.overflow = ""; render();
}
function quizTilesHTML(q, res) {
  const built = q.picked.map((i) => `<button class="tile-w on" data-action="quiz-untile" data-arg="${i}"${res ? " disabled" : ""}>${esc(q.tiles[i])}</button>`).join("");
  const pool = q.tiles.map((t, i) => `<button class="tile-w${q.picked.includes(i) ? " used" : ""}" data-action="quiz-tile" data-arg="${i}"${res || q.picked.includes(i) ? " disabled" : ""}>${esc(t)}</button>`).join("");
  return `<div class="tiles-ans" aria-label="${T("Dein Satz")}">${built || `<span class="hint">${T("Tippe die Wörter in der richtigen Reihenfolge an")}</span>`}</div>${res ? "" : `<div class="tiles-pool">${pool}</div>`}`;
}
function renderQuiz() {
  const Q = state.quiz, root = $("studyIn"); if (!Q) return;
  const def = Q.def, L = langOf(Q.lang) || { color: "var(--accent)", name: "" };
  if (Q.i >= Q.qs.length) {
    const pct = Math.round(Q.ok / Q.qs.length * 100);
    if (!Q.reported) { Q.reported = true; if (def.onDone) def.onDone(pct); }
    root.innerHTML = `<div class="st-top"><button class="mbtn" data-action="quiz-close" aria-label="${T("Schließen")}">✕</button><span></span><span></span><span></span></div>
      <div class="st-done"><span class="label">${T("Übung · {0}", [esc(L10(def.title))])}</span>
        <h1 class="vtitle">${pct >= 90 ? T("Sehr gut!") : pct >= 70 ? T("Gut!") : T("Dranbleiben!")}</h1>
        <section class="stats" aria-label="${T("Ergebnis")}"><div class="stat"><span class="label">${T("Fragen")}</span><span class="v">${num(Q.qs.length)}</span></div>
          <div class="stat"><span class="label">${T("Richtig")}</span><span class="v ${pct >= 80 ? "pos" : pct < 60 ? "neg" : ""}">${pct} %</span></div></section>
        <div class="btnrow"><button class="btn primary" data-action="quiz-again">${T("Neue Runde")}</button><button class="btn" data-action="quiz-close">${T("Fertig")}</button></div>
        ${Q.wrong.length ? `<section class="sec"><div class="sechead"><h2 class="sectitle">${T("Fehler")}</h2></div>${Q.wrong.map((w) => `<div class="row nochev nobadge"><span class="main"><span class="t1">${w.q}</span><span class="t2">${T("Richtig: {0}", [esc(w.right)])}${w.given ? ` · ${T("deine Antwort: {0}", [esc(w.given)])}` : ""}</span></span><span></span></div>`).join("")}</section>` : ""}
      </div>`;
    return;
  }
  const q = Q.qs[Q.i], res = Q.res, pct = Q.i / Q.qs.length * 100;
  const prompt = q.listen ? `<div class="say">${canSpeak() ? `<button class="say-big" data-action="th-say" data-arg="${esc(q.listen)}" data-p="${esc(Q.lang)}" aria-label="${T("Anhören")}">${ICON_SPEAK_BIG}</button><button class="say-small" data-action="quiz-slow" aria-label="${T("Langsam anhören")}">${ICON_SLOW}</button>` : `<b>${esc(q.listen)}</b>`}</div>${res ? `<div class="fc-sub th-listened">${esc(q.listen)}</div>` : ""}` : `<div class="fc-prompt th-q">${q.q}</div>`;
  let body = `<span class="label" style="color:${L.color}">${esc(q.kind || L10(def.title))}</span>${prompt}${q.sub ? `<div class="fc-sub">${esc(q.sub)}</div>` : ""}`;
  if (q.opts) body += `<div class="choices">${q.opts.map((o, i) => `<button class="choice${res ? (i === q.right ? " ok" : res.chose === i ? " bad" : "") : ""}" data-action="quiz-choose" data-arg="${i}"${res ? " disabled" : ""}><span class="hint" style="margin-right:8px">${i + 1}</span>${esc(o)}</button>`).join("")}</div>`;
  else if (q.tiles) body += quizTilesHTML(q, res);
  else body += `<form id="quizForm" style="width:100%"><input class="typein${res ? (res.ok ? (res.close ? " close" : " ok") : " bad") : ""}" id="quizIn" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="done" aria-label="${T("Antwort")}"${res ? ` value="${esc(res.typed)}" readonly` : ""}></form>`;
  if (res) {
    body += `<b class="fc-res ${res.ok ? (res.close ? "close" : "ok") : "bad"}">${res.ok ? (res.close ? T("Fast richtig") : T("Richtig!")) : T("Leider falsch")}</b>`;
    if (res.cmp && !res.ok) body += `<div class="cmp">${diffHTML(res.cmp)}</div>`;
    if (!q.opts && (!res.ok || res.close)) body += `<div class="fc-ans">${esc(q.ans)}</div>`;
    if (res.close && res.why) body += `<small class="hint">${esc(res.why)}</small>`;
    if (q.why) body += `<p class="th-why">${esc(L10(q.why))}</p>`;
    if (q.say && canSpeak()) body += `<div class="say-row">${sayBtn(q.say, Q.lang, true)}</div>`;
  }
  const foot = res ? `<div class="st-act"><button class="btn primary" data-action="quiz-next">${Q.i + 1 < Q.qs.length ? T("Weiter ›") : T("Ergebnis ›")}</button></div>`
    : q.opts ? "" : `<div class="st-act"><button class="btn" data-action="quiz-skip">${T("Weiß nicht")}</button><button class="btn primary" data-action="quiz-check">${T("Prüfen")}</button></div>`;
  root.innerHTML = `<div class="st-top"><button class="mbtn" data-action="quiz-close" aria-label="${T("Beenden")}">✕</button>
      <div class="st-prog" role="progressbar" aria-valuemin="0" aria-valuemax="${Q.qs.length}" aria-valuenow="${Q.i}"><span style="width:${pct.toFixed(1)}%"></span></div>
      <span class="st-count"><b>${num(Q.i)}</b> / ${num(Q.qs.length)}</span><span></span></div>
    <div class="fcard th-qcard">${body}</div>${foot}<p class="kbd">${res ? T("Enter: weiter") : q.opts ? T("1–4: Antwort wählen") : q.tiles ? "" : T("Enter: prüfen")}</p>`;
  if (!res && !q.opts && !q.tiles) setTimeout(() => { const el = $("quizIn"); if (el) el.focus(); }, 30);
}
/* Word-by-word comparison as HTML (✓ green, close yellow, wrong red, missing words listed) */
function diffHTML(cmp) {
  const toks = cmp.toks.map((t) => `<span class="w ${t.st}">${esc(t.w)}</span>`).join(" ");
  return `${toks}${cmp.missing && cmp.missing.length ? `<small>${T("fehlt: {0}", [esc(cmp.missing.join(" "))])}</small>` : ""}`;
}
function quizAnswer(o) {
  const Q = state.quiz; if (!Q || Q.res) return;
  const q = Q.qs[Q.i], L = langOf(Q.lang);
  let ok = false, close = false, why = "", typed = "", cmp = null;
  if (q.opts) { ok = o.chose === q.right; }
  else if (q.tiles) {
    typed = q.picked.map((i) => q.tiles[i]).join(" ");
    cmp = compareSentence(typed, q.ans, L || {});
    ok = cmp.res !== "wrong"; close = cmp.res === "close";
  } else {
    typed = o.typed || "";
    const long = wordCount(q.ans) >= 4;
    if (long && typed) { cmp = compareSentence(typed, q.ans, L || {}); ok = cmp.res !== "wrong"; close = cmp.res === "close"; if (!ok && (q.alts || []).some((a) => compareSentence(typed, a, L || {}).res !== "wrong")) { ok = true; cmp = null; } }
    else {
      const r = typed ? checkAnswer(typed, [q.ans].concat(q.alts || []).join(" | "), { articles: (L && L.articles) || [], native: !!q.native }) : { res: "wrong" };
      ok = r.res !== "wrong"; close = r.res === "close";
      why = r.why === "accent" ? T("Fast – achte auf den Akzent") : r.why === "article" ? T("Fast – der Artikel fehlt oder stimmt nicht") : r.why === "typo" ? T("Fast – kleiner Tippfehler") : "";
    }
  }
  Q.res = { ok, close, why, typed, chose: o.chose, cmp };
  if (ok) Q.ok++; else Q.wrong.push({ q: q.listen ? esc(q.listen) : q.q, right: q.opts ? q.opts[q.right] : q.ans, given: q.opts ? (o.chose != null ? q.opts[o.chose] : "") : typed });
  const st = statOf(today(), Q.lang, true); st.p++; save(false);
  renderQuiz();
  if (q.say && canSpeak() && state.settings.autoSpeak) speak(q.say, Q.lang, { quiet: true });
}
function quizNext() {
  const Q = state.quiz; if (!Q) return;
  Q.i++; Q.res = null; renderQuiz();
  const q = Q.qs[Q.i]; if (q && q.listen && canSpeak()) speak(q.listen, Q.lang, { quiet: true });
}
function quizKey(ev) {
  const Q = state.quiz;
  if (!Q || $("study").hidden) return;
  const k = ev.key, q = Q.qs[Q.i];
  if (k === "Escape") { closeQuiz(); return; }
  if (!q) { if (k === "Enter") { ev.preventDefault(); closeQuiz(); } return; }
  if (Q.res) { if (k === "Enter") { ev.preventDefault(); quizNext(); } return; }
  if (q.opts && /^[1-9]$/.test(k) && Number(k) <= q.opts.length) { ev.preventDefault(); quizAnswer({ chose: Number(k) - 1 }); }
}
document.addEventListener("keydown", quizKey);
document.addEventListener("submit", (e) => { if (e.target && e.target.id === "quizForm") { e.preventDefault(); quizAnswer({ typed: ($("quizIn") || {}).value }); } if (e.target && e.target.id === "conjForm") { e.preventDefault(); const t = topView(); t.p = { ...(t.p || {}), verb: ($("conjIn") || {}).value || "" }; render(); } });
