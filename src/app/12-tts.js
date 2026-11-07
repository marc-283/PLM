/* ================= Online voices (Google Cloud Text-to-Speech) =================
   Real audio files instead of the iPhone's speech engine. They play through an <audio> element, so they are heard
   even in silent mode (iOS mutes speechSynthesis there, but not media), they sound natural (neural voices of native
   speakers, one per country) and every clip is kept on the device: once heard, a word plays offline and costs nothing
   again. The key stays on this device and is never synced. Without key, offline or on any error: the device voice. */
const TTS_KEY = "plm.tts.v1", TTS_VOICES = "plm.ttsVoices.v1", TTS_CACHE = "voice-clips-v1";
const TTS_API = "https://texttospeech.googleapis.com/v1/";
function ttsCfg() {
  const v = readJSON(TTS_KEY, {});
  return { key: typeof v.key === "string" ? v.key : "", on: v.on !== false, month: typeof v.month === "string" ? v.month : "", chars: Number(v.chars) || 0, err: typeof v.err === "string" ? v.err : "", noRate: !!v.noRate };
}
function ttsSave(patch) { lsSet(TTS_KEY, JSON.stringify({ ...ttsCfg(), ...patch })); }
const ttsOn = () => { const c = ttsCfg(); return !!(c.key && c.on); };
const thisMonth = () => new Date().toISOString().slice(0, 7);
const ttsCharsThisMonth = () => { const c = ttsCfg(); return c.month === thisMonth() ? c.chars : 0; };
function ttsCount(n) { const c = ttsCfg(), m = thisMonth(); ttsSave({ month: m, chars: (c.month === m ? c.chars : 0) + n }); }

/* Voice list: compact copy in localStorage – { n: name, l: language code, g: F/M } */
let ttsList = null;
function ttsVoiceList() { if (!ttsList) { const v = readJSON(TTS_VOICES, []); ttsList = Array.isArray(v) ? v.filter((x) => x && x.n && x.l) : []; } return ttsList; }
/* Google names some languages differently: Mandarin cmn-CN, Norwegian nb-NO, Arabic ar-XA, Hebrew he/iw */
const G_ALIAS = { zh: ["cmn", "zh"], cmn: ["cmn", "zh"], no: ["nb", "no"], nb: ["nb", "no"], he: ["he", "iw"], iw: ["he", "iw"], id: ["id", "in"], in: ["id", "in"], fil: ["fil", "tl"], tl: ["fil", "tl"] };
const G_SAME = { "zh-cn": "cmn-cn", "ar": "ar-xa", "ar-sa": "ar-xa", "ar-eg": "ar-xa", "no-no": "nb-no", "nb-no": "nb-no", "he-il": "he-il", "iw-il": "he-il" };
/* Neural2 and WaveNet: clear, every word fully pronounced, speed adjustable. Chirp 3 HD sounds even more natural.
   Studio voices are expensive, so they are never chosen automatically. */
function gScore(v, tag) {
  let s = 0;
  const vl = v.l.toLowerCase(), t = tag.toLowerCase(), n = v.n;
  if (vl === t || vl === G_SAME[t]) s += 20;
  if (/Neural2/.test(n)) s += 8; else if (/Wavenet/i.test(n)) s += 7; else if (/Chirp3-HD/.test(n)) s += 6; else if (/Chirp-HD|Polyglot/.test(n)) s += 4; else if (/Standard/.test(n)) s += 2;
  if (/Studio|News|Casual/.test(n)) s -= 10;
  return s;
}
function gVoices(code) {
  const list = ttsVoiceList();
  if (!list.length) return [];
  const tag = langTag(code).replace("_", "-"), base = tag.split("-")[0].toLowerCase(), ok = G_ALIAS[base] || [base];
  return list.filter((v) => ok.includes(v.l.split("-")[0].toLowerCase())).sort((a, b) => gScore(b, tag) - gScore(a, tag) || (a.n < b.n ? -1 : a.n > b.n ? 1 : 0));
}
function ttsVoice(code) {
  const L = langOf(code), list = gVoices(code);
  if (L && L.cvoice) { const v = list.find((x) => x.n === L.cvoice); if (v) return v; }
  return list[0] || null;
}
const cloudReady = (code) => ttsOn() && !!ttsVoice(code);
const gVoiceLabel = (v) => `${v.n.startsWith(v.l + "-") ? v.n.slice(v.l.length + 1) : v.n} · ${v.g === "F" ? T("weiblich") : v.g === "M" ? T("männlich") : ""} · ${v.l}`.replace(" ·  · ", " · ");

