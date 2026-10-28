/* English A1 · 1–5 */
lesson("A1", { id: "en-a1-01", t: TB("Hello! – Begrüßen und vorstellen", "Hello! – Greetings and introductions"),
  goal: TB("Du kannst Leute begrüßen, dich vorstellen, nach dem Befinden fragen und dich verabschieden.", "You can greet people, introduce yourself, ask how someone is and say goodbye."),
  words: `hello|hallo||ph|Hello, I'm Tom.|Hallo, ich bin Tom.
hi|hi; hallo (locker)||ph|Hi, Anna! How are you?|Hi, Anna! Wie geht's?
good morning|guten Morgen||ph|Good morning, everyone!|Guten Morgen, alle zusammen!
good afternoon|guten Tag (nachmittags)||ph
good evening|guten Abend||ph
goodbye|auf Wiedersehen||ph|Goodbye and thank you!|Auf Wiedersehen und danke!
bye|tschüss||ph
see you later|bis später||ph|See you later, Sam!|Bis später, Sam!
nice to meet you|freut mich, dich / Sie kennenzulernen||ph|Hi, I'm Lisa. – Nice to meet you!|Hi, ich bin Lisa. – Freut mich!
thank you|danke||ph|Thank you very much.|Vielen Dank.
thanks|danke (locker)||ph
please|bitte (Bitte um etwas)||ph|A coffee, please.|Einen Kaffee, bitte.
you're welcome|gern geschehen||ph|Thanks! – You're welcome.|Danke! – Gern geschehen.
sorry|Entschuldigung; tut mir leid||ph|Sorry, I'm late.|Entschuldigung, ich bin spät dran.
excuse me|entschuldigen Sie (um Aufmerksamkeit)||ph|Excuse me, is this seat free?|Entschuldigung, ist dieser Platz frei?
the name|der Name||n|What's your name?|Wie heißt du?
the first name|der Vorname||n
the surname|der Nachname||n
the friend|der Freund; die Freundin||n|This is my friend Paul.|Das ist mein Freund Paul.
fine|gut (Befinden)||adj|I'm fine, thanks.|Mir geht's gut, danke.
great|super; toll||adj
not bad|nicht schlecht||ph
too|auch (am Satzende)||adv|I'm from Berlin too.|Ich bin auch aus Berlin.`,
  say: `What's your name?|Wie heißt du?
My name is Alex.|Ich heiße Alex.
How are you?|Wie geht es dir?
I'm fine, thanks. And you?|Mir geht's gut, danke. Und dir?
Nice to meet you.|Freut mich, dich kennenzulernen.
This is my colleague, Sarah.|Das ist meine Kollegin Sarah.
See you tomorrow!|Bis morgen!
Have a nice day!|Schönen Tag noch!`,
  gram: [
    ["h", TB("Das Verb <i>to be</i> (sein)", "The verb <i>to be</i>")],
    ["table", { head: [TB("Person", "person"), TB("lang", "full"), TB("kurz", "short")], rows: [["I", "I am", "I'm"], ["you", "you are", "you're"], ["he / she / it", "he is", "he's"], ["we", "we are", "we're"], ["they", "they are", "they're"]], say: 1 }],
    ["p", TB("Im Gespräch benutzt man fast immer die <b>Kurzform</b>: <b>I'm</b> Alex. <b>She's</b> my sister. Die Langform klingt förmlich oder betont.", "In conversation you almost always use the <b>short form</b>: <b>I'm</b> Alex. <b>She's</b> my sister. The full form sounds formal or emphatic.")],
    ["h", TB("Fragen und Verneinung", "Questions and negatives")],
    ["ex", [["Are you Tom? – Yes, I am.", "Bist du Tom? – Ja."], ["Is she your sister? – No, she isn't.", "Ist sie deine Schwester? – Nein."], ["I'm not from London.", "Ich bin nicht aus London."]]],
    ["tip", TB("<b>you</b> heißt du <i>und</i> Sie – Englisch hat keinen Unterschied. Höflichkeit zeigt man mit <b>please</b>, <b>could</b> und dem Namen: <i>Mr Smith</i>, <i>Ms Jones</i>.", "<b>you</b> works for everyone – English has no formal “you”. Politeness comes from <b>please</b>, <b>could</b> and names: <i>Mr Smith</i>, <i>Ms Jones</i>.")]
  ],
  th: "tenses",
  drill: [
    ["I ___ Marc.", ["am", "is", "are"], 0],
    ["She ___ my colleague.", ["is", "am", "are"], 0],
    ["We ___ from Germany.", ["are", "is", "am"], 0],
    ["___ you Tom? – Yes, I am.", ["Are", "Is", "Do"], 0],
    ["He ___ from London, he's from Leeds.", ["isn't", "aren't", "not"], 0],
    ["What's ___ name? – My name is Anna.", ["your", "you", "you're"], 0],
    ["They ___ my friends. (be, Kurzform mit they)", "they're"]
  ],
  talk: { t: TB("Am ersten Tag im Kurs", "On the first day of the course"), scene: TB("Du lernst im Sprachkurs in London Emma kennen.", "You meet Emma on a language course in London."), who: "Emma", slots: { name: "Alex" }, lines: `a|Hi! I'm Emma. What's your name?|Hi! Ich bin Emma. Wie heißt du?|
me|Hi Emma! My name is {name}.|Hi Emma! Ich heiße …||I'm {name}.; Hi, I'm {name}.; Hello Emma, my name's {name}.
a|Nice to meet you! How are you?|Freut mich! Wie geht's dir?|
me|Nice to meet you too. I'm fine, thanks. And you?|Freut mich auch. Mir geht's gut, danke. Und dir?||I'm fine, thanks. And you?; Nice to meet you. I'm good, and you?
a|I'm great, thanks. Are you from Germany?|Mir geht's super, danke. Kommst du aus Deutschland?|
me|Yes, I am. I'm from Munich.|Ja. Ich bin aus München.||Yes, I'm from Munich.; Yes, from Munich.
a|Cool! Oh, the lesson is starting. See you later!|Cool! Oh, der Unterricht fängt an. Bis später!|
me|See you later, Emma!|Bis später, Emma!||See you!; Bye, see you later!` }
});

