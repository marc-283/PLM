/* English A2 · 1–4 */
lesson("A2", { id: "en-a2-01", t: TB("When I was a child – <i>used to</i>", "When I was a child – <i>used to</i>"),
  goal: TB("Du kannst von deiner Kindheit erzählen und sagen, was früher anders war.", "You can talk about your childhood and say what used to be different."),
  words: `the childhood|die Kindheit||n|I had a happy childhood.|Ich hatte eine glückliche Kindheit.
to grow up|aufwachsen||v|I grew up in a small village.|Ich bin in einem kleinen Dorf aufgewachsen.
the village|das Dorf||n
the primary school|die Grundschule||n
the teacher|der Lehrer; die Lehrerin||n
the toy|das Spielzeug||n
the neighbour|der Nachbar; die Nachbarin||n
to climb trees|auf Bäume klettern||v
to be afraid of|Angst haben vor||v|I was afraid of the dark.|Ich hatte Angst im Dunkeln.
shy|schüchtern||adj|I used to be very shy.|Früher war ich sehr schüchtern.
naughty|frech; unartig||adj
strict|streng||adj|My parents were quite strict.|Meine Eltern waren ziemlich streng.
the holidays|die Ferien||n|We spent the summer holidays at the lake.|Wir haben die Sommerferien am See verbracht.
to spend time|Zeit verbringen||v
to remember|sich erinnern||v|Do you remember your first teacher?|Erinnerst du dich an deine erste Lehrerin?
to miss|vermissen; verpassen||v
anymore|nicht mehr (mit not)||adv|I don't play the piano anymore.|Ich spiele nicht mehr Klavier.
nowadays|heutzutage||adv
when I was little|als ich klein war||ph`,
  say: `I grew up near Stuttgart.|Ich bin in der Nähe von Stuttgart aufgewachsen.
When I was a child, I used to play football every day.|Als Kind habe ich jeden Tag Fußball gespielt.
I didn't use to like vegetables.|Früher mochte ich kein Gemüse.
Did you use to have a pet?|Hattest du früher ein Haustier?
We used to spend every summer at my grandparents'.|Wir haben jeden Sommer bei meinen Großeltern verbracht.
I don't play the piano anymore.|Ich spiele nicht mehr Klavier.`,
  gram: [
    ["h", TB("<i>used to</i> – früher (aber heute nicht mehr)", "<i>used to</i> – past habits and states")],
    ["p", TB("<b>used to + Grundform</b> für Gewohnheiten und Zustände in der Vergangenheit, die es heute nicht mehr gibt: I <b>used to</b> live in Berlin. Verneinung und Frage mit <b>did</b>: I <b>didn't use to</b> … / <b>Did</b> you <b>use to</b> …? (ohne d!)", "<b>used to + base form</b> for past habits and states that are no longer true: I <b>used to</b> live in Berlin. Negative and question with <b>did</b>: I <b>didn't use to</b> … / <b>Did</b> you <b>use to</b> …? (no d!)")],
    ["ex", [["I used to be shy, but now I'm not.", "Früher war ich schüchtern, jetzt nicht mehr."], ["She used to have long hair.", "Sie hatte früher lange Haare."], ["Did you use to walk to school?", "Bist du früher zu Fuß zur Schule gegangen?"]]],
    ["tip", TB("Nicht verwechseln: <b>be used to</b> + -ing = an etwas gewöhnt sein: I'<b>m used to getting</b> up early.", "Don't confuse it with <b>be used to</b> + -ing = be accustomed to: I'<b>m used to getting</b> up early.")]
  ],
  quiz: ["en-irr"],
  forms: { verbs: ["grow", "spend", "have", "go", "be"], tenses: ["Past simple"] },
  drill: [
    ["I ___ live in Hamburg, but now I live in Munich.", ["used to", "use to", "was used to"], 0],
    ["Did you ___ have a pet?", ["use to", "used to", "using"], 0],
    ["She didn't ___ like school.", ["use to", "used to", "uses to"], 0],
    ["I ___ up in a small village near Ulm.", ["grew", "growed", "grown"], 0],
    ["I don't play tennis ___.", ["anymore", "no more", "yet"], 0],
    ["I'm ___ to working late – it's no problem.", ["used", "use", "using"], 0, TB("be used to = gewöhnt sein.", "be used to = be accustomed to.")],
    ["Früher hatte ich lange Haare. → I ___ to have long hair.", "used"]
  ],
  talk: { t: TB("Alte Fotos", "Old photos"), scene: TB("Deine Freundin Hannah findet Kinderfotos von dir.", "Your friend Hannah finds childhood photos of you."), who: "Hannah", slots: {}, lines: `a|Is that you? You look so cute! Where was this?|Bist du das? Du siehst so süß aus! Wo war das?|
me|That's me at my grandparents' house. I grew up near Stuttgart.|Das bin ich bei meinen Großeltern. Ich bin in der Nähe von Stuttgart aufgewachsen.||That's me at my grandparents'. I grew up near Stuttgart.
a|Did you use to spend a lot of time there?|Warst du früher oft dort?|
me|Yes, we used to spend every summer there.|Ja, wir haben jeden Sommer dort verbracht.||Yes, every summer.; Yes, we used to go there every summer.
a|And were you a naughty child?|Und warst du ein freches Kind?|
me|No, I used to be very shy, actually.|Nein, eigentlich war ich früher sehr schüchtern.||Not at all, I used to be quite shy.
a|Really? You're not shy anymore!|Echt? Du bist gar nicht mehr schüchtern!|
me|No, not anymore. I changed a lot at university.|Nein, nicht mehr. An der Uni habe ich mich sehr verändert.||Not anymore! University changed me.` }
});

