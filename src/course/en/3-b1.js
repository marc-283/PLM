/* English B1 · 1–3 */
lesson("B1", { id: "en-b1-01", t: TB("The job interview – <i>for / since</i> und Present perfect continuous", "The job interview – <i>for / since</i> and the present perfect continuous"),
  goal: TB("Du kannst im Vorstellungsgespräch über Erfahrung, Ausbildung und Stärken sprechen.", "You can talk about your experience, education and strengths in a job interview."),
  words: `the position|die Stelle||n|I'm applying for the position of financial analyst.|Ich bewerbe mich auf die Stelle als Finanzanalyst.
to apply for|sich bewerben um||v
the applicant|der Bewerber; die Bewerberin||n
the CV|der Lebenslauf||n
the cover letter|das Anschreiben||n
the degree|der Studienabschluss||n|I have a degree in business administration.|Ich habe einen Abschluss in BWL.
the internship|das Praktikum||n|I did an internship at a bank.|Ich habe ein Praktikum bei einer Bank gemacht.
the experience|die Erfahrung||n
the skills|die Fähigkeiten||n
the strength|die Stärke||n
the weakness|die Schwäche||n
to be responsible for|verantwortlich sein für||v|I'm responsible for client reporting.|Ich bin für das Kunden-Reporting verantwortlich.
to manage|leiten; managen||v
reliable|zuverlässig||adj
flexible|flexibel||adj
the salary|das Gehalt||n
the notice period|die Kündigungsfrist||n|My notice period is three months.|Meine Kündigungsfrist beträgt drei Monate.
full-time|Vollzeit||adj
part-time|Teilzeit||adj
the team player|der Teamplayer||n`,
  say: `I've been working in marketing for three years.|Ich arbeite seit drei Jahren im Marketing.
I've been studying finance since 2024.|Ich studiere seit 2024 Finance.
In my last job I was responsible for social media.|In meinem letzten Job war ich für Social Media zuständig.
My greatest strength is that I'm very organised.|Meine größte Stärke ist, dass ich sehr organisiert bin.
I'm looking for a new challenge.|Ich suche eine neue Herausforderung.
What are the next steps?|Wie geht es weiter?`,
  gram: [
    ["h", TB("<i>for</i> oder <i>since</i>? – „seit“", "<i>for</i> or <i>since</i>?")],
    ["table", { head: ["", TB("wofür?", "use"), TB("Beispiel", "example")], rows: [["for", TB("Zeitspanne (wie lange?)", "period (how long?)"), "for three years, for ages"], ["since", TB("Zeitpunkt (seit wann?)", "point in time (since when?)"), "since 2022, since Monday"]], say: 2 }],
    ["h", TB("Present perfect continuous", "Present perfect continuous")],
    ["p", TB("Deutsch: „Ich <i>arbeite</i> seit drei Jahren hier“ – Präsens! Englisch braucht das <b>present perfect</b>: I'<b>ve been working</b> here for three years (andauernd) / I'<b>ve lived</b> here since 2020. Nie: <s>I work here since 2020</s>.", "German uses the present tense (“Ich arbeite seit …”). English needs the <b>present perfect</b>: I'<b>ve been working</b> here for three years (ongoing) / I'<b>ve lived</b> here since 2020.")],
    ["ex", [["How long have you been learning English?", "Wie lange lernst du schon Englisch?"], ["I've known her since university.", "Ich kenne sie seit der Uni."], ["She's been waiting for an hour.", "Sie wartet seit einer Stunde."]]],
    ["tip", TB("Zustandsverben wie <b>know, be, have (besitzen), like</b> nicht in der -ing-Form: I'<b>ve known</b> him for years (nicht <s>have been knowing</s>).", "State verbs like <b>know, be, have (own), like</b> don't take -ing: I'<b>ve known</b> him for years (not <s>have been knowing</s>).")]
  ],
  th: "tenses",
  quiz: ["en-mistakes", "en-ppps"],
  drill: [
    ["I've been working here ___ 2021.", ["since", "for", "from"], 0],
    ["She's lived in London ___ five years.", ["for", "since", "during"], 0],
    ["How long ___ you been studying Italian?", ["have", "are", "do"], 0],
    ["I ___ him since we were at school.", ["'ve known", "'ve been knowing", "know"], 0],
    ["She's been ___ for the bus for twenty minutes.", ["waiting", "waited", "wait"], 0],
    ["I'm applying ___ the position of project manager.", ["for", "to", "on"], 0],
    ["Ich warte seit einer Stunde. → I've been ___ for an hour.", "waiting"]
  ],
  talk: { t: TB("Das Vorstellungsgespräch", "The job interview"), scene: TB("Bewerbungsgespräch per Video bei einer Beratungsfirma in London. Ms Turner stellt die Fragen.", "A video interview with a consulting firm in London. Ms Turner asks the questions."), who: "Ms Turner", slots: {}, lines: `a|Thanks for joining us. Could you tell us a bit about yourself?|Danke, dass Sie da sind. Könnten Sie uns etwas über sich erzählen?|
me|Of course. I'm doing a master's in business and I've been working part-time at a bank for two years.|Natürlich. Ich mache einen Master in BWL und arbeite seit zwei Jahren in Teilzeit bei einer Bank.||I'm a business student and I've worked part-time at a bank for two years.
a|What are you responsible for there?|Wofür sind Sie dort verantwortlich?|
me|I'm responsible for financial reports and I help with client presentations.|Ich bin für Finanzberichte zuständig und helfe bei Kundenpräsentationen.||I prepare financial reports and help with presentations.
a|Why do you want to work for us?|Warum möchten Sie bei uns arbeiten?|
me|I'm looking for a new challenge, and I'd love to work in an international team.|Ich suche eine neue Herausforderung und würde sehr gern in einem internationalen Team arbeiten.||I'd like a new challenge in an international team.
a|What would you say is your greatest weakness?|Was würden Sie als Ihre größte Schwäche bezeichnen?|
me|Sometimes I spend too long on details, but I've been working on it.|Manchmal verbringe ich zu viel Zeit mit Details, aber daran arbeite ich.||I can be a perfectionist, but I'm working on it.` }
});

