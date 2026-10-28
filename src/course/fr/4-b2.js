/* Français B2 · 1–4 */
lesson("B2", { id: "fr-b2-01", t: TB("Argumenter – Konnektoren", "Argumenter – Connectors"),
  goal: TB("Du kannst Vor- und Nachteile abwägen, Gegenargumente bringen und deine Meinung begründen.", "You can weigh up pros and cons, bring counter-arguments and justify your opinion."),
  words: `l'argument|das Argument (m)|the argument|n
l'avantage|der Vorteil (m)|the advantage|n|Le télétravail a beaucoup d'avantages.|Homeoffice hat viele Vorteile.|Remote work has a lot of advantages.
l'inconvénient|der Nachteil (m)|the drawback|n
le télétravail|das Homeoffice|remote work|n
bien que|obwohl (+ Subjonctif)|although|x|Bien qu'il soit tard, je continue.|Obwohl es spät ist, mache ich weiter.|Although it's late, I'm carrying on.
malgré|trotz|despite|x|Malgré la pluie, on est sortis.|Trotz des Regens sind wir rausgegangen.|Despite the rain, we went out.
pourtant|trotzdem; dennoch|yet; however|adv
cependant|jedoch|however|adv
en revanche|dagegen|on the other hand|ph
d'un côté … de l'autre|einerseits … andererseits|on the one hand … on the other|ph
à condition que|vorausgesetzt, dass|provided that|ph
pour que|damit|so that|x
à mon avis|meiner Meinung nach|in my opinion|ph
selon moi|meiner Ansicht nach|in my view|ph
être pour|dafür sein|to be in favour|v
être contre|dagegen sein|to be against|v
convaincre|überzeugen|to convince|v
c'est pourquoi|deshalb|that's why|ph
donc|also; daher|so; therefore|x
quand même|trotzdem|all the same|ph`,
  say: `D'un côté, c'est pratique ; de l'autre, on se sent seul.|Einerseits ist es praktisch, andererseits fühlt man sich allein.|On the one hand it's practical; on the other, you feel lonely.
Bien que tu aies raison, je ne suis pas tout à fait d'accord.|Obwohl du recht hast, bin ich nicht ganz einverstanden.|Although you're right, I don't completely agree.
Je suis pour, à condition qu'il y ait des réunions en présentiel.|Ich bin dafür, vorausgesetzt, es gibt Präsenztreffen.|I'm in favour, provided there are face-to-face meetings.
Malgré les avantages, il y a quelques inconvénients.|Trotz der Vorteile gibt es einige Nachteile.|Despite the advantages, there are some drawbacks.
À mon avis, les avantages l'emportent.|Meiner Meinung nach überwiegen die Vorteile.|In my opinion, the advantages outweigh the drawbacks.
Tu ne m'as pas complètement convaincu.|Du hast mich nicht ganz überzeugt.|You haven't completely convinced me.`,
  gram: [
    ["h", TB("Konnektoren: Indikativ, Subjonctif oder Nomen?", "Connectors: indicative, subjunctive or noun?")],
    ["table", { head: [TB("Konnektor", "connector"), TB("danach folgt", "followed by"), TB("Beispiel", "example")], rows: [["bien que, pour que, à condition que, avant que", "subjonctif", "Je t'explique pour que tu comprennes."], ["malgré", TB("Nomen", "noun"), "Malgré la pluie, on sort."], ["parce que, puisque, alors que", TB("Indikativ", "indicative"), "Je reste parce qu'il pleut."], ["pourtant, cependant, en revanche", TB("neuer Satzteil", "new clause"), "C'est cher. Pourtant, c'est génial."]], say: 2 }],
    ["p", TB("<b>Bien que</b> (obwohl) verlangt immer den Subjonctif: Bien qu'il <b>soit</b> malade, il travaille.", "<b>Bien que</b> (although) always takes the subjunctive: Bien qu'il <b>soit</b> malade, il travaille.")],
    ["tip", TB("Nicht <s>malgré que</s> – im gepflegten Französisch heißt es <b>bien que</b> + Subjonctif oder <b>malgré</b> + Nomen.", "Not <s>malgré que</s> – in good French use <b>bien que</b> + subjunctive or <b>malgré</b> + noun.")]
  ],
  forms: { verbs: ["être", "avoir", "pouvoir", "faire"], tenses: ["Subjonctif présent"] },
  drill: [
    ["Bien qu'il ___ tard, je continue à travailler.", ["soit", "est", "sera"], 0],
    ["___ la pluie, le match a eu lieu.", ["Malgré", "Bien que", "Pourtant"], 0],
    ["Je te le dis pour que tu le ___.", ["saches", "sais", "savoir"], 0],
    ["C'est cher. ___, je vais l'acheter.", ["Pourtant", "Malgré", "Bien que"], 0],
    ["J'accepte, à condition que vous ___ à l'heure.", ["soyez", "êtes", "serez"], 0],
    ["Il est riche ; sa sœur, en ___, n'a pas d'argent.", ["revanche", "contre", "autre"], 0],
    ["Meiner Meinung nach … → À mon ___, …", "avis"]
  ],
  talk: { t: TB("Homeoffice – ja oder nein?", "Remote work – yes or no?"), scene: TB("In der Mittagspause diskutierst du mit deiner Kollegin Claire übers Homeoffice.", "At lunch you discuss remote work with your colleague Claire."), who: "Claire", slots: {}, lines: `a|Et toi, tu es pour ou contre le télétravail ?|Und du, bist du für oder gegen Homeoffice?|And you, are you for or against remote work?
me|À mon avis, il a beaucoup d'avantages.|Meiner Meinung nach hat es viele Vorteile.|In my opinion, it has a lot of advantages.|Je suis pour, il y a beaucoup d'avantages.
a|Par exemple ?|Zum Beispiel?|For example?
me|D'un côté, on gagne du temps ; de l'autre, on travaille plus au calme.|Einerseits spart man Zeit, andererseits arbeitet man ruhiger.|On the one hand you save time; on the other, you work in peace.|On gagne du temps et on est plus au calme.
a|Oui, mais moi, le contact avec l'équipe me manque.|Ja, aber mir fehlt der Kontakt zum Team.|Yes, but I miss contact with the team.
me|Je comprends. C'est pourquoi je suis pour, à condition qu'il y ait des réunions au bureau.|Verstehe. Deshalb bin ich dafür, vorausgesetzt, es gibt Treffen im Büro.|I understand. That's why I'm in favour, provided there are meetings at the office.|Je comprends, mais avec des réunions au bureau, c'est parfait.
a|Bien qu'il y ait des réunions, ce n'est pas pareil.|Auch wenn es Treffen gibt, ist es nicht dasselbe.|Even with meetings, it's not the same.
me|C'est vrai. Pourtant, je préfère travailler de chez moi.|Das stimmt. Trotzdem arbeite ich lieber von zu Hause.|That's true. Still, I prefer working from home.|Tu as raison, mais je préfère quand même le télétravail.` }
});

