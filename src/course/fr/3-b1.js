/* Français B1 · 1–4 */
lesson("B1", { id: "fr-b1-01", t: TB("Il faut que… – Der Subjonctif", "Il faut que… – The subjunctive"),
  goal: TB("Du kannst Notwendigkeit, Wünsche, Gefühle und Zweifel ausdrücken – mit dem Subjonctif.", "You can express necessity, wishes, feelings and doubt – with the subjunctive."),
  words: `il faut que|es ist nötig, dass; man muss|it's necessary that|ph|Il faut que tu viennes.|Du musst kommen.|You have to come.
vouloir que|wollen, dass|to want (someone) to|v|Je veux que tu sois heureux.|Ich will, dass du glücklich bist.|I want you to be happy.
souhaiter|wünschen|to wish|v
espérer|hoffen|to hope|v|J'espère que tu vas bien.|Ich hoffe, es geht dir gut.|I hope you're well.
avoir peur que|befürchten, dass|to be afraid that|v
être content que|sich freuen, dass|to be glad that|v|Je suis contente que tu sois là.|Ich freue mich, dass du da bist.|I'm glad you're here.
douter que|bezweifeln, dass|to doubt that|v
il est important que|es ist wichtig, dass|it's important that|ph
il vaut mieux que|es ist besser, wenn|it's better if|ph
bien que|obwohl|although|x
pour que|damit|so that|x
avant que|bevor|before|x
la nouvelle|die Neuigkeit|the news|n
la fête de départ|die Abschiedsfeier|the leaving party|n
la chance|das Glück|luck|n|Bonne chance !|Viel Glück!|Good luck!
le poste|die Stelle|the job; the position|n
déménager|umziehen|to move (house)|v
se débrouiller|zurechtkommen|to manage; to cope|v|Tu vas bien te débrouiller.|Du wirst gut zurechtkommen.|You'll manage fine.
féliciter|gratulieren|to congratulate|v
félicitations|Glückwunsch|congratulations|ph`,
  say: `Il faut que je parte maintenant.|Ich muss jetzt gehen.|I have to leave now.
Je veux que tu viennes à ma fête.|Ich möchte, dass du zu meiner Party kommst.|I want you to come to my party.
Je suis content que tu sois là.|Ich freue mich, dass du da bist.|I'm glad you're here.
Je ne pense pas que ce soit difficile.|Ich glaube nicht, dass es schwierig ist.|I don't think it's difficult.
Je pense que tu as raison.|Ich glaube, du hast recht.|I think you're right.
Il vaut mieux qu'on en parle demain.|Es ist besser, wenn wir morgen darüber reden.|It's better if we talk about it tomorrow.`,
  gram: [
    ["h", TB("Subjonctif présent – Bildung", "Present subjunctive – formation")],
    ["p", TB("Stamm der <b>ils</b>-Form im Präsens (ils <b>parl</b>ent, ils <b>finiss</b>ent, ils <b>prenn</b>ent) + <b>-e, -es, -e, -ions, -iez, -ent</b>. Unregelmäßig: être → <b>sois</b>, avoir → <b>aie</b>, aller → <b>aille</b>, faire → <b>fasse</b>, pouvoir → <b>puisse</b>, savoir → <b>sache</b>.", "Stem of the <b>ils</b> form in the present (ils <b>parl</b>ent, ils <b>finiss</b>ent, ils <b>prenn</b>ent) + <b>-e, -es, -e, -ions, -iez, -ent</b>. Irregular: être → <b>sois</b>, avoir → <b>aie</b>, aller → <b>aille</b>, faire → <b>fasse</b>, pouvoir → <b>puisse</b>, savoir → <b>sache</b>.")],
    ["conj", { verbs: ["être", "avoir", "faire"], tenses: ["Subjonctif présent"] }],
    ["table", { head: [TB("Auslöser", "trigger"), TB("Beispiel", "example")], rows: [[TB("Notwendigkeit: il faut que", "necessity: il faut que"), "Il faut que tu partes."], [TB("Wunsch: vouloir que, souhaiter que", "wish: vouloir que, souhaiter que"), "Je veux que tu restes."], [TB("Gefühl: être content que, avoir peur que", "feeling: être content que, avoir peur que"), "J'ai peur qu'il soit malade."], [TB("Zweifel: je ne pense pas que", "doubt: je ne pense pas que"), "Je ne pense pas qu'il vienne."], [TB("Konjunktionen: pour que, bien que", "conjunctions: pour que, bien que"), "Je t'explique pour que tu comprennes."]], say: 1 }],
    ["tip", TB("<b>Je pense que / j'espère que</b> + Indikativ! Erst verneint (<b>je ne pense pas que</b>) kommt der Subjonctif. Und: gleiche Person → Infinitiv: Je veux <b>partir</b> / Je veux que <b>tu partes</b>.", "<b>Je pense que / j'espère que</b> + indicative! Only the negative (<b>je ne pense pas que</b>) takes the subjunctive. And: same person → infinitive: Je veux <b>partir</b> / Je veux que <b>tu partes</b>.")]
  ],
  forms: { verbs: ["être", "avoir", "aller", "faire", "pouvoir", "venir", "parler", "finir"], tenses: ["Subjonctif présent"] },
  drill: [
    ["Il faut que tu ___ à l'heure.", ["sois", "es", "seras"], 0],
    ["Je veux que vous ___ avec nous.", ["veniez", "venez", "venir"], 0],
    ["J'espère que tu ___ bien.", ["vas", "ailles", "aller"], 0, TB("espérer que → Indikativ.", "espérer que → indicative.")],
    ["Je ne pense pas que ce ___ une bonne idée.", ["soit", "est", "sera"], 0],
    ["Je veux ___ en France l'année prochaine. (ich selbst)", ["partir", "que je parte", "pars"], 0],
    ["Je t'explique pour que tu ___.", ["comprennes", "comprends", "comprendre"], 0],
    ["Du musst das machen. → Il faut que tu le ___.", "fasses"]
  ],
  talk: { t: TB("Gute Nachrichten", "Good news"), scene: TB("Deine Freundin Lucie hat einen neuen Job in Montréal.", "Your friend Lucie has got a new job in Montreal."), who: "Lucie", slots: {}, lines: `a|J'ai une nouvelle ! J'ai eu le poste à Montréal !|Ich habe Neuigkeiten! Ich habe die Stelle in Montréal bekommen!|I've got news! I got the job in Montreal!
me|Félicitations ! Je suis tellement content pour toi !|Glückwunsch! Ich freue mich so für dich!|Congratulations! I'm so happy for you!|Bravo ! Je suis très content pour toi.
a|Merci ! Mais j'ai peur que ce soit trop difficile.|Danke! Aber ich habe Angst, dass es zu schwer ist.|Thanks! But I'm afraid it'll be too hard.
me|Je ne pense pas que ce soit trop difficile. Tu vas bien te débrouiller.|Ich glaube nicht, dass es zu schwer ist. Du wirst gut zurechtkommen.|I don't think it's too hard. You'll manage fine.|Mais non, tu vas y arriver !
a|Tu crois ? Il faut que je déménage en janvier.|Meinst du? Ich muss im Januar umziehen.|Do you think so? I have to move in January.
me|Il faut qu'on se voie avant que tu partes !|Wir müssen uns sehen, bevor du gehst!|We have to see each other before you leave!|On doit se voir avant ton départ !
a|Bien sûr ! Je veux que tu viennes à ma fête de départ.|Klar! Ich möchte, dass du zu meiner Abschiedsfeier kommst.|Of course! I want you to come to my leaving party.
me|Avec plaisir ! Bonne chance pour tout !|Gern! Viel Glück für alles!|With pleasure! Good luck with everything!|J'y serai ! Bonne chance !` }
});

