/* ================= Course: guided lessons A1 → B2 =================
   Built-in courses live in course/<code>.js (loaded on demand, cached offline) and call courseReg().
   Lesson: { id, t, goal, words, say, gram, th, quiz, drill, forms, talk }
     words: "target | Deutsch | English | pos | example | Beispiel | example (EN)" per line
     say:   "sentence | Deutsch | English" per line
     gram:  theory blocks; th = theory chapter id; quiz = theory exercise ids
     drill: [question, [options], right] or [question, answer] (typed), optional 4th/3rd: TB(why)
     forms: { verbs: [...], tenses: [...] } – conjugation questions from the engine
     talk:  { t, scene, who, slots: { name: "Luca" }, lines: "a|target|Deutsch|English" / "me|target|what to say (DE)|(EN)|alternatives;…" } */
const COURSE = {};
const COURSE_BUILTIN = ["it", "es", "fr", "en"];
const LEVELS = ["A1", "A2", "B1", "B2"];
const LEVEL_INFO = {
  A1: TB("Einstieg – von null an", "Beginner – starting from zero"),
  A2: TB("Grundlagen – Alltag sicher meistern", "Elementary – everyday situations"),
  B1: TB("Mittelstufe – erzählen, begründen, diskutieren", "Intermediate – tell, explain, discuss"),
  B2: TB("Fortgeschritten – frei und genau ausdrücken", "Upper intermediate – fluent and precise")
};
const courseLoading = {};
/* titles, goals and scenes are shown as plain text: <i>…</i> from the course files is dropped there */
const plainTB = (x) => (x && typeof x === "object" ? { de: stripTags(x.de || ""), en: stripTags(x.en || x.de || "") } : x);
function courseReg(code, data) {
  for (const lv of data.levels || []) (lv.lessons || []).forEach((l, i) => {
    l.code = code; l.level = lv.id; l.n = i + 1;
    l.t = plainTB(l.t); l.goal = plainTB(l.goal);
    if (l.talk) { l.talk.t = plainTB(l.talk.t); l.talk.scene = plainTB(l.talk.scene); }
  });
  COURSE[code] = data;
}
window.courseReg = courseReg; // course files run as separate scripts
function loadCourse(code) {
  if (COURSE[code] || !COURSE_BUILTIN.includes(code)) return Promise.resolve(COURSE[code] || null);
  if (courseLoading[code]) return courseLoading[code];
  courseLoading[code] = new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = `course/${code}.js?v=${encodeURIComponent(window.PLM_VERSION || "")}`;
    s.onload = () => resolve(COURSE[code] || null);
    s.onerror = () => { delete courseLoading[code]; resolve(null); };
    document.head.appendChild(s);
  });
  return courseLoading[code];
}
/* Render now, and again once the course file has arrived */
function needCourse(code) {
  if (COURSE[code] || !COURSE_BUILTIN.includes(code)) return true;
  loadCourse(code).then((c) => { if (c && !state.study && !state.quiz && !state.talk) render(); else if (!c) toast(T("Der Kurs konnte nicht geladen werden – bist du online?")); });
  return false;
}
const courseOf = (code) => COURSE[code] || (customLessons(code).length ? { levels: [] } : null);
const hasCourse = (code) => COURSE_BUILTIN.includes(code) || customLessons(code).length > 0;
const customLessons = (code) => ((state.course && state.course.x && state.course.x[code]) || []);
function courseLevels(code) {
  const base = COURSE[code], custom = customLessons(code);
  return LEVELS.map((id) => {
    const lv = base && (base.levels || []).find((l) => l.id === id);
    const own = custom.filter((l) => l.level === id);
    own.forEach((l, i) => { l.code = code; l.n = (lv ? lv.lessons.length : 0) + i + 1; });
    return { id, t: (lv && lv.t) || LEVEL_INFO[id], desc: lv && lv.desc, lessons: (lv ? lv.lessons : []).concat(own) };
  });
}
function lessonById(code, id) {
  for (const lv of courseLevels(code)) { const l = lv.lessons.find((x) => x.id === id); if (l) return l; }
  return null;
}
const meanOf = (x) => (UI === "en" && x.en ? x.en : x.de);
const exMeanOf = (x) => (UI === "en" && x.exEn ? x.exEn : x.exDe);
function lessonWords(l) {
  if (l._w) return l._w;
  const out = [];
  for (const raw of String(l.words || "").split("\n")) {
    const line = raw.trim(); if (!line || line.startsWith("#")) continue;
    const [tg, de, en, pos, ex, exDe, exEn] = line.split("|").map((x) => (x || "").trim());
    if (tg) out.push({ tg, de, en, pos: POS[pos] ? pos : (wordCount(tg) >= 3 ? "ph" : ""), ex, exDe, exEn });
  }
  return (l._w = out);
}
function lessonPhrases(l) {
  if (l._p) return l._p;
  const out = [];
  for (const raw of String(l.say || "").split("\n")) {
    const line = raw.trim(); if (!line || line.startsWith("#")) continue;
    const [tg, de, en] = line.split("|").map((x) => (x || "").trim());
    if (tg) out.push({ tg, de, en, pos: "s" });
  }
  return (l._p = out);
}
function lessonTalk(l) {
  if (!l.talk) return null;
  if (l._t) return l._t;
  const lines = [];
  for (const raw of String(l.talk.lines || "").split("\n")) {
    const line = raw.trim(); if (!line) continue;
    const [who, tg, de, en, alts] = line.split("|").map((x) => (x || "").trim());
    if (tg && (who === "a" || who === "me")) lines.push({ who, tg, de, en, alts: alts ? alts.split(";").map((x) => x.trim()).filter(Boolean) : [] });
  }
  return (l._t = { ...l.talk, lines });
}

