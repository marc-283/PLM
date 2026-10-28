/* Italiano B1 · 5–8 */
lesson("B1", { id: "it-b1-05", t: TB("L'ambiente – Umwelt und Nachhaltigkeit", "L'ambiente – Environment and sustainability"),
  goal: TB("Du kannst über Umweltprobleme diskutieren, Vorschläge machen und Notwendigkeit ausdrücken.", "You can discuss environmental problems, make suggestions and express necessity."),
  words: `l'ambiente|die Umwelt|the environment|n
il cambiamento climatico|der Klimawandel|climate change|n
il riscaldamento globale|die Erderwärmung|global warming|n
l'inquinamento|die Verschmutzung|pollution|n
i rifiuti|der Müll; die Abfälle|waste; rubbish|n
la raccolta differenziata|die Mülltrennung|recycling (separate collection)|n|Qui si fa la raccolta differenziata.|Hier wird der Müll getrennt.|Waste is separated here.
riciclare|recyceln|to recycle|v
la plastica|der Kunststoff; das Plastik|plastic|n
le energie rinnovabili|erneuerbare Energien|renewable energy|n
il pannello solare|die Solarzelle|the solar panel|n
risparmiare energia|Energie sparen|to save energy|v
sprecare|verschwenden|to waste|v
lo spreco|die Verschwendung|waste (of resources)|n
sostenibile|nachhaltig|sustainable|adj
la sostenibilità|die Nachhaltigkeit|sustainability|n
le emissioni|die Emissionen|emissions|n
la siccità|die Dürre|drought|n
proteggere|schützen|to protect|v
il consumo|der Verbrauch|consumption|n
a km zero|regional (ohne lange Transportwege)|locally sourced|ph
la borraccia|die Trinkflasche|the reusable bottle|n
l'auto elettrica|das Elektroauto|the electric car|n`,
  say: `Bisogna ridurre il consumo di plastica.|Man muss den Plastikverbrauch reduzieren.|We need to reduce plastic consumption.
È necessario che tutti facciano la loro parte.|Es ist nötig, dass alle ihren Teil beitragen.|Everyone needs to do their part.
Bisognerebbe usare di più i mezzi pubblici.|Man sollte mehr öffentliche Verkehrsmittel nutzen.|We should use public transport more.
Cerco di comprare prodotti a km zero.|Ich versuche, regionale Produkte zu kaufen.|I try to buy local products.
Non sprecare l'acqua!|Verschwende kein Wasser!|Don't waste water!
Sono d'accordo, ma non è così facile.|Einverstanden, aber so einfach ist das nicht.|I agree, but it's not that easy.
Cosa possiamo fare noi nel quotidiano?|Was können wir im Alltag tun?|What can we do in everyday life?`,
  gram: [
    ["h", TB("Notwendigkeit ausdrücken", "Expressing necessity")],
    ["table", { head: [TB("Ausdruck", "expression"), TB("+", "+"), TB("Beispiel", "example")], rows: [
      ["bisogna", TB("Infinitiv", "infinitive"), "Bisogna riciclare."], ["bisogna che", TB("Congiuntivo", "subjunctive"), "Bisogna che tu ricicli."], ["è necessario / è importante", TB("Infinitiv", "infinitive"), "È importante risparmiare energia."],
      ["è necessario che", TB("Congiuntivo", "subjunctive"), "È necessario che il governo agisca."], ["ci vuole / ci vogliono", TB("Nomen", "noun"), "Ci vogliono più parchi."], ["bisognerebbe", TB("Infinitiv (Rat)", "infinitive (advice)"), "Bisognerebbe consumare meno."]], say: 2 }],
    ["p", TB("<b>ci vuole</b> + Singular, <b>ci vogliono</b> + Plural: Ci vuole tempo. Ci vogliono due ore.", "<b>ci vuole</b> + singular, <b>ci vogliono</b> + plural: Ci vuole tempo. Ci vogliono due ore.")],
    ["tip", TB("Allgemein → Infinitiv (Bisogna agire). Für eine bestimmte Person → che + Congiuntivo (Bisogna che <b>voi</b> agiate).", "In general → infinitive (Bisogna agire). For a specific person → che + subjunctive (Bisogna che <b>voi</b> agiate).")]
  ],
  forms: { verbs: ["ridurre", "riciclare", "proteggere", "fare", "essere"], tenses: ["Congiuntivo presente"] },
  drill: [
    ["Bisogna ___ meno carne.", ["mangiare", "mangi", "mangiamo"], 0],
    ["È necessario che il governo ___ subito.", ["agisca", "agisce", "agire"], 0],
    ["Ci ___ molti anni per cambiare le abitudini.", ["vogliono", "vuole", "vuol"], 0],
    ["Ci ___ pazienza.", ["vuole", "vogliono", "vuoi"], 0],
    ["È importante che noi ___ energia. (risparmiare)", "risparmiamo"],
    ["Bisognerebbe ___ di più la bici. (usare)", "usare"],
    ["Non bisogna ___ il cibo.", ["sprecare", "spreco", "sprechi"], 0]
  ],
  talk: { t: TB("Diskussion über Klimaschutz", "A discussion about climate protection"), scene: TB("In der Mittagspause diskutierst du mit deiner Kollegin Federica, was jeder Einzelne tun kann.", "During the lunch break you discuss with your colleague Federica what each person can do."), who: "Federica", slots: {}, lines: `a|Secondo me il singolo non può fare molto. Bisogna che cambino le grandi aziende.|Meiner Meinung nach kann der Einzelne nicht viel tun. Die großen Firmen müssen sich ändern.|In my opinion individuals can't do much. The big companies need to change.
me|È vero, ma anche le piccole azioni sono importanti.|Das stimmt, aber auch kleine Handlungen sind wichtig.|That's true, but small actions matter too.|Hai ragione, però anche i piccoli gesti contano.
a|Per esempio? Tu cosa fai?|Zum Beispiel? Was machst du?|For example? What do you do?
me|Vado al lavoro in bici e cerco di non sprecare il cibo.|Ich fahre mit dem Rad zur Arbeit und versuche, keine Lebensmittel zu verschwenden.|I cycle to work and try not to waste food.|Uso la bici e non spreco il cibo.
a|Brava! Io invece prendo sempre la macchina, ci vogliono quaranta minuti in autobus.|Toll! Ich nehme dagegen immer das Auto, mit dem Bus braucht man vierzig Minuten.|Well done! I always take the car, it takes forty minutes by bus.
me|Capisco. Bisognerebbe migliorare i mezzi pubblici.|Verstehe. Man müsste die öffentlichen Verkehrsmittel verbessern.|I see. Public transport ought to be improved.|Allora bisognerebbe migliorare i trasporti pubblici.
a|Esatto. È necessario che anche il comune faccia qualcosa.|Genau. Die Stadt muss auch etwas tun.|Exactly. The city needs to do something too.
me|Sono d'accordo. Intanto possiamo fare car sharing insieme!|Einverstanden. Bis dahin können wir eine Fahrgemeinschaft bilden!|I agree. Meanwhile we can car-share!|D'accordo. Per ora possiamo andare al lavoro insieme!` }
});

