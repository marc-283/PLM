/* ================= Tab bar: Heute · Kurs · Karten · Wissen · Mehr =================
   Every tab keeps its own page stack: switching tabs and coming back puts you where you were; tapping the active
   tab again goes back to its start page. While learning (full-screen) or selecting cards the bar is hidden. */
const TABS = [
  ["today", "hub", TB("Heute", "Today"), '<path d="M4 11.2 12 4l8 7.2V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z"/>'],
  ["course", "kurs", TB("Kurs", "Course"), '<path d="M2.5 9.2 12 4.6l9.5 4.6-9.5 4.6z"/><path d="M6.5 11.4v4.8c0 1.5 2.5 3.1 5.5 3.1s5.5-1.6 5.5-3.1v-4.8M21.5 9.2v5.3"/>'],
  ["cards", "library", TB("Karten", "Cards"), '<rect x="3.5" y="7.5" width="12.5" height="13" rx="2.2"/><path d="M8 7.5V5.7a2.2 2.2 0 0 1 2.2-2.2h8.1a2.2 2.2 0 0 1 2.2 2.2v8.6a2.2 2.2 0 0 1-2.2 2.2H16"/>'],
  ["know", "wissen", TB("Wissen", "Reference"), '<path d="M12 6.6C10.2 5.1 7.6 4.6 3.5 4.6v13.2c4.1 0 6.7.5 8.5 2 1.8-1.5 4.4-2 8.5-2V4.6c-4.1 0-6.7.5-8.5 2zM12 6.6v13.2"/>'],
  ["more", "settings", TB("Mehr", "More"), '<circle cx="5.5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18.5" cy="12" r="1.5"/>']
];
const TAB_ROOT = Object.fromEntries(TABS.map((t) => [t[0], t[1]]));
const isTabRoot = () => state.stack.length === 1;
state.tab = "today";
state.stacks = { today: state.stack };
const rootEntry = (t) => ({ v: TAB_ROOT[t], p: t === "course" || t === "know" ? {} : undefined });
function resetTransient() { state.sel = null; state.armed = null; state.showAll = false; }
function selectTab(t, opts) {
  opts = opts || {};
  if (!TAB_ROOT[t]) return;
  state.stacks[state.tab] = state.stack; // the array may have been replaced elsewhere
  const cur = topView(); if (cur) cur.scroll = window.scrollY;
  if (t === state.tab && !opts.reset && !opts.p) {
    if (state.stack.length > 1) { state.stack.length = 1; resetTransient(); render(); }
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (opts.reset || !state.stacks[t]) state.stacks[t] = [rootEntry(t)];
  state.tab = t; state.stack = state.stacks[t];
  if (opts.p) { state.stack.length = 1; state.stack[0].p = { ...(state.stack[0].p || {}), ...opts.p }; }
  resetTransient(); state.enter = false;
  render(); window.scrollTo(0, opts.p || opts.reset ? 0 : topView().scroll || 0);
}
/* open a page in a tab, on top of that tab's start page */
function openIn(t, v, p, rootP) {
  selectTab(t, { reset: !rootP, p: rootP });
  if (v) go(v, p);
}
/* everything back to the start (after deleting data, a language …) */
function goHome() { state.stacks = { today: [{ v: "hub" }] }; state.tab = "today"; state.stack = state.stacks.today; resetTransient(); }
function tabbarHTML() {
  return TABS.map(([id, , label, icon]) => `<button type="button" data-action="tab" data-arg="${id}"><svg viewBox="0 0 24 24" aria-hidden="true">${icon}</svg><span>${esc(L10(label))}</span></button>`).join("");
}
function paintTabbar() {
  const bar = $("tabbar");
  if (!bar) return;
  if (bar.dataset.ui !== UI) { bar.innerHTML = tabbarHTML(); bar.dataset.ui = UI; bar.setAttribute("aria-label", T("Bereiche")); }
  const hide = !!state.sel;
  bar.hidden = hide; document.body.classList.toggle("notabs", hide);
  for (const b of bar.querySelectorAll("[data-arg]")) { const on = b.dataset.arg === state.tab; b.classList.toggle("on", on); b.setAttribute("aria-current", on ? "page" : "false"); }
}

/* ---------- Kurs: the course of one language, switch languages at the top ---------- */
function kursLang(v) {
  const ls = langs(), want = v && v.p && v.p.lang;
  if (want && langOf(want)) return want;
  const busy = ls.find((L) => hasCourse(L.code) && COURSE[L.code] && nextLesson(L.code) && lessonStarted(nextLesson(L.code)));
  const cur = langOf(curLangCodeBase());
  return (busy || (cur && hasCourse(cur.code) ? cur : null) || ls.find((L) => hasCourse(L.code)) || cur || ls[0] || {}).code;
}
function viewKurs(v) {
  if (!langs().length) return `<h1 class="vtitle">${T("Kurs")}</h1><p class="hint">${T("Füge zuerst eine Sprache hinzu (Tab „Karten“ › + Sprache).")}</p>`;
  const code = kursLang(v);
  v.p = { ...(v.p || {}), lang: code };
  return viewCourse({ p: code, root: true });
}
const kursPills = (code) => (langs().length < 2 ? "" : `<div class="pills" role="group" aria-label="${T("Sprache")}">${langs().map((L) => `<button data-action="kurs-lang" data-arg="${esc(L.code)}" aria-pressed="${L.code === code}">${esc(lname(L))}${hasCourse(L.code) ? "" : " ✦"}</button>`).join("")}</div>`);

/* ---------- Karten: languages, projects, search, import ---------- */
function viewLibrary() {
  const rows = langs().map((L) => {
    const cs = cardsOf(L.code), d = dueInfo({ lang: L.code }), m = countByState(L.code), act = cs.length - m.susp, nd = decksOf(L.code).length;
    return navRow("lang", L.code, lname(L), cs.length ? `${plural(cs.length, T("Karte"), T("Karten"))} · ${plural(nd, T("Projekt"), T("Projekte"))}${act ? ` ${T("· {0} % sicher", [Math.round(m.known / act * 100)])}` : ""}` : T("Noch keine Karten – tippen zum Starten"),
      d.due ? `<span class="acc-t">${num(d.due)}</span><small>${T("fällig")}</small>` : d.nw ? `<small>${T("{0} neu", [num(d.nw)])}</small>` : "", badgeTxt(lname(L).slice(0, 2), L.color));
  }).join("");
  const n = state.cards.length, fresh = n ? state.cards.filter((c) => !c.susp && !isLearned(c)).length : 0;
  return `<h1 class="vtitle">${T("Karten")}</h1>
    <button class="searchbar hubsearch" data-action="nav" data-arg="search">${ICON_SEARCH}<span>${T("Wort, Übersetzung, Verbform …")}</span></button>
    <section class="sec"><div class="sechead"><h2 class="sectitle">${T("Sprachen")}</h2><span class="hint">${n ? plural(n, T("Karte"), T("Karten")) : ""}</span></div>
      ${rows}
      <button class="row nobadge addrow" data-action="add-lang"><span class="main"><span class="t1">${T("+ Sprache")}</span><span class="t2">${T("Spanisch, Französisch, Portugiesisch …")}</span></span><span class="val"></span><span class="chev" aria-hidden="true">›</span></button></section>
    <section class="sec"><div class="sechead"><h2 class="sectitle">${T("Neue Karten")}</h2></div>
      ${navRow("import-any", "", T("Importieren"), T("Foto, PDF oder Liste in Karten verwandeln"), "", badgeTxt("⇪", "#3FA9FF"))}
      ${navRow("starter-any", "", T("Starter-Pakete"), T("Fertige Wortschätze und Sätze zum Laden"), "", badgeTxt("★", "#FFE83A"))}
      ${navRow("newwords-any", "", T("Neue Wörter ansehen"), T("Noch nicht gelernt – lesen und anhören"), fresh ? `<small>${num(fresh)}</small>` : "", badgeTxt("Aa", "#30D97F"))}
    </section>`;
}

/* ---------- Wissen: phrasebook · grammar · verb lookup ---------- */
const W_SEGS = [["pb", TB("Sprachführer", "Phrasebook")], ["th", TB("Theorie", "Grammar")], ["verb", TB("Verben", "Verbs")]];
function viewWissen(v) {
  const p = v.p || (v.p = {}), seg = W_SEGS.some(([k]) => k === p.seg) ? p.seg : "pb";
  const segs = `<div class="seg three wseg" role="group" aria-label="${T("Bereich")}">${W_SEGS.map(([k, t]) => `<button data-action="w-seg" data-arg="${k}" aria-pressed="${k === seg}">${esc(L10(t))}</button>`).join("")}</div>`;
  let inner;
  if (seg === "pb") inner = viewPhrasebook();
  else if (seg === "th") {
    const ls = theoryLangs();
    if (!ls.length) inner = `<h1 class="vtitle">${T("Theorie")}</h1><p class="hint">${T("Für deine Sprachen gibt es noch keine Theorie")}</p>`;
    else { const code = ls.some((L) => L.code === p.lang) ? p.lang : (ls.find((L) => L.code === curLangCodeBase()) || ls[0]).code; p.lang = code; inner = viewTheory({ p: code }); }
  } else {
    const ls = langs().filter((L) => canConj(L.code));
    if (!ls.length) inner = `<h1 class="vtitle">${T("Verb nachschlagen")}</h1><p class="hint">${T("Für deine Sprachen gibt es noch keine automatische Konjugation.")}</p>`;
    else { const code = ls.some((L) => L.code === p.lang) ? p.lang : (ls.find((L) => L.code === curLangCodeBase()) || ls[0]).code; p.lang = code; inner = viewConj({ p: { lang: code, verb: p.verb || "" } }); }
  }
  return segs + inner;
}

Object.assign(VIEWS, { kurs: viewKurs, library: viewLibrary, wissen: viewWissen });
Object.assign(VIEW_LABEL, { kurs: T("Kurs"), library: T("Karten"), wissen: T("Wissen"), hub: T("Heute") });