/* ---------- Progress (synced): p[lessonId] = { w: words taken, q: best exercise %, t: conversation done, u } · lv["code|A1"] = { s, at } ---------- */
const lp = (id) => (state.course.p[id] || {});
function setLp(id, patch) { state.course.p[id] = { ...lp(id), ...patch, u: nowTs() }; save(); }
const lessonSteps = (l) => { const p = lp(l.id); return { w: !!p.w, q: (p.q || 0) >= 70, t: !!p.t || !l.talk }; };
const lessonDone = (l) => { const s = lessonSteps(l); return s.w && s.q && s.t; };
const lessonStarted = (l) => { const p = lp(l.id); return !!(p.w || p.q || p.t); };
function levelStats(code, lv) {
  const n = lv.lessons.length, done = lv.lessons.filter(lessonDone).length;
  return { n, done, pct: n ? Math.round(done / n * 100) : 0 };
}
function nextLesson(code) {
  for (const lv of courseLevels(code)) for (const l of lv.lessons) if (!lessonDone(l)) return l;
  return null;
}
function courseSummary(code) {
  if (!COURSE[code] && !customLessons(code).length) return COURSE_BUILTIN.includes(code) ? T("A1 bis B2 – Wörter, Grammatik, Übungen und Gespräche") : T("Lektionen mit dem KI-Assistenten erstellen");
  const lvs = courseLevels(code), all = lvs.flatMap((l) => l.lessons), done = all.filter(lessonDone).length, nx = nextLesson(code);
  return nx ? T("{0} von {1} Lektionen · weiter: {2} {3}", [num(done), num(all.length), nx.level, L10(nx.t)]) : T("Alle {0} Lektionen geschafft", [num(all.length)]);
}
function mergeCourse(c) {
  if (!c || typeof c !== "object") return;
  const C = state.course;
  for (const [id, v] of Object.entries(c.p || {})) {
    if (!v || typeof v !== "object") continue;
    const a = C.p[id] || {};
    C.p[id] = { w: Math.max(a.w || 0, v.w || 0) || undefined, q: Math.max(a.q || 0, v.q || 0) || undefined, t: Math.max(a.t || 0, v.t || 0) || undefined, u: Math.max(a.u || 0, v.u || 0) };
  }
  for (const [k, v] of Object.entries(c.lv || {})) if (v && Number.isFinite(v.s) && (!C.lv[k] || (v.at || 0) > (C.lv[k].at || 0))) C.lv[k] = v;
  for (const [id, ts] of Object.entries(c.d || {})) if (Number.isFinite(ts)) C.d[id] = Math.max(C.d[id] || 0, ts);
  for (const [code, list] of Object.entries(c.x || {})) {
    if (!Array.isArray(list)) continue;
    const have = new Set((C.x[code] || []).map((l) => l.id));
    C.x[code] = (C.x[code] || []).concat(list.filter((l) => l && l.id && !have.has(l.id)));
  }
  for (const code of Object.keys(C.x)) C.x[code] = C.x[code].filter((l) => !C.d[l.id]);
}
const normCourse = (c) => ({ p: (c && typeof c.p === "object" && c.p) || {}, lv: (c && typeof c.lv === "object" && c.lv) || {}, x: (c && typeof c.x === "object" && c.x) || {}, d: (c && typeof c.d === "object" && c.d) || {} });
const cleanLesson = (l) => { const o = {}; for (const [k, v] of Object.entries(l)) if (!k.startsWith("_") && !["code", "n"].includes(k)) o[k] = v; return o; };