lesson("B1", { id: "en-b1-02", t: TB("If I were you… – Bedingungssätze", "If I were you… – Conditionals"),
  goal: TB("Du kannst über reale und hypothetische Situationen sprechen und Ratschläge geben.", "You can talk about real and hypothetical situations and give advice."),
  words: `to win the lottery|im Lotto gewinnen||v|If I won the lottery, I'd travel the world.|Wenn ich im Lotto gewinnen würde, würde ich um die Welt reisen.
to afford|sich leisten||v|I can't afford a new car.|Ich kann mir kein neues Auto leisten.
to save|sparen||v
to borrow|(sich) leihen||v
to lend|(ver)leihen||v
the advice|der Rat||n|Can I give you some advice?|Darf ich dir einen Rat geben?
to recommend|empfehlen||v
to take a risk|ein Risiko eingehen||v
to quit|kündigen; aufhören||v|If I were you, I wouldn't quit your job.|An deiner Stelle würde ich nicht kündigen.
to start a business|ein Unternehmen gründen||v
the decision|die Entscheidung||n
to make a decision|eine Entscheidung treffen||v
unless|außer wenn; es sei denn||x|I won't go unless you come too.|Ich gehe nicht, es sei denn, du kommst mit.
as long as|solange||x
in case|falls (vorsorglich)||x|Take an umbrella in case it rains.|Nimm einen Schirm mit, falls es regnet.
otherwise|sonst||adv
realistic|realistisch||adj
the dream|der Traum||n
abroad|im Ausland||adv|If I could, I'd live abroad for a year.|Wenn ich könnte, würde ich ein Jahr im Ausland leben.`,
  say: `If it rains tomorrow, we'll stay at home.|Wenn es morgen regnet, bleiben wir zu Hause.
If I had more time, I'd learn the piano.|Wenn ich mehr Zeit hätte, würde ich Klavier lernen.
If I were you, I'd take the job.|An deiner Stelle würde ich den Job annehmen.
What would you do if you lost your job?|Was würdest du tun, wenn du deinen Job verlieren würdest?
I'll call you as soon as I arrive.|Ich rufe dich an, sobald ich ankomme.
I wouldn't do that unless I had to.|Das würde ich nicht tun, außer ich müsste.`,
  gram: [
    ["h", TB("First und second conditional", "First and second conditionals")],
    ["table", { head: [TB("Typ", "type"), TB("if-Satz", "if clause"), TB("Hauptsatz", "main clause"), TB("Beispiel", "example")], rows: [
      [TB("1 – realistisch", "1 – real"), "present simple", "will + Grundform", "If I see her, I'll tell her."],
      [TB("2 – unwahrscheinlich / irreal", "2 – unlikely / unreal"), "past simple", "would + Grundform", "If I had money, I'd buy a boat."]], say: 3 }],
    ["p", TB("Im <b>if-Satz</b> steht nie <i>will</i> oder <i>would</i>: <s>If I will see her</s>. Bei <i>be</i> im zweiten Typ gern <b>were</b> für alle Personen: If I <b>were</b> you …", "There's never <i>will</i> or <i>would</i> in the <b>if clause</b>: <s>If I will see her</s>. With <i>be</i> in type 2, <b>were</b> is used for all persons: If I <b>were</b> you …")],
    ["tip", TB("Auch nach <b>when, as soon as, before, after</b> mit Zukunftsbedeutung steht das Präsens: I'll call you when I <b>arrive</b> (nicht <s>will arrive</s>).", "After <b>when, as soon as, before, after</b> with future meaning, use the present: I'll call you when I <b>arrive</b> (not <s>will arrive</s>).")]
  ],
  th: "cond",
  quiz: ["en-cond"],
  drill: [
    ["If it ___ tomorrow, we'll cancel the trip.", ["rains", "will rain", "rained"], 0],
    ["If I ___ more money, I'd buy a house.", ["had", "have", "would have"], 0],
    ["If I were you, I ___ talk to my boss.", ["would", "will", "am"], 0],
    ["I'll text you as soon as I ___ home.", ["get", "will get", "got"], 0],
    ["What would you do if you ___ the lottery?", ["won", "win", "would win"], 0],
    ["Take a jacket ___ it gets cold.", ["in case", "unless", "otherwise"], 0],
    ["An deiner Stelle … → If I ___ you, …", "were"]
  ],
  talk: { t: TB("Soll ich kündigen?", "Should I quit?"), scene: TB("Deine Freundin Lucy überlegt, ihren Job zu kündigen und ein Café zu eröffnen.", "Your friend Lucy is thinking of quitting her job and opening a café."), who: "Lucy", slots: {}, lines: `a|I'm so bored at work. I'm thinking of quitting and opening a café.|Mir ist so langweilig in der Arbeit. Ich überlege zu kündigen und ein Café zu eröffnen.|
me|Wow! If you opened a café, what kind of café would it be?|Wow! Wenn du ein Café eröffnen würdest, was für eins wäre es?||What kind of café would it be?
a|A small one with homemade cakes. But I'm scared. What would you do?|Ein kleines mit selbst gebackenen Kuchen. Aber ich habe Angst. Was würdest du tun?|
me|If I were you, I wouldn't quit straight away.|An deiner Stelle würde ich nicht sofort kündigen.||If I were you, I'd keep my job for now.
a|So what should I do?|Was soll ich also tun?|
me|You could sell your cakes at a market first. If people love them, you'll know it works.|Du könntest deine Kuchen erst auf einem Markt verkaufen. Wenn die Leute sie lieben, weißt du, dass es funktioniert.||Try selling cakes at a market first.
a|That's a great idea! And if it doesn't work?|Gute Idee! Und wenn es nicht klappt?|
me|Then you still have your job. Nothing to lose!|Dann hast du immer noch deinen Job. Nichts zu verlieren!||Then you haven't lost anything.` }
});

