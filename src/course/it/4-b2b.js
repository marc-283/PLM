/* Italiano B2 · 5–8 */
lesson("B2", { id: "it-b2-05", t: TB("Società – Gesellschaft und Passiv mit <i>andare</i>", "Società – Society and the passive with <i>andare</i>"),
  goal: TB("Du kannst über gesellschaftliche Themen sprechen und Pflichten mit andare + Partizip ausdrücken.", "You can talk about social issues and express obligation with andare + participle."),
  words: `la società|die Gesellschaft|society|n
la disoccupazione|die Arbeitslosigkeit|unemployment|n
la disuguaglianza|die Ungleichheit|inequality|n
la povertà|die Armut|poverty|n
il welfare|der Sozialstaat|the welfare state|n
la pensione|die Rente|the pension|n
l'invecchiamento della popolazione|die Alterung der Bevölkerung|population ageing|n
la natalità|die Geburtenrate|the birth rate|n
la fuga dei cervelli|die Abwanderung von Fachkräften|the brain drain|n|La fuga dei cervelli è un grave problema in Italia.|Die Abwanderung von Fachkräften ist in Italien ein ernstes Problem.|The brain drain is a serious problem in Italy.
l'immigrazione|die Einwanderung|immigration|n
l'integrazione|die Integration|integration|n
i diritti|die Rechte|rights|n
la parità di genere|die Gleichstellung der Geschlechter|gender equality|n
il precariato|prekäre Beschäftigung|job insecurity|n
il cittadino|der Bürger|the citizen|n
il voto|die Stimme (Wahl); die Note|the vote; the mark|n
la riforma|die Reform|the reform|n
affrontare|angehen; bewältigen|to tackle|v|Il problema va affrontato subito.|Das Problem muss sofort angegangen werden.|The problem must be tackled immediately.
garantire|garantieren|to guarantee|v
il divario|die Kluft|the gap|n
il Nord e il Sud|Nord- und Süditalien|the North and the South|n`,
  say: `Questo problema va risolto a livello europeo.|Dieses Problem muss auf europäischer Ebene gelöst werden.|This problem must be solved at a European level.
I diritti vanno rispettati.|Die Rechte müssen respektiert werden.|Rights must be respected.
Molti giovani laureati vanno all'estero.|Viele junge Hochschulabsolventen gehen ins Ausland.|Many young graduates go abroad.
Il divario tra Nord e Sud è ancora grande.|Die Kluft zwischen Nord und Süd ist immer noch groß.|The gap between North and South is still large.
È una questione molto delicata.|Das ist ein sehr heikles Thema.|It's a very sensitive issue.
Da un lato capisco, dall'altro non sono d'accordo.|Einerseits verstehe ich das, andererseits bin ich nicht einverstanden.|On the one hand I understand, on the other I disagree.
Dipende dai punti di vista.|Das hängt vom Standpunkt ab.|It depends on your point of view.`,
  gram: [
    ["h", TB("andare + Partizip = muss … werden", "andare + participle = must be …")],
    ["ex", [["La legge va cambiata.", "Das Gesetz muss geändert werden.", "The law must be changed."], ["Questi documenti vanno firmati entro lunedì.", "Diese Unterlagen müssen bis Montag unterschrieben werden.", "These documents must be signed by Monday."], ["Il vino rosso va servito a temperatura ambiente.", "Rotwein wird bei Zimmertemperatur serviert.", "Red wine should be served at room temperature."]]],
    ["p", TB("Nur in einfachen Zeiten (va, andava, andrà, andrebbe). Das Partizip passt sich an.", "Only in simple tenses (va, andava, andrà, andrebbe). The participle agrees.")],
    ["h", TB("Drei Passivformen im Vergleich", "Three passive forms compared")],
    ["table", { head: [TB("Form", "form"), TB("Bedeutung", "meaning"), TB("Beispiel", "example")], rows: [
      ["essere + p.p.", TB("Zustand / Handlung", "state / action"), "La legge è approvata."], ["venire + p.p.", TB("Vorgang", "process"), "La legge viene approvata."], ["andare + p.p.", TB("Notwendigkeit", "necessity"), "La legge va approvata."]], say: 2 }],
    ["tip", TB("Mit Verben des Verlierens hat <b>andare</b> + Partizip eine andere Bedeutung: <i>I documenti sono andati persi.</i> = Die Unterlagen sind verloren gegangen.", "With verbs of losing, <b>andare</b> + participle means something else: <i>I documenti sono andati persi.</i> = The documents got lost.")]
  ],
  drill: [
    ["Il problema ___ affrontato subito.", ["va", "viene stato", "andrà stato"], 0],
    ["Le regole ___ rispettate da tutti.", ["vanno", "va", "vengono state"], 0],
    ["La domanda va ___ entro il 31 marzo.", ["presentata", "presentato", "presentare"], 0],
    ["Questi problemi non ___ ignorati.", ["vanno", "vadano", "andare"], 0],
    ["Purtroppo le valigie sono ___ perse.", ["andate", "venute", "state andate"], 0],
    ["La fuga dei ___ preoccupa il governo.", ["cervelli", "cittadini", "diritti"], 0],
    ["I nuovi dati ___ pubblicati ogni anno. (venire, presente)", "vengono"]
  ],
  talk: { t: TB("Junge Italiener im Ausland", "Young Italians abroad"), scene: TB("Du sprichst mit Daniele, einem jungen Ingenieur aus Bari, der in München arbeitet.", "You talk to Daniele, a young engineer from Bari who works in Munich."), who: "Daniele", slots: {}, lines: `a|Sai, molti dei miei amici di università sono andati all'estero come me.|Weißt du, viele meiner Studienfreunde sind wie ich ins Ausland gegangen.|You know, many of my university friends went abroad like me.
me|Perché? In Italia non c'era lavoro per voi?|Warum? Gab es in Italien keine Arbeit für euch?|Why? Was there no work for you in Italy?|Come mai? Non trovavate lavoro in Italia?
a|C'era, ma spesso precario e pagato poco. Qui ho un contratto a tempo indeterminato.|Schon, aber oft prekär und schlecht bezahlt. Hier habe ich einen unbefristeten Vertrag.|There was, but it was often insecure and badly paid. Here I have a permanent contract.
me|Capisco. È la famosa fuga dei cervelli.|Verstehe. Das ist die berühmte Abwanderung der Fachkräfte.|I see. It's the famous brain drain.|Ah, la fuga dei cervelli.
a|Esatto. Secondo me il problema va affrontato con riforme serie.|Genau. Meiner Meinung nach muss das Problem mit ernsthaften Reformen angegangen werden.|Exactly. In my view the problem has to be tackled with serious reforms.
me|Sono d'accordo. Gli stipendi dei giovani andrebbero aumentati.|Einverstanden. Die Gehälter junger Leute müssten erhöht werden.|I agree. Young people's salaries ought to be raised.|Hai ragione, bisognerebbe aumentare gli stipendi dei giovani.
a|E anche la burocrazia va semplificata!|Und auch die Bürokratie muss vereinfacht werden!|And the bureaucracy must be simplified too!
me|Pensi di tornare un giorno?|Denkst du, dass du eines Tages zurückkehrst?|Do you think you'll go back one day?|Tornerai in Italia un giorno?
a|Spero di sì, magari tra qualche anno, se le cose cambiano.|Ich hoffe es, vielleicht in ein paar Jahren, wenn sich die Dinge ändern.|I hope so, maybe in a few years, if things change.` }
});