/* ---------- Words of a lesson → cards (existing cards are reused, nothing is doubled) ---------- */
const courseDeck = (level) => `Sprachkurs ${level}`;
function lessonCardIds(code, l, create) {
  const items = lessonWords(l).concat(lessonPhrases(l)).filter((x) => x.de);
  const have = new Map(state.cards.filter((c) => c.lang === code).map((c) => [sameKey(c), c]));
  const ids = [], add = [];
  const useEn = UI === "en" && code !== "en";
  let t = Math.max(nowTs(), ...state.cards.map((c) => c.created + 1));
  for (const x of items) {
    const c = normCard({ lang: code, type: "word", tg: x.tg, de: useEn && x.en ? x.en : x.de, ml: useEn && x.en ? "en" : undefined, pos: x.pos, ex: x.ex || "", exDe: (useEn ? x.exEn : x.exDe) || "", deck: courseDeck(l.level), topic: `L${l.n} · ${L10(l.t).split(/\s[–-]\s/)[0]}`.slice(0, 40), pack: l.id, created: t++ });
    if (!c) continue;
    const old = have.get(sameKey(c));
    if (old) { ids.push(old.id); continue; }
    if (create) { add.push(c); have.set(sameKey(c), c); ids.push(c.id); }
  }
  if (add.length) { state.cards = state.cards.concat(add); reindex(); save(); }
  return ids;
}
function learnLesson(code, id) {
  const l = lessonById(code, id); if (!l) return;
  const ids = lessonCardIds(code, l, true);
  setLp(l.id, { w: lp(l.id).w || nowTs() });
  if (!startLearn({ lang: code, ids, extraNew: ids.length })) { render(); toast(T("Alle Wörter dieser Lektion sind schon im Wiederholungsplan – weiter mit der Übung")); }
}

/* ---------- Exercises generated from a lesson ---------- */
function choiceOf(right, pool, n) {
  const seen = new Set([normAns(right)]), opts = [right];
  for (const x of shuffle(pool.slice())) { const k = normAns(x); if (!x || seen.has(k)) continue; seen.add(k); opts.push(x); if (opts.length === (n || 4)) break; }
  return opts.length >= 3 ? opts : null;
}
const makeChoice = (q, right, pool, extra) => { const o = choiceOf(right, pool); if (!o) return null; const sh = shuffle(o.slice()); return { q, opts: sh, right: sh.indexOf(right), ...(extra || {}) }; };
function levelPool(code, l) {
  const lv = courseLevels(code).find((x) => x.id === l.level), out = [];
  for (const x of lv ? lv.lessons : [l]) out.push(...lessonWords(x));
  return out;
}
function drillQs(code, l, n) {
  const out = [];
  for (const d of l.drill || []) {
    const [q, b, c, d4] = d;
    const qh = esc(q).replace(/___/g, `<span class="gap">…</span>`);
    if (Array.isArray(b)) { const order = shuffle(b.map((_, i) => i)); out.push({ q: qh, opts: order.map((i) => b[i]), right: order.indexOf(c), why: d4 || "", say: /___/.test(q) ? q.replace("___", b[c]).replace(/\s*\([^)]*\)\s*$/, "") : "", kind: T("Grammatik") }); }
    else out.push({ q: qh, ans: b, why: c || "", say: /___/.test(q) ? q.replace(/___/, b.split(/\s*[;|/]\s*/)[0]).replace(/\s*\([^)]*\)\s*$/, "") : "", kind: T("Grammatik") });
  }
  return pick(out, n == null ? out.length : n);
}
function lessonQuizQs(code, l, size) {
  const W = lessonWords(l).filter((w) => w.de), P = lessonPhrases(l), pool = levelPool(code, l), L = langOf(code) || {};
  const tgPool = pool.map((w) => w.tg), mPool = pool.map(meanOf);
  const qs = [];
  const ws = shuffle(W.slice());
  /* meaning → word */
  for (const w of ws.slice(0, 3)) { const q = makeChoice(esc(meanOf(w)), w.tg, tgPool, { kind: T("Was heißt …?"), say: w.tg }); if (q) qs.push(q); }
  /* listen → meaning */
  if (canSpeak()) for (const w of ws.slice(3, 5)) { const q = makeChoice("", meanOf(w), mPool, { listen: w.tg, kind: T("Hören") }); if (q) qs.push(q); }
  /* type the word */
  for (const w of ws.slice(5, 8)) qs.push({ q: esc(meanOf(w)), ans: w.tg, kind: T("Schreiben"), sub: w.pos === "n" && hasGenderedNouns(L) ? T("mit Artikel") : "", say: w.tg });
  /* build a sentence */
  const ps = shuffle(P.filter((x) => wordCount(x.tg) >= 3 && wordCount(x.tg) <= 10).slice());
  for (const p of ps.slice(0, 2)) qs.push({ q: esc(meanOf(p)), tiles: shuffle(tokSplit(p.tg)), ans: p.tg, kind: T("Satz bauen"), say: p.tg });
  /* gap in a sentence */
  for (const p of ps.slice(2, 3)) {
    const toks = tokSplit(p.tg), cand = toks.filter((w) => w.length >= 3 && W.some((x) => normAns(x.tg).split(" ").includes(normAns(w))));
    if (!cand.length) continue;
    const g = rnd(cand), q = makeChoice(esc(p.tg.replace(new RegExp(`(^|\\s)${g.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[\\s.,!?]|$)`), "$1___")).replace("___", `<span class="gap">…</span>`), g, tgPool.flatMap((x) => tokSplit(x)).filter((x) => x.length >= 3), { kind: T("Lücke"), sub: meanOf(p), say: p.tg });
    if (q) qs.push(q);
  }
  /* grammar */
  qs.push(...drillQs(code, l, 4));
  if (l.forms && canConj(code)) qs.push(...genForms(l.forms.verbs, l.forms.tenses, 2, null, code).map((q) => ({ ...q, kind: T("Konjugation") })));
  for (const id of l.quiz || []) { const d = QUIZ_DEF[id]; if (d) qs.push(...pick(d.gen().filter(Boolean), 2).map((q) => ({ ...q, kind: L10(d.title) }))); }
  return shuffle(qs).slice(0, size || 14);
}
function startLessonQuiz(code, id) {
  const l = lessonById(code, id); if (!l) return;
  runQuiz({ lang: code, title: l.t, gen: () => lessonQuizQs(code, l), onDone: (pct) => { if (pct > (lp(l.id).q || 0)) setLp(l.id, { q: pct }); else setLp(l.id, {}); } });
}
function startLessonDrill(code, id) {
  const l = lessonById(code, id); if (!l) return;
  runQuiz({ lang: code, title: TB("Grammatik", "Grammar"), gen: () => { const d = drillQs(code, l); const f = l.forms && canConj(code) ? genForms(l.forms.verbs, l.forms.tenses, 4, null, code) : []; return shuffle(d.concat(f)); } });
}
function startLessonBuild(code, id) {
  const l = lessonById(code, id); if (!l) return;
  runQuiz({ lang: code, title: TB("Sätze bauen", "Build sentences"), gen: () => shuffle(lessonPhrases(l).filter((p) => wordCount(p.tg) >= 2)).slice(0, 8).map((p) => ({ q: esc(meanOf(p)), tiles: shuffle(tokSplit(p.tg)), ans: p.tg, say: p.tg, kind: T("Satz bauen") })) });
}
function levelTestQs(code, levelId) {
  const lv = courseLevels(code).find((x) => x.id === levelId); if (!lv) return [];
  const qs = [];
  for (const l of shuffle(lv.lessons.slice())) {
    const one = lessonQuizQs(code, l, 6);
    qs.push(...pick(one, Math.max(1, Math.ceil(24 / Math.max(1, lv.lessons.length)))));
  }
  return shuffle(qs).slice(0, 24);
}
function startLevelTest(code, levelId) {
  runQuiz({ lang: code, title: TB(`Abschlusstest ${levelId}`, `Final test ${levelId}`), gen: () => levelTestQs(code, levelId), onDone: (pct) => { state.course.lv[`${code}|${levelId}`] = { s: pct, at: nowTs() }; save(); } });
}

