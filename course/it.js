/* PLM course: it (generated from src/course/it/ by build.py) */
(() => {
const C = { levels: ["A1", "A2", "B1", "B2"].map((id) => ({ id, lessons: [] })) };
const lesson = (lv, o) => C.levels.find((l) => l.id === lv).lessons.push(o);
/* Italiano A1 */
lesson("A1", { id: "it-a1-01", t: TB("Ciao! – Begrüßen und vorstellen", "Ciao! – Greetings and introductions"),
  goal: TB("Du kannst Leute begrüßen, dich vorstellen, nach dem Namen fragen und dich verabschieden.", "You can greet people, introduce yourself, ask for someone's name and say goodbye."),
  words: `ciao|hallo; tschüss|hi; bye|ph|Ciao, Marco!|Hallo, Marco!|Hi, Marco!
buongiorno|guten Morgen; guten Tag|good morning|ph|Buongiorno, signora Rossi!|Guten Morgen, Frau Rossi!|Good morning, Mrs Rossi!
buonasera|guten Abend|good evening|ph|Buonasera a tutti!|Guten Abend allerseits!|Good evening, everyone!
buonanotte|gute Nacht|good night|ph
arrivederci|auf Wiedersehen|goodbye|ph|Arrivederci e grazie!|Auf Wiedersehen und danke!|Goodbye and thank you!
a presto|bis bald|see you soon|ph
a dopo|bis später|see you later|ph
piacere|freut mich|nice to meet you|ph|Piacere, sono Luca.|Freut mich, ich bin Luca.|Nice to meet you, I'm Luca.
grazie|danke|thank you|ph
prego|bitte (gern geschehen)|you're welcome|ph
per favore|bitte (Bitte um etwas)|please|ph
scusa|Entschuldigung (du)|sorry; excuse me (informal)|ph
il nome|der Name|the name|n|Qual è il tuo nome?|Wie ist dein Name?|What's your name?
il cognome|der Nachname|the surname|n
il signore|der Herr|the gentleman; Mr|n
la signora|die Frau; die Dame|the lady; Mrs|n
l'amico|der Freund|the friend (m)|n|Questo è il mio amico Paolo.|Das ist mein Freund Paolo.|This is my friend Paolo.
l'amica|die Freundin|the friend (f)|n
bene|gut (Adverb)|well|adv|Sto bene, grazie.|Mir geht's gut, danke.|I'm fine, thanks.
male|schlecht|badly|adv
così così|so lala|so-so|ph
anche|auch|also; too|adv|Anch'io sono di Roma.|Ich bin auch aus Rom.|I'm from Rome too.`,
  say: `Come ti chiami?|Wie heißt du?|What's your name?
Mi chiamo Luca.|Ich heiße Luca.|My name is Luca.
Come si chiama?|Wie heißen Sie?|What's your name? (formal)
Come stai?|Wie geht es dir?|How are you?
Come sta?|Wie geht es Ihnen?|How are you? (formal)
Sto bene, grazie. E tu?|Mir geht's gut, danke. Und dir?|I'm fine, thanks. And you?
Piacere di conoscerti!|Schön, dich kennenzulernen!|Nice to meet you!
Ci vediamo domani!|Wir sehen uns morgen!|See you tomorrow!`,
  gram: [
    ["h", TB("Das Verb <i>essere</i> (sein) und <i>chiamarsi</i> (heißen)", "The verbs <i>essere</i> (to be) and <i>chiamarsi</i> (to be called)")],
    ["p", TB("Im Italienischen fällt das Personalpronomen meistens weg – die Verbform zeigt schon, wer gemeint ist: <b>Sono Luca</b> = Ich bin Luca.", "Italian usually drops the subject pronoun – the verb form already shows who is meant: <b>Sono Luca</b> = I'm Luca.")],
    ["conj", { verbs: ["essere", "chiamarsi"], tenses: ["Presente"] }],
    ["h", TB("Du oder Sie?", "Informal or formal?")],
    ["p", TB("<b>tu</b> (du) für Freunde, Familie, junge Leute. <b>Lei</b> (Sie) für Fremde und im Beruf – mit der Verbform der 3. Person: <b>Come sta?</b> / <b>Come si chiama?</b>", "<b>tu</b> for friends, family and young people. <b>Lei</b> (formal you) for strangers and at work – with the 3rd person verb: <b>Come sta?</b> / <b>Come si chiama?</b>")],
    ["tip", TB("<b>Ciao</b> heißt Hallo <i>und</i> Tschüss – aber nur unter Leuten, die sich duzen.", "<b>Ciao</b> means both hello <i>and</i> bye – but only between people who use <i>tu</i>.")]
  ],
  th: "pron",
  drill: [
    ["Io ___ Marco.", ["sono", "sei", "è"], 0],
    ["Tu ___ Giulia?", ["sono", "sei", "siamo"], 1],
    ["Come ti ___?", ["chiami", "chiamo", "chiama"], 0],
    ["Come ___ chiama, signora?", ["si", "ti", "mi"], 0, TB("Höflich (Lei) → 3. Person: si chiama.", "Formal (Lei) → 3rd person: si chiama.")],
    ["Noi ___ di Milano.", ["siamo", "sono", "siete"], 0],
    ["Lui ___ Paolo.", ["è", "e", "ha"], 0, TB("<i>è</i> mit Akzent = ist; <i>e</i> ohne Akzent = und.", "<i>è</i> with an accent = is; <i>e</i> without = and.")],
    ["Mi ___ Anna. (chiamarsi)", "chiamo"]
  ],
  talk: { t: TB("Auf einer Party", "At a party"), scene: TB("Du lernst auf einer Party in Bologna Giulia kennen.", "You meet Giulia at a party in Bologna."), who: "Giulia", slots: { name: "Luca" }, lines: `a|Ciao! Io sono Giulia. E tu, come ti chiami?|Hallo! Ich bin Giulia. Und du, wie heißt du?|Hi! I'm Giulia. And you, what's your name?
me|Ciao Giulia! Mi chiamo {name}.|Hallo Giulia! Ich heiße …|Hi Giulia! My name is …|Ciao! Sono {name}.; Io mi chiamo {name}.; Ciao Giulia, sono {name}.
a|Piacere! Come stai?|Freut mich! Wie geht's dir?|Nice to meet you! How are you?
me|Piacere! Sto bene, grazie. E tu?|Freut mich! Mir geht's gut, danke. Und dir?|Nice to meet you! I'm fine, thanks. And you?|Bene, grazie. E tu?; Piacere, bene grazie, e tu?
a|Anch'io sto bene. Sei un amico di Marco?|Mir geht's auch gut. Bist du ein Freund von Marco?|I'm fine too. Are you a friend of Marco's?
me|Sì, sono un amico di Marco.|Ja, ich bin ein Freund von Marco.|Yes, I'm a friend of Marco's.|Sì, sono un'amica di Marco.; Sì, sono amico di Marco.
a|Che bello! Allora, a dopo!|Wie schön! Also, bis später!|How nice! So, see you later!
me|A dopo, Giulia!|Bis später, Giulia!|See you later, Giulia!|Ciao, a dopo!; A presto!` }
});

lesson("A1", { id: "it-a1-02", t: TB("Di dove sei? – Länder und Sprachen", "Di dove sei? – Countries and languages"),
  goal: TB("Du kannst sagen, woher du kommst, wo du wohnst und welche Sprachen du sprichst.", "You can say where you are from, where you live and which languages you speak."),
  words: `la Germania|Deutschland|Germany|n|Abito in Germania.|Ich wohne in Deutschland.|I live in Germany.
l'Italia|Italien|Italy|n
l'Austria|Österreich|Austria|n
la Svizzera|die Schweiz|Switzerland|n
la Spagna|Spanien|Spain|n
la Francia|Frankreich|France|n
l'Inghilterra|England|England|n
gli Stati Uniti|die USA|the United States|n
tedesco/a|deutsch; Deutsche(r)|German|adj|Sono tedesco, di Monaco.|Ich bin Deutscher, aus München.|I'm German, from Munich.
italiano/a|italienisch; Italiener(in)|Italian|adj
inglese|englisch; Engländer(in)|English|adj
francese|französisch; Franzose/Französin|French|adj
spagnolo/a|spanisch; Spanier(in)|Spanish|adj
svizzero/a|schweizerisch; Schweizer(in)|Swiss|adj
austriaco/a|österreichisch; Österreicher(in)|Austrian|adj
la lingua|die Sprache|the language|n|Parlo tre lingue.|Ich spreche drei Sprachen.|I speak three languages.
la città|die Stadt|the city; the town|n
il paese|das Land; das Dorf|the country; the village|n
abitare|wohnen|to live (somewhere)|v|Dove abiti?|Wo wohnst du?|Where do you live?
parlare|sprechen|to speak|v
un po'|ein bisschen|a little|adv|Parlo un po' di italiano.|Ich spreche ein bisschen Italienisch.|I speak a little Italian.
benissimo|sehr gut|very well|adv
studiare|lernen; studieren|to study|v`,
  say: `Di dove sei?|Woher kommst du?|Where are you from?
Sono di Berlino.|Ich bin aus Berlin.|I'm from Berlin.
Sono tedesco, ma abito a Bologna.|Ich bin Deutscher, wohne aber in Bologna.|I'm German, but I live in Bologna.
Dove abiti?|Wo wohnst du?|Where do you live?
Abito in Germania, a Monaco.|Ich wohne in Deutschland, in München.|I live in Germany, in Munich.
Che lingue parli?|Welche Sprachen sprichst du?|Which languages do you speak?
Parli inglese?|Sprichst du Englisch?|Do you speak English?
Studio italiano da sei mesi.|Ich lerne seit sechs Monaten Italienisch.|I've been learning Italian for six months.`,
  gram: [
    ["h", TB("<i>di</i>, <i>a</i> und <i>in</i>", "<i>di</i>, <i>a</i> and <i>in</i>")],
    ["table", { head: [TB("wofür", "use"), TB("Präposition", "preposition"), TB("Beispiel", "example")], rows: [
      [TB("Herkunft (Stadt)", "origin (city)"), "di", "Sono <b>di</b> Roma."],
      [TB("Stadt", "city"), "a", "Abito <b>a</b> Milano."],
      [TB("Land, Region", "country, region"), "in", "Abito <b>in</b> Germania."]], say: 2 }],
    ["h", TB("Nationalitäten: -o/-a oder -e", "Nationalities: -o/-a or -e")],
    ["p", TB("Adjektive auf <b>-o</b> haben eine weibliche Form auf <b>-a</b>: Marco è italian<b>o</b>, Giulia è italian<b>a</b>. Adjektive auf <b>-e</b> bleiben gleich: Tom è ingles<b>e</b>, Kate è ingles<b>e</b>. Nationalitäten schreibt man klein.", "Adjectives ending in <b>-o</b> have a feminine form in <b>-a</b>: Marco è italian<b>o</b>, Giulia è italian<b>a</b>. Adjectives in <b>-e</b> stay the same: Tom è ingles<b>e</b>, Kate è ingles<b>e</b>. Nationalities are written in lower case.")],
    ["h", TB("Verben auf -are: <i>parlare</i>", "Verbs in -are: <i>parlare</i>")],
    ["conj", { verbs: ["parlare", "abitare"], tenses: ["Presente"] }],
    ["tip", TB("Sprachen sind männlich und haben im Satz meist keinen Artikel: <b>Parlo italiano</b>. Aber: <b>L'italiano è bello.</b>", "Languages are masculine and usually take no article after <i>parlare</i>: <b>Parlo italiano</b>. But: <b>L'italiano è bello.</b>")]
  ],
  th: "presente", quiz: ["it-presente-reg"],
  drill: [
    ["Sono ___ Amburgo.", ["di", "a", "in"], 0],
    ["Abito ___ Italia.", ["in", "a", "di"], 0],
    ["Abitiamo ___ Firenze.", ["a", "in", "di"], 0],
    ["Giulia è ___.", ["italiana", "italiano", "italiane"], 0],
    ["Anna e Tom sono ___.", ["inglesi", "inglese", "inglesa"], 0],
    ["Tu ___ tedesco? (parlare)", "parli"],
    ["Voi ___ a Roma? (abitare)", "abitate"],
    ["Loro ___ spagnolo. (studiare)", "studiano"]
  ],
  talk: { t: TB("Im Sprachkurs", "In the language class"), scene: TB("Erster Tag im Italienischkurs in Florenz. Die Lehrerin Chiara fragt dich ein paar Dinge.", "First day of an Italian course in Florence. The teacher, Chiara, asks you a few questions."), who: "Chiara", slots: { name: "Luca", city: "Monaco" }, lines: `a|Buongiorno! Io sono Chiara, l'insegnante. Come ti chiami?|Guten Morgen! Ich bin Chiara, die Lehrerin. Wie heißt du?|Good morning! I'm Chiara, the teacher. What's your name?
me|Buongiorno! Mi chiamo {name}.|Guten Morgen! Ich heiße …|Good morning! My name is …|Buongiorno, sono {name}.; Ciao, mi chiamo {name}.
a|Piacere! Di dove sei?|Freut mich! Woher kommst du?|Nice to meet you! Where are you from?
me|Sono tedesco, di {city}.|Ich bin Deutscher, aus …|I'm German, from …|Sono tedesca, di {city}.; Sono di {city}, in Germania.; Sono di {city}.
a|Ah, la Germania! E dove abiti adesso?|Ah, Deutschland! Und wo wohnst du jetzt?|Ah, Germany! And where do you live now?
me|Abito a Firenze per tre mesi.|Ich wohne für drei Monate in Florenz.|I'm living in Florence for three months.|Adesso abito a Firenze.; Abito qui a Firenze.
a|Che bello! Che lingue parli?|Wie schön! Welche Sprachen sprichst du?|How nice! Which languages do you speak?
me|Parlo tedesco, inglese e un po' di italiano.|Ich spreche Deutsch, Englisch und ein bisschen Italienisch.|I speak German, English and a little Italian.|Parlo tedesco, inglese e un po' italiano.; Parlo tedesco e inglese e un po' di italiano.
a|Benissimo! Allora, benvenuto nel corso!|Sehr gut! Also, willkommen im Kurs!|Very good! Well then, welcome to the course!
me|Grazie mille!|Vielen Dank!|Thank you very much!|Grazie!; Grazie, molto gentile!` }
});

lesson("A1", { id: "it-a1-03", t: TB("Numeri – Zahlen, Alter, Telefonnummer", "Numeri – Numbers, age, phone number"),
  goal: TB("Du kannst bis 100 zählen, dein Alter sagen und deine Telefonnummer angeben.", "You can count to 100, say your age and give your phone number."),
  words: `zero|null|zero|x
uno|eins|one|x
due|zwei|two|x
tre|drei|three|x
quattro|vier|four|x
cinque|fünf|five|x
sei|sechs|six|x
sette|sieben|seven|x
otto|acht|eight|x
nove|neun|nine|x
dieci|zehn|ten|x
undici|elf|eleven|x
dodici|zwölf|twelve|x
venti|zwanzig|twenty|x|Ho venti euro.|Ich habe zwanzig Euro.|I have twenty euros.
ventuno|einundzwanzig|twenty-one|x
trenta|dreißig|thirty|x
quaranta|vierzig|forty|x
cinquanta|fünfzig|fifty|x
cento|hundert|a hundred|x
l'anno|das Jahr|the year|n|Ho trentadue anni.|Ich bin zweiunddreißig Jahre alt.|I'm thirty-two years old.
il numero di telefono|die Telefonnummer|the phone number|n|Qual è il tuo numero di telefono?|Was ist deine Telefonnummer?|What's your phone number?
l'indirizzo email|die E-Mail-Adresse|the email address|n
la chiocciola|das @-Zeichen|the @ sign|n
il compleanno|der Geburtstag|the birthday|n|Quando è il tuo compleanno?|Wann hast du Geburtstag?|When is your birthday?
quanti/quante|wie viele|how many|x|Quanti anni hai?|Wie alt bist du?|How old are you?`,
  say: `Quanti anni hai?|Wie alt bist du?|How old are you?
Ho ventotto anni.|Ich bin achtundzwanzig.|I'm twenty-eight.
Qual è il tuo numero?|Was ist deine Nummer?|What's your number?
Il mio numero è tre quattro sette, due due uno, zero otto.|Meine Nummer ist 347 221 08.|My number is 347 221 08.
Puoi ripetere, per favore?|Kannst du das bitte wiederholen?|Can you repeat that, please?
Più lentamente, per favore.|Langsamer, bitte.|More slowly, please.
Hai un fratello?|Hast du einen Bruder?|Do you have a brother?`,
  gram: [
    ["h", TB("Das Verb <i>avere</i> (haben)", "The verb <i>avere</i> (to have)")],
    ["conj", { verbs: ["avere"], tenses: ["Presente"] }],
    ["p", TB("Das Alter sagt man mit <b>avere</b>: <b>Ho 30 anni</b> (wörtlich: Ich habe 30 Jahre). Das <b>h</b> wird nie gesprochen: ho = [o].", "Age is expressed with <b>avere</b>: <b>Ho 30 anni</b> (literally: I have 30 years). The <b>h</b> is never pronounced: ho = [o].")],
    ["h", TB("Zahlen ab 20", "Numbers from 20")],
    ["p", TB("Zehner + Einer in einem Wort: venti<b>due</b> (22), trenta<b>cinque</b> (35). Bei <b>uno</b> und <b>otto</b> fällt der Vokal des Zehners weg: vent<b>uno</b>, trent<b>otto</b>. Bei <b>tre</b> am Ende Akzent: ventitr<b>é</b>.", "Tens + units in one word: venti<b>due</b> (22), trenta<b>cinque</b> (35). Before <b>uno</b> and <b>otto</b> the final vowel of the ten drops: vent<b>uno</b>, trent<b>otto</b>. A final <b>tre</b> gets an accent: ventitr<b>é</b>.")],
    ["ex", [["ventidue", "22", "22"], ["trentotto", "38", "38"], ["quarantatré", "43", "43"], ["sessantuno", "61", "61"], ["settanta, ottanta, novanta", "70, 80, 90", "70, 80, 90"]]],
    ["tip", TB("Telefonnummern sagt man meist Ziffer für Ziffer oder in Zweier-/Dreiergruppen.", "Phone numbers are usually said digit by digit or in groups of two or three.")]
  ],
  th: "irregolari",
  drill: [
    ["Io ___ trent'anni.", ["ho", "sono", "hai"], 0, TB("Alter immer mit avere.", "Age always takes avere.")],
    ["Quanti anni ___ tua sorella?", ["ha", "è", "hai"], 0],
    ["Noi ___ due figli.", ["abbiamo", "avete", "hanno"], 0],
    ["Voi ___ un gatto?", ["avete", "abbiamo", "siete"], 0],
    ["21 = ___", ["ventuno", "ventiuno", "vent'uno"], 0],
    ["38 = ___", ["trentotto", "trentaotto", "tredici otto"], 0],
    ["Loro ___ venti euro. (avere)", "hanno"]
  ],
  talk: { t: TB("Anmeldung im Fitnessstudio", "Signing up at the gym"), scene: TB("Du meldest dich in einer Palestra in Rom an. Davide am Empfang füllt das Formular aus.", "You're signing up at a gym in Rome. Davide at reception fills in the form."), who: "Davide", slots: { name: "Luca", age: "30" }, lines: `a|Ciao! Vuoi fare l'abbonamento? Come ti chiami?|Hallo! Möchtest du ein Abo abschließen? Wie heißt du?|Hi! Do you want a membership? What's your name?
me|Sì, mi chiamo {name}.|Ja, ich heiße …|Yes, my name is …|Sì, sono {name}.; Mi chiamo {name}.
a|Perfetto. Quanti anni hai?|Perfekt. Wie alt bist du?|Perfect. How old are you?
me|Ho {age} anni.|Ich bin … Jahre alt.|I'm … years old.|{age} anni.
a|Qual è il tuo numero di telefono?|Was ist deine Telefonnummer?|What's your phone number?
me|Il mio numero è tre due otto, quattro cinque sei, sette uno.|Meine Nummer ist 328 456 71.|My number is 328 456 71.|È tre due otto, quattro cinque sei, sette uno.
a|Scusa, puoi ripetere più lentamente?|Entschuldige, kannst du langsamer wiederholen?|Sorry, can you repeat more slowly?
me|Certo: tre, due, otto, quattro, cinque, sei, sette, uno.|Klar: 3, 2, 8, 4, 5, 6, 7, 1.|Sure: 3, 2, 8, 4, 5, 6, 7, 1.|Sì: tre, due, otto, quattro, cinque, sei, sette, uno.
a|Grazie! L'abbonamento costa quaranta euro al mese.|Danke! Das Abo kostet vierzig Euro im Monat.|Thanks! The membership costs forty euros a month.
me|Va bene, grazie!|In Ordnung, danke!|All right, thanks!|Perfetto, grazie!; Ok, va bene.` }
});

lesson("A1", { id: "it-a1-04", t: TB("Al bar – Bestellen und bezahlen", "Al bar – Ordering and paying"),
  goal: TB("Du kannst im Bar etwas bestellen, nach dem Preis fragen und bezahlen.", "You can order something in a café, ask for the price and pay."),
  words: `il caffè|der Espresso; der Kaffee|the espresso; the coffee|n|Un caffè, per favore.|Einen Espresso, bitte.|An espresso, please.
il cappuccino|der Cappuccino|the cappuccino|n
il cornetto|das Hörnchen (süß)|the croissant|n|Prendo un cappuccino e un cornetto.|Ich nehme einen Cappuccino und ein Hörnchen.|I'll have a cappuccino and a croissant.
l'acqua naturale|stilles Wasser|still water|n
l'acqua frizzante|Sprudelwasser|sparkling water|n
il tè|der Tee|the tea|n
la spremuta d'arancia|frisch gepresster O-Saft|freshly squeezed orange juice|n
il succo di frutta|der Fruchtsaft|the fruit juice|n
il panino|das belegte Brötchen|the sandwich|n
il tramezzino|das Sandwich (Toastbrot)|the sandwich (white bread)|n
la birra|das Bier|the beer|n
un bicchiere di vino|ein Glas Wein|a glass of wine|ph
lo zucchero|der Zucker|the sugar|n
il latte|die Milch|the milk|n
lo scontrino|der Kassenbon|the receipt|n|Prima fai lo scontrino alla cassa.|Erst holst du den Bon an der Kasse.|First you get the receipt at the till.
la cassa|die Kasse|the till; the cash desk|n
il conto|die Rechnung|the bill|n
vorrei|ich hätte gern; ich möchte|I would like|ph|Vorrei un tè, per favore.|Ich hätte gern einen Tee, bitte.|I'd like a tea, please.
quanto costa?|wie viel kostet es?|how much is it?|ph
ecco|hier (bitte); da ist|here you are; here is|adv|Ecco il resto.|Hier ist das Wechselgeld.|Here's your change.
il resto|das Wechselgeld|the change|n
caldo/a|warm; heiß|hot; warm|adj
freddo/a|kalt|cold|adj`,
  say: `Un caffè, per favore.|Einen Espresso, bitte.|An espresso, please.
Vorrei un cappuccino e un cornetto.|Ich hätte gern einen Cappuccino und ein Hörnchen.|I'd like a cappuccino and a croissant.
Per me un'acqua frizzante.|Für mich ein Sprudelwasser.|A sparkling water for me.
Quanto costa?|Wie viel kostet das?|How much is it?
Quant'è?|Was macht das?|How much is that?
Pago io!|Ich zahle!|I'll pay!
Posso pagare con la carta?|Kann ich mit Karte zahlen?|Can I pay by card?
Tenga il resto.|Stimmt so.|Keep the change.`,
  gram: [
    ["h", TB("Der unbestimmte Artikel: un, uno, una, un'", "The indefinite article: un, uno, una, un'")],
    ["table", { head: [TB("", ""), TB("Artikel", "article"), TB("wann?", "when?"), TB("Beispiel", "example")], rows: [
      [TB("männlich", "masculine"), "un", TB("fast immer", "almost always"), "un caffè, un amico"],
      [TB("männlich", "masculine"), "uno", TB("vor s + Konsonant, z, gn, ps, y", "before s + consonant, z, gn, ps, y"), "uno spritz, uno zucchero"],
      [TB("weiblich", "feminine"), "una", TB("vor Konsonant", "before a consonant"), "una birra, una spremuta"],
      [TB("weiblich", "feminine"), "un'", TB("vor Vokal", "before a vowel"), "un'acqua, un'aranciata"]], say: 3 }],
    ["p", TB("<b>vorrei</b> (ich hätte gern) ist die höfliche Form von <i>volere</i>. Genauso üblich: <b>prendo</b> … (ich nehme …).", "<b>vorrei</b> (I'd like) is the polite form of <i>volere</i>. Just as common: <b>prendo</b> … (I'll have …).")],
    ["tip", TB("In vielen Bars zahlst du zuerst an der Kasse und gibst den Bon (lo scontrino) dann am Tresen ab. <b>Un caffè</b> ist immer ein Espresso.", "In many bars you pay first at the till and then hand the receipt (lo scontrino) to the barista. <b>Un caffè</b> is always an espresso.")]
  ],
  th: "art", quiz: ["it-art-indef"],
  drill: [
    ["Vorrei ___ cappuccino.", ["un", "uno", "una"], 0],
    ["Prendo ___ spremuta d'arancia.", ["una", "un", "un'"], 0],
    ["Per me ___ acqua frizzante.", ["un'", "una", "un"], 0, TB("acqua ist weiblich und beginnt mit Vokal → un'.", "acqua is feminine and starts with a vowel → un'.")],
    ["Uno ___ , per favore.", ["spritz", "caffè", "tè"], 0, TB("uno vor s + Konsonant.", "uno before s + consonant.")],
    ["Quanto ___ un cornetto?", ["costa", "costano", "costi"], 0],
    ["Quanto ___ due caffè?", ["costano", "costa", "costate"], 0],
    ["___ il resto, signora.", ["Ecco", "Prego", "Vorrei"], 0]
  ],
  talk: { t: TB("In der Bar", "At the café"), scene: TB("Morgens in einer Bar in Neapel. Der Barista Salvatore ist schnell und gut gelaunt.", "Morning in a café in Naples. Salvatore, the barista, is quick and cheerful."), who: "Salvatore", slots: {}, lines: `a|Buongiorno! Cosa prende?|Guten Morgen! Was nehmen Sie?|Good morning! What will you have?
me|Buongiorno! Vorrei un cappuccino, per favore.|Guten Morgen! Ich hätte gern einen Cappuccino, bitte.|Good morning! I'd like a cappuccino, please.|Un cappuccino, per favore.; Prendo un cappuccino, per favore.; Buongiorno, un cappuccino per favore.
a|Subito! Qualcos'altro? Un cornetto?|Sofort! Noch etwas? Ein Hörnchen?|Right away! Anything else? A croissant?
me|Sì, un cornetto alla crema, grazie.|Ja, ein Hörnchen mit Creme, danke.|Yes, a cream croissant, thanks.|Sì, un cornetto, grazie.; Sì, grazie, un cornetto alla crema.
a|Ecco a lei. Altro?|Bitte schön. Sonst noch etwas?|Here you are. Anything else?
me|No, basta così. Quant'è?|Nein, das ist alles. Was macht das?|No, that's all. How much is it?|No, grazie. Quanto costa?; Basta così, grazie. Quant'è?
a|Sono tre euro e cinquanta.|Das macht drei Euro fünfzig.|That's three euros fifty.
me|Posso pagare con la carta?|Kann ich mit Karte zahlen?|Can I pay by card?|Posso pagare con carta?; Si può pagare con la carta?
a|Certo, nessun problema. Ecco lo scontrino. Buona giornata!|Natürlich, kein Problem. Hier ist der Bon. Schönen Tag noch!|Of course, no problem. Here's your receipt. Have a nice day!
me|Grazie, altrettanto!|Danke, gleichfalls!|Thanks, you too!|Grazie, buona giornata!; Grazie mille, altrettanto!` }
});

/* Italiano A1 · 5–8 */
lesson("A1", { id: "it-a1-05", t: TB("La famiglia – Familie und Possessiva", "La famiglia – Family and possessives"),
  goal: TB("Du kannst deine Familie vorstellen und sagen, wem etwas gehört.", "You can introduce your family and say who something belongs to."),
  words: `la famiglia|die Familie|the family|n|Ho una famiglia grande.|Ich habe eine große Familie.|I have a big family.
il padre|der Vater|the father|n
la madre|die Mutter|the mother|n
i genitori|die Eltern|the parents|n|I miei genitori abitano a Colonia.|Meine Eltern wohnen in Köln.|My parents live in Cologne.
il fratello|der Bruder|the brother|n
la sorella|die Schwester|the sister|n
il figlio|der Sohn|the son|n
la figlia|die Tochter|the daughter|n
i figli|die Kinder (Söhne und Töchter)|the children|n
il marito|der Ehemann|the husband|n
la moglie|die Ehefrau|the wife|n
il nonno|der Opa|the grandfather|n
la nonna|die Oma|the grandmother|n
lo zio|der Onkel|the uncle|n
la zia|die Tante|the aunt|n
il cugino|der Cousin|the cousin (m)|n
la cugina|die Cousine|the cousin (f)|n
il ragazzo|der Junge; der Freund (Partner)|the boy; the boyfriend|n
la ragazza|das Mädchen; die Freundin (Partnerin)|the girl; the girlfriend|n
sposato/a|verheiratet|married|adj|Mia sorella è sposata.|Meine Schwester ist verheiratet.|My sister is married.
single|Single|single|adj
figlio unico|Einzelkind|only child|ph|Sono figlio unico.|Ich bin Einzelkind.|I'm an only child.
grande|groß|big; tall|adj
piccolo/a|klein|small; little|adj
simpatico/a|sympathisch; nett|nice; likeable|adj`,
  say: `Hai fratelli?|Hast du Geschwister?|Do you have any brothers or sisters?
Ho un fratello e una sorella.|Ich habe einen Bruder und eine Schwester.|I have a brother and a sister.
Mio fratello si chiama Jonas.|Mein Bruder heißt Jonas.|My brother is called Jonas.
Questa è mia madre.|Das ist meine Mutter.|This is my mother.
I miei nonni abitano in campagna.|Meine Großeltern wohnen auf dem Land.|My grandparents live in the country.
Sei sposato?|Bist du verheiratet?|Are you married?
Come si chiama tua sorella?|Wie heißt deine Schwester?|What's your sister's name?`,
  gram: [
    ["h", TB("mein, dein, sein …", "my, your, his …")],
    ["table", { head: [TB("", ""), TB("männlich", "masc."), TB("weiblich", "fem."), TB("m. Plural", "m. plural"), TB("w. Plural", "f. plural")], rows: [
      [TB("mein", "my"), "il mio", "la mia", "i miei", "le mie"],
      [TB("dein", "your"), "il tuo", "la tua", "i tuoi", "le tue"],
      [TB("sein/ihr/Ihr", "his/her/your (formal)"), "il suo", "la sua", "i suoi", "le sue"],
      [TB("unser", "our"), "il nostro", "la nostra", "i nostri", "le nostre"],
      [TB("euer", "your (pl.)"), "il vostro", "la vostra", "i vostri", "le vostre"],
      [TB("ihr (Pl.)", "their"), "il loro", "la loro", "i loro", "le loro"]] }],
    ["p", TB("Das Possessivpronomen richtet sich nach dem <b>Besitz</b>, nicht nach dem Besitzer: <b>la sua macchina</b> = sein <i>oder</i> ihr Auto.", "The possessive agrees with the <b>thing owned</b>, not the owner: <b>la sua macchina</b> = his <i>or</i> her car.")],
    ["tip", TB("Bei <b>einem</b> Familienmitglied ohne Zusatz fällt der Artikel weg: <b>mia madre, tuo fratello</b>. Aber im Plural und mit <i>loro</i> bleibt er: <b>i miei fratelli, la loro figlia</b>.", "With <b>one</b> family member and no extra word, drop the article: <b>mia madre, tuo fratello</b>. But keep it in the plural and with <i>loro</i>: <b>i miei fratelli, la loro figlia</b>.")]
  ],
  th: "poss",
  drill: [
    ["___ madre è di Napoli.", ["Mia", "La mia", "Mio"], 0, TB("Ein Familienmitglied im Singular → kein Artikel.", "Singular family member → no article.")],
    ["___ genitori sono simpatici.", ["I miei", "Miei", "Le mie"], 0],
    ["Come si chiama ___ fratello?", ["tuo", "il tuo", "tua"], 0],
    ["Marco e ___ moglie abitano a Roma.", ["sua", "suo", "la sua"], 0],
    ["Questa è ___ macchina, Signora?", ["la Sua", "il Suo", "Sua"], 0],
    ["Ho due ___ e una figlia.", ["figli", "figlio", "figlie"], 0],
    ["Le mie sorelle sono ___ .", ["sposate", "sposati", "sposata"], 0]
  ],
  talk: { t: TB("Familienfotos", "Family photos"), scene: TB("Deine Kollegin Elena zeigt dir Fotos auf dem Handy und fragt nach deiner Familie.", "Your colleague Elena shows you photos on her phone and asks about your family."), who: "Elena", slots: { name: "Jonas" }, lines: `a|Guarda, questa è la mia famiglia. Questo è mio marito, Paolo.|Schau, das ist meine Familie. Das ist mein Mann, Paolo.|Look, this is my family. This is my husband, Paolo.
me|Che bella foto! E questi sono i tuoi figli?|Was für ein schönes Foto! Und sind das deine Kinder?|What a lovely photo! And are these your children?|Bella foto! Sono i tuoi figli?; Che bella! Questi sono i tuoi figli?
a|Sì, Matteo e Sofia. E tu, hai fratelli?|Ja, Matteo und Sofia. Und du, hast du Geschwister?|Yes, Matteo and Sofia. And you, do you have any siblings?
me|Sì, ho un fratello e una sorella.|Ja, ich habe einen Bruder und eine Schwester.|Yes, I have a brother and a sister.|Sì, un fratello e una sorella.; Ho un fratello e una sorella.
a|E come si chiama tuo fratello?|Und wie heißt dein Bruder?|And what's your brother's name?
me|Mio fratello si chiama {name}.|Mein Bruder heißt …|My brother's name is …|Si chiama {name}.
a|Abita in Germania?|Wohnt er in Deutschland?|Does he live in Germany?
me|Sì, abita a Berlino con sua moglie.|Ja, er wohnt mit seiner Frau in Berlin.|Yes, he lives in Berlin with his wife.|Sì, abita a Berlino con la moglie.
a|E i tuoi genitori?|Und deine Eltern?|And your parents?
me|I miei genitori abitano vicino a Monaco.|Meine Eltern wohnen in der Nähe von München.|My parents live near Munich.|I miei abitano vicino a Monaco.` }
});

lesson("A1", { id: "it-a1-06", t: TB("La mia giornata – Tagesablauf und Uhrzeit", "La mia giornata – Daily routine and time"),
  goal: TB("Du kannst deinen Tag beschreiben, die Uhrzeit sagen und reflexive Verben benutzen.", "You can describe your day, tell the time and use reflexive verbs."),
  words: `svegliarsi|aufwachen|to wake up|v|Mi sveglio alle sette.|Ich wache um sieben auf.|I wake up at seven.
alzarsi|aufstehen|to get up|v
farsi la doccia|duschen|to have a shower|v|Mi faccio la doccia dopo la palestra.|Ich dusche nach dem Fitnessstudio.|I have a shower after the gym.
vestirsi|sich anziehen|to get dressed|v
fare colazione|frühstücken|to have breakfast|v
andare al lavoro|zur Arbeit gehen|to go to work|v
pranzare|zu Mittag essen|to have lunch|v
tornare a casa|nach Hause kommen|to come home|v
cenare|zu Abend essen|to have dinner|v
andare a letto|ins Bett gehen|to go to bed|v|Di solito vado a letto a mezzanotte.|Normalerweise gehe ich um Mitternacht ins Bett.|I usually go to bed at midnight.
la mattina|der Morgen; morgens|the morning|n
il pomeriggio|der Nachmittag|the afternoon|n
la sera|der Abend|the evening|n
la notte|die Nacht|the night|n
presto|früh|early|adv
tardi|spät|late|adv
di solito|normalerweise|usually|adv
sempre|immer|always|adv
mai|nie|never|adv|Non mi alzo mai prima delle sette.|Ich stehe nie vor sieben auf.|I never get up before seven.
mezzogiorno|Mittag (12 Uhr)|midday|n
mezzanotte|Mitternacht|midnight|n
e mezza|halb (… Uhr dreißig)|half past|ph|Sono le otto e mezza.|Es ist halb neun.|It's half past eight.
e un quarto|Viertel nach|quarter past|ph
meno un quarto|Viertel vor|quarter to|ph`,
  say: `Che ore sono?|Wie spät ist es?|What time is it?
Sono le sette e mezza.|Es ist halb acht.|It's half past seven.
È l'una.|Es ist eins.|It's one o'clock.
A che ora ti alzi?|Um wie viel Uhr stehst du auf?|What time do you get up?
Mi alzo alle sei e un quarto.|Ich stehe um Viertel nach sechs auf.|I get up at quarter past six.
La sera mi rilasso sul divano.|Abends entspanne ich mich auf dem Sofa.|In the evening I relax on the sofa.
Non ho tempo per fare colazione.|Ich habe keine Zeit zu frühstücken.|I don't have time for breakfast.`,
  gram: [
    ["h", TB("Reflexive Verben", "Reflexive verbs")],
    ["p", TB("Das Reflexivpronomen steht <b>vor</b> dem Verb: <b>mi</b> alzo, <b>ti</b> alzi, <b>si</b> alza, <b>ci</b> alziamo, <b>vi</b> alzate, <b>si</b> alzano.", "The reflexive pronoun goes <b>before</b> the verb: <b>mi</b> alzo, <b>ti</b> alzi, <b>si</b> alza, <b>ci</b> alziamo, <b>vi</b> alzate, <b>si</b> alzano.")],
    ["conj", { verbs: ["alzarsi", "vestirsi"], tenses: ["Presente"] }],
    ["h", TB("Die Uhrzeit", "Telling the time")],
    ["table", { head: [TB("Uhrzeit", "time"), TB("Italienisch", "Italian")], rows: [
      ["1:00", "È l'una."], ["3:00", "Sono le tre."], ["3:15", "Sono le tre e un quarto."], ["3:30", "Sono le tre e mezza."], ["3:45", "Sono le quattro meno un quarto."], ["12:00", "È mezzogiorno. / È mezzanotte."]], say: 1 }],
    ["tip", TB("<b>Alle</b> + Uhrzeit = um: <b>alle otto</b> (um acht), aber <b>all'una</b> (um eins), <b>a mezzogiorno</b>.", "<b>Alle</b> + time = at: <b>alle otto</b> (at eight), but <b>all'una</b> (at one), <b>a mezzogiorno</b>.")]
  ],
  th: "reflexive",
  drill: [
    ["Io ___ alzo alle sette.", ["mi", "ti", "si"], 0],
    ["A che ora ___ svegli?", ["ti", "mi", "si"], 0],
    ["Noi ___ vestiamo in fretta.", ["ci", "vi", "si"], 0],
    ["Sono le otto ___ mezza.", ["e", "a", "di"], 0],
    ["___ l'una e dieci.", ["È", "Sono", "Ha"], 0],
    ["Vado a letto ___ undici.", ["alle", "a", "le"], 0],
    ["Marco si ___ la doccia. (fare)", "fa"],
    ["Voi vi ___ presto? (alzarsi)", "alzate"]
  ],
  talk: { t: TB("Wie sieht dein Tag aus?", "What's your day like?"), scene: TB("In der Mittagspause fragt dich dein Kollege Fabio nach deinem Tagesablauf.", "During the lunch break your colleague Fabio asks about your daily routine."), who: "Fabio", slots: { time: "sette" }, lines: `a|Sei sempre così in forma! A che ora ti alzi la mattina?|Du bist immer so fit! Um wie viel Uhr stehst du morgens auf?|You're always so fit! What time do you get up in the morning?
me|Mi alzo alle {time}.|Ich stehe um … auf.|I get up at …|Di solito mi alzo alle {time}.; Alle {time}.
a|E fai colazione a casa?|Und frühstückst du zu Hause?|And do you have breakfast at home?
me|No, faccio colazione al bar.|Nein, ich frühstücke in der Bar.|No, I have breakfast at the café.|No, di solito faccio colazione al bar.
a|E quando vai in palestra?|Und wann gehst du ins Fitnessstudio?|And when do you go to the gym?
me|Vado in palestra la sera, dopo il lavoro.|Ich gehe abends nach der Arbeit ins Studio.|I go to the gym in the evening, after work.|La sera, dopo il lavoro.; Dopo il lavoro vado in palestra.
a|Io invece la sera sono stanchissimo. A che ora vai a letto?|Ich bin abends dagegen total müde. Um wie viel Uhr gehst du ins Bett?|I'm exhausted in the evening, on the other hand. What time do you go to bed?
me|Di solito vado a letto alle undici.|Normalerweise gehe ich um elf ins Bett.|I usually go to bed at eleven.|Vado a letto alle undici.; Alle undici, di solito.
a|Bravo! Allora domani vengo in palestra con te.|Super! Dann komme ich morgen mit ins Studio.|Well done! Then I'll come to the gym with you tomorrow.
me|Perfetto, a domani!|Perfekt, bis morgen!|Perfect, see you tomorrow!|Ottimo, a domani!; Va bene, a domani!` }
});

lesson("A1", { id: "it-a1-07", t: TB("Il tempo libero – Hobbys und <i>piacere</i>", "Il tempo libero – Hobbies and <i>piacere</i>"),
  goal: TB("Du kannst über Hobbys sprechen, sagen, was dir gefällt, und Verben auf -ere/-ire benutzen.", "You can talk about hobbies, say what you like and use verbs in -ere/-ire."),
  words: `il tempo libero|die Freizeit|free time|n|Cosa fai nel tempo libero?|Was machst du in deiner Freizeit?|What do you do in your free time?
lo sport|der Sport|sport|n
andare in palestra|ins Fitnessstudio gehen|to go to the gym|v
correre|laufen; joggen|to run|v
nuotare|schwimmen|to swim|v
giocare a calcio|Fußball spielen|to play football|v
leggere|lesen|to read|v
ascoltare la musica|Musik hören|to listen to music|v
suonare la chitarra|Gitarre spielen|to play the guitar|v
guardare una serie|eine Serie schauen|to watch a series|v
cucinare|kochen|to cook|v
viaggiare|reisen|to travel|v
uscire con gli amici|mit Freunden ausgehen|to go out with friends|v
il fine settimana|das Wochenende|the weekend|n
spesso|oft|often|adv|Vado spesso al cinema.|Ich gehe oft ins Kino.|I often go to the cinema.
qualche volta|manchmal|sometimes|adv
preferire|lieber mögen; bevorzugen|to prefer|v
odiare|hassen|to hate|v
adorare|lieben; total gern mögen|to love; to adore|v
la passione|die Leidenschaft|the passion|n|La cucina è la mia passione.|Kochen ist meine Leidenschaft.|Cooking is my passion.`,
  say: `Mi piace leggere.|Ich lese gern.|I like reading.
Mi piace il calcio.|Ich mag Fußball.|I like football.
Mi piacciono i film italiani.|Ich mag italienische Filme.|I like Italian films.
Non mi piace correre.|Ich laufe nicht gern.|I don't like running.
Ti piace cucinare?|Kochst du gern?|Do you like cooking?
Preferisco il mare alla montagna.|Ich mag das Meer lieber als die Berge.|I prefer the sea to the mountains.
Anche a me!|Ich auch! (mir gefällt es auch)|Me too!
Neanche a me.|Mir auch nicht.|Me neither.`,
  gram: [
    ["h", TB("<i>piacere</i>: mi piace / mi piacciono", "<i>piacere</i>: mi piace / mi piacciono")],
    ["p", TB("Wörtlich: „Es gefällt mir.“ Das Ding ist das Subjekt: <b>Mi piace</b> + Singular oder Verb, <b>mi piacciono</b> + Plural. Wem? → <b>mi, ti, gli</b> (ihm), <b>le</b> (ihr/Ihnen), <b>ci, vi, gli</b>.", "Literally: \"It pleases me.\" The thing is the subject: <b>Mi piace</b> + singular or verb, <b>mi piacciono</b> + plural. To whom? → <b>mi, ti, gli</b> (him), <b>le</b> (her/you formal), <b>ci, vi, gli</b>.")],
    ["ex", [["Mi piace la pizza.", "Ich mag Pizza.", "I like pizza."], ["Mi piacciono le lingue.", "Ich mag Sprachen.", "I like languages."], ["A Luca piace nuotare.", "Luca schwimmt gern.", "Luca likes swimming."], ["Ti piacciono i gatti?", "Magst du Katzen?", "Do you like cats?"]]],
    ["h", TB("Verben auf -ere und -ire", "Verbs in -ere and -ire")],
    ["conj", { verbs: ["leggere", "dormire", "preferire"], tenses: ["Presente"] }],
    ["tip", TB("Manche -ire-Verben schieben <b>-isc-</b> ein (ich, du, er/sie, sie Pl.): prefer<b>isc</b>o, cap<b>isc</b>o, fin<b>isc</b>o.", "Some -ire verbs insert <b>-isc-</b> (I, you, he/she, they): prefer<b>isc</b>o, cap<b>isc</b>o, fin<b>isc</b>o.")]
  ],
  th: "presente", quiz: ["it-presente-reg"],
  drill: [
    ["Mi ___ la musica jazz.", ["piace", "piacciono", "piaci"], 0],
    ["Mi ___ i libri gialli.", ["piacciono", "piace", "piaccio"], 0],
    ["Ti ___ ballare?", ["piace", "piacciono", "piaci"], 0, TB("Verb (Infinitiv) → Singular: piace.", "A verb (infinitive) → singular: piace.")],
    ["A Giulia ___ piace il tennis.", ["le", "gli", "la"], 0],
    ["Io ___ il mare. (preferire)", "preferisco"],
    ["Tu ___ molto? (leggere)", "leggi"],
    ["Noi ___ fino alle nove. (dormire)", "dormiamo"],
    ["Loro ___ la lezione alle sei. (finire)", "finiscono"]
  ],
  talk: { t: TB("Smalltalk im Fitnessstudio", "Small talk at the gym"), scene: TB("Zwischen zwei Sätzen an der Hantelbank spricht dich Marco an.", "Between two sets at the bench press, Marco starts chatting with you."), who: "Marco", slots: { day: "lunedì" }, lines: `a|Scusa, quante serie hai ancora?|Entschuldige, wie viele Sätze hast du noch?|Sorry, how many sets have you got left?
me|Ancora due. Ci possiamo alternare, se vuoi.|Noch zwei. Wir können uns abwechseln, wenn du willst.|Two more. We can take turns if you like.|Ancora due serie. Se vuoi ci alterniamo.; Due. Possiamo alternarci, se vuoi.
a|Grazie, gentilissimo! Vieni spesso in palestra?|Danke, sehr nett! Kommst du oft ins Studio?|Thanks, very kind! Do you come to the gym often?
me|Sì, vengo quattro volte alla settimana.|Ja, ich komme viermal pro Woche.|Yes, I come four times a week.|Sì, quattro volte alla settimana.; Sì, abbastanza spesso.
a|Complimenti! E ti piace anche correre?|Respekt! Und läufst du auch gern?|Well done! And do you like running too?
me|No, non mi piace correre. Preferisco i pesi.|Nein, ich laufe nicht gern. Ich mag lieber Gewichte.|No, I don't like running. I prefer weights.|No, preferisco i pesi.; Non molto, preferisco i pesi.
a|Anche a me! E cosa fai nel tempo libero?|Ich auch! Und was machst du in deiner Freizeit?|Me too! And what do you do in your free time?
me|Mi piace cucinare e uscire con gli amici.|Ich koche gern und gehe gern mit Freunden aus.|I like cooking and going out with friends.|Cucino e esco con gli amici.; Mi piace cucinare e viaggiare.
a|Allora ci vediamo {day}! Io sono Marco.|Dann sehen wir uns am …! Ich bin Marco.|Then see you on …! I'm Marco.
me|Piacere, Marco! A presto!|Freut mich, Marco! Bis bald!|Nice to meet you, Marco! See you soon!|Piacere! A presto!` }
});

lesson("A1", { id: "it-a1-08", t: TB("In città – Orte und Wegbeschreibung", "In città – Places and directions"),
  goal: TB("Du kannst nach dem Weg fragen, einfache Wegbeschreibungen verstehen und c'è / ci sono benutzen.", "You can ask the way, understand simple directions and use c'è / ci sono."),
  words: `la stazione|der Bahnhof|the station|n|Scusi, dov'è la stazione?|Entschuldigung, wo ist der Bahnhof?|Excuse me, where's the station?
la fermata dell'autobus|die Bushaltestelle|the bus stop|n
la farmacia|die Apotheke|the pharmacy|n
il supermercato|der Supermarkt|the supermarket|n
la banca|die Bank|the bank|n
il bancomat|der Geldautomat|the cash machine|n
la piazza|der Platz|the square|n
la strada|die Straße|the road; the street|n
il museo|das Museum|the museum|n
la chiesa|die Kirche|the church|n
l'ospedale|das Krankenhaus|the hospital|n
a destra|rechts|on the right; right|adv|Giri a destra.|Biegen Sie rechts ab.|Turn right.
a sinistra|links|on the left; left|adv
dritto|geradeaus|straight on|adv|Vada sempre dritto.|Gehen Sie immer geradeaus.|Keep going straight on.
vicino|nah; in der Nähe|near; nearby|adv|C'è una farmacia qui vicino?|Gibt es hier in der Nähe eine Apotheke?|Is there a pharmacy near here?
lontano|weit|far|adv
all'angolo|an der Ecke|on the corner|ph
di fronte a|gegenüber von|opposite|ph
accanto a|neben|next to|ph
il semaforo|die Ampel|the traffic lights|n
l'incrocio|die Kreuzung|the crossroads|n
a piedi|zu Fuß|on foot|ph|Sono cinque minuti a piedi.|Es sind fünf Minuten zu Fuß.|It's five minutes on foot.`,
  say: `Scusi, dov'è la stazione?|Entschuldigung, wo ist der Bahnhof?|Excuse me, where is the station?
C'è un supermercato qui vicino?|Gibt es hier in der Nähe einen Supermarkt?|Is there a supermarket near here?
Ci sono due farmacie in questa strada.|In dieser Straße gibt es zwei Apotheken.|There are two pharmacies on this street.
Vada dritto e poi giri a sinistra.|Gehen Sie geradeaus und dann links.|Go straight on and then turn left.
È lontano?|Ist es weit?|Is it far?
È qui vicino, a cinque minuti a piedi.|Es ist hier in der Nähe, fünf Minuten zu Fuß.|It's near here, five minutes on foot.
Al semaforo giri a destra.|An der Ampel biegen Sie rechts ab.|At the traffic lights, turn right.`,
  gram: [
    ["h", TB("c'è / ci sono – es gibt", "c'è / ci sono – there is / there are")],
    ["ex", [["C'è un bar in piazza.", "Auf dem Platz gibt es eine Bar.", "There's a café in the square."], ["Ci sono tre musei.", "Es gibt drei Museen.", "There are three museums."], ["Non c'è problema.", "Kein Problem.", "No problem."]]],
    ["h", TB("Präpositionen mit Artikel", "Prepositions with the article")],
    ["p", TB("<b>a, da, di, in, su</b> verschmelzen mit dem bestimmten Artikel: a + il = <b>al</b>, a + la = <b>alla</b>, in + il = <b>nel</b>, in + la = <b>nella</b>, di + il = <b>del</b>.", "<b>a, da, di, in, su</b> merge with the definite article: a + il = <b>al</b>, a + la = <b>alla</b>, in + il = <b>nel</b>, in + la = <b>nella</b>, di + il = <b>del</b>.")],
    ["ex", [["Vado al supermercato.", "Ich gehe in den Supermarkt.", "I'm going to the supermarket."], ["La farmacia è accanto alla banca.", "Die Apotheke ist neben der Bank.", "The pharmacy is next to the bank."], ["Il museo è nella piazza principale.", "Das Museum ist am Hauptplatz.", "The museum is in the main square."]]],
    ["tip", TB("Wegbeschreibungen hörst du oft in der Lei-Form: <b>giri</b> (biegen Sie ab), <b>vada</b> (gehen Sie), <b>prenda</b> (nehmen Sie).", "You often hear directions in the formal form: <b>giri</b> (turn), <b>vada</b> (go), <b>prenda</b> (take).")]
  ],
  th: "prep", quiz: ["it-prep"],
  drill: [
    ["___ una farmacia qui vicino?", ["C'è", "Ci sono", "È"], 0],
    ["In centro ___ molti ristoranti.", ["ci sono", "c'è", "sono"], 0],
    ["Vado ___ stazione.", ["alla", "al", "nella"], 0],
    ["La banca è accanto ___ museo.", ["al", "alla", "allo"], 0],
    ["Il bar è ___ piazza.", ["in", "a", "su"], 0, TB("in piazza (ohne Artikel) – feste Wendung.", "in piazza (no article) – a fixed expression.")],
    ["Al semaforo ___ a destra. (girare, Lei)", "giri"],
    ["Il cinema è di fronte ___ chiesa.", ["alla", "la", "della"], 0]
  ],
  talk: { t: TB("Nach dem Weg fragen", "Asking the way"), scene: TB("Du bist in Verona und suchst den Bahnhof. Du sprichst eine Passantin an.", "You're in Verona looking for the station. You stop a passer-by."), who: "Signora Bianchi", slots: {}, lines: `me|Scusi, signora, dov'è la stazione?|Entschuldigung, wo ist der Bahnhof?|Excuse me, where is the station?|Scusi, sa dov'è la stazione?; Mi scusi, dov'è la stazione?
a|La stazione? Non è lontano. Vada dritto fino al semaforo.|Der Bahnhof? Nicht weit. Gehen Sie geradeaus bis zur Ampel.|The station? It's not far. Go straight on to the traffic lights.
me|Fino al semaforo, e poi?|Bis zur Ampel, und dann?|To the traffic lights, and then?|E poi?; Al semaforo, e poi?
a|Al semaforo giri a sinistra. La stazione è di fronte alla piazza.|An der Ampel links abbiegen. Der Bahnhof ist gegenüber vom Platz.|At the lights turn left. The station is opposite the square.
me|È lontano a piedi?|Ist es zu Fuß weit?|Is it far on foot?|È lontano?; Quanto ci vuole a piedi?
a|No, sono dieci minuti a piedi.|Nein, zehn Minuten zu Fuß.|No, it's ten minutes on foot.
me|C'è anche un bancomat vicino alla stazione?|Gibt es beim Bahnhof auch einen Geldautomaten?|Is there a cash machine near the station too?|C'è un bancomat lì vicino?
a|Sì, ce ne sono due, proprio accanto all'entrata.|Ja, es gibt zwei, direkt neben dem Eingang.|Yes, there are two, right next to the entrance.
me|Grazie mille, molto gentile!|Vielen Dank, sehr freundlich!|Thank you very much, very kind!|Grazie, gentilissima!; Grazie mille!` }
});

/* Italiano A1 · 9–12 */
lesson("A1", { id: "it-a1-09", t: TB("Fare la spesa – Einkaufen und Mengen", "Fare la spesa – Shopping and quantities"),
  goal: TB("Du kannst auf dem Markt einkaufen, Mengen angeben und nach Preisen fragen.", "You can shop at the market, give quantities and ask about prices."),
  words: `il mercato|der Markt|the market|n
la frutta|das Obst|fruit|n
la verdura|das Gemüse|vegetables|n
la mela|der Apfel|the apple|n
l'arancia|die Orange|the orange|n
il pomodoro|die Tomate|the tomato|n|Vorrei un chilo di pomodori.|Ich hätte gern ein Kilo Tomaten.|I'd like a kilo of tomatoes.
la patata|die Kartoffel|the potato|n
la zucchina|die Zucchini|the courgette|n
il pane|das Brot|bread|n
il formaggio|der Käse|cheese|n
il prosciutto|der Schinken|ham|n|Due etti di prosciutto crudo, per favore.|200 Gramm rohen Schinken, bitte.|200 grams of cured ham, please.
l'uovo (le uova)|das Ei (die Eier)|the egg (the eggs)|n
la pasta|die Nudeln|pasta|n
il riso|der Reis|rice|n
un chilo|ein Kilo|a kilo|ph
mezzo chilo|ein halbes Kilo|half a kilo|ph
un etto|hundert Gramm|a hundred grams|ph
una bottiglia|eine Flasche|a bottle|ph
un pacco|eine Packung|a packet|ph
altro|sonst noch etwas; anderes|anything else; other|x|Altro?|Sonst noch etwas?|Anything else?
basta così|das ist alles|that's all|ph
caro/a|teuer|expensive|adj
fresco/a|frisch|fresh|adj|Le fragole sono freschissime.|Die Erdbeeren sind ganz frisch.|The strawberries are very fresh.
maturo/a|reif|ripe|adj`,
  say: `Quanto costano le mele?|Wie viel kosten die Äpfel?|How much are the apples?
Costano due euro al chilo.|Sie kosten zwei Euro pro Kilo.|They're two euros a kilo.
Vorrei mezzo chilo di zucchine.|Ich hätte gern ein halbes Kilo Zucchini.|I'd like half a kilo of courgettes.
Mi dà anche del pane?|Geben Sie mir auch etwas Brot?|Could you give me some bread too?
Basta così, grazie.|Das ist alles, danke.|That's all, thanks.
Ha delle borse?|Haben Sie Tüten?|Do you have any bags?
Sono maturi questi pomodori?|Sind diese Tomaten reif?|Are these tomatoes ripe?`,
  gram: [
    ["h", TB("Mengen: un chilo di …", "Quantities: un chilo di …")],
    ["p", TB("Nach einer Mengenangabe folgt <b>di</b> ohne Artikel: <b>un chilo di</b> mele, <b>una bottiglia di</b> vino, <b>due etti di</b> formaggio.", "After a quantity comes <b>di</b> without an article: <b>un chilo di</b> mele, <b>una bottiglia di</b> vino, <b>due etti di</b> formaggio.")],
    ["h", TB("Der Teilungsartikel: del, della, dei …", "The partitive: del, della, dei …")],
    ["p", TB("„Etwas / einige“ = <b>di + Artikel</b>: <b>del</b> pane (etwas Brot), <b>della</b> frutta, <b>dei</b> pomodori (ein paar Tomaten), <b>delle</b> uova.", "\"Some\" = <b>di + article</b>: <b>del</b> pane (some bread), <b>della</b> frutta, <b>dei</b> pomodori (some tomatoes), <b>delle</b> uova.")],
    ["h", TB("Plural der Nomen", "Plural of nouns")],
    ["table", { head: [TB("Singular", "singular"), TB("Plural", "plural")], rows: [["il pomodor<b>o</b>", "i pomodor<b>i</b>"], ["la mel<b>a</b>", "le mel<b>e</b>"], ["il pan<b>e</b> / la lezion<b>e</b>", "i pan<b>i</b> / le lezion<b>i</b>"], ["l'uovo", "le uova (!)"]] }],
    ["tip", TB("Ein <b>etto</b> = 100 Gramm. Beim Metzger oder an der Käsetheke bestellt man in Etti: <b>tre etti di mortadella</b>.", "One <b>etto</b> = 100 grams. At the deli counter you order in etti: <b>tre etti di mortadella</b>.")]
  ],
  th: "nouns", quiz: ["it-plural"],
  drill: [
    ["Vorrei un chilo ___ arance.", ["di", "delle", "dei"], 0],
    ["Compro ___ pane per stasera.", ["del", "di", "dello"], 0],
    ["Prendo anche ___ uova.", ["delle", "dei", "degli"], 0],
    ["Quanto ___ le zucchine?", ["costano", "costa", "costi"], 0],
    ["Una bottiglia ___ vino rosso.", ["di", "del", "da"], 0],
    ["la mela → le ___", "mele"],
    ["il pomodoro → i ___", "pomodori"]
  ],
  talk: { t: TB("Am Marktstand", "At the market stall"), scene: TB("Samstagmorgen auf dem Markt in Bologna. Der Händler Gianni ruft dich an seinen Stand.", "Saturday morning at the market in Bologna. The stallholder Gianni calls you over."), who: "Gianni", slots: {}, lines: `a|Buongiorno! Cosa le do oggi?|Guten Morgen! Was darf's heute sein?|Good morning! What can I get you today?
me|Buongiorno! Quanto costano i pomodori?|Guten Morgen! Wie viel kosten die Tomaten?|Good morning! How much are the tomatoes?|Quanto costano questi pomodori?; Buongiorno, quanto vengono i pomodori?
a|Due euro e cinquanta al chilo. Sono freschissimi!|Zwei Euro fünfzig pro Kilo. Ganz frisch!|Two euros fifty a kilo. Very fresh!
me|Allora vorrei un chilo di pomodori.|Dann hätte ich gern ein Kilo Tomaten.|Then I'd like a kilo of tomatoes.|Un chilo di pomodori, per favore.; Vorrei un chilo di pomodori, per favore.
a|Ecco qua. Altro?|Bitte schön. Sonst noch etwas?|Here you go. Anything else?
me|Sì, mezzo chilo di zucchine e due etti di parmigiano.|Ja, ein halbes Kilo Zucchini und 200 Gramm Parmesan.|Yes, half a kilo of courgettes and 200 grams of parmesan.|Mezzo chilo di zucchine e due etti di parmigiano, per favore.
a|Perfetto. Nient'altro?|Perfekt. Sonst nichts?|Perfect. Nothing else?
me|No, basta così. Quant'è?|Nein, das ist alles. Was macht das?|No, that's all. How much is it?|Basta così, grazie. Quanto le devo?; No grazie, quant'è?
a|Sono nove euro in tutto.|Das macht neun Euro insgesamt.|That's nine euros altogether.
me|Ecco a lei. Buona giornata!|Bitte schön. Schönen Tag noch!|Here you are. Have a nice day!|Ecco dieci euro.; Ecco, grazie e buona giornata!` }
});

lesson("A1", { id: "it-a1-10", t: TB("Al ristorante – Essen bestellen", "Al ristorante – Ordering a meal"),
  goal: TB("Du kannst einen Tisch reservieren, im Restaurant bestellen und die Rechnung verlangen.", "You can book a table, order in a restaurant and ask for the bill."),
  words: `il menù|die Speisekarte|the menu|n
l'antipasto|die Vorspeise|the starter|n
il primo|der erste Gang (Pasta, Risotto)|the first course|n|Come primo prendo le lasagne.|Als ersten Gang nehme ich Lasagne.|For my first course I'll have the lasagne.
il secondo|der Hauptgang (Fleisch, Fisch)|the main course|n
il contorno|die Beilage|the side dish|n
il dolce|der Nachtisch|the dessert|n
la carne|das Fleisch|meat|n
il pesce|der Fisch|fish|n
vegetariano/a|vegetarisch|vegetarian|adj|Avete piatti vegetariani?|Haben Sie vegetarische Gerichte?|Do you have vegetarian dishes?
l'insalata|der Salat|the salad|n
il vino della casa|der Hauswein|the house wine|n
il cameriere|der Kellner|the waiter|n
la cameriera|die Kellnerin|the waitress|n
prenotare|reservieren|to book|v
un tavolo per due|ein Tisch für zwei|a table for two|ph
il piatto|der Teller; das Gericht|the plate; the dish|n
il conto|die Rechnung|the bill|n
il coperto|das Gedeck (Brot, Besteck)|the cover charge|n
buon appetito|guten Appetit|enjoy your meal|ph
delizioso/a|köstlich|delicious|adj
la specialità|die Spezialität|the speciality|n|Qual è la specialità della casa?|Was ist die Spezialität des Hauses?|What's the house speciality?
allergico/a|allergisch|allergic|adj`,
  say: `Vorrei prenotare un tavolo per due, per stasera alle otto.|Ich möchte einen Tisch für zwei reservieren, heute Abend um acht.|I'd like to book a table for two, for eight o'clock tonight.
Possiamo vedere il menù?|Können wir die Karte sehen?|Can we see the menu?
Cosa ci consiglia?|Was empfehlen Sie uns?|What do you recommend?
Per me un risotto ai funghi.|Für mich ein Pilzrisotto.|A mushroom risotto for me.
Sono allergico alle noci.|Ich bin allergisch gegen Nüsse.|I'm allergic to nuts.
Il conto, per favore.|Die Rechnung, bitte.|The bill, please.
Era tutto buonissimo!|Es war alles sehr lecker!|Everything was delicious!`,
  gram: [
    ["h", TB("Modalverben: volere, potere, dovere", "Modal verbs: volere, potere, dovere")],
    ["conj", { verbs: ["volere", "potere", "dovere"], tenses: ["Presente"] }],
    ["p", TB("Danach folgt direkt der Infinitiv: <b>Posso pagare?</b> (Darf ich zahlen?) – <b>Vogliamo ordinare.</b> (Wir wollen bestellen.) Höflicher als <i>voglio</i> ist <b>vorrei</b>.", "They're followed directly by the infinitive: <b>Posso pagare?</b> (May I pay?) – <b>Vogliamo ordinare.</b> (We want to order.) More polite than <i>voglio</i> is <b>vorrei</b>.")],
    ["h", TB("Bestimmter Artikel im Plural", "Definite article in the plural")],
    ["table", { head: [TB("Singular", "singular"), TB("Plural", "plural")], rows: [["il primo", "i primi"], ["lo spaghetto", "gli spaghetti"], ["l'antipasto", "gli antipasti"], ["la pizza", "le pizze"], ["l'insalata", "le insalate"]], say: 1 }],
    ["tip", TB("Trinkgeld ist in Italien kein Muss – oft steht schon <b>il coperto</b> (Gedeck) auf der Rechnung.", "Tipping isn't a must in Italy – the bill often already includes <b>il coperto</b> (cover charge).")]
  ],
  th: "irregolari", quiz: ["it-art-def"], forms: { verbs: ["volere", "potere", "dovere"], tenses: ["Presente"] },
  drill: [
    ["___ pagare con la carta?", ["Posso", "Voglio", "Devo"], 0],
    ["Noi ___ ordinare, per favore.", ["vorremmo", "vorrei", "vorrebbe"], 0],
    ["Tu cosa ___ mangiare?", ["vuoi", "vuole", "voglio"], 0],
    ["Scusi, ___ portare il conto?", ["può", "puoi", "posso"], 0, TB("Höflich (Lei) → 3. Person: può.", "Formal (Lei) → 3rd person: può.")],
    ["Prendiamo ___ spaghetti alle vongole.", ["gli", "i", "le"], 0],
    ["Come secondo prendo il ___ alla griglia.", ["pesce", "dolce", "conto"], 0],
    ["Loro ___ partire presto. (dovere)", "devono"]
  ],
  talk: { t: TB("Im Restaurant", "At the restaurant"), scene: TB("Abendessen in einer Trattoria in Rom. Der Kellner Roberto kommt an deinen Tisch.", "Dinner in a trattoria in Rome. Roberto, the waiter, comes to your table."), who: "Roberto", slots: { food: "la carbonara" }, lines: `a|Buonasera! Avete già scelto?|Guten Abend! Haben Sie schon gewählt?|Good evening! Have you chosen already?
me|Sì. Cosa ci consiglia come primo?|Ja. Was empfehlen Sie uns als ersten Gang?|Yes. What do you recommend for the first course?|Cosa ci consiglia?; Sì, cosa consiglia come primo?
a|La carbonara è la specialità della casa.|Die Carbonara ist die Spezialität des Hauses.|The carbonara is the house speciality.
me|Perfetto, per me una carbonara.|Perfekt, für mich eine Carbonara.|Perfect, a carbonara for me.|Allora prendo la carbonara.; Va bene, una carbonara per me.
a|E da bere?|Und zu trinken?|And to drink?
me|Una bottiglia d'acqua naturale e un bicchiere di vino rosso.|Eine Flasche stilles Wasser und ein Glas Rotwein.|A bottle of still water and a glass of red wine.|Un'acqua naturale e un bicchiere di rosso.
a|Benissimo. Desiderate anche un secondo?|Sehr gut. Möchten Sie auch einen Hauptgang?|Very good. Would you like a main course too?
me|No, grazie. Forse dopo prendiamo un dolce.|Nein, danke. Vielleicht nehmen wir danach einen Nachtisch.|No, thanks. Maybe we'll have a dessert afterwards.|No grazie, magari dopo un dolce.
a|Ecco il tiramisù. Buon appetito!|Hier ist das Tiramisu. Guten Appetit!|Here's the tiramisù. Enjoy!
me|Grazie! Era tutto buonissimo. Il conto, per favore.|Danke! Es war alles sehr lecker. Die Rechnung, bitte.|Thanks! Everything was delicious. The bill, please.|Era tutto delizioso! Ci porta il conto, per favore?` }
});

lesson("A1", { id: "it-a1-11", t: TB("Il weekend scorso – Passato prossimo", "Il weekend scorso – The passato prossimo"),
  goal: TB("Du kannst erzählen, was du am Wochenende gemacht hast, mit avere und essere.", "You can say what you did at the weekend, using avere and essere."),
  words: `ieri|gestern|yesterday|adv|Ieri sono andato al mare.|Gestern bin ich ans Meer gefahren.|Yesterday I went to the seaside.
l'altro ieri|vorgestern|the day before yesterday|adv
la settimana scorsa|letzte Woche|last week|ph
il fine settimana scorso|letztes Wochenende|last weekend|ph
lunedì|Montag|Monday|n
martedì|Dienstag|Tuesday|n
mercoledì|Mittwoch|Wednesday|n
giovedì|Donnerstag|Thursday|n
venerdì|Freitag|Friday|n
sabato|Samstag|Saturday|n
domenica|Sonntag|Sunday|n
fare una passeggiata|einen Spaziergang machen|to go for a walk|v
andare al mare|ans Meer fahren|to go to the seaside|v
visitare|besichtigen; besuchen (Ort)|to visit|v
incontrare|treffen|to meet|v|Ho incontrato Paola in centro.|Ich habe Paola in der Stadt getroffen.|I met Paola in town.
divertirsi|Spaß haben|to have fun|v
riposarsi|sich ausruhen|to rest|v
la festa|die Party; das Fest|the party|n
il concerto|das Konzert|the concert|n
la gita|der Ausflug|the trip; the outing|n
rimanere a casa|zu Hause bleiben|to stay at home|v
stanco/a|müde|tired|adj
è stato bellissimo|es war wunderschön|it was wonderful|ph`,
  say: `Cosa hai fatto nel fine settimana?|Was hast du am Wochenende gemacht?|What did you do at the weekend?
Sabato sono andato a una festa.|Am Samstag war ich auf einer Party.|On Saturday I went to a party.
Domenica ho dormito fino a tardi.|Am Sonntag habe ich lange geschlafen.|On Sunday I slept in.
Siamo rimasti a casa.|Wir sind zu Hause geblieben.|We stayed at home.
Ci siamo divertiti un sacco.|Wir hatten riesigen Spaß.|We had a great time.
Hai visto la partita?|Hast du das Spiel gesehen?|Did you see the match?
Non ho fatto niente di speciale.|Ich habe nichts Besonderes gemacht.|I didn't do anything special.`,
  gram: [
    ["h", TB("Passato prossimo = avere/essere + Partizip", "Passato prossimo = avere/essere + participle")],
    ["p", TB("Partizip: -are → <b>-ato</b>, -ere → <b>-uto</b>, -ire → <b>-ito</b>. Viele Verben sind unregelmäßig: fare → <b>fatto</b>, vedere → <b>visto</b>, prendere → <b>preso</b>, essere → <b>stato</b>.", "Participle: -are → <b>-ato</b>, -ere → <b>-uto</b>, -ire → <b>-ito</b>. Many verbs are irregular: fare → <b>fatto</b>, vedere → <b>visto</b>, prendere → <b>preso</b>, essere → <b>stato</b>.")],
    ["p", TB("Die meisten Verben bilden es mit <b>avere</b>. Mit <b>essere</b>: Verben der Bewegung und Veränderung (andare, venire, partire, arrivare, rimanere, diventare …) und alle reflexiven Verben. Dann passt sich das Partizip an: Giulia è andat<b>a</b>, siamo andat<b>i</b>.", "Most verbs use <b>avere</b>. With <b>essere</b>: verbs of movement and change (andare, venire, partire, arrivare, rimanere, diventare …) and all reflexive verbs. Then the participle agrees: Giulia è andat<b>a</b>, siamo andat<b>i</b>.")],
    ["conj", { verbs: ["mangiare", "andare", "divertirsi"], tenses: ["Passato prossimo"] }],
    ["quiz", "it-aux"]
  ],
  th: "pp", quiz: ["it-aux", "it-pp"], forms: { verbs: ["parlare", "andare", "fare", "vedere", "partire", "rimanere"], tenses: ["Passato prossimo"] },
  drill: [
    ["Ieri ___ mangiato una pizza.", ["ho", "sono", "è"], 0],
    ["Sabato ___ andata al cinema.", ["sono", "ho", "hai"], 0],
    ["Giulia è ___ a casa.", ["rimasta", "rimasto", "rimasti"], 0],
    ["Noi ci ___ divertiti molto.", ["siamo", "abbiamo", "sono"], 0],
    ["Cosa hai ___ domenica? (fare)", "fatto"],
    ["Hai ___ il nuovo film? (vedere)", "visto"],
    ["Marco e Luca sono ___ alle dieci. (arrivare)", "arrivati"]
  ],
  talk: { t: TB("Montagmorgen im Büro", "Monday morning at the office"), scene: TB("Montagmorgen an der Kaffeemaschine. Deine Kollegin Sara fragt nach deinem Wochenende.", "Monday morning at the coffee machine. Your colleague Sara asks about your weekend."), who: "Sara", slots: {}, lines: `a|Ciao! Com'è andato il fine settimana?|Hallo! Wie war das Wochenende?|Hi! How was the weekend?
me|Benissimo, grazie! Sabato sono andato al mare.|Sehr gut, danke! Am Samstag bin ich ans Meer gefahren.|Great, thanks! On Saturday I went to the seaside.|Bene! Sabato sono andata al mare.; Molto bene, sabato sono andato al mare.
a|Che bello! Con chi?|Wie schön! Mit wem?|How nice! Who with?
me|Con due amici. Abbiamo fatto il bagno e mangiato il pesce.|Mit zwei Freunden. Wir sind schwimmen gegangen und haben Fisch gegessen.|With two friends. We went swimming and ate fish.|Con degli amici. Abbiamo fatto il bagno e abbiamo mangiato pesce.
a|E domenica cosa hai fatto?|Und was hast du am Sonntag gemacht?|And what did you do on Sunday?
me|Domenica sono rimasto a casa e mi sono riposato.|Am Sonntag bin ich zu Hause geblieben und habe mich ausgeruht.|On Sunday I stayed at home and rested.|Domenica sono rimasta a casa e mi sono riposata.; Sono rimasto a casa a riposarmi.
a|Io invece ho lavorato tutto il weekend.|Ich habe dagegen das ganze Wochenende gearbeitet.|I worked the whole weekend, on the other hand.
me|Mi dispiace! Allora stasera andiamo a bere qualcosa?|Tut mir leid! Gehen wir dann heute Abend was trinken?|I'm sorry! So shall we go for a drink tonight?|Peccato! Stasera beviamo qualcosa insieme?
a|Volentieri! Alle sette?|Gern! Um sieben?|I'd love to! At seven?
me|Perfetto, alle sette.|Perfekt, um sieben.|Perfect, at seven.|Va bene, alle sette!` }
});

lesson("A1", { id: "it-a1-12", t: TB("In viaggio – Zug, Ticket, Hotel", "In viaggio – Train, ticket, hotel"),
  goal: TB("Du kannst eine Fahrkarte kaufen, nach Abfahrtszeiten fragen und im Hotel einchecken.", "You can buy a ticket, ask about departure times and check into a hotel."),
  words: `il treno|der Zug|the train|n
il binario|das Gleis|the platform|n|Il treno parte dal binario tre.|Der Zug fährt von Gleis drei ab.|The train leaves from platform three.
il biglietto|die Fahrkarte; das Ticket|the ticket|n
andata e ritorno|hin und zurück|return|ph
solo andata|einfach (nur Hinfahrt)|single (one way)|ph
la partenza|die Abfahrt|the departure|n
l'arrivo|die Ankunft|the arrival|n
in ritardo|verspätet|late; delayed|ph|Il treno è in ritardo di venti minuti.|Der Zug hat zwanzig Minuten Verspätung.|The train is twenty minutes late.
in orario|pünktlich|on time|ph
convalidare|entwerten|to validate|v
l'albergo|das Hotel|the hotel|n
la camera singola|das Einzelzimmer|the single room|n
la camera doppia|das Doppelzimmer|the double room|n
la colazione inclusa|Frühstück inklusive|breakfast included|ph
la prenotazione|die Reservierung|the booking|n|Ho una prenotazione a nome Weber.|Ich habe eine Reservierung auf den Namen Weber.|I have a booking under the name Weber.
la chiave|der Schlüssel|the key|n
la valigia|der Koffer|the suitcase|n
il passaporto|der Reisepass|the passport|n
la carta d'identità|der Personalausweis|the ID card|n
a che ora|um wie viel Uhr|at what time|ph
quanto dura|wie lange dauert|how long does it take|ph|Quanto dura il viaggio?|Wie lange dauert die Fahrt?|How long does the journey take?
il viaggio|die Reise; die Fahrt|the journey; the trip|n`,
  say: `Un biglietto per Firenze, andata e ritorno.|Eine Fahrkarte nach Florenz, hin und zurück.|A return ticket to Florence.
A che ora parte il prossimo treno per Roma?|Wann fährt der nächste Zug nach Rom?|What time does the next train to Rome leave?
Da quale binario parte?|Von welchem Gleis fährt er?|Which platform does it leave from?
Devo cambiare?|Muss ich umsteigen?|Do I have to change?
Ho prenotato una camera doppia per due notti.|Ich habe ein Doppelzimmer für zwei Nächte reserviert.|I've booked a double room for two nights.
A che ora è la colazione?|Um wie viel Uhr gibt es Frühstück?|What time is breakfast?
Posso lasciare qui la valigia?|Kann ich den Koffer hier lassen?|Can I leave my suitcase here?`,
  gram: [
    ["h", TB("Fragewörter", "Question words")],
    ["table", { head: [TB("Italienisch", "Italian"), TB("Deutsch", "German"), TB("Beispiel", "example")], rows: [
      ["che cosa / cosa", TB("was", "what"), "Cosa prendi?"], ["chi", TB("wer", "who"), "Chi è?"], ["dove", TB("wo / wohin", "where"), "Dove vai?"],
      ["quando", TB("wann", "when"), "Quando parti?"], ["a che ora", TB("um wie viel Uhr", "at what time"), "A che ora arriva?"], ["quanto", TB("wie viel", "how much"), "Quanto costa?"],
      ["come", TB("wie", "how"), "Come stai?"], ["perché", TB("warum", "why"), "Perché ridi?"], ["quale", TB("welche(r/s)", "which"), "Quale binario?"]], say: 2 }],
    ["h", TB("Mit welchem Verkehrsmittel?", "By which means of transport?")],
    ["p", TB("<b>in</b> + Verkehrsmittel ohne Artikel: <b>in treno, in macchina, in aereo, in bici</b>. Aber: <b>a piedi</b> (zu Fuß).", "<b>in</b> + transport without article: <b>in treno, in macchina, in aereo, in bici</b>. But: <b>a piedi</b> (on foot).")],
    ["tip", TB("Regionalzug-Tickets aus Papier musst du vor der Fahrt entwerten (<b>convalidare</b>) – sonst droht eine Strafe.", "Paper tickets for regional trains must be validated (<b>convalidare</b>) before boarding – otherwise you risk a fine.")]
  ],
  th: "questions",
  drill: [
    ["___ parte il treno? – Alle nove.", ["A che ora", "Dove", "Quanto"], 0],
    ["___ costa il biglietto?", ["Quanto", "Quale", "Come"], 0],
    ["Da ___ binario parte?", ["quale", "chi", "come"], 0],
    ["Vado a Milano ___ treno.", ["in", "con il", "a"], 0],
    ["Andiamo in centro ___ piedi.", ["a", "in", "con"], 0],
    ["Il treno è in ___ di dieci minuti.", ["ritardo", "orario", "arrivo"], 0],
    ["Il treno ___ alle otto. (partire)", "parte"]
  ],
  talk: { t: TB("Am Fahrkartenschalter", "At the ticket office"), scene: TB("Bahnhof Milano Centrale. Du willst nach Venedig und kaufst eine Fahrkarte.", "Milan Central Station. You want to go to Venice and buy a ticket."), who: "Impiegato", slots: {}, lines: `a|Buongiorno, mi dica.|Guten Tag, bitte schön?|Good morning, how can I help?
me|Buongiorno, un biglietto per Venezia, per favore.|Guten Tag, eine Fahrkarte nach Venedig, bitte.|Good morning, a ticket to Venice, please.|Vorrei un biglietto per Venezia.; Buongiorno, vorrei un biglietto per Venezia, per favore.
a|Solo andata o andata e ritorno?|Einfach oder hin und zurück?|Single or return?
me|Andata e ritorno, per favore.|Hin und zurück, bitte.|Return, please.|Andata e ritorno.
a|Ecco. Sono trentotto euro.|Bitte. Das macht achtunddreißig Euro.|Here you are. That's thirty-eight euros.
me|A che ora parte il prossimo treno?|Wann fährt der nächste Zug?|What time does the next train leave?|Quando parte il prossimo treno?
a|Alle dieci e un quarto, dal binario dodici.|Um Viertel nach zehn, von Gleis zwölf.|At quarter past ten, from platform twelve.
me|Devo cambiare?|Muss ich umsteigen?|Do I have to change?|Bisogna cambiare?
a|No, è un treno diretto. Arriva alle dodici e mezza.|Nein, das ist ein direkter Zug. Er kommt um halb eins an.|No, it's a direct train. It arrives at half past twelve.
me|Perfetto, grazie mille. Arrivederci!|Perfekt, vielen Dank. Auf Wiedersehen!|Perfect, thank you very much. Goodbye!|Grazie, arrivederci!` }
});

/* Italiano A2 · 1–5 */
lesson("A2", { id: "it-a2-01", t: TB("Da bambino – Das Imperfetto", "Da bambino – The imperfetto"),
  goal: TB("Du kannst erzählen, wie etwas früher war, und Gewohnheiten in der Vergangenheit beschreiben.", "You can describe what things used to be like and talk about past habits."),
  words: `da bambino/a|als Kind|as a child|ph|Da bambino giocavo sempre a calcio.|Als Kind habe ich immer Fußball gespielt.|As a child I always played football.
da piccolo/a|als ich klein war|when I was little|ph
l'infanzia|die Kindheit|childhood|n
la scuola elementare|die Grundschule|primary school|n
il maestro / la maestra|der Lehrer / die Lehrerin (Grundschule)|the primary school teacher|n
il compagno di classe|der Klassenkamerad|the classmate|n
le vacanze estive|die Sommerferien|the summer holidays|n
la campagna|das Land (nicht Stadt)|the countryside|n|D'estate andavamo in campagna dai nonni.|Im Sommer fuhren wir zu den Großeltern aufs Land.|In summer we used to go to our grandparents' in the country.
il giocattolo|das Spielzeug|the toy|n
giocare a nascondino|Verstecken spielen|to play hide and seek|v
arrampicarsi|klettern|to climb|v
timido/a|schüchtern|shy|adj
vivace|lebhaft|lively|adj
tranquillo/a|ruhig|calm; quiet|adj
ogni estate|jeden Sommer|every summer|ph
una volta|früher; einmal|once; in the past|ph
di solito|normalerweise; gewöhnlich|usually|adv
mentre|während|while|x
ricordarsi|sich erinnern|to remember|v|Ti ricordi la tua prima maestra?|Erinnerst du dich an deine erste Lehrerin?|Do you remember your first teacher?
crescere|aufwachsen|to grow up|v
il ricordo|die Erinnerung|the memory|n
avere paura di|Angst haben vor|to be afraid of|ph`,
  say: `Dove sei cresciuto?|Wo bist du aufgewachsen?|Where did you grow up?
Da piccolo abitavo in un paesino in montagna.|Als ich klein war, wohnte ich in einem Bergdorf.|When I was little I lived in a mountain village.
Ogni domenica mangiavamo dai nonni.|Jeden Sonntag aßen wir bei den Großeltern.|Every Sunday we ate at our grandparents'.
Ero un bambino molto timido.|Ich war ein sehr schüchternes Kind.|I was a very shy child.
Mio padre lavorava in una fabbrica.|Mein Vater arbeitete in einer Fabrik.|My father worked in a factory.
Una volta qui c'era un cinema.|Früher war hier ein Kino.|There used to be a cinema here.
Avevo paura del buio.|Ich hatte Angst vor der Dunkelheit.|I was afraid of the dark.`,
  gram: [
    ["h", TB("Imperfetto: Bildung", "Imperfetto: forms")],
    ["p", TB("Stamm + <b>-avo / -evo / -ivo</b>. Fast alle Verben sind regelmäßig, auch <i>avere</i> (avevo) und <i>andare</i> (andavo). Ausnahmen: <b>essere</b> (ero), <b>fare</b> (facevo), <b>dire</b> (dicevo), <b>bere</b> (bevevo).", "Stem + <b>-avo / -evo / -ivo</b>. Almost all verbs are regular, even <i>avere</i> (avevo) and <i>andare</i> (andavo). Exceptions: <b>essere</b> (ero), <b>fare</b> (facevo), <b>dire</b> (dicevo), <b>bere</b> (bevevo).")],
    ["conj", { verbs: ["giocare", "essere", "fare"], tenses: ["Imperfetto"] }],
    ["h", TB("Wann Imperfetto?", "When to use the imperfetto?")],
    ["p", TB("Für <b>Gewohnheiten</b> (ogni estate, di solito, sempre), <b>Beschreibungen</b> (Wetter, Aussehen, Gefühle, Alter) und <b>Hintergründe</b>, die gerade andauerten.", "For <b>habits</b> (ogni estate, di solito, sempre), <b>descriptions</b> (weather, looks, feelings, age) and <b>background situations</b> that were going on.")],
    ["tip", TB("Merksatz: Imperfetto ist der Film, der läuft – das Passato prossimo ist das Foto eines Moments.", "Rule of thumb: the imperfetto is the film that keeps running – the passato prossimo is a snapshot of one moment.")]
  ],
  th: "imperfetto", quiz: ["it-imperfetto"], forms: { verbs: ["abitare", "avere", "essere", "fare", "andare", "leggere", "dormire"], tenses: ["Imperfetto"] },
  drill: [
    ["Da bambino ___ molto timido.", ["ero", "sono stato", "eri"], 0],
    ["Ogni estate ___ al mare con i miei.", ["andavamo", "siamo andati", "andiamo"], 0],
    ["Mia nonna ___ benissimo.", ["cucinava", "ha cucinato", "cucinavo"], 0],
    ["Quando ___ dieci anni, abitavo a Torino.", ["avevo", "ho avuto", "avevi"], 0],
    ["Tu cosa ___ il sabato? (fare)", "facevi"],
    ["Loro ___ sempre tardi. (arrivare)", "arrivavano"],
    ["Noi ___ in campagna. (vivere)", "vivevamo"]
  ],
  talk: { t: TB("Erinnerungen", "Memories"), scene: TB("Beim Abendessen erzählt dir deine Freundin Lucia von ihrer Kindheit in Sizilien und fragt nach deiner.", "Over dinner, your friend Lucia tells you about her childhood in Sicily and asks about yours."), who: "Lucia", slots: {}, lines: `a|Da bambina passavo tutte le estati da mia nonna a Siracusa. E tu, dove sei cresciuto?|Als Kind verbrachte ich alle Sommer bei meiner Oma in Syrakus. Und du, wo bist du aufgewachsen?|As a child I spent every summer at my grandmother's in Syracuse. And you, where did you grow up?
me|Sono cresciuto in un piccolo paese vicino a Stoccarda.|Ich bin in einem kleinen Ort bei Stuttgart aufgewachsen.|I grew up in a small village near Stuttgart.|Sono cresciuta in un piccolo paese vicino a Stoccarda.; Sono cresciuto in un paesino vicino a Stoccarda.
a|E com'eri da piccolo? Tranquillo?|Und wie warst du als Kind? Ruhig?|And what were you like as a child? Quiet?
me|No, ero molto vivace. Giocavo sempre fuori con i miei amici.|Nein, ich war sehr lebhaft. Ich spielte immer draußen mit meinen Freunden.|No, I was very lively. I always played outside with my friends.|No, ero vivace e giocavo sempre fuori.; Ero molto vivace, giocavo sempre fuori con gli amici.
a|Che carino! E cosa facevate d'estate?|Wie süß! Und was habt ihr im Sommer gemacht?|How sweet! And what did you do in the summer?
me|Di solito andavamo in vacanza al lago.|Normalerweise fuhren wir an den See in den Urlaub.|We usually went on holiday to the lake.|D'estate andavamo al lago.; Di solito andavamo al lago in vacanza.
a|Io invece avevo paura dell'acqua! Mio fratello nuotava benissimo.|Ich hatte dagegen Angst vor dem Wasser! Mein Bruder schwamm super.|I was afraid of the water, on the other hand! My brother swam really well.
me|Davvero? E adesso nuoti?|Wirklich? Und schwimmst du jetzt?|Really? And do you swim now?|Davvero? Adesso sai nuotare?
a|Sì, ho imparato a vent'anni!|Ja, ich habe es mit zwanzig gelernt!|Yes, I learnt at twenty!` }
});

lesson("A2", { id: "it-a2-02", t: TB("Cosa è successo? – Passato prossimo oder Imperfetto", "Cosa è successo? – Passato prossimo or imperfetto"),
  goal: TB("Du kannst eine kleine Geschichte erzählen und Hintergrund und Ereignis unterscheiden.", "You can tell a short story and distinguish background from events."),
  words: `succedere|passieren|to happen|v|Cosa è successo?|Was ist passiert?|What happened?
all'improvviso|plötzlich|suddenly|adv|All'improvviso è andata via la luce.|Plötzlich ist der Strom ausgefallen.|Suddenly the power went off.
mentre|während|while|x
quando|als; wenn|when|x
a un certo punto|irgendwann; auf einmal|at some point|ph
alla fine|am Ende; schließlich|in the end|ph
per fortuna|zum Glück|luckily|ph
purtroppo|leider|unfortunately|adv
perdere|verlieren; verpassen|to lose; to miss|v|Ho perso il treno.|Ich habe den Zug verpasst.|I missed the train.
dimenticare|vergessen|to forget|v
rompersi|kaputtgehen; sich brechen|to break|v|Mi si è rotto il telefono.|Mein Handy ist kaputtgegangen.|My phone broke.
cadere|fallen; hinfallen|to fall|v
la pioggia|der Regen|the rain|n
piovere|regnen|to rain|v
il portafoglio|der Geldbeutel|the wallet|n
le chiavi|die Schlüssel|the keys|n
lo sciopero|der Streik|the strike|n
l'incidente|der Unfall|the accident|n
la polizia|die Polizei|the police|n
preoccupato/a|besorgt|worried|adj
spaventato/a|erschrocken|frightened|adj
che sfortuna!|so ein Pech!|what bad luck!|ph
che fortuna!|so ein Glück!|how lucky!|ph`,
  say: `Mentre aspettavo l'autobus, ha cominciato a piovere.|Während ich auf den Bus wartete, fing es an zu regnen.|While I was waiting for the bus, it started to rain.
Quando sono arrivato, il negozio era già chiuso.|Als ich ankam, war der Laden schon zu.|When I arrived, the shop was already closed.
Ho perso il portafoglio in metro.|Ich habe den Geldbeutel in der U-Bahn verloren.|I lost my wallet on the underground.
C'era uno sciopero dei treni.|Es gab einen Bahnstreik.|There was a train strike.
Per fortuna nessuno si è fatto male.|Zum Glück hat sich niemand verletzt.|Luckily nobody got hurt.
Non ci posso credere!|Ich kann es nicht glauben!|I can't believe it!
E poi cosa hai fatto?|Und was hast du dann gemacht?|And then what did you do?`,
  gram: [
    ["h", TB("Hintergrund + Ereignis", "Background + event")],
    ["table", { head: [TB("Imperfetto (Hintergrund)", "imperfetto (background)"), TB("Passato prossimo (Ereignis)", "passato prossimo (event)")], rows: [
      ["Mentre <b>dormivo</b>, …", "… <b>è suonato</b> il telefono."], ["<b>Era</b> tardi e <b>pioveva</b>.", "<b>Ho preso</b> un taxi."], ["<b>Avevo</b> fame, …", "… così <b>ho ordinato</b> una pizza."]] }],
    ["p", TB("Frage dich: Ist es eine <b>Situation</b> (Wie war es? Was lief gerade?) → Imperfetto. Ist es eine <b>abgeschlossene Handlung</b> (Was ist dann passiert?) → Passato prossimo.", "Ask yourself: is it a <b>situation</b> (What was it like? What was going on?) → imperfetto. Is it a <b>completed action</b> (What happened next?) → passato prossimo.")],
    ["tip", TB("Signalwörter: <i>mentre, di solito, sempre, ogni giorno</i> → Imperfetto. <i>all'improvviso, a un certo punto, ieri, una volta (einmal), poi</i> → Passato prossimo.", "Signal words: <i>mentre, di solito, sempre, ogni giorno</i> → imperfetto. <i>all'improvviso, a un certo punto, ieri, una volta (once), poi</i> → passato prossimo.")]
  ],
  th: "ppimp", quiz: ["it-pp-imp"],
  drill: [
    ["Mentre ___ la doccia, è arrivato un messaggio.", ["facevo", "ho fatto", "faccio"], 0],
    ["Ieri sera ___ un film bellissimo.", ["ho visto", "vedevo", "vedo"], 0],
    ["___ freddo, quindi ho messo il cappotto.", ["Faceva", "Ha fatto", "Fa"], 0],
    ["All'improvviso ___ la luce.", ["è andata via", "andava via", "va via"], 0],
    ["Quando ero piccolo, ___ sempre al parco.", ["andavo", "sono andato", "vado"], 0],
    ["Purtroppo ___ il treno delle otto. (perdere, io)", "ho perso"],
    ["Non sono uscito perché ___ . (piovere)", "pioveva"]
  ],
  talk: { t: TB("Ein chaotischer Tag", "A chaotic day"), scene: TB("Du kommst zu spät zum Treffen mit Alessandro und erklärst, was passiert ist.", "You're late meeting Alessandro and explain what happened."), who: "Alessandro", slots: {}, lines: `a|Finalmente! Ti aspetto da mezz'ora. Cosa è successo?|Endlich! Ich warte seit einer halben Stunde auf dich. Was ist passiert?|Finally! I've been waiting for you for half an hour. What happened?
me|Scusa! Stamattina ho perso il treno.|Entschuldige! Heute Morgen habe ich den Zug verpasst.|Sorry! This morning I missed the train.|Scusami, ho perso il treno stamattina.
a|Davvero? Come mai?|Echt? Wie das?|Really? How come?
me|Mentre uscivo di casa, mi sono accorto che non avevo le chiavi.|Als ich aus dem Haus ging, merkte ich, dass ich die Schlüssel nicht hatte.|As I was leaving the house, I realised I didn't have my keys.|Mentre uscivo, ho visto che non avevo le chiavi.
a|Che sfortuna! E poi?|So ein Pech! Und dann?|What bad luck! And then?
me|Le ho cercate per dieci minuti. Erano in cucina!|Ich habe sie zehn Minuten gesucht. Sie lagen in der Küche!|I looked for them for ten minutes. They were in the kitchen!|Le ho cercate dappertutto. Erano in cucina.
a|Ahah, classico! E il treno?|Haha, typisch! Und der Zug?|Haha, classic! And the train?
me|Quando sono arrivato in stazione, il treno era già partito.|Als ich am Bahnhof ankam, war der Zug schon weg.|When I got to the station, the train had already left.|Quando sono arrivata, il treno era già partito.
a|Va be', l'importante è che sei qui. Prendiamo un caffè?|Na gut, Hauptsache du bist da. Trinken wir einen Kaffee?|Oh well, the main thing is you're here. Shall we have a coffee?
me|Sì, offro io per farmi perdonare!|Ja, ich lade dich ein, als Entschuldigung!|Yes, it's on me to make up for it!|Volentieri, offro io!` }
});

lesson("A2", { id: "it-a2-03", t: TB("Progetti – Futuro und Wetter", "Progetti – Future and weather"),
  goal: TB("Du kannst über Pläne und Vermutungen sprechen und das Wetter beschreiben.", "You can talk about plans and guesses and describe the weather."),
  words: `il progetto|das Vorhaben; das Projekt|the plan; the project|n
l'anno prossimo|nächstes Jahr|next year|ph|L'anno prossimo andrò in Sicilia.|Nächstes Jahr fahre ich nach Sizilien.|Next year I'll go to Sicily.
fra due settimane|in zwei Wochen|in two weeks|ph
dopodomani|übermorgen|the day after tomorrow|adv
il tempo|das Wetter; die Zeit|the weather; time|n|Che tempo fa oggi?|Wie ist das Wetter heute?|What's the weather like today?
fa bel tempo|das Wetter ist schön|the weather is nice|ph
fa brutto tempo|das Wetter ist schlecht|the weather is bad|ph
fa caldo|es ist heiß|it's hot|ph
fa freddo|es ist kalt|it's cold|ph
c'è il sole|die Sonne scheint|it's sunny|ph
è nuvoloso|es ist bewölkt|it's cloudy|ph
piove|es regnet|it's raining|ph
nevica|es schneit|it's snowing|ph
c'è vento|es ist windig|it's windy|ph
le previsioni del tempo|die Wettervorhersage|the weather forecast|n
la temperatura|die Temperatur|the temperature|n
il grado|das Grad|the degree|n
forse|vielleicht|maybe|adv
probabilmente|wahrscheinlich|probably|adv
sperare|hoffen|to hope|v|Spero che domani faccia bello.|Ich hoffe, morgen ist schönes Wetter.|I hope the weather's nice tomorrow.
cambiare lavoro|den Job wechseln|to change jobs|v
trasferirsi|umziehen (in andere Stadt)|to move (to another city)|v`,
  say: `Cosa farai quest'estate?|Was machst du diesen Sommer?|What will you do this summer?
Quest'estate andrò in Puglia con la mia ragazza.|Diesen Sommer fahre ich mit meiner Freundin nach Apulien.|This summer I'm going to Puglia with my girlfriend.
Domani pioverà tutto il giorno.|Morgen regnet es den ganzen Tag.|Tomorrow it will rain all day.
Saranno le otto.|Es wird wohl acht Uhr sein.|It must be about eight.
Quando avrò tempo, imparerò a suonare il piano.|Wenn ich Zeit habe, lerne ich Klavier spielen.|When I have time, I'll learn to play the piano.
Ci sono trenta gradi!|Es hat dreißig Grad!|It's thirty degrees!
Speriamo bene!|Hoffen wir das Beste!|Let's hope for the best!`,
  gram: [
    ["h", TB("Futuro semplice", "Simple future")],
    ["p", TB("Infinitiv ohne -e + Endung: parler<b>ò</b>, parler<b>ai</b>, parler<b>à</b>, parler<b>emo</b>, parler<b>ete</b>, parler<b>anno</b>. Bei -are wird a zu e: parlare → <b>parler</b>ò.", "Infinitive without -e + ending: parler<b>ò</b>, parler<b>ai</b>, parler<b>à</b>, parler<b>emo</b>, parler<b>ete</b>, parler<b>anno</b>. In -are verbs the a becomes e: parlare → <b>parler</b>ò.")],
    ["conj", { verbs: ["parlare", "essere", "andare"], tenses: ["Futuro semplice"] }],
    ["p", TB("Im Alltag benutzt man für die nahe Zukunft oft einfach das Präsens: <b>Domani vado a Roma.</b> Das Futur drückt auch <b>Vermutungen</b> aus: <b>Sarà stanco.</b> (Er ist wohl müde.)", "In everyday speech the present is often used for the near future: <b>Domani vado a Roma.</b> The future also expresses <b>guesses</b>: <b>Sarà stanco.</b> (He's probably tired.)")],
    ["tip", TB("Wetter mit <b>fare</b>: fa caldo, fa freddo, fa bel tempo. Aber: <b>c'è</b> il sole, <b>c'è</b> vento, <b>piove</b>, <b>nevica</b>.", "Weather with <b>fare</b>: fa caldo, fa freddo, fa bel tempo. But: <b>c'è</b> il sole, <b>c'è</b> vento, <b>piove</b>, <b>nevica</b>.")]
  ],
  th: "futuro", quiz: ["it-futuro"], forms: { verbs: ["parlare", "prendere", "partire", "essere", "avere", "andare", "fare", "venire"], tenses: ["Futuro semplice"] },
  drill: [
    ["L'anno prossimo ___ a Milano.", ["mi trasferirò", "mi trasferivo", "mi sono trasferito"], 0],
    ["Domani ___ bel tempo.", ["farà", "fa stato", "faceva"], 0],
    ["Non trovo le chiavi. ___ in macchina, forse.", ["Saranno", "Sono state", "Erano"], 0, TB("Vermutung → Futur: Sie werden wohl im Auto sein.", "A guess → future: They're probably in the car.")],
    ["Oggi ___ il sole.", ["c'è", "fa", "è"], 0],
    ["In inverno a Milano ___ freddo.", ["fa", "c'è", "è"], 0],
    ["Noi ___ alle nove. (partire)", "partiremo"],
    ["Tu ___ a cena da noi? (venire)", "verrai"]
  ],
  talk: { t: TB("Sommerpläne", "Summer plans"), scene: TB("Du telefonierst mit deinem Freund Andrea und ihr plant den Sommer.", "You're on the phone with your friend Andrea, planning the summer."), who: "Andrea", slots: {}, lines: `a|Allora, cosa farai quest'estate?|Also, was machst du diesen Sommer?|So, what are you going to do this summer?
me|Ad agosto andrò in Sardegna per due settimane.|Im August fahre ich zwei Wochen nach Sardinien.|In August I'm going to Sardinia for two weeks.|Ad agosto vado in Sardegna per due settimane.; Andrò in Sardegna ad agosto.
a|Che bello! Da solo?|Wie schön! Allein?|How lovely! On your own?
me|No, con degli amici. Affitteremo una casa vicino al mare.|Nein, mit Freunden. Wir mieten ein Haus am Meer.|No, with some friends. We'll rent a house near the sea.|No, con amici. Affittiamo una casa al mare.
a|Fantastico. Ma ad agosto farà un caldo terribile!|Fantastisch. Aber im August wird es schrecklich heiß!|Fantastic. But in August it'll be terribly hot!
me|Non importa, io adoro il caldo. E tu cosa farai?|Egal, ich liebe die Hitze. Und was machst du?|Never mind, I love the heat. And what will you do?|Non fa niente, amo il caldo. E tu?
a|Io forse cambierò lavoro, quindi non so ancora.|Ich wechsle vielleicht den Job, deshalb weiß ich es noch nicht.|I might change jobs, so I don't know yet.
me|Davvero? Quando lo saprai?|Wirklich? Wann weißt du es?|Really? When will you know?|Ah sì? Quando lo saprai?
a|Probabilmente a fine mese. Ti farò sapere!|Wahrscheinlich Ende des Monats. Ich sag dir Bescheid!|Probably at the end of the month. I'll let you know!
me|In bocca al lupo!|Viel Glück! (wörtl. In den Rachen des Wolfes)|Good luck!|In bocca al lupo, allora!` }
});

lesson("A2", { id: "it-a2-04", t: TB("Al lavoro – Beruf, Büro, Telefon", "Al lavoro – Job, office, phone"),
  goal: TB("Du kannst über deinen Beruf sprechen, formell telefonieren und sagen, was du gerade tust.", "You can talk about your job, make formal phone calls and say what you're doing right now."),
  words: `il lavoro|die Arbeit; der Job|the work; the job|n|Che lavoro fai?|Was machst du beruflich?|What do you do for a living?
l'ufficio|das Büro|the office|n
il/la collega|der/die Kollege/Kollegin|the colleague|n
il capo|der Chef|the boss|n
la riunione|die Besprechung; das Meeting|the meeting|n|Ho una riunione alle tre.|Ich habe um drei ein Meeting.|I have a meeting at three.
l'azienda|die Firma; das Unternehmen|the company|n
il cliente|der Kunde|the client; the customer|n
lo stipendio|das Gehalt|the salary|n
il contratto|der Vertrag|the contract|n
l'ingegnere|der Ingenieur|the engineer|n
l'impiegato/a|der/die Angestellte|the employee; the clerk|n
il medico|der Arzt|the doctor|n
l'avvocato|der Anwalt|the lawyer|n
lo studente / la studentessa|der Student / die Studentin|the student|n
lavorare in proprio|selbständig sein|to be self-employed|v
fare uno stage|ein Praktikum machen|to do an internship|v
la scadenza|die Frist; die Deadline|the deadline|n
il messaggio|die Nachricht|the message|n
richiamare|zurückrufen|to call back|v|La richiamo più tardi.|Ich rufe Sie später zurück.|I'll call you back later.
occupato/a|beschäftigt; besetzt|busy; engaged|adj
attendere in linea|in der Leitung bleiben|to hold the line|ph
pronto?|hallo? (am Telefon)|hello? (on the phone)|ph`,
  say: `Faccio l'ingegnere in un'azienda di Monaco.|Ich bin Ingenieur in einer Firma in München.|I'm an engineer at a company in Munich.
Lavoro nel marketing.|Ich arbeite im Marketing.|I work in marketing.
In questo momento sto lavorando a un progetto nuovo.|Im Moment arbeite ich an einem neuen Projekt.|At the moment I'm working on a new project.
Pronto, parlo con l'ufficio vendite?|Hallo, spreche ich mit dem Vertrieb?|Hello, am I speaking to the sales office?
Vorrei parlare con la dottoressa Ferri.|Ich möchte mit Frau Dr. Ferri sprechen.|I'd like to speak to Dr Ferri.
In questo momento è in riunione.|Sie ist gerade in einer Besprechung.|She's in a meeting at the moment.
Posso lasciare un messaggio?|Kann ich eine Nachricht hinterlassen?|Can I leave a message?`,
  gram: [
    ["h", TB("stare + Gerundium: gerade etwas tun", "stare + gerund: doing something right now")],
    ["p", TB("<b>sto, stai, sta, stiamo, state, stanno</b> + Gerundium. Gerundium: -are → <b>-ando</b>, -ere/-ire → <b>-endo</b>. Unregelmäßig: fare → <b>facendo</b>, dire → <b>dicendo</b>, bere → <b>bevendo</b>.", "<b>sto, stai, sta, stiamo, state, stanno</b> + gerund. Gerund: -are → <b>-ando</b>, -ere/-ire → <b>-endo</b>. Irregular: fare → <b>facendo</b>, dire → <b>dicendo</b>, bere → <b>bevendo</b>.")],
    ["ex", [["Sto lavorando.", "Ich arbeite gerade.", "I'm working."], ["Cosa stai facendo?", "Was machst du gerade?", "What are you doing?"], ["Stanno scrivendo un'email.", "Sie schreiben gerade eine E-Mail.", "They're writing an email."]]],
    ["h", TB("Berufe mit <i>fare</i>", "Jobs with <i>fare</i>")],
    ["p", TB("<b>Faccio l'ingegnere</b> oder <b>Sono ingegnere</b> – beides heißt: Ich bin Ingenieur. Mit <i>fare</i> steht der Artikel.", "<b>Faccio l'ingegnere</b> or <b>Sono ingegnere</b> – both mean I'm an engineer. With <i>fare</i> you use the article.")],
    ["tip", TB("Am Telefon im Beruf siezt man: <b>La</b> richiamo (ich rufe <i>Sie</i> zurück), <b>Le</b> mando un'email (ich schicke <i>Ihnen</i> …). Groß geschrieben in Briefen, im Gespräch egal.", "On business calls you use the formal form: <b>La</b> richiamo (I'll call <i>you</i> back), <b>Le</b> mando un'email (I'll send <i>you</i> …).")]
  ],
  th: "strutture",
  drill: [
    ["Non posso parlare, sto ___ .", ["guidando", "guidato", "guidare"], 0],
    ["Cosa stai ___ ? (fare)", "facendo"],
    ["Loro stanno ___ la presentazione. (preparare)", "preparando"],
    ["___ l'avvocato da dieci anni.", ["Faccio", "Sono", "Lavoro"], 0],
    ["Il dottor Bassi è ___ , può richiamare?", ["occupato", "occupata", "lavoro"], 0],
    ["La ___ domani mattina. (richiamare, io)", "richiamo"],
    ["Ho una ___ con un cliente alle dieci.", ["riunione", "scadenza", "stipendio"], 0]
  ],
  talk: { t: TB("Ein Geschäftsanruf", "A business call"), scene: TB("Du rufst bei der Firma Ferri & Co. in Turin an und möchtest Herrn Conti sprechen.", "You phone the company Ferri & Co. in Turin and want to speak to Mr Conti."), who: "Segretaria", slots: { name: "Weber" }, lines: `a|Ferri e Co., buongiorno!|Ferri & Co., guten Tag!|Ferri & Co., good morning!
me|Buongiorno, sono {name} della ditta Siemens. Vorrei parlare con il signor Conti.|Guten Tag, hier ist … von der Firma Siemens. Ich möchte Herrn Conti sprechen.|Good morning, this is … from Siemens. I'd like to speak to Mr Conti.|Buongiorno, sono {name}. Posso parlare con il signor Conti?
a|Un attimo, prego. Mi dispiace, il signor Conti è in riunione.|Einen Moment, bitte. Tut mir leid, Herr Conti ist in einer Besprechung.|One moment, please. I'm sorry, Mr Conti is in a meeting.
me|Posso lasciare un messaggio?|Kann ich eine Nachricht hinterlassen?|Can I leave a message?|Allora posso lasciare un messaggio?
a|Certo, mi dica.|Natürlich, bitte.|Of course, go ahead.
me|Può dirgli che ho ricevuto il contratto e lo sto controllando?|Können Sie ihm sagen, dass ich den Vertrag bekommen habe und ihn gerade prüfe?|Could you tell him that I've received the contract and I'm checking it?|Gli dica che ho ricevuto il contratto e lo sto controllando.
a|Senz'altro. Vuole essere richiamato?|Selbstverständlich. Möchten Sie zurückgerufen werden?|Certainly. Would you like him to call you back?
me|Sì, grazie. Il mio numero è zero zero quattro nove, otto nove, uno due tre.|Ja, danke. Meine Nummer ist 0049 89 123.|Yes, please. My number is 0049 89 123.|Sì, grazie. Il numero è zero zero quattro nove otto nove uno due tre.
a|Perfetto. Glielo dico appena finisce la riunione.|Perfekt. Ich sage es ihm, sobald die Besprechung vorbei ist.|Perfect. I'll tell him as soon as the meeting's over.
me|Grazie mille, buona giornata!|Vielen Dank, schönen Tag noch!|Thank you very much, have a nice day!|Grazie, arrivederci!` }
});

lesson("A2", { id: "it-a2-05", t: TB("Dal medico – Körper, Beschwerden, Imperativ", "Dal medico – Body, symptoms, imperative"),
  goal: TB("Du kannst sagen, was dir wehtut, beim Arzt Beschwerden beschreiben und Ratschläge verstehen.", "You can say what hurts, describe symptoms at the doctor's and understand advice."),
  words: `la testa|der Kopf|the head|n|Ho mal di testa.|Ich habe Kopfschmerzen.|I have a headache.
la gola|der Hals (innen)|the throat|n
la pancia|der Bauch|the stomach; the belly|n
la schiena|der Rücken|the back|n
il braccio (le braccia)|der Arm (die Arme)|the arm|n
la gamba|das Bein|the leg|n
il ginocchio|das Knie|the knee|n
il piede|der Fuß|the foot|n
la mano (le mani)|die Hand (die Hände)|the hand|n
l'occhio|das Auge|the eye|n
la febbre|das Fieber|fever; temperature|n
il raffreddore|die Erkältung; der Schnupfen|the cold|n
la tosse|der Husten|the cough|n
l'influenza|die Grippe|the flu|n
la ricetta|das Rezept|the prescription|n
la medicina|das Medikament|the medicine|n
la pastiglia|die Tablette|the tablet|n
il dolore|der Schmerz|the pain|n
fare male|wehtun|to hurt|v|Mi fa male la schiena.|Mir tut der Rücken weh.|My back hurts.
riposare|sich ausruhen|to rest|v
guarire|gesund werden; heilen|to get better; to heal|v
stare male|sich schlecht fühlen|to feel ill|v
il pronto soccorso|die Notaufnahme|A&E; emergency room|n`,
  say: `Non mi sento bene.|Ich fühle mich nicht gut.|I don't feel well.
Mi fa male la gola.|Mir tut der Hals weh.|My throat hurts.
Mi fanno male le gambe.|Mir tun die Beine weh.|My legs hurt.
Ho la febbre da due giorni.|Ich habe seit zwei Tagen Fieber.|I've had a temperature for two days.
Prenda queste pastiglie due volte al giorno.|Nehmen Sie diese Tabletten zweimal täglich.|Take these tablets twice a day.
Resti a letto e beva molta acqua.|Bleiben Sie im Bett und trinken Sie viel Wasser.|Stay in bed and drink plenty of water.
Guarisci presto!|Gute Besserung!|Get well soon!`,
  gram: [
    ["h", TB("<i>mi fa male</i> / <i>mi fanno male</i>", "<i>mi fa male</i> / <i>mi fanno male</i>")],
    ["p", TB("Wie <i>piacere</i>: Das schmerzende Körperteil ist das Subjekt. <b>Mi fa male</b> la testa – <b>mi fanno male</b> i piedi.", "Like <i>piacere</i>: the part that hurts is the subject. <b>Mi fa male</b> la testa – <b>mi fanno male</b> i piedi.")],
    ["h", TB("Imperativ: tu und Lei", "Imperative: tu and Lei")],
    ["table", { head: [TB("", ""), "tu", "Lei", "voi"], rows: [["prendere", "prendi", "prenda", "prendete"], ["riposare", "riposa", "riposi", "riposate"], ["dormire", "dormi", "dorma", "dormite"], ["fare", "fa' / fai", "faccia", "fate"], ["bere", "bevi", "beva", "bevete"]] }],
    ["p", TB("Verneinung bei <i>tu</i>: <b>non + Infinitiv</b>: <b>Non preoccuparti!</b> – <b>Non toccarlo!</b> Bei Lei/voi einfach <b>non</b> davor: <b>Non si preoccupi.</b>", "Negative with <i>tu</i>: <b>non + infinitive</b>: <b>Non preoccuparti!</b> – <b>Non toccarlo!</b> With Lei/voi just put <b>non</b> in front: <b>Non si preoccupi.</b>")],
    ["tip", TB("Bei Lei sind die Endungen „vertauscht“: -are → <b>-i</b> (riposi), -ere/-ire → <b>-a</b> (prenda, dorma).", "With Lei the endings are \"swapped\": -are → <b>-i</b> (riposi), -ere/-ire → <b>-a</b> (prenda, dorma).")]
  ],
  th: "imperativo", quiz: ["it-imperativo"],
  drill: [
    ["Mi ___ male la testa.", ["fa", "fanno", "fai"], 0],
    ["Mi ___ male gli occhi.", ["fanno", "fa", "fate"], 0],
    ["Signora, ___ queste pastiglie dopo i pasti.", ["prenda", "prendi", "prende"], 0],
    ["Marco, ___ a letto e riposati!", ["resta", "resti", "restare"], 0],
    ["Non ___ , non è niente di grave! (preoccuparsi, tu)", "preoccuparti"],
    ["Ho mal ___ gola.", ["di", "a", "alla"], 0],
    ["Dottore, ho la ___ a trentotto.", ["febbre", "tosse", "ricetta"], 0]
  ],
  talk: { t: TB("In der Arztpraxis", "At the doctor's"), scene: TB("Du bist im Urlaub in Lecce krank geworden und gehst zur Ärztin, Dottoressa Greco.", "You got ill on holiday in Lecce and see the doctor, Dr Greco."), who: "Dottoressa Greco", slots: {}, lines: `a|Buongiorno, si accomodi. Cosa si sente?|Guten Tag, nehmen Sie Platz. Was fehlt Ihnen?|Good morning, take a seat. What seems to be the problem?
me|Buongiorno, dottoressa. Mi fa male la gola e ho la tosse.|Guten Tag, Frau Doktor. Mir tut der Hals weh und ich habe Husten.|Good morning, doctor. My throat hurts and I have a cough.|Ho mal di gola e la tosse.; Mi fa male la gola e ho anche la tosse.
a|Da quanto tempo?|Seit wann?|Since when?
me|Da tre giorni. Ieri sera avevo anche la febbre.|Seit drei Tagen. Gestern Abend hatte ich auch Fieber.|For three days. Last night I had a temperature too.|Da tre giorni, e ieri avevo la febbre.
a|Vediamo… È un'influenza. È allergico a qualche medicina?|Schauen wir mal … Das ist eine Grippe. Sind Sie gegen Medikamente allergisch?|Let's see… It's flu. Are you allergic to any medicine?
me|No, non sono allergico a niente.|Nein, ich bin gegen nichts allergisch.|No, I'm not allergic to anything.|No, non ho allergie.; No, non sono allergica a niente.
a|Bene. Prenda queste pastiglie tre volte al giorno e resti a letto.|Gut. Nehmen Sie diese Tabletten dreimal täglich und bleiben Sie im Bett.|Good. Take these tablets three times a day and stay in bed.
me|Devo prenderle prima o dopo i pasti?|Muss ich sie vor oder nach dem Essen nehmen?|Should I take them before or after meals?|Le prendo prima o dopo mangiato?
a|Dopo i pasti. E beva molta acqua. Ecco la ricetta.|Nach dem Essen. Und trinken Sie viel. Hier ist das Rezept.|After meals. And drink plenty of water. Here's the prescription.
me|Grazie mille, dottoressa. Arrivederci!|Vielen Dank, Frau Doktor. Auf Wiedersehen!|Thank you very much, doctor. Goodbye!|Grazie, arrivederci!` }
});

/* Italiano A2 · 6–10 */
lesson("A2", { id: "it-a2-06", t: TB("Cercare casa – Wohnung und Objektpronomen", "Cercare casa – Flat hunting and object pronouns"),
  goal: TB("Du kannst eine Wohnung beschreiben, Fragen bei einer Besichtigung stellen und lo/la/li/le benutzen.", "You can describe a flat, ask questions at a viewing and use lo/la/li/le."),
  words: `l'appartamento|die Wohnung|the flat; the apartment|n
la casa|das Haus; das Zuhause|the house; home|n
il monolocale|die Einzimmerwohnung|the studio flat|n
la camera da letto|das Schlafzimmer|the bedroom|n
il soggiorno|das Wohnzimmer|the living room|n
la cucina|die Küche|the kitchen|n
il bagno|das Bad|the bathroom|n
il balcone|der Balkon|the balcony|n
il piano|das Stockwerk|the floor (storey)|n|Abito al terzo piano.|Ich wohne im dritten Stock.|I live on the third floor.
l'ascensore|der Aufzug|the lift; the elevator|n
arredato/a|möbliert|furnished|adj
l'affitto|die Miete|the rent|n|L'affitto è di 800 euro al mese.|Die Miete beträgt 800 Euro im Monat.|The rent is 800 euros a month.
le spese condominiali|die Nebenkosten|the service charges|n
la caparra|die Kaution|the deposit|n
il padrone di casa|der Vermieter|the landlord|n
il coinquilino|der Mitbewohner|the flatmate|n
luminoso/a|hell|bright|adj
rumoroso/a|laut|noisy|adj
il divano|das Sofa|the sofa|n
il letto|das Bett|the bed|n
l'armadio|der Kleiderschrank|the wardrobe|n
la lavatrice|die Waschmaschine|the washing machine|n
traslocare|umziehen (Wohnung)|to move house|v`,
  say: `Cerco un appartamento in centro.|Ich suche eine Wohnung im Zentrum.|I'm looking for a flat in the centre.
Quanto è l'affitto?|Wie hoch ist die Miete?|How much is the rent?
Le spese sono comprese?|Sind die Nebenkosten inklusive?|Are the bills included?
L'appartamento è arredato?|Ist die Wohnung möbliert?|Is the flat furnished?
Posso vederlo domani?|Kann ich sie morgen ansehen?|Can I see it tomorrow?
La cucina è piccola, ma la adoro.|Die Küche ist klein, aber ich liebe sie.|The kitchen is small, but I love it.
Lo prendo!|Ich nehme sie!|I'll take it!`,
  gram: [
    ["h", TB("Direkte Objektpronomen: lo, la, li, le", "Direct object pronouns: lo, la, li, le")],
    ["table", { head: [TB("", ""), TB("Singular", "singular"), TB("Plural", "plural")], rows: [
      [TB("1./2. Person", "1st/2nd person"), "mi, ti", "ci, vi"], [TB("männlich", "masculine"), "lo (l')", "li"], [TB("weiblich", "feminine"), "la (l')", "le"], [TB("Sie (höflich)", "you (formal)"), "La", "–"]] }],
    ["p", TB("Das Pronomen steht <b>vor</b> dem konjugierten Verb: <b>Lo</b> prendo. <b>La</b> vedo domani. Beim Infinitiv wird es angehängt: Posso veder<b>lo</b>? / <b>Lo</b> posso vedere?", "The pronoun goes <b>before</b> the conjugated verb: <b>Lo</b> prendo. <b>La</b> vedo domani. With an infinitive it is attached: Posso veder<b>lo</b>? / <b>Lo</b> posso vedere?")],
    ["p", TB("Im Passato prossimo passt sich das Partizip bei lo/la/li/le an: <b>L'</b>ho vist<b>a</b> (die Wohnung). <b>Li</b> ho comprat<b>i</b> (die Stühle).", "In the passato prossimo the participle agrees with lo/la/li/le: <b>L'</b>ho vist<b>a</b> (the flat). <b>Li</b> ho comprat<b>i</b> (the chairs).")],
    ["tip", TB("Achtung: Das Geschlecht richtet sich nach dem italienischen Wort. <i>l'appartamento</i> ist männlich → <b>lo</b> prendo, auch wenn es im Deutschen „sie“ (die Wohnung) heißt.", "Careful: the gender follows the Italian word. <i>l'appartamento</i> is masculine → <b>lo</b> prendo.")]
  ],
  th: "pronouns",
  drill: [
    ["L'appartamento? ___ prendo!", ["Lo", "La", "Li"], 0],
    ["La cucina? ___ adoro!", ["La", "Lo", "Le"], 0],
    ["I mobili? ___ compriamo all'IKEA.", ["Li", "Le", "Lo"], 0],
    ["Le chiavi? Non ___ trovo.", ["le", "li", "la"], 0],
    ["Posso ___ domani? (vedere + lo)", "vederlo"],
    ["Hai visto la casa? Sì, l'ho ___ ieri.", ["vista", "visto", "visti"], 0],
    ["Abito ___ secondo piano.", ["al", "nel", "sul"], 0]
  ],
  talk: { t: TB("Wohnungsbesichtigung", "Flat viewing"), scene: TB("Du besichtigst in Mailand eine Wohnung. Der Vermieter, Signor Ricci, zeigt dir alles.", "You're viewing a flat in Milan. The landlord, Mr Ricci, shows you round."), who: "Signor Ricci", slots: {}, lines: `a|Ecco, questo è il soggiorno. È molto luminoso, vero?|So, das ist das Wohnzimmer. Sehr hell, oder?|So, this is the living room. Very bright, isn't it?
me|Sì, è bellissimo. Quante camere da letto ci sono?|Ja, wunderschön. Wie viele Schlafzimmer gibt es?|Yes, it's lovely. How many bedrooms are there?|Molto bello! Quante camere ci sono?
a|Due camere, una cucina abitabile e un bagno con la doccia.|Zwei Schlafzimmer, eine Wohnküche und ein Bad mit Dusche.|Two bedrooms, an eat-in kitchen and a bathroom with a shower.
me|L'appartamento è arredato?|Ist die Wohnung möbliert?|Is the flat furnished?|È arredato?
a|Sì, tranne la camera piccola. La lavatrice è nuova.|Ja, außer dem kleinen Zimmer. Die Waschmaschine ist neu.|Yes, except the small room. The washing machine is new.
me|Quanto è l'affitto? Le spese sono comprese?|Wie hoch ist die Miete? Sind die Nebenkosten inklusive?|How much is the rent? Are the bills included?|Quanto costa l'affitto, spese comprese?
a|Novecento euro al mese, più cento euro di spese condominiali.|Neunhundert Euro im Monat, plus hundert Euro Nebenkosten.|Nine hundred euros a month, plus a hundred euros service charges.
me|È un po' caro, ma la zona mi piace molto.|Etwas teuer, aber die Gegend gefällt mir sehr.|It's a bit expensive, but I really like the area.|È caro, ma la zona è bellissima.
a|Allora, cosa ne pensa?|Also, was meinen Sie?|So, what do you think?
me|Lo prendo! Quando posso firmare il contratto?|Ich nehme sie! Wann kann ich den Vertrag unterschreiben?|I'll take it! When can I sign the contract?|Lo prendo! Quando firmiamo il contratto?` }
});

lesson("A2", { id: "it-a2-07", t: TB("Fare shopping – Kleidung und indirekte Pronomen", "Fare shopping – Clothes and indirect pronouns"),
  goal: TB("Du kannst Kleidung kaufen, nach Größe und Farbe fragen und mi/ti/gli/le benutzen.", "You can buy clothes, ask about size and colour and use mi/ti/gli/le."),
  words: `i vestiti|die Kleidung|clothes|n
la maglietta|das T-Shirt|the T-shirt|n
la camicia|das Hemd; die Bluse|the shirt; the blouse|n
il maglione|der Pullover|the jumper|n
i pantaloni|die Hose|the trousers|n
i jeans|die Jeans|the jeans|n
la gonna|der Rock|the skirt|n
il vestito|das Kleid; der Anzug|the dress; the suit|n
la giacca|die Jacke; das Sakko|the jacket|n
il cappotto|der Mantel|the coat|n
le scarpe|die Schuhe|the shoes|n
la taglia|die Größe (Kleidung)|the size|n|Che taglia porta?|Welche Größe tragen Sie?|What size are you?
il numero|die Schuhgröße|the shoe size|n
il camerino|die Umkleidekabine|the fitting room|n
provare|anprobieren|to try on|v|Posso provarla?|Kann ich sie anprobieren?|Can I try it on?
stare bene|gut stehen; gut passen|to suit; to fit|v|Questa giacca ti sta benissimo.|Diese Jacke steht dir super.|This jacket really suits you.
stretto/a|eng|tight|adj
largo/a|weit|loose; big|adj
lo sconto|der Rabatt|the discount|n
i saldi|der Schlussverkauf|the sales|n
nero/a|schwarz|black|adj
bianco/a|weiß|white|adj
blu|blau|blue|adj
rosso/a|rot|red|adj
verde|grün|green|adj`,
  say: `Sto solo guardando, grazie.|Ich schaue mich nur um, danke.|I'm just looking, thanks.
Avete questa camicia in blu?|Haben Sie dieses Hemd in Blau?|Do you have this shirt in blue?
Porto la M.|Ich trage M.|I'm a medium.
Mi sta un po' stretto.|Es ist mir etwas zu eng.|It's a bit tight on me.
Avete una taglia più grande?|Haben Sie eine Nummer größer?|Do you have a bigger size?
Le sta molto bene!|Das steht Ihnen sehr gut!|It suits you very well!
Lo regalo a mio fratello – gli piace il verde.|Ich schenke es meinem Bruder – er mag Grün.|I'm giving it to my brother – he likes green.`,
  gram: [
    ["h", TB("Indirekte Objektpronomen: mir, dir, ihm, ihr …", "Indirect object pronouns: to me, to you, to him …")],
    ["table", { head: [TB("Deutsch", "German"), TB("Italienisch", "Italian"), TB("Beispiel", "example")], rows: [
      [TB("mir", "to me"), "mi", "Mi sta bene."], [TB("dir", "to you"), "ti", "Ti piace?"], [TB("ihm", "to him"), "gli", "Gli regalo un libro."], [TB("ihr / Ihnen", "to her / to you (formal)"), "le / Le", "Le sta benissimo."],
      [TB("uns", "to us"), "ci", "Ci serve una borsa."], [TB("euch", "to you (pl.)"), "vi", "Vi piace?"], [TB("ihnen", "to them"), "gli", "Gli scrivo domani."]], say: 2 }],
    ["p", TB("Typische Verben mit indirektem Objekt: <b>piacere, stare (bene), regalare, dare, dire, scrivere, telefonare, servire</b>.", "Typical verbs with an indirect object: <b>piacere, stare (bene), regalare, dare, dire, scrivere, telefonare, servire</b>.")],
    ["tip", TB("<b>blu, rosa, viola, beige</b> sind unveränderlich: i pantaloni blu, le scarpe rosa.", "<b>blu, rosa, viola, beige</b> never change: i pantaloni blu, le scarpe rosa.")]
  ],
  th: "pronouns",
  drill: [
    ["Questa giacca ___ sta benissimo, signora!", ["Le", "La", "Gli"], 0],
    ["A Paolo ___ piace molto il blu.", ["gli", "le", "lo"], 0],
    ["Ti ___ questi pantaloni?", ["piacciono", "piace", "piacete"], 0],
    ["Le scarpe ___ stanno strette.", ["mi", "me", "io"], 0],
    ["La gonna è troppo ___ .", ["larga", "largo", "larghe"], 0],
    ["Ho comprato due camicie ___ .", ["bianche", "bianchi", "bianca"], 0],
    ["Scriviamo a Giulia? Sì, ___ scrivo io.", ["le", "la", "gli"], 0]
  ],
  talk: { t: TB("Im Bekleidungsgeschäft", "In a clothes shop"), scene: TB("Du suchst in Florenz ein Hemd für ein Hochzeitsfest. Die Verkäuferin Francesca hilft dir.", "You're looking for a shirt for a wedding in Florence. The shop assistant, Francesca, helps you."), who: "Francesca", slots: {}, lines: `a|Buongiorno! Posso aiutarla?|Guten Tag! Kann ich Ihnen helfen?|Good morning! Can I help you?
me|Sì, cerco una camicia elegante per un matrimonio.|Ja, ich suche ein elegantes Hemd für eine Hochzeit.|Yes, I'm looking for a smart shirt for a wedding.|Cerco una camicia elegante per un matrimonio.
a|Che taglia porta?|Welche Größe tragen Sie?|What size are you?
me|Porto la L, di solito.|Ich trage normalerweise L.|I'm usually a large.|Di solito la L.; La L.
a|Ecco, questa bianca è molto bella. Vuole provarla?|Hier, dieses weiße ist sehr schön. Möchten Sie es anprobieren?|Here, this white one is very nice. Would you like to try it on?
me|Sì, grazie. Dov'è il camerino?|Ja, danke. Wo ist die Umkleide?|Yes, thanks. Where's the fitting room?|Volentieri. Dov'è il camerino?
a|In fondo a destra. Allora, come le sta?|Hinten rechts. Und, wie passt es?|At the back on the right. So, how does it fit?
me|Mi sta un po' stretta. Avete una taglia più grande?|Es ist mir etwas eng. Haben Sie eine Nummer größer?|It's a bit tight. Do you have a bigger size?|È un po' stretta. C'è una taglia più grande?
a|Sì, ecco la XL. … Perfetta! Le sta benissimo.|Ja, hier ist XL. … Perfekt! Steht Ihnen super.|Yes, here's the XL. … Perfect! It really suits you.
me|La prendo. C'è uno sconto?|Ich nehme es. Gibt es einen Rabatt?|I'll take it. Is there a discount?|Va bene, la prendo. Fate sconti?` }
});

lesson("A2", { id: "it-a2-08", t: TB("Vorrei… – Der Condizionale", "Vorrei… – The conditional"),
  goal: TB("Du kannst höflich bitten, Wünsche äußern und Ratschläge geben.", "You can make polite requests, express wishes and give advice."),
  words: `il desiderio|der Wunsch|the wish|n
il sogno|der Traum|the dream|n|Il mio sogno sarebbe vivere al mare.|Mein Traum wäre, am Meer zu leben.|My dream would be to live by the sea.
il consiglio|der Rat; der Tipp|the advice|n
consigliare|raten; empfehlen|to advise; to recommend|v
il favore|der Gefallen|the favour|n|Mi faresti un favore?|Würdest du mir einen Gefallen tun?|Would you do me a favour?
gentile|freundlich; nett|kind|adj
magari|vielleicht; schön wär's|maybe; if only|adv|Magari!|Schön wär's!|If only!
volentieri|gern|gladly|adv
la pensione|die Rente|retirement; the pension|n
vincere la lotteria|im Lotto gewinnen|to win the lottery|v
smettere di fumare|mit dem Rauchen aufhören|to stop smoking|v
fare sport|Sport treiben|to do sport|v
dimagrire|abnehmen|to lose weight|v
stressato/a|gestresst|stressed|adj
la pausa|die Pause|the break|n
prendersi una pausa|eine Pause machen|to take a break|v
il mondo|die Welt|the world|n
il giro del mondo|die Weltreise|the trip round the world|n
aprire un ristorante|ein Restaurant eröffnen|to open a restaurant|v
ricco/a|reich|rich|adj`,
  say: `Potresti aiutarmi?|Könntest du mir helfen?|Could you help me?
Mi passeresti il sale?|Würdest du mir das Salz reichen?|Would you pass me the salt?
Vorrei fare il giro del mondo.|Ich würde gern eine Weltreise machen.|I'd like to go round the world.
Al tuo posto, parlerei con il capo.|An deiner Stelle würde ich mit dem Chef reden.|If I were you, I'd talk to the boss.
Dovresti dormire di più.|Du solltest mehr schlafen.|You should sleep more.
Sarebbe bello!|Das wäre schön!|That would be nice!
Che cosa faresti con un milione di euro?|Was würdest du mit einer Million Euro machen?|What would you do with a million euros?`,
  gram: [
    ["h", TB("Condizionale presente", "Present conditional")],
    ["p", TB("Gleicher Stamm wie das Futur + <b>-ei, -esti, -ebbe, -emmo, -este, -ebbero</b>: parler<b>ei</b>, sar<b>ei</b>, andr<b>ei</b>, vorr<b>ei</b>, potr<b>ei</b>, dovr<b>ei</b>.", "Same stem as the future + <b>-ei, -esti, -ebbe, -emmo, -este, -ebbero</b>: parler<b>ei</b>, sar<b>ei</b>, andr<b>ei</b>, vorr<b>ei</b>, potr<b>ei</b>, dovr<b>ei</b>.")],
    ["conj", { verbs: ["volere", "potere", "dovere"], tenses: ["Condizionale presente"] }],
    ["table", { head: [TB("wofür?", "use"), TB("Beispiel", "example")], rows: [
      [TB("höfliche Bitte", "polite request"), "Potrebbe chiudere la porta?"], [TB("Wunsch", "wish"), "Vorrei un caffè. / Mi piacerebbe vivere a Roma."], [TB("Rat", "advice"), "Dovresti riposarti."], [TB("Vermutung (Nachrichten)", "unconfirmed report"), "Il ministro sarebbe a Parigi."]], say: 1 }],
    ["tip", TB("Achtung, doppeltes m: noi parler<b>emmo</b> (Konditional) ≠ parler<b>emo</b> (Futur).", "Watch the double m: noi parler<b>emmo</b> (conditional) ≠ parler<b>emo</b> (future).")]
  ],
  th: "condizionale", quiz: ["it-condizionale"], forms: { verbs: ["parlare", "essere", "avere", "potere", "volere", "dovere", "andare", "fare", "venire"], tenses: ["Condizionale presente"] },
  drill: [
    ["___ un tavolo per quattro, per favore.", ["Vorrei", "Voglio", "Volevo"], 0],
    ["Scusi, ___ ripetere più lentamente?", ["potrebbe", "può essere", "potrà"], 0],
    ["Sei stanco: ___ andare a letto presto.", ["dovresti", "dovrai", "devi stato"], 0],
    ["Con un milione di euro, io ___ il giro del mondo.", ["farei", "farò", "facevo"], 0],
    ["Noi ___ volentieri, ma non abbiamo tempo. (venire)", "verremmo"],
    ["Mi ___ vivere in Toscana. (piacere)", "piacerebbe"],
    ["Voi cosa ___ al mio posto? (fare)", "fareste"]
  ],
  talk: { t: TB("Was wäre, wenn …?", "What would you do if…?"), scene: TB("Ein entspannter Abend mit deiner Freundin Martina. Ihr träumt ein bisschen.", "A relaxed evening with your friend Martina. You're daydreaming a little."), who: "Martina", slots: {}, lines: `a|Che stress questa settimana! Mi piacerebbe partire domani per una spiaggia tropicale.|Was für eine stressige Woche! Ich würde gern morgen an einen tropischen Strand fliegen.|What a stressful week! I'd love to leave tomorrow for a tropical beach.
me|Anche a me! Dove andresti?|Ich auch! Wohin würdest du fliegen?|Me too! Where would you go?|Anch'io! E dove andresti?
a|Alle Maldive, senza telefono. E tu, cosa faresti con un mese libero?|Auf die Malediven, ohne Handy. Und du, was würdest du mit einem freien Monat machen?|To the Maldives, without a phone. And you, what would you do with a month off?
me|Farei un viaggio in Italia e imparerei a cucinare.|Ich würde durch Italien reisen und kochen lernen.|I'd travel round Italy and learn to cook.|Viaggerei in Italia e imparerei a cucinare.
a|Bellissimo! Io invece aprirei un piccolo bar sulla spiaggia.|Wunderschön! Ich würde stattdessen eine kleine Strandbar eröffnen.|Lovely! I'd open a little beach bar instead.
me|Sarebbe fantastico! Potrei lavorare con te?|Das wäre fantastisch! Könnte ich mit dir arbeiten?|That would be fantastic! Could I work with you?|Sarebbe bello! Posso lavorare con te?
a|Certo! Ma prima dovresti imparare a fare i cocktail.|Klar! Aber zuerst müsstest du lernen, Cocktails zu mixen.|Sure! But first you'd have to learn to make cocktails.
me|Nessun problema, imparerei subito!|Kein Problem, das würde ich sofort lernen!|No problem, I'd learn straight away!|Volentieri, imparerei subito!` }
});

lesson("A2", { id: "it-a2-09", t: TB("Feste e inviti – Einladen, zusagen, absagen", "Feste e inviti – Inviting, accepting, declining"),
  goal: TB("Du kannst jemanden einladen, zu- oder absagen, gratulieren und die Wörter ci und ne benutzen.", "You can invite someone, accept or decline, congratulate and use ci and ne."),
  words: `la festa di compleanno|die Geburtstagsfeier|the birthday party|n
l'invito|die Einladung|the invitation|n
invitare|einladen|to invite|v|Ti invito a cena sabato.|Ich lade dich am Samstag zum Essen ein.|I'm inviting you to dinner on Saturday.
festeggiare|feiern|to celebrate|v
il regalo|das Geschenk|the present|n
la torta|der Kuchen; die Torte|the cake|n
gli auguri|die Glückwünsche|best wishes|n
tanti auguri!|herzlichen Glückwunsch!|happy birthday!; best wishes!|ph
buon compleanno!|alles Gute zum Geburtstag!|happy birthday!|ph
il Natale|Weihnachten|Christmas|n
buon Natale!|frohe Weihnachten!|merry Christmas!|ph
la Pasqua|Ostern|Easter|n
il Capodanno|Neujahr; Silvester|New Year's Day; New Year's Eve|n
Ferragosto|Mariä Himmelfahrt (15. August)|the 15th of August holiday|n
il matrimonio|die Hochzeit|the wedding|n
volentieri|gern|gladly; I'd love to|adv
purtroppo|leider|unfortunately|adv
un impegno|eine Verpflichtung; ein Termin|a commitment; an appointment|n|Purtroppo ho già un impegno.|Leider habe ich schon etwas vor.|Unfortunately I already have plans.
portare qualcosa|etwas mitbringen|to bring something|v
brindare|anstoßen|to drink a toast|v
cin cin!|prost!|cheers!|ph
congratulazioni!|Glückwunsch! (Erfolg)|congratulations!|ph`,
  say: `Sabato faccio una festa. Vieni?|Am Samstag mache ich eine Party. Kommst du?|I'm having a party on Saturday. Are you coming?
Volentieri, grazie dell'invito!|Gern, danke für die Einladung!|I'd love to, thanks for the invitation!
Mi dispiace, ma non posso.|Tut mir leid, aber ich kann nicht.|I'm sorry, but I can't.
Ci vado con mia sorella.|Ich gehe mit meiner Schwester hin.|I'm going there with my sister.
Quanti invitati ci sono? – Ce ne sono venti.|Wie viele Gäste sind da? – Es sind zwanzig.|How many guests are there? – There are twenty.
Posso portare qualcosa?|Kann ich etwas mitbringen?|Can I bring something?
Facciamo un brindisi!|Lasst uns anstoßen!|Let's have a toast!`,
  gram: [
    ["h", TB("<i>ci</i> = dort, dorthin", "<i>ci</i> = there")],
    ["ex", [["Vai a Roma? – Sì, ci vado domani.", "Fährst du nach Rom? – Ja, ich fahre morgen hin.", "Are you going to Rome? – Yes, I'm going there tomorrow."], ["Sei mai stato in Sicilia? – No, non ci sono mai stato.", "Warst du schon mal auf Sizilien? – Nein, ich war noch nie dort.", "Have you ever been to Sicily? – No, I've never been there."]]],
    ["h", TB("<i>ne</i> = davon", "<i>ne</i> = of it / of them")],
    ["p", TB("<b>ne</b> ersetzt eine Menge: Quanti fratelli hai? – <b>Ne</b> ho due (davon habe ich zwei). Quanto pane vuoi? – <b>Ne</b> vorrei un po'. Auch: Che <b>ne</b> pensi? (Was hältst du davon?)", "<b>ne</b> replaces a quantity: Quanti fratelli hai? – <b>Ne</b> ho due (I have two of them). Quanto pane vuoi? – <b>Ne</b> vorrei un po'. Also: Che <b>ne</b> pensi? (What do you think of it?)")],
    ["tip", TB("Vor <i>è</i> wird ci zu <b>c'</b> (c'è), vor <i>lo/la/li/le/ne</i> wird es zu <b>ce</b>: <b>ce n'è</b> uno, <b>ce ne</b> sono due.", "Before <i>è</i>, ci becomes <b>c'</b> (c'è); before <i>lo/la/li/le/ne</i> it becomes <b>ce</b>: <b>ce n'è</b> uno, <b>ce ne</b> sono due.")]
  ],
  th: "strutture",
  drill: [
    ["Vai alla festa di Luca? – Sì, ___ vado.", ["ci", "ne", "lo"], 0],
    ["Quante birre compriamo? – ___ compriamo sei.", ["Ne", "Ci", "Le"], 0],
    ["Hai fratelli? – Sì, ___ ho tre.", ["ne", "ci", "li"], 0],
    ["Che ___ pensi del regalo?", ["ne", "ci", "lo"], 0],
    ["Quanti invitati ci sono? – ___ sono trenta.", ["Ce ne", "Ci ne", "Ne ci"], 0],
    ["Grazie ___ invito!", ["dell'", "per l'", "all'"], 0],
    ["___ auguri per il tuo compleanno!", ["Tanti", "Buon", "Molto"], 0]
  ],
  talk: { t: TB("Eine Einladung", "An invitation"), scene: TB("Dein Freund Pietro ruft an und lädt dich zu seiner Geburtstagsfeier ein.", "Your friend Pietro calls and invites you to his birthday party."), who: "Pietro", slots: {}, lines: `a|Ciao! Sabato prossimo compio trent'anni e faccio una festa a casa mia. Vieni?|Hallo! Nächsten Samstag werde ich dreißig und mache eine Party bei mir. Kommst du?|Hi! Next Saturday I'm turning thirty and I'm having a party at my place. Are you coming?
me|Ma certo, volentieri! Grazie dell'invito.|Aber klar, gern! Danke für die Einladung.|Of course, I'd love to! Thanks for the invitation.|Volentieri! Grazie per l'invito.; Certo che vengo!
a|Fantastico! Iniziamo verso le otto.|Super! Wir fangen gegen acht an.|Great! We'll start around eight.
me|Posso portare qualcosa? Un dolce o del vino?|Kann ich etwas mitbringen? Einen Nachtisch oder Wein?|Can I bring something? A dessert or some wine?|Porto qualcosa? Del vino o un dolce?
a|Il vino va benissimo. Di torte ne ho già due!|Wein ist perfekt. Kuchen habe ich schon zwei!|Wine is perfect. I've already got two cakes!
me|Perfetto. Viene anche Chiara?|Perfekt. Kommt Chiara auch?|Perfect. Is Chiara coming too?|Ok. C'è anche Chiara?
a|Purtroppo no, ha già un impegno. Ma ci sarà tutto il gruppo della palestra.|Leider nicht, sie hat schon etwas vor. Aber die ganze Gruppe vom Fitnessstudio ist da.|Unfortunately not, she already has plans. But the whole gym group will be there.
me|Che bello! Allora a sabato, e tanti auguri in anticipo!|Wie schön! Dann bis Samstag, und schon mal alles Gute!|How nice! See you on Saturday then, and happy birthday in advance!|Benissimo, a sabato!` }
});

lesson("A2", { id: "it-a2-10", t: TB("La mia città – Vergleiche und Superlativ", "La mia città – Comparisons and superlatives"),
  goal: TB("Du kannst Orte beschreiben und vergleichen: più … di, meno … di, il più …, -issimo.", "You can describe and compare places: più … di, meno … di, il più …, -issimo."),
  words: `il centro storico|die Altstadt|the old town|n
la periferia|der Stadtrand|the outskirts|n
il quartiere|das Viertel|the neighbourhood|n
gli abitanti|die Einwohner|the inhabitants|n|Bologna ha circa quattrocentomila abitanti.|Bologna hat rund 400.000 Einwohner.|Bologna has about 400,000 inhabitants.
il traffico|der Verkehr|the traffic|n
i mezzi pubblici|die öffentlichen Verkehrsmittel|public transport|n
la vita notturna|das Nachtleben|nightlife|n
il parco|der Park|the park|n
il fiume|der Fluss|the river|n
il lago|der See|the lake|n
la montagna|die Berge; der Berg|the mountains|n
antico/a|alt (historisch)|ancient; old|adj
moderno/a|modern|modern|adj
vivace|lebendig|lively|adj
tranquillo/a|ruhig|quiet; peaceful|adj
pulito/a|sauber|clean|adj
sporco/a|schmutzig|dirty|adj
inquinato/a|verschmutzt (Luft)|polluted|adj
caro/a|teuer|expensive|adj
economico/a|günstig|cheap|adj
migliore|besser|better|adj|Il clima qui è migliore.|Das Klima hier ist besser.|The climate here is better.
peggiore|schlechter|worse|adj`,
  say: `Milano è più grande di Bologna.|Mailand ist größer als Bologna.|Milan is bigger than Bologna.
La vita qui è meno cara che a Monaco.|Das Leben hier ist günstiger als in München.|Life here is less expensive than in Munich.
Roma è bella come Parigi.|Rom ist so schön wie Paris.|Rome is as beautiful as Paris.
È la città più bella d'Italia.|Es ist die schönste Stadt Italiens.|It's the most beautiful city in Italy.
Il centro è bellissimo.|Das Zentrum ist wunderschön.|The centre is really beautiful.
Si mangia benissimo.|Man isst hervorragend.|The food is excellent.
Preferisco vivere in un posto tranquillo.|Ich lebe lieber an einem ruhigen Ort.|I prefer living somewhere quiet.`,
  gram: [
    ["h", TB("Vergleiche", "Comparisons")],
    ["table", { head: [TB("", ""), TB("Italienisch", "Italian"), TB("Beispiel", "example")], rows: [
      [TB("größer als", "bigger than"), "più … di", "Roma è più grande di Napoli."], [TB("weniger … als", "less … than"), "meno … di", "Il treno è meno caro dell'aereo."],
      [TB("so … wie", "as … as"), "(così) … come", "Luca è alto come me."], [TB("vor Verb/Adjektiv", "before verb/adjective"), "più … che", "È più facile leggere che parlare."]], say: 2 }],
    ["h", TB("Superlativ", "Superlative")],
    ["p", TB("Relativ: <b>il/la più</b> + Adjektiv + <b>di</b>: la città <b>più</b> bella <b>d'</b>Italia. Absolut: Adjektiv + <b>-issimo</b>: bell<b>issimo</b>, car<b>issima</b>, buon<b>issimi</b> (= sehr …).", "Relative: <b>il/la più</b> + adjective + <b>di</b>: la città <b>più</b> bella <b>d'</b>Italia. Absolute: adjective + <b>-issimo</b>: bell<b>issimo</b>, car<b>issima</b>, buon<b>issimi</b> (= very …).")],
    ["tip", TB("Unregelmäßig: buono → <b>migliore</b> (besser), cattivo → <b>peggiore</b>. Als Adverb: bene → <b>meglio</b>, male → <b>peggio</b>: Sto meglio, grazie.", "Irregular: buono → <b>migliore</b> (better), cattivo → <b>peggiore</b>. As adverbs: bene → <b>meglio</b>, male → <b>peggio</b>: Sto meglio, grazie.")]
  ],
  th: "adj",
  drill: [
    ["Milano è più grande ___ Torino.", ["di", "che", "come"], 0],
    ["È più bello viaggiare ___ lavorare.", ["che", "di", "come"], 0],
    ["Questa pizza è ___ ! (molto buona)", ["buonissima", "buonissimo", "più buona"], 0],
    ["Venezia è la città più romantica ___ mondo.", ["del", "di", "nel"], 0],
    ["Oggi sto ___ di ieri.", ["meglio", "migliore", "più bene"], 0],
    ["Il vino di questa cantina è ___ di quello del supermercato.", ["migliore", "meglio", "più buono di"], 0],
    ["Il mio quartiere è tranquillo ___ il tuo.", ["come", "di", "che"], 0]
  ],
  talk: { t: TB("Stadt oder Land?", "City or country?"), scene: TB("Dein Kollege Giorgio fragt dich, wie es sich in deiner Stadt in Deutschland lebt.", "Your colleague Giorgio asks you what life is like in your city in Germany."), who: "Giorgio", slots: { city: "Monaco" }, lines: `a|Com'è la tua città? Ci si vive bene?|Wie ist deine Stadt? Lebt es sich gut dort?|What's your city like? Is it a good place to live?
me|Sì, è molto bella e più tranquilla di Milano.|Ja, sie ist sehr schön und ruhiger als Mailand.|Yes, it's very beautiful and quieter than Milan.|Sì, è bellissima e più tranquilla di Milano.
a|E la vita è cara?|Und ist das Leben teuer?|And is life expensive?
me|Purtroppo sì, gli affitti sono carissimi.|Leider ja, die Mieten sind sehr teuer.|Unfortunately yes, rents are really expensive.|Sì, gli affitti sono molto cari.
a|Anche qui! E i mezzi pubblici funzionano?|Hier auch! Und funktionieren die Öffentlichen?|Here too! And does public transport work?
me|Sì, funzionano meglio che in Italia, secondo me.|Ja, sie funktionieren meiner Meinung nach besser als in Italien.|Yes, they work better than in Italy, in my opinion.|Sì, funzionano benissimo.
a|Ahah, non è difficile! E cosa ti manca di più dell'Italia quando sei a casa?|Haha, das ist nicht schwer! Und was vermisst du an Italien am meisten, wenn du zu Hause bist?|Haha, that's not hard! And what do you miss most about Italy when you're at home?
me|Il cibo, sicuramente! Il caffè italiano è il migliore del mondo.|Das Essen, ganz sicher! Der italienische Kaffee ist der beste der Welt.|The food, definitely! Italian coffee is the best in the world.|Il cibo e il caffè, che è il migliore del mondo.` }
});

/* Italiano B1 · 1–4 */
lesson("B1", { id: "it-b1-01", t: TB("Penso che… – Der Congiuntivo presente", "Penso che… – The present subjunctive"),
  goal: TB("Du kannst Meinungen, Zweifel, Wünsche und Gefühle mit dem Congiuntivo ausdrücken.", "You can express opinions, doubts, wishes and feelings with the subjunctive."),
  words: `secondo me|meiner Meinung nach|in my opinion|ph|Secondo me, il lavoro da casa è più comodo.|Meiner Meinung nach ist Homeoffice bequemer.|In my opinion working from home is more convenient.
penso che|ich denke, dass|I think that|ph
credo che|ich glaube, dass|I believe that|ph
mi sembra che|mir scheint, dass|it seems to me that|ph
ho paura che|ich fürchte, dass|I'm afraid that|ph
spero che|ich hoffe, dass|I hope that|ph
è importante che|es ist wichtig, dass|it's important that|ph
bisogna che|es ist nötig, dass|it's necessary that|ph
dubitare|bezweifeln|to doubt|v|Dubito che arrivi in tempo.|Ich bezweifle, dass er rechtzeitig kommt.|I doubt he'll arrive on time.
lo smart working|das Homeoffice|remote working|n
il pendolare|der Pendler|the commuter|n
la flessibilità|die Flexibilität|flexibility|n
la produttività|die Produktivität|productivity|n
il vantaggio|der Vorteil|the advantage|n
lo svantaggio|der Nachteil|the disadvantage|n
d'accordo|einverstanden; einig|agreed|ph|Sono d'accordo con te.|Ich bin deiner Meinung.|I agree with you.
non sono d'accordo|ich bin nicht einverstanden|I disagree|ph
convincere|überzeugen|to convince|v
il punto di vista|der Standpunkt|the point of view|n
può darsi|kann sein|maybe; it may be|ph|Può darsi che tu abbia ragione.|Kann sein, dass du recht hast.|You may be right.
avere ragione|recht haben|to be right|v
avere torto|unrecht haben|to be wrong|v`,
  say: `Penso che tu abbia ragione.|Ich denke, du hast recht.|I think you're right.
Credo che sia meglio aspettare.|Ich glaube, es ist besser zu warten.|I think it's better to wait.
Spero che domani faccia bel tempo.|Ich hoffe, morgen ist schönes Wetter.|I hope the weather's nice tomorrow.
È importante che tutti partecipino.|Es ist wichtig, dass alle mitmachen.|It's important that everyone takes part.
Non credo che sia così semplice.|Ich glaube nicht, dass es so einfach ist.|I don't think it's that simple.
Mi sembra che lui non capisca.|Mir scheint, er versteht es nicht.|It seems to me he doesn't understand.
Sono contento che tu sia qui.|Ich freue mich, dass du da bist.|I'm glad you're here.`,
  gram: [
    ["h", TB("Congiuntivo presente: Bildung", "Present subjunctive: forms")],
    ["p", TB("-are: <b>-i, -i, -i, -iamo, -iate, -ino</b> (parli). -ere/-ire: <b>-a, -a, -a, -iamo, -iate, -ano</b> (prenda, dorma, finisca). Die drei Singularformen sind gleich – deshalb oft mit Pronomen: che <b>io</b> parli, che <b>tu</b> parli.", "-are: <b>-i, -i, -i, -iamo, -iate, -ino</b> (parli). -ere/-ire: <b>-a, -a, -a, -iamo, -iate, -ano</b> (prenda, dorma, finisca). The three singular forms are identical – so the pronoun is often added: che <b>io</b> parli, che <b>tu</b> parli.")],
    ["conj", { verbs: ["essere", "avere", "fare", "andare"], tenses: ["Congiuntivo presente"] }],
    ["h", TB("Wann?", "When?")],
    ["p", TB("Nach Ausdrücken von <b>Meinung</b> (penso che, credo che), <b>Zweifel</b> (dubito che, non sono sicuro che), <b>Wunsch und Wille</b> (voglio che, spero che), <b>Gefühl</b> (sono contento che, ho paura che) und <b>unpersönlichen Ausdrücken</b> (è importante che, bisogna che).", "After expressions of <b>opinion</b> (penso che, credo che), <b>doubt</b> (dubito che), <b>wish and will</b> (voglio che, spero che), <b>emotion</b> (sono contento che, ho paura che) and <b>impersonal expressions</b> (è importante che, bisogna che).")],
    ["tip", TB("Gleiches Subjekt? Dann Infinitiv mit <b>di</b>: Penso <b>di</b> avere ragione (nicht: penso che io abbia ragione). Nach <b>so che</b> und <b>è vero che</b> steht der Indikativ – das sind Fakten.", "Same subject? Then use the infinitive with <b>di</b>: Penso <b>di</b> avere ragione. After <b>so che</b> and <b>è vero che</b> use the indicative – those are facts.")]
  ],
  forms: { verbs: ["parlare", "prendere", "dormire", "capire", "essere", "avere", "fare", "andare", "potere", "venire"], tenses: ["Congiuntivo presente"] },
  drill: [
    ["Penso che Marco ___ ragione.", ["abbia", "ha", "avrebbe"], 0],
    ["Spero che tu ___ bene.", ["stia", "stai", "stare"], 0],
    ["È importante che voi ___ in tempo.", ["arriviate", "arrivate", "arrivare"], 0],
    ["So che lui ___ di Napoli.", ["è", "sia", "fosse"], 0, TB("<i>So che</i> = Fakt → Indikativ.", "<i>So che</i> = a fact → indicative.")],
    ["Credo ___ avere sbagliato.", ["di", "che", "a"], 0, TB("Gleiches Subjekt → di + Infinitiv.", "Same subject → di + infinitive.")],
    ["Non credo che loro ___ venire. (potere)", "possano"],
    ["Bisogna che tu ___ la verità. (dire)", "dica"],
    ["Ho paura che ___ troppo tardi. (essere)", "sia"]
  ],
  talk: { t: TB("Homeoffice – ja oder nein?", "Remote work – yes or no?"), scene: TB("Deine Kollegin Valeria findet, dass alle wieder ins Büro kommen sollten. Du siehst das anders.", "Your colleague Valeria thinks everyone should come back to the office. You see it differently."), who: "Valeria", slots: {}, lines: `a|Secondo me è importante che tutti tornino in ufficio. Lavorare insieme è più efficace.|Meiner Meinung nach ist es wichtig, dass alle ins Büro zurückkommen. Zusammen zu arbeiten ist effektiver.|In my opinion it's important that everyone comes back to the office. Working together is more effective.
me|Capisco il tuo punto di vista, ma non sono d'accordo.|Ich verstehe deinen Standpunkt, aber ich bin nicht einverstanden.|I understand your point of view, but I don't agree.|Capisco, ma non sono d'accordo.; Non sono d'accordo con te.
a|Perché? Non pensi che in ufficio si lavori meglio?|Warum? Denkst du nicht, dass man im Büro besser arbeitet?|Why? Don't you think people work better in the office?
me|Penso che a casa io sia più concentrato e meno stressato.|Ich denke, zu Hause bin ich konzentrierter und weniger gestresst.|I think I'm more focused and less stressed at home.|Credo che a casa io sia più concentrato.; Penso di essere più concentrato a casa.
a|Ma non hai paura che il team perda il contatto?|Aber hast du keine Angst, dass das Team den Kontakt verliert?|But aren't you afraid the team will lose touch?
me|Un po' sì. Forse è meglio che ci vediamo due volte alla settimana.|Ein bisschen schon. Vielleicht ist es besser, wenn wir uns zweimal pro Woche sehen.|A bit, yes. Maybe it's better if we meet twice a week.|È vero. Forse è meglio vedersi due volte alla settimana.
a|Hmm, può darsi che tu abbia ragione. Un modello ibrido…|Hm, kann sein, dass du recht hast. Ein Hybridmodell …|Hmm, you may be right. A hybrid model…
me|Esatto! Spero che il capo sia d'accordo.|Genau! Ich hoffe, der Chef ist einverstanden.|Exactly! I hope the boss agrees.|Spero che anche il capo sia d'accordo.` }
});

lesson("B1", { id: "it-b1-02", t: TB("Il colloquio di lavoro – Relativpronomen", "Il colloquio di lavoro – Relative pronouns"),
  goal: TB("Du kannst dich in einem Vorstellungsgespräch präsentieren und Relativsätze mit che und cui bilden.", "You can present yourself in a job interview and build relative clauses with che and cui."),
  words: `il colloquio di lavoro|das Vorstellungsgespräch|the job interview|n
il curriculum (vitae)|der Lebenslauf|the CV|n
la candidatura|die Bewerbung|the application|n
candidarsi|sich bewerben|to apply|v|Mi sono candidato per il posto di project manager.|Ich habe mich auf die Stelle als Projektmanager beworben.|I've applied for the project manager position.
la posizione|die Stelle; die Position|the position|n
l'esperienza|die Erfahrung|the experience|n
la laurea|der Hochschulabschluss|the degree|n
laurearsi|den Abschluss machen|to graduate|v
il punto di forza|die Stärke|the strength|n
il punto debole|die Schwäche|the weakness|n
lavorare in squadra|im Team arbeiten|to work in a team|v
la responsabilità|die Verantwortung|responsibility|n
il datore di lavoro|der Arbeitgeber|the employer|n
il dipendente|der Arbeitnehmer|the employee|n
a tempo pieno|in Vollzeit|full-time|ph
a tempo determinato|befristet|fixed-term|ph
a tempo indeterminato|unbefristet|permanent|ph
la retribuzione|die Vergütung|the pay|n
affidabile|zuverlässig|reliable|adj
motivato/a|motiviert|motivated|adj
il periodo di prova|die Probezeit|the probation period|n`,
  say: `Mi occupo di marketing digitale da cinque anni.|Ich bin seit fünf Jahren im digitalen Marketing tätig.|I've been working in digital marketing for five years.
L'azienda in cui lavoro produce sensori.|Die Firma, bei der ich arbeite, stellt Sensoren her.|The company I work for makes sensors.
Il progetto di cui sono più orgoglioso è …|Das Projekt, auf das ich am stolzesten bin, ist …|The project I'm proudest of is …
Il mio punto di forza è la capacità di organizzare.|Meine Stärke ist meine Organisationsfähigkeit.|My strength is my ability to organise.
Perché vuole lavorare con noi?|Warum möchten Sie bei uns arbeiten?|Why do you want to work with us?
Quali sono le prossime tappe?|Wie geht es jetzt weiter?|What are the next steps?
La ringrazio per l'opportunità.|Ich danke Ihnen für die Gelegenheit.|Thank you for the opportunity.`,
  gram: [
    ["h", TB("Relativpronomen: che und cui", "Relative pronouns: che and cui")],
    ["table", { head: [TB("Pronomen", "pronoun"), TB("wann?", "when?"), TB("Beispiel", "example")], rows: [
      ["che", TB("Subjekt oder direktes Objekt (der, die, das)", "subject or direct object (who, which, that)"), "Il collega <b>che</b> ho conosciuto è simpatico."],
      ["preposizione + cui", TB("nach Präpositionen", "after prepositions"), "L'azienda <b>in cui</b> lavoro … / Il progetto <b>di cui</b> parlo …"],
      ["il cui / la cui", TB("dessen / deren", "whose"), "Il cliente <b>il cui</b> ordine è arrivato …"],
      ["chi", TB("wer (allgemein)", "whoever"), "<b>Chi</b> cerca, trova."]], say: 2 }],
    ["p", TB("<b>Il quale / la quale / i quali / le quali</b> ersetzt che oder cui in formellen Texten: l'azienda <b>presso la quale</b> lavoro.", "<b>Il quale / la quale / i quali / le quali</b> replaces che or cui in formal texts: l'azienda <b>presso la quale</b> lavoro.")],
    ["tip", TB("Im Vorstellungsgespräch siezt man: <b>Lei</b>, <b>Le</b>, <b>La</b>. Typische Frage: <i>Mi parli di Lei.</i> (Erzählen Sie mir von sich.)", "In interviews use the formal form: <b>Lei</b>, <b>Le</b>, <b>La</b>. A typical question: <i>Mi parli di Lei.</i> (Tell me about yourself.)")]
  ],
  th: "pronouns",
  drill: [
    ["Il libro ___ sto leggendo è molto interessante.", ["che", "cui", "chi"], 0],
    ["La città ___ cui sono nato è piccola.", ["in", "di", "che"], 0],
    ["Il collega ___ cui ti ho parlato si chiama Bruno.", ["di", "a", "da"], 0],
    ["La ragazza ___ abita qui è francese.", ["che", "cui", "la cui"], 0],
    ["Il motivo ___ cui ho cambiato lavoro è lo stipendio.", ["per", "di", "a"], 0],
    ["___ vuole partecipare deve iscriversi.", ["Chi", "Che", "Cui"], 0],
    ["È un contratto a tempo ___ : non ha una scadenza.", ["indeterminato", "determinato", "pieno"], 0]
  ],
  talk: { t: TB("Das Vorstellungsgespräch", "The job interview"), scene: TB("Bewerbungsgespräch bei einer Firma in Mailand. Die HR-Managerin, Dottoressa Galli, stellt die Fragen.", "Job interview at a company in Milan. The HR manager, Dr Galli, asks the questions."), who: "Dott.ssa Galli", slots: {}, lines: `a|Buongiorno, si accomodi. Mi parli un po' di Lei.|Guten Tag, nehmen Sie Platz. Erzählen Sie mir ein bisschen von sich.|Good morning, take a seat. Tell me a little about yourself.
me|Buongiorno. Mi sono laureato in economia e lavoro nel marketing da cinque anni.|Guten Tag. Ich habe Wirtschaft studiert und arbeite seit fünf Jahren im Marketing.|Good morning. I have a degree in economics and I've been working in marketing for five years.|Mi sono laureata in economia e lavoro nel marketing da cinque anni.
a|Molto bene. Qual è il progetto di cui è più orgoglioso?|Sehr gut. Auf welches Projekt sind Sie am stolzesten?|Very good. Which project are you proudest of?
me|Una campagna che abbiamo lanciato in tre paesi contemporaneamente.|Eine Kampagne, die wir in drei Ländern gleichzeitig gestartet haben.|A campaign we launched in three countries at the same time.|La campagna che abbiamo lanciato in tre paesi.
a|Interessante. E quali sono i suoi punti di forza?|Interessant. Und was sind Ihre Stärken?|Interesting. And what are your strengths?
me|Sono affidabile, organizzato e mi piace lavorare in squadra.|Ich bin zuverlässig, organisiert und arbeite gern im Team.|I'm reliable, organised and I enjoy working in a team.|Sono affidabile e organizzata, e amo lavorare in squadra.
a|E perché vuole lavorare con noi?|Und warum möchten Sie bei uns arbeiten?|And why do you want to work with us?
me|Perché la vostra azienda è innovativa e vorrei crescere a livello internazionale.|Weil Ihre Firma innovativ ist und ich mich international weiterentwickeln möchte.|Because your company is innovative and I'd like to grow internationally.|Perché siete un'azienda innovativa e vorrei lavorare in un contesto internazionale.
a|Perfetto. Ha qualche domanda per noi?|Perfekt. Haben Sie noch Fragen an uns?|Perfect. Do you have any questions for us?
me|Sì: quali sono le prossime tappe del processo di selezione?|Ja: Wie geht es im Auswahlverfahren weiter?|Yes: what are the next steps in the selection process?|Quali sono le prossime tappe?` }
});

lesson("B1", { id: "it-b1-03", t: TB("Se potessi… – Bedingungssätze", "Se potessi… – Conditional sentences"),
  goal: TB("Du kannst über reale und unwahrscheinliche Bedingungen sprechen: se + Congiuntivo imperfetto + Condizionale.", "You can talk about real and unlikely conditions: se + imperfect subjunctive + conditional."),
  words: `l'ipotesi|die Hypothese; die Annahme|the hypothesis|n
se|wenn; falls|if|x
nel caso in cui|falls|in case|ph
a condizione che|unter der Bedingung, dass|on condition that|ph
il colpo di fortuna|der Glücksfall|the stroke of luck|n
realizzare un sogno|einen Traum verwirklichen|to make a dream come true|v
licenziarsi|kündigen|to quit (one's job)|v|Se vincessi alla lotteria, mi licenzierei.|Wenn ich im Lotto gewinnen würde, würde ich kündigen.|If I won the lottery, I'd quit my job.
il potere|die Macht|power|n
invisibile|unsichtbar|invisible|adj
volare|fliegen|to fly|v
il presidente|der Präsident|the president|n
cambiare il mondo|die Welt verändern|to change the world|v
la scelta|die Wahl; die Entscheidung|the choice|n
scegliere|wählen; aussuchen|to choose|v
rinunciare a|verzichten auf|to give up|v
pentirsi|bereuen|to regret|v
fossi in te|wenn ich du wäre|if I were you|ph|Se fossi in te, accetterei l'offerta.|Wenn ich du wäre, würde ich das Angebot annehmen.|If I were you, I'd accept the offer.
l'offerta|das Angebot|the offer|n
trasferirsi all'estero|ins Ausland ziehen|to move abroad|v`,
  say: `Se ho tempo, vengo volentieri.|Wenn ich Zeit habe, komme ich gern.|If I have time, I'll gladly come.
Se avessi più tempo, imparerei il cinese.|Wenn ich mehr Zeit hätte, würde ich Chinesisch lernen.|If I had more time, I'd learn Chinese.
Se fossi in te, non lo farei.|An deiner Stelle würde ich das nicht tun.|If I were you, I wouldn't do it.
Se potessi vivere ovunque, sceglierei Lisbona.|Wenn ich überall leben könnte, würde ich Lissabon wählen.|If I could live anywhere, I'd choose Lisbon.
Cosa faresti se vincessi un milione?|Was würdest du tun, wenn du eine Million gewinnen würdest?|What would you do if you won a million?
Se piovesse, resteremmo a casa.|Wenn es regnen würde, blieben wir zu Hause.|If it rained, we'd stay at home.
Magari fosse vero!|Schön wär's!|If only it were true!`,
  gram: [
    ["h", TB("Drei Arten von Bedingungen", "Three types of condition")],
    ["table", { head: [TB("Typ", "type"), TB("se + …", "se + …"), TB("Hauptsatz", "main clause"), TB("Beispiel", "example")], rows: [
      [TB("real", "real"), "presente", "presente / futuro", "Se piove, resto a casa."],
      [TB("möglich / unwahrscheinlich", "possible / unlikely"), "congiuntivo imperfetto", "condizionale presente", "Se piovesse, resterei a casa."],
      [TB("unmöglich (Vergangenheit)", "impossible (past)"), "congiuntivo trapassato", "condizionale passato", "Se fosse piovuto, sarei rimasto a casa."]], say: 3 }],
    ["h", TB("Congiuntivo imperfetto", "Imperfect subjunctive")],
    ["p", TB("Stamm + <b>-assi / -essi / -issi</b>: parl<b>assi</b>, prend<b>essi</b>, dorm<b>issi</b>. Sehr unregelmäßig: <b>essere → fossi</b>, fare → facessi, dare → dessi, stare → stessi, dire → dicessi.", "Stem + <b>-assi / -essi / -issi</b>: parl<b>assi</b>, prend<b>essi</b>, dorm<b>issi</b>. Very irregular: <b>essere → fossi</b>, fare → facessi, dare → dessi, stare → stessi, dire → dicessi.")],
    ["conj", { verbs: ["essere", "avere", "potere"], tenses: ["Congiuntivo imperfetto"] }],
    ["tip", TB("Nie Konditional nach <b>se</b>! Falsch: <s>se avrei tempo</s>. Richtig: <b>se avessi tempo</b>.", "Never use the conditional after <b>se</b>! Wrong: <s>se avrei tempo</s>. Right: <b>se avessi tempo</b>.")]
  ],
  quiz: ["it-condizionale"], forms: { verbs: ["parlare", "prendere", "dormire", "essere", "avere", "fare", "stare", "andare", "potere"], tenses: ["Congiuntivo imperfetto"] },
  drill: [
    ["Se ___ ricco, comprerei una barca.", ["fossi", "sarei", "ero"], 0],
    ["Se avessi tempo, ___ un corso di cucina.", ["farei", "facessi", "faccio"], 0],
    ["Se domani piove, ___ al cinema.", ["andiamo", "andremmo", "andassimo"], 0, TB("Reale Bedingung → Indikativ.", "Real condition → indicative.")],
    ["Se potessi, ___ in Italia.", ["vivrei", "vivessi", "vivo"], 0],
    ["Cosa faresti se ___ il capo? (essere, tu)", "fossi"],
    ["Se noi ___ più soldi, viaggeremmo di più. (avere)", "avessimo"],
    ["Se lui ___ la verità, tutto sarebbe più facile. (dire)", "dicesse"]
  ],
  talk: { t: TB("Ein Jobangebot im Ausland", "A job offer abroad"), scene: TB("Dein Freund Lorenzo hat ein Angebot aus Barcelona bekommen und ist unsicher. Er fragt dich um Rat.", "Your friend Lorenzo has received an offer from Barcelona and isn't sure. He asks for your advice."), who: "Lorenzo", slots: {}, lines: `a|Mi hanno offerto un lavoro a Barcellona, ma non so se accettare. Tu cosa faresti?|Man hat mir einen Job in Barcelona angeboten, aber ich weiß nicht, ob ich annehmen soll. Was würdest du tun?|They've offered me a job in Barcelona, but I don't know whether to accept. What would you do?
me|Se fossi in te, accetterei subito!|An deiner Stelle würde ich sofort annehmen!|If I were you, I'd accept straight away!|Fossi in te, accetterei subito.; Se fossi in te, direi di sì.
a|Davvero? Ma se andassi via, lascerei qui la mia famiglia.|Wirklich? Aber wenn ich wegginge, würde ich meine Familie hier zurücklassen.|Really? But if I left, I'd be leaving my family here.
me|Lo capisco. Ma potresti tornare spesso, Barcellona non è lontana.|Das verstehe ich. Aber du könntest oft zurückkommen, Barcelona ist nicht weit.|I understand. But you could come back often, Barcelona isn't far.|Capisco, ma potresti tornare spesso.
a|È vero. E se il lavoro non mi piacesse?|Stimmt. Und wenn mir der Job nicht gefallen würde?|True. And what if I didn't like the job?
me|Se non ti piacesse, potresti sempre cercare qualcos'altro.|Wenn er dir nicht gefallen würde, könntest du immer etwas anderes suchen.|If you didn't like it, you could always look for something else.|In quel caso cercheresti un altro lavoro.
a|Hai ragione. Se non provo, non lo saprò mai.|Du hast recht. Wenn ich es nicht versuche, werde ich es nie wissen.|You're right. If I don't try, I'll never know.
me|Esatto! E se vai, vengo a trovarti.|Genau! Und wenn du gehst, besuche ich dich.|Exactly! And if you go, I'll come and visit you.|Esatto, e io vengo a trovarti!` }
});

lesson("B1", { id: "it-b1-04", t: TB("Notizie e media – Passiv und <i>si</i>", "Notizie e media – Passive and <i>si</i>"),
  goal: TB("Du kannst Nachrichten verstehen und wiedergeben und das Passiv sowie das unpersönliche si benutzen.", "You can understand and report news and use the passive and impersonal si."),
  words: `la notizia|die Nachricht (Neuigkeit)|the news item|n
il telegiornale|die Fernsehnachrichten|the TV news|n
il giornale|die Zeitung|the newspaper|n
l'articolo|der Artikel|the article|n
il/la giornalista|der/die Journalist(in)|the journalist|n
l'intervista|das Interview|the interview|n
il titolo|die Schlagzeile; der Titel|the headline; the title|n
i social|die sozialen Medien|social media|n
la fake news|die Falschmeldung|the fake news|n
la fonte|die Quelle|the source|n|Bisogna sempre controllare la fonte.|Man muss immer die Quelle prüfen.|You always have to check the source.
pubblicare|veröffentlichen|to publish|v
annunciare|ankündigen; bekanntgeben|to announce|v
il governo|die Regierung|the government|n
le elezioni|die Wahlen|the elections|n
lo sciopero|der Streik|the strike|n
la manifestazione|die Demonstration|the demonstration|n
il terremoto|das Erdbeben|the earthquake|n
l'alluvione|die Überschwemmung|the flood|n
secondo|laut; nach|according to|x|Secondo il giornale, …|Laut der Zeitung …|According to the paper, …
attuale|aktuell|current|adj
informarsi|sich informieren|to keep informed|v`,
  say: `Il nuovo ponte è stato inaugurato ieri.|Die neue Brücke wurde gestern eingeweiht.|The new bridge was opened yesterday.
La notizia è stata pubblicata da tutti i giornali.|Die Nachricht wurde von allen Zeitungen veröffentlicht.|The news was published by all the papers.
In Italia si legge poco.|In Italien wird wenig gelesen.|People in Italy don't read much.
Si dice che il ministro si dimetterà.|Man sagt, der Minister werde zurücktreten.|It's said that the minister will resign.
Si parlano molte lingue in Svizzera.|In der Schweiz spricht man viele Sprachen.|Many languages are spoken in Switzerland.
Lo sciopero viene annunciato con una settimana di anticipo.|Der Streik wird eine Woche im Voraus angekündigt.|The strike is announced a week in advance.
Come ti informi?|Wie informierst du dich?|How do you keep informed?`,
  gram: [
    ["h", TB("Das Passiv: essere / venire + Partizip", "The passive: essere / venire + participle")],
    ["ex", [["Il libro è letto da milioni di persone.", "Das Buch wird von Millionen Menschen gelesen.", "The book is read by millions of people."], ["La legge è stata approvata.", "Das Gesetz wurde verabschiedet.", "The law has been passed."], ["Le lettere vengono spedite ogni giorno.", "Die Briefe werden jeden Tag verschickt.", "The letters are sent every day."]]],
    ["p", TB("Das Partizip passt sich ans Subjekt an (la legge è stat<b>a</b> approvat<b>a</b>). Der Urheber steht mit <b>da</b>. <b>venire</b> statt essere betont den Vorgang und geht nur in einfachen Zeiten.", "The participle agrees with the subject (la legge è stat<b>a</b> approvat<b>a</b>). The agent is introduced by <b>da</b>. <b>venire</b> instead of essere stresses the process and only works in simple tenses.")],
    ["h", TB("Das unpersönliche <i>si</i> (man)", "Impersonal <i>si</i> (one, people)")],
    ["p", TB("<b>si</b> + 3. Person: <b>si mangia</b> bene qui (man isst gut). Mit Objekt im Plural steht das Verb im Plural: <b>si vendono</b> case.", "<b>si</b> + 3rd person: <b>si mangia</b> bene qui (the food is good here). With a plural object the verb is plural: <b>si vendono</b> case (houses for sale).")],
    ["tip", TB("Zeitungsdeutsch „soll“ (laut Berichten) = Condizionale: <b>Il ministro sarebbe</b> a Bruxelles (Der Minister soll in Brüssel sein).", "Reporting unconfirmed news uses the conditional: <b>Il ministro sarebbe</b> a Bruxelles (The minister is reportedly in Brussels).")]
  ],
  drill: [
    ["La mostra ___ inaugurata ieri.", ["è stata", "ha stato", "è stato"], 0],
    ["I risultati ___ pubblicati domani.", ["saranno", "avranno", "verrebbero stati"], 0],
    ["In questo ristorante ___ benissimo.", ["si mangia", "si mangiano", "mangia"], 0],
    ["In Italia ___ molti dialetti.", ["si parlano", "si parla", "parla"], 0],
    ["L'articolo è stato scritto ___ una giornalista famosa.", ["da", "di", "per"], 0],
    ["Le notizie ___ controllate prima della pubblicazione.", ["vengono", "venivano state", "sono venute"], 0],
    ["Secondo i giornali, il presidente ___ malato. (Gerücht: essere)", "sarebbe"]
  ],
  talk: { t: TB("Nachrichten des Tages", "Today's news"), scene: TB("Beim Frühstück liest dein Mitbewohner Simone Nachrichten auf dem Handy vor.", "At breakfast your flatmate Simone reads the news on his phone."), who: "Simone", slots: {}, lines: `a|Hai letto? Domani c'è uno sciopero dei treni in tutta Italia.|Hast du gelesen? Morgen ist in ganz Italien Bahnstreik.|Have you read? There's a train strike all over Italy tomorrow.
me|No! Da chi è stato annunciato?|Nein! Von wem wurde er angekündigt?|No! Who announced it?|Davvero? Chi l'ha annunciato?
a|Dai sindacati. Si dice che duri ventiquattro ore.|Von den Gewerkschaften. Es heißt, er dauert vierundzwanzig Stunden.|By the unions. They say it'll last twenty-four hours.
me|Che disastro, domani devo andare a Firenze per lavoro.|Was für eine Katastrophe, morgen muss ich beruflich nach Florenz.|What a disaster, I have to go to Florence for work tomorrow.|Accidenti, domani devo andare a Firenze!
a|Secondo l'articolo, alcuni treni vengono garantiti la mattina presto.|Laut Artikel werden einige Züge frühmorgens garantiert.|According to the article, some trains are guaranteed early in the morning.
me|Allora controllo subito l'orario sul sito di Trenitalia.|Dann prüfe ich sofort den Fahrplan auf der Trenitalia-Seite.|Then I'll check the timetable on the Trenitalia website right away.|Controllo subito sul sito.
a|Bravo! Io invece mi informo solo sui social…|Gut so! Ich informiere mich dagegen nur über Social Media …|Good idea! I only get my news from social media, on the other hand…
me|Attento alle fake news! Bisogna sempre controllare la fonte.|Vorsicht vor Fake News! Man muss immer die Quelle prüfen.|Watch out for fake news! You always have to check the source.|Occhio alle fake news, controlla sempre la fonte!` }
});

/* Italiano B1 · 5–8 */
lesson("B1", { id: "it-b1-05", t: TB("L'ambiente – Umwelt und Nachhaltigkeit", "L'ambiente – Environment and sustainability"),
  goal: TB("Du kannst über Umweltprobleme diskutieren, Vorschläge machen und Notwendigkeit ausdrücken.", "You can discuss environmental problems, make suggestions and express necessity."),
  words: `l'ambiente|die Umwelt|the environment|n
il cambiamento climatico|der Klimawandel|climate change|n
il riscaldamento globale|die Erderwärmung|global warming|n
l'inquinamento|die Verschmutzung|pollution|n
i rifiuti|der Müll; die Abfälle|waste; rubbish|n
la raccolta differenziata|die Mülltrennung|recycling (separate collection)|n|Qui si fa la raccolta differenziata.|Hier wird der Müll getrennt.|Waste is separated here.
riciclare|recyceln|to recycle|v
la plastica|der Kunststoff; das Plastik|plastic|n
le energie rinnovabili|erneuerbare Energien|renewable energy|n
il pannello solare|die Solarzelle|the solar panel|n
risparmiare energia|Energie sparen|to save energy|v
sprecare|verschwenden|to waste|v
lo spreco|die Verschwendung|waste (of resources)|n
sostenibile|nachhaltig|sustainable|adj
la sostenibilità|die Nachhaltigkeit|sustainability|n
le emissioni|die Emissionen|emissions|n
la siccità|die Dürre|drought|n
proteggere|schützen|to protect|v
il consumo|der Verbrauch|consumption|n
a km zero|regional (ohne lange Transportwege)|locally sourced|ph
la borraccia|die Trinkflasche|the reusable bottle|n
l'auto elettrica|das Elektroauto|the electric car|n`,
  say: `Bisogna ridurre il consumo di plastica.|Man muss den Plastikverbrauch reduzieren.|We need to reduce plastic consumption.
È necessario che tutti facciano la loro parte.|Es ist nötig, dass alle ihren Teil beitragen.|Everyone needs to do their part.
Bisognerebbe usare di più i mezzi pubblici.|Man sollte mehr öffentliche Verkehrsmittel nutzen.|We should use public transport more.
Cerco di comprare prodotti a km zero.|Ich versuche, regionale Produkte zu kaufen.|I try to buy local products.
Non sprecare l'acqua!|Verschwende kein Wasser!|Don't waste water!
Sono d'accordo, ma non è così facile.|Einverstanden, aber so einfach ist das nicht.|I agree, but it's not that easy.
Cosa possiamo fare noi nel quotidiano?|Was können wir im Alltag tun?|What can we do in everyday life?`,
  gram: [
    ["h", TB("Notwendigkeit ausdrücken", "Expressing necessity")],
    ["table", { head: [TB("Ausdruck", "expression"), TB("+", "+"), TB("Beispiel", "example")], rows: [
      ["bisogna", TB("Infinitiv", "infinitive"), "Bisogna riciclare."], ["bisogna che", TB("Congiuntivo", "subjunctive"), "Bisogna che tu ricicli."], ["è necessario / è importante", TB("Infinitiv", "infinitive"), "È importante risparmiare energia."],
      ["è necessario che", TB("Congiuntivo", "subjunctive"), "È necessario che il governo agisca."], ["ci vuole / ci vogliono", TB("Nomen", "noun"), "Ci vogliono più parchi."], ["bisognerebbe", TB("Infinitiv (Rat)", "infinitive (advice)"), "Bisognerebbe consumare meno."]], say: 2 }],
    ["p", TB("<b>ci vuole</b> + Singular, <b>ci vogliono</b> + Plural: Ci vuole tempo. Ci vogliono due ore.", "<b>ci vuole</b> + singular, <b>ci vogliono</b> + plural: Ci vuole tempo. Ci vogliono due ore.")],
    ["tip", TB("Allgemein → Infinitiv (Bisogna agire). Für eine bestimmte Person → che + Congiuntivo (Bisogna che <b>voi</b> agiate).", "In general → infinitive (Bisogna agire). For a specific person → che + subjunctive (Bisogna che <b>voi</b> agiate).")]
  ],
  forms: { verbs: ["ridurre", "riciclare", "proteggere", "fare", "essere"], tenses: ["Congiuntivo presente"] },
  drill: [
    ["Bisogna ___ meno carne.", ["mangiare", "mangi", "mangiamo"], 0],
    ["È necessario che il governo ___ subito.", ["agisca", "agisce", "agire"], 0],
    ["Ci ___ molti anni per cambiare le abitudini.", ["vogliono", "vuole", "vuol"], 0],
    ["Ci ___ pazienza.", ["vuole", "vogliono", "vuoi"], 0],
    ["È importante che noi ___ energia. (risparmiare)", "risparmiamo"],
    ["Bisognerebbe ___ di più la bici. (usare)", "usare"],
    ["Non bisogna ___ il cibo.", ["sprecare", "spreco", "sprechi"], 0]
  ],
  talk: { t: TB("Diskussion über Klimaschutz", "A discussion about climate protection"), scene: TB("In der Mittagspause diskutierst du mit deiner Kollegin Federica, was jeder Einzelne tun kann.", "During the lunch break you discuss with your colleague Federica what each person can do."), who: "Federica", slots: {}, lines: `a|Secondo me il singolo non può fare molto. Bisogna che cambino le grandi aziende.|Meiner Meinung nach kann der Einzelne nicht viel tun. Die großen Firmen müssen sich ändern.|In my opinion individuals can't do much. The big companies need to change.
me|È vero, ma anche le piccole azioni sono importanti.|Das stimmt, aber auch kleine Handlungen sind wichtig.|That's true, but small actions matter too.|Hai ragione, però anche i piccoli gesti contano.
a|Per esempio? Tu cosa fai?|Zum Beispiel? Was machst du?|For example? What do you do?
me|Vado al lavoro in bici e cerco di non sprecare il cibo.|Ich fahre mit dem Rad zur Arbeit und versuche, keine Lebensmittel zu verschwenden.|I cycle to work and try not to waste food.|Uso la bici e non spreco il cibo.
a|Brava! Io invece prendo sempre la macchina, ci vogliono quaranta minuti in autobus.|Toll! Ich nehme dagegen immer das Auto, mit dem Bus braucht man vierzig Minuten.|Well done! I always take the car, it takes forty minutes by bus.
me|Capisco. Bisognerebbe migliorare i mezzi pubblici.|Verstehe. Man müsste die öffentlichen Verkehrsmittel verbessern.|I see. Public transport ought to be improved.|Allora bisognerebbe migliorare i trasporti pubblici.
a|Esatto. È necessario che anche il comune faccia qualcosa.|Genau. Die Stadt muss auch etwas tun.|Exactly. The city needs to do something too.
me|Sono d'accordo. Intanto possiamo fare car sharing insieme!|Einverstanden. Bis dahin können wir eine Fahrgemeinschaft bilden!|I agree. Meanwhile we can car-share!|D'accordo. Per ora possiamo andare al lavoro insieme!` }
});

lesson("B1", { id: "it-b1-06", t: TB("Relazioni – Gefühle und Doppelpronomen", "Relazioni – Feelings and combined pronouns"),
  goal: TB("Du kannst über Beziehungen und Gefühle sprechen und Doppelpronomen wie glielo und me lo benutzen.", "You can talk about relationships and feelings and use combined pronouns like glielo and me lo."),
  words: `la relazione|die Beziehung|the relationship|n
il rapporto|das Verhältnis; die Beziehung|the relationship|n
innamorarsi di|sich verlieben in|to fall in love with|v|Si è innamorato di una ragazza di Roma.|Er hat sich in eine Römerin verliebt.|He fell in love with a girl from Rome.
fidanzarsi|sich verloben|to get engaged|v
lasciarsi|sich trennen|to break up|v
litigare|streiten|to argue|v
fare pace|sich versöhnen|to make up|v
la gelosia|die Eifersucht|jealousy|n
geloso/a|eifersüchtig|jealous|adj
fidarsi di|vertrauen|to trust|v
la fiducia|das Vertrauen|trust|n
mancare|fehlen; vermissen|to miss|v|Mi manchi tanto.|Ich vermisse dich so sehr.|I miss you so much.
deluso/a|enttäuscht|disappointed|adj
arrabbiato/a|wütend|angry|adj
offeso/a|beleidigt|offended|adj
commosso/a|gerührt|moved (emotionally)|adj
orgoglioso/a|stolz|proud|adj
volere bene a|gern haben; lieb haben|to love (friends, family)|v|Ti voglio bene.|Ich hab dich lieb.|I love you (friendly).
ti amo|ich liebe dich|I love you (romantic)|ph
il/la migliore amico/a|der beste Freund / die beste Freundin|the best friend|n
lo sfogo|das Abreagieren; das Ausschütten|venting|n
consolare|trösten|to console|v`,
  say: `Te lo prometto.|Ich verspreche es dir.|I promise you.
Glielo dico domani.|Ich sage es ihm/ihr morgen.|I'll tell him/her tomorrow.
Me lo presti?|Leihst du es mir?|Will you lend it to me?
Ce ne siamo dimenticati.|Wir haben es vergessen.|We forgot about it.
Non me ne parlare!|Erzähl mir nichts davon!|Don't talk to me about it!
Ci siamo lasciati dopo tre anni.|Wir haben uns nach drei Jahren getrennt.|We broke up after three years.
Mi fido di te.|Ich vertraue dir.|I trust you.`,
  gram: [
    ["h", TB("Doppelpronomen", "Combined pronouns")],
    ["p", TB("Indirektes + direktes Pronomen: mi, ti, ci, vi werden zu <b>me, te, ce, ve</b>. <b>gli / le</b> + lo/la/li/le/ne → <b>glielo, gliela, glieli, gliele, gliene</b> (für ihm, ihr und Ihnen).", "Indirect + direct pronoun: mi, ti, ci, vi become <b>me, te, ce, ve</b>. <b>gli / le</b> + lo/la/li/le/ne → <b>glielo, gliela, glieli, gliele, gliene</b> (to him, her and you formal).")],
    ["table", { head: [TB("", ""), "+ lo", "+ la", "+ li", "+ le", "+ ne"], rows: [["mi", "me lo", "me la", "me li", "me le", "me ne"], ["ti", "te lo", "te la", "te li", "te le", "te ne"], ["gli / le", "glielo", "gliela", "glieli", "gliele", "gliene"], ["ci", "ce lo", "ce la", "ce li", "ce le", "ce ne"], ["vi", "ve lo", "ve la", "ve li", "ve le", "ve ne"]] }],
    ["ex", [["Mi dai il libro? – Sì, te lo do.", "Gibst du mir das Buch? – Ja, ich gebe es dir.", "Will you give me the book? – Yes, I'll give it to you."], ["Hai detto la verità a Marta? – No, non gliel'ho detta.", "Hast du Marta die Wahrheit gesagt? – Nein, ich habe sie ihr nicht gesagt.", "Did you tell Marta the truth? – No, I didn't tell her."]]],
    ["tip", TB("Bei reflexiven Verben mit <b>ne</b>: andarse<b>ne</b> (weggehen) → me ne vado, te ne vai, se ne va. Sehr häufig: <b>Me ne vado!</b> (Ich gehe!)", "Reflexive verbs with <b>ne</b>: andarse<b>ne</b> (to leave) → me ne vado, te ne vai, se ne va. Very common: <b>Me ne vado!</b> (I'm off!)")]
  ],
  th: "pronouns",
  drill: [
    ["Mi presti la bici? – Sì, ___ presto.", ["te la", "ti la", "te lo"], 0],
    ["Hai dato il regalo a Luca? – Sì, ___ ho dato ieri.", ["gliel'", "glie l'", "l'gli"], 0],
    ["Ci porti i biglietti? – Sì, ___ porto domani.", ["ve li", "vi li", "ve le"], 0],
    ["Hai parlato a tua madre del viaggio? – Sì, ___ ho parlato.", ["gliene", "glielo", "le ne"], 0],
    ["Mi ___ tanto quando sei lontana.", ["manchi", "manca", "mancate"], 0],
    ["Mi fido ___ te.", ["di", "a", "in"], 0],
    ["Marco e Laura si sono ___ dopo cinque anni.", ["lasciati", "lasciato", "lasciate"], 0]
  ],
  talk: { t: TB("Liebeskummer", "Heartbreak"), scene: TB("Deine Freundin Giada ist traurig und ruft dich an. Du tröstest sie.", "Your friend Giada is sad and calls you. You comfort her."), who: "Giada", slots: {}, lines: `a|Ciao… scusa se ti chiamo a quest'ora. Io e Matteo ci siamo lasciati.|Hallo … entschuldige, dass ich so spät anrufe. Matteo und ich haben uns getrennt.|Hi… sorry for calling so late. Matteo and I have broken up.
me|Oh no, mi dispiace tantissimo! Cosa è successo?|Oh nein, das tut mir so leid! Was ist passiert?|Oh no, I'm so sorry! What happened?|Mi dispiace molto! Cos'è successo?
a|Litigavamo sempre. Era gelosissimo e non si fidava di me.|Wir haben ständig gestritten. Er war total eifersüchtig und hat mir nicht vertraut.|We argued all the time. He was terribly jealous and didn't trust me.
me|Senza fiducia una relazione non funziona.|Ohne Vertrauen funktioniert keine Beziehung.|A relationship doesn't work without trust.|Senza fiducia non si va da nessuna parte.
a|Lo so… ma mi manca già. Gli ho anche regalato una chitarra per il compleanno.|Ich weiß … aber er fehlt mir schon. Ich habe ihm sogar eine Gitarre zum Geburtstag geschenkt.|I know… but I already miss him. I even gave him a guitar for his birthday.
me|E lui te l'ha restituita?|Und hat er sie dir zurückgegeben?|And did he give it back to you?|Te l'ha ridata?
a|No, se l'è tenuta! Ma va bene così.|Nein, er hat sie behalten! Aber das ist schon okay.|No, he kept it! But that's fine.
me|Domani passo da te e ti porto il gelato. Te lo prometto!|Morgen komme ich vorbei und bringe dir Eis mit. Versprochen!|I'll come round tomorrow and bring you ice cream. I promise!|Domani vengo da te con il gelato, te lo prometto.
a|Grazie, sei un tesoro. Ti voglio bene.|Danke, du bist ein Schatz. Hab dich lieb.|Thanks, you're a treasure. Love you.
me|Anch'io ti voglio bene. A domani!|Ich dich auch. Bis morgen!|Love you too. See you tomorrow!|Anch'io! A domani.` }
});

lesson("B1", { id: "it-b1-07", t: TB("Raccontare un viaggio – Trapassato und Konnektoren", "Raccontare un viaggio – Past perfect and connectors"),
  goal: TB("Du kannst eine Reise erzählen, Vorzeitigkeit ausdrücken und Sätze mit Konnektoren verbinden.", "You can tell the story of a trip, express what had happened before and link sentences with connectors."),
  words: `il viaggio|die Reise|the journey; the trip|n
l'itinerario|die Reiseroute|the itinerary|n
lo zaino|der Rucksack|the backpack|n
l'ostello|die Jugendherberge|the hostel|n
il volo|der Flug|the flight|n
cancellato/a|gestrichen; abgesagt|cancelled|adj|Il volo era stato cancellato.|Der Flug war gestrichen worden.|The flight had been cancelled.
la coincidenza|der Anschluss (Verkehr)|the connection|n
il bagaglio|das Gepäck|the luggage|n
smarrito/a|verloren|lost|adj
l'avventura|das Abenteuer|the adventure|n
il paesaggio|die Landschaft|the landscape|n
mozzafiato|atemberaubend|breathtaking|adj
appena|sobald; kaum|as soon as; just|adv|Appena siamo arrivati, ha cominciato a piovere.|Kaum waren wir angekommen, fing es an zu regnen.|As soon as we arrived, it started to rain.
dopo che|nachdem|after|x
siccome|da (weil)|since; as|x
quindi|also; deshalb|so; therefore|x
infatti|tatsächlich; nämlich|in fact; indeed|x
invece|stattdessen; dagegen|instead; on the other hand|adv
nonostante|trotz|despite|x
comunque|jedenfalls; trotzdem|anyway; however|adv
alla fine|am Ende|in the end|ph
indimenticabile|unvergesslich|unforgettable|adj`,
  say: `Quando siamo arrivati, il treno era già partito.|Als wir ankamen, war der Zug schon abgefahren.|When we arrived, the train had already left.
Non avevo mai visto un paesaggio così.|So eine Landschaft hatte ich noch nie gesehen.|I had never seen a landscape like that.
Siccome pioveva, siamo rimasti in albergo.|Da es regnete, sind wir im Hotel geblieben.|As it was raining, we stayed at the hotel.
Dopo che avevamo cenato, siamo andati in spiaggia.|Nachdem wir zu Abend gegessen hatten, gingen wir an den Strand.|After we had had dinner, we went to the beach.
Nonostante la pioggia, è stato un viaggio fantastico.|Trotz des Regens war es eine fantastische Reise.|Despite the rain, it was a fantastic trip.
Alla fine tutto è andato bene.|Am Ende ist alles gut gegangen.|In the end everything turned out fine.
È stata un'esperienza indimenticabile.|Es war eine unvergessliche Erfahrung.|It was an unforgettable experience.`,
  gram: [
    ["h", TB("Trapassato prossimo: Vorvergangenheit", "Trapassato prossimo: past perfect")],
    ["p", TB("<b>Imperfetto von avere/essere + Partizip</b>: avevo visto, ero partito/a. Für etwas, das <b>vor</b> einem anderen Ereignis in der Vergangenheit passiert war.", "<b>Imperfect of avere/essere + participle</b>: avevo visto, ero partito/a. For something that had happened <b>before</b> another past event.")],
    ["ex", [["Quando sono arrivato, Anna era già uscita.", "Als ich ankam, war Anna schon gegangen.", "When I arrived, Anna had already gone out."], ["Mi ha detto che aveva perso il passaporto.", "Er hat mir gesagt, dass er seinen Pass verloren hatte.", "He told me he had lost his passport."]]],
    ["h", TB("Konnektoren", "Connectors")],
    ["table", { head: [TB("Funktion", "function"), TB("Konnektoren", "connectors")], rows: [
      [TB("Zeit", "time"), "quando, appena, mentre, dopo che, prima di, poi"], [TB("Grund", "cause"), "perché, siccome, dato che, visto che"], [TB("Folge", "consequence"), "quindi, perciò, così"], [TB("Gegensatz", "contrast"), "ma, però, invece, comunque, nonostante, anche se"]] }],
    ["tip", TB("<b>siccome</b> steht am Satzanfang, <b>perché</b> in der Mitte: <i>Siccome</i> ero stanco, sono andato a letto. = Sono andato a letto <i>perché</i> ero stanco.", "<b>siccome</b> comes at the start of the sentence, <b>perché</b> in the middle: <i>Siccome</i> ero stanco, sono andato a letto. = Sono andato a letto <i>perché</i> ero stanco.")]
  ],
  th: "ppimp",
  drill: [
    ["Quando siamo arrivati al cinema, il film ___ già iniziato.", ["era", "aveva", "è"], 0],
    ["Non ___ mai mangiato il sushi prima di quel viaggio.", ["avevo", "ero", "ho"], 0],
    ["Mi ha raccontato che ___ in Giappone l'anno prima. (andare, lei)", "era andata"],
    ["___ pioveva, abbiamo preso un taxi.", ["Siccome", "Perché", "Quindi"], 0],
    ["Ero stanchissimo, ___ sono andato a letto presto.", ["quindi", "siccome", "nonostante"], 0],
    ["___ il ritardo, siamo arrivati in tempo per la cena.", ["Nonostante", "Siccome", "Appena"], 0],
    ["___ sono arrivato a casa, ti ho chiamato.", ["Appena", "Siccome", "Invece"], 0]
  ],
  talk: { t: TB("Reisebericht", "Travel story"), scene: TB("Dein Freund Tommaso will alles über deine Reise durch Sizilien wissen.", "Your friend Tommaso wants to hear all about your trip around Sicily."), who: "Tommaso", slots: {}, lines: `a|Allora, com'è andato il viaggio in Sicilia?|Und, wie war die Reise nach Sizilien?|So, how was the trip to Sicily?
me|Fantastico, anche se l'inizio è stato un disastro.|Fantastisch, auch wenn der Anfang eine Katastrophe war.|Fantastic, even though the start was a disaster.|È stato fantastico, ma l'inizio è stato un disastro.
a|Perché? Cosa è successo?|Warum? Was ist passiert?|Why? What happened?
me|Quando sono arrivato all'aeroporto, il volo era stato cancellato.|Als ich am Flughafen ankam, war der Flug gestrichen worden.|When I got to the airport, the flight had been cancelled.|Quando sono arrivata, il volo era stato cancellato.
a|Che sfortuna! E allora?|So ein Pech! Und dann?|What bad luck! And then?
me|Siccome non c'erano altri voli, ho preso il treno notturno.|Da es keine anderen Flüge gab, habe ich den Nachtzug genommen.|As there were no other flights, I took the night train.|Non c'erano altri voli, quindi ho preso il treno di notte.
a|Il treno fino in Sicilia? Che avventura!|Mit dem Zug bis nach Sizilien? Was für ein Abenteuer!|The train all the way to Sicily? What an adventure!
me|Sì, e appena siamo arrivati a Palermo, è uscito il sole.|Ja, und kaum waren wir in Palermo, kam die Sonne raus.|Yes, and as soon as we arrived in Palermo the sun came out.|Sì, e appena sono arrivato a Palermo c'era il sole.
a|E cosa ti è piaciuto di più?|Und was hat dir am besten gefallen?|And what did you like best?
me|L'Etna: un paesaggio mozzafiato che non avevo mai visto prima.|Der Ätna: eine atemberaubende Landschaft, wie ich sie noch nie gesehen hatte.|Etna: a breathtaking landscape like nothing I'd ever seen before.|L'Etna. Non avevo mai visto un paesaggio così.` }
});

lesson("B1", { id: "it-b1-08", t: TB("In cucina – Rezepte und Gerundium", "In cucina – Recipes and the gerund"),
  goal: TB("Du kannst ein Rezept verstehen und erklären und das Gerundium benutzen.", "You can understand and explain a recipe and use the gerund."),
  words: `la ricetta|das Rezept|the recipe|n
gli ingredienti|die Zutaten|the ingredients|n
tagliare|schneiden|to cut|v
tritare|hacken|to chop finely|v
soffriggere|andünsten|to fry lightly|v
bollire|kochen (sieden)|to boil|v
cuocere|garen; kochen|to cook|v|Fate cuocere la pasta per dieci minuti.|Lasst die Nudeln zehn Minuten kochen.|Cook the pasta for ten minutes.
mescolare|umrühren|to stir|v
aggiungere|hinzufügen|to add|v
scolare|abgießen|to drain|v
mettere in forno|in den Ofen schieben|to put in the oven|v
assaggiare|probieren|to taste|v
la pentola|der Topf|the pot|n
la padella|die Pfanne|the frying pan|n
il fuoco|das Feuer; die Hitze (Herd)|the heat (hob)|n|a fuoco lento|bei schwacher Hitze|on a low heat
q.b. (quanto basta)|nach Bedarf|to taste; as needed|ph
l'olio d'oliva|das Olivenöl|olive oil|n
l'aglio|der Knoblauch|garlic|n
la cipolla|die Zwiebel|the onion|n
il sale|das Salz|salt|n
il pepe|der Pfeffer|pepper|n
al dente|bissfest|al dente|ph`,
  say: `Mentre l'acqua bolle, taglia la cipolla.|Während das Wasser kocht, schneide die Zwiebel.|While the water boils, chop the onion.
Si mescola tutto a fuoco lento.|Man rührt alles bei schwacher Hitze um.|Stir everything over a low heat.
Aggiungendo un po' di peperoncino, diventa più saporito.|Mit etwas Chili wird es würziger.|Adding a little chilli makes it tastier.
La pasta va scolata al dente.|Die Nudeln müssen bissfest abgegossen werden.|The pasta should be drained al dente.
Sbagliando s'impara.|Aus Fehlern lernt man.|You learn from your mistakes.
Assaggia e aggiusta di sale.|Probier und schmeck mit Salz ab.|Taste and adjust the salt.
Buon appetito!|Guten Appetit!|Enjoy your meal!`,
  gram: [
    ["h", TB("Das Gerundium", "The gerund")],
    ["p", TB("-are → <b>-ando</b>, -ere/-ire → <b>-endo</b> (parlando, prendendo, dormendo). Es drückt <b>Gleichzeitigkeit</b>, <b>Art und Weise</b> oder <b>Bedingung</b> aus und hat dasselbe Subjekt wie der Hauptsatz.", "-are → <b>-ando</b>, -ere/-ire → <b>-endo</b> (parlando, prendendo, dormendo). It expresses <b>simultaneity</b>, <b>manner</b> or <b>condition</b> and has the same subject as the main clause.")],
    ["ex", [["Cucino ascoltando la radio.", "Ich koche und höre dabei Radio.", "I cook while listening to the radio."], ["Studiando ogni giorno, imparerai presto.", "Wenn du jeden Tag lernst, lernst du es schnell.", "By studying every day, you'll learn quickly."], ["Ho conosciuto Anna lavorando a Milano.", "Ich habe Anna kennengelernt, als ich in Mailand arbeitete.", "I met Anna while working in Milan."]]],
    ["h", TB("Rezepte: <i>si</i>, Imperativ, <i>andare</i> + Partizip", "Recipes: <i>si</i>, imperative, <i>andare</i> + participle")],
    ["p", TB("Rezepte stehen im Imperativ (taglia, tagliate), mit <b>si</b> (si taglia) oder mit <b>andare + Partizip</b> = muss gemacht werden: la pasta <b>va scolata</b>.", "Recipes use the imperative (taglia, tagliate), <b>si</b> (si taglia) or <b>andare + participle</b> = must be done: la pasta <b>va scolata</b>.")],
    ["tip", TB("Unregelmäßige Gerundien: fare → <b>facendo</b>, dire → <b>dicendo</b>, bere → <b>bevendo</b>, porre → <b>ponendo</b>, tradurre → <b>traducendo</b>.", "Irregular gerunds: fare → <b>facendo</b>, dire → <b>dicendo</b>, bere → <b>bevendo</b>, porre → <b>ponendo</b>, tradurre → <b>traducendo</b>.")]
  ],
  drill: [
    ["Ho imparato l'italiano ___ i film. (guardare)", "guardando"],
    ["___ la pasta, l'acqua deve bollire. (Prima di …)", ["Prima di buttare", "Buttando", "Buttato"], 0],
    ["Si impara molto ___ errori. (fare)", "facendo"],
    ["La cipolla va ___ finemente.", ["tritata", "tritato", "tritando"], 0],
    ["Il sugo ___ cuocere per venti minuti.", ["si lascia", "si lasciano", "lascia"], 0],
    ["Le patate vanno ___ in forno.", ["messe", "messo", "mettendo"], 0],
    ["___ sbaglia s'impara. (Sprichwort)", ["Sbagliando", "Sbagliato", "Sbagliare"], 0]
  ],
  talk: { t: TB("Kochkurs bei Nonna Rosa", "Cooking lesson with Nonna Rosa"), scene: TB("Nonna Rosa zeigt dir, wie man echte Pasta all'amatriciana kocht.", "Nonna Rosa shows you how to make real pasta all'amatriciana."), who: "Nonna Rosa", slots: {}, lines: `a|Allora, prima di tutto metti l'acqua a bollire in una pentola grande.|Also, zuerst setzt du Wasser in einem großen Topf auf.|Right, first of all put water on to boil in a big pot.
me|Fatto! E poi cosa devo fare?|Erledigt! Und was muss ich dann machen?|Done! And then what should I do?|Ok! E adesso?
a|Taglia il guanciale a striscioline e mettilo in padella, senza olio.|Schneide den Guanciale in Streifen und gib ihn ohne Öl in die Pfanne.|Cut the guanciale into strips and put it in the pan, without oil.
me|Senza olio? Davvero?|Ohne Öl? Wirklich?|Without oil? Really?|Niente olio?
a|Sì, il guanciale ha già abbastanza grasso. Cuocilo a fuoco lento finché diventa croccante.|Ja, der Guanciale hat schon genug Fett. Brate ihn bei schwacher Hitze, bis er knusprig ist.|Yes, the guanciale has enough fat already. Cook it over a low heat until it's crispy.
me|E la cipolla? L'aggiungo adesso?|Und die Zwiebel? Füge ich sie jetzt hinzu?|And the onion? Do I add it now?|Aggiungo la cipolla?
a|Mamma mia, no! Nell'amatriciana vera la cipolla non si mette!|Um Himmels willen, nein! In eine echte Amatriciana kommt keine Zwiebel!|Good heavens, no! You don't put onion in a real amatriciana!
me|Scusi, nonna! Allora aggiungo il pomodoro?|Entschuldigung, Oma! Dann gebe ich die Tomate dazu?|Sorry, nonna! So do I add the tomato?|Va bene! Metto il pomodoro?
a|Bravo! Mescolando ogni tanto, lascia cuocere per un quarto d'ora.|Sehr gut! Lass es eine Viertelstunde köcheln und rühr ab und zu um.|Good! Let it cook for a quarter of an hour, stirring now and then.
me|Ho capito. E la pasta va scolata al dente, vero?|Verstanden. Und die Nudeln müssen bissfest abgegossen werden, oder?|Got it. And the pasta has to be drained al dente, right?|E la pasta la scolo al dente?` }
});

/* Italiano B2 · 1–4 */
lesson("B2", { id: "it-b2-01", t: TB("Argomentare – Konnektoren mit Congiuntivo", "Argomentare – Connectors with the subjunctive"),
  goal: TB("Du kannst Argumente strukturieren, Einwände formulieren und Konjunktionen mit Congiuntivo benutzen.", "You can structure arguments, raise objections and use conjunctions that take the subjunctive."),
  words: `argomentare|argumentieren|to argue (a case)|v
la tesi|die These|the thesis|n
l'argomento|das Argument; das Thema|the argument; the topic|n
sostenere|behaupten; vertreten|to maintain; to support|v|Molti sostengono che il turismo rovini le città.|Viele behaupten, der Tourismus ruiniere die Städte.|Many claim that tourism ruins cities.
in primo luogo|erstens|firstly|ph
inoltre|außerdem|moreover|adv
d'altra parte|andererseits|on the other hand|ph
tuttavia|jedoch|however|adv
benché|obwohl|although|x
sebbene|obwohl|although|x
nonostante (che)|obwohl; trotz|even though; despite|x
affinché|damit|so that|x|Ve lo spiego affinché capiate.|Ich erkläre es euch, damit ihr es versteht.|I'm explaining it so that you understand.
a meno che non|es sei denn|unless|ph
purché|vorausgesetzt, dass|provided that|x
prima che|bevor|before|x
senza che|ohne dass|without|x
in conclusione|abschließend|in conclusion|ph
il turismo di massa|der Massentourismus|mass tourism|n
gli affitti brevi|die Kurzzeitvermietung|short-term rentals|n
il residente|der Einwohner|the resident|n
spopolarsi|sich entvölkern|to become depopulated|v
la soluzione|die Lösung|the solution|n
il compromesso|der Kompromiss|the compromise|n`,
  say: `Benché sia tardi, continuiamo a lavorare.|Obwohl es spät ist, arbeiten wir weiter.|Although it's late, we'll keep working.
Te lo dico affinché tu sia preparato.|Ich sage es dir, damit du vorbereitet bist.|I'm telling you so that you're prepared.
Vengo anch'io, purché non si faccia troppo tardi.|Ich komme auch, vorausgesetzt, es wird nicht zu spät.|I'll come too, provided it doesn't get too late.
Partiamo prima che inizi a piovere.|Fahren wir los, bevor es anfängt zu regnen.|Let's leave before it starts raining.
Non lo farò a meno che tu non mi aiuti.|Ich mache es nicht, es sei denn, du hilfst mir.|I won't do it unless you help me.
Da un lato … dall'altro …|Einerseits … andererseits …|On the one hand … on the other …
Non sono del tutto convinto.|Ich bin nicht ganz überzeugt.|I'm not completely convinced.`,
  gram: [
    ["h", TB("Konjunktionen + Congiuntivo", "Conjunctions + subjunctive")],
    ["table", { head: [TB("Bedeutung", "meaning"), TB("Konjunktion", "conjunction"), TB("Beispiel", "example")], rows: [
      [TB("obwohl", "although"), "benché, sebbene, nonostante", "Benché <b>sia</b> stanco, esco."], [TB("damit", "so that"), "affinché, perché", "Parlo piano affinché tu <b>capisca</b>."],
      [TB("vorausgesetzt", "provided that"), "purché, a condizione che", "Ti presto la macchina purché tu <b>stia</b> attento."], [TB("es sei denn", "unless"), "a meno che non", "Esco, a meno che non <b>piova</b>."],
      [TB("bevor", "before"), "prima che", "Torna prima che <b>faccia</b> buio."], [TB("ohne dass", "without"), "senza che", "È uscito senza che nessuno lo <b>vedesse</b>."]], say: 2 }],
    ["p", TB("In der Vergangenheit folgt der Congiuntivo imperfetto: <b>Benché fosse</b> stanco, è uscito.", "In the past the imperfect subjunctive follows: <b>Benché fosse</b> stanco, è uscito.")],
    ["tip", TB("Achtung: <b>anche se</b> (auch wenn) steht mit Indikativ: <i>Anche se è tardi, esco.</i> <b>Benché</b> verlangt den Congiuntivo: <i>Benché sia tardi …</i>", "Careful: <b>anche se</b> (even if) takes the indicative: <i>Anche se è tardi, esco.</i> <b>Benché</b> requires the subjunctive: <i>Benché sia tardi …</i>")]
  ],
  forms: { verbs: ["essere", "avere", "fare", "potere", "venire", "capire"], tenses: ["Congiuntivo presente", "Congiuntivo imperfetto"] },
  drill: [
    ["Benché ___ stanco, vado in palestra.", ["sia", "sono", "sarei"], 0],
    ["Anche se ___ freddo, usciamo.", ["fa", "faccia", "facesse"], 0, TB("anche se + Indikativ.", "anche se + indicative.")],
    ["Ti do il mio numero affinché tu mi ___ chiamare.", ["possa", "puoi", "potresti"], 0],
    ["Usciamo, a meno che non ___ .", ["piova", "piove", "pioverà"], 0],
    ["Te lo presto, purché me lo ___ domani. (restituire, tu)", "restituisca"],
    ["Sebbene ___ molto, non era ricco. (lavorare, lui)", "lavorasse"],
    ["Dobbiamo finire prima che ___ il capo. (arrivare)", "arrivi"]
  ],
  talk: { t: TB("Debatte: Tourismus in Venedig", "Debate: tourism in Venice"), scene: TB("In einer Diskussionsrunde vertritt Michele die Position, dass der Tourismus Venedig rettet. Du siehst es kritischer.", "In a discussion group, Michele argues that tourism saves Venice. You're more critical."), who: "Michele", slots: {}, lines: `a|Secondo me il turismo è una risorsa: senza turisti Venezia morirebbe.|Meiner Meinung nach ist der Tourismus eine Ressource: Ohne Touristen würde Venedig sterben.|In my view tourism is a resource: without tourists Venice would die.
me|Capisco, tuttavia il turismo di massa sta spopolando la città.|Ich verstehe, jedoch entvölkert der Massentourismus die Stadt.|I understand, however mass tourism is depopulating the city.|Sì, ma il turismo di massa sta svuotando la città.
a|In che senso? I veneziani guadagnano grazie ai turisti.|Inwiefern? Die Venezianer verdienen dank der Touristen.|In what sense? Venetians earn money thanks to the tourists.
me|Benché alcuni guadagnino, gli affitti sono troppo alti per i residenti.|Obwohl einige verdienen, sind die Mieten für die Einwohner zu hoch.|Although some earn money, rents are too high for residents.|Sebbene qualcuno guadagni, gli affitti sono troppo cari per chi ci vive.
a|E quale sarebbe la soluzione, secondo te?|Und was wäre deiner Meinung nach die Lösung?|And what would the solution be, in your view?
me|Bisognerebbe limitare gli affitti brevi affinché i giovani possano restare.|Man müsste die Kurzzeitvermietung begrenzen, damit die jungen Leute bleiben können.|Short-term rentals should be limited so that young people can stay.|Limiterei gli affitti brevi perché i giovani possano restare.
a|Va bene, purché non si danneggi l'economia.|Einverstanden, vorausgesetzt, man schadet der Wirtschaft nicht.|All right, provided the economy isn't harmed.
me|Certo, ci vuole un compromesso. In conclusione, servono regole chiare.|Natürlich, es braucht einen Kompromiss. Abschließend: Es braucht klare Regeln.|Of course, a compromise is needed. To conclude, we need clear rules.|Ci vuole un compromesso, ma servono regole chiare.` }
});

lesson("B2", { id: "it-b2-02", t: TB("Se l'avessi saputo… – Irreale Vergangenheit", "Se l'avessi saputo… – Unreal past conditions"),
  goal: TB("Du kannst über verpasste Chancen und Bedauern sprechen: Congiuntivo trapassato + Condizionale passato.", "You can talk about missed chances and regrets: pluperfect subjunctive + past conditional."),
  words: `il rimpianto|das Bedauern (über Verpasstes)|the regret|n
il rimorso|die Reue|remorse|n
pentirsi di|bereuen|to regret; to repent|v|Non mi pento di niente.|Ich bereue nichts.|I don't regret anything.
l'occasione|die Gelegenheit; die Chance|the opportunity|n
perdere un'occasione|eine Chance verpassen|to miss an opportunity|v
cogliere l'occasione|die Gelegenheit ergreifen|to seize the opportunity|v
col senno di poi|im Nachhinein|with hindsight|ph
se solo|wenn nur|if only|ph
magari|hätte ich doch …|if only|adv|Magari l'avessi saputo prima!|Hätte ich das nur früher gewusst!|If only I'd known earlier!
ormai|inzwischen; jetzt (zu spät)|by now; at this point|adv
il destino|das Schicksal|fate|n
il caso|der Zufall|chance|n
per caso|zufällig|by chance|ph
la svolta|die Wende|the turning point|n
decidere diversamente|anders entscheiden|to decide differently|v
la borsa di studio|das Stipendium|the scholarship|n
l'Erasmus|das Erasmus-Semester|the Erasmus exchange|n
rifare|nochmal machen|to redo|v
cambiare strada|einen anderen Weg einschlagen|to change direction|v`,
  say: `Se l'avessi saputo, sarei venuto prima.|Hätte ich das gewusst, wäre ich früher gekommen.|If I'd known, I would have come earlier.
Se fossimo partiti prima, non avremmo perso il treno.|Wären wir früher losgefahren, hätten wir den Zug nicht verpasst.|If we had left earlier, we wouldn't have missed the train.
Avrei dovuto ascoltarti.|Ich hätte auf dich hören sollen.|I should have listened to you.
Al tuo posto avrei accettato.|An deiner Stelle hätte ich angenommen.|In your place I would have accepted.
Se avessi studiato medicina, oggi sarei medico.|Hätte ich Medizin studiert, wäre ich heute Arzt.|If I had studied medicine, I would be a doctor today.
Col senno di poi è facile parlare.|Hinterher ist man immer schlauer.|Hindsight is twenty-twenty.
Non me ne pento.|Ich bereue es nicht.|I don't regret it.`,
  gram: [
    ["h", TB("Irreale Bedingung in der Vergangenheit", "Unreal condition in the past")],
    ["p", TB("<b>se + congiuntivo trapassato</b> (avessi/fossi + Partizip) → <b>condizionale passato</b> (avrei/sarei + Partizip).", "<b>se + pluperfect subjunctive</b> (avessi/fossi + participle) → <b>past conditional</b> (avrei/sarei + participle).")],
    ["ex", [["Se avessi studiato, avrei passato l'esame.", "Hätte ich gelernt, hätte ich die Prüfung bestanden.", "If I had studied, I would have passed the exam."], ["Se fosse venuta, si sarebbe divertita.", "Wäre sie gekommen, hätte sie Spaß gehabt.", "If she had come, she would have had fun."]]],
    ["h", TB("Gemischte Formen", "Mixed forms")],
    ["p", TB("Vergangene Bedingung, Folge heute: <b>Se avessi accettato</b> quel lavoro, <b>adesso vivrei</b> a Londra. Bedingung heute, Folge vergangen: <b>Se fossi</b> più coraggioso, <b>avrei detto</b> di sì.", "Past condition, present result: <b>Se avessi accettato</b> quel lavoro, <b>adesso vivrei</b> a Londra. Present condition, past result: <b>Se fossi</b> più coraggioso, <b>avrei detto</b> di sì.")],
    ["tip", TB("Im gesprochenen Italienisch hört man auch das Imperfetto für beides: <i>Se lo sapevo, venivo.</i> – umgangssprachlich, nicht für Prüfungen!", "In spoken Italian you'll also hear the imperfetto in both parts: <i>Se lo sapevo, venivo.</i> – colloquial, not for exams!")]
  ],
  drill: [
    ["Se ___ saputo, ti avrei aiutato.", ["l'avessi", "l'avrei", "l'avevo"], 0],
    ["Se fossimo usciti prima, ___ il concerto.", ["avremmo visto", "avessimo visto", "vedremmo"], 0],
    ["Se Paolo fosse venuto, si ___ divertito.", ["sarebbe", "avrebbe", "fosse"], 0],
    ["Se avessi accettato quel lavoro, adesso ___ a Londra.", ["vivrei", "avrei vissuto", "vivessi"], 0],
    ["Avrei ___ ascoltarti. (dovere)", "dovuto"],
    ["Se lei ___ prima, avrebbe preso il treno. (partire)", "fosse partita"],
    ["Se tu me l'___ chiesto, te l'avrei detto.", ["avessi", "avresti", "avevi"], 0]
  ],
  talk: { t: TB("Was wäre gewesen, wenn …", "What would have happened if…"), scene: TB("Beim Klassentreffen sprichst du mit deiner alten Studienfreundin Irene über eure Entscheidungen.", "At a reunion you talk with your old university friend Irene about the choices you made."), who: "Irene", slots: {}, lines: `a|Ti ricordi? Ti avevano offerto un posto a Londra dopo la laurea.|Weißt du noch? Man hatte dir nach dem Abschluss eine Stelle in London angeboten.|Do you remember? You were offered a job in London after graduating.
me|Sì! Se avessi accettato, adesso vivrei in Inghilterra.|Ja! Hätte ich angenommen, würde ich jetzt in England leben.|Yes! If I'd accepted, I'd be living in England now.|Certo! Se avessi detto di sì, ora vivrei a Londra.
a|E te ne penti?|Und bereust du es?|And do you regret it?
me|Un po'. Col senno di poi, avrei dovuto provarci.|Ein bisschen. Im Nachhinein hätte ich es versuchen sollen.|A little. With hindsight, I should have given it a try.|Un po', forse avrei dovuto provarci.
a|Io invece non ho fatto l'Erasmus e me ne pento ancora.|Ich dagegen habe kein Erasmus gemacht und bereue es immer noch.|I, on the other hand, didn't do Erasmus and I still regret it.
me|Perché non l'hai fatto?|Warum hast du es nicht gemacht?|Why didn't you do it?|Come mai non sei partita?
a|Avevo paura. Se fossi partita, forse avrei imparato bene lo spagnolo.|Ich hatte Angst. Wäre ich gegangen, hätte ich vielleicht gut Spanisch gelernt.|I was scared. If I'd gone, I might have learnt Spanish properly.
me|Non è mai troppo tardi! Potresti fare un corso a Valencia quest'estate.|Es ist nie zu spät! Du könntest diesen Sommer einen Kurs in Valencia machen.|It's never too late! You could do a course in Valencia this summer.|Non è troppo tardi, puoi ancora imparare lo spagnolo!` }
});

lesson("B2", { id: "it-b2-03", t: TB("Ha detto che… – Indirekte Rede", "Ha detto che… – Reported speech"),
  goal: TB("Du kannst wiedergeben, was andere gesagt haben, mit der richtigen Zeitenfolge.", "You can report what others said, using the correct sequence of tenses."),
  words: `riferire|weitergeben; berichten|to report; to pass on|v
affermare|behaupten; erklären|to state|v
dichiarare|erklären (offiziell)|to declare|v
spiegare|erklären|to explain|v
raccontare|erzählen|to tell|v
chiedere|fragen|to ask|v|Mi ha chiesto se volevo venire.|Er hat mich gefragt, ob ich mitkommen wollte.|He asked me if I wanted to come.
rispondere|antworten|to reply|v
aggiungere|hinzufügen|to add|v
ammettere|zugeben|to admit|v
promettere|versprechen|to promise|v
lamentarsi|sich beschweren|to complain|v
il giorno prima|am Tag davor|the day before|ph
il giorno dopo|am Tag danach|the next day|ph
quel giorno|an jenem Tag|that day|ph
lì|dort|there|adv
allora|damals; dann|then; at that time|adv
la voce|das Gerücht; die Stimme|the rumour; the voice|n
il pettegolezzo|der Klatsch|the gossip|n
a quanto pare|anscheinend|apparently|ph
pare che|es scheint, dass|it seems that|ph|Pare che si sposino a giugno.|Anscheinend heiraten sie im Juni.|It seems they're getting married in June.`,
  say: `Mi ha detto che era stanco.|Er hat mir gesagt, dass er müde sei.|He told me he was tired.
Ha detto che sarebbe venuta il giorno dopo.|Sie sagte, sie würde am nächsten Tag kommen.|She said she would come the next day.
Mi ha chiesto dove abitassi.|Er hat mich gefragt, wo ich wohne.|He asked me where I lived.
Ci ha detto di aspettare lì.|Er hat uns gesagt, wir sollen dort warten.|He told us to wait there.
Ha ammesso di aver sbagliato.|Er hat zugegeben, dass er einen Fehler gemacht hat.|He admitted he'd made a mistake.
A quanto pare, l'ufficio chiude.|Anscheinend schließt das Büro.|Apparently the office is closing.
Non ci crederai, ma…|Du wirst es nicht glauben, aber …|You won't believe it, but…`,
  gram: [
    ["h", TB("Zeitenfolge in der indirekten Rede", "Sequence of tenses in reported speech")],
    ["table", { head: [TB("direkt", "direct"), TB("indirekt (ha detto che …)", "reported (ha detto che …)")], rows: [
      ["«Sono stanco.» (presente)", "… era stanco. (imperfetto)"], ["«Ho finito.» (passato prossimo)", "… aveva finito. (trapassato)"], ["«Verrò domani.» (futuro)", "… sarebbe venuto il giorno dopo. (condizionale passato)"], ["«Vieni!» (imperativo)", "… mi ha detto di venire. (di + infinito)"]] }],
    ["p", TB("Steht das einleitende Verb im Präsens (<i>dice che</i>), bleibt die Zeit gleich: Dice che <b>è</b> stanco. Auch Orts- und Zeitangaben ändern sich: oggi → <b>quel giorno</b>, domani → <b>il giorno dopo</b>, qui → <b>lì</b>.", "If the reporting verb is in the present (<i>dice che</i>), the tense stays the same: Dice che <b>è</b> stanco. Time and place words change too: oggi → <b>quel giorno</b>, domani → <b>il giorno dopo</b>, qui → <b>lì</b>.")],
    ["tip", TB("Die Zukunft in der Vergangenheit ist im Italienischen das <b>condizionale passato</b>: Ha detto che <b>sarebbe arrivato</b> alle otto (nicht: arriverebbe).", "The future-in-the-past in Italian is the <b>past conditional</b>: Ha detto che <b>sarebbe arrivato</b> alle otto (not: arriverebbe).")]
  ],
  drill: [
    ["«Sono stanca.» → Ha detto che ___ stanca.", ["era", "è stata", "sia"], 0],
    ["«Ho perso il treno.» → Ha detto che ___ il treno.", ["aveva perso", "ha perso", "perdeva"], 0],
    ["«Ti chiamerò.» → Ha detto che mi ___ .", ["avrebbe chiamato", "chiamerebbe", "chiamerà stato"], 0],
    ["«Aspettate qui!» → Ci ha detto ___ lì.", ["di aspettare", "che aspettiamo", "aspettate"], 0],
    ["«Dove abiti?» → Mi ha chiesto dove ___ .", ["abitassi", "abito", "abiterò"], 0],
    ["«Domani parto.» → Ha detto che partiva ___ .", ["il giorno dopo", "domani", "ieri"], 0],
    ["Ha ammesso di ___ sbagliato.", ["aver", "essere", "avesse"], 0]
  ],
  talk: { t: TB("Klatsch im Büro", "Office gossip"), scene: TB("Deine Kollegin Beatrice erzählt dir, was der Chef heute Morgen in der Besprechung gesagt hat. Du warst nicht dabei.", "Your colleague Beatrice tells you what the boss said in this morning's meeting. You weren't there."), who: "Beatrice", slots: {}, lines: `a|Non ci crederai: in riunione il capo ha detto che l'azienda aprirà una sede a Milano.|Du wirst es nicht glauben: In der Besprechung hat der Chef gesagt, dass die Firma eine Niederlassung in Mailand eröffnet.|You won't believe it: in the meeting the boss said the company is opening an office in Milan.
me|Davvero? E ha detto chi andrà a lavorarci?|Wirklich? Und hat er gesagt, wer dort arbeiten wird?|Really? And did he say who's going to work there?|Sul serio? Ha detto chi ci andrà?
a|Ha detto che avrebbe scelto tre persone entro la fine del mese.|Er hat gesagt, er würde bis Ende des Monats drei Leute auswählen.|He said he would choose three people by the end of the month.
me|E ha chiesto se qualcuno era interessato?|Und hat er gefragt, ob jemand interessiert sei?|And did he ask if anyone was interested?|Ha chiesto chi fosse interessato?
a|Sì, ci ha detto di mandargli un'email entro venerdì.|Ja, er hat uns gesagt, wir sollen ihm bis Freitag eine E-Mail schicken.|Yes, he told us to send him an email by Friday.
me|Interessante! Gli scrivo oggi stesso.|Interessant! Ich schreibe ihm noch heute.|Interesting! I'll write to him today.|Allora gli scrivo subito.
a|Aspetta, ha aggiunto anche che lo stipendio sarebbe stato più alto.|Warte, er hat auch hinzugefügt, dass das Gehalt höher wäre.|Wait, he also added that the salary would be higher.
me|Ancora meglio! Grazie di avermelo detto.|Noch besser! Danke, dass du es mir gesagt hast.|Even better! Thanks for telling me.|Grazie per avermelo detto!` }
});

lesson("B2", { id: "it-b2-04", t: TB("Lavoro ed economia – Formelle Kommunikation", "Lavoro ed economia – Formal communication"),
  goal: TB("Du kannst formelle E-Mails schreiben, Verhandlungen führen und Fachwortschatz aus Wirtschaft und Beruf benutzen.", "You can write formal emails, negotiate and use business vocabulary."),
  words: `il fatturato|der Umsatz|turnover; revenue|n|Il fatturato è cresciuto del dieci per cento.|Der Umsatz ist um zehn Prozent gewachsen.|Turnover has grown by ten per cent.
l'utile|der Gewinn|the profit|n
la perdita|der Verlust|the loss|n
il bilancio|die Bilanz|the balance sheet; the budget|n
l'investimento|die Investition|the investment|n
il preventivo|der Kostenvoranschlag; das Angebot|the quote; the estimate|n
la fattura|die Rechnung (Firma)|the invoice|n
il fornitore|der Lieferant|the supplier|n
la trattativa|die Verhandlung|the negotiation|n
le condizioni di pagamento|die Zahlungsbedingungen|payment terms|n
la consegna|die Lieferung|the delivery|n
il termine di consegna|die Lieferfrist|the delivery deadline|n
la scadenza|die Frist; die Fälligkeit|the deadline; the due date|n
in allegato|im Anhang|attached|ph|In allegato trova il preventivo.|Im Anhang finden Sie das Angebot.|Please find the quote attached.
gentile dottore / gentile dottoressa|sehr geehrter Herr / sehr geehrte Frau (Anrede)|Dear Sir / Dear Madam|ph
cordiali saluti|mit freundlichen Grüßen|kind regards|ph
in attesa di un Suo riscontro|in Erwartung Ihrer Rückmeldung|looking forward to your reply|ph
con riferimento a|bezugnehmend auf|with reference to|ph
venire incontro|entgegenkommen|to meet halfway|v
lo sconto|der Rabatt|the discount|n
la proposta|der Vorschlag; das Angebot|the proposal|n`,
  say: `Le scrivo con riferimento alla Sua offerta del 3 marzo.|Ich schreibe Ihnen bezugnehmend auf Ihr Angebot vom 3. März.|I'm writing with reference to your offer of 3 March.
In allegato Le invio il contratto firmato.|Anbei sende ich Ihnen den unterschriebenen Vertrag.|Please find the signed contract attached.
Saremmo disposti a concedere uno sconto del cinque per cento.|Wir wären bereit, einen Rabatt von fünf Prozent zu gewähren.|We would be willing to grant a five per cent discount.
Potreste venirci incontro sui termini di consegna?|Könnten Sie uns bei der Lieferfrist entgegenkommen?|Could you meet us halfway on the delivery deadline?
Restiamo in attesa di un Suo cortese riscontro.|Wir freuen uns auf Ihre Rückmeldung.|We look forward to your reply.
Mi permetto di ricordarLe la scadenza del 30.|Ich erlaube mir, Sie an die Frist zum 30. zu erinnern.|May I remind you of the deadline on the 30th.
Cordiali saluti.|Mit freundlichen Grüßen.|Kind regards.`,
  gram: [
    ["h", TB("Formelles Register", "Formal register")],
    ["p", TB("In Geschäftsbriefen schreibt man die Höflichkeitsform oft groß: <b>Lei, Le, La, Suo</b> – auch angehängt: inviar<b>Le</b>, ringraziar<b>La</b>.", "In business letters the formal pronouns are often capitalised: <b>Lei, Le, La, Suo</b> – also when attached: inviar<b>Le</b>, ringraziar<b>La</b>.")],
    ["table", { head: [TB("neutral", "neutral"), TB("formell", "formal")], rows: [["Ti mando …", "Le invio …"], ["Puoi …?", "Potrebbe cortesemente …?"], ["Scusa per il ritardo.", "Ci scusiamo per il ritardo."], ["Ti rispondo presto.", "Le farò sapere al più presto."], ["Grazie.", "La ringrazio per la cortese attenzione."]], say: 1 }],
    ["h", TB("Condizionale für Höflichkeit und Verhandlung", "Conditional for politeness and negotiation")],
    ["p", TB("Verhandlungen werden im Condizionale geführt, das wirkt weicher: <b>Saremmo</b> interessati … <b>Potremmo</b> proporre … <b>Sarebbe</b> possibile …?", "Negotiations are conducted in the conditional, which sounds softer: <b>Saremmo</b> interessati … <b>Potremmo</b> proporre … <b>Sarebbe</b> possibile …?")],
    ["tip", TB("Titel sind in Italien wichtig: <b>Dottore/Dottoressa</b> für alle mit Hochschulabschluss, <b>Ingegnere</b>, <b>Avvocato</b>. Anrede: <i>Gentile Dottoressa Bianchi,</i>", "Titles matter in Italy: <b>Dottore/Dottoressa</b> for anyone with a degree, <b>Ingegnere</b>, <b>Avvocato</b>. Salutation: <i>Gentile Dottoressa Bianchi,</i>")]
  ],
  drill: [
    ["In allegato ___ invio la fattura, Dottoressa.", ["Le", "La", "Lei"], 0],
    ["___ possibile anticipare la consegna?", ["Sarebbe", "Sarà stato", "Fosse"], 0],
    ["Saremmo ___ a concedere uno sconto.", ["disposti", "disposto", "disporre"], 0],
    ["Con riferimento ___ Sua email del 5 maggio …", ["alla", "della", "nella"], 0],
    ["Il fatturato è aumentato ___ otto per cento.", ["dell'", "di", "al"], 0],
    ["Restiamo in attesa di un Suo ___ .", ["riscontro", "sconto", "fornitore"], 0],
    ["La ___ per la cortese attenzione. (ringraziare, io)", "ringrazio"]
  ],
  talk: { t: TB("Preisverhandlung", "Price negotiation"), scene: TB("Videocall mit dem Lieferanten Ingegner Fontana. Du willst bessere Konditionen für eine große Bestellung.", "Video call with the supplier, Mr Fontana. You want better terms for a large order."), who: "Ing. Fontana", slots: {}, lines: `a|Buongiorno! Ha ricevuto il nostro preventivo?|Guten Tag! Haben Sie unser Angebot erhalten?|Good morning! Did you receive our quote?
me|Buongiorno, ingegnere. Sì, l'abbiamo ricevuto, grazie. Siamo molto interessati.|Guten Tag, Herr Fontana. Ja, wir haben es erhalten, danke. Wir sind sehr interessiert.|Good morning, Mr Fontana. Yes, we received it, thank you. We're very interested.|Sì, grazie, l'abbiamo ricevuto e siamo interessati.
a|Ottimo. Ci sono domande?|Sehr gut. Gibt es Fragen?|Excellent. Any questions?
me|Sì. Visto il volume dell'ordine, sarebbe possibile avere uno sconto?|Ja. Angesichts der Bestellmenge, wäre ein Rabatt möglich?|Yes. Given the size of the order, would a discount be possible?|Considerato il volume, potreste farci uno sconto?
a|Potremmo concedere un tre per cento.|Wir könnten drei Prozent gewähren.|We could grant three per cent.
me|Speravamo in qualcosa di più. Che ne dice del sette per cento?|Wir hatten auf etwas mehr gehofft. Was halten Sie von sieben Prozent?|We were hoping for a bit more. What about seven per cent?|Pensavamo a un sette per cento.
a|Il sette è troppo. Possiamo arrivare al cinque, con pagamento a trenta giorni.|Sieben ist zu viel. Wir können auf fünf gehen, bei Zahlung innerhalb von dreißig Tagen.|Seven is too much. We can go to five, with payment within thirty days.
me|Va bene, il cinque per cento ci sta bene. E i termini di consegna?|In Ordnung, fünf Prozent passen uns. Und die Lieferfristen?|All right, five per cent works for us. And the delivery times?|D'accordo per il cinque. E la consegna?
a|La consegna avverrebbe entro sei settimane dall'ordine.|Die Lieferung würde innerhalb von sechs Wochen nach Bestellung erfolgen.|Delivery would take place within six weeks of the order.
me|Perfetto. Le invio la conferma d'ordine per email entro domani.|Perfekt. Ich schicke Ihnen die Auftragsbestätigung bis morgen per E-Mail.|Perfect. I'll send you the order confirmation by email by tomorrow.|Benissimo, Le mando la conferma entro domani.` }
});

/* Italiano B2 · 5–8 */
lesson("B2", { id: "it-b2-05", t: TB("Società – Gesellschaft und Passiv mit <i>andare</i>", "Società – Society and the passive with <i>andare</i>"),
  goal: TB("Du kannst über gesellschaftliche Themen sprechen und Pflichten mit andare + Partizip ausdrücken.", "You can talk about social issues and express obligation with andare + participle."),
  words: `la società|die Gesellschaft|society|n
la disoccupazione|die Arbeitslosigkeit|unemployment|n
la disuguaglianza|die Ungleichheit|inequality|n
la povertà|die Armut|poverty|n
il welfare|der Sozialstaat|the welfare state|n
la pensione|die Rente|the pension|n
l'invecchiamento della popolazione|die Alterung der Bevölkerung|population ageing|n
la natalità|die Geburtenrate|the birth rate|n
la fuga dei cervelli|die Abwanderung von Fachkräften|the brain drain|n|La fuga dei cervelli è un grave problema in Italia.|Die Abwanderung von Fachkräften ist in Italien ein ernstes Problem.|The brain drain is a serious problem in Italy.
l'immigrazione|die Einwanderung|immigration|n
l'integrazione|die Integration|integration|n
i diritti|die Rechte|rights|n
la parità di genere|die Gleichstellung der Geschlechter|gender equality|n
il precariato|prekäre Beschäftigung|job insecurity|n
il cittadino|der Bürger|the citizen|n
il voto|die Stimme (Wahl); die Note|the vote; the mark|n
la riforma|die Reform|the reform|n
affrontare|angehen; bewältigen|to tackle|v|Il problema va affrontato subito.|Das Problem muss sofort angegangen werden.|The problem must be tackled immediately.
garantire|garantieren|to guarantee|v
il divario|die Kluft|the gap|n
il Nord e il Sud|Nord- und Süditalien|the North and the South|n`,
  say: `Questo problema va risolto a livello europeo.|Dieses Problem muss auf europäischer Ebene gelöst werden.|This problem must be solved at a European level.
I diritti vanno rispettati.|Die Rechte müssen respektiert werden.|Rights must be respected.
Molti giovani laureati vanno all'estero.|Viele junge Hochschulabsolventen gehen ins Ausland.|Many young graduates go abroad.
Il divario tra Nord e Sud è ancora grande.|Die Kluft zwischen Nord und Süd ist immer noch groß.|The gap between North and South is still large.
È una questione molto delicata.|Das ist ein sehr heikles Thema.|It's a very sensitive issue.
Da un lato capisco, dall'altro non sono d'accordo.|Einerseits verstehe ich das, andererseits bin ich nicht einverstanden.|On the one hand I understand, on the other I disagree.
Dipende dai punti di vista.|Das hängt vom Standpunkt ab.|It depends on your point of view.`,
  gram: [
    ["h", TB("andare + Partizip = muss … werden", "andare + participle = must be …")],
    ["ex", [["La legge va cambiata.", "Das Gesetz muss geändert werden.", "The law must be changed."], ["Questi documenti vanno firmati entro lunedì.", "Diese Unterlagen müssen bis Montag unterschrieben werden.", "These documents must be signed by Monday."], ["Il vino rosso va servito a temperatura ambiente.", "Rotwein wird bei Zimmertemperatur serviert.", "Red wine should be served at room temperature."]]],
    ["p", TB("Nur in einfachen Zeiten (va, andava, andrà, andrebbe). Das Partizip passt sich an.", "Only in simple tenses (va, andava, andrà, andrebbe). The participle agrees.")],
    ["h", TB("Drei Passivformen im Vergleich", "Three passive forms compared")],
    ["table", { head: [TB("Form", "form"), TB("Bedeutung", "meaning"), TB("Beispiel", "example")], rows: [
      ["essere + p.p.", TB("Zustand / Handlung", "state / action"), "La legge è approvata."], ["venire + p.p.", TB("Vorgang", "process"), "La legge viene approvata."], ["andare + p.p.", TB("Notwendigkeit", "necessity"), "La legge va approvata."]], say: 2 }],
    ["tip", TB("Mit Verben des Verlierens hat <b>andare</b> + Partizip eine andere Bedeutung: <i>I documenti sono andati persi.</i> = Die Unterlagen sind verloren gegangen.", "With verbs of losing, <b>andare</b> + participle means something else: <i>I documenti sono andati persi.</i> = The documents got lost.")]
  ],
  drill: [
    ["Il problema ___ affrontato subito.", ["va", "viene stato", "andrà stato"], 0],
    ["Le regole ___ rispettate da tutti.", ["vanno", "va", "vengono state"], 0],
    ["La domanda va ___ entro il 31 marzo.", ["presentata", "presentato", "presentare"], 0],
    ["Questi problemi non ___ ignorati.", ["vanno", "vadano", "andare"], 0],
    ["Purtroppo le valigie sono ___ perse.", ["andate", "venute", "state andate"], 0],
    ["La fuga dei ___ preoccupa il governo.", ["cervelli", "cittadini", "diritti"], 0],
    ["I nuovi dati ___ pubblicati ogni anno. (venire, presente)", "vengono"]
  ],
  talk: { t: TB("Junge Italiener im Ausland", "Young Italians abroad"), scene: TB("Du sprichst mit Daniele, einem jungen Ingenieur aus Bari, der in München arbeitet.", "You talk to Daniele, a young engineer from Bari who works in Munich."), who: "Daniele", slots: {}, lines: `a|Sai, molti dei miei amici di università sono andati all'estero come me.|Weißt du, viele meiner Studienfreunde sind wie ich ins Ausland gegangen.|You know, many of my university friends went abroad like me.
me|Perché? In Italia non c'era lavoro per voi?|Warum? Gab es in Italien keine Arbeit für euch?|Why? Was there no work for you in Italy?|Come mai? Non trovavate lavoro in Italia?
a|C'era, ma spesso precario e pagato poco. Qui ho un contratto a tempo indeterminato.|Schon, aber oft prekär und schlecht bezahlt. Hier habe ich einen unbefristeten Vertrag.|There was, but it was often insecure and badly paid. Here I have a permanent contract.
me|Capisco. È la famosa fuga dei cervelli.|Verstehe. Das ist die berühmte Abwanderung der Fachkräfte.|I see. It's the famous brain drain.|Ah, la fuga dei cervelli.
a|Esatto. Secondo me il problema va affrontato con riforme serie.|Genau. Meiner Meinung nach muss das Problem mit ernsthaften Reformen angegangen werden.|Exactly. In my view the problem has to be tackled with serious reforms.
me|Sono d'accordo. Gli stipendi dei giovani andrebbero aumentati.|Einverstanden. Die Gehälter junger Leute müssten erhöht werden.|I agree. Young people's salaries ought to be raised.|Hai ragione, bisognerebbe aumentare gli stipendi dei giovani.
a|E anche la burocrazia va semplificata!|Und auch die Bürokratie muss vereinfacht werden!|And the bureaucracy must be simplified too!
me|Pensi di tornare un giorno?|Denkst du, dass du eines Tages zurückkehrst?|Do you think you'll go back one day?|Tornerai in Italia un giorno?
a|Spero di sì, magari tra qualche anno, se le cose cambiano.|Ich hoffe es, vielleicht in ein paar Jahren, wenn sich die Dinge ändern.|I hope so, maybe in a few years, if things change.` }
});

lesson("B2", { id: "it-b2-06", t: TB("Modi di dire – Redewendungen", "Modi di dire – Idioms"),
  goal: TB("Du kennst die wichtigsten italienischen Redewendungen und kannst sie im Gespräch benutzen.", "You know the most important Italian idioms and can use them in conversation."),
  words: `in bocca al lupo!|viel Glück! (Antwort: crepi!)|good luck! (reply: crepi!)|ph|In bocca al lupo per l'esame! – Crepi!|Viel Glück bei der Prüfung! – Danke!|Good luck in the exam! – Thanks!
avere le mani bucate|das Geld zum Fenster rauswerfen|to be a spendthrift|ph
costare un occhio della testa|ein Vermögen kosten|to cost an arm and a leg|ph|Quella macchina costa un occhio della testa.|Das Auto kostet ein Vermögen.|That car costs an arm and a leg.
non vedere l'ora|es kaum erwarten können|to look forward to; can't wait|ph|Non vedo l'ora di andare in vacanza!|Ich kann den Urlaub kaum erwarten!|I can't wait to go on holiday!
essere al verde|pleite sein|to be broke|ph
prendere in giro|auf den Arm nehmen|to tease; to pull someone's leg|ph
fare una figuraccia|sich blamieren|to make a fool of oneself|ph
avere un diavolo per capello|fuchsteufelswild sein|to be furious|ph
essere in gamba|tüchtig sein; was draufhaben|to be capable; smart|ph|Tua sorella è proprio in gamba.|Deine Schwester hat echt was drauf.|Your sister is really capable.
acqua in bocca!|Mund halten! (nichts verraten)|keep it to yourself!|ph
tutto fumo e niente arrosto|viel Lärm um nichts|all talk and no action|ph
chi dorme non piglia pesci|wer schläft, fängt keine Fische|the early bird catches the worm|ph
stare con le mani in mano|Däumchen drehen|to sit around doing nothing|ph
fare il ponte|einen Brückentag nehmen|to take a long weekend|ph
avere la testa fra le nuvole|mit dem Kopf in den Wolken sein|to have one's head in the clouds|ph
piove sul bagnato|ein Unglück kommt selten allein|it never rains but it pours|ph
non avere peli sulla lingua|kein Blatt vor den Mund nehmen|not to mince one's words|ph
rompere il ghiaccio|das Eis brechen|to break the ice|ph
essere come il prezzemolo|überall dabei sein|to turn up everywhere|ph
meglio tardi che mai|besser spät als nie|better late than never|ph`,
  say: `Non vedo l'ora di vederti!|Ich kann es kaum erwarten, dich zu sehen!|I can't wait to see you!
Ma mi prendi in giro?|Willst du mich auf den Arm nehmen?|Are you pulling my leg?
Ieri ho fatto una figuraccia davanti al capo.|Gestern habe ich mich vor dem Chef blamiert.|Yesterday I made a fool of myself in front of the boss.
Questo mese sono al verde.|Diesen Monat bin ich pleite.|I'm broke this month.
Acqua in bocca, mi raccomando!|Kein Wort darüber, bitte!|Not a word to anyone, please!
Giovedì è festa, faccio il ponte.|Donnerstag ist Feiertag, ich nehme den Brückentag.|Thursday's a holiday, I'm taking the Friday off.
Meglio tardi che mai!|Besser spät als nie!|Better late than never!`,
  gram: [
    ["h", TB("Redewendungen richtig benutzen", "Using idioms correctly")],
    ["p", TB("Viele Wendungen funktionieren wie Verben und werden normal konjugiert: <b>Non vedo</b> l'ora / <b>Non vediamo</b> l'ora. <b>Ho fatto</b> una figuraccia / <b>Hai fatto</b> una figuraccia.", "Many idioms work like verbs and are conjugated normally: <b>Non vedo</b> l'ora / <b>Non vediamo</b> l'ora. <b>Ho fatto</b> una figuraccia / <b>Hai fatto</b> una figuraccia.")],
    ["ex", [["Non vedo l'ora di + Infinitiv", "es kaum erwarten können, zu …", "can't wait to …"], ["Non vedo l'ora che + Congiuntivo", "es kaum erwarten können, dass …", "can't wait for …"], ["Non vedo l'ora che arrivi l'estate.", "Ich kann den Sommer kaum erwarten.", "I can't wait for summer to come."]]],
    ["tip", TB("Auf <b>In bocca al lupo!</b> antwortet man <b>Crepi!</b> (oder <i>Crepi il lupo!</i>) – nie „grazie“. Das bringt Unglück.", "To <b>In bocca al lupo!</b> you answer <b>Crepi!</b> (or <i>Crepi il lupo!</i>) – never \"grazie\". That brings bad luck.")]
  ],
  drill: [
    ["In bocca al lupo! – ___ !", ["Crepi", "Grazie", "Anche a te"], 0],
    ["Questa borsa costa un occhio della ___ .", ["testa", "faccia", "mano"], 0],
    ["Non vedo l'ora ___ partire!", ["di", "che", "a"], 0],
    ["Non vedo l'ora che ___ venerdì.", ["sia", "è", "sarà"], 0],
    ["Ho speso tutto, sono al ___ .", ["verde", "rosso", "nero"], 0],
    ["Quando ho chiamato il capo «mamma», ho fatto una ___ .", ["figuraccia", "brutta", "pessima"], 0],
    ["Marta è molto brava, è proprio in ___ .", ["gamba", "testa", "piedi"], 0]
  ],
  talk: { t: TB("Ein peinlicher Moment", "An embarrassing moment"), scene: TB("Deine Freundin Silvia erzählt dir von ihrem ersten Arbeitstag. Benutze ein paar Redewendungen!", "Your friend Silvia tells you about her first day at work. Use some idioms!"), who: "Silvia", slots: {}, lines: `a|Oggi era il mio primo giorno di lavoro e ho fatto una figuraccia!|Heute war mein erster Arbeitstag und ich habe mich total blamiert!|Today was my first day at work and I made a complete fool of myself!
me|Dai, racconta! Cosa è successo?|Los, erzähl! Was ist passiert?|Go on, tell me! What happened?|Racconta! Che è successo?
a|Ho rovesciato il caffè sulla camicia del direttore.|Ich habe den Kaffee über das Hemd des Direktors geschüttet.|I spilt coffee on the director's shirt.
me|No! Mi prendi in giro? E lui come ha reagito?|Nein! Nimmst du mich auf den Arm? Und wie hat er reagiert?|No! Are you pulling my leg? And how did he react?|Ma dai! E lui cosa ha detto?
a|Per fortuna ha riso. Ha detto che almeno avevo rotto il ghiaccio!|Zum Glück hat er gelacht. Er sagte, ich hätte wenigstens das Eis gebrochen!|Luckily he laughed. He said at least I'd broken the ice!
me|Ahah, è stato in gamba! Meglio così.|Haha, er hat das souverän genommen! Umso besser.|Haha, he handled it well! All the better.|Meno male che ha riso!
a|Comunque acqua in bocca, eh! Non lo dire a nessuno.|Aber kein Wort, ja! Erzähl es niemandem.|Anyway, keep it to yourself, OK! Don't tell anyone.
me|Tranquilla, non ho peli sulla lingua ma so mantenere un segreto!|Keine Sorge, ich nehme kein Blatt vor den Mund, aber ich kann ein Geheimnis bewahren!|Don't worry, I speak my mind but I can keep a secret!|Tranquilla, acqua in bocca!
a|E domani ho la prima riunione importante…|Und morgen habe ich das erste wichtige Meeting …|And tomorrow I have my first important meeting…
me|In bocca al lupo, allora!|Dann viel Glück!|Good luck, then!|In bocca al lupo!` }
});

lesson("B2", { id: "it-b2-07", t: TB("Arte e letteratura – Das Passato remoto", "Arte e letteratura – The passato remoto"),
  goal: TB("Du kannst über Kunst, Bücher und Filme sprechen und das Passato remoto in Texten erkennen.", "You can talk about art, books and films and recognise the passato remoto in texts."),
  words: `il romanzo|der Roman|the novel|n
lo scrittore / la scrittrice|der Schriftsteller / die Schriftstellerin|the writer|n
il racconto|die Erzählung|the short story|n
la poesia|das Gedicht; die Poesie|the poem; poetry|n
il personaggio|die Figur (Roman, Film)|the character|n
la trama|die Handlung|the plot|n|La trama è un po' complicata.|Die Handlung ist etwas kompliziert.|The plot is a bit complicated.
il regista|der Regisseur|the director|n
la colonna sonora|der Soundtrack|the soundtrack|n
il quadro|das Gemälde|the painting|n
il pittore|der Maler|the painter|n
la mostra|die Ausstellung|the exhibition|n
il capolavoro|das Meisterwerk|the masterpiece|n
il Rinascimento|die Renaissance|the Renaissance|n
la recensione|die Rezension|the review|n
commovente|bewegend|moving|adj
noioso/a|langweilig|boring|adj
coinvolgente|fesselnd|gripping|adj
ambientato/a|spielt (in) (Handlung)|set (in)|adj|Il film è ambientato a Napoli negli anni Cinquanta.|Der Film spielt in den fünfziger Jahren in Neapel.|The film is set in Naples in the 1950s.
nacque|er/sie wurde geboren (pass. rem.)|he/she was born|x
morì|er/sie starb (pass. rem.)|he/she died|x
scrisse|er/sie schrieb (pass. rem.)|he/she wrote|x
fu|er/sie/es war (pass. rem.)|he/she/it was|x`,
  say: `Dante nacque a Firenze nel 1265.|Dante wurde 1265 in Florenz geboren.|Dante was born in Florence in 1265.
Scrisse la Divina Commedia in esilio.|Er schrieb die Göttliche Komödie im Exil.|He wrote the Divine Comedy in exile.
Leonardo dipinse la Gioconda all'inizio del Cinquecento.|Leonardo malte die Mona Lisa Anfang des 16. Jahrhunderts.|Leonardo painted the Mona Lisa at the beginning of the 16th century.
È un romanzo che mi ha commosso molto.|Das ist ein Roman, der mich sehr bewegt hat.|It's a novel that moved me a lot.
Te lo consiglio, è coinvolgente dall'inizio alla fine.|Ich empfehle ihn dir, er ist von Anfang bis Ende fesselnd.|I recommend it, it's gripping from start to finish.
Di che cosa parla?|Wovon handelt es?|What's it about?
Non mi è piaciuto il finale.|Das Ende hat mir nicht gefallen.|I didn't like the ending.`,
  gram: [
    ["h", TB("Passato remoto: die Erzählzeit", "Passato remoto: the narrative past")],
    ["p", TB("Für abgeschlossene Ereignisse in der fernen Vergangenheit – in Romanen, Geschichtsbüchern, Biografien und in Süditalien auch im Alltag. Im Norden spricht man fast nur Passato prossimo. Für B2 musst du es vor allem <b>erkennen</b>.", "For completed events in the distant past – in novels, history books, biographies and, in southern Italy, also in everyday speech. In the north people almost always use the passato prossimo. At B2 you mainly need to <b>recognise</b> it.")],
    ["table", { head: [TB("", ""), "parlare", "credere", "partire"], rows: [["io", "parlai", "credei/credetti", "partii"], ["tu", "parlasti", "credesti", "partisti"], ["lui/lei", "parlò", "credé/credette", "partì"], ["noi", "parlammo", "credemmo", "partimmo"], ["voi", "parlaste", "credeste", "partiste"], ["loro", "parlarono", "crederono/credettero", "partirono"]] }],
    ["table", { head: [TB("Infinitiv", "infinitive"), TB("io", "io"), TB("lui/lei", "lui/lei"), TB("loro", "loro")], rows: [["essere", "fui", "fu", "furono"], ["avere", "ebbi", "ebbe", "ebbero"], ["fare", "feci", "fece", "fecero"], ["dire", "dissi", "disse", "dissero"], ["vedere", "vidi", "vide", "videro"], ["venire", "venni", "venne", "vennero"], ["scrivere", "scrissi", "scrisse", "scrissero"], ["nascere", "nacqui", "nacque", "nacquero"]] }],
    ["tip", TB("Viele unregelmäßige Verben folgen dem Muster „1–3–3“: unregelmäßig sind nur io, lui/lei und loro (ebbi, ebbe, ebbero) – die anderen Formen sind regelmäßig (avesti, avemmo, aveste).", "Many irregular verbs follow the \"1-3-3\" pattern: only io, lui/lei and loro are irregular (ebbi, ebbe, ebbero) – the other forms are regular (avesti, avemmo, aveste).")]
  ],
  drill: [
    ["Michelangelo ___ la Cappella Sistina. (dipingere)", ["dipinse", "dipingé", "ha dipinto stato"], 0],
    ["Garibaldi ___ a Nizza nel 1807.", ["nacque", "nascé", "nasceva"], 0],
    ["I Romani ___ molte strade.", ["costruirono", "costruirò", "costruivano stati"], 0],
    ["«fu» è il passato remoto di …", ["essere", "fare", "fuggire"], 0],
    ["«ebbero» è il passato remoto di …", ["avere", "essere", "bere"], 0],
    ["Il film è ___ a Roma.", ["ambientato", "ambientata", "ambiente"], 0],
    ["Manzoni ___ «I promessi sposi». (scrivere)", "scrisse"]
  ],
  talk: { t: TB("Buchclub", "Book club"), scene: TB("Im Buchclub sprichst du mit Caterina über „L'amica geniale“ von Elena Ferrante.", "At the book club you talk with Caterina about \"My Brilliant Friend\" by Elena Ferrante."), who: "Caterina", slots: {}, lines: `a|Allora, ti è piaciuto «L'amica geniale»?|Und, hat dir „Meine geniale Freundin“ gefallen?|So, did you like \"My Brilliant Friend\"?
me|Moltissimo! È coinvolgente dall'inizio alla fine.|Sehr! Es ist von Anfang bis Ende fesselnd.|Very much! It's gripping from start to finish.|Tantissimo, è un libro coinvolgente.
a|Anche a me. Qual è il tuo personaggio preferito?|Mir auch. Wer ist deine Lieblingsfigur?|Me too. Who's your favourite character?
me|Lila, perché è intelligente e ribelle.|Lila, weil sie intelligent und rebellisch ist.|Lila, because she's clever and rebellious.|Lila: è intelligentissima e ribelle.
a|Sai che il romanzo è ambientato a Napoli negli anni Cinquanta?|Weißt du, dass der Roman im Neapel der fünfziger Jahre spielt?|Did you know the novel is set in Naples in the 1950s?
me|Sì, e la descrizione del quartiere è bellissima. Mi è sembrato di essere lì.|Ja, und die Beschreibung des Viertels ist wunderschön. Ich hatte das Gefühl, dort zu sein.|Yes, and the description of the neighbourhood is beautiful. I felt as if I was there.|Sì, mi è sembrato di essere a Napoli.
a|Hai visto anche la serie tv?|Hast du auch die Fernsehserie gesehen?|Have you seen the TV series too?
me|Non ancora. Secondo te è all'altezza del libro?|Noch nicht. Ist sie deiner Meinung nach so gut wie das Buch?|Not yet. Do you think it lives up to the book?|No. È bella come il libro?
a|Secondo me sì, il regista ha fatto un capolavoro.|Meiner Meinung nach ja, der Regisseur hat ein Meisterwerk geschaffen.|I think so, the director made a masterpiece.` }
});

lesson("B2", { id: "it-b2-08", t: TB("Tecnologia e futuro – Futuro anteriore", "Tecnologia e futuro – The future perfect"),
  goal: TB("Du kannst über Technik und Zukunft spekulieren und das Futuro anteriore benutzen.", "You can speculate about technology and the future and use the future perfect."),
  words: `la tecnologia|die Technik; die Technologie|technology|n
l'intelligenza artificiale|die künstliche Intelligenz|artificial intelligence|n|L'intelligenza artificiale cambierà molti lavori.|Die KI wird viele Berufe verändern.|Artificial intelligence will change many jobs.
lo sviluppo|die Entwicklung|development|n
l'innovazione|die Innovation|innovation|n
il dispositivo|das Gerät|the device|n
l'applicazione / l'app|die App|the app|n
scaricare|herunterladen|to download|v
aggiornare|aktualisieren|to update|v
la rete|das Netz|the network; the internet|n
i dati|die Daten|data|n
la privacy|der Datenschutz|privacy|n
la sicurezza informatica|die IT-Sicherheit|cybersecurity|n
il robot|der Roboter|the robot|n
automatizzare|automatisieren|to automate|v
sostituire|ersetzen|to replace|v
la sfida|die Herausforderung|the challenge|n
dipendente da|abhängig von|dependent on|ph
entro il 2040|bis 2040|by 2040|ph
nel giro di pochi anni|innerhalb weniger Jahre|within a few years|ph
prevedere|vorhersehen|to predict|v
la previsione|die Vorhersage|the prediction|n`,
  say: `Quando avrò finito questo progetto, mi prenderò una pausa.|Wenn ich dieses Projekt abgeschlossen habe, mache ich eine Pause.|When I've finished this project, I'll take a break.
Entro il 2040 le auto si guideranno da sole.|Bis 2040 werden Autos selbst fahren.|By 2040 cars will drive themselves.
Non risponde: avrà dimenticato il telefono a casa.|Er antwortet nicht: Er wird das Handy zu Hause vergessen haben.|He's not answering: he must have left his phone at home.
Molti lavori saranno automatizzati.|Viele Arbeiten werden automatisiert werden.|Many jobs will be automated.
Siamo troppo dipendenti dallo smartphone.|Wir sind zu abhängig vom Smartphone.|We're too dependent on our smartphones.
Chi l'avrebbe mai detto!|Wer hätte das gedacht!|Who would have thought!
Ogni medaglia ha il suo rovescio.|Alles hat seine Kehrseite.|Every coin has two sides.`,
  gram: [
    ["h", TB("Futuro anteriore", "Future perfect")],
    ["p", TB("<b>Futur von avere/essere + Partizip</b>: avrò finito, sarò partito/a. Für eine Handlung, die <b>vor einer anderen in der Zukunft</b> abgeschlossen ist – oft nach <i>quando, dopo che, appena</i>.", "<b>Future of avere/essere + participle</b>: avrò finito, sarò partito/a. For an action completed <b>before another one in the future</b> – often after <i>quando, dopo che, appena</i>.")],
    ["ex", [["Appena sarò arrivato, ti chiamerò.", "Sobald ich angekommen bin, rufe ich dich an.", "As soon as I've arrived, I'll call you."], ["Dopo che avremo mangiato, usciremo.", "Nachdem wir gegessen haben, gehen wir aus.", "After we've eaten, we'll go out."]]],
    ["h", TB("Vermutungen über die Vergangenheit", "Guessing about the past")],
    ["p", TB("Wie das Futur für Vermutungen in der Gegenwart (<i>sarà stanco</i>) dient das Futuro anteriore für Vermutungen in der Vergangenheit: <b>Avrà perso</b> il treno. (Er hat wohl den Zug verpasst.)", "Just as the future expresses guesses about the present (<i>sarà stanco</i>), the future perfect expresses guesses about the past: <b>Avrà perso</b> il treno. (He must have missed the train.)")],
    ["tip", TB("Im Deutschen steht oft Präsens oder Perfekt („Wenn ich fertig bin …“) – im Italienischen braucht es das Futur: <b>Quando avrò finito</b> …", "German often uses the present or perfect (\"when I'm finished\") – Italian needs the future: <b>Quando avrò finito</b> …")]
  ],
  drill: [
    ["Quando ___ finito, ti chiamo.", ["avrò", "avrei", "ho avuto"], 0],
    ["Appena ___ arrivati, vi scriveremo.", ["saremo", "avremo", "siamo stati"], 0],
    ["Marco non risponde: ___ già a dormire. (Vermutung)", ["sarà andato", "è andato", "andrebbe"], 0],
    ["Dopo che avrete letto il testo, ___ le domande.", ["farete", "fareste", "avete fatto"], 0],
    ["Entro il 2030 molti lavori ___ automatizzati.", ["saranno", "avranno", "sarebbero stati"], 0],
    ["Non trovo le chiavi: le ___ in ufficio. (lasciare, io – Vermutung)", "avrò lasciate"],
    ["Siamo sempre più ___ dalla tecnologia.", ["dipendenti", "dipendente", "dipesi"], 0]
  ],
  talk: { t: TB("Die Welt im Jahr 2050", "The world in 2050"), scene: TB("Bei einem Aperitivo spekulierst du mit deinem Freund Nicola, wie die Welt 2050 aussehen wird.", "Over an aperitivo you speculate with your friend Nicola about what the world will look like in 2050."), who: "Nicola", slots: {}, lines: `a|Secondo te, come sarà il mondo nel 2050?|Was meinst du, wie wird die Welt 2050 aussehen?|What do you think the world will be like in 2050?
me|Credo che l'intelligenza artificiale avrà cambiato quasi tutti i lavori.|Ich glaube, die KI wird fast alle Berufe verändert haben.|I think artificial intelligence will have changed almost every job.|Penso che l'IA avrà cambiato quasi tutti i lavori.
a|Anche il mio? Io faccio il commercialista…|Auch meinen? Ich bin Steuerberater …|Mine too? I'm an accountant…
me|Probabilmente sì, molte attività saranno automatizzate.|Wahrscheinlich schon, viele Tätigkeiten werden automatisiert sein.|Probably, yes, many tasks will be automated.|Forse sì, molte cose saranno automatizzate.
a|Che ansia! E cosa farò io?|Wie beängstigend! Und was mache ich dann?|How worrying! And what will I do?
me|Avrai più tempo per i clienti. Le persone avranno sempre bisogno di consigli.|Du wirst mehr Zeit für die Kunden haben. Die Menschen werden immer Beratung brauchen.|You'll have more time for clients. People will always need advice.|Avrai più tempo per i clienti, che vorranno sempre un consiglio umano.
a|Speriamo! E le macchine? Si guideranno da sole?|Hoffen wir's! Und die Autos? Werden sie selbst fahren?|Let's hope so! And cars? Will they drive themselves?
me|Sicuramente. Ma quando saranno diventate tutte elettriche, le città saranno più silenziose.|Sicher. Aber wenn sie alle elektrisch geworden sind, werden die Städte leiser sein.|Definitely. But once they've all gone electric, cities will be quieter.|Sì, e quando saranno tutte elettriche, ci sarà meno rumore.
a|Mi piace questa idea. Brindiamo al futuro!|Die Idee gefällt mir. Stoßen wir auf die Zukunft an!|I like that idea. Let's drink to the future!
me|Al futuro! Cin cin!|Auf die Zukunft! Prost!|To the future! Cheers!|Cin cin!` }
});

courseReg("it", C);
})();