lesson("B1", { id: "en-b1-03", t: TB("The news – Passiv", "The news – The passive"),
  goal: TB("Du verstehst Nachrichten, kannst sie wiedergeben und das Passiv benutzen.", "You can understand the news, report it and use the passive."),
  words: `the headline|die Schlagzeile||n
the article|der Artikel||n
the government|die Regierung||n
the election|die Wahl||n|The election will be held in May.|Die Wahl findet im Mai statt.
the law|das Gesetz||n
to pass a law|ein Gesetz verabschieden||v|A new law was passed last week.|Letzte Woche wurde ein neues Gesetz verabschiedet.
to arrest|festnehmen||v|Two men were arrested.|Zwei Männer wurden festgenommen.
to injure|verletzen||v|Nobody was injured.|Niemand wurde verletzt.
the strike|der Streik||n
to announce|bekannt geben||v
to report|berichten||v
the survey|die Umfrage||n
according to|laut; gemäß||ph|According to the report, prices will rise.|Laut Bericht werden die Preise steigen.
reliable|zuverlässig||adj
fake news|Falschnachrichten||n
the source|die Quelle||n
to be built|gebaut werden||v
to be launched|eingeführt werden; starten||v
the investigation|die Untersuchung; die Ermittlung||n
the economy|die Wirtschaft||n`,
  say: `The bridge was built in 1890.|Die Brücke wurde 1890 gebaut.
The new app will be launched next month.|Die neue App wird nächsten Monat eingeführt.
English is spoken all over the world.|Englisch wird auf der ganzen Welt gesprochen.
The suspect has been arrested.|Der Verdächtige wurde festgenommen.
It is said that prices will rise again.|Es heißt, dass die Preise wieder steigen.
I don't trust everything I read online.|Ich traue nicht allem, was ich online lese.`,
  gram: [
    ["h", TB("Passiv: <i>be</i> + Partizip (3. Form)", "Passive: <i>be</i> + past participle")],
    ["table", { head: [TB("Zeit", "tense"), TB("Passiv", "passive")], rows: [["present simple", "English is spoken here."], ["past simple", "The bridge was built in 1890."], ["present perfect", "The suspect has been arrested."], ["will", "The results will be announced tomorrow."], ["modal", "It can be done."]], say: 1 }],
    ["p", TB("Das Passiv benutzt man, wenn <b>die Handlung wichtiger ist als der Täter</b> – typisch in Nachrichten, Berichten und Uni-Texten. Wer es tut: <b>by</b> + Person.", "Use the passive when <b>the action matters more than who did it</b> – typical in news, reports and academic texts. The doer: <b>by</b> + person.")],
    ["tip", TB("Deutsches „werden“ ≠ englisches <i>will</i>: „Das Haus <b>wird</b> gebaut“ = The house <b>is being built</b>.", "German “werden” ≠ English <i>will</i>: “Das Haus wird gebaut” = The house <b>is being built</b>.")]
  ],
  th: "passive",
  quiz: ["en-irr"],
  drill: [
    ["The museum ___ built in 1902.", ["was", "is", "has"], 0],
    ["Two people ___ injured in the accident.", ["were", "was", "have"], 0],
    ["The results will ___ announced on Friday.", ["be", "been", "being"], 0],
    ["Our office ___ cleaned every evening.", ["is", "are", "has"], 0],
    ["The suspect has ___ arrested.", ["been", "be", "being"], 0],
    ["The novel was written ___ a famous author.", ["by", "from", "of"], 0],
    ["Das Gesetz wurde verabschiedet. → The law ___ passed.", "was"]
  ],
  talk: { t: TB("Nachrichten beim Frühstück", "News over breakfast"), scene: TB("Dein Mitbewohner Daniel liest beim Frühstück die Nachrichten.", "Your flatmate Daniel is reading the news over breakfast."), who: "Daniel", slots: {}, lines: `a|Have you seen this? A new train line is going to be built to the airport.|Hast du das gesehen? Eine neue Bahnlinie zum Flughafen soll gebaut werden.|
me|Really? When will it be finished?|Echt? Wann wird sie fertig sein?||Really? When will it be ready?
a|According to the article, it'll be opened in 2030.|Laut Artikel wird sie 2030 eröffnet.|
me|That's ages away. Who's paying for it?|Das ist noch ewig hin. Wer bezahlt das?||That's a long time. Who's paying?
a|It's paid for by the government and the city.|Sie wird von der Regierung und der Stadt bezahlt.|
me|Is that a reliable source?|Ist das eine zuverlässige Quelle?||Where did you read it? Is it reliable?
a|Yes, it's the BBC. And look – two men were arrested for stealing bikes on our street!|Ja, die BBC. Und schau – zwei Männer wurden festgenommen, weil sie in unserer Straße Fahrräder gestohlen haben!|
me|Finally! My bike was stolen last year.|Endlich! Mein Fahrrad wurde letztes Jahr gestohlen.||Good! My bike was stolen there last year.` }
});
