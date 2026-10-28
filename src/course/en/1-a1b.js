/* English A1 · 6–10 */
lesson("A1", { id: "en-a1-06", t: TB("Free time – Hobbys und Häufigkeit", "Free time – Hobbies and how often"),
  goal: TB("Du kannst über Hobbys sprechen, sagen, was du (nicht) magst und wie oft du etwas machst.", "You can talk about hobbies, say what you like or don't like and how often you do things."),
  words: `the hobby|das Hobby||n|What are your hobbies?|Was sind deine Hobbys?
free time|Freizeit||n|What do you do in your free time?|Was machst du in deiner Freizeit?
to like|mögen||v|I like reading.|Ich lese gern.
to love|lieben; sehr gern mögen||v|I love cooking for friends.|Ich koche total gern für Freunde.
to hate|hassen||v|I hate running in the rain.|Ich hasse es, im Regen zu laufen.
to enjoy|genießen; Spaß haben an||v|Do you enjoy your job?|Macht dir deine Arbeit Spaß?
to go swimming|schwimmen gehen||v
to go running|laufen gehen; joggen||v
to play football|Fußball spielen||v
to play the guitar|Gitarre spielen||v
to read|lesen||v
to travel|reisen||v
to meet friends|Freunde treffen||v
always|immer||adv
usually|normalerweise||adv|I usually go running on Sundays.|Ich gehe sonntags normalerweise laufen.
often|oft||adv
sometimes|manchmal||adv
never|nie||adv|I never watch TV.|Ich schaue nie fern.
once a week|einmal pro Woche||ph
twice a month|zweimal im Monat||ph`,
  say: `What do you do in your free time?|Was machst du in deiner Freizeit?
I love going to concerts.|Ich gehe total gern auf Konzerte.
I'm not really into sport.|Sport ist nicht so mein Ding.
How often do you go to the gym?|Wie oft gehst du ins Fitnessstudio?
I go three times a week.|Ich gehe dreimal pro Woche.
I don't like getting up early.|Ich stehe nicht gern früh auf.
Do you want to play tennis on Saturday?|Willst du am Samstag Tennis spielen?`,
  gram: [
    ["h", TB("<i>like / love / hate</i> + -ing", "<i>like / love / hate</i> + -ing")],
    ["p", TB("Nach <b>like, love, hate, enjoy</b> steht meist die <b>-ing-Form</b>: I like read<b>ing</b>. She loves danc<b>ing</b>. „Ich spiele gern …“ heißt also <b>I like playing …</b>", "After <b>like, love, hate, enjoy</b> you usually use the <b>-ing form</b>: I like read<b>ing</b>. She loves danc<b>ing</b>.")],
    ["h", TB("Wie oft? – Häufigkeitsadverbien", "How often? – Adverbs of frequency")],
    ["table", { head: [TB("Adverb", "adverb"), TB("Stellung", "position"), TB("Beispiel", "example")], rows: [["always / usually / often / sometimes / never", TB("vor dem Vollverb", "before the main verb"), "I often go swimming."], ["", TB("nach <i>be</i>", "after <i>be</i>"), "She is always late."], ["once a week, every day", TB("am Satzende", "at the end"), "I go running every day."]], say: 2 }],
    ["tip", TB("Englisch hat kein „gern“: <s>I play gladly football</s> → <b>I like playing football</b>. Und „Ich mache Sport“ heißt <b>I do sport</b>, nicht <s>make</s>.", "English has no word for German “gern”: <b>I like playing football</b>. And “Sport machen” is <b>do sport</b>, not <s>make</s>.")]
  ],
  quiz: ["en-mistakes"],
  drill: [
    ["I love ___ to music.", ["listening", "listen", "to listening"], 0],
    ["She ___ late for work.", ["is never", "never is", "never"], 0, TB("Bei <i>be</i> steht das Adverb dahinter.", "With <i>be</i> the adverb goes after it.")],
    ["We ___ go to the cinema on Fridays.", ["usually", "are usually", "usual"], 0],
    ["How ___ do you go swimming?", ["often", "much", "many"], 0],
    ["I go to the gym three ___ a week.", ["times", "time", "once"], 0],
    ["Do you ___ sport?", ["do", "make", "play"], 0],
    ["Ich lese gern. → I like ___.", "reading"]
  ],
  talk: { t: TB("Wochenendpläne", "Weekend plans"), scene: TB("Beim Mittagessen fragt dich deine Kollegin Mia nach deinen Hobbys.", "At lunch your colleague Mia asks about your hobbies."), who: "Mia", slots: {}, lines: `a|So, what do you do in your free time?|Und, was machst du in deiner Freizeit?|
me|I love cooking and I often go running.|Ich koche total gern und gehe oft laufen.||I like cooking and running.; I often go running and I love cooking.
a|Running? How often do you go?|Laufen? Wie oft gehst du?|
me|About three times a week, usually in the morning.|Etwa dreimal pro Woche, meistens morgens.||Three times a week.; Usually three times a week, in the morning.
a|Impressive! I hate running. I prefer swimming.|Beeindruckend! Ich hasse Laufen. Ich schwimme lieber.|
me|Swimming is great too. Do you go every week?|Schwimmen ist auch toll. Gehst du jede Woche?||Nice! How often do you go swimming?
a|Yes, every Saturday. Do you want to come with me?|Ja, jeden Samstag. Willst du mitkommen?|
me|Sure, why not! What time do you go?|Klar, warum nicht! Um wie viel Uhr gehst du?||Yes, I'd love to! What time?; Why not! What time?` }
});