lesson("B1", { id: "it-b1-06", t: TB("Relazioni – Gefühle und Doppelpronomen", "Relazioni – Feelings and combined pronouns"),
  goal: TB("Du kannst über Beziehungen und Gefühle sprechen und Doppelpronomen wie glielo und me lo benutzen.", "You can talk about relationships and feelings and use combined pronouns like glielo and me lo."),
  words: `la relazione|die Beziehung|the relationship|n
il rapporto|das Verhältnis; die Beziehung|the relationship|n
innamorarsi di|sich verlieben in|to fall in love with|v|Si è innamorato di una ragazza di Roma.|Er hat sich in eine Römerin verliebt.|He fell in love with a girl from Rome.
fidanzarsi|sich verloben|to get engaged|v
lasciarsi|sich trennen|to break up|v
litigare|streiten|to argue|v
fare pace|sich versöhnen|to make up|v
la gelosia|die Eifersucht|jealousy|n
geloso/a|eifersüchtig|jealous|adj
fidarsi di|vertrauen|to trust|v
la fiducia|das Vertrauen|trust|n
mancare|fehlen; vermissen|to miss|v|Mi manchi tanto.|Ich vermisse dich so sehr.|I miss you so much.
deluso/a|enttäuscht|disappointed|adj
arrabbiato/a|wütend|angry|adj
offeso/a|beleidigt|offended|adj
commosso/a|gerührt|moved (emotionally)|adj
orgoglioso/a|stolz|proud|adj
volere bene a|gern haben; lieb haben|to love (friends, family)|v|Ti voglio bene.|Ich hab dich lieb.|I love you (friendly).
ti amo|ich liebe dich|I love you (romantic)|ph
il/la migliore amico/a|der beste Freund / die beste Freundin|the best friend|n
lo sfogo|das Abreagieren; das Ausschütten|venting|n
consolare|trösten|to console|v`,
  say: `Te lo prometto.|Ich verspreche es dir.|I promise you.
Glielo dico domani.|Ich sage es ihm/ihr morgen.|I'll tell him/her tomorrow.
Me lo presti?|Leihst du es mir?|Will you lend it to me?
Ce ne siamo dimenticati.|Wir haben es vergessen.|We forgot about it.
Non me ne parlare!|Erzähl mir nichts davon!|Don't talk to me about it!
Ci siamo lasciati dopo tre anni.|Wir haben uns nach drei Jahren getrennt.|We broke up after three years.
Mi fido di te.|Ich vertraue dir.|I trust you.`,
  gram: [
    ["h", TB("Doppelpronomen", "Combined pronouns")],
    ["p", TB("Indirektes + direktes Pronomen: mi, ti, ci, vi werden zu <b>me, te, ce, ve</b>. <b>gli / le</b> + lo/la/li/le/ne → <b>glielo, gliela, glieli, gliele, gliene</b> (für ihm, ihr und Ihnen).", "Indirect + direct pronoun: mi, ti, ci, vi become <b>me, te, ce, ve</b>. <b>gli / le</b> + lo/la/li/le/ne → <b>glielo, gliela, glieli, gliele, gliene</b> (to him, her and you formal).")],
    ["table", { head: [TB("", ""), "+ lo", "+ la", "+ li", "+ le", "+ ne"], rows: [["mi", "me lo", "me la", "me li", "me le", "me ne"], ["ti", "te lo", "te la", "te li", "te le", "te ne"], ["gli / le", "glielo", "gliela", "glieli", "gliele", "gliene"], ["ci", "ce lo", "ce la", "ce li", "ce le", "ce ne"], ["vi", "ve lo", "ve la", "ve li", "ve le", "ve ne"]] }],
    ["ex", [["Mi dai il libro? – Sì, te lo do.", "Gibst du mir das Buch? – Ja, ich gebe es dir.", "Will you give me the book? – Yes, I'll give it to you."], ["Hai detto la verità a Marta? – No, non gliel'ho detta.", "Hast du Marta die Wahrheit gesagt? – Nein, ich habe sie ihr nicht gesagt.", "Did you tell Marta the truth? – No, I didn't tell her."]]],
    ["tip", TB("Bei reflexiven Verben mit <b>ne</b>: andarse<b>ne</b> (weggehen) → me ne vado, te ne vai, se ne va. Sehr häufig: <b>Me ne vado!</b> (Ich gehe!)", "Reflexive verbs with <b>ne</b>: andarse<b>ne</b> (to leave) → me ne vado, te ne vai, se ne va. Very common: <b>Me ne vado!</b> (I'm off!)")]
  ],
  th: "pronouns",
  drill: [
    ["Mi presti la bici? – Sì, ___ presto.", ["te la", "ti la", "te lo"], 0],
    ["Hai dato il regalo a Luca? – Sì, ___ ho dato ieri.", ["gliel'", "glie l'", "l'gli"], 0],
    ["Ci porti i biglietti? – Sì, ___ porto domani.", ["ve li", "vi li", "ve le"], 0],
    ["Hai parlato a tua madre del viaggio? – Sì, ___ ho parlato.", ["gliene", "glielo", "le ne"], 0],
    ["Mi ___ tanto quando sei lontana.", ["manchi", "manca", "mancate"], 0],
    ["Mi fido ___ te.", ["di", "a", "in"], 0],
    ["Marco e Laura si sono ___ dopo cinque anni.", ["lasciati", "lasciato", "lasciate"], 0]
  ],
  talk: { t: TB("Liebeskummer", "Heartbreak"), scene: TB("Deine Freundin Giada ist traurig und ruft dich an. Du tröstest sie.", "Your friend Giada is sad and calls you. You comfort her."), who: "Giada", slots: {}, lines: `a|Ciao… scusa se ti chiamo a quest'ora. Io e Matteo ci siamo lasciati.|Hallo … entschuldige, dass ich so spät anrufe. Matteo und ich haben uns getrennt.|Hi… sorry for calling so late. Matteo and I have broken up.
me|Oh no, mi dispiace tantissimo! Cosa è successo?|Oh nein, das tut mir so leid! Was ist passiert?|Oh no, I'm so sorry! What happened?|Mi dispiace molto! Cos'è successo?
a|Litigavamo sempre. Era gelosissimo e non si fidava di me.|Wir haben ständig gestritten. Er war total eifersüchtig und hat mir nicht vertraut.|We argued all the time. He was terribly jealous and didn't trust me.
me|Senza fiducia una relazione non funziona.|Ohne Vertrauen funktioniert keine Beziehung.|A relationship doesn't work without trust.|Senza fiducia non si va da nessuna parte.
a|Lo so… ma mi manca già. Gli ho anche regalato una chitarra per il compleanno.|Ich weiß … aber er fehlt mir schon. Ich habe ihm sogar eine Gitarre zum Geburtstag geschenkt.|I know… but I already miss him. I even gave him a guitar for his birthday.
me|E lui te l'ha restituita?|Und hat er sie dir zurückgegeben?|And did he give it back to you?|Te l'ha ridata?
a|No, se l'è tenuta! Ma va bene così.|Nein, er hat sie behalten! Aber das ist schon okay.|No, he kept it! But that's fine.
me|Domani passo da te e ti porto il gelato. Te lo prometto!|Morgen komme ich vorbei und bringe dir Eis mit. Versprochen!|I'll come round tomorrow and bring you ice cream. I promise!|Domani vengo da te con il gelato, te lo prometto.
a|Grazie, sei un tesoro. Ti voglio bene.|Danke, du bist ein Schatz. Hab dich lieb.|Thanks, you're a treasure. Love you.
me|Anch'io ti voglio bene. A domani!|Ich dich auch. Bis morgen!|Love you too. See you tomorrow!|Anch'io! A domani.` }
});