lesson("B2", { id: "it-b2-06", t: TB("Modi di dire – Redewendungen", "Modi di dire – Idioms"),
  goal: TB("Du kennst die wichtigsten italienischen Redewendungen und kannst sie im Gespräch benutzen.", "You know the most important Italian idioms and can use them in conversation."),
  words: `in bocca al lupo!|viel Glück! (Antwort: crepi!)|good luck! (reply: crepi!)|ph|In bocca al lupo per l'esame! – Crepi!|Viel Glück bei der Prüfung! – Danke!|Good luck in the exam! – Thanks!
avere le mani bucate|das Geld zum Fenster rauswerfen|to be a spendthrift|ph
costare un occhio della testa|ein Vermögen kosten|to cost an arm and a leg|ph|Quella macchina costa un occhio della testa.|Das Auto kostet ein Vermögen.|That car costs an arm and a leg.
non vedere l'ora|es kaum erwarten können|to look forward to; can't wait|ph|Non vedo l'ora di andare in vacanza!|Ich kann den Urlaub kaum erwarten!|I can't wait to go on holiday!
essere al verde|pleite sein|to be broke|ph
prendere in giro|auf den Arm nehmen|to tease; to pull someone's leg|ph
fare una figuraccia|sich blamieren|to make a fool of oneself|ph
avere un diavolo per capello|fuchsteufelswild sein|to be furious|ph
essere in gamba|tüchtig sein; was draufhaben|to be capable; smart|ph|Tua sorella è proprio in gamba.|Deine Schwester hat echt was drauf.|Your sister is really capable.
acqua in bocca!|Mund halten! (nichts verraten)|keep it to yourself!|ph
tutto fumo e niente arrosto|viel Lärm um nichts|all talk and no action|ph
chi dorme non piglia pesci|wer schläft, fängt keine Fische|the early bird catches the worm|ph
stare con le mani in mano|Däumchen drehen|to sit around doing nothing|ph
fare il ponte|einen Brückentag nehmen|to take a long weekend|ph
avere la testa fra le nuvole|mit dem Kopf in den Wolken sein|to have one's head in the clouds|ph
piove sul bagnato|ein Unglück kommt selten allein|it never rains but it pours|ph
non avere peli sulla lingua|kein Blatt vor den Mund nehmen|not to mince one's words|ph
rompere il ghiaccio|das Eis brechen|to break the ice|ph
essere come il prezzemolo|überall dabei sein|to turn up everywhere|ph
meglio tardi che mai|besser spät als nie|better late than never|ph`,
  say: `Non vedo l'ora di vederti!|Ich kann es kaum erwarten, dich zu sehen!|I can't wait to see you!
Ma mi prendi in giro?|Willst du mich auf den Arm nehmen?|Are you pulling my leg?
Ieri ho fatto una figuraccia davanti al capo.|Gestern habe ich mich vor dem Chef blamiert.|Yesterday I made a fool of myself in front of the boss.
Questo mese sono al verde.|Diesen Monat bin ich pleite.|I'm broke this month.
Acqua in bocca, mi raccomando!|Kein Wort darüber, bitte!|Not a word to anyone, please!
Giovedì è festa, faccio il ponte.|Donnerstag ist Feiertag, ich nehme den Brückentag.|Thursday's a holiday, I'm taking the Friday off.
Meglio tardi che mai!|Besser spät als nie!|Better late than never!`,
  gram: [
    ["h", TB("Redewendungen richtig benutzen", "Using idioms correctly")],
    ["p", TB("Viele Wendungen funktionieren wie Verben und werden normal konjugiert: <b>Non vedo</b> l'ora / <b>Non vediamo</b> l'ora. <b>Ho fatto</b> una figuraccia / <b>Hai fatto</b> una figuraccia.", "Many idioms work like verbs and are conjugated normally: <b>Non vedo</b> l'ora / <b>Non vediamo</b> l'ora. <b>Ho fatto</b> una figuraccia / <b>Hai fatto</b> una figuraccia.")],
    ["ex", [["Non vedo l'ora di + Infinitiv", "es kaum erwarten können, zu …", "can't wait to …"], ["Non vedo l'ora che + Congiuntivo", "es kaum erwarten können, dass …", "can't wait for …"], ["Non vedo l'ora che arrivi l'estate.", "Ich kann den Sommer kaum erwarten.", "I can't wait for summer to come."]]],
    ["tip", TB("Auf <b>In bocca al lupo!</b> antwortet man <b>Crepi!</b> (oder <i>Crepi il lupo!</i>) – nie „grazie“. Das bringt Unglück.", "To <b>In bocca al lupo!</b> you answer <b>Crepi!</b> (or <i>Crepi il lupo!</i>) – never \"grazie\". That brings bad luck.")]
  ],
  drill: [
    ["In bocca al lupo! – ___ !", ["Crepi", "Grazie", "Anche a te"], 0],
    ["Questa borsa costa un occhio della ___ .", ["testa", "faccia", "mano"], 0],
    ["Non vedo l'ora ___ partire!", ["di", "che", "a"], 0],
    ["Non vedo l'ora che ___ venerdì.", ["sia", "è", "sarà"], 0],
    ["Ho speso tutto, sono al ___ .", ["verde", "rosso", "nero"], 0],
    ["Quando ho chiamato il capo «mamma», ho fatto una ___ .", ["figuraccia", "brutta", "pessima"], 0],
    ["Marta è molto brava, è proprio in ___ .", ["gamba", "testa", "piedi"], 0]
  ],
  talk: { t: TB("Ein peinlicher Moment", "An embarrassing moment"), scene: TB("Deine Freundin Silvia erzählt dir von ihrem ersten Arbeitstag. Benutze ein paar Redewendungen!", "Your friend Silvia tells you about her first day at work. Use some idioms!"), who: "Silvia", slots: {}, lines: `a|Oggi era il mio primo giorno di lavoro e ho fatto una figuraccia!|Heute war mein erster Arbeitstag und ich habe mich total blamiert!|Today was my first day at work and I made a complete fool of myself!
me|Dai, racconta! Cosa è successo?|Los, erzähl! Was ist passiert?|Go on, tell me! What happened?|Racconta! Che è successo?
a|Ho rovesciato il caffè sulla camicia del direttore.|Ich habe den Kaffee über das Hemd des Direktors geschüttet.|I spilt coffee on the director's shirt.
me|No! Mi prendi in giro? E lui come ha reagito?|Nein! Nimmst du mich auf den Arm? Und wie hat er reagiert?|No! Are you pulling my leg? And how did he react?|Ma dai! E lui cosa ha detto?
a|Per fortuna ha riso. Ha detto che almeno avevo rotto il ghiaccio!|Zum Glück hat er gelacht. Er sagte, ich hätte wenigstens das Eis gebrochen!|Luckily he laughed. He said at least I'd broken the ice!
me|Ahah, è stato in gamba! Meglio così.|Haha, er hat das souverän genommen! Umso besser.|Haha, he handled it well! All the better.|Meno male che ha riso!
a|Comunque acqua in bocca, eh! Non lo dire a nessuno.|Aber kein Wort, ja! Erzähl es niemandem.|Anyway, keep it to yourself, OK! Don't tell anyone.
me|Tranquilla, non ho peli sulla lingua ma so mantenere un segreto!|Keine Sorge, ich nehme kein Blatt vor den Mund, aber ich kann ein Geheimnis bewahren!|Don't worry, I speak my mind but I can keep a secret!|Tranquilla, acqua in bocca!
a|E domani ho la prima riunione importante…|Und morgen habe ich das erste wichtige Meeting …|And tomorrow I have my first important meeting…
me|In bocca al lupo, allora!|Dann viel Glück!|Good luck, then!|In bocca al lupo!` }
});

