/* Italiano B2 · 1–4 */
lesson("B2", { id: "it-b2-01", t: TB("Argomentare – Konnektoren mit Congiuntivo", "Argomentare – Connectors with the subjunctive"),
  goal: TB("Du kannst Argumente strukturieren, Einwände formulieren und Konjunktionen mit Congiuntivo benutzen.", "You can structure arguments, raise objections and use conjunctions that take the subjunctive."),
  words: `argomentare|argumentieren|to argue (a case)|v
la tesi|die These|the thesis|n
l'argomento|das Argument; das Thema|the argument; the topic|n
sostenere|behaupten; vertreten|to maintain; to support|v|Molti sostengono che il turismo rovini le città.|Viele behaupten, der Tourismus ruiniere die Städte.|Many claim that tourism ruins cities.
in primo luogo|erstens|firstly|ph
inoltre|außerdem|moreover|adv
d'altra parte|andererseits|on the other hand|ph
tuttavia|jedoch|however|adv
benché|obwohl|although|x
sebbene|obwohl|although|x
nonostante (che)|obwohl; trotz|even though; despite|x
affinché|damit|so that|x|Ve lo spiego affinché capiate.|Ich erkläre es euch, damit ihr es versteht.|I'm explaining it so that you understand.
a meno che non|es sei denn|unless|ph
purché|vorausgesetzt, dass|provided that|x
prima che|bevor|before|x
senza che|ohne dass|without|x
in conclusione|abschließend|in conclusion|ph
il turismo di massa|der Massentourismus|mass tourism|n
gli affitti brevi|die Kurzzeitvermietung|short-term rentals|n
il residente|der Einwohner|the resident|n
spopolarsi|sich entvölkern|to become depopulated|v
la soluzione|die Lösung|the solution|n
il compromesso|der Kompromiss|the compromise|n`,
  say: `Benché sia tardi, continuiamo a lavorare.|Obwohl es spät ist, arbeiten wir weiter.|Although it's late, we'll keep working.
Te lo dico affinché tu sia preparato.|Ich sage es dir, damit du vorbereitet bist.|I'm telling you so that you're prepared.
Vengo anch'io, purché non si faccia troppo tardi.|Ich komme auch, vorausgesetzt, es wird nicht zu spät.|I'll come too, provided it doesn't get too late.
Partiamo prima che inizi a piovere.|Fahren wir los, bevor es anfängt zu regnen.|Let's leave before it starts raining.
Non lo farò a meno che tu non mi aiuti.|Ich mache es nicht, es sei denn, du hilfst mir.|I won't do it unless you help me.
Da un lato … dall'altro …|Einerseits … andererseits …|On the one hand … on the other …
Non sono del tutto convinto.|Ich bin nicht ganz überzeugt.|I'm not completely convinced.`,
  gram: [
    ["h", TB("Konjunktionen + Congiuntivo", "Conjunctions + subjunctive")],
    ["table", { head: [TB("Bedeutung", "meaning"), TB("Konjunktion", "conjunction"), TB("Beispiel", "example")], rows: [
      [TB("obwohl", "although"), "benché, sebbene, nonostante", "Benché <b>sia</b> stanco, esco."], [TB("damit", "so that"), "affinché, perché", "Parlo piano affinché tu <b>capisca</b>."],
      [TB("vorausgesetzt", "provided that"), "purché, a condizione che", "Ti presto la macchina purché tu <b>stia</b> attento."], [TB("es sei denn", "unless"), "a meno che non", "Esco, a meno che non <b>piova</b>."],
      [TB("bevor", "before"), "prima che", "Torna prima che <b>faccia</b> buio."], [TB("ohne dass", "without"), "senza che", "È uscito senza che nessuno lo <b>vedesse</b>."]], say: 2 }],
    ["p", TB("In der Vergangenheit folgt der Congiuntivo imperfetto: <b>Benché fosse</b> stanco, è uscito.", "In the past the imperfect subjunctive follows: <b>Benché fosse</b> stanco, è uscito.")],
    ["tip", TB("Achtung: <b>anche se</b> (auch wenn) steht mit Indikativ: <i>Anche se è tardi, esco.</i> <b>Benché</b> verlangt den Congiuntivo: <i>Benché sia tardi …</i>", "Careful: <b>anche se</b> (even if) takes the indicative: <i>Anche se è tardi, esco.</i> <b>Benché</b> requires the subjunctive: <i>Benché sia tardi …</i>")]
  ],
  forms: { verbs: ["essere", "avere", "fare", "potere", "venire", "capire"], tenses: ["Congiuntivo presente", "Congiuntivo imperfetto"] },
  drill: [
    ["Benché ___ stanco, vado in palestra.", ["sia", "sono", "sarei"], 0],
    ["Anche se ___ freddo, usciamo.", ["fa", "faccia", "facesse"], 0, TB("anche se + Indikativ.", "anche se + indicative.")],
    ["Ti do il mio numero affinché tu mi ___ chiamare.", ["possa", "puoi", "potresti"], 0],
    ["Usciamo, a meno che non ___ .", ["piova", "piove", "pioverà"], 0],
    ["Te lo presto, purché me lo ___ domani. (restituire, tu)", "restituisca"],
    ["Sebbene ___ molto, non era ricco. (lavorare, lui)", "lavorasse"],
    ["Dobbiamo finire prima che ___ il capo. (arrivare)", "arrivi"]
  ],
  talk: { t: TB("Debatte: Tourismus in Venedig", "Debate: tourism in Venice"), scene: TB("In einer Diskussionsrunde vertritt Michele die Position, dass der Tourismus Venedig rettet. Du siehst es kritischer.", "In a discussion group, Michele argues that tourism saves Venice. You're more critical."), who: "Michele", slots: {}, lines: `a|Secondo me il turismo è una risorsa: senza turisti Venezia morirebbe.|Meiner Meinung nach ist der Tourismus eine Ressource: Ohne Touristen würde Venedig sterben.|In my view tourism is a resource: without tourists Venice would die.
me|Capisco, tuttavia il turismo di massa sta spopolando la città.|Ich verstehe, jedoch entvölkert der Massentourismus die Stadt.|I understand, however mass tourism is depopulating the city.|Sì, ma il turismo di massa sta svuotando la città.
a|In che senso? I veneziani guadagnano grazie ai turisti.|Inwiefern? Die Venezianer verdienen dank der Touristen.|In what sense? Venetians earn money thanks to the tourists.
me|Benché alcuni guadagnino, gli affitti sono troppo alti per i residenti.|Obwohl einige verdienen, sind die Mieten für die Einwohner zu hoch.|Although some earn money, rents are too high for residents.|Sebbene qualcuno guadagni, gli affitti sono troppo cari per chi ci vive.
a|E quale sarebbe la soluzione, secondo te?|Und was wäre deiner Meinung nach die Lösung?|And what would the solution be, in your view?
me|Bisognerebbe limitare gli affitti brevi affinché i giovani possano restare.|Man müsste die Kurzzeitvermietung begrenzen, damit die jungen Leute bleiben können.|Short-term rentals should be limited so that young people can stay.|Limiterei gli affitti brevi perché i giovani possano restare.
a|Va bene, purché non si danneggi l'economia.|Einverstanden, vorausgesetzt, man schadet der Wirtschaft nicht.|All right, provided the economy isn't harmed.
me|Certo, ci vuole un compromesso. In conclusione, servono regole chiare.|Natürlich, es braucht einen Kompromiss. Abschließend: Es braucht klare Regeln.|Of course, a compromise is needed. To conclude, we need clear rules.|Ci vuole un compromesso, ma servono regole chiare.` }
});