lesson("B1", { id: "fr-b1-02", t: TB("L'entretien d'embauche – Relativpronomen", "L'entretien d'embauche – Relative pronouns"),
  goal: TB("Du kannst dich im Vorstellungsgespräch präsentieren und Personen, Dinge und Orte genauer beschreiben.", "You can present yourself in a job interview and describe people, things and places more precisely."),
  words: `l'entretien d'embauche|das Vorstellungsgespräch (m)|the job interview|n
le poste|die Stelle|the position|n|Le poste qui m'intéresse est à Paris.|Die Stelle, die mich interessiert, ist in Paris.|The position I'm interested in is in Paris.
postuler|sich bewerben|to apply|v|J'ai postulé chez L'Oréal.|Ich habe mich bei L'Oréal beworben.|I applied to L'Oréal.
le CV|der Lebenslauf|the CV|n
la lettre de motivation|das Anschreiben|the cover letter|n
le stage|das Praktikum|the internship|n|J'ai fait un stage dans une banque.|Ich habe ein Praktikum in einer Bank gemacht.|I did an internship at a bank.
l'expérience|die Erfahrung (f)|the experience|n
la formation|die Ausbildung|the training; education|n
le diplôme|der Abschluss|the degree; the diploma|n
le salaire|das Gehalt|the salary|n
le contrat|der Vertrag|the contract|n
le CDI|der unbefristete Vertrag|the permanent contract|n
le point fort|die Stärke|the strength|n
le point faible|die Schwäche|the weakness|n
l'équipe|das Team (f)|the team|n
rigoureux|gründlich; sorgfältig|thorough|adj
motivé|motiviert|motivated|adj
s'occuper de|sich kümmern um; zuständig sein für|to be in charge of|v|Je m'occupe des réseaux sociaux.|Ich bin für die sozialen Medien zuständig.|I'm in charge of social media.
embaucher|einstellen|to hire|v
l'entreprise|das Unternehmen (f)|the company|n`,
  say: `Pourquoi voulez-vous travailler chez nous ?|Warum möchten Sie bei uns arbeiten?|Why do you want to work for us?
Ce qui m'intéresse, c'est le contact avec les clients.|Was mich interessiert, ist der Kontakt mit den Kunden.|What interests me is contact with customers.
L'entreprise où je travaille est petite.|Die Firma, in der ich arbeite, ist klein.|The company where I work is small.
C'est un projet dont je suis très fier.|Das ist ein Projekt, auf das ich sehr stolz bin.|It's a project I'm very proud of.
Quand est-ce que je pourrais commencer ?|Wann könnte ich anfangen?|When could I start?
Nous vous recontacterons la semaine prochaine.|Wir melden uns nächste Woche bei Ihnen.|We'll get back to you next week.`,
  gram: [
    ["h", TB("Relativpronomen", "Relative pronouns")],
    ["table", { head: [TB("Pronomen", "pronoun"), TB("wofür?", "use"), TB("Beispiel", "example")], rows: [["qui", TB("Subjekt (wer / was tut etwas?)", "subject"), "Le collègue qui travaille avec moi est sympa."], ["que / qu'", TB("direktes Objekt", "direct object"), "Le poste que vous proposez m'intéresse."], ["où", TB("Ort und Zeit", "place and time"), "La ville où j'habite. Le jour où je suis arrivé."], ["dont", TB("ersetzt de + …", "replaces de + …"), "Le projet dont je parle (parler de)."], ["ce qui / ce que", TB("„was“", "“what”"), "Ce que j'aime, c'est l'équipe."]], say: 2 }],
    ["tip", TB("Merke: Folgt direkt ein Verb → meist <b>qui</b>; folgt ein Subjekt (je, il, vous …) → <b>que</b>: le poste <b>qui</b> m'intéresse / le poste <b>que</b> je cherche.", "Tip: verb straight after → usually <b>qui</b>; subject after (je, il, vous …) → <b>que</b>: le poste <b>qui</b> m'intéresse / le poste <b>que</b> je cherche.")]
  ],
  drill: [
    ["Le poste ___ vous proposez m'intéresse beaucoup.", ["que", "qui", "dont"], 0],
    ["La collègue ___ s'occupe du marketing est très sympa.", ["qui", "que", "où"], 0],
    ["L'entreprise ___ je travaille a 300 employés.", ["où", "que", "dont"], 0],
    ["C'est le projet ___ je suis le plus fier.", ["dont", "que", "qui"], 0, TB("être fier <b>de</b> → dont.", "être fier <b>de</b> → dont.")],
    ["___ me plaît, c'est l'ambiance.", ["Ce qui", "Ce que", "Qui"], 0],
    ["J'ai fait un stage ___ une banque.", ["dans", "à", "chez le"], 0],
    ["Die Stadt, in der ich wohne … → La ville ___ j'habite …", "où"]
  ],
  talk: { t: TB("Das Vorstellungsgespräch", "The job interview"), scene: TB("Bewerbungsgespräch bei einer Firma in Paris. Madame Lefèvre stellt die Fragen.", "A job interview at a company in Paris. Madame Lefèvre asks the questions."), who: "Mme Lefèvre", slots: { name: "Alex" }, lines: `a|Bonjour, asseyez-vous. Présentez-vous en quelques mots.|Guten Tag, setzen Sie sich. Stellen Sie sich kurz vor.|Hello, take a seat. Introduce yourself briefly.
me|Bonjour. Je m'appelle {name}, je fais un master de gestion et j'ai fait un stage dans une banque.|Guten Tag. Ich heiße …, mache einen Master in BWL und habe ein Praktikum in einer Bank gemacht.|Hello. My name is …, I'm doing a master's in management and I did an internship at a bank.|Je m'appelle {name}. Je fais un master et j'ai fait un stage dans une banque.
a|Pourquoi ce poste vous intéresse-t-il ?|Warum interessiert Sie diese Stelle?|Why are you interested in this position?
me|Ce qui m'intéresse, c'est de travailler dans une équipe internationale.|Was mich interessiert, ist die Arbeit in einem internationalen Team.|What interests me is working in an international team.|J'aimerais travailler dans une équipe internationale.
a|Quel est votre point fort ?|Was ist Ihre Stärke?|What's your strength?
me|Je suis rigoureux et très motivé.|Ich bin gründlich und sehr motiviert.|I'm thorough and very motivated.|Je suis motivé et j'aime le travail en équipe.
a|Très bien. Quand pourriez-vous commencer ?|Sehr gut. Wann könnten Sie anfangen?|Very good. When could you start?
me|Je pourrais commencer le mois prochain.|Ich könnte nächsten Monat anfangen.|I could start next month.|Dès le mois prochain.` }
});

