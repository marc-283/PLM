/* Italiano A1 · 9–12 */
lesson("A1", { id: "it-a1-09", t: TB("Fare la spesa – Einkaufen und Mengen", "Fare la spesa – Shopping and quantities"),
  goal: TB("Du kannst auf dem Markt einkaufen, Mengen angeben und nach Preisen fragen.", "You can shop at the market, give quantities and ask about prices."),
  words: `il mercato|der Markt|the market|n
la frutta|das Obst|fruit|n
la verdura|das Gemüse|vegetables|n
la mela|der Apfel|the apple|n
l'arancia|die Orange|the orange|n
il pomodoro|die Tomate|the tomato|n|Vorrei un chilo di pomodori.|Ich hätte gern ein Kilo Tomaten.|I'd like a kilo of tomatoes.
la patata|die Kartoffel|the potato|n
la zucchina|die Zucchini|the courgette|n
il pane|das Brot|bread|n
il formaggio|der Käse|cheese|n
il prosciutto|der Schinken|ham|n|Due etti di prosciutto crudo, per favore.|200 Gramm rohen Schinken, bitte.|200 grams of cured ham, please.
l'uovo (le uova)|das Ei (die Eier)|the egg (the eggs)|n
la pasta|die Nudeln|pasta|n
il riso|der Reis|rice|n
un chilo|ein Kilo|a kilo|ph
mezzo chilo|ein halbes Kilo|half a kilo|ph
un etto|hundert Gramm|a hundred grams|ph
una bottiglia|eine Flasche|a bottle|ph
un pacco|eine Packung|a packet|ph
altro|sonst noch etwas; anderes|anything else; other|x|Altro?|Sonst noch etwas?|Anything else?
basta così|das ist alles|that's all|ph
caro/a|teuer|expensive|adj
fresco/a|frisch|fresh|adj|Le fragole sono freschissime.|Die Erdbeeren sind ganz frisch.|The strawberries are very fresh.
maturo/a|reif|ripe|adj`,
  say: `Quanto costano le mele?|Wie viel kosten die Äpfel?|How much are the apples?
Costano due euro al chilo.|Sie kosten zwei Euro pro Kilo.|They're two euros a kilo.
Vorrei mezzo chilo di zucchine.|Ich hätte gern ein halbes Kilo Zucchini.|I'd like half a kilo of courgettes.
Mi dà anche del pane?|Geben Sie mir auch etwas Brot?|Could you give me some bread too?
Basta così, grazie.|Das ist alles, danke.|That's all, thanks.
Ha delle borse?|Haben Sie Tüten?|Do you have any bags?
Sono maturi questi pomodori?|Sind diese Tomaten reif?|Are these tomatoes ripe?`,
  gram: [
    ["h", TB("Mengen: un chilo di …", "Quantities: un chilo di …")],
    ["p", TB("Nach einer Mengenangabe folgt <b>di</b> ohne Artikel: <b>un chilo di</b> mele, <b>una bottiglia di</b> vino, <b>due etti di</b> formaggio.", "After a quantity comes <b>di</b> without an article: <b>un chilo di</b> mele, <b>una bottiglia di</b> vino, <b>due etti di</b> formaggio.")],
    ["h", TB("Der Teilungsartikel: del, della, dei …", "The partitive: del, della, dei …")],
    ["p", TB("„Etwas / einige“ = <b>di + Artikel</b>: <b>del</b> pane (etwas Brot), <b>della</b> frutta, <b>dei</b> pomodori (ein paar Tomaten), <b>delle</b> uova.", "\"Some\" = <b>di + article</b>: <b>del</b> pane (some bread), <b>della</b> frutta, <b>dei</b> pomodori (some tomatoes), <b>delle</b> uova.")],
    ["h", TB("Plural der Nomen", "Plural of nouns")],
    ["table", { head: [TB("Singular", "singular"), TB("Plural", "plural")], rows: [["il pomodor<b>o</b>", "i pomodor<b>i</b>"], ["la mel<b>a</b>", "le mel<b>e</b>"], ["il pan<b>e</b> / la lezion<b>e</b>", "i pan<b>i</b> / le lezion<b>i</b>"], ["l'uovo", "le uova (!)"]] }],
    ["tip", TB("Ein <b>etto</b> = 100 Gramm. Beim Metzger oder an der Käsetheke bestellt man in Etti: <b>tre etti di mortadella</b>.", "One <b>etto</b> = 100 grams. At the deli counter you order in etti: <b>tre etti di mortadella</b>.")]
  ],
  th: "nouns", quiz: ["it-plural"],
  drill: [
    ["Vorrei un chilo ___ arance.", ["di", "delle", "dei"], 0],
    ["Compro ___ pane per stasera.", ["del", "di", "dello"], 0],
    ["Prendo anche ___ uova.", ["delle", "dei", "degli"], 0],
    ["Quanto ___ le zucchine?", ["costano", "costa", "costi"], 0],
    ["Una bottiglia ___ vino rosso.", ["di", "del", "da"], 0],
    ["la mela → le ___", "mele"],
    ["il pomodoro → i ___", "pomodori"]
  ],
  talk: { t: TB("Am Marktstand", "At the market stall"), scene: TB("Samstagmorgen auf dem Markt in Bologna. Der Händler Gianni ruft dich an seinen Stand.", "Saturday morning at the market in Bologna. The stallholder Gianni calls you over."), who: "Gianni", slots: {}, lines: `a|Buongiorno! Cosa le do oggi?|Guten Morgen! Was darf's heute sein?|Good morning! What can I get you today?
me|Buongiorno! Quanto costano i pomodori?|Guten Morgen! Wie viel kosten die Tomaten?|Good morning! How much are the tomatoes?|Quanto costano questi pomodori?; Buongiorno, quanto vengono i pomodori?
a|Due euro e cinquanta al chilo. Sono freschissimi!|Zwei Euro fünfzig pro Kilo. Ganz frisch!|Two euros fifty a kilo. Very fresh!
me|Allora vorrei un chilo di pomodori.|Dann hätte ich gern ein Kilo Tomaten.|Then I'd like a kilo of tomatoes.|Un chilo di pomodori, per favore.; Vorrei un chilo di pomodori, per favore.
a|Ecco qua. Altro?|Bitte schön. Sonst noch etwas?|Here you go. Anything else?
me|Sì, mezzo chilo di zucchine e due etti di parmigiano.|Ja, ein halbes Kilo Zucchini und 200 Gramm Parmesan.|Yes, half a kilo of courgettes and 200 grams of parmesan.|Mezzo chilo di zucchine e due etti di parmigiano, per favore.
a|Perfetto. Nient'altro?|Perfekt. Sonst nichts?|Perfect. Nothing else?
me|No, basta così. Quant'è?|Nein, das ist alles. Was macht das?|No, that's all. How much is it?|Basta così, grazie. Quanto le devo?; No grazie, quant'è?
a|Sono nove euro in tutto.|Das macht neun Euro insgesamt.|That's nine euros altogether.
me|Ecco a lei. Buona giornata!|Bitte schön. Schönen Tag noch!|Here you are. Have a nice day!|Ecco dieci euro.; Ecco, grazie e buona giornata!` }
});