lesson("B2", { id: "it-b2-02", t: TB("Se l'avessi saputo… – Irreale Vergangenheit", "Se l'avessi saputo… – Unreal past conditions"),
  goal: TB("Du kannst über verpasste Chancen und Bedauern sprechen: Congiuntivo trapassato + Condizionale passato.", "You can talk about missed chances and regrets: pluperfect subjunctive + past conditional."),
  words: `il rimpianto|das Bedauern (über Verpasstes)|the regret|n
il rimorso|die Reue|remorse|n
pentirsi di|bereuen|to regret; to repent|v|Non mi pento di niente.|Ich bereue nichts.|I don't regret anything.
l'occasione|die Gelegenheit; die Chance|the opportunity|n
perdere un'occasione|eine Chance verpassen|to miss an opportunity|v
cogliere l'occasione|die Gelegenheit ergreifen|to seize the opportunity|v
col senno di poi|im Nachhinein|with hindsight|ph
se solo|wenn nur|if only|ph
magari|hätte ich doch …|if only|adv|Magari l'avessi saputo prima!|Hätte ich das nur früher gewusst!|If only I'd known earlier!
ormai|inzwischen; jetzt (zu spät)|by now; at this point|adv
il destino|das Schicksal|fate|n
il caso|der Zufall|chance|n
per caso|zufällig|by chance|ph
la svolta|die Wende|the turning point|n
decidere diversamente|anders entscheiden|to decide differently|v
la borsa di studio|das Stipendium|the scholarship|n
l'Erasmus|das Erasmus-Semester|the Erasmus exchange|n
rifare|nochmal machen|to redo|v
cambiare strada|einen anderen Weg einschlagen|to change direction|v`,
  say: `Se l'avessi saputo, sarei venuto prima.|Hätte ich das gewusst, wäre ich früher gekommen.|If I'd known, I would have come earlier.
Se fossimo partiti prima, non avremmo perso il treno.|Wären wir früher losgefahren, hätten wir den Zug nicht verpasst.|If we had left earlier, we wouldn't have missed the train.
Avrei dovuto ascoltarti.|Ich hätte auf dich hören sollen.|I should have listened to you.
Al tuo posto avrei accettato.|An deiner Stelle hätte ich angenommen.|In your place I would have accepted.
Se avessi studiato medicina, oggi sarei medico.|Hätte ich Medizin studiert, wäre ich heute Arzt.|If I had studied medicine, I would be a doctor today.
Col senno di poi è facile parlare.|Hinterher ist man immer schlauer.|Hindsight is twenty-twenty.
Non me ne pento.|Ich bereue es nicht.|I don't regret it.`,
  gram: [
    ["h", TB("Irreale Bedingung in der Vergangenheit", "Unreal condition in the past")],
    ["p", TB("<b>se + congiuntivo trapassato</b> (avessi/fossi + Partizip) → <b>condizionale passato</b> (avrei/sarei + Partizip).", "<b>se + pluperfect subjunctive</b> (avessi/fossi + participle) → <b>past conditional</b> (avrei/sarei + participle).")],
    ["ex", [["Se avessi studiato, avrei passato l'esame.", "Hätte ich gelernt, hätte ich die Prüfung bestanden.", "If I had studied, I would have passed the exam."], ["Se fosse venuta, si sarebbe divertita.", "Wäre sie gekommen, hätte sie Spaß gehabt.", "If she had come, she would have had fun."]]],
    ["h", TB("Gemischte Formen", "Mixed forms")],
    ["p", TB("Vergangene Bedingung, Folge heute: <b>Se avessi accettato</b> quel lavoro, <b>adesso vivrei</b> a Londra. Bedingung heute, Folge vergangen: <b>Se fossi</b> più coraggioso, <b>avrei detto</b> di sì.", "Past condition, present result: <b>Se avessi accettato</b> quel lavoro, <b>adesso vivrei</b> a Londra. Present condition, past result: <b>Se fossi</b> più coraggioso, <b>avrei detto</b> di sì.")],
    ["tip", TB("Im gesprochenen Italienisch hört man auch das Imperfetto für beides: <i>Se lo sapevo, venivo.</i> – umgangssprachlich, nicht für Prüfungen!", "In spoken Italian you'll also hear the imperfetto in both parts: <i>Se lo sapevo, venivo.</i> – colloquial, not for exams!")]
  ],
  drill: [
    ["Se ___ saputo, ti avrei aiutato.", ["l'avessi", "l'avrei", "l'avevo"], 0],
    ["Se fossimo usciti prima, ___ il concerto.", ["avremmo visto", "avessimo visto", "vedremmo"], 0],
    ["Se Paolo fosse venuto, si ___ divertito.", ["sarebbe", "avrebbe", "fosse"], 0],
    ["Se avessi accettato quel lavoro, adesso ___ a Londra.", ["vivrei", "avrei vissuto", "vivessi"], 0],
    ["Avrei ___ ascoltarti. (dovere)", "dovuto"],
    ["Se lei ___ prima, avrebbe preso il treno. (partire)", "fosse partita"],
    ["Se tu me l'___ chiesto, te l'avrei detto.", ["avessi", "avresti", "avevi"], 0]
  ],
  talk: { t: TB("Was wäre gewesen, wenn …", "What would have happened if…"), scene: TB("Beim Klassentreffen sprichst du mit deiner alten Studienfreundin Irene über eure Entscheidungen.", "At a reunion you talk with your old university friend Irene about the choices you made."), who: "Irene", slots: {}, lines: `a|Ti ricordi? Ti avevano offerto un posto a Londra dopo la laurea.|Weißt du noch? Man hatte dir nach dem Abschluss eine Stelle in London angeboten.|Do you remember? You were offered a job in London after graduating.
me|Sì! Se avessi accettato, adesso vivrei in Inghilterra.|Ja! Hätte ich angenommen, würde ich jetzt in England leben.|Yes! If I'd accepted, I'd be living in England now.|Certo! Se avessi detto di sì, ora vivrei a Londra.
a|E te ne penti?|Und bereust du es?|And do you regret it?
me|Un po'. Col senno di poi, avrei dovuto provarci.|Ein bisschen. Im Nachhinein hätte ich es versuchen sollen.|A little. With hindsight, I should have given it a try.|Un po', forse avrei dovuto provarci.
a|Io invece non ho fatto l'Erasmus e me ne pento ancora.|Ich dagegen habe kein Erasmus gemacht und bereue es immer noch.|I, on the other hand, didn't do Erasmus and I still regret it.
me|Perché non l'hai fatto?|Warum hast du es nicht gemacht?|Why didn't you do it?|Come mai non sei partita?
a|Avevo paura. Se fossi partita, forse avrei imparato bene lo spagnolo.|Ich hatte Angst. Wäre ich gegangen, hätte ich vielleicht gut Spanisch gelernt.|I was scared. If I'd gone, I might have learnt Spanish properly.
me|Non è mai troppo tardi! Potresti fare un corso a Valencia quest'estate.|Es ist nie zu spät! Du könntest diesen Sommer einen Kurs in Valencia machen.|It's never too late! You could do a course in Valencia this summer.|Non è troppo tardi, puoi ancora imparare lo spagnolo!` }
});