lesson("B2", { id: "it-b2-07", t: TB("Arte e letteratura – Das Passato remoto", "Arte e letteratura – The passato remoto"),
  goal: TB("Du kannst über Kunst, Bücher und Filme sprechen und das Passato remoto in Texten erkennen.", "You can talk about art, books and films and recognise the passato remoto in texts."),
  words: `il romanzo|der Roman|the novel|n
lo scrittore / la scrittrice|der Schriftsteller / die Schriftstellerin|the writer|n
il racconto|die Erzählung|the short story|n
la poesia|das Gedicht; die Poesie|the poem; poetry|n
il personaggio|die Figur (Roman, Film)|the character|n
la trama|die Handlung|the plot|n|La trama è un po' complicata.|Die Handlung ist etwas kompliziert.|The plot is a bit complicated.
il regista|der Regisseur|the director|n
la colonna sonora|der Soundtrack|the soundtrack|n
il quadro|das Gemälde|the painting|n
il pittore|der Maler|the painter|n
la mostra|die Ausstellung|the exhibition|n
il capolavoro|das Meisterwerk|the masterpiece|n
il Rinascimento|die Renaissance|the Renaissance|n
la recensione|die Rezension|the review|n
commovente|bewegend|moving|adj
noioso/a|langweilig|boring|adj
coinvolgente|fesselnd|gripping|adj
ambientato/a|spielt (in) (Handlung)|set (in)|adj|Il film è ambientato a Napoli negli anni Cinquanta.|Der Film spielt in den fünfziger Jahren in Neapel.|The film is set in Naples in the 1950s.
nacque|er/sie wurde geboren (pass. rem.)|he/she was born|x
morì|er/sie starb (pass. rem.)|he/she died|x
scrisse|er/sie schrieb (pass. rem.)|he/she wrote|x
fu|er/sie/es war (pass. rem.)|he/she/it was|x`,
  say: `Dante nacque a Firenze nel 1265.|Dante wurde 1265 in Florenz geboren.|Dante was born in Florence in 1265.
Scrisse la Divina Commedia in esilio.|Er schrieb die Göttliche Komödie im Exil.|He wrote the Divine Comedy in exile.
Leonardo dipinse la Gioconda all'inizio del Cinquecento.|Leonardo malte die Mona Lisa Anfang des 16. Jahrhunderts.|Leonardo painted the Mona Lisa at the beginning of the 16th century.
È un romanzo che mi ha commosso molto.|Das ist ein Roman, der mich sehr bewegt hat.|It's a novel that moved me a lot.
Te lo consiglio, è coinvolgente dall'inizio alla fine.|Ich empfehle ihn dir, er ist von Anfang bis Ende fesselnd.|I recommend it, it's gripping from start to finish.
Di che cosa parla?|Wovon handelt es?|What's it about?
Non mi è piaciuto il finale.|Das Ende hat mir nicht gefallen.|I didn't like the ending.`,
  gram: [
    ["h", TB("Passato remoto: die Erzählzeit", "Passato remoto: the narrative past")],
    ["p", TB("Für abgeschlossene Ereignisse in der fernen Vergangenheit – in Romanen, Geschichtsbüchern, Biografien und in Süditalien auch im Alltag. Im Norden spricht man fast nur Passato prossimo. Für B2 musst du es vor allem <b>erkennen</b>.", "For completed events in the distant past – in novels, history books, biographies and, in southern Italy, also in everyday speech. In the north people almost always use the passato prossimo. At B2 you mainly need to <b>recognise</b> it.")],
    ["table", { head: [TB("", ""), "parlare", "credere", "partire"], rows: [["io", "parlai", "credei/credetti", "partii"], ["tu", "parlasti", "credesti", "partisti"], ["lui/lei", "parlò", "credé/credette", "partì"], ["noi", "parlammo", "credemmo", "partimmo"], ["voi", "parlaste", "credeste", "partiste"], ["loro", "parlarono", "crederono/credettero", "partirono"]] }],
    ["table", { head: [TB("Infinitiv", "infinitive"), TB("io", "io"), TB("lui/lei", "lui/lei"), TB("loro", "loro")], rows: [["essere", "fui", "fu", "furono"], ["avere", "ebbi", "ebbe", "ebbero"], ["fare", "feci", "fece", "fecero"], ["dire", "dissi", "disse", "dissero"], ["vedere", "vidi", "vide", "videro"], ["venire", "venni", "venne", "vennero"], ["scrivere", "scrissi", "scrisse", "scrissero"], ["nascere", "nacqui", "nacque", "nacquero"]] }],
    ["tip", TB("Viele unregelmäßige Verben folgen dem Muster „1–3–3“: unregelmäßig sind nur io, lui/lei und loro (ebbi, ebbe, ebbero) – die anderen Formen sind regelmäßig (avesti, avemmo, aveste).", "Many irregular verbs follow the \"1-3-3\" pattern: only io, lui/lei and loro are irregular (ebbi, ebbe, ebbero) – the other forms are regular (avesti, avemmo, aveste).")]
  ],
  drill: [
    ["Michelangelo ___ la Cappella Sistina. (dipingere)", ["dipinse", "dipingé", "ha dipinto stato"], 0],
    ["Garibaldi ___ a Nizza nel 1807.", ["nacque", "nascé", "nasceva"], 0],
    ["I Romani ___ molte strade.", ["costruirono", "costruirò", "costruivano stati"], 0],
    ["«fu» è il passato remoto di …", ["essere", "fare", "fuggire"], 0],
    ["«ebbero» è il passato remoto di …", ["avere", "essere", "bere"], 0],
    ["Il film è ___ a Roma.", ["ambientato", "ambientata", "ambiente"], 0],
    ["Manzoni ___ «I promessi sposi». (scrivere)", "scrisse"]
  ],
  talk: { t: TB("Buchclub", "Book club"), scene: TB("Im Buchclub sprichst du mit Caterina über „L'amica geniale“ von Elena Ferrante.", "At the book club you talk with Caterina about \"My Brilliant Friend\" by Elena Ferrante."), who: "Caterina", slots: {}, lines: `a|Allora, ti è piaciuto «L'amica geniale»?|Und, hat dir „Meine geniale Freundin“ gefallen?|So, did you like \"My Brilliant Friend\"?
me|Moltissimo! È coinvolgente dall'inizio alla fine.|Sehr! Es ist von Anfang bis Ende fesselnd.|Very much! It's gripping from start to finish.|Tantissimo, è un libro coinvolgente.
a|Anche a me. Qual è il tuo personaggio preferito?|Mir auch. Wer ist deine Lieblingsfigur?|Me too. Who's your favourite character?
me|Lila, perché è intelligente e ribelle.|Lila, weil sie intelligent und rebellisch ist.|Lila, because she's clever and rebellious.|Lila: è intelligentissima e ribelle.
a|Sai che il romanzo è ambientato a Napoli negli anni Cinquanta?|Weißt du, dass der Roman im Neapel der fünfziger Jahre spielt?|Did you know the novel is set in Naples in the 1950s?
me|Sì, e la descrizione del quartiere è bellissima. Mi è sembrato di essere lì.|Ja, und die Beschreibung des Viertels ist wunderschön. Ich hatte das Gefühl, dort zu sein.|Yes, and the description of the neighbourhood is beautiful. I felt as if I was there.|Sì, mi è sembrato di essere a Napoli.
a|Hai visto anche la serie tv?|Hast du auch die Fernsehserie gesehen?|Have you seen the TV series too?
me|Non ancora. Secondo te è all'altezza del libro?|Noch nicht. Ist sie deiner Meinung nach so gut wie das Buch?|Not yet. Do you think it lives up to the book?|No. È bella come il libro?
a|Secondo me sì, il regista ha fatto un capolavoro.|Meiner Meinung nach ja, der Regisseur hat ein Meisterwerk geschaffen.|I think so, the director made a masterpiece.` }
});

