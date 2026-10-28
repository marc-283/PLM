/* Italiano A2 · 6–10 */
lesson("A2", { id: "it-a2-06", t: TB("Cercare casa – Wohnung und Objektpronomen", "Cercare casa – Flat hunting and object pronouns"),
  goal: TB("Du kannst eine Wohnung beschreiben, Fragen bei einer Besichtigung stellen und lo/la/li/le benutzen.", "You can describe a flat, ask questions at a viewing and use lo/la/li/le."),
  words: `l'appartamento|die Wohnung|the flat; the apartment|n
la casa|das Haus; das Zuhause|the house; home|n
il monolocale|die Einzimmerwohnung|the studio flat|n
la camera da letto|das Schlafzimmer|the bedroom|n
il soggiorno|das Wohnzimmer|the living room|n
la cucina|die Küche|the kitchen|n
il bagno|das Bad|the bathroom|n
il balcone|der Balkon|the balcony|n
il piano|das Stockwerk|the floor (storey)|n|Abito al terzo piano.|Ich wohne im dritten Stock.|I live on the third floor.
l'ascensore|der Aufzug|the lift; the elevator|n
arredato/a|möbliert|furnished|adj
l'affitto|die Miete|the rent|n|L'affitto è di 800 euro al mese.|Die Miete beträgt 800 Euro im Monat.|The rent is 800 euros a month.
le spese condominiali|die Nebenkosten|the service charges|n
la caparra|die Kaution|the deposit|n
il padrone di casa|der Vermieter|the landlord|n
il coinquilino|der Mitbewohner|the flatmate|n
luminoso/a|hell|bright|adj
rumoroso/a|laut|noisy|adj
il divano|das Sofa|the sofa|n
il letto|das Bett|the bed|n
l'armadio|der Kleiderschrank|the wardrobe|n
la lavatrice|die Waschmaschine|the washing machine|n
traslocare|umziehen (Wohnung)|to move house|v`,
  say: `Cerco un appartamento in centro.|Ich suche eine Wohnung im Zentrum.|I'm looking for a flat in the centre.
Quanto è l'affitto?|Wie hoch ist die Miete?|How much is the rent?
Le spese sono comprese?|Sind die Nebenkosten inklusive?|Are the bills included?
L'appartamento è arredato?|Ist die Wohnung möbliert?|Is the flat furnished?
Posso vederlo domani?|Kann ich sie morgen ansehen?|Can I see it tomorrow?
La cucina è piccola, ma la adoro.|Die Küche ist klein, aber ich liebe sie.|The kitchen is small, but I love it.
Lo prendo!|Ich nehme sie!|I'll take it!`,
  gram: [
    ["h", TB("Direkte Objektpronomen: lo, la, li, le", "Direct object pronouns: lo, la, li, le")],
    ["table", { head: [TB("", ""), TB("Singular", "singular"), TB("Plural", "plural")], rows: [
      [TB("1./2. Person", "1st/2nd person"), "mi, ti", "ci, vi"], [TB("männlich", "masculine"), "lo (l')", "li"], [TB("weiblich", "feminine"), "la (l')", "le"], [TB("Sie (höflich)", "you (formal)"), "La", "–"]] }],
    ["p", TB("Das Pronomen steht <b>vor</b> dem konjugierten Verb: <b>Lo</b> prendo. <b>La</b> vedo domani. Beim Infinitiv wird es angehängt: Posso veder<b>lo</b>? / <b>Lo</b> posso vedere?", "The pronoun goes <b>before</b> the conjugated verb: <b>Lo</b> prendo. <b>La</b> vedo domani. With an infinitive it is attached: Posso veder<b>lo</b>? / <b>Lo</b> posso vedere?")],
    ["p", TB("Im Passato prossimo passt sich das Partizip bei lo/la/li/le an: <b>L'</b>ho vist<b>a</b> (die Wohnung). <b>Li</b> ho comprat<b>i</b> (die Stühle).", "In the passato prossimo the participle agrees with lo/la/li/le: <b>L'</b>ho vist<b>a</b> (the flat). <b>Li</b> ho comprat<b>i</b> (the chairs).")],
    ["tip", TB("Achtung: Das Geschlecht richtet sich nach dem italienischen Wort. <i>l'appartamento</i> ist männlich → <b>lo</b> prendo, auch wenn es im Deutschen „sie“ (die Wohnung) heißt.", "Careful: the gender follows the Italian word. <i>l'appartamento</i> is masculine → <b>lo</b> prendo.")]
  ],
  th: "pronouns",
  drill: [
    ["L'appartamento? ___ prendo!", ["Lo", "La", "Li"], 0],
    ["La cucina? ___ adoro!", ["La", "Lo", "Le"], 0],
    ["I mobili? ___ compriamo all'IKEA.", ["Li", "Le", "Lo"], 0],
    ["Le chiavi? Non ___ trovo.", ["le", "li", "la"], 0],
    ["Posso ___ domani? (vedere + lo)", "vederlo"],
    ["Hai visto la casa? Sì, l'ho ___ ieri.", ["vista", "visto", "visti"], 0],
    ["Abito ___ secondo piano.", ["al", "nel", "sul"], 0]
  ],
  talk: { t: TB("Wohnungsbesichtigung", "Flat viewing"), scene: TB("Du besichtigst in Mailand eine Wohnung. Der Vermieter, Signor Ricci, zeigt dir alles.", "You're viewing a flat in Milan. The landlord, Mr Ricci, shows you round."), who: "Signor Ricci", slots: {}, lines: `a|Ecco, questo è il soggiorno. È molto luminoso, vero?|So, das ist das Wohnzimmer. Sehr hell, oder?|So, this is the living room. Very bright, isn't it?
me|Sì, è bellissimo. Quante camere da letto ci sono?|Ja, wunderschön. Wie viele Schlafzimmer gibt es?|Yes, it's lovely. How many bedrooms are there?|Molto bello! Quante camere ci sono?
a|Due camere, una cucina abitabile e un bagno con la doccia.|Zwei Schlafzimmer, eine Wohnküche und ein Bad mit Dusche.|Two bedrooms, an eat-in kitchen and a bathroom with a shower.
me|L'appartamento è arredato?|Ist die Wohnung möbliert?|Is the flat furnished?|È arredato?
a|Sì, tranne la camera piccola. La lavatrice è nuova.|Ja, außer dem kleinen Zimmer. Die Waschmaschine ist neu.|Yes, except the small room. The washing machine is new.
me|Quanto è l'affitto? Le spese sono comprese?|Wie hoch ist die Miete? Sind die Nebenkosten inklusive?|How much is the rent? Are the bills included?|Quanto costa l'affitto, spese comprese?
a|Novecento euro al mese, più cento euro di spese condominiali.|Neunhundert Euro im Monat, plus hundert Euro Nebenkosten.|Nine hundred euros a month, plus a hundred euros service charges.
me|È un po' caro, ma la zona mi piace molto.|Etwas teuer, aber die Gegend gefällt mir sehr.|It's a bit expensive, but I really like the area.|È caro, ma la zona è bellissima.
a|Allora, cosa ne pensa?|Also, was meinen Sie?|So, what do you think?
me|Lo prendo! Quando posso firmare il contratto?|Ich nehme sie! Wann kann ich den Vertrag unterschreiben?|I'll take it! When can I sign the contract?|Lo prendo! Quando firmiamo il contratto?` }
});