lesson("B1", { id: "fr-b1-03", t: TB("Si j'avais… – Bedingungssätze", "Si j'avais… – Conditional sentences"),
  goal: TB("Du kannst über Bedingungen, Träume und hypothetische Situationen sprechen.", "You can talk about conditions, dreams and hypothetical situations."),
  words: `gagner au loto|im Lotto gewinnen|to win the lottery|v|Si je gagnais au loto, j'achèterais une maison.|Wenn ich im Lotto gewinnen würde, würde ich ein Haus kaufen.|If I won the lottery, I'd buy a house.
changer de vie|sein Leben ändern|to change one's life|v
s'installer|sich niederlassen|to settle|v|Si je pouvais, je m'installerais en Provence.|Wenn ich könnte, würde ich mich in der Provence niederlassen.|If I could, I'd settle in Provence.
économiser|sparen|to save (money)|v
dépenser|ausgeben|to spend|v
le risque|das Risiko|the risk|n
prendre un risque|ein Risiko eingehen|to take a risk|v
oser|wagen; sich trauen|to dare|v
le super-pouvoir|die Superkraft|the superpower|n
invisible|unsichtbar|invisible|adj
voler|fliegen|to fly|v
par contre|dagegen|on the other hand|ph
l'île déserte|die einsame Insel (f)|the desert island|n
au cas où|falls|in case|ph|Prends un parapluie au cas où il pleuvrait.|Nimm einen Schirm mit, falls es regnet.|Take an umbrella in case it rains.
à ta place|an deiner Stelle|in your place|ph
l'offre|das Angebot (f)|the offer|n
même si|selbst wenn|even if|x
sinon|sonst|otherwise|x`,
  say: `Si j'ai le temps, je t'appelle.|Wenn ich Zeit habe, rufe ich dich an.|If I have time, I'll call you.
Si j'avais plus de temps, j'apprendrais le piano.|Wenn ich mehr Zeit hätte, würde ich Klavier lernen.|If I had more time, I'd learn the piano.
Si j'étais toi, j'accepterais l'offre.|Wenn ich du wäre, würde ich das Angebot annehmen.|If I were you, I'd accept the offer.
Qu'est-ce que tu ferais si tu étais invisible ?|Was würdest du machen, wenn du unsichtbar wärst?|What would you do if you were invisible?
S'il pleut demain, on ira au musée.|Wenn es morgen regnet, gehen wir ins Museum.|If it rains tomorrow, we'll go to the museum.
Même si c'est cher, ça vaut le coup.|Selbst wenn es teuer ist, lohnt es sich.|Even if it's expensive, it's worth it.`,
  gram: [
    ["h", TB("Zwei Arten von Bedingungssätzen", "Two kinds of conditional sentences")],
    ["table", { head: [TB("Art", "type"), TB("si-Satz", "si clause"), TB("Hauptsatz", "main clause"), TB("Beispiel", "example")], rows: [[TB("real", "real"), "présent", TB("présent / futur / impératif", "present / future / imperative"), "S'il pleut, je reste à la maison."], [TB("irreal (jetzt)", "unreal (now)"), "imparfait", "conditionnel", "Si j'avais de l'argent, je voyagerais."]], say: 3 }],
    ["conj", { verbs: ["avoir", "être"], tenses: ["Imparfait", "Conditionnel présent"] }],
    ["tip", TB("Nach <b>si</b> nie Futur oder Conditionnel: <s>Si j'aurais</s> → Si j'<b>avais</b>. <b>si + il</b> wird zu <b>s'il</b>, aber <b>si elle</b> bleibt.", "After <b>si</b> never the future or conditional: <s>Si j'aurais</s> → Si j'<b>avais</b>. <b>si + il</b> becomes <b>s'il</b>, but <b>si elle</b> stays.")]
  ],
  forms: { verbs: ["avoir", "être", "pouvoir", "faire", "aller", "vivre"], tenses: ["Imparfait", "Conditionnel présent"] },
  drill: [
    ["Si j'___ de l'argent, j'achèterais une voiture.", ["avais", "aurais", "ai"], 0],
    ["S'il fait beau demain, nous ___ à la plage.", ["irons", "irions", "allions"], 0],
    ["Si j'étais toi, je ___ cette offre.", ["prendrais", "prendrai", "prenais"], 0],
    ["Qu'est-ce que tu ferais si tu ___ invisible ?", ["étais", "serais", "es"], 0],
    ["Si tu ___ plus, tu pourrais partir en vacances. (économiser)", ["économisais", "économiserais", "économises"], 0],
    ["___ il pleut, on reste ici.", ["S'", "Si", "Se"], 0],
    ["An deiner Stelle würde ich gehen. → À ta place, je ___. (partir)", "partirais"]
  ],
  talk: { t: TB("Was wäre, wenn …?", "What if …?"), scene: TB("Abends in einer Bar philosophierst du mit deinem Freund Maxime.", "In a bar one evening you philosophise with your friend Maxime."), who: "Maxime", slots: {}, lines: `a|Dis, qu'est-ce que tu ferais si tu gagnais au loto ?|Sag mal, was würdest du machen, wenn du im Lotto gewinnen würdest?|Hey, what would you do if you won the lottery?
me|Si je gagnais au loto, je ferais le tour du monde.|Wenn ich im Lotto gewinnen würde, würde ich um die Welt reisen.|If I won the lottery, I'd travel around the world.|Je ferais le tour du monde.
a|Moi, par contre, j'arrêterais de travailler tout de suite !|Ich dagegen würde sofort aufhören zu arbeiten!|I, on the other hand, would stop working straight away!
me|Vraiment ? Moi, je continuerais, j'aime mon travail.|Wirklich? Ich würde weitermachen, ich mag meine Arbeit.|Really? I'd carry on, I like my job.|Pas moi, j'aime mon travail.
a|Et si tu pouvais avoir un super-pouvoir ?|Und wenn du eine Superkraft haben könntest?|And if you could have a superpower?
me|Je voudrais voler. Comme ça, je n'aurais plus besoin du métro !|Ich würde gern fliegen. Dann bräuchte ich die U-Bahn nicht mehr!|I'd like to fly. That way I wouldn't need the metro any more!|J'aimerais voler.
a|Ha ha ! Moi, si j'étais invisible, j'irais à tous les concerts gratuitement.|Haha! Wenn ich unsichtbar wäre, würde ich gratis in alle Konzerte gehen.|Ha ha! If I were invisible, I'd go to all the concerts for free.
me|À ta place, j'achèterais un billet. C'est plus simple !|An deiner Stelle würde ich ein Ticket kaufen. Das ist einfacher!|If I were you, I'd buy a ticket. It's simpler!|Si j'étais toi, je prendrais un billet !` }
});

