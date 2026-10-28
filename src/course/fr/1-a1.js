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
