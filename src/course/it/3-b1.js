/* Italiano B1 · 1–4 */
lesson("B1", { id: "it-b1-01", t: TB("Penso che… – Der Congiuntivo presente", "Penso che… – The present subjunctive"),
  goal: TB("Du kannst Meinungen, Zweifel, Wünsche und Gefühle mit dem Congiuntivo ausdrücken.", "You can express opinions, doubts, wishes and feelings with the subjunctive."),
  words: `secondo me|meiner Meinung nach|in my opinion|ph|Secondo me, il lavoro da casa è più comodo.|Meiner Meinung nach ist Homeoffice bequemer.|In my opinion working from home is more convenient.
penso che|ich denke, dass|I think that|ph
credo che|ich glaube, dass|I believe that|ph
mi sembra che|mir scheint, dass|it seems to me that|ph
ho paura che|ich fürchte, dass|I'm afraid that|ph
spero che|ich hoffe, dass|I hope that|ph
è importante che|es ist wichtig, dass|it's important that|ph
bisogna che|es ist nötig, dass|it's necessary that|ph
dubitare|bezweifeln|to doubt|v|Dubito che arrivi in tempo.|Ich bezweifle, dass er rechtzeitig kommt.|I doubt he'll arrive on time.
lo smart working|das Homeoffice|remote working|n
il pendolare|der Pendler|the commuter|n
la flessibilità|die Flexibilität|flexibility|n
la produttività|die Produktivität|productivity|n
il vantaggio|der Vorteil|the advantage|n
lo svantaggio|der Nachteil|the disadvantage|n
d'accordo|einverstanden; einig|agreed|ph|Sono d'accordo con te.|Ich bin deiner Meinung.|I agree with you.
non sono d'accordo|ich bin nicht einverstanden|I disagree|ph
convincere|überzeugen|to convince|v
il punto di vista|der Standpunkt|the point of view|n
può darsi|kann sein|maybe; it may be|ph|Può darsi che tu abbia ragione.|Kann sein, dass du recht hast.|You may be right.
avere ragione|recht haben|to be right|v
avere torto|unrecht haben|to be wrong|v`,
  say: `Penso che tu abbia ragione.|Ich denke, du hast recht.|I think you're right.
Credo che sia meglio aspettare.|Ich glaube, es ist besser zu warten.|I think it's better to wait.
Spero che domani faccia bel tempo.|Ich hoffe, morgen ist schönes Wetter.|I hope the weather's nice tomorrow.
È importante che tutti partecipino.|Es ist wichtig, dass alle mitmachen.|It's important that everyone takes part.
Non credo che sia così semplice.|Ich glaube nicht, dass es so einfach ist.|I don't think it's that simple.
Mi sembra che lui non capisca.|Mir scheint, er versteht es nicht.|It seems to me he doesn't understand.
Sono contento che tu sia qui.|Ich freue mich, dass du da bist.|I'm glad you're here.`,
  gram: [
    ["h", TB("Congiuntivo presente: Bildung", "Present subjunctive: forms")],
    ["p", TB("-are: <b>-i, -i, -i, -iamo, -iate, -ino</b> (parli). -ere/-ire: <b>-a, -a, -a, -iamo, -iate, -ano</b> (prenda, dorma, finisca). Die drei Singularformen sind gleich – deshalb oft mit Pronomen: che <b>io</b> parli, che <b>tu</b> parli.", "-are: <b>-i, -i, -i, -iamo, -iate, -ino</b> (parli). -ere/-ire: <b>-a, -a, -a, -iamo, -iate, -ano</b> (prenda, dorma, finisca). The three singular forms are identical – so the pronoun is often added: che <b>io</b> parli, che <b>tu</b> parli.")],
    ["conj", { verbs: ["essere", "avere", "fare", "andare"], tenses: ["Congiuntivo presente"] }],
    ["h", TB("Wann?", "When?")],
    ["p", TB("Nach Ausdrücken von <b>Meinung</b> (penso che, credo che), <b>Zweifel</b> (dubito che, non sono sicuro che), <b>Wunsch und Wille</b> (voglio che, spero che), <b>Gefühl</b> (sono contento che, ho paura che) und <b>unpersönlichen Ausdrücken</b> (è importante che, bisogna che).", "After expressions of <b>opinion</b> (penso che, credo che), <b>doubt</b> (dubito che), <b>wish and will</b> (voglio che, spero che), <b>emotion</b> (sono contento che, ho paura che) and <b>impersonal expressions</b> (è importante che, bisogna che).")],
    ["tip", TB("Gleiches Subjekt? Dann Infinitiv mit <b>di</b>: Penso <b>di</b> avere ragione (nicht: penso che io abbia ragione). Nach <b>so che</b> und <b>è vero che</b> steht der Indikativ – das sind Fakten.", "Same subject? Then use the infinitive with <b>di</b>: Penso <b>di</b> avere ragione. After <b>so che</b> and <b>è vero che</b> use the indicative – those are facts.")]
  ],
  forms: { verbs: ["parlare", "prendere", "dormire", "capire", "essere", "avere", "fare", "andare", "potere", "venire"], tenses: ["Congiuntivo presente"] },
  drill: [
    ["Penso che Marco ___ ragione.", ["abbia", "ha", "avrebbe"], 0],
    ["Spero che tu ___ bene.", ["stia", "stai", "stare"], 0],
    ["È importante che voi ___ in tempo.", ["arriviate", "arrivate", "arrivare"], 0],
    ["So che lui ___ di Napoli.", ["è", "sia", "fosse"], 0, TB("<i>So che</i> = Fakt → Indikativ.", "<i>So che</i> = a fact → indicative.")],
    ["Credo ___ avere sbagliato.", ["di", "che", "a"], 0, TB("Gleiches Subjekt → di + Infinitiv.", "Same subject → di + infinitive.")],
    ["Non credo che loro ___ venire. (potere)", "possano"],
    ["Bisogna che tu ___ la verità. (dire)", "dica"],
    ["Ho paura che ___ troppo tardi. (essere)", "sia"]
  ],
  talk: { t: TB("Homeoffice – ja oder nein?", "Remote work – yes or no?"), scene: TB("Deine Kollegin Valeria findet, dass alle wieder ins Büro kommen sollten. Du siehst das anders.", "Your colleague Valeria thinks everyone should come back to the office. You see it differently."), who: "Valeria", slots: {}, lines: `a|Secondo me è importante che tutti tornino in ufficio. Lavorare insieme è più efficace.|Meiner Meinung nach ist es wichtig, dass alle ins Büro zurückkommen. Zusammen zu arbeiten ist effektiver.|In my opinion it's important that everyone comes back to the office. Working together is more effective.
me|Capisco il tuo punto di vista, ma non sono d'accordo.|Ich verstehe deinen Standpunkt, aber ich bin nicht einverstanden.|I understand your point of view, but I don't agree.|Capisco, ma non sono d'accordo.; Non sono d'accordo con te.
a|Perché? Non pensi che in ufficio si lavori meglio?|Warum? Denkst du nicht, dass man im Büro besser arbeitet?|Why? Don't you think people work better in the office?
me|Penso che a casa io sia più concentrato e meno stressato.|Ich denke, zu Hause bin ich konzentrierter und weniger gestresst.|I think I'm more focused and less stressed at home.|Credo che a casa io sia più concentrato.; Penso di essere più concentrato a casa.
a|Ma non hai paura che il team perda il contatto?|Aber hast du keine Angst, dass das Team den Kontakt verliert?|But aren't you afraid the team will lose touch?
me|Un po' sì. Forse è meglio che ci vediamo due volte alla settimana.|Ein bisschen schon. Vielleicht ist es besser, wenn wir uns zweimal pro Woche sehen.|A bit, yes. Maybe it's better if we meet twice a week.|È vero. Forse è meglio vedersi due volte alla settimana.
a|Hmm, può darsi che tu abbia ragione. Un modello ibrido…|Hm, kann sein, dass du recht hast. Ein Hybridmodell …|Hmm, you may be right. A hybrid model…
me|Esatto! Spero che il capo sia d'accordo.|Genau! Ich hoffe, der Chef ist einverstanden.|Exactly! I hope the boss agrees.|Spero che anche il capo sia d'accordo.` }
});