lesson("A2", { id: "en-a2-02", t: TB("What happened? – Past continuous", "What happened? – The past continuous"),
  goal: TB("Du kannst erzählen, was gerade passierte, als etwas anderes geschah – z. B. bei einem kleinen Unfall.", "You can say what was happening when something else happened – for example in a small accident."),
  words: `to happen|passieren||v|What happened?|Was ist passiert?
the accident|der Unfall||n
to fall over|hinfallen||v|I fell over and hurt my knee.|Ich bin hingefallen und habe mir das Knie verletzt.
to break|brechen; kaputt machen||v
to drop|fallen lassen||v|I dropped my phone.|Mir ist das Handy runtergefallen.
to hurt|verletzen; wehtun||v
to lose|verlieren||v
to steal|stehlen||v|Someone stole my bike.|Jemand hat mein Fahrrad gestohlen.
to ring|klingeln; anrufen||v
suddenly|plötzlich||adv|Suddenly the lights went out.|Plötzlich ging das Licht aus.
while|während||x|While I was cooking, the phone rang.|Während ich kochte, klingelte das Telefon.
when|als||x
luckily|zum Glück||adv
unfortunately|leider||adv
in the end|am Ende||ph
the police|die Polizei||n
the witness|der Zeuge; die Zeugin||n
the screen|der Bildschirm||n|The screen is broken.|Der Bildschirm ist kaputt.
embarrassing|peinlich||adj
to cycle|Rad fahren||v`,
  say: `What were you doing when it happened?|Was hast du gerade gemacht, als es passierte?
I was cycling home when it started to rain.|Ich fuhr gerade nach Hause, als es anfing zu regnen.
While I was waiting for the bus, I met an old friend.|Während ich auf den Bus wartete, traf ich einen alten Freund.
I dropped my phone and the screen broke.|Mir ist das Handy runtergefallen und der Bildschirm ist kaputtgegangen.
Luckily, nobody was hurt.|Zum Glück wurde niemand verletzt.
It was so embarrassing!|Das war so peinlich!`,
  gram: [
    ["h", TB("Past continuous: <i>was / were + -ing</i>", "Past continuous: <i>was / were + -ing</i>")],
    ["p", TB("Für eine Handlung, die <b>gerade im Gange war</b>: I <b>was cooking</b>. Unterbricht etwas Kurzes diese Handlung, steht es im <b>past simple</b>: I <b>was cooking</b> when the phone <b>rang</b>.", "For an action that was <b>in progress</b>: I <b>was cooking</b>. A short action that interrupts it is in the <b>past simple</b>: I <b>was cooking</b> when the phone <b>rang</b>.")],
    ["table", { head: [TB("Teil", "part"), TB("Beispiel", "example")], rows: [[TB("Hintergrund (lange)", "background (long)"), "I was walking to work …"], [TB("Ereignis (kurz)", "event (short)"), "… when I saw the accident."], [TB("zwei Dinge gleichzeitig", "two things at the same time"), "While I was cooking, he was watching TV."]], say: 1 }],
    ["tip", TB("<b>while</b> + lange Handlung (past continuous), <b>when</b> meist + kurze Handlung (past simple).", "<b>while</b> + long action (past continuous), <b>when</b> usually + short action (past simple).")]
  ],
  th: "pastcont",
  quiz: ["en-tense"],
  forms: { verbs: ["walk", "cook", "wait", "drive", "sleep"], tenses: ["Past simple"] },
  drill: [
    ["I ___ dinner when the phone rang.", ["was cooking", "cooked", "am cooking"], 0],
    ["While we ___ TV, the lights went out.", ["were watching", "watched", "was watching"], 0],
    ["She ___ over while she was running.", ["fell", "was falling", "falls"], 0],
    ["___ I was waiting, I read the news.", ["While", "When", "During"], 0],
    ["What ___ you doing at 8 o'clock last night?", ["were", "was", "did"], 0],
    ["Someone ___ my bike yesterday.", ["stole", "was stealing", "stealed"], 0],
    ["Es regnete, als ich ankam. → It ___ when I arrived.", "was raining"]
  ],
  talk: { t: TB("Ein Missgeschick", "A little mishap"), scene: TB("Dein Freund Sam sieht dein kaputtes Handy und fragt, was passiert ist.", "Your friend Sam sees your broken phone and asks what happened."), who: "Sam", slots: {}, lines: `a|Oh no, your phone! What happened?|Oh nein, dein Handy! Was ist passiert?|
me|I dropped it this morning. I was cycling to work.|Es ist mir heute Morgen runtergefallen. Ich war mit dem Rad auf dem Weg zur Arbeit.||I dropped it while I was cycling to work.
a|You were using your phone while you were cycling?|Du hast beim Radfahren das Handy benutzt?|
me|No, it was in my pocket. Suddenly a dog ran into the street.|Nein, es war in meiner Tasche. Plötzlich rannte ein Hund auf die Straße.||No! Suddenly a dog ran in front of me.
a|Oh dear! Did you fall off?|Oje! Bist du runtergefallen?|
me|Yes, I fell off, and my phone fell out of my pocket.|Ja, ich bin runtergefallen und mein Handy ist aus der Tasche gefallen.||Yes, and the phone fell out of my pocket.
a|Are you OK?|Geht's dir gut?|
me|Luckily, I'm fine. Just the screen is broken.|Zum Glück geht's mir gut. Nur der Bildschirm ist kaputt.||I'm fine, luckily. Only the screen broke.` }
});