lesson("B2", { id: "fr-b2-02", t: TB("Si j'avais su… – Irreale Vergangenheit", "Si j'avais su… – The unreal past"),
  goal: TB("Du kannst über verpasste Chancen sprechen und sagen, was du bereust oder anders gemacht hättest.", "You can talk about missed chances and say what you regret or would have done differently."),
  words: `regretter|bereuen; bedauern|to regret|v|Je regrette de ne pas avoir étudié à l'étranger.|Ich bereue, nicht im Ausland studiert zu haben.|I regret not studying abroad.
l'occasion|die Gelegenheit (f)|the opportunity|n
rater|verpassen|to miss|v|J'ai raté le train.|Ich habe den Zug verpasst.|I missed the train.
l'erreur|der Fehler (f)|the mistake|n
se tromper|sich irren|to be wrong; to make a mistake|v
la décision|die Entscheidung|the decision|n
prendre une décision|eine Entscheidung treffen|to make a decision|v
choisir|wählen|to choose|v
les études|das Studium|studies|n
si j'avais su|hätte ich das gewusst|if I'd known|ph
le hasard|der Zufall|chance|n|On s'est rencontrés par hasard.|Wir haben uns zufällig kennengelernt.|We met by chance.
le destin|das Schicksal|fate|n
changer d'avis|seine Meinung ändern|to change one's mind|v
à temps|rechtzeitig|in time|ph
écouter|zuhören; hören auf|to listen to|v|J'aurais dû t'écouter.|Ich hätte auf dich hören sollen.|I should have listened to you.
prévenir|Bescheid geben; warnen|to let know; to warn|v
dommage|schade|a pity|ph|C'est dommage !|Schade!|What a pity!
quel dommage|wie schade|what a shame|ph
avoir dû|hätte … müssen / sollen|should have|ph`,
  say: `Si j'avais su, je t'aurais prévenu.|Wenn ich das gewusst hätte, hätte ich dir Bescheid gesagt.|If I'd known, I'd have let you know.
Si nous étions partis plus tôt, nous n'aurions pas raté le train.|Wenn wir früher losgegangen wären, hätten wir den Zug nicht verpasst.|If we'd left earlier, we wouldn't have missed the train.
J'aurais dû t'écouter.|Ich hätte auf dich hören sollen.|I should have listened to you.
Je ne regrette rien.|Ich bereue nichts.|I don't regret anything.
Si je n'étais pas allé à cette fête, je ne t'aurais pas rencontrée.|Wenn ich nicht auf diese Party gegangen wäre, hätte ich dich nicht kennengelernt.|If I hadn't gone to that party, I wouldn't have met you.
Quel dommage !|Wie schade!|What a shame!`,
  gram: [
    ["h", TB("Plus-que-parfait und Conditionnel passé", "Pluperfect and past conditional")],
    ["p", TB("<b>si + plus-que-parfait</b> (avais / étais + Partizip), Hauptsatz <b>conditionnel passé</b> (aurais / serais + Partizip) – für Dinge, die nicht passiert sind.", "<b>si + pluperfect</b> (avais / étais + participle), main clause <b>past conditional</b> (aurais / serais + participle) – for things that didn't happen.")],
    ["table", { head: [TB("Person", "person"), "si …", TB("Hauptsatz", "main clause")], rows: [["je", "si j'avais su", "j'aurais su"], ["tu", "si tu avais su", "tu aurais su"], ["il / elle", "s'il était venu", "il serait venu"], ["nous", "si nous avions su", "nous aurions su"], ["vous", "si vous étiez partis", "vous seriez partis"], ["ils / elles", "s'ils avaient su", "ils auraient su"]], say: 1 }],
    ["p", TB("Bedauern: <b>j'aurais dû</b> + Infinitiv = ich hätte … sollen: J'aurais dû partir plus tôt.", "Regret: <b>j'aurais dû</b> + infinitive = I should have …: J'aurais dû partir plus tôt.")],
    ["tip", TB("Gemischt: früher → heute: Si j'<b>avais étudié</b> la médecine, je <b>serais</b> médecin aujourd'hui.", "Mixed: then → now: Si j'<b>avais étudié</b> la médecine, je <b>serais</b> médecin aujourd'hui.")]
  ],
  drill: [
    ["Si j'___ su, je serais venu.", ["avais", "aurais", "ai"], 0],
    ["Si nous étions partis à l'heure, nous n'___ pas raté le train.", ["aurions", "avions", "aurons"], 0],
    ["J'aurais ___ t'écouter.", ["dû", "du", "devoir"], 0],
    ["Si tu m'avais appelé, je t'___ aidé.", ["aurais", "avais", "aurai"], 0],
    ["S'ils ___ venus, ils auraient adoré la fête.", ["étaient", "avaient", "seraient"], 0, TB("venir → être.", "venir → être.")],
    ["Si j'avais étudié la médecine, je ___ médecin aujourd'hui.", ["serais", "aurais été", "étais"], 0],
    ["Wie schade! → Quel ___ !", "dommage"]
  ],
  talk: { t: TB("Das verpasste Konzert", "The missed concert"), scene: TB("Dein Freund Romain war gestern auf einem Konzert – du hast es verpasst.", "Your friend Romain went to a concert yesterday – you missed it."), who: "Romain", slots: {}, lines: `a|Pourquoi tu n'es pas venu au concert hier ? C'était génial !|Warum bist du gestern nicht zum Konzert gekommen? Es war super!|Why didn't you come to the concert yesterday? It was great!
me|Je ne savais pas ! Si j'avais su, je serais venu.|Ich wusste es nicht! Wenn ich es gewusst hätte, wäre ich gekommen.|I didn't know! If I'd known, I'd have come.|Si j'avais su, je serais venu !
a|Je t'ai envoyé un message lundi…|Ich habe dir am Montag eine Nachricht geschickt …|I sent you a message on Monday …
me|Sérieux ? J'aurais dû regarder mon téléphone.|Im Ernst? Ich hätte auf mein Handy schauen sollen.|Seriously? I should have checked my phone.|Je ne l'ai pas vu, désolé !
a|Ils ont joué toutes leurs chansons connues.|Sie haben alle ihre bekannten Songs gespielt.|They played all their famous songs.
me|Quel dommage ! Si tu m'avais appelé, je serais venu tout de suite.|Wie schade! Wenn du mich angerufen hättest, wäre ich sofort gekommen.|What a shame! If you'd called me, I'd have come straight away.|Dommage ! Tu aurais dû m'appeler.
a|Bon, ils rejouent à Lyon le mois prochain.|Na ja, nächsten Monat spielen sie wieder in Lyon.|Well, they're playing in Lyon again next month.
me|Cette fois, je ne le rate pas ! Préviens-moi quand tu achètes les billets.|Diesmal verpasse ich es nicht! Sag mir Bescheid, wenn du die Tickets kaufst.|This time I won't miss it! Let me know when you buy the tickets.|Cette fois, je viens !` }
});

