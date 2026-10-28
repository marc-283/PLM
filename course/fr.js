/* PLM course: fr (generated from src/course/fr/ by build.py) */
(() => {
const C = { levels: ["A1", "A2", "B1", "B2"].map((id) => ({ id, lessons: [] })) };
const lesson = (lv, o) => C.levels.find((l) => l.id === lv).lessons.push(o);
/* Français A1 · 1–4 */
lesson("A1", { id: "fr-a1-01", t: TB("Bonjour ! – Begrüßen und vorstellen", "Bonjour ! – Greetings and introductions"),
  goal: TB("Du kannst Leute begrüßen, dich vorstellen, nach dem Befinden fragen und dich verabschieden.", "You can greet people, introduce yourself, ask how someone is and say goodbye."),
  words: `bonjour|guten Tag; hallo|hello; good morning|ph|Bonjour, madame !|Guten Tag!|Hello, madam!
bonsoir|guten Abend|good evening|ph|Bonsoir à tous !|Guten Abend allerseits!|Good evening, everyone!
salut|hi; tschüss (locker)|hi; bye|ph|Salut Léa, ça va ?|Hi Léa, wie geht's?|Hi Léa, how are you?
au revoir|auf Wiedersehen|goodbye|ph
à bientôt|bis bald|see you soon|ph
à demain|bis morgen|see you tomorrow|ph
merci|danke|thank you|ph|Merci beaucoup !|Vielen Dank!|Thank you very much!
s'il vous plaît|bitte (Sie)|please (formal)|ph
s'il te plaît|bitte (du)|please (informal)|ph
excusez-moi|entschuldigen Sie|excuse me|ph
enchanté|freut mich (als Frau: enchantée)|nice to meet you (f: enchantée)|ph|Enchanté, je m'appelle Paul.|Freut mich, ich heiße Paul.|Nice to meet you, my name is Paul.
madame|Frau; meine Dame|madam; Mrs|n
monsieur|Herr; mein Herr|sir; Mr|n
l'ami|der Freund (m)|the friend (m)|n|C'est mon ami Hugo.|Das ist mein Freund Hugo.|This is my friend Hugo.
l'amie|die Freundin (f)|the friend (f)|n
le prénom|der Vorname|the first name|n
le nom|der Name; der Nachname|the name; the surname|n
bien|gut (Adverb)|well|adv|Je vais bien, merci.|Mir geht's gut, danke.|I'm fine, thanks.
pas mal|nicht schlecht|not bad|ph
comme ci comme ça|so lala|so-so|ph
aussi|auch|also; too|adv|Moi aussi.|Ich auch.|Me too.`,
  say: `Comment tu t'appelles ?|Wie heißt du?|What's your name?
Je m'appelle Léa.|Ich heiße Léa.|My name is Léa.
Comment vous appelez-vous ?|Wie heißen Sie?|What's your name? (formal)
Ça va ? – Ça va bien, merci. Et toi ?|Wie geht's? – Gut, danke. Und dir?|How are you? – Fine, thanks. And you?
Comment allez-vous ?|Wie geht es Ihnen?|How are you? (formal)
Je te présente Marc.|Ich stelle dir Marc vor.|Let me introduce Marc.
À plus tard !|Bis später!|See you later!`,
  gram: [
    ["h", TB("Das Verb <i>être</i> (sein) und <i>s'appeler</i> (heißen)", "The verbs <i>être</i> (to be) and <i>s'appeler</i> (to be called)")],
    ["conj", { verbs: ["être", "s'appeler"], tenses: ["Présent"] }],
    ["p", TB("Anders als im Italienischen braucht Französisch <b>immer ein Subjekt</b>: <b>Je</b> suis Paul (nie nur <s>suis Paul</s>).", "Unlike Italian or Spanish, French <b>always needs a subject</b>: <b>Je</b> suis Paul (never just <s>suis Paul</s>).")],
    ["h", TB("<i>tu</i> oder <i>vous</i>?", "<i>tu</i> or <i>vous</i>?")],
    ["p", TB("<b>tu</b> für Freunde, Familie, junge Leute. <b>vous</b> für Fremde, Ältere und im Beruf – und für mehrere Personen (ihr).", "<b>tu</b> for friends, family and young people. <b>vous</b> for strangers, older people and at work – and for several people (you all).")],
    ["tip", TB("Vor <b>?</b>, <b>!</b>, <b>:</b> und <b>;</b> steht im Französischen ein Leerzeichen: Ça va ?", "In French there's a space before <b>?</b>, <b>!</b>, <b>:</b> and <b>;</b>: Ça va ?")]
  ],
  drill: [
    ["Je ___ Paul.", ["suis", "es", "est"], 0],
    ["Tu ___ française ?", ["es", "est", "êtes"], 0],
    ["Comment tu t'___ ?", ["appelles", "appelle", "appelez"], 0],
    ["Comment vous ___-vous ?", ["appelez", "appelles", "appelons"], 0, TB("vous → -ez.", "vous → -ez.")],
    ["Nous ___ de Munich.", ["sommes", "sont", "êtes"], 0],
    ["Elle ___ mon amie.", ["est", "et", "es"], 0, TB("<i>est</i> = ist, <i>et</i> = und – gleich ausgesprochen!", "<i>est</i> = is, <i>et</i> = and – pronounced the same!")],
    ["Je m'___ Anna. (s'appeler)", "appelle"]
  ],
  talk: { t: TB("Auf einer Party in Lyon", "At a party in Lyon"), scene: TB("Auf einer Party lernst du Camille kennen.", "At a party you meet Camille."), who: "Camille", slots: { name: "Alex" }, lines: `a|Salut ! Je m'appelle Camille. Et toi ?|Hi! Ich heiße Camille. Und du?|Hi! My name is Camille. And you?
me|Salut Camille ! Je m'appelle {name}.|Hi Camille! Ich heiße …|Hi Camille! My name is …|Moi, c'est {name}.; Je suis {name}.; Salut, je m'appelle {name}.
a|Enchantée ! Ça va ?|Freut mich! Wie geht's?|Nice to meet you! How are you?
me|Enchanté ! Ça va bien, merci. Et toi ?|Freut mich! Gut, danke. Und dir?|Nice to meet you! Fine, thanks. And you?|Ça va bien, et toi ?; Très bien, merci. Et toi ?
a|Très bien ! Tu es un ami de Julien ?|Sehr gut! Bist du ein Freund von Julien?|Very well! Are you a friend of Julien's?
me|Oui, je suis un collègue de Julien.|Ja, ich bin ein Kollege von Julien.|Yes, I'm a colleague of Julien's.|Oui, c'est un collègue.; Oui, je travaille avec Julien.
a|Super ! Bon, à plus tard !|Super! Also, bis später!|Great! Well, see you later!
me|À plus tard, Camille !|Bis später, Camille!|See you later, Camille!|À tout à l'heure !; Salut, à plus !` }
});

lesson("A1", { id: "fr-a1-02", t: TB("Tu viens d'où ? – Länder und Sprachen", "Tu viens d'où ? – Countries and languages"),
  goal: TB("Du kannst sagen, woher du kommst, wo du wohnst und welche Sprachen du sprichst.", "You can say where you're from, where you live and which languages you speak."),
  words: `l'Allemagne|Deutschland (f)|Germany|n|J'habite en Allemagne.|Ich wohne in Deutschland.|I live in Germany.
la France|Frankreich|France|n
l'Italie|Italien (f)|Italy|n
l'Espagne|Spanien (f)|Spain|n
la Suisse|die Schweiz|Switzerland|n
l'Autriche|Österreich (f)|Austria|n
les États-Unis|die USA (m, Pl.)|the United States|n
le Canada|Kanada|Canada|n
allemand / allemande|deutsch; Deutsch|German|adj|Je suis allemand.|Ich bin Deutscher.|I'm German.
français / française|französisch; Französisch|French|adj
anglais / anglaise|englisch; Englisch|English|adj
italien / italienne|italienisch; Italienisch|Italian|adj
la langue|die Sprache|the language|n
parler|sprechen|to speak|v|Tu parles français ?|Sprichst du Französisch?|Do you speak French?
habiter|wohnen|to live|v|J'habite à Munich.|Ich wohne in München.|I live in Munich.
venir de|kommen aus|to come from|v
la ville|die Stadt|the city; the town|n
le pays|das Land|the country|n
un peu|ein bisschen|a little|ph
couramment|fließend|fluently|adv`,
  say: `Tu viens d'où ?|Woher kommst du?|Where are you from?
Je viens d'Allemagne, de Munich.|Ich komme aus Deutschland, aus München.|I'm from Germany, from Munich.
J'habite à Paris depuis un an.|Ich wohne seit einem Jahr in Paris.|I've been living in Paris for a year.
Je parle allemand, anglais et un peu français.|Ich spreche Deutsch, Englisch und ein bisschen Französisch.|I speak German, English and a little French.
Vous parlez anglais ?|Sprechen Sie Englisch?|Do you speak English?
Tu peux répéter, s'il te plaît ?|Kannst du das bitte wiederholen?|Can you repeat that, please?`,
  gram: [
    ["h", TB("Präpositionen bei Ländern und Städten", "Prepositions with countries and cities")],
    ["table", { head: [TB("wohin / wo?", "where?"), TB("woher?", "from where?"), TB("Beispiel", "example")], rows: [[TB("Stadt: à", "city: à"), "de / d'", "J'habite à Lyon. Je viens de Lyon."], [TB("Land weiblich: en", "feminine country: en"), "de / d'", "J'habite en France. Je viens d'Allemagne."], [TB("Land männlich: au", "masculine country: au"), "du", "J'habite au Canada. Je viens du Canada."], [TB("Land Plural: aux", "plural country: aux"), "des", "J'habite aux États-Unis."]], say: 2 }],
    ["conj", { verbs: ["parler", "habiter", "venir"], tenses: ["Présent"] }],
    ["tip", TB("Sprachen und Nationalitäten als Adjektiv schreibt man <b>klein</b>: je parle <b>français</b>, il est <b>allemand</b>. Nur Personen groß: <b>un Allemand</b>.", "Languages and nationalities as adjectives are <b>lower case</b>: je parle <b>français</b>, il est <b>allemand</b>. Only people get a capital: <b>un Allemand</b>.")]
  ],
  forms: { verbs: ["parler", "habiter", "venir", "être"], tenses: ["Présent"] },
  drill: [
    ["J'habite ___ Berlin.", ["à", "en", "au"], 0],
    ["Elle habite ___ France.", ["en", "à", "au"], 0],
    ["Ils habitent ___ Canada.", ["au", "en", "à"], 0],
    ["Je viens ___ Allemagne.", ["d'", "de", "du"], 0],
    ["Tu ___ anglais ?", ["parles", "parle", "parlez"], 0],
    ["Nous ___ de Munich.", ["venons", "venez", "viennent"], 0],
    ["Ich wohne in Italien. → J'habite ___ Italie.", "en"]
  ],
  talk: { t: TB("Im Zug nach Paris", "On the train to Paris"), scene: TB("Im TGV sitzt du neben Louis.", "On the TGV you're sitting next to Louis."), who: "Louis", slots: { city: "Munich" }, lines: `a|Bonjour ! Vous allez à Paris aussi ?|Guten Tag! Fahren Sie auch nach Paris?|Hello! Are you going to Paris too?
me|Oui, je vais à Paris pour le travail.|Ja, ich fahre beruflich nach Paris.|Yes, I'm going to Paris for work.|Oui, pour le travail.; Oui, je vais à Paris.
a|Vous venez d'où ?|Woher kommen Sie?|Where are you from?
me|Je viens d'Allemagne, de {city}.|Ich komme aus Deutschland, aus …|I'm from Germany, from …|Je suis allemand, de {city}.; D'Allemagne, de {city}.
a|Vous parlez très bien français !|Sie sprechen sehr gut Französisch!|You speak French very well!
me|Merci, mais je parle seulement un peu.|Danke, aber ich spreche nur ein bisschen.|Thanks, but I only speak a little.|Merci ! Je parle un peu.
a|Et vous habitez à {city} ?|Und wohnen Sie in …?|And do you live in …?
me|Oui, j'habite et je travaille à {city}.|Ja, ich wohne und arbeite in …|Yes, I live and work in …|Oui, j'habite à {city}.` }
});

lesson("A1", { id: "fr-a1-03", t: TB("Au café – Bestellen, Artikel, Zahlen", "Au café – Ordering, articles, numbers"),
  goal: TB("Du kannst im Café bestellen, nach dem Preis fragen und bezahlen.", "You can order in a café, ask the price and pay."),
  words: `le café|der Kaffee; das Café|the coffee; the café|n|Un café, s'il vous plaît.|Einen Kaffee, bitte.|A coffee, please.
le thé|der Tee|the tea|n
l'eau|das Wasser (f)|the water|n|Une carafe d'eau, s'il vous plaît.|Eine Karaffe Wasser, bitte.|A jug of water, please.
le jus d'orange|der Orangensaft|the orange juice|n
la bière|das Bier|the beer|n
le verre|das Glas|the glass|n|Un verre de vin blanc.|Ein Glas Weißwein.|A glass of white wine.
le croissant|das Croissant|the croissant|n
la tarte|der Kuchen; die Tarte|the tart; the pie|n
le sandwich|das Sandwich|the sandwich|n
le serveur|der Kellner|the waiter|n
la serveuse|die Kellnerin|the waitress|n
l'addition|die Rechnung (f)|the bill|n|L'addition, s'il vous plaît.|Die Rechnung, bitte.|The bill, please.
payer|bezahlen|to pay|v
par carte|mit Karte|by card|ph|Je peux payer par carte ?|Kann ich mit Karte zahlen?|Can I pay by card?
en espèces|bar|in cash|ph
combien|wie viel|how much|x|C'est combien ?|Wie viel kostet das?|How much is it?
l'euro|der Euro (m)|the euro|n
vingt|zwanzig|twenty|x
cinquante|fünfzig|fifty|x
cent|hundert|a hundred|x
je voudrais|ich hätte gern|I would like|ph|Je voudrais un thé, s'il vous plaît.|Ich hätte gern einen Tee, bitte.|I'd like a tea, please.`,
  say: `Je voudrais un café crème, s'il vous plaît.|Ich hätte gern einen Milchkaffee, bitte.|I'd like a white coffee, please.
Pour moi, un jus d'orange.|Für mich einen Orangensaft.|An orange juice for me.
Qu'est-ce que vous avez comme gâteaux ?|Was für Kuchen haben Sie?|What kind of cakes do you have?
Ça fait combien ?|Was macht das?|How much is that?
Ça fait sept euros cinquante.|Das macht sieben Euro fünfzig.|That's seven euros fifty.
Gardez la monnaie.|Stimmt so.|Keep the change.`,
  gram: [
    ["h", TB("Artikel: <i>le, la, l', les</i> und <i>un, une, des</i>", "Articles: <i>le, la, l', les</i> and <i>un, une, des</i>")],
    ["table", { head: ["", TB("bestimmt", "definite"), TB("unbestimmt", "indefinite")], rows: [[TB("männlich", "masculine"), "le café", "un café"], [TB("weiblich", "feminine"), "la bière", "une bière"], [TB("vor Vokal / h", "before vowel / h"), "l'eau, l'hôtel", "une eau, un hôtel"], [TB("Plural", "plural"), "les croissants", "des croissants"]], say: 1 }],
    ["p", TB("Französisch hat einen Plural-Artikel für „einige“: <b>des</b> croissants. Bei Mengen von etwas Unzählbarem: <b>du</b> pain, <b>de la</b> confiture, <b>de l'</b>eau (Teilungsartikel).", "French has a plural indefinite article: <b>des</b> croissants. For an amount of something uncountable: <b>du</b> pain, <b>de la</b> confiture, <b>de l'</b>eau (partitive).")],
    ["tip", TB("Zahlen ab 70 sind „Rechenaufgaben“: 70 = <b>soixante-dix</b> (60+10), 80 = <b>quatre-vingts</b> (4×20), 90 = <b>quatre-vingt-dix</b>. In Belgien und der Schweiz sagt man <i>septante, nonante</i>.", "Numbers from 70 are “sums”: 70 = <b>soixante-dix</b> (60+10), 80 = <b>quatre-vingts</b> (4×20), 90 = <b>quatre-vingt-dix</b>. Belgium and Switzerland use <i>septante, nonante</i>.")]
  ],
  drill: [
    ["Je voudrais ___ café, s'il vous plaît.", ["un", "une", "des"], 0],
    ["___ addition, s'il vous plaît.", ["L'", "La", "Le"], 0],
    ["Vous avez ___ croissants ?", ["des", "un", "le"], 0],
    ["Je prends ___ eau minérale.", ["une", "un", "des"], 0],
    ["Je peux payer ___ carte ?", ["par", "avec", "en"], 0],
    ["Je mange ___ pain le matin.", ["du", "de la", "des"], 0],
    ["80 = ___", "quatre-vingts"]
  ],
  talk: { t: TB("Im Straßencafé", "At the pavement café"), scene: TB("Du sitzt in einem Café in Montmartre. Der Kellner kommt.", "You're sitting in a café in Montmartre. The waiter comes over."), who: "Serveur", slots: {}, lines: `a|Bonjour ! Qu'est-ce que je vous sers ?|Guten Tag! Was darf ich Ihnen bringen?|Hello! What can I get you?
me|Bonjour ! Je voudrais un café crème, s'il vous plaît.|Guten Tag! Ich hätte gern einen Milchkaffee, bitte.|Hello! I'd like a white coffee, please.|Un café crème, s'il vous plaît.; Je vais prendre un café crème.
a|Très bien. Et avec ça ?|Sehr gern. Und dazu?|Very good. Anything else?
me|Un croissant aussi, s'il vous plaît.|Auch ein Croissant, bitte.|A croissant too, please.|Et un croissant, s'il vous plaît.
a|Voilà, un café crème et un croissant.|Bitte sehr, ein Milchkaffee und ein Croissant.|Here you are, a white coffee and a croissant.
me|Merci. Ça fait combien ?|Danke. Was macht das?|Thank you. How much is that?|C'est combien ?; Merci ! Je vous dois combien ?
a|Six euros quarante, s'il vous plaît.|Sechs Euro vierzig, bitte.|Six euros forty, please.
me|Je peux payer par carte ?|Kann ich mit Karte zahlen?|Can I pay by card?|Par carte, c'est possible ?` }
});

lesson("A1", { id: "fr-a1-04", t: TB("La famille – Familie und Possessiva", "La famille – Family and possessives"),
  goal: TB("Du kannst deine Familie vorstellen und sagen, wem etwas gehört.", "You can introduce your family and say who things belong to."),
  words: `la famille|die Familie|the family|n|J'ai une grande famille.|Ich habe eine große Familie.|I have a big family.
les parents|die Eltern|the parents|n
le père|der Vater|the father|n
la mère|die Mutter|the mother|n
le frère|der Bruder|the brother|n|J'ai deux frères.|Ich habe zwei Brüder.|I have two brothers.
la sœur|die Schwester|the sister|n
le fils|der Sohn|the son|n
la fille|die Tochter; das Mädchen|the daughter; the girl|n
les grands-parents|die Großeltern|the grandparents|n
l'oncle|der Onkel (m)|the uncle|n
la tante|die Tante|the aunt|n
le cousin|der Cousin|the cousin (m)|n
la cousine|die Cousine|the cousin (f)|n
le mari|der Ehemann|the husband|n
la femme|die Ehefrau; die Frau|the wife; the woman|n
marié / mariée|verheiratet|married|adj|Ma sœur est mariée.|Meine Schwester ist verheiratet.|My sister is married.
célibataire|ledig; Single|single|adj
avoir … ans|… Jahre alt sein|to be … years old|ph|Mon frère a trente ans.|Mein Bruder ist dreißig.|My brother is thirty.
l'enfant|das Kind (m/f)|the child|n
fils unique|Einzelkind (Junge)|only child (boy)|ph`,
  say: `Tu as des frères et sœurs ?|Hast du Geschwister?|Do you have any brothers or sisters?
J'ai une sœur et un frère.|Ich habe eine Schwester und einen Bruder.|I have a sister and a brother.
Je suis fils unique.|Ich bin Einzelkind.|I'm an only child.
Voici ma mère et mon père.|Das sind meine Mutter und mein Vater.|This is my mother and my father.
Ma sœur a vingt-huit ans.|Meine Schwester ist achtundzwanzig.|My sister is twenty-eight.
Leurs enfants habitent à Lyon.|Ihre Kinder wohnen in Lyon.|Their children live in Lyon.`,
  gram: [
    ["h", TB("Possessivbegleiter", "Possessive determiners")],
    ["table", { head: ["", TB("männlich", "masculine"), TB("weiblich", "feminine"), TB("Plural", "plural")], rows: [["je", "mon frère", "ma sœur", "mes parents"], ["tu", "ton frère", "ta sœur", "tes parents"], ["il / elle", "son frère", "sa sœur", "ses parents"], ["nous", "notre frère", "notre sœur", "nos parents"], ["vous", "votre frère", "votre sœur", "vos parents"], ["ils / elles", "leur frère", "leur sœur", "leurs parents"]], say: 1 }],
    ["p", TB("Das Possessiv richtet sich nach dem <b>Besitz</b>, nicht nach dem Besitzer: Paul et <b>sa</b> sœur, Marie et <b>son</b> frère. Vor Vokal immer <b>mon / ton / son</b>: <b>mon</b> amie.", "The possessive agrees with the <b>thing owned</b>, not the owner: Paul et <b>sa</b> sœur, Marie et <b>son</b> frère. Before a vowel always <b>mon / ton / son</b>: <b>mon</b> amie.")],
    ["conj", { verbs: ["avoir"], tenses: ["Présent"] }],
    ["tip", TB("Alter mit <b>avoir</b>: J'<b>ai</b> 26 ans (wörtlich „ich habe 26 Jahre“) – nie mit être!", "Age uses <b>avoir</b>: J'<b>ai</b> 26 ans (literally “I have 26 years”) – never être!")]
  ],
  drill: [
    ["C'est ___ sœur. (meine)", ["ma", "mon", "mes"], 0],
    ["Voici ___ parents. (meine)", ["mes", "ma", "mon"], 0],
    ["Marie adore ___ frère.", ["son", "sa", "ses"], 0, TB("frère ist männlich → son – egal, dass Marie eine Frau ist.", "frère is masculine → son – even though Marie is a woman.")],
    ["C'est ___ amie Julie. (meine)", ["mon", "ma", "mes"], 0, TB("Vor Vokal → mon.", "Before a vowel → mon.")],
    ["Mon frère ___ trente ans.", ["a", "est", "as"], 0],
    ["Ils aiment ___ enfants.", ["leurs", "leur", "ses"], 0],
    ["Ich bin 26. → J'___ vingt-six ans.", "ai"]
  ],
  talk: { t: TB("Familienfotos", "Family photos"), scene: TB("Deine Kollegin Inès zeigt dir Fotos von ihrer Familie.", "Your colleague Inès shows you photos of her family."), who: "Inès", slots: {}, lines: `a|Regarde, c'est ma sœur Chloé et son mari.|Schau, das ist meine Schwester Chloé und ihr Mann.|Look, this is my sister Chloé and her husband.
me|Ils sont très sympas ! Elle a quel âge ?|Sie sehen sehr nett aus! Wie alt ist sie?|They look really nice! How old is she?|Elle a quel âge, ta sœur ?
a|Elle a trente ans. Et toi, tu as des frères et sœurs ?|Sie ist dreißig. Und du, hast du Geschwister?|She's thirty. And you, do you have brothers or sisters?
me|Oui, j'ai un frère. Il s'appelle Tobias.|Ja, ich habe einen Bruder. Er heißt Tobias.|Yes, I have a brother. His name is Tobias.|J'ai un frère, Tobias.
a|Il habite où ?|Wo wohnt er?|Where does he live?
me|Il habite à Hambourg avec sa femme.|Er wohnt mit seiner Frau in Hamburg.|He lives in Hamburg with his wife.|À Hambourg, avec sa femme.
a|Et tes parents ?|Und deine Eltern?|And your parents?
me|Mes parents habitent près de Munich.|Meine Eltern wohnen in der Nähe von München.|My parents live near Munich.|Ils habitent près de Munich.` }
});

/* Français A1 · 5–8 */
lesson("A1", { id: "fr-a1-05", t: TB("Ma journée – Tagesablauf und reflexive Verben", "Ma journée – Daily routine and reflexive verbs"),
  goal: TB("Du kannst deinen Tagesablauf beschreiben und die Uhrzeit sagen.", "You can describe your daily routine and tell the time."),
  words: `se lever|aufstehen|to get up|v|Je me lève à sept heures.|Ich stehe um sieben auf.|I get up at seven.
se réveiller|aufwachen|to wake up|v
se doucher|duschen|to shower|v
s'habiller|sich anziehen|to get dressed|v
prendre le petit-déjeuner|frühstücken|to have breakfast|v
partir|weggehen; losfahren|to leave|v|Je pars au travail à huit heures.|Ich fahre um acht zur Arbeit.|I leave for work at eight.
travailler|arbeiten|to work|v
déjeuner|zu Mittag essen|to have lunch|v
rentrer|nach Hause kommen|to get home|v|Je rentre vers dix-huit heures.|Ich komme gegen achtzehn Uhr nach Hause.|I get home around six.
dîner|zu Abend essen|to have dinner|v
se coucher|ins Bett gehen|to go to bed|v
le matin|der Morgen; morgens|the morning|n
l'après-midi|der Nachmittag (m)|the afternoon|n
le soir|der Abend; abends|the evening|n
l'heure|die Stunde; die Uhrzeit (f)|the hour; the time|n|Quelle heure est-il ?|Wie spät ist es?|What time is it?
et demie|halb (nach)|half past|ph|Il est huit heures et demie.|Es ist halb neun.|It's half past eight.
et quart|Viertel nach|quarter past|ph
moins le quart|Viertel vor|quarter to|ph|Il est dix heures moins le quart.|Es ist Viertel vor zehn.|It's quarter to ten.
d'habitude|normalerweise|usually|adv
tôt|früh|early|adv
tard|spät|late|adv`,
  say: `Quelle heure est-il ? – Il est sept heures et demie.|Wie spät ist es? – Es ist halb acht.|What time is it? – It's half past seven.
Tu te lèves à quelle heure ?|Wann stehst du auf?|What time do you get up?
Je commence à neuf heures et je finis à dix-sept heures.|Ich fange um neun an und höre um siebzehn Uhr auf.|I start at nine and finish at five.
Le vendredi, je travaille à la maison.|Freitags arbeite ich zu Hause.|On Fridays I work from home.
Le soir, je me couche tard.|Abends gehe ich spät ins Bett.|In the evening I go to bed late.
On se retrouve à midi ?|Treffen wir uns um zwölf?|Shall we meet at noon?`,
  gram: [
    ["h", TB("Reflexive Verben", "Reflexive verbs")],
    ["conj", { verbs: ["se lever"], tenses: ["Présent"] }],
    ["p", TB("Das Reflexivpronomen steht <b>vor</b> dem Verb: je <b>me</b> lève, tu <b>te</b> lèves, il <b>se</b> lève, nous <b>nous</b> levons, vous <b>vous</b> levez, ils <b>se</b> lèvent. Verneint: je <b>ne me</b> lève <b>pas</b>.", "The reflexive pronoun goes <b>before</b> the verb: je <b>me</b> lève, tu <b>te</b> lèves, il <b>se</b> lève … Negative: je <b>ne me</b> lève <b>pas</b>.")],
    ["h", TB("Die Uhrzeit", "Telling the time")],
    ["table", { head: [TB("Uhr", "clock"), TB("Französisch", "French")], rows: [["7:00", "sept heures"], ["7:15", "sept heures et quart"], ["7:30", "sept heures et demie"], ["7:45", "huit heures moins le quart"], ["12:00", "midi"], ["0:00", "minuit"], ["19:20", "dix-neuf heures vingt"]], say: 1 }],
    ["tip", TB("Im Alltag hört man oft die 24-Stunden-Zählung: <b>dix-huit heures</b> = 18 Uhr. Und „am Montag“ (jeden): <b>le lundi</b>; „diesen Montag“: <b>lundi</b>.", "In everyday life the 24-hour clock is common: <b>dix-huit heures</b> = 6 pm. “On Mondays” (every): <b>le lundi</b>; “this Monday”: <b>lundi</b>.")]
  ],
  forms: { verbs: ["se lever", "se coucher", "travailler", "partir", "finir"], tenses: ["Présent"] },
  drill: [
    ["Je ___ lève à six heures.", ["me", "te", "se"], 0],
    ["Nous ___ couchons tard.", ["nous", "se", "vous"], 0],
    ["Elle ___ douche le matin.", ["se", "me", "s'"], 0],
    ["Il est huit heures et ___. (8:30)", ["demie", "demi", "quart"], 0],
    ["Il est neuf heures ___ le quart. (8:45)", ["moins", "et", "avant"], 0],
    ["Tu ___ à quelle heure ? (partir)", ["pars", "part", "partes"], 0],
    ["Ich stehe um sieben auf. → Je me ___ à sept heures.", "lève"]
  ],
  talk: { t: TB("Ein ganz normaler Tag", "Just an ordinary day"), scene: TB("Dein neuer Mitbewohner Hugo fragt, wie dein Tag aussieht – er will das Bad planen.", "Your new flatmate Hugo asks about your day – he wants to plan the bathroom."), who: "Hugo", slots: {}, lines: `a|Tu te lèves à quelle heure le matin ?|Um wie viel Uhr stehst du morgens auf?|What time do you get up in the morning?
me|Je me lève à six heures et demie.|Ich stehe um halb sieben auf.|I get up at half past six.|À six heures et demie.; D'habitude à six heures trente.
a|Ah, c'est tôt ! Et tu te douches le matin ?|Ah, früh! Und duschst du morgens?|Oh, that's early! And do you shower in the morning?
me|Oui, je me douche tout de suite après.|Ja, ich dusche gleich danach.|Yes, I shower straight afterwards.|Oui, à sept heures moins le quart.
a|D'accord. Moi, je me lève à huit heures. Tu rentres à quelle heure ?|Okay. Ich stehe um acht auf. Wann kommst du nach Hause?|OK. I get up at eight. What time do you get home?
me|Je rentre vers dix-huit heures.|Ich komme gegen achtzehn Uhr nach Hause.|I get home around six.|Vers six heures du soir.
a|Parfait. On dîne ensemble ce soir ?|Perfekt. Essen wir heute Abend zusammen?|Perfect. Shall we have dinner together tonight?
me|Avec plaisir ! Je fais les courses.|Gern! Ich gehe einkaufen.|With pleasure! I'll do the shopping.|Bonne idée ! Je cuisine, si tu veux.` }
});

lesson("A1", { id: "fr-a1-06", t: TB("Les loisirs – Hobbys und <i>faire de</i>", "Les loisirs – Hobbies and <i>faire de</i>"),
  goal: TB("Du kannst über Hobbys sprechen, sagen, was du (nicht) magst, und dich verabreden.", "You can talk about hobbies, say what you like or don't like and make plans."),
  words: `les loisirs|die Freizeit; die Hobbys|leisure; hobbies|n
le temps libre|die Freizeit|free time|n|Qu'est-ce que tu fais pendant ton temps libre ?|Was machst du in deiner Freizeit?|What do you do in your free time?
aimer|mögen; lieben|to like; to love|v|J'aime lire.|Ich lese gern.|I like reading.
adorer|lieben; total gern mögen|to love|v
détester|hassen|to hate|v
préférer|lieber mögen|to prefer|v|Je préfère le cinéma.|Ich gehe lieber ins Kino.|I prefer the cinema.
faire du sport|Sport treiben|to do sport|v
faire du vélo|Rad fahren|to cycle|v
faire de la natation|schwimmen|to swim|v
jouer au foot|Fußball spielen|to play football|v
jouer de la guitare|Gitarre spielen|to play the guitar|v
lire|lesen|to read|v
la lecture|das Lesen|reading|n
le cinéma|das Kino|the cinema|n
la musique|die Musik|music|n
la randonnée|die Wanderung|the hike|n|On fait une randonnée dimanche ?|Machen wir am Sonntag eine Wanderung?|Shall we go hiking on Sunday?
souvent|oft|often|adv
parfois|manchmal|sometimes|adv
ne … jamais|nie|never|ph|Je ne regarde jamais la télé.|Ich schaue nie fern.|I never watch TV.
le week-end|das Wochenende|the weekend|n`,
  say: `Qu'est-ce que tu fais le week-end ?|Was machst du am Wochenende?|What do you do at the weekend?
J'adore faire du vélo.|Ich fahre total gern Rad.|I love cycling.
Je n'aime pas trop le sport.|Ich mag Sport nicht so.|I'm not really into sport.
Je joue de la guitare depuis dix ans.|Ich spiele seit zehn Jahren Gitarre.|I've been playing the guitar for ten years.
Tu veux venir avec nous ?|Willst du mit uns kommen?|Do you want to come with us?
On se voit samedi ?|Sehen wir uns am Samstag?|Shall we meet on Saturday?`,
  gram: [
    ["h", TB("<i>faire de</i> und <i>jouer à / de</i>", "<i>faire de</i> and <i>jouer à / de</i>")],
    ["table", { head: [TB("Ausdruck", "expression"), TB("wofür?", "use"), TB("Beispiel", "example")], rows: [["faire du / de la / de l'", TB("Sport und Aktivitäten", "sports and activities"), "Je fais du vélo. Elle fait de la natation."], ["jouer au / à la", TB("Spiele, Ballsport", "games, ball sports"), "Il joue au tennis."], ["jouer du / de la", TB("Instrumente", "instruments"), "Je joue de la guitare."]], say: 2 }],
    ["p", TB("<b>à + le = au</b>, <b>de + le = du</b>: jouer <b>au</b> foot, faire <b>du</b> ski. Mit <i>la</i> und <i>l'</i> bleibt es: <b>à la</b>, <b>de la</b>, <b>de l'</b>.", "<b>à + le = au</b>, <b>de + le = du</b>: jouer <b>au</b> foot, faire <b>du</b> ski. With <i>la</i> and <i>l'</i> nothing changes: <b>à la</b>, <b>de la</b>, <b>de l'</b>.")],
    ["conj", { verbs: ["faire"], tenses: ["Présent"] }],
    ["tip", TB("Nach <b>aimer, adorer, détester</b> steht der Infinitiv: J'aime <b>lire</b>. Verneinung umschließt das Verb: Je <b>ne</b> joue <b>pas</b>.", "After <b>aimer, adorer, détester</b> use the infinitive: J'aime <b>lire</b>. The negative wraps around the verb: Je <b>ne</b> joue <b>pas</b>.")]
  ],
  forms: { verbs: ["faire", "jouer", "aimer", "préférer", "lire"], tenses: ["Présent"] },
  drill: [
    ["Je fais ___ vélo le dimanche.", ["du", "de la", "au"], 0],
    ["Il joue ___ foot avec ses amis.", ["au", "du", "à le"], 0],
    ["Elle joue ___ piano.", ["du", "au", "de le"], 0],
    ["Nous ___ du sport trois fois par semaine.", ["faisons", "faites", "font"], 0],
    ["J'aime ___ le soir.", ["lire", "lis", "lit"], 0],
    ["Je ___ regarde jamais la télé.", ["ne", "n'", "pas"], 0],
    ["Wir spielen Tennis. → Nous jouons ___ tennis.", "au"]
  ],
  talk: { t: TB("Pläne fürs Wochenende", "Weekend plans"), scene: TB("In der Mittagspause fragt dich deine Kollegin Manon nach deinen Hobbys.", "At lunch your colleague Manon asks about your hobbies."), who: "Manon", slots: {}, lines: `a|Qu'est-ce que tu fais pendant ton temps libre ?|Was machst du in deiner Freizeit?|What do you do in your free time?
me|J'adore faire du sport. Je fais souvent du vélo.|Ich mache total gern Sport. Ich fahre oft Rad.|I love sport. I often go cycling.|Je fais du vélo et je vais à la salle de sport.
a|Ah, moi aussi ! Tu fais aussi de la randonnée ?|Ich auch! Gehst du auch wandern?|Me too! Do you go hiking too?
me|Parfois, mais je préfère le vélo.|Manchmal, aber ich fahre lieber Rad.|Sometimes, but I prefer cycling.|Oui, parfois.
a|On fait une randonnée ensemble dimanche ?|Machen wir am Sonntag zusammen eine Wanderung?|Shall we go hiking together on Sunday?
me|Avec plaisir ! On part à quelle heure ?|Gern! Um wie viel Uhr gehen wir los?|With pleasure! What time shall we leave?|Bonne idée ! À quelle heure ?
a|Neuf heures, ça te va ?|Neun Uhr, passt dir das?|Nine o'clock, is that OK?
me|Parfait. À dimanche !|Perfekt. Bis Sonntag!|Perfect. See you on Sunday!|D'accord, à dimanche !` }
});

lesson("A1", { id: "fr-a1-07", t: TB("En ville – Orte, Weg und <i>il y a</i>", "En ville – Places, directions and <i>il y a</i>"),
  goal: TB("Du kannst nach dem Weg fragen, eine Wegbeschreibung verstehen und sagen, was es wo gibt.", "You can ask the way, understand directions and say what there is where."),
  words: `la gare|der Bahnhof|the station|n|Où est la gare, s'il vous plaît ?|Wo ist bitte der Bahnhof?|Where's the station, please?
l'arrêt de bus|die Bushaltestelle (m)|the bus stop|n
la pharmacie|die Apotheke|the pharmacy|n
la boulangerie|die Bäckerei|the bakery|n
le supermarché|der Supermarkt|the supermarket|n
la banque|die Bank|the bank|n
la poste|die Post|the post office|n
le musée|das Museum|the museum|n
la place|der Platz|the square|n
la rue|die Straße|the street|n
le pont|die Brücke|the bridge|n
le feu|die Ampel|the traffic light|n|Tournez à gauche au feu.|Biegen Sie an der Ampel links ab.|Turn left at the lights.
tourner|abbiegen|to turn|v
traverser|überqueren|to cross|v
tout droit|geradeaus|straight on|ph
à droite|rechts|on the right|ph
à gauche|links|on the left|ph
à côté de|neben|next to|ph|La banque est à côté de la poste.|Die Bank ist neben der Post.|The bank is next to the post office.
en face de|gegenüber von|opposite|ph
loin|weit|far|adv|C'est loin ? – Non, c'est à cinq minutes à pied.|Ist es weit? – Nein, fünf Minuten zu Fuß.|Is it far? – No, it's five minutes on foot.`,
  say: `Pardon, pour aller à la gare, s'il vous plaît ?|Entschuldigung, wie komme ich zum Bahnhof?|Excuse me, how do I get to the station?
Il y a une pharmacie près d'ici ?|Gibt es hier in der Nähe eine Apotheke?|Is there a pharmacy near here?
Allez tout droit, puis prenez la deuxième rue à droite.|Gehen Sie geradeaus, dann nehmen Sie die zweite Straße rechts.|Go straight on, then take the second street on the right.
C'est en face du musée.|Es ist gegenüber dem Museum.|It's opposite the museum.
C'est à dix minutes à pied.|Es sind zehn Minuten zu Fuß.|It's ten minutes on foot.
Je suis perdu.|Ich habe mich verlaufen.|I'm lost.`,
  gram: [
    ["h", TB("<i>il y a</i> – es gibt", "<i>il y a</i> – there is / there are")],
    ["p", TB("<b>il y a</b> + Einzahl oder Mehrzahl: <b>Il y a</b> une boulangerie dans la rue. <b>Il y a</b> deux musées. Verneint: <b>Il n'y a pas de</b> banque ici (nach Verneinung <b>de</b> statt un/une/des).", "<b>il y a</b> + singular or plural: <b>Il y a</b> une boulangerie dans la rue. <b>Il y a</b> deux musées. Negative: <b>Il n'y a pas de</b> banque ici (after a negative, <b>de</b> replaces un/une/des).")],
    ["h", TB("<i>à</i> und <i>de</i> + Artikel", "<i>à</i> and <i>de</i> + article")],
    ["table", { head: ["", "le", "la", "l'", "les"], rows: [["à", "au", "à la", "à l'", "aux"], ["de", "du", "de la", "de l'", "des"]], say: 1 }],
    ["ex", [["Je vais au musée.", "Ich gehe ins Museum.", "I'm going to the museum."], ["C'est en face de la gare.", "Es ist gegenüber vom Bahnhof.", "It's opposite the station."], ["La poste est à côté du supermarché.", "Die Post ist neben dem Supermarkt.", "The post office is next to the supermarket."]]],
    ["tip", TB("<b>Pour aller à …, s'il vous plaît ?</b> ist die übliche, kurze Frage nach dem Weg.", "<b>Pour aller à …, s'il vous plaît ?</b> is the usual short way to ask for directions.")]
  ],
  drill: [
    ["___ une boulangerie près d'ici ?", ["Il y a", "C'est", "Il est"], 0],
    ["Il n'y a pas ___ pharmacie dans ce quartier.", ["de", "une", "la"], 0],
    ["Je vais ___ musée.", ["au", "à le", "du"], 0],
    ["La banque est en face ___ gare.", ["de la", "du", "à la"], 0],
    ["Tournez ___ gauche au feu.", ["à", "au", "en"], 0],
    ["Nous allons ___ toilettes.", ["aux", "à les", "des"], 0],
    ["Es ist neben dem Supermarkt. → C'est à côté ___ supermarché.", "du"]
  ],
  talk: { t: TB("Wo ist das Museum?", "Where's the museum?"), scene: TB("Du suchst in Bordeaux das Weinmuseum und fragst eine Passantin.", "You're looking for the wine museum in Bordeaux and ask a passer-by."), who: "Passante", slots: {}, lines: `me|Pardon madame, pour aller au musée du vin, s'il vous plaît ?|Entschuldigung, wie komme ich bitte zum Weinmuseum?|Excuse me, how do I get to the wine museum, please?|Excusez-moi, où est le musée du vin ?
a|Ce n'est pas loin. Allez tout droit et tournez à droite au feu.|Es ist nicht weit. Gehen Sie geradeaus und biegen Sie an der Ampel rechts ab.|It's not far. Go straight on and turn right at the lights.
me|Tout droit, puis à droite au feu. D'accord.|Geradeaus, dann an der Ampel rechts. Okay.|Straight on, then right at the lights. OK.|À droite au feu, d'accord.
a|Ensuite, traversez le pont. Le musée est en face de la place.|Dann gehen Sie über die Brücke. Das Museum ist gegenüber dem Platz.|Then cross the bridge. The museum is opposite the square.
me|C'est à combien de minutes à pied ?|Wie viele Minuten zu Fuß sind es?|How many minutes is it on foot?|C'est loin à pied ?
a|À peu près dix minutes.|Ungefähr zehn Minuten.|About ten minutes.
me|Merci beaucoup, madame !|Vielen Dank!|Thank you very much!|Merci, bonne journée !
a|Je vous en prie. Bonne visite !|Gern geschehen. Viel Spaß beim Besuch!|You're welcome. Enjoy your visit!` }
});

lesson("A1", { id: "fr-a1-08", t: TB("Le week-end dernier – Passé composé", "Le week-end dernier – The passé composé"),
  goal: TB("Du kannst erzählen, was du am Wochenende gemacht hast, und danach fragen.", "You can say what you did at the weekend and ask others about it."),
  words: `hier|gestern|yesterday|adv|Hier, j'ai vu un film.|Gestern habe ich einen Film gesehen.|Yesterday I saw a film.
le week-end dernier|letztes Wochenende|last weekend|ph
samedi dernier|letzten Samstag|last Saturday|ph
il y a deux jours|vor zwei Tagen|two days ago|ph
visiter|besichtigen|to visit (a place)|v
rendre visite à|besuchen (Personen)|to visit (people)|v|J'ai rendu visite à mes parents.|Ich habe meine Eltern besucht.|I visited my parents.
sortir|ausgehen|to go out|v
aller|gehen; fahren|to go|v
voir|sehen|to see|v
manger|essen|to eat|v
boire|trinken|to drink|v
faire la fête|feiern|to party|v
le concert|das Konzert|the concert|n
le film|der Film|the film|n
le restaurant|das Restaurant|the restaurant|n
génial|genial; toll|great|adj|C'était génial !|Es war toll!|It was great!
ennuyeux|langweilig|boring|adj
fatigué|müde|tired|adj
c'était|es war|it was|ph
rester|bleiben|to stay|v|Je suis resté à la maison.|Ich bin zu Hause geblieben.|I stayed at home.`,
  say: `Qu'est-ce que tu as fait ce week-end ?|Was hast du am Wochenende gemacht?|What did you do at the weekend?
J'ai rendu visite à ma sœur.|Ich habe meine Schwester besucht.|I visited my sister.
Samedi, nous sommes allés à un concert.|Am Samstag sind wir auf ein Konzert gegangen.|On Saturday we went to a concert.
C'était génial !|Es war toll!|It was great!
Je suis resté à la maison et j'ai lu.|Ich bin zu Hause geblieben und habe gelesen.|I stayed at home and read.
Tu as passé un bon week-end ?|Hattest du ein schönes Wochenende?|Did you have a nice weekend?`,
  gram: [
    ["h", TB("Passé composé: <i>avoir</i> oder <i>être</i> + Partizip", "Passé composé: <i>avoir</i> or <i>être</i> + participle")],
    ["conj", { verbs: ["manger", "aller"], tenses: ["Passé composé"] }],
    ["p", TB("Die meisten Verben mit <b>avoir</b>: j'<b>ai mangé</b>, j'<b>ai vu</b>, j'<b>ai fait</b>. Mit <b>être</b>: Verben der Bewegung (aller, venir, partir, arriver, rester, sortir …) und alle reflexiven Verben – dann passt sich das Partizip an: elle est all<b>ée</b>, nous sommes sorti<b>s</b>.", "Most verbs take <b>avoir</b>: j'<b>ai mangé</b>, j'<b>ai vu</b>, j'<b>ai fait</b>. Verbs of movement (aller, venir, partir, arriver, rester, sortir …) and all reflexive verbs take <b>être</b> – then the participle agrees: elle est all<b>ée</b>, nous sommes sorti<b>s</b>.")],
    ["table", { head: [TB("Infinitiv", "infinitive"), TB("Partizip", "participle")], rows: [["faire", "fait"], ["voir", "vu"], ["boire", "bu"], ["lire", "lu"], ["prendre", "pris"], ["avoir", "eu"], ["être", "été"]], say: 1 }],
    ["tip", TB("Verneinung umschließt nur <i>avoir / être</i>: Je <b>n'ai pas</b> mangé. Je <b>ne suis pas</b> sorti.", "The negative wraps around <i>avoir / être</i> only: Je <b>n'ai pas</b> mangé. Je <b>ne suis pas</b> sorti.")]
  ],
  forms: { verbs: ["faire", "aller", "voir", "manger", "rester", "boire"], tenses: ["Passé composé"] },
  drill: [
    ["Hier, j'___ vu un bon film.", ["ai", "suis", "a"], 0],
    ["Samedi, nous ___ allés au cinéma.", ["sommes", "avons", "êtes"], 0],
    ["Elle est ___ à Paris.", ["allée", "allé", "allés"], 0, TB("être → Partizip passt sich an (weiblich: -e).", "être → the participle agrees (feminine: -e).")],
    ["Tu as ___ tes devoirs ?", ["fait", "faire", "fais"], 0],
    ["Je ___ pas sorti hier soir.", ["ne suis", "n'ai", "ne"], 0],
    ["Le film ? ___ ennuyeux.", ["C'était", "Il était", "C'est été"], 0],
    ["Wir haben Pizza gegessen. → Nous avons ___ une pizza.", "mangé"]
  ],
  talk: { t: TB("Montagmorgen", "Monday morning"), scene: TB("Dein Kollege Antoine fragt dich nach deinem Wochenende.", "Your colleague Antoine asks about your weekend."), who: "Antoine", slots: {}, lines: `a|Salut ! Tu as passé un bon week-end ?|Hi! Hattest du ein schönes Wochenende?|Hi! Did you have a nice weekend?
me|Oui, très bon ! Je suis allé à Strasbourg.|Ja, sehr schön! Ich war in Straßburg.|Yes, very nice! I went to Strasbourg.|Oui, j'ai visité Strasbourg.
a|Super ! Qu'est-ce que tu as fait là-bas ?|Super! Was hast du dort gemacht?|Great! What did you do there?
me|J'ai visité la cathédrale et j'ai mangé une tarte flambée.|Ich habe das Münster besichtigt und Flammkuchen gegessen.|I visited the cathedral and ate a tarte flambée.|J'ai visité la ville et j'ai bien mangé.
a|Miam ! Et c'était comment ?|Lecker! Und wie war's?|Yum! And how was it?
me|C'était génial ! Et toi, tu as fait quoi ?|Es war toll! Und du, was hast du gemacht?|It was great! And you, what did you do?|Génial ! Et toi ?
a|Rien de spécial. Je suis resté à la maison.|Nichts Besonderes. Ich bin zu Hause geblieben.|Nothing special. I stayed at home.
me|C'est bien aussi, un peu de repos !|Das ist auch schön, ein bisschen Ruhe!|That's nice too, a bit of rest!|Ça fait du bien de se reposer.` }
});

/* Français A2 · 1–3 */
lesson("A2", { id: "fr-a2-01", t: TB("Quand j'étais petit – Das Imparfait", "Quand j'étais petit – The imperfect"),
  goal: TB("Du kannst von deiner Kindheit erzählen und beschreiben, wie es früher war.", "You can talk about your childhood and describe how things used to be."),
  words: `l'enfance|die Kindheit (f)|childhood|n|J'ai eu une enfance heureuse.|Ich hatte eine glückliche Kindheit.|I had a happy childhood.
quand j'étais petit|als ich klein war|when I was little|ph
grandir|aufwachsen; wachsen|to grow up|v|J'ai grandi à la campagne.|Ich bin auf dem Land aufgewachsen.|I grew up in the countryside.
la campagne|das Land (nicht Stadt)|the countryside|n
le village|das Dorf|the village|n
l'école primaire|die Grundschule (f)|primary school|n
l'instituteur|der Grundschullehrer (m)|the primary school teacher|n
le jouet|das Spielzeug|the toy|n
jouer|spielen|to play|v
grimper aux arbres|auf Bäume klettern|to climb trees|v
avoir peur de|Angst haben vor|to be afraid of|v|J'avais peur du noir.|Ich hatte Angst im Dunkeln.|I was afraid of the dark.
timide|schüchtern|shy|adj
sage|brav|well-behaved|adj
sévère|streng|strict|adj
les vacances|die Ferien|the holidays|n|Chaque été, nous allions à la mer.|Jeden Sommer fuhren wir ans Meer.|Every summer we went to the seaside.
chaque été|jeden Sommer|every summer|ph
autrefois|früher|in the past|adv
maintenant|jetzt|now|adv
se souvenir de|sich erinnern an|to remember|v|Tu te souviens de ton premier prof ?|Erinnerst du dich an deinen ersten Lehrer?|Do you remember your first teacher?
le chien|der Hund|the dog|n`,
  say: `Quand j'étais petit, j'habitais à la campagne.|Als ich klein war, wohnte ich auf dem Land.|When I was little, I lived in the countryside.
Je jouais au foot tous les jours.|Ich habe jeden Tag Fußball gespielt.|I used to play football every day.
Mes parents étaient assez sévères.|Meine Eltern waren ziemlich streng.|My parents were quite strict.
Nous avions un chien qui s'appelait Rex.|Wir hatten einen Hund, der Rex hieß.|We had a dog called Rex.
Chaque été, on allait chez mes grands-parents.|Jeden Sommer fuhren wir zu meinen Großeltern.|Every summer we went to my grandparents'.
Avant, je n'aimais pas les légumes.|Früher mochte ich kein Gemüse.|I didn't use to like vegetables.`,
  gram: [
    ["h", TB("Imparfait – so war es früher", "Imparfait – how things used to be")],
    ["p", TB("Bildung: Stamm der <b>nous</b>-Form (nous <b>parl</b>ons, nous <b>finiss</b>ons, nous <b>av</b>ons) + <b>-ais, -ais, -ait, -ions, -iez, -aient</b>. Einzige Ausnahme: être → <b>ét</b>ais.", "Formation: stem of the <b>nous</b> form (nous <b>parl</b>ons, nous <b>finiss</b>ons, nous <b>av</b>ons) + <b>-ais, -ais, -ait, -ions, -iez, -aient</b>. Only exception: être → <b>ét</b>ais.")],
    ["conj", { verbs: ["être", "avoir", "jouer"], tenses: ["Imparfait"] }],
    ["p", TB("Das Imparfait beschreibt <b>Gewohnheiten</b> (je jouais tous les jours), <b>Zustände</b> (il faisait beau) und <b>Hintergründe</b> einer Geschichte.", "The imparfait describes <b>habits</b> (je jouais tous les jours), <b>states</b> (il faisait beau) and the <b>background</b> of a story.")],
    ["tip", TB("Die Endungen <b>-ais, -ait, -aient</b> klingen gleich – nur die Schrift unterscheidet sie.", "The endings <b>-ais, -ait, -aient</b> all sound the same – only the spelling differs.")]
  ],
  forms: { verbs: ["être", "avoir", "faire", "aller", "habiter", "jouer"], tenses: ["Imparfait"] },
  drill: [
    ["Quand j'___ petit, j'habitais à Lyon.", ["étais", "était", "suis"], 0],
    ["Nous ___ un grand jardin.", ["avions", "avons eu", "aviez"], 0],
    ["Chaque été, ils ___ à la mer.", ["allaient", "allait", "sont allés"], 0],
    ["Tu ___ au tennis quand tu étais jeune ?", ["jouais", "jouait", "joues"], 0],
    ["Il ___ beau et chaud.", ["faisait", "fait", "faisais"], 0],
    ["J'avais peur ___ chiens.", ["des", "de", "les"], 0],
    ["Wir wohnten in einem Dorf. → Nous ___ dans un village.", "habitions"]
  ],
  talk: { t: TB("Alte Fotos", "Old photos"), scene: TB("Deine Freundin Élodie findet Kinderfotos von dir.", "Your friend Élodie finds childhood photos of you."), who: "Élodie", slots: {}, lines: `a|C'est toi sur la photo ? Tu étais trop mignon !|Bist du das auf dem Foto? Du warst so süß!|Is that you in the photo? You were so cute!
me|Oui, c'est moi chez mes grands-parents. J'avais six ans.|Ja, das bin ich bei meinen Großeltern. Ich war sechs.|Yes, that's me at my grandparents'. I was six.|Oui, j'avais six ans.
a|Tu allais souvent chez eux ?|Warst du oft bei ihnen?|Did you often go to their place?
me|Oui, nous allions chez eux chaque été.|Ja, wir fuhren jeden Sommer zu ihnen.|Yes, we went there every summer.|Chaque été, oui.
a|Et tu étais un enfant sage ?|Und warst du ein braves Kind?|And were you a well-behaved child?
me|Pas vraiment ! Je grimpais tout le temps aux arbres.|Nicht wirklich! Ich bin ständig auf Bäume geklettert.|Not really! I was always climbing trees.|Non, je faisais beaucoup de bêtises.
a|Et maintenant tu as le vertige, non ?|Und jetzt hast du Höhenangst, oder?|And now you're afraid of heights, aren't you?
me|Exactement ! Avant, je n'avais peur de rien.|Genau! Früher hatte ich vor nichts Angst.|Exactly! I used to be afraid of nothing.|Oui ! Avant, je n'avais pas peur.` }
});

lesson("A2", { id: "fr-a2-02", t: TB("Qu'est-ce qui s'est passé ? – Passé composé oder Imparfait", "Qu'est-ce qui s'est passé ? – Passé composé or imparfait"),
  goal: TB("Du kannst eine kleine Geschichte erzählen – mit Hintergrund (Imparfait) und Ereignissen (Passé composé).", "You can tell a short story – with background (imparfait) and events (passé composé)."),
  words: `se passer|passieren|to happen|v|Qu'est-ce qui s'est passé ?|Was ist passiert?|What happened?
l'accident|der Unfall (m)|the accident|n
tomber|fallen; hinfallen|to fall|v|Je suis tombé dans la rue.|Ich bin auf der Straße hingefallen.|I fell over in the street.
se casser|sich brechen; kaputtgehen|to break|v|Il s'est cassé la jambe.|Er hat sich das Bein gebrochen.|He broke his leg.
perdre|verlieren|to lose|v
voler|stehlen; fliegen|to steal; to fly|v|On m'a volé mon portefeuille.|Man hat mir mein Portemonnaie gestohlen.|My wallet was stolen.
le portefeuille|das Portemonnaie|the wallet|n
tout à coup|plötzlich|suddenly|ph|Tout à coup, il a commencé à pleuvoir.|Plötzlich fing es an zu regnen.|Suddenly it started to rain.
pendant que|während|while|x
heureusement|zum Glück|fortunately|adv
malheureusement|leider|unfortunately|adv
finalement|schließlich; am Ende|in the end|adv
la police|die Polizei|the police|n
le témoin|der Zeuge|the witness|n
l'écran|der Bildschirm (m)|the screen|n
pleuvoir|regnen|to rain|v
attendre|warten|to wait|v
rencontrer|treffen; kennenlernen|to meet|v
la honte|die Schande; die Peinlichkeit|shame|n|J'avais trop honte !|Das war mir so peinlich!|I was so embarrassed!`,
  say: `Qu'est-ce qui s'est passé ?|Was ist passiert?|What happened?
Il pleuvait quand je suis sorti.|Es regnete, als ich rausging.|It was raining when I went out.
Pendant que j'attendais le bus, j'ai rencontré un vieil ami.|Während ich auf den Bus wartete, traf ich einen alten Freund.|While I was waiting for the bus, I met an old friend.
Tout à coup, mon téléphone est tombé.|Plötzlich ist mir das Handy runtergefallen.|Suddenly my phone fell.
Heureusement, personne n'a été blessé.|Zum Glück wurde niemand verletzt.|Fortunately nobody was hurt.
C'était trop la honte !|Das war so peinlich!|It was so embarrassing!`,
  gram: [
    ["h", TB("Imparfait oder Passé composé?", "Imparfait or passé composé?")],
    ["table", { head: [TB("Imparfait", "imparfait"), TB("Passé composé", "passé composé")], rows: [[TB("Hintergrund, Beschreibung", "background, description"), TB("Ereignis, Handlung", "event, action")], ["Il faisait froid.", "Je suis sorti."], [TB("lief gerade", "was in progress"), TB("unterbricht", "interrupts")], ["Je dormais …", "… quand le téléphone a sonné."], [TB("Gewohnheit", "habit"), TB("einmalig", "one-off")], ["Je prenais le bus.", "Ce jour-là, j'ai pris un taxi."]], say: 0 }],
    ["ex", [["Il était huit heures et il pleuvait.", "Es war acht Uhr und es regnete.", "It was eight o'clock and it was raining."], ["Je marchais dans la rue quand j'ai vu l'accident.", "Ich ging die Straße entlang, als ich den Unfall sah.", "I was walking down the street when I saw the accident."]]],
    ["tip", TB("Merkhilfe: Imparfait = die <b>Kulisse</b> im Theater, Passé composé = die <b>Handlung</b> auf der Bühne.", "Memory aid: imparfait = the <b>scenery</b> in a theatre, passé composé = the <b>action</b> on stage.")]
  ],
  forms: { verbs: ["être", "avoir", "faire", "tomber", "voir"], tenses: ["Imparfait", "Passé composé"] },
  drill: [
    ["Il ___ quand je suis sorti.", ["pleuvait", "a plu", "pleut"], 0],
    ["Je dormais quand le téléphone ___.", ["a sonné", "sonnait", "sonne"], 0],
    ["Pendant que nous ___ , il a commencé à neiger.", ["mangions", "avons mangé", "mangeons"], 0],
    ["Tout à coup, elle ___ tombée.", ["est", "a", "était"], 0],
    ["Quand j'étais jeune, je ___ le bus pour aller à l'école.", ["prenais", "ai pris", "prends"], 0],
    ["Il s'est cassé ___ bras.", ["le", "son", "sa"], 0, TB("Bei Körperteilen mit reflexivem Verb: Artikel statt Possessiv.", "Body parts with a reflexive verb: article instead of possessive.")],
    ["Es war kalt. → Il ___ froid.", "faisait"]
  ],
  talk: { t: TB("Ein Missgeschick", "A little mishap"), scene: TB("Dein Freund Théo sieht dein kaputtes Handy.", "Your friend Théo sees your broken phone."), who: "Théo", slots: {}, lines: `a|Oh là là, ton téléphone ! Qu'est-ce qui s'est passé ?|Oje, dein Handy! Was ist passiert?|Oh dear, your phone! What happened?
me|Je faisais du vélo et il est tombé de ma poche.|Ich bin Rad gefahren und es ist mir aus der Tasche gefallen.|I was cycling and it fell out of my pocket.|Il est tombé pendant que je faisais du vélo.
a|Tu roulais vite ?|Bist du schnell gefahren?|Were you going fast?
me|Non, mais tout à coup un chien a traversé la rue.|Nein, aber plötzlich ist ein Hund über die Straße gelaufen.|No, but suddenly a dog ran across the road.|Non, mais un chien est arrivé tout à coup.
a|Et toi, tu es tombé aussi ?|Und du, bist du auch gestürzt?|And did you fall too?
me|Oui, mais heureusement je n'ai rien.|Ja, aber zum Glück ist mir nichts passiert.|Yes, but luckily I'm fine.|Oui, mais je ne suis pas blessé.
a|Ouf ! Et le téléphone marche encore ?|Puh! Und funktioniert das Handy noch?|Phew! And does the phone still work?
me|Oui, mais l'écran est cassé.|Ja, aber der Bildschirm ist kaputt.|Yes, but the screen is broken.|Il marche, mais l'écran est cassé.` }
});

lesson("A2", { id: "fr-a2-03", t: TB("Projets – Zukunft und Wetter", "Projets – The future and the weather"),
  goal: TB("Du kannst über Pläne und Vorhersagen sprechen – und über das Wetter.", "You can talk about plans and predictions – and about the weather."),
  words: `le projet|der Plan; das Projekt|the plan; the project|n|Tu as des projets pour l'été ?|Hast du Pläne für den Sommer?|Do you have plans for the summer?
aller + infinitif|gleich / bald etwas tun|to be going to|ph|Je vais partir en Bretagne.|Ich fahre in die Bretagne.|I'm going to go to Brittany.
réserver|reservieren; buchen|to book|v
le voyage|die Reise|the trip|n
la météo|der Wetterbericht|the weather forecast|n|D'après la météo, il va pleuvoir.|Laut Wetterbericht wird es regnen.|According to the forecast, it's going to rain.
il fait beau|es ist schönes Wetter|the weather's nice|ph
il fait mauvais|das Wetter ist schlecht|the weather's bad|ph
il fait chaud|es ist warm / heiß|it's hot|ph
il fait froid|es ist kalt|it's cold|ph
il pleut|es regnet|it's raining|ph
il neige|es schneit|it's snowing|ph
le soleil|die Sonne|the sun|n|Il y a du soleil.|Die Sonne scheint.|It's sunny.
le vent|der Wind|the wind|n
le nuage|die Wolke|the cloud|n
l'orage|das Gewitter (m)|the storm|n
le degré|das Grad|the degree|n
demain|morgen|tomorrow|adv
la semaine prochaine|nächste Woche|next week|ph
l'année prochaine|nächstes Jahr (f)|next year|ph
le parapluie|der Regenschirm|the umbrella|n`,
  say: `Qu'est-ce que tu vas faire ce week-end ?|Was machst du dieses Wochenende?|What are you going to do this weekend?
Je vais voir mes amis à Nantes.|Ich treffe meine Freunde in Nantes.|I'm going to see my friends in Nantes.
L'année prochaine, j'apprendrai l'espagnol.|Nächstes Jahr lerne ich Spanisch.|Next year I'll learn Spanish.
Quel temps fait-il ?|Wie ist das Wetter?|What's the weather like?
Il fait beau et il fait vingt-cinq degrés.|Es ist schön und fünfundzwanzig Grad warm.|It's nice and twenty-five degrees.
Prends ton parapluie, il va pleuvoir.|Nimm deinen Regenschirm, es wird regnen.|Take your umbrella, it's going to rain.`,
  gram: [
    ["h", TB("Zwei Wege in die Zukunft", "Two ways to talk about the future")],
    ["table", { head: [TB("Form", "form"), TB("wofür?", "use"), TB("Beispiel", "example")], rows: [["futur proche: aller + Infinitiv", TB("nahe Zukunft, feste Absicht – sehr häufig", "near future, intention – very common"), "Je vais partir demain."], ["futur simple", TB("fernere Zukunft, Vorhersagen, Versprechen", "more distant future, predictions, promises"), "Un jour, j'habiterai en France."]], say: 2 }],
    ["conj", { verbs: ["aller", "faire"], tenses: ["Futur simple"] }],
    ["p", TB("Futur simple: Infinitiv + <b>-ai, -as, -a, -ons, -ez, -ont</b> (parler<b>ai</b>, finir<b>as</b>; -re verliert das e: prendr<b>a</b>). Unregelmäßige Stämme: <b>ser-</b> (être), <b>aur-</b> (avoir), <b>ir-</b> (aller), <b>fer-</b> (faire), <b>viendr-</b> (venir), <b>pourr-</b> (pouvoir).", "Futur simple: infinitive + <b>-ai, -as, -a, -ons, -ez, -ont</b> (parler<b>ai</b>, finir<b>as</b>; -re drops the e: prendr<b>a</b>). Irregular stems: <b>ser-</b> (être), <b>aur-</b> (avoir), <b>ir-</b> (aller), <b>fer-</b> (faire), <b>viendr-</b> (venir), <b>pourr-</b> (pouvoir).")],
    ["tip", TB("Wetter fast immer mit <b>il fait</b>: il fait beau, il fait chaud, il fait 20 degrés. Aber: <b>il pleut, il neige</b>.", "Weather almost always uses <b>il fait</b>: il fait beau, il fait chaud, il fait 20 degrés. But: <b>il pleut, il neige</b>.")]
  ],
  forms: { verbs: ["être", "avoir", "aller", "faire", "venir", "parler"], tenses: ["Futur simple"] },
  drill: [
    ["Demain, je ___ voir mes parents.", ["vais", "vas", "va"], 0],
    ["Un jour, nous ___ en Provence.", ["habiterons", "habitons", "allons habiter de"], 0],
    ["Quel temps ___-il ?", ["fait", "est", "a"], 0],
    ["Aujourd'hui, il ___ très chaud.", ["fait", "est", "a"], 0],
    ["L'année prochaine, tu ___ 30 ans.", ["auras", "seras", "vas avoir de"], 0],
    ["Regarde les nuages, il va ___.", ["pleuvoir", "pleut", "plu"], 0],
    ["Ich werde morgen reisen. → Je ___ demain. (futur simple, partir)", "partirai"]
  ],
  talk: { t: TB("Pläne für die Ferien", "Holiday plans"), scene: TB("Deine Kollegin Sarah fragt dich nach deinen Sommerplänen.", "Your colleague Sarah asks about your summer plans."), who: "Sarah", slots: {}, lines: `a|Tu as des projets pour les vacances ?|Hast du schon Pläne für die Ferien?|Do you have plans for the holidays?
me|Oui, je vais partir en Bretagne avec des amis.|Ja, ich fahre mit Freunden in die Bretagne.|Yes, I'm going to Brittany with some friends.|Oui, je vais en Bretagne.
a|Super ! Qu'est-ce que vous allez faire là-bas ?|Super! Was habt ihr dort vor?|Great! What are you going to do there?
me|On va faire du vélo et visiter Saint-Malo.|Wir werden Rad fahren und Saint-Malo besichtigen.|We're going to cycle and visit Saint-Malo.|Du vélo et des visites.
a|Mais attention, en Bretagne il pleut souvent !|Aber Vorsicht, in der Bretagne regnet es oft!|But careful, it often rains in Brittany!
me|Je sais. D'après la météo, il fera beau la première semaine.|Ich weiß. Laut Wetterbericht wird es in der ersten Woche schön.|I know. According to the forecast, it'll be nice the first week.|La météo dit qu'il fera beau.
a|Tant mieux ! Tu partiras quand ?|Umso besser! Wann fährst du los?|All the better! When will you leave?
me|Je partirai le premier août. Je t'enverrai des photos !|Ich fahre am ersten August los. Ich schicke dir Fotos!|I'll leave on the first of August. I'll send you photos!|Le premier août. Je t'envoie des photos !` }
});

/* Français A2 · 4–6 */
lesson("A2", { id: "fr-a2-04", t: TB("Chez le médecin – Körper, Imperativ, <i>il faut</i>", "Chez le médecin – The body, the imperative, <i>il faut</i>"),
  goal: TB("Du kannst Beschwerden beschreiben und Ratschläge und Anweisungen verstehen.", "You can describe symptoms and understand advice and instructions."),
  words: `le médecin|der Arzt; die Ärztin|the doctor|n
le rendez-vous|der Termin|the appointment|n|Je voudrais prendre rendez-vous.|Ich möchte einen Termin vereinbaren.|I'd like to make an appointment.
la tête|der Kopf|the head|n|J'ai mal à la tête.|Ich habe Kopfschmerzen.|I have a headache.
la gorge|der Hals|the throat|n
le dos|der Rücken|the back|n
le ventre|der Bauch|the stomach|n
le bras|der Arm|the arm|n
la jambe|das Bein|the leg|n
le genou|das Knie|the knee|n
avoir mal à|Schmerzen haben in|to have a pain in|v
la fièvre|das Fieber|the fever|n|J'ai de la fièvre.|Ich habe Fieber.|I have a temperature.
le rhume|die Erkältung; der Schnupfen|the cold|n
la grippe|die Grippe|the flu|n
tousser|husten|to cough|v
l'ordonnance|das Rezept (f)|the prescription|n
le médicament|das Medikament|the medicine|n|Prenez ce médicament trois fois par jour.|Nehmen Sie dieses Medikament dreimal täglich.|Take this medicine three times a day.
la pharmacie|die Apotheke|the pharmacy|n
se reposer|sich ausruhen|to rest|v
il faut|man muss|you have to; it's necessary|ph|Il faut boire beaucoup d'eau.|Man muss viel Wasser trinken.|You need to drink lots of water.
guérir|gesund werden; heilen|to get better; to heal|v`,
  say: `Qu'est-ce qui ne va pas ?|Was fehlt Ihnen?|What's the matter?
J'ai mal à la gorge depuis trois jours.|Ich habe seit drei Tagen Halsschmerzen.|I've had a sore throat for three days.
J'ai mal au dos quand je m'assois.|Mir tut der Rücken weh, wenn ich sitze.|My back hurts when I sit down.
Reposez-vous et buvez beaucoup.|Ruhen Sie sich aus und trinken Sie viel.|Rest and drink plenty.
Il ne faut pas faire de sport cette semaine.|Diese Woche dürfen Sie keinen Sport machen.|You mustn't do any sport this week.
Bon rétablissement !|Gute Besserung!|Get well soon!`,
  gram: [
    ["h", TB("<i>avoir mal à</i> + Körperteil", "<i>avoir mal à</i> + body part")],
    ["p", TB("j'ai mal <b>au</b> dos (à + le), <b>à la</b> tête, <b>à l'</b>épaule, <b>aux</b> pieds (à + les).", "j'ai mal <b>au</b> dos (à + le), <b>à la</b> tête, <b>à l'</b>épaule, <b>aux</b> pieds (à + les).")],
    ["h", TB("Imperativ", "The imperative")],
    ["conj", { verbs: ["prendre", "boire"], tenses: ["Impératif"] }],
    ["p", TB("Drei Formen ohne Subjekt: <b>tu</b> (prends, bois), <b>nous</b> (prenons), <b>vous</b> (prenez). Bei -er-Verben fällt in der tu-Form das <b>s</b> weg: Mange ! Reflexiv: Repose-<b>toi</b> ! Reposez-<b>vous</b> !", "Three forms without a subject: <b>tu</b> (prends, bois), <b>nous</b> (prenons), <b>vous</b> (prenez). With -er verbs the tu form drops the <b>s</b>: Mange ! Reflexive: Repose-<b>toi</b> ! Reposez-<b>vous</b> !")],
    ["tip", TB("<b>Il faut</b> + Infinitiv = man muss: Il faut se reposer. Verneint <b>il ne faut pas</b> = man darf nicht!", "<b>Il faut</b> + infinitive = you have to: Il faut se reposer. Negative <b>il ne faut pas</b> = you mustn't!")]
  ],
  forms: { verbs: ["prendre", "boire", "faire", "aller", "manger"], tenses: ["Impératif"] },
  drill: [
    ["J'ai mal ___ tête.", ["à la", "au", "à le"], 0],
    ["J'ai mal ___ dos.", ["au", "à la", "du"], 0],
    ["___ ce médicament deux fois par jour. (vous, prendre)", ["Prenez", "Prendre", "Vous prenez"], 0],
    ["___ beaucoup d'eau ! (tu, boire)", ["Bois", "Boit", "Buvez-tu"], 0],
    ["Repose-___ un peu !", ["toi", "te", "tu"], 0],
    ["Il ne faut pas ___ de café le soir.", ["boire", "bois", "buvez"], 0],
    ["Iss mehr Obst! → ___ plus de fruits !", "Mange"]
  ],
  talk: { t: TB("Beim Hausarzt", "At the GP's"), scene: TB("Du bist erkältet und gehst in Paris zum Arzt.", "You've got a cold and see a doctor in Paris."), who: "Docteur Martin", slots: {}, lines: `a|Bonjour, asseyez-vous. Qu'est-ce qui ne va pas ?|Guten Tag, setzen Sie sich. Was fehlt Ihnen?|Hello, sit down. What's the matter?
me|J'ai mal à la gorge et à la tête depuis trois jours.|Ich habe seit drei Tagen Hals- und Kopfschmerzen.|I've had a sore throat and a headache for three days.|J'ai mal à la gorge et à la tête.
a|Vous avez de la fièvre ?|Haben Sie Fieber?|Do you have a temperature?
me|Oui, un peu. Et je tousse beaucoup.|Ja, ein bisschen. Und ich huste viel.|Yes, a little. And I'm coughing a lot.|Un peu, oui. Je tousse aussi.
a|C'est une grippe. Reposez-vous et buvez beaucoup d'eau.|Das ist eine Grippe. Ruhen Sie sich aus und trinken Sie viel Wasser.|It's the flu. Rest and drink lots of water.
me|Il me faut une ordonnance ?|Brauche ich ein Rezept?|Do I need a prescription?|J'ai besoin d'une ordonnance ?
a|Oui, voilà. Prenez ce médicament trois fois par jour.|Ja, bitte. Nehmen Sie dieses Medikament dreimal täglich.|Yes, here you are. Take this medicine three times a day.
me|D'accord. Merci, docteur. Au revoir !|In Ordnung. Danke, Herr Doktor. Auf Wiedersehen!|OK. Thank you, doctor. Goodbye!|Merci beaucoup, au revoir !` }
});

lesson("A2", { id: "fr-a2-05", t: TB("Chercher un appartement – Objektpronomen", "Chercher un appartement – Object pronouns"),
  goal: TB("Du kannst eine Wohnung suchen, besichtigen und mit Pronomen kürzer und natürlicher sprechen.", "You can look for and view a flat and use pronouns to sound shorter and more natural."),
  words: `l'appartement|die Wohnung (m)|the flat|n|Je cherche un appartement au centre.|Ich suche eine Wohnung im Zentrum.|I'm looking for a flat in the centre.
le loyer|die Miete|the rent|n|Le loyer est de 800 euros par mois.|Die Miete beträgt 800 Euro im Monat.|The rent is 800 euros a month.
les charges|die Nebenkosten|the service charges|n
la caution|die Kaution|the deposit|n
le propriétaire|der Vermieter; der Eigentümer|the landlord; the owner|n
la colocation|die WG|the flatshare|n
le colocataire|der Mitbewohner|the flatmate|n
la pièce|das Zimmer (allgemein)|the room|n|Un trois-pièces avec balcon.|Eine Dreizimmerwohnung mit Balkon.|A three-room flat with a balcony.
la chambre|das Schlafzimmer|the bedroom|n
la cuisine|die Küche|the kitchen|n
la salle de bains|das Badezimmer|the bathroom|n
le balcon|der Balkon|the balcony|n
l'étage|das Stockwerk (m)|the floor|n
l'ascenseur|der Aufzug (m)|the lift|n
meublé|möbliert|furnished|adj
lumineux|hell|bright|adj
calme|ruhig|quiet|adj
bruyant|laut|noisy|adj
visiter|besichtigen|to view; to visit|v
emménager|einziehen|to move in|v`,
  say: `L'appartement est encore libre ?|Ist die Wohnung noch frei?|Is the flat still available?
Je peux le visiter quand ?|Wann kann ich sie besichtigen?|When can I view it?
Les charges sont comprises ?|Sind die Nebenkosten inklusive?|Are the service charges included?
La cuisine ? Je la trouve un peu petite.|Die Küche? Ich finde sie ein bisschen klein.|The kitchen? I find it a bit small.
Je vous appelle demain.|Ich rufe Sie morgen an.|I'll call you tomorrow.
Je peux emménager quand ?|Wann kann ich einziehen?|When can I move in?`,
  gram: [
    ["h", TB("Direkte und indirekte Objektpronomen", "Direct and indirect object pronouns")],
    ["table", { head: [TB("Person", "person"), TB("direkt (wen?)", "direct"), TB("indirekt (wem?)", "indirect")], rows: [["je", "me", "me"], ["tu", "te", "te"], ["il / elle", "le / la", "lui"], ["nous", "nous", "nous"], ["vous", "vous", "vous"], ["ils / elles", "les", "leur"]], say: 0 }],
    ["p", TB("Das Pronomen steht <b>vor dem konjugierten Verb</b>: Je <b>la</b> visite. Je <b>lui</b> téléphone. Im Passé composé vor <i>avoir</i>: Je <b>l'</b>ai vue. Mit Infinitiv davor: Je vais <b>le</b> visiter.", "The pronoun goes <b>before the conjugated verb</b>: Je <b>la</b> visite. Je <b>lui</b> téléphone. In the passé composé before <i>avoir</i>: Je <b>l'</b>ai vue. With an infinitive, before it: Je vais <b>le</b> visiter.")],
    ["tip", TB("Verben mit <b>à</b> (téléphoner à, parler à, demander à) brauchen <b>lui / leur</b>: Je téléphone <b>au</b> propriétaire → Je <b>lui</b> téléphone.", "Verbs with <b>à</b> (téléphoner à, parler à, demander à) take <b>lui / leur</b>: Je téléphone <b>au</b> propriétaire → Je <b>lui</b> téléphone.")]
  ],
  drill: [
    ["L'appartement ? Je ___ visite demain.", ["le", "la", "lui"], 0],
    ["La cuisine ? Je ___ trouve trop petite.", ["la", "le", "lui"], 0],
    ["Le propriétaire ? Je ___ téléphone ce soir.", ["lui", "le", "leur"], 0],
    ["Mes parents ? Je ___ parle souvent.", ["leur", "les", "lui"], 0],
    ["Les clés ? Je ___ ai oubliées !", ["les", "leur", "la"], 0],
    ["Je vais ___ appeler demain. (Sie)", ["vous", "lui", "le"], 0],
    ["Die Wohnung? Ich nehme sie! → L'appartement ? Je ___ prends !", "le"]
  ],
  talk: { t: TB("Wohnungsbesichtigung", "Viewing a flat"), scene: TB("Du besichtigst mit dem Vermieter Monsieur Dubois eine Wohnung in Lyon.", "You're viewing a flat in Lyon with the landlord, Monsieur Dubois."), who: "M. Dubois", slots: {}, lines: `a|Bonjour ! Entrez. Voici le salon.|Guten Tag! Kommen Sie rein. Hier ist das Wohnzimmer.|Hello! Come in. This is the living room.
me|Il est très lumineux ! L'appartement est meublé ?|Es ist sehr hell! Ist die Wohnung möbliert?|It's very bright! Is the flat furnished?|C'est lumineux. C'est meublé ?
a|Oui, tout est compris. Voilà la cuisine.|Ja, alles inklusive. Hier ist die Küche.|Yes, everything's included. Here's the kitchen.
me|Elle est petite, mais je la trouve pratique.|Sie ist klein, aber ich finde sie praktisch.|It's small, but I find it practical.|Elle est un peu petite, mais ça va.
a|Et la chambre donne sur la cour, c'est très calme.|Und das Schlafzimmer geht zum Hof, es ist sehr ruhig.|And the bedroom looks onto the courtyard, it's very quiet.
me|Parfait. Le loyer, c'est combien ? Les charges sont comprises ?|Perfekt. Wie hoch ist die Miete? Sind die Nebenkosten inklusive?|Perfect. How much is the rent? Are the service charges included?|Combien coûte le loyer, charges comprises ?
a|Huit cent cinquante euros, charges comprises.|Achthundertfünfzig Euro, inklusive Nebenkosten.|Eight hundred and fifty euros including service charges.
me|D'accord. Je réfléchis et je vous appelle demain.|In Ordnung. Ich überlege es mir und rufe Sie morgen an.|OK. I'll think about it and call you tomorrow.|Je vous rappelle demain, d'accord ?` }
});

lesson("A2", { id: "fr-a2-06", t: TB("Je voudrais… – Der Conditionnel", "Je voudrais… – The conditional"),
  goal: TB("Du kannst höflich bitten, Wünsche äußern und Ratschläge geben.", "You can make polite requests, express wishes and give advice."),
  words: `le souhait|der Wunsch|the wish|n
le rêve|der Traum|the dream|n|Mon rêve, ce serait de vivre au bord de la mer.|Mein Traum wäre, am Meer zu leben.|My dream would be to live by the sea.
le conseil|der Rat|the advice|n
conseiller|raten|to advise|v
le service|der Gefallen|the favour|n|Tu pourrais me rendre un service ?|Könntest du mir einen Gefallen tun?|Could you do me a favour?
aimable|freundlich|kind|adj
avec plaisir|gern|with pleasure|ph
à ta place|an deiner Stelle|in your place|ph|À ta place, je parlerais au chef.|An deiner Stelle würde ich mit dem Chef reden.|If I were you, I'd talk to the boss.
gagner au loto|im Lotto gewinnen|to win the lottery|v
faire le tour du monde|eine Weltreise machen|to travel around the world|v
arrêter de fumer|mit dem Rauchen aufhören|to stop smoking|v
stressé|gestresst|stressed|adj
prendre une pause|eine Pause machen|to take a break|v
ouvrir|öffnen; eröffnen|to open|v
riche|reich|rich|adj
devoir|müssen; sollen|to have to; should|v|Tu devrais dormir plus.|Du solltest mehr schlafen.|You should sleep more.
pouvoir|können; dürfen|can; could|v
vouloir|wollen|to want|v
aimer bien|gern mögen|to quite like|v|J'aimerais bien voyager plus.|Ich würde gern mehr reisen.|I'd like to travel more.
volontiers|gern|gladly|adv`,
  say: `Tu pourrais m'aider ?|Könntest du mir helfen?|Could you help me?
Vous pourriez fermer la fenêtre, s'il vous plaît ?|Könnten Sie bitte das Fenster schließen?|Could you close the window, please?
J'aimerais faire le tour du monde.|Ich würde gern eine Weltreise machen.|I'd love to travel around the world.
À ta place, j'accepterais l'offre.|An deiner Stelle würde ich das Angebot annehmen.|If I were you, I'd accept the offer.
Tu devrais te reposer.|Du solltest dich ausruhen.|You should rest.
Ce serait génial !|Das wäre toll!|That would be great!`,
  gram: [
    ["h", TB("Conditionnel présent", "Present conditional")],
    ["p", TB("Futur-Stamm + Imparfait-Endungen: <b>-ais, -ais, -ait, -ions, -iez, -aient</b>: parler<b>ais</b>, voudr<b>ais</b>, pourr<b>ais</b>, devr<b>ais</b>, ser<b>ais</b>, aur<b>ais</b>, fer<b>ais</b>.", "Future stem + imperfect endings: <b>-ais, -ais, -ait, -ions, -iez, -aient</b>: parler<b>ais</b>, voudr<b>ais</b>, pourr<b>ais</b>, devr<b>ais</b>, ser<b>ais</b>, aur<b>ais</b>, fer<b>ais</b>.")],
    ["conj", { verbs: ["vouloir", "pouvoir", "devoir"], tenses: ["Conditionnel présent"] }],
    ["table", { head: [TB("wofür?", "use"), TB("Beispiel", "example")], rows: [[TB("höfliche Bitte", "polite request"), "Vous pourriez m'aider ?"], [TB("Wunsch", "wish"), "Je voudrais un café. J'aimerais voyager."], [TB("Rat", "advice"), "Tu devrais dormir plus."], [TB("Vorschlag", "suggestion"), "On pourrait aller au cinéma."]], say: 1 }],
    ["tip", TB("<b>Je voudrais</b> ist die Standardform im Geschäft – <b>je veux</b> klingt fordernd.", "<b>Je voudrais</b> is the standard form in shops – <b>je veux</b> sounds demanding.")]
  ],
  forms: { verbs: ["être", "avoir", "faire", "aller", "aimer", "pouvoir"], tenses: ["Conditionnel présent"] },
  drill: [
    ["Je ___ un café, s'il vous plaît.", ["voudrais", "veux bien que", "voudrai"], 0],
    ["Vous ___ m'aider, s'il vous plaît ?", ["pourriez", "pourrez", "pouvez de"], 0],
    ["Tu es fatigué : tu ___ dormir plus.", ["devrais", "devras", "dois de"], 0],
    ["Avec un million d'euros, nous ___ le tour du monde.", ["ferions", "ferons", "faisons"], 0],
    ["Ce ___ génial !", ["serait", "sera", "était"], 0],
    ["À ta place, je ___ à mon chef. (parler)", ["parlerais", "parlerai", "parlais"], 0],
    ["Ich würde gern reisen. → J'___ voyager.", "aimerais"]
  ],
  talk: { t: TB("Tagträume", "Daydreams"), scene: TB("Ein entspannter Abend mit deiner Freundin Julie. Ihr träumt ein bisschen.", "A relaxed evening with your friend Julie. You're daydreaming a little."), who: "Julie", slots: {}, lines: `a|Quelle semaine ! J'aimerais partir demain sur une île.|Was für eine Woche! Ich würde gern morgen auf eine Insel fliegen.|What a week! I'd love to go to an island tomorrow.
me|Moi aussi ! Tu irais où ?|Ich auch! Wohin würdest du fliegen?|Me too! Where would you go?|Moi aussi. Où est-ce que tu irais ?
a|En Martinique, sans téléphone. Et toi, qu'est-ce que tu ferais avec un mois de libre ?|Nach Martinique, ohne Handy. Und du, was würdest du mit einem freien Monat machen?|To Martinique, without a phone. And you, what would you do with a month off?
me|Je ferais le tour de l'Italie en train.|Ich würde mit dem Zug durch Italien reisen.|I'd travel around Italy by train.|Je voyagerais en Italie.
a|Super idée ! Moi, j'ouvrirais un petit café à la plage.|Tolle Idee! Ich würde ein kleines Café am Strand eröffnen.|Great idea! I'd open a little café on the beach.
me|Ce serait génial ! Je pourrais travailler avec toi ?|Das wäre toll! Könnte ich mit dir arbeiten?|That would be great! Could I work with you?|Génial ! Je pourrais t'aider ?
a|Bien sûr ! Mais tu devrais apprendre à faire des cocktails.|Klar! Aber du müsstest lernen, Cocktails zu machen.|Of course! But you'd have to learn to make cocktails.
me|Avec plaisir ! J'apprendrais tout de suite.|Sehr gern! Das würde ich sofort lernen.|Gladly! I'd learn straight away.|Volontiers !` }
});

/* Français B1 · 1–4 */
lesson("B1", { id: "fr-b1-01", t: TB("Il faut que… – Der Subjonctif", "Il faut que… – The subjunctive"),
  goal: TB("Du kannst Notwendigkeit, Wünsche, Gefühle und Zweifel ausdrücken – mit dem Subjonctif.", "You can express necessity, wishes, feelings and doubt – with the subjunctive."),
  words: `il faut que|es ist nötig, dass; man muss|it's necessary that|ph|Il faut que tu viennes.|Du musst kommen.|You have to come.
vouloir que|wollen, dass|to want (someone) to|v|Je veux que tu sois heureux.|Ich will, dass du glücklich bist.|I want you to be happy.
souhaiter|wünschen|to wish|v
espérer|hoffen|to hope|v|J'espère que tu vas bien.|Ich hoffe, es geht dir gut.|I hope you're well.
avoir peur que|befürchten, dass|to be afraid that|v
être content que|sich freuen, dass|to be glad that|v|Je suis contente que tu sois là.|Ich freue mich, dass du da bist.|I'm glad you're here.
douter que|bezweifeln, dass|to doubt that|v
il est important que|es ist wichtig, dass|it's important that|ph
il vaut mieux que|es ist besser, wenn|it's better if|ph
bien que|obwohl|although|x
pour que|damit|so that|x
avant que|bevor|before|x
la nouvelle|die Neuigkeit|the news|n
la fête de départ|die Abschiedsfeier|the leaving party|n
la chance|das Glück|luck|n|Bonne chance !|Viel Glück!|Good luck!
le poste|die Stelle|the job; the position|n
déménager|umziehen|to move (house)|v
se débrouiller|zurechtkommen|to manage; to cope|v|Tu vas bien te débrouiller.|Du wirst gut zurechtkommen.|You'll manage fine.
féliciter|gratulieren|to congratulate|v
félicitations|Glückwunsch|congratulations|ph`,
  say: `Il faut que je parte maintenant.|Ich muss jetzt gehen.|I have to leave now.
Je veux que tu viennes à ma fête.|Ich möchte, dass du zu meiner Party kommst.|I want you to come to my party.
Je suis content que tu sois là.|Ich freue mich, dass du da bist.|I'm glad you're here.
Je ne pense pas que ce soit difficile.|Ich glaube nicht, dass es schwierig ist.|I don't think it's difficult.
Je pense que tu as raison.|Ich glaube, du hast recht.|I think you're right.
Il vaut mieux qu'on en parle demain.|Es ist besser, wenn wir morgen darüber reden.|It's better if we talk about it tomorrow.`,
  gram: [
    ["h", TB("Subjonctif présent – Bildung", "Present subjunctive – formation")],
    ["p", TB("Stamm der <b>ils</b>-Form im Präsens (ils <b>parl</b>ent, ils <b>finiss</b>ent, ils <b>prenn</b>ent) + <b>-e, -es, -e, -ions, -iez, -ent</b>. Unregelmäßig: être → <b>sois</b>, avoir → <b>aie</b>, aller → <b>aille</b>, faire → <b>fasse</b>, pouvoir → <b>puisse</b>, savoir → <b>sache</b>.", "Stem of the <b>ils</b> form in the present (ils <b>parl</b>ent, ils <b>finiss</b>ent, ils <b>prenn</b>ent) + <b>-e, -es, -e, -ions, -iez, -ent</b>. Irregular: être → <b>sois</b>, avoir → <b>aie</b>, aller → <b>aille</b>, faire → <b>fasse</b>, pouvoir → <b>puisse</b>, savoir → <b>sache</b>.")],
    ["conj", { verbs: ["être", "avoir", "faire"], tenses: ["Subjonctif présent"] }],
    ["table", { head: [TB("Auslöser", "trigger"), TB("Beispiel", "example")], rows: [[TB("Notwendigkeit: il faut que", "necessity: il faut que"), "Il faut que tu partes."], [TB("Wunsch: vouloir que, souhaiter que", "wish: vouloir que, souhaiter que"), "Je veux que tu restes."], [TB("Gefühl: être content que, avoir peur que", "feeling: être content que, avoir peur que"), "J'ai peur qu'il soit malade."], [TB("Zweifel: je ne pense pas que", "doubt: je ne pense pas que"), "Je ne pense pas qu'il vienne."], [TB("Konjunktionen: pour que, bien que", "conjunctions: pour que, bien que"), "Je t'explique pour que tu comprennes."]], say: 1 }],
    ["tip", TB("<b>Je pense que / j'espère que</b> + Indikativ! Erst verneint (<b>je ne pense pas que</b>) kommt der Subjonctif. Und: gleiche Person → Infinitiv: Je veux <b>partir</b> / Je veux que <b>tu partes</b>.", "<b>Je pense que / j'espère que</b> + indicative! Only the negative (<b>je ne pense pas que</b>) takes the subjunctive. And: same person → infinitive: Je veux <b>partir</b> / Je veux que <b>tu partes</b>.")]
  ],
  forms: { verbs: ["être", "avoir", "aller", "faire", "pouvoir", "venir", "parler", "finir"], tenses: ["Subjonctif présent"] },
  drill: [
    ["Il faut que tu ___ à l'heure.", ["sois", "es", "seras"], 0],
    ["Je veux que vous ___ avec nous.", ["veniez", "venez", "venir"], 0],
    ["J'espère que tu ___ bien.", ["vas", "ailles", "aller"], 0, TB("espérer que → Indikativ.", "espérer que → indicative.")],
    ["Je ne pense pas que ce ___ une bonne idée.", ["soit", "est", "sera"], 0],
    ["Je veux ___ en France l'année prochaine. (ich selbst)", ["partir", "que je parte", "pars"], 0],
    ["Je t'explique pour que tu ___.", ["comprennes", "comprends", "comprendre"], 0],
    ["Du musst das machen. → Il faut que tu le ___.", "fasses"]
  ],
  talk: { t: TB("Gute Nachrichten", "Good news"), scene: TB("Deine Freundin Lucie hat einen neuen Job in Montréal.", "Your friend Lucie has got a new job in Montreal."), who: "Lucie", slots: {}, lines: `a|J'ai une nouvelle ! J'ai eu le poste à Montréal !|Ich habe Neuigkeiten! Ich habe die Stelle in Montréal bekommen!|I've got news! I got the job in Montreal!
me|Félicitations ! Je suis tellement content pour toi !|Glückwunsch! Ich freue mich so für dich!|Congratulations! I'm so happy for you!|Bravo ! Je suis très content pour toi.
a|Merci ! Mais j'ai peur que ce soit trop difficile.|Danke! Aber ich habe Angst, dass es zu schwer ist.|Thanks! But I'm afraid it'll be too hard.
me|Je ne pense pas que ce soit trop difficile. Tu vas bien te débrouiller.|Ich glaube nicht, dass es zu schwer ist. Du wirst gut zurechtkommen.|I don't think it's too hard. You'll manage fine.|Mais non, tu vas y arriver !
a|Tu crois ? Il faut que je déménage en janvier.|Meinst du? Ich muss im Januar umziehen.|Do you think so? I have to move in January.
me|Il faut qu'on se voie avant que tu partes !|Wir müssen uns sehen, bevor du gehst!|We have to see each other before you leave!|On doit se voir avant ton départ !
a|Bien sûr ! Je veux que tu viennes à ma fête de départ.|Klar! Ich möchte, dass du zu meiner Abschiedsfeier kommst.|Of course! I want you to come to my leaving party.
me|Avec plaisir ! Bonne chance pour tout !|Gern! Viel Glück für alles!|With pleasure! Good luck with everything!|J'y serai ! Bonne chance !` }
});

lesson("B1", { id: "fr-b1-02", t: TB("L'entretien d'embauche – Relativpronomen", "L'entretien d'embauche – Relative pronouns"),
  goal: TB("Du kannst dich im Vorstellungsgespräch präsentieren und Personen, Dinge und Orte genauer beschreiben.", "You can present yourself in a job interview and describe people, things and places more precisely."),
  words: `l'entretien d'embauche|das Vorstellungsgespräch (m)|the job interview|n
le poste|die Stelle|the position|n|Le poste qui m'intéresse est à Paris.|Die Stelle, die mich interessiert, ist in Paris.|The position I'm interested in is in Paris.
postuler|sich bewerben|to apply|v|J'ai postulé chez L'Oréal.|Ich habe mich bei L'Oréal beworben.|I applied to L'Oréal.
le CV|der Lebenslauf|the CV|n
la lettre de motivation|das Anschreiben|the cover letter|n
le stage|das Praktikum|the internship|n|J'ai fait un stage dans une banque.|Ich habe ein Praktikum in einer Bank gemacht.|I did an internship at a bank.
l'expérience|die Erfahrung (f)|the experience|n
la formation|die Ausbildung|the training; education|n
le diplôme|der Abschluss|the degree; the diploma|n
le salaire|das Gehalt|the salary|n
le contrat|der Vertrag|the contract|n
le CDI|der unbefristete Vertrag|the permanent contract|n
le point fort|die Stärke|the strength|n
le point faible|die Schwäche|the weakness|n
l'équipe|das Team (f)|the team|n
rigoureux|gründlich; sorgfältig|thorough|adj
motivé|motiviert|motivated|adj
s'occuper de|sich kümmern um; zuständig sein für|to be in charge of|v|Je m'occupe des réseaux sociaux.|Ich bin für die sozialen Medien zuständig.|I'm in charge of social media.
embaucher|einstellen|to hire|v
l'entreprise|das Unternehmen (f)|the company|n`,
  say: `Pourquoi voulez-vous travailler chez nous ?|Warum möchten Sie bei uns arbeiten?|Why do you want to work for us?
Ce qui m'intéresse, c'est le contact avec les clients.|Was mich interessiert, ist der Kontakt mit den Kunden.|What interests me is contact with customers.
L'entreprise où je travaille est petite.|Die Firma, in der ich arbeite, ist klein.|The company where I work is small.
C'est un projet dont je suis très fier.|Das ist ein Projekt, auf das ich sehr stolz bin.|It's a project I'm very proud of.
Quand est-ce que je pourrais commencer ?|Wann könnte ich anfangen?|When could I start?
Nous vous recontacterons la semaine prochaine.|Wir melden uns nächste Woche bei Ihnen.|We'll get back to you next week.`,
  gram: [
    ["h", TB("Relativpronomen", "Relative pronouns")],
    ["table", { head: [TB("Pronomen", "pronoun"), TB("wofür?", "use"), TB("Beispiel", "example")], rows: [["qui", TB("Subjekt (wer / was tut etwas?)", "subject"), "Le collègue qui travaille avec moi est sympa."], ["que / qu'", TB("direktes Objekt", "direct object"), "Le poste que vous proposez m'intéresse."], ["où", TB("Ort und Zeit", "place and time"), "La ville où j'habite. Le jour où je suis arrivé."], ["dont", TB("ersetzt de + …", "replaces de + …"), "Le projet dont je parle (parler de)."], ["ce qui / ce que", TB("„was“", "“what”"), "Ce que j'aime, c'est l'équipe."]], say: 2 }],
    ["tip", TB("Merke: Folgt direkt ein Verb → meist <b>qui</b>; folgt ein Subjekt (je, il, vous …) → <b>que</b>: le poste <b>qui</b> m'intéresse / le poste <b>que</b> je cherche.", "Tip: verb straight after → usually <b>qui</b>; subject after (je, il, vous …) → <b>que</b>: le poste <b>qui</b> m'intéresse / le poste <b>que</b> je cherche.")]
  ],
  drill: [
    ["Le poste ___ vous proposez m'intéresse beaucoup.", ["que", "qui", "dont"], 0],
    ["La collègue ___ s'occupe du marketing est très sympa.", ["qui", "que", "où"], 0],
    ["L'entreprise ___ je travaille a 300 employés.", ["où", "que", "dont"], 0],
    ["C'est le projet ___ je suis le plus fier.", ["dont", "que", "qui"], 0, TB("être fier <b>de</b> → dont.", "être fier <b>de</b> → dont.")],
    ["___ me plaît, c'est l'ambiance.", ["Ce qui", "Ce que", "Qui"], 0],
    ["J'ai fait un stage ___ une banque.", ["dans", "à", "chez le"], 0],
    ["Die Stadt, in der ich wohne … → La ville ___ j'habite …", "où"]
  ],
  talk: { t: TB("Das Vorstellungsgespräch", "The job interview"), scene: TB("Bewerbungsgespräch bei einer Firma in Paris. Madame Lefèvre stellt die Fragen.", "A job interview at a company in Paris. Madame Lefèvre asks the questions."), who: "Mme Lefèvre", slots: { name: "Alex" }, lines: `a|Bonjour, asseyez-vous. Présentez-vous en quelques mots.|Guten Tag, setzen Sie sich. Stellen Sie sich kurz vor.|Hello, take a seat. Introduce yourself briefly.
me|Bonjour. Je m'appelle {name}, je fais un master de gestion et j'ai fait un stage dans une banque.|Guten Tag. Ich heiße …, mache einen Master in BWL und habe ein Praktikum in einer Bank gemacht.|Hello. My name is …, I'm doing a master's in management and I did an internship at a bank.|Je m'appelle {name}. Je fais un master et j'ai fait un stage dans une banque.
a|Pourquoi ce poste vous intéresse-t-il ?|Warum interessiert Sie diese Stelle?|Why are you interested in this position?
me|Ce qui m'intéresse, c'est de travailler dans une équipe internationale.|Was mich interessiert, ist die Arbeit in einem internationalen Team.|What interests me is working in an international team.|J'aimerais travailler dans une équipe internationale.
a|Quel est votre point fort ?|Was ist Ihre Stärke?|What's your strength?
me|Je suis rigoureux et très motivé.|Ich bin gründlich und sehr motiviert.|I'm thorough and very motivated.|Je suis motivé et j'aime le travail en équipe.
a|Très bien. Quand pourriez-vous commencer ?|Sehr gut. Wann könnten Sie anfangen?|Very good. When could you start?
me|Je pourrais commencer le mois prochain.|Ich könnte nächsten Monat anfangen.|I could start next month.|Dès le mois prochain.` }
});

lesson("B1", { id: "fr-b1-03", t: TB("Si j'avais… – Bedingungssätze", "Si j'avais… – Conditional sentences"),
  goal: TB("Du kannst über Bedingungen, Träume und hypothetische Situationen sprechen.", "You can talk about conditions, dreams and hypothetical situations."),
  words: `gagner au loto|im Lotto gewinnen|to win the lottery|v|Si je gagnais au loto, j'achèterais une maison.|Wenn ich im Lotto gewinnen würde, würde ich ein Haus kaufen.|If I won the lottery, I'd buy a house.
changer de vie|sein Leben ändern|to change one's life|v
s'installer|sich niederlassen|to settle|v|Si je pouvais, je m'installerais en Provence.|Wenn ich könnte, würde ich mich in der Provence niederlassen.|If I could, I'd settle in Provence.
économiser|sparen|to save (money)|v
dépenser|ausgeben|to spend|v
le risque|das Risiko|the risk|n
prendre un risque|ein Risiko eingehen|to take a risk|v
oser|wagen; sich trauen|to dare|v
le super-pouvoir|die Superkraft|the superpower|n
invisible|unsichtbar|invisible|adj
voler|fliegen|to fly|v
par contre|dagegen|on the other hand|ph
l'île déserte|die einsame Insel (f)|the desert island|n
au cas où|falls|in case|ph|Prends un parapluie au cas où il pleuvrait.|Nimm einen Schirm mit, falls es regnet.|Take an umbrella in case it rains.
à ta place|an deiner Stelle|in your place|ph
l'offre|das Angebot (f)|the offer|n
même si|selbst wenn|even if|x
sinon|sonst|otherwise|x`,
  say: `Si j'ai le temps, je t'appelle.|Wenn ich Zeit habe, rufe ich dich an.|If I have time, I'll call you.
Si j'avais plus de temps, j'apprendrais le piano.|Wenn ich mehr Zeit hätte, würde ich Klavier lernen.|If I had more time, I'd learn the piano.
Si j'étais toi, j'accepterais l'offre.|Wenn ich du wäre, würde ich das Angebot annehmen.|If I were you, I'd accept the offer.
Qu'est-ce que tu ferais si tu étais invisible ?|Was würdest du machen, wenn du unsichtbar wärst?|What would you do if you were invisible?
S'il pleut demain, on ira au musée.|Wenn es morgen regnet, gehen wir ins Museum.|If it rains tomorrow, we'll go to the museum.
Même si c'est cher, ça vaut le coup.|Selbst wenn es teuer ist, lohnt es sich.|Even if it's expensive, it's worth it.`,
  gram: [
    ["h", TB("Zwei Arten von Bedingungssätzen", "Two kinds of conditional sentences")],
    ["table", { head: [TB("Art", "type"), TB("si-Satz", "si clause"), TB("Hauptsatz", "main clause"), TB("Beispiel", "example")], rows: [[TB("real", "real"), "présent", TB("présent / futur / impératif", "present / future / imperative"), "S'il pleut, je reste à la maison."], [TB("irreal (jetzt)", "unreal (now)"), "imparfait", "conditionnel", "Si j'avais de l'argent, je voyagerais."]], say: 3 }],
    ["conj", { verbs: ["avoir", "être"], tenses: ["Imparfait", "Conditionnel présent"] }],
    ["tip", TB("Nach <b>si</b> nie Futur oder Conditionnel: <s>Si j'aurais</s> → Si j'<b>avais</b>. <b>si + il</b> wird zu <b>s'il</b>, aber <b>si elle</b> bleibt.", "After <b>si</b> never the future or conditional: <s>Si j'aurais</s> → Si j'<b>avais</b>. <b>si + il</b> becomes <b>s'il</b>, but <b>si elle</b> stays.")]
  ],
  forms: { verbs: ["avoir", "être", "pouvoir", "faire", "aller", "vivre"], tenses: ["Imparfait", "Conditionnel présent"] },
  drill: [
    ["Si j'___ de l'argent, j'achèterais une voiture.", ["avais", "aurais", "ai"], 0],
    ["S'il fait beau demain, nous ___ à la plage.", ["irons", "irions", "allions"], 0],
    ["Si j'étais toi, je ___ cette offre.", ["prendrais", "prendrai", "prenais"], 0],
    ["Qu'est-ce que tu ferais si tu ___ invisible ?", ["étais", "serais", "es"], 0],
    ["Si tu ___ plus, tu pourrais partir en vacances. (économiser)", ["économisais", "économiserais", "économises"], 0],
    ["___ il pleut, on reste ici.", ["S'", "Si", "Se"], 0],
    ["An deiner Stelle würde ich gehen. → À ta place, je ___. (partir)", "partirais"]
  ],
  talk: { t: TB("Was wäre, wenn …?", "What if …?"), scene: TB("Abends in einer Bar philosophierst du mit deinem Freund Maxime.", "In a bar one evening you philosophise with your friend Maxime."), who: "Maxime", slots: {}, lines: `a|Dis, qu'est-ce que tu ferais si tu gagnais au loto ?|Sag mal, was würdest du machen, wenn du im Lotto gewinnen würdest?|Hey, what would you do if you won the lottery?
me|Si je gagnais au loto, je ferais le tour du monde.|Wenn ich im Lotto gewinnen würde, würde ich um die Welt reisen.|If I won the lottery, I'd travel around the world.|Je ferais le tour du monde.
a|Moi, par contre, j'arrêterais de travailler tout de suite !|Ich dagegen würde sofort aufhören zu arbeiten!|I, on the other hand, would stop working straight away!
me|Vraiment ? Moi, je continuerais, j'aime mon travail.|Wirklich? Ich würde weitermachen, ich mag meine Arbeit.|Really? I'd carry on, I like my job.|Pas moi, j'aime mon travail.
a|Et si tu pouvais avoir un super-pouvoir ?|Und wenn du eine Superkraft haben könntest?|And if you could have a superpower?
me|Je voudrais voler. Comme ça, je n'aurais plus besoin du métro !|Ich würde gern fliegen. Dann bräuchte ich die U-Bahn nicht mehr!|I'd like to fly. That way I wouldn't need the metro any more!|J'aimerais voler.
a|Ha ha ! Moi, si j'étais invisible, j'irais à tous les concerts gratuitement.|Haha! Wenn ich unsichtbar wäre, würde ich gratis in alle Konzerte gehen.|Ha ha! If I were invisible, I'd go to all the concerts for free.
me|À ta place, j'achèterais un billet. C'est plus simple !|An deiner Stelle würde ich ein Ticket kaufen. Das ist einfacher!|If I were you, I'd buy a ticket. It's simpler!|Si j'étais toi, je prendrais un billet !` }
});

lesson("B1", { id: "fr-b1-04", t: TB("Les médias – Passiv und <i>on</i>", "Les médias – The passive and <i>on</i>"),
  goal: TB("Du kannst Nachrichten verstehen, wiedergeben und sagen, wie du dich informierst.", "You can understand and pass on the news and say how you keep informed."),
  words: `les infos|die Nachrichten|the news|n|Tu as vu les infos ce matin ?|Hast du heute Morgen die Nachrichten gesehen?|Did you see the news this morning?
le journal|die Zeitung; die Nachrichtensendung|the newspaper; the news programme|n
le titre|die Schlagzeile; der Titel|the headline; the title|n
l'article|der Artikel (m)|the article|n
le journaliste|der Journalist|the journalist|n
le gouvernement|die Regierung|the government|n
les élections|die Wahlen (f)|the elections|n
la loi|das Gesetz|the law|n|La loi a été votée hier.|Das Gesetz wurde gestern verabschiedet.|The law was passed yesterday.
voter|abstimmen; wählen|to vote|v
la grève|der Streik|the strike|n|Demain, il y a une grève des trains.|Morgen ist Bahnstreik.|There's a train strike tomorrow.
arrêter|festnehmen; anhalten|to arrest; to stop|v
blessé|verletzt|injured|adj
l'incendie|der Brand (m)|the fire|n
les réseaux sociaux|die sozialen Medien|social media|n
s'informer|sich informieren|to keep informed|v
selon|laut; gemäß|according to|x|Selon le journal, les prix vont augmenter.|Laut Zeitung werden die Preise steigen.|According to the paper, prices are going to rise.
la source|die Quelle|the source|n
fiable|zuverlässig|reliable|adj
les fake news|die Falschnachrichten|fake news|n
apprendre|erfahren; lernen|to find out; to learn|v`,
  say: `Le musée a été construit en 1900.|Das Museum wurde 1900 gebaut.|The museum was built in 1900.
Les voleurs ont été arrêtés par la police.|Die Diebe wurden von der Polizei festgenommen.|The thieves were arrested by the police.
On dit que les loyers vont encore augmenter.|Man sagt, dass die Mieten noch weiter steigen.|They say rents are going to rise further.
Ici, on parle français et anglais.|Hier spricht man Französisch und Englisch.|French and English are spoken here.
Je m'informe surtout sur internet.|Ich informiere mich vor allem im Internet.|I get my news mainly online.
Il ne faut pas croire tout ce qu'on lit sur les réseaux.|Man darf nicht alles glauben, was man in den sozialen Medien liest.|You shouldn't believe everything you read on social media.`,
  gram: [
    ["h", TB("Passiv: <i>être</i> + Partizip", "Passive: <i>être</i> + participle")],
    ["p", TB("<b>être + Partizip</b>, das Partizip passt sich an: La loi <b>a été votée</b>. Les voleurs <b>ont été arrêtés</b>. Wer es tut: <b>par</b> + Person.", "<b>être + participle</b>, the participle agrees: La loi <b>a été votée</b>. Les voleurs <b>ont été arrêtés</b>. The doer: <b>par</b> + person.")],
    ["table", { head: [TB("Zeit", "tense"), TB("Passiv", "passive")], rows: [["présent", "La maison est vendue."], ["passé composé", "La maison a été vendue."], ["imparfait", "La maison était vendue."], ["futur", "La maison sera vendue."]], say: 1 }],
    ["h", TB("<i>on</i> statt Passiv", "<i>on</i> instead of the passive")],
    ["p", TB("Im Alltag sagt man viel öfter <b>on</b> (man) als Passiv: <b>On</b> a arrêté les voleurs. <b>On</b> dit que… Umgangssprachlich heißt <b>on</b> auch „wir“: <b>On</b> y va ?", "In everyday French <b>on</b> is far more common than the passive: <b>On</b> a arrêté les voleurs. <b>On</b> dit que… Informally <b>on</b> also means “we”: <b>On</b> y va ?")],
    ["tip", TB("In Nachrichten liest du oft <b>selon</b> (laut) und den Conditionnel für unbestätigte Infos: Le ministre <b>serait</b> malade = Der Minister soll krank sein.", "In the news you'll often see <b>selon</b> (according to) and the conditional for unconfirmed reports: Le ministre <b>serait</b> malade = the minister is said to be ill.")]
  ],
  drill: [
    ["La loi a été ___ par le Parlement.", ["votée", "voté", "votées"], 0],
    ["Les voleurs ont été ___ hier soir.", ["arrêtés", "arrêté", "arrêtées"], 0],
    ["Ce pont ___ construit en 1880.", ["a été", "est été", "a"], 0],
    ["___ dit que la grève va durer.", ["On", "Il", "Se"], 0],
    ["La maison a été vendue ___ une famille anglaise.", ["par", "de", "pour"], 0],
    ["___ le journal, il va neiger.", ["Selon", "Pour", "Par"], 0],
    ["Das Museum wird morgen eröffnet. → Le musée ___ ouvert demain. (futur)", "sera"]
  ],
  talk: { t: TB("Hast du schon gehört?", "Have you heard?"), scene: TB("Dein Kollege Nicolas erzählt dir in der Kaffeepause eine Neuigkeit.", "Your colleague Nicolas tells you some news during the coffee break."), who: "Nicolas", slots: {}, lines: `a|Tu as vu ? Demain, il y a une grève des transports.|Hast du gesehen? Morgen ist Verkehrsstreik.|Did you see? There's a transport strike tomorrow.
me|Sérieux ? Tu l'as lu où ?|Im Ernst? Wo hast du das gelesen?|Seriously? Where did you read it?|C'est vrai ? Où est-ce que tu l'as vu ?
a|Ça a été annoncé ce matin à la radio.|Das wurde heute Morgen im Radio angekündigt.|It was announced on the radio this morning.
me|Moi, je m'informe surtout sur les réseaux sociaux.|Ich informiere mich vor allem über die sozialen Medien.|I get my news mainly from social media.|Je m'informe sur internet.
a|Attention, on y lit beaucoup de fake news !|Vorsicht, da liest man viele Falschnachrichten!|Careful, you read a lot of fake news there!
me|C'est vrai. Il faut toujours vérifier la source.|Stimmt. Man muss immer die Quelle prüfen.|That's true. You always have to check the source.|Tu as raison, il faut vérifier.
a|Bon, et tu vas venir comment au bureau demain ?|Na, und wie kommst du morgen ins Büro?|So, how are you going to get to the office tomorrow?
me|S'il y a grève, je travaillerai de chez moi.|Wenn gestreikt wird, arbeite ich von zu Hause.|If there's a strike, I'll work from home.|Je ferai du télétravail.` }
});

/* Français B2 · 1–4 */
lesson("B2", { id: "fr-b2-01", t: TB("Argumenter – Konnektoren", "Argumenter – Connectors"),
  goal: TB("Du kannst Vor- und Nachteile abwägen, Gegenargumente bringen und deine Meinung begründen.", "You can weigh up pros and cons, bring counter-arguments and justify your opinion."),
  words: `l'argument|das Argument (m)|the argument|n
l'avantage|der Vorteil (m)|the advantage|n|Le télétravail a beaucoup d'avantages.|Homeoffice hat viele Vorteile.|Remote work has a lot of advantages.
l'inconvénient|der Nachteil (m)|the drawback|n
le télétravail|das Homeoffice|remote work|n
bien que|obwohl (+ Subjonctif)|although|x|Bien qu'il soit tard, je continue.|Obwohl es spät ist, mache ich weiter.|Although it's late, I'm carrying on.
malgré|trotz|despite|x|Malgré la pluie, on est sortis.|Trotz des Regens sind wir rausgegangen.|Despite the rain, we went out.
pourtant|trotzdem; dennoch|yet; however|adv
cependant|jedoch|however|adv
en revanche|dagegen|on the other hand|ph
d'un côté … de l'autre|einerseits … andererseits|on the one hand … on the other|ph
à condition que|vorausgesetzt, dass|provided that|ph
pour que|damit|so that|x
à mon avis|meiner Meinung nach|in my opinion|ph
selon moi|meiner Ansicht nach|in my view|ph
être pour|dafür sein|to be in favour|v
être contre|dagegen sein|to be against|v
convaincre|überzeugen|to convince|v
c'est pourquoi|deshalb|that's why|ph
donc|also; daher|so; therefore|x
quand même|trotzdem|all the same|ph`,
  say: `D'un côté, c'est pratique ; de l'autre, on se sent seul.|Einerseits ist es praktisch, andererseits fühlt man sich allein.|On the one hand it's practical; on the other, you feel lonely.
Bien que tu aies raison, je ne suis pas tout à fait d'accord.|Obwohl du recht hast, bin ich nicht ganz einverstanden.|Although you're right, I don't completely agree.
Je suis pour, à condition qu'il y ait des réunions en présentiel.|Ich bin dafür, vorausgesetzt, es gibt Präsenztreffen.|I'm in favour, provided there are face-to-face meetings.
Malgré les avantages, il y a quelques inconvénients.|Trotz der Vorteile gibt es einige Nachteile.|Despite the advantages, there are some drawbacks.
À mon avis, les avantages l'emportent.|Meiner Meinung nach überwiegen die Vorteile.|In my opinion, the advantages outweigh the drawbacks.
Tu ne m'as pas complètement convaincu.|Du hast mich nicht ganz überzeugt.|You haven't completely convinced me.`,
  gram: [
    ["h", TB("Konnektoren: Indikativ, Subjonctif oder Nomen?", "Connectors: indicative, subjunctive or noun?")],
    ["table", { head: [TB("Konnektor", "connector"), TB("danach folgt", "followed by"), TB("Beispiel", "example")], rows: [["bien que, pour que, à condition que, avant que", "subjonctif", "Je t'explique pour que tu comprennes."], ["malgré", TB("Nomen", "noun"), "Malgré la pluie, on sort."], ["parce que, puisque, alors que", TB("Indikativ", "indicative"), "Je reste parce qu'il pleut."], ["pourtant, cependant, en revanche", TB("neuer Satzteil", "new clause"), "C'est cher. Pourtant, c'est génial."]], say: 2 }],
    ["p", TB("<b>Bien que</b> (obwohl) verlangt immer den Subjonctif: Bien qu'il <b>soit</b> malade, il travaille.", "<b>Bien que</b> (although) always takes the subjunctive: Bien qu'il <b>soit</b> malade, il travaille.")],
    ["tip", TB("Nicht <s>malgré que</s> – im gepflegten Französisch heißt es <b>bien que</b> + Subjonctif oder <b>malgré</b> + Nomen.", "Not <s>malgré que</s> – in good French use <b>bien que</b> + subjunctive or <b>malgré</b> + noun.")]
  ],
  forms: { verbs: ["être", "avoir", "pouvoir", "faire"], tenses: ["Subjonctif présent"] },
  drill: [
    ["Bien qu'il ___ tard, je continue à travailler.", ["soit", "est", "sera"], 0],
    ["___ la pluie, le match a eu lieu.", ["Malgré", "Bien que", "Pourtant"], 0],
    ["Je te le dis pour que tu le ___.", ["saches", "sais", "savoir"], 0],
    ["C'est cher. ___, je vais l'acheter.", ["Pourtant", "Malgré", "Bien que"], 0],
    ["J'accepte, à condition que vous ___ à l'heure.", ["soyez", "êtes", "serez"], 0],
    ["Il est riche ; sa sœur, en ___, n'a pas d'argent.", ["revanche", "contre", "autre"], 0],
    ["Meiner Meinung nach … → À mon ___, …", "avis"]
  ],
  talk: { t: TB("Homeoffice – ja oder nein?", "Remote work – yes or no?"), scene: TB("In der Mittagspause diskutierst du mit deiner Kollegin Claire übers Homeoffice.", "At lunch you discuss remote work with your colleague Claire."), who: "Claire", slots: {}, lines: `a|Et toi, tu es pour ou contre le télétravail ?|Und du, bist du für oder gegen Homeoffice?|And you, are you for or against remote work?
me|À mon avis, il a beaucoup d'avantages.|Meiner Meinung nach hat es viele Vorteile.|In my opinion, it has a lot of advantages.|Je suis pour, il y a beaucoup d'avantages.
a|Par exemple ?|Zum Beispiel?|For example?
me|D'un côté, on gagne du temps ; de l'autre, on travaille plus au calme.|Einerseits spart man Zeit, andererseits arbeitet man ruhiger.|On the one hand you save time; on the other, you work in peace.|On gagne du temps et on est plus au calme.
a|Oui, mais moi, le contact avec l'équipe me manque.|Ja, aber mir fehlt der Kontakt zum Team.|Yes, but I miss contact with the team.
me|Je comprends. C'est pourquoi je suis pour, à condition qu'il y ait des réunions au bureau.|Verstehe. Deshalb bin ich dafür, vorausgesetzt, es gibt Treffen im Büro.|I understand. That's why I'm in favour, provided there are meetings at the office.|Je comprends, mais avec des réunions au bureau, c'est parfait.
a|Bien qu'il y ait des réunions, ce n'est pas pareil.|Auch wenn es Treffen gibt, ist es nicht dasselbe.|Even with meetings, it's not the same.
me|C'est vrai. Pourtant, je préfère travailler de chez moi.|Das stimmt. Trotzdem arbeite ich lieber von zu Hause.|That's true. Still, I prefer working from home.|Tu as raison, mais je préfère quand même le télétravail.` }
});

lesson("B2", { id: "fr-b2-02", t: TB("Si j'avais su… – Irreale Vergangenheit", "Si j'avais su… – The unreal past"),
  goal: TB("Du kannst über verpasste Chancen sprechen und sagen, was du bereust oder anders gemacht hättest.", "You can talk about missed chances and say what you regret or would have done differently."),
  words: `regretter|bereuen; bedauern|to regret|v|Je regrette de ne pas avoir étudié à l'étranger.|Ich bereue, nicht im Ausland studiert zu haben.|I regret not studying abroad.
l'occasion|die Gelegenheit (f)|the opportunity|n
rater|verpassen|to miss|v|J'ai raté le train.|Ich habe den Zug verpasst.|I missed the train.
l'erreur|der Fehler (f)|the mistake|n
se tromper|sich irren|to be wrong; to make a mistake|v
la décision|die Entscheidung|the decision|n
prendre une décision|eine Entscheidung treffen|to make a decision|v
choisir|wählen|to choose|v
les études|das Studium|studies|n
si j'avais su|hätte ich das gewusst|if I'd known|ph
le hasard|der Zufall|chance|n|On s'est rencontrés par hasard.|Wir haben uns zufällig kennengelernt.|We met by chance.
le destin|das Schicksal|fate|n
changer d'avis|seine Meinung ändern|to change one's mind|v
à temps|rechtzeitig|in time|ph
écouter|zuhören; hören auf|to listen to|v|J'aurais dû t'écouter.|Ich hätte auf dich hören sollen.|I should have listened to you.
prévenir|Bescheid geben; warnen|to let know; to warn|v
dommage|schade|a pity|ph|C'est dommage !|Schade!|What a pity!
quel dommage|wie schade|what a shame|ph
avoir dû|hätte … müssen / sollen|should have|ph`,
  say: `Si j'avais su, je t'aurais prévenu.|Wenn ich das gewusst hätte, hätte ich dir Bescheid gesagt.|If I'd known, I'd have let you know.
Si nous étions partis plus tôt, nous n'aurions pas raté le train.|Wenn wir früher losgegangen wären, hätten wir den Zug nicht verpasst.|If we'd left earlier, we wouldn't have missed the train.
J'aurais dû t'écouter.|Ich hätte auf dich hören sollen.|I should have listened to you.
Je ne regrette rien.|Ich bereue nichts.|I don't regret anything.
Si je n'étais pas allé à cette fête, je ne t'aurais pas rencontrée.|Wenn ich nicht auf diese Party gegangen wäre, hätte ich dich nicht kennengelernt.|If I hadn't gone to that party, I wouldn't have met you.
Quel dommage !|Wie schade!|What a shame!`,
  gram: [
    ["h", TB("Plus-que-parfait und Conditionnel passé", "Pluperfect and past conditional")],
    ["p", TB("<b>si + plus-que-parfait</b> (avais / étais + Partizip), Hauptsatz <b>conditionnel passé</b> (aurais / serais + Partizip) – für Dinge, die nicht passiert sind.", "<b>si + pluperfect</b> (avais / étais + participle), main clause <b>past conditional</b> (aurais / serais + participle) – for things that didn't happen.")],
    ["table", { head: [TB("Person", "person"), "si …", TB("Hauptsatz", "main clause")], rows: [["je", "si j'avais su", "j'aurais su"], ["tu", "si tu avais su", "tu aurais su"], ["il / elle", "s'il était venu", "il serait venu"], ["nous", "si nous avions su", "nous aurions su"], ["vous", "si vous étiez partis", "vous seriez partis"], ["ils / elles", "s'ils avaient su", "ils auraient su"]], say: 1 }],
    ["p", TB("Bedauern: <b>j'aurais dû</b> + Infinitiv = ich hätte … sollen: J'aurais dû partir plus tôt.", "Regret: <b>j'aurais dû</b> + infinitive = I should have …: J'aurais dû partir plus tôt.")],
    ["tip", TB("Gemischt: früher → heute: Si j'<b>avais étudié</b> la médecine, je <b>serais</b> médecin aujourd'hui.", "Mixed: then → now: Si j'<b>avais étudié</b> la médecine, je <b>serais</b> médecin aujourd'hui.")]
  ],
  drill: [
    ["Si j'___ su, je serais venu.", ["avais", "aurais", "ai"], 0],
    ["Si nous étions partis à l'heure, nous n'___ pas raté le train.", ["aurions", "avions", "aurons"], 0],
    ["J'aurais ___ t'écouter.", ["dû", "du", "devoir"], 0],
    ["Si tu m'avais appelé, je t'___ aidé.", ["aurais", "avais", "aurai"], 0],
    ["S'ils ___ venus, ils auraient adoré la fête.", ["étaient", "avaient", "seraient"], 0, TB("venir → être.", "venir → être.")],
    ["Si j'avais étudié la médecine, je ___ médecin aujourd'hui.", ["serais", "aurais été", "étais"], 0],
    ["Wie schade! → Quel ___ !", "dommage"]
  ],
  talk: { t: TB("Das verpasste Konzert", "The missed concert"), scene: TB("Dein Freund Romain war gestern auf einem Konzert – du hast es verpasst.", "Your friend Romain went to a concert yesterday – you missed it."), who: "Romain", slots: {}, lines: `a|Pourquoi tu n'es pas venu au concert hier ? C'était génial !|Warum bist du gestern nicht zum Konzert gekommen? Es war super!|Why didn't you come to the concert yesterday? It was great!
me|Je ne savais pas ! Si j'avais su, je serais venu.|Ich wusste es nicht! Wenn ich es gewusst hätte, wäre ich gekommen.|I didn't know! If I'd known, I'd have come.|Si j'avais su, je serais venu !
a|Je t'ai envoyé un message lundi…|Ich habe dir am Montag eine Nachricht geschickt …|I sent you a message on Monday …
me|Sérieux ? J'aurais dû regarder mon téléphone.|Im Ernst? Ich hätte auf mein Handy schauen sollen.|Seriously? I should have checked my phone.|Je ne l'ai pas vu, désolé !
a|Ils ont joué toutes leurs chansons connues.|Sie haben alle ihre bekannten Songs gespielt.|They played all their famous songs.
me|Quel dommage ! Si tu m'avais appelé, je serais venu tout de suite.|Wie schade! Wenn du mich angerufen hättest, wäre ich sofort gekommen.|What a shame! If you'd called me, I'd have come straight away.|Dommage ! Tu aurais dû m'appeler.
a|Bon, ils rejouent à Lyon le mois prochain.|Na ja, nächsten Monat spielen sie wieder in Lyon.|Well, they're playing in Lyon again next month.
me|Cette fois, je ne le rate pas ! Préviens-moi quand tu achètes les billets.|Diesmal verpasse ich es nicht! Sag mir Bescheid, wenn du die Tickets kaufst.|This time I won't miss it! Let me know when you buy the tickets.|Cette fois, je viens !` }
});

lesson("B2", { id: "fr-b2-03", t: TB("Il a dit que… – Indirekte Rede", "Il a dit que… – Reported speech"),
  goal: TB("Du kannst wiedergeben, was jemand gesagt, gefragt oder dich gebeten hat.", "You can report what someone said, asked or asked you to do."),
  words: `dire|sagen|to say; to tell|v|Elle m'a dit qu'elle était fatiguée.|Sie hat mir gesagt, dass sie müde sei.|She told me she was tired.
affirmer|behaupten|to state|v
expliquer|erklären|to explain|v
annoncer|ankündigen|to announce|v
promettre|versprechen|to promise|v|Il a promis qu'il viendrait.|Er hat versprochen, dass er kommen würde.|He promised he would come.
demander si|fragen, ob|to ask whether|v
demander de|bitten zu|to ask (someone) to|v|Elle m'a demandé de l'appeler.|Sie hat mich gebeten, sie anzurufen.|She asked me to call her.
répondre|antworten|to answer|v
avouer|gestehen; zugeben|to admit|v
nier|leugnen|to deny|v
la rumeur|das Gerücht|the rumour|n
le message vocal|die Sprachnachricht|the voice message|n
le propriétaire|der Vermieter|the landlord|n
le plombier|der Klempner|the plumber|n
la veille|der Vortag|the day before|n
le lendemain|der nächste Tag|the next day|n
ce jour-là|an jenem Tag|that day|ph
là-bas|dort|there|adv`,
  say: `Il m'a dit qu'il était malade.|Er hat mir gesagt, dass er krank sei.|He told me he was ill.
Anna dit qu'elle vient demain.|Anna sagt, dass sie morgen kommt.|Anna says she's coming tomorrow.
Elle m'a demandé si je voulais venir.|Sie hat mich gefragt, ob ich kommen wolle.|She asked me if I wanted to come.
Il m'a demandé de ne rien dire.|Er hat mich gebeten, nichts zu sagen.|He asked me not to say anything.
Elle a promis qu'elle arriverait à l'heure.|Sie hat versprochen, dass sie pünktlich kommen würde.|She promised she'd arrive on time.
Il a dit qu'il avait déjà fini.|Er hat gesagt, dass er schon fertig sei.|He said he had already finished.`,
  gram: [
    ["h", TB("Zeitverschiebung in der indirekten Rede", "Tense shift in reported speech")],
    ["p", TB("Steht das Einleitungsverb in der Vergangenheit (<i>il a dit, elle a demandé</i>), rückt die Zeit zurück. Mit <i>il dit que</i> (Präsens) bleibt alles gleich.", "If the reporting verb is in the past (<i>il a dit, elle a demandé</i>), the tense shifts back. With <i>il dit que</i> (present) nothing changes.")],
    ["table", { head: [TB("direkt", "direct"), TB("indirekt: il a dit que …", "reported: il a dit que …")], rows: [["« Je suis fatigué. »", "il était fatigué"], ["« J'ai fini. »", "il avait fini"], ["« Je viendrai demain. »", "il viendrait le lendemain"], ["« Appelle-moi. »", "(il m'a demandé) de l'appeler"], ["« Tu viens ? »", "(il m'a demandé) si je venais"]], say: 1 }],
    ["p", TB("Zeitangaben ändern sich: aujourd'hui → <b>ce jour-là</b>, demain → <b>le lendemain</b>, hier → <b>la veille</b>, ici → <b>là-bas</b>.", "Time words change: aujourd'hui → <b>ce jour-là</b>, demain → <b>le lendemain</b>, hier → <b>la veille</b>, ici → <b>là-bas</b>.")],
    ["tip", TB("Ja/Nein-Fragen → <b>si</b>; Aufforderungen → <b>demander de</b> + Infinitiv: Elle m'a demandé <b>de</b> fermer la porte.", "Yes/no questions → <b>si</b>; requests → <b>demander de</b> + infinitive: Elle m'a demandé <b>de</b> fermer la porte.")]
  ],
  drill: [
    ["« Je suis fatiguée. » → Elle a dit qu'elle ___ fatiguée.", ["était", "est", "sera"], 0],
    ["« Je viendrai demain. » → Il a dit qu'il ___ le lendemain.", ["viendrait", "viendra", "venait"], 0],
    ["« Tu as faim ? » → Il m'a demandé ___ j'avais faim.", ["si", "que", "de"], 0],
    ["« Appelle-moi. » → Elle m'a demandé ___ l'appeler.", ["de", "que", "si"], 0],
    ["« J'ai perdu mes clés. » → Il a dit qu'il ___ perdu ses clés.", ["avait", "a", "aurait"], 0],
    ["Anna dit qu'elle ___ demain.", ["vient", "venait", "viendrait"], 0, TB("Einleitung im Präsens → keine Zeitverschiebung.", "Reporting verb in the present → no tense shift.")],
    ["Er hat versprochen, dass er kommen würde. → Il a promis qu'il ___.", "viendrait"]
  ],
  talk: { t: TB("Die Sprachnachricht", "The voice message"), scene: TB("Deine Mitbewohnerin Pauline hat die Sprachnachricht des Vermieters nicht gehört.", "Your flatmate Pauline hasn't heard the landlord's voice message."), who: "Pauline", slots: {}, lines: `a|Tu as écouté le message vocal du propriétaire ?|Hast du die Sprachnachricht des Vermieters gehört?|Have you listened to the landlord's voice message?
me|Oui. Il a dit que le plombier viendrait demain.|Ja. Er hat gesagt, dass der Klempner morgen kommen würde.|Yes. He said the plumber would come tomorrow.|Oui, il a dit que le plombier passerait demain.
a|À quelle heure ?|Um wie viel Uhr?|What time?
me|Il a dit qu'il arriverait vers neuf heures.|Er hat gesagt, dass er gegen neun kommen würde.|He said he'd arrive around nine.|Vers neuf heures, il a dit.
a|Et c'est tout ?|Und das ist alles?|And is that all?
me|Non, il nous a demandé de libérer la cuisine.|Nein, er hat uns gebeten, die Küche frei zu machen.|No, he asked us to clear the kitchen.|Il a demandé qu'on libère la cuisine.
a|D'accord. Il a demandé si quelqu'un serait là ?|Okay. Hat er gefragt, ob jemand da sein würde?|OK. Did he ask if someone would be there?
me|Oui, il m'a demandé si je pouvais ouvrir, et j'ai dit oui.|Ja, er hat mich gefragt, ob ich aufmachen könnte, und ich habe ja gesagt.|Yes, he asked me if I could open the door, and I said yes.|Oui, je lui ai dit que je serais là.` }
});

lesson("B2", { id: "fr-b2-04", t: TB("Le monde du travail – Formelle Kommunikation", "Le monde du travail – Formal communication"),
  goal: TB("Du kannst formelle E-Mails schreiben, Termine vereinbaren und höflich verhandeln.", "You can write formal emails, arrange appointments and negotiate politely."),
  words: `la réunion|die Besprechung|the meeting|n
l'ordre du jour|die Tagesordnung (m)|the agenda|n
le devis|der Kostenvoranschlag|the quote|n|Veuillez trouver ci-joint notre devis.|Anbei erhalten Sie unseren Kostenvoranschlag.|Please find our quote attached.
ci-joint|anbei|attached|adv
la facture|die Rechnung|the invoice|n
le délai|die Frist|the deadline; the lead time|n|Le délai de livraison est de deux semaines.|Die Lieferzeit beträgt zwei Wochen.|Delivery takes two weeks.
la commande|die Bestellung|the order|n
le client|der Kunde|the client|n
le fournisseur|der Lieferant|the supplier|n
la proposition|der Vorschlag; das Angebot|the proposal|n
négocier|verhandeln|to negotiate|v
l'accord|die Vereinbarung (m)|the agreement|n|Nous sommes parvenus à un accord.|Wir haben eine Einigung erzielt.|We've reached an agreement.
fixer un rendez-vous|einen Termin vereinbaren|to arrange an appointment|v
Madame, Monsieur|Sehr geehrte Damen und Herren|Dear Sir or Madam|ph
cordialement|mit freundlichen Grüßen|kind regards|adv
dans les meilleurs délais|so bald wie möglich|as soon as possible|ph
suite à|im Anschluss an; bezüglich|following|ph|Suite à notre conversation, …|Im Anschluss an unser Gespräch …|Following our conversation, …
je me permets de|ich erlaube mir|I am writing to; may I|ph
rester à disposition|zur Verfügung stehen|to remain available|v`,
  say: `Madame, Monsieur,|Sehr geehrte Damen und Herren,|Dear Sir or Madam,
Je me permets de vous contacter au sujet de votre commande.|Ich wende mich an Sie bezüglich Ihrer Bestellung.|I am contacting you regarding your order.
Veuillez trouver ci-joint la facture de mars.|Anbei finden Sie die Rechnung für März.|Please find attached the invoice for March.
Je vous serais reconnaissant de me répondre dans les meilleurs délais.|Ich wäre Ihnen dankbar, wenn Sie mir so bald wie möglich antworten würden.|I would be grateful if you could reply as soon as possible.
Jeudi à dix heures, cela vous conviendrait ?|Würde Ihnen Donnerstag um zehn passen?|Would Thursday at ten suit you?
Je reste à votre disposition pour toute question.|Für Fragen stehe ich Ihnen gern zur Verfügung.|I remain at your disposal for any questions.
Cordialement,|Mit freundlichen Grüßen|Kind regards,`,
  gram: [
    ["h", TB("Höflich mit <i>vous</i>, Conditionnel und festen Formeln", "Polite with <i>vous</i>, the conditional and set phrases")],
    ["table", { head: [TB("direkt", "direct"), TB("höflich", "polite")], rows: [["Envoyez-moi le devis.", "Pourriez-vous m'envoyer le devis ?"], ["Je veux une réunion.", "Je souhaiterais fixer une réunion."], ["Répondez vite.", "Je vous serais reconnaissant de me répondre rapidement."]], say: 1 }],
    ["ex", [["Nous avons le regret de vous informer que…", "Wir müssen Ihnen leider mitteilen, dass …", "We regret to inform you that …"], ["N'hésitez pas à me contacter.", "Zögern Sie nicht, mich zu kontaktieren.", "Do not hesitate to contact me."], ["Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.", "Hochachtungsvoll (sehr formell)", "Yours faithfully (very formal)"]]],
    ["tip", TB("Französische Geschäftsbriefe sind förmlicher als deutsche. In E-Mails reicht meist <b>Cordialement</b> oder <b>Bien cordialement</b> als Gruß.", "French business letters are more formal than German or English ones. In emails <b>Cordialement</b> or <b>Bien cordialement</b> is usually enough.")]
  ],
  drill: [
    ["___-vous m'envoyer la facture ?", ["Pourriez", "Pouvez de", "Pourrez"], 0],
    ["Veuillez trouver ___ notre devis.", ["ci-joint", "ci-dessous joint", "joint ici"], 0],
    ["Je vous serais ___ de me répondre rapidement.", ["reconnaissant", "reconnaissance", "reconnu"], 0],
    ["Je me ___ de vous contacter au sujet de votre commande.", ["permets", "permet", "permis"], 0],
    ["N'hésitez pas ___ me contacter.", ["à", "de", "pour"], 0],
    ["Je reste à votre ___ pour toute question.", ["disposition", "dispose", "service de"], 0],
    ["Wir haben eine Einigung erzielt. → Nous sommes parvenus à un ___.", "accord"]
  ],
  talk: { t: TB("Anruf eines Kunden", "A call from a client"), scene: TB("Monsieur Girard, ein Kunde, ruft wegen eines Kostenvoranschlags an.", "Monsieur Girard, a client, calls about a quote."), who: "M. Girard", slots: {}, lines: `a|Bonjour, Hervé Girard, de la société Girard Bâtiment.|Guten Tag, Hervé Girard von der Firma Girard Bâtiment.|Hello, Hervé Girard from Girard Bâtiment.
me|Bonjour, monsieur Girard. Que puis-je faire pour vous ?|Guten Tag, Herr Girard. Was kann ich für Sie tun?|Hello, Mr Girard. What can I do for you?|Bonjour. En quoi puis-je vous aider ?
a|Je vous appelle au sujet du devis que vous nous avez envoyé.|Ich rufe wegen des Kostenvoranschlags an, den Sie uns geschickt haben.|I'm calling about the quote you sent us.
me|Oui, bien sûr. Vous avez une question ?|Ja, natürlich. Haben Sie eine Frage?|Yes, of course. Do you have a question?|Bien sûr. Qu'est-ce que je peux vous préciser ?
a|Nous aimerions négocier le prix. Pourrions-nous nous rencontrer cette semaine ?|Wir würden gern über den Preis verhandeln. Könnten wir uns diese Woche treffen?|We'd like to negotiate the price. Could we meet this week?
me|Volontiers. Jeudi à dix heures, cela vous conviendrait ?|Gern. Würde Ihnen Donnerstag um zehn passen?|Gladly. Would Thursday at ten suit you?|Bien sûr. Que diriez-vous de jeudi matin ?
a|Parfait. Pourriez-vous m'envoyer l'adresse par mail ?|Perfekt. Könnten Sie mir die Adresse per Mail schicken?|Perfect. Could you send me the address by email?
me|Je vous l'envoie tout de suite. À jeudi, monsieur Girard.|Ich schicke sie Ihnen sofort. Bis Donnerstag, Herr Girard.|I'll send it right away. See you on Thursday, Mr Girard.|Je vous l'envoie. Bonne journée !` }
});

courseReg("fr", C);
})();
