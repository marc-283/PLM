/* ================= Heute: one plan for the day =================
   „Weiterlernen“ goes through it in order: due reviews → new cards (daily limit per language) → the open step of the
   course lesson you were last working on. The checklist below the button shows what is done and what is left. */
const goalMin = () => state.settings.goal || 10;
/* code of a lesson id: built-in lessons start with the language ("it-a1-05"), AI lessons are looked up */
function lessonCode(id) {
  for (const [code, list] of Object.entries(state.course.x || {})) if ((list || []).some((l) => l.id === id)) return code;
  const c = String(id).split("-")[0];
  return COURSE_BUILTIN.includes(c) ? c : null;
}
/* The lesson of the plan: the one you worked on last – or, if that one is finished, the next one in the course.
   Nothing when the course was never started. { code, l, step: "w"|"q"|"t", today } or { code, loading } */
function planLesson() {
  const recent = Object.entries(state.course.p || {}).filter(([, p]) => p && p.u).sort((a, b) => b[1].u - a[1].u);
  for (const [id, p] of recent) {
    const code = lessonCode(id);
    if (!code || !langOf(code)) continue;
    if (COURSE_BUILTIN.includes(code) && !COURSE[code]) {
      loadCourse(code).then((c) => { if (c && topView().v === "hub" && !state.study && !state.quiz && !state.talk && !sheetOpen()) render(); });
      return { code, loading: true };
    }
    const last = lessonById(code, id);
    if (!last) continue;
    const doneToday = dayNum(p.u, roll()) === today();
    let l = last;
    if (lessonDone(last)) {
      const all = courseLevels(code).flatMap((lv) => lv.lessons), i = all.indexOf(last);
      l = all.slice(i + 1).find((x) => !lessonDone(x)) || nextLesson(code);
    }
    if (!l) return doneToday ? { code, l: last, step: null, today: true } : null; // the whole course is done
    const s = lessonSteps(l), step = !s.w ? "w" : !s.q ? "q" : !s.t ? "t" : null;
    return { code, l: doneToday ? last : l, next: l, step, today: doneToday };
  }
  return null;
}
const STEP_NAME = { w: T("Wörter"), q: T("Übung"), t: T("Gespräch") };
const lessonTag = (l) => `${l.level}·${l.n}`;
function dayPlan() {
  dueCache.clear();
  const d = dueInfo(), td = dayTotals(today());
  const newDone = langs().reduce((a, L) => a + newToday(L.code), 0), revDone = Math.max(0, td.r - newDone);
  const course = planLesson();
  const items = [{ k: "rev", done: !d.due, text: d.due ? plural(d.due, T("Wiederholung"), T("Wiederholungen")) : revDone ? plural(revDone, T("Wiederholung"), T("Wiederholungen")) : T("Keine Wiederholungen") }];
  if (d.nw || newDone) items.push({ k: "new", done: !d.nw, text: d.nw ? T("{0} neue Karten", [num(d.nw)]) : plural(newDone, T("neue Karte"), T("neue Karten")) });
  let next = d.total ? "cards" : null;
  if (course && course.loading) { items.push({ k: "course", done: false, text: T("Kurs …") }); if (!next) next = "loading"; }
  else if (course) {
    const l = course.l;
    items.push({ k: "course", done: course.today, text: course.today || !course.step ? T("Lektion {0}", [lessonTag(l)]) : T("Lektion {0}: {1}", [lessonTag(l), STEP_NAME[course.step]]), lang: course.code, id: l.id });
    if (!next && !course.today && course.step) next = "course";
  }
  return { d, items, next, course, minutes: Math.round(td.s / 60), cards: td.r + td.p };
}
/* „Weiterlernen“ */
function planGo() {
  const P = dayPlan();
  if (P.next === "cards") { startLearn({ plan: true }); return; }
  if (P.next === "loading") { toast(T("Kurs wird geladen …")); loadCourse(P.course.code).then((c) => { if (c) planGo(); else toast(T("Der Kurs konnte nicht geladen werden – bist du online?")); }); return; }
  if (P.next === "course") {
    const { code, next: l, step } = P.course;
    if (step === "w") learnLesson(code, l.id);
    else if (step === "t") startTalk(code, l.id, "play");
    else ensureData(verbData(code)).then(() => startLessonQuiz(code, l.id));
    return;
  }
  openPractice({});
}
function hubGoBtn(P) {
  const n = state.cards.length;
  if (!n && P.next !== "course") return `<button class="addbig hubgo" data-action="starter-first"><span class="hg-t"><span aria-hidden="true">★</span>${T("Starter")}</span><small>${T("Wortschatz laden")}</small></button>`;
  if (!P.next) return `<button class="addbig hubgo done" data-action="practice"><span class="hg-t"><span aria-hidden="true">✓</span>${T("Erledigt")}</span><small>${T("Tippen zum Üben")}</small></button>`;
  const d = P.d;
  const sub = P.next === "cards" ? [d.due ? plural(d.due, T("Wiederholung"), T("Wiederholungen")) : "", d.nw ? T("{0} neu", [num(d.nw)]) : "", T("ca. {0} Min.", [minutesFor(d)])].filter(Boolean).join(" · ")
    : P.next === "course" ? T("Lektion {0} · {1}", [lessonTag(P.course.next), STEP_NAME[P.course.step]]) : T("Kurs wird geladen …");
  return `<button class="addbig hubgo" data-action="plan-go"><span class="hg-t"><span aria-hidden="true">▶</span>${T("Weiterlernen")}</span><small>${esc(sub)}</small></button>`;
}
function planHTML(P) {
  if (!state.cards.length && !P.course) return "";
  if (!P.next && P.items.every((x) => x.done)) return `<p class="plan alldone">${T("Für heute erledigt ✓")}</p>`;
  return `<ul class="plan" aria-label="${T("Tagesplan")}">${P.items.map((x) => {
    const body = `<span class="pl-m" aria-hidden="true">${x.done ? "✓" : "○"}</span>${esc(x.text)}`;
    return `<li class="${x.done ? "on" : ""}">${x.k === "course" && x.id ? `<button type="button" data-action="next-lesson" data-arg="${esc(x.id)}" data-p="${esc(x.lang)}">${body}<span class="pl-c" aria-hidden="true">›</span></button>` : body}</li>`;
  }).join("")}</ul>`;
}
function viewHub() {
  const P = dayPlan(), n = state.cards.length, m = countByState(null), stk = streakInfo();
  const goal = goalMin(), pct = Math.min(100, Math.round(P.minutes / goal * 100)), reached = P.minutes >= goal;
  const tiles = langs().map((L) => {
    const d = dueInfo({ lang: L.code }), cs = cardsOf(L.code).length;
    const line = !cs ? T("Noch keine Karten") : d.due ? T("{0} fällig{1}", [num(d.due), d.nw ? ` · ${T("{0} neu", [num(d.nw)])}` : ""]) : d.nw ? T("{0} neue Karten", [num(d.nw)]) : T("Für heute erledigt ✓");
    return `<button class="tile ltile" data-action="lang" data-arg="${esc(L.code)}"><span class="tile-t" style="color:${L.color}">${esc(lname(L))}</span><span class="tile-s">${line}</span></button>`;
  }).join("");
  const verbs = state.cards.filter((c) => c.type === "verb").length, sentences = n ? sentenceBank(null).length : 0;
  const practice = `<section class="hubpractice" aria-labelledby="hPr"><div class="sechead"><h2 class="sectitle" id="hPr">${T("Üben")}</h2></div>
    <div class="minitiles">
      <button class="mtile" data-action="build-any"><span class="tile-t">${T("Sätze bauen")}</span><span class="tile-s">${sentences ? T("{0} aus deinen Wörtern", [plural(sentences, T("Satz"), T("Sätze"))]) : T("Sätze bilden und korrigieren lassen")}</span></button>
      <button class="mtile" data-action="drill-any"><span class="tile-t">${T("Konjugation")}</span><span class="tile-s">${verbs ? T("{0} – Formen üben", [plural(verbs, T("Verb"), T("Verben"))]) : T("Verbformen trainieren")}</span></button>
      ${m.hard ? `<button class="mtile" data-action="hard-any"><span class="tile-t">${T("Schwierige Karten")}</span><span class="tile-s">${T("{0} – oft vergessen", [plural(m.hard, T("Karte"), T("Karten"))])}</span></button>` : ""}
    </div></section>`;
  const backup = n && !syncOn() && (lastBackupDays() == null ? n >= 30 && Date.now() - Math.min(...state.cards.map((c) => c.created)) > 7 * 864e5 : lastBackupDays() > 14);
  return `
    <header class="hubhead">
      <div class="brand"><h1 class="wordmark">P<b>L</b>M</h1><span class="label">Personal Language Management</span></div>
      <div class="goal${reached ? " ok" : ""}"><span class="label">${T("Tagesziel")}</span><b>${reached ? `✓ ${T("{0} Min.", [goal])}` : `${num(P.minutes)} / ${T("{0} Min.", [goal])}`}</b></div>
    </header>
    <div class="goalbar${reached ? " ok" : ""}" role="progressbar" aria-label="${T("Tagesziel")}" aria-valuemin="0" aria-valuemax="${goal}" aria-valuenow="${Math.min(goal, P.minutes)}"><span style="width:${pct}%"></span></div>
    <div class="mainbtns">${hubGoBtn(P)}<button class="addbig hubadd" data-action="add" aria-label="${T("Neue Karte")}"><span aria-hidden="true">+</span><small>${T("Karte")}</small></button></div>
    ${planHTML(P)}
    ${backup ? `<button class="notice" data-action="export-json">${T("Letztes Backup: {0} · Jetzt sichern ›", [esc(lastBackupText())])}</button>` : ""}
    <nav class="tiles ltiles${langs().length > 1 ? " two" : ""}" aria-label="${T("Sprachen")}">${tiles}</nav>
    ${n ? practice : ""}
    <div class="hubfoot">
      <button class="hubstats" data-action="nav" data-arg="stats">${T("Heute {0}", [plural(P.cards, T("Karte"), T("Karten"))])} · 🔥 ${plural(stk.cur, T("Tag"), T("Tage"))} · ${T("{0} Min.", [num(P.minutes)])}<span aria-hidden="true"> ›</span></button>
      ${syncOn() ? `<button class="syncline" data-action="sync-now" id="syncLine">${esc(syncStatusText())}</button>` : ""}
    </div>`;
}
