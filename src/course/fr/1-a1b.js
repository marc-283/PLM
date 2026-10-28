/* Français A1 · 5–8 */
lesson("A1", { id: "fr-a1-05", t: TB("Ma journée – Tagesablauf und reflexive Verben", "Ma journée – Daily routine and reflexive verbs"),
  goal: TB("Du kannst deinen Tagesablauf beschreiben und die Uhrzeit sagen.", "You can describe your daily routine and tell the time."),
  words: `se lever|aufstehen|to get up|v|Je me lève à sept heures.|Ich stehe um sieben auf.|I get up at seven.
se réveiller|aufwachen|to wake up|v
se doucher|duschen|to shower|v
s'habiller|sich anziehen|to get dressed|v
prendre le petit-déjeuner|frühstücken|to have breakfast|v
partir|weggehen; losfahren|to leave|v|Je pars au travail à huit heures.|Ich fahre um acht zur Arbeit.|I leave for work at eight.
travailler|arbeiten|to work|v
déjeuner|zu Mittag essen|to have lunch|v
rentrer|nach Hause kommen|to get home|v|Je rentre vers dix-huit heures.|Ich komme gegen achtzehn Uhr nach Hause.|I get home around six.
dîner|zu Abend essen|to have dinner|v
se coucher|ins Bett gehen|to go to bed|v
le matin|der Morgen; morgens|the morning|n
l'après-midi|der Nachmittag (m)|the afternoon|n
le soir|der Abend; abends|the evening|n
l'heure|die Stunde; die Uhrzeit (f)|the hour; the time|n|Quelle heure est-il ?|Wie spät ist es?|What time is it?
et demie|halb (nach)|half past|ph|Il est huit heures et demie.|Es ist halb neun.|It's half past eight.
et quart|Viertel nach|quarter past|ph
moins le quart|Viertel vor|quarter to|ph|Il est dix heures moins le quart.|Es ist Viertel vor zehn.|It's quarter to ten.
d'habitude|normalerweise|usually|adv
tôt|früh|early|adv
tard|spät|late|adv`,
  say: `Quelle heure est-il ? – Il est sept heures et demie.|Wie spät ist es? – Es ist halb acht.|What time is it? – It's half past seven.
Tu te lèves à quelle heure ?|Wann stehst du auf?|What time do you get up?
Je commence à neuf heures et je finis à dix-sept heures.|Ich fange um neun an und höre um siebzehn Uhr auf.|I start at nine and finish at five.
Le vendredi, je travaille à la maison.|Freitags arbeite ich zu Hause.|On Fridays I work from home.
Le soir, je me couche tard.|Abends gehe ich spät ins Bett.|In the evening I go to bed late.
On se retrouve à midi ?|Treffen wir uns um zwölf?|Shall we meet at noon?`,
  gram: [
    ["h", TB("Reflexive Verben", "Reflexive verbs")],
    ["conj", { verbs: ["se lever"], tenses: ["Présent"] }],
    ["p", TB("Das Reflexivpronomen steht <b>vor</b> dem Verb: je <b>me</b> lève, tu <b>te</b> lèves, il <b>se</b> lève, nous <b>nous</b> levons, vous <b>vous</b> levez, ils <b>se</b> lèvent. Verneint: je <b>ne me</b> lève <b>pas</b>.", "The reflexive pronoun goes <b>before</b> the verb: je <b>me</b> lève, tu <b>te</b> lèves, il <b>se</b> lève … Negative: je <b>ne me</b> lève <b>pas</b>.")],
    ["h", TB("Die Uhrzeit", "Telling the time")],
    ["table", { head: [TB("Uhr", "clock"), TB("Französisch", "French")], rows: [["7:00", "sept heures"], ["7:15", "sept heures et quart"], ["7:30", "sept heures et demie"], ["7:45", "huit heures moins le quart"], ["12:00", "midi"], ["0:00", "minuit"], ["19:20", "dix-neuf heures vingt"]], say: 1 }],
    ["tip", TB("Im Alltag hört man oft die 24-Stunden-Zählung: <b>dix-huit heures</b> = 18 Uhr. Und „am Montag“ (jeden): <b>le lundi</b>; „diesen Montag“: <b>lundi</b>.", "In everyday life the 24-hour clock is common: <b>dix-huit heures</b> = 6 pm. “On Mondays” (every): <b>le lundi</b>; “this Monday”: <b>lundi</b>.")]
  ],
  forms: { verbs: ["se lever", "se coucher", "travailler", "partir", "finir"], tenses: ["Présent"] },
  drill: [
    ["Je ___ lève à six heures.", ["me", "te", "se"], 0],
    ["Nous ___ couchons tard.", ["nous", "se", "vous"], 0],
    ["Elle ___ douche le matin.", ["se", "me", "s'"], 0],
    ["Il est huit heures et ___. (8:30)", ["demie", "demi", "quart"], 0],
    ["Il est neuf heures ___ le quart. (8:45)", ["moins", "et", "avant"], 0],
    ["Tu ___ à quelle heure ? (partir)", ["pars", "part", "partes"], 0],
    ["Ich stehe um sieben auf. → Je me ___ à sept heures.", "lève"]
  ],
  talk: { t: TB("Ein ganz normaler Tag", "Just an ordinary day"), scene: TB("Dein neuer Mitbewohner Hugo fragt, wie dein Tag aussieht – er will das Bad planen.", "Your new flatmate Hugo asks about your day – he wants to plan the bathroom."), who: "Hugo", slots: {}, lines: `a|Tu te lèves à quelle heure le matin ?|Um wie viel Uhr stehst du morgens auf?|What time do you get up in the morning?
me|Je me lève à six heures et demie.|Ich stehe um halb sieben auf.|I get up at half past six.|À six heures et demie.; D'habitude à six heures trente.
a|Ah, c'est tôt ! Et tu te douches le matin ?|Ah, früh! Und duschst du morgens?|Oh, that's early! And do you shower in the morning?
me|Oui, je me douche tout de suite après.|Ja, ich dusche gleich danach.|Yes, I shower straight afterwards.|Oui, à sept heures moins le quart.
a|D'accord. Moi, je me lève à huit heures. Tu rentres à quelle heure ?|Okay. Ich stehe um acht auf. Wann kommst du nach Hause?|OK. I get up at eight. What time do you get home?
me|Je rentre vers dix-huit heures.|Ich komme gegen achtzehn Uhr nach Hause.|I get home around six.|Vers six heures du soir.
a|Parfait. On dîne ensemble ce soir ?|Perfekt. Essen wir heute Abend zusammen?|Perfect. Shall we have dinner together tonight?
me|Avec plaisir ! Je fais les courses.|Gern! Ich gehe einkaufen.|With pleasure! I'll do the shopping.|Bonne idée ! Je cuisine, si tu veux.` }
});