lesson("A1", { id: "en-a1-07", t: TB("In town – Orte und Wegbeschreibung", "In town – Places and directions"),
  goal: TB("Du kannst nach dem Weg fragen, eine Wegbeschreibung verstehen und sagen, was es wo gibt.", "You can ask the way, understand directions and say what there is where."),
  words: `the station|der Bahnhof||n|Excuse me, where's the station?|Entschuldigung, wo ist der Bahnhof?
the bus stop|die Bushaltestelle||n
the supermarket|der Supermarkt||n
the chemist's|die Drogerie; die Apotheke||n|Is there a chemist's near here?|Gibt es hier in der Nähe eine Apotheke?
the bank|die Bank||n
the post office|die Post||n
the museum|das Museum||n
the park|der Park||n
the square|der Platz||n
the street|die Straße||n
the corner|die Ecke||n|It's on the corner.|Es ist an der Ecke.
the traffic lights|die Ampel||n|Turn left at the traffic lights.|Bieg an der Ampel links ab.
to turn left|links abbiegen||v
to turn right|rechts abbiegen||v
straight on|geradeaus||ph|Go straight on.|Geh geradeaus.
next to|neben||ph|The bank is next to the café.|Die Bank ist neben dem Café.
opposite|gegenüber||x|The museum is opposite the park.|Das Museum ist gegenüber dem Park.
between|zwischen||x
near|in der Nähe von||x
far|weit||adj|Is it far? – No, it's a five-minute walk.|Ist es weit? – Nein, fünf Minuten zu Fuß.`,
  say: `Excuse me, how do I get to the station?|Entschuldigung, wie komme ich zum Bahnhof?
Is there a supermarket near here?|Gibt es hier in der Nähe einen Supermarkt?
Go straight on and take the second left.|Gehen Sie geradeaus und nehmen Sie die zweite links.
It's on your right, opposite the bank.|Es ist auf der rechten Seite, gegenüber der Bank.
Is it far from here?|Ist es weit von hier?
It's about ten minutes on foot.|Es sind etwa zehn Minuten zu Fuß.`,
  gram: [
    ["h", TB("<i>there is / there are</i> – „es gibt“", "<i>there is / there are</i>")],
    ["p", TB("<b>There is</b> (there's) + Einzahl, <b>there are</b> + Mehrzahl: <b>There's</b> a café on the corner. <b>There are</b> two banks in the square. Frage: <b>Is there</b> a bus stop near here?", "<b>There is</b> (there's) + singular, <b>there are</b> + plural: <b>There's</b> a café on the corner. <b>There are</b> two banks in the square. Question: <b>Is there</b> a bus stop near here?")],
    ["h", TB("Wo? – Präpositionen", "Where? – Prepositions")],
    ["table", { head: [TB("Präposition", "preposition"), TB("Beispiel", "example")], rows: [["next to", "The bank is next to the café."], ["opposite", "The museum is opposite the park."], ["between", "The shop is between the bank and the station."], ["on the corner", "There's a pharmacy on the corner."], ["at the end of", "It's at the end of the street."]], say: 1 }],
    ["tip", TB("Nicht <s>It gives a café</s> – „es gibt“ heißt <b>there is / there are</b>.", "German “es gibt” is <b>there is / there are</b> – never <s>it gives</s>.")]
  ],
  quiz: ["en-mistakes"],
  drill: [
    ["___ a supermarket near here?", ["Is there", "Are there", "Gives it"], 0],
    ["There ___ two museums in the old town.", ["are", "is", "be"], 0],
    ["The bank is ___ to the post office.", ["next", "near", "opposite"], 0],
    ["Turn left ___ the traffic lights.", ["at", "on", "in"], 0],
    ["The café is ___ the bank and the station.", ["between", "opposite", "next"], 0],
    ["Go ___ on for 200 metres.", ["straight", "right", "direct"], 0],
    ["Es gibt einen Park. → ___ a park.", "There's; There is"]
  ],
  talk: { t: TB("Wo ist das Museum?", "Where's the museum?"), scene: TB("Du bist in York und suchst das Eisenbahnmuseum. Du fragst eine Passantin.", "You're in York looking for the railway museum. You ask a passer-by."), who: "Passerby", slots: {}, lines: `me|Excuse me, how do I get to the railway museum?|Entschuldigung, wie komme ich zum Eisenbahnmuseum?||Excuse me, where's the railway museum?; Sorry, can you tell me the way to the railway museum?
a|Oh, it's not far. Go straight on and turn left at the traffic lights.|Oh, es ist nicht weit. Gehen Sie geradeaus und biegen Sie an der Ampel links ab.|
me|Straight on and left at the traffic lights. OK.|Geradeaus und an der Ampel links. Okay.||Left at the traffic lights, OK.
a|Then walk past the station. The museum is behind the station, on your right.|Dann gehen Sie am Bahnhof vorbei. Das Museum ist hinter dem Bahnhof, rechts.|
me|Is it far from here?|Ist es weit von hier?||How far is it?
a|No, it's about ten minutes on foot.|Nein, etwa zehn Minuten zu Fuß.|
me|Great, thank you very much!|Super, vielen Dank!||Thanks a lot!; Thank you so much!
a|You're welcome. Enjoy the museum!|Gern geschehen. Viel Spaß im Museum!|` }
});