lesson("A1", { id: "it-a1-10", t: TB("Al ristorante – Essen bestellen", "Al ristorante – Ordering a meal"),
  goal: TB("Du kannst einen Tisch reservieren, im Restaurant bestellen und die Rechnung verlangen.", "You can book a table, order in a restaurant and ask for the bill."),
  words: `il menù|die Speisekarte|the menu|n
l'antipasto|die Vorspeise|the starter|n
il primo|der erste Gang (Pasta, Risotto)|the first course|n|Come primo prendo le lasagne.|Als ersten Gang nehme ich Lasagne.|For my first course I'll have the lasagne.
il secondo|der Hauptgang (Fleisch, Fisch)|the main course|n
il contorno|die Beilage|the side dish|n
il dolce|der Nachtisch|the dessert|n
la carne|das Fleisch|meat|n
il pesce|der Fisch|fish|n
vegetariano/a|vegetarisch|vegetarian|adj|Avete piatti vegetariani?|Haben Sie vegetarische Gerichte?|Do you have vegetarian dishes?
l'insalata|der Salat|the salad|n
il vino della casa|der Hauswein|the house wine|n
il cameriere|der Kellner|the waiter|n
la cameriera|die Kellnerin|the waitress|n
prenotare|reservieren|to book|v
un tavolo per due|ein Tisch für zwei|a table for two|ph
il piatto|der Teller; das Gericht|the plate; the dish|n
il conto|die Rechnung|the bill|n
il coperto|das Gedeck (Brot, Besteck)|the cover charge|n
buon appetito|guten Appetit|enjoy your meal|ph
delizioso/a|köstlich|delicious|adj
la specialità|die Spezialität|the speciality|n|Qual è la specialità della casa?|Was ist die Spezialität des Hauses?|What's the house speciality?
allergico/a|allergisch|allergic|adj`,
  say: `Vorrei prenotare un tavolo per due, per stasera alle otto.|Ich möchte einen Tisch für zwei reservieren, heute Abend um acht.|I'd like to book a table for two, for eight o'clock tonight.
Possiamo vedere il menù?|Können wir die Karte sehen?|Can we see the menu?
Cosa ci consiglia?|Was empfehlen Sie uns?|What do you recommend?
Per me un risotto ai funghi.|Für mich ein Pilzrisotto.|A mushroom risotto for me.
Sono allergico alle noci.|Ich bin allergisch gegen Nüsse.|I'm allergic to nuts.
Il conto, per favore.|Die Rechnung, bitte.|The bill, please.
Era tutto buonissimo!|Es war alles sehr lecker!|Everything was delicious!`,
  gram: [
    ["h", TB("Modalverben: volere, potere, dovere", "Modal verbs: volere, potere, dovere")],
    ["conj", { verbs: ["volere", "potere", "dovere"], tenses: ["Presente"] }],
    ["p", TB("Danach folgt direkt der Infinitiv: <b>Posso pagare?</b> (Darf ich zahlen?) – <b>Vogliamo ordinare.</b> (Wir wollen bestellen.) Höflicher als <i>voglio</i> ist <b>vorrei</b>.", "They're followed directly by the infinitive: <b>Posso pagare?</b> (May I pay?) – <b>Vogliamo ordinare.</b> (We want to order.) More polite than <i>voglio</i> is <b>vorrei</b>.")],
    ["h", TB("Bestimmter Artikel im Plural", "Definite article in the plural")],
    ["table", { head: [TB("Singular", "singular"), TB("Plural", "plural")], rows: [["il primo", "i primi"], ["lo spaghetto", "gli spaghetti"], ["l'antipasto", "gli antipasti"], ["la pizza", "le pizze"], ["l'insalata", "le insalate"]], say: 1 }],
    ["tip", TB("Trinkgeld ist in Italien kein Muss – oft steht schon <b>il coperto</b> (Gedeck) auf der Rechnung.", "Tipping isn't a must in Italy – the bill often already includes <b>il coperto</b> (cover charge).")]
  ],
  th: "irregolari", quiz: ["it-art-def"], forms: { verbs: ["volere", "potere", "dovere"], tenses: ["Presente"] },
  drill: [
    ["___ pagare con la carta?", ["Posso", "Voglio", "Devo"], 0],
    ["Noi ___ ordinare, per favore.", ["vorremmo", "vorrei", "vorrebbe"], 0],
    ["Tu cosa ___ mangiare?", ["vuoi", "vuole", "voglio"], 0],
    ["Scusi, ___ portare il conto?", ["può", "puoi", "posso"], 0, TB("Höflich (Lei) → 3. Person: può.", "Formal (Lei) → 3rd person: può.")],
    ["Prendiamo ___ spaghetti alle vongole.", ["gli", "i", "le"], 0],
    ["Come secondo prendo il ___ alla griglia.", ["pesce", "dolce", "conto"], 0],
    ["Loro ___ partire presto. (dovere)", "devono"]
  ],
  talk: { t: TB("Im Restaurant", "At the restaurant"), scene: TB("Abendessen in einer Trattoria in Rom. Der Kellner Roberto kommt an deinen Tisch.", "Dinner in a trattoria in Rome. Roberto, the waiter, comes to your table."), who: "Roberto", slots: { food: "la carbonara" }, lines: `a|Buonasera! Avete già scelto?|Guten Abend! Haben Sie schon gewählt?|Good evening! Have you chosen already?
me|Sì. Cosa ci consiglia come primo?|Ja. Was empfehlen Sie uns als ersten Gang?|Yes. What do you recommend for the first course?|Cosa ci consiglia?; Sì, cosa consiglia come primo?
a|La carbonara è la specialità della casa.|Die Carbonara ist die Spezialität des Hauses.|The carbonara is the house speciality.
me|Perfetto, per me una carbonara.|Perfekt, für mich eine Carbonara.|Perfect, a carbonara for me.|Allora prendo la carbonara.; Va bene, una carbonara per me.
a|E da bere?|Und zu trinken?|And to drink?
me|Una bottiglia d'acqua naturale e un bicchiere di vino rosso.|Eine Flasche stilles Wasser und ein Glas Rotwein.|A bottle of still water and a glass of red wine.|Un'acqua naturale e un bicchiere di rosso.
a|Benissimo. Desiderate anche un secondo?|Sehr gut. Möchten Sie auch einen Hauptgang?|Very good. Would you like a main course too?
me|No, grazie. Forse dopo prendiamo un dolce.|Nein, danke. Vielleicht nehmen wir danach einen Nachtisch.|No, thanks. Maybe we'll have a dessert afterwards.|No grazie, magari dopo un dolce.
a|Ecco il tiramisù. Buon appetito!|Hier ist das Tiramisu. Guten Appetit!|Here's the tiramisù. Enjoy!
me|Grazie! Era tutto buonissimo. Il conto, per favore.|Danke! Es war alles sehr lecker. Die Rechnung, bitte.|Thanks! Everything was delicious. The bill, please.|Era tutto delizioso! Ci porta il conto, per favore?` }
});