/* Readable error messages for the typical setup mistakes */
function gErrMsg(j, status) {
  const e = (j && j.error) || {}, msg = String(e.message || ""), reasons = (e.details || []).map((d) => d && d.reason).filter(Boolean).join(" ");
  const all = `${reasons} ${msg}`;
  if (/API_KEY_INVALID|API key not valid/i.test(all)) return T("Der Schlüssel ist ungültig – bitte nochmal komplett kopieren.");
  if (/REFERRER|referer/i.test(all)) return T("Der Schlüssel ist für diese Adresse gesperrt – bei „Websites“ {0}/* eintragen.", [location.origin]);
  if (/BILLING/i.test(all)) return T("Im Google-Projekt ist die Abrechnung nicht aktiviert (nötig, auch wenn es gratis bleibt).");
  if (/SERVICE_DISABLED|has not been used|is disabled/i.test(all)) return T("Die „Cloud Text-to-Speech API“ ist im Projekt noch nicht aktiviert – oder erst seit ein paar Minuten.");
  if (/API_KEY_SERVICE_BLOCKED|blocked/i.test(all)) return T("Der Schlüssel darf die Text-to-Speech-API nicht nutzen – bei „API-Einschränkungen“ freigeben.");
  if (status === 429 || /RESOURCE_EXHAUSTED|quota/i.test(all)) return T("Das Kontingent ist für heute erschöpft.");
  return msg ? `${T("Google meldet:")} ${msg.slice(0, 160)}` : T("Fehler {0} von Google", [status]);
}
const ttsError = (msg, kind) => Object.assign(new Error(msg), { kind });
async function gFetch(path, key, body) {
  let r;
  try {
    r = await fetch(`${TTS_API}${path}${path.includes("?") ? "&" : "?"}key=${encodeURIComponent(key)}`, body ? { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) } : {});
  } catch { throw ttsError(T("Keine Verbindung zu Google"), "net"); }
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw ttsError(gErrMsg(j, r.status), r.status >= 500 ? "net" : "setup");
  return j;
}
async function ttsLoadVoices(key) {
  const j = await gFetch("voices", key || ttsCfg().key);
  const list = (j.voices || []).map((v) => ({ n: v.name, l: (v.languageCodes || [])[0] || "", g: String(v.ssmlGender || "").charAt(0) })).filter((v) => v.n && v.l && /^[A-Z]$|^$/.test(v.g));
  if (!list.length) throw ttsError(T("Google hat keine Stimmen geliefert."), "setup");
  lsSet(TTS_VOICES, JSON.stringify(list)); ttsList = null;
  ttsSave({ err: "" });
  return list;
}

/* Clip store: memory for this session, Cache Storage across sessions (offline) */
const clipMem = new Map();
const clipReq = (id) => new Request(`${location.origin}/__voice/${encodeURIComponent(id)}`);
async function clipCache() { try { return window.caches ? await caches.open(TTS_CACHE) : null; } catch { return null; } }
function b64Blob(b64, type) { const bin = atob(b64), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return new Blob([u], { type }); }
async function ttsClip(text, code, slow) {
  const v = ttsVoice(code);
  if (!v) throw ttsError("no voice", "voice");
  const cfg = ttsCfg(), base = state.settings.rate || 0.9, want = slow ? 0.7 : base;
  const fixed = cfg.noRate && /Chirp/.test(v.n); // voice ignores speakingRate → slow down while playing
  const rate = fixed ? 1 : want, id = `${v.n}|${rate}|${text}`, play = fixed ? want : 1;
  if (clipMem.has(id)) return { url: clipMem.get(id), rate: play };
  const cache = await clipCache();
  const hit = cache && (await cache.match(clipReq(id)).catch(() => null));
  let blob = hit ? await hit.blob() : null;
  if (!blob) {
    if (navigator.onLine === false) throw ttsError("offline", "net");
    const body = { input: { text }, voice: { languageCode: v.l, name: v.n }, audioConfig: { audioEncoding: "MP3", speakingRate: rate } };
    let j;
    try { j = await gFetch("text:synthesize", cfg.key, body); }
    catch (e) {
      /* Some newer voices may not support the speed setting: remember it and slow the clip down while playing */
      if (e.kind === "setup" && /speaking.?rate|speakingRate/i.test(e.message) && rate !== 1) { ttsSave({ noRate: true }); return ttsClip(text, code, slow); }
      throw e;
    }
    if (!j.audioContent) throw ttsError(T("Google hat keine Aufnahme geliefert."), "net");
    blob = b64Blob(j.audioContent, "audio/mpeg");
    ttsCount(text.length);
    if (cache) cache.put(clipReq(id), new Response(blob, { headers: { "Content-Type": "audio/mpeg" } })).catch(() => { /* storage full */ });
  }
  const url = URL.createObjectURL(blob);
  clipMem.set(id, url);
  if (clipMem.size > 300) { const [k, u] = clipMem.entries().next().value; clipMem.delete(k); URL.revokeObjectURL(u); }
  return { url, rate: play };
}
async function ttsClearClips() { for (const u of clipMem.values()) URL.revokeObjectURL(u); clipMem.clear(); try { if (window.caches) await caches.delete(TTS_CACHE); } catch { /* ignore */ } }
async function ttsClipCount() { const c = await clipCache(); if (!c) return 0; try { return (await c.keys()).length; } catch { return 0; } }

