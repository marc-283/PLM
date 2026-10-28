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