lesson("A1", { id: "en-a1-08", t: TB("Shopping – Kleidung, Preise, <i>this / that</i>", "Shopping – Clothes, prices, <i>this / that</i>"),
  goal: TB("Du kannst im Laden nach Größen und Preisen fragen, anprobieren und sagen, was du gerade machst.", "You can ask about sizes and prices, try things on and say what you're doing right now."),
  words: `the shop|der Laden||n
the clothes|die Kleidung||n
the shirt|das Hemd||n
the T-shirt|das T-Shirt||n
the jumper|der Pullover||n|I'm looking for a warm jumper.|Ich suche einen warmen Pullover.
the jacket|die Jacke||n
the trousers|die Hose||n|These trousers are too long.|Diese Hose ist zu lang.
the jeans|die Jeans||n
the shoes|die Schuhe||n
the dress|das Kleid||n
the size|die Größe||n|What size are you?|Welche Größe hast du?
the changing room|die Umkleidekabine||n|Where are the changing rooms?|Wo sind die Umkleidekabinen?
to try on|anprobieren||v|Can I try it on?|Kann ich es anprobieren?
to look for|suchen||v
to fit|passen (Größe)||v|It doesn't fit.|Es passt nicht.
expensive|teuer||adj
cheap|billig; günstig||adj
too big|zu groß||ph
the sale|der Schlussverkauf||n|Is this in the sale?|Ist das reduziert?
the receipt|der Kassenbon||n`,
  say: `I'm just looking, thanks.|Ich schaue nur, danke.
I'm looking for a black jacket.|Ich suche eine schwarze Jacke.
Have you got this in a medium?|Haben Sie das in M?
Can I try these on?|Kann ich die anprobieren?
It's a bit too small.|Es ist ein bisschen zu klein.
How much are these shoes?|Wie viel kosten diese Schuhe?
I'll take it.|Ich nehme es.`,
  gram: [
    ["h", TB("<i>this, that, these, those</i>", "<i>this, that, these, those</i>")],
    ["table", { head: ["", TB("nah", "near"), TB("weiter weg", "further away")], rows: [[TB("Einzahl", "singular"), "this jacket", "that jacket"], [TB("Mehrzahl", "plural"), "these shoes", "those shoes"]], say: 1 }],
    ["h", TB("Present progressive – was gerade passiert", "Present progressive – what's happening now")],
    ["p", TB("<b>am / is / are + -ing</b>: I'<b>m looking</b> for a jacket. She'<b>s trying</b> it on. Für Dinge, die genau jetzt passieren – Routinen dagegen im Present simple.", "<b>am / is / are + -ing</b>: I'<b>m looking</b> for a jacket. She'<b>s trying</b> it on. For things happening right now – routines use the present simple.")],
    ["conj", { verbs: ["look", "try"], tenses: ["Present progressive"] }],
    ["tip", TB("<b>trousers, jeans, glasses</b> sind im Englischen Mehrzahl: <b>These</b> trousers <b>are</b> too long. Ein Stück: <b>a pair of</b> jeans.", "<b>trousers, jeans, glasses</b> are plural in English: <b>These</b> trousers <b>are</b> too long. One item: <b>a pair of</b> jeans.")]
  ],
  th: "present",
  quiz: ["en-tense"],
  forms: { verbs: ["look", "try", "wear", "buy", "pay"], tenses: ["Present progressive"] },
  drill: [
    ["How much are ___ shoes? (hier, in meiner Hand)", ["these", "this", "that"], 0],
    ["I like ___ dress in the window over there.", ["that", "these", "this"], 0],
    ["These jeans ___ too tight.", ["are", "is", "be"], 0],
    ["Sorry, I can't talk now – I'm ___ a shirt on.", ["trying", "try", "tries"], 0],
    ["She usually ___ jeans to work.", ["wears", "is wearing", "wear"], 0, TB("Gewohnheit → Present simple.", "Habit → present simple.")],
    ["Can I try ___ on?", ["it", "on it", "its"], 0],
    ["Ich suche gerade eine Jacke. → I'm ___ for a jacket.", "looking"]
  ],
  talk: { t: TB("Im Kleidungsgeschäft", "In the clothes shop"), scene: TB("Du suchst in einem Laden in Dublin eine Jacke.", "You're looking for a jacket in a shop in Dublin."), who: "Shop assistant", slots: {}, lines: `a|Hi, can I help you?|Hallo, kann ich Ihnen helfen?|
me|Yes, I'm looking for a warm jacket.|Ja, ich suche eine warme Jacke.||Yes, please. I'm looking for a jacket.
a|These jackets here are very warm. What size are you?|Diese Jacken hier sind sehr warm. Welche Größe haben Sie?|
me|Medium, I think. Can I try this one on?|M, glaube ich. Kann ich die hier anprobieren?||I'm a medium. Can I try it on?
a|Of course. The changing rooms are over there.|Natürlich. Die Umkleiden sind da drüben.|
me|It's a bit too big. Have you got it in a small?|Sie ist etwas zu groß. Haben Sie sie in S?||It's too big. Do you have a small?
a|Yes, here you are. How's that?|Ja, bitte schön. Wie ist die?|
me|Perfect! How much is it?|Perfekt! Wie viel kostet sie?||It fits! How much is it?; Great. I'll take it. How much is it?` }
});

