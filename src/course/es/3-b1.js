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