/* One <audio> element for all clips. iOS only lets it play after it was started inside a tap – vpUnlock() plays a
   tiny silent sound right in the tap; afterwards clips that arrive from the network may start on their own. */
const VP = { el: null, unlocked: false, tok: 0, cur: null };
function silentWav() { // 0.25 s of 8-bit silence, 8 kHz mono
  const n = 2000, b = new Uint8Array(44 + n), v = new DataView(b.buffer), str = (o, x) => { for (let i = 0; i < x.length; i++) b[o + i] = x.charCodeAt(i); };
  str(0, "RIFF"); v.setUint32(4, 36 + n, true); str(8, "WAVEfmt "); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, 8000, true); v.setUint32(28, 8000, true); v.setUint16(32, 1, true); v.setUint16(34, 8, true); str(36, "data"); v.setUint32(40, n, true);
  b.fill(128, 44);
  let bin = ""; for (const x of b) bin += String.fromCharCode(x);
  return "data:audio/wav;base64," + btoa(bin);
}
function vpEl() {
  if (!VP.el) {
    const a = document.createElement("audio");
    a.preload = "auto"; a.setAttribute("playsinline", ""); a.setAttribute("x-webkit-airplay", "deny");
    try { a.disableRemotePlayback = true; } catch { /* old browser */ }
    VP.el = a;
  }
  return VP.el;
}
function vpUnlock() {
  if (VP.unlocked) return;
  const a = vpEl();
  try {
    a.src = silentWav(); VP.unlocked = true;
    const p = a.play();
    if (p && p.catch) p.catch((e) => { if (e && e.name === "NotAllowedError") VP.unlocked = false; });
  } catch { VP.unlocked = false; }
}
function vpStop() {
  VP.tok++;
  try { if (VP.el && !VP.el.paused) VP.el.pause(); } catch { /* ignore */ }
  const d = VP.cur; VP.cur = null; if (d) d();
}
let ttsWarned = false;
/* Online voice for this text; falls back to the device voice. Returns at once – the clip may still be loading. */
function cloudSpeak(clean, code, o) {
  vpUnlock(); // still inside the tap
  try { clearTimeout(speakWatch); if (window.speechSynthesis && (speechSynthesis.speaking || speechSynthesis.pending)) speechSynthesis.cancel(); } catch { /* ignore */ }
  const prev = VP.cur; VP.cur = null; if (prev) prev(); // the clip that was playing ends here
  const tok = ++VP.tok;
  speakBtn = o.btn || null; speakMark(o.btn, true);
  let ended = false;
  const done = () => { if (ended) return; ended = true; if (VP.cur === done) VP.cur = null; speakMark(o.btn, false); if (speakBtn === o.btn) speakBtn = null; if (o.onend) o.onend(); };
  VP.cur = done;
  const fallback = (e) => {
    if (ended || tok !== VP.tok) return;
    ended = true; VP.cur = null; speakMark(o.btn, false);
    if (e && e.kind === "setup") { ttsSave({ err: e.message }); if (!ttsWarned && !o.quiet) { ttsWarned = true; toast(`${T("Online-Stimme:")} ${e.message}`, 6000); } }
    if (!deviceSpeak(clean, code, o) && o.onend) o.onend();
  };
  ttsClip(clean, code, !!o.slow).then((clip) => {
    if (ended || tok !== VP.tok) return;
    const a = vpEl();
    a.onended = () => { if (tok === VP.tok) done(); };
    a.onerror = () => { if (tok === VP.tok && a.src === clip.url) fallback(ttsError("play", "play")); };
    a.src = clip.url;
    try { a.preservesPitch = true; a.webkitPreservesPitch = true; } catch { /* ignore */ }
    a.defaultPlaybackRate = clip.rate; a.playbackRate = clip.rate;
    const p = a.play();
    if (p && p.catch) p.catch((e) => { if (e && e.name === "AbortError") return; fallback(e); });
  }).catch(fallback);
}