lesson("A2", { id: "en-a2-03", t: TB("Plans – Zukunft und Wetter", "Plans – The future and the weather"),
  goal: TB("Du kannst über Pläne, Verabredungen und Vorhersagen sprechen – und über das Wetter.", "You can talk about plans, arrangements and predictions – and about the weather."),
  words: `the plan|der Plan||n|Have you got any plans for the weekend?|Hast du Pläne fürs Wochenende?
to be going to|vorhaben zu||v|I'm going to visit my parents.|Ich werde meine Eltern besuchen.
to book|buchen||v|We've booked a cottage in Cornwall.|Wir haben ein Ferienhäuschen in Cornwall gebucht.
the trip|der Ausflug; die Reise||n
the weather|das Wetter||n|What's the weather like?|Wie ist das Wetter?
the forecast|die Vorhersage||n|The forecast says it'll rain.|Laut Vorhersage wird es regnen.
sunny|sonnig||adj
cloudy|bewölkt||adj
rainy|regnerisch||adj
windy|windig||adj
foggy|neblig||adj
the temperature|die Temperatur||n
degrees|Grad||n|It's going to be 25 degrees.|Es werden 25 Grad.
the storm|der Sturm; das Gewitter||n
to snow|schneien||v
probably|wahrscheinlich||adv|It'll probably rain tomorrow.|Morgen regnet es wahrscheinlich.
next week|nächste Woche||ph
tomorrow|morgen||adv
the day after tomorrow|übermorgen||ph
the umbrella|der Regenschirm||n`,
  say: `What are you doing this weekend?|Was machst du dieses Wochenende?
I'm meeting Sarah on Saturday.|Ich treffe mich am Samstag mit Sarah.
I'm going to learn Spanish next year.|Nächstes Jahr werde ich Spanisch lernen.
I think it'll rain later.|Ich glaube, es regnet später.
Look at those clouds – it's going to rain.|Schau dir die Wolken an – gleich regnet es.
I'll call you tomorrow.|Ich rufe dich morgen an.
What's the weather like in Rome?|Wie ist das Wetter in Rom?`,
  gram: [
    ["h", TB("Drei Wege in die Zukunft", "Three ways to talk about the future")],
    ["table", { head: [TB("Form", "form"), TB("wofür?", "use"), TB("Beispiel", "example")], rows: [
      ["going to", TB("Plan, Absicht; sichtbare Anzeichen", "plan, intention; visible evidence"), "I'm going to buy a car. Look – it's going to rain."],
      ["present continuous", TB("feste Verabredung (Zeit, Ort steht)", "fixed arrangement"), "I'm meeting Tom at six."],
      ["will", TB("spontane Entscheidung, Vermutung, Versprechen", "spontaneous decision, prediction, promise"), "I'll help you. I think it'll be sunny."]], say: 2 }],
    ["conj", { verbs: ["be"], tenses: ["Future (will)"] }],
    ["tip", TB("Nicht <s>I will meet Tom at six</s> für eine Verabredung – Muttersprachler sagen <b>I'm meeting Tom at six</b>. Und „Ich will“ (= möchte) heißt <b>I want</b>, nicht <s>I will</s>!", "For an arrangement native speakers say <b>I'm meeting Tom at six</b>. And German “ich will” (= I want) is <b>I want</b>, not <s>I will</s>!")]
  ],
  th: "future",
  quiz: ["en-tense"],
  drill: [
    ["Look at the sky! It's ___ rain.", ["going to", "will", "wants to"], 0, TB("Sichtbare Anzeichen → going to.", "Visible evidence → going to.")],
    ["I ___ my dentist at 4 pm tomorrow. It's in my calendar.", ["'m seeing", "'ll see", "see"], 0],
    ["The phone's ringing. – I ___ get it!", ["'ll", "'m going to", "am"], 0, TB("Spontane Entscheidung → will.", "Spontaneous decision → will.")],
    ["I think it ___ be sunny tomorrow.", ["will", "is", "is going"], 0],
    ["What's the weather ___ in London?", ["like", "as", "how"], 0],
    ["It's very ___ today – hold on to your hat!", ["windy", "wind", "winding"], 0],
    ["Ich habe vor, ein Auto zu kaufen. → I'm ___ to buy a car.", "going"]
  ],
  talk: { t: TB("Pläne fürs Wochenende", "Plans for the weekend"), scene: TB("Deine Kollegin Olivia fragt dich am Freitag nach deinen Plänen.", "On Friday your colleague Olivia asks about your plans."), who: "Olivia", slots: {}, lines: `a|Any plans for the weekend?|Schon Pläne fürs Wochenende?|
me|Yes, I'm going to the Lake District with some friends.|Ja, ich fahre mit ein paar Freunden in den Lake District.||I'm going to the Lake District with friends.
a|Lovely! What are you going to do there?|Wie schön! Was habt ihr dort vor?|
me|We're going to go hiking and maybe swimming in the lake.|Wir wollen wandern gehen und vielleicht im See schwimmen.||We're going to go hiking.; Hiking, and maybe swimming.
a|Have you checked the forecast? I think it'll rain.|Hast du die Vorhersage angeschaut? Ich glaube, es regnet.|
me|Yes, it's going to be sunny on Saturday but rainy on Sunday.|Ja, Samstag wird's sonnig, aber Sonntag regnerisch.||Saturday will be sunny, Sunday rainy.
a|Well, take an umbrella! When are you leaving?|Na dann, nimm einen Schirm mit! Wann fahrt ihr los?|
me|We're leaving tomorrow at eight. I'll send you some photos!|Wir fahren morgen um acht los. Ich schicke dir ein paar Fotos!||Tomorrow morning at eight. I'll send you photos!` }
});

