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