lesson("B2", { id: "it-b2-08", t: TB("Tecnologia e futuro – Futuro anteriore", "Tecnologia e futuro – The future perfect"),
  goal: TB("Du kannst über Technik und Zukunft spekulieren und das Futuro anteriore benutzen.", "You can speculate about technology and the future and use the future perfect."),
  words: `la tecnologia|die Technik; die Technologie|technology|n
l'intelligenza artificiale|die künstliche Intelligenz|artificial intelligence|n|L'intelligenza artificiale cambierà molti lavori.|Die KI wird viele Berufe verändern.|Artificial intelligence will change many jobs.
lo sviluppo|die Entwicklung|development|n
l'innovazione|die Innovation|innovation|n
il dispositivo|das Gerät|the device|n
l'applicazione / l'app|die App|the app|n
scaricare|herunterladen|to download|v
aggiornare|aktualisieren|to update|v
la rete|das Netz|the network; the internet|n
i dati|die Daten|data|n
la privacy|der Datenschutz|privacy|n
la sicurezza informatica|die IT-Sicherheit|cybersecurity|n
il robot|der Roboter|the robot|n
automatizzare|automatisieren|to automate|v
sostituire|ersetzen|to replace|v
la sfida|die Herausforderung|the challenge|n
dipendente da|abhängig von|dependent on|ph
entro il 2040|bis 2040|by 2040|ph
nel giro di pochi anni|innerhalb weniger Jahre|within a few years|ph
prevedere|vorhersehen|to predict|v
la previsione|die Vorhersage|the prediction|n`,
  say: `Quando avrò finito questo progetto, mi prenderò una pausa.|Wenn ich dieses Projekt abgeschlossen habe, mache ich eine Pause.|When I've finished this project, I'll take a break.
Entro il 2040 le auto si guideranno da sole.|Bis 2040 werden Autos selbst fahren.|By 2040 cars will drive themselves.
Non risponde: avrà dimenticato il telefono a casa.|Er antwortet nicht: Er wird das Handy zu Hause vergessen haben.|He's not answering: he must have left his phone at home.
Molti lavori saranno automatizzati.|Viele Arbeiten werden automatisiert werden.|Many jobs will be automated.
Siamo troppo dipendenti dallo smartphone.|Wir sind zu abhängig vom Smartphone.|We're too dependent on our smartphones.
Chi l'avrebbe mai detto!|Wer hätte das gedacht!|Who would have thought!
Ogni medaglia ha il suo rovescio.|Alles hat seine Kehrseite.|Every coin has two sides.`,
  gram: [
    ["h", TB("Futuro anteriore", "Future perfect")],
    ["p", TB("<b>Futur von avere/essere + Partizip</b>: avrò finito, sarò partito/a. Für eine Handlung, die <b>vor einer anderen in der Zukunft</b> abgeschlossen ist – oft nach <i>quando, dopo che, appena</i>.", "<b>Future of avere/essere + participle</b>: avrò finito, sarò partito/a. For an action completed <b>before another one in the future</b> – often after <i>quando, dopo che, appena</i>.")],
    ["ex", [["Appena sarò arrivato, ti chiamerò.", "Sobald ich angekommen bin, rufe ich dich an.", "As soon as I've arrived, I'll call you."], ["Dopo che avremo mangiato, usciremo.", "Nachdem wir gegessen haben, gehen wir aus.", "After we've eaten, we'll go out."]]],
    ["h", TB("Vermutungen über die Vergangenheit", "Guessing about the past")],
    ["p", TB("Wie das Futur für Vermutungen in der Gegenwart (<i>sarà stanco</i>) dient das Futuro anteriore für Vermutungen in der Vergangenheit: <b>Avrà perso</b> il treno. (Er hat wohl den Zug verpasst.)", "Just as the future expresses guesses about the present (<i>sarà stanco</i>), the future perfect expresses guesses about the past: <b>Avrà perso</b> il treno. (He must have missed the train.)")],
    ["tip", TB("Im Deutschen steht oft Präsens oder Perfekt („Wenn ich fertig bin …“) – im Italienischen braucht es das Futur: <b>Quando avrò finito</b> …", "German often uses the present or perfect (\"when I'm finished\") – Italian needs the future: <b>Quando avrò finito</b> …")]
  ],
  drill: [
    ["Quando ___ finito, ti chiamo.", ["avrò", "avrei", "ho avuto"], 0],
    ["Appena ___ arrivati, vi scriveremo.", ["saremo", "avremo", "siamo stati"], 0],
    ["Marco non risponde: ___ già a dormire. (Vermutung)", ["sarà andato", "è andato", "andrebbe"], 0],
    ["Dopo che avrete letto il testo, ___ le domande.", ["farete", "fareste", "avete fatto"], 0],
    ["Entro il 2030 molti lavori ___ automatizzati.", ["saranno", "avranno", "sarebbero stati"], 0],
    ["Non trovo le chiavi: le ___ in ufficio. (lasciare, io – Vermutung)", "avrò lasciate"],
    ["Siamo sempre più ___ dalla tecnologia.", ["dipendenti", "dipendente", "dipesi"], 0]
  ],
  talk: { t: TB("Die Welt im Jahr 2050", "The world in 2050"), scene: TB("Bei einem Aperitivo spekulierst du mit deinem Freund Nicola, wie die Welt 2050 aussehen wird.", "Over an aperitivo you speculate with your friend Nicola about what the world will look like in 2050."), who: "Nicola", slots: {}, lines: `a|Secondo te, come sarà il mondo nel 2050?|Was meinst du, wie wird die Welt 2050 aussehen?|What do you think the world will be like in 2050?
me|Credo che l'intelligenza artificiale avrà cambiato quasi tutti i lavori.|Ich glaube, die KI wird fast alle Berufe verändert haben.|I think artificial intelligence will have changed almost every job.|Penso che l'IA avrà cambiato quasi tutti i lavori.
a|Anche il mio? Io faccio il commercialista…|Auch meinen? Ich bin Steuerberater …|Mine too? I'm an accountant…
me|Probabilmente sì, molte attività saranno automatizzate.|Wahrscheinlich schon, viele Tätigkeiten werden automatisiert sein.|Probably, yes, many tasks will be automated.|Forse sì, molte cose saranno automatizzate.
a|Che ansia! E cosa farò io?|Wie beängstigend! Und was mache ich dann?|How worrying! And what will I do?
me|Avrai più tempo per i clienti. Le persone avranno sempre bisogno di consigli.|Du wirst mehr Zeit für die Kunden haben. Die Menschen werden immer Beratung brauchen.|You'll have more time for clients. People will always need advice.|Avrai più tempo per i clienti, che vorranno sempre un consiglio umano.
a|Speriamo! E le macchine? Si guideranno da sole?|Hoffen wir's! Und die Autos? Werden sie selbst fahren?|Let's hope so! And cars? Will they drive themselves?
me|Sicuramente. Ma quando saranno diventate tutte elettriche, le città saranno più silenziose.|Sicher. Aber wenn sie alle elektrisch geworden sind, werden die Städte leiser sein.|Definitely. But once they've all gone electric, cities will be quieter.|Sì, e quando saranno tutte elettriche, ci sarà meno rumore.
a|Mi piace questa idea. Brindiamo al futuro!|Die Idee gefällt mir. Stoßen wir auf die Zukunft an!|I like that idea. Let's drink to the future!
me|Al futuro! Cin cin!|Auf die Zukunft! Prost!|To the future! Cheers!|Cin cin!` }
});
