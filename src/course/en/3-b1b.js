/* English B1 · 4–6 */
lesson("B1", { id: "en-b1-04", t: TB("People – Relativsätze und Phrasal verbs", "People – Relative clauses and phrasal verbs"),
  goal: TB("Du kannst Menschen und Beziehungen beschreiben und typische Phrasal verbs benutzen.", "You can describe people and relationships and use common phrasal verbs."),
  words: `to get on with|sich verstehen mit||v|I get on really well with my boss.|Ich verstehe mich richtig gut mit meinem Chef.
to fall out with|sich zerstreiten mit||v
to make up|sich versöhnen||v|They had an argument but they made up.|Sie haben gestritten, sich aber versöhnt.
to look after|sich kümmern um||v|She looks after her little brother.|Sie kümmert sich um ihren kleinen Bruder.
to look up to|bewundern; zu jemandem aufschauen||v
to bring up|großziehen; ansprechen||v|I was brought up by my grandparents.|Ich bin bei meinen Großeltern aufgewachsen.
to grow apart|sich auseinanderleben||v
to break up|Schluss machen||v|They broke up last month.|Sie haben letzten Monat Schluss gemacht.
to rely on|sich verlassen auf||v
to turn up|auftauchen||v
the relationship|die Beziehung||n
the acquaintance|der / die Bekannte||n
the best friend|der beste Freund; die beste Freundin||n
easy-going|unkompliziert; locker||adj
honest|ehrlich||adj
generous|großzügig||adj
moody|launisch||adj
selfish|egoistisch||adj
sensible|vernünftig||adj
sensitive|sensibel||adj`,
  say: `She's the friend who I met in Spain.|Sie ist die Freundin, die ich in Spanien kennengelernt habe.
That's the café where we first met.|Das ist das Café, in dem wir uns kennengelernt haben.
He's someone you can always rely on.|Er ist jemand, auf den man sich immer verlassen kann.
My sister, who lives in Paris, is a doctor.|Meine Schwester, die in Paris wohnt, ist Ärztin.
We fell out, but we made up a week later.|Wir haben uns zerstritten, uns aber eine Woche später versöhnt.
I really look up to my grandmother.|Ich bewundere meine Großmutter sehr.`,
  gram: [
    ["h", TB("Relativsätze: <i>who, which, that, where, whose</i>", "Relative clauses: <i>who, which, that, where, whose</i>")],
    ["table", { head: [TB("Pronomen", "pronoun"), TB("wofür?", "use"), TB("Beispiel", "example")], rows: [["who / that", TB("Personen", "people"), "the man who lives next door"], ["which / that", TB("Dinge", "things"), "the book which I'm reading"], ["where", TB("Orte", "places"), "the town where I grew up"], ["whose", TB("dessen / deren", "possession"), "the friend whose car I borrowed"]], say: 2 }],
    ["p", TB("Ist das Relativpronomen <b>Objekt</b>, kann man es weglassen: the friend (<i>who</i>) I met in Spain. Bei Zusatzinfos mit Kommas (<b>non-defining</b>) nie <i>that</i> und nie weglassen: My sister, <b>who</b> lives in Paris, …", "If the pronoun is the <b>object</b>, you can leave it out: the friend (<i>who</i>) I met in Spain. With extra information between commas (<b>non-defining</b>) never use <i>that</i> and never leave it out: My sister, <b>who</b> lives in Paris, …")],
    ["tip", TB("Phrasal verbs lernst du am besten mit Beispielsatz – die Bedeutung lässt sich selten aus den Teilen ableiten: <b>look after</b> = sich kümmern, <b>look up to</b> = bewundern.", "Learn phrasal verbs with an example sentence – the meaning rarely comes from the parts: <b>look after</b> = take care of, <b>look up to</b> = admire.")]
  ],
  drill: [
    ["That's the man ___ helped me with my bags.", ["who", "which", "where"], 0],
    ["This is the restaurant ___ we had our first date.", ["where", "which", "who"], 0],
    ["I've lost the book ___ you lent me.", ["that", "who", "where"], 0],
    ["She's the colleague ___ husband works at Google.", ["whose", "who's", "which"], 0],
    ["My brother, ___ is a nurse, works nights.", ["who", "that", "–"], 0, TB("Zusatzinfo mit Kommas → nicht <i>that</i>.", "Extra information with commas → not <i>that</i>.")],
    ["I get ___ well with my flatmates.", ["on", "along to", "up"], 0],
    ["Sie haben Schluss gemacht. → They broke ___.", "up"]
  ],
  talk: { t: TB("Wer ist das?", "Who's that?"), scene: TB("Auf einer Hochzeit fragt dich Ella, wen du hier kennst.", "At a wedding Ella asks you who you know there."), who: "Ella", slots: {}, lines: `a|So, how do you know the bride?|Und, woher kennst du die Braut?|
me|She's the friend who I met on an exchange in Spain.|Sie ist die Freundin, die ich bei einem Austausch in Spanien kennengelernt habe.||We met on an exchange in Spain.
a|Oh nice! And who's the man in the blue suit?|Oh, schön! Und wer ist der Mann im blauen Anzug?|
me|That's her brother, who lives in Canada.|Das ist ihr Bruder, der in Kanada lebt.||That's her brother. He lives in Canada.
a|Do you get on well with him?|Verstehst du dich gut mit ihm?|
me|Yes, he's really easy-going. Everyone gets on with him.|Ja, er ist total unkompliziert. Alle verstehen sich gut mit ihm.||Yes, he's very easy-going.
a|And is this the place where they got engaged?|Und ist das der Ort, an dem sie sich verlobt haben?|
me|Yes, it's the hotel where they spent their first holiday together.|Ja, das ist das Hotel, in dem sie ihren ersten gemeinsamen Urlaub verbracht haben.||Yes, they came here on their first holiday.` }
});