lesson("A1", { id: "it-a1-11", t: TB("Il weekend scorso – Passato prossimo", "Il weekend scorso – The passato prossimo"),
  goal: TB("Du kannst erzählen, was du am Wochenende gemacht hast, mit avere und essere.", "You can say what you did at the weekend, using avere and essere."),
  words: `ieri|gestern|yesterday|adv|Ieri sono andato al mare.|Gestern bin ich ans Meer gefahren.|Yesterday I went to the seaside.
l'altro ieri|vorgestern|the day before yesterday|adv
la settimana scorsa|letzte Woche|last week|ph
il fine settimana scorso|letztes Wochenende|last weekend|ph
lunedì|Montag|Monday|n
martedì|Dienstag|Tuesday|n
mercoledì|Mittwoch|Wednesday|n
giovedì|Donnerstag|Thursday|n
venerdì|Freitag|Friday|n
sabato|Samstag|Saturday|n
domenica|Sonntag|Sunday|n
fare una passeggiata|einen Spaziergang machen|to go for a walk|v
andare al mare|ans Meer fahren|to go to the seaside|v
visitare|besichtigen; besuchen (Ort)|to visit|v
incontrare|treffen|to meet|v|Ho incontrato Paola in centro.|Ich habe Paola in der Stadt getroffen.|I met Paola in town.
divertirsi|Spaß haben|to have fun|v
riposarsi|sich ausruhen|to rest|v
la festa|die Party; das Fest|the party|n
il concerto|das Konzert|the concert|n
la gita|der Ausflug|the trip; the outing|n
rimanere a casa|zu Hause bleiben|to stay at home|v
stanco/a|müde|tired|adj
è stato bellissimo|es war wunderschön|it was wonderful|ph`,
  say: `Cosa hai fatto nel fine settimana?|Was hast du am Wochenende gemacht?|What did you do at the weekend?
Sabato sono andato a una festa.|Am Samstag war ich auf einer Party.|On Saturday I went to a party.
Domenica ho dormito fino a tardi.|Am Sonntag habe ich lange geschlafen.|On Sunday I slept in.
Siamo rimasti a casa.|Wir sind zu Hause geblieben.|We stayed at home.
Ci siamo divertiti un sacco.|Wir hatten riesigen Spaß.|We had a great time.
Hai visto la partita?|Hast du das Spiel gesehen?|Did you see the match?
Non ho fatto niente di speciale.|Ich habe nichts Besonderes gemacht.|I didn't do anything special.`,
  gram: [
    ["h", TB("Passato prossimo = avere/essere + Partizip", "Passato prossimo = avere/essere + participle")],
    ["p", TB("Partizip: -are → <b>-ato</b>, -ere → <b>-uto</b>, -ire → <b>-ito</b>. Viele Verben sind unregelmäßig: fare → <b>fatto</b>, vedere → <b>visto</b>, prendere → <b>preso</b>, essere → <b>stato</b>.", "Participle: -are → <b>-ato</b>, -ere → <b>-uto</b>, -ire → <b>-ito</b>. Many verbs are irregular: fare → <b>fatto</b>, vedere → <b>visto</b>, prendere → <b>preso</b>, essere → <b>stato</b>.")],
    ["p", TB("Die meisten Verben bilden es mit <b>avere</b>. Mit <b>essere</b>: Verben der Bewegung und Veränderung (andare, venire, partire, arrivare, rimanere, diventare …) und alle reflexiven Verben. Dann passt sich das Partizip an: Giulia è andat<b>a</b>, siamo andat<b>i</b>.", "Most verbs use <b>avere</b>. With <b>essere</b>: verbs of movement and change (andare, venire, partire, arrivare, rimanere, diventare …) and all reflexive verbs. Then the participle agrees: Giulia è andat<b>a</b>, siamo andat<b>i</b>.")],
    ["conj", { verbs: ["mangiare", "andare", "divertirsi"], tenses: ["Passato prossimo"] }],
    ["quiz", "it-aux"]
  ],
  th: "pp", quiz: ["it-aux", "it-pp"], forms: { verbs: ["parlare", "andare", "fare", "vedere", "partire", "rimanere"], tenses: ["Passato prossimo"] },
  drill: [
    ["Ieri ___ mangiato una pizza.", ["ho", "sono", "è"], 0],
    ["Sabato ___ andata al cinema.", ["sono", "ho", "hai"], 0],
    ["Giulia è ___ a casa.", ["rimasta", "rimasto", "rimasti"], 0],
    ["Noi ci ___ divertiti molto.", ["siamo", "abbiamo", "sono"], 0],
    ["Cosa hai ___ domenica? (fare)", "fatto"],
    ["Hai ___ il nuovo film? (vedere)", "visto"],
    ["Marco e Luca sono ___ alle dieci. (arrivare)", "arrivati"]
  ],
  talk: { t: TB("Montagmorgen im Büro", "Monday morning at the office"), scene: TB("Montagmorgen an der Kaffeemaschine. Deine Kollegin Sara fragt nach deinem Wochenende.", "Monday morning at the coffee machine. Your colleague Sara asks about your weekend."), who: "Sara", slots: {}, lines: `a|Ciao! Com'è andato il fine settimana?|Hallo! Wie war das Wochenende?|Hi! How was the weekend?
me|Benissimo, grazie! Sabato sono andato al mare.|Sehr gut, danke! Am Samstag bin ich ans Meer gefahren.|Great, thanks! On Saturday I went to the seaside.|Bene! Sabato sono andata al mare.; Molto bene, sabato sono andato al mare.
a|Che bello! Con chi?|Wie schön! Mit wem?|How nice! Who with?
me|Con due amici. Abbiamo fatto il bagno e mangiato il pesce.|Mit zwei Freunden. Wir sind schwimmen gegangen und haben Fisch gegessen.|With two friends. We went swimming and ate fish.|Con degli amici. Abbiamo fatto il bagno e abbiamo mangiato pesce.
a|E domenica cosa hai fatto?|Und was hast du am Sonntag gemacht?|And what did you do on Sunday?
me|Domenica sono rimasto a casa e mi sono riposato.|Am Sonntag bin ich zu Hause geblieben und habe mich ausgeruht.|On Sunday I stayed at home and rested.|Domenica sono rimasta a casa e mi sono riposata.; Sono rimasto a casa a riposarmi.
a|Io invece ho lavorato tutto il weekend.|Ich habe dagegen das ganze Wochenende gearbeitet.|I worked the whole weekend, on the other hand.
me|Mi dispiace! Allora stasera andiamo a bere qualcosa?|Tut mir leid! Gehen wir dann heute Abend was trinken?|I'm sorry! So shall we go for a drink tonight?|Peccato! Stasera beviamo qualcosa insieme?
a|Volentieri! Alle sette?|Gern! Um sieben?|I'd love to! At seven?
me|Perfetto, alle sette.|Perfekt, um sieben.|Perfect, at seven.|Va bene, alle sette!` }
});