lesson("A1", { id: "en-a1-02", t: TB("Where are you from? – Länder, Sprachen, Zahlen", "Where are you from? – Countries, languages, numbers"),
  goal: TB("Du kannst sagen, woher du kommst, wo du wohnst, welche Sprachen du sprichst und wie alt du bist.", "You can say where you're from, where you live, which languages you speak and how old you are."),
  words: `Germany|Deutschland||n|I'm from Germany.|Ich komme aus Deutschland.
German|deutsch; Deutsch; Deutsche(r)||adj|I'm German.|Ich bin Deutscher.
Italy|Italien||n
Italian|italienisch; Italienisch||adj
Spain|Spanien||n
Spanish|spanisch; Spanisch||adj
France|Frankreich||n
French|französisch; Französisch||adj
the UK|das Vereinigte Königreich||n|She lives in the UK.|Sie wohnt im Vereinigten Königreich.
British|britisch||adj
the USA|die USA||n
American|amerikanisch||adj
the country|das Land||n
the city|die Stadt||n|I live in a big city.|Ich wohne in einer großen Stadt.
the language|die Sprache||n|How many languages do you speak?|Wie viele Sprachen sprichst du?
to speak|sprechen||v|I speak German and a bit of Italian.|Ich spreche Deutsch und ein bisschen Italienisch.
to live|wohnen; leben||v|Where do you live?|Wo wohnst du?
old|alt||adj|How old are you? – I'm 26.|Wie alt bist du? – Ich bin 26.
the phone number|die Telefonnummer||n|What's your phone number?|Wie ist deine Telefonnummer?
the email address|die E-Mail-Adresse||n
twelve|zwölf||x
twenty|zwanzig||x
thirty|dreißig||x
a hundred|hundert||x`,
  say: `Where are you from?|Woher kommst du?
I'm from Munich, in the south of Germany.|Ich komme aus München, im Süden von Deutschland.
Where do you live?|Wo wohnst du?
I live in Rome at the moment.|Ich wohne zurzeit in Rom.
Do you speak English?|Sprichst du Englisch?
I speak German, English and a little Italian.|Ich spreche Deutsch, Englisch und ein bisschen Italienisch.
How old are you?|Wie alt bist du?
Can you spell that, please?|Kannst du das bitte buchstabieren?`,
  gram: [
    ["h", TB("Länder und Nationalitäten", "Countries and nationalities")],
    ["table", { head: [TB("Land", "country"), TB("Nationalität / Sprache", "nationality / language")], rows: [["Germany", "German"], ["Italy", "Italian"], ["Spain", "Spanish"], ["France", "French"], ["Switzerland", "Swiss"], ["Austria", "Austrian"], ["England", "English"]], say: 1 }],
    ["p", TB("Länder, Nationalitäten und Sprachen schreibt man im Englischen <b>immer groß</b>: I speak <b>German</b>. She's <b>Italian</b>.", "In English countries, nationalities and languages always take a <b>capital letter</b>: I speak <b>German</b>. She's <b>Italian</b>.")],
    ["h", TB("Alter: mit <i>be</i>, nicht mit <i>have</i>", "Age: with <i>be</i>, not <i>have</i>")],
    ["ex", [["I'm 26 (years old).", "Ich bin 26 (Jahre alt)."], ["How old is your sister? – She's 30.", "Wie alt ist deine Schwester? – Sie ist 30."]]],
    ["tip", TB("Typischer Fehler: <s>I have 26 years</s> – richtig ist <b>I'm 26</b>. Und: <b>-teen</b> (thir<b>teen</b>, 13) wird hinten betont, <b>-ty</b> (<b>thir</b>ty, 30) vorne.", "Typical mistake: <s>I have 26 years</s> – it's <b>I'm 26</b>. And: <b>-teen</b> (thir<b>teen</b>, 13) is stressed at the end, <b>-ty</b> (<b>thir</b>ty, 30) at the start.")]
  ],
  quiz: ["en-mistakes"],
  drill: [
    ["I'm from Germany. I'm ___.", ["German", "Germany", "german"], 0],
    ["She ___ 30 years old.", ["is", "has", "have"], 0, TB("Alter immer mit <i>be</i>.", "Age always with <i>be</i>.")],
    ["Where ___ you from?", ["are", "do", "is"], 0],
    ["Where ___ you live?", ["do", "are", "does"], 0],
    ["I speak French ___ a bit of Spanish.", ["and", "too", "also"], 0],
    ["They live ___ London.", ["in", "at", "on"], 0],
    ["Wie alt bist du? → How old ___ you?", "are"]
  ],
  talk: { t: TB("Im Zug nach Edinburgh", "On the train to Edinburgh"), scene: TB("Im Zug kommst du mit Liam ins Gespräch.", "On the train you start chatting with Liam."), who: "Liam", slots: { city: "Munich" }, lines: `a|Hi! Is this seat free?|Hi! Ist der Platz frei?|
me|Yes, it is. Please sit down.|Ja. Setz dich gern.||Yes, sure.; Yes, it's free.
a|Thanks! Where are you from?|Danke! Woher kommst du?|
me|I'm from Germany, from {city}.|Ich komme aus Deutschland, aus …||I'm German, from {city}.; From {city}, in Germany.
a|Oh, nice! Do you live there?|Oh, schön! Wohnst du dort?|
me|Yes, I live and work there.|Ja, ich wohne und arbeite dort.||Yes, I do.; Yes, I live there.
a|Your English is very good! Do you speak other languages?|Dein Englisch ist sehr gut! Sprichst du noch andere Sprachen?|
me|Thank you! I speak a little Italian too.|Danke! Ich spreche auch ein bisschen Italienisch.||Thanks! I speak a bit of Italian.; Thank you! A little Italian.` }
});