lesson("B1", { id: "it-b1-07", t: TB("Raccontare un viaggio – Trapassato und Konnektoren", "Raccontare un viaggio – Past perfect and connectors"),
  goal: TB("Du kannst eine Reise erzählen, Vorzeitigkeit ausdrücken und Sätze mit Konnektoren verbinden.", "You can tell the story of a trip, express what had happened before and link sentences with connectors."),
  words: `il viaggio|die Reise|the journey; the trip|n
l'itinerario|die Reiseroute|the itinerary|n
lo zaino|der Rucksack|the backpack|n
l'ostello|die Jugendherberge|the hostel|n
il volo|der Flug|the flight|n
cancellato/a|gestrichen; abgesagt|cancelled|adj|Il volo era stato cancellato.|Der Flug war gestrichen worden.|The flight had been cancelled.
la coincidenza|der Anschluss (Verkehr)|the connection|n
il bagaglio|das Gepäck|the luggage|n
smarrito/a|verloren|lost|adj
l'avventura|das Abenteuer|the adventure|n
il paesaggio|die Landschaft|the landscape|n
mozzafiato|atemberaubend|breathtaking|adj
appena|sobald; kaum|as soon as; just|adv|Appena siamo arrivati, ha cominciato a piovere.|Kaum waren wir angekommen, fing es an zu regnen.|As soon as we arrived, it started to rain.
dopo che|nachdem|after|x
siccome|da (weil)|since; as|x
quindi|also; deshalb|so; therefore|x
infatti|tatsächlich; nämlich|in fact; indeed|x
invece|stattdessen; dagegen|instead; on the other hand|adv
nonostante|trotz|despite|x
comunque|jedenfalls; trotzdem|anyway; however|adv
alla fine|am Ende|in the end|ph
indimenticabile|unvergesslich|unforgettable|adj`,
  say: `Quando siamo arrivati, il treno era già partito.|Als wir ankamen, war der Zug schon abgefahren.|When we arrived, the train had already left.
Non avevo mai visto un paesaggio così.|So eine Landschaft hatte ich noch nie gesehen.|I had never seen a landscape like that.
Siccome pioveva, siamo rimasti in albergo.|Da es regnete, sind wir im Hotel geblieben.|As it was raining, we stayed at the hotel.
Dopo che avevamo cenato, siamo andati in spiaggia.|Nachdem wir zu Abend gegessen hatten, gingen wir an den Strand.|After we had had dinner, we went to the beach.
Nonostante la pioggia, è stato un viaggio fantastico.|Trotz des Regens war es eine fantastische Reise.|Despite the rain, it was a fantastic trip.
Alla fine tutto è andato bene.|Am Ende ist alles gut gegangen.|In the end everything turned out fine.
È stata un'esperienza indimenticabile.|Es war eine unvergessliche Erfahrung.|It was an unforgettable experience.`,
  gram: [
    ["h", TB("Trapassato prossimo: Vorvergangenheit", "Trapassato prossimo: past perfect")],
    ["p", TB("<b>Imperfetto von avere/essere + Partizip</b>: avevo visto, ero partito/a. Für etwas, das <b>vor</b> einem anderen Ereignis in der Vergangenheit passiert war.", "<b>Imperfect of avere/essere + participle</b>: avevo visto, ero partito/a. For something that had happened <b>before</b> another past event.")],
    ["ex", [["Quando sono arrivato, Anna era già uscita.", "Als ich ankam, war Anna schon gegangen.", "When I arrived, Anna had already gone out."], ["Mi ha detto che aveva perso il passaporto.", "Er hat mir gesagt, dass er seinen Pass verloren hatte.", "He told me he had lost his passport."]]],
    ["h", TB("Konnektoren", "Connectors")],
    ["table", { head: [TB("Funktion", "function"), TB("Konnektoren", "connectors")], rows: [
      [TB("Zeit", "time"), "quando, appena, mentre, dopo che, prima di, poi"], [TB("Grund", "cause"), "perché, siccome, dato che, visto che"], [TB("Folge", "consequence"), "quindi, perciò, così"], [TB("Gegensatz", "contrast"), "ma, però, invece, comunque, nonostante, anche se"]] }],
    ["tip", TB("<b>siccome</b> steht am Satzanfang, <b>perché</b> in der Mitte: <i>Siccome</i> ero stanco, sono andato a letto. = Sono andato a letto <i>perché</i> ero stanco.", "<b>siccome</b> comes at the start of the sentence, <b>perché</b> in the middle: <i>Siccome</i> ero stanco, sono andato a letto. = Sono andato a letto <i>perché</i> ero stanco.")]
  ],
  th: "ppimp",
  drill: [
    ["Quando siamo arrivati al cinema, il film ___ già iniziato.", ["era", "aveva", "è"], 0],
    ["Non ___ mai mangiato il sushi prima di quel viaggio.", ["avevo", "ero", "ho"], 0],
    ["Mi ha raccontato che ___ in Giappone l'anno prima. (andare, lei)", "era andata"],
    ["___ pioveva, abbiamo preso un taxi.", ["Siccome", "Perché", "Quindi"], 0],
    ["Ero stanchissimo, ___ sono andato a letto presto.", ["quindi", "siccome", "nonostante"], 0],
    ["___ il ritardo, siamo arrivati in tempo per la cena.", ["Nonostante", "Siccome", "Appena"], 0],
    ["___ sono arrivato a casa, ti ho chiamato.", ["Appena", "Siccome", "Invece"], 0]
  ],
  talk: { t: TB("Reisebericht", "Travel story"), scene: TB("Dein Freund Tommaso will alles über deine Reise durch Sizilien wissen.", "Your friend Tommaso wants to hear all about your trip around Sicily."), who: "Tommaso", slots: {}, lines: `a|Allora, com'è andato il viaggio in Sicilia?|Und, wie war die Reise nach Sizilien?|So, how was the trip to Sicily?
me|Fantastico, anche se l'inizio è stato un disastro.|Fantastisch, auch wenn der Anfang eine Katastrophe war.|Fantastic, even though the start was a disaster.|È stato fantastico, ma l'inizio è stato un disastro.
a|Perché? Cosa è successo?|Warum? Was ist passiert?|Why? What happened?
me|Quando sono arrivato all'aeroporto, il volo era stato cancellato.|Als ich am Flughafen ankam, war der Flug gestrichen worden.|When I got to the airport, the flight had been cancelled.|Quando sono arrivata, il volo era stato cancellato.
a|Che sfortuna! E allora?|So ein Pech! Und dann?|What bad luck! And then?
me|Siccome non c'erano altri voli, ho preso il treno notturno.|Da es keine anderen Flüge gab, habe ich den Nachtzug genommen.|As there were no other flights, I took the night train.|Non c'erano altri voli, quindi ho preso il treno di notte.
a|Il treno fino in Sicilia? Che avventura!|Mit dem Zug bis nach Sizilien? Was für ein Abenteuer!|The train all the way to Sicily? What an adventure!
me|Sì, e appena siamo arrivati a Palermo, è uscito il sole.|Ja, und kaum waren wir in Palermo, kam die Sonne raus.|Yes, and as soon as we arrived in Palermo the sun came out.|Sì, e appena sono arrivato a Palermo c'era il sole.
a|E cosa ti è piaciuto di più?|Und was hat dir am besten gefallen?|And what did you like best?
me|L'Etna: un paesaggio mozzafiato che non avevo mai visto prima.|Der Ätna: eine atemberaubende Landschaft, wie ich sie noch nie gesehen hatte.|Etna: a breathtaking landscape like nothing I'd ever seen before.|L'Etna. Non avevo mai visto un paesaggio così.` }
});