lesson("B1", { id: "fr-b1-04", t: TB("Les médias – Passiv und <i>on</i>", "Les médias – The passive and <i>on</i>"),
  goal: TB("Du kannst Nachrichten verstehen, wiedergeben und sagen, wie du dich informierst.", "You can understand and pass on the news and say how you keep informed."),
  words: `les infos|die Nachrichten|the news|n|Tu as vu les infos ce matin ?|Hast du heute Morgen die Nachrichten gesehen?|Did you see the news this morning?
le journal|die Zeitung; die Nachrichtensendung|the newspaper; the news programme|n
le titre|die Schlagzeile; der Titel|the headline; the title|n
l'article|der Artikel (m)|the article|n
le journaliste|der Journalist|the journalist|n
le gouvernement|die Regierung|the government|n
les élections|die Wahlen (f)|the elections|n
la loi|das Gesetz|the law|n|La loi a été votée hier.|Das Gesetz wurde gestern verabschiedet.|The law was passed yesterday.
voter|abstimmen; wählen|to vote|v
la grève|der Streik|the strike|n|Demain, il y a une grève des trains.|Morgen ist Bahnstreik.|There's a train strike tomorrow.
arrêter|festnehmen; anhalten|to arrest; to stop|v
blessé|verletzt|injured|adj
l'incendie|der Brand (m)|the fire|n
les réseaux sociaux|die sozialen Medien|social media|n
s'informer|sich informieren|to keep informed|v
selon|laut; gemäß|according to|x|Selon le journal, les prix vont augmenter.|Laut Zeitung werden die Preise steigen.|According to the paper, prices are going to rise.
la source|die Quelle|the source|n
fiable|zuverlässig|reliable|adj
les fake news|die Falschnachrichten|fake news|n
apprendre|erfahren; lernen|to find out; to learn|v`,
  say: `Le musée a été construit en 1900.|Das Museum wurde 1900 gebaut.|The museum was built in 1900.
Les voleurs ont été arrêtés par la police.|Die Diebe wurden von der Polizei festgenommen.|The thieves were arrested by the police.
On dit que les loyers vont encore augmenter.|Man sagt, dass die Mieten noch weiter steigen.|They say rents are going to rise further.
Ici, on parle français et anglais.|Hier spricht man Französisch und Englisch.|French and English are spoken here.
Je m'informe surtout sur internet.|Ich informiere mich vor allem im Internet.|I get my news mainly online.
Il ne faut pas croire tout ce qu'on lit sur les réseaux.|Man darf nicht alles glauben, was man in den sozialen Medien liest.|You shouldn't believe everything you read on social media.`,
  gram: [
    ["h", TB("Passiv: <i>être</i> + Partizip", "Passive: <i>être</i> + participle")],
    ["p", TB("<b>être + Partizip</b>, das Partizip passt sich an: La loi <b>a été votée</b>. Les voleurs <b>ont été arrêtés</b>. Wer es tut: <b>par</b> + Person.", "<b>être + participle</b>, the participle agrees: La loi <b>a été votée</b>. Les voleurs <b>ont été arrêtés</b>. The doer: <b>par</b> + person.")],
    ["table", { head: [TB("Zeit", "tense"), TB("Passiv", "passive")], rows: [["présent", "La maison est vendue."], ["passé composé", "La maison a été vendue."], ["imparfait", "La maison était vendue."], ["futur", "La maison sera vendue."]], say: 1 }],
    ["h", TB("<i>on</i> statt Passiv", "<i>on</i> instead of the passive")],
    ["p", TB("Im Alltag sagt man viel öfter <b>on</b> (man) als Passiv: <b>On</b> a arrêté les voleurs. <b>On</b> dit que… Umgangssprachlich heißt <b>on</b> auch „wir“: <b>On</b> y va ?", "In everyday French <b>on</b> is far more common than the passive: <b>On</b> a arrêté les voleurs. <b>On</b> dit que… Informally <b>on</b> also means “we”: <b>On</b> y va ?")],
    ["tip", TB("In Nachrichten liest du oft <b>selon</b> (laut) und den Conditionnel für unbestätigte Infos: Le ministre <b>serait</b> malade = Der Minister soll krank sein.", "In the news you'll often see <b>selon</b> (according to) and the conditional for unconfirmed reports: Le ministre <b>serait</b> malade = the minister is said to be ill.")]
  ],
  drill: [
    ["La loi a été ___ par le Parlement.", ["votée", "voté", "votées"], 0],
    ["Les voleurs ont été ___ hier soir.", ["arrêtés", "arrêté", "arrêtées"], 0],
    ["Ce pont ___ construit en 1880.", ["a été", "est été", "a"], 0],
    ["___ dit que la grève va durer.", ["On", "Il", "Se"], 0],
    ["La maison a été vendue ___ une famille anglaise.", ["par", "de", "pour"], 0],
    ["___ le journal, il va neiger.", ["Selon", "Pour", "Par"], 0],
    ["Das Museum wird morgen eröffnet. → Le musée ___ ouvert demain. (futur)", "sera"]
  ],
  talk: { t: TB("Hast du schon gehört?", "Have you heard?"), scene: TB("Dein Kollege Nicolas erzählt dir in der Kaffeepause eine Neuigkeit.", "Your colleague Nicolas tells you some news during the coffee break."), who: "Nicolas", slots: {}, lines: `a|Tu as vu ? Demain, il y a une grève des transports.|Hast du gesehen? Morgen ist Verkehrsstreik.|Did you see? There's a transport strike tomorrow.
me|Sérieux ? Tu l'as lu où ?|Im Ernst? Wo hast du das gelesen?|Seriously? Where did you read it?|C'est vrai ? Où est-ce que tu l'as vu ?
a|Ça a été annoncé ce matin à la radio.|Das wurde heute Morgen im Radio angekündigt.|It was announced on the radio this morning.
me|Moi, je m'informe surtout sur les réseaux sociaux.|Ich informiere mich vor allem über die sozialen Medien.|I get my news mainly from social media.|Je m'informe sur internet.
a|Attention, on y lit beaucoup de fake news !|Vorsicht, da liest man viele Falschnachrichten!|Careful, you read a lot of fake news there!
me|C'est vrai. Il faut toujours vérifier la source.|Stimmt. Man muss immer die Quelle prüfen.|That's true. You always have to check the source.|Tu as raison, il faut vérifier.
a|Bon, et tu vas venir comment au bureau demain ?|Na, und wie kommst du morgen ins Büro?|So, how are you going to get to the office tomorrow?
me|S'il y a grève, je travaillerai de chez moi.|Wenn gestreikt wird, arbeite ich von zu Hause.|If there's a strike, I'll work from home.|Je ferai du télétravail.` }
});