lesson("A1", { id: "it-a1-12", t: TB("In viaggio – Zug, Ticket, Hotel", "In viaggio – Train, ticket, hotel"),
  goal: TB("Du kannst eine Fahrkarte kaufen, nach Abfahrtszeiten fragen und im Hotel einchecken.", "You can buy a ticket, ask about departure times and check into a hotel."),
  words: `il treno|der Zug|the train|n
il binario|das Gleis|the platform|n|Il treno parte dal binario tre.|Der Zug fährt von Gleis drei ab.|The train leaves from platform three.
il biglietto|die Fahrkarte; das Ticket|the ticket|n
andata e ritorno|hin und zurück|return|ph
solo andata|einfach (nur Hinfahrt)|single (one way)|ph
la partenza|die Abfahrt|the departure|n
l'arrivo|die Ankunft|the arrival|n
in ritardo|verspätet|late; delayed|ph|Il treno è in ritardo di venti minuti.|Der Zug hat zwanzig Minuten Verspätung.|The train is twenty minutes late.
in orario|pünktlich|on time|ph
convalidare|entwerten|to validate|v
l'albergo|das Hotel|the hotel|n
la camera singola|das Einzelzimmer|the single room|n
la camera doppia|das Doppelzimmer|the double room|n
la colazione inclusa|Frühstück inklusive|breakfast included|ph
la prenotazione|die Reservierung|the booking|n|Ho una prenotazione a nome Weber.|Ich habe eine Reservierung auf den Namen Weber.|I have a booking under the name Weber.
la chiave|der Schlüssel|the key|n
la valigia|der Koffer|the suitcase|n
il passaporto|der Reisepass|the passport|n
la carta d'identità|der Personalausweis|the ID card|n
a che ora|um wie viel Uhr|at what time|ph
quanto dura|wie lange dauert|how long does it take|ph|Quanto dura il viaggio?|Wie lange dauert die Fahrt?|How long does the journey take?
il viaggio|die Reise; die Fahrt|the journey; the trip|n`,
  say: `Un biglietto per Firenze, andata e ritorno.|Eine Fahrkarte nach Florenz, hin und zurück.|A return ticket to Florence.
A che ora parte il prossimo treno per Roma?|Wann fährt der nächste Zug nach Rom?|What time does the next train to Rome leave?
Da quale binario parte?|Von welchem Gleis fährt er?|Which platform does it leave from?
Devo cambiare?|Muss ich umsteigen?|Do I have to change?
Ho prenotato una camera doppia per due notti.|Ich habe ein Doppelzimmer für zwei Nächte reserviert.|I've booked a double room for two nights.
A che ora è la colazione?|Um wie viel Uhr gibt es Frühstück?|What time is breakfast?
Posso lasciare qui la valigia?|Kann ich den Koffer hier lassen?|Can I leave my suitcase here?`,
  gram: [
    ["h", TB("Fragewörter", "Question words")],
    ["table", { head: [TB("Italienisch", "Italian"), TB("Deutsch", "German"), TB("Beispiel", "example")], rows: [
      ["che cosa / cosa", TB("was", "what"), "Cosa prendi?"], ["chi", TB("wer", "who"), "Chi è?"], ["dove", TB("wo / wohin", "where"), "Dove vai?"],
      ["quando", TB("wann", "when"), "Quando parti?"], ["a che ora", TB("um wie viel Uhr", "at what time"), "A che ora arriva?"], ["quanto", TB("wie viel", "how much"), "Quanto costa?"],
      ["come", TB("wie", "how"), "Come stai?"], ["perché", TB("warum", "why"), "Perché ridi?"], ["quale", TB("welche(r/s)", "which"), "Quale binario?"]], say: 2 }],
    ["h", TB("Mit welchem Verkehrsmittel?", "By which means of transport?")],
    ["p", TB("<b>in</b> + Verkehrsmittel ohne Artikel: <b>in treno, in macchina, in aereo, in bici</b>. Aber: <b>a piedi</b> (zu Fuß).", "<b>in</b> + transport without article: <b>in treno, in macchina, in aereo, in bici</b>. But: <b>a piedi</b> (on foot).")],
    ["tip", TB("Regionalzug-Tickets aus Papier musst du vor der Fahrt entwerten (<b>convalidare</b>) – sonst droht eine Strafe.", "Paper tickets for regional trains must be validated (<b>convalidare</b>) before boarding – otherwise you risk a fine.")]
  ],
  th: "questions",
  drill: [
    ["___ parte il treno? – Alle nove.", ["A che ora", "Dove", "Quanto"], 0],
    ["___ costa il biglietto?", ["Quanto", "Quale", "Come"], 0],
    ["Da ___ binario parte?", ["quale", "chi", "come"], 0],
    ["Vado a Milano ___ treno.", ["in", "con il", "a"], 0],
    ["Andiamo in centro ___ piedi.", ["a", "in", "con"], 0],
    ["Il treno è in ___ di dieci minuti.", ["ritardo", "orario", "arrivo"], 0],
    ["Il treno ___ alle otto. (partire)", "parte"]
  ],
  talk: { t: TB("Am Fahrkartenschalter", "At the ticket office"), scene: TB("Bahnhof Milano Centrale. Du willst nach Venedig und kaufst eine Fahrkarte.", "Milan Central Station. You want to go to Venice and buy a ticket."), who: "Impiegato", slots: {}, lines: `a|Buongiorno, mi dica.|Guten Tag, bitte schön?|Good morning, how can I help?
me|Buongiorno, un biglietto per Venezia, per favore.|Guten Tag, eine Fahrkarte nach Venedig, bitte.|Good morning, a ticket to Venice, please.|Vorrei un biglietto per Venezia.; Buongiorno, vorrei un biglietto per Venezia, per favore.
a|Solo andata o andata e ritorno?|Einfach oder hin und zurück?|Single or return?
me|Andata e ritorno, per favore.|Hin und zurück, bitte.|Return, please.|Andata e ritorno.
a|Ecco. Sono trentotto euro.|Bitte. Das macht achtunddreißig Euro.|Here you are. That's thirty-eight euros.
me|A che ora parte il prossimo treno?|Wann fährt der nächste Zug?|What time does the next train leave?|Quando parte il prossimo treno?
a|Alle dieci e un quarto, dal binario dodici.|Um Viertel nach zehn, von Gleis zwölf.|At quarter past ten, from platform twelve.
me|Devo cambiare?|Muss ich umsteigen?|Do I have to change?|Bisogna cambiare?
a|No, è un treno diretto. Arriva alle dodici e mezza.|Nein, das ist ein direkter Zug. Er kommt um halb eins an.|No, it's a direct train. It arrives at half past twelve.
me|Perfetto, grazie mille. Arrivederci!|Perfekt, vielen Dank. Auf Wiedersehen!|Perfect, thank you very much. Goodbye!|Grazie, arrivederci!` }
});