lesson("B1", { id: "en-b1-05", t: TB("He said that… – Indirekte Rede", "He said that… – Reported speech"),
  goal: TB("Du kannst wiedergeben, was jemand gesagt, gefragt oder dich gebeten hat.", "You can report what someone said, asked or asked you to do."),
  words: `to tell|sagen (jemandem); erzählen||v|She told me she was tired.|Sie sagte mir, dass sie müde sei.
to say|sagen||v|He said he would call.|Er sagte, er würde anrufen.
to ask|fragen; bitten||v
to explain|erklären||v
to mention|erwähnen||v
to promise|versprechen||v|She promised she'd be on time.|Sie versprach, pünktlich zu sein.
to admit|zugeben||v
to complain|sich beschweren||v
to warn|warnen||v
to suggest|vorschlagen||v
to deny|abstreiten||v
the message|die Nachricht||n
the voicemail|die Mailbox-Nachricht||n
the rumour|das Gerücht||n
apparently|anscheinend||adv|Apparently she's leaving the company.|Anscheinend verlässt sie die Firma.
the day before|am Tag zuvor||ph
the following day|am nächsten Tag||ph
the gossip|der Klatsch||n
to pass on|weitergeben||v|Can you pass on the message?|Kannst du die Nachricht weitergeben?`,
  say: `She said she was feeling ill.|Sie sagte, dass es ihr nicht gut gehe.
He told me he had already sent the email.|Er sagte mir, dass er die Mail schon geschickt habe.
They asked if we wanted to join them.|Sie fragten, ob wir mitkommen wollten.
She asked me where I lived.|Sie fragte mich, wo ich wohne.
My boss asked me to send the report.|Mein Chef bat mich, den Bericht zu schicken.
He promised he would be there.|Er versprach, dass er da sein würde.`,
  gram: [
    ["h", TB("Zeitverschiebung („backshift“)", "Backshift")],
    ["table", { head: [TB("direkt", "direct"), TB("indirekt", "reported")], rows: [["“I'm tired.”", "She said she was tired."], ["“I've finished.”", "He said he had finished."], ["“I saw it.”", "She said she had seen it."], ["“I'll call you.”", "He said he would call me."], ["“Can you help?”", "She asked if I could help."]], say: 1 }],
    ["p", TB("<b>say</b> ohne Person: He <b>said</b> (that) … – <b>tell</b> mit Person: He <b>told me</b> (that) … Fragen ohne Fragewort → <b>if / whether</b>, mit Fragewort → normale Satzstellung: She asked where I <b>lived</b> (nicht <s>where did I live</s>). Bitten: asked me <b>to</b> + Grundform.", "<b>say</b> without a person: He <b>said</b> (that) … – <b>tell</b> with a person: He <b>told me</b> (that) … Yes/no questions → <b>if / whether</b>; with a question word → normal word order: She asked where I <b>lived</b>. Requests: asked me <b>to</b> + base form.")],
    ["tip", TB("Ist die Aussage noch wahr, darf die Zeit bleiben: She said she <b>lives</b> in Rome (sie wohnt immer noch dort).", "If the statement is still true, you can keep the tense: She said she <b>lives</b> in Rome (she still does).")]
  ],
  drill: [
    ["“I'm busy.” → She said she ___ busy.", ["was", "is being", "were"], 0],
    ["“I've lost my keys.” → He said he ___ his keys.", ["had lost", "has lost", "lost"], 0],
    ["He ___ me that he was leaving.", ["told", "said", "asked"], 0],
    ["She asked me where I ___.", ["worked", "did work", "do work"], 0],
    ["They asked ___ we were coming.", ["if", "that", "what"], 0],
    ["My boss asked me ___ the report by Friday.", ["to finish", "finish", "finishing"], 0],
    ["„Ich rufe dich an.“ → He said he ___ call me.", "would"]
  ],
  talk: { t: TB("Was hat sie gesagt?", "What did she say?"), scene: TB("Du hast mit eurer Professorin gesprochen. Dein Kommilitone Ryan war nicht da.", "You talked to your professor. Your fellow student Ryan wasn't there."), who: "Ryan", slots: {}, lines: `a|Did you speak to Professor Hall? What did she say?|Hast du mit Professor Hall gesprochen? Was hat sie gesagt?|
me|She said the deadline was next Friday.|Sie sagte, die Abgabe sei nächsten Freitag.||She said the deadline is next Friday.
a|Next Friday? I thought it was next month!|Nächsten Freitag? Ich dachte, nächsten Monat!|
me|No, she told us the date had changed.|Nein, sie sagte uns, dass sich der Termin geändert habe.||She told us they had changed the date.
a|Great… Did she say anything about the presentation?|Toll … Hat sie was zur Präsentation gesagt?|
me|Yes, she asked us to send the slides the day before.|Ja, sie bat uns, die Folien am Tag davor zu schicken.||She asked us to send the slides a day early.
a|Did anyone ask if we could work in pairs?|Hat jemand gefragt, ob wir zu zweit arbeiten können?|
me|Yes, I asked her, and she said that was fine.|Ja, ich habe sie gefragt, und sie sagte, das sei in Ordnung.||I did. She said it was OK.` }
});