/* ---------- Views ---------- */
const lessonBadge = (l, L) => (lessonDone(l) ? `<span class="badge done" aria-hidden="true">✓</span>` : badgeTxt(String(l.n), L.color));
function lessonSub(l) {
  const s = lessonSteps(l), p = lp(l.id);
  if (!lessonStarted(l)) return L10(l.goal);
  return [`${s.w ? "✓" : "○"} ${T("Wörter")}`, `${s.q ? "✓" : "○"} ${T("Übung")}${p.q ? ` ${p.q} %` : ""}`, l.talk ? `${s.t ? "✓" : "○"} ${T("Gespräch")}` : ""].filter(Boolean).join(" · ");
}
function viewCourse(v) {
  const code = typeof v.p === "string" ? v.p : (v.p || {}).lang, L = langOf(code);
  if (!L) return `${backBar()}<h1 class="vtitle">${T("Nicht gefunden")}</h1>`;
  const head = `${backBar()}<h1 class="vtitle" style="color:${L.color}">${T("Kurs")}</h1><p class="meta">${esc(lname(L))} · ${T("Schritt für Schritt von A1 bis B2")}</p>`;
  if (!needCourse(code)) return `${head}<p class="hint">${T("Kurs wird geladen …")}</p>`;
  const lvs = courseLevels(code), any = lvs.some((x) => x.lessons.length);
  const sel = state.courseLevel && state.courseLevel[code] || (nextLesson(code) || {}).level || "A1";
  const lv = lvs.find((x) => x.id === sel) || lvs[0], st = levelStats(code, lv), nx = lv.lessons.find((l) => !lessonDone(l));
  const pills = `<div class="pills lvpills" role="group" aria-label="${T("Niveau")}">${lvs.map((x) => { const s = levelStats(code, x); return `<button data-action="course-level" data-arg="${x.id}" data-p="${esc(code)}" aria-pressed="${x.id === lv.id}">${x.id}${s.n ? `<small>${s.done}/${s.n}</small>` : ""}</button>`; }).join("")}</div>`;
  const test = state.course.lv[`${code}|${lv.id}`];
  const aiRow = aiOn() ? navRow("course-ai", lv.id, T("+ Neue Lektion mit KI"), T("Der KI-Assistent schreibt eine weitere {0}-Lektion zu einem Thema deiner Wahl", [lv.id]), "", badgeTxt("✦", L.color), ` data-p="${esc(code)}"`) : "";
  if (!any) return `${head}
    <section class="empty"><strong>${T("Für {0} gibt es noch keinen fertigen Kurs", [esc(lname(L))])}</strong><span>${aiOn() ? T("Lass dir vom KI-Assistenten Lektionen erstellen – mit Wörtern, Grammatik, Übungen und einem Gespräch zum Mitspielen.") : T("Mit dem KI-Assistenten (Einstellungen › KI-Assistent) kannst du dir Lektionen für jede Sprache erstellen lassen.")}</span></section>
    ${pills}${aiRow ? `<section class="sec">${aiRow}</section>` : ""}`;
  return `${head}${pills}
    <section class="hero lvhero"><span class="label">${esc(lv.id)} · ${esc(L10(lv.t))}</span>
      <div class="heroval">${bigNum(st.done)}<span class="dec"> / ${num(st.n)} ${noun(st.n, "Lektion", "Lektionen")}</span></div>
      <div class="bar" aria-hidden="true"><span style="width:${st.pct}%;background:${L.color}"></span></div></section>
    ${nx ? `<button class="addbig" data-action="lesson" data-arg="${esc(nx.id)}" data-p="${esc(code)}"><span aria-hidden="true">▶</span>${lessonStarted(nx) ? T("Weiter") : T("Start")}: ${esc(L10(nx.t))}<small>${T("Lektion {0}", [nx.n])}</small></button>` : `<p class="hint">${T("Alle Lektionen in {0} geschafft – mach den Abschlusstest!", [lv.id])}</p>`}
    <section class="sec"><div class="sechead"><h2 class="sectitle">${T("Lektionen")}</h2></div>
      ${lv.lessons.map((l) => navRow("lesson", l.id, L10(l.t), lessonSub(l), l.ai ? `<small>${T("KI")}</small>` : "", lessonBadge(l, L), ` data-p="${esc(code)}"`)).join("") || `<p class="hint">${T("Für dieses Niveau gibt es noch keine Lektionen.")}</p>`}
      ${aiRow}
    </section>
    ${lv.lessons.length ? `<section class="sec">${navRow("level-test", lv.id, T("Abschlusstest {0}", [lv.id]), test ? T("Zuletzt {0} % · {1}", [test.s, esc(dayMonFmt.format(new Date(test.at)))]) : T("24 gemischte Aufgaben aus allen Lektionen"), test ? `<span class="${test.s >= 75 ? "pos" : test.s < 60 ? "neg" : ""}">${test.s} %</span>` : "", badgeTxt("★", L.color), ` data-p="${esc(code)}"`)}</section>` : ""}`;
}
function wordRow(code, x) {
  return `<div class="th-word">${sayBtn(x.tg, code)}<div class="th-word-main"><span class="th-tg">${esc(x.tg)}</span><span class="th-de">${esc(meanOf(x))}</span>${x.ex ? `<small>${esc(x.ex)}${exMeanOf(x) ? ` – ${esc(exMeanOf(x))}` : ""}</small>` : ""}</div></div>`;
}
function viewLesson(v) {
  const { lang: code, id } = v.p || {}, L = langOf(code);
  if (!L) return `${backBar()}<h1 class="vtitle">${T("Nicht gefunden")}</h1>`;
  if (!needCourse(code)) return `${backBar()}<p class="hint">${T("Kurs wird geladen …")}</p>`;
  const l = lessonById(code, id);
  if (!l) return `${backBar()}<h1 class="vtitle">${T("Nicht gefunden")}</h1>`;
  const s = lessonSteps(l), p = lp(l.id), W = lessonWords(l), P = lessonPhrases(l), tk = lessonTalk(l);
  const lv = courseLevels(code).find((x) => x.id === l.level), i = lv.lessons.indexOf(l), prev = lv.lessons[i - 1], next = lv.lessons[i + 1];
  const showAll = state.showAll, wl = showAll ? W : W.slice(0, 8);
  const step = (n, done, title, sub) => `<div class="stephead"><span class="stepnum${done ? " done" : ""}" aria-hidden="true">${done ? "✓" : n}</span><div><h2>${title}</h2>${sub ? `<p class="hint">${sub}</p>` : ""}</div></div>`;
  const nav = (c, lbl) => (c ? `<button class="btn grow th-navbtn" data-action="lesson" data-arg="${esc(c.id)}" data-p="${esc(code)}"><small>${lbl}</small>${esc(L10(c.t))}</button>` : "");
  return `${backBar()}
    <span class="label" style="color:${L.color}">${esc(l.level)} · ${T("Lektion {0}", [l.n])}${l.ai ? " · " + T("KI") : ""}</span>
    <h1 class="vtitle">${esc(L10(l.t))}</h1>
    <p class="meta">${esc(L10(l.goal))}</p>
    <section class="card lstep">${step(1, s.w, T("Wörter & Sätze"), T("{0} Wörter · {1} Sätze – anhören, lesen, dann lernen", [num(W.length), num(P.length)]))}
      <div class="lwords">${wl.map((x) => wordRow(code, x)).join("")}</div>
      ${W.length > wl.length ? `<button class="more" data-action="show-all">${T("Alle {0} Wörter zeigen", [num(W.length)])}</button>` : ""}
      ${P.length ? `<h3 class="th-h">${T("Nützliche Sätze")}</h3><div class="lwords">${P.map((x) => wordRow(code, x)).join("")}</div>` : ""}
      <div class="btnrow"><button class="btn primary grow" data-action="lesson-learn" data-arg="${esc(l.id)}" data-p="${esc(code)}">${s.w ? T("▶ Wiederholen") : T("▶ Lernen")}</button>${P.length >= 2 ? `<button class="btn" data-action="lesson-build" data-arg="${esc(l.id)}" data-p="${esc(code)}">${T("Sätze bauen")}</button>` : ""}</div>
      ${!s.w ? `<p class="hint">${T("„Lernen“ nimmt die Wörter in deinen Wiederholungsplan auf (Projekt „{0}“).", [esc(dn(courseDeck(l.level)))])}</p>` : ""}
    </section>
    ${(l.gram && l.gram.length) || (l.drill && l.drill.length) ? `<section class="card lstep">${step(2, (p.q || 0) >= 70, T("Grammatik"), "")}
      <article class="th-body">${(l.gram || []).map((b) => blockHTML(b, code)).join("")}</article>
      <div class="btnrow">${(l.drill && l.drill.length) || l.forms ? `<button class="btn grow" data-action="lesson-drill" data-arg="${esc(l.id)}" data-p="${esc(code)}">${T("✎ Grammatik üben")}</button>` : ""}${l.th && chapterOf(code, l.th) ? `<button class="btn" data-action="nav" data-arg="chapter" data-p="${esc(JSON.stringify({ lang: code, id: l.th }))}">${T("Mehr in der Theorie ›")}</button>` : ""}</div>
    </section>` : ""}
    <section class="card lstep">${step(3, s.q, T("Übung"), p.q ? T("Bestes Ergebnis: {0} % – ab 70 % gilt die Übung als geschafft", [p.q]) : T("Gemischte Aufgaben: Wörter, Hören, Schreiben, Sätze, Grammatik"))}
      <div class="btnrow"><button class="btn primary grow" data-action="lesson-quiz" data-arg="${esc(l.id)}" data-p="${esc(code)}">${p.q ? T("Nochmal üben") : T("Übung starten")}</button></div>
    </section>
    ${tk ? `<section class="card lstep">${step(4, !!p.t, T("Gespräch: {0}", [esc(L10(tk.t))]), esc(L10(tk.scene)))}
      <div class="btnrow wrap"><button class="btn grow" data-action="talk" data-arg="listen" data-p="${esc(JSON.stringify({ lang: code, id: l.id }))}">${T("🔊 Anhören")}</button><button class="btn primary grow" data-action="talk" data-arg="play" data-p="${esc(JSON.stringify({ lang: code, id: l.id }))}">${T("💬 Mitspielen")}</button></div>
      <div class="btnrow wrap"><button class="btn grow" data-action="talk" data-arg="swap" data-p="${esc(JSON.stringify({ lang: code, id: l.id }))}">${T("⇄ Rollen tauschen")}</button>${aiOn() ? `<button class="btn grow" data-action="talk" data-arg="ai" data-p="${esc(JSON.stringify({ lang: code, id: l.id }))}">${T("✦ Frei sprechen (KI)")}</button>` : ""}</div>
    </section>` : ""}
    ${lessonDone(l) ? `<p class="hint lesson-ok">${T("✓ Lektion geschafft")}</p>` : ""}
    <div class="btnrow th-nav">${nav(prev, T("‹ Zurück"))}${nav(next, T("Weiter ›"))}</div>
    ${l.ai ? `<section class="sec"><button class="row nobadge nochev" data-action="lesson-del" data-arg="${esc(l.id)}" data-p="${esc(code)}"><span class="main"><span class="t1 neg">${state.armed === "lesson:" + l.id ? T("Wirklich löschen?") : T("KI-Lektion löschen")}</span><span class="t2">${T("Karten, die du schon gelernt hast, bleiben erhalten")}</span></span><span></span></button></section>` : ""}`;
}
/* grammar of a lesson as a theory chapter */
function viewLessonGram(v) {
  const { lang: code, id } = v.p || {}, L = langOf(code);
  if (!L || !needCourse(code)) return `${backBar()}<p class="hint">${T("Kurs wird geladen …")}</p>`;
  const l = lessonById(code, id);
  if (!l) return `${backBar()}<h1 class="vtitle">${T("Nicht gefunden")}</h1>`;
  return `${backBar()}
    <span class="label" style="color:${L.color}">${esc(l.level)} · ${T("Lektion {0}", [l.n])}</span>
    <h1 class="vtitle">${esc(L10(l.gramT || l.t))}</h1>
    <article class="th-body">${(l.gram || []).map((b) => blockHTML(b, code)).join("")}</article>
    <div class="btnrow">${(l.drill && l.drill.length) || l.forms ? `<button class="btn primary grow" data-action="lesson-drill" data-arg="${esc(l.id)}" data-p="${esc(code)}">${T("✎ Grammatik üben")}</button>` : ""}<button class="btn grow" data-action="lesson" data-arg="${esc(l.id)}" data-p="${esc(code)}">${T("Zur Lektion ›")}</button></div>`;
}
Object.assign(VIEWS, { course: viewCourse, lesson: viewLesson, lgram: viewLessonGram });
Object.assign(VIEW_LABEL, { course: T("Kurs"), lesson: T("Lektion"), lgram: T("Grammatik") });