lesson("B2", { id: "it-b2-03", t: TB("Ha detto che… – Indirekte Rede", "Ha detto che… – Reported speech"),
  goal: TB("Du kannst wiedergeben, was andere gesagt haben, mit der richtigen Zeitenfolge.", "You can report what others said, using the correct sequence of tenses."),
  words: `riferire|weitergeben; berichten|to report; to pass on|v
affermare|behaupten; erklären|to state|v
dichiarare|erklären (offiziell)|to declare|v
spiegare|erklären|to explain|v
raccontare|erzählen|to tell|v
chiedere|fragen|to ask|v|Mi ha chiesto se volevo venire.|Er hat mich gefragt, ob ich mitkommen wollte.|He asked me if I wanted to come.
rispondere|antworten|to reply|v
aggiungere|hinzufügen|to add|v
ammettere|zugeben|to admit|v
promettere|versprechen|to promise|v
lamentarsi|sich beschweren|to complain|v
il giorno prima|am Tag davor|the day before|ph
il giorno dopo|am Tag danach|the next day|ph
quel giorno|an jenem Tag|that day|ph
lì|dort|there|adv
allora|damals; dann|then; at that time|adv
la voce|das Gerücht; die Stimme|the rumour; the voice|n
il pettegolezzo|der Klatsch|the gossip|n
a quanto pare|anscheinend|apparently|ph
pare che|es scheint, dass|it seems that|ph|Pare che si sposino a giugno.|Anscheinend heiraten sie im Juni.|It seems they're getting married in June.`,
  say: `Mi ha detto che era stanco.|Er hat mir gesagt, dass er müde sei.|He told me he was tired.
Ha detto che sarebbe venuta il giorno dopo.|Sie sagte, sie würde am nächsten Tag kommen.|She said she would come the next day.
Mi ha chiesto dove abitassi.|Er hat mich gefragt, wo ich wohne.|He asked me where I lived.
Ci ha detto di aspettare lì.|Er hat uns gesagt, wir sollen dort warten.|He told us to wait there.
Ha ammesso di aver sbagliato.|Er hat zugegeben, dass er einen Fehler gemacht hat.|He admitted he'd made a mistake.
A quanto pare, l'ufficio chiude.|Anscheinend schließt das Büro.|Apparently the office is closing.
Non ci crederai, ma…|Du wirst es nicht glauben, aber …|You won't believe it, but…`,
  gram: [
    ["h", TB("Zeitenfolge in der indirekten Rede", "Sequence of tenses in reported speech")],
    ["table", { head: [TB("direkt", "direct"), TB("indirekt (ha detto che …)", "reported (ha detto che …)")], rows: [
      ["«Sono stanco.» (presente)", "… era stanco. (imperfetto)"], ["«Ho finito.» (passato prossimo)", "… aveva finito. (trapassato)"], ["«Verrò domani.» (futuro)", "… sarebbe venuto il giorno dopo. (condizionale passato)"], ["«Vieni!» (imperativo)", "… mi ha detto di venire. (di + infinito)"]] }],
    ["p", TB("Steht das einleitende Verb im Präsens (<i>dice che</i>), bleibt die Zeit gleich: Dice che <b>è</b> stanco. Auch Orts- und Zeitangaben ändern sich: oggi → <b>quel giorno</b>, domani → <b>il giorno dopo</b>, qui → <b>lì</b>.", "If the reporting verb is in the present (<i>dice che</i>), the tense stays the same: Dice che <b>è</b> stanco. Time and place words change too: oggi → <b>quel giorno</b>, domani → <b>il giorno dopo</b>, qui → <b>lì</b>.")],
    ["tip", TB("Die Zukunft in der Vergangenheit ist im Italienischen das <b>condizionale passato</b>: Ha detto che <b>sarebbe arrivato</b> alle otto (nicht: arriverebbe).", "The future-in-the-past in Italian is the <b>past conditional</b>: Ha detto che <b>sarebbe arrivato</b> alle otto (not: arriverebbe).")]
  ],
  drill: [
    ["«Sono stanca.» → Ha detto che ___ stanca.", ["era", "è stata", "sia"], 0],
    ["«Ho perso il treno.» → Ha detto che ___ il treno.", ["aveva perso", "ha perso", "perdeva"], 0],
    ["«Ti chiamerò.» → Ha detto che mi ___ .", ["avrebbe chiamato", "chiamerebbe", "chiamerà stato"], 0],
    ["«Aspettate qui!» → Ci ha detto ___ lì.", ["di aspettare", "che aspettiamo", "aspettate"], 0],
    ["«Dove abiti?» → Mi ha chiesto dove ___ .", ["abitassi", "abito", "abiterò"], 0],
    ["«Domani parto.» → Ha detto che partiva ___ .", ["il giorno dopo", "domani", "ieri"], 0],
    ["Ha ammesso di ___ sbagliato.", ["aver", "essere", "avesse"], 0]
  ],
  talk: { t: TB("Klatsch im Büro", "Office gossip"), scene: TB("Deine Kollegin Beatrice erzählt dir, was der Chef heute Morgen in der Besprechung gesagt hat. Du warst nicht dabei.", "Your colleague Beatrice tells you what the boss said in this morning's meeting. You weren't there."), who: "Beatrice", slots: {}, lines: `a|Non ci crederai: in riunione il capo ha detto che l'azienda aprirà una sede a Milano.|Du wirst es nicht glauben: In der Besprechung hat der Chef gesagt, dass die Firma eine Niederlassung in Mailand eröffnet.|You won't believe it: in the meeting the boss said the company is opening an office in Milan.
me|Davvero? E ha detto chi andrà a lavorarci?|Wirklich? Und hat er gesagt, wer dort arbeiten wird?|Really? And did he say who's going to work there?|Sul serio? Ha detto chi ci andrà?
a|Ha detto che avrebbe scelto tre persone entro la fine del mese.|Er hat gesagt, er würde bis Ende des Monats drei Leute auswählen.|He said he would choose three people by the end of the month.
me|E ha chiesto se qualcuno era interessato?|Und hat er gefragt, ob jemand interessiert sei?|And did he ask if anyone was interested?|Ha chiesto chi fosse interessato?
a|Sì, ci ha detto di mandargli un'email entro venerdì.|Ja, er hat uns gesagt, wir sollen ihm bis Freitag eine E-Mail schicken.|Yes, he told us to send him an email by Friday.
me|Interessante! Gli scrivo oggi stesso.|Interessant! Ich schreibe ihm noch heute.|Interesting! I'll write to him today.|Allora gli scrivo subito.
a|Aspetta, ha aggiunto anche che lo stipendio sarebbe stato più alto.|Warte, er hat auch hinzugefügt, dass das Gehalt höher wäre.|Wait, he also added that the salary would be higher.
me|Ancora meglio! Grazie di avermelo detto.|Noch besser! Danke, dass du es mir gesagt hast.|Even better! Thanks for telling me.|Grazie per avermelo detto!` }
});

