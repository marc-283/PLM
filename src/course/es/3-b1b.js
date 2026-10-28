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