lesson("B1", { id: "it-b1-02", t: TB("Il colloquio di lavoro – Relativpronomen", "Il colloquio di lavoro – Relative pronouns"),
  goal: TB("Du kannst dich in einem Vorstellungsgespräch präsentieren und Relativsätze mit che und cui bilden.", "You can present yourself in a job interview and build relative clauses with che and cui."),
  words: `il colloquio di lavoro|das Vorstellungsgespräch|the job interview|n
il curriculum (vitae)|der Lebenslauf|the CV|n
la candidatura|die Bewerbung|the application|n
candidarsi|sich bewerben|to apply|v|Mi sono candidato per il posto di project manager.|Ich habe mich auf die Stelle als Projektmanager beworben.|I've applied for the project manager position.
la posizione|die Stelle; die Position|the position|n
l'esperienza|die Erfahrung|the experience|n
la laurea|der Hochschulabschluss|the degree|n
laurearsi|den Abschluss machen|to graduate|v
il punto di forza|die Stärke|the strength|n
il punto debole|die Schwäche|the weakness|n
lavorare in squadra|im Team arbeiten|to work in a team|v
la responsabilità|die Verantwortung|responsibility|n
il datore di lavoro|der Arbeitgeber|the employer|n
il dipendente|der Arbeitnehmer|the employee|n
a tempo pieno|in Vollzeit|full-time|ph
a tempo determinato|befristet|fixed-term|ph
a tempo indeterminato|unbefristet|permanent|ph
la retribuzione|die Vergütung|the pay|n
affidabile|zuverlässig|reliable|adj
motivato/a|motiviert|motivated|adj
il periodo di prova|die Probezeit|the probation period|n`,
  say: `Mi occupo di marketing digitale da cinque anni.|Ich bin seit fünf Jahren im digitalen Marketing tätig.|I've been working in digital marketing for five years.
L'azienda in cui lavoro produce sensori.|Die Firma, bei der ich arbeite, stellt Sensoren her.|The company I work for makes sensors.
Il progetto di cui sono più orgoglioso è …|Das Projekt, auf das ich am stolzesten bin, ist …|The project I'm proudest of is …
Il mio punto di forza è la capacità di organizzare.|Meine Stärke ist meine Organisationsfähigkeit.|My strength is my ability to organise.
Perché vuole lavorare con noi?|Warum möchten Sie bei uns arbeiten?|Why do you want to work with us?
Quali sono le prossime tappe?|Wie geht es jetzt weiter?|What are the next steps?
La ringrazio per l'opportunità.|Ich danke Ihnen für die Gelegenheit.|Thank you for the opportunity.`,
  gram: [
    ["h", TB("Relativpronomen: che und cui", "Relative pronouns: che and cui")],
    ["table", { head: [TB("Pronomen", "pronoun"), TB("wann?", "when?"), TB("Beispiel", "example")], rows: [
      ["che", TB("Subjekt oder direktes Objekt (der, die, das)", "subject or direct object (who, which, that)"), "Il collega <b>che</b> ho conosciuto è simpatico."],
      ["preposizione + cui", TB("nach Präpositionen", "after prepositions"), "L'azienda <b>in cui</b> lavoro … / Il progetto <b>di cui</b> parlo …"],
      ["il cui / la cui", TB("dessen / deren", "whose"), "Il cliente <b>il cui</b> ordine è arrivato …"],
      ["chi", TB("wer (allgemein)", "whoever"), "<b>Chi</b> cerca, trova."]], say: 2 }],
    ["p", TB("<b>Il quale / la quale / i quali / le quali</b> ersetzt che oder cui in formellen Texten: l'azienda <b>presso la quale</b> lavoro.", "<b>Il quale / la quale / i quali / le quali</b> replaces che or cui in formal texts: l'azienda <b>presso la quale</b> lavoro.")],
    ["tip", TB("Im Vorstellungsgespräch siezt man: <b>Lei</b>, <b>Le</b>, <b>La</b>. Typische Frage: <i>Mi parli di Lei.</i> (Erzählen Sie mir von sich.)", "In interviews use the formal form: <b>Lei</b>, <b>Le</b>, <b>La</b>. A typical question: <i>Mi parli di Lei.</i> (Tell me about yourself.)")]
  ],
  th: "pronouns",
  drill: [
    ["Il libro ___ sto leggendo è molto interessante.", ["che", "cui", "chi"], 0],
    ["La città ___ cui sono nato è piccola.", ["in", "di", "che"], 0],
    ["Il collega ___ cui ti ho parlato si chiama Bruno.", ["di", "a", "da"], 0],
    ["La ragazza ___ abita qui è francese.", ["che", "cui", "la cui"], 0],
    ["Il motivo ___ cui ho cambiato lavoro è lo stipendio.", ["per", "di", "a"], 0],
    ["___ vuole partecipare deve iscriversi.", ["Chi", "Che", "Cui"], 0],
    ["È un contratto a tempo ___ : non ha una scadenza.", ["indeterminato", "determinato", "pieno"], 0]
  ],
  talk: { t: TB("Das Vorstellungsgespräch", "The job interview"), scene: TB("Bewerbungsgespräch bei einer Firma in Mailand. Die HR-Managerin, Dottoressa Galli, stellt die Fragen.", "Job interview at a company in Milan. The HR manager, Dr Galli, asks the questions."), who: "Dott.ssa Galli", slots: {}, lines: `a|Buongiorno, si accomodi. Mi parli un po' di Lei.|Guten Tag, nehmen Sie Platz. Erzählen Sie mir ein bisschen von sich.|Good morning, take a seat. Tell me a little about yourself.
me|Buongiorno. Mi sono laureato in economia e lavoro nel marketing da cinque anni.|Guten Tag. Ich habe Wirtschaft studiert und arbeite seit fünf Jahren im Marketing.|Good morning. I have a degree in economics and I've been working in marketing for five years.|Mi sono laureata in economia e lavoro nel marketing da cinque anni.
a|Molto bene. Qual è il progetto di cui è più orgoglioso?|Sehr gut. Auf welches Projekt sind Sie am stolzesten?|Very good. Which project are you proudest of?
me|Una campagna che abbiamo lanciato in tre paesi contemporaneamente.|Eine Kampagne, die wir in drei Ländern gleichzeitig gestartet haben.|A campaign we launched in three countries at the same time.|La campagna che abbiamo lanciato in tre paesi.
a|Interessante. E quali sono i suoi punti di forza?|Interessant. Und was sind Ihre Stärken?|Interesting. And what are your strengths?
me|Sono affidabile, organizzato e mi piace lavorare in squadra.|Ich bin zuverlässig, organisiert und arbeite gern im Team.|I'm reliable, organised and I enjoy working in a team.|Sono affidabile e organizzata, e amo lavorare in squadra.
a|E perché vuole lavorare con noi?|Und warum möchten Sie bei uns arbeiten?|And why do you want to work with us?
me|Perché la vostra azienda è innovativa e vorrei crescere a livello internazionale.|Weil Ihre Firma innovativ ist und ich mich international weiterentwickeln möchte.|Because your company is innovative and I'd like to grow internationally.|Perché siete un'azienda innovativa e vorrei lavorare in un contesto internazionale.
a|Perfetto. Ha qualche domanda per noi?|Perfekt. Haben Sie noch Fragen an uns?|Perfect. Do you have any questions for us?
me|Sì: quali sono le prossime tappe del processo di selezione?|Ja: Wie geht es im Auswahlverfahren weiter?|Yes: what are the next steps in the selection process?|Quali sono le prossime tappe?` }
});