lesson("B2", { id: "fr-b2-03", t: TB("Il a dit que… – Indirekte Rede", "Il a dit que… – Reported speech"),
  goal: TB("Du kannst wiedergeben, was jemand gesagt, gefragt oder dich gebeten hat.", "You can report what someone said, asked or asked you to do."),
  words: `dire|sagen|to say; to tell|v|Elle m'a dit qu'elle était fatiguée.|Sie hat mir gesagt, dass sie müde sei.|She told me she was tired.
affirmer|behaupten|to state|v
expliquer|erklären|to explain|v
annoncer|ankündigen|to announce|v
promettre|versprechen|to promise|v|Il a promis qu'il viendrait.|Er hat versprochen, dass er kommen würde.|He promised he would come.
demander si|fragen, ob|to ask whether|v
demander de|bitten zu|to ask (someone) to|v|Elle m'a demandé de l'appeler.|Sie hat mich gebeten, sie anzurufen.|She asked me to call her.
répondre|antworten|to answer|v
avouer|gestehen; zugeben|to admit|v
nier|leugnen|to deny|v
la rumeur|das Gerücht|the rumour|n
le message vocal|die Sprachnachricht|the voice message|n
le propriétaire|der Vermieter|the landlord|n
le plombier|der Klempner|the plumber|n
la veille|der Vortag|the day before|n
le lendemain|der nächste Tag|the next day|n
ce jour-là|an jenem Tag|that day|ph
là-bas|dort|there|adv`,
  say: `Il m'a dit qu'il était malade.|Er hat mir gesagt, dass er krank sei.|He told me he was ill.
Anna dit qu'elle vient demain.|Anna sagt, dass sie morgen kommt.|Anna says she's coming tomorrow.
Elle m'a demandé si je voulais venir.|Sie hat mich gefragt, ob ich kommen wolle.|She asked me if I wanted to come.
Il m'a demandé de ne rien dire.|Er hat mich gebeten, nichts zu sagen.|He asked me not to say anything.
Elle a promis qu'elle arriverait à l'heure.|Sie hat versprochen, dass sie pünktlich kommen würde.|She promised she'd arrive on time.
Il a dit qu'il avait déjà fini.|Er hat gesagt, dass er schon fertig sei.|He said he had already finished.`,
  gram: [
    ["h", TB("Zeitverschiebung in der indirekten Rede", "Tense shift in reported speech")],
    ["p", TB("Steht das Einleitungsverb in der Vergangenheit (<i>il a dit, elle a demandé</i>), rückt die Zeit zurück. Mit <i>il dit que</i> (Präsens) bleibt alles gleich.", "If the reporting verb is in the past (<i>il a dit, elle a demandé</i>), the tense shifts back. With <i>il dit que</i> (present) nothing changes.")],
    ["table", { head: [TB("direkt", "direct"), TB("indirekt: il a dit que …", "reported: il a dit que …")], rows: [["« Je suis fatigué. »", "il était fatigué"], ["« J'ai fini. »", "il avait fini"], ["« Je viendrai demain. »", "il viendrait le lendemain"], ["« Appelle-moi. »", "(il m'a demandé) de l'appeler"], ["« Tu viens ? »", "(il m'a demandé) si je venais"]], say: 1 }],
    ["p", TB("Zeitangaben ändern sich: aujourd'hui → <b>ce jour-là</b>, demain → <b>le lendemain</b>, hier → <b>la veille</b>, ici → <b>là-bas</b>.", "Time words change: aujourd'hui → <b>ce jour-là</b>, demain → <b>le lendemain</b>, hier → <b>la veille</b>, ici → <b>là-bas</b>.")],
    ["tip", TB("Ja/Nein-Fragen → <b>si</b>; Aufforderungen → <b>demander de</b> + Infinitiv: Elle m'a demandé <b>de</b> fermer la porte.", "Yes/no questions → <b>si</b>; requests → <b>demander de</b> + infinitive: Elle m'a demandé <b>de</b> fermer la porte.")]
  ],
  drill: [
    ["« Je suis fatiguée. » → Elle a dit qu'elle ___ fatiguée.", ["était", "est", "sera"], 0],
    ["« Je viendrai demain. » → Il a dit qu'il ___ le lendemain.", ["viendrait", "viendra", "venait"], 0],
    ["« Tu as faim ? » → Il m'a demandé ___ j'avais faim.", ["si", "que", "de"], 0],
    ["« Appelle-moi. » → Elle m'a demandé ___ l'appeler.", ["de", "que", "si"], 0],
    ["« J'ai perdu mes clés. » → Il a dit qu'il ___ perdu ses clés.", ["avait", "a", "aurait"], 0],
    ["Anna dit qu'elle ___ demain.", ["vient", "venait", "viendrait"], 0, TB("Einleitung im Präsens → keine Zeitverschiebung.", "Reporting verb in the present → no tense shift.")],
    ["Er hat versprochen, dass er kommen würde. → Il a promis qu'il ___.", "viendrait"]
  ],
  talk: { t: TB("Die Sprachnachricht", "The voice message"), scene: TB("Deine Mitbewohnerin Pauline hat die Sprachnachricht des Vermieters nicht gehört.", "Your flatmate Pauline hasn't heard the landlord's voice message."), who: "Pauline", slots: {}, lines: `a|Tu as écouté le message vocal du propriétaire ?|Hast du die Sprachnachricht des Vermieters gehört?|Have you listened to the landlord's voice message?
me|Oui. Il a dit que le plombier viendrait demain.|Ja. Er hat gesagt, dass der Klempner morgen kommen würde.|Yes. He said the plumber would come tomorrow.|Oui, il a dit que le plombier passerait demain.
a|À quelle heure ?|Um wie viel Uhr?|What time?
me|Il a dit qu'il arriverait vers neuf heures.|Er hat gesagt, dass er gegen neun kommen würde.|He said he'd arrive around nine.|Vers neuf heures, il a dit.
a|Et c'est tout ?|Und das ist alles?|And is that all?
me|Non, il nous a demandé de libérer la cuisine.|Nein, er hat uns gebeten, die Küche frei zu machen.|No, he asked us to clear the kitchen.|Il a demandé qu'on libère la cuisine.
a|D'accord. Il a demandé si quelqu'un serait là ?|Okay. Hat er gefragt, ob jemand da sein würde?|OK. Did he ask if someone would be there?
me|Oui, il m'a demandé si je pouvais ouvrir, et j'ai dit oui.|Ja, er hat mich gefragt, ob ich aufmachen könnte, und ich habe ja gesagt.|Yes, he asked me if I could open the door, and I said yes.|Oui, je lui ai dit que je serais là.` }
});

