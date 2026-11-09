/* ================= Settings ================= */
const BACKUP_KEY = KEYS.backup;
function lastBackupDays() { const v = lsGet(BACKUP_KEY); return v ? Math.floor((Date.now() - Date.parse(v)) / 864e5) : null; }
function lastBackupText() { const d = lastBackupDays(); return d == null ? T("noch nie") : d === 0 ? T("heute") : d === 1 ? T("gestern") : T("vor {0} Tagen", [d]); }
function openMode() { const v = lsGet(KEYS.open); return ["splash", "menu", "learn"].includes(v) ? v : "menu"; }
function storageKB() { let n = 0; for (const k of Object.values(KEYS)) n += (lsGet(k) || "").length; return Math.round(n / 1024); }
const AI_MODELS = [["claude-sonnet-5-5", T("Genau – Claude Sonnet 5.5")], ["claude-haiku-5-5", T("Günstig – Claude Haiku 5.5")]];
function aiCfg() { const v = readJSON(KEYS.ai, {}); return { key: typeof v.key === "string" ? v.key : "", model: AI_MODELS.some(([m]) => m === v.model) ? v.model : AI_MODELS[0][0] }; }
const aiOn = () => !!aiCfg().key;
const maskKey = (k) => (k.length > 14 ? `${k.slice(0, 10)}…${k.slice(-4)}` : "••••");