lesson("B1", { id: "it-b1-03", t: TB("Se potessi… – Bedingungssätze", "Se potessi… – Conditional sentences"),
  goal: TB("Du kannst über reale und unwahrscheinliche Bedingungen sprechen: se + Congiuntivo imperfetto + Condizionale.", "You can talk about real and unlikely conditions: se + imperfect subjunctive + conditional."),
  words: `l'ipotesi|die Hypothese; die Annahme|the hypothesis|n
se|wenn; falls|if|x
nel caso in cui|falls|in case|ph
a condizione che|unter der Bedingung, dass|on condition that|ph
il colpo di fortuna|der Glücksfall|the stroke of luck|n
realizzare un sogno|einen Traum verwirklichen|to make a dream come true|v
licenziarsi|kündigen|to quit (one's job)|v|Se vincessi alla lotteria, mi licenzierei.|Wenn ich im Lotto gewinnen würde, würde ich kündigen.|If I won the lottery, I'd quit my job.
il potere|die Macht|power|n
invisibile|unsichtbar|invisible|adj
volare|fliegen|to fly|v
il presidente|der Präsident|the president|n
cambiare il mondo|die Welt verändern|to change the world|v
la scelta|die Wahl; die Entscheidung|the choice|n
scegliere|wählen; aussuchen|to choose|v
rinunciare a|verzichten auf|to give up|v
pentirsi|bereuen|to regret|v
fossi in te|wenn ich du wäre|if I were you|ph|Se fossi in te, accetterei l'offerta.|Wenn ich du wäre, würde ich das Angebot annehmen.|If I were you, I'd accept the offer.
l'offerta|das Angebot|the offer|n
trasferirsi all'estero|ins Ausland ziehen|to move abroad|v`,
  say: `Se ho tempo, vengo volentieri.|Wenn ich Zeit habe, komme ich gern.|If I have time, I'll gladly come.
Se avessi più tempo, imparerei il cinese.|Wenn ich mehr Zeit hätte, würde ich Chinesisch lernen.|If I had more time, I'd learn Chinese.
Se fossi in te, non lo farei.|An deiner Stelle würde ich das nicht tun.|If I were you, I wouldn't do it.
Se potessi vivere ovunque, sceglierei Lisbona.|Wenn ich überall leben könnte, würde ich Lissabon wählen.|If I could live anywhere, I'd choose Lisbon.
Cosa faresti se vincessi un milione?|Was würdest du tun, wenn du eine Million gewinnen würdest?|What would you do if you won a million?
Se piovesse, resteremmo a casa.|Wenn es regnen würde, blieben wir zu Hause.|If it rained, we'd stay at home.
Magari fosse vero!|Schön wär's!|If only it were true!`,
  gram: [
    ["h", TB("Drei Arten von Bedingungen", "Three types of condition")],
    ["table", { head: [TB("Typ", "type"), TB("se + …", "se + …"), TB("Hauptsatz", "main clause"), TB("Beispiel", "example")], rows: [
      [TB("real", "real"), "presente", "presente / futuro", "Se piove, resto a casa."],
      [TB("möglich / unwahrscheinlich", "possible / unlikely"), "congiuntivo imperfetto", "condizionale presente", "Se piovesse, resterei a casa."],
      [TB("unmöglich (Vergangenheit)", "impossible (past)"), "congiuntivo trapassato", "condizionale passato", "Se fosse piovuto, sarei rimasto a casa."]], say: 3 }],
    ["h", TB("Congiuntivo imperfetto", "Imperfect subjunctive")],
    ["p", TB("Stamm + <b>-assi / -essi / -issi</b>: parl<b>assi</b>, prend<b>essi</b>, dorm<b>issi</b>. Sehr unregelmäßig: <b>essere → fossi</b>, fare → facessi, dare → dessi, stare → stessi, dire → dicessi.", "Stem + <b>-assi / -essi / -issi</b>: parl<b>assi</b>, prend<b>essi</b>, dorm<b>issi</b>. Very irregular: <b>essere → fossi</b>, fare → facessi, dare → dessi, stare → stessi, dire → dicessi.")],
    ["conj", { verbs: ["essere", "avere", "potere"], tenses: ["Congiuntivo imperfetto"] }],
    ["tip", TB("Nie Konditional nach <b>se</b>! Falsch: <s>se avrei tempo</s>. Richtig: <b>se avessi tempo</b>.", "Never use the conditional after <b>se</b>! Wrong: <s>se avrei tempo</s>. Right: <b>se avessi tempo</b>.")]
  ],
  quiz: ["it-condizionale"], forms: { verbs: ["parlare", "prendere", "dormire", "essere", "avere", "fare", "stare", "andare", "potere"], tenses: ["Congiuntivo imperfetto"] },
  drill: [
    ["Se ___ ricco, comprerei una barca.", ["fossi", "sarei", "ero"], 0],
    ["Se avessi tempo, ___ un corso di cucina.", ["farei", "facessi", "faccio"], 0],
    ["Se domani piove, ___ al cinema.", ["andiamo", "andremmo", "andassimo"], 0, TB("Reale Bedingung → Indikativ.", "Real condition → indicative.")],
    ["Se potessi, ___ in Italia.", ["vivrei", "vivessi", "vivo"], 0],
    ["Cosa faresti se ___ il capo? (essere, tu)", "fossi"],
    ["Se noi ___ più soldi, viaggeremmo di più. (avere)", "avessimo"],
    ["Se lui ___ la verità, tutto sarebbe più facile. (dire)", "dicesse"]
  ],
  talk: { t: TB("Ein Jobangebot im Ausland", "A job offer abroad"), scene: TB("Dein Freund Lorenzo hat ein Angebot aus Barcelona bekommen und ist unsicher. Er fragt dich um Rat.", "Your friend Lorenzo has received an offer from Barcelona and isn't sure. He asks for your advice."), who: "Lorenzo", slots: {}, lines: `a|Mi hanno offerto un lavoro a Barcellona, ma non so se accettare. Tu cosa faresti?|Man hat mir einen Job in Barcelona angeboten, aber ich weiß nicht, ob ich annehmen soll. Was würdest du tun?|They've offered me a job in Barcelona, but I don't know whether to accept. What would you do?
me|Se fossi in te, accetterei subito!|An deiner Stelle würde ich sofort annehmen!|If I were you, I'd accept straight away!|Fossi in te, accetterei subito.; Se fossi in te, direi di sì.
a|Davvero? Ma se andassi via, lascerei qui la mia famiglia.|Wirklich? Aber wenn ich wegginge, würde ich meine Familie hier zurücklassen.|Really? But if I left, I'd be leaving my family here.
me|Lo capisco. Ma potresti tornare spesso, Barcellona non è lontana.|Das verstehe ich. Aber du könntest oft zurückkommen, Barcelona ist nicht weit.|I understand. But you could come back often, Barcelona isn't far.|Capisco, ma potresti tornare spesso.
a|È vero. E se il lavoro non mi piacesse?|Stimmt. Und wenn mir der Job nicht gefallen würde?|True. And what if I didn't like the job?
me|Se non ti piacesse, potresti sempre cercare qualcos'altro.|Wenn er dir nicht gefallen würde, könntest du immer etwas anderes suchen.|If you didn't like it, you could always look for something else.|In quel caso cercheresti un altro lavoro.
a|Hai ragione. Se non provo, non lo saprò mai.|Du hast recht. Wenn ich es nicht versuche, werde ich es nie wissen.|You're right. If I don't try, I'll never know.
me|Esatto! E se vai, vengo a trovarti.|Genau! Und wenn du gehst, besuche ich dich.|Exactly! And if you go, I'll come and visit you.|Esatto, e io vengo a trovarti!` }
});