lesson("A1", { id: "en-a1-03", t: TB("At the café – Bestellen und bezahlen", "At the café – Ordering and paying"),
  goal: TB("Du kannst im Café bestellen, nach dem Preis fragen und bezahlen.", "You can order in a café, ask about prices and pay."),
  words: `the coffee|der Kaffee||n|A black coffee, please.|Einen schwarzen Kaffee, bitte.
the tea|der Tee||n|A cup of tea with milk, please.|Eine Tasse Tee mit Milch, bitte.
the water|das Wasser||n|Still or sparkling water?|Stilles Wasser oder mit Kohlensäure?
the orange juice|der Orangensaft||n
the milk|die Milch||n
the sugar|der Zucker||n
the sandwich|das Sandwich||n|A cheese sandwich, please.|Ein Käse-Sandwich, bitte.
the cake|der Kuchen||n|This cake is delicious.|Dieser Kuchen ist köstlich.
the cup|die Tasse||n
the glass|das Glas||n
the menu|die Speisekarte||n|Can I see the menu, please?|Kann ich bitte die Karte sehen?
the bill|die Rechnung||n|Can we have the bill, please?|Können wir bitte die Rechnung haben?
to order|bestellen||v
to pay|bezahlen||v|Can I pay by card?|Kann ich mit Karte zahlen?
by card|mit Karte||ph
in cash|bar||ph|I'll pay in cash.|Ich zahle bar.
to take away|zum Mitnehmen||ph|Is that to eat in or to take away?|Zum Hieressen oder zum Mitnehmen?
how much|wie viel||ph|How much is it?|Wie viel kostet es?
the pound|das Pfund||n|That's four pounds fifty.|Das macht vier Pfund fünfzig.
anything else|sonst noch etwas||ph|Anything else? – No, that's all.|Sonst noch etwas? – Nein, das ist alles.`,
  say: `Can I have a cappuccino, please?|Kann ich einen Cappuccino haben, bitte?
I'd like a tea with milk, please.|Ich hätte gern einen Tee mit Milch, bitte.
How much is that?|Was macht das?
Can I pay by card?|Kann ich mit Karte zahlen?
To take away, please.|Zum Mitnehmen, bitte.
Could we have the bill, please?|Könnten wir bitte die Rechnung haben?
Keep the change.|Stimmt so.`,
  gram: [
    ["h", TB("<i>a</i> oder <i>an</i>?", "<i>a</i> or <i>an</i>?")],
    ["p", TB("<b>a</b> vor Konsonanten-<i>Laut</i>, <b>an</b> vor Vokal-<i>Laut</i>: <b>a</b> coffee, <b>a</b> sandwich, <b>an</b> orange juice, <b>an</b> hour (h stumm), aber <b>a</b> university (gesprochen „ju“).", "<b>a</b> before a consonant <i>sound</i>, <b>an</b> before a vowel <i>sound</i>: <b>a</b> coffee, <b>a</b> sandwich, <b>an</b> orange juice, <b>an</b> hour (silent h), but <b>a</b> university (said “you”).")],
    ["h", TB("Höflich bestellen", "Ordering politely")],
    ["table", { head: [TB("so geht's", "how"), TB("Beispiel", "example")], rows: [[TB("Can I have …?", "Can I have …?"), "Can I have a coffee, please?"], [TB("I'd like … (= I would like)", "I'd like … (= I would like)"), "I'd like a sandwich, please."], [TB("Could I get …? (sehr häufig)", "Could I get …? (very common)"), "Could I get a glass of water?"]], say: 1 }],
    ["tip", TB("Nicht <s>I become a coffee</s> – <i>become</i> heißt „werden“! Richtig: <b>Can I have</b> / <b>I'd like</b> a coffee.", "Not <s>I become a coffee</s> – <i>become</i> means “werden”! Correct: <b>Can I have</b> / <b>I'd like</b> a coffee.")]
  ],
  quiz: ["en-art"],
  drill: [
    ["Can I have ___ orange juice, please?", ["an", "a", "the"], 0],
    ["I'd like ___ cheese sandwich.", ["a", "an", "–"], 0],
    ["We'll be there in ___ hour.", ["an", "a", "–"], 0, TB("h stumm → Vokal-Laut → an.", "Silent h → vowel sound → an.")],
    ["___ much is the cake?", ["How", "What", "Which"], 0],
    ["Can I pay ___ card?", ["by", "with the", "per"], 0],
    ["I'd ___ a tea, please.", ["like", "likes", "liking"], 0],
    ["Ich hätte gern … → I'd ___ a coffee.", "like"]
  ],
  talk: { t: TB("Im Coffeeshop", "In the coffee shop"), scene: TB("Du bestellst in einem Café in Manchester.", "You order in a café in Manchester."), who: "Barista", slots: {}, lines: `a|Hi there! What can I get you?|Hallo! Was darf's sein?|
me|Hi! Can I have a cappuccino, please?|Hi! Kann ich einen Cappuccino haben, bitte?||Hi, I'd like a cappuccino, please.; Could I get a cappuccino, please?
a|Sure. Small or large?|Klar. Klein oder groß?|
me|Large, please.|Groß, bitte.||A large one, please.
a|Anything else?|Sonst noch etwas?|
me|Yes, a piece of chocolate cake, please.|Ja, ein Stück Schokoladenkuchen, bitte.||And a chocolate cake, please.; Yes, a slice of chocolate cake.
a|To eat in or to take away?|Zum Hieressen oder zum Mitnehmen?|
me|To take away, please. How much is that?|Zum Mitnehmen, bitte. Was macht das?||Take away, please. How much is it?
a|That's six pounds twenty.|Das macht sechs Pfund zwanzig.|
me|Can I pay by card?|Kann ich mit Karte zahlen?||Can I pay by card, please?` }
});