/* ---------- New lessons from the AI assistant (any language, any level) ---------- */
const AI_LESSON_SCHEMA = { type: "object", additionalProperties: false, required: ["title_de", "title_en", "goal_de", "goal_en", "words", "phrases", "grammar", "drill", "dialogue"], properties: {
  title_de: { type: "string" }, title_en: { type: "string" }, goal_de: { type: "string" }, goal_en: { type: "string" },
  words: { type: "array", items: { type: "object", additionalProperties: false, required: ["target", "german", "english", "kind", "example", "example_german", "example_english"], properties: {
    target: { type: "string" }, german: { type: "string" }, english: { type: "string" }, kind: { type: "string", enum: ["noun", "verb", "adjective", "adverb", "phrase", "other"] },
    example: { type: "string" }, example_german: { type: "string" }, example_english: { type: "string" } } } },
  phrases: { type: "array", items: { type: "object", additionalProperties: false, required: ["target", "german", "english"], properties: { target: { type: "string" }, german: { type: "string" }, english: { type: "string" } } } },
  grammar: { type: "object", additionalProperties: false, required: ["title_de", "title_en", "explanation_de", "explanation_en", "table_head", "table_rows", "tip_de", "tip_en", "examples"], properties: {
    title_de: { type: "string" }, title_en: { type: "string" }, explanation_de: { type: "string" }, explanation_en: { type: "string" },
    table_head: { type: "array", items: { type: "string" } }, table_rows: { type: "array", items: { type: "array", items: { type: "string" } } },
    tip_de: { type: "string" }, tip_en: { type: "string" },
    examples: { type: "array", items: { type: "object", additionalProperties: false, required: ["target", "german", "english"], properties: { target: { type: "string" }, german: { type: "string" }, english: { type: "string" } } } } } },
  drill: { type: "array", items: { type: "object", additionalProperties: false, required: ["question", "options", "answer", "why_de", "why_en"], properties: {
    question: { type: "string" }, options: { type: "array", items: { type: "string" } }, answer: { type: "integer" }, why_de: { type: "string" }, why_en: { type: "string" } } } },
  dialogue: { type: "object", additionalProperties: false, required: ["title_de", "title_en", "scene_de", "scene_en", "partner", "lines"], properties: {
    title_de: { type: "string" }, title_en: { type: "string" }, scene_de: { type: "string" }, scene_en: { type: "string" }, partner: { type: "string" },
    lines: { type: "array", items: { type: "object", additionalProperties: false, required: ["speaker", "target", "german", "english", "alternatives"], properties: {
      speaker: { type: "string", enum: ["partner", "learner"] }, target: { type: "string" }, german: { type: "string" }, english: { type: "string" }, alternatives: { type: "array", items: { type: "string" } } } } } } } } };