lesson("B2", { id: "fr-b2-04", t: TB("Le monde du travail – Formelle Kommunikation", "Le monde du travail – Formal communication"),
  goal: TB("Du kannst formelle E-Mails schreiben, Termine vereinbaren und höflich verhandeln.", "You can write formal emails, arrange appointments and negotiate politely."),
  words: `la réunion|die Besprechung|the meeting|n
l'ordre du jour|die Tagesordnung (m)|the agenda|n
le devis|der Kostenvoranschlag|the quote|n|Veuillez trouver ci-joint notre devis.|Anbei erhalten Sie unseren Kostenvoranschlag.|Please find our quote attached.
ci-joint|anbei|attached|adv
la facture|die Rechnung|the invoice|n
le délai|die Frist|the deadline; the lead time|n|Le délai de livraison est de deux semaines.|Die Lieferzeit beträgt zwei Wochen.|Delivery takes two weeks.
la commande|die Bestellung|the order|n
le client|der Kunde|the client|n
le fournisseur|der Lieferant|the supplier|n
la proposition|der Vorschlag; das Angebot|the proposal|n
négocier|verhandeln|to negotiate|v
l'accord|die Vereinbarung (m)|the agreement|n|Nous sommes parvenus à un accord.|Wir haben eine Einigung erzielt.|We've reached an agreement.
fixer un rendez-vous|einen Termin vereinbaren|to arrange an appointment|v
Madame, Monsieur|Sehr geehrte Damen und Herren|Dear Sir or Madam|ph
cordialement|mit freundlichen Grüßen|kind regards|adv
dans les meilleurs délais|so bald wie möglich|as soon as possible|ph
suite à|im Anschluss an; bezüglich|following|ph|Suite à notre conversation, …|Im Anschluss an unser Gespräch …|Following our conversation, …
je me permets de|ich erlaube mir|I am writing to; may I|ph
rester à disposition|zur Verfügung stehen|to remain available|v`,
  say: `Madame, Monsieur,|Sehr geehrte Damen und Herren,|Dear Sir or Madam,
Je me permets de vous contacter au sujet de votre commande.|Ich wende mich an Sie bezüglich Ihrer Bestellung.|I am contacting you regarding your order.
Veuillez trouver ci-joint la facture de mars.|Anbei finden Sie die Rechnung für März.|Please find attached the invoice for March.
Je vous serais reconnaissant de me répondre dans les meilleurs délais.|Ich wäre Ihnen dankbar, wenn Sie mir so bald wie möglich antworten würden.|I would be grateful if you could reply as soon as possible.
Jeudi à dix heures, cela vous conviendrait ?|Würde Ihnen Donnerstag um zehn passen?|Would Thursday at ten suit you?
Je reste à votre disposition pour toute question.|Für Fragen stehe ich Ihnen gern zur Verfügung.|I remain at your disposal for any questions.
Cordialement,|Mit freundlichen Grüßen|Kind regards,`,
  gram: [
    ["h", TB("Höflich mit <i>vous</i>, Conditionnel und festen Formeln", "Polite with <i>vous</i>, the conditional and set phrases")],
    ["table", { head: [TB("direkt", "direct"), TB("höflich", "polite")], rows: [["Envoyez-moi le devis.", "Pourriez-vous m'envoyer le devis ?"], ["Je veux une réunion.", "Je souhaiterais fixer une réunion."], ["Répondez vite.", "Je vous serais reconnaissant de me répondre rapidement."]], say: 1 }],
    ["ex", [["Nous avons le regret de vous informer que…", "Wir müssen Ihnen leider mitteilen, dass …", "We regret to inform you that …"], ["N'hésitez pas à me contacter.", "Zögern Sie nicht, mich zu kontaktieren.", "Do not hesitate to contact me."], ["Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.", "Hochachtungsvoll (sehr formell)", "Yours faithfully (very formal)"]]],
    ["tip", TB("Französische Geschäftsbriefe sind förmlicher als deutsche. In E-Mails reicht meist <b>Cordialement</b> oder <b>Bien cordialement</b> als Gruß.", "French business letters are more formal than German or English ones. In emails <b>Cordialement</b> or <b>Bien cordialement</b> is usually enough.")]
  ],
  drill: [
    ["___-vous m'envoyer la facture ?", ["Pourriez", "Pouvez de", "Pourrez"], 0],
    ["Veuillez trouver ___ notre devis.", ["ci-joint", "ci-dessous joint", "joint ici"], 0],
    ["Je vous serais ___ de me répondre rapidement.", ["reconnaissant", "reconnaissance", "reconnu"], 0],
    ["Je me ___ de vous contacter au sujet de votre commande.", ["permets", "permet", "permis"], 0],
    ["N'hésitez pas ___ me contacter.", ["à", "de", "pour"], 0],
    ["Je reste à votre ___ pour toute question.", ["disposition", "dispose", "service de"], 0],
    ["Wir haben eine Einigung erzielt. → Nous sommes parvenus à un ___.", "accord"]
  ],
  talk: { t: TB("Anruf eines Kunden", "A call from a client"), scene: TB("Monsieur Girard, ein Kunde, ruft wegen eines Kostenvoranschlags an.", "Monsieur Girard, a client, calls about a quote."), who: "M. Girard", slots: {}, lines: `a|Bonjour, Hervé Girard, de la société Girard Bâtiment.|Guten Tag, Hervé Girard von der Firma Girard Bâtiment.|Hello, Hervé Girard from Girard Bâtiment.
me|Bonjour, monsieur Girard. Que puis-je faire pour vous ?|Guten Tag, Herr Girard. Was kann ich für Sie tun?|Hello, Mr Girard. What can I do for you?|Bonjour. En quoi puis-je vous aider ?
a|Je vous appelle au sujet du devis que vous nous avez envoyé.|Ich rufe wegen des Kostenvoranschlags an, den Sie uns geschickt haben.|I'm calling about the quote you sent us.
me|Oui, bien sûr. Vous avez une question ?|Ja, natürlich. Haben Sie eine Frage?|Yes, of course. Do you have a question?|Bien sûr. Qu'est-ce que je peux vous préciser ?
a|Nous aimerions négocier le prix. Pourrions-nous nous rencontrer cette semaine ?|Wir würden gern über den Preis verhandeln. Könnten wir uns diese Woche treffen?|We'd like to negotiate the price. Could we meet this week?
me|Volontiers. Jeudi à dix heures, cela vous conviendrait ?|Gern. Würde Ihnen Donnerstag um zehn passen?|Gladly. Would Thursday at ten suit you?|Bien sûr. Que diriez-vous de jeudi matin ?
a|Parfait. Pourriez-vous m'envoyer l'adresse par mail ?|Perfekt. Könnten Sie mir die Adresse per Mail schicken?|Perfect. Could you send me the address by email?
me|Je vous l'envoie tout de suite. À jeudi, monsieur Girard.|Ich schicke sie Ihnen sofort. Bis Donnerstag, Herr Girard.|I'll send it right away. See you on Thursday, Mr Girard.|Je vous l'envoie. Bonne journée !` }
});