lesson("A1", { id: "fr-a1-06", t: TB("Les loisirs – Hobbys und <i>faire de</i>", "Les loisirs – Hobbies and <i>faire de</i>"),
  goal: TB("Du kannst über Hobbys sprechen, sagen, was du (nicht) magst, und dich verabreden.", "You can talk about hobbies, say what you like or don't like and make plans."),
  words: `les loisirs|die Freizeit; die Hobbys|leisure; hobbies|n
le temps libre|die Freizeit|free time|n|Qu'est-ce que tu fais pendant ton temps libre ?|Was machst du in deiner Freizeit?|What do you do in your free time?
aimer|mögen; lieben|to like; to love|v|J'aime lire.|Ich lese gern.|I like reading.
adorer|lieben; total gern mögen|to love|v
détester|hassen|to hate|v
préférer|lieber mögen|to prefer|v|Je préfère le cinéma.|Ich gehe lieber ins Kino.|I prefer the cinema.
faire du sport|Sport treiben|to do sport|v
faire du vélo|Rad fahren|to cycle|v
faire de la natation|schwimmen|to swim|v
jouer au foot|Fußball spielen|to play football|v
jouer de la guitare|Gitarre spielen|to play the guitar|v
lire|lesen|to read|v
la lecture|das Lesen|reading|n
le cinéma|das Kino|the cinema|n
la musique|die Musik|music|n
la randonnée|die Wanderung|the hike|n|On fait une randonnée dimanche ?|Machen wir am Sonntag eine Wanderung?|Shall we go hiking on Sunday?
souvent|oft|often|adv
parfois|manchmal|sometimes|adv
ne … jamais|nie|never|ph|Je ne regarde jamais la télé.|Ich schaue nie fern.|I never watch TV.
le week-end|das Wochenende|the weekend|n`,
  say: `Qu'est-ce que tu fais le week-end ?|Was machst du am Wochenende?|What do you do at the weekend?
J'adore faire du vélo.|Ich fahre total gern Rad.|I love cycling.
Je n'aime pas trop le sport.|Ich mag Sport nicht so.|I'm not really into sport.
Je joue de la guitare depuis dix ans.|Ich spiele seit zehn Jahren Gitarre.|I've been playing the guitar for ten years.
Tu veux venir avec nous ?|Willst du mit uns kommen?|Do you want to come with us?
On se voit samedi ?|Sehen wir uns am Samstag?|Shall we meet on Saturday?`,
  gram: [
    ["h", TB("<i>faire de</i> und <i>jouer à / de</i>", "<i>faire de</i> and <i>jouer à / de</i>")],
    ["table", { head: [TB("Ausdruck", "expression"), TB("wofür?", "use"), TB("Beispiel", "example")], rows: [["faire du / de la / de l'", TB("Sport und Aktivitäten", "sports and activities"), "Je fais du vélo. Elle fait de la natation."], ["jouer au / à la", TB("Spiele, Ballsport", "games, ball sports"), "Il joue au tennis."], ["jouer du / de la", TB("Instrumente", "instruments"), "Je joue de la guitare."]], say: 2 }],
    ["p", TB("<b>à + le = au</b>, <b>de + le = du</b>: jouer <b>au</b> foot, faire <b>du</b> ski. Mit <i>la</i> und <i>l'</i> bleibt es: <b>à la</b>, <b>de la</b>, <b>de l'</b>.", "<b>à + le = au</b>, <b>de + le = du</b>: jouer <b>au</b> foot, faire <b>du</b> ski. With <i>la</i> and <i>l'</i> nothing changes: <b>à la</b>, <b>de la</b>, <b>de l'</b>.")],
    ["conj", { verbs: ["faire"], tenses: ["Présent"] }],
    ["tip", TB("Nach <b>aimer, adorer, détester</b> steht der Infinitiv: J'aime <b>lire</b>. Verneinung umschließt das Verb: Je <b>ne</b> joue <b>pas</b>.", "After <b>aimer, adorer, détester</b> use the infinitive: J'aime <b>lire</b>. The negative wraps around the verb: Je <b>ne</b> joue <b>pas</b>.")]
  ],
  forms: { verbs: ["faire", "jouer", "aimer", "préférer", "lire"], tenses: ["Présent"] },
  drill: [
    ["Je fais ___ vélo le dimanche.", ["du", "de la", "au"], 0],
    ["Il joue ___ foot avec ses amis.", ["au", "du", "à le"], 0],
    ["Elle joue ___ piano.", ["du", "au", "de le"], 0],
    ["Nous ___ du sport trois fois par semaine.", ["faisons", "faites", "font"], 0],
    ["J'aime ___ le soir.", ["lire", "lis", "lit"], 0],
    ["Je ___ regarde jamais la télé.", ["ne", "n'", "pas"], 0],
    ["Wir spielen Tennis. → Nous jouons ___ tennis.", "au"]
  ],
  talk: { t: TB("Pläne fürs Wochenende", "Weekend plans"), scene: TB("In der Mittagspause fragt dich deine Kollegin Manon nach deinen Hobbys.", "At lunch your colleague Manon asks about your hobbies."), who: "Manon", slots: {}, lines: `a|Qu'est-ce que tu fais pendant ton temps libre ?|Was machst du in deiner Freizeit?|What do you do in your free time?
me|J'adore faire du sport. Je fais souvent du vélo.|Ich mache total gern Sport. Ich fahre oft Rad.|I love sport. I often go cycling.|Je fais du vélo et je vais à la salle de sport.
a|Ah, moi aussi ! Tu fais aussi de la randonnée ?|Ich auch! Gehst du auch wandern?|Me too! Do you go hiking too?
me|Parfois, mais je préfère le vélo.|Manchmal, aber ich fahre lieber Rad.|Sometimes, but I prefer cycling.|Oui, parfois.
a|On fait une randonnée ensemble dimanche ?|Machen wir am Sonntag zusammen eine Wanderung?|Shall we go hiking together on Sunday?
me|Avec plaisir ! On part à quelle heure ?|Gern! Um wie viel Uhr gehen wir los?|With pleasure! What time shall we leave?|Bonne idée ! À quelle heure ?
a|Neuf heures, ça te va ?|Neun Uhr, passt dir das?|Nine o'clock, is that OK?
me|Parfait. À dimanche !|Perfekt. Bis Sonntag!|Perfect. See you on Sunday!|D'accord, à dimanche !` }
});

