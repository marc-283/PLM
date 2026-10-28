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
