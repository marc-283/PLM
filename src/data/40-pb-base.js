/* ================= Phrasebook ("Sprachführer") data =================
   pb(code, BCP-47 tag, flag, German name, English name, own name, intro, basics, insults)
   intro / basics / love: "key|text|pronunciation|note" – the meaning comes from PB_KEYS (same for every language).
   insults: "text|pronunciation|German|English|level 1–3|note".
   Pronunciation: Latin-script languages get a respelling for German speakers, the stressed syllable in CAPITALS;
   other scripts get their usual romanization (pinyin, Hepburn, Revised Romanization …). */
const PHRASEBOOK = [], PB_TAGS = {};
const PB_CATS = [
  { id: "intro", icon: "👋", t: TB("Vorstellen", "Introduce"), d: TB("Begrüßen, Namen sagen, woher du kommst – das erste Gespräch.", "Say hello, your name, where you're from – the first conversation.") },
  { id: "basics", icon: "🧭", t: TB("Basics", "Basics"), d: TB("Danke, bitte, Toilette, Bier – was man auf Reisen immer braucht.", "Thanks, please, toilet, beer – what you always need when travelling.") },
  { id: "love", icon: "❤️", t: TB("Liebe", "Love"), d: TB("Ich liebe dich, ich vermisse dich, du bist wunderschön – für Verliebte und zum Flirten.", "I love you, I miss you, you're beautiful – for lovers and for flirting.") },
  { id: "insults", icon: "🤬", t: TB("Beleidigungen", "Insults"), d: TB("Flüche und Beleidigungen von harmlos bis derb – zum Verstehen und Mitlachen. Benutzen auf eigene Gefahr 😉", "Swear words and insults from mild to strong – to understand and laugh along. Use at your own risk 😉") }
];
const PB_KEYS = {
  intro: [["hello", TB("Hallo!", "Hello!")], ["name", TB("Ich heiße …", "My name is …")], ["askname", TB("Wie heißt du?", "What's your name?")], ["from", TB("Ich komme aus Deutschland.", "I'm from Germany.")],
    ["nice", TB("Freut mich!", "Nice to meet you!")], ["how", TB("Wie geht's?", "How are you?")], ["fine", TB("Gut, danke. Und dir?", "Fine, thanks. And you?")], ["learn", TB("Ich lerne gerade {L}.", "I'm learning {L}.")], ["bye", TB("Tschüss! Bis bald!", "Bye! See you!")]],
  basics: [["thanks", TB("Danke!", "Thank you!")], ["please", TB("Bitte.", "Please.")], ["sorry", TB("Entschuldigung!", "Sorry! / Excuse me!")], ["yes", TB("Ja", "Yes")], ["no", TB("Nein", "No")],
    ["nounder", TB("Ich verstehe nicht.", "I don't understand.")], ["english", TB("Sprichst du Englisch?", "Do you speak English?")], ["toilet", TB("Wo ist die Toilette?", "Where's the toilet?")],
    ["price", TB("Wie viel kostet das?", "How much is it?")], ["beer", TB("Ein Bier, bitte!", "A beer, please!")], ["cheers", TB("Prost!", "Cheers!")], ["help", TB("Hilfe!", "Help!")]],
  love: [["love", TB("Ich liebe dich.", "I love you.")], ["like", TB("Ich mag dich.", "I like you.")], ["miss", TB("Ich vermisse dich.", "I miss you.")], ["beautiful", TB("Du bist wunderschön!", "You're beautiful!")],
    ["darling", TB("Mein Schatz", "My darling")], ["drink", TB("Gehen wir etwas trinken?", "Shall we go for a drink?")]]
};
function pb(code, tag, flag, de, en, native, intro, basics, insults) { PHRASEBOOK.push({ code, tag, flag, de, en, native, intro, basics, insults, love: "" }); PB_TAGS[code] = tag; }
/* more lines for one section of a language that is already registered: pbAdd("it", "love", `…`) */
function pbAdd(code, cat, lines) { const p = PHRASEBOOK.find((x) => x.code === code); if (p) p[cat] = (p[cat] ? p[cat] + "\n" : "") + lines.trim(); }
/* speech tags of every phrasebook language, before the phrasebook file is loaded */
for (const [code, tag] of PB_INDEX) PB_TAGS[code] = tag;
