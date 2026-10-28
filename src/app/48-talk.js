/* ================= Conversation: listen, play a role, swap roles, talk freely with the AI ================= */
/* state.talk = { code, id, mode: listen|play|swap|ai, lines, i, log: [{ who, text, tr, ok, cmp, typed }], slots, res, input: type|tiles, hint, done, ok, n } */
function fillSlots(text, slots, defaults) {
  return String(text).replace(/\{(\w+)\}/g, (_, k) => (slots && slots[k]) || (defaults && defaults[k]) || "…");
}
const slotHint = (k) => ({ name: T("dein Name"), city: T("deine Stadt"), country: T("dein Land"), job: T("dein Beruf"), age: T("dein Alter"), food: T("ein Gericht"), day: T("ein Tag"), time: T("eine Uhrzeit"), number: T("eine Zahl") }[k] || T("frei wählbar"));
function startTalk(code, id, mode) {
  const l = lessonById(code, id), tk = l && lessonTalk(l);
  if (!tk) return;
  if (mode === "ai" && !aiOn()) { toast(T("Dafür brauchst du den KI-Assistenten (Einstellungen › KI-Assistent)")); return; }
  const mine = mode === "swap" ? "a" : "me";
  state.talk = { code, id, mode, tk, lines: tk.lines, mine, i: 0, log: [], slots: {}, res: null, input: lsGet("plm.talkInput") === "tiles" ? "tiles" : "type", hint: 0, done: false, ok: 0, n: 0, hideText: false, auto: mode === "listen", ai: mode === "ai" ? { msgs: [], busy: false } : null };
  $("study").hidden = false; document.body.style.overflow = "hidden";
  if (mode === "ai") { aiTalkStart(); return; }
  talkFlow();
}
function closeTalk() {
  const K = state.talk; if (!K) return;
  stopSpeak();
  try { if (curRec) curRec.abort(); } catch { /* ignore */ }
  if (K.n) { const st = statOf(today(), K.code, true); st.p += K.n; save(); }
  state.talk = null; $("study").hidden = true; document.body.style.overflow = ""; render();
}
const talkCur = () => { const K = state.talk; return K && K.lines[K.i]; };
const isMine = (line) => state.talk && line && line.who === state.talk.mine && state.talk.mode !== "listen";
/* Show partner lines (with voice) until it is the learner's turn or the end */
function talkFlow() {
  const K = state.talk; if (!K) return;
  const line = talkCur();
  if (!line) { talkEnd(); return; }
  if (isMine(line)) { K.res = null; K.hint = 0; K.picked = []; K.tiles = null; renderTalk(); setTimeout(() => { const el = $("talkIn"); if (el && matchMedia("(hover: hover) and (pointer: fine)").matches) el.focus(); }, 40); return; }
  const text = fillSlots(line.tg, K.slots, K.tk.slots);
  K.log.push({ side: line.who === K.mine ? "me" : "you", name: roleName(K, line.who), text, tr: trOf(K, line), partner: line.who !== K.mine || K.mode === "listen" });
  K.i++;
  renderTalk();
  const next = talkCur(), go = () => { if (state.talk === K && (K.auto || (next && isMine(next)))) setTimeout(() => { if (state.talk === K) talkFlow(); }, 350); };
  if (canSpeak() && state.settings.autoSpeak !== false) { if (!speak(text, K.code, { quiet: true, onend: go })) go(); }
  else if (K.auto || (next && isMine(next))) setTimeout(() => { if (state.talk === K) talkFlow(); }, 900);
}
/* Names: "a" is the character of the scene, "me" is the learner (or, with swapped roles, a sample person) */
function roleName(K, who) {
  if (who === "a") return K.mine === "a" && K.mode !== "listen" ? T("Du") : K.tk.who || T("Gegenüber");
  return K.mine === "me" && K.mode !== "listen" ? T("Du") : (K.tk.slots && K.tk.slots.name) || T("Du");
}
function trOf(K, line) {
  const m = /\{(\w+)\}/.exec(line.tg), tr = meanOf(line) || "";
  return m ? tr.replace(/…/g, K.slots[m[1]] || (K.tk.slots || {})[m[1]] || "…") : tr;
}
function talkEnd() {
  const K = state.talk; if (!K) return;
  K.done = true;
  if (K.mode !== "listen" || K.log.length >= K.lines.length) setLp(lessonById(K.code, K.id).id, { t: lp(K.id).t || nowTs() });
  renderTalk();
}
function cmpScore(c) { const good = c.toks.filter((t) => t.st !== "bad").length; return (c.res === "exact" ? 3 : c.res === "close" ? 2 : 0) + good / (c.toks.length + c.missing.length + 1); }
/* Compare with a template that has a free slot like {name}: try what the learner put at that place */
function slotCompare(input, tpl, L) {
  const m = /\{(\w+)\}/.exec(tpl);
  if (!m) return { cmp: compareSentence(input, tpl, L), slots: {} };
  const u = tokSplit(input), tt = tokSplit(tpl), si = Math.max(0, tt.findIndex((w) => /\{\w+\}/.test(w)));
  let best = null;
  for (let start = Math.max(0, si - 2); start <= Math.min(u.length - 1, si + 2); start++) for (let k = 1; k <= 3 && start + k <= u.length; k++) {
    const fill = u.slice(start, start + k).join(" "), cmp = compareSentence(input, tpl.replace(m[0], fill), L), sc = cmpScore(cmp);
    if (!best || sc > best.sc) best = { cmp, sc, slots: { [m[1]]: fill } };
  }
  return best || { cmp: compareSentence(input, tpl.replace(m[0], ""), L), slots: {} };
}
function talkCheck(input) {
  const K = state.talk, line = talkCur(); if (!K || !line || K.res) return;
  const L = langOf(K.code) || {};
  input = String(input || "").trim();
  if (!input) { talkShow(); return; }
  let best = null;
  for (const v of [line.tg].concat(line.alts || [])) { const r = slotCompare(input, v, L); r.v = v; if (!best || cmpScore(r.cmp) > cmpScore(best.cmp)) best = r; }
  const ok = best.cmp.res !== "wrong";
  K.res = { ok, close: best.cmp.res === "close", cmp: best.cmp, typed: input, right: fillSlots(best.v, { ...K.slots, ...best.slots }, K.tk.slots) };
  if (ok) Object.assign(K.slots, best.slots);
  K.n++; if (ok && !K.hint) K.ok++;
  renderTalk();
  if (canSpeak() && state.settings.autoSpeak !== false) speak(K.res.right, K.code, { quiet: true });
}
function talkShow() {
  const K = state.talk, line = talkCur(); if (!K || !line || K.res) return;
  K.n++;
  K.res = { ok: false, shown: true, typed: "", right: fillSlots(line.tg, K.slots, K.tk.slots) };
  renderTalk();
  if (canSpeak()) speak(K.res.right, K.code, { quiet: true });
}
function talkContinue() {
  const K = state.talk, line = talkCur(); if (!K || !line) return;
  K.log.push({ side: "me", name: T("Du"), text: K.res && K.res.ok ? K.res.typed : K.res.right, tr: trOf(K, line), ok: !!(K.res && K.res.ok) });
  K.i++; K.res = null;
  talkFlow();
}
function talkRetry() { const K = state.talk; if (!K) return; K.res = null; K.picked = []; renderTalk(); }
function talkMic() {
  const K = state.talk, line = talkCur(); if (!K || !line) return;
  K.listening = true; renderTalk();
  listen(K.code, (r) => {
    if (state.talk !== K) return;
    K.listening = false;
    if (r.error) { toast(r.error === "not-allowed" || r.error === "service-not-allowed" ? T("Kein Zugriff aufs Mikrofon – erlaube es in den Einstellungen bzw. schalte „Diktieren“ ein.") : r.error === "no-speech" ? T("Nichts gehört – tippe aufs Mikrofon und sprich direkt los.") : T("Spracherkennung gerade nicht verfügbar – versuch es nochmal.")); renderTalk(); return; }
    /* take the alternative that fits best */
    const L = langOf(K.code) || {};
    let pickAlt = r.alts[0] || "", sc = -1;
    for (const a of r.alts) for (const v of [line.tg].concat(line.alts || [])) { const x = cmpScore(slotCompare(a, v, L).cmp); if (x > sc) { sc = x; pickAlt = a; } }
    talkCheck(pickAlt);
  });
}
function talkTiles() {
  const K = state.talk, line = talkCur();
  if (!K.tiles) { const tg = fillSlots(line.tg, K.slots, K.tk.slots); K.tiles = shuffle(tokSplit(tg)); K.picked = []; }
  return K.tiles;
}
function bubble(m, code, K) {
  const hide = K.hideText && m.partner;
  return `<div class="bub ${m.side}${m.ok === false ? " miss" : ""}"><span class="bub-who">${esc(m.name)}${m.ok ? " ✓" : ""}</span>
    <div class="bub-row">${sayBtn(m.text, code)}<span class="bub-t${hide ? " blur" : ""}"${hide ? ` data-action="talk-unblur"` : ""}>${esc(m.text)}</span></div>
    ${m.tr && !hide ? `<small class="bub-tr">${esc(m.tr)}</small>` : ""}</div>`;
}
function renderTalk() {
  const K = state.talk, root = $("studyIn"); if (!K) return;
  const L = langOf(K.code) || { color: "var(--accent)" }, total = K.lines.length, pct = Math.min(100, K.i / total * 100);
  const top = `<div class="st-top"><button class="mbtn" data-action="talk-close" aria-label="${T("Beenden")}">✕</button>
    <div class="st-prog" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${K.i}"><span style="width:${pct.toFixed(1)}%"></span></div>
    <span class="st-count"><b>${num(K.i)}</b> / ${num(total)}</span>
    <button class="mbtn" data-action="talk-hide" aria-pressed="${K.hideText}" aria-label="${T("Text ausblenden (Hörverstehen)")}">${K.hideText ? "◎" : "👁"}</button></div>`;
  const modeTxt = { listen: T("Anhören"), play: T("Mitspielen"), swap: T("Rollen getauscht") }[K.mode] || "";
  const head = `<div class="talk-head"><span class="label" style="color:${L.color}">${esc(modeTxt)} · ${esc(L10(K.tk.t))}</span><p>${esc(L10(K.tk.scene))}</p></div>`;
  const log = `<div class="chat" id="chat">${K.log.map((m) => bubble(m, K.code, K)).join("")}</div>`;
  let act = "";
  const line = talkCur();
  if (K.done) {
    const pctOk = K.n ? Math.round(K.ok / K.n * 100) : 100;
    act = `<div class="talk-done"><b class="fc-res ${pctOk >= 80 ? "ok" : pctOk >= 50 ? "close" : "bad"}">${K.mode === "listen" ? T("Gespräch zu Ende") : T("{0} von {1} Sätzen richtig", [K.ok, K.n])}</b>
      <div class="btnrow wrap"><button class="btn grow" data-action="talk-again">${T("Nochmal")}</button>${K.mode !== "swap" ? `<button class="btn grow" data-action="talk-mode" data-arg="swap">${T("⇄ Rollen tauschen")}</button>` : `<button class="btn grow" data-action="talk-mode" data-arg="play">${T("💬 Normale Rolle")}</button>`}${K.mode === "listen" ? `<button class="btn primary grow" data-action="talk-mode" data-arg="play">${T("💬 Mitspielen")}</button>` : `<button class="btn primary grow" data-action="talk-close">${T("Fertig")}</button>`}</div></div>`;
  } else if (K.mode === "listen") {
    act = `<div class="st-act"><button class="btn" data-action="talk-auto">${K.auto ? T("⏸ Pause") : T("▶ Weiter abspielen")}</button><button class="btn primary" data-action="talk-next">${T("Nächster Satz ›")}</button></div>`;
  } else if (line && isMine(line)) {
    const slotM = /\{(\w+)\}/.exec(line.tg);
    const prompt = `<div class="talk-prompt"><span class="label">${T("Du sagst:")}</span><b>${esc(meanOf(line))}</b>${slotM ? `<small>${T("„…“ = {0}", [slotHint(slotM[1])])}</small>` : ""}${K.hint && !K.res ? `<small class="acc-t">${T("Tipp: {0} …", [esc(tokSplit(fillSlots(line.tg, K.slots, K.tk.slots)).slice(0, K.hint * 2).join(" "))])}</small>` : ""}</div>`;
    if (K.res) {
      const r = K.res;
      act = `${prompt}<div class="talk-res">${r.shown ? `<b class="fc-res bad">${T("So kannst du es sagen:")}</b>` : `<b class="fc-res ${r.ok ? (r.close ? "close" : "ok") : "bad"}">${r.ok ? (r.close ? T("Fast richtig") : T("Richtig!")) : T("Nicht ganz")}</b>`}
        ${r.cmp && !r.ok ? cmpHTML(r.cmp) : ""}${!r.ok || r.close ? `<div class="talk-right">${sayBtn(r.right, K.code)}<span>${esc(r.right)}</span></div>` : ""}</div>
        <div class="st-act">${!r.ok ? `<button class="btn" data-action="talk-retry">${T("Nochmal")}</button>` : ""}<button class="btn primary" data-action="talk-cont">${T("Weiter ›")}</button></div>`;
    } else if (K.listening) {
      act = `${prompt}<div class="mic-res"><span class="pulse"></span>${T("Sprich jetzt …")}</div>`;
    } else if (K.input === "tiles") {
      const tiles = talkTiles();
      act = `${prompt}<div class="tiles-ans">${K.picked.map((i, j) => `<button class="tile-w on" data-action="talk-tile-out" data-arg="${j}">${esc(tiles[i])}</button>`).join("") || `<span class="hint">${T("Tippe die Wörter in der richtigen Reihenfolge an")}</span>`}</div>
        <div class="tiles-pool">${tiles.map((t, i) => `<button class="tile-w${K.picked.includes(i) ? " used" : ""}" data-action="talk-tile" data-arg="${i}"${K.picked.includes(i) ? " disabled" : ""}>${esc(t)}</button>`).join("")}</div>
        <div class="st-act"><button class="btn" data-action="talk-input" data-arg="type">${T("⌨ Tippen")}</button><button class="btn primary" data-action="talk-check">${T("Prüfen")}</button></div>`;
    } else {
      act = `${prompt}<form id="talkForm" class="talk-form"><textarea id="talkIn" class="typein area" rows="2" autocomplete="off" autocorrect="off" autocapitalize="sentences" spellcheck="false" enterkeyhint="send" aria-label="${T("Deine Antwort")}" placeholder="${T("Auf {0} antworten …", [esc(lname(L))])}"></textarea></form>
        <div class="talk-tools">${canListen() ? `<button class="say-small mic" data-action="talk-mic" aria-label="${T("Sprechen")}">${ICON_MIC}</button>` : ""}<button class="btn" data-action="talk-input" data-arg="tiles">${T("Bausteine")}</button><button class="btn" data-action="talk-hint">${T("Tipp")}</button><button class="btn" data-action="talk-show">${T("Lösung")}</button></div>
        <div class="st-act"><button class="btn primary" data-action="talk-check">${T("Prüfen")}</button></div>`;
    }
  } else act = `<div class="st-act"><button class="btn primary" data-action="talk-next">${T("Weiter ›")}</button></div>`;
  root.innerHTML = `${top}<div class="talk">${head}${log}</div><div class="talk-act">${act}</div>`;
  const ch = $("chat"); if (ch) ch.scrollTop = ch.scrollHeight;
  const wrap = root.querySelector(".talk"); if (wrap) wrap.scrollTop = wrap.scrollHeight;
}