lesson("A1", { id: "fr-a1-07", t: TB("En ville – Orte, Weg und <i>il y a</i>", "En ville – Places, directions and <i>il y a</i>"),
  goal: TB("Du kannst nach dem Weg fragen, eine Wegbeschreibung verstehen und sagen, was es wo gibt.", "You can ask the way, understand directions and say what there is where."),
  words: `la gare|der Bahnhof|the station|n|Où est la gare, s'il vous plaît ?|Wo ist bitte der Bahnhof?|Where's the station, please?
l'arrêt de bus|die Bushaltestelle (m)|the bus stop|n
la pharmacie|die Apotheke|the pharmacy|n
la boulangerie|die Bäckerei|the bakery|n
le supermarché|der Supermarkt|the supermarket|n
la banque|die Bank|the bank|n
la poste|die Post|the post office|n
le musée|das Museum|the museum|n
la place|der Platz|the square|n
la rue|die Straße|the street|n
le pont|die Brücke|the bridge|n
le feu|die Ampel|the traffic light|n|Tournez à gauche au feu.|Biegen Sie an der Ampel links ab.|Turn left at the lights.
tourner|abbiegen|to turn|v
traverser|überqueren|to cross|v
tout droit|geradeaus|straight on|ph
à droite|rechts|on the right|ph
à gauche|links|on the left|ph
à côté de|neben|next to|ph|La banque est à côté de la poste.|Die Bank ist neben der Post.|The bank is next to the post office.
en face de|gegenüber von|opposite|ph
loin|weit|far|adv|C'est loin ? – Non, c'est à cinq minutes à pied.|Ist es weit? – Nein, fünf Minuten zu Fuß.|Is it far? – No, it's five minutes on foot.`,
  say: `Pardon, pour aller à la gare, s'il vous plaît ?|Entschuldigung, wie komme ich zum Bahnhof?|Excuse me, how do I get to the station?
Il y a une pharmacie près d'ici ?|Gibt es hier in der Nähe eine Apotheke?|Is there a pharmacy near here?
Allez tout droit, puis prenez la deuxième rue à droite.|Gehen Sie geradeaus, dann nehmen Sie die zweite Straße rechts.|Go straight on, then take the second street on the right.
C'est en face du musée.|Es ist gegenüber dem Museum.|It's opposite the museum.
C'est à dix minutes à pied.|Es sind zehn Minuten zu Fuß.|It's ten minutes on foot.
Je suis perdu.|Ich habe mich verlaufen.|I'm lost.`,
  gram: [
    ["h", TB("<i>il y a</i> – es gibt", "<i>il y a</i> – there is / there are")],
    ["p", TB("<b>il y a</b> + Einzahl oder Mehrzahl: <b>Il y a</b> une boulangerie dans la rue. <b>Il y a</b> deux musées. Verneint: <b>Il n'y a pas de</b> banque ici (nach Verneinung <b>de</b> statt un/une/des).", "<b>il y a</b> + singular or plural: <b>Il y a</b> une boulangerie dans la rue. <b>Il y a</b> deux musées. Negative: <b>Il n'y a pas de</b> banque ici (after a negative, <b>de</b> replaces un/une/des).")],
    ["h", TB("<i>à</i> und <i>de</i> + Artikel", "<i>à</i> and <i>de</i> + article")],
    ["table", { head: ["", "le", "la", "l'", "les"], rows: [["à", "au", "à la", "à l'", "aux"], ["de", "du", "de la", "de l'", "des"]], say: 1 }],
    ["ex", [["Je vais au musée.", "Ich gehe ins Museum.", "I'm going to the museum."], ["C'est en face de la gare.", "Es ist gegenüber vom Bahnhof.", "It's opposite the station."], ["La poste est à côté du supermarché.", "Die Post ist neben dem Supermarkt.", "The post office is next to the supermarket."]]],
    ["tip", TB("<b>Pour aller à …, s'il vous plaît ?</b> ist die übliche, kurze Frage nach dem Weg.", "<b>Pour aller à …, s'il vous plaît ?</b> is the usual short way to ask for directions.")]
  ],
  drill: [
    ["___ une boulangerie près d'ici ?", ["Il y a", "C'est", "Il est"], 0],
    ["Il n'y a pas ___ pharmacie dans ce quartier.", ["de", "une", "la"], 0],
    ["Je vais ___ musée.", ["au", "à le", "du"], 0],
    ["La banque est en face ___ gare.", ["de la", "du", "à la"], 0],
    ["Tournez ___ gauche au feu.", ["à", "au", "en"], 0],
    ["Nous allons ___ toilettes.", ["aux", "à les", "des"], 0],
    ["Es ist neben dem Supermarkt. → C'est à côté ___ supermarché.", "du"]
  ],
  talk: { t: TB("Wo ist das Museum?", "Where's the museum?"), scene: TB("Du suchst in Bordeaux das Weinmuseum und fragst eine Passantin.", "You're looking for the wine museum in Bordeaux and ask a passer-by."), who: "Passante", slots: {}, lines: `me|Pardon madame, pour aller au musée du vin, s'il vous plaît ?|Entschuldigung, wie komme ich bitte zum Weinmuseum?|Excuse me, how do I get to the wine museum, please?|Excusez-moi, où est le musée du vin ?
a|Ce n'est pas loin. Allez tout droit et tournez à droite au feu.|Es ist nicht weit. Gehen Sie geradeaus und biegen Sie an der Ampel rechts ab.|It's not far. Go straight on and turn right at the lights.
me|Tout droit, puis à droite au feu. D'accord.|Geradeaus, dann an der Ampel rechts. Okay.|Straight on, then right at the lights. OK.|À droite au feu, d'accord.
a|Ensuite, traversez le pont. Le musée est en face de la place.|Dann gehen Sie über die Brücke. Das Museum ist gegenüber dem Platz.|Then cross the bridge. The museum is opposite the square.
me|C'est à combien de minutes à pied ?|Wie viele Minuten zu Fuß sind es?|How many minutes is it on foot?|C'est loin à pied ?
a|À peu près dix minutes.|Ungefähr zehn Minuten.|About ten minutes.
me|Merci beaucoup, madame !|Vielen Dank!|Thank you very much!|Merci, bonne journée !
a|Je vous en prie. Bonne visite !|Gern geschehen. Viel Spaß beim Besuch!|You're welcome. Enjoy your visit!` }
});