lesson("A2", { id: "en-a2-04", t: TB("At work – Present perfect mit <i>just, already, yet</i>", "At work – Present perfect with <i>just, already, yet</i>"),
  goal: TB("Du kannst im Job sagen, was schon erledigt ist und was noch fehlt – am Telefon und per E-Mail.", "You can say at work what has been done and what hasn't – on the phone and by email."),
  words: `the colleague|der Kollege; die Kollegin||n
the meeting|die Besprechung||n|The meeting has just finished.|Die Besprechung ist gerade zu Ende.
the deadline|die Frist; der Abgabetermin||n
the report|der Bericht||n|Have you finished the report yet?|Bist du schon mit dem Bericht fertig?
the presentation|die Präsentation||n
the customer|der Kunde; die Kundin||n
the email|die E-Mail||n
to send|schicken||v|I've already sent it.|Ich habe es schon geschickt.
to forward|weiterleiten||v|Could you forward me the email?|Könntest du mir die Mail weiterleiten?
to attach|anhängen||v
to reply|antworten||v
to call back|zurückrufen||v|Can I call you back in ten minutes?|Kann ich dich in zehn Minuten zurückrufen?
to be on holiday|im Urlaub sein||v
just|gerade eben||adv
already|schon||adv
yet|schon (Frage); noch (Verneinung)||adv|I haven't done it yet.|Ich habe es noch nicht gemacht.
still|immer noch||adv
the office|das Büro||n
busy|beschäftigt; viel los||adj|Sorry, I'm really busy today.|Tut mir leid, heute ist bei mir viel los.
to remind|erinnern (jemanden)||v`,
  say: `Have you sent the report yet?|Hast du den Bericht schon geschickt?
I've just finished it.|Ich bin gerade eben fertig geworden.
I've already replied to the customer.|Ich habe dem Kunden schon geantwortet.
I haven't had time yet.|Ich hatte noch keine Zeit.
She's in a meeting – can I take a message?|Sie ist in einer Besprechung – kann ich etwas ausrichten?
I'll forward you the email.|Ich leite dir die E-Mail weiter.
Just a quick reminder about tomorrow's meeting.|Nur eine kurze Erinnerung an die Besprechung morgen.`,
  gram: [
    ["h", TB("Present perfect: <i>have / has + Partizip</i>", "Present perfect: <i>have / has + past participle</i>")],
    ["p", TB("Für Vergangenes <b>ohne genauen Zeitpunkt</b>, das für <b>jetzt</b> wichtig ist: I'<b>ve finished</b> the report (er ist jetzt fertig). Mit Zeitangabe wie <i>yesterday</i> → past simple.", "For past actions <b>without a specific time</b> that matter <b>now</b>: I'<b>ve finished</b> the report (it's done now). With a time like <i>yesterday</i> → past simple.")],
    ["conj", { verbs: ["finish", "send"], tenses: ["Present perfect"] }],
    ["table", { head: [TB("Wort", "word"), TB("Stellung", "position"), TB("Beispiel", "example")], rows: [["just", TB("zwischen have und Partizip", "between have and participle"), "I've just called her."], ["already", TB("zwischen have und Partizip", "between have and participle"), "She's already left."], ["yet", TB("am Ende, in Fragen/Verneinung", "at the end, in questions/negatives"), "Have you eaten yet? I haven't eaten yet."]], say: 2 }],
    ["tip", TB("Nicht <s>I have sent it yesterday</s> – mit <i>yesterday, last week, in 2020</i> immer past simple: I <b>sent</b> it yesterday.", "Not <s>I have sent it yesterday</s> – with <i>yesterday, last week, in 2020</i> always the past simple: I <b>sent</b> it yesterday.")]
  ],
  th: "pastperf",
  quiz: ["en-ppps"],
  forms: { verbs: ["finish", "send", "write", "call", "do", "see"], tenses: ["Present perfect"] },
  drill: [
    ["Have you finished the presentation ___?", ["yet", "already", "just"], 0],
    ["I've ___ sent it – check your inbox.", ["just", "yet", "still"], 0],
    ["She ___ the email yesterday.", ["sent", "has sent", "has send"], 0, TB("yesterday → past simple.", "yesterday → past simple.")],
    ["They haven't replied ___.", ["yet", "already", "still"], 0],
    ["___ you ever been to New York?", ["Have", "Did", "Are"], 0],
    ["He has ___ left the office.", ["already", "yet", "ever"], 0],
    ["Ich habe den Bericht geschrieben. (jetzt fertig) → I've ___ the report.", "written"]
  ],
  talk: { t: TB("Kurzes Telefonat mit dem Chef", "A quick call with the boss"), scene: TB("Deine Chefin Rachel ruft an und will den Stand der Dinge wissen.", "Your boss Rachel calls to check on progress."), who: "Rachel", slots: {}, lines: `a|Hi, it's Rachel. Have you finished the sales report yet?|Hi, hier ist Rachel. Bist du schon mit dem Verkaufsbericht fertig?|
me|Yes, I've just finished it. I'll send it to you now.|Ja, ich bin gerade fertig geworden. Ich schicke ihn dir jetzt.||Yes, I've just finished it.; I've just done it. I'll send it now.
a|Great. Have you called the customer in Leeds?|Super. Hast du den Kunden in Leeds angerufen?|
me|Not yet. I've already written to him, but he hasn't replied yet.|Noch nicht. Ich habe ihm schon geschrieben, aber er hat noch nicht geantwortet.||Not yet, but I've already emailed him.
a|OK. Can you call him this afternoon?|Okay. Kannst du ihn heute Nachmittag anrufen?|
me|Sure, I'll call him after lunch.|Klar, ich rufe ihn nach dem Mittagessen an.||Of course, I'll call him this afternoon.
a|Thanks. And remember the meeting at four.|Danke. Und denk an die Besprechung um vier.|
me|Don't worry, it's already in my calendar.|Keine Sorge, sie steht schon in meinem Kalender.||I won't forget. It's in my calendar.` }
});
