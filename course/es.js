/* PLM course: es (generated from src/course/es/ by build.py) */
(() => {
const C = { levels: ["A1", "A2", "B1", "B2"].map((id) => ({ id, lessons: [] })) };
const lesson = (lv, o) => C.levels.find((l) => l.id === lv).lessons.push(o);
/* Español A1 · 1–5 */
lesson("A1", { id: "es-a1-01", t: TB("¡Hola! – Begrüßen und vorstellen", "¡Hola! – Greetings and introductions"),
  goal: TB("Du kannst Leute begrüßen, dich vorstellen, nach dem Namen fragen und dich verabschieden.", "You can greet people, introduce yourself, ask someone's name and say goodbye."),
  words: `hola|hallo|hello; hi|ph|¡Hola, Lucía!|Hallo, Lucía!|Hi, Lucía!
buenos días|guten Morgen; guten Tag|good morning|ph
buenas tardes|guten Tag; guten Abend (nachmittags)|good afternoon|ph
buenas noches|guten Abend; gute Nacht|good evening; good night|ph
adiós|tschüss; auf Wiedersehen|goodbye|ph
hasta luego|bis später; tschüss|see you later|ph
hasta mañana|bis morgen|see you tomorrow|ph
encantado/a|freut mich|pleased to meet you|adj|Encantado, soy Pablo.|Freut mich, ich bin Pablo.|Pleased to meet you, I'm Pablo.
mucho gusto|sehr erfreut|nice to meet you|ph
gracias|danke|thank you|ph
de nada|gern geschehen|you're welcome|ph
por favor|bitte|please|ph
perdón|Entschuldigung|sorry; excuse me|ph
el nombre|der Name|the name|n
el apellido|der Nachname|the surname|n
el señor|der Herr|the gentleman; Mr|n
la señora|die Frau; die Dame|the lady; Mrs|n
el amigo|der Freund|the friend (m)|n
la amiga|die Freundin|the friend (f)|n
bien|gut|well; fine|adv|Estoy bien, gracias.|Mir geht's gut, danke.|I'm fine, thanks.
regular|so lala|so-so|adv
también|auch|also; too|adv`,
  say: `¿Cómo te llamas?|Wie heißt du?|What's your name?
Me llamo Marc.|Ich heiße Marc.|My name is Marc.
¿Cómo se llama usted?|Wie heißen Sie?|What's your name? (formal)
¿Qué tal?|Wie geht's?|How are you?
¿Cómo estás?|Wie geht es dir?|How are you?
Muy bien, gracias. ¿Y tú?|Sehr gut, danke. Und dir?|Very well, thanks. And you?
Te presento a mi amiga Laura.|Darf ich dir meine Freundin Laura vorstellen.|Let me introduce my friend Laura.
¡Hasta luego!|Bis später!|See you later!`,
  gram: [
    ["h", TB("<i>ser</i> (sein) und <i>llamarse</i> (heißen)", "<i>ser</i> (to be) and <i>llamarse</i> (to be called)")],
    ["p", TB("Wie im Italienischen fällt das Personalpronomen meistens weg: <b>Soy Marc</b> = Ich bin Marc. Fragen beginnen mit umgedrehtem Fragezeichen: <b>¿</b>Cómo te llamas<b>?</b>", "As in Italian, the subject pronoun is usually dropped: <b>Soy Marc</b> = I'm Marc. Questions start with an upside-down question mark: <b>¿</b>Cómo te llamas<b>?</b>")],
    ["conj", { verbs: ["ser", "llamarse"], tenses: ["Presente"] }],
    ["h", TB("tú oder usted?", "tú or usted?")],
    ["p", TB("<b>tú</b> (du) ist in Spanien sehr verbreitet, auch unter Kollegen. <b>usted</b> (Sie) für Ältere und sehr formelle Situationen – mit der Verbform der 3. Person: <b>¿Cómo se llama usted?</b>", "<b>tú</b> is very common in Spain, even among colleagues. <b>usted</b> for older people and very formal situations – with the 3rd person verb: <b>¿Cómo se llama usted?</b>")],
    ["tip", TB("<b>encantado</b> sagen Männer, <b>encantada</b> Frauen.", "Men say <b>encantado</b>, women say <b>encantada</b>.")]
  ],
  forms: { verbs: ["ser", "llamarse"], tenses: ["Presente"] },
  drill: [
    ["Yo ___ Marc.", ["soy", "eres", "es"], 0],
    ["¿Tú ___ Lucía?", ["eres", "soy", "es"], 0],
    ["¿Cómo te ___ ?", ["llamas", "llamo", "llama"], 0],
    ["¿Cómo ___ llama usted?", ["se", "te", "me"], 0],
    ["Nosotros ___ de Berlín.", ["somos", "sois", "son"], 0],
    ["Me ___ Ana. (llamarse)", "llamo"],
    ["Ella ___ mi amiga. (ser)", "es"]
  ],
  talk: { t: TB("Im Sprachcafé", "At the language café"), scene: TB("Du gehst zu einem Intercambio-Abend in Madrid. Lucía setzt sich zu dir.", "You go to a language exchange evening in Madrid. Lucía sits down next to you."), who: "Lucía", slots: { name: "Marc" }, lines: `a|¡Hola! ¿Qué tal? Soy Lucía. ¿Y tú, cómo te llamas?|Hallo! Wie geht's? Ich bin Lucía. Und du, wie heißt du?|Hi! How are you? I'm Lucía. And you, what's your name?
me|¡Hola, Lucía! Me llamo {name}.|Hallo, Lucía! Ich heiße …|Hi, Lucía! My name is …|Hola, soy {name}.; Me llamo {name}, encantado.
a|Encantada. ¿Cómo estás?|Freut mich. Wie geht's dir?|Nice to meet you. How are you?
me|Muy bien, gracias. ¿Y tú?|Sehr gut, danke. Und dir?|Very well, thanks. And you?|Bien, gracias, ¿y tú?; Muy bien, ¿y tú?
a|Bien también. ¿Eres alemán?|Auch gut. Bist du Deutscher?|Fine too. Are you German?
me|Sí, soy alemán. ¿Y tú eres de Madrid?|Ja, ich bin Deutscher. Und bist du aus Madrid?|Yes, I'm German. And are you from Madrid?|Sí, soy alemana. ¿Tú eres de Madrid?; Sí. ¿Y tú, eres de Madrid?
a|Sí, de Madrid. Mira, este es mi amigo Pablo.|Ja, aus Madrid. Schau, das ist mein Freund Pablo.|Yes, from Madrid. Look, this is my friend Pablo.
me|Hola, Pablo, mucho gusto.|Hallo, Pablo, sehr erfreut.|Hi, Pablo, nice to meet you.|¡Hola, Pablo! Encantado.; Encantada, Pablo.` }
});

lesson("A1", { id: "es-a1-02", t: TB("¿De dónde eres? – Länder und Sprachen", "¿De dónde eres? – Countries and languages"),
  goal: TB("Du kannst sagen, woher du kommst, wo du wohnst und welche Sprachen du sprichst.", "You can say where you are from, where you live and which languages you speak."),
  words: `Alemania|Deutschland|Germany|n|Vivo en Alemania.|Ich wohne in Deutschland.|I live in Germany.
España|Spanien|Spain|n
Italia|Italien|Italy|n
Francia|Frankreich|France|n
Austria|Österreich|Austria|n
Suiza|die Schweiz|Switzerland|n
Inglaterra|England|England|n
México|Mexiko|Mexico|n
alemán / alemana|deutsch; Deutsche(r)|German|adj|Soy alemán, de Hamburgo.|Ich bin Deutscher, aus Hamburg.|I'm German, from Hamburg.
español / española|spanisch; Spanier(in)|Spanish|adj
italiano / italiana|italienisch; Italiener(in)|Italian|adj
inglés / inglesa|englisch; Engländer(in)|English|adj
francés / francesa|französisch; Franzose/Französin|French|adj
el idioma|die Sprache|the language|n|Hablo tres idiomas.|Ich spreche drei Sprachen.|I speak three languages.
la ciudad|die Stadt|the city|n
el país|das Land|the country|n
vivir|leben; wohnen|to live|v
hablar|sprechen|to speak|v
estudiar|lernen; studieren|to study|v
un poco|ein bisschen|a little|adv|Hablo un poco de español.|Ich spreche ein bisschen Spanisch.|I speak a little Spanish.
bastante|ziemlich|quite; fairly|adv
muy bien|sehr gut|very well|ph`,
  say: `¿De dónde eres?|Woher kommst du?|Where are you from?
Soy de Colonia, en Alemania.|Ich bin aus Köln, in Deutschland.|I'm from Cologne, in Germany.
¿Dónde vives?|Wo wohnst du?|Where do you live?
Vivo en Barcelona desde enero.|Ich wohne seit Januar in Barcelona.|I've been living in Barcelona since January.
¿Qué idiomas hablas?|Welche Sprachen sprichst du?|What languages do you speak?
Hablo alemán, inglés y un poco de español.|Ich spreche Deutsch, Englisch und ein bisschen Spanisch.|I speak German, English and a little Spanish.
Estudio español en una academia.|Ich lerne Spanisch in einer Sprachschule.|I'm studying Spanish at a language school.`,
  gram: [
    ["h", TB("Regelmäßige Verben im Präsens", "Regular verbs in the present")],
    ["p", TB("Drei Gruppen: <b>-ar</b> (hablar), <b>-er</b> (comer), <b>-ir</b> (vivir). Stamm + Endung.", "Three groups: <b>-ar</b> (hablar), <b>-er</b> (comer), <b>-ir</b> (vivir). Stem + ending.")],
    ["conj", { verbs: ["hablar", "comer", "vivir"], tenses: ["Presente"] }],
    ["h", TB("Nationalitäten", "Nationalities")],
    ["p", TB("Endet die männliche Form auf Konsonant, kommt für die weibliche ein <b>-a</b> dazu: alemán → aleman<b>a</b>, español → español<b>a</b> (der Akzent fällt weg). Auf -o: italian<b>o</b> → italian<b>a</b>. Sprachen = männliche Form: <b>el alemán</b>.", "If the masculine form ends in a consonant, add <b>-a</b> for the feminine: alemán → aleman<b>a</b>, español → español<b>a</b> (the accent disappears). In -o: italian<b>o</b> → italian<b>a</b>. Languages = masculine form: <b>el alemán</b>.")],
    ["tip", TB("<b>ser de</b> = Herkunft, <b>vivir en</b> = Wohnort: Soy <b>de</b> Múnich, pero vivo <b>en</b> Madrid.", "<b>ser de</b> = origin, <b>vivir en</b> = place of residence: Soy <b>de</b> Múnich, pero vivo <b>en</b> Madrid.")]
  ],
  forms: { verbs: ["hablar", "estudiar", "vivir", "comer", "trabajar", "escribir"], tenses: ["Presente"] },
  drill: [
    ["Soy ___ Berlín.", ["de", "en", "a"], 0],
    ["Vivo ___ Sevilla.", ["en", "de", "a"], 0],
    ["Ella es ___ .", ["alemana", "alemán", "alemanes"], 0],
    ["Tú ___ muy bien español.", ["hablas", "hablo", "habla"], 0],
    ["Nosotros ___ en Valencia. (vivir)", "vivimos"],
    ["¿Vosotros ___ inglés? (estudiar)", "estudiáis"],
    ["Ellos ___ mucho. (trabajar)", "trabajan"]
  ],
  talk: { t: TB("Erster Tag in der Sprachschule", "First day at language school"), scene: TB("Erster Kurstag in Salamanca. Der Lehrer Javier stellt dir ein paar Fragen.", "First day of the course in Salamanca. The teacher, Javier, asks you a few questions."), who: "Javier", slots: { city: "Múnich" }, lines: `a|Buenos días. ¿De dónde eres?|Guten Morgen. Woher kommst du?|Good morning. Where are you from?
me|Soy alemán, de {city}.|Ich bin Deutscher, aus …|I'm German, from …|Soy alemana, de {city}.; Soy de {city}, en Alemania.
a|¡Qué bien! ¿Y vives en {city}?|Toll! Und wohnst du in …?|Great! And do you live in …?
me|Sí, vivo allí, pero ahora estoy en Salamanca para el curso.|Ja, ich wohne dort, aber jetzt bin ich wegen des Kurses in Salamanca.|Yes, I live there, but now I'm in Salamanca for the course.|Sí, pero ahora estoy aquí para el curso.
a|¿Qué idiomas hablas?|Welche Sprachen sprichst du?|What languages do you speak?
me|Hablo alemán, inglés y un poco de español.|Ich spreche Deutsch, Englisch und ein bisschen Spanisch.|I speak German, English and a little Spanish.|Alemán, inglés y un poco de español.
a|¿Y por qué estudias español?|Und warum lernst du Spanisch?|And why are you learning Spanish?
me|Porque me gusta mucho España y quiero viajar.|Weil mir Spanien sehr gefällt und ich reisen möchte.|Because I really like Spain and I want to travel.|Porque quiero viajar por España.
a|¡Perfecto! Bienvenido al curso.|Perfekt! Willkommen im Kurs.|Perfect! Welcome to the course.
me|¡Muchas gracias!|Vielen Dank!|Thank you very much!|¡Gracias!` }
});

lesson("A1", { id: "es-a1-03", t: TB("Los números – Zahlen, Alter, Telefon", "Los números – Numbers, age, phone"),
  goal: TB("Du kannst bis 100 zählen, dein Alter sagen und Telefonnummern verstehen.", "You can count to 100, say your age and understand phone numbers."),
  words: `cero|null|zero|x
uno|eins|one|x
dos|zwei|two|x
tres|drei|three|x
cuatro|vier|four|x
cinco|fünf|five|x
seis|sechs|six|x
siete|sieben|seven|x
ocho|acht|eight|x
nueve|neun|nine|x
diez|zehn|ten|x
quince|fünfzehn|fifteen|x
veinte|zwanzig|twenty|x
veintiuno|einundzwanzig|twenty-one|x
treinta|dreißig|thirty|x
treinta y cinco|fünfunddreißig|thirty-five|x
cuarenta|vierzig|forty|x
cincuenta|fünfzig|fifty|x
cien|hundert|a hundred|x
el año|das Jahr|the year|n|Tengo veintinueve años.|Ich bin neunundzwanzig.|I'm twenty-nine.
el número de teléfono|die Telefonnummer|the phone number|n
el móvil|das Handy|the mobile phone|n|¿Me das tu móvil?|Gibst du mir deine Handynummer?|Can I have your mobile number?
el cumpleaños|der Geburtstag|the birthday|n
cuántos/cuántas|wie viele|how many|x`,
  say: `¿Cuántos años tienes?|Wie alt bist du?|How old are you?
Tengo treinta años.|Ich bin dreißig.|I'm thirty.
¿Cuál es tu número de teléfono?|Was ist deine Telefonnummer?|What's your phone number?
Mi número es el seis cuatro cinco, veinte, treinta y uno, cero dos.|Meine Nummer ist 645 20 31 02.|My number is 645 20 31 02.
¿Puedes repetir, por favor?|Kannst du das bitte wiederholen?|Can you repeat, please?
Más despacio, por favor.|Langsamer, bitte.|More slowly, please.
¿Tienes hermanos?|Hast du Geschwister?|Do you have any brothers or sisters?`,
  gram: [
    ["h", TB("Das Verb <i>tener</i> (haben)", "The verb <i>tener</i> (to have)")],
    ["conj", { verbs: ["tener"], tenses: ["Presente"] }],
    ["p", TB("Das Alter sagt man mit <b>tener</b>: <b>Tengo 30 años</b>. Bei <i>tener</i> wird e zu <b>ie</b> (tienes, tiene, tienen), die 1. Person ist unregelmäßig: <b>tengo</b>.", "Age is expressed with <b>tener</b>: <b>Tengo 30 años</b>. In <i>tener</i> the e becomes <b>ie</b> (tienes, tiene, tienen) and the 1st person is irregular: <b>tengo</b>.")],
    ["h", TB("Zahlen", "Numbers")],
    ["p", TB("16–29 schreibt man in einem Wort: dieci<b>séis</b>, veinti<b>trés</b>. Ab 31 mit <b>y</b>: treinta <b>y</b> uno, cuarenta <b>y</b> cinco. 100 = <b>cien</b>, aber 101 = <b>ciento</b> uno.", "16–29 are written as one word: dieci<b>séis</b>, veinti<b>trés</b>. From 31 with <b>y</b>: treinta <b>y</b> uno, cuarenta <b>y</b> cinco. 100 = <b>cien</b>, but 101 = <b>ciento</b> uno.")],
    ["ex", [["dieciséis", "16", "16"], ["veintidós", "22", "22"], ["treinta y ocho", "38", "38"], ["noventa y nueve", "99", "99"]]],
    ["tip", TB("<b>uno</b> wird vor männlichen Nomen zu <b>un</b>: veinti<b>ún</b> años.", "<b>uno</b> becomes <b>un</b> before masculine nouns: veinti<b>ún</b> años.")]
  ],
  forms: { verbs: ["tener"], tenses: ["Presente"] },
  drill: [
    ["Yo ___ veinticinco años.", ["tengo", "soy", "tienes"], 0, TB("Alter mit tener.", "Age with tener.")],
    ["¿Cuántos años ___ tu hermana?", ["tiene", "es", "tienes"], 0],
    ["Nosotros ___ dos hijos.", ["tenemos", "tenéis", "tienen"], 0],
    ["31 = ___", ["treinta y uno", "treintiuno", "treinta uno"], 0],
    ["100 = ___", ["cien", "ciento", "cientos"], 0],
    ["16 = ___", ["dieciséis", "diez y seis", "deciséis"], 0],
    ["¿Vosotros ___ coche? (tener)", "tenéis"]
  ],
  talk: { t: TB("Im Fitnessstudio anmelden", "Signing up at the gym"), scene: TB("Du meldest dich in einem Gimnasio in Valencia an. Carlos am Empfang hilft dir.", "You're signing up at a gym in Valencia. Carlos at reception helps you."), who: "Carlos", slots: { name: "Marc", age: "30" }, lines: `a|¡Hola! ¿Quieres hacerte socio? ¿Cómo te llamas?|Hallo! Willst du Mitglied werden? Wie heißt du?|Hi! Do you want to become a member? What's your name?
me|Sí. Me llamo {name}.|Ja. Ich heiße …|Yes. My name is …|Sí, soy {name}.
a|Vale. ¿Cuántos años tienes?|Okay. Wie alt bist du?|OK. How old are you?
me|Tengo {age} años.|Ich bin … Jahre alt.|I'm … years old.|{age} años.
a|¿Y tu número de móvil?|Und deine Handynummer?|And your mobile number?
me|Es el seis cinco cero, doce, treinta y cuatro, cincuenta y seis.|Sie ist 650 12 34 56.|It's 650 12 34 56.|Seis cinco cero, doce, treinta y cuatro, cincuenta y seis.
a|Perdona, ¿puedes repetir más despacio?|Entschuldige, kannst du langsamer wiederholen?|Sorry, can you repeat more slowly?
me|Claro: seis, cinco, cero, uno, dos, tres, cuatro, cinco, seis.|Klar: 6, 5, 0, 1, 2, 3, 4, 5, 6.|Sure: 6, 5, 0, 1, 2, 3, 4, 5, 6.|Sí: seis, cinco, cero, uno, dos, tres, cuatro, cinco, seis.
a|Perfecto. La cuota es de cuarenta euros al mes.|Perfekt. Der Beitrag beträgt vierzig Euro im Monat.|Perfect. The fee is forty euros a month.
me|Vale, muy bien. ¡Gracias!|Okay, sehr gut. Danke!|OK, great. Thanks!|Vale, gracias.` }
});

lesson("A1", { id: "es-a1-04", t: TB("En el bar – Bestellen und Artikel", "En el bar – Ordering and articles"),
  goal: TB("Du kannst in einer Bar bestellen, nach dem Preis fragen und Artikel richtig benutzen.", "You can order in a bar, ask for the price and use articles correctly."),
  words: `el café con leche|der Milchkaffee|the white coffee|n|Un café con leche, por favor.|Einen Milchkaffee, bitte.|A white coffee, please.
el café solo|der Espresso|the espresso|n
el cortado|der Espresso mit etwas Milch|the cortado|n
el té|der Tee|the tea|n
el agua con gas|das Sprudelwasser|sparkling water|n
el agua sin gas|das stille Wasser|still water|n
la cerveza|das Bier|the beer|n
la caña|das kleine Bier vom Fass|the small draught beer|n
el vino tinto|der Rotwein|red wine|n
el zumo de naranja|der Orangensaft|orange juice|n
el bocadillo|das belegte Baguette|the sandwich (baguette)|n
la tostada|der Toast|the toast|n
la tortilla|das spanische Omelett|the Spanish omelette|n|Una ración de tortilla, por favor.|Eine Portion Tortilla, bitte.|A portion of tortilla, please.
las tapas|die Tapas|tapas|n
la ración|die Portion|the portion|n
la cuenta|die Rechnung|the bill|n
¿cuánto es?|was macht das?|how much is it?|ph
quería|ich hätte gern|I'd like|ph|Quería un té, por favor.|Ich hätte gern einen Tee, bitte.|I'd like a tea, please.
para mí|für mich|for me|ph
nada más|sonst nichts|nothing else|ph
la propina|das Trinkgeld|the tip|n
el camarero|der Kellner|the waiter|n`,
  say: `¿Qué te pongo?|Was darf's sein?|What can I get you?
Para mí, un café con leche.|Für mich einen Milchkaffee.|A white coffee for me.
Quería una caña y una ración de patatas bravas.|Ich hätte gern ein kleines Bier und eine Portion Patatas bravas.|I'd like a small beer and a portion of patatas bravas.
¿Me pone un agua sin gas?|Geben Sie mir ein stilles Wasser?|Could I have a still water?
¿Cuánto es?|Was macht das?|How much is it?
La cuenta, por favor.|Die Rechnung, bitte.|The bill, please.
¿Puedo pagar con tarjeta?|Kann ich mit Karte zahlen?|Can I pay by card?`,
  gram: [
    ["h", TB("Artikel", "Articles")],
    ["table", { head: [TB("", ""), TB("bestimmt", "definite"), TB("unbestimmt", "indefinite")], rows: [
      [TB("männlich Sg.", "masc. sing."), "el café", "un café"], [TB("weiblich Sg.", "fem. sing."), "la cerveza", "una cerveza"], [TB("männlich Pl.", "masc. pl."), "los cafés", "unos cafés"], [TB("weiblich Pl.", "fem. pl."), "las cervezas", "unas cervezas"]] }],
    ["p", TB("Nomen auf <b>-o</b> sind meist männlich, auf <b>-a</b> meist weiblich. Ausnahmen: <b>el día</b>, <b>el problema</b>, <b>la mano</b>. Weibliche Wörter mit betontem a- nehmen <b>el</b>: <b>el agua</b> (aber: el agua fr<b>ía</b>).", "Nouns in <b>-o</b> are usually masculine, in <b>-a</b> feminine. Exceptions: <b>el día</b>, <b>el problema</b>, <b>la mano</b>. Feminine words with a stressed a- take <b>el</b>: <b>el agua</b> (but: el agua fr<b>ía</b>).")],
    ["h", TB("Plural", "Plural")],
    ["p", TB("Vokal + <b>-s</b> (café → cafés), Konsonant + <b>-es</b> (ración → raciones).", "Vowel + <b>-s</b> (café → cafés), consonant + <b>-es</b> (ración → raciones).")],
    ["tip", TB("<b>Quería</b> (wörtlich: ich wollte) ist die übliche höfliche Bestellform – wie das italienische <i>vorrei</i>.", "<b>Quería</b> (literally: I wanted) is the usual polite way to order – like Italian <i>vorrei</i>.")]
  ],
  drill: [
    ["Quería ___ cerveza, por favor.", ["una", "un", "uno"], 0],
    ["___ agua está fría.", ["El", "La", "Lo"], 0, TB("Betontes a- → el agua.", "Stressed a- → el agua.")],
    ["Dos ___ con leche, por favor.", ["cafés", "café", "cafeses"], 0],
    ["Una ración de ___ , por favor.", ["patatas", "patata", "patatos"], 0],
    ["___ problema es grave.", ["El", "La", "Un a"], 0],
    ["¿Cuánto ___ ?", ["es", "son", "está"], 0],
    ["Para ___ , un zumo.", ["mí", "me", "yo"], 0]
  ],
  talk: { t: TB("In der Tapas-Bar", "In the tapas bar"), scene: TB("Abends in einer Bar in Sevilla. Die Kellnerin Rocío ist schnell und freundlich.", "Evening in a bar in Seville. The waitress, Rocío, is quick and friendly."), who: "Rocío", slots: {}, lines: `a|¡Buenas! ¿Qué os pongo?|Hallo! Was darf ich euch bringen?|Hi! What can I get you?
me|Buenas. Para mí, una caña, por favor.|Hallo. Für mich ein kleines Bier, bitte.|Hi. A small beer for me, please.|Una caña, por favor.; Quería una caña, por favor.
a|Muy bien. ¿Algo para comer?|Sehr gut. Etwas zu essen?|Very good. Anything to eat?
me|Sí, una ración de tortilla y unas patatas bravas.|Ja, eine Portion Tortilla und Patatas bravas.|Yes, a portion of tortilla and some patatas bravas.|Sí, quería tortilla y patatas bravas.
a|Perfecto. ¿Algo más?|Perfekt. Sonst noch etwas?|Perfect. Anything else?
me|No, nada más, gracias.|Nein, sonst nichts, danke.|No, nothing else, thanks.|Nada más, gracias.
a|Aquí tenéis. ¡Que aproveche!|Bitte schön. Guten Appetit!|Here you are. Enjoy!
me|¡Gracias! ¿Me trae la cuenta, por favor?|Danke! Bringen Sie mir die Rechnung, bitte?|Thanks! Could you bring me the bill, please?|La cuenta, por favor.
a|Son doce euros con cincuenta.|Das macht zwölf Euro fünfzig.|That's twelve euros fifty.
me|¿Puedo pagar con tarjeta?|Kann ich mit Karte zahlen?|Can I pay by card?|¿Se puede pagar con tarjeta?` }
});

lesson("A1", { id: "es-a1-05", t: TB("La familia – Familie und Possessiva", "La familia – Family and possessives"),
  goal: TB("Du kannst deine Familie vorstellen und Possessivbegleiter benutzen.", "You can introduce your family and use possessive adjectives."),
  words: `la familia|die Familie|the family|n
el padre|der Vater|the father|n
la madre|die Mutter|the mother|n
los padres|die Eltern|the parents|n|Mis padres viven en Stuttgart.|Meine Eltern wohnen in Stuttgart.|My parents live in Stuttgart.
el hermano|der Bruder|the brother|n
la hermana|die Schwester|the sister|n
los hermanos|die Geschwister; die Brüder|brothers and sisters|n
el hijo|der Sohn|the son|n
la hija|die Tochter|the daughter|n
los hijos|die Kinder|the children|n
el marido|der Ehemann|the husband|n
la mujer|die Ehefrau; die Frau|the wife; the woman|n
el abuelo|der Opa|the grandfather|n
la abuela|die Oma|the grandmother|n
el tío|der Onkel|the uncle|n
la tía|die Tante|the aunt|n
el primo|der Cousin|the cousin (m)|n
la prima|die Cousine|the cousin (f)|n
el novio|der feste Freund; der Verlobte|the boyfriend|n
la novia|die feste Freundin|the girlfriend|n
casado/a|verheiratet|married|adj|Mi hermana está casada.|Meine Schwester ist verheiratet.|My sister is married.
soltero/a|ledig|single|adj
hijo único|Einzelkind|only child|ph
mayor|älter|older|adj
menor|jünger|younger|adj`,
  say: `¿Tienes hermanos?|Hast du Geschwister?|Do you have any brothers or sisters?
Tengo un hermano mayor y una hermana menor.|Ich habe einen älteren Bruder und eine jüngere Schwester.|I have an older brother and a younger sister.
Mi hermano se llama Jonas.|Mein Bruder heißt Jonas.|My brother is called Jonas.
Esta es mi madre.|Das ist meine Mutter.|This is my mother.
Mis abuelos viven en el campo.|Meine Großeltern wohnen auf dem Land.|My grandparents live in the country.
¿Estás casado?|Bist du verheiratet?|Are you married?
Su hija es muy simpática.|Seine/Ihre Tochter ist sehr nett.|His/her daughter is very nice.`,
  gram: [
    ["h", TB("Possessivbegleiter", "Possessive adjectives")],
    ["table", { head: [TB("", ""), TB("Singular", "singular"), TB("Plural", "plural")], rows: [
      [TB("mein", "my"), "mi hermano", "mis hermanos"], [TB("dein", "your"), "tu madre", "tus padres"], [TB("sein/ihr/Ihr", "his/her/your (formal)"), "su hijo", "sus hijos"],
      [TB("unser", "our"), "nuestro/a", "nuestros/as"], [TB("euer", "your (pl.)"), "vuestro/a", "vuestros/as"], [TB("ihr (Pl.)", "their"), "su", "sus"]] }],
    ["p", TB("Anders als im Italienischen steht <b>kein Artikel</b> davor: <b>mi</b> madre, <b>mis</b> padres. <b>su</b> kann sein, ihr, Ihr oder ihr (Plural) heißen – der Kontext entscheidet.", "Unlike Italian there is <b>no article</b>: <b>mi</b> madre, <b>mis</b> padres. <b>su</b> can mean his, her, your (formal) or their – context decides.")],
    ["tip", TB("<b>los padres</b> = die Eltern, <b>los hermanos</b> = die Geschwister, <b>los hijos</b> = die Kinder – der männliche Plural schließt Frauen ein.", "<b>los padres</b> = parents, <b>los hermanos</b> = siblings, <b>los hijos</b> = children – the masculine plural includes women.")]
  ],
  drill: [
    ["___ madre es profesora.", ["Mi", "La mi", "Mía"], 0],
    ["___ padres viven en Madrid.", ["Mis", "Mi", "Los mis"], 0],
    ["¿Cómo se llama ___ hermana?", ["tu", "tus", "tú"], 0],
    ["Pedro y ___ mujer tienen tres hijos.", ["su", "sus", "suya"], 0],
    ["___ casa es grande. (nosotros)", ["Nuestra", "Nuestro", "Nuestras"], 0],
    ["Mi hermana es ___ que yo.", ["mayor", "más mayor", "grande"], 0],
    ["Tengo dos ___ : un chico y una chica.", ["hijos", "hijas", "hijo"], 0]
  ],
  talk: { t: TB("Familienfotos", "Family photos"), scene: TB("Deine Kollegin Carmen zeigt dir Fotos und fragt nach deiner Familie.", "Your colleague Carmen shows you photos and asks about your family."), who: "Carmen", slots: { name: "Jonas" }, lines: `a|Mira, esta es mi familia. Este es mi marido, Andrés.|Schau, das ist meine Familie. Das ist mein Mann, Andrés.|Look, this is my family. This is my husband, Andrés.
me|¡Qué foto tan bonita! ¿Y estos son tus hijos?|Was für ein schönes Foto! Und sind das deine Kinder?|What a lovely photo! And are these your children?|¡Qué bonita! ¿Son tus hijos?
a|Sí, Daniel y Sara. ¿Y tú? ¿Tienes hermanos?|Ja, Daniel und Sara. Und du? Hast du Geschwister?|Yes, Daniel and Sara. And you? Do you have any siblings?
me|Sí, tengo un hermano y una hermana.|Ja, ich habe einen Bruder und eine Schwester.|Yes, I have a brother and a sister.|Tengo un hermano y una hermana.
a|¿Cómo se llama tu hermano?|Wie heißt dein Bruder?|What's your brother's name?
me|Mi hermano se llama {name}.|Mein Bruder heißt …|My brother's name is …|Se llama {name}.
a|¿Es mayor o menor que tú?|Ist er älter oder jünger als du?|Is he older or younger than you?
me|Es mayor. Vive en Berlín con su novia.|Er ist älter. Er wohnt mit seiner Freundin in Berlin.|He's older. He lives in Berlin with his girlfriend.|Es mayor y vive en Berlín.
a|¿Y tus padres?|Und deine Eltern?|And your parents?
me|Mis padres viven cerca de Múnich.|Meine Eltern wohnen in der Nähe von München.|My parents live near Munich.|Viven cerca de Múnich.` }
});

/* Español A1 · 6–10 */
lesson("A1", { id: "es-a1-06", t: TB("Mi día – Tagesablauf und Uhrzeit", "Mi día – Daily routine and time"),
  goal: TB("Du kannst deinen Tag beschreiben, die Uhrzeit sagen und reflexive Verben benutzen.", "You can describe your day, tell the time and use reflexive verbs."),
  words: `despertarse|aufwachen|to wake up|v|Me despierto a las siete.|Ich wache um sieben auf.|I wake up at seven.
levantarse|aufstehen|to get up|v
ducharse|duschen|to have a shower|v
vestirse|sich anziehen|to get dressed|v
desayunar|frühstücken|to have breakfast|v
ir al trabajo|zur Arbeit gehen|to go to work|v
comer|(zu Mittag) essen|to eat; to have lunch|v
volver a casa|nach Hause kommen|to come home|v
cenar|zu Abend essen|to have dinner|v
acostarse|ins Bett gehen|to go to bed|v|Normalmente me acuesto a las once.|Normalerweise gehe ich um elf ins Bett.|I usually go to bed at eleven.
la mañana|der Morgen; der Vormittag|the morning|n
la tarde|der Nachmittag; der frühe Abend|the afternoon; the evening|n
la noche|die Nacht; der Abend|the night|n
temprano|früh|early|adv
tarde|spät|late|adv
normalmente|normalerweise|usually|adv
siempre|immer|always|adv
nunca|nie|never|adv
a veces|manchmal|sometimes|ph
y media|halb (… Uhr dreißig)|half past|ph|Son las ocho y media.|Es ist halb neun.|It's half past eight.
y cuarto|Viertel nach|quarter past|ph
menos cuarto|Viertel vor|quarter to|ph
el mediodía|der Mittag|midday|n`,
  say: `¿Qué hora es?|Wie spät ist es?|What time is it?
Es la una.|Es ist eins.|It's one o'clock.
Son las siete y cuarto.|Es ist Viertel nach sieben.|It's quarter past seven.
¿A qué hora te levantas?|Um wie viel Uhr stehst du auf?|What time do you get up?
Me levanto a las seis y media.|Ich stehe um halb sieben auf.|I get up at half past six.
En España se come tarde, a las dos o las tres.|In Spanien isst man spät, um zwei oder drei.|In Spain people have lunch late, at two or three.
Por la noche veo una serie.|Abends schaue ich eine Serie.|In the evening I watch a series.`,
  gram: [
    ["h", TB("Reflexive Verben", "Reflexive verbs")],
    ["p", TB("Pronomen vor dem Verb: <b>me</b> levanto, <b>te</b> levantas, <b>se</b> levanta, <b>nos</b> levantamos, <b>os</b> levantáis, <b>se</b> levantan.", "Pronoun before the verb: <b>me</b> levanto, <b>te</b> levantas, <b>se</b> levanta, <b>nos</b> levantamos, <b>os</b> levantáis, <b>se</b> levantan.")],
    ["conj", { verbs: ["levantarse", "despertarse", "acostarse"], tenses: ["Presente"] }],
    ["p", TB("Achtung, Stammwechsel: desp<b>ie</b>rto (e → ie), ac<b>ue</b>sto (o → ue) – aber nicht bei nosotros/vosotros.", "Watch the stem change: desp<b>ie</b>rto (e → ie), ac<b>ue</b>sto (o → ue) – but not in nosotros/vosotros.")],
    ["h", TB("Die Uhrzeit", "Telling the time")],
    ["table", { head: [TB("Uhrzeit", "time"), TB("Spanisch", "Spanish")], rows: [["1:00", "Es la una."], ["3:00", "Son las tres."], ["3:15", "Son las tres y cuarto."], ["3:30", "Son las tres y media."], ["3:45", "Son las cuatro menos cuarto."]], say: 1 }],
    ["tip", TB("„Um“ = <b>a las</b>: a las ocho. Tageszeit: <b>de</b> la mañana (bei Uhrzeit), <b>por</b> la mañana (allgemein).", "\"At\" = <b>a las</b>: a las ocho. Time of day: <b>de</b> la mañana (with a time), <b>por</b> la mañana (in general).")]
  ],
  forms: { verbs: ["levantarse", "ducharse", "despertarse", "acostarse", "vestirse"], tenses: ["Presente"] },
  drill: [
    ["Yo ___ levanto a las siete.", ["me", "te", "se"], 0],
    ["¿A qué hora ___ acuestas?", ["te", "me", "se"], 0],
    ["Nosotros ___ duchamos por la mañana.", ["nos", "os", "se"], 0],
    ["Son las nueve ___ media.", ["y", "con", "de"], 0],
    ["___ la una y diez.", ["Es", "Son", "Está"], 0],
    ["Me ___ a las siete. (despertarse)", "despierto"],
    ["Ella se ___ muy tarde. (acostarse)", "acuesta"]
  ],
  talk: { t: TB("Ein ganz normaler Tag", "An ordinary day"), scene: TB("In der Mittagspause fragt dich dein Kollege Sergio nach deinem Alltag.", "During lunch your colleague Sergio asks about your daily routine."), who: "Sergio", slots: { time: "siete" }, lines: `a|¿A qué hora te levantas normalmente?|Um wie viel Uhr stehst du normalerweise auf?|What time do you usually get up?
me|Me levanto a las {time}.|Ich stehe um … auf.|I get up at …|Normalmente a las {time}.
a|¿Y desayunas en casa?|Und frühstückst du zu Hause?|And do you have breakfast at home?
me|No, desayuno en una cafetería cerca de la oficina.|Nein, ich frühstücke in einem Café in der Nähe des Büros.|No, I have breakfast in a café near the office.|No, desayuno en un bar.
a|¿Y cuándo vas al gimnasio?|Und wann gehst du ins Fitnessstudio?|And when do you go to the gym?
me|Voy por la tarde, después del trabajo.|Ich gehe nachmittags, nach der Arbeit.|I go in the afternoon, after work.|Después del trabajo.
a|Yo por la noche estoy muy cansado. ¿A qué hora te acuestas?|Ich bin abends sehr müde. Wann gehst du ins Bett?|I'm very tired in the evening. What time do you go to bed?
me|Normalmente me acuesto a las once.|Normalerweise gehe ich um elf ins Bett.|I usually go to bed at eleven.|A las once, más o menos.
a|¡Qué disciplina! Mañana voy contigo al gimnasio.|Was für eine Disziplin! Morgen gehe ich mit dir ins Studio.|What discipline! Tomorrow I'm coming to the gym with you.
me|¡Perfecto! Hasta mañana.|Perfekt! Bis morgen.|Perfect! See you tomorrow.|¡Genial, hasta mañana!` }
});

lesson("A1", { id: "es-a1-07", t: TB("Tiempo libre – Hobbys und <i>gustar</i>", "Tiempo libre – Hobbies and <i>gustar</i>"),
  goal: TB("Du kannst über Hobbys sprechen, sagen was dir gefällt, und Verben mit Stammwechsel benutzen.", "You can talk about hobbies, say what you like and use stem-changing verbs."),
  words: `el tiempo libre|die Freizeit|free time|n|¿Qué haces en tu tiempo libre?|Was machst du in deiner Freizeit?|What do you do in your free time?
el deporte|der Sport|sport|n
ir al gimnasio|ins Fitnessstudio gehen|to go to the gym|v
correr|laufen; joggen|to run|v
nadar|schwimmen|to swim|v
jugar al fútbol|Fußball spielen|to play football|v
leer|lesen|to read|v
escuchar música|Musik hören|to listen to music|v
tocar la guitarra|Gitarre spielen|to play the guitar|v
ver series|Serien schauen|to watch series|v
cocinar|kochen|to cook|v
viajar|reisen|to travel|v
salir con amigos|mit Freunden ausgehen|to go out with friends|v
el fin de semana|das Wochenende|the weekend|n
a menudo|oft|often|adv
preferir|lieber mögen|to prefer|v
querer|wollen; lieben|to want; to love|v
encantar|sehr gefallen|to love (something)|v|Me encanta bailar.|Ich tanze total gern.|I love dancing.
odiar|hassen|to hate|v
la playa|der Strand|the beach|n
la montaña|die Berge|the mountains|n`,
  say: `Me gusta leer.|Ich lese gern.|I like reading.
Me gusta el fútbol.|Ich mag Fußball.|I like football.
Me gustan las películas españolas.|Ich mag spanische Filme.|I like Spanish films.
No me gusta correr.|Ich laufe nicht gern.|I don't like running.
¿Te gusta cocinar?|Kochst du gern?|Do you like cooking?
Prefiero la playa a la montaña.|Ich mag den Strand lieber als die Berge.|I prefer the beach to the mountains.
¡A mí también!|Ich auch!|Me too!
A mí tampoco.|Ich auch nicht.|Me neither.`,
  gram: [
    ["h", TB("<i>gustar</i>: me gusta / me gustan", "<i>gustar</i>: me gusta / me gustan")],
    ["p", TB("Wie <i>piacere</i>: Das Ding ist Subjekt. <b>me gusta</b> + Singular/Verb, <b>me gustan</b> + Plural. Pronomen: <b>me, te, le, nos, os, les</b>. Zur Betonung: <b>A mí</b> me gusta, <b>a ti</b> te gusta …", "Like Italian <i>piacere</i>: the thing is the subject. <b>me gusta</b> + singular/verb, <b>me gustan</b> + plural. Pronouns: <b>me, te, le, nos, os, les</b>. For emphasis: <b>A mí</b> me gusta, <b>a ti</b> te gusta …")],
    ["ex", [["Me gusta la música.", "Ich mag Musik.", "I like music."], ["Me gustan los perros.", "Ich mag Hunde.", "I like dogs."], ["A Pablo le gusta nadar.", "Pablo schwimmt gern.", "Pablo likes swimming."], ["¿Os gusta el vino?", "Mögt ihr Wein?", "Do you like wine?"]]],
    ["h", TB("Verben mit Stammwechsel", "Stem-changing verbs")],
    ["conj", { verbs: ["jugar", "querer", "preferir"], tenses: ["Presente"] }],
    ["tip", TB("„Ich auch“ hängt vom Satz ab: Me gusta → <b>A mí también</b>. Hablo inglés → <b>Yo también</b>. Verneint: <b>A mí tampoco / Yo tampoco</b>.", "\"Me too\" depends on the sentence: Me gusta → <b>A mí también</b>. Hablo inglés → <b>Yo también</b>. Negative: <b>A mí tampoco / Yo tampoco</b>.")]
  ],
  forms: { verbs: ["jugar", "querer", "preferir", "poder", "volver"], tenses: ["Presente"] },
  drill: [
    ["Me ___ el chocolate.", ["gusta", "gustan", "gusto"], 0],
    ["Me ___ los gatos.", ["gustan", "gusta", "gustas"], 0],
    ["¿Te ___ bailar?", ["gusta", "gustan", "gustas"], 0],
    ["A María ___ gusta el tenis.", ["le", "la", "se"], 0],
    ["Yo ___ al fútbol los sábados. (jugar)", "juego"],
    ["¿Tú qué ___ , té o café? (preferir)", "prefieres"],
    ["Nosotros ___ ir a la playa. (querer)", "queremos"]
  ],
  talk: { t: TB("Smalltalk im Fitnessstudio", "Small talk at the gym"), scene: TB("Zwischen zwei Sätzen spricht dich Álvaro an der Hantelbank an.", "Between two sets, Álvaro starts talking to you at the bench press."), who: "Álvaro", slots: {}, lines: `a|Perdona, ¿cuántas series te quedan?|Entschuldige, wie viele Sätze hast du noch?|Sorry, how many sets have you got left?
me|Me quedan dos. Si quieres, nos turnamos.|Ich habe noch zwei. Wenn du willst, wechseln wir uns ab.|I've got two left. If you like, we can take turns.|Dos más. Podemos turnarnos, si quieres.
a|¡Genial, gracias! ¿Vienes mucho al gimnasio?|Super, danke! Kommst du oft ins Studio?|Great, thanks! Do you come to the gym a lot?
me|Sí, vengo cuatro veces a la semana.|Ja, ich komme viermal pro Woche.|Yes, I come four times a week.|Sí, cuatro veces por semana.
a|¿Y te gusta correr también?|Und läufst du auch gern?|And do you like running too?
me|No, no me gusta correr. Prefiero las pesas.|Nein, ich laufe nicht gern. Ich mag lieber Gewichte.|No, I don't like running. I prefer weights.|No mucho, prefiero las pesas.
a|¡A mí también! ¿Y qué haces en tu tiempo libre?|Ich auch! Und was machst du in deiner Freizeit?|Me too! And what do you do in your free time?
me|Me gusta cocinar y salir con amigos.|Ich koche gern und gehe gern mit Freunden aus.|I like cooking and going out with friends.|Me encanta cocinar y salir con amigos.
a|Oye, el sábado jugamos al fútbol en el parque. ¿Quieres venir?|Hör mal, am Samstag spielen wir im Park Fußball. Willst du mitkommen?|Hey, on Saturday we're playing football in the park. Do you want to come?
me|¡Claro, me encanta! ¿A qué hora?|Klar, sehr gern! Um wie viel Uhr?|Sure, I'd love to! What time?|¡Sí, genial! ¿A qué hora?` }
});

lesson("A1", { id: "es-a1-08", t: TB("En la ciudad – Orte, Weg und <i>hay / estar</i>", "En la ciudad – Places, directions and <i>hay / estar</i>"),
  goal: TB("Du kannst nach dem Weg fragen und den Unterschied zwischen hay und estar benutzen.", "You can ask the way and use the difference between hay and estar."),
  words: `la estación|der Bahnhof|the station|n
la parada de autobús|die Bushaltestelle|the bus stop|n
el metro|die U-Bahn|the underground|n
la farmacia|die Apotheke|the pharmacy|n
el supermercado|der Supermarkt|the supermarket|n
el banco|die Bank|the bank|n
el cajero|der Geldautomat|the cash machine|n
la plaza|der Platz|the square|n
la calle|die Straße|the street|n
el museo|das Museum|the museum|n
la iglesia|die Kirche|the church|n
el hospital|das Krankenhaus|the hospital|n
a la derecha|rechts|on the right|ph|Gire a la derecha.|Biegen Sie rechts ab.|Turn right.
a la izquierda|links|on the left|ph
todo recto|geradeaus|straight on|ph
cerca|nah|near|adv|¿Hay una farmacia cerca?|Gibt es eine Apotheke in der Nähe?|Is there a pharmacy nearby?
lejos|weit|far|adv
en la esquina|an der Ecke|on the corner|ph
enfrente de|gegenüber von|opposite|ph
al lado de|neben|next to|ph
el semáforo|die Ampel|the traffic lights|n
a pie|zu Fuß|on foot|ph`,
  say: `Perdone, ¿dónde está la estación?|Entschuldigung, wo ist der Bahnhof?|Excuse me, where is the station?
¿Hay un supermercado por aquí?|Gibt es hier einen Supermarkt?|Is there a supermarket around here?
Siga todo recto y luego gire a la izquierda.|Gehen Sie geradeaus und dann links.|Go straight on and then turn left.
Está al lado del museo.|Es ist neben dem Museum.|It's next to the museum.
¿Está lejos?|Ist es weit?|Is it far?
Está a diez minutos a pie.|Es ist zehn Minuten zu Fuß.|It's ten minutes' walk.
En el semáforo, cruce la calle.|An der Ampel überqueren Sie die Straße.|At the traffic lights, cross the road.`,
  gram: [
    ["h", TB("hay oder está?", "hay or está?")],
    ["table", { head: [TB("", ""), TB("wann?", "when?"), TB("Beispiel", "example")], rows: [
      ["hay", TB("ob es etwas gibt (un/una, Zahlen, nichts)", "whether something exists (un/una, numbers, no article)"), "Hay una farmacia en la plaza."], ["está / están", TB("wo etwas Bestimmtes ist (el/la, Namen)", "where a specific thing is (el/la, names)"), "La farmacia está en la plaza."]], say: 2 }],
    ["h", TB("ser oder estar?", "ser or estar?")],
    ["p", TB("<b>ser</b>: wer/was jemand ist, Herkunft, Eigenschaften (Soy alemán. Es simpático.). <b>estar</b>: Ort und Zustand (Estoy en Madrid. Estoy cansado.).", "<b>ser</b>: who/what someone is, origin, characteristics (Soy alemán. Es simpático.). <b>estar</b>: location and state (Estoy en Madrid. Estoy cansado.).")],
    ["conj", { verbs: ["estar"], tenses: ["Presente"] }],
    ["tip", TB("a + el = <b>al</b>, de + el = <b>del</b>: al lado <b>del</b> banco, voy <b>al</b> museo.", "a + el = <b>al</b>, de + el = <b>del</b>: al lado <b>del</b> banco, voy <b>al</b> museo.")]
  ],
  forms: { verbs: ["estar", "ser", "ir"], tenses: ["Presente"] },
  drill: [
    ["___ un banco cerca de aquí?", ["¿Hay", "¿Está", "¿Es"], 0],
    ["¿Dónde ___ el museo?", ["está", "hay", "es"], 0],
    ["En mi calle ___ dos bares.", ["hay", "están", "son"], 0],
    ["La farmacia está al lado ___ banco.", ["del", "de el", "al"], 0],
    ["Yo ___ cansado hoy.", ["estoy", "soy", "hay"], 0],
    ["Ana ___ de Sevilla.", ["es", "está", "hay"], 0],
    ["¿Dónde ___ los servicios? (estar)", "están"]
  ],
  talk: { t: TB("Nach dem Weg fragen", "Asking the way"), scene: TB("Du bist in Granada und suchst die Bushaltestelle zur Alhambra.", "You're in Granada looking for the bus stop for the Alhambra."), who: "Señora", slots: {}, lines: `me|Perdone, ¿hay una parada de autobús por aquí?|Entschuldigung, gibt es hier eine Bushaltestelle?|Excuse me, is there a bus stop around here?|Perdone, ¿dónde está la parada del autobús?
a|Sí, hay una en la Plaza Nueva. ¿Va a la Alhambra?|Ja, es gibt eine an der Plaza Nueva. Fahren Sie zur Alhambra?|Yes, there's one in Plaza Nueva. Are you going to the Alhambra?
me|Sí. ¿Está lejos la plaza?|Ja. Ist der Platz weit?|Yes. Is the square far?|Sí. ¿Está lejos?
a|No, está a cinco minutos a pie. Siga todo recto por esta calle.|Nein, fünf Minuten zu Fuß. Gehen Sie diese Straße geradeaus.|No, it's five minutes' walk. Go straight along this street.
me|Todo recto, ¿y luego?|Geradeaus, und dann?|Straight on, and then?|¿Y después?
a|En el semáforo, gire a la derecha. La parada está enfrente de una iglesia.|An der Ampel biegen Sie rechts ab. Die Haltestelle ist gegenüber einer Kirche.|At the lights turn right. The stop is opposite a church.
me|¿Hay también un cajero cerca?|Gibt es auch einen Geldautomaten in der Nähe?|Is there also a cash machine nearby?|¿Y hay un cajero por allí?
a|Sí, hay uno al lado de la parada.|Ja, es gibt einen neben der Haltestelle.|Yes, there's one next to the stop.
me|¡Muchas gracias, muy amable!|Vielen Dank, sehr freundlich!|Thank you very much, very kind!|¡Gracias!` }
});

lesson("A1", { id: "es-a1-09", t: TB("De compras – Markt, Mengen, Preise", "De compras – Market, quantities, prices"),
  goal: TB("Du kannst auf dem Markt einkaufen, Mengen angeben und mit este/ese zeigen, was du möchtest.", "You can shop at the market, give quantities and use este/ese to point to what you want."),
  words: `el mercado|der Markt|the market|n
la fruta|das Obst|fruit|n
la verdura|das Gemüse|vegetables|n
la manzana|der Apfel|the apple|n
la naranja|die Orange|the orange|n
el tomate|die Tomate|the tomato|n|Un kilo de tomates, por favor.|Ein Kilo Tomaten, bitte.|A kilo of tomatoes, please.
la patata|die Kartoffel|the potato|n
la cebolla|die Zwiebel|the onion|n
el pan|das Brot|bread|n
el queso|der Käse|cheese|n
el jamón|der Schinken|ham|n|Cien gramos de jamón serrano.|Hundert Gramm Serrano-Schinken.|A hundred grams of serrano ham.
los huevos|die Eier|eggs|n
la leche|die Milch|milk|n
el aceite de oliva|das Olivenöl|olive oil|n
un kilo|ein Kilo|a kilo|ph
medio kilo|ein halbes Kilo|half a kilo|ph
cien gramos|hundert Gramm|a hundred grams|ph
una docena|ein Dutzend|a dozen|ph
una botella|eine Flasche|a bottle|ph
caro/a|teuer|expensive|adj
barato/a|billig|cheap|adj
fresco/a|frisch|fresh|adj
¿algo más?|sonst noch etwas?|anything else?|ph`,
  say: `¿Cuánto cuestan las naranjas?|Wie viel kosten die Orangen?|How much are the oranges?
Están a dos euros el kilo.|Sie kosten zwei Euro das Kilo.|They're two euros a kilo.
Póngame medio kilo de estas.|Geben Sie mir ein halbes Kilo von diesen.|Give me half a kilo of these.
¿Me da también una docena de huevos?|Geben Sie mir auch ein Dutzend Eier?|Could you also give me a dozen eggs?
¿Esos tomates son de aquí?|Sind die Tomaten da von hier?|Are those tomatoes local?
Nada más, gracias.|Sonst nichts, danke.|Nothing else, thanks.
¿Cuánto es todo?|Was macht das alles zusammen?|How much is everything?`,
  gram: [
    ["h", TB("Demonstrativa: este, ese, aquel", "Demonstratives: este, ese, aquel")],
    ["table", { head: [TB("Entfernung", "distance"), TB("männlich", "masc."), TB("weiblich", "fem."), TB("Plural", "plural")], rows: [
      [TB("hier (bei mir)", "here (near me)"), "este", "esta", "estos / estas"], [TB("da (bei dir)", "there (near you)"), "ese", "esa", "esos / esas"], [TB("dort (weit weg)", "over there"), "aquel", "aquella", "aquellos / aquellas"]] }],
    ["h", TB("Mengenangaben", "Quantities")],
    ["p", TB("Menge + <b>de</b> + Nomen ohne Artikel: un kilo <b>de</b> tomates, una botella <b>de</b> agua, cien gramos <b>de</b> queso.", "Quantity + <b>de</b> + noun without article: un kilo <b>de</b> tomates, una botella <b>de</b> agua, cien gramos <b>de</b> queso.")],
    ["tip", TB("Preise auf dem Markt fragt man oft mit <b>¿A cuánto está(n)…?</b> – Antwort: <i>Están a 2 euros el kilo.</i>", "At the market you often ask prices with <b>¿A cuánto está(n)…?</b> – answer: <i>Están a 2 euros el kilo.</i>")]
  ],
  drill: [
    ["Un kilo ___ manzanas, por favor.", ["de", "del", "de las"], 0],
    ["¿Cuánto cuestan ___ naranjas de aquí? (bei mir)", ["estas", "estos", "esta"], 0],
    ["Quiero ___ queso de allí. (bei dir)", ["ese", "esa", "este"], 0],
    ["¿Cuánto ___ el pan?", ["cuesta", "cuestan", "cuestas"], 0],
    ["¿Cuánto ___ los tomates?", ["cuestan", "cuesta", "cuestas"], 0],
    ["Una ___ de huevos.", ["docena", "kilo", "botella"], 0],
    ["Las fresas están muy ___ .", ["frescas", "frescos", "fresca"], 0]
  ],
  talk: { t: TB("Am Marktstand", "At the market stall"), scene: TB("Samstag auf dem Mercado Central in Valencia. Der Händler Paco ruft dich an seinen Stand.", "Saturday at the Mercado Central in Valencia. Paco, the stallholder, calls you over."), who: "Paco", slots: {}, lines: `a|¡Buenos días! ¿Qué le pongo?|Guten Morgen! Was darf's sein?|Good morning! What can I get you?
me|Buenos días. ¿A cuánto están los tomates?|Guten Morgen. Was kosten die Tomaten?|Good morning. How much are the tomatoes?|¿Cuánto cuestan los tomates?
a|A dos euros el kilo. ¡Son de la huerta, fresquísimos!|Zwei Euro das Kilo. Aus dem Garten, ganz frisch!|Two euros a kilo. From the market garden, really fresh!
me|Pues póngame un kilo, por favor.|Dann geben Sie mir ein Kilo, bitte.|Then give me a kilo, please.|Un kilo, por favor.
a|Aquí tiene. ¿Algo más?|Bitte schön. Sonst noch etwas?|Here you are. Anything else?
me|Sí, medio kilo de esas naranjas y una docena de huevos.|Ja, ein halbes Kilo von den Orangen da und ein Dutzend Eier.|Yes, half a kilo of those oranges and a dozen eggs.|Medio kilo de naranjas y doce huevos.
a|Muy bien. ¿Nada más?|Sehr gut. Sonst nichts?|Very good. Nothing else?
me|Nada más, gracias. ¿Cuánto es todo?|Sonst nichts, danke. Was macht alles zusammen?|Nothing else, thanks. How much is everything?|No, gracias. ¿Cuánto es?
a|Son seis euros con cincuenta.|Das macht sechs Euro fünfzig.|That's six euros fifty.
me|Aquí tiene. ¡Que tenga un buen día!|Bitte schön. Einen schönen Tag noch!|Here you are. Have a nice day!|Tome. ¡Gracias!` }
});

lesson("A1", { id: "es-a1-10", t: TB("El fin de semana – Pretérito perfecto", "El fin de semana – The present perfect"),
  goal: TB("Du kannst erzählen, was du heute, diese Woche oder schon mal gemacht hast.", "You can say what you've done today, this week or ever."),
  words: `hoy|heute|today|adv
esta mañana|heute Morgen|this morning|ph|Esta mañana he ido al gimnasio.|Heute Morgen war ich im Fitnessstudio.|This morning I went to the gym.
esta semana|diese Woche|this week|ph
este fin de semana|dieses Wochenende|this weekend|ph
ya|schon|already|adv
todavía no|noch nicht|not yet|ph
alguna vez|schon einmal|ever|ph|¿Has estado alguna vez en Cuba?|Warst du schon einmal in Kuba?|Have you ever been to Cuba?
nunca|nie|never|adv
el lunes|Montag|Monday|n
el martes|Dienstag|Tuesday|n
el miércoles|Mittwoch|Wednesday|n
el jueves|Donnerstag|Thursday|n
el viernes|Freitag|Friday|n
el sábado|Samstag|Saturday|n
el domingo|Sonntag|Sunday|n
dar un paseo|einen Spaziergang machen|to go for a walk|v
quedar con|sich verabreden mit|to meet up with|v|He quedado con Laura.|Ich habe mich mit Laura verabredet.|I've arranged to meet Laura.
la fiesta|die Party|the party|n
el concierto|das Konzert|the concert|n
descansar|sich ausruhen|to rest|v
pasarlo bien|Spaß haben|to have a good time|v
cansado/a|müde|tired|adj`,
  say: `¿Qué has hecho este fin de semana?|Was hast du dieses Wochenende gemacht?|What did you do this weekend?
He ido a la playa con unos amigos.|Ich war mit Freunden am Strand.|I went to the beach with some friends.
Hemos comido una paella buenísima.|Wir haben eine superleckere Paella gegessen.|We had a really good paella.
¿Ya has visto la nueva película?|Hast du den neuen Film schon gesehen?|Have you seen the new film yet?
Todavía no.|Noch nicht.|Not yet.
Nunca he estado en México.|Ich war noch nie in Mexiko.|I've never been to Mexico.
Lo hemos pasado muy bien.|Wir hatten viel Spaß.|We had a great time.`,
  gram: [
    ["h", TB("Pretérito perfecto = haber + Partizip", "Present perfect = haber + participle")],
    ["p", TB("Immer mit <b>haber</b> (nie mit ser!): <b>he, has, ha, hemos, habéis, han</b>. Partizip: -ar → <b>-ado</b>, -er/-ir → <b>-ido</b>. Das Partizip ändert sich nicht.", "Always with <b>haber</b> (never with ser!): <b>he, has, ha, hemos, habéis, han</b>. Participle: -ar → <b>-ado</b>, -er/-ir → <b>-ido</b>. The participle never changes.")],
    ["conj", { verbs: ["hablar", "ir", "hacer"], tenses: ["Pretérito perfecto"] }],
    ["p", TB("Unregelmäßige Partizipien: hacer → <b>hecho</b>, ver → <b>visto</b>, decir → <b>dicho</b>, escribir → <b>escrito</b>, poner → <b>puesto</b>, volver → <b>vuelto</b>, abrir → <b>abierto</b>.", "Irregular participles: hacer → <b>hecho</b>, ver → <b>visto</b>, decir → <b>dicho</b>, escribir → <b>escrito</b>, poner → <b>puesto</b>, volver → <b>vuelto</b>, abrir → <b>abierto</b>.")],
    ["tip", TB("In Spanien benutzt man das Perfecto für alles, was <b>heute, diese Woche, dieses Jahr</b> oder <b>im Leben</b> passiert ist. Für <i>gestern, letzte Woche</i> nimmt man das Indefinido (Lektion A2).", "In Spain the perfecto is used for anything that happened <b>today, this week, this year</b> or <b>ever in your life</b>. For <i>yesterday, last week</i> you use the indefinido (lesson A2).")]
  ],
  forms: { verbs: ["hablar", "comer", "vivir", "hacer", "ver", "ir", "escribir", "volver"], tenses: ["Pretérito perfecto"] },
  drill: [
    ["Esta mañana ___ ido al médico.", ["he", "soy", "ha"], 0],
    ["¿___ visto mis llaves?", ["Has", "Eres", "Ha"], 0],
    ["Nosotros ___ comido en un restaurante.", ["hemos", "habemos", "somos"], 0],
    ["Hoy he ___ mucho. (trabajar)", "trabajado"],
    ["¿Qué has ___ hoy? (hacer)", "hecho"],
    ["Ya he ___ la carta. (escribir)", "escrito"],
    ["¿Habéis ___ la nueva serie? (ver)", "visto"]
  ],
  talk: { t: TB("Montagmorgen im Büro", "Monday morning at the office"), scene: TB("Deine Kollegin Elena fragt dich an der Kaffeemaschine nach deinem Wochenende.", "At the coffee machine your colleague Elena asks about your weekend."), who: "Elena", slots: {}, lines: `a|¡Hola! ¿Qué tal el fin de semana?|Hallo! Wie war das Wochenende?|Hi! How was the weekend?
me|¡Genial! He ido a la playa con unos amigos.|Super! Ich war mit ein paar Freunden am Strand.|Great! I went to the beach with some friends.|Muy bien, he ido a la playa.; ¡Muy bien! He estado en la playa con amigos.
a|¡Qué envidia! ¿Y qué habéis hecho allí?|Wie beneidenswert! Und was habt ihr dort gemacht?|I'm so jealous! And what did you do there?
me|Hemos nadado y hemos comido una paella buenísima.|Wir sind geschwommen und haben eine superleckere Paella gegessen.|We swam and had a really good paella.|Hemos nadado mucho y hemos comido paella.
a|¡Qué bien! Yo he trabajado todo el fin de semana.|Wie schön! Ich habe das ganze Wochenende gearbeitet.|How nice! I worked the whole weekend.
me|¡Vaya! ¿Has descansado algo?|Oje! Hast du dich ein bisschen ausgeruht?|Oh dear! Did you get any rest?|¡Qué pena! ¿Y has descansado un poco?
a|Poco. Oye, ¿has estado alguna vez en Cádiz?|Wenig. Hör mal, warst du schon mal in Cádiz?|Not much. Hey, have you ever been to Cádiz?
me|No, nunca he estado allí. ¿Es bonito?|Nein, ich war noch nie dort. Ist es schön?|No, I've never been there. Is it nice?|Todavía no. ¿Merece la pena?
a|¡Precioso! Tienes que ir.|Wunderschön! Da musst du hin.|Beautiful! You have to go.` }
});

/* Español A2 · 1–4 */
lesson("A2", { id: "es-a2-01", t: TB("De pequeño – Das Imperfecto", "De pequeño – The imperfect"),
  goal: TB("Du kannst erzählen, wie es früher war, und Gewohnheiten in der Vergangenheit beschreiben.", "You can describe what things used to be like and talk about past habits."),
  words: `de pequeño/a|als Kind; als ich klein war|as a child|ph|De pequeño vivía en un pueblo.|Als Kind lebte ich in einem Dorf.|As a child I lived in a village.
de niño/a|als Kind|as a child|ph
la infancia|die Kindheit|childhood|n
el colegio|die Schule|school|n
el profesor / la profesora|der Lehrer / die Lehrerin|the teacher|n
el compañero de clase|der Klassenkamerad|the classmate|n
las vacaciones de verano|die Sommerferien|the summer holidays|n
el pueblo|das Dorf; der Ort|the village; the town|n
el juguete|das Spielzeug|the toy|n
jugar al escondite|Verstecken spielen|to play hide and seek|v
tímido/a|schüchtern|shy|adj
travieso/a|frech; unartig|naughty|adj
tranquilo/a|ruhig|calm|adj
todos los veranos|jeden Sommer|every summer|ph
antes|früher|before; in the past|adv|Antes había un cine aquí.|Früher gab es hier ein Kino.|There used to be a cinema here.
ahora|jetzt|now|adv
soler|pflegen zu; normalerweise tun|to usually do|v
acordarse de|sich erinnern an|to remember|v
crecer|aufwachsen; wachsen|to grow (up)|v
el recuerdo|die Erinnerung|the memory|n
tener miedo de|Angst haben vor|to be afraid of|ph`,
  say: `¿Dónde creciste?|Wo bist du aufgewachsen?|Where did you grow up?
De pequeño vivía en el campo.|Als ich klein war, lebte ich auf dem Land.|When I was little I lived in the country.
Todos los veranos íbamos a casa de mis abuelos.|Jeden Sommer fuhren wir zu meinen Großeltern.|Every summer we went to my grandparents' house.
Era un niño muy travieso.|Ich war ein sehr freches Kind.|I was a very naughty child.
Mi madre trabajaba en un hospital.|Meine Mutter arbeitete in einem Krankenhaus.|My mother worked in a hospital.
Antes no había móviles.|Früher gab es keine Handys.|There didn't use to be mobile phones.
Tenía miedo de los perros.|Ich hatte Angst vor Hunden.|I was afraid of dogs.`,
  gram: [
    ["h", TB("Pretérito imperfecto: Bildung", "Imperfect: forms")],
    ["p", TB("-ar → <b>-aba</b> (hablaba), -er/-ir → <b>-ía</b> (comía, vivía). Nur drei unregelmäßige Verben: <b>ser</b> (era), <b>ir</b> (iba), <b>ver</b> (veía).", "-ar → <b>-aba</b> (hablaba), -er/-ir → <b>-ía</b> (comía, vivía). Only three irregular verbs: <b>ser</b> (era), <b>ir</b> (iba), <b>ver</b> (veía).")],
    ["conj", { verbs: ["jugar", "tener", "ser", "ir"], tenses: ["Pretérito imperfecto"] }],
    ["h", TB("Wofür?", "What for?")],
    ["p", TB("Für <b>Gewohnheiten</b> (siempre, todos los días, normalmente), <b>Beschreibungen</b> (Aussehen, Wetter, Alter, Gefühle) und <b>Situationen</b>, die gerade andauerten.", "For <b>habits</b> (siempre, todos los días, normalmente), <b>descriptions</b> (looks, weather, age, feelings) and <b>situations</b> that were going on.")],
    ["tip", TB("<b>hay</b> wird im Imperfecto zu <b>había</b>: Antes <b>había</b> muchos bares.", "<b>hay</b> becomes <b>había</b> in the imperfect: Antes <b>había</b> muchos bares.")]
  ],
  forms: { verbs: ["hablar", "comer", "vivir", "ser", "ir", "ver", "tener", "jugar"], tenses: ["Pretérito imperfecto"] },
  drill: [
    ["De pequeño ___ muy tímido.", ["era", "fui", "estaba"], 0],
    ["Todos los veranos ___ a la playa.", ["íbamos", "fuimos", "vamos"], 0],
    ["Mi abuela ___ muy bien.", ["cocinaba", "cocinó", "cocina"], 0],
    ["Cuando ___ diez años, vivía en Málaga.", ["tenía", "tuve", "tengo"], 0],
    ["Antes aquí ___ un parque.", ["había", "hubo", "hay"], 0],
    ["¿Qué ___ los sábados de niño? (hacer, tú)", "hacías"],
    ["Ellos ___ mucho la tele. (ver)", "veían"]
  ],
  talk: { t: TB("Kindheitserinnerungen", "Childhood memories"), scene: TB("Beim Abendessen erzählt dir deine Freundin Marta von ihrer Kindheit in Galicien.", "Over dinner your friend Marta tells you about her childhood in Galicia."), who: "Marta", slots: {}, lines: `a|De pequeña pasaba todos los veranos en el pueblo de mis abuelos. ¿Y tú, dónde creciste?|Als Kind verbrachte ich jeden Sommer im Dorf meiner Großeltern. Und du, wo bist du aufgewachsen?|As a child I spent every summer in my grandparents' village. And you, where did you grow up?
me|Crecí en un pueblo pequeño cerca de Stuttgart.|Ich bin in einem kleinen Dorf bei Stuttgart aufgewachsen.|I grew up in a small village near Stuttgart.|En un pueblo cerca de Stuttgart.
a|¿Y cómo eras de pequeño?|Und wie warst du als Kind?|And what were you like as a child?
me|Era muy travieso. Siempre jugaba al fútbol en la calle.|Ich war sehr frech. Ich spielte immer auf der Straße Fußball.|I was very naughty. I always played football in the street.|Era travieso y jugaba siempre al fútbol.
a|¡Ja, ja! ¿Y qué hacíais en verano?|Haha! Und was habt ihr im Sommer gemacht?|Ha ha! And what did you do in the summer?
me|Normalmente íbamos de vacaciones a un lago.|Normalerweise fuhren wir an einen See in den Urlaub.|We usually went on holiday to a lake.|Íbamos a un lago todos los veranos.
a|Yo tenía miedo del agua. Mi hermano nadaba muy bien.|Ich hatte Angst vor dem Wasser. Mein Bruder schwamm sehr gut.|I was afraid of water. My brother swam really well.
me|¿Y ahora nadas?|Und schwimmst du jetzt?|And do you swim now?|¿Ahora sabes nadar?
a|Sí, aprendí con veinte años.|Ja, ich habe es mit zwanzig gelernt.|Yes, I learnt when I was twenty.` }
});

lesson("A2", { id: "es-a2-02", t: TB("¿Qué pasó? – Das Indefinido", "¿Qué pasó? – The preterite"),
  goal: TB("Du kannst über abgeschlossene Ereignisse in der Vergangenheit sprechen (ayer, el año pasado …).", "You can talk about completed past events (ayer, el año pasado …)."),
  words: `ayer|gestern|yesterday|adv|Ayer fui al cine.|Gestern war ich im Kino.|Yesterday I went to the cinema.
anteayer|vorgestern|the day before yesterday|adv
anoche|gestern Abend|last night|adv
la semana pasada|letzte Woche|last week|ph
el año pasado|letztes Jahr|last year|ph
hace dos días|vor zwei Tagen|two days ago|ph
en 2015|im Jahr 2015|in 2015|ph
nacer|geboren werden|to be born|v|Nací en 1994.|Ich bin 1994 geboren.|I was born in 1994.
mudarse|umziehen|to move (house)|v
conocer a alguien|jemanden kennenlernen|to meet someone|v
terminar los estudios|das Studium abschließen|to finish one's studies|v
empezar a trabajar|anfangen zu arbeiten|to start working|v
casarse|heiraten|to get married|v
el viaje|die Reise|the trip|n
perder|verlieren; verpassen|to lose; to miss|v
olvidar|vergessen|to forget|v
romper|kaputt machen|to break|v
la cartera|der Geldbeutel|the wallet|n
el vuelo|der Flug|the flight|n
de repente|plötzlich|suddenly|ph
luego|dann; danach|then|adv
al final|am Ende|in the end|ph`,
  say: `¿Qué hiciste ayer?|Was hast du gestern gemacht?|What did you do yesterday?
El sábado pasado fui a un concierto.|Letzten Samstag war ich auf einem Konzert.|Last Saturday I went to a concert.
Nací en Hamburgo en 1992.|Ich bin 1992 in Hamburg geboren.|I was born in Hamburg in 1992.
En 2018 me mudé a Múnich.|2018 bin ich nach München gezogen.|In 2018 I moved to Munich.
Conocí a mi novia en un viaje.|Ich habe meine Freundin auf einer Reise kennengelernt.|I met my girlfriend on a trip.
Anoche no dormí nada.|Letzte Nacht habe ich gar nicht geschlafen.|I didn't sleep at all last night.
¿Qué tal el viaje? – Fue increíble.|Wie war die Reise? – Sie war unglaublich.|How was the trip? – It was amazing.`,
  gram: [
    ["h", TB("Pretérito indefinido", "Preterite")],
    ["p", TB("Für abgeschlossene Handlungen zu einem <b>bestimmten Zeitpunkt in der Vergangenheit</b>: ayer, anoche, el lunes pasado, en 2010, hace un año.", "For completed actions at a <b>specific point in the past</b>: ayer, anoche, el lunes pasado, en 2010, hace un año.")],
    ["conj", { verbs: ["hablar", "comer", "vivir"], tenses: ["Pretérito indefinido"] }],
    ["h", TB("Wichtige unregelmäßige Verben", "Key irregular verbs")],
    ["conj", { verbs: ["ser", "hacer", "tener"], tenses: ["Pretérito indefinido"] }],
    ["tip", TB("<b>ser</b> und <b>ir</b> haben im Indefinido dieselben Formen: <b>fui</b> = ich war / ich ging. Der Kontext entscheidet: Fui a Madrid. – Fue un día genial.", "<b>ser</b> and <b>ir</b> share the same preterite forms: <b>fui</b> = I was / I went. Context decides: Fui a Madrid. – Fue un día genial.")]
  ],
  forms: { verbs: ["hablar", "comer", "vivir", "ser", "ir", "hacer", "tener", "estar", "decir", "poder", "venir"], tenses: ["Pretérito indefinido"] },
  drill: [
    ["Ayer ___ al cine con Ana.", ["fui", "iba", "he ido"], 0],
    ["El año pasado ___ a Italia.", ["viajamos", "viajábamos", "hemos viajado"], 0],
    ["¿Qué ___ anoche?", ["hiciste", "hacías", "has hecho"], 0],
    ["La fiesta ___ genial.", ["fue", "era", "estuvo siendo"], 0],
    ["Ellos ___ en 2019. (casarse)", "se casaron"],
    ["Yo ___ mi cartera en el metro. (perder)", "perdí"],
    ["¿Dónde ___ tú? (nacer)", "naciste"]
  ],
  talk: { t: TB("Kennenlerngeschichten", "How we met"), scene: TB("Auf einer Feier fragt dich Raúl, wie du nach München gekommen bist.", "At a party Raúl asks you how you ended up in Munich."), who: "Raúl", slots: {}, lines: `a|¿Y tú? ¿Siempre has vivido en Múnich?|Und du? Hast du schon immer in München gewohnt?|And you? Have you always lived in Munich?
me|No, nací en Hamburgo. Me mudé a Múnich en 2018.|Nein, ich bin in Hamburg geboren. 2018 bin ich nach München gezogen.|No, I was born in Hamburg. I moved to Munich in 2018.|No, soy de Hamburgo y me mudé a Múnich en 2018.
a|¿Por qué te mudaste?|Warum bist du umgezogen?|Why did you move?
me|Porque terminé los estudios y encontré un trabajo allí.|Weil ich mein Studium beendet und dort einen Job gefunden habe.|Because I finished my studies and found a job there.|Encontré trabajo después de la universidad.
a|¿Y cuándo empezaste a estudiar español?|Und wann hast du angefangen, Spanisch zu lernen?|And when did you start learning Spanish?
me|Empecé hace dos años, después de un viaje a Andalucía.|Ich habe vor zwei Jahren angefangen, nach einer Reise nach Andalusien.|I started two years ago, after a trip to Andalusia.|Hace dos años, después de un viaje a España.
a|¡Qué bien! ¿Qué tal fue el viaje?|Wie schön! Wie war die Reise?|How nice! How was the trip?
me|Fue increíble. Visité Sevilla y Granada.|Sie war unglaublich. Ich habe Sevilla und Granada besucht.|It was amazing. I visited Seville and Granada.|Increíble, fui a Sevilla y a Granada.
a|¡Me encanta Granada! Yo estuve allí el verano pasado.|Ich liebe Granada! Ich war letzten Sommer dort.|I love Granada! I was there last summer.` }
});

lesson("A2", { id: "es-a2-03", t: TB("Contar una historia – Indefinido oder Imperfecto", "Contar una historia – Preterite or imperfect"),
  goal: TB("Du kannst eine Geschichte erzählen und Hintergrund (Imperfecto) und Ereignis (Indefinido) unterscheiden.", "You can tell a story and distinguish background (imperfect) from events (preterite)."),
  words: `mientras|während|while|x
cuando|als; wenn|when|x
de repente|plötzlich|suddenly|ph
en ese momento|in dem Moment|at that moment|ph
por suerte|zum Glück|luckily|ph
por desgracia|leider|unfortunately|ph
pasar|passieren|to happen|v|¿Qué te pasó?|Was ist dir passiert?|What happened to you?
el accidente|der Unfall|the accident|n
la lluvia|der Regen|the rain|n
llover|regnen|to rain|v
la huelga|der Streik|the strike|n
las llaves|die Schlüssel|the keys|n
el ladrón|der Dieb|the thief|n
robar|stehlen|to steal|v
la policía|die Polizei|the police|n
asustado/a|erschrocken|frightened|adj
nervioso/a|nervös|nervous|adj
¡qué mala suerte!|so ein Pech!|what bad luck!|ph
¡no me digas!|was du nicht sagst!|you don't say!|ph
menos mal|zum Glück; Gott sei Dank|thank goodness|ph`,
  say: `Mientras esperaba el autobús, empezó a llover.|Während ich auf den Bus wartete, fing es an zu regnen.|While I was waiting for the bus, it started to rain.
Cuando llegué, la tienda ya estaba cerrada.|Als ich ankam, war der Laden schon zu.|When I arrived, the shop was already closed.
Estaba en el metro y de repente un chico me robó el móvil.|Ich war in der U-Bahn, und plötzlich hat mir ein Typ das Handy geklaut.|I was on the underground and suddenly a guy stole my phone.
Hacía mucho frío, así que me quedé en casa.|Es war sehr kalt, deshalb bin ich zu Hause geblieben.|It was very cold, so I stayed at home.
¡No me digas! ¿Y qué hiciste?|Was du nicht sagst! Und was hast du gemacht?|You don't say! And what did you do?
Menos mal que no pasó nada.|Zum Glück ist nichts passiert.|Thank goodness nothing happened.
Al final todo salió bien.|Am Ende ist alles gut gegangen.|In the end everything turned out fine.`,
  gram: [
    ["h", TB("Hintergrund + Ereignis", "Background + event")],
    ["table", { head: [TB("Imperfecto (Situation)", "imperfect (situation)"), TB("Indefinido (Ereignis)", "preterite (event)")], rows: [
      ["Mientras <b>dormía</b>, …", "… <b>sonó</b> el teléfono."], ["<b>Era</b> tarde y <b>llovía</b>.", "<b>Cogí</b> un taxi."], ["<b>Tenía</b> hambre, …", "… así que <b>pedí</b> una pizza."]] }],
    ["p", TB("Imperfecto beschreibt, <b>wie es war</b> und <b>was gerade lief</b>. Indefinido erzählt, <b>was dann passierte</b>. Wie im Italienischen: Film (Imperfecto) und Foto (Indefinido).", "The imperfect describes <b>what it was like</b> and <b>what was going on</b>. The preterite tells <b>what happened next</b>. As in Italian: film (imperfect) and snapshot (preterite).")],
    ["tip", TB("Signalwörter: <i>mientras, siempre, normalmente, todos los días</i> → Imperfecto. <i>de repente, ayer, una vez, luego</i> → Indefinido.", "Signal words: <i>mientras, siempre, normalmente, todos los días</i> → imperfect. <i>de repente, ayer, una vez, luego</i> → preterite.")]
  ],
  drill: [
    ["Mientras ___ la cena, llamó mi madre.", ["preparaba", "preparé", "he preparado"], 0],
    ["Ayer ___ una película muy buena.", ["vi", "veía", "veo"], 0],
    ["___ mucho calor, así que fuimos a la playa.", ["Hacía", "Hizo", "Ha hecho"], 0],
    ["De repente ___ la luz.", ["se fue", "se iba", "se va"], 0],
    ["Cuando era pequeño, ___ al parque cada día.", ["iba", "fui", "voy"], 0],
    ["Por desgracia ___ el tren de las ocho. (perder, yo)", "perdí"],
    ["No salí porque ___ . (llover)", "llovía"]
  ],
  talk: { t: TB("Ein verrückter Tag", "A crazy day"), scene: TB("Du kommst zu spät zum Abendessen mit deiner Freundin Inés und erklärst, was passiert ist.", "You're late for dinner with your friend Inés and explain what happened."), who: "Inés", slots: {}, lines: `a|¡Por fin! Te espero desde hace media hora. ¿Qué te pasó?|Endlich! Ich warte seit einer halben Stunde auf dich. Was ist passiert?|Finally! I've been waiting for half an hour. What happened?
me|¡Perdona! Estaba en el metro y de repente el tren se paró.|Entschuldige! Ich war in der U-Bahn und plötzlich blieb der Zug stehen.|Sorry! I was on the underground and suddenly the train stopped.|Lo siento, el metro se paró de repente.
a|¡No me digas! ¿Y por qué?|Was du nicht sagst! Und warum?|You don't say! Why?
me|No sé. Hacía mucho calor y todos estaban nerviosos.|Keine Ahnung. Es war sehr heiß und alle waren nervös.|No idea. It was really hot and everyone was nervous.|No lo sé, hacía calor y la gente estaba nerviosa.
a|¡Qué mala suerte! ¿Y cuánto tiempo estuviste allí?|So ein Pech! Und wie lange warst du dort?|What bad luck! And how long were you there?
me|Veinte minutos. Luego salí y cogí un taxi.|Zwanzig Minuten. Dann bin ich raus und habe ein Taxi genommen.|Twenty minutes. Then I got out and took a taxi.|Estuve veinte minutos y luego cogí un taxi.
a|Menos mal que llegaste. ¿Pedimos?|Zum Glück bist du da. Bestellen wir?|Thank goodness you made it. Shall we order?
me|Sí, ¡me muero de hambre! Y la cena la pago yo.|Ja, ich sterbe vor Hunger! Und das Essen zahle ich.|Yes, I'm starving! And dinner's on me.|Sí, tengo mucha hambre. ¡Invito yo!` }
});

lesson("A2", { id: "es-a2-04", t: TB("Planes – Zukunft und Wetter", "Planes – Future and weather"),
  goal: TB("Du kannst über Pläne sprechen (ir a, futuro) und das Wetter beschreiben.", "You can talk about plans (ir a, future) and describe the weather."),
  words: `el plan|der Plan|the plan|n
el año que viene|nächstes Jahr|next year|ph|El año que viene voy a cambiar de trabajo.|Nächstes Jahr werde ich den Job wechseln.|Next year I'm going to change jobs.
la semana que viene|nächste Woche|next week|ph
pasado mañana|übermorgen|the day after tomorrow|adv
dentro de dos semanas|in zwei Wochen|in two weeks|ph
el tiempo|das Wetter; die Zeit|the weather; time|n|¿Qué tiempo hace hoy?|Wie ist das Wetter heute?|What's the weather like today?
hace sol|die Sonne scheint|it's sunny|ph
hace calor|es ist heiß|it's hot|ph
hace frío|es ist kalt|it's cold|ph
hace buen tiempo|das Wetter ist schön|the weather is nice|ph
hace mal tiempo|das Wetter ist schlecht|the weather is bad|ph
hace viento|es ist windig|it's windy|ph
llueve|es regnet|it's raining|ph
nieva|es schneit|it's snowing|ph
está nublado|es ist bewölkt|it's cloudy|ph
la previsión|die Vorhersage|the forecast|n
los grados|die Grad|degrees|n
quizás|vielleicht|perhaps|adv
seguramente|sicher; wahrscheinlich|surely; probably|adv
pensar + infinitivo|vorhaben zu|to plan to|ph|Pienso viajar a Perú.|Ich habe vor, nach Peru zu reisen.|I'm planning to travel to Peru.
tener ganas de|Lust haben auf|to feel like|ph`,
  say: `¿Qué vas a hacer este verano?|Was machst du diesen Sommer?|What are you going to do this summer?
Voy a ir a Mallorca con mi novia.|Ich fahre mit meiner Freundin nach Mallorca.|I'm going to Mallorca with my girlfriend.
Mañana va a llover todo el día.|Morgen wird es den ganzen Tag regnen.|It's going to rain all day tomorrow.
En el futuro viviré en una casa con jardín.|In Zukunft werde ich in einem Haus mit Garten wohnen.|In the future I'll live in a house with a garden.
Hace treinta grados.|Es hat dreißig Grad.|It's thirty degrees.
Tengo muchas ganas de vacaciones.|Ich habe große Lust auf Urlaub.|I'm really looking forward to a holiday.
¡Ojalá haga buen tiempo!|Hoffentlich ist schönes Wetter!|I hope the weather's nice!`,
  gram: [
    ["h", TB("ir a + Infinitiv", "ir a + infinitive")],
    ["p", TB("Die häufigste Zukunft im Alltag: <b>voy a</b> comer, <b>vas a</b> ver, <b>va a</b> llover. Für Pläne und sichere Vorhersagen.", "The most common future in everyday speech: <b>voy a</b> comer, <b>vas a</b> ver, <b>va a</b> llover. For plans and confident predictions.")],
    ["h", TB("Futuro simple", "Simple future")],
    ["p", TB("Infinitiv + <b>-é, -ás, -á, -emos, -éis, -án</b>: hablar<b>é</b>, comer<b>é</b>. Unregelmäßige Stämme: tendr-, saldr-, podr-, har-, dir-, querr-, sabr-, vendr-, pondr-.", "Infinitive + <b>-é, -ás, -á, -emos, -éis, -án</b>: hablar<b>é</b>, comer<b>é</b>. Irregular stems: tendr-, saldr-, podr-, har-, dir-, querr-, sabr-, vendr-, pondr-.")],
    ["conj", { verbs: ["hablar", "tener", "hacer"], tenses: ["Futuro simple"] }],
    ["tip", TB("Wetter mit <b>hacer</b>: hace sol, hace frío, hace calor. Aber: <b>llueve</b>, <b>nieva</b>, <b>está</b> nublado.", "Weather with <b>hacer</b>: hace sol, hace frío, hace calor. But: <b>llueve</b>, <b>nieva</b>, <b>está</b> nublado.")]
  ],
  forms: { verbs: ["hablar", "comer", "vivir", "tener", "hacer", "poder", "salir", "decir", "venir"], tenses: ["Futuro simple"] },
  drill: [
    ["Mañana ___ a llover.", ["va", "voy", "vas"], 0],
    ["¿Qué ___ a hacer el sábado?", ["vas", "va", "vais a"], 0],
    ["Hoy ___ mucho calor.", ["hace", "es", "está"], 0],
    ["Hoy ___ nublado.", ["está", "hace", "es"], 0],
    ["El año que viene ___ a Perú. (viajar, yo – futuro)", "viajaré"],
    ["Mañana ___ más tiempo. (tener, nosotros – futuro)", "tendremos"],
    ["¿Tú ___ venir a la fiesta? (poder – futuro)", "podrás"]
  ],
  talk: { t: TB("Sommerpläne", "Summer plans"), scene: TB("Du telefonierst mit deinem Freund Diego und ihr redet über den Sommer.", "You're on the phone with your friend Diego talking about the summer."), who: "Diego", slots: {}, lines: `a|Oye, ¿qué vas a hacer este verano?|Hör mal, was machst du diesen Sommer?|Hey, what are you going to do this summer?
me|Voy a ir a Mallorca dos semanas en agosto.|Ich fahre im August zwei Wochen nach Mallorca.|I'm going to Mallorca for two weeks in August.|En agosto voy a Mallorca dos semanas.
a|¡Qué bien! ¿Con quién vas?|Wie schön! Mit wem fährst du?|How nice! Who are you going with?
me|Con unos amigos. Vamos a alquilar una casa cerca de la playa.|Mit ein paar Freunden. Wir mieten ein Haus am Strand.|With some friends. We're going to rent a house near the beach.|Con amigos, vamos a alquilar una casa.
a|En agosto hará muchísimo calor allí.|Im August wird es dort sehr heiß sein.|It'll be really hot there in August.
me|No pasa nada, me encanta el calor. ¿Y tú, qué planes tienes?|Macht nichts, ich liebe die Hitze. Und du, was hast du vor?|Doesn't matter, I love the heat. And you, what are your plans?|No importa. ¿Y tú?
a|Quizás iré a ver a mi familia a Colombia.|Vielleicht besuche ich meine Familie in Kolumbien.|Maybe I'll go and see my family in Colombia.
me|¡Qué ganas! ¿Cuánto tiempo estarás allí?|Wie toll! Wie lange wirst du dort sein?|How exciting! How long will you be there?|¡Genial! ¿Cuánto tiempo vas a estar?
a|Un mes, si puedo. ¡Ya te contaré!|Einen Monat, wenn ich kann. Ich erzähl dir dann!|A month, if I can. I'll tell you all about it!` }
});

/* Español A2 · 5–8 */
lesson("A2", { id: "es-a2-05", t: TB("En el médico – Körper und Imperativ", "En el médico – Body and imperative"),
  goal: TB("Du kannst Beschwerden beschreiben (me duele …) und Ratschläge im Imperativ verstehen und geben.", "You can describe symptoms (me duele …) and understand and give advice in the imperative."),
  words: `la cabeza|der Kopf|the head|n|Me duele la cabeza.|Ich habe Kopfschmerzen.|I have a headache.
la garganta|der Hals (innen)|the throat|n
el estómago|der Magen|the stomach|n
la espalda|der Rücken|the back|n
el brazo|der Arm|the arm|n
la pierna|das Bein|the leg|n
la rodilla|das Knie|the knee|n
el pie|der Fuß|the foot|n
la mano|die Hand|the hand|n
los ojos|die Augen|the eyes|n
la fiebre|das Fieber|fever|n
el resfriado|die Erkältung|the cold|n
la tos|der Husten|the cough|n
la gripe|die Grippe|the flu|n
la receta|das Rezept|the prescription|n
el medicamento|das Medikament|the medicine|n
la pastilla|die Tablette|the tablet|n
el dolor|der Schmerz|the pain|n
doler|wehtun|to hurt|v
estar resfriado/a|erkältet sein|to have a cold|ph
encontrarse mal|sich schlecht fühlen|to feel ill|v
la cita|der Termin|the appointment|n|Quería pedir cita con la doctora.|Ich hätte gern einen Termin bei der Ärztin.|I'd like an appointment with the doctor.
urgencias|die Notaufnahme|A&E; emergency room|n`,
  say: `No me encuentro bien.|Ich fühle mich nicht gut.|I don't feel well.
Me duele la garganta.|Mir tut der Hals weh.|My throat hurts.
Me duelen los pies.|Mir tun die Füße weh.|My feet hurt.
Tengo fiebre desde ayer.|Ich habe seit gestern Fieber.|I've had a temperature since yesterday.
Tome estas pastillas tres veces al día.|Nehmen Sie diese Tabletten dreimal täglich.|Take these tablets three times a day.
Bebe mucha agua y descansa.|Trink viel Wasser und ruh dich aus.|Drink lots of water and rest.
¡Que te mejores!|Gute Besserung!|Get well soon!`,
  gram: [
    ["h", TB("<i>doler</i>: me duele / me duelen", "<i>doler</i>: me duele / me duelen")],
    ["p", TB("Wie <i>gustar</i>: <b>Me duele</b> la cabeza, <b>me duelen</b> las piernas. Körperteile haben im Spanischen den Artikel, nicht das Possessiv: Me duele <b>la</b> espalda (nicht: mi espalda).", "Like <i>gustar</i>: <b>Me duele</b> la cabeza, <b>me duelen</b> las piernas. Body parts take the article, not the possessive: Me duele <b>la</b> espalda (not: mi espalda).")],
    ["h", TB("Imperativ", "Imperative")],
    ["table", { head: [TB("", ""), TB("tú", "tú"), TB("usted", "usted"), TB("vosotros", "vosotros")], rows: [["tomar", "toma", "tome", "tomad"], ["beber", "bebe", "beba", "bebed"], ["descansar", "descansa", "descanse", "descansad"], ["hacer", "haz", "haga", "haced"], ["tener", "ten", "tenga", "tened"], ["ir", "ve", "vaya", "id"]] }],
    ["p", TB("Verneint nimmt man den Subjuntivo: <b>No tomes</b> café. <b>No beba</b> alcohol. <b>No te preocupes.</b>", "The negative uses the subjunctive: <b>No tomes</b> café. <b>No beba</b> alcohol. <b>No te preocupes.</b>")],
    ["tip", TB("Pronomen hängen am bejahten Imperativ: <b>tómalas</b>, <b>descánsate</b> – mit Akzent, damit die Betonung bleibt.", "Pronouns attach to the affirmative imperative: <b>tómalas</b>, <b>descánsate</b> – with an accent to keep the stress.")]
  ],
  forms: { verbs: ["tomar", "beber", "descansar", "hacer", "tener", "ir", "venir", "decir"], tenses: ["Imperativo"] },
  drill: [
    ["Me ___ la cabeza.", ["duele", "duelen", "dolor"], 0],
    ["Me ___ las rodillas.", ["duelen", "duele", "dolen"], 0],
    ["Señora, ___ estas pastillas después de comer.", ["tome", "toma", "tomad"], 0],
    ["Pablo, ___ en la cama y descansa.", ["quédate", "quédese", "te quedas"], 0],
    ["No ___ café, por favor. (tú, tomar)", "tomes"],
    ["No te ___ , no es grave. (preocuparse)", "preocupes"],
    ["Tengo ___ desde hace dos días.", ["fiebre", "receta", "cita"], 0]
  ],
  talk: { t: TB("In der Arztpraxis", "At the doctor's"), scene: TB("Du bist im Urlaub in Málaga krank geworden und gehst zur Ärztin, Doctora Ruiz.", "You fell ill on holiday in Málaga and see the doctor, Dr Ruiz."), who: "Doctora Ruiz", slots: {}, lines: `a|Buenos días, siéntese. ¿Qué le pasa?|Guten Tag, setzen Sie sich. Was fehlt Ihnen?|Good morning, have a seat. What's wrong?
me|Buenos días. Me duele mucho la garganta y tengo tos.|Guten Tag. Mir tut der Hals sehr weh und ich habe Husten.|Good morning. My throat hurts a lot and I have a cough.|Me duele la garganta y tengo tos.
a|¿Desde cuándo?|Seit wann?|Since when?
me|Desde hace tres días. Anoche también tenía fiebre.|Seit drei Tagen. Gestern Abend hatte ich auch Fieber.|For three days. Last night I had a temperature too.|Desde hace tres días, y ayer tenía fiebre.
a|A ver… Es una gripe. ¿Es alérgico a algún medicamento?|Mal sehen … Das ist eine Grippe. Sind Sie gegen ein Medikament allergisch?|Let's see… It's flu. Are you allergic to any medicine?
me|No, no soy alérgico a nada.|Nein, ich bin gegen nichts allergisch.|No, I'm not allergic to anything.|No, no tengo alergias.; No, no soy alérgica a nada.
a|Bien. Tome estas pastillas tres veces al día y quédese en la cama.|Gut. Nehmen Sie diese Tabletten dreimal täglich und bleiben Sie im Bett.|Good. Take these tablets three times a day and stay in bed.
me|¿Las tomo antes o después de comer?|Nehme ich sie vor oder nach dem Essen?|Do I take them before or after meals?|¿Antes o después de las comidas?
a|Después de comer. Y beba mucha agua. Aquí tiene la receta.|Nach dem Essen. Und trinken Sie viel Wasser. Hier ist das Rezept.|After meals. And drink lots of water. Here's the prescription.
me|Muchas gracias, doctora. ¡Adiós!|Vielen Dank, Frau Doktor. Auf Wiedersehen!|Thank you very much, doctor. Goodbye!|Gracias, adiós.` }
});

lesson("A2", { id: "es-a2-06", t: TB("Buscar piso – Wohnung und Objektpronomen", "Buscar piso – Flat hunting and object pronouns"),
  goal: TB("Du kannst eine Wohnung beschreiben, bei einer Besichtigung nachfragen und lo/la/los/las benutzen.", "You can describe a flat, ask questions at a viewing and use lo/la/los/las."),
  words: `el piso|die Wohnung|the flat|n|Busco un piso en el centro.|Ich suche eine Wohnung im Zentrum.|I'm looking for a flat in the centre.
el estudio|die Einzimmerwohnung|the studio flat|n
el dormitorio|das Schlafzimmer|the bedroom|n
el salón|das Wohnzimmer|the living room|n
la cocina|die Küche|the kitchen|n
el baño|das Bad|the bathroom|n
la terraza|die Terrasse; der Balkon|the terrace; the balcony|n
la planta|das Stockwerk|the floor|n
el ascensor|der Aufzug|the lift|n
amueblado/a|möbliert|furnished|adj
el alquiler|die Miete|the rent|n
los gastos|die Nebenkosten|the bills|n
la fianza|die Kaution|the deposit|n
el casero / la casera|der Vermieter / die Vermieterin|the landlord / the landlady|n
el compañero de piso|der Mitbewohner|the flatmate|n
luminoso/a|hell|bright|adj
ruidoso/a|laut|noisy|adj
el sofá|das Sofa|the sofa|n
la cama|das Bett|the bed|n
el armario|der Schrank|the wardrobe|n
la lavadora|die Waschmaschine|the washing machine|n
mudarse|umziehen|to move house|v`,
  say: `¿Cuánto es el alquiler?|Wie hoch ist die Miete?|How much is the rent?
¿Los gastos están incluidos?|Sind die Nebenkosten inklusive?|Are the bills included?
¿El piso está amueblado?|Ist die Wohnung möbliert?|Is the flat furnished?
¿Puedo verlo mañana?|Kann ich sie morgen ansehen?|Can I see it tomorrow?
La cocina es pequeña, pero me encanta.|Die Küche ist klein, aber ich liebe sie.|The kitchen is small, but I love it.
¡Me lo quedo!|Ich nehme sie!|I'll take it!
¿Cuándo puedo mudarme?|Wann kann ich einziehen?|When can I move in?`,
  gram: [
    ["h", TB("Direkte Objektpronomen", "Direct object pronouns")],
    ["table", { head: [TB("", ""), TB("Singular", "singular"), TB("Plural", "plural")], rows: [[TB("1./2. Person", "1st/2nd person"), "me, te", "nos, os"], [TB("männlich", "masculine"), "lo", "los"], [TB("weiblich", "feminine"), "la", "las"]] }],
    ["p", TB("Vor dem konjugierten Verb: <b>Lo</b> veo. <b>La</b> compro. Am Infinitiv, Gerundium und bejahten Imperativ angehängt: ¿Puedo ver<b>lo</b>? – Cómpra<b>la</b>.", "Before the conjugated verb: <b>Lo</b> veo. <b>La</b> compro. Attached to the infinitive, gerund and affirmative imperative: ¿Puedo ver<b>lo</b>? – Cómpra<b>la</b>.")],
    ["tip", TB("Das Geschlecht richtet sich nach dem spanischen Wort: <i>el piso</i> → <b>lo</b> veo, auch wenn es auf Deutsch „sie“ (die Wohnung) heißt.", "Gender follows the Spanish word: <i>el piso</i> → <b>lo</b> veo, even though in German it's \"sie\" (die Wohnung).")]
  ],
  drill: [
    ["El piso? ___ alquilo.", ["Lo", "La", "Le"], 0],
    ["La terraza? ___ me encanta.", ["Me", "La", "Lo"], 0],
    ["Las llaves? No ___ encuentro.", ["las", "los", "les"], 0],
    ["Los muebles? ___ compramos en IKEA.", ["Los", "Las", "Les"], 0],
    ["¿Puedo ___ mañana? (ver + lo)", "verlo"],
    ["Vivo en la tercera ___ .", ["planta", "piso", "salón"], 0],
    ["El alquiler es de 800 euros, gastos ___ .", ["incluidos", "incluido", "incluidas"], 0]
  ],
  talk: { t: TB("Wohnungsbesichtigung", "Flat viewing"), scene: TB("Du besichtigst eine Wohnung in Barcelona. Die Vermieterin, Señora Puig, zeigt dir alles.", "You're viewing a flat in Barcelona. The landlady, Mrs Puig, shows you round."), who: "Señora Puig", slots: {}, lines: `a|Este es el salón. Es muy luminoso, ¿verdad?|Das ist das Wohnzimmer. Sehr hell, oder?|This is the living room. Very bright, isn't it?
me|Sí, es precioso. ¿Cuántos dormitorios tiene el piso?|Ja, wunderschön. Wie viele Schlafzimmer hat die Wohnung?|Yes, it's lovely. How many bedrooms does the flat have?|Muy bonito. ¿Cuántos dormitorios hay?
a|Dos dormitorios, una cocina y un baño completo.|Zwei Schlafzimmer, eine Küche und ein Bad.|Two bedrooms, a kitchen and a full bathroom.
me|¿El piso está amueblado?|Ist die Wohnung möbliert?|Is the flat furnished?|¿Está amueblado?
a|Sí, todo menos el dormitorio pequeño. La lavadora es nueva.|Ja, alles außer dem kleinen Schlafzimmer. Die Waschmaschine ist neu.|Yes, everything except the small bedroom. The washing machine is new.
me|¿Cuánto es el alquiler? ¿Los gastos están incluidos?|Wie hoch ist die Miete? Sind die Nebenkosten inklusive?|How much is the rent? Are the bills included?|¿Cuánto cuesta el alquiler, con gastos?
a|Novecientos euros al mes, más cien de gastos.|Neunhundert Euro im Monat, plus hundert Nebenkosten.|Nine hundred euros a month, plus a hundred for bills.
me|Es un poco caro, pero el barrio me gusta mucho.|Etwas teuer, aber das Viertel gefällt mir sehr.|It's a bit expensive, but I really like the area.|Es caro, pero el barrio es genial.
a|Entonces, ¿qué le parece?|Also, was meinen Sie?|So, what do you think?
me|¡Me lo quedo! ¿Cuándo podemos firmar el contrato?|Ich nehme sie! Wann können wir den Vertrag unterschreiben?|I'll take it! When can we sign the contract?|¡Lo alquilo! ¿Cuándo firmamos?` }
});

lesson("A2", { id: "es-a2-07", t: TB("De compras – Kleidung und Vergleiche", "De compras – Clothes and comparisons"),
  goal: TB("Du kannst Kleidung kaufen, nach Größe fragen, vergleichen und indirekte Pronomen benutzen.", "You can buy clothes, ask about sizes, compare and use indirect pronouns."),
  words: `la ropa|die Kleidung|clothes|n
la camiseta|das T-Shirt|the T-shirt|n
la camisa|das Hemd; die Bluse|the shirt|n
el jersey|der Pullover|the jumper|n
los pantalones|die Hose|the trousers|n
los vaqueros|die Jeans|the jeans|n
la falda|der Rock|the skirt|n
el vestido|das Kleid|the dress|n
la chaqueta|die Jacke|the jacket|n
el abrigo|der Mantel|the coat|n
los zapatos|die Schuhe|the shoes|n
la talla|die Größe (Kleidung)|the size|n|¿Qué talla usa?|Welche Größe tragen Sie?|What size are you?
el probador|die Umkleidekabine|the fitting room|n
probarse|anprobieren|to try on|v|¿Puedo probármela?|Kann ich sie anprobieren?|Can I try it on?
quedar bien|gut stehen; passen|to suit; to fit|ph|Esa chaqueta te queda genial.|Die Jacke steht dir super.|That jacket looks great on you.
estrecho/a|eng|tight|adj
ancho/a|weit|loose; wide|adj
las rebajas|der Schlussverkauf|the sales|n
negro/a|schwarz|black|adj
blanco/a|weiß|white|adj
azul|blau|blue|adj
rojo/a|rot|red|adj
verde|grün|green|adj`,
  say: `Solo estoy mirando, gracias.|Ich schaue mich nur um, danke.|I'm just looking, thanks.
¿Tiene esta camisa en azul?|Haben Sie dieses Hemd in Blau?|Do you have this shirt in blue?
Me queda un poco estrecha.|Sie ist mir etwas eng.|It's a bit tight on me.
¿Tiene una talla más grande?|Haben Sie eine Nummer größer?|Do you have a bigger size?
Le queda muy bien.|Das steht Ihnen sehr gut.|It suits you very well.
Este abrigo es más caro que el otro.|Dieser Mantel ist teurer als der andere.|This coat is more expensive than the other one.
Es el mejor regalo del mundo.|Das ist das beste Geschenk der Welt.|It's the best present in the world.`,
  gram: [
    ["h", TB("Indirekte Objektpronomen", "Indirect object pronouns")],
    ["p", TB("<b>me, te, le, nos, os, les</b> = mir, dir, ihm/ihr/Ihnen, uns, euch, ihnen: <b>Le</b> regalo un libro. <b>Te</b> queda bien.", "<b>me, te, le, nos, os, les</b> = to me, you, him/her/you (formal), us, you, them: <b>Le</b> regalo un libro. <b>Te</b> queda bien.")],
    ["h", TB("Vergleiche", "Comparisons")],
    ["table", { head: [TB("", ""), TB("Spanisch", "Spanish"), TB("Beispiel", "example")], rows: [
      [TB("mehr … als", "more … than"), "más … que", "Madrid es más grande que Sevilla."], [TB("weniger … als", "less … than"), "menos … que", "El tren es menos caro que el avión."], [TB("so … wie", "as … as"), "tan … como", "Es tan alto como su padre."], [TB("der/die/das …ste", "the …est"), "el/la más …", "Es la ciudad más bonita de España."]], say: 2 }],
    ["tip", TB("Unregelmäßig: bueno → <b>mejor</b>, malo → <b>peor</b>, grande (Alter) → <b>mayor</b>, pequeño (Alter) → <b>menor</b>. Sehr: <b>-ísimo</b>: carísimo, buenísimo.", "Irregular: bueno → <b>mejor</b>, malo → <b>peor</b>, grande (age) → <b>mayor</b>, pequeño (age) → <b>menor</b>. Very: <b>-ísimo</b>: carísimo, buenísimo.")]
  ],
  drill: [
    ["Esta chaqueta ___ queda muy bien, señora.", ["le", "la", "lo"], 0],
    ["A mi hermano ___ regalo una camisa.", ["le", "lo", "la"], 0],
    ["Madrid es más grande ___ Barcelona.", ["que", "de", "como"], 0],
    ["Mi hermana es tan alta ___ yo.", ["como", "que", "de"], 0],
    ["Este vino es ___ que el otro.", ["mejor", "más bueno", "bueno"], 0],
    ["Los zapatos me quedan ___ .", ["estrechos", "estrecho", "estrechas"], 0],
    ["Es la tienda ___ cara de la ciudad.", ["más", "muy", "tan"], 0]
  ],
  talk: { t: TB("Im Bekleidungsgeschäft", "In a clothes shop"), scene: TB("Du suchst in Madrid ein Hemd für eine Hochzeit. Die Verkäuferin Nuria hilft dir.", "You're looking for a shirt for a wedding in Madrid. The shop assistant, Nuria, helps you."), who: "Nuria", slots: {}, lines: `a|¡Hola! ¿Te puedo ayudar?|Hallo! Kann ich dir helfen?|Hi! Can I help you?
me|Sí, busco una camisa elegante para una boda.|Ja, ich suche ein elegantes Hemd für eine Hochzeit.|Yes, I'm looking for a smart shirt for a wedding.|Busco una camisa para una boda.
a|¿Qué talla usas?|Welche Größe trägst du?|What size are you?
me|Normalmente la L.|Normalerweise L.|Usually a large.|La L.
a|Mira, esta blanca es muy bonita. ¿Quieres probártela?|Schau, dieses weiße ist sehr schön. Willst du es anprobieren?|Look, this white one is very nice. Do you want to try it on?
me|Sí, gracias. ¿Dónde está el probador?|Ja, danke. Wo ist die Umkleide?|Yes, thanks. Where's the fitting room?|Vale. ¿Dónde están los probadores?
a|Al fondo a la derecha. … ¿Qué tal te queda?|Hinten rechts. … Wie passt es dir?|At the back on the right. … How does it fit?
me|Me queda un poco estrecha. ¿Tienes una talla más grande?|Es ist mir etwas eng. Hast du eine Nummer größer?|It's a bit tight. Do you have a bigger size?|Es un poco estrecha. ¿Hay una XL?
a|Sí, aquí tienes la XL. … ¡Te queda perfecta!|Ja, hier ist XL. … Sie passt perfekt!|Yes, here's the XL. … It fits perfectly!
me|Me la llevo. ¿Hay descuento?|Ich nehme es. Gibt es Rabatt?|I'll take it. Is there a discount?|Me la quedo. ¿Tiene descuento?` }
});

lesson("A2", { id: "es-a2-08", t: TB("Me gustaría… – Der Condicional", "Me gustaría… – The conditional"),
  goal: TB("Du kannst höflich bitten, Wünsche äußern und Ratschläge geben.", "You can make polite requests, express wishes and give advice."),
  words: `el deseo|der Wunsch|the wish|n
el sueño|der Traum; der Schlaf|the dream; sleep|n|Mi sueño sería vivir junto al mar.|Mein Traum wäre, am Meer zu leben.|My dream would be to live by the sea.
el consejo|der Rat|the advice|n
aconsejar|raten|to advise|v
el favor|der Gefallen|the favour|n|¿Me harías un favor?|Würdest du mir einen Gefallen tun?|Would you do me a favour?
amable|freundlich|kind|adj
ojalá|hoffentlich|I hope; if only|x
con mucho gusto|sehr gern|with pleasure|ph
la jubilación|der Ruhestand|retirement|n
tocar la lotería|im Lotto gewinnen|to win the lottery|v
dejar de fumar|mit dem Rauchen aufhören|to stop smoking|v
hacer deporte|Sport treiben|to do sport|v
adelgazar|abnehmen|to lose weight|v
estresado/a|gestresst|stressed|adj
tomarse un descanso|eine Pause machen|to take a break|v
dar la vuelta al mundo|eine Weltreise machen|to go round the world|v
abrir un restaurante|ein Restaurant eröffnen|to open a restaurant|v
rico/a|reich|rich|adj
en tu lugar|an deiner Stelle|in your place|ph`,
  say: `¿Podrías ayudarme?|Könntest du mir helfen?|Could you help me?
¿Me pasarías la sal?|Würdest du mir das Salz reichen?|Would you pass me the salt?
Me gustaría dar la vuelta al mundo.|Ich würde gern eine Weltreise machen.|I'd like to go round the world.
Yo en tu lugar hablaría con el jefe.|An deiner Stelle würde ich mit dem Chef reden.|If I were you, I'd talk to the boss.
Deberías dormir más.|Du solltest mehr schlafen.|You should sleep more.
¡Sería genial!|Das wäre toll!|That would be great!
¿Qué harías con un millón de euros?|Was würdest du mit einer Million Euro machen?|What would you do with a million euros?`,
  gram: [
    ["h", TB("Condicional simple", "Simple conditional")],
    ["p", TB("Infinitiv + <b>-ía, -ías, -ía, -íamos, -íais, -ían</b>: hablar<b>ía</b>, comer<b>ía</b>. Gleiche unregelmäßige Stämme wie im Futur: tendr<b>ía</b>, har<b>ía</b>, podr<b>ía</b>, dir<b>ía</b>.", "Infinitive + <b>-ía, -ías, -ía, -íamos, -íais, -ían</b>: hablar<b>ía</b>, comer<b>ía</b>. Same irregular stems as the future: tendr<b>ía</b>, har<b>ía</b>, podr<b>ía</b>, dir<b>ía</b>.")],
    ["conj", { verbs: ["gustar", "poder", "deber"], tenses: ["Condicional"] }],
    ["table", { head: [TB("wofür?", "use"), TB("Beispiel", "example")], rows: [[TB("höfliche Bitte", "polite request"), "¿Podría abrir la ventana?"], [TB("Wunsch", "wish"), "Me gustaría vivir en Madrid."], [TB("Rat", "advice"), "Deberías descansar."], [TB("Vermutung (Vergangenheit)", "guess (past)"), "Serían las diez cuando llegó."]], say: 1 }],
    ["tip", TB("Achtung: Der Condicional hat <b>immer</b> ein í mit Akzent – auch das Imperfecto von -er/-ir-Verben (comía). Unterschied: comer<b>ía</b> (würde essen) vs. com<b>ía</b> (aß).", "Careful: the conditional <b>always</b> has an accented í – so does the imperfect of -er/-ir verbs (comía). Difference: comer<b>ía</b> (would eat) vs. com<b>ía</b> (was eating).")]
  ],
  forms: { verbs: ["hablar", "comer", "vivir", "tener", "hacer", "poder", "decir", "querer", "ser"], tenses: ["Condicional"] },
  drill: [
    ["¿___ cerrar la puerta, por favor? (usted)", ["Podría", "Podrá", "Puede ser"], 0],
    ["Me ___ aprender a bailar salsa.", ["gustaría", "gustará", "gusta ría"], 0],
    ["Estás muy cansado: ___ dormir más.", ["deberías", "deberás", "debes ser"], 0],
    ["Con un millón de euros, ___ un restaurante.", ["abriría", "abriré", "abría"], 0],
    ["Nosotros ___ encantados de venir. (estar)", "estaríamos"],
    ["¿Qué ___ tú en mi lugar? (hacer)", "harías"],
    ["Yo no se lo ___ a nadie. (decir)", "diría"]
  ],
  talk: { t: TB("Tagträume", "Daydreams"), scene: TB("Ein entspannter Abend mit deiner Freundin Clara. Ihr träumt ein bisschen.", "A relaxed evening with your friend Clara. You're daydreaming a little."), who: "Clara", slots: {}, lines: `a|¡Qué semana! Me gustaría irme mañana a una isla tropical.|Was für eine Woche! Ich würde gern morgen auf eine tropische Insel fliegen.|What a week! I'd love to go to a tropical island tomorrow.
me|¡A mí también! ¿Adónde irías?|Ich auch! Wohin würdest du fliegen?|Me too! Where would you go?|¡Yo también! ¿Y adónde irías?
a|A las Maldivas, sin móvil. ¿Y tú, qué harías con un mes libre?|Auf die Malediven, ohne Handy. Und du, was würdest du mit einem freien Monat machen?|To the Maldives, without a phone. And you, what would you do with a month off?
me|Viajaría por Latinoamérica y aprendería a bailar salsa.|Ich würde durch Lateinamerika reisen und Salsa tanzen lernen.|I'd travel around Latin America and learn to dance salsa.|Viajaría por Latinoamérica y aprendería salsa.
a|¡Qué bonito! Yo abriría un chiringuito en la playa.|Wie schön! Ich würde eine Strandbar eröffnen.|How lovely! I'd open a beach bar.
me|¡Sería genial! ¿Podría trabajar contigo?|Das wäre toll! Könnte ich mit dir arbeiten?|That would be great! Could I work with you?|¡Qué guay! ¿Puedo trabajar contigo?
a|¡Claro! Pero primero deberías aprender a hacer cócteles.|Klar! Aber zuerst müsstest du lernen, Cocktails zu mixen.|Sure! But first you'd have to learn how to make cocktails.
me|¡Con mucho gusto! Aprendería enseguida.|Sehr gern! Das würde ich sofort lernen.|Gladly! I'd learn straight away.|¡Por supuesto! Aprendería rápido.` }
});

/* Español B1 · 1–3 */
lesson("B1", { id: "es-b1-01", t: TB("Espero que… – Der Subjuntivo presente", "Espero que… – The present subjunctive"),
  goal: TB("Du kannst Wünsche, Gefühle, Zweifel und Meinungen ausdrücken – und gute Wünsche aussprechen.", "You can express wishes, feelings, doubts and opinions – and wish people well."),
  words: `esperar|hoffen; warten|to hope; to wait|v|Espero que estés bien.|Ich hoffe, es geht dir gut.|I hope you're well.
alegrarse de|sich freuen über|to be glad about|v|Me alegro de que estés aquí.|Ich freue mich, dass du hier bist.|I'm glad you're here.
preocupar|Sorgen machen|to worry|v|Me preocupa que no duermas bien.|Es macht mir Sorgen, dass du nicht gut schläfst.|It worries me that you don't sleep well.
molestar|stören|to bother|v|Me molesta que la gente llegue tarde.|Es stört mich, wenn Leute zu spät kommen.|It bothers me when people arrive late.
dudar|bezweifeln|to doubt|v|Dudo que venga.|Ich bezweifle, dass er kommt.|I doubt he'll come.
es importante que|es ist wichtig, dass|it's important that|ph|Es importante que llegues a tiempo.|Es ist wichtig, dass du pünktlich kommst.|It's important that you arrive on time.
es posible que|es kann sein, dass|it's possible that|ph
es mejor que|es ist besser, wenn|it's better if|ph
ojalá|hoffentlich|I hope; if only|x|¡Ojalá haga buen tiempo mañana!|Hoffentlich ist morgen schönes Wetter!|I hope the weather's nice tomorrow!
quizás|vielleicht|maybe|adv|Quizás tenga razón.|Vielleicht hat er recht.|Maybe he's right.
tener razón|recht haben|to be right|v
estar de acuerdo|einverstanden sein|to agree|v|No estoy de acuerdo contigo.|Ich bin nicht deiner Meinung.|I don't agree with you.
la opinión|die Meinung|the opinion|n
la suerte|das Glück|luck|n|¡Que tengas suerte!|Viel Glück!|Good luck!
el éxito|der Erfolg|success|n
pasarlo bien|Spaß haben|to have a good time|v|¡Que lo pases bien!|Viel Spaß!|Have fun!
mejorarse|gesund werden|to get better|v|¡Que te mejores!|Gute Besserung!|Get well soon!
la noticia|die Neuigkeit; die Nachricht|the news (item)|n
dar miedo|Angst machen|to scare|v|Me da miedo que sea demasiado para mí.|Ich habe Angst, dass es zu viel für mich ist.|I'm afraid it might be too much for me.
la despedida|der Abschied|the farewell|n`,
  say: `Espero que te guste el regalo.|Ich hoffe, das Geschenk gefällt dir.|I hope you like the present.
Quiero que vengas a mi fiesta.|Ich möchte, dass du zu meiner Party kommst.|I want you to come to my party.
Creo que tienes razón.|Ich glaube, du hast recht.|I think you're right.
No creo que sea tan difícil.|Ich glaube nicht, dass es so schwierig ist.|I don't think it's that difficult.
Me alegro mucho por ti.|Ich freue mich sehr für dich.|I'm really happy for you.
¡Que tengas un buen día!|Einen schönen Tag noch!|Have a nice day!
Es mejor que lo hablemos mañana.|Es ist besser, wenn wir morgen darüber reden.|It's better if we talk about it tomorrow.`,
  gram: [
    ["h", TB("Subjuntivo presente – so wird er gebildet", "Present subjunctive – how it's formed")],
    ["p", TB("Von der <b>yo-Form im Präsens</b> ausgehen, <b>-o</b> weg und den „anderen“ Vokal anhängen: -ar → <b>-e</b> (hable), -er/-ir → <b>-a</b> (coma, viva). Unregelmäßiges yo bleibt erhalten: tengo → <b>tenga</b>, hago → <b>haga</b>, conozco → <b>conozca</b>. Ganz eigen: ser → sea, ir → vaya, estar → esté, saber → sepa, haber → haya.", "Start from the <b>yo form of the present</b>, drop <b>-o</b> and add the “other” vowel: -ar → <b>-e</b> (hable), -er/-ir → <b>-a</b> (coma, viva). An irregular yo form carries over: tengo → <b>tenga</b>, hago → <b>haga</b>, conozco → <b>conozca</b>. Fully irregular: ser → sea, ir → vaya, estar → esté, saber → sepa, haber → haya.")],
    ["conj", { verbs: ["hablar", "tener", "ser"], tenses: ["Subjuntivo presente"] }],
    ["h", TB("Wann steht der Subjuntivo?", "When is the subjunctive used?")],
    ["table", { head: [TB("Auslöser", "trigger"), TB("Beispiel", "example")], rows: [[TB("Wunsch: quiero que, espero que, ojalá", "wish: quiero que, espero que, ojalá"), "Espero que vengas."], [TB("Gefühl: me alegra que, me molesta que", "feeling: me alegra que, me molesta que"), "Me alegra que estés aquí."], [TB("Zweifel: no creo que, dudo que", "doubt: no creo que, dudo que"), "No creo que llueva."], [TB("Wertung: es importante que, es mejor que", "judgement: es importante que, es mejor que"), "Es mejor que te quedes."], [TB("gute Wünsche: que …", "good wishes: que …"), "¡Que te mejores!"]], say: 1 }],
    ["tip", TB("<b>Creo que</b> + Indikativ (Creo que <b>es</b> verdad), aber <b>no creo que</b> + Subjuntivo (No creo que <b>sea</b> verdad). Und: gleiche Person → Infinitiv: Quiero <b>ir</b>. / Quiero que <b>vayas</b>.", "<b>Creo que</b> + indicative (Creo que <b>es</b> verdad), but <b>no creo que</b> + subjunctive (No creo que <b>sea</b> verdad). And: same person → infinitive: Quiero <b>ir</b>. / Quiero que <b>vayas</b>.")]
  ],
  forms: { verbs: ["hablar", "comer", "vivir", "tener", "hacer", "ser", "ir", "estar", "poder", "venir"], tenses: ["Subjuntivo presente"] },
  drill: [
    ["Quiero que mis hijos ___ idiomas.", ["aprendan", "aprenden", "aprender"], 0],
    ["Creo que Ana ___ razón.", ["tiene", "tenga", "tener"], 0, TB("<i>creo que</i> → Indikativ.", "<i>creo que</i> → indicative.")],
    ["No creo que ___ tan caro.", ["sea", "es", "está"], 0, TB("Verneinte Meinung → Subjuntivo.", "Negated opinion → subjunctive.")],
    ["Quiero ___ al cine esta noche. (ich selbst)", ["ir", "vaya", "voy"], 0, TB("Gleiche Person → Infinitiv.", "Same person → infinitive.")],
    ["¡Ojalá ___ buen tiempo el sábado!", ["haga", "hace", "hará"], 0],
    ["Espero que ___ bien. (tú, estar)", "estés"],
    ["Es importante que ___ a tiempo. (vosotros, llegar)", "lleguéis"],
    ["¡Que te ___ pronto! (mejorarse)", "mejores"]
  ],
  talk: { t: TB("Gute Nachrichten", "Good news"), scene: TB("Deine Freundin Lucía hat ein Jobangebot in Barcelona bekommen.", "Your friend Lucía has been offered a job in Barcelona."), who: "Lucía", slots: {}, lines: `a|¡Tengo noticias! Me han ofrecido un trabajo en Barcelona.|Ich habe Neuigkeiten! Man hat mir einen Job in Barcelona angeboten.|I've got news! I've been offered a job in Barcelona.
me|¡Qué bien! Me alegro mucho por ti.|Wie toll! Ich freue mich sehr für dich.|Great! I'm really happy for you.|¡Enhorabuena! Me alegro mucho.; ¡Qué bien! Me alegro mucho de que te vaya tan bien.
a|Gracias. Pero me da miedo que sea demasiado para mí.|Danke. Aber ich habe Angst, dass es zu viel für mich ist.|Thanks. But I'm afraid it might be too much for me.
me|No creo que sea demasiado. Eres muy buena en tu trabajo.|Ich glaube nicht, dass es zu viel ist. Du bist sehr gut in deinem Job.|I don't think it's too much. You're very good at your job.|No creo que sea demasiado.; No creo que sea un problema, eres muy buena.
a|¿Tú crees? Es posible que tenga que mudarme en enero.|Meinst du? Es kann sein, dass ich im Januar umziehen muss.|Do you think so? I might have to move in January.
me|Espero que nos veamos antes de que te vayas.|Ich hoffe, wir sehen uns, bevor du gehst.|I hope we see each other before you leave.|Espero que nos veamos antes.; Espero verte antes de que te vayas.
a|¡Claro! Quiero que vengas a mi fiesta de despedida.|Klar! Ich möchte, dass du zu meiner Abschiedsparty kommst.|Of course! I want you to come to my leaving party.
me|¡Por supuesto! ¡Que tengas mucha suerte!|Natürlich! Viel Glück!|Of course! Good luck!|¡Claro que sí! ¡Mucha suerte!; ¡Allí estaré! ¡Que tengas mucha suerte!` }
});

lesson("B1", { id: "es-b1-02", t: TB("La entrevista de trabajo – Relativsätze", "La entrevista de trabajo – Relative clauses"),
  goal: TB("Du kannst dich in einem Vorstellungsgespräch präsentieren und Personen, Dinge und Orte genauer beschreiben.", "You can present yourself in a job interview and describe people, things and places more precisely."),
  words: `la entrevista|das Vorstellungsgespräch; das Interview|the interview|n|Mañana tengo una entrevista de trabajo.|Morgen habe ich ein Vorstellungsgespräch.|Tomorrow I have a job interview.
el puesto|die Stelle|the position|n|El puesto que ofrecen es muy interesante.|Die Stelle, die sie anbieten, ist sehr interessant.|The position they're offering is very interesting.
la empresa|die Firma; das Unternehmen|the company|n
el currículum|der Lebenslauf|the CV|n
la experiencia|die Erfahrung|the experience|n|Tengo tres años de experiencia en marketing.|Ich habe drei Jahre Erfahrung im Marketing.|I have three years' experience in marketing.
la formación|die Ausbildung|the training; education|n
las prácticas|das Praktikum|the internship|n|Hice las prácticas en una agencia.|Ich habe das Praktikum in einer Agentur gemacht.|I did my internship at an agency.
el sueldo|das Gehalt|the salary|n
el contrato|der Vertrag|the contract|n
la jornada completa|die Vollzeit|full-time|n
el equipo|das Team|the team|n|Busco un equipo en el que pueda aprender mucho.|Ich suche ein Team, in dem ich viel lernen kann.|I'm looking for a team where I can learn a lot.
el candidato|der Bewerber|the candidate|n
solicitar|sich bewerben um; beantragen|to apply for|v|He solicitado un puesto en Madrid.|Ich habe mich auf eine Stelle in Madrid beworben.|I've applied for a job in Madrid.
contratar|einstellen|to hire|v
el punto fuerte|die Stärke|the strength|n
el punto débil|die Schwäche|the weakness|n
responsable|verantwortungsvoll|responsible|adj
trabajar en equipo|im Team arbeiten|to work in a team|v
encargarse de|zuständig sein für|to be in charge of|v|Me encargo de las redes sociales.|Ich bin für die sozialen Medien zuständig.|I'm in charge of social media.`,
  say: `¿Por qué quiere trabajar con nosotros?|Warum möchten Sie bei uns arbeiten?|Why do you want to work with us?
Lo que más me interesa es el trato con los clientes.|Was mich am meisten interessiert, ist der Kontakt mit den Kunden.|What interests me most is dealing with customers.
La empresa donde trabajo ahora es pequeña.|Die Firma, in der ich jetzt arbeite, ist klein.|The company where I work now is small.
Mi jefa, que es muy exigente, me ha enseñado mucho.|Meine Chefin, die sehr anspruchsvoll ist, hat mir viel beigebracht.|My boss, who is very demanding, has taught me a lot.
¿Cuándo podría empezar?|Wann könnten Sie anfangen?|When could you start?
Le llamaremos la semana que viene.|Wir rufen Sie nächste Woche an.|We'll call you next week.`,
  gram: [
    ["h", TB("Relativpronomen", "Relative pronouns")],
    ["table", { head: [TB("Pronomen", "pronoun"), TB("wofür?", "used for"), TB("Beispiel", "example")], rows: [
      ["que", TB("Personen und Sachen – am häufigsten", "people and things – the most common"), "El libro que leo es bueno."],
      ["quien / quienes", TB("Personen nach Präposition", "people after a preposition"), "La chica con quien hablé es mi vecina."],
      ["el / la / los / las que", TB("nach Präposition", "after a preposition"), "La empresa en la que trabajo es grande."],
      ["donde", TB("Orte", "places"), "La ciudad donde vivo es tranquila."],
      ["lo que", TB("„was“ – bezieht sich auf eine Idee", "“what” – refers to an idea"), "Lo que dices es verdad."],
      ["cuyo / cuya", TB("dessen / deren – passt sich dem Folgenden an", "whose – agrees with what follows"), "El cliente cuyo pedido llegó tarde llamó."]], say: 2 }],
    ["tip", TB("Relativsatz mit <b>Subjuntivo</b>, wenn das Gesuchte unbekannt ist oder es nicht gibt: Busco un piso que <b>tenga</b> terraza (irgendeins). Aber: Vivo en un piso que <b>tiene</b> terraza (ein bestimmtes).", "A relative clause takes the <b>subjunctive</b> when what you're looking for is unknown or doesn't exist: Busco un piso que <b>tenga</b> terraza (any flat). But: Vivo en un piso que <b>tiene</b> terraza (a specific one).")]
  ],
  drill: [
    ["El puesto ___ ofrecen es muy interesante.", ["que", "quien", "donde"], 0],
    ["La ciudad ___ nací es muy pequeña.", ["donde", "que", "quien"], 0],
    ["___ más me gusta de este trabajo es el equipo.", ["Lo que", "Que", "Quien"], 0],
    ["La compañera con ___ comparto oficina es muy simpática.", ["quien", "que", "donde"], 0, TB("Person nach Präposition → quien (oder la que).", "Person after a preposition → quien (or la que).")],
    ["La empresa en la ___ trabajo tiene 200 empleados.", ["que", "quien", "lo"], 0],
    ["Busco un trabajo que ___ cerca de casa.", ["esté", "está", "estar"], 0, TB("Gesucht und noch unbekannt → Subjuntivo.", "Sought and still unknown → subjunctive.")],
    ["Tengo un trabajo que ___ cerca de casa.", ["está", "esté", "estar"], 0],
    ["El cliente ___ pedido llegó tarde está enfadado.", ["cuyo", "cuya", "que su"], 0]
  ],
  talk: { t: TB("Das Vorstellungsgespräch", "The job interview"), scene: TB("Du bewirbst dich bei einer Firma in Madrid. Frau Martín führt das Gespräch.", "You're applying to a company in Madrid. Ms Martín is interviewing you."), who: "Sra. Martín", slots: { name: "Alex" }, lines: `a|Buenos días, siéntese, por favor. Cuénteme un poco sobre usted.|Guten Tag, setzen Sie sich bitte. Erzählen Sie mir ein bisschen von sich.|Good morning, please take a seat. Tell me a bit about yourself.
me|Buenos días. Me llamo {name} y tengo experiencia en marketing.|Guten Tag. Ich heiße … und habe Erfahrung im Marketing.|Good morning. My name is … and I have experience in marketing.|Me llamo {name}. Tengo experiencia en marketing.; Soy {name} y he trabajado en marketing.
a|¿Y por qué le interesa este puesto?|Und warum interessiert Sie diese Stelle?|And why are you interested in this position?
me|Lo que más me interesa es trabajar en un equipo internacional.|Was mich am meisten interessiert, ist die Arbeit in einem internationalen Team.|What interests me most is working in an international team.|Me interesa trabajar en un equipo internacional.
a|Muy bien. ¿Cuál es su punto fuerte?|Sehr gut. Was ist Ihre Stärke?|Very good. What's your strength?
me|Soy una persona responsable y me gusta trabajar en equipo.|Ich bin verantwortungsvoll und arbeite gern im Team.|I'm a responsible person and I like working in a team.|Soy responsable y trabajo bien en equipo.
a|Perfecto. ¿Cuándo podría empezar?|Perfekt. Wann könnten Sie anfangen?|Perfect. When could you start?
me|Podría empezar el mes que viene.|Ich könnte nächsten Monat anfangen.|I could start next month.|Podría empezar en enero.; El mes que viene, si le parece bien.
a|Muy bien. Le llamaremos la semana que viene.|Sehr gut. Wir rufen Sie nächste Woche an.|Very good. We'll call you next week.
me|Muchas gracias por su tiempo. Hasta pronto.|Vielen Dank für Ihre Zeit. Bis bald.|Thank you very much for your time. See you soon.|Gracias por su tiempo.; Muchas gracias, hasta luego.` }
});

lesson("B1", { id: "es-b1-03", t: TB("Si tuviera… – Bedingungssätze", "Si tuviera… – Conditional sentences"),
  goal: TB("Du kannst über Bedingungen, Träume und hypothetische Situationen sprechen und Ratschläge geben.", "You can talk about conditions, dreams and hypothetical situations and give advice."),
  words: `la lotería|die Lotterie|the lottery|n|Si me tocara la lotería, viajaría por el mundo.|Wenn ich im Lotto gewinnen würde, würde ich um die Welt reisen.|If I won the lottery, I'd travel the world.
cambiar de vida|sein Leben ändern|to change one's life|v
mudarse|umziehen|to move (house)|v|Si pudiera, me mudaría al campo.|Wenn ich könnte, würde ich aufs Land ziehen.|If I could, I'd move to the countryside.
el campo|das Land; das Feld|the countryside; the field|n
ahorrar|sparen|to save|v|Si ahorras un poco cada mes, podrás comprarte un coche.|Wenn du jeden Monat etwas sparst, kannst du dir ein Auto kaufen.|If you save a bit every month, you'll be able to buy a car.
gastar|ausgeben|to spend|v
el riesgo|das Risiko|the risk|n
arriesgarse|etwas riskieren|to take a risk|v
atreverse a|sich trauen|to dare|v|Si me atreviera, cantaría en público.|Wenn ich mich trauen würde, würde ich öffentlich singen.|If I dared, I'd sing in public.
el superpoder|die Superkraft|the superpower|n
invisible|unsichtbar|invisible|adj
volar|fliegen|to fly|v
en cambio|dagegen; hingegen|on the other hand|ph
la isla desierta|die einsame Insel|the desert island|n|¿Qué llevarías a una isla desierta?|Was würdest du auf eine einsame Insel mitnehmen?|What would you take to a desert island?
en caso de que|falls|in case|ph|En caso de que llueva, nos quedamos en casa.|Falls es regnet, bleiben wir zu Hause.|In case it rains, we'll stay at home.
en tu lugar|an deiner Stelle|in your place|ph
la oferta|das Angebot|the offer|n`,
  say: `Si tengo tiempo, te llamo.|Wenn ich Zeit habe, rufe ich dich an.|If I have time, I'll call you.
Si tuviera más tiempo, aprendería a tocar la guitarra.|Wenn ich mehr Zeit hätte, würde ich Gitarre spielen lernen.|If I had more time, I'd learn to play the guitar.
Si fuera tú, aceptaría la oferta.|Wenn ich du wäre, würde ich das Angebot annehmen.|If I were you, I'd accept the offer.
¿Qué harías si fueras invisible?|Was würdest du machen, wenn du unsichtbar wärst?|What would you do if you were invisible?
Si pudiera vivir en cualquier sitio, viviría en Canarias.|Wenn ich überall leben könnte, würde ich auf den Kanaren leben.|If I could live anywhere, I'd live in the Canary Islands.
Si llueve mañana, no iremos a la playa.|Wenn es morgen regnet, gehen wir nicht an den Strand.|If it rains tomorrow, we won't go to the beach.`,
  gram: [
    ["h", TB("Zwei Arten von Bedingungssätzen", "Two kinds of conditional sentences")],
    ["table", { head: [TB("Art", "type"), TB("si-Satz", "si clause"), TB("Hauptsatz", "main clause"), TB("Beispiel", "example")], rows: [
      [TB("real", "real"), "Presente", TB("Presente / Futuro / Imperativ", "present / future / imperative"), "Si llueve, me quedo en casa."],
      [TB("irreal (jetzt)", "unreal (now)"), "Subjuntivo imperfecto", "Condicional", "Si tuviera dinero, viajaría."]], say: 3 }],
    ["p", TB("<b>Subjuntivo imperfecto</b>: von der 3. Person Plural des Indefinido ausgehen, <b>-ron</b> weg, <b>-ra</b> anhängen: tuvie<s>ron</s> → tuvie<b>ra</b>, fue<s>ron</s> → fue<b>ra</b>, pudie<s>ron</s> → pudie<b>ra</b>. Die Form auf <b>-se</b> (tuviese) ist gleichbedeutend.", "<b>Imperfect subjunctive</b>: start from the 3rd person plural of the preterite, drop <b>-ron</b>, add <b>-ra</b>: tuvie<s>ron</s> → tuvie<b>ra</b>, fue<s>ron</s> → fue<b>ra</b>, pudie<s>ron</s> → pudie<b>ra</b>. The <b>-se</b> form (tuviese) means the same.")],
    ["conj", { verbs: ["tener", "ser", "poder"], tenses: ["Subjuntivo imperfecto"] }],
    ["tip", TB("Nach <b>si</b> (= wenn, falls) steht nie Futur oder Condicional: <s>Si tendría</s> → Si <b>tuviera</b>.", "After <b>si</b> (= if) you never use the future or the conditional: <s>Si tendría</s> → Si <b>tuviera</b>.")]
  ],
  forms: { verbs: ["tener", "ser", "poder", "hacer", "ir", "estar", "saber", "querer", "decir", "vivir"], tenses: ["Subjuntivo imperfecto", "Condicional"] },
  drill: [
    ["Si ___ dinero, compraría una casa en la playa.", ["tuviera", "tendría", "tengo"], 0],
    ["Si mañana hace sol, ___ a la playa.", ["iremos", "iríamos", "fuéramos"], 0, TB("Reale Bedingung: si + Presente → Futur oder Presente.", "Real condition: si + present → future or present.")],
    ["Si yo ___ tú, no lo haría.", ["fuera", "sería", "soy"], 0],
    ["¿Qué ___ si te tocara la lotería?", ["harías", "harás", "hicieras"], 0],
    ["Si ___ más, podrías comprarte el coche. (ahorrar, tú)", "ahorraras; ahorrases"],
    ["Si me ___, cantaría en el karaoke. (atreverse, yo)", "atreviera; atreviese"],
    ["Si llueve, ___ en casa. (quedarse, nosotros)", "nos quedamos; nos quedaremos"]
  ],
  talk: { t: TB("Was wäre, wenn …?", "What if …?"), scene: TB("Abends in einer Bar spinnst du mit deinem Freund Pablo herum.", "In a bar one evening, you and your friend Pablo let your imaginations run wild."), who: "Pablo", slots: {}, lines: `a|Oye, ¿qué harías si te tocara la lotería?|Sag mal, was würdest du machen, wenn du im Lotto gewinnen würdest?|Hey, what would you do if you won the lottery?
me|Si me tocara la lotería, viajaría por todo el mundo.|Wenn ich im Lotto gewinnen würde, würde ich um die ganze Welt reisen.|If I won the lottery, I'd travel all over the world.|Viajaría por todo el mundo.; Daría la vuelta al mundo.
a|¡Qué bien! Yo, en cambio, dejaría mi trabajo enseguida.|Toll! Ich dagegen würde sofort meinen Job kündigen.|Great! I, on the other hand, would quit my job straight away.
me|¿De verdad? Yo no dejaría mi trabajo, me gusta mucho.|Wirklich? Ich würde meinen Job nicht aufgeben, er gefällt mir sehr.|Really? I wouldn't give up my job, I like it a lot.|Yo no dejaría mi trabajo.; Pues yo no, me gusta mi trabajo.
a|Vale. ¿Y si pudieras tener un superpoder?|Okay. Und wenn du eine Superkraft haben könntest?|OK. And if you could have a superpower?
me|Me gustaría volar. Así no tendría que coger el metro.|Ich würde gern fliegen. Dann müsste ich nicht die U-Bahn nehmen.|I'd like to fly. Then I wouldn't have to take the underground.|Me gustaría poder volar.; Volaría, así no tendría que coger el metro.
a|¡Ja, ja! Si yo fuera invisible, entraría gratis en los conciertos.|Haha! Wenn ich unsichtbar wäre, würde ich umsonst in Konzerte gehen.|Ha ha! If I were invisible, I'd get into concerts for free.
me|Si fuera tú, me compraría una entrada. Es más fácil.|An deiner Stelle würde ich mir eine Karte kaufen. Das ist einfacher.|If I were you, I'd buy a ticket. It's easier.|Yo en tu lugar compraría una entrada.` }
});

/* Español B1 · 4–6 */
lesson("B1", { id: "es-b1-04", t: TB("Noticias – Passiv und unpersönliches <i>se</i>", "Noticias – The passive and impersonal <i>se</i>"),
  goal: TB("Du kannst Nachrichten verstehen, wiedergeben und sagen, wie du dich informierst.", "You can understand and pass on news and say how you keep informed."),
  words: `las noticias|die Nachrichten|the news|n|¿Has visto las noticias de hoy?|Hast du die Nachrichten von heute gesehen?|Have you seen today's news?
el periódico|die Zeitung|the newspaper|n
el titular|die Schlagzeile|the headline|n
el periodista|der Journalist|the journalist|n
la encuesta|die Umfrage|the survey|n
el gobierno|die Regierung|the government|n
las elecciones|die Wahlen|the elections|n
la ley|das Gesetz|the law|n|La ley fue aprobada por el Parlamento.|Das Gesetz wurde vom Parlament verabschiedet.|The law was passed by Parliament.
aprobar|verabschieden; bestehen (Prüfung)|to pass; to approve|v
el accidente|der Unfall|the accident|n
el incendio|der Brand|the fire|n
herido/a|verletzt|injured|adj|Dos personas resultaron heridas.|Zwei Personen wurden verletzt.|Two people were injured.
detener|festnehmen|to arrest|v
la huelga|der Streik|the strike|n|Mañana hay huelga de trenes.|Morgen ist Bahnstreik.|There's a train strike tomorrow.
las redes sociales|die sozialen Medien|social media|n
informarse|sich informieren|to keep informed|v
según|laut; gemäß|according to|x|Según el periódico, el precio de la luz va a subir.|Laut Zeitung wird der Strompreis steigen.|According to the paper, electricity prices are going to rise.
la fuente|die Quelle|the source|n
fiable|zuverlässig|reliable|adj
enterarse de|erfahren|to find out|v`,
  say: `Se habla español en muchos países.|In vielen Ländern spricht man Spanisch.|Spanish is spoken in many countries.
Se venden pisos en el centro.|Im Zentrum werden Wohnungen verkauft.|Flats for sale in the centre.
El museo fue inaugurado en 1990.|Das Museum wurde 1990 eröffnet.|The museum was opened in 1990.
Se dice que va a subir el precio de la luz.|Man sagt, dass der Strompreis steigen wird.|They say the price of electricity is going to rise.
Yo me informo sobre todo por internet.|Ich informiere mich vor allem im Internet.|I get my news mainly online.
No te creas todo lo que lees en las redes.|Glaub nicht alles, was du in den sozialen Medien liest.|Don't believe everything you read on social media.`,
  gram: [
    ["h", TB("Passiv: <i>ser</i> + Partizip", "Passive: <i>ser</i> + participle")],
    ["p", TB("Wie im Deutschen mit „werden“: <b>ser + Partizip</b>. Das Partizip passt sich an: La ley <b>fue aprobada</b>. Los ladrones <b>fueron detenidos</b>. Wer es tut: <b>por</b> + Person.", "Like the English passive: <b>ser + participle</b>. The participle agrees: La ley <b>fue aprobada</b>. Los ladrones <b>fueron detenidos</b>. The doer: <b>por</b> + person.")],
    ["h", TB("<i>se</i> statt Passiv – viel häufiger im Alltag", "<i>se</i> instead of the passive – much more common")],
    ["p", TB("<b>se + Verb in der 3. Person</b>. Das Verb richtet sich nach der Sache: Se <b>vende</b> piso. / Se <b>venden</b> pisos. Für „man“: Se dice que…, Aquí se vive bien.", "<b>se + verb in the 3rd person</b>. The verb agrees with the thing: Se <b>vende</b> piso. / Se <b>venden</b> pisos. For “one / people”: Se dice que…, Aquí se vive bien.")],
    ["ex", [["Aquí se habla inglés.", "Hier spricht man Englisch.", "English spoken here."], ["Se buscan camareros.", "Kellner gesucht.", "Waiters wanted."], ["La noticia fue publicada ayer.", "Die Nachricht wurde gestern veröffentlicht.", "The news was published yesterday."], ["Tres personas resultaron heridas.", "Drei Personen wurden verletzt.", "Three people were injured."]]],
    ["tip", TB("In Nachrichten liest du oft <b>resultar + Partizip</b> statt ser: Tres personas <b>resultaron heridas</b>.", "In the news you'll often read <b>resultar + participle</b> instead of ser: Tres personas <b>resultaron heridas</b>.")]
  ],
  drill: [
    ["La ley fue ___ por el Parlamento.", ["aprobada", "aprobado", "aprobadas"], 0],
    ["Los ladrones fueron ___ por la policía.", ["detenidos", "detenido", "detenidas"], 0],
    ["En esta tienda se ___ bicicletas.", ["venden", "vende", "vendemos"], 0, TB("Sache im Plural → Verb im Plural.", "Plural thing → plural verb.")],
    ["Aquí se ___ muy bien.", ["come", "comen", "comemos"], 0],
    ["La noticia fue publicada ___ un periódico local.", ["por", "para", "de"], 0],
    ["Se ___ que mañana habrá huelga. (decir)", "dice"],
    ["El puente fue ___ en 1920. (construir)", "construido"]
  ],
  talk: { t: TB("Hast du schon gehört?", "Have you heard?"), scene: TB("Dein Kollege Javier erzählt dir in der Kaffeepause eine Neuigkeit.", "Your colleague Javier tells you some news during the coffee break."), who: "Javier", slots: {}, lines: `a|¿Te has enterado? Mañana hay huelga de metro.|Hast du es schon gehört? Morgen ist U-Bahn-Streik.|Have you heard? There's an underground strike tomorrow.
me|¿En serio? ¿Dónde lo has leído?|Im Ernst? Wo hast du das gelesen?|Seriously? Where did you read that?|¿De verdad? ¿Dónde lo has visto?
a|Se ha publicado en el periódico esta mañana.|Es wurde heute Morgen in der Zeitung veröffentlicht.|It was published in the paper this morning.
me|Pues yo me informo sobre todo por las redes sociales.|Ich informiere mich vor allem über die sozialen Medien.|Well, I get my news mainly from social media.|Yo me informo por internet.
a|Cuidado, en las redes se dicen muchas cosas que no son verdad.|Vorsicht, in den sozialen Medien wird viel gesagt, was nicht stimmt.|Careful, a lot of things get said on social media that aren't true.
me|Tienes razón. Siempre hay que mirar la fuente.|Du hast recht. Man muss immer auf die Quelle schauen.|You're right. You always have to check the source.|Es verdad, hay que comprobar la fuente.
a|Bueno, ¿y cómo vas a venir mañana a la oficina?|Na, und wie kommst du morgen ins Büro?|So how are you going to get to the office tomorrow?
me|Si hay huelga, trabajaré desde casa.|Wenn gestreikt wird, arbeite ich von zu Hause.|If there's a strike, I'll work from home.|Trabajaré desde casa.; Si hay huelga, iré en bici.` }
});

lesson("B1", { id: "es-b1-05", t: TB("Relaciones – Gefühle und zwei Pronomen", "Relaciones – Feelings and double pronouns"),
  goal: TB("Du kannst über Beziehungen und Gefühle sprechen und zwei Pronomen kombinieren (se lo, te la …).", "You can talk about relationships and feelings and combine two pronouns (se lo, te la …)."),
  words: `la pareja|der Partner; das Paar|the partner; the couple|n|Mi pareja y yo vivimos juntos desde hace dos años.|Mein Partner und ich wohnen seit zwei Jahren zusammen.|My partner and I have lived together for two years.
enamorarse de|sich verlieben in|to fall in love with|v
el novio|der feste Freund; der Bräutigam|the boyfriend; the groom|n
la novia|die feste Freundin; die Braut|the girlfriend; the bride|n
casarse con|heiraten|to marry|v
separarse|sich trennen|to separate|v
llevarse bien|sich gut verstehen|to get on well|v|Me llevo muy bien con mi hermana.|Ich verstehe mich sehr gut mit meiner Schwester.|I get on very well with my sister.
discutir|streiten; diskutieren|to argue|v
confiar en|vertrauen|to trust|v
echar de menos|vermissen|to miss|v|Te echo mucho de menos.|Ich vermisse dich sehr.|I miss you a lot.
celoso/a|eifersüchtig|jealous|adj
pedir perdón|sich entschuldigen|to apologise|v
prestar|leihen|to lend|v|¿Me prestas tu coche? – Sí, te lo presto.|Leihst du mir dein Auto? – Ja, ich leihe es dir.|Will you lend me your car? – Yes, I'll lend it to you.
contar|erzählen|to tell|v
el secreto|das Geheimnis|the secret|n
prometer|versprechen|to promise|v
tener en común|gemeinsam haben|to have in common|v
conocerse|sich kennenlernen|to meet (for the first time)|v|¿Cómo os conocisteis?|Wie habt ihr euch kennengelernt?|How did you meet?`,
  say: `¿Me lo puedes explicar otra vez?|Kannst du es mir nochmal erklären?|Can you explain it to me again?
Se lo he dicho mil veces.|Ich habe es ihm tausendmal gesagt.|I've told him a thousand times.
Te lo prometo.|Ich verspreche es dir.|I promise.
Nos conocimos en la universidad.|Wir haben uns an der Uni kennengelernt.|We met at university.
No se lo digas a nadie.|Sag es niemandem.|Don't tell anyone.
Tenemos mucho en común.|Wir haben viel gemeinsam.|We have a lot in common.`,
  gram: [
    ["h", TB("Zwei Pronomen: indirekt vor direkt", "Two pronouns: indirect before direct")],
    ["p", TB("Reihenfolge: <b>indirekt (me, te, le, nos, os, les) + direkt (lo, la, los, las)</b>. Aus <b>le/les + lo/la</b> wird <b>se lo / se la</b>: Le doy el libro → <b>Se lo</b> doy.", "Order: <b>indirect (me, te, le, nos, os, les) + direct (lo, la, los, las)</b>. <b>le/les + lo/la</b> becomes <b>se lo / se la</b>: Le doy el libro → <b>Se lo</b> doy.")],
    ["table", { head: [TB("Satz", "sentence"), TB("mit Pronomen", "with pronouns")], rows: [["Te doy el regalo.", "Te lo doy."], ["Le cuento la verdad.", "Se la cuento."], ["Les mando las fotos.", "Se las mando."], ["¿Me prestas el coche?", "¿Me lo prestas?"]], say: 1 }],
    ["p", TB("Beim Infinitiv, Gerundium und bejahten Imperativ werden die Pronomen <b>angehängt</b>: Voy a dár<b>selo</b>. ¡Dí<b>melo</b>! Beim verneinten Imperativ stehen sie davor: ¡No <b>me lo</b> digas!", "With the infinitive, the gerund and the positive imperative the pronouns are <b>attached</b>: Voy a dár<b>selo</b>. ¡Dí<b>melo</b>! With a negative imperative they go in front: ¡No <b>me lo</b> digas!")],
    ["tip", TB("Beim Anhängen bekommt das Verb oft einen Akzent, damit die Betonung bleibt: da → <b>dá</b>selo, explica → ex<b>plí</b>camelo.", "When pronouns are attached, the verb often needs an accent so the stress stays put: da → <b>dá</b>selo, explica → ex<b>plí</b>camelo.")]
  ],
  drill: [
    ["¿Me prestas tu bici? – Sí, te ___ presto.", ["la", "lo", "le"], 0],
    ["Le doy el libro a Pedro. → ___ doy.", ["Se lo", "Le lo", "Lo le"], 0, TB("le + lo → se lo.", "le + lo → se lo.")],
    ["¿Les has enviado las fotos? – Sí, ya se ___ he enviado.", ["las", "los", "les"], 0],
    ["No ___ digas a nadie, es un secreto.", ["se lo", "lo se", "le lo"], 0],
    ["¿Puedes explicármelo? – Sí, voy a ___ ahora.", ["explicártelo", "te lo explicarlo", "explicarlo te"], 0],
    ["Me llevo muy bien ___ mi hermano.", ["con", "de", "a"], 0],
    ["¿Qué te ha dicho? ¡___! (es mir sagen, du)", "Dímelo"]
  ],
  talk: { t: TB("Wie habt ihr euch kennengelernt?", "How did you meet?"), scene: TB("Deine Freundin Marta hat dich lange nicht gesehen und will alles über deine Beziehung wissen.", "Your friend Marta hasn't seen you for ages and wants to know all about your relationship."), who: "Marta", slots: {}, lines: `a|¡Por fin te veo! ¿Qué tal con tu pareja?|Endlich sehe ich dich! Wie läuft's mit deinem Partner?|Finally! How are things with your partner?
me|Muy bien, nos llevamos genial.|Sehr gut, wir verstehen uns super.|Very well, we get on brilliantly.|Muy bien, gracias. Nos llevamos muy bien.
a|¡Qué bien! ¿Y cómo os conocisteis?|Schön! Und wie habt ihr euch kennengelernt?|Great! And how did you meet?
me|Nos conocimos en un curso de español en Sevilla.|Wir haben uns bei einem Spanischkurs in Sevilla kennengelernt.|We met on a Spanish course in Seville.|Nos conocimos en Sevilla, en un curso.
a|¡Qué romántico! ¿Y tenéis mucho en común?|Wie romantisch! Und habt ihr viel gemeinsam?|How romantic! And do you have a lot in common?
me|Sí, a los dos nos encanta viajar y cocinar.|Ja, wir reisen und kochen beide sehr gern.|Yes, we both love travelling and cooking.|Sí, nos encanta viajar.; Sí, mucho. Nos encanta cocinar.
a|Oye, ¿me prestas el libro de recetas del que me hablaste?|Sag mal, leihst du mir das Kochbuch, von dem du mir erzählt hast?|Hey, will you lend me that recipe book you told me about?
me|Claro, te lo traigo mañana.|Klar, ich bringe es dir morgen.|Sure, I'll bring it to you tomorrow.|Sí, te lo presto.; Claro, mañana te lo doy.` }
});

lesson("B1", { id: "es-b1-06", t: TB("Contar un viaje – Plusquamperfekt und Konnektoren", "Contar un viaje – Pluperfect and connectors"),
  goal: TB("Du kannst eine Reisegeschichte lebendig erzählen – mit Vorvergangenheit und den passenden Verbindungswörtern.", "You can tell a lively travel story – with the pluperfect and the right linking words."),
  words: `el viaje|die Reise|the trip|n
la aventura|das Abenteuer|the adventure|n
perder|verpassen; verlieren|to miss; to lose|v|Cuando llegamos, el tren ya había salido.|Als wir ankamen, war der Zug schon abgefahren.|When we arrived, the train had already left.
el vuelo|der Flug|the flight|n
retrasarse|sich verspäten|to be delayed|v
la maleta|der Koffer|the suitcase|n
la mochila|der Rucksack|the backpack|n
el albergue|die Jugendherberge|the hostel|n
el paisaje|die Landschaft|the landscape|n
inolvidable|unvergesslich|unforgettable|adj
al principio|am Anfang|at first|ph
de repente|plötzlich|suddenly|adv|De repente empezó a llover.|Plötzlich fing es an zu regnen.|Suddenly it started to rain.
mientras|während|while|x
por eso|deshalb|that's why|ph
sin embargo|jedoch|however|ph
al final|am Ende|in the end|ph
nunca antes|noch nie zuvor|never before|ph|Nunca antes había visto algo tan bonito.|Noch nie zuvor hatte ich etwas so Schönes gesehen.|I had never seen anything so beautiful before.
hacer autostop|trampen|to hitchhike|v
al día siguiente|am nächsten Tag|the next day|ph`,
  say: `Cuando llegamos al aeropuerto, el vuelo ya había salido.|Als wir am Flughafen ankamen, war der Flug schon weg.|When we got to the airport, the flight had already left.
Nunca había estado en México antes.|Ich war vorher noch nie in Mexiko gewesen.|I had never been to Mexico before.
Al principio todo iba bien, pero de repente se rompió el coche.|Am Anfang lief alles gut, aber plötzlich ging das Auto kaputt.|At first everything was going well, but suddenly the car broke down.
Por eso tuvimos que hacer autostop.|Deshalb mussten wir trampen.|That's why we had to hitchhike.
Mientras esperábamos, conocimos a una pareja de Chile.|Während wir warteten, lernten wir ein Paar aus Chile kennen.|While we were waiting, we met a couple from Chile.
Al final fue un viaje inolvidable.|Am Ende war es eine unvergessliche Reise.|In the end it was an unforgettable trip.`,
  gram: [
    ["h", TB("Pretérito pluscuamperfecto (Vorvergangenheit)", "Pluperfect (past perfect)")],
    ["p", TB("<b>había, habías, había, habíamos, habíais, habían + Partizip</b> – für das, was <i>vor</i> einem anderen Ereignis in der Vergangenheit schon passiert war: Cuando llegué, la película <b>ya había empezado</b>.", "<b>había, habías, había, habíamos, habíais, habían + participle</b> – for what had already happened <i>before</i> another past event: Cuando llegué, la película <b>ya había empezado</b>.")],
    ["table", { head: [TB("Person", "person"), TB("Form", "form")], rows: [["yo", "había salido"], ["tú", "habías salido"], ["él / ella / usted", "había salido"], ["nosotros", "habíamos salido"], ["vosotros", "habíais salido"], ["ellos / ustedes", "habían salido"]], say: 1 }],
    ["h", TB("Erzählen mit Konnektoren", "Telling a story with connectors")],
    ["table", { head: [TB("Konnektor", "connector"), TB("Bedeutung", "meaning")], rows: [["al principio", TB("am Anfang", "at first")], ["luego / después", TB("dann / danach", "then / afterwards")], ["de repente", TB("plötzlich", "suddenly")], ["mientras", TB("während", "while")], ["por eso", TB("deshalb", "that's why")], ["sin embargo", TB("jedoch", "however")], ["al final", TB("am Ende", "in the end")]], say: 0 }],
    ["tip", TB("Das <b>Indefinido</b> treibt die Geschichte voran (llegamos, vimos …), das <b>Imperfecto</b> beschreibt den Hintergrund (hacía sol …), das <b>Pluscuamperfecto</b> springt einen Schritt zurück (ya habían cerrado).", "The <b>preterite</b> moves the story on (llegamos, vimos …), the <b>imperfect</b> describes the background (hacía sol …), the <b>pluperfect</b> jumps a step back (ya habían cerrado).")]
  ],
  forms: { verbs: ["llegar", "ver", "ir", "hacer", "tener", "estar", "perder", "conocer"], tenses: ["Pretérito indefinido", "Pretérito imperfecto"] },
  drill: [
    ["Cuando llegamos, el tren ya ___ salido.", ["había", "ha", "hubo"], 0],
    ["Nunca ___ visto el mar antes de ese viaje. (yo)", ["había", "he", "habría"], 0],
    ["___ empezó a llover y tuvimos que volver.", ["De repente", "Sin embargo", "Mientras"], 0],
    ["Perdimos el vuelo; ___ dormimos en el aeropuerto.", ["por eso", "sin embargo", "mientras"], 0],
    ["___ esperábamos el autobús, empezó a nevar.", ["Mientras", "Por eso", "Al final"], 0],
    ["Cuando volví a casa, mis amigos ya se ___ ido.", ["habían", "han", "había"], 0],
    ["Ellos nunca ___ estado en España antes. (Plusquamperfekt)", "habían"]
  ],
  talk: { t: TB("Die Reise nach Peru", "The trip to Peru"), scene: TB("Du bist gerade aus Peru zurück. Dein Freund Diego will alles wissen.", "You've just got back from Peru. Your friend Diego wants to hear everything."), who: "Diego", slots: {}, lines: `a|¡Hola! ¿Qué tal el viaje a Perú?|Hallo! Wie war die Reise nach Peru?|Hi! How was the trip to Peru?
me|¡Increíble! Nunca había visto paisajes tan bonitos.|Unglaublich! Ich hatte noch nie so schöne Landschaften gesehen.|Incredible! I'd never seen such beautiful landscapes.|¡Fue increíble! Nunca había visto algo así.
a|¿Y todo fue bien?|Und lief alles gut?|And did everything go well?
me|Al principio no. Cuando llegamos, nuestro vuelo ya había salido.|Am Anfang nicht. Als wir ankamen, war unser Flug schon weg.|Not at first. When we arrived, our flight had already left.|No, perdimos el vuelo.; Al principio no, perdimos el vuelo.
a|¡Qué mala suerte! ¿Y qué hicisteis?|So ein Pech! Und was habt ihr gemacht?|What bad luck! And what did you do?
me|Dormimos en el aeropuerto y al día siguiente tomamos otro vuelo.|Wir haben am Flughafen geschlafen und am nächsten Tag einen anderen Flug genommen.|We slept at the airport and took another flight the next day.|Dormimos en el aeropuerto.; Dormimos allí y al día siguiente cogimos otro vuelo.
a|¿Y qué fue lo mejor del viaje?|Und was war das Beste an der Reise?|And what was the best thing about the trip?
me|Machu Picchu. Al final fue un viaje inolvidable.|Machu Picchu. Am Ende war es eine unvergessliche Reise.|Machu Picchu. In the end it was an unforgettable trip.|Sin duda, Machu Picchu.; Machu Picchu, fue inolvidable.` }
});

/* Español B2 · 1–3 */
lesson("B2", { id: "es-b2-01", t: TB("Argumentar – Konnektoren mit Subjuntivo", "Argumentar – Connectors with the subjunctive"),
  goal: TB("Du kannst Vor- und Nachteile abwägen, Gegenargumente bringen und deine Meinung begründen.", "You can weigh up pros and cons, bring counter-arguments and justify your opinion."),
  words: `argumentar|argumentieren|to argue (a case)|v
el argumento|das Argument|the argument|n
la ventaja|der Vorteil|the advantage|n|Una ventaja del teletrabajo es que ahorras tiempo.|Ein Vorteil des Homeoffice ist, dass man Zeit spart.|One advantage of remote work is that you save time.
la desventaja|der Nachteil|the disadvantage|n
el inconveniente|der Nachteil; das Problem|the drawback|n
el teletrabajo|das Homeoffice|remote work|n
aunque|obwohl; selbst wenn|although; even if|x|Aunque llueva, saldremos.|Selbst wenn es regnet, gehen wir raus.|Even if it rains, we'll go out.
a pesar de|trotz|despite|x
para que|damit|so that|x|Te lo explico para que lo entiendas.|Ich erkläre es dir, damit du es verstehst.|I'll explain it so that you understand.
sin que|ohne dass|without|x
a no ser que|es sei denn|unless|x|Iré, a no ser que llueva.|Ich gehe, es sei denn, es regnet.|I'll go unless it rains.
siempre que|vorausgesetzt, dass; immer wenn|as long as; whenever|x
por un lado|einerseits|on the one hand|ph
por otro lado|andererseits|on the other hand|ph
desde mi punto de vista|aus meiner Sicht|from my point of view|ph
estar a favor de|dafür sein|to be in favour of|v
estar en contra de|dagegen sein|to be against|v
convencer|überzeugen|to convince|v
la conciliación|die Vereinbarkeit von Beruf und Familie|work-life balance|n
aun así|trotzdem|even so|ph`,
  say: `Por un lado es cómodo; por otro, te sientes solo.|Einerseits ist es bequem, andererseits fühlt man sich allein.|On the one hand it's convenient; on the other, you feel lonely.
Aunque tienes razón, no estoy del todo de acuerdo.|Obwohl du recht hast, bin ich nicht ganz einverstanden.|Although you're right, I don't completely agree.
Estoy a favor, siempre que haya reuniones presenciales.|Ich bin dafür, solange es Präsenztreffen gibt.|I'm in favour, as long as there are face-to-face meetings.
A pesar de las ventajas, hay algunos inconvenientes.|Trotz der Vorteile gibt es einige Nachteile.|Despite the advantages, there are some drawbacks.
Lo digo para que lo tengas en cuenta.|Ich sage es, damit du es berücksichtigst.|I'm saying it so that you bear it in mind.
No me has convencido del todo.|Du hast mich nicht ganz überzeugt.|You haven't completely convinced me.`,
  gram: [
    ["h", TB("Konnektoren: Indikativ oder Subjuntivo?", "Connectors: indicative or subjunctive?")],
    ["table", { head: [TB("Konnektor", "connector"), TB("Modus", "mood"), TB("Beispiel", "example")], rows: [
      ["para que, sin que, a no ser que, antes de que", TB("immer Subjuntivo", "always subjunctive"), "Te llamo para que lo sepas."],
      ["aunque", TB("Indikativ = Tatsache · Subjuntivo = Annahme, „selbst wenn“", "indicative = fact · subjunctive = assumption, “even if”"), "Aunque llueve, salgo. / Aunque llueva, saldré."],
      ["cuando, en cuanto, hasta que", TB("Subjuntivo, wenn es um die Zukunft geht", "subjunctive when it's about the future"), "Cuando llegues, llámame."],
      ["a pesar de que", TB("meist Indikativ", "usually indicative"), "A pesar de que estaba cansado, salí."]], say: 2 }],
    ["p", TB("Nach <b>a pesar de</b> (ohne que) folgt ein Nomen oder Infinitiv: A pesar <b>del</b> frío… / A pesar de <b>estar</b> cansado…", "After <b>a pesar de</b> (without que) comes a noun or an infinitive: A pesar <b>del</b> frío… / A pesar de <b>estar</b> cansado…")],
    ["tip", TB("Typischer Fehler: <b>cuando</b> + Zukunft → Subjuntivo, nicht Futur: Cuando <b>tenga</b> tiempo, te escribo (nicht <s>cuando tendré</s>).", "Typical mistake: <b>cuando</b> + future → subjunctive, not the future: Cuando <b>tenga</b> tiempo, te escribo (not <s>cuando tendré</s>).")]
  ],
  forms: { verbs: ["tener", "llegar", "saber", "poder", "ser", "estar"], tenses: ["Subjuntivo presente"] },
  drill: [
    ["Te lo explico para que lo ___.", ["entiendas", "entiendes", "entender"], 0],
    ["Cuando ___ a casa, llámame.", ["llegues", "llegas", "llegarás"], 0],
    ["___ llueva mañana, iremos de excursión.", ["Aunque", "Para que", "Sin que"], 0],
    ["Salió de casa sin que nadie lo ___.", ["viera", "vio", "ve"], 0, TB("Hauptsatz in der Vergangenheit → Subjuntivo imperfecto.", "Main clause in the past → imperfect subjunctive.")],
    ["Iré a la fiesta, a no ser que ___ que trabajar.", ["tenga", "tengo", "tendré"], 0],
    ["___ las ventajas, hay algunos inconvenientes.", ["A pesar de", "Aunque", "Sin embargo"], 0],
    ["En cuanto ___ el informe, te lo mando. (terminar, yo)", "termine"]
  ],
  talk: { t: TB("Homeoffice – ja oder nein?", "Remote work – yes or no?"), scene: TB("In der Mittagspause diskutierst du mit deiner Kollegin Elena übers Homeoffice.", "At lunch you discuss remote work with your colleague Elena."), who: "Elena", slots: {}, lines: `a|¿Tú qué opinas? ¿Teletrabajo sí o no?|Was meinst du? Homeoffice ja oder nein?|What do you think? Remote work, yes or no?
me|Desde mi punto de vista, tiene muchas ventajas.|Aus meiner Sicht hat es viele Vorteile.|From my point of view, it has a lot of advantages.|En mi opinión, tiene muchas ventajas.
a|¿Por ejemplo?|Zum Beispiel?|For example?
me|Por un lado ahorras tiempo; por otro, trabajas más tranquilo.|Einerseits sparst du Zeit, andererseits arbeitest du ruhiger.|On the one hand you save time; on the other, you work more calmly.|Ahorras tiempo y trabajas más tranquilo.
a|Ya, pero a mí me falta el contacto con el equipo.|Ja, aber mir fehlt der Kontakt zum Team.|Yes, but I miss contact with the team.
me|Te entiendo. Por eso estoy a favor, siempre que haya reuniones presenciales.|Ich verstehe dich. Deshalb bin ich dafür, solange es Präsenztreffen gibt.|I understand. That's why I'm in favour, as long as there are face-to-face meetings.|Te entiendo, pero con reuniones presenciales es perfecto.
a|Vale, pero aunque haya reuniones, no es lo mismo.|Okay, aber selbst wenn es Treffen gibt, ist es nicht dasselbe.|OK, but even if there are meetings, it's not the same.
me|Es verdad. Aun así, yo prefiero trabajar desde casa.|Das stimmt. Trotzdem arbeite ich lieber von zu Hause.|That's true. Even so, I prefer working from home.|Tienes razón, pero aun así prefiero el teletrabajo.` }
});

lesson("B2", { id: "es-b2-02", t: TB("Si lo hubiera sabido… – Irreale Vergangenheit", "Si lo hubiera sabido… – The unreal past"),
  goal: TB("Du kannst über verpasste Chancen und Entscheidungen sprechen und sagen, was du bereust.", "You can talk about missed chances and decisions and say what you regret."),
  words: `arrepentirse de|bereuen|to regret|v|Me arrepiento de no haber estudiado más.|Ich bereue, nicht mehr gelernt zu haben.|I regret not having studied more.
la oportunidad|die Gelegenheit|the opportunity|n
aprovechar|nutzen|to make the most of|v
el error|der Fehler|the mistake|n
equivocarse|sich irren|to be wrong; to make a mistake|v
la decisión|die Entscheidung|the decision|n|Fue la mejor decisión de mi vida.|Es war die beste Entscheidung meines Lebens.|It was the best decision of my life.
tomar una decisión|eine Entscheidung treffen|to make a decision|v
elegir|wählen|to choose|v
la carrera|das Studium; die Karriere|the degree; the career|n
de haberlo sabido|hätte ich es gewusst|had I known|ph|De haberlo sabido, habría venido antes.|Hätte ich es gewusst, wäre ich früher gekommen.|Had I known, I'd have come earlier.
la casualidad|der Zufall|chance; coincidence|n|Nos conocimos por casualidad.|Wir haben uns zufällig kennengelernt.|We met by chance.
el destino|das Schicksal; das Reiseziel|fate; destination|n
cambiar de opinión|seine Meinung ändern|to change one's mind|v
a tiempo|rechtzeitig|in time|ph
hacer caso a|auf jemanden hören|to listen to (advice)|v|Debería haberte hecho caso.|Ich hätte auf dich hören sollen.|I should have listened to you.
avisar|Bescheid sagen; warnen|to let know; to warn|v
¡qué rabia!|wie ärgerlich!|how annoying!|ph
perderse algo|etwas verpassen|to miss something|v|¡No me lo pierdo!|Das lasse ich mir nicht entgehen!|I won't miss it!`,
  say: `Si lo hubiera sabido, te habría avisado.|Wenn ich es gewusst hätte, hätte ich dir Bescheid gesagt.|If I'd known, I'd have told you.
Si hubiéramos salido antes, no habríamos perdido el tren.|Wenn wir früher losgegangen wären, hätten wir den Zug nicht verpasst.|If we'd left earlier, we wouldn't have missed the train.
Debería haberte hecho caso.|Ich hätte auf dich hören sollen.|I should have listened to you.
Ojalá no hubiera dicho eso.|Hätte ich das doch nur nicht gesagt.|I wish I hadn't said that.
No me arrepiento de nada.|Ich bereue nichts.|I don't regret anything.
Si no hubiera ido a esa fiesta, no te habría conocido.|Wenn ich nicht auf diese Party gegangen wäre, hätte ich dich nicht kennengelernt.|If I hadn't gone to that party, I wouldn't have met you.`,
  gram: [
    ["h", TB("Irrealer Bedingungssatz der Vergangenheit", "Unreal conditional in the past")],
    ["p", TB("<b>si + hubiera + Partizip</b>, Hauptsatz <b>habría + Partizip</b> – für Dinge, die nicht passiert sind und sich nicht mehr ändern lassen.", "<b>si + hubiera + participle</b>, main clause <b>habría + participle</b> – for things that didn't happen and can't be changed any more.")],
    ["table", { head: [TB("Person", "person"), "si …", TB("Hauptsatz", "main clause")], rows: [["yo", "hubiera ido", "habría ido"], ["tú", "hubieras ido", "habrías ido"], ["él / ella / usted", "hubiera ido", "habría ido"], ["nosotros", "hubiéramos ido", "habríamos ido"], ["vosotros", "hubierais ido", "habríais ido"], ["ellos / ustedes", "hubieran ido", "habrían ido"]], say: 1 }],
    ["h", TB("Gemischt: früher → heute", "Mixed: then → now")],
    ["p", TB("Si <b>hubiera estudiado</b> medicina, ahora <b>sería</b> médico. Die Bedingung liegt in der Vergangenheit, die Folge in der Gegenwart → Condicional simple.", "Si <b>hubiera estudiado</b> medicina, ahora <b>sería</b> médico. The condition is in the past, the result in the present → simple conditional.")],
    ["tip", TB("Gesprochen hörst du oft <b>hubiera</b> auch im Hauptsatz: Si lo hubiera sabido, lo <b>hubiera</b> hecho. Beides ist korrekt. Für Bedauern: <b>Ojalá hubiera…</b> = Hätte ich doch …", "In speech you'll often hear <b>hubiera</b> in the main clause too: Si lo hubiera sabido, lo <b>hubiera</b> hecho. Both are correct. For regrets: <b>Ojalá hubiera…</b> = I wish I had …")]
  ],
  drill: [
    ["Si lo ___ sabido, te habría llamado.", ["hubiera", "habría", "había"], 0],
    ["Si hubiéramos salido antes, no ___ perdido el tren.", ["habríamos", "habíamos", "hayamos"], 0],
    ["Si hubiera estudiado medicina, ahora ___ médico.", ["sería", "habría sido", "fuera"], 0, TB("Folge heute → Condicional simple.", "Result now → simple conditional.")],
    ["Debería ___ caso a mi madre.", ["haber hecho", "hacer", "hecho"], 0],
    ["___ haberlo sabido, habría venido.", ["De", "Si", "Por"], 0],
    ["Ojalá no ___ eso. (decir, yo)", "hubiera dicho; hubiese dicho"],
    ["Si me ___ invitado, habría ido a la fiesta. (ellos)", "hubieran; hubiesen"]
  ],
  talk: { t: TB("Das verpasste Konzert", "The missed concert"), scene: TB("Dein Freund Andrés war gestern auf einem Konzert – du hast es verpasst.", "Your friend Andrés went to a concert yesterday – you missed it."), who: "Andrés", slots: {}, lines: `a|¿Por qué no viniste ayer al concierto? ¡Fue increíble!|Warum bist du gestern nicht zum Konzert gekommen? Es war unglaublich!|Why didn't you come to the concert yesterday? It was incredible!
me|¡No sabía nada! Si lo hubiera sabido, habría ido.|Ich wusste nichts davon! Wenn ich es gewusst hätte, wäre ich gekommen.|I didn't know anything about it! If I'd known, I'd have gone.|Si lo hubiera sabido, habría venido.; ¡No lo sabía! Habría ido.
a|Te mandé un mensaje el lunes…|Ich habe dir am Montag eine Nachricht geschickt …|I sent you a message on Monday …
me|¿En serio? Ojalá hubiera mirado el móvil.|Im Ernst? Hätte ich doch nur aufs Handy geschaut.|Seriously? I wish I'd checked my phone.|Ojalá lo hubiera visto.
a|Tocaron todas sus canciones famosas.|Sie haben alle ihre bekannten Songs gespielt.|They played all their famous songs.
me|¡Qué rabia! Debería haber mirado los mensajes.|Wie ärgerlich! Ich hätte die Nachrichten lesen sollen.|How annoying! I should have read my messages.|¡Qué pena! Debería haberlo visto.
a|Bueno, el mes que viene tocan en Valencia.|Na ja, nächsten Monat spielen sie in Valencia.|Well, next month they're playing in Valencia.
me|¡Esta vez no me lo pierdo! Avísame cuando compres las entradas.|Diesmal verpasse ich es nicht! Sag mir Bescheid, wenn du die Karten kaufst.|This time I won't miss it! Let me know when you buy the tickets.|¡Esta vez voy seguro!; ¡Esta vez no me lo pierdo!` }
});

lesson("B2", { id: "es-b2-03", t: TB("Dijo que… – Indirekte Rede", "Dijo que… – Reported speech"),
  goal: TB("Du kannst wiedergeben, was jemand gesagt, gefragt oder um was er gebeten hat.", "You can report what someone said, asked or asked you to do."),
  words: `afirmar|behaupten|to state|v
comentar|erwähnen; kommentieren|to mention; to comment|v
asegurar|versichern|to assure|v|Me aseguró que lo haría.|Er versicherte mir, dass er es tun würde.|He assured me he would do it.
reconocer|zugeben; erkennen|to admit; to recognise|v
negar|leugnen; verneinen|to deny|v
prometer|versprechen|to promise|v
pedir que|bitten, dass|to ask (someone to do)|v|Me pidió que la llamara.|Sie bat mich, sie anzurufen.|She asked me to call her.
aconsejar que|raten, dass|to advise (to)|v
preguntar si|fragen, ob|to ask whether|v
el rumor|das Gerücht|the rumour|n
el cotilleo|der Klatsch|gossip|n
el mensaje de voz|die Sprachnachricht|the voice message|n
la casera|die Vermieterin|the landlady|n
el fontanero|der Klempner|the plumber|n
aquel día|an jenem Tag|that day|ph
la víspera|der Vortag; der Vorabend|the day before; the eve|n
entonces|damals; dann|then|adv
al día siguiente|am nächsten Tag|the next day|ph`,
  say: `Me dijo que estaba cansado.|Er sagte mir, dass er müde sei.|He told me he was tired.
Ana dice que viene mañana.|Ana sagt, dass sie morgen kommt.|Ana says she's coming tomorrow.
Me preguntó si quería ir al cine.|Er fragte mich, ob ich ins Kino gehen wolle.|He asked me if I wanted to go to the cinema.
Me pidió que no se lo dijera a nadie.|Sie bat mich, es niemandem zu sagen.|She asked me not to tell anyone.
Prometió que llegaría a tiempo.|Er versprach, pünktlich zu kommen.|He promised he'd be on time.
Dijo que ya había terminado el informe.|Er sagte, er habe den Bericht schon fertig.|He said he had already finished the report.`,
  gram: [
    ["h", TB("Zeitverschiebung in der indirekten Rede", "Tense shift in reported speech")],
    ["p", TB("Steht das Einleitungsverb in der Vergangenheit (<i>dijo, preguntó, contó</i>), rückt die Zeit eine Stufe zurück. Mit <i>dice que</i> (Gegenwart) bleibt alles gleich.", "If the reporting verb is in the past (<i>dijo, preguntó, contó</i>), the tense moves one step back. With <i>dice que</i> (present) nothing changes.")],
    ["table", { head: [TB("direkt", "direct"), TB("indirekt: dijo que …", "reported: dijo que …")], rows: [["«Estoy cansado.»", "estaba cansado"], ["«He terminado.»", "había terminado"], ["«Iré mañana.»", "iría al día siguiente"], ["«Llámame.»", "(me pidió) que lo llamara"], ["«¿Vienes?»", "(me preguntó) si iba"]], say: 1 }],
    ["p", TB("Auch Zeit- und Ortsangaben ändern sich: hoy → <b>aquel día</b>, mañana → <b>al día siguiente</b>, ayer → <b>el día anterior</b>, aquí → <b>allí</b>.", "Time and place words change too: hoy → <b>aquel día</b>, mañana → <b>al día siguiente</b>, ayer → <b>el día anterior</b>, aquí → <b>allí</b>.")],
    ["tip", TB("Fragen ohne Fragewort → <b>si</b>. Bitten und Aufforderungen → <b>que + Subjuntivo</b>: Me pidió que <b>fuera</b>.", "Yes/no questions → <b>si</b>. Requests and orders → <b>que + subjunctive</b>: Me pidió que <b>fuera</b>.")]
  ],
  drill: [
    ["«Estoy cansada.» → Dijo que ___ cansada.", ["estaba", "está", "estuviera"], 0],
    ["«Iré mañana.» → Dijo que ___ al día siguiente.", ["iría", "irá", "fuera"], 0],
    ["«¿Tienes tiempo?» → Me preguntó ___ tenía tiempo.", ["si", "que", "cuando"], 0],
    ["«Llámame.» → Me pidió que la ___.", ["llamara", "llamo", "llamaba"], 0],
    ["«He perdido las llaves.» → Dijo que ___ perdido las llaves.", ["había", "ha", "habría"], 0],
    ["Ana dice que ___ mañana. (venir)", "viene", TB("Einleitung im Präsens → keine Zeitverschiebung.", "Reporting verb in the present → no tense shift.")],
    ["Me aconsejó que ___ más. (descansar, yo)", "descansara; descansase"]
  ],
  talk: { t: TB("Die Sprachnachricht", "The voice message"), scene: TB("Dein Mitbewohner Sergio hat die Sprachnachricht der Vermieterin nicht gehört. Du erzählst ihm, was sie gesagt hat.", "Your flatmate Sergio hasn't heard the landlady's voice message. You tell him what she said."), who: "Sergio", slots: {}, lines: `a|¿Has escuchado el mensaje de voz de la casera?|Hast du die Sprachnachricht der Vermieterin gehört?|Have you listened to the landlady's voice message?
me|Sí. Dijo que mañana vendría el fontanero.|Ja. Sie sagte, morgen würde der Klempner kommen.|Yes. She said the plumber would come tomorrow.|Sí, dijo que vendría el fontanero mañana.
a|¿A qué hora?|Um wie viel Uhr?|What time?
me|Dijo que llegaría sobre las nueve.|Sie sagte, er würde gegen neun kommen.|She said he'd arrive around nine.|Sobre las nueve, dijo.
a|¿Y algo más?|Und sonst noch was?|Anything else?
me|Nos pidió que dejáramos la cocina libre.|Sie bat uns, die Küche frei zu lassen.|She asked us to leave the kitchen clear.|Pidió que dejáramos libre la cocina.
a|Vale. ¿Preguntó si alguien estaría en casa?|Okay. Hat sie gefragt, ob jemand zu Hause wäre?|OK. Did she ask whether someone would be at home?
me|Sí, me preguntó si podía abrirle la puerta, y le dije que sí.|Ja, sie fragte mich, ob ich ihm die Tür öffnen könne, und ich sagte ja.|Yes, she asked me if I could open the door for him, and I said yes.|Sí, y le dije que yo estaría en casa.` }
});

/* Español B2 · 4–5 */
lesson("B2", { id: "es-b2-04", t: TB("Trabajo y economía – Formelle Kommunikation", "Trabajo y economía – Formal communication"),
  goal: TB("Du kannst formelle E-Mails schreiben, Termine vereinbaren und höflich verhandeln.", "You can write formal emails, arrange appointments and negotiate politely."),
  words: `la reunión|die Besprechung|the meeting|n
el orden del día|die Tagesordnung|the agenda|n
el presupuesto|das Budget; der Kostenvoranschlag|the budget; the quote|n|Le adjunto el presupuesto.|Anbei sende ich Ihnen den Kostenvoranschlag.|Please find the quote attached.
adjuntar|anhängen (E-Mail)|to attach|v
el plazo|die Frist|the deadline|n|El plazo termina el viernes.|Die Frist endet am Freitag.|The deadline is on Friday.
la factura|die Rechnung|the invoice|n
el beneficio|der Gewinn|the profit|n
las ventas|der Umsatz; die Verkäufe|sales|n
el cliente|der Kunde|the client|n
el proveedor|der Lieferant|the supplier|n
la propuesta|der Vorschlag|the proposal|n
negociar|verhandeln|to negotiate|v
el acuerdo|die Vereinbarung|the agreement|n|Hemos llegado a un acuerdo.|Wir haben uns geeinigt.|We've reached an agreement.
concertar una cita|einen Termin vereinbaren|to arrange an appointment|v
estimado/a|sehr geehrte(r)|dear (formal)|adj
atentamente|mit freundlichen Grüßen|yours sincerely|adv
a la mayor brevedad|so bald wie möglich|as soon as possible|ph
en relación con|bezüglich|regarding|ph
el pedido|die Bestellung|the order|n`,
  say: `Estimada señora López:|Sehr geehrte Frau López,|Dear Ms López,
Le escribo en relación con su pedido.|Ich schreibe Ihnen bezüglich Ihrer Bestellung.|I'm writing regarding your order.
Le adjunto la factura del mes de marzo.|Anbei die Rechnung für März.|Please find attached the invoice for March.
Quedo a la espera de su respuesta.|Ich freue mich auf Ihre Antwort.|I look forward to your reply.
¿Le vendría bien el jueves a las diez?|Würde Ihnen Donnerstag um zehn passen?|Would Thursday at ten suit you?
Le agradecería que me enviara el presupuesto a la mayor brevedad.|Ich wäre Ihnen dankbar, wenn Sie mir den Kostenvoranschlag so bald wie möglich schicken würden.|I'd be grateful if you could send me the quote as soon as possible.
Atentamente,|Mit freundlichen Grüßen|Yours sincerely,`,
  gram: [
    ["h", TB("Höflich mit <i>usted</i>, Condicional und Subjuntivo", "Polite with <i>usted</i>, conditional and subjunctive")],
    ["p", TB("In formellen E-Mails und Telefonaten: <b>usted</b> (3. Person), Bitten mit <b>Condicional</b> und <b>le agradecería que + Subjuntivo imperfecto</b>.", "In formal emails and calls: <b>usted</b> (3rd person), requests with the <b>conditional</b> and <b>le agradecería que + imperfect subjunctive</b>.")],
    ["table", { head: [TB("direkt", "direct"), TB("höflich", "polite")], rows: [["Envíeme el presupuesto.", "¿Podría enviarme el presupuesto?"], ["Quiero una reunión.", "Me gustaría concertar una reunión."], ["Contésteme pronto.", "Le agradecería que me contestara pronto."]], say: 1 }],
    ["ex", [["Lamentamos comunicarle que…", "Wir bedauern, Ihnen mitteilen zu müssen, dass …", "We regret to inform you that …"], ["No dude en ponerse en contacto conmigo.", "Zögern Sie nicht, mich zu kontaktieren.", "Do not hesitate to contact me."], ["Un cordial saludo,", "Herzliche Grüße (formell, etwas wärmer)", "Kind regards,"]]],
    ["tip", TB("Anrede: <b>Estimado/a + Name + Doppelpunkt</b> (Estimado señor García:). Schluss: <b>Atentamente</b> (sehr formell) oder <b>Un cordial saludo</b>.", "Opening: <b>Estimado/a + name + colon</b> (Estimado señor García:). Closing: <b>Atentamente</b> (very formal) or <b>Un cordial saludo</b>.")]
  ],
  drill: [
    ["Le ___ que me enviara la factura.", ["agradecería", "agradezco", "agradeciera"], 0],
    ["¿___ usted enviarme el informe?", ["Podría", "Puedes", "Podrías"], 0, TB("usted → 3. Person.", "usted → 3rd person.")],
    ["Le escribo ___ relación con su pedido.", ["en", "con", "de"], 0],
    ["Quedo a la ___ de su respuesta.", ["espera", "esperanza", "esperar"], 0],
    ["___ señora Ruiz:", ["Estimada", "Querida", "Hola"], 0],
    ["No ___ en ponerse en contacto conmigo.", ["dude", "duda", "dudar"], 0],
    ["Hemos llegado a un ___ con el proveedor.", "acuerdo"]
  ],
  talk: { t: TB("Anruf eines Kunden", "A call from a client"), scene: TB("Herr Navarro, ein Kunde, ruft wegen eines Kostenvoranschlags an.", "Mr Navarro, a client, calls about a quote."), who: "Sr. Navarro", slots: {}, lines: `a|Buenos días, le habla Antonio Navarro, de Construcciones Navarro.|Guten Tag, hier spricht Antonio Navarro von Construcciones Navarro.|Good morning, this is Antonio Navarro from Construcciones Navarro.
me|Buenos días, señor Navarro. ¿En qué puedo ayudarle?|Guten Tag, Herr Navarro. Wie kann ich Ihnen helfen?|Good morning, Mr Navarro. How can I help you?|Buenos días. ¿En qué le puedo ayudar?
a|Le llamo en relación con el presupuesto que nos enviaron.|Ich rufe wegen des Kostenvoranschlags an, den Sie uns geschickt haben.|I'm calling about the quote you sent us.
me|Sí, claro. ¿Tiene alguna pregunta?|Ja, natürlich. Haben Sie eine Frage?|Yes, of course. Do you have any questions?|Por supuesto. ¿Tiene alguna duda?
a|Nos gustaría negociar el precio. ¿Podríamos reunirnos esta semana?|Wir würden gern über den Preis verhandeln. Könnten wir uns diese Woche treffen?|We'd like to negotiate the price. Could we meet this week?
me|Por supuesto. ¿Le vendría bien el jueves a las diez?|Natürlich. Würde Ihnen Donnerstag um zehn passen?|Of course. Would Thursday at ten suit you?|¿Qué tal el jueves a las diez?; ¿Le va bien el jueves por la mañana?
a|Perfecto. ¿Me podría mandar la dirección por correo?|Perfekt. Könnten Sie mir die Adresse per Mail schicken?|Perfect. Could you send me the address by email?
me|Se la envío ahora mismo. Hasta el jueves.|Ich schicke sie Ihnen sofort. Bis Donnerstag.|I'll send it to you right away. See you on Thursday.|Ahora mismo se la mando. Hasta el jueves.` }
});

lesson("B2", { id: "es-b2-05", t: TB("Expresiones – Redewendungen", "Expresiones – Idioms"),
  goal: TB("Du verstehst typische Redewendungen und kannst sie im Gespräch locker einsetzen.", "You understand typical idioms and can use them naturally in conversation."),
  words: `estar en las nubes|mit den Gedanken woanders sein|to have one's head in the clouds|ph|Perdona, estaba en las nubes.|Entschuldige, ich war mit den Gedanken woanders.|Sorry, I was miles away.
tomar el pelo|auf den Arm nehmen|to pull someone's leg|ph|¿Me estás tomando el pelo?|Nimmst du mich auf den Arm?|Are you pulling my leg?
costar un ojo de la cara|ein Vermögen kosten|to cost an arm and a leg|ph
ser pan comido|ein Kinderspiel sein|to be a piece of cake|ph|El examen fue pan comido.|Die Prüfung war ein Kinderspiel.|The exam was a piece of cake.
no tener pelos en la lengua|kein Blatt vor den Mund nehmen|not to mince one's words|ph
meter la pata|ins Fettnäpfchen treten|to put one's foot in it|ph|Metí la pata con mi jefa.|Ich bin bei meiner Chefin ins Fettnäpfchen getreten.|I put my foot in it with my boss.
estar hasta las narices|die Nase voll haben|to be fed up|ph
echar una mano|helfen|to lend a hand|ph|¿Me echas una mano con la mudanza?|Hilfst du mir beim Umzug?|Will you give me a hand with the move?
dar en el clavo|den Nagel auf den Kopf treffen|to hit the nail on the head|ph
ponerse las pilas|sich ranhalten|to get one's act together|ph|Si quieres aprobar, tienes que ponerte las pilas.|Wenn du bestehen willst, musst du dich ranhalten.|If you want to pass, you need to get your act together.
ir al grano|zur Sache kommen|to get to the point|ph
quedarse de piedra|sprachlos sein|to be stunned|ph
llover a cántaros|in Strömen regnen|to pour with rain|ph
no pegar ojo|kein Auge zutun|not to sleep a wink|ph|No he pegado ojo en toda la noche.|Ich habe die ganze Nacht kein Auge zugetan.|I haven't slept a wink all night.
tirar la toalla|das Handtuch werfen|to throw in the towel|ph
a la vuelta de la esquina|vor der Tür (zeitlich)|just around the corner|ph|Las vacaciones están a la vuelta de la esquina.|Die Ferien stehen vor der Tür.|The holidays are just around the corner.
más vale tarde que nunca|besser spät als nie|better late than never|ph
ser un sol|ein Schatz sein|to be a sweetheart|ph`,
  say: `¡Vamos al grano!|Kommen wir zur Sache!|Let's get to the point!
No tires la toalla, ya casi lo tienes.|Gib nicht auf, du hast es fast geschafft.|Don't give up, you've almost got it.
Esta chaqueta me ha costado un ojo de la cara.|Diese Jacke hat mich ein Vermögen gekostet.|This jacket cost me an arm and a leg.
Has dado en el clavo.|Du hast den Nagel auf den Kopf getroffen.|You've hit the nail on the head.
Estoy hasta las narices del ruido.|Ich habe die Nase voll von dem Lärm.|I'm fed up with the noise.
¡Más vale tarde que nunca!|Besser spät als nie!|Better late than never!`,
  gram: [
    ["h", TB("Redewendungen richtig einsetzen", "Using idioms correctly")],
    ["p", TB("Das Verb in einer Redewendung konjugierst du ganz normal: <b>Metí</b> la pata. Te <b>estoy tomando</b> el pelo. Reflexive Wendungen brauchen das passende Pronomen: Tienes que poner<b>te</b> las pilas.", "You conjugate the verb in an idiom as usual: <b>Metí</b> la pata. Te <b>estoy tomando</b> el pelo. Reflexive idioms need the matching pronoun: Tienes que poner<b>te</b> las pilas.")],
    ["table", { head: [TB("Spanisch", "Spanish"), TB("wörtlich", "literally"), TB("Bedeutung", "meaning")], rows: [
      ["estar en las nubes", TB("in den Wolken sein", "to be in the clouds"), TB("abwesend sein", "to be miles away")],
      ["tomar el pelo", TB("die Haare nehmen", "to take the hair"), TB("auf den Arm nehmen", "to pull someone's leg")],
      ["meter la pata", TB("die Pfote hineinstecken", "to put the paw in"), TB("ins Fettnäpfchen treten", "to put one's foot in it")],
      ["ser pan comido", TB("gegessenes Brot sein", "to be eaten bread"), TB("ein Kinderspiel sein", "to be a piece of cake")],
      ["ponerse las pilas", TB("sich die Batterien einlegen", "to put one's batteries in"), TB("sich ranhalten", "to get one's act together")]], say: 0 }],
    ["tip", TB("Im Job sparsam damit sein – <b>echar una mano</b> und <b>ir al grano</b> passen aber fast überall.", "Use them sparingly at work – but <b>echar una mano</b> and <b>ir al grano</b> fit almost anywhere.")]
  ],
  drill: [
    ["Esta cena me ha costado un ojo de la ___.", ["cara", "mano", "cabeza"], 0],
    ["¿Me estás tomando el ___?", ["pelo", "brazo", "pie"], 0],
    ["El examen fue pan ___.", ["comido", "duro", "blanco"], 0],
    ["Ayer metí la ___ con mi suegra.", ["pata", "mano", "pierna"], 0],
    ["No he pegado ___ en toda la noche.", ["ojo", "oído", "diente"], 0],
    ["Si quieres aprobar, tienes que ponerte las ___.", ["pilas", "gafas", "botas"], 0],
    ["¿Me echas una ___ con la mudanza?", "mano"]
  ],
  talk: { t: TB("Ein schlechter Tag", "A bad day"), scene: TB("Deine Kollegin Lucía hatte einen schlechten Tag. Du munterst sie auf.", "Your colleague Lucía has had a bad day. You cheer her up."), who: "Lucía", slots: {}, lines: `a|¡Uf! Estoy hasta las narices de este proyecto.|Puh! Ich habe die Nase voll von diesem Projekt.|Ugh! I'm fed up with this project.
me|Vaya. ¿Qué ha pasado?|Oje. Was ist passiert?|Oh dear. What's happened?|¿Qué pasa? Cuéntamelo.; ¿Qué te ha pasado?
a|Metí la pata en la reunión con el cliente.|Ich bin beim Kundentermin ins Fettnäpfchen getreten.|I put my foot in it in the meeting with the client.
me|Tranquila, no tires la toalla. Todos cometemos errores.|Ganz ruhig, wirf nicht das Handtuch. Wir machen alle Fehler.|Relax, don't throw in the towel. We all make mistakes.|No tires la toalla.; Tranquila, todos metemos la pata a veces.
a|Ya, pero esta noche no voy a pegar ojo.|Ja, aber heute Nacht werde ich kein Auge zutun.|Yes, but I won't sleep a wink tonight.
me|¿Quieres que te eche una mano con la presentación?|Soll ich dir mit der Präsentation helfen?|Do you want me to give you a hand with the presentation?|Te echo una mano, si quieres.
a|¿De verdad? ¡Eres un sol!|Wirklich? Du bist ein Schatz!|Really? You're a star!
me|Para eso están los amigos. ¡Venga, a ponernos las pilas!|Dafür sind Freunde da. Los, ran an die Arbeit!|That's what friends are for. Come on, let's get going!|¡Venga, manos a la obra!; Para eso estamos. ¡A trabajar!` }
});

courseReg("es", C);
})();