lesson("B2", { id: "it-b2-04", t: TB("Lavoro ed economia – Formelle Kommunikation", "Lavoro ed economia – Formal communication"),
  goal: TB("Du kannst formelle E-Mails schreiben, Verhandlungen führen und Fachwortschatz aus Wirtschaft und Beruf benutzen.", "You can write formal emails, negotiate and use business vocabulary."),
  words: `il fatturato|der Umsatz|turnover; revenue|n|Il fatturato è cresciuto del dieci per cento.|Der Umsatz ist um zehn Prozent gewachsen.|Turnover has grown by ten per cent.
l'utile|der Gewinn|the profit|n
la perdita|der Verlust|the loss|n
il bilancio|die Bilanz|the balance sheet; the budget|n
l'investimento|die Investition|the investment|n
il preventivo|der Kostenvoranschlag; das Angebot|the quote; the estimate|n
la fattura|die Rechnung (Firma)|the invoice|n
il fornitore|der Lieferant|the supplier|n
la trattativa|die Verhandlung|the negotiation|n
le condizioni di pagamento|die Zahlungsbedingungen|payment terms|n
la consegna|die Lieferung|the delivery|n
il termine di consegna|die Lieferfrist|the delivery deadline|n
la scadenza|die Frist; die Fälligkeit|the deadline; the due date|n
in allegato|im Anhang|attached|ph|In allegato trova il preventivo.|Im Anhang finden Sie das Angebot.|Please find the quote attached.
gentile dottore / gentile dottoressa|sehr geehrter Herr / sehr geehrte Frau (Anrede)|Dear Sir / Dear Madam|ph
cordiali saluti|mit freundlichen Grüßen|kind regards|ph
in attesa di un Suo riscontro|in Erwartung Ihrer Rückmeldung|looking forward to your reply|ph
con riferimento a|bezugnehmend auf|with reference to|ph
venire incontro|entgegenkommen|to meet halfway|v
lo sconto|der Rabatt|the discount|n
la proposta|der Vorschlag; das Angebot|the proposal|n`,
  say: `Le scrivo con riferimento alla Sua offerta del 3 marzo.|Ich schreibe Ihnen bezugnehmend auf Ihr Angebot vom 3. März.|I'm writing with reference to your offer of 3 March.
In allegato Le invio il contratto firmato.|Anbei sende ich Ihnen den unterschriebenen Vertrag.|Please find the signed contract attached.
Saremmo disposti a concedere uno sconto del cinque per cento.|Wir wären bereit, einen Rabatt von fünf Prozent zu gewähren.|We would be willing to grant a five per cent discount.
Potreste venirci incontro sui termini di consegna?|Könnten Sie uns bei der Lieferfrist entgegenkommen?|Could you meet us halfway on the delivery deadline?
Restiamo in attesa di un Suo cortese riscontro.|Wir freuen uns auf Ihre Rückmeldung.|We look forward to your reply.
Mi permetto di ricordarLe la scadenza del 30.|Ich erlaube mir, Sie an die Frist zum 30. zu erinnern.|May I remind you of the deadline on the 30th.
Cordiali saluti.|Mit freundlichen Grüßen.|Kind regards.`,
  gram: [
    ["h", TB("Formelles Register", "Formal register")],
    ["p", TB("In Geschäftsbriefen schreibt man die Höflichkeitsform oft groß: <b>Lei, Le, La, Suo</b> – auch angehängt: inviar<b>Le</b>, ringraziar<b>La</b>.", "In business letters the formal pronouns are often capitalised: <b>Lei, Le, La, Suo</b> – also when attached: inviar<b>Le</b>, ringraziar<b>La</b>.")],
    ["table", { head: [TB("neutral", "neutral"), TB("formell", "formal")], rows: [["Ti mando …", "Le invio …"], ["Puoi …?", "Potrebbe cortesemente …?"], ["Scusa per il ritardo.", "Ci scusiamo per il ritardo."], ["Ti rispondo presto.", "Le farò sapere al più presto."], ["Grazie.", "La ringrazio per la cortese attenzione."]], say: 1 }],
    ["h", TB("Condizionale für Höflichkeit und Verhandlung", "Conditional for politeness and negotiation")],
    ["p", TB("Verhandlungen werden im Condizionale geführt, das wirkt weicher: <b>Saremmo</b> interessati … <b>Potremmo</b> proporre … <b>Sarebbe</b> possibile …?", "Negotiations are conducted in the conditional, which sounds softer: <b>Saremmo</b> interessati … <b>Potremmo</b> proporre … <b>Sarebbe</b> possibile …?")],
    ["tip", TB("Titel sind in Italien wichtig: <b>Dottore/Dottoressa</b> für alle mit Hochschulabschluss, <b>Ingegnere</b>, <b>Avvocato</b>. Anrede: <i>Gentile Dottoressa Bianchi,</i>", "Titles matter in Italy: <b>Dottore/Dottoressa</b> for anyone with a degree, <b>Ingegnere</b>, <b>Avvocato</b>. Salutation: <i>Gentile Dottoressa Bianchi,</i>")]
  ],
  drill: [
    ["In allegato ___ invio la fattura, Dottoressa.", ["Le", "La", "Lei"], 0],
    ["___ possibile anticipare la consegna?", ["Sarebbe", "Sarà stato", "Fosse"], 0],
    ["Saremmo ___ a concedere uno sconto.", ["disposti", "disposto", "disporre"], 0],
    ["Con riferimento ___ Sua email del 5 maggio …", ["alla", "della", "nella"], 0],
    ["Il fatturato è aumentato ___ otto per cento.", ["dell'", "di", "al"], 0],
    ["Restiamo in attesa di un Suo ___ .", ["riscontro", "sconto", "fornitore"], 0],
    ["La ___ per la cortese attenzione. (ringraziare, io)", "ringrazio"]
  ],
  talk: { t: TB("Preisverhandlung", "Price negotiation"), scene: TB("Videocall mit dem Lieferanten Ingegner Fontana. Du willst bessere Konditionen für eine große Bestellung.", "Video call with the supplier, Mr Fontana. You want better terms for a large order."), who: "Ing. Fontana", slots: {}, lines: `a|Buongiorno! Ha ricevuto il nostro preventivo?|Guten Tag! Haben Sie unser Angebot erhalten?|Good morning! Did you receive our quote?
me|Buongiorno, ingegnere. Sì, l'abbiamo ricevuto, grazie. Siamo molto interessati.|Guten Tag, Herr Fontana. Ja, wir haben es erhalten, danke. Wir sind sehr interessiert.|Good morning, Mr Fontana. Yes, we received it, thank you. We're very interested.|Sì, grazie, l'abbiamo ricevuto e siamo interessati.
a|Ottimo. Ci sono domande?|Sehr gut. Gibt es Fragen?|Excellent. Any questions?
me|Sì. Visto il volume dell'ordine, sarebbe possibile avere uno sconto?|Ja. Angesichts der Bestellmenge, wäre ein Rabatt möglich?|Yes. Given the size of the order, would a discount be possible?|Considerato il volume, potreste farci uno sconto?
a|Potremmo concedere un tre per cento.|Wir könnten drei Prozent gewähren.|We could grant three per cent.
me|Speravamo in qualcosa di più. Che ne dice del sette per cento?|Wir hatten auf etwas mehr gehofft. Was halten Sie von sieben Prozent?|We were hoping for a bit more. What about seven per cent?|Pensavamo a un sette per cento.
a|Il sette è troppo. Possiamo arrivare al cinque, con pagamento a trenta giorni.|Sieben ist zu viel. Wir können auf fünf gehen, bei Zahlung innerhalb von dreißig Tagen.|Seven is too much. We can go to five, with payment within thirty days.
me|Va bene, il cinque per cento ci sta bene. E i termini di consegna?|In Ordnung, fünf Prozent passen uns. Und die Lieferfristen?|All right, five per cent works for us. And the delivery times?|D'accordo per il cinque. E la consegna?
a|La consegna avverrebbe entro sei settimane dall'ordine.|Die Lieferung würde innerhalb von sechs Wochen nach Bestellung erfolgen.|Delivery would take place within six weeks of the order.
me|Perfetto. Le invio la conferma d'ordine per email entro domani.|Perfekt. Ich schicke Ihnen die Auftragsbestätigung bis morgen per E-Mail.|Perfect. I'll send you the order confirmation by email by tomorrow.|Benissimo, Le mando la conferma entro domani.` }
});
