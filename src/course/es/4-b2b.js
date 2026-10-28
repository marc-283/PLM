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
