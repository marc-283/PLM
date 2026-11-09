/* ================= Data files: loaded when needed =================
   Starter packs, grammar chapters, verb dictionaries and the phrasebook are separate files (data/<name>.js, built from
   src/pack/). Like the course files they are loaded on demand and cached by the service worker at install, so
   everything works offline. Pages that need them show „wird geladen …“ for a moment. */
const PACK_DONE = {}, packLoading = {};
window.packReg = (name) => { PACK_DONE[name] = true; }; // data files run as separate scripts
const hasData = (names) => names.every((n) => PACK_DONE[n] || !PLM_PACKS.includes(n));
function loadData(name) {
  if (PACK_DONE[name] || !PLM_PACKS.includes(name)) return Promise.resolve(true);
  if (packLoading[name]) return packLoading[name];
  return (packLoading[name] = new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = `data/${name}.js?v=${encodeURIComponent(window.PLM_VERSION || "")}`;
    s.onload = () => { if (!PACK_DONE[name]) delete packLoading[name]; resolve(!!PACK_DONE[name]); };
    s.onerror = () => { delete packLoading[name]; resolve(false); };
    document.head.appendChild(s);
  }));
}
const ensureData = (names) => Promise.all(names.map(loadData)).then((r) => r.every(Boolean));
/* true = everything is there; false = loading started, the page renders again once it has arrived */
function needData(names) {
  if (hasData(names)) return true;
  ensureData(names).then((ok) => {
    if (!ok) { toast(T("Daten konnten nicht geladen werden – bist du online?")); return; }
    if (!state.study && !state.quiz && !state.talk) render();
  });
  return false;
}
/* what the verb engine of a language needs: its dictionary (+ the starter verbs for Italian and English) */
const verbData = (code) => (CONJ_LANGS.includes(code) ? ["lex-" + code].concat(code === "it" || code === "en" ? ["starter-" + code] : []) : []);
const theoryData = (code) => ["theory-" + code].concat(verbData(code));
const starterData = (code) => ["starter-" + code].concat(verbData(code));
const loadingHTML = (title) => `${backBar()}${title ? `<h1 class="vtitle">${esc(title)}</h1>` : ""}<p class="hint loading">${T("wird geladen …")}</p>`;
/* after the start: fetch the verb dictionaries of your languages in the background, so the card editor, drills and
   exercises have them right away */
function preloadData() {
  const go = () => ensureData([...new Set(langs().flatMap((L) => verbData(L.code)))]);
  (window.requestIdleCallback || ((fn) => setTimeout(fn, 400)))(go);
}
