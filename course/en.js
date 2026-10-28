/* PLM course: en (generated from src/course/en/ by build.py) */
(() => {
const C = { levels: ["A1", "A2", "B1", "B2"].map((id) => ({ id, lessons: [] })) };
const lesson = (lv, o) => C.levels.find((l) => l.id === lv).lessons.push(o);
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

/* English A1 · 6–10 */
lesson("A1", { id: "en-a1-06", t: TB("Free time – Hobbys und Häufigkeit", "Free time – Hobbies and how often"),
  goal: TB("Du kannst über Hobbys sprechen, sagen, was du (nicht) magst und wie oft du etwas machst.", "You can talk about hobbies, say what you like or don't like and how often you do things."),
  words: `the hobby|das Hobby||n|What are your hobbies?|Was sind deine Hobbys?
free time|Freizeit||n|What do you do in your free time?|Was machst du in deiner Freizeit?
to like|mögen||v|I like reading.|Ich lese gern.
to love|lieben; sehr gern mögen||v|I love cooking for friends.|Ich koche total gern für Freunde.
to hate|hassen||v|I hate running in the rain.|Ich hasse es, im Regen zu laufen.
to enjoy|genießen; Spaß haben an||v|Do you enjoy your job?|Macht dir deine Arbeit Spaß?
to go swimming|schwimmen gehen||v
to go running|laufen gehen; joggen||v
to play football|Fußball spielen||v
to play the guitar|Gitarre spielen||v
to read|lesen||v
to travel|reisen||v
to meet friends|Freunde treffen||v
always|immer||adv
usually|normalerweise||adv|I usually go running on Sundays.|Ich gehe sonntags normalerweise laufen.
often|oft||adv
sometimes|manchmal||adv
never|nie||adv|I never watch TV.|Ich schaue nie fern.
once a week|einmal pro Woche||ph
twice a month|zweimal im Monat||ph`,
  say: `What do you do in your free time?|Was machst du in deiner Freizeit?
I love going to concerts.|Ich gehe total gern auf Konzerte.
I'm not really into sport.|Sport ist nicht so mein Ding.
How often do you go to the gym?|Wie oft gehst du ins Fitnessstudio?
I go three times a week.|Ich gehe dreimal pro Woche.
I don't like getting up early.|Ich stehe nicht gern früh auf.
Do you want to play tennis on Saturday?|Willst du am Samstag Tennis spielen?`,
  gram: [
    ["h", TB("<i>like / love / hate</i> + -ing", "<i>like / love / hate</i> + -ing")],
    ["p", TB("Nach <b>like, love, hate, enjoy</b> steht meist die <b>-ing-Form</b>: I like read<b>ing</b>. She loves danc<b>ing</b>. „Ich spiele gern …“ heißt also <b>I like playing …</b>", "After <b>like, love, hate, enjoy</b> you usually use the <b>-ing form</b>: I like read<b>ing</b>. She loves danc<b>ing</b>.")],
    ["h", TB("Wie oft? – Häufigkeitsadverbien", "How often? – Adverbs of frequency")],
    ["table", { head: [TB("Adverb", "adverb"), TB("Stellung", "position"), TB("Beispiel", "example")], rows: [["always / usually / often / sometimes / never", TB("vor dem Vollverb", "before the main verb"), "I often go swimming."], ["", TB("nach <i>be</i>", "after <i>be</i>"), "She is always late."], ["once a week, every day", TB("am Satzende", "at the end"), "I go running every day."]], say: 2 }],
    ["tip", TB("Englisch hat kein „gern“: <s>I play gladly football</s> → <b>I like playing football</b>. Und „Ich mache Sport“ heißt <b>I do sport</b>, nicht <s>make</s>.", "English has no word for German “gern”: <b>I like playing football</b>. And “Sport machen” is <b>do sport</b>, not <s>make</s>.")]
  ],
  quiz: ["en-mistakes"],
  drill: [
    ["I love ___ to music.", ["listening", "listen", "to listening"], 0],
    ["She ___ late for work.", ["is never", "never is", "never"], 0, TB("Bei <i>be</i> steht das Adverb dahinter.", "With <i>be</i> the adverb goes after it.")],
    ["We ___ go to the cinema on Fridays.", ["usually", "are usually", "usual"], 0],
    ["How ___ do you go swimming?", ["often", "much", "many"], 0],
    ["I go to the gym three ___ a week.", ["times", "time", "once"], 0],
    ["Do you ___ sport?", ["do", "make", "play"], 0],
    ["Ich lese gern. → I like ___.", "reading"]
  ],
  talk: { t: TB("Wochenendpläne", "Weekend plans"), scene: TB("Beim Mittagessen fragt dich deine Kollegin Mia nach deinen Hobbys.", "At lunch your colleague Mia asks about your hobbies."), who: "Mia", slots: {}, lines: `a|So, what do you do in your free time?|Und, was machst du in deiner Freizeit?|
me|I love cooking and I often go running.|Ich koche total gern und gehe oft laufen.||I like cooking and running.; I often go running and I love cooking.
a|Running? How often do you go?|Laufen? Wie oft gehst du?|
me|About three times a week, usually in the morning.|Etwa dreimal pro Woche, meistens morgens.||Three times a week.; Usually three times a week, in the morning.
a|Impressive! I hate running. I prefer swimming.|Beeindruckend! Ich hasse Laufen. Ich schwimme lieber.|
me|Swimming is great too. Do you go every week?|Schwimmen ist auch toll. Gehst du jede Woche?||Nice! How often do you go swimming?
a|Yes, every Saturday. Do you want to come with me?|Ja, jeden Samstag. Willst du mitkommen?|
me|Sure, why not! What time do you go?|Klar, warum nicht! Um wie viel Uhr gehst du?||Yes, I'd love to! What time?; Why not! What time?` }
});

lesson("A1", { id: "en-a1-07", t: TB("In town – Orte und Wegbeschreibung", "In town – Places and directions"),
  goal: TB("Du kannst nach dem Weg fragen, eine Wegbeschreibung verstehen und sagen, was es wo gibt.", "You can ask the way, understand directions and say what there is where."),
  words: `the station|der Bahnhof||n|Excuse me, where's the station?|Entschuldigung, wo ist der Bahnhof?
the bus stop|die Bushaltestelle||n
the supermarket|der Supermarkt||n
the chemist's|die Drogerie; die Apotheke||n|Is there a chemist's near here?|Gibt es hier in der Nähe eine Apotheke?
the bank|die Bank||n
the post office|die Post||n
the museum|das Museum||n
the park|der Park||n
the square|der Platz||n
the street|die Straße||n
the corner|die Ecke||n|It's on the corner.|Es ist an der Ecke.
the traffic lights|die Ampel||n|Turn left at the traffic lights.|Bieg an der Ampel links ab.
to turn left|links abbiegen||v
to turn right|rechts abbiegen||v
straight on|geradeaus||ph|Go straight on.|Geh geradeaus.
next to|neben||ph|The bank is next to the café.|Die Bank ist neben dem Café.
opposite|gegenüber||x|The museum is opposite the park.|Das Museum ist gegenüber dem Park.
between|zwischen||x
near|in der Nähe von||x
far|weit||adj|Is it far? – No, it's a five-minute walk.|Ist es weit? – Nein, fünf Minuten zu Fuß.`,
  say: `Excuse me, how do I get to the station?|Entschuldigung, wie komme ich zum Bahnhof?
Is there a supermarket near here?|Gibt es hier in der Nähe einen Supermarkt?
Go straight on and take the second left.|Gehen Sie geradeaus und nehmen Sie die zweite links.
It's on your right, opposite the bank.|Es ist auf der rechten Seite, gegenüber der Bank.
Is it far from here?|Ist es weit von hier?
It's about ten minutes on foot.|Es sind etwa zehn Minuten zu Fuß.`,
  gram: [
    ["h", TB("<i>there is / there are</i> – „es gibt“", "<i>there is / there are</i>")],
    ["p", TB("<b>There is</b> (there's) + Einzahl, <b>there are</b> + Mehrzahl: <b>There's</b> a café on the corner. <b>There are</b> two banks in the square. Frage: <b>Is there</b> a bus stop near here?", "<b>There is</b> (there's) + singular, <b>there are</b> + plural: <b>There's</b> a café on the corner. <b>There are</b> two banks in the square. Question: <b>Is there</b> a bus stop near here?")],
    ["h", TB("Wo? – Präpositionen", "Where? – Prepositions")],
    ["table", { head: [TB("Präposition", "preposition"), TB("Beispiel", "example")], rows: [["next to", "The bank is next to the café."], ["opposite", "The museum is opposite the park."], ["between", "The shop is between the bank and the station."], ["on the corner", "There's a pharmacy on the corner."], ["at the end of", "It's at the end of the street."]], say: 1 }],
    ["tip", TB("Nicht <s>It gives a café</s> – „es gibt“ heißt <b>there is / there are</b>.", "German “es gibt” is <b>there is / there are</b> – never <s>it gives</s>.")]
  ],
  quiz: ["en-mistakes"],
  drill: [
    ["___ a supermarket near here?", ["Is there", "Are there", "Gives it"], 0],
    ["There ___ two museums in the old town.", ["are", "is", "be"], 0],
    ["The bank is ___ to the post office.", ["next", "near", "opposite"], 0],
    ["Turn left ___ the traffic lights.", ["at", "on", "in"], 0],
    ["The café is ___ the bank and the station.", ["between", "opposite", "next"], 0],
    ["Go ___ on for 200 metres.", ["straight", "right", "direct"], 0],
    ["Es gibt einen Park. → ___ a park.", "There's; There is"]
  ],
  talk: { t: TB("Wo ist das Museum?", "Where's the museum?"), scene: TB("Du bist in York und suchst das Eisenbahnmuseum. Du fragst eine Passantin.", "You're in York looking for the railway museum. You ask a passer-by."), who: "Passerby", slots: {}, lines: `me|Excuse me, how do I get to the railway museum?|Entschuldigung, wie komme ich zum Eisenbahnmuseum?||Excuse me, where's the railway museum?; Sorry, can you tell me the way to the railway museum?
a|Oh, it's not far. Go straight on and turn left at the traffic lights.|Oh, es ist nicht weit. Gehen Sie geradeaus und biegen Sie an der Ampel links ab.|
me|Straight on and left at the traffic lights. OK.|Geradeaus und an der Ampel links. Okay.||Left at the traffic lights, OK.
a|Then walk past the station. The museum is behind the station, on your right.|Dann gehen Sie am Bahnhof vorbei. Das Museum ist hinter dem Bahnhof, rechts.|
me|Is it far from here?|Ist es weit von hier?||How far is it?
a|No, it's about ten minutes on foot.|Nein, etwa zehn Minuten zu Fuß.|
me|Great, thank you very much!|Super, vielen Dank!||Thanks a lot!; Thank you so much!
a|You're welcome. Enjoy the museum!|Gern geschehen. Viel Spaß im Museum!|` }
});

lesson("A1", { id: "en-a1-08", t: TB("Shopping – Kleidung, Preise, <i>this / that</i>", "Shopping – Clothes, prices, <i>this / that</i>"),
  goal: TB("Du kannst im Laden nach Größen und Preisen fragen, anprobieren und sagen, was du gerade machst.", "You can ask about sizes and prices, try things on and say what you're doing right now."),
  words: `the shop|der Laden||n
the clothes|die Kleidung||n
the shirt|das Hemd||n
the T-shirt|das T-Shirt||n
the jumper|der Pullover||n|I'm looking for a warm jumper.|Ich suche einen warmen Pullover.
the jacket|die Jacke||n
the trousers|die Hose||n|These trousers are too long.|Diese Hose ist zu lang.
the jeans|die Jeans||n
the shoes|die Schuhe||n
the dress|das Kleid||n
the size|die Größe||n|What size are you?|Welche Größe hast du?
the changing room|die Umkleidekabine||n|Where are the changing rooms?|Wo sind die Umkleidekabinen?
to try on|anprobieren||v|Can I try it on?|Kann ich es anprobieren?
to look for|suchen||v
to fit|passen (Größe)||v|It doesn't fit.|Es passt nicht.
expensive|teuer||adj
cheap|billig; günstig||adj
too big|zu groß||ph
the sale|der Schlussverkauf||n|Is this in the sale?|Ist das reduziert?
the receipt|der Kassenbon||n`,
  say: `I'm just looking, thanks.|Ich schaue nur, danke.
I'm looking for a black jacket.|Ich suche eine schwarze Jacke.
Have you got this in a medium?|Haben Sie das in M?
Can I try these on?|Kann ich die anprobieren?
It's a bit too small.|Es ist ein bisschen zu klein.
How much are these shoes?|Wie viel kosten diese Schuhe?
I'll take it.|Ich nehme es.`,
  gram: [
    ["h", TB("<i>this, that, these, those</i>", "<i>this, that, these, those</i>")],
    ["table", { head: ["", TB("nah", "near"), TB("weiter weg", "further away")], rows: [[TB("Einzahl", "singular"), "this jacket", "that jacket"], [TB("Mehrzahl", "plural"), "these shoes", "those shoes"]], say: 1 }],
    ["h", TB("Present progressive – was gerade passiert", "Present progressive – what's happening now")],
    ["p", TB("<b>am / is / are + -ing</b>: I'<b>m looking</b> for a jacket. She'<b>s trying</b> it on. Für Dinge, die genau jetzt passieren – Routinen dagegen im Present simple.", "<b>am / is / are + -ing</b>: I'<b>m looking</b> for a jacket. She'<b>s trying</b> it on. For things happening right now – routines use the present simple.")],
    ["conj", { verbs: ["look", "try"], tenses: ["Present progressive"] }],
    ["tip", TB("<b>trousers, jeans, glasses</b> sind im Englischen Mehrzahl: <b>These</b> trousers <b>are</b> too long. Ein Stück: <b>a pair of</b> jeans.", "<b>trousers, jeans, glasses</b> are plural in English: <b>These</b> trousers <b>are</b> too long. One item: <b>a pair of</b> jeans.")]
  ],
  th: "present",
  quiz: ["en-tense"],
  forms: { verbs: ["look", "try", "wear", "buy", "pay"], tenses: ["Present progressive"] },
  drill: [
    ["How much are ___ shoes? (hier, in meiner Hand)", ["these", "this", "that"], 0],
    ["I like ___ dress in the window over there.", ["that", "these", "this"], 0],
    ["These jeans ___ too tight.", ["are", "is", "be"], 0],
    ["Sorry, I can't talk now – I'm ___ a shirt on.", ["trying", "try", "tries"], 0],
    ["She usually ___ jeans to work.", ["wears", "is wearing", "wear"], 0, TB("Gewohnheit → Present simple.", "Habit → present simple.")],
    ["Can I try ___ on?", ["it", "on it", "its"], 0],
    ["Ich suche gerade eine Jacke. → I'm ___ for a jacket.", "looking"]
  ],
  talk: { t: TB("Im Kleidungsgeschäft", "In the clothes shop"), scene: TB("Du suchst in einem Laden in Dublin eine Jacke.", "You're looking for a jacket in a shop in Dublin."), who: "Shop assistant", slots: {}, lines: `a|Hi, can I help you?|Hallo, kann ich Ihnen helfen?|
me|Yes, I'm looking for a warm jacket.|Ja, ich suche eine warme Jacke.||Yes, please. I'm looking for a jacket.
a|These jackets here are very warm. What size are you?|Diese Jacken hier sind sehr warm. Welche Größe haben Sie?|
me|Medium, I think. Can I try this one on?|M, glaube ich. Kann ich die hier anprobieren?||I'm a medium. Can I try it on?
a|Of course. The changing rooms are over there.|Natürlich. Die Umkleiden sind da drüben.|
me|It's a bit too big. Have you got it in a small?|Sie ist etwas zu groß. Haben Sie sie in S?||It's too big. Do you have a small?
a|Yes, here you are. How's that?|Ja, bitte schön. Wie ist die?|
me|Perfect! How much is it?|Perfekt! Wie viel kostet sie?||It fits! How much is it?; Great. I'll take it. How much is it?` }
});

lesson("A1", { id: "en-a1-09", t: TB("Last weekend – Past simple", "Last weekend – The past simple"),
  goal: TB("Du kannst erzählen, was du am Wochenende gemacht hast, und danach fragen.", "You can say what you did at the weekend and ask others about it."),
  words: `yesterday|gestern||adv|Yesterday I stayed at home.|Gestern bin ich zu Hause geblieben.
last weekend|letztes Wochenende||ph|What did you do last weekend?|Was hast du letztes Wochenende gemacht?
last night|gestern Abend; letzte Nacht||ph
ago|vor (zeitlich)||adv|I was in London two years ago.|Ich war vor zwei Jahren in London.
to visit|besuchen||v|I visited my parents.|Ich habe meine Eltern besucht.
to stay|bleiben; übernachten||v
to watch|anschauen||v
to go out|ausgehen||v
to see|sehen||v
to eat|essen||v
to drink|trinken||v
to buy|kaufen||v
to have a party|eine Party feiern||v
the concert|das Konzert||n
the film|der Film||n|We saw a great film.|Wir haben einen tollen Film gesehen.
tired|müde||adj
boring|langweilig||adj
amazing|toll; unglaublich||adj
relaxing|entspannend||adj
the weekend|das Wochenende||n`,
  say: `What did you do last weekend?|Was hast du letztes Wochenende gemacht?
I visited my grandparents.|Ich habe meine Großeltern besucht.
We went to a concert on Saturday.|Wir sind am Samstag auf ein Konzert gegangen.
It was amazing!|Es war toll!
I didn't do much. I stayed at home.|Ich habe nicht viel gemacht. Ich bin zu Hause geblieben.
Did you have a good weekend?|Hattest du ein schönes Wochenende?`,
  gram: [
    ["h", TB("Past simple – abgeschlossene Vergangenheit", "Past simple – finished past")],
    ["p", TB("Regelmäßig: <b>-ed</b>: work<b>ed</b>, visit<b>ed</b>, stay<b>ed</b>. Viele häufige Verben sind unregelmäßig: go → <b>went</b>, see → <b>saw</b>, eat → <b>ate</b>, have → <b>had</b>, buy → <b>bought</b>. Fragen und Verneinung mit <b>did</b> + Grundform: <b>Did</b> you <b>go</b>? I <b>didn't go</b>.", "Regular: <b>-ed</b>: work<b>ed</b>, visit<b>ed</b>, stay<b>ed</b>. Many common verbs are irregular: go → <b>went</b>, see → <b>saw</b>, eat → <b>ate</b>, have → <b>had</b>, buy → <b>bought</b>. Questions and negatives with <b>did</b> + base form: <b>Did</b> you <b>go</b>? I <b>didn't go</b>.")],
    ["conj", { verbs: ["go", "visit"], tenses: ["Stammformen", "Past simple"] }],
    ["h", TB("<i>was / were</i>", "<i>was / were</i>")],
    ["ex", [["It was great.", "Es war toll."], ["We were in Paris.", "Wir waren in Paris."], ["Were you at home? – No, I wasn't.", "Warst du zu Hause? – Nein."]]],
    ["tip", TB("Wo im Deutschen das Perfekt steht („Ich <i>bin</i> ins Kino <i>gegangen</i>“), nimmt man im Englischen bei fertigen Zeitpunkten das <b>past simple</b>: I <b>went</b> to the cinema yesterday.", "Where German uses the perfect (“Ich bin ins Kino gegangen”), English uses the <b>past simple</b> with a finished time: I <b>went</b> to the cinema yesterday.")]
  ],
  th: "pastperf",
  quiz: ["en-irr", "en-ppps"],
  forms: { verbs: ["go", "see", "have", "buy", "eat", "visit", "watch"], tenses: ["Past simple"] },
  drill: [
    ["Yesterday I ___ to the cinema.", ["went", "go", "have gone"], 0],
    ["___ you have a good weekend?", ["Did", "Do", "Were"], 0],
    ["We didn't ___ out last night.", ["go", "went", "going"], 0],
    ["The film ___ really boring.", ["was", "were", "did"], 0],
    ["I saw her two weeks ___.", ["ago", "before", "since"], 0],
    ["They ___ at home on Sunday.", ["were", "was", "did"], 0],
    ["Wir haben Pizza gegessen. → We ___ pizza.", "ate"]
  ],
  talk: { t: TB("Montagmorgen im Büro", "Monday morning at the office"), scene: TB("Dein Kollege Tom fragt dich nach deinem Wochenende.", "Your colleague Tom asks about your weekend."), who: "Tom", slots: {}, lines: `a|Morning! Did you have a good weekend?|Morgen! Hattest du ein schönes Wochenende?|
me|Yes, thanks! I visited my sister in Hamburg.|Ja, danke! Ich habe meine Schwester in Hamburg besucht.||Yes, it was great. I visited my sister.; Yes, I went to Hamburg to see my sister.
a|Nice! What did you do there?|Schön! Was habt ihr dort gemacht?|
me|We went to a concert on Saturday. It was amazing.|Wir waren am Samstag auf einem Konzert. Es war toll.||We went to a concert. It was amazing!
a|Lucky you! I didn't do much. I stayed at home.|Du Glückspilz! Ich habe nicht viel gemacht. Ich bin zu Hause geblieben.|
me|That sounds relaxing. Did you watch anything good?|Klingt entspannt. Hast du was Gutes geschaut?||Sounds relaxing! Did you watch a film?
a|Yes, I watched a really funny film.|Ja, ich habe einen echt lustigen Film geschaut.|
me|Cool, what was it called?|Cool, wie hieß er?||What was the name of the film?; Which film was it?` }
});

lesson("A1", { id: "en-a1-10", t: TB("Travelling – Zug, Hotel, <i>can</i>", "Travelling – Trains, hotels, <i>can</i>"),
  goal: TB("Du kannst Fahrkarten kaufen, im Hotel einchecken und höflich um etwas bitten.", "You can buy tickets, check in at a hotel and ask for things politely."),
  words: `the ticket|die Fahrkarte; das Ticket||n|A return ticket to Oxford, please.|Eine Rückfahrkarte nach Oxford, bitte.
a single|eine einfache Fahrt||ph
a return|eine Hin- und Rückfahrt||ph
the platform|das Gleis||n|Which platform does the train leave from?|Von welchem Gleis fährt der Zug?
to leave|abfahren; verlassen||v
to arrive|ankommen||v|What time does the train arrive?|Wann kommt der Zug an?
delayed|verspätet||adj|The train is delayed.|Der Zug hat Verspätung.
cancelled|gestrichen; ausgefallen||adj
to change trains|umsteigen||v
the flight|der Flug||n
the luggage|das Gepäck||n|Can I leave my luggage here?|Kann ich mein Gepäck hier lassen?
the reservation|die Reservierung||n|I have a reservation for two nights.|Ich habe eine Reservierung für zwei Nächte.
the single room|das Einzelzimmer||n
the double room|das Doppelzimmer||n
to check in|einchecken||v
to check out|auschecken||v|What time do I have to check out?|Bis wann muss ich auschecken?
the key|der Schlüssel||n
the lift|der Aufzug||n|The lift is on the left.|Der Aufzug ist links.
breakfast is included|Frühstück ist inklusive||ph
the Wi-Fi password|das WLAN-Passwort||n`,
  say: `A return to Oxford, please.|Eine Rückfahrkarte nach Oxford, bitte.
Which platform is it?|Welches Gleis ist es?
Do I have to change trains?|Muss ich umsteigen?
I have a reservation under the name Becker.|Ich habe eine Reservierung auf den Namen Becker.
Can I have the Wi-Fi password, please?|Kann ich bitte das WLAN-Passwort haben?
Could you call me a taxi?|Könnten Sie mir ein Taxi rufen?
Is breakfast included?|Ist Frühstück inklusive?`,
  gram: [
    ["h", TB("<i>can / can't</i> und <i>could</i>", "<i>can / can't</i> and <i>could</i>")],
    ["p", TB("<b>can</b> + Grundform, für alle Personen gleich (kein -s!): I <b>can</b> swim. She <b>can</b> speak French. Verneinung: <b>can't</b>. Fragen: <b>Can</b> I pay by card? Noch höflicher: <b>Could</b> you help me?", "<b>can</b> + base form, the same for every person (no -s!): I <b>can</b> swim. She <b>can</b> speak French. Negative: <b>can't</b>. Questions: <b>Can</b> I pay by card? More polite: <b>Could</b> you help me?")],
    ["table", { head: [TB("wofür?", "use"), TB("Beispiel", "example")], rows: [[TB("Fähigkeit", "ability"), "I can't drive."], [TB("Erlaubnis", "permission"), "Can I leave my bag here?"], [TB("höfliche Bitte", "polite request"), "Could you open the window, please?"]], say: 1 }],
    ["tip", TB("<b>have to</b> = müssen (Notwendigkeit): Do I <b>have to</b> change? – aber <b>don't have to</b> = nicht müssen, <i>nicht</i> „nicht dürfen“!", "<b>have to</b> = necessity: Do I <b>have to</b> change? – <b>don't have to</b> means it isn't necessary, <i>not</i> that it's forbidden!")]
  ],
  th: "modals",
  quiz: ["en-modal"],
  drill: [
    ["She ___ speak three languages.", ["can", "cans", "can to"], 0],
    ["___ you tell me the way to the station, please?", ["Could", "Must", "Do"], 0],
    ["I'm sorry, you ___ smoke here.", ["can't", "don't have to", "couldn't"], 0],
    ["Do I ___ change trains in Reading?", ["have to", "must", "can to"], 0],
    ["The train ___ at 10:15 from platform 4.", ["leaves", "leave", "is leave"], 0],
    ["I have a reservation ___ two nights.", ["for", "since", "during"], 0],
    ["Kann ich mit Karte zahlen? → ___ I pay by card?", "Can; Could"]
  ],
  talk: { t: TB("Check-in im Hotel", "Checking in at the hotel"), scene: TB("Du kommst abends in deinem Hotel in Bath an.", "You arrive at your hotel in Bath in the evening."), who: "Receptionist", slots: { name: "Becker" }, lines: `a|Good evening! How can I help you?|Guten Abend! Wie kann ich Ihnen helfen?|
me|Good evening. I have a reservation under the name {name}.|Guten Abend. Ich habe eine Reservierung auf den Namen …||Hi, I've got a reservation. My name is {name}.; Good evening, I have a booking under {name}.
a|Ah yes, a double room for two nights. Can I see your passport, please?|Ah ja, ein Doppelzimmer für zwei Nächte. Kann ich bitte Ihren Pass sehen?|
me|Sure, here you are. Is breakfast included?|Klar, bitte schön. Ist Frühstück inklusive?||Here you are. Is breakfast included?
a|Yes, it's from seven to ten in the restaurant.|Ja, von sieben bis zehn im Restaurant.|
me|Great. Can I have the Wi-Fi password, please?|Super. Kann ich bitte das WLAN-Passwort haben?||And what's the Wi-Fi password?; Could I have the Wi-Fi password?
a|It's on your key card. Your room is 214, on the second floor.|Es steht auf Ihrer Schlüsselkarte. Ihr Zimmer ist 214, im zweiten Stock.|
me|Thank you. What time do I have to check out?|Danke. Bis wann muss ich auschecken?||Thanks! When is check-out?` }
});

/* English A2 · 1–4 */
lesson("A2", { id: "en-a2-01", t: TB("When I was a child – <i>used to</i>", "When I was a child – <i>used to</i>"),
  goal: TB("Du kannst von deiner Kindheit erzählen und sagen, was früher anders war.", "You can talk about your childhood and say what used to be different."),
  words: `the childhood|die Kindheit||n|I had a happy childhood.|Ich hatte eine glückliche Kindheit.
to grow up|aufwachsen||v|I grew up in a small village.|Ich bin in einem kleinen Dorf aufgewachsen.
the village|das Dorf||n
the primary school|die Grundschule||n
the teacher|der Lehrer; die Lehrerin||n
the toy|das Spielzeug||n
the neighbour|der Nachbar; die Nachbarin||n
to climb trees|auf Bäume klettern||v
to be afraid of|Angst haben vor||v|I was afraid of the dark.|Ich hatte Angst im Dunkeln.
shy|schüchtern||adj|I used to be very shy.|Früher war ich sehr schüchtern.
naughty|frech; unartig||adj
strict|streng||adj|My parents were quite strict.|Meine Eltern waren ziemlich streng.
the holidays|die Ferien||n|We spent the summer holidays at the lake.|Wir haben die Sommerferien am See verbracht.
to spend time|Zeit verbringen||v
to remember|sich erinnern||v|Do you remember your first teacher?|Erinnerst du dich an deine erste Lehrerin?
to miss|vermissen; verpassen||v
anymore|nicht mehr (mit not)||adv|I don't play the piano anymore.|Ich spiele nicht mehr Klavier.
nowadays|heutzutage||adv
when I was little|als ich klein war||ph`,
  say: `I grew up near Stuttgart.|Ich bin in der Nähe von Stuttgart aufgewachsen.
When I was a child, I used to play football every day.|Als Kind habe ich jeden Tag Fußball gespielt.
I didn't use to like vegetables.|Früher mochte ich kein Gemüse.
Did you use to have a pet?|Hattest du früher ein Haustier?
We used to spend every summer at my grandparents'.|Wir haben jeden Sommer bei meinen Großeltern verbracht.
I don't play the piano anymore.|Ich spiele nicht mehr Klavier.`,
  gram: [
    ["h", TB("<i>used to</i> – früher (aber heute nicht mehr)", "<i>used to</i> – past habits and states")],
    ["p", TB("<b>used to + Grundform</b> für Gewohnheiten und Zustände in der Vergangenheit, die es heute nicht mehr gibt: I <b>used to</b> live in Berlin. Verneinung und Frage mit <b>did</b>: I <b>didn't use to</b> … / <b>Did</b> you <b>use to</b> …? (ohne d!)", "<b>used to + base form</b> for past habits and states that are no longer true: I <b>used to</b> live in Berlin. Negative and question with <b>did</b>: I <b>didn't use to</b> … / <b>Did</b> you <b>use to</b> …? (no d!)")],
    ["ex", [["I used to be shy, but now I'm not.", "Früher war ich schüchtern, jetzt nicht mehr."], ["She used to have long hair.", "Sie hatte früher lange Haare."], ["Did you use to walk to school?", "Bist du früher zu Fuß zur Schule gegangen?"]]],
    ["tip", TB("Nicht verwechseln: <b>be used to</b> + -ing = an etwas gewöhnt sein: I'<b>m used to getting</b> up early.", "Don't confuse it with <b>be used to</b> + -ing = be accustomed to: I'<b>m used to getting</b> up early.")]
  ],
  quiz: ["en-irr"],
  forms: { verbs: ["grow", "spend", "have", "go", "be"], tenses: ["Past simple"] },
  drill: [
    ["I ___ live in Hamburg, but now I live in Munich.", ["used to", "use to", "was used to"], 0],
    ["Did you ___ have a pet?", ["use to", "used to", "using"], 0],
    ["She didn't ___ like school.", ["use to", "used to", "uses to"], 0],
    ["I ___ up in a small village near Ulm.", ["grew", "growed", "grown"], 0],
    ["I don't play tennis ___.", ["anymore", "no more", "yet"], 0],
    ["I'm ___ to working late – it's no problem.", ["used", "use", "using"], 0, TB("be used to = gewöhnt sein.", "be used to = be accustomed to.")],
    ["Früher hatte ich lange Haare. → I ___ to have long hair.", "used"]
  ],
  talk: { t: TB("Alte Fotos", "Old photos"), scene: TB("Deine Freundin Hannah findet Kinderfotos von dir.", "Your friend Hannah finds childhood photos of you."), who: "Hannah", slots: {}, lines: `a|Is that you? You look so cute! Where was this?|Bist du das? Du siehst so süß aus! Wo war das?|
me|That's me at my grandparents' house. I grew up near Stuttgart.|Das bin ich bei meinen Großeltern. Ich bin in der Nähe von Stuttgart aufgewachsen.||That's me at my grandparents'. I grew up near Stuttgart.
a|Did you use to spend a lot of time there?|Warst du früher oft dort?|
me|Yes, we used to spend every summer there.|Ja, wir haben jeden Sommer dort verbracht.||Yes, every summer.; Yes, we used to go there every summer.
a|And were you a naughty child?|Und warst du ein freches Kind?|
me|No, I used to be very shy, actually.|Nein, eigentlich war ich früher sehr schüchtern.||Not at all, I used to be quite shy.
a|Really? You're not shy anymore!|Echt? Du bist gar nicht mehr schüchtern!|
me|No, not anymore. I changed a lot at university.|Nein, nicht mehr. An der Uni habe ich mich sehr verändert.||Not anymore! University changed me.` }
});

lesson("A2", { id: "en-a2-02", t: TB("What happened? – Past continuous", "What happened? – The past continuous"),
  goal: TB("Du kannst erzählen, was gerade passierte, als etwas anderes geschah – z. B. bei einem kleinen Unfall.", "You can say what was happening when something else happened – for example in a small accident."),
  words: `to happen|passieren||v|What happened?|Was ist passiert?
the accident|der Unfall||n
to fall over|hinfallen||v|I fell over and hurt my knee.|Ich bin hingefallen und habe mir das Knie verletzt.
to break|brechen; kaputt machen||v
to drop|fallen lassen||v|I dropped my phone.|Mir ist das Handy runtergefallen.
to hurt|verletzen; wehtun||v
to lose|verlieren||v
to steal|stehlen||v|Someone stole my bike.|Jemand hat mein Fahrrad gestohlen.
to ring|klingeln; anrufen||v
suddenly|plötzlich||adv|Suddenly the lights went out.|Plötzlich ging das Licht aus.
while|während||x|While I was cooking, the phone rang.|Während ich kochte, klingelte das Telefon.
when|als||x
luckily|zum Glück||adv
unfortunately|leider||adv
in the end|am Ende||ph
the police|die Polizei||n
the witness|der Zeuge; die Zeugin||n
the screen|der Bildschirm||n|The screen is broken.|Der Bildschirm ist kaputt.
embarrassing|peinlich||adj
to cycle|Rad fahren||v`,
  say: `What were you doing when it happened?|Was hast du gerade gemacht, als es passierte?
I was cycling home when it started to rain.|Ich fuhr gerade nach Hause, als es anfing zu regnen.
While I was waiting for the bus, I met an old friend.|Während ich auf den Bus wartete, traf ich einen alten Freund.
I dropped my phone and the screen broke.|Mir ist das Handy runtergefallen und der Bildschirm ist kaputtgegangen.
Luckily, nobody was hurt.|Zum Glück wurde niemand verletzt.
It was so embarrassing!|Das war so peinlich!`,
  gram: [
    ["h", TB("Past continuous: <i>was / were + -ing</i>", "Past continuous: <i>was / were + -ing</i>")],
    ["p", TB("Für eine Handlung, die <b>gerade im Gange war</b>: I <b>was cooking</b>. Unterbricht etwas Kurzes diese Handlung, steht es im <b>past simple</b>: I <b>was cooking</b> when the phone <b>rang</b>.", "For an action that was <b>in progress</b>: I <b>was cooking</b>. A short action that interrupts it is in the <b>past simple</b>: I <b>was cooking</b> when the phone <b>rang</b>.")],
    ["table", { head: [TB("Teil", "part"), TB("Beispiel", "example")], rows: [[TB("Hintergrund (lange)", "background (long)"), "I was walking to work …"], [TB("Ereignis (kurz)", "event (short)"), "… when I saw the accident."], [TB("zwei Dinge gleichzeitig", "two things at the same time"), "While I was cooking, he was watching TV."]], say: 1 }],
    ["tip", TB("<b>while</b> + lange Handlung (past continuous), <b>when</b> meist + kurze Handlung (past simple).", "<b>while</b> + long action (past continuous), <b>when</b> usually + short action (past simple).")]
  ],
  th: "pastcont",
  quiz: ["en-tense"],
  forms: { verbs: ["walk", "cook", "wait", "drive", "sleep"], tenses: ["Past simple"] },
  drill: [
    ["I ___ dinner when the phone rang.", ["was cooking", "cooked", "am cooking"], 0],
    ["While we ___ TV, the lights went out.", ["were watching", "watched", "was watching"], 0],
    ["She ___ over while she was running.", ["fell", "was falling", "falls"], 0],
    ["___ I was waiting, I read the news.", ["While", "When", "During"], 0],
    ["What ___ you doing at 8 o'clock last night?", ["were", "was", "did"], 0],
    ["Someone ___ my bike yesterday.", ["stole", "was stealing", "stealed"], 0],
    ["Es regnete, als ich ankam. → It ___ when I arrived.", "was raining"]
  ],
  talk: { t: TB("Ein Missgeschick", "A little mishap"), scene: TB("Dein Freund Sam sieht dein kaputtes Handy und fragt, was passiert ist.", "Your friend Sam sees your broken phone and asks what happened."), who: "Sam", slots: {}, lines: `a|Oh no, your phone! What happened?|Oh nein, dein Handy! Was ist passiert?|
me|I dropped it this morning. I was cycling to work.|Es ist mir heute Morgen runtergefallen. Ich war mit dem Rad auf dem Weg zur Arbeit.||I dropped it while I was cycling to work.
a|You were using your phone while you were cycling?|Du hast beim Radfahren das Handy benutzt?|
me|No, it was in my pocket. Suddenly a dog ran into the street.|Nein, es war in meiner Tasche. Plötzlich rannte ein Hund auf die Straße.||No! Suddenly a dog ran in front of me.
a|Oh dear! Did you fall off?|Oje! Bist du runtergefallen?|
me|Yes, I fell off, and my phone fell out of my pocket.|Ja, ich bin runtergefallen und mein Handy ist aus der Tasche gefallen.||Yes, and the phone fell out of my pocket.
a|Are you OK?|Geht's dir gut?|
me|Luckily, I'm fine. Just the screen is broken.|Zum Glück geht's mir gut. Nur der Bildschirm ist kaputt.||I'm fine, luckily. Only the screen broke.` }
});

lesson("A2", { id: "en-a2-03", t: TB("Plans – Zukunft und Wetter", "Plans – The future and the weather"),
  goal: TB("Du kannst über Pläne, Verabredungen und Vorhersagen sprechen – und über das Wetter.", "You can talk about plans, arrangements and predictions – and about the weather."),
  words: `the plan|der Plan||n|Have you got any plans for the weekend?|Hast du Pläne fürs Wochenende?
to be going to|vorhaben zu||v|I'm going to visit my parents.|Ich werde meine Eltern besuchen.
to book|buchen||v|We've booked a cottage in Cornwall.|Wir haben ein Ferienhäuschen in Cornwall gebucht.
the trip|der Ausflug; die Reise||n
the weather|das Wetter||n|What's the weather like?|Wie ist das Wetter?
the forecast|die Vorhersage||n|The forecast says it'll rain.|Laut Vorhersage wird es regnen.
sunny|sonnig||adj
cloudy|bewölkt||adj
rainy|regnerisch||adj
windy|windig||adj
foggy|neblig||adj
the temperature|die Temperatur||n
degrees|Grad||n|It's going to be 25 degrees.|Es werden 25 Grad.
the storm|der Sturm; das Gewitter||n
to snow|schneien||v
probably|wahrscheinlich||adv|It'll probably rain tomorrow.|Morgen regnet es wahrscheinlich.
next week|nächste Woche||ph
tomorrow|morgen||adv
the day after tomorrow|übermorgen||ph
the umbrella|der Regenschirm||n`,
  say: `What are you doing this weekend?|Was machst du dieses Wochenende?
I'm meeting Sarah on Saturday.|Ich treffe mich am Samstag mit Sarah.
I'm going to learn Spanish next year.|Nächstes Jahr werde ich Spanisch lernen.
I think it'll rain later.|Ich glaube, es regnet später.
Look at those clouds – it's going to rain.|Schau dir die Wolken an – gleich regnet es.
I'll call you tomorrow.|Ich rufe dich morgen an.
What's the weather like in Rome?|Wie ist das Wetter in Rom?`,
  gram: [
    ["h", TB("Drei Wege in die Zukunft", "Three ways to talk about the future")],
    ["table", { head: [TB("Form", "form"), TB("wofür?", "use"), TB("Beispiel", "example")], rows: [
      ["going to", TB("Plan, Absicht; sichtbare Anzeichen", "plan, intention; visible evidence"), "I'm going to buy a car. Look – it's going to rain."],
      ["present continuous", TB("feste Verabredung (Zeit, Ort steht)", "fixed arrangement"), "I'm meeting Tom at six."],
      ["will", TB("spontane Entscheidung, Vermutung, Versprechen", "spontaneous decision, prediction, promise"), "I'll help you. I think it'll be sunny."]], say: 2 }],
    ["conj", { verbs: ["be"], tenses: ["Future (will)"] }],
    ["tip", TB("Nicht <s>I will meet Tom at six</s> für eine Verabredung – Muttersprachler sagen <b>I'm meeting Tom at six</b>. Und „Ich will“ (= möchte) heißt <b>I want</b>, nicht <s>I will</s>!", "For an arrangement native speakers say <b>I'm meeting Tom at six</b>. And German “ich will” (= I want) is <b>I want</b>, not <s>I will</s>!")]
  ],
  th: "future",
  quiz: ["en-tense"],
  drill: [
    ["Look at the sky! It's ___ rain.", ["going to", "will", "wants to"], 0, TB("Sichtbare Anzeichen → going to.", "Visible evidence → going to.")],
    ["I ___ my dentist at 4 pm tomorrow. It's in my calendar.", ["'m seeing", "'ll see", "see"], 0],
    ["The phone's ringing. – I ___ get it!", ["'ll", "'m going to", "am"], 0, TB("Spontane Entscheidung → will.", "Spontaneous decision → will.")],
    ["I think it ___ be sunny tomorrow.", ["will", "is", "is going"], 0],
    ["What's the weather ___ in London?", ["like", "as", "how"], 0],
    ["It's very ___ today – hold on to your hat!", ["windy", "wind", "winding"], 0],
    ["Ich habe vor, ein Auto zu kaufen. → I'm ___ to buy a car.", "going"]
  ],
  talk: { t: TB("Pläne fürs Wochenende", "Plans for the weekend"), scene: TB("Deine Kollegin Olivia fragt dich am Freitag nach deinen Plänen.", "On Friday your colleague Olivia asks about your plans."), who: "Olivia", slots: {}, lines: `a|Any plans for the weekend?|Schon Pläne fürs Wochenende?|
me|Yes, I'm going to the Lake District with some friends.|Ja, ich fahre mit ein paar Freunden in den Lake District.||I'm going to the Lake District with friends.
a|Lovely! What are you going to do there?|Wie schön! Was habt ihr dort vor?|
me|We're going to go hiking and maybe swimming in the lake.|Wir wollen wandern gehen und vielleicht im See schwimmen.||We're going to go hiking.; Hiking, and maybe swimming.
a|Have you checked the forecast? I think it'll rain.|Hast du die Vorhersage angeschaut? Ich glaube, es regnet.|
me|Yes, it's going to be sunny on Saturday but rainy on Sunday.|Ja, Samstag wird's sonnig, aber Sonntag regnerisch.||Saturday will be sunny, Sunday rainy.
a|Well, take an umbrella! When are you leaving?|Na dann, nimm einen Schirm mit! Wann fahrt ihr los?|
me|We're leaving tomorrow at eight. I'll send you some photos!|Wir fahren morgen um acht los. Ich schicke dir ein paar Fotos!||Tomorrow morning at eight. I'll send you photos!` }
});

lesson("A2", { id: "en-a2-04", t: TB("At work – Present perfect mit <i>just, already, yet</i>", "At work – Present perfect with <i>just, already, yet</i>"),
  goal: TB("Du kannst im Job sagen, was schon erledigt ist und was noch fehlt – am Telefon und per E-Mail.", "You can say at work what has been done and what hasn't – on the phone and by email."),
  words: `the colleague|der Kollege; die Kollegin||n
the meeting|die Besprechung||n|The meeting has just finished.|Die Besprechung ist gerade zu Ende.
the deadline|die Frist; der Abgabetermin||n
the report|der Bericht||n|Have you finished the report yet?|Bist du schon mit dem Bericht fertig?
the presentation|die Präsentation||n
the customer|der Kunde; die Kundin||n
the email|die E-Mail||n
to send|schicken||v|I've already sent it.|Ich habe es schon geschickt.
to forward|weiterleiten||v|Could you forward me the email?|Könntest du mir die Mail weiterleiten?
to attach|anhängen||v
to reply|antworten||v
to call back|zurückrufen||v|Can I call you back in ten minutes?|Kann ich dich in zehn Minuten zurückrufen?
to be on holiday|im Urlaub sein||v
just|gerade eben||adv
already|schon||adv
yet|schon (Frage); noch (Verneinung)||adv|I haven't done it yet.|Ich habe es noch nicht gemacht.
still|immer noch||adv
the office|das Büro||n
busy|beschäftigt; viel los||adj|Sorry, I'm really busy today.|Tut mir leid, heute ist bei mir viel los.
to remind|erinnern (jemanden)||v`,
  say: `Have you sent the report yet?|Hast du den Bericht schon geschickt?
I've just finished it.|Ich bin gerade eben fertig geworden.
I've already replied to the customer.|Ich habe dem Kunden schon geantwortet.
I haven't had time yet.|Ich hatte noch keine Zeit.
She's in a meeting – can I take a message?|Sie ist in einer Besprechung – kann ich etwas ausrichten?
I'll forward you the email.|Ich leite dir die E-Mail weiter.
Just a quick reminder about tomorrow's meeting.|Nur eine kurze Erinnerung an die Besprechung morgen.`,
  gram: [
    ["h", TB("Present perfect: <i>have / has + Partizip</i>", "Present perfect: <i>have / has + past participle</i>")],
    ["p", TB("Für Vergangenes <b>ohne genauen Zeitpunkt</b>, das für <b>jetzt</b> wichtig ist: I'<b>ve finished</b> the report (er ist jetzt fertig). Mit Zeitangabe wie <i>yesterday</i> → past simple.", "For past actions <b>without a specific time</b> that matter <b>now</b>: I'<b>ve finished</b> the report (it's done now). With a time like <i>yesterday</i> → past simple.")],
    ["conj", { verbs: ["finish", "send"], tenses: ["Present perfect"] }],
    ["table", { head: [TB("Wort", "word"), TB("Stellung", "position"), TB("Beispiel", "example")], rows: [["just", TB("zwischen have und Partizip", "between have and participle"), "I've just called her."], ["already", TB("zwischen have und Partizip", "between have and participle"), "She's already left."], ["yet", TB("am Ende, in Fragen/Verneinung", "at the end, in questions/negatives"), "Have you eaten yet? I haven't eaten yet."]], say: 2 }],
    ["tip", TB("Nicht <s>I have sent it yesterday</s> – mit <i>yesterday, last week, in 2020</i> immer past simple: I <b>sent</b> it yesterday.", "Not <s>I have sent it yesterday</s> – with <i>yesterday, last week, in 2020</i> always the past simple: I <b>sent</b> it yesterday.")]
  ],
  th: "pastperf",
  quiz: ["en-ppps"],
  forms: { verbs: ["finish", "send", "write", "call", "do", "see"], tenses: ["Present perfect"] },
  drill: [
    ["Have you finished the presentation ___?", ["yet", "already", "just"], 0],
    ["I've ___ sent it – check your inbox.", ["just", "yet", "still"], 0],
    ["She ___ the email yesterday.", ["sent", "has sent", "has send"], 0, TB("yesterday → past simple.", "yesterday → past simple.")],
    ["They haven't replied ___.", ["yet", "already", "still"], 0],
    ["___ you ever been to New York?", ["Have", "Did", "Are"], 0],
    ["He has ___ left the office.", ["already", "yet", "ever"], 0],
    ["Ich habe den Bericht geschrieben. (jetzt fertig) → I've ___ the report.", "written"]
  ],
  talk: { t: TB("Kurzes Telefonat mit dem Chef", "A quick call with the boss"), scene: TB("Deine Chefin Rachel ruft an und will den Stand der Dinge wissen.", "Your boss Rachel calls to check on progress."), who: "Rachel", slots: {}, lines: `a|Hi, it's Rachel. Have you finished the sales report yet?|Hi, hier ist Rachel. Bist du schon mit dem Verkaufsbericht fertig?|
me|Yes, I've just finished it. I'll send it to you now.|Ja, ich bin gerade fertig geworden. Ich schicke ihn dir jetzt.||Yes, I've just finished it.; I've just done it. I'll send it now.
a|Great. Have you called the customer in Leeds?|Super. Hast du den Kunden in Leeds angerufen?|
me|Not yet. I've already written to him, but he hasn't replied yet.|Noch nicht. Ich habe ihm schon geschrieben, aber er hat noch nicht geantwortet.||Not yet, but I've already emailed him.
a|OK. Can you call him this afternoon?|Okay. Kannst du ihn heute Nachmittag anrufen?|
me|Sure, I'll call him after lunch.|Klar, ich rufe ihn nach dem Mittagessen an.||Of course, I'll call him this afternoon.
a|Thanks. And remember the meeting at four.|Danke. Und denk an die Besprechung um vier.|
me|Don't worry, it's already in my calendar.|Keine Sorge, sie steht schon in meinem Kalender.||I won't forget. It's in my calendar.` }
});

/* English A2 · 5–8 */
lesson("A2", { id: "en-a2-05", t: TB("At the doctor's – Körper, <i>should / must</i>", "At the doctor's – The body, <i>should / must</i>"),
  goal: TB("Du kannst Beschwerden beschreiben, Ratschläge verstehen und geben.", "You can describe symptoms and understand and give advice."),
  words: `the appointment|der Termin||n|I'd like to make an appointment.|Ich möchte einen Termin vereinbaren.
the head|der Kopf||n
the back|der Rücken||n|My back hurts.|Mir tut der Rücken weh.
the stomach|der Magen; der Bauch||n
the throat|der Hals (innen)||n
the knee|das Knie||n
the headache|die Kopfschmerzen||n|I've got a headache.|Ich habe Kopfschmerzen.
the sore throat|die Halsschmerzen||n
the cold|die Erkältung||n|I think I've got a cold.|Ich glaube, ich bin erkältet.
the flu|die Grippe||n
the temperature|das Fieber; die Temperatur||n|Have you got a temperature?|Hast du Fieber?
the cough|der Husten||n
to feel sick|sich übel fühlen||v
dizzy|schwindelig||adj
the prescription|das Rezept||n
the medicine|das Medikament||n|Take this medicine twice a day.|Nehmen Sie dieses Medikament zweimal täglich.
the pharmacy|die Apotheke||n
to rest|sich ausruhen||v
to get better|gesund werden||v|I hope you get better soon.|Gute Besserung!
the sick note|die Krankmeldung||n`,
  say: `What's the matter?|Was fehlt Ihnen?
I've had a sore throat for three days.|Ich habe seit drei Tagen Halsschmerzen.
My knee hurts when I walk.|Mein Knie tut beim Gehen weh.
You should drink lots of water.|Sie sollten viel Wasser trinken.
You mustn't do any sport this week.|Sie dürfen diese Woche keinen Sport machen.
Do I need a prescription?|Brauche ich ein Rezept?
Get well soon!|Gute Besserung!`,
  gram: [
    ["h", TB("Ratschläge und Pflichten", "Advice and obligation")],
    ["table", { head: [TB("Verb", "verb"), TB("Bedeutung", "meaning"), TB("Beispiel", "example")], rows: [
      ["should / shouldn't", TB("sollte(st) – Rat", "advice"), "You should rest. You shouldn't go to work."],
      ["must", TB("muss – starke Pflicht", "strong obligation"), "You must take this twice a day."],
      ["mustn't", TB("darf nicht – Verbot!", "prohibition!"), "You mustn't drink alcohol with it."],
      ["don't have to", TB("muss nicht – nicht nötig", "not necessary"), "You don't have to come in tomorrow."]], say: 2 }],
    ["p", TB("Beschwerden mit <b>have got / have</b>: I'<b>ve got</b> a headache. Körperteil + <b>hurt(s)</b>: My back <b>hurts</b>.", "Symptoms with <b>have got / have</b>: I'<b>ve got</b> a headache. Body part + <b>hurt(s)</b>: My back <b>hurts</b>.")],
    ["tip", TB("Falle: <b>mustn't</b> ≠ „muss nicht“! <b>mustn't</b> = darf nicht, <b>don't have to</b> = muss nicht.", "Trap for Germans: <b>mustn't</b> means “darf nicht”, <b>don't have to</b> means “muss nicht”.")]
  ],
  th: "modals",
  quiz: ["en-modal"],
  drill: [
    ["You ___ stay in bed for a few days.", ["should", "should to", "must to"], 0],
    ["You ___ drive after taking this medicine – it's dangerous.", ["mustn't", "don't have to", "shouldn't to"], 0],
    ["It's Sunday – you ___ get up early.", ["don't have to", "mustn't", "can't"], 0],
    ["I've ___ a terrible headache.", ["got", "get", "have"], 0],
    ["My back ___ when I sit for a long time.", ["hurts", "hurt", "is hurt"], 0],
    ["I've had a cough ___ last week.", ["since", "for", "from"], 0],
    ["Du solltest zum Arzt gehen. → You ___ go to the doctor.", "should"]
  ],
  talk: { t: TB("Beim Hausarzt", "At the GP's"), scene: TB("Du bist erkältet und gehst in London zum Arzt.", "You've got a cold and go to a doctor in London."), who: "Dr Patel", slots: {}, lines: `a|Hello, come in. What seems to be the problem?|Hallo, kommen Sie rein. Was scheint das Problem zu sein?|
me|I've had a sore throat and a headache for three days.|Ich habe seit drei Tagen Halsschmerzen und Kopfschmerzen.||I've got a sore throat and a headache.
a|I see. Have you got a temperature?|Verstehe. Haben Sie Fieber?|
me|Yes, a little. And I feel very tired.|Ja, ein bisschen. Und ich bin sehr müde.||A bit, yes. I'm very tired too.
a|It's probably a bad cold. You should rest and drink lots of water.|Wahrscheinlich eine starke Erkältung. Sie sollten sich ausruhen und viel trinken.|
me|Do I need a prescription?|Brauche ich ein Rezept?||Do I need any medicine?
a|No, you can buy something at the pharmacy. But you mustn't go to the gym this week.|Nein, Sie können etwas in der Apotheke kaufen. Aber diese Woche dürfen Sie nicht ins Fitnessstudio.|
me|OK. Can I have a sick note for work, please?|Okay. Kann ich bitte eine Krankmeldung für die Arbeit haben?||Could I get a sick note, please?` }
});

lesson("A2", { id: "en-a2-06", t: TB("Flat hunting – Vergleiche", "Flat hunting – Comparisons"),
  goal: TB("Du kannst Wohnungen beschreiben und vergleichen und sagen, was dir am besten gefällt.", "You can describe and compare flats and say which one you like best."),
  words: `the flat|die Wohnung||n|I'm looking for a flat in the city centre.|Ich suche eine Wohnung in der Innenstadt.
the rent|die Miete||n|The rent is £900 a month.|Die Miete beträgt 900 Pfund im Monat.
the deposit|die Kaution||n
the landlord|der Vermieter||n
the flatmate|der Mitbewohner; die Mitbewohnerin||n
the bedroom|das Schlafzimmer||n
the living room|das Wohnzimmer||n
the kitchen|die Küche||n
the bathroom|das Badezimmer||n
the balcony|der Balkon||n
the garden|der Garten||n
furnished|möbliert||adj
spacious|geräumig||adj
bright|hell||adj
quiet|ruhig||adj|The second flat is much quieter.|Die zweite Wohnung ist viel ruhiger.
noisy|laut||adj
modern|modern||adj
convenient|praktisch (gelegen)||adj
the neighbourhood|die Gegend; das Viertel||n
to move in|einziehen||v|When can I move in?|Wann kann ich einziehen?`,
  say: `Is the flat still available?|Ist die Wohnung noch frei?
Are bills included?|Sind die Nebenkosten inklusive?
This flat is bigger than the other one.|Diese Wohnung ist größer als die andere.
It's the cheapest flat in the area.|Es ist die billigste Wohnung in der Gegend.
The bedroom isn't as big as I thought.|Das Schlafzimmer ist nicht so groß, wie ich dachte.
When can I move in?|Wann kann ich einziehen?`,
  gram: [
    ["h", TB("Komparativ und Superlativ", "Comparatives and superlatives")],
    ["table", { head: [TB("Adjektiv", "adjective"), TB("Komparativ", "comparative"), TB("Superlativ", "superlative")], rows: [["cheap", "cheaper (than)", "the cheapest"], ["big", "bigger", "the biggest"], ["quiet", "quieter", "the quietest"], ["expensive", "more expensive", "the most expensive"], ["good", "better", "the best"], ["bad", "worse", "the worst"], ["far", "further", "the furthest"]], say: 1 }],
    ["p", TB("Kurze Adjektive: <b>-er / -est</b>. Lange Adjektive (ab 2–3 Silben): <b>more / the most</b>. Gleich: <b>as … as</b> – not <b>as</b> big <b>as</b>.", "Short adjectives: <b>-er / -est</b>. Long adjectives (2–3+ syllables): <b>more / the most</b>. Equal: <b>as … as</b> – not <b>as</b> big <b>as</b>.")],
    ["tip", TB("„als“ heißt <b>than</b>, nicht <s>as</s>: bigger <b>than</b> mine. Und nicht doppelt steigern: <s>more cheaper</s>.", "“als” is <b>than</b>, not <s>as</s>: bigger <b>than</b> mine. And never double: <s>more cheaper</s>.")]
  ],
  th: "compare",
  drill: [
    ["This flat is ___ than the last one.", ["bigger", "more big", "biggest"], 0],
    ["It's the ___ flat we've seen.", ["most expensive", "expensivest", "more expensive"], 0],
    ["The kitchen is better ___ in the other flat.", ["than", "as", "then"], 0],
    ["The bedroom isn't as big ___ the living room.", ["as", "than", "like"], 0],
    ["This is the ___ neighbourhood in town – very safe.", ["best", "better", "goodest"], 0],
    ["The bathroom is ___ than I expected.", ["worse", "badder", "more bad"], 0],
    ["Die zweite Wohnung ist ruhiger. → The second flat is ___.", "quieter"]
  ],
  talk: { t: TB("Wohnungsbesichtigung", "Viewing a flat"), scene: TB("Du besichtigst mit dem Vermieter Mr Clarke eine Wohnung in Bristol.", "You're viewing a flat in Bristol with the landlord, Mr Clarke."), who: "Mr Clarke", slots: {}, lines: `a|Come in! So, this is the living room.|Kommen Sie rein! Das ist das Wohnzimmer.|
me|Oh, it's very bright. Is the flat furnished?|Oh, das ist sehr hell. Ist die Wohnung möbliert?||It's lovely and bright. Is it furnished?
a|Yes, everything is included. The bedroom is over here.|Ja, alles ist dabei. Das Schlafzimmer ist hier drüben.|
me|It's smaller than I thought, but it's quiet.|Es ist kleiner, als ich dachte, aber ruhig.||It's a bit small, but it's nice and quiet.
a|It's the quietest flat in the building. It faces the garden.|Es ist die ruhigste Wohnung im Haus. Sie geht zum Garten raus.|
me|How much is the rent? Are bills included?|Wie hoch ist die Miete? Sind die Nebenkosten inklusive?||What's the rent, and are bills included?
a|It's £950 a month, and bills are extra.|950 Pfund im Monat, Nebenkosten extra.|
me|OK. When can I move in?|Okay. Wann könnte ich einziehen?||I like it. When could I move in?` }
});

lesson("A2", { id: "en-a2-07", t: TB("Invitations – Einladen, zusagen, absagen", "Invitations – Inviting, accepting, declining"),
  goal: TB("Du kannst Leute einladen, Einladungen annehmen oder höflich absagen und Vorschläge machen.", "You can invite people, accept or politely decline invitations and make suggestions."),
  words: `to invite|einladen||v|We'd like to invite you to dinner.|Wir möchten dich zum Abendessen einladen.
the invitation|die Einladung||n
the party|die Party||n
the birthday|der Geburtstag||n
the barbecue|das Grillfest||n
to celebrate|feiern||v
to accept|annehmen||v
to turn down|ablehnen||v
to be free|Zeit haben||v|Are you free on Friday?|Hast du Freitag Zeit?
to fancy|Lust haben auf||v|Do you fancy a drink after work?|Hast du Lust auf einen Drink nach der Arbeit?
How about …?|Wie wäre es mit …?||ph|How about Saturday?|Wie wäre es mit Samstag?
Why don't we …?|Warum … wir nicht?||ph
I'd love to.|Sehr gern.||ph
I'm afraid I can't.|Leider kann ich nicht.||ph
another time|ein andermal||ph|Maybe another time?|Vielleicht ein andermal?
to bring|mitbringen||v|Shall I bring anything?|Soll ich etwas mitbringen?
the present|das Geschenk||n
to look forward to|sich freuen auf||v|I'm looking forward to it!|Ich freue mich darauf!
to cancel|absagen||v
the dress code|der Dresscode||n`,
  say: `Would you like to come to my birthday party?|Möchtest du zu meiner Geburtstagsparty kommen?
I'd love to! What time does it start?|Sehr gern! Wann fängt sie an?
I'm afraid I can't – I'm working that evening.|Leider kann ich nicht – ich arbeite an dem Abend.
Do you fancy going to the cinema?|Hast du Lust, ins Kino zu gehen?
How about Saturday instead?|Wie wäre es stattdessen mit Samstag?
Shall I bring anything?|Soll ich etwas mitbringen?
I'm really looking forward to it.|Ich freue mich wirklich darauf.`,
  gram: [
    ["h", TB("Einladen, vorschlagen, reagieren", "Inviting, suggesting, responding")],
    ["table", { head: [TB("Absicht", "purpose"), TB("so sagst du es", "how to say it")], rows: [
      [TB("einladen", "invite"), "Would you like to come …? / Do you fancy …ing?"],
      [TB("vorschlagen", "suggest"), "How about …ing? / Why don't we …? / Let's …"],
      [TB("zusagen", "accept"), "I'd love to. / That sounds great!"],
      [TB("absagen", "decline"), "I'm afraid I can't. / I'd love to, but …"],
      [TB("anbieten", "offer"), "Shall I bring something?"]], say: 1 }],
    ["p", TB("Nach <b>How about</b> und <b>fancy</b> steht die <b>-ing-Form</b>: How about <b>going</b> out? Nach <b>would like</b> steht <b>to</b>: Would you like <b>to come</b>?", "After <b>How about</b> and <b>fancy</b> use the <b>-ing form</b>: How about <b>going</b> out? After <b>would like</b> use <b>to</b>: Would you like <b>to come</b>?")],
    ["tip", TB("Ein einfaches <s>No.</s> klingt im Englischen unhöflich. Besser: <b>I'd love to, but I'm afraid I can't. Maybe another time?</b>", "A plain “No.” sounds rude in English. Better: <b>I'd love to, but I'm afraid I can't. Maybe another time?</b>")]
  ],
  drill: [
    ["Would you like ___ to dinner on Friday?", ["to come", "coming", "come"], 0],
    ["Do you fancy ___ to the beach?", ["going", "to go", "go"], 0],
    ["How about ___ a pizza tonight?", ["ordering", "to order", "order"], 0],
    ["___ I bring some wine?", ["Shall", "Will", "Do"], 0],
    ["I'm really looking forward to ___ you.", ["seeing", "see", "saw"], 0],
    ["I'd love to, but I'm ___ I can't.", ["afraid", "sorry that", "fear"], 0],
    ["Lass uns ins Kino gehen! → ___ go to the cinema!", "Let's"]
  ],
  talk: { t: TB("Eine Einladung", "An invitation"), scene: TB("Dein Kollege Chris lädt dich zu seiner Grillparty ein.", "Your colleague Chris invites you to his barbecue."), who: "Chris", slots: {}, lines: `a|Hey, we're having a barbecue on Saturday. Would you like to come?|Hey, wir grillen am Samstag. Möchtest du kommen?|
me|I'd love to! What time does it start?|Sehr gern! Wann geht's los?||That sounds great! What time?
a|Around four. Is that OK for you?|So gegen vier. Passt dir das?|
me|I'm afraid I'm working until five. Can I come a bit later?|Leider arbeite ich bis fünf. Kann ich etwas später kommen?||I work until five. Is it OK if I come later?
a|Of course, no problem!|Natürlich, kein Problem!|
me|Great. Shall I bring anything?|Super. Soll ich etwas mitbringen?||Should I bring something?
a|Maybe a salad or something to drink?|Vielleicht einen Salat oder etwas zu trinken?|
me|Sure, I'll bring a salad. I'm really looking forward to it!|Klar, ich bringe einen Salat mit. Ich freue mich schon sehr!||OK, I'll bring a salad. See you on Saturday!` }
});

lesson("A2", { id: "en-a2-08", t: TB("Food & cooking – <i>some / any, much / many</i>", "Food & cooking – <i>some / any, much / many</i>"),
  goal: TB("Du kannst über Essen und Einkäufe sprechen, ein Rezept verstehen und Mengen richtig ausdrücken.", "You can talk about food and shopping, follow a recipe and talk about quantities correctly."),
  words: `the ingredient|die Zutat||n|What ingredients do we need?|Welche Zutaten brauchen wir?
the recipe|das Rezept (Kochen)||n
the onion|die Zwiebel||n
the garlic|der Knoblauch||n
the pepper|der Pfeffer; die Paprika||n
the flour|das Mehl||n
the butter|die Butter||n
the egg|das Ei||n
the rice|der Reis||n
the oil|das Öl||n
to chop|klein schneiden||v|Chop the onions.|Schneide die Zwiebeln klein.
to fry|braten||v
to boil|kochen (in Wasser)||v
to bake|backen||v
to stir|umrühren||v
to add|hinzufügen||v|Add a pinch of salt.|Gib eine Prise Salz dazu.
the pan|die Pfanne||n
the oven|der Ofen||n|Preheat the oven to 180 degrees.|Heize den Ofen auf 180 Grad vor.
spicy|scharf||adj
a bit of|ein bisschen||ph`,
  say: `Is there any milk in the fridge?|Ist noch Milch im Kühlschrank?
We need some eggs and a bit of butter.|Wir brauchen ein paar Eier und ein bisschen Butter.
How much sugar do I need?|Wie viel Zucker brauche ich?
How many people are coming?|Wie viele Leute kommen?
There isn't much time left.|Es ist nicht mehr viel Zeit übrig.
Can you pass me the salt, please?|Kannst du mir bitte das Salz geben?
This is delicious – can I have the recipe?|Das ist köstlich – kann ich das Rezept haben?`,
  gram: [
    ["h", TB("Zählbar oder nicht zählbar?", "Countable or uncountable?")],
    ["table", { head: ["", TB("zählbar", "countable"), TB("nicht zählbar", "uncountable")], rows: [["", "an egg, two onions", "rice, milk, butter, water"], [TB("wie viel(e)?", "how much / many?"), "How many eggs?", "How much milk?"], [TB("viel(e)", "a lot"), "many eggs / a lot of eggs", "much milk / a lot of milk"], [TB("ein paar / etwas", "some"), "some eggs", "some milk"]], say: 1 }],
    ["p", TB("<b>some</b> in Aussagen, <b>any</b> in Fragen und Verneinungen: We need <b>some</b> eggs. Have we got <b>any</b> eggs? We haven't got <b>any</b> milk. Bei Angeboten und Bitten aber <b>some</b>: Would you like <b>some</b> tea?", "<b>some</b> in positive sentences, <b>any</b> in questions and negatives: We need <b>some</b> eggs. Have we got <b>any</b> eggs? We haven't got <b>any</b> milk. But for offers and requests: Would you like <b>some</b> tea?")],
    ["tip", TB("Im Alltag sagt man in Aussagen eher <b>a lot of</b> als <i>much/many</i>: I drink <b>a lot of</b> coffee.", "In everyday positive sentences people prefer <b>a lot of</b> to <i>much/many</i>: I drink <b>a lot of</b> coffee.")]
  ],
  drill: [
    ["How ___ eggs do we need?", ["many", "much", "lot"], 0],
    ["How ___ flour is there?", ["much", "many", "lot of"], 0],
    ["Have we got ___ garlic?", ["any", "some", "a"], 0],
    ["Would you like ___ cake?", ["some", "any", "many"], 0, TB("Angebot → some.", "Offer → some.")],
    ["There isn't ___ rice left.", ["much", "many", "some"], 0],
    ["She drinks a ___ of coffee.", ["lot", "lots", "much"], 0],
    ["Wir brauchen ein paar Zwiebeln. → We need ___ onions.", "some"]
  ],
  talk: { t: TB("Gemeinsam kochen", "Cooking together"), scene: TB("Du kochst mit deiner Mitbewohnerin Grace ein Curry.", "You're cooking a curry with your flatmate Grace."), who: "Grace", slots: {}, lines: `a|OK, let's make the curry. Have we got any onions?|Okay, machen wir das Curry. Haben wir Zwiebeln?|
me|Yes, there are some in the cupboard. How many do we need?|Ja, es sind welche im Schrank. Wie viele brauchen wir?||Yes, we've got some. How many?
a|Two. Can you chop them?|Zwei. Kannst du sie klein schneiden?|
me|Sure. How much rice should I cook?|Klar. Wie viel Reis soll ich kochen?||Of course. And how much rice do we need?
a|About 300 grams. Oh no, there isn't any coconut milk!|Etwa 300 Gramm. Oh nein, es ist keine Kokosmilch da!|
me|No problem, I'll go to the shop. Do we need anything else?|Kein Problem, ich gehe zum Laden. Brauchen wir sonst noch etwas?||I'll get some. Anything else?
a|Maybe some fresh coriander. And we haven't got much rice left either.|Vielleicht frischen Koriander. Und Reis haben wir auch nicht mehr viel.|
me|OK, coconut milk, coriander and rice. Back in ten minutes!|Okay, Kokosmilch, Koriander und Reis. In zehn Minuten bin ich zurück!||Got it. I'll be back in ten minutes!` }
});

/* English B1 · 1–3 */
lesson("B1", { id: "en-b1-01", t: TB("The job interview – <i>for / since</i> und Present perfect continuous", "The job interview – <i>for / since</i> and the present perfect continuous"),
  goal: TB("Du kannst im Vorstellungsgespräch über Erfahrung, Ausbildung und Stärken sprechen.", "You can talk about your experience, education and strengths in a job interview."),
  words: `the position|die Stelle||n|I'm applying for the position of financial analyst.|Ich bewerbe mich auf die Stelle als Finanzanalyst.
to apply for|sich bewerben um||v
the applicant|der Bewerber; die Bewerberin||n
the CV|der Lebenslauf||n
the cover letter|das Anschreiben||n
the degree|der Studienabschluss||n|I have a degree in business administration.|Ich habe einen Abschluss in BWL.
the internship|das Praktikum||n|I did an internship at a bank.|Ich habe ein Praktikum bei einer Bank gemacht.
the experience|die Erfahrung||n
the skills|die Fähigkeiten||n
the strength|die Stärke||n
the weakness|die Schwäche||n
to be responsible for|verantwortlich sein für||v|I'm responsible for client reporting.|Ich bin für das Kunden-Reporting verantwortlich.
to manage|leiten; managen||v
reliable|zuverlässig||adj
flexible|flexibel||adj
the salary|das Gehalt||n
the notice period|die Kündigungsfrist||n|My notice period is three months.|Meine Kündigungsfrist beträgt drei Monate.
full-time|Vollzeit||adj
part-time|Teilzeit||adj
the team player|der Teamplayer||n`,
  say: `I've been working in marketing for three years.|Ich arbeite seit drei Jahren im Marketing.
I've been studying finance since 2024.|Ich studiere seit 2024 Finance.
In my last job I was responsible for social media.|In meinem letzten Job war ich für Social Media zuständig.
My greatest strength is that I'm very organised.|Meine größte Stärke ist, dass ich sehr organisiert bin.
I'm looking for a new challenge.|Ich suche eine neue Herausforderung.
What are the next steps?|Wie geht es weiter?`,
  gram: [
    ["h", TB("<i>for</i> oder <i>since</i>? – „seit“", "<i>for</i> or <i>since</i>?")],
    ["table", { head: ["", TB("wofür?", "use"), TB("Beispiel", "example")], rows: [["for", TB("Zeitspanne (wie lange?)", "period (how long?)"), "for three years, for ages"], ["since", TB("Zeitpunkt (seit wann?)", "point in time (since when?)"), "since 2022, since Monday"]], say: 2 }],
    ["h", TB("Present perfect continuous", "Present perfect continuous")],
    ["p", TB("Deutsch: „Ich <i>arbeite</i> seit drei Jahren hier“ – Präsens! Englisch braucht das <b>present perfect</b>: I'<b>ve been working</b> here for three years (andauernd) / I'<b>ve lived</b> here since 2020. Nie: <s>I work here since 2020</s>.", "German uses the present tense (“Ich arbeite seit …”). English needs the <b>present perfect</b>: I'<b>ve been working</b> here for three years (ongoing) / I'<b>ve lived</b> here since 2020.")],
    ["ex", [["How long have you been learning English?", "Wie lange lernst du schon Englisch?"], ["I've known her since university.", "Ich kenne sie seit der Uni."], ["She's been waiting for an hour.", "Sie wartet seit einer Stunde."]]],
    ["tip", TB("Zustandsverben wie <b>know, be, have (besitzen), like</b> nicht in der -ing-Form: I'<b>ve known</b> him for years (nicht <s>have been knowing</s>).", "State verbs like <b>know, be, have (own), like</b> don't take -ing: I'<b>ve known</b> him for years (not <s>have been knowing</s>).")]
  ],
  th: "tenses",
  quiz: ["en-mistakes", "en-ppps"],
  drill: [
    ["I've been working here ___ 2021.", ["since", "for", "from"], 0],
    ["She's lived in London ___ five years.", ["for", "since", "during"], 0],
    ["How long ___ you been studying Italian?", ["have", "are", "do"], 0],
    ["I ___ him since we were at school.", ["'ve known", "'ve been knowing", "know"], 0],
    ["She's been ___ for the bus for twenty minutes.", ["waiting", "waited", "wait"], 0],
    ["I'm applying ___ the position of project manager.", ["for", "to", "on"], 0],
    ["Ich warte seit einer Stunde. → I've been ___ for an hour.", "waiting"]
  ],
  talk: { t: TB("Das Vorstellungsgespräch", "The job interview"), scene: TB("Bewerbungsgespräch per Video bei einer Beratungsfirma in London. Ms Turner stellt die Fragen.", "A video interview with a consulting firm in London. Ms Turner asks the questions."), who: "Ms Turner", slots: {}, lines: `a|Thanks for joining us. Could you tell us a bit about yourself?|Danke, dass Sie da sind. Könnten Sie uns etwas über sich erzählen?|
me|Of course. I'm doing a master's in business and I've been working part-time at a bank for two years.|Natürlich. Ich mache einen Master in BWL und arbeite seit zwei Jahren in Teilzeit bei einer Bank.||I'm a business student and I've worked part-time at a bank for two years.
a|What are you responsible for there?|Wofür sind Sie dort verantwortlich?|
me|I'm responsible for financial reports and I help with client presentations.|Ich bin für Finanzberichte zuständig und helfe bei Kundenpräsentationen.||I prepare financial reports and help with presentations.
a|Why do you want to work for us?|Warum möchten Sie bei uns arbeiten?|
me|I'm looking for a new challenge, and I'd love to work in an international team.|Ich suche eine neue Herausforderung und würde sehr gern in einem internationalen Team arbeiten.||I'd like a new challenge in an international team.
a|What would you say is your greatest weakness?|Was würden Sie als Ihre größte Schwäche bezeichnen?|
me|Sometimes I spend too long on details, but I've been working on it.|Manchmal verbringe ich zu viel Zeit mit Details, aber daran arbeite ich.||I can be a perfectionist, but I'm working on it.` }
});

lesson("B1", { id: "en-b1-02", t: TB("If I were you… – Bedingungssätze", "If I were you… – Conditionals"),
  goal: TB("Du kannst über reale und hypothetische Situationen sprechen und Ratschläge geben.", "You can talk about real and hypothetical situations and give advice."),
  words: `to win the lottery|im Lotto gewinnen||v|If I won the lottery, I'd travel the world.|Wenn ich im Lotto gewinnen würde, würde ich um die Welt reisen.
to afford|sich leisten||v|I can't afford a new car.|Ich kann mir kein neues Auto leisten.
to save|sparen||v
to borrow|(sich) leihen||v
to lend|(ver)leihen||v
the advice|der Rat||n|Can I give you some advice?|Darf ich dir einen Rat geben?
to recommend|empfehlen||v
to take a risk|ein Risiko eingehen||v
to quit|kündigen; aufhören||v|If I were you, I wouldn't quit your job.|An deiner Stelle würde ich nicht kündigen.
to start a business|ein Unternehmen gründen||v
the decision|die Entscheidung||n
to make a decision|eine Entscheidung treffen||v
unless|außer wenn; es sei denn||x|I won't go unless you come too.|Ich gehe nicht, es sei denn, du kommst mit.
as long as|solange||x
in case|falls (vorsorglich)||x|Take an umbrella in case it rains.|Nimm einen Schirm mit, falls es regnet.
otherwise|sonst||adv
realistic|realistisch||adj
the dream|der Traum||n
abroad|im Ausland||adv|If I could, I'd live abroad for a year.|Wenn ich könnte, würde ich ein Jahr im Ausland leben.`,
  say: `If it rains tomorrow, we'll stay at home.|Wenn es morgen regnet, bleiben wir zu Hause.
If I had more time, I'd learn the piano.|Wenn ich mehr Zeit hätte, würde ich Klavier lernen.
If I were you, I'd take the job.|An deiner Stelle würde ich den Job annehmen.
What would you do if you lost your job?|Was würdest du tun, wenn du deinen Job verlieren würdest?
I'll call you as soon as I arrive.|Ich rufe dich an, sobald ich ankomme.
I wouldn't do that unless I had to.|Das würde ich nicht tun, außer ich müsste.`,
  gram: [
    ["h", TB("First und second conditional", "First and second conditionals")],
    ["table", { head: [TB("Typ", "type"), TB("if-Satz", "if clause"), TB("Hauptsatz", "main clause"), TB("Beispiel", "example")], rows: [
      [TB("1 – realistisch", "1 – real"), "present simple", "will + Grundform", "If I see her, I'll tell her."],
      [TB("2 – unwahrscheinlich / irreal", "2 – unlikely / unreal"), "past simple", "would + Grundform", "If I had money, I'd buy a boat."]], say: 3 }],
    ["p", TB("Im <b>if-Satz</b> steht nie <i>will</i> oder <i>would</i>: <s>If I will see her</s>. Bei <i>be</i> im zweiten Typ gern <b>were</b> für alle Personen: If I <b>were</b> you …", "There's never <i>will</i> or <i>would</i> in the <b>if clause</b>: <s>If I will see her</s>. With <i>be</i> in type 2, <b>were</b> is used for all persons: If I <b>were</b> you …")],
    ["tip", TB("Auch nach <b>when, as soon as, before, after</b> mit Zukunftsbedeutung steht das Präsens: I'll call you when I <b>arrive</b> (nicht <s>will arrive</s>).", "After <b>when, as soon as, before, after</b> with future meaning, use the present: I'll call you when I <b>arrive</b> (not <s>will arrive</s>).")]
  ],
  th: "cond",
  quiz: ["en-cond"],
  drill: [
    ["If it ___ tomorrow, we'll cancel the trip.", ["rains", "will rain", "rained"], 0],
    ["If I ___ more money, I'd buy a house.", ["had", "have", "would have"], 0],
    ["If I were you, I ___ talk to my boss.", ["would", "will", "am"], 0],
    ["I'll text you as soon as I ___ home.", ["get", "will get", "got"], 0],
    ["What would you do if you ___ the lottery?", ["won", "win", "would win"], 0],
    ["Take a jacket ___ it gets cold.", ["in case", "unless", "otherwise"], 0],
    ["An deiner Stelle … → If I ___ you, …", "were"]
  ],
  talk: { t: TB("Soll ich kündigen?", "Should I quit?"), scene: TB("Deine Freundin Lucy überlegt, ihren Job zu kündigen und ein Café zu eröffnen.", "Your friend Lucy is thinking of quitting her job and opening a café."), who: "Lucy", slots: {}, lines: `a|I'm so bored at work. I'm thinking of quitting and opening a café.|Mir ist so langweilig in der Arbeit. Ich überlege zu kündigen und ein Café zu eröffnen.|
me|Wow! If you opened a café, what kind of café would it be?|Wow! Wenn du ein Café eröffnen würdest, was für eins wäre es?||What kind of café would it be?
a|A small one with homemade cakes. But I'm scared. What would you do?|Ein kleines mit selbst gebackenen Kuchen. Aber ich habe Angst. Was würdest du tun?|
me|If I were you, I wouldn't quit straight away.|An deiner Stelle würde ich nicht sofort kündigen.||If I were you, I'd keep my job for now.
a|So what should I do?|Was soll ich also tun?|
me|You could sell your cakes at a market first. If people love them, you'll know it works.|Du könntest deine Kuchen erst auf einem Markt verkaufen. Wenn die Leute sie lieben, weißt du, dass es funktioniert.||Try selling cakes at a market first.
a|That's a great idea! And if it doesn't work?|Gute Idee! Und wenn es nicht klappt?|
me|Then you still have your job. Nothing to lose!|Dann hast du immer noch deinen Job. Nichts zu verlieren!||Then you haven't lost anything.` }
});

lesson("B1", { id: "en-b1-03", t: TB("The news – Passiv", "The news – The passive"),
  goal: TB("Du verstehst Nachrichten, kannst sie wiedergeben und das Passiv benutzen.", "You can understand the news, report it and use the passive."),
  words: `the headline|die Schlagzeile||n
the article|der Artikel||n
the government|die Regierung||n
the election|die Wahl||n|The election will be held in May.|Die Wahl findet im Mai statt.
the law|das Gesetz||n
to pass a law|ein Gesetz verabschieden||v|A new law was passed last week.|Letzte Woche wurde ein neues Gesetz verabschiedet.
to arrest|festnehmen||v|Two men were arrested.|Zwei Männer wurden festgenommen.
to injure|verletzen||v|Nobody was injured.|Niemand wurde verletzt.
the strike|der Streik||n
to announce|bekannt geben||v
to report|berichten||v
the survey|die Umfrage||n
according to|laut; gemäß||ph|According to the report, prices will rise.|Laut Bericht werden die Preise steigen.
reliable|zuverlässig||adj
fake news|Falschnachrichten||n
the source|die Quelle||n
to be built|gebaut werden||v
to be launched|eingeführt werden; starten||v
the investigation|die Untersuchung; die Ermittlung||n
the economy|die Wirtschaft||n`,
  say: `The bridge was built in 1890.|Die Brücke wurde 1890 gebaut.
The new app will be launched next month.|Die neue App wird nächsten Monat eingeführt.
English is spoken all over the world.|Englisch wird auf der ganzen Welt gesprochen.
The suspect has been arrested.|Der Verdächtige wurde festgenommen.
It is said that prices will rise again.|Es heißt, dass die Preise wieder steigen.
I don't trust everything I read online.|Ich traue nicht allem, was ich online lese.`,
  gram: [
    ["h", TB("Passiv: <i>be</i> + Partizip (3. Form)", "Passive: <i>be</i> + past participle")],
    ["table", { head: [TB("Zeit", "tense"), TB("Passiv", "passive")], rows: [["present simple", "English is spoken here."], ["past simple", "The bridge was built in 1890."], ["present perfect", "The suspect has been arrested."], ["will", "The results will be announced tomorrow."], ["modal", "It can be done."]], say: 1 }],
    ["p", TB("Das Passiv benutzt man, wenn <b>die Handlung wichtiger ist als der Täter</b> – typisch in Nachrichten, Berichten und Uni-Texten. Wer es tut: <b>by</b> + Person.", "Use the passive when <b>the action matters more than who did it</b> – typical in news, reports and academic texts. The doer: <b>by</b> + person.")],
    ["tip", TB("Deutsches „werden“ ≠ englisches <i>will</i>: „Das Haus <b>wird</b> gebaut“ = The house <b>is being built</b>.", "German “werden” ≠ English <i>will</i>: “Das Haus wird gebaut” = The house <b>is being built</b>.")]
  ],
  th: "passive",
  quiz: ["en-irr"],
  drill: [
    ["The museum ___ built in 1902.", ["was", "is", "has"], 0],
    ["Two people ___ injured in the accident.", ["were", "was", "have"], 0],
    ["The results will ___ announced on Friday.", ["be", "been", "being"], 0],
    ["Our office ___ cleaned every evening.", ["is", "are", "has"], 0],
    ["The suspect has ___ arrested.", ["been", "be", "being"], 0],
    ["The novel was written ___ a famous author.", ["by", "from", "of"], 0],
    ["Das Gesetz wurde verabschiedet. → The law ___ passed.", "was"]
  ],
  talk: { t: TB("Nachrichten beim Frühstück", "News over breakfast"), scene: TB("Dein Mitbewohner Daniel liest beim Frühstück die Nachrichten.", "Your flatmate Daniel is reading the news over breakfast."), who: "Daniel", slots: {}, lines: `a|Have you seen this? A new train line is going to be built to the airport.|Hast du das gesehen? Eine neue Bahnlinie zum Flughafen soll gebaut werden.|
me|Really? When will it be finished?|Echt? Wann wird sie fertig sein?||Really? When will it be ready?
a|According to the article, it'll be opened in 2030.|Laut Artikel wird sie 2030 eröffnet.|
me|That's ages away. Who's paying for it?|Das ist noch ewig hin. Wer bezahlt das?||That's a long time. Who's paying?
a|It's paid for by the government and the city.|Sie wird von der Regierung und der Stadt bezahlt.|
me|Is that a reliable source?|Ist das eine zuverlässige Quelle?||Where did you read it? Is it reliable?
a|Yes, it's the BBC. And look – two men were arrested for stealing bikes on our street!|Ja, die BBC. Und schau – zwei Männer wurden festgenommen, weil sie in unserer Straße Fahrräder gestohlen haben!|
me|Finally! My bike was stolen last year.|Endlich! Mein Fahrrad wurde letztes Jahr gestohlen.||Good! My bike was stolen there last year.` }
});

/* English B1 · 4–6 */
lesson("B1", { id: "en-b1-04", t: TB("People – Relativsätze und Phrasal verbs", "People – Relative clauses and phrasal verbs"),
  goal: TB("Du kannst Menschen und Beziehungen beschreiben und typische Phrasal verbs benutzen.", "You can describe people and relationships and use common phrasal verbs."),
  words: `to get on with|sich verstehen mit||v|I get on really well with my boss.|Ich verstehe mich richtig gut mit meinem Chef.
to fall out with|sich zerstreiten mit||v
to make up|sich versöhnen||v|They had an argument but they made up.|Sie haben gestritten, sich aber versöhnt.
to look after|sich kümmern um||v|She looks after her little brother.|Sie kümmert sich um ihren kleinen Bruder.
to look up to|bewundern; zu jemandem aufschauen||v
to bring up|großziehen; ansprechen||v|I was brought up by my grandparents.|Ich bin bei meinen Großeltern aufgewachsen.
to grow apart|sich auseinanderleben||v
to break up|Schluss machen||v|They broke up last month.|Sie haben letzten Monat Schluss gemacht.
to rely on|sich verlassen auf||v
to turn up|auftauchen||v
the relationship|die Beziehung||n
the acquaintance|der / die Bekannte||n
the best friend|der beste Freund; die beste Freundin||n
easy-going|unkompliziert; locker||adj
honest|ehrlich||adj
generous|großzügig||adj
moody|launisch||adj
selfish|egoistisch||adj
sensible|vernünftig||adj
sensitive|sensibel||adj`,
  say: `She's the friend who I met in Spain.|Sie ist die Freundin, die ich in Spanien kennengelernt habe.
That's the café where we first met.|Das ist das Café, in dem wir uns kennengelernt haben.
He's someone you can always rely on.|Er ist jemand, auf den man sich immer verlassen kann.
My sister, who lives in Paris, is a doctor.|Meine Schwester, die in Paris wohnt, ist Ärztin.
We fell out, but we made up a week later.|Wir haben uns zerstritten, uns aber eine Woche später versöhnt.
I really look up to my grandmother.|Ich bewundere meine Großmutter sehr.`,
  gram: [
    ["h", TB("Relativsätze: <i>who, which, that, where, whose</i>", "Relative clauses: <i>who, which, that, where, whose</i>")],
    ["table", { head: [TB("Pronomen", "pronoun"), TB("wofür?", "use"), TB("Beispiel", "example")], rows: [["who / that", TB("Personen", "people"), "the man who lives next door"], ["which / that", TB("Dinge", "things"), "the book which I'm reading"], ["where", TB("Orte", "places"), "the town where I grew up"], ["whose", TB("dessen / deren", "possession"), "the friend whose car I borrowed"]], say: 2 }],
    ["p", TB("Ist das Relativpronomen <b>Objekt</b>, kann man es weglassen: the friend (<i>who</i>) I met in Spain. Bei Zusatzinfos mit Kommas (<b>non-defining</b>) nie <i>that</i> und nie weglassen: My sister, <b>who</b> lives in Paris, …", "If the pronoun is the <b>object</b>, you can leave it out: the friend (<i>who</i>) I met in Spain. With extra information between commas (<b>non-defining</b>) never use <i>that</i> and never leave it out: My sister, <b>who</b> lives in Paris, …")],
    ["tip", TB("Phrasal verbs lernst du am besten mit Beispielsatz – die Bedeutung lässt sich selten aus den Teilen ableiten: <b>look after</b> = sich kümmern, <b>look up to</b> = bewundern.", "Learn phrasal verbs with an example sentence – the meaning rarely comes from the parts: <b>look after</b> = take care of, <b>look up to</b> = admire.")]
  ],
  drill: [
    ["That's the man ___ helped me with my bags.", ["who", "which", "where"], 0],
    ["This is the restaurant ___ we had our first date.", ["where", "which", "who"], 0],
    ["I've lost the book ___ you lent me.", ["that", "who", "where"], 0],
    ["She's the colleague ___ husband works at Google.", ["whose", "who's", "which"], 0],
    ["My brother, ___ is a nurse, works nights.", ["who", "that", "–"], 0, TB("Zusatzinfo mit Kommas → nicht <i>that</i>.", "Extra information with commas → not <i>that</i>.")],
    ["I get ___ well with my flatmates.", ["on", "along to", "up"], 0],
    ["Sie haben Schluss gemacht. → They broke ___.", "up"]
  ],
  talk: { t: TB("Wer ist das?", "Who's that?"), scene: TB("Auf einer Hochzeit fragt dich Ella, wen du hier kennst.", "At a wedding Ella asks you who you know there."), who: "Ella", slots: {}, lines: `a|So, how do you know the bride?|Und, woher kennst du die Braut?|
me|She's the friend who I met on an exchange in Spain.|Sie ist die Freundin, die ich bei einem Austausch in Spanien kennengelernt habe.||We met on an exchange in Spain.
a|Oh nice! And who's the man in the blue suit?|Oh, schön! Und wer ist der Mann im blauen Anzug?|
me|That's her brother, who lives in Canada.|Das ist ihr Bruder, der in Kanada lebt.||That's her brother. He lives in Canada.
a|Do you get on well with him?|Verstehst du dich gut mit ihm?|
me|Yes, he's really easy-going. Everyone gets on with him.|Ja, er ist total unkompliziert. Alle verstehen sich gut mit ihm.||Yes, he's very easy-going.
a|And is this the place where they got engaged?|Und ist das der Ort, an dem sie sich verlobt haben?|
me|Yes, it's the hotel where they spent their first holiday together.|Ja, das ist das Hotel, in dem sie ihren ersten gemeinsamen Urlaub verbracht haben.||Yes, they came here on their first holiday.` }
});

lesson("B1", { id: "en-b1-05", t: TB("He said that… – Indirekte Rede", "He said that… – Reported speech"),
  goal: TB("Du kannst wiedergeben, was jemand gesagt, gefragt oder dich gebeten hat.", "You can report what someone said, asked or asked you to do."),
  words: `to tell|sagen (jemandem); erzählen||v|She told me she was tired.|Sie sagte mir, dass sie müde sei.
to say|sagen||v|He said he would call.|Er sagte, er würde anrufen.
to ask|fragen; bitten||v
to explain|erklären||v
to mention|erwähnen||v
to promise|versprechen||v|She promised she'd be on time.|Sie versprach, pünktlich zu sein.
to admit|zugeben||v
to complain|sich beschweren||v
to warn|warnen||v
to suggest|vorschlagen||v
to deny|abstreiten||v
the message|die Nachricht||n
the voicemail|die Mailbox-Nachricht||n
the rumour|das Gerücht||n
apparently|anscheinend||adv|Apparently she's leaving the company.|Anscheinend verlässt sie die Firma.
the day before|am Tag zuvor||ph
the following day|am nächsten Tag||ph
the gossip|der Klatsch||n
to pass on|weitergeben||v|Can you pass on the message?|Kannst du die Nachricht weitergeben?`,
  say: `She said she was feeling ill.|Sie sagte, dass es ihr nicht gut gehe.
He told me he had already sent the email.|Er sagte mir, dass er die Mail schon geschickt habe.
They asked if we wanted to join them.|Sie fragten, ob wir mitkommen wollten.
She asked me where I lived.|Sie fragte mich, wo ich wohne.
My boss asked me to send the report.|Mein Chef bat mich, den Bericht zu schicken.
He promised he would be there.|Er versprach, dass er da sein würde.`,
  gram: [
    ["h", TB("Zeitverschiebung („backshift“)", "Backshift")],
    ["table", { head: [TB("direkt", "direct"), TB("indirekt", "reported")], rows: [["“I'm tired.”", "She said she was tired."], ["“I've finished.”", "He said he had finished."], ["“I saw it.”", "She said she had seen it."], ["“I'll call you.”", "He said he would call me."], ["“Can you help?”", "She asked if I could help."]], say: 1 }],
    ["p", TB("<b>say</b> ohne Person: He <b>said</b> (that) … – <b>tell</b> mit Person: He <b>told me</b> (that) … Fragen ohne Fragewort → <b>if / whether</b>, mit Fragewort → normale Satzstellung: She asked where I <b>lived</b> (nicht <s>where did I live</s>). Bitten: asked me <b>to</b> + Grundform.", "<b>say</b> without a person: He <b>said</b> (that) … – <b>tell</b> with a person: He <b>told me</b> (that) … Yes/no questions → <b>if / whether</b>; with a question word → normal word order: She asked where I <b>lived</b>. Requests: asked me <b>to</b> + base form.")],
    ["tip", TB("Ist die Aussage noch wahr, darf die Zeit bleiben: She said she <b>lives</b> in Rome (sie wohnt immer noch dort).", "If the statement is still true, you can keep the tense: She said she <b>lives</b> in Rome (she still does).")]
  ],
  drill: [
    ["“I'm busy.” → She said she ___ busy.", ["was", "is being", "were"], 0],
    ["“I've lost my keys.” → He said he ___ his keys.", ["had lost", "has lost", "lost"], 0],
    ["He ___ me that he was leaving.", ["told", "said", "asked"], 0],
    ["She asked me where I ___.", ["worked", "did work", "do work"], 0],
    ["They asked ___ we were coming.", ["if", "that", "what"], 0],
    ["My boss asked me ___ the report by Friday.", ["to finish", "finish", "finishing"], 0],
    ["„Ich rufe dich an.“ → He said he ___ call me.", "would"]
  ],
  talk: { t: TB("Was hat sie gesagt?", "What did she say?"), scene: TB("Du hast mit eurer Professorin gesprochen. Dein Kommilitone Ryan war nicht da.", "You talked to your professor. Your fellow student Ryan wasn't there."), who: "Ryan", slots: {}, lines: `a|Did you speak to Professor Hall? What did she say?|Hast du mit Professor Hall gesprochen? Was hat sie gesagt?|
me|She said the deadline was next Friday.|Sie sagte, die Abgabe sei nächsten Freitag.||She said the deadline is next Friday.
a|Next Friday? I thought it was next month!|Nächsten Freitag? Ich dachte, nächsten Monat!|
me|No, she told us the date had changed.|Nein, sie sagte uns, dass sich der Termin geändert habe.||She told us they had changed the date.
a|Great… Did she say anything about the presentation?|Toll … Hat sie was zur Präsentation gesagt?|
me|Yes, she asked us to send the slides the day before.|Ja, sie bat uns, die Folien am Tag davor zu schicken.||She asked us to send the slides a day early.
a|Did anyone ask if we could work in pairs?|Hat jemand gefragt, ob wir zu zweit arbeiten können?|
me|Yes, I asked her, and she said that was fine.|Ja, ich habe sie gefragt, und sie sagte, das sei in Ordnung.||I did. She said it was OK.` }
});

lesson("B1", { id: "en-b1-06", t: TB("It must have been… – Vermutungen", "It must have been… – Speculating"),
  goal: TB("Du kannst Vermutungen über Gegenwart und Vergangenheit äußern – sicher, möglich oder unmöglich.", "You can speculate about the present and the past – certain, possible or impossible."),
  words: `to guess|raten; vermuten||v
the evidence|die Beweise; die Anzeichen||n
the clue|der Hinweis||n
the mystery|das Rätsel||n
to disappear|verschwinden||v|My keys have disappeared.|Meine Schlüssel sind verschwunden.
to forget|vergessen||v
to leave behind|liegen lassen||v|I must have left my wallet at the restaurant.|Ich muss mein Portemonnaie im Restaurant liegen gelassen haben.
to notice|bemerken||v
obviously|offensichtlich||adv
definitely|definitiv||adv
probably|wahrscheinlich||adv
possibly|möglicherweise||adv
I bet|ich wette||ph|I bet he's still asleep.|Ich wette, er schläft noch.
it's likely that|es ist wahrscheinlich, dass||ph
surely|doch sicher||adv
the lights are on|das Licht ist an||ph
to be stuck in traffic|im Stau stehen||v|They might be stuck in traffic.|Vielleicht stehen sie im Stau.
the battery|der Akku||n
to run out|ausgehen; leer werden||v
suspicious|verdächtig; misstrauisch||adj`,
  say: `She must be at home – her car is outside.|Sie muss zu Hause sein – ihr Auto steht draußen.
He can't be hungry – he's just eaten.|Er kann keinen Hunger haben – er hat gerade gegessen.
They might be stuck in traffic.|Vielleicht stehen sie im Stau.
I must have left my phone at work.|Ich muss mein Handy in der Arbeit gelassen haben.
She can't have seen the message.|Sie kann die Nachricht nicht gesehen haben.
His battery might have run out.|Vielleicht ist sein Akku leer.`,
  gram: [
    ["h", TB("Vermutungen über jetzt", "Speculating about now")],
    ["table", { head: [TB("Modalverb", "modal"), TB("Sicherheit", "certainty"), TB("Beispiel", "example")], rows: [["must", TB("fast sicher: ja", "almost certain: yes"), "She must be tired."], ["might / may / could", TB("vielleicht", "possible"), "He might be at the gym."], ["can't", TB("fast sicher: nein", "almost certain: no"), "That can't be true."]], say: 2 }],
    ["h", TB("… und über die Vergangenheit", "… and about the past")],
    ["p", TB("<b>Modalverb + have + Partizip</b>: She <b>must have forgotten</b>. He <b>might have missed</b> the train. They <b>can't have seen</b> us.", "<b>modal + have + past participle</b>: She <b>must have forgotten</b>. He <b>might have missed</b> the train. They <b>can't have seen</b> us.")],
    ["tip", TB("Das Gegenteil von <b>must</b> (Vermutung) ist <b>can't</b>, nicht <s>mustn't</s>: He <b>can't</b> be at home – the lights are off.", "The opposite of <b>must</b> (deduction) is <b>can't</b>, not <s>mustn't</s>: He <b>can't</b> be at home – the lights are off.")]
  ],
  th: "modals",
  quiz: ["en-modal"],
  drill: [
    ["The lights are on. They ___ be at home.", ["must", "can't", "mustn't"], 0],
    ["He ___ be in Paris – I saw him here an hour ago.", ["can't", "must", "might"], 0],
    ["I'm not sure where she is. She ___ be at the library.", ["might", "must", "can't"], 0],
    ["I can't find my wallet. I must ___ it at the café.", ["have left", "left", "leave"], 0],
    ["She ___ have seen us – she didn't say hello.", ["can't", "mustn't", "must"], 0],
    ["They're late. They might have ___ the train.", ["missed", "miss", "missing"], 0],
    ["Er muss es vergessen haben. → He must have ___ it.", "forgotten"]
  ],
  talk: { t: TB("Wo ist Ben?", "Where's Ben?"), scene: TB("Ihr wartet im Pub auf euren Freund Ben, aber er kommt nicht. Deine Freundin Amy wird nervös.", "You're waiting for your friend Ben in the pub, but he isn't coming. Your friend Amy is getting worried."), who: "Amy", slots: {}, lines: `a|It's half past eight. Where's Ben? He's never late.|Es ist halb neun. Wo ist Ben? Er ist nie zu spät.|
me|He might be stuck in traffic.|Vielleicht steht er im Stau.||Maybe he's stuck in traffic.; He could be stuck in traffic.
a|But he always cycles!|Aber er fährt doch immer Rad!|
me|Then he must have forgotten about tonight.|Dann muss er heute Abend vergessen haben.||He must have forgotten.
a|He can't have forgotten – he organised it!|Er kann es nicht vergessen haben – er hat es organisiert!|
me|True. Have you tried calling him?|Stimmt. Hast du versucht, ihn anzurufen?||Did you call him?
a|Yes, but he isn't answering.|Ja, aber er geht nicht ran.|
me|His battery might have run out. Let's wait ten more minutes.|Vielleicht ist sein Akku leer. Warten wir noch zehn Minuten.||Maybe his phone died. Let's give him ten minutes.` }
});

/* English B2 · 1–3 */
lesson("B2", { id: "en-b2-01", t: TB("Making a case – Konnektoren", "Making a case – Linking words"),
  goal: TB("Du kannst Argumente strukturieren, Gegensätze ausdrücken und eine Position überzeugend vertreten.", "You can structure arguments, express contrast and argue a position convincingly."),
  words: `although|obwohl||x|Although it was expensive, it was worth it.|Obwohl es teuer war, hat es sich gelohnt.
even though|obwohl (betont)||x
despite|trotz||x|Despite the rain, we went out.|Trotz des Regens sind wir rausgegangen.
in spite of|trotz||x
however|jedoch||adv
whereas|wohingegen||x|I prefer the city, whereas my partner loves the countryside.|Ich mag lieber die Stadt, wohingegen mein Partner das Land liebt.
on the other hand|andererseits||ph
furthermore|außerdem; ferner||adv
moreover|darüber hinaus||adv
therefore|deshalb; daher||adv
as a result|infolgedessen||ph
due to|aufgrund||ph|The flight was cancelled due to fog.|Der Flug wurde wegen Nebel gestrichen.
in order to|um … zu||ph
to argue|argumentieren; streiten||v
the drawback|der Nachteil||n
the benefit|der Vorteil; der Nutzen||n
to outweigh|überwiegen||v|The benefits outweigh the drawbacks.|Die Vorteile überwiegen die Nachteile.
to point out|darauf hinweisen||v
it's worth considering|es lohnt sich zu bedenken||ph
the trade-off|der Zielkonflikt; der Kompromiss||n`,
  say: `Although remote work is convenient, it can be isolating.|Obwohl Homeoffice bequem ist, kann es isolieren.
Despite the high costs, the project was a success.|Trotz der hohen Kosten war das Projekt ein Erfolg.
On the one hand it saves time; on the other hand it's lonely.|Einerseits spart es Zeit, andererseits ist es einsam.
The benefits clearly outweigh the drawbacks.|Die Vorteile überwiegen klar die Nachteile.
I'd like to point out that the data is from 2019.|Ich möchte darauf hinweisen, dass die Daten von 2019 sind.
That's a fair point; however, I see it differently.|Das ist ein berechtigter Punkt; ich sehe es jedoch anders.`,
  gram: [
    ["h", TB("Gegensätze ausdrücken", "Expressing contrast")],
    ["table", { head: [TB("Konnektor", "connector"), TB("danach folgt", "followed by"), TB("Beispiel", "example")], rows: [
      ["although / even though", TB("ganzer Satz", "a clause"), "Although it rained, we went out."],
      ["despite / in spite of", TB("Nomen oder -ing", "noun or -ing"), "Despite the rain / Despite feeling ill, …"],
      ["however", TB("neuer Satz, mit Komma", "new sentence, with a comma"), "It was cheap. However, it broke quickly."],
      ["whereas / while", TB("Vergleich zweier Seiten", "comparing two sides"), "I like tea, whereas she prefers coffee."]], say: 2 }],
    ["p", TB("Grund und Folge: <b>because of / due to</b> + Nomen, <b>because</b> + Satz, <b>therefore / as a result</b> leiten die Folge ein.", "Cause and result: <b>because of / due to</b> + noun, <b>because</b> + clause, <b>therefore / as a result</b> introduce the result.")],
    ["tip", TB("Typischer Fehler: <s>Despite it was raining</s> → <b>Despite the rain</b> oder <b>Although it was raining</b>. Und nie <s>despite of</s>.", "Typical mistake: <s>Despite it was raining</s> → <b>Despite the rain</b> or <b>Although it was raining</b>. And never <s>despite of</s>.")]
  ],
  quiz: ["en-mistakes"],
  drill: [
    ["___ the bad weather, the festival went ahead.", ["Despite", "Although", "However"], 0],
    ["___ she studied hard, she failed the exam.", ["Although", "Despite", "In spite of"], 0],
    ["The plan is good. ___, it's too expensive.", ["However", "Although", "Despite"], 0],
    ["I work best in the morning, ___ my colleague prefers evenings.", ["whereas", "despite", "therefore"], 0],
    ["The match was cancelled ___ heavy snow.", ["due to", "because", "although"], 0],
    ["The benefits ___ the drawbacks.", ["outweigh", "overweigh", "outweight"], 0],
    ["Trotz des Regens … → In ___ of the rain, …", "spite"]
  ],
  talk: { t: TB("Diskussion im Seminar", "A seminar debate"), scene: TB("Im Seminar diskutiert ihr, ob die Vier-Tage-Woche eingeführt werden sollte. James ist skeptisch.", "In a seminar you're discussing whether a four-day week should be introduced. James is sceptical."), who: "James", slots: {}, lines: `a|I'm not convinced. A four-day week would hurt productivity.|Ich bin nicht überzeugt. Eine Vier-Tage-Woche würde der Produktivität schaden.|
me|That's a fair point. However, several studies show the opposite.|Ein berechtigter Punkt. Mehrere Studien zeigen jedoch das Gegenteil.||I see your point, but studies show the opposite.
a|Such as?|Zum Beispiel?|
me|In the UK trial, productivity stayed the same, although people worked fewer hours.|Im britischen Versuch blieb die Produktivität gleich, obwohl die Leute weniger Stunden arbeiteten.||In the UK trial, productivity didn't fall.
a|But that won't work for hospitals or shops.|Aber für Krankenhäuser oder Läden funktioniert das nicht.|
me|True. Despite that, I think the benefits outweigh the drawbacks.|Stimmt. Trotzdem überwiegen meiner Meinung nach die Vorteile.||That's true, but overall the benefits outweigh the drawbacks.
a|What benefits exactly?|Welche Vorteile genau?|
me|People are less stressed and, as a result, they take fewer sick days.|Die Leute sind weniger gestresst und haben infolgedessen weniger Krankheitstage.||Less stress and therefore fewer sick days.` }
});

lesson("B2", { id: "en-b2-02", t: TB("Regrets – Third conditional und <i>wish</i>", "Regrets – Third conditional and <i>wish</i>"),
  goal: TB("Du kannst über verpasste Chancen sprechen, Bedauern ausdrücken und Wünsche formulieren.", "You can talk about missed opportunities, express regret and make wishes."),
  words: `to regret|bereuen||v|I regret not studying abroad.|Ich bereue, nicht im Ausland studiert zu haben.
the regret|das Bedauern||n
the opportunity|die Gelegenheit||n
to miss out on|verpassen; sich entgehen lassen||v
to turn down an offer|ein Angebot ablehnen||v
if only|wenn doch nur||ph|If only I had listened to you!|Hätte ich doch nur auf dich gehört!
I wish|ich wünschte||ph
hindsight|im Nachhinein||n|In hindsight, it was a mistake.|Im Nachhinein war es ein Fehler.
to look back|zurückblicken||v
the consequence|die Folge||n
to make a mistake|einen Fehler machen||v
to take the plunge|den Sprung wagen||v
to have second thoughts|Zweifel bekommen||v
fortunately|glücklicherweise||adv
by chance|zufällig||ph|We met by chance at a conference.|Wir haben uns zufällig auf einer Konferenz kennengelernt.
should have|hätte … sollen||ph|I should have left earlier.|Ich hätte früher losfahren sollen.
the turning point|der Wendepunkt||n
to make the most of|das Beste machen aus||v
it's no use crying over spilt milk|was passiert ist, ist passiert||ph`,
  say: `If I had known, I would have told you.|Wenn ich es gewusst hätte, hätte ich es dir gesagt.
If we hadn't missed the train, we wouldn't have met.|Wenn wir den Zug nicht verpasst hätten, hätten wir uns nicht kennengelernt.
I wish I had studied harder.|Ich wünschte, ich hätte mehr gelernt.
I wish I could speak Italian fluently.|Ich wünschte, ich könnte fließend Italienisch.
I should have accepted the offer.|Ich hätte das Angebot annehmen sollen.
If only I hadn't said that!|Hätte ich das doch nur nicht gesagt!`,
  gram: [
    ["h", TB("Third conditional – irreale Vergangenheit", "Third conditional – the unreal past")],
    ["p", TB("<b>If + past perfect, would have + Partizip</b>: If I <b>had known</b>, I <b>would have come</b>. Für Dinge, die nicht passiert sind.", "<b>If + past perfect, would have + participle</b>: If I <b>had known</b>, I <b>would have come</b>. For things that didn't happen.")],
    ["h", TB("<i>wish / if only</i>", "<i>wish / if only</i>")],
    ["table", { head: [TB("bezieht sich auf", "refers to"), TB("Form", "form"), TB("Beispiel", "example")], rows: [[TB("Gegenwart", "present"), "wish + past simple", "I wish I had more time."], [TB("Vergangenheit", "past"), "wish + past perfect", "I wish I had taken the job."], [TB("Fähigkeit", "ability"), "wish + could", "I wish I could sing."], [TB("Ärger über andere", "annoyance"), "wish + would", "I wish you would stop talking."]], say: 2 }],
    ["tip", TB("Gemischt: Vergangenheit → Folge heute: If I <b>had studied</b> medicine, I <b>would be</b> a doctor now.", "Mixed: past condition → present result: If I <b>had studied</b> medicine, I <b>would be</b> a doctor now.")]
  ],
  th: "cond",
  quiz: ["en-cond"],
  drill: [
    ["If I ___ about the party, I would have come.", ["had known", "knew", "would know"], 0],
    ["If she had left earlier, she ___ the flight.", ["wouldn't have missed", "wouldn't miss", "hadn't missed"], 0],
    ["I wish I ___ more time to travel. (jetzt)", ["had", "have", "would have"], 0],
    ["I wish I ___ that – it was a mistake. (gestern)", ["hadn't said", "didn't say", "wouldn't say"], 0],
    ["I should ___ the job offer.", ["have accepted", "accepted", "accept"], 0],
    ["If I had studied law, I ___ a lawyer now.", ["would be", "would have been", "am"], 0],
    ["Hätte ich doch nur zugehört! → If ___ I had listened!", "only"]
  ],
  talk: { t: TB("Rückblick", "Looking back"), scene: TB("Beim Abendessen sprichst du mit deinem alten Studienfreund Matt über eure Entscheidungen.", "Over dinner you and your old uni friend Matt talk about the decisions you've made."), who: "Matt", slots: {}, lines: `a|Do you ever regret not doing your master's in London?|Bereust du manchmal, deinen Master nicht in London gemacht zu haben?|
me|Sometimes. If I had gone, my English would be even better now.|Manchmal. Wenn ich gegangen wäre, wäre mein Englisch jetzt noch besser.||A bit. If I'd gone, my English would be better now.
a|But then you wouldn't have met Laura!|Aber dann hättest du Laura nicht kennengelernt!|
me|True. If I hadn't stayed, we would never have met.|Stimmt. Wenn ich nicht geblieben wäre, hätten wir uns nie kennengelernt.||That's true. I wouldn't have met her.
a|I wish I had taken a gap year after school.|Ich wünschte, ich hätte nach der Schule ein Jahr Pause gemacht.|
me|It's not too late! You could take a sabbatical.|Es ist nicht zu spät! Du könntest ein Sabbatical machen.||Why don't you take a sabbatical now?
a|Maybe. But in hindsight, I'm happy with my choices.|Vielleicht. Aber im Nachhinein bin ich mit meinen Entscheidungen zufrieden.|
me|Me too. There's no point in regretting things.|Ich auch. Es bringt nichts, Dinge zu bereuen.||Same here. It's no use crying over spilt milk.` }
});

lesson("B2", { id: "en-b2-03", t: TB("Meetings – Diplomatisch formulieren", "Meetings – Diplomatic language"),
  goal: TB("Du kannst in Meetings höflich widersprechen, Vorschläge machen und Kritik abfedern.", "You can disagree politely in meetings, make suggestions and soften criticism."),
  words: `the agenda|die Tagesordnung||n|Let's move on to the next item on the agenda.|Kommen wir zum nächsten Punkt der Tagesordnung.
to chair a meeting|eine Besprechung leiten||v
the minutes|das Protokoll||n|Could you take the minutes?|Könntest du Protokoll führen?
to sum up|zusammenfassen||v
to clarify|klarstellen; klären||v
to raise a point|einen Punkt ansprechen||v
the concern|die Sorge; das Bedenken||n|I have some concerns about the budget.|Ich habe einige Bedenken wegen des Budgets.
the stakeholder|der Interessenvertreter; der Stakeholder||n
the proposal|der Vorschlag||n
to postpone|verschieben||v|We'll have to postpone the launch.|Wir müssen den Start verschieben.
to follow up|nachfassen; weiterverfolgen||v
the action point|die nächste Aufgabe (aus dem Meeting)||n
slightly|etwas; leicht||adv
a bit of a|ein bisschen ein||ph|That might be a bit of a problem.|Das könnte ein bisschen ein Problem sein.
to some extent|bis zu einem gewissen Grad||ph
to be on the same page|auf dem gleichen Stand sein||ph
to touch base|sich kurz abstimmen||ph
feasible|machbar||adj
to go over budget|das Budget überschreiten||v
the deadline is tight|die Frist ist knapp||ph`,
  say: `I see what you mean, but I'm not sure that's feasible.|Ich verstehe, was du meinst, aber ich bin nicht sicher, ob das machbar ist.
Could I just come in here?|Darf ich kurz einhaken?
I'm afraid I have to disagree.|Leider muss ich widersprechen.
Wouldn't it be better to postpone the launch?|Wäre es nicht besser, den Start zu verschieben?
Just to clarify – are we talking about Q3?|Nur zur Klarstellung – reden wir über Q3?
So, to sum up: we'll go with option B.|Also, zusammengefasst: Wir nehmen Option B.
Let's touch base again next week.|Stimmen wir uns nächste Woche nochmal ab.`,
  gram: [
    ["h", TB("Diplomatisch statt direkt", "Diplomatic instead of direct")],
    ["table", { head: [TB("direkt", "direct"), TB("diplomatisch", "diplomatic")], rows: [["That's wrong.", "I'm not sure that's quite right."], ["That's a bad idea.", "I'm not convinced that would work."], ["We must change it.", "It might be worth changing it."], ["It's too expensive.", "It seems slightly expensive."], ["You didn't finish it.", "It looks like it isn't quite finished yet."]], say: 1 }],
    ["p", TB("Weichmacher: <b>might, could, would</b>, <b>slightly / a bit</b>, <b>I'm afraid</b>, <b>it seems</b>, verneinte Fragen (<i>Wouldn't it be better …?</i>) und Passiv (<i>Mistakes were made</i>).", "Softeners: <b>might, could, would</b>, <b>slightly / a bit</b>, <b>I'm afraid</b>, <b>it seems</b>, negative questions (<i>Wouldn't it be better …?</i>) and the passive (<i>Mistakes were made</i>).")],
    ["tip", TB("Deutsche Direktheit wirkt auf Briten schnell schroff. „Quite interesting“ kann im britischen Englisch sogar höfliche Ablehnung bedeuten!", "German directness can sound blunt to British ears. In British English “quite interesting” can even be a polite way of saying no!")]
  ],
  drill: [
    ["I'm ___ I can't agree with that.", ["afraid", "sorry that", "fear"], 0],
    ["___ it be better to wait until next quarter?", ["Wouldn't", "Won't", "Isn't"], 0],
    ["The deadline seems ___ tight.", ["slightly", "slight", "a slightly"], 0],
    ["Could I just come ___ here?", ["in", "on", "up"], 0],
    ["Let's move ___ to the next point.", ["on", "in", "over"], 0],
    ["Just to ___ – do you mean the UK team?", ["clarify", "clear", "clean"], 0],
    ["Wir müssen das Meeting verschieben. → We have to ___ the meeting.", "postpone"]
  ],
  talk: { t: TB("Projektmeeting", "Project meeting"), scene: TB("Im Projektmeeting schlägt Projektleiterin Sophie einen sehr knappen Zeitplan vor.", "In a project meeting the project lead Sophie proposes a very tight schedule."), who: "Sophie", slots: {}, lines: `a|So, my proposal is to launch the new app on the first of March.|Also, mein Vorschlag ist, die neue App am ersten März zu starten.|
me|Could I just come in here? I'm not sure that's feasible.|Darf ich kurz einhaken? Ich bin nicht sicher, ob das machbar ist.||I'm not sure that's realistic.
a|Why not? What are your concerns?|Warum nicht? Was sind deine Bedenken?|
me|Testing hasn't finished yet, and the deadline seems a bit tight.|Die Tests sind noch nicht abgeschlossen, und die Frist scheint etwas knapp.||We haven't finished testing yet.
a|I see your point. What would you suggest?|Ich verstehe. Was würdest du vorschlagen?|
me|Wouldn't it be better to postpone the launch by two weeks?|Wäre es nicht besser, den Start um zwei Wochen zu verschieben?||Maybe we could launch two weeks later?
a|OK, that sounds reasonable. Can you check with the developers?|Okay, das klingt vernünftig. Kannst du das mit den Entwicklern klären?|
me|Sure, I'll follow up today and touch base with you tomorrow.|Klar, ich kümmere mich heute darum und melde mich morgen bei dir.||Of course, I'll follow up and get back to you tomorrow.` }
});

/* English B2 · 4–6 */
lesson("B2", { id: "en-b2-04", t: TB("By 2040… – Future perfect und continuous", "By 2040… – Future perfect and continuous"),
  goal: TB("Du kannst über Zukunftstrends spekulieren und sagen, was bis wann erledigt sein wird.", "You can speculate about future trends and say what will have happened by when."),
  words: `the trend|der Trend||n
artificial intelligence|künstliche Intelligenz||n|AI will have changed most jobs by 2040.|Bis 2040 wird KI die meisten Jobs verändert haben.
the self-driving car|das selbstfahrende Auto||n
renewable energy|erneuerbare Energie||n
to replace|ersetzen||v
to predict|vorhersagen||v
the prediction|die Vorhersage||n
to invent|erfinden||v
to develop|entwickeln||v
to adapt|sich anpassen||v
by then|bis dahin||ph|By then I'll have finished my degree.|Bis dahin werde ich mein Studium abgeschlossen haben.
within|innerhalb||x|within the next ten years|innerhalb der nächsten zehn Jahre
in the long run|langfristig||ph
likely|wahrscheinlich||adj|It's likely that prices will rise.|Wahrscheinlich steigen die Preise.
unlikely|unwahrscheinlich||adj
bound to|bestimmt; sicher (+ Verb)||ph|Technology is bound to change.|Die Technik wird sich bestimmt verändern.
the breakthrough|der Durchbruch||n
sustainable|nachhaltig||adj
obsolete|veraltet; überholt||adj
to retire|in Rente gehen||v`,
  say: `By 2040, AI will have replaced many routine jobs.|Bis 2040 wird KI viele Routinejobs ersetzt haben.
This time next year I'll be working in London.|Nächstes Jahr um diese Zeit arbeite ich in London.
By the time you arrive, we'll have eaten.|Bis du ankommst, werden wir schon gegessen haben.
Cars are bound to become cheaper.|Autos werden bestimmt billiger.
I doubt that paper money will exist in twenty years.|Ich bezweifle, dass es in zwanzig Jahren noch Bargeld gibt.
In the long run, renewable energy is cheaper.|Langfristig ist erneuerbare Energie billiger.`,
  gram: [
    ["h", TB("Future continuous und future perfect", "Future continuous and future perfect")],
    ["table", { head: [TB("Form", "form"), TB("Bildung", "structure"), TB("wofür?", "use"), TB("Beispiel", "example")], rows: [
      ["future continuous", "will be + -ing", TB("läuft zu einem Zeitpunkt in der Zukunft", "in progress at a future time"), "At 9 tomorrow I'll be flying to Rome."],
      ["future perfect", "will have + Partizip", TB("bis zu einem Zeitpunkt abgeschlossen", "completed before a future time"), "By June I'll have finished my thesis."]], say: 3 }],
    ["p", TB("Typische Signalwörter fürs future perfect: <b>by</b> (bis spätestens), <b>by then</b>, <b>by the time</b> + Präsens: By the time you <b>get</b> here, …", "Typical signals for the future perfect: <b>by</b>, <b>by then</b>, <b>by the time</b> + present: By the time you <b>get</b> here, …")],
    ["tip", TB("Wahrscheinlichkeit abstufen: <b>will definitely</b> › <b>is bound to</b> › <b>will probably</b> › <b>might</b> › <b>probably won't</b> › <b>definitely won't</b>.", "Grading probability: <b>will definitely</b> › <b>is bound to</b> › <b>will probably</b> › <b>might</b> › <b>probably won't</b> › <b>definitely won't</b>.")]
  ],
  th: "future",
  quiz: ["en-tense"],
  drill: [
    ["By 2030 I ___ my master's degree.", ["will have finished", "will finish", "will be finishing"], 0],
    ["This time tomorrow I ___ on a beach.", ["will be lying", "will have lain", "lie"], 0],
    ["By the time we ___, the film will have started.", ["arrive", "will arrive", "arrived"], 0],
    ["Prices are ___ to rise next year.", ["bound", "sure that", "likely that"], 0],
    ["It's ___ that we'll find a solution soon – it's very complicated.", ["unlikely", "likely", "bound"], 0],
    ["Don't call at eight – we'll ___ dinner.", ["be having", "have had", "having"], 0],
    ["Bis dahin … → By ___, …", "then"]
  ],
  talk: { t: TB("Die Welt im Jahr 2040", "The world in 2040"), scene: TB("Auf einer Party fragt dich Noah, wie du dir die Zukunft vorstellst.", "At a party Noah asks how you imagine the future."), who: "Noah", slots: {}, lines: `a|What do you think life will be like in 2040?|Wie wird das Leben 2040 wohl aussehen?|
me|I think AI will have changed most jobs by then.|Ich glaube, bis dahin wird KI die meisten Jobs verändert haben.||AI will have changed a lot of jobs.
a|Scary! Will we still be working five days a week?|Gruselig! Werden wir dann noch fünf Tage die Woche arbeiten?|
me|I doubt it. We'll probably be working fewer hours.|Das bezweifle ich. Wir werden wahrscheinlich weniger Stunden arbeiten.||Probably not. We'll probably work less.
a|And cars? Will they all be self-driving?|Und Autos? Fahren die dann alle selbst?|
me|Not all of them, but they're bound to become much more common.|Nicht alle, aber sie werden bestimmt viel häufiger.||Many will be, but not all.
a|Where do you think you'll be living?|Wo wirst du dann wohl wohnen?|
me|Hopefully I'll be living somewhere by the sea!|Hoffentlich wohne ich dann irgendwo am Meer!||Somewhere by the sea, I hope!` }
});

lesson("B2", { id: "en-b2-05", t: TB("Idioms – Redewendungen", "Idioms – Everyday idioms"),
  goal: TB("Du verstehst gängige Redewendungen und kannst einige davon natürlich im Gespräch benutzen.", "You understand common idioms and can use some of them naturally in conversation."),
  words: `a piece of cake|ein Kinderspiel||ph|The exam was a piece of cake.|Die Prüfung war ein Kinderspiel.
to hit the nail on the head|den Nagel auf den Kopf treffen||ph
to break the ice|das Eis brechen||ph|He told a joke to break the ice.|Er hat einen Witz erzählt, um das Eis zu brechen.
to call it a day|Feierabend machen; Schluss machen||ph|Let's call it a day.|Lass uns für heute Schluss machen.
under the weather|angeschlagen; nicht ganz fit||ph|I'm feeling a bit under the weather.|Ich bin etwas angeschlagen.
to cost an arm and a leg|ein Vermögen kosten||ph
once in a blue moon|alle Jubeljahre||ph
to be on the fence|unentschlossen sein||ph|I'm still on the fence about the job.|Ich bin mir wegen des Jobs noch unschlüssig.
to get cold feet|kalte Füße bekommen||ph
to pull someone's leg|jemanden auf den Arm nehmen||ph
to keep an eye on|ein Auge haben auf||ph|Could you keep an eye on my bag?|Könntest du auf meine Tasche aufpassen?
to let the cat out of the bag|die Katze aus dem Sack lassen||ph
to bite off more than you can chew|sich übernehmen||ph
the ball is in your court|du bist am Zug||ph
to cut corners|an der falschen Stelle sparen; pfuschen||ph
to go the extra mile|sich besonders ins Zeug legen||ph
to be in the same boat|im selben Boot sitzen||ph
to sleep on it|eine Nacht darüber schlafen||ph|Let me sleep on it.|Lass mich eine Nacht darüber schlafen.
it's not rocket science|das ist keine Raketenwissenschaft||ph
to get the hang of|den Dreh raushaben||ph|You'll soon get the hang of it.|Du hast bald den Dreh raus.`,
  say: `Don't worry, it's a piece of cake.|Keine Sorge, das ist ein Kinderspiel.
I'm feeling a bit under the weather today.|Ich bin heute etwas angeschlagen.
Let's call it a day.|Lass uns für heute Schluss machen.
I'll sleep on it and let you know tomorrow.|Ich schlafe eine Nacht darüber und sag dir morgen Bescheid.
We're all in the same boat.|Wir sitzen alle im selben Boot.
You hit the nail on the head.|Du hast den Nagel auf den Kopf getroffen.`,
  gram: [
    ["h", TB("Redewendungen richtig benutzen", "Using idioms correctly")],
    ["table", { head: [TB("Englisch", "English"), TB("deutsche Entsprechung", "German equivalent"), TB("wörtlich", "literally")], rows: [
      ["It's a piece of cake.", TB("ein Kinderspiel", "ein Kinderspiel"), TB("ein Stück Kuchen", "a piece of cake")],
      ["It costs an arm and a leg.", TB("ein Vermögen kosten", "ein Vermögen kosten"), TB("einen Arm und ein Bein kosten", "an arm and a leg")],
      ["once in a blue moon", TB("alle Jubeljahre", "alle Jubeljahre"), TB("einmal bei blauem Mond", "once in a blue moon")],
      ["to let the cat out of the bag", TB("etwas ausplaudern", "etwas ausplaudern"), TB("die Katze aus dem Sack lassen", "same as German!")]], say: 0 }],
    ["p", TB("Das Verb in einer Redewendung wird ganz normal gebeugt: She <b>got</b> cold feet. We'<b>re</b> in the same boat. Die festen Teile ändert man nicht: <s>a piece of pie</s>.", "The verb in an idiom changes as usual: She <b>got</b> cold feet. We'<b>re</b> in the same boat. The fixed parts stay the same: not <s>a piece of pie</s>.")],
    ["tip", TB("Im Meeting mit Nicht-Muttersprachlern lieber sparsam einsetzen – Redewendungen sind schwer verständlich. Unter Briten und Amerikanern wirken sie dagegen sehr natürlich.", "Use idioms sparingly with other non-native speakers – they can be hard to follow. With native speakers they sound very natural.")]
  ],
  drill: [
    ["The test was a piece of ___.", ["cake", "bread", "pie"], 0],
    ["I'm feeling a bit under the ___.", ["weather", "rain", "sky"], 0],
    ["It's late – let's call it a ___.", ["day", "night", "time"], 0],
    ["She got cold ___ and cancelled the wedding.", ["feet", "hands", "toes"], 0],
    ["Could you keep an ___ on the kids for a minute?", ["eye", "ear", "hand"], 0],
    ["We've made our offer – now the ball is in their ___.", ["court", "field", "hands"], 0],
    ["Lass mich eine Nacht darüber schlafen. → Let me sleep ___ it.", "on"]
  ],
  talk: { t: TB("Freitagnachmittag", "Friday afternoon"), scene: TB("Freitagnachmittag im Büro mit deiner Kollegin Zoe.", "Friday afternoon in the office with your colleague Zoe."), who: "Zoe", slots: {}, lines: `a|How's the report going?|Wie läuft's mit dem Bericht?|
me|Almost done. It was a piece of cake, actually.|Fast fertig. Eigentlich war es ein Kinderspiel.||It's nearly finished. It was easier than I thought.
a|Lucky you! I'm feeling a bit under the weather today.|Du Glückliche(r)! Ich bin heute etwas angeschlagen.|
me|Oh no. Why don't you call it a day and go home?|Oh nein. Warum machst du nicht Feierabend und gehst nach Hause?||You should go home and rest.
a|I can't. I still have to decide about the new job offer.|Geht nicht. Ich muss mich noch wegen des neuen Jobangebots entscheiden.|
me|Are you still on the fence about it?|Bist du immer noch unentschlossen?||Haven't you decided yet?
a|Yes, I keep changing my mind.|Ja, ich ändere ständig meine Meinung.|
me|Then sleep on it. You'll know what to do on Monday.|Dann schlaf eine Nacht darüber. Am Montag weißt du, was zu tun ist.||Sleep on it and decide next week.` }
});

lesson("B2", { id: "en-b2-06", t: TB("What I need is… – Betonen", "What I need is… – Emphasis"),
  goal: TB("Du kannst Wichtiges betonen – mit Cleft sentences, <i>do</i>-Betonung und Inversion.", "You can emphasise what matters – with cleft sentences, emphatic <i>do</i> and inversion."),
  words: `to emphasise|betonen||v
to stress|betonen; stressen||v
the key point|der Kernpunkt||n
crucial|entscheidend||adj|It's crucial that we meet the deadline.|Es ist entscheidend, dass wir die Frist einhalten.
essential|wesentlich; unerlässlich||adj
by no means|keineswegs||ph
not only … but also|nicht nur … sondern auch||ph|Not only is it cheaper, but it's also faster.|Es ist nicht nur billiger, sondern auch schneller.
never before|noch nie zuvor||ph
rarely|selten||adv
under no circumstances|unter keinen Umständen||ph|Under no circumstances should you share your password.|Unter keinen Umständen solltest du dein Passwort weitergeben.
the thing is|die Sache ist die||ph|The thing is, we don't have enough time.|Die Sache ist die: Wir haben nicht genug Zeit.
what matters is|worauf es ankommt, ist||ph
indeed|in der Tat||adv
absolutely|absolut; unbedingt||adv
to make a point|einen Standpunkt deutlich machen||v
the bottom line|das Fazit; unterm Strich||n|The bottom line is that we need more staff.|Unterm Strich brauchen wir mehr Personal.
to highlight|hervorheben||v
undoubtedly|zweifellos||adv
above all|vor allem||ph
first and foremost|zuallererst||ph`,
  say: `What I need is a bit more time.|Was ich brauche, ist ein bisschen mehr Zeit.
It was Anna who found the mistake, not me.|Es war Anna, die den Fehler gefunden hat, nicht ich.
I do understand your concerns.|Ich verstehe Ihre Bedenken durchaus.
Not only did we finish early, but we also stayed under budget.|Wir waren nicht nur früher fertig, sondern blieben auch unter Budget.
Never have I seen such a good presentation.|Noch nie habe ich so eine gute Präsentation gesehen.
The bottom line is that we need to act now.|Unterm Strich müssen wir jetzt handeln.`,
  gram: [
    ["h", TB("Cleft sentences", "Cleft sentences")],
    ["table", { head: [TB("neutral", "neutral"), TB("betont", "emphatic")], rows: [["I need a holiday.", "What I need is a holiday."], ["Anna found the mistake.", "It was Anna who found the mistake."], ["The price worries me.", "What worries me is the price."]], say: 1 }],
    ["h", TB("<i>do</i>-Betonung und Inversion", "Emphatic <i>do</i> and inversion")],
    ["p", TB("<b>do / does / did</b> + Grundform verstärkt eine Aussage: I <b>do</b> like it! She <b>did</b> call. Nach verneinenden Ausdrücken am Satzanfang (<b>Never, Rarely, Not only, Under no circumstances</b>) wird wie in einer Frage umgestellt: <b>Never have I</b> seen …", "<b>do / does / did</b> + base form strengthens a statement: I <b>do</b> like it! She <b>did</b> call. After negative expressions at the start (<b>Never, Rarely, Not only, Under no circumstances</b>) the word order is inverted like in a question: <b>Never have I</b> seen …")],
    ["tip", TB("Inversion klingt formell – perfekt für Präsentationen und Bewerbungen, im Smalltalk eher übertrieben.", "Inversion sounds formal – great for presentations and applications, a bit over the top in small talk.")]
  ],
  drill: [
    ["___ I need is a good night's sleep.", ["What", "That", "Which"], 0],
    ["It was my sister ___ told me the news.", ["who", "what", "which"], 0],
    ["I ___ understand your point, but I disagree.", ["do", "am", "make"], 0],
    ["Never ___ such a beautiful place.", ["have I seen", "I have seen", "I saw"], 0],
    ["Not only ___ late, but he also forgot the documents.", ["was he", "he was", "he is"], 0],
    ["Under no circumstances ___ open this door.", ["should you", "you should", "you must"], 0],
    ["Unterm Strich … → The bottom ___ is …", "line"]
  ],
  talk: { t: TB("Abschlusspräsentation", "Final presentation"), scene: TB("Nach deiner Projektpräsentation stellt Direktor Mr Hughes kritische Fragen.", "After your project presentation, director Mr Hughes asks some tough questions."), who: "Mr Hughes", slots: {}, lines: `a|Thank you for the presentation. But isn't the project too expensive?|Danke für die Präsentation. Aber ist das Projekt nicht zu teuer?|
me|I do understand your concern. However, what matters is the long-term saving.|Ich verstehe Ihre Bedenken durchaus. Worauf es aber ankommt, ist die langfristige Einsparung.||I understand your concern, but the long-term savings are what matter.
a|How much would we actually save?|Wie viel würden wir tatsächlich sparen?|
me|Not only would we save 20 percent, but we would also reduce emissions.|Wir würden nicht nur 20 Prozent sparen, sondern auch Emissionen reduzieren.||We'd save 20 percent and reduce emissions.
a|And who came up with this idea?|Und wer hatte diese Idee?|
me|It was our team in Milan that developed the concept.|Es war unser Team in Mailand, das das Konzept entwickelt hat.||Our team in Milan developed it.
a|Impressive. So, what do you need from us?|Beeindruckend. Was brauchen Sie also von uns?|
me|What we need is your approval by the end of the month.|Was wir brauchen, ist Ihre Zustimmung bis Ende des Monats.||We need your approval by the end of the month.` }
});

courseReg("en", C);
})();
