/* ================= Data that stays in index.html =================
   The big data – starter packs, grammar chapters, verb dictionaries and the phrasebook – lives in src/pack/<name>/
   and is built into data/<name>.js. Those files are loaded when needed (see src/app/11-packs.js); they fill the
   containers below. PLM_PACKS, STARTER_INDEX and PB_INDEX are written by build.py. */
const STARTER = { it: [], en: [], es: [], fr: [], pt: [], nl: [], sv: [] };
const THEORY = { it: [], en: [] };
const VERBS = {};
const TB = (de, en) => ({ de, en });
/* imperative of irregular verbs (tu, Lei, noi, voi, Loro) */
const IT_IMP_IRR = {
  essere: "sii, sia, siamo, siate, siano", avere: "abbi, abbia, abbiamo, abbiate, abbiano", andare: "va' / vai, vada, andiamo, andate, vadano",
  fare: "fa' / fai, faccia, facciamo, fate, facciano", stare: "sta' / stai, stia, stiamo, state, stiano", dare: "da' / dai, dia, diamo, date, diano",
  dire: "di', dica, diciamo, dite, dicano", venire: "vieni, venga, veniamo, venite, vengano", uscire: "esci, esca, usciamo, uscite, escano",
  bere: "bevi, beva, beviamo, bevete, bevano", rimanere: "rimani, rimanga, rimaniamo, rimanete, rimangano", tenere: "tieni, tenga, teniamo, tenete, tengano",
  sapere: "sappi, sappia, sappiamo, sappiate, sappiano", scegliere: "scegli, scelga, scegliamo, scegliete, scelgano", sedersi: "siediti, si sieda, sediamoci, sedetevi, si siedano"
};
const IT_REG_VERBS = ["parlare", "abitare", "lavorare", "studiare", "mangiare", "cercare", "pagare", "comprare", "ascoltare", "aspettare", "prendere", "leggere", "scrivere", "vedere", "vivere", "credere", "dormire", "partire", "sentire", "aprire", "capire", "finire", "preferire", "pulire"];
const IT_ISC = new Set(["capire", "finire", "preferire", "pulire", "spedire", "costruire"]);