lesson("A1", { id: "en-a1-04", t: TB("My family – Familie und Besitz", "My family – Family and possessives"),
  goal: TB("Du kannst deine Familie vorstellen und sagen, wem etwas gehört.", "You can introduce your family and say who things belong to."),
  words: `the family|die Familie||n|I have a big family.|Ich habe eine große Familie.
the parents|die Eltern||n|My parents live in Hamburg.|Meine Eltern wohnen in Hamburg.
the mother|die Mutter||n
the father|der Vater||n
the brother|der Bruder||n|I've got an older brother.|Ich habe einen älteren Bruder.
the sister|die Schwester||n
the son|der Sohn||n
the daughter|die Tochter||n
the grandparents|die Großeltern||n
the aunt|die Tante||n
the uncle|der Onkel||n
the cousin|der Cousin; die Cousine||n
the husband|der Ehemann||n
the wife|die Ehefrau||n
the boyfriend|der feste Freund||n
the girlfriend|die feste Freundin||n
married|verheiratet||adj|My sister is married.|Meine Schwester ist verheiratet.
single|ledig; Single||adj
older|älter||adj
younger|jünger||adj|My younger brother is a student.|Mein jüngerer Bruder ist Student.
the only child|das Einzelkind||n`,
  say: `Have you got any brothers or sisters?|Hast du Geschwister?
I've got one sister and two brothers.|Ich habe eine Schwester und zwei Brüder.
I'm an only child.|Ich bin Einzelkind.
This is my brother's car.|Das ist das Auto meines Bruders.
Her name is Clara.|Sie heißt Clara.
Our parents live near Munich.|Unsere Eltern wohnen in der Nähe von München.
Are you married?|Bist du verheiratet?`,
  gram: [
    ["h", TB("Possessivbegleiter", "Possessive determiners")],
    ["table", { head: [TB("Person", "person"), TB("Possessiv", "possessive"), TB("Beispiel", "example")], rows: [["I", "my", "my brother"], ["you", "your", "your sister"], ["he", "his", "his car"], ["she", "her", "her parents"], ["it", "its", "its name"], ["we", "our", "our flat"], ["they", "their", "their children"]], say: 2 }],
    ["h", TB("Das Genitiv-<i>s</i>", "The possessive <i>'s</i>")],
    ["p", TB("Wem gehört's? <b>Person + 's</b>: <b>Tom's</b> car (Toms Auto), my <b>sister's</b> flat. Bei Plural auf -s nur Apostroph: my <b>parents'</b> house.", "Whose is it? <b>person + 's</b>: <b>Tom's</b> car, my <b>sister's</b> flat. With plurals ending in -s, just an apostrophe: my <b>parents'</b> house.")],
    ["tip", TB("<b>his</b> = sein (bei Männern), <b>her</b> = ihr (bei Frauen) – es richtet sich nach dem <i>Besitzer</i>, nicht nach dem Ding: Anna and <b>her</b> brother.", "<b>his</b> for a male owner, <b>her</b> for a female owner – it depends on the <i>owner</i>, not the thing: Anna and <b>her</b> brother.")]
  ],
  drill: [
    ["Anna loves ___ brother.", ["her", "his", "its"], 0, TB("Besitzerin ist Anna → her.", "The owner is Anna → her.")],
    ["Paul and ___ wife live in Leeds.", ["his", "her", "their"], 0],
    ["We love ___ new flat.", ["our", "us", "we"], 0],
    ["This is ___ car. (das Auto von Tom)", ["Tom's", "Toms", "Tom"], 0],
    ["My ___ house is very old. (die Eltern)", ["parents'", "parent's", "parents's"], 0],
    ["Have you ___ any brothers or sisters?", ["got", "get", "have"], 0],
    ["Sie und ihr Mann → She and ___ husband.", "her"]
  ],
  talk: { t: TB("Familienfotos", "Family photos"), scene: TB("Deine Kollegin Jess zeigt dir Fotos auf ihrem Handy und fragt nach deiner Familie.", "Your colleague Jess shows you photos on her phone and asks about your family."), who: "Jess", slots: {}, lines: `a|Look, this is my brother Ben and his girlfriend.|Schau, das ist mein Bruder Ben und seine Freundin.|
me|They look nice! Is he older or younger?|Sie sehen nett aus! Ist er älter oder jünger?||Nice photo! Is he older than you?; They look nice. Is he your older brother?
a|He's two years younger. Have you got any brothers or sisters?|Er ist zwei Jahre jünger. Hast du Geschwister?|
me|Yes, I've got one sister. Her name is Clara.|Ja, ich habe eine Schwester. Sie heißt Clara.||I've got a sister called Clara.; Yes, one sister. Her name's Clara.
a|Does she live in Germany too?|Wohnt sie auch in Deutschland?|
me|Yes, she lives in Hamburg with her husband.|Ja, sie wohnt mit ihrem Mann in Hamburg.||Yes, in Hamburg with her husband.
a|And your parents?|Und deine Eltern?|
me|My parents live near Munich, in a small village.|Meine Eltern wohnen in der Nähe von München, in einem kleinen Dorf.||They live in a small village near Munich.` }
});