/* ---------- Free conversation with the AI (user's own key) ---------- */
const AI_TALK_SCHEMA = { type: "object", additionalProperties: false, required: ["reply", "reply_translation", "correction", "note", "ok"], properties: {
  reply: { type: "string" }, reply_translation: { type: "string" }, correction: { type: "string" }, note: { type: "string" }, ok: { type: "boolean" } } };
const LANG_EN = { it: "Italian", en: "English", es: "Spanish", fr: "French", pt: "Portuguese", nl: "Dutch", sv: "Swedish", de: "German" };
function aiTalkSystem(K) {
  const l = lessonById(K.code, K.id), L = langOf(K.code), lang = LANG_EN[K.code] || (L && L.name) || K.code, ui = UI === "en" ? "English" : "German";
  const sample = K.lines.slice(0, 6).map((x) => `${x.who === "a" ? K.tk.who || "Partner" : "Learner"}: ${x.tg}`).join("\n");
  return `You are ${K.tk.who || "a friendly local"}, a native ${lang} speaker, in a role-play with a language learner (CEFR level ${l ? l.level : "A2"}).
Scene: ${L10(K.tk.scene)} (${l ? L10(l.t) : ""})
Example of how the scene can start:
${sample}

Rules:
- Stay in the scene. Speak only ${lang}. Keep each reply short (1–2 sentences) and natural, with vocabulary and grammar a ${l ? l.level : "A2"} learner understands.
- Always end with a question or a prompt, so the learner has something to answer.
- "reply_translation": your reply in ${ui}.
- "correction": the learner's last message rewritten as a natural, correct ${lang} sentence – an empty string if it was already correct and natural, or if there was no learner message yet.
- "note": one short explanation in ${ui} of the most important mistake (empty if none).
- "ok": true if the learner's last message was correct (or there was none).
- If the learner writes in ${ui}, help them say it in ${lang} in "correction" and keep the scene going.`;
}
async function aiTalkStart() {
  const K = state.talk; renderAiTalk();
  await aiTalkSend("");
  if (state.talk === K) renderAiTalk();
}
async function aiTalkSend(text) {
  const K = state.talk; if (!K || !K.ai || K.ai.busy) return;
  text = String(text || "").trim();
  if (text) K.log.push({ side: "me", text });
  K.ai.busy = true; renderAiTalk();
  const msgs = [];
  for (const m of K.ai.msgs) msgs.push(m);
  msgs.push({ role: "user", content: text || "(Start the conversation now with your first line.)" });
  try {
    const r = await aiCall({ system: aiTalkSystem(K), messages: msgs, schema: AI_TALK_SCHEMA, maxTokens: 1200, effort: "low" });
    if (state.talk !== K) return;
    const j = r.json || {};
    K.ai.msgs = msgs.concat([{ role: "assistant", content: r.text }]).slice(-24);
    const mine = text ? K.log[K.log.length - 1] : null;
    if (mine) { mine.ok = j.ok !== false && !j.correction; mine.fix = j.correction || ""; mine.note = j.note || ""; K.n++; if (mine.ok) K.ok++; }
    K.log.push({ side: "you", text: j.reply || "…", tr: j.reply_translation || "" });
    K.ai.busy = false; renderAiTalk();
    if (canSpeak() && state.settings.autoSpeak !== false && j.reply) speak(j.reply, K.code, { quiet: true });
    if (K.n >= 3 && !lp(K.id).t) setLp(K.id, { t: nowTs() });
  } catch (e) {
    if (state.talk !== K) return;
    K.ai.busy = false; if (text) { K.log.pop(); K.ai.draft = text; }
    renderAiTalk(); toast(e.message);
  }
}
function renderAiTalk() {
  const K = state.talk, root = $("studyIn"); if (!K) return;
  const L = langOf(K.code) || { color: "var(--accent)" };
  const top = `<div class="st-top"><button class="mbtn" data-action="talk-close" aria-label="${T("Beenden")}">✕</button><span class="st-count">${K.n ? T("{0} von {1} ohne Fehler", [K.ok, K.n]) : ""}</span><span></span><span></span></div>`;
  const head = `<div class="talk-head"><span class="label" style="color:${L.color}">${T("Frei sprechen")} · ${esc(L10(K.tk.t))}</span><p>${esc(L10(K.tk.scene))}</p></div>`;
  const log = K.log.map((m) => m.side === "me"
    ? `<div class="bub me${m.ok === false ? " miss" : ""}"><span class="bub-who">${T("Du")}${m.ok ? " ✓" : ""}</span><span class="bub-t">${esc(m.text)}</span>${m.fix ? `<div class="bub-fix">${sayBtn(m.fix, K.code)}<span>${esc(m.fix)}</span></div>` : ""}${m.note ? `<small class="bub-tr">${esc(m.note)}</small>` : ""}</div>`
    : `<div class="bub you"><span class="bub-who">${esc(K.tk.who || T("Gegenüber"))}</span><div class="bub-row">${sayBtn(m.text, K.code)}<span class="bub-t">${esc(m.text)}</span></div>${m.tr ? `<small class="bub-tr">${esc(m.tr)}</small>` : ""}</div>`).join("");
  const busy = K.ai.busy ? `<div class="bub you typing"><span class="pulse"></span>${T("schreibt …")}</div>` : "";
  root.innerHTML = `${top}<div class="talk">${head}<div class="chat" id="chat">${log}${busy}</div></div>
    <div class="talk-act"><form id="talkAiForm" class="talk-form"><textarea id="talkAiIn" class="typein area" rows="2" autocomplete="off" autocorrect="off" autocapitalize="sentences" spellcheck="false" enterkeyhint="send" aria-label="${T("Deine Antwort")}" placeholder="${T("Auf {0} antworten …", [esc(lname(L))])}"${K.ai.busy ? " disabled" : ""}>${esc(K.ai.draft || "")}</textarea></form>
      <div class="talk-tools">${canListen() ? `<button class="say-small mic" data-action="talk-ai-mic" aria-label="${T("Sprechen")}"${K.ai.busy ? " disabled" : ""}>${ICON_MIC}</button>` : ""}<button class="btn primary grow" data-action="talk-ai-send"${K.ai.busy ? " disabled" : ""}>${T("Senden")}</button></div></div>`;
  K.ai.draft = "";
  const wrap = root.querySelector(".talk"); if (wrap) wrap.scrollTop = wrap.scrollHeight;
}
function talkAiMic() {
  const K = state.talk; if (!K) return;
  listen(K.code, (r) => {
    if (state.talk !== K) return;
    if (r.error) { toast(r.error === "no-speech" ? T("Nichts gehört – tippe aufs Mikrofon und sprich direkt los.") : T("Spracherkennung gerade nicht verfügbar – versuch es nochmal.")); return; }
    const el = $("talkAiIn"); if (el) el.value = r.alts[0] || "";
  });
  toast(T("Sprich jetzt …"));
}

