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