lesson("A1", { id: "en-a1-09", t: TB("Last weekend – Past simple", "Last weekend – The past simple"),
  goal: TB("Du kannst erzählen, was du am Wochenende gemacht hast, und danach fragen.", "You can say what you did at the weekend and ask others about it."),
  words: `yesterday|gestern||adv|Yesterday I stayed at home.|Gestern bin ich zu Hause geblieben.
last weekend|letztes Wochenende||ph|What did you do last weekend?|Was hast du letztes Wochenende gemacht?
last night|gestern Abend; letzte Nacht||ph
ago|vor (zeitlich)||adv|I was in London two years ago.|Ich war vor zwei Jahren in London.
to visit|besuchen||v|I visited my parents.|Ich habe meine Eltern besucht.
to stay|bleiben; übernachten||v
to watch|anschauen||v
to go out|ausgehen||v
to see|sehen||v
to eat|essen||v
to drink|trinken||v
to buy|kaufen||v
to have a party|eine Party feiern||v
the concert|das Konzert||n
the film|der Film||n|We saw a great film.|Wir haben einen tollen Film gesehen.
tired|müde||adj
boring|langweilig||adj
amazing|toll; unglaublich||adj
relaxing|entspannend||adj
the weekend|das Wochenende||n`,
  say: `What did you do last weekend?|Was hast du letztes Wochenende gemacht?
I visited my grandparents.|Ich habe meine Großeltern besucht.
We went to a concert on Saturday.|Wir sind am Samstag auf ein Konzert gegangen.
It was amazing!|Es war toll!
I didn't do much. I stayed at home.|Ich habe nicht viel gemacht. Ich bin zu Hause geblieben.
Did you have a good weekend?|Hattest du ein schönes Wochenende?`,
  gram: [
    ["h", TB("Past simple – abgeschlossene Vergangenheit", "Past simple – finished past")],
    ["p", TB("Regelmäßig: <b>-ed</b>: work<b>ed</b>, visit<b>ed</b>, stay<b>ed</b>. Viele häufige Verben sind unregelmäßig: go → <b>went</b>, see → <b>saw</b>, eat → <b>ate</b>, have → <b>had</b>, buy → <b>bought</b>. Fragen und Verneinung mit <b>did</b> + Grundform: <b>Did</b> you <b>go</b>? I <b>didn't go</b>.", "Regular: <b>-ed</b>: work<b>ed</b>, visit<b>ed</b>, stay<b>ed</b>. Many common verbs are irregular: go → <b>went</b>, see → <b>saw</b>, eat → <b>ate</b>, have → <b>had</b>, buy → <b>bought</b>. Questions and negatives with <b>did</b> + base form: <b>Did</b> you <b>go</b>? I <b>didn't go</b>.")],
    ["conj", { verbs: ["go", "visit"], tenses: ["Stammformen", "Past simple"] }],
    ["h", TB("<i>was / were</i>", "<i>was / were</i>")],
    ["ex", [["It was great.", "Es war toll."], ["We were in Paris.", "Wir waren in Paris."], ["Were you at home? – No, I wasn't.", "Warst du zu Hause? – Nein."]]],
    ["tip", TB("Wo im Deutschen das Perfekt steht („Ich <i>bin</i> ins Kino <i>gegangen</i>“), nimmt man im Englischen bei fertigen Zeitpunkten das <b>past simple</b>: I <b>went</b> to the cinema yesterday.", "Where German uses the perfect (“Ich bin ins Kino gegangen”), English uses the <b>past simple</b> with a finished time: I <b>went</b> to the cinema yesterday.")]
  ],
  th: "pastperf",
  quiz: ["en-irr", "en-ppps"],
  forms: { verbs: ["go", "see", "have", "buy", "eat", "visit", "watch"], tenses: ["Past simple"] },
  drill: [
    ["Yesterday I ___ to the cinema.", ["went", "go", "have gone"], 0],
    ["___ you have a good weekend?", ["Did", "Do", "Were"], 0],
    ["We didn't ___ out last night.", ["go", "went", "going"], 0],
    ["The film ___ really boring.", ["was", "were", "did"], 0],
    ["I saw her two weeks ___.", ["ago", "before", "since"], 0],
    ["They ___ at home on Sunday.", ["were", "was", "did"], 0],
    ["Wir haben Pizza gegessen. → We ___ pizza.", "ate"]
  ],
  talk: { t: TB("Montagmorgen im Büro", "Monday morning at the office"), scene: TB("Dein Kollege Tom fragt dich nach deinem Wochenende.", "Your colleague Tom asks about your weekend."), who: "Tom", slots: {}, lines: `a|Morning! Did you have a good weekend?|Morgen! Hattest du ein schönes Wochenende?|
me|Yes, thanks! I visited my sister in Hamburg.|Ja, danke! Ich habe meine Schwester in Hamburg besucht.||Yes, it was great. I visited my sister.; Yes, I went to Hamburg to see my sister.
a|Nice! What did you do there?|Schön! Was habt ihr dort gemacht?|
me|We went to a concert on Saturday. It was amazing.|Wir waren am Samstag auf einem Konzert. Es war toll.||We went to a concert. It was amazing!
a|Lucky you! I didn't do much. I stayed at home.|Du Glückspilz! Ich habe nicht viel gemacht. Ich bin zu Hause geblieben.|
me|That sounds relaxing. Did you watch anything good?|Klingt entspannt. Hast du was Gutes geschaut?||Sounds relaxing! Did you watch a film?
a|Yes, I watched a really funny film.|Ja, ich habe einen echt lustigen Film geschaut.|
me|Cool, what was it called?|Cool, wie hieß er?||What was the name of the film?; Which film was it?` }
});