lesson("B1", { id: "en-b1-06", t: TB("It must have been… – Vermutungen", "It must have been… – Speculating"),
  goal: TB("Du kannst Vermutungen über Gegenwart und Vergangenheit äußern – sicher, möglich oder unmöglich.", "You can speculate about the present and the past – certain, possible or impossible."),
  words: `to guess|raten; vermuten||v
the evidence|die Beweise; die Anzeichen||n
the clue|der Hinweis||n
the mystery|das Rätsel||n
to disappear|verschwinden||v|My keys have disappeared.|Meine Schlüssel sind verschwunden.
to forget|vergessen||v
to leave behind|liegen lassen||v|I must have left my wallet at the restaurant.|Ich muss mein Portemonnaie im Restaurant liegen gelassen haben.
to notice|bemerken||v
obviously|offensichtlich||adv
definitely|definitiv||adv
probably|wahrscheinlich||adv
possibly|möglicherweise||adv
I bet|ich wette||ph|I bet he's still asleep.|Ich wette, er schläft noch.
it's likely that|es ist wahrscheinlich, dass||ph
surely|doch sicher||adv
the lights are on|das Licht ist an||ph
to be stuck in traffic|im Stau stehen||v|They might be stuck in traffic.|Vielleicht stehen sie im Stau.
the battery|der Akku||n
to run out|ausgehen; leer werden||v
suspicious|verdächtig; misstrauisch||adj`,
  say: `She must be at home – her car is outside.|Sie muss zu Hause sein – ihr Auto steht draußen.
He can't be hungry – he's just eaten.|Er kann keinen Hunger haben – er hat gerade gegessen.
They might be stuck in traffic.|Vielleicht stehen sie im Stau.
I must have left my phone at work.|Ich muss mein Handy in der Arbeit gelassen haben.
She can't have seen the message.|Sie kann die Nachricht nicht gesehen haben.
His battery might have run out.|Vielleicht ist sein Akku leer.`,
  gram: [
    ["h", TB("Vermutungen über jetzt", "Speculating about now")],
    ["table", { head: [TB("Modalverb", "modal"), TB("Sicherheit", "certainty"), TB("Beispiel", "example")], rows: [["must", TB("fast sicher: ja", "almost certain: yes"), "She must be tired."], ["might / may / could", TB("vielleicht", "possible"), "He might be at the gym."], ["can't", TB("fast sicher: nein", "almost certain: no"), "That can't be true."]], say: 2 }],
    ["h", TB("… und über die Vergangenheit", "… and about the past")],
    ["p", TB("<b>Modalverb + have + Partizip</b>: She <b>must have forgotten</b>. He <b>might have missed</b> the train. They <b>can't have seen</b> us.", "<b>modal + have + past participle</b>: She <b>must have forgotten</b>. He <b>might have missed</b> the train. They <b>can't have seen</b> us.")],
    ["tip", TB("Das Gegenteil von <b>must</b> (Vermutung) ist <b>can't</b>, nicht <s>mustn't</s>: He <b>can't</b> be at home – the lights are off.", "The opposite of <b>must</b> (deduction) is <b>can't</b>, not <s>mustn't</s>: He <b>can't</b> be at home – the lights are off.")]
  ],
  th: "modals",
  quiz: ["en-modal"],
  drill: [
    ["The lights are on. They ___ be at home.", ["must", "can't", "mustn't"], 0],
    ["He ___ be in Paris – I saw him here an hour ago.", ["can't", "must", "might"], 0],
    ["I'm not sure where she is. She ___ be at the library.", ["might", "must", "can't"], 0],
    ["I can't find my wallet. I must ___ it at the café.", ["have left", "left", "leave"], 0],
    ["She ___ have seen us – she didn't say hello.", ["can't", "mustn't", "must"], 0],
    ["They're late. They might have ___ the train.", ["missed", "miss", "missing"], 0],
    ["Er muss es vergessen haben. → He must have ___ it.", "forgotten"]
  ],
  talk: { t: TB("Wo ist Ben?", "Where's Ben?"), scene: TB("Ihr wartet im Pub auf euren Freund Ben, aber er kommt nicht. Deine Freundin Amy wird nervös.", "You're waiting for your friend Ben in the pub, but he isn't coming. Your friend Amy is getting worried."), who: "Amy", slots: {}, lines: `a|It's half past eight. Where's Ben? He's never late.|Es ist halb neun. Wo ist Ben? Er ist nie zu spät.|
me|He might be stuck in traffic.|Vielleicht steht er im Stau.||Maybe he's stuck in traffic.; He could be stuck in traffic.
a|But he always cycles!|Aber er fährt doch immer Rad!|
me|Then he must have forgotten about tonight.|Dann muss er heute Abend vergessen haben.||He must have forgotten.
a|He can't have forgotten – he organised it!|Er kann es nicht vergessen haben – er hat es organisiert!|
me|True. Have you tried calling him?|Stimmt. Hast du versucht, ihn anzurufen?||Did you call him?
a|Yes, but he isn't answering.|Ja, aber er geht nicht ran.|
me|His battery might have run out. Let's wait ten more minutes.|Vielleicht ist sein Akku leer. Warten wir noch zehn Minuten.||Maybe his phone died. Let's give him ten minutes.` }
});