lesson("A2", { id: "it-a2-07", t: TB("Fare shopping – Kleidung und indirekte Pronomen", "Fare shopping – Clothes and indirect pronouns"),
  goal: TB("Du kannst Kleidung kaufen, nach Größe und Farbe fragen und mi/ti/gli/le benutzen.", "You can buy clothes, ask about size and colour and use mi/ti/gli/le."),
  words: `i vestiti|die Kleidung|clothes|n
la maglietta|das T-Shirt|the T-shirt|n
la camicia|das Hemd; die Bluse|the shirt; the blouse|n
il maglione|der Pullover|the jumper|n
i pantaloni|die Hose|the trousers|n
i jeans|die Jeans|the jeans|n
la gonna|der Rock|the skirt|n
il vestito|das Kleid; der Anzug|the dress; the suit|n
la giacca|die Jacke; das Sakko|the jacket|n
il cappotto|der Mantel|the coat|n
le scarpe|die Schuhe|the shoes|n
la taglia|die Größe (Kleidung)|the size|n|Che taglia porta?|Welche Größe tragen Sie?|What size are you?
il numero|die Schuhgröße|the shoe size|n
il camerino|die Umkleidekabine|the fitting room|n
provare|anprobieren|to try on|v|Posso provarla?|Kann ich sie anprobieren?|Can I try it on?
stare bene|gut stehen; gut passen|to suit; to fit|v|Questa giacca ti sta benissimo.|Diese Jacke steht dir super.|This jacket really suits you.
stretto/a|eng|tight|adj
largo/a|weit|loose; big|adj
lo sconto|der Rabatt|the discount|n
i saldi|der Schlussverkauf|the sales|n
nero/a|schwarz|black|adj
bianco/a|weiß|white|adj
blu|blau|blue|adj
rosso/a|rot|red|adj
verde|grün|green|adj`,
  say: `Sto solo guardando, grazie.|Ich schaue mich nur um, danke.|I'm just looking, thanks.
Avete questa camicia in blu?|Haben Sie dieses Hemd in Blau?|Do you have this shirt in blue?
Porto la M.|Ich trage M.|I'm a medium.
Mi sta un po' stretto.|Es ist mir etwas zu eng.|It's a bit tight on me.
Avete una taglia più grande?|Haben Sie eine Nummer größer?|Do you have a bigger size?
Le sta molto bene!|Das steht Ihnen sehr gut!|It suits you very well!
Lo regalo a mio fratello – gli piace il verde.|Ich schenke es meinem Bruder – er mag Grün.|I'm giving it to my brother – he likes green.`,
  gram: [
    ["h", TB("Indirekte Objektpronomen: mir, dir, ihm, ihr …", "Indirect object pronouns: to me, to you, to him …")],
    ["table", { head: [TB("Deutsch", "German"), TB("Italienisch", "Italian"), TB("Beispiel", "example")], rows: [
      [TB("mir", "to me"), "mi", "Mi sta bene."], [TB("dir", "to you"), "ti", "Ti piace?"], [TB("ihm", "to him"), "gli", "Gli regalo un libro."], [TB("ihr / Ihnen", "to her / to you (formal)"), "le / Le", "Le sta benissimo."],
      [TB("uns", "to us"), "ci", "Ci serve una borsa."], [TB("euch", "to you (pl.)"), "vi", "Vi piace?"], [TB("ihnen", "to them"), "gli", "Gli scrivo domani."]], say: 2 }],
    ["p", TB("Typische Verben mit indirektem Objekt: <b>piacere, stare (bene), regalare, dare, dire, scrivere, telefonare, servire</b>.", "Typical verbs with an indirect object: <b>piacere, stare (bene), regalare, dare, dire, scrivere, telefonare, servire</b>.")],
    ["tip", TB("<b>blu, rosa, viola, beige</b> sind unveränderlich: i pantaloni blu, le scarpe rosa.", "<b>blu, rosa, viola, beige</b> never change: i pantaloni blu, le scarpe rosa.")]
  ],
  th: "pronouns",
  drill: [
    ["Questa giacca ___ sta benissimo, signora!", ["Le", "La", "Gli"], 0],
    ["A Paolo ___ piace molto il blu.", ["gli", "le", "lo"], 0],
    ["Ti ___ questi pantaloni?", ["piacciono", "piace", "piacete"], 0],
    ["Le scarpe ___ stanno strette.", ["mi", "me", "io"], 0],
    ["La gonna è troppo ___ .", ["larga", "largo", "larghe"], 0],
    ["Ho comprato due camicie ___ .", ["bianche", "bianchi", "bianca"], 0],
    ["Scriviamo a Giulia? Sì, ___ scrivo io.", ["le", "la", "gli"], 0]
  ],
  talk: { t: TB("Im Bekleidungsgeschäft", "In a clothes shop"), scene: TB("Du suchst in Florenz ein Hemd für ein Hochzeitsfest. Die Verkäuferin Francesca hilft dir.", "You're looking for a shirt for a wedding in Florence. The shop assistant, Francesca, helps you."), who: "Francesca", slots: {}, lines: `a|Buongiorno! Posso aiutarla?|Guten Tag! Kann ich Ihnen helfen?|Good morning! Can I help you?
me|Sì, cerco una camicia elegante per un matrimonio.|Ja, ich suche ein elegantes Hemd für eine Hochzeit.|Yes, I'm looking for a smart shirt for a wedding.|Cerco una camicia elegante per un matrimonio.
a|Che taglia porta?|Welche Größe tragen Sie?|What size are you?
me|Porto la L, di solito.|Ich trage normalerweise L.|I'm usually a large.|Di solito la L.; La L.
a|Ecco, questa bianca è molto bella. Vuole provarla?|Hier, dieses weiße ist sehr schön. Möchten Sie es anprobieren?|Here, this white one is very nice. Would you like to try it on?
me|Sì, grazie. Dov'è il camerino?|Ja, danke. Wo ist die Umkleide?|Yes, thanks. Where's the fitting room?|Volentieri. Dov'è il camerino?
a|In fondo a destra. Allora, come le sta?|Hinten rechts. Und, wie passt es?|At the back on the right. So, how does it fit?
me|Mi sta un po' stretta. Avete una taglia più grande?|Es ist mir etwas eng. Haben Sie eine Nummer größer?|It's a bit tight. Do you have a bigger size?|È un po' stretta. C'è una taglia più grande?
a|Sì, ecco la XL. … Perfetta! Le sta benissimo.|Ja, hier ist XL. … Perfekt! Steht Ihnen super.|Yes, here's the XL. … Perfect! It really suits you.
me|La prendo. C'è uno sconto?|Ich nehme es. Gibt es einen Rabatt?|I'll take it. Is there a discount?|Va bene, la prendo. Fate sconti?` }
});