lesson("A1", { id: "fr-a1-08", t: TB("Le week-end dernier – Passé composé", "Le week-end dernier – The passé composé"),
  goal: TB("Du kannst erzählen, was du am Wochenende gemacht hast, und danach fragen.", "You can say what you did at the weekend and ask others about it."),
  words: `hier|gestern|yesterday|adv|Hier, j'ai vu un film.|Gestern habe ich einen Film gesehen.|Yesterday I saw a film.
le week-end dernier|letztes Wochenende|last weekend|ph
samedi dernier|letzten Samstag|last Saturday|ph
il y a deux jours|vor zwei Tagen|two days ago|ph
visiter|besichtigen|to visit (a place)|v
rendre visite à|besuchen (Personen)|to visit (people)|v|J'ai rendu visite à mes parents.|Ich habe meine Eltern besucht.|I visited my parents.
sortir|ausgehen|to go out|v
aller|gehen; fahren|to go|v
voir|sehen|to see|v
manger|essen|to eat|v
boire|trinken|to drink|v
faire la fête|feiern|to party|v
le concert|das Konzert|the concert|n
le film|der Film|the film|n
le restaurant|das Restaurant|the restaurant|n
génial|genial; toll|great|adj|C'était génial !|Es war toll!|It was great!
ennuyeux|langweilig|boring|adj
fatigué|müde|tired|adj
c'était|es war|it was|ph
rester|bleiben|to stay|v|Je suis resté à la maison.|Ich bin zu Hause geblieben.|I stayed at home.`,
  say: `Qu'est-ce que tu as fait ce week-end ?|Was hast du am Wochenende gemacht?|What did you do at the weekend?
J'ai rendu visite à ma sœur.|Ich habe meine Schwester besucht.|I visited my sister.
Samedi, nous sommes allés à un concert.|Am Samstag sind wir auf ein Konzert gegangen.|On Saturday we went to a concert.
C'était génial !|Es war toll!|It was great!
Je suis resté à la maison et j'ai lu.|Ich bin zu Hause geblieben und habe gelesen.|I stayed at home and read.
Tu as passé un bon week-end ?|Hattest du ein schönes Wochenende?|Did you have a nice weekend?`,
  gram: [
    ["h", TB("Passé composé: <i>avoir</i> oder <i>être</i> + Partizip", "Passé composé: <i>avoir</i> or <i>être</i> + participle")],
    ["conj", { verbs: ["manger", "aller"], tenses: ["Passé composé"] }],
    ["p", TB("Die meisten Verben mit <b>avoir</b>: j'<b>ai mangé</b>, j'<b>ai vu</b>, j'<b>ai fait</b>. Mit <b>être</b>: Verben der Bewegung (aller, venir, partir, arriver, rester, sortir …) und alle reflexiven Verben – dann passt sich das Partizip an: elle est all<b>ée</b>, nous sommes sorti<b>s</b>.", "Most verbs take <b>avoir</b>: j'<b>ai mangé</b>, j'<b>ai vu</b>, j'<b>ai fait</b>. Verbs of movement (aller, venir, partir, arriver, rester, sortir …) and all reflexive verbs take <b>être</b> – then the participle agrees: elle est all<b>ée</b>, nous sommes sorti<b>s</b>.")],
    ["table", { head: [TB("Infinitiv", "infinitive"), TB("Partizip", "participle")], rows: [["faire", "fait"], ["voir", "vu"], ["boire", "bu"], ["lire", "lu"], ["prendre", "pris"], ["avoir", "eu"], ["être", "été"]], say: 1 }],
    ["tip", TB("Verneinung umschließt nur <i>avoir / être</i>: Je <b>n'ai pas</b> mangé. Je <b>ne suis pas</b> sorti.", "The negative wraps around <i>avoir / être</i> only: Je <b>n'ai pas</b> mangé. Je <b>ne suis pas</b> sorti.")]
  ],
  forms: { verbs: ["faire", "aller", "voir", "manger", "rester", "boire"], tenses: ["Passé composé"] },
  drill: [
    ["Hier, j'___ vu un bon film.", ["ai", "suis", "a"], 0],
    ["Samedi, nous ___ allés au cinéma.", ["sommes", "avons", "êtes"], 0],
    ["Elle est ___ à Paris.", ["allée", "allé", "allés"], 0, TB("être → Partizip passt sich an (weiblich: -e).", "être → the participle agrees (feminine: -e).")],
    ["Tu as ___ tes devoirs ?", ["fait", "faire", "fais"], 0],
    ["Je ___ pas sorti hier soir.", ["ne suis", "n'ai", "ne"], 0],
    ["Le film ? ___ ennuyeux.", ["C'était", "Il était", "C'est été"], 0],
    ["Wir haben Pizza gegessen. → Nous avons ___ une pizza.", "mangé"]
  ],
  talk: { t: TB("Montagmorgen", "Monday morning"), scene: TB("Dein Kollege Antoine fragt dich nach deinem Wochenende.", "Your colleague Antoine asks about your weekend."), who: "Antoine", slots: {}, lines: `a|Salut ! Tu as passé un bon week-end ?|Hi! Hattest du ein schönes Wochenende?|Hi! Did you have a nice weekend?
me|Oui, très bon ! Je suis allé à Strasbourg.|Ja, sehr schön! Ich war in Straßburg.|Yes, very nice! I went to Strasbourg.|Oui, j'ai visité Strasbourg.
a|Super ! Qu'est-ce que tu as fait là-bas ?|Super! Was hast du dort gemacht?|Great! What did you do there?
me|J'ai visité la cathédrale et j'ai mangé une tarte flambée.|Ich habe das Münster besichtigt und Flammkuchen gegessen.|I visited the cathedral and ate a tarte flambée.|J'ai visité la ville et j'ai bien mangé.
a|Miam ! Et c'était comment ?|Lecker! Und wie war's?|Yum! And how was it?
me|C'était génial ! Et toi, tu as fait quoi ?|Es war toll! Und du, was hast du gemacht?|It was great! And you, what did you do?|Génial ! Et toi ?
a|Rien de spécial. Je suis resté à la maison.|Nichts Besonderes. Ich bin zu Hause geblieben.|Nothing special. I stayed at home.
me|C'est bien aussi, un peu de repos !|Das ist auch schön, ein bisschen Ruhe!|That's nice too, a bit of rest!|Ça fait du bien de se reposer.` }
});