/* Mehr: a short list – every entry opens its own page and shows its state underneath */
const SET_PAGES = [
  ["learn", TB("Lernen", "Learning"), "#FFE83A", "▶"],
  ["voice", TB("Aussprache & Stimmen", "Pronunciation & voices"), "#2EE6D6", "♪"],
  ["remind", TB("Erinnerung", "Reminder"), "#FF8A3D", "⏰"],
  ["langs", TB("Sprachen", "Languages"), "#C77DFF", "Aa"],
  ["sync", TB("iPhone ↔ iPad", "iPhone ↔ iPad"), "#30D97F", "⟳"],
  ["ai", TB("KI-Assistent", "AI assistant"), "#FF5FA8", "✦"],
  ["data", TB("Daten & Backup", "Data & backup"), "#7FD1FF", "⇩"],
  ["app", TB("App", "App"), "#8E8BFF", "⚙︎"]
];
const setTitle = (id) => L10((SET_PAGES.find((x) => x[0] === id) || [, TB("Einstellungen", "Settings")])[1]);
const RATE_NAME = { 0.8: T("Langsam"), 0.9: T("Etwas langsamer"), 1: T("Normal"), 1.1: T("Schnell") };
function setSub(id) {
  const S = state.settings, sy = syncCfg();
  if (id === "learn") return [(MODES.find(([k]) => k === S.mode) || MODES[0])[1], T("Ziel {0} Min. am Tag", [goalMin()]), T("{0} % behalten", [Math.round(S.ret * 100)])].join(" · ");
  if (id === "voice") return [ttsOn() ? T("Online-Stimmen aktiv") : T("Stimme des Geräts"), RATE_NAME[S.rate] || "", S.autoSpeak ? T("liest automatisch vor") : ""].filter(Boolean).join(" · ");
  if (id === "remind") return [T("Täglich um {0}", [S.remind]), S.badge ? T("Zahl am App-Symbol") : ""].filter(Boolean).join(" · ");
  if (id === "langs") return langs().map((L) => lname(L)).join(", ") || T("Noch keine Sprache");
  if (id === "sync") {
    if (!sy.token) return T("Nicht verbunden");
    if (sy.error) return T("Fehler: {0}", [sy.error]);
    if (!sy.last) return T("Verbunden · noch nicht synchronisiert");
    const m = Math.round((Date.now() - sy.last) / 60000);
    return T("Verbunden · {0}", [m < 1 ? T("gerade eben") : m < 60 ? T("vor {0} Min.", [m]) : m < 1440 ? T("vor {0} Std.", [Math.round(m / 60)]) : T("am {0}", [dayMonFmt.format(new Date(sy.last))])]);
  }
  if (id === "ai") return aiOn() ? T("Schlüssel aktiv") : T("Nicht eingerichtet");
  if (id === "data") return T("Letztes Backup: {0}", [lastBackupText()]);
  if (id === "app") return `${UI === "en" ? "English" : "Deutsch"} · ${T("Version {0}", [window.PLM_VERSION || ""])}`;
  return "";
}
function viewSettings() {
  const m = countByState(null), stk = streakInfo();
  return `${backBar()}
    <h1 class="vtitle">${T("Mehr")}</h1>
    <section class="sec">${navRow("nav", "stats", T("Statistik"), [T("{0} sicher", [num(m.known)]), stk.cur ? `🔥 ${plural(stk.cur, T("Tag"), T("Tage"))}` : ""].filter(Boolean).join(" · "), "", badgeTxt("▤", "#3FA9FF"))}</section>
    <section class="sec">${SET_PAGES.map(([id, t, col, ic]) => navRow("set", id, L10(t), setSub(id), "", badgeTxt(ic, col))).join("")}</section>
    <footer class="motto"><span>Sometimes I feel like giving up.</span><span>Then I remember I have a lot of people to prove wrong.</span></footer>`;
}
function viewSet(v) {
  const id = v.p, S = state.settings, sel = (sid, cur, opts) => `<select class="psel" id="${sid}" data-action="setting">${opts.map(([val, t]) => `<option value="${esc(val)}"${String(cur) === String(val) ? " selected" : ""}>${esc(t)}</option>`).join("")}</select>`;
  const head = `${backBar()}<h1 class="vtitle">${esc(setTitle(id))}</h1>`;
  const sy = syncCfg(), ai = aiCfg();
  if (id === "learn") return `${head}
    <section class="card"><h2>${T("Antwortmodus")}</h2>${modePills()}
      <p>${T("<b>Umdrehen</b>: Karte antippen, selbst einschätzen. <b>Tippen</b>: Antwort schreiben, PLM prüft – auch Akzente, Artikel und Tippfehler. <b>Auswahl</b>: eine von vier Antworten.")}</p></section>
    <section class="card"><h2>${T("Tagesziel")}</h2>
      <label class="field"><span class="label">${T("So lange lernst du am Tag")}</span>${sel("setGoal", goalMin(), GOALS.map((g) => [g, T("{0} Minuten", [g])]))}</label>
      <p>${T("Der Balken oben auf „Heute“ zeigt, wie weit du heute bist. Die Serie zählt jeden Tag, an dem du lernst.")}</p></section>
    <section class="card"><h2>${T("Wiederholungsplan")}</h2>
      <div class="mapgrid">
        <label class="field"><span class="label">${T("Ziel: so viel behalten")}</span>${sel("setRet", S.ret, [[0.8, T("80 % – weniger Wiederholungen")], [0.85, "85 %"], [0.9, T("90 % – empfohlen")], [0.95, T("95 % – mehr Wiederholungen")]])}</label>
        <label class="field"><span class="label">${T("Wiederholungen pro Tag max.")}</span>${sel("setMax", S.maxReviews, [[50, "50"], [100, "100"], [200, "200"], [500, "500"], [9999, T("unbegrenzt")]])}</label>
        <label class="field"><span class="label">${T("Neuer Lerntag beginnt um")}</span>${sel("setRoll", S.roll, [0, 1, 2, 3, 4, 5, 6].map((h) => [h, T("{0}:00 Uhr", [h])]))}</label>
      </div>
      <label class="check"><input type="checkbox" id="setIntro" data-action="setting"${S.intro ? " checked" : ""}><span>${T("Neue Karten erst kennenlernen, dann abfragen<br>")}<span class="hint">${T("Vorne steht nur das Wort – antippen dreht die Karte mit Übersetzung und Beispiel.")}</span></span></label>
      <p>${T("PLM plant jede Karte mit FSRS – dem Verfahren, das auch Anki nutzt: Was du gut kannst, kommt seltener, was du vergisst, früher wieder.")}</p>
      <p class="hint">${T("Wie viele neue Karten pro Tag dazukommen, stellst du je Sprache ein (Sprachen › Sprache).")}</p></section>`;
  if (id === "voice") return `${head}
    <section class="card" id="secVoice"><h2>${T("Aussprache")}</h2>
      <label class="check"><input type="checkbox" id="setSpeak" data-action="setting"${S.autoSpeak ? " checked" : ""}><span>${T("Fremdsprache automatisch vorlesen")}</span></label>
      <label class="field"><span class="label">${T("Sprechtempo")}</span>${sel("setRate", S.rate, [[0.8, T("Langsam")], [0.9, T("Etwas langsamer – empfohlen")], [1, T("Normal")], [1.1, T("Schnell")]])}</label>
      ${canSpeak() ? `<div class="btnrow wrap">${langs().map((L) => `<button class="btn" data-action="voice-test" data-arg="${esc(L.code)}">${ICON_SPEAK} ${esc(lname(L))}</button>`).join("")}</div>
      ${weakVoiceHint()}
      <p>${T("Die Stimme pro Sprache wählst du in den Spracheinstellungen. Bessere Stimmen lädst du auf dem iPhone unter <b>Einstellungen › Bedienungshilfen › Gesprochene Inhalte › Stimmen</b> (z. B. Italienisch „Alice“ oder „Federica“ in der Version „Erweitert“). Nichts zu hören? Lautstärke hoch, während PLM spricht.")}</p>
      <p>${T("Im <b>Stumm-Modus</b> schaltet das iPhone seine eigenen Stimmen stumm – das lässt sich von einer App aus nicht ändern. Die Online-Stimmen unten sind echte Aufnahmen und daher auch dann zu hören.")}</p>`
        : `<p>${T("Dieser Browser kann nicht vorlesen.")}</p>`}
      <p>${canListen() ? T("Mit dem Mikrofon-Knopf auf der Kartenrückseite sprichst du nach – PLM prüft per Spracherkennung, ob du verstanden wurdest.") : T("Nachsprechen mit Mikrofon wird in diesem Browser nicht unterstützt. Auf dem iPhone funktioniert es in Safari, wenn „Diktieren“ eingeschaltet ist (Einstellungen › Allgemein › Tastatur).")}</p></section>
    ${ttsCard()}`;
  if (id === "remind") {
    const badgeOk = !!navigator.setAppBadge;
    return `${head}
    <section class="card"><h2>${T("Erinnerung")}</h2>
      <p>${T("iPhone-Web-Apps können sich nicht selbst zu einer Uhrzeit melden. Am zuverlässigsten ist ein täglicher Kalender-Termin mit Hinweis – PLM erstellt ihn für dich.")}</p>
      <div class="two"><label class="field"><span class="label">${T("Täglich um")}</span><input type="time" id="setRemind" class="psel" style="background-image:none;padding-right:15px" value="${esc(S.remind)}"></label><div style="display:flex;align-items:end"><button class="btn primary" style="width:100%" data-action="ics">${T("Zum Kalender")}</button></div></div>
      ${badgeOk ? `<label class="check"><input type="checkbox" id="setBadge" data-action="setting"${S.badge ? " checked" : ""}><span>${T("Fällige Karten als Zahl am App-Symbol<br>")}<span class="hint">${T("Fragt einmal nach der Mitteilungs-Erlaubnis. Die Zahl aktualisiert sich, wenn du PLM öffnest oder schließt.")}</span></span></label>` : ""}</section>`;
  }
  if (id === "langs") return `${head}
    <section class="sec">${langs().map((L) => navRow("lang-settings", L.code, lname(L), T("{0} neue pro Tag · {1}", [L.newPerDay, plural(cardsOf(L.code).length, T("Karte"), T("Karten"))]), "", badgeTxt(lname(L).slice(0, 2), L.color))).join("")}
      <button class="row nobadge addrow" data-action="add-lang"><span class="main"><span class="t1">${T("+ Sprache")}</span><span class="t2">${T("Spanisch, Französisch, Portugiesisch …")}</span></span><span class="val"></span><span class="chev" aria-hidden="true">›</span></button></section>
    <p class="hint">${T("Pro Sprache: neue Karten pro Tag, Abfragerichtung, Reihenfolge, Zeitformen und Stimme.")}</p>`;
  if (id === "sync") return `${head}
    <section class="card" id="secSync"><h2>${T("iPhone ↔ iPad")}</h2>
      ${sy.token ? `<p>${T("Synchronisiert über dein GitHub-Konto{0}. {1}", [sy.login ? ` <b>${esc(sy.login)}</b>` : "", esc(syncStatusText())])}</p>
        <div class="btnrow"><button class="btn primary" data-action="sync-now">${T("Jetzt synchronisieren")}</button><button class="btn danger${state.armed === "sync-off" ? " armed" : ""}" data-action="sync-off">${state.armed === "sync-off" ? T("Wirklich trennen?") : T("Trennen")}</button></div>
        <p>${T("Auf dem anderen Gerät denselben Token eintragen – PLM findet die Daten automatisch. Karten, Fortschritt, Statistik und Einstellungen werden zusammengeführt.")}</p>`
      : `<p>${T("Damit iPhone und iPad dieselben Karten und denselben Lernstand haben, speichert PLM eine Kopie in einem privaten „Gist“ in deinem GitHub-Konto. Kostenlos, ohne Server dazwischen.")}</p>
        <ol class="steps"><li>${T("Auf github.com: <b>Settings › Developer settings › Personal access tokens › Tokens (classic) › Generate new token (classic)</b>")}</li><li>${T("Name „PLM“, Ablauf z. B. „No expiration“, nur den Haken bei <b>gist</b> setzen, erstellen.")}</li><li>${T("Token kopieren, hier einfügen – auf iPhone <i>und</i> iPad.")}</li></ol>
        <div class="field"><label class="label" for="syncToken">${T("GitHub-Token")}</label><input id="syncToken" class="psel" style="background-image:none" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="ghp_…"></div>
        <div class="btnrow"><button class="btn primary" data-action="sync-connect">${T("Verbinden")}</button></div>`}
      ${sy.error ? `<p class="neg">${esc(sy.error)}</p>` : ""}</section>`;
  if (id === "ai") return `${head}
    <section class="card" id="secAi"><h2>${T("KI-Assistent (optional)")}</h2>
      <p>${T("Mit einem eigenen Claude-API-Schlüssel wertet PLM Fotos und Kurs-PDFs schlau aus: Projekte und Themen, deutsche Übersetzungen, Beispielsätze, Verbtabellen und Lückensätze. Außerdem gibt die KI beim Sätzebauen Feedback. Ohne Schlüssel erkennt PLM Wortlisten und Tabellen direkt auf dem Gerät.")}</p>
      ${ai.key ? `<p>${T("Schlüssel: <b>{0}</b>", [esc(maskKey(ai.key))])}</p>
        <label class="field"><span class="label">${T("Modell")}</span>${sel("setAiModel", ai.model, AI_MODELS)}</label>
        <div class="btnrow"><button class="btn" data-action="ai-test">${T("Testen")}</button><button class="btn danger${state.armed === "ai-off" ? " armed" : ""}" data-action="ai-off">${state.armed === "ai-off" ? T("Wirklich entfernen?") : T("Schlüssel entfernen")}</button></div>`
      : `<ol class="steps"><li>${T("Auf <b>platform.claude.com</b> anmelden, unter <b>Billing</b> etwas Guthaben aufladen.")}</li><li>${T("Unter <b>API Keys</b> einen Schlüssel erstellen und hier einfügen.")}</li></ol>
        <div class="field"><label class="label" for="aiKey">${T("Claude-API-Schlüssel")}</label><input id="aiKey" class="psel" style="background-image:none" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="sk-ant-…"></div>
        <div class="btnrow"><button class="btn primary" data-action="ai-save">${T("Speichern")}</button></div>`}
      <p>${T("Kosten nach Verbrauch: ein Foto kostet meist unter 1 Cent, ein Kurs-PDF mit 10 Seiten einige Cent. Der Schlüssel bleibt nur auf diesem Gerät und wird nicht synchronisiert. Dein Material geht dafür direkt an Anthropic.")}</p></section>`;
  if (id === "data") return `${head}
    <section class="card"><h2>${T("Daten &amp; Backup")}</h2>
      <p>${T("Alles liegt auf diesem Gerät in PLM und läuft auch offline{0}. Wenn du PLM vom Home-Bildschirm löschst, sind die lokalen Daten weg – ein Backup in iCloud Drive schadet nie.", [sy.token ? ` ${T("– zusätzlich in deinem GitHub-Gist")}` : ""])}</p>
      <p>${T("Letztes Backup: {0} · {1} · {2} KB", [esc(lastBackupText()), plural(state.cards.length, T("Karte"), T("Karten")), num(storageKB())])}</p>
      <div class="btnrow wrap"><button class="btn primary" data-action="export-json">${T("Backup sichern")}</button><label class="btn filebtn">${T("Backup laden")}<input type="file" id="backupFile" accept=".json,application/json"></label><button class="btn" data-action="export-csv">${T("CSV exportieren")}</button></div></section>`;
  if (id === "app") return `${head}
    <section class="card"><h2>${UI === "en" ? "App language" : "App-Sprache"}</h2>
      <div class="seg" role="group" aria-label="${UI === "en" ? "App language" : "App-Sprache"}"><button type="button" data-action="ui-lang" data-arg="de" aria-pressed="${UI === "de"}">Deutsch</button><button type="button" data-action="ui-lang" data-arg="en" aria-pressed="${UI === "en"}">English</button></div>
      <p class="hint">${T("Menüs, Hinweise und Theorie. Deine Karten bleiben, wie sie sind.")}</p></section>
    <section class="card"><label class="field"><span class="label">${T("Wenn PLM öffnet")}</span>${sel("setOpen", openMode(), [["menu", T("Menü")], ["splash", T("Startbildschirm, dann Menü")], ["learn", T("Direkt lernen")]])}</label></section>
    <section class="card"><h2>${T("Zurücksetzen")}</h2><p>${T("Löscht alle Karten, Fortschritte und Statistiken auf diesem Gerät{0}.", [sy.token ? ` ${T("und im Gist")}` : ""])}</p>
      <div class="btnrow"><button class="btn danger${state.armed === "wipe" ? " armed" : ""}" data-action="wipe">${state.armed === "wipe" ? T("Wirklich alles löschen?") : T("Alles löschen")}</button></div></section>
    <p class="hint">${T("PLM {0} · Personal Language Management", [esc(window.PLM_VERSION || "")])}</p>`;
  return `${head}<p class="hint">${T("Nicht gefunden")}</p>`;
}
VIEWS.settings = viewSettings;
VIEWS.set = viewSet;
/* Languages whose best installed device voice is a "compact" one – these mumble and swallow sounds */
function weakVoiceHint() {
  if (!canSpeak() || !voices.length) return "";
  const weak = langs().filter((L) => L.tts && !cloudReady(L.code)).filter((L) => { const v = pickVoice(L.code); return v && voiceQual(v) === 0; });
  if (!weak.length) return "";
  return `<p class="warnline">${T("Für <b>{0}</b> ist nur eine einfache iPhone-Stimme installiert – die verschluckt eher mal Laute. Besser: unter <b>Einstellungen › Bedienungshilfen › Gesprochene Inhalte › Stimmen › {1}</b> eine Stimme mit „Erweitert“ oder „Premium“ laden (über WLAN), danach PLM neu öffnen.", [esc(weak.map((L) => lname(L)).join(", ")), esc(lname(weak[0]))])}</p>`;
}
function ttsCard() {
  const c = ttsCfg(), n = ttsVoiceList().length;
  const intro = `<section class="card" id="secTts"><h2>${T("Online-Stimmen (optional)")}</h2>
      <p>${T("Natürliche Stimmen von Muttersprachlern (Google) statt der iPhone-Stimme: Sie klingen deutlich besser, sprechen jedes Wort ganz aus und sind auch im <b>Stumm-Modus</b> über den Lautsprecher zu hören. Jedes Wort wird nur einmal geladen und bleibt auf dem Gerät – danach geht es auch offline.")}</p>`;
  const foot = `<p class="hint">${T("Der Schlüssel bleibt nur auf diesem Gerät und wird nicht synchronisiert. Zum Vorlesen gehen die Wörter an Google. Ohne Internet liest bei noch nie gehörten Wörtern die iPhone-Stimme.")}</p></section>`;
  if (!c.key) {
    return `${intro}
      <ol class="steps">
        <li>${T("Auf <b>console.cloud.google.com</b> mit deinem Google-Konto anmelden und oben ein neues Projekt anlegen (z. B. „PLM“).")}</li>
        <li>${T("Für das Projekt die <b>Abrechnung</b> aktivieren (Kreditkarte nötig). Jeden Monat ist mindestens 1 Mio. Zeichen gratis – das sind rund 50.000 Wörter und Sätze. Tipp: unter <i>Budgets und Benachrichtigungen</i> ein Budget von 1 € mit Warnung anlegen.")}</li>
        <li>${T("Unter <b>APIs und Dienste › Bibliothek</b> nach „Cloud Text-to-Speech API“ suchen und <b>Aktivieren</b> tippen.")}</li>
        <li>${T("Unter <b>APIs und Dienste › Anmeldedaten</b> auf <i>Anmeldedaten erstellen › API-Schlüssel</i> tippen. Den Schlüssel einschränken: bei <i>Websites</i> {0} eintragen, bei <i>API-Einschränkungen</i> nur die „Cloud Text-to-Speech API“.", [`<code>${esc(location.origin)}/*</code>`])}</li>
        <li>${T("Den Schlüssel (beginnt mit AIza…) kopieren und hier einfügen.")}</li>
      </ol>
      <div class="field"><label class="label" for="ttsKey">${T("Google-API-Schlüssel")}</label><input id="ttsKey" class="psel" style="background-image:none" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="AIza…"></div>
      <div class="btnrow"><button class="btn primary" data-action="tts-save">${T("Speichern und testen")}</button></div>
      ${foot}`;
  }
  setTimeout(() => { ttsClipCount().then((k) => { const el = $("ttsClips"); if (el) el.textContent = T("{0} Aufnahmen auf dem Gerät", [num(k)]); }); }, 0);
  return `${intro}
      <p>${T("Schlüssel: <b>{0}</b>", [esc(maskKey(c.key))])}</p>
      <label class="check"><input type="checkbox" id="setTts" data-action="setting"${c.on ? " checked" : ""}><span>${T("Online-Stimmen verwenden")}</span></label>
      ${c.err ? `<p class="neg">${esc(c.err)}</p>` : n ? "" : `<p class="neg">${T("Noch nicht verbunden – bitte „Testen“ tippen.")}</p>`}
      <p class="hint">${n ? `${T("{0} Stimmen", [num(n)])} · ` : ""}${T("diesen Monat {0} Zeichen geladen (gratis: mindestens 1 Mio.)", [num(ttsCharsThisMonth())])} · <span id="ttsClips"></span></p>
      <div class="btnrow"><button class="btn" data-action="tts-test">${T("Testen")}</button><button class="btn${state.armed === "tts-clear" ? " armed" : ""}" data-action="tts-clear">${state.armed === "tts-clear" ? T("Wirklich löschen?") : T("Aufnahmen löschen")}</button><button class="btn danger${state.armed === "tts-off" ? " armed" : ""}" data-action="tts-off">${state.armed === "tts-off" ? T("Wirklich entfernen?") : T("Schlüssel entfernen")}</button></div>
      <p class="hint">${T("Welche Stimme pro Sprache spricht, stellst du in den Spracheinstellungen ein (Sprache › ⚙︎ › Online-Stimme).")}</p>
      ${foot}`;
}
function ttsTest() {
  const c = ttsCfg();
  if (!c.key) return;
  toast(T("Verbinde mit Google …"));
  ttsLoadVoices(c.key).then((list) => {
    ttsWarned = false; render();
    const code = (langs()[0] || {}).code || "it";
    toast(T("Online-Stimmen bereit – {0} Stimmen", [num(list.length)]));
    if (cloudReady(code)) speak(VOICE_SAMPLE[code] ? VOICE_SAMPLE[code][1] : langName(code), code);
  }).catch((e) => { ttsSave({ err: e.message }); render(); toast(e.message, 7000); });
}