lesson("B1", { id: "it-b1-04", t: TB("Notizie e media – Passiv und <i>si</i>", "Notizie e media – Passive and <i>si</i>"),
  goal: TB("Du kannst Nachrichten verstehen und wiedergeben und das Passiv sowie das unpersönliche si benutzen.", "You can understand and report news and use the passive and impersonal si."),
  words: `la notizia|die Nachricht (Neuigkeit)|the news item|n
il telegiornale|die Fernsehnachrichten|the TV news|n
il giornale|die Zeitung|the newspaper|n
l'articolo|der Artikel|the article|n
il/la giornalista|der/die Journalist(in)|the journalist|n
l'intervista|das Interview|the interview|n
il titolo|die Schlagzeile; der Titel|the headline; the title|n
i social|die sozialen Medien|social media|n
la fake news|die Falschmeldung|the fake news|n
la fonte|die Quelle|the source|n|Bisogna sempre controllare la fonte.|Man muss immer die Quelle prüfen.|You always have to check the source.
pubblicare|veröffentlichen|to publish|v
annunciare|ankündigen; bekanntgeben|to announce|v
il governo|die Regierung|the government|n
le elezioni|die Wahlen|the elections|n
lo sciopero|der Streik|the strike|n
la manifestazione|die Demonstration|the demonstration|n
il terremoto|das Erdbeben|the earthquake|n
l'alluvione|die Überschwemmung|the flood|n
secondo|laut; nach|according to|x|Secondo il giornale, …|Laut der Zeitung …|According to the paper, …
attuale|aktuell|current|adj
informarsi|sich informieren|to keep informed|v`,
  say: `Il nuovo ponte è stato inaugurato ieri.|Die neue Brücke wurde gestern eingeweiht.|The new bridge was opened yesterday.
La notizia è stata pubblicata da tutti i giornali.|Die Nachricht wurde von allen Zeitungen veröffentlicht.|The news was published by all the papers.
In Italia si legge poco.|In Italien wird wenig gelesen.|People in Italy don't read much.
Si dice che il ministro si dimetterà.|Man sagt, der Minister werde zurücktreten.|It's said that the minister will resign.
Si parlano molte lingue in Svizzera.|In der Schweiz spricht man viele Sprachen.|Many languages are spoken in Switzerland.
Lo sciopero viene annunciato con una settimana di anticipo.|Der Streik wird eine Woche im Voraus angekündigt.|The strike is announced a week in advance.
Come ti informi?|Wie informierst du dich?|How do you keep informed?`,
  gram: [
    ["h", TB("Das Passiv: essere / venire + Partizip", "The passive: essere / venire + participle")],
    ["ex", [["Il libro è letto da milioni di persone.", "Das Buch wird von Millionen Menschen gelesen.", "The book is read by millions of people."], ["La legge è stata approvata.", "Das Gesetz wurde verabschiedet.", "The law has been passed."], ["Le lettere vengono spedite ogni giorno.", "Die Briefe werden jeden Tag verschickt.", "The letters are sent every day."]]],
    ["p", TB("Das Partizip passt sich ans Subjekt an (la legge è stat<b>a</b> approvat<b>a</b>). Der Urheber steht mit <b>da</b>. <b>venire</b> statt essere betont den Vorgang und geht nur in einfachen Zeiten.", "The participle agrees with the subject (la legge è stat<b>a</b> approvat<b>a</b>). The agent is introduced by <b>da</b>. <b>venire</b> instead of essere stresses the process and only works in simple tenses.")],
    ["h", TB("Das unpersönliche <i>si</i> (man)", "Impersonal <i>si</i> (one, people)")],
    ["p", TB("<b>si</b> + 3. Person: <b>si mangia</b> bene qui (man isst gut). Mit Objekt im Plural steht das Verb im Plural: <b>si vendono</b> case.", "<b>si</b> + 3rd person: <b>si mangia</b> bene qui (the food is good here). With a plural object the verb is plural: <b>si vendono</b> case (houses for sale).")],
    ["tip", TB("Zeitungsdeutsch „soll“ (laut Berichten) = Condizionale: <b>Il ministro sarebbe</b> a Bruxelles (Der Minister soll in Brüssel sein).", "Reporting unconfirmed news uses the conditional: <b>Il ministro sarebbe</b> a Bruxelles (The minister is reportedly in Brussels).")]
  ],
  drill: [
    ["La mostra ___ inaugurata ieri.", ["è stata", "ha stato", "è stato"], 0],
    ["I risultati ___ pubblicati domani.", ["saranno", "avranno", "verrebbero stati"], 0],
    ["In questo ristorante ___ benissimo.", ["si mangia", "si mangiano", "mangia"], 0],
    ["In Italia ___ molti dialetti.", ["si parlano", "si parla", "parla"], 0],
    ["L'articolo è stato scritto ___ una giornalista famosa.", ["da", "di", "per"], 0],
    ["Le notizie ___ controllate prima della pubblicazione.", ["vengono", "venivano state", "sono venute"], 0],
    ["Secondo i giornali, il presidente ___ malato. (Gerücht: essere)", "sarebbe"]
  ],
  talk: { t: TB("Nachrichten des Tages", "Today's news"), scene: TB("Beim Frühstück liest dein Mitbewohner Simone Nachrichten auf dem Handy vor.", "At breakfast your flatmate Simone reads the news on his phone."), who: "Simone", slots: {}, lines: `a|Hai letto? Domani c'è uno sciopero dei treni in tutta Italia.|Hast du gelesen? Morgen ist in ganz Italien Bahnstreik.|Have you read? There's a train strike all over Italy tomorrow.
me|No! Da chi è stato annunciato?|Nein! Von wem wurde er angekündigt?|No! Who announced it?|Davvero? Chi l'ha annunciato?
a|Dai sindacati. Si dice che duri ventiquattro ore.|Von den Gewerkschaften. Es heißt, er dauert vierundzwanzig Stunden.|By the unions. They say it'll last twenty-four hours.
me|Che disastro, domani devo andare a Firenze per lavoro.|Was für eine Katastrophe, morgen muss ich beruflich nach Florenz.|What a disaster, I have to go to Florence for work tomorrow.|Accidenti, domani devo andare a Firenze!
a|Secondo l'articolo, alcuni treni vengono garantiti la mattina presto.|Laut Artikel werden einige Züge frühmorgens garantiert.|According to the article, some trains are guaranteed early in the morning.
me|Allora controllo subito l'orario sul sito di Trenitalia.|Dann prüfe ich sofort den Fahrplan auf der Trenitalia-Seite.|Then I'll check the timetable on the Trenitalia website right away.|Controllo subito sul sito.
a|Bravo! Io invece mi informo solo sui social…|Gut so! Ich informiere mich dagegen nur über Social Media …|Good idea! I only get my news from social media, on the other hand…
me|Attento alle fake news! Bisogna sempre controllare la fonte.|Vorsicht vor Fake News! Man muss immer die Quelle prüfen.|Watch out for fake news! You always have to check the source.|Occhio alle fake news, controlla sempre la fonte!` }
});