lesson("B1", { id: "it-b1-08", t: TB("In cucina – Rezepte und Gerundium", "In cucina – Recipes and the gerund"),
  goal: TB("Du kannst ein Rezept verstehen und erklären und das Gerundium benutzen.", "You can understand and explain a recipe and use the gerund."),
  words: `la ricetta|das Rezept|the recipe|n
gli ingredienti|die Zutaten|the ingredients|n
tagliare|schneiden|to cut|v
tritare|hacken|to chop finely|v
soffriggere|andünsten|to fry lightly|v
bollire|kochen (sieden)|to boil|v
cuocere|garen; kochen|to cook|v|Fate cuocere la pasta per dieci minuti.|Lasst die Nudeln zehn Minuten kochen.|Cook the pasta for ten minutes.
mescolare|umrühren|to stir|v
aggiungere|hinzufügen|to add|v
scolare|abgießen|to drain|v
mettere in forno|in den Ofen schieben|to put in the oven|v
assaggiare|probieren|to taste|v
la pentola|der Topf|the pot|n
la padella|die Pfanne|the frying pan|n
il fuoco|das Feuer; die Hitze (Herd)|the heat (hob)|n|a fuoco lento|bei schwacher Hitze|on a low heat
q.b. (quanto basta)|nach Bedarf|to taste; as needed|ph
l'olio d'oliva|das Olivenöl|olive oil|n
l'aglio|der Knoblauch|garlic|n
la cipolla|die Zwiebel|the onion|n
il sale|das Salz|salt|n
il pepe|der Pfeffer|pepper|n
al dente|bissfest|al dente|ph`,
  say: `Mentre l'acqua bolle, taglia la cipolla.|Während das Wasser kocht, schneide die Zwiebel.|While the water boils, chop the onion.
Si mescola tutto a fuoco lento.|Man rührt alles bei schwacher Hitze um.|Stir everything over a low heat.
Aggiungendo un po' di peperoncino, diventa più saporito.|Mit etwas Chili wird es würziger.|Adding a little chilli makes it tastier.
La pasta va scolata al dente.|Die Nudeln müssen bissfest abgegossen werden.|The pasta should be drained al dente.
Sbagliando s'impara.|Aus Fehlern lernt man.|You learn from your mistakes.
Assaggia e aggiusta di sale.|Probier und schmeck mit Salz ab.|Taste and adjust the salt.
Buon appetito!|Guten Appetit!|Enjoy your meal!`,
  gram: [
    ["h", TB("Das Gerundium", "The gerund")],
    ["p", TB("-are → <b>-ando</b>, -ere/-ire → <b>-endo</b> (parlando, prendendo, dormendo). Es drückt <b>Gleichzeitigkeit</b>, <b>Art und Weise</b> oder <b>Bedingung</b> aus und hat dasselbe Subjekt wie der Hauptsatz.", "-are → <b>-ando</b>, -ere/-ire → <b>-endo</b> (parlando, prendendo, dormendo). It expresses <b>simultaneity</b>, <b>manner</b> or <b>condition</b> and has the same subject as the main clause.")],
    ["ex", [["Cucino ascoltando la radio.", "Ich koche und höre dabei Radio.", "I cook while listening to the radio."], ["Studiando ogni giorno, imparerai presto.", "Wenn du jeden Tag lernst, lernst du es schnell.", "By studying every day, you'll learn quickly."], ["Ho conosciuto Anna lavorando a Milano.", "Ich habe Anna kennengelernt, als ich in Mailand arbeitete.", "I met Anna while working in Milan."]]],
    ["h", TB("Rezepte: <i>si</i>, Imperativ, <i>andare</i> + Partizip", "Recipes: <i>si</i>, imperative, <i>andare</i> + participle")],
    ["p", TB("Rezepte stehen im Imperativ (taglia, tagliate), mit <b>si</b> (si taglia) oder mit <b>andare + Partizip</b> = muss gemacht werden: la pasta <b>va scolata</b>.", "Recipes use the imperative (taglia, tagliate), <b>si</b> (si taglia) or <b>andare + participle</b> = must be done: la pasta <b>va scolata</b>.")],
    ["tip", TB("Unregelmäßige Gerundien: fare → <b>facendo</b>, dire → <b>dicendo</b>, bere → <b>bevendo</b>, porre → <b>ponendo</b>, tradurre → <b>traducendo</b>.", "Irregular gerunds: fare → <b>facendo</b>, dire → <b>dicendo</b>, bere → <b>bevendo</b>, porre → <b>ponendo</b>, tradurre → <b>traducendo</b>.")]
  ],
  drill: [
    ["Ho imparato l'italiano ___ i film. (guardare)", "guardando"],
    ["___ la pasta, l'acqua deve bollire. (Prima di …)", ["Prima di buttare", "Buttando", "Buttato"], 0],
    ["Si impara molto ___ errori. (fare)", "facendo"],
    ["La cipolla va ___ finemente.", ["tritata", "tritato", "tritando"], 0],
    ["Il sugo ___ cuocere per venti minuti.", ["si lascia", "si lasciano", "lascia"], 0],
    ["Le patate vanno ___ in forno.", ["messe", "messo", "mettendo"], 0],
    ["___ sbaglia s'impara. (Sprichwort)", ["Sbagliando", "Sbagliato", "Sbagliare"], 0]
  ],
  talk: { t: TB("Kochkurs bei Nonna Rosa", "Cooking lesson with Nonna Rosa"), scene: TB("Nonna Rosa zeigt dir, wie man echte Pasta all'amatriciana kocht.", "Nonna Rosa shows you how to make real pasta all'amatriciana."), who: "Nonna Rosa", slots: {}, lines: `a|Allora, prima di tutto metti l'acqua a bollire in una pentola grande.|Also, zuerst setzt du Wasser in einem großen Topf auf.|Right, first of all put water on to boil in a big pot.
me|Fatto! E poi cosa devo fare?|Erledigt! Und was muss ich dann machen?|Done! And then what should I do?|Ok! E adesso?
a|Taglia il guanciale a striscioline e mettilo in padella, senza olio.|Schneide den Guanciale in Streifen und gib ihn ohne Öl in die Pfanne.|Cut the guanciale into strips and put it in the pan, without oil.
me|Senza olio? Davvero?|Ohne Öl? Wirklich?|Without oil? Really?|Niente olio?
a|Sì, il guanciale ha già abbastanza grasso. Cuocilo a fuoco lento finché diventa croccante.|Ja, der Guanciale hat schon genug Fett. Brate ihn bei schwacher Hitze, bis er knusprig ist.|Yes, the guanciale has enough fat already. Cook it over a low heat until it's crispy.
me|E la cipolla? L'aggiungo adesso?|Und die Zwiebel? Füge ich sie jetzt hinzu?|And the onion? Do I add it now?|Aggiungo la cipolla?
a|Mamma mia, no! Nell'amatriciana vera la cipolla non si mette!|Um Himmels willen, nein! In eine echte Amatriciana kommt keine Zwiebel!|Good heavens, no! You don't put onion in a real amatriciana!
me|Scusi, nonna! Allora aggiungo il pomodoro?|Entschuldigung, Oma! Dann gebe ich die Tomate dazu?|Sorry, nonna! So do I add the tomato?|Va bene! Metto il pomodoro?
a|Bravo! Mescolando ogni tanto, lascia cuocere per un quarto d'ora.|Sehr gut! Lass es eine Viertelstunde köcheln und rühr ab und zu um.|Good! Let it cook for a quarter of an hour, stirring now and then.
me|Ho capito. E la pasta va scolata al dente, vero?|Verstanden. Und die Nudeln müssen bissfest abgegossen werden, oder?|Got it. And the pasta has to be drained al dente, right?|E la pasta la scolo al dente?` }
});
