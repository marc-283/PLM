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