lesson("A2", { id: "it-a2-08", t: TB("Vorrei… – Der Condizionale", "Vorrei… – The conditional"),
  goal: TB("Du kannst höflich bitten, Wünsche äußern und Ratschläge geben.", "You can make polite requests, express wishes and give advice."),
  words: `il desiderio|der Wunsch|the wish|n
il sogno|der Traum|the dream|n|Il mio sogno sarebbe vivere al mare.|Mein Traum wäre, am Meer zu leben.|My dream would be to live by the sea.
il consiglio|der Rat; der Tipp|the advice|n
consigliare|raten; empfehlen|to advise; to recommend|v
il favore|der Gefallen|the favour|n|Mi faresti un favore?|Würdest du mir einen Gefallen tun?|Would you do me a favour?
gentile|freundlich; nett|kind|adj
magari|vielleicht; schön wär's|maybe; if only|adv|Magari!|Schön wär's!|If only!
volentieri|gern|gladly|adv
la pensione|die Rente|retirement; the pension|n
vincere la lotteria|im Lotto gewinnen|to win the lottery|v
smettere di fumare|mit dem Rauchen aufhören|to stop smoking|v
fare sport|Sport treiben|to do sport|v
dimagrire|abnehmen|to lose weight|v
stressato/a|gestresst|stressed|adj
la pausa|die Pause|the break|n
prendersi una pausa|eine Pause machen|to take a break|v
il mondo|die Welt|the world|n
il giro del mondo|die Weltreise|the trip round the world|n
aprire un ristorante|ein Restaurant eröffnen|to open a restaurant|v
ricco/a|reich|rich|adj`,
  say: `Potresti aiutarmi?|Könntest du mir helfen?|Could you help me?
Mi passeresti il sale?|Würdest du mir das Salz reichen?|Would you pass me the salt?
Vorrei fare il giro del mondo.|Ich würde gern eine Weltreise machen.|I'd like to go round the world.
Al tuo posto, parlerei con il capo.|An deiner Stelle würde ich mit dem Chef reden.|If I were you, I'd talk to the boss.
Dovresti dormire di più.|Du solltest mehr schlafen.|You should sleep more.
Sarebbe bello!|Das wäre schön!|That would be nice!
Che cosa faresti con un milione di euro?|Was würdest du mit einer Million Euro machen?|What would you do with a million euros?`,
  gram: [
    ["h", TB("Condizionale presente", "Present conditional")],
    ["p", TB("Gleicher Stamm wie das Futur + <b>-ei, -esti, -ebbe, -emmo, -este, -ebbero</b>: parler<b>ei</b>, sar<b>ei</b>, andr<b>ei</b>, vorr<b>ei</b>, potr<b>ei</b>, dovr<b>ei</b>.", "Same stem as the future + <b>-ei, -esti, -ebbe, -emmo, -este, -ebbero</b>: parler<b>ei</b>, sar<b>ei</b>, andr<b>ei</b>, vorr<b>ei</b>, potr<b>ei</b>, dovr<b>ei</b>.")],
    ["conj", { verbs: ["volere", "potere", "dovere"], tenses: ["Condizionale presente"] }],
    ["table", { head: [TB("wofür?", "use"), TB("Beispiel", "example")], rows: [
      [TB("höfliche Bitte", "polite request"), "Potrebbe chiudere la porta?"], [TB("Wunsch", "wish"), "Vorrei un caffè. / Mi piacerebbe vivere a Roma."], [TB("Rat", "advice"), "Dovresti riposarti."], [TB("Vermutung (Nachrichten)", "unconfirmed report"), "Il ministro sarebbe a Parigi."]], say: 1 }],
    ["tip", TB("Achtung, doppeltes m: noi parler<b>emmo</b> (Konditional) ≠ parler<b>emo</b> (Futur).", "Watch the double m: noi parler<b>emmo</b> (conditional) ≠ parler<b>emo</b> (future).")]
  ],
  th: "condizionale", quiz: ["it-condizionale"], forms: { verbs: ["parlare", "essere", "avere", "potere", "volere", "dovere", "andare", "fare", "venire"], tenses: ["Condizionale presente"] },
  drill: [
    ["___ un tavolo per quattro, per favore.", ["Vorrei", "Voglio", "Volevo"], 0],
    ["Scusi, ___ ripetere più lentamente?", ["potrebbe", "può essere", "potrà"], 0],
    ["Sei stanco: ___ andare a letto presto.", ["dovresti", "dovrai", "devi stato"], 0],
    ["Con un milione di euro, io ___ il giro del mondo.", ["farei", "farò", "facevo"], 0],
    ["Noi ___ volentieri, ma non abbiamo tempo. (venire)", "verremmo"],
    ["Mi ___ vivere in Toscana. (piacere)", "piacerebbe"],
    ["Voi cosa ___ al mio posto? (fare)", "fareste"]
  ],
  talk: { t: TB("Was wäre, wenn …?", "What would you do if…?"), scene: TB("Ein entspannter Abend mit deiner Freundin Martina. Ihr träumt ein bisschen.", "A relaxed evening with your friend Martina. You're daydreaming a little."), who: "Martina", slots: {}, lines: `a|Che stress questa settimana! Mi piacerebbe partire domani per una spiaggia tropicale.|Was für eine stressige Woche! Ich würde gern morgen an einen tropischen Strand fliegen.|What a stressful week! I'd love to leave tomorrow for a tropical beach.
me|Anche a me! Dove andresti?|Ich auch! Wohin würdest du fliegen?|Me too! Where would you go?|Anch'io! E dove andresti?
a|Alle Maldive, senza telefono. E tu, cosa faresti con un mese libero?|Auf die Malediven, ohne Handy. Und du, was würdest du mit einem freien Monat machen?|To the Maldives, without a phone. And you, what would you do with a month off?
me|Farei un viaggio in Italia e imparerei a cucinare.|Ich würde durch Italien reisen und kochen lernen.|I'd travel round Italy and learn to cook.|Viaggerei in Italia e imparerei a cucinare.
a|Bellissimo! Io invece aprirei un piccolo bar sulla spiaggia.|Wunderschön! Ich würde stattdessen eine kleine Strandbar eröffnen.|Lovely! I'd open a little beach bar instead.
me|Sarebbe fantastico! Potrei lavorare con te?|Das wäre fantastisch! Könnte ich mit dir arbeiten?|That would be fantastic! Could I work with you?|Sarebbe bello! Posso lavorare con te?
a|Certo! Ma prima dovresti imparare a fare i cocktail.|Klar! Aber zuerst müsstest du lernen, Cocktails zu mixen.|Sure! But first you'd have to learn to make cocktails.
me|Nessun problema, imparerei subito!|Kein Problem, das würde ich sofort lernen!|No problem, I'd learn straight away!|Volentieri, imparerei subito!` }
});