const AI_POS = { noun: "n", verb: "v", adjective: "adj", adverb: "adv", phrase: "ph", other: "" };
const clean1 = (x) => String(x || "").replace(/[|\n]+/g, " ").trim();
function aiToLesson(code, level, j) {
  const id = `${code}-${level.toLowerCase()}-ai-${Date.now().toString(36)}`;
  const g = j.grammar || {};
  const gram = [];
  if (g.title_de) gram.push(["h", TB(g.title_de, g.title_en || g.title_de)]);
  if (g.explanation_de) gram.push(["p", TB(esc(g.explanation_de), esc(g.explanation_en || g.explanation_de))]);
  if ((g.table_head || []).length && (g.table_rows || []).length) gram.push(["table", { head: g.table_head.map(esc), rows: g.table_rows.map((r) => r.map(esc)) }]);
  if ((g.examples || []).length) gram.push(["ex", g.examples.map((x) => [esc(x.target), esc(x.german), esc(x.english)])]);
  if (g.tip_de) gram.push(["tip", TB(esc(g.tip_de), esc(g.tip_en || g.tip_de))]);
  const d = j.dialogue || {};
  return {
    id, ai: 1, level, t: TB(clean1(j.title_de), clean1(j.title_en || j.title_de)), goal: TB(clean1(j.goal_de), clean1(j.goal_en || j.goal_de)),
    words: (j.words || []).map((w) => [w.target, w.german, w.english, AI_POS[w.kind] || "", w.example, w.example_german, w.example_english].map(clean1).join("|")).join("\n"),
    say: (j.phrases || []).map((p) => [p.target, p.german, p.english].map(clean1).join("|")).join("\n"),
    gram,
    drill: (j.drill || []).filter((x) => /___/.test(x.question) && Array.isArray(x.options) && x.options.length >= 2 && x.answer >= 0 && x.answer < x.options.length).map((x) => [x.question, x.options, x.answer, TB(x.why_de || "", x.why_en || x.why_de || "")]),
    talk: (d.lines || []).length >= 4 ? { t: TB(clean1(d.title_de), clean1(d.title_en || d.title_de)), scene: TB(clean1(d.scene_de), clean1(d.scene_en || d.scene_de)), who: clean1(d.partner) || "Sam", slots: {},
      lines: d.lines.map((x) => [x.speaker === "learner" ? "me" : "a", x.target, x.german, x.english, (x.alternatives || []).join("; ")].map(clean1).join("|")).join("\n") } : null
  };
}
function openAiLesson(code, level) {
  const L = langOf(code); if (!L) return;
  if (!aiOn()) { toast(T("Dafür brauchst du den KI-Assistenten (Einstellungen › KI-Assistent)")); return; }
  const done = courseLevels(code).find((x) => x.id === level).lessons.map((l) => L10(l.t));
  openForm({ title: T("Neue {0}-Lektion", [level]), hint: T("Der KI-Assistent schreibt eine Lektion für {0} auf Niveau {1}: Wörter mit Beispielsätzen, Grammatik, Übungen und ein Gespräch zum Mitspielen. Kostet meist 1–3 Cent.", [lname(L), level]), saveLabel: T("Erstellen"),
    fields: [{ k: "topic", label: T("Thema (optional)"), type: "text", ph: T("z. B. Arzttermin, Bewerbungsgespräch, Fußball") }],
    values: { topic: "" },
    onSave: (v) => setTimeout(() => aiLessonGen(code, level, v.topic, done), 260) });
}
async function aiLessonGen(code, level, topic, done) {
  const L = langOf(code), lang = LANG_EN[code] || L.name;
  const job = { code, level, n: 0 }; state.aiJob = job;
  const paint = () => { if (state.aiJob !== job) return; $("studyIn").innerHTML = `<div class="st-top"><button class="mbtn" data-action="ai-job-cancel" aria-label="${T("Abbrechen")}">✕</button><div class="st-prog"><span class="indet"></span></div><span></span><span></span></div>
    <div class="st-done"><span class="label">${esc(lname(L))} · ${esc(level)}</span><h1 class="vtitle">${T("KI schreibt die Lektion …")}</h1><p class="hint">${job.n ? T("{0} Zeichen erhalten", [num(job.n)]) : T("Das dauert etwa eine halbe Minute.")}</p></div>`; };
  $("study").hidden = false; document.body.style.overflow = "hidden"; paint();
  const finish = () => { if (state.aiJob === job) { state.aiJob = null; $("study").hidden = true; document.body.style.overflow = ""; } };
  const system = `You write one lesson of a language course for a German-speaking adult who learns ${lang}. Level: CEFR ${level}. Everything in ${lang} must be correct, natural and typical for ${level}; German and English translations must be natural too.
- 14–20 useful words or short expressions for the topic ("target" with article for nouns where the language has articles), each with a short example sentence in ${lang} and its German and English translation.
- 6–8 useful whole sentences for the topic.
- One grammar point that fits ${level} and the topic: a short explanation in German and English (2–4 sentences, HTML <b> allowed), an optional small table (head + rows, ${lang} forms), 3–5 examples and one tip.
- 6–8 grammar exercises: "question" is a ${lang} sentence with exactly one gap "___", 3–4 options, "answer" = index of the right option, plus a short explanation in German and English.
- A dialogue of 8–12 lines between a partner (give a first name) and the learner, alternating, starting with the partner. Learner lines are what the learner should say; "german"/"english" give their meaning; "alternatives" are other correct ways to say the learner's line (0–3).
Avoid these topics, already covered: ${done.join("; ") || "none"}.`;
  try {
    const r = await aiCall({ system, content: topic ? `Topic of the lesson: ${topic}` : `Choose a useful everyday topic for ${level} that is not in the list above.`, schema: AI_LESSON_SCHEMA, maxTokens: 12000, effort: "low", onText: (n) => { job.n = n; paint(); } });
    if (state.aiJob !== job) return;
    finish();
    const l = aiToLesson(code, level, r.json || {});
    if (!lessonWords(l).length) throw new Error(T("Die KI-Antwort war unvollständig – bitte nochmal versuchen."));
    delete l._w;
    state.course.x[code] = customLessons(code).concat([l]); save();
    toast(T("Neue Lektion: {0}", [L10(l.t)]));
    go("lesson", { lang: code, id: l.id });
  } catch (e) { if (state.aiJob === job) { finish(); toast(e.message); } }
}