lesson("A1", { id: "en-a1-10", t: TB("Travelling – Zug, Hotel, <i>can</i>", "Travelling – Trains, hotels, <i>can</i>"),
  goal: TB("Du kannst Fahrkarten kaufen, im Hotel einchecken und höflich um etwas bitten.", "You can buy tickets, check in at a hotel and ask for things politely."),
  words: `the ticket|die Fahrkarte; das Ticket||n|A return ticket to Oxford, please.|Eine Rückfahrkarte nach Oxford, bitte.
a single|eine einfache Fahrt||ph
a return|eine Hin- und Rückfahrt||ph
the platform|das Gleis||n|Which platform does the train leave from?|Von welchem Gleis fährt der Zug?
to leave|abfahren; verlassen||v
to arrive|ankommen||v|What time does the train arrive?|Wann kommt der Zug an?
delayed|verspätet||adj|The train is delayed.|Der Zug hat Verspätung.
cancelled|gestrichen; ausgefallen||adj
to change trains|umsteigen||v
the flight|der Flug||n
the luggage|das Gepäck||n|Can I leave my luggage here?|Kann ich mein Gepäck hier lassen?
the reservation|die Reservierung||n|I have a reservation for two nights.|Ich habe eine Reservierung für zwei Nächte.
the single room|das Einzelzimmer||n
the double room|das Doppelzimmer||n
to check in|einchecken||v
to check out|auschecken||v|What time do I have to check out?|Bis wann muss ich auschecken?
the key|der Schlüssel||n
the lift|der Aufzug||n|The lift is on the left.|Der Aufzug ist links.
breakfast is included|Frühstück ist inklusive||ph
the Wi-Fi password|das WLAN-Passwort||n`,
  say: `A return to Oxford, please.|Eine Rückfahrkarte nach Oxford, bitte.
Which platform is it?|Welches Gleis ist es?
Do I have to change trains?|Muss ich umsteigen?
I have a reservation under the name Becker.|Ich habe eine Reservierung auf den Namen Becker.
Can I have the Wi-Fi password, please?|Kann ich bitte das WLAN-Passwort haben?
Could you call me a taxi?|Könnten Sie mir ein Taxi rufen?
Is breakfast included?|Ist Frühstück inklusive?`,
  gram: [
    ["h", TB("<i>can / can't</i> und <i>could</i>", "<i>can / can't</i> and <i>could</i>")],
    ["p", TB("<b>can</b> + Grundform, für alle Personen gleich (kein -s!): I <b>can</b> swim. She <b>can</b> speak French. Verneinung: <b>can't</b>. Fragen: <b>Can</b> I pay by card? Noch höflicher: <b>Could</b> you help me?", "<b>can</b> + base form, the same for every person (no -s!): I <b>can</b> swim. She <b>can</b> speak French. Negative: <b>can't</b>. Questions: <b>Can</b> I pay by card? More polite: <b>Could</b> you help me?")],
    ["table", { head: [TB("wofür?", "use"), TB("Beispiel", "example")], rows: [[TB("Fähigkeit", "ability"), "I can't drive."], [TB("Erlaubnis", "permission"), "Can I leave my bag here?"], [TB("höfliche Bitte", "polite request"), "Could you open the window, please?"]], say: 1 }],
    ["tip", TB("<b>have to</b> = müssen (Notwendigkeit): Do I <b>have to</b> change? – aber <b>don't have to</b> = nicht müssen, <i>nicht</i> „nicht dürfen“!", "<b>have to</b> = necessity: Do I <b>have to</b> change? – <b>don't have to</b> means it isn't necessary, <i>not</i> that it's forbidden!")]
  ],
  th: "modals",
  quiz: ["en-modal"],
  drill: [
    ["She ___ speak three languages.", ["can", "cans", "can to"], 0],
    ["___ you tell me the way to the station, please?", ["Could", "Must", "Do"], 0],
    ["I'm sorry, you ___ smoke here.", ["can't", "don't have to", "couldn't"], 0],
    ["Do I ___ change trains in Reading?", ["have to", "must", "can to"], 0],
    ["The train ___ at 10:15 from platform 4.", ["leaves", "leave", "is leave"], 0],
    ["I have a reservation ___ two nights.", ["for", "since", "during"], 0],
    ["Kann ich mit Karte zahlen? → ___ I pay by card?", "Can; Could"]
  ],
  talk: { t: TB("Check-in im Hotel", "Checking in at the hotel"), scene: TB("Du kommst abends in deinem Hotel in Bath an.", "You arrive at your hotel in Bath in the evening."), who: "Receptionist", slots: { name: "Becker" }, lines: `a|Good evening! How can I help you?|Guten Abend! Wie kann ich Ihnen helfen?|
me|Good evening. I have a reservation under the name {name}.|Guten Abend. Ich habe eine Reservierung auf den Namen …||Hi, I've got a reservation. My name is {name}.; Good evening, I have a booking under {name}.
a|Ah yes, a double room for two nights. Can I see your passport, please?|Ah ja, ein Doppelzimmer für zwei Nächte. Kann ich bitte Ihren Pass sehen?|
me|Sure, here you are. Is breakfast included?|Klar, bitte schön. Ist Frühstück inklusive?||Here you are. Is breakfast included?
a|Yes, it's from seven to ten in the restaurant.|Ja, von sieben bis zehn im Restaurant.|
me|Great. Can I have the Wi-Fi password, please?|Super. Kann ich bitte das WLAN-Passwort haben?||And what's the Wi-Fi password?; Could I have the Wi-Fi password?
a|It's on your key card. Your room is 214, on the second floor.|Es steht auf Ihrer Schlüsselkarte. Ihr Zimmer ist 214, im zweiten Stock.|
me|Thank you. What time do I have to check out?|Danke. Bis wann muss ich auschecken?||Thanks! When is check-out?` }
});