lesson("A2", { id: "it-a2-09", t: TB("Feste e inviti – Einladen, zusagen, absagen", "Feste e inviti – Inviting, accepting, declining"),
  goal: TB("Du kannst jemanden einladen, zu- oder absagen, gratulieren und die Wörter ci und ne benutzen.", "You can invite someone, accept or decline, congratulate and use ci and ne."),
  words: `la festa di compleanno|die Geburtstagsfeier|the birthday party|n
l'invito|die Einladung|the invitation|n
invitare|einladen|to invite|v|Ti invito a cena sabato.|Ich lade dich am Samstag zum Essen ein.|I'm inviting you to dinner on Saturday.
festeggiare|feiern|to celebrate|v
il regalo|das Geschenk|the present|n
la torta|der Kuchen; die Torte|the cake|n
gli auguri|die Glückwünsche|best wishes|n
tanti auguri!|herzlichen Glückwunsch!|happy birthday!; best wishes!|ph
buon compleanno!|alles Gute zum Geburtstag!|happy birthday!|ph
il Natale|Weihnachten|Christmas|n
buon Natale!|frohe Weihnachten!|merry Christmas!|ph
la Pasqua|Ostern|Easter|n
il Capodanno|Neujahr; Silvester|New Year's Day; New Year's Eve|n
Ferragosto|Mariä Himmelfahrt (15. August)|the 15th of August holiday|n
il matrimonio|die Hochzeit|the wedding|n
volentieri|gern|gladly; I'd love to|adv
purtroppo|leider|unfortunately|adv
un impegno|eine Verpflichtung; ein Termin|a commitment; an appointment|n|Purtroppo ho già un impegno.|Leider habe ich schon etwas vor.|Unfortunately I already have plans.
portare qualcosa|etwas mitbringen|to bring something|v
brindare|anstoßen|to drink a toast|v
cin cin!|prost!|cheers!|ph
congratulazioni!|Glückwunsch! (Erfolg)|congratulations!|ph`,
  say: `Sabato faccio una festa. Vieni?|Am Samstag mache ich eine Party. Kommst du?|I'm having a party on Saturday. Are you coming?
Volentieri, grazie dell'invito!|Gern, danke für die Einladung!|I'd love to, thanks for the invitation!
Mi dispiace, ma non posso.|Tut mir leid, aber ich kann nicht.|I'm sorry, but I can't.
Ci vado con mia sorella.|Ich gehe mit meiner Schwester hin.|I'm going there with my sister.
Quanti invitati ci sono? – Ce ne sono venti.|Wie viele Gäste sind da? – Es sind zwanzig.|How many guests are there? – There are twenty.
Posso portare qualcosa?|Kann ich etwas mitbringen?|Can I bring something?
Facciamo un brindisi!|Lasst uns anstoßen!|Let's have a toast!`,
  gram: [
    ["h", TB("<i>ci</i> = dort, dorthin", "<i>ci</i> = there")],
    ["ex", [["Vai a Roma? – Sì, ci vado domani.", "Fährst du nach Rom? – Ja, ich fahre morgen hin.", "Are you going to Rome? – Yes, I'm going there tomorrow."], ["Sei mai stato in Sicilia? – No, non ci sono mai stato.", "Warst du schon mal auf Sizilien? – Nein, ich war noch nie dort.", "Have you ever been to Sicily? – No, I've never been there."]]],
    ["h", TB("<i>ne</i> = davon", "<i>ne</i> = of it / of them")],
    ["p", TB("<b>ne</b> ersetzt eine Menge: Quanti fratelli hai? – <b>Ne</b> ho due (davon habe ich zwei). Quanto pane vuoi? – <b>Ne</b> vorrei un po'. Auch: Che <b>ne</b> pensi? (Was hältst du davon?)", "<b>ne</b> replaces a quantity: Quanti fratelli hai? – <b>Ne</b> ho due (I have two of them). Quanto pane vuoi? – <b>Ne</b> vorrei un po'. Also: Che <b>ne</b> pensi? (What do you think of it?)")],
    ["tip", TB("Vor <i>è</i> wird ci zu <b>c'</b> (c'è), vor <i>lo/la/li/le/ne</i> wird es zu <b>ce</b>: <b>ce n'è</b> uno, <b>ce ne</b> sono due.", "Before <i>è</i>, ci becomes <b>c'</b> (c'è); before <i>lo/la/li/le/ne</i> it becomes <b>ce</b>: <b>ce n'è</b> uno, <b>ce ne</b> sono due.")]
  ],
  th: "strutture",
  drill: [
    ["Vai alla festa di Luca? – Sì, ___ vado.", ["ci", "ne", "lo"], 0],
    ["Quante birre compriamo? – ___ compriamo sei.", ["Ne", "Ci", "Le"], 0],
    ["Hai fratelli? – Sì, ___ ho tre.", ["ne", "ci", "li"], 0],
    ["Che ___ pensi del regalo?", ["ne", "ci", "lo"], 0],
    ["Quanti invitati ci sono? – ___ sono trenta.", ["Ce ne", "Ci ne", "Ne ci"], 0],
    ["Grazie ___ invito!", ["dell'", "per l'", "all'"], 0],
    ["___ auguri per il tuo compleanno!", ["Tanti", "Buon", "Molto"], 0]
  ],
  talk: { t: TB("Eine Einladung", "An invitation"), scene: TB("Dein Freund Pietro ruft an und lädt dich zu seiner Geburtstagsfeier ein.", "Your friend Pietro calls and invites you to his birthday party."), who: "Pietro", slots: {}, lines: `a|Ciao! Sabato prossimo compio trent'anni e faccio una festa a casa mia. Vieni?|Hallo! Nächsten Samstag werde ich dreißig und mache eine Party bei mir. Kommst du?|Hi! Next Saturday I'm turning thirty and I'm having a party at my place. Are you coming?
me|Ma certo, volentieri! Grazie dell'invito.|Aber klar, gern! Danke für die Einladung.|Of course, I'd love to! Thanks for the invitation.|Volentieri! Grazie per l'invito.; Certo che vengo!
a|Fantastico! Iniziamo verso le otto.|Super! Wir fangen gegen acht an.|Great! We'll start around eight.
me|Posso portare qualcosa? Un dolce o del vino?|Kann ich etwas mitbringen? Einen Nachtisch oder Wein?|Can I bring something? A dessert or some wine?|Porto qualcosa? Del vino o un dolce?
a|Il vino va benissimo. Di torte ne ho già due!|Wein ist perfekt. Kuchen habe ich schon zwei!|Wine is perfect. I've already got two cakes!
me|Perfetto. Viene anche Chiara?|Perfekt. Kommt Chiara auch?|Perfect. Is Chiara coming too?|Ok. C'è anche Chiara?
a|Purtroppo no, ha già un impegno. Ma ci sarà tutto il gruppo della palestra.|Leider nicht, sie hat schon etwas vor. Aber die ganze Gruppe vom Fitnessstudio ist da.|Unfortunately not, she already has plans. But the whole gym group will be there.
me|Che bello! Allora a sabato, e tanti auguri in anticipo!|Wie schön! Dann bis Samstag, und schon mal alles Gute!|How nice! See you on Saturday then, and happy birthday in advance!|Benissimo, a sabato!` }
});