lesson("A1", { id: "en-a1-05", t: TB("My day – Tagesablauf und Present simple", "My day – Daily routine and the present simple"),
  goal: TB("Du kannst deinen Alltag beschreiben, die Uhrzeit sagen und Fragen mit <i>do / does</i> stellen.", "You can describe your daily routine, tell the time and ask questions with <i>do / does</i>."),
  words: `to get up|aufstehen||v|I get up at seven.|Ich stehe um sieben auf.
to have breakfast|frühstücken||v
to have a shower|duschen||v
to go to work|zur Arbeit gehen||v
to start|anfangen||v|Work starts at nine.|Die Arbeit fängt um neun an.
to finish|aufhören; beenden||v|I finish work at five.|Ich habe um fünf Feierabend.
to have lunch|zu Mittag essen||v
to get home|nach Hause kommen||v
to cook|kochen||v
to watch TV|fernsehen||v
to go to bed|ins Bett gehen||v|I usually go to bed at eleven.|Ich gehe normalerweise um elf ins Bett.
early|früh||adv
late|spät||adv
the morning|der Morgen; der Vormittag||n|in the morning|morgens
the afternoon|der Nachmittag||n
the evening|der Abend||n
at night|nachts||ph
o'clock|Uhr (volle Stunde)||x|It's seven o'clock.|Es ist sieben Uhr.
half past|halb (nach)||ph|It's half past eight.|Es ist halb neun.
quarter to|Viertel vor||ph|It's quarter to ten.|Es ist Viertel vor zehn.
on weekdays|unter der Woche||ph`,
  say: `What time is it? – It's half past seven.|Wie spät ist es? – Es ist halb acht.
What time do you get up?|Wann stehst du auf?
I start work at nine and finish at half past five.|Ich fange um neun an und höre um halb sechs auf.
She works from home on Fridays.|Freitags arbeitet sie von zu Hause.
Do you have breakfast every day?|Frühstückst du jeden Tag?
He doesn't drink coffee.|Er trinkt keinen Kaffee.`,
  gram: [
    ["h", TB("Present simple – Gewohnheiten und Routinen", "Present simple – habits and routines")],
    ["conj", { verbs: ["work", "study"], tenses: ["Present simple"] }],
    ["p", TB("Bei <b>he / she / it</b> kommt ein <b>-s</b> dazu: she work<b>s</b>, he go<b>es</b>, it stud<b>ies</b>. Fragen und Verneinung mit <b>do / does</b>: <b>Do</b> you work? <b>Does</b> she work? I <b>don't</b> work. He <b>doesn't</b> work – dann <i>ohne</i> -s!", "With <b>he / she / it</b> add <b>-s</b>: she work<b>s</b>, he go<b>es</b>, it stud<b>ies</b>. Questions and negatives with <b>do / does</b>: <b>Do</b> you work? <b>Does</b> she work? I <b>don't</b> work. He <b>doesn't</b> work – then <i>without</i> -s!")],
    ["h", TB("Die Uhrzeit", "Telling the time")],
    ["table", { head: [TB("Uhr", "clock"), TB("Englisch", "English")], rows: [["7:00", "seven o'clock"], ["7:15", "quarter past seven"], ["7:30", "half past seven"], ["7:45", "quarter to eight"], ["7:10", "ten past seven"], ["7:50", "ten to eight"]], say: 1 }],
    ["tip", TB("Achtung: <b>half past seven</b> = 7:30, also „halb <i>acht</i>“! Im Alltag hört man auch einfach <b>seven thirty</b>.", "Careful: German “halb acht” is 7:30 = <b>half past seven</b>. In everyday speech people also just say <b>seven thirty</b>.")]
  ],
  th: "present",
  forms: { verbs: ["work", "go", "watch", "study", "have", "do"], tenses: ["Present simple"] },
  drill: [
    ["She ___ at eight every morning.", ["gets up", "get up", "getting up"], 0],
    ["___ you work on Saturdays?", ["Do", "Does", "Are"], 0],
    ["___ your brother live in Berlin?", ["Does", "Do", "Is"], 0],
    ["He doesn't ___ coffee.", ["drink", "drinks", "drinking"], 0, TB("Nach doesn't kein -s mehr.", "No -s after doesn't.")],
    ["7:30 → It's ___ seven.", ["half past", "half to", "half"], 0],
    ["I go to bed late ___ the weekend.", ["at", "in", "on the"], 0, TB("Britisch: <i>at</i> the weekend (amerikanisch: on the weekend).", "British: <i>at</i> the weekend (American: on the weekend).")],
    ["My sister ___ in a bank. (work)", "works"]
  ],
  talk: { t: TB("Ein ganz normaler Tag", "Just an ordinary day"), scene: TB("Dein neuer Mitbewohner Josh möchte wissen, wie dein Tag so aussieht.", "Your new flatmate Josh wants to know what your day looks like."), who: "Josh", slots: {}, lines: `a|So, what time do you usually get up?|Und, wann stehst du normalerweise auf?|
me|I usually get up at half past six.|Ich stehe normalerweise um halb sieben auf.||At half past six.; I get up at six thirty.
a|Wow, early! Do you have breakfast at home?|Wow, früh! Frühstückst du zu Hause?|
me|No, I don't. I have a coffee at work.|Nein. Ich trinke einen Kaffee in der Arbeit.||No, I have breakfast at work.; Not really, just a coffee at work.
a|What time do you finish work?|Wann hast du Feierabend?|
me|I finish at five, and then I go to the gym.|Ich höre um fünf auf und dann gehe ich ins Fitnessstudio.||At five. Then I go to the gym.
a|Nice. I work from home, so I get up at nine!|Schön. Ich arbeite von zu Hause, also stehe ich um neun auf!|
me|Lucky you! Do you work on Fridays?|Du Glücklicher! Arbeitest du freitags?||Lucky you!; That's nice! Do you work every day?` }
});