/* ---------- Events ---------- */
document.addEventListener("submit", (e) => {
  if (e.target && e.target.id === "talkForm") { e.preventDefault(); talkCheck(($("talkIn") || {}).value); }
  if (e.target && e.target.id === "talkAiForm") { e.preventDefault(); const el = $("talkAiIn"); aiTalkSend(el && el.value); }
});
document.addEventListener("keydown", (e) => {
  const K = state.talk; if (!K || $("study").hidden) return;
  if (e.key === "Escape") { closeTalk(); return; }
  if (e.key === "Enter" && !e.shiftKey && e.target && (e.target.id === "talkIn" || e.target.id === "talkAiIn")) { e.preventDefault(); e.target.form && e.target.form.requestSubmit ? e.target.form.requestSubmit() : (e.target.id === "talkIn" ? talkCheck(e.target.value) : aiTalkSend(e.target.value)); return; }
  if (e.key === "Enter" && K.res && !(e.target && /INPUT|TEXTAREA/.test(e.target.tagName))) { e.preventDefault(); talkContinue(); }
});
function talkAction(act, arg, a) {
  const K = state.talk;
  switch (act) {
    case "talk": { const p = parseP(a); if (p) startTalk(p.lang, p.id, arg); return true; }
    case "talk-close": closeTalk(); return true;
    case "talk-next": if (K) { K.auto = false; talkFlow(); } return true;
    case "talk-auto": if (K) { K.auto = !K.auto; if (K.auto) talkFlow(); else { stopSpeak(); renderTalk(); } } return true;
    case "talk-check": if (K) { if (K.input === "tiles" && K.tiles) talkCheck(K.picked.map((i) => K.tiles[i]).join(" ")); else talkCheck(($("talkIn") || {}).value); } return true;
    case "talk-show": talkShow(); return true;
    case "talk-hint": if (K) { K.hint++; renderTalk(); } return true;
    case "talk-cont": talkContinue(); return true;
    case "talk-retry": talkRetry(); return true;
    case "talk-mic": talkMic(); return true;
    case "talk-input": if (K) { K.input = arg; lsSet("plm.talkInput", arg); K.picked = []; renderTalk(); } return true;
    case "talk-tile": if (K && !K.res) { K.picked.push(Number(arg)); renderTalk(); if (K.picked.length === K.tiles.length) talkCheck(K.picked.map((i) => K.tiles[i]).join(" ")); } return true;
    case "talk-tile-out": if (K && !K.res) { K.picked.splice(Number(arg), 1); renderTalk(); } return true;
    case "talk-hide": if (K) { K.hideText = !K.hideText; renderTalk(); } return true;
    case "talk-unblur": a.classList.remove("blur"); return true;
    case "talk-again": if (K) { const { code, id, mode } = K; stopSpeak(); state.talk = null; startTalk(code, id, mode); } return true;
    case "talk-mode": if (K) { const { code, id } = K; stopSpeak(); state.talk = null; startTalk(code, id, arg); } return true;
    case "talk-ai-send": { const el = $("talkAiIn"); aiTalkSend(el && el.value); return true; }
    case "talk-ai-mic": talkAiMic(); return true;
  }
  return false;
}