lesson("A2", { id: "it-a2-10", t: TB("La mia città – Vergleiche und Superlativ", "La mia città – Comparisons and superlatives"),
  goal: TB("Du kannst Orte beschreiben und vergleichen: più … di, meno … di, il più …, -issimo.", "You can describe and compare places: più … di, meno … di, il più …, -issimo."),
  words: `il centro storico|die Altstadt|the old town|n
la periferia|der Stadtrand|the outskirts|n
il quartiere|das Viertel|the neighbourhood|n
gli abitanti|die Einwohner|the inhabitants|n|Bologna ha circa quattrocentomila abitanti.|Bologna hat rund 400.000 Einwohner.|Bologna has about 400,000 inhabitants.
il traffico|der Verkehr|the traffic|n
i mezzi pubblici|die öffentlichen Verkehrsmittel|public transport|n
la vita notturna|das Nachtleben|nightlife|n
il parco|der Park|the park|n
il fiume|der Fluss|the river|n
il lago|der See|the lake|n
la montagna|die Berge; der Berg|the mountains|n
antico/a|alt (historisch)|ancient; old|adj
moderno/a|modern|modern|adj
vivace|lebendig|lively|adj
tranquillo/a|ruhig|quiet; peaceful|adj
pulito/a|sauber|clean|adj
sporco/a|schmutzig|dirty|adj
inquinato/a|verschmutzt (Luft)|polluted|adj
caro/a|teuer|expensive|adj
economico/a|günstig|cheap|adj
migliore|besser|better|adj|Il clima qui è migliore.|Das Klima hier ist besser.|The climate here is better.
peggiore|schlechter|worse|adj`,
  say: `Milano è più grande di Bologna.|Mailand ist größer als Bologna.|Milan is bigger than Bologna.
La vita qui è meno cara che a Monaco.|Das Leben hier ist günstiger als in München.|Life here is less expensive than in Munich.
Roma è bella come Parigi.|Rom ist so schön wie Paris.|Rome is as beautiful as Paris.
È la città più bella d'Italia.|Es ist die schönste Stadt Italiens.|It's the most beautiful city in Italy.
Il centro è bellissimo.|Das Zentrum ist wunderschön.|The centre is really beautiful.
Si mangia benissimo.|Man isst hervorragend.|The food is excellent.
Preferisco vivere in un posto tranquillo.|Ich lebe lieber an einem ruhigen Ort.|I prefer living somewhere quiet.`,
  gram: [
    ["h", TB("Vergleiche", "Comparisons")],
    ["table", { head: [TB("", ""), TB("Italienisch", "Italian"), TB("Beispiel", "example")], rows: [
      [TB("größer als", "bigger than"), "più … di", "Roma è più grande di Napoli."], [TB("weniger … als", "less … than"), "meno … di", "Il treno è meno caro dell'aereo."],
      [TB("so … wie", "as … as"), "(così) … come", "Luca è alto come me."], [TB("vor Verb/Adjektiv", "before verb/adjective"), "più … che", "È più facile leggere che parlare."]], say: 2 }],
    ["h", TB("Superlativ", "Superlative")],
    ["p", TB("Relativ: <b>il/la più</b> + Adjektiv + <b>di</b>: la città <b>più</b> bella <b>d'</b>Italia. Absolut: Adjektiv + <b>-issimo</b>: bell<b>issimo</b>, car<b>issima</b>, buon<b>issimi</b> (= sehr …).", "Relative: <b>il/la più</b> + adjective + <b>di</b>: la città <b>più</b> bella <b>d'</b>Italia. Absolute: adjective + <b>-issimo</b>: bell<b>issimo</b>, car<b>issima</b>, buon<b>issimi</b> (= very …).")],
    ["tip", TB("Unregelmäßig: buono → <b>migliore</b> (besser), cattivo → <b>peggiore</b>. Als Adverb: bene → <b>meglio</b>, male → <b>peggio</b>: Sto meglio, grazie.", "Irregular: buono → <b>migliore</b> (better), cattivo → <b>peggiore</b>. As adverbs: bene → <b>meglio</b>, male → <b>peggio</b>: Sto meglio, grazie.")]
  ],
  th: "adj",
  drill: [
    ["Milano è più grande ___ Torino.", ["di", "che", "come"], 0],
    ["È più bello viaggiare ___ lavorare.", ["che", "di", "come"], 0],
    ["Questa pizza è ___ ! (molto buona)", ["buonissima", "buonissimo", "più buona"], 0],
    ["Venezia è la città più romantica ___ mondo.", ["del", "di", "nel"], 0],
    ["Oggi sto ___ di ieri.", ["meglio", "migliore", "più bene"], 0],
    ["Il vino di questa cantina è ___ di quello del supermercato.", ["migliore", "meglio", "più buono di"], 0],
    ["Il mio quartiere è tranquillo ___ il tuo.", ["come", "di", "che"], 0]
  ],
  talk: { t: TB("Stadt oder Land?", "City or country?"), scene: TB("Dein Kollege Giorgio fragt dich, wie es sich in deiner Stadt in Deutschland lebt.", "Your colleague Giorgio asks you what life is like in your city in Germany."), who: "Giorgio", slots: { city: "Monaco" }, lines: `a|Com'è la tua città? Ci si vive bene?|Wie ist deine Stadt? Lebt es sich gut dort?|What's your city like? Is it a good place to live?
me|Sì, è molto bella e più tranquilla di Milano.|Ja, sie ist sehr schön und ruhiger als Mailand.|Yes, it's very beautiful and quieter than Milan.|Sì, è bellissima e più tranquilla di Milano.
a|E la vita è cara?|Und ist das Leben teuer?|And is life expensive?
me|Purtroppo sì, gli affitti sono carissimi.|Leider ja, die Mieten sind sehr teuer.|Unfortunately yes, rents are really expensive.|Sì, gli affitti sono molto cari.
a|Anche qui! E i mezzi pubblici funzionano?|Hier auch! Und funktionieren die Öffentlichen?|Here too! And does public transport work?
me|Sì, funzionano meglio che in Italia, secondo me.|Ja, sie funktionieren meiner Meinung nach besser als in Italien.|Yes, they work better than in Italy, in my opinion.|Sì, funzionano benissimo.
a|Ahah, non è difficile! E cosa ti manca di più dell'Italia quando sei a casa?|Haha, das ist nicht schwer! Und was vermisst du an Italien am meisten, wenn du zu Hause bist?|Haha, that's not hard! And what do you miss most about Italy when you're at home?
me|Il cibo, sicuramente! Il caffè italiano è il migliore del mondo.|Das Essen, ganz sicher! Der italienische Kaffee ist der beste der Welt.|The food, definitely! Italian coffee is the best in the world.|Il cibo e il caffè, che è il migliore del mondo.` }
});
