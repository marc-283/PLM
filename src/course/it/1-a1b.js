/* Italiano A1 · 5–8 */
lesson("A1", { id: "it-a1-05", t: TB("La famiglia – Familie und Possessiva", "La famiglia – Family and possessives"),
  goal: TB("Du kannst deine Familie vorstellen und sagen, wem etwas gehört.", "You can introduce your family and say who something belongs to."),
  words: `la famiglia|die Familie|the family|n|Ho una famiglia grande.|Ich habe eine große Familie.|I have a big family.
il padre|der Vater|the father|n
la madre|die Mutter|the mother|n
i genitori|die Eltern|the parents|n|I miei genitori abitano a Colonia.|Meine Eltern wohnen in Köln.|My parents live in Cologne.
il fratello|der Bruder|the brother|n
la sorella|die Schwester|the sister|n
il figlio|der Sohn|the son|n
la figlia|die Tochter|the daughter|n
i figli|die Kinder (Söhne und Töchter)|the children|n
il marito|der Ehemann|the husband|n
la moglie|die Ehefrau|the wife|n
il nonno|der Opa|the grandfather|n
la nonna|die Oma|the grandmother|n
lo zio|der Onkel|the uncle|n
la zia|die Tante|the aunt|n
il cugino|der Cousin|the cousin (m)|n
la cugina|die Cousine|the cousin (f)|n
il ragazzo|der Junge; der Freund (Partner)|the boy; the boyfriend|n
la ragazza|das Mädchen; die Freundin (Partnerin)|the girl; the girlfriend|n
sposato/a|verheiratet|married|adj|Mia sorella è sposata.|Meine Schwester ist verheiratet.|My sister is married.
single|Single|single|adj
figlio unico|Einzelkind|only child|ph|Sono figlio unico.|Ich bin Einzelkind.|I'm an only child.
grande|groß|big; tall|adj
piccolo/a|klein|small; little|adj
simpatico/a|sympathisch; nett|nice; likeable|adj`,
  say: `Hai fratelli?|Hast du Geschwister?|Do you have any brothers or sisters?
Ho un fratello e una sorella.|Ich habe einen Bruder und eine Schwester.|I have a brother and a sister.
Mio fratello si chiama Jonas.|Mein Bruder heißt Jonas.|My brother is called Jonas.
Questa è mia madre.|Das ist meine Mutter.|This is my mother.
I miei nonni abitano in campagna.|Meine Großeltern wohnen auf dem Land.|My grandparents live in the country.
Sei sposato?|Bist du verheiratet?|Are you married?
Come si chiama tua sorella?|Wie heißt deine Schwester?|What's your sister's name?`,
  gram: [
    ["h", TB("mein, dein, sein …", "my, your, his …")],
    ["table", { head: [TB("", ""), TB("männlich", "masc."), TB("weiblich", "fem."), TB("m. Plural", "m. plural"), TB("w. Plural", "f. plural")], rows: [
      [TB("mein", "my"), "il mio", "la mia", "i miei", "le mie"],
      [TB("dein", "your"), "il tuo", "la tua", "i tuoi", "le tue"],
      [TB("sein/ihr/Ihr", "his/her/your (formal)"), "il suo", "la sua", "i suoi", "le sue"],
      [TB("unser", "our"), "il nostro", "la nostra", "i nostri", "le nostre"],
      [TB("euer", "your (pl.)"), "il vostro", "la vostra", "i vostri", "le vostre"],
      [TB("ihr (Pl.)", "their"), "il loro", "la loro", "i loro", "le loro"]] }],
    ["p", TB("Das Possessivpronomen richtet sich nach dem <b>Besitz</b>, nicht nach dem Besitzer: <b>la sua macchina</b> = sein <i>oder</i> ihr Auto.", "The possessive agrees with the <b>thing owned</b>, not the owner: <b>la sua macchina</b> = his <i>or</i> her car.")],
    ["tip", TB("Bei <b>einem</b> Familienmitglied ohne Zusatz fällt der Artikel weg: <b>mia madre, tuo fratello</b>. Aber im Plural und mit <i>loro</i> bleibt er: <b>i miei fratelli, la loro figlia</b>.", "With <b>one</b> family member and no extra word, drop the article: <b>mia madre, tuo fratello</b>. But keep it in the plural and with <i>loro</i>: <b>i miei fratelli, la loro figlia</b>.")]
  ],
  th: "poss",
  drill: [
    ["___ madre è di Napoli.", ["Mia", "La mia", "Mio"], 0, TB("Ein Familienmitglied im Singular → kein Artikel.", "Singular family member → no article.")],
    ["___ genitori sono simpatici.", ["I miei", "Miei", "Le mie"], 0],
    ["Come si chiama ___ fratello?", ["tuo", "il tuo", "tua"], 0],
    ["Marco e ___ moglie abitano a Roma.", ["sua", "suo", "la sua"], 0],
    ["Questa è ___ macchina, Signora?", ["la Sua", "il Suo", "Sua"], 0],
    ["Ho due ___ e una figlia.", ["figli", "figlio", "figlie"], 0],
    ["Le mie sorelle sono ___ .", ["sposate", "sposati", "sposata"], 0]
  ],
  talk: { t: TB("Familienfotos", "Family photos"), scene: TB("Deine Kollegin Elena zeigt dir Fotos auf dem Handy und fragt nach deiner Familie.", "Your colleague Elena shows you photos on her phone and asks about your family."), who: "Elena", slots: { name: "Jonas" }, lines: `a|Guarda, questa è la mia famiglia. Questo è mio marito, Paolo.|Schau, das ist meine Familie. Das ist mein Mann, Paolo.|Look, this is my family. This is my husband, Paolo.
me|Che bella foto! E questi sono i tuoi figli?|Was für ein schönes Foto! Und sind das deine Kinder?|What a lovely photo! And are these your children?|Bella foto! Sono i tuoi figli?; Che bella! Questi sono i tuoi figli?
a|Sì, Matteo e Sofia. E tu, hai fratelli?|Ja, Matteo und Sofia. Und du, hast du Geschwister?|Yes, Matteo and Sofia. And you, do you have any siblings?
me|Sì, ho un fratello e una sorella.|Ja, ich habe einen Bruder und eine Schwester.|Yes, I have a brother and a sister.|Sì, un fratello e una sorella.; Ho un fratello e una sorella.
a|E come si chiama tuo fratello?|Und wie heißt dein Bruder?|And what's your brother's name?
me|Mio fratello si chiama {name}.|Mein Bruder heißt …|My brother's name is …|Si chiama {name}.
a|Abita in Germania?|Wohnt er in Deutschland?|Does he live in Germany?
me|Sì, abita a Berlino con sua moglie.|Ja, er wohnt mit seiner Frau in Berlin.|Yes, he lives in Berlin with his wife.|Sì, abita a Berlino con la moglie.
a|E i tuoi genitori?|Und deine Eltern?|And your parents?
me|I miei genitori abitano vicino a Monaco.|Meine Eltern wohnen in der Nähe von München.|My parents live near Munich.|I miei abitano vicino a Monaco.` }
});

lesson("A1", { id: "it-a1-06", t: TB("La mia giornata – Tagesablauf und Uhrzeit", "La mia giornata – Daily routine and time"),
  goal: TB("Du kannst deinen Tag beschreiben, die Uhrzeit sagen und reflexive Verben benutzen.", "You can describe your day, tell the time and use reflexive verbs."),
  words: `svegliarsi|aufwachen|to wake up|v|Mi sveglio alle sette.|Ich wache um sieben auf.|I wake up at seven.
alzarsi|aufstehen|to get up|v
farsi la doccia|duschen|to have a shower|v|Mi faccio la doccia dopo la palestra.|Ich dusche nach dem Fitnessstudio.|I have a shower after the gym.
vestirsi|sich anziehen|to get dressed|v
fare colazione|frühstücken|to have breakfast|v
andare al lavoro|zur Arbeit gehen|to go to work|v
pranzare|zu Mittag essen|to have lunch|v
tornare a casa|nach Hause kommen|to come home|v
cenare|zu Abend essen|to have dinner|v
andare a letto|ins Bett gehen|to go to bed|v|Di solito vado a letto a mezzanotte.|Normalerweise gehe ich um Mitternacht ins Bett.|I usually go to bed at midnight.
la mattina|der Morgen; morgens|the morning|n
il pomeriggio|der Nachmittag|the afternoon|n
la sera|der Abend|the evening|n
la notte|die Nacht|the night|n
presto|früh|early|adv
tardi|spät|late|adv
di solito|normalerweise|usually|adv
sempre|immer|always|adv
mai|nie|never|adv|Non mi alzo mai prima delle sette.|Ich stehe nie vor sieben auf.|I never get up before seven.
mezzogiorno|Mittag (12 Uhr)|midday|n
mezzanotte|Mitternacht|midnight|n
e mezza|halb (… Uhr dreißig)|half past|ph|Sono le otto e mezza.|Es ist halb neun.|It's half past eight.
e un quarto|Viertel nach|quarter past|ph
meno un quarto|Viertel vor|quarter to|ph`,
  say: `Che ore sono?|Wie spät ist es?|What time is it?
Sono le sette e mezza.|Es ist halb acht.|It's half past seven.
È l'una.|Es ist eins.|It's one o'clock.
A che ora ti alzi?|Um wie viel Uhr stehst du auf?|What time do you get up?
Mi alzo alle sei e un quarto.|Ich stehe um Viertel nach sechs auf.|I get up at quarter past six.
La sera mi rilasso sul divano.|Abends entspanne ich mich auf dem Sofa.|In the evening I relax on the sofa.
Non ho tempo per fare colazione.|Ich habe keine Zeit zu frühstücken.|I don't have time for breakfast.`,
  gram: [
    ["h", TB("Reflexive Verben", "Reflexive verbs")],
    ["p", TB("Das Reflexivpronomen steht <b>vor</b> dem Verb: <b>mi</b> alzo, <b>ti</b> alzi, <b>si</b> alza, <b>ci</b> alziamo, <b>vi</b> alzate, <b>si</b> alzano.", "The reflexive pronoun goes <b>before</b> the verb: <b>mi</b> alzo, <b>ti</b> alzi, <b>si</b> alza, <b>ci</b> alziamo, <b>vi</b> alzate, <b>si</b> alzano.")],
    ["conj", { verbs: ["alzarsi", "vestirsi"], tenses: ["Presente"] }],
    ["h", TB("Die Uhrzeit", "Telling the time")],
    ["table", { head: [TB("Uhrzeit", "time"), TB("Italienisch", "Italian")], rows: [
      ["1:00", "È l'una."], ["3:00", "Sono le tre."], ["3:15", "Sono le tre e un quarto."], ["3:30", "Sono le tre e mezza."], ["3:45", "Sono le quattro meno un quarto."], ["12:00", "È mezzogiorno. / È mezzanotte."]], say: 1 }],
    ["tip", TB("<b>Alle</b> + Uhrzeit = um: <b>alle otto</b> (um acht), aber <b>all'una</b> (um eins), <b>a mezzogiorno</b>.", "<b>Alle</b> + time = at: <b>alle otto</b> (at eight), but <b>all'una</b> (at one), <b>a mezzogiorno</b>.")]
  ],
  th: "reflexive",
  drill: [
    ["Io ___ alzo alle sette.", ["mi", "ti", "si"], 0],
    ["A che ora ___ svegli?", ["ti", "mi", "si"], 0],
    ["Noi ___ vestiamo in fretta.", ["ci", "vi", "si"], 0],
    ["Sono le otto ___ mezza.", ["e", "a", "di"], 0],
    ["___ l'una e dieci.", ["È", "Sono", "Ha"], 0],
    ["Vado a letto ___ undici.", ["alle", "a", "le"], 0],
    ["Marco si ___ la doccia. (fare)", "fa"],
    ["Voi vi ___ presto? (alzarsi)", "alzate"]
  ],
  talk: { t: TB("Wie sieht dein Tag aus?", "What's your day like?"), scene: TB("In der Mittagspause fragt dich dein Kollege Fabio nach deinem Tagesablauf.", "During the lunch break your colleague Fabio asks about your daily routine."), who: "Fabio", slots: { time: "sette" }, lines: `a|Sei sempre così in forma! A che ora ti alzi la mattina?|Du bist immer so fit! Um wie viel Uhr stehst du morgens auf?|You're always so fit! What time do you get up in the morning?
me|Mi alzo alle {time}.|Ich stehe um … auf.|I get up at …|Di solito mi alzo alle {time}.; Alle {time}.
a|E fai colazione a casa?|Und frühstückst du zu Hause?|And do you have breakfast at home?
me|No, faccio colazione al bar.|Nein, ich frühstücke in der Bar.|No, I have breakfast at the café.|No, di solito faccio colazione al bar.
a|E quando vai in palestra?|Und wann gehst du ins Fitnessstudio?|And when do you go to the gym?
me|Vado in palestra la sera, dopo il lavoro.|Ich gehe abends nach der Arbeit ins Studio.|I go to the gym in the evening, after work.|La sera, dopo il lavoro.; Dopo il lavoro vado in palestra.
a|Io invece la sera sono stanchissimo. A che ora vai a letto?|Ich bin abends dagegen total müde. Um wie viel Uhr gehst du ins Bett?|I'm exhausted in the evening, on the other hand. What time do you go to bed?
me|Di solito vado a letto alle undici.|Normalerweise gehe ich um elf ins Bett.|I usually go to bed at eleven.|Vado a letto alle undici.; Alle undici, di solito.
a|Bravo! Allora domani vengo in palestra con te.|Super! Dann komme ich morgen mit ins Studio.|Well done! Then I'll come to the gym with you tomorrow.
me|Perfetto, a domani!|Perfekt, bis morgen!|Perfect, see you tomorrow!|Ottimo, a domani!; Va bene, a domani!` }
});

lesson("A1", { id: "it-a1-07", t: TB("Il tempo libero – Hobbys und <i>piacere</i>", "Il tempo libero – Hobbies and <i>piacere</i>"),
  goal: TB("Du kannst über Hobbys sprechen, sagen, was dir gefällt, und Verben auf -ere/-ire benutzen.", "You can talk about hobbies, say what you like and use verbs in -ere/-ire."),
  words: `il tempo libero|die Freizeit|free time|n|Cosa fai nel tempo libero?|Was machst du in deiner Freizeit?|What do you do in your free time?
lo sport|der Sport|sport|n
andare in palestra|ins Fitnessstudio gehen|to go to the gym|v
correre|laufen; joggen|to run|v
nuotare|schwimmen|to swim|v
giocare a calcio|Fußball spielen|to play football|v
leggere|lesen|to read|v
ascoltare la musica|Musik hören|to listen to music|v
suonare la chitarra|Gitarre spielen|to play the guitar|v
guardare una serie|eine Serie schauen|to watch a series|v
cucinare|kochen|to cook|v
viaggiare|reisen|to travel|v
uscire con gli amici|mit Freunden ausgehen|to go out with friends|v
il fine settimana|das Wochenende|the weekend|n
spesso|oft|often|adv|Vado spesso al cinema.|Ich gehe oft ins Kino.|I often go to the cinema.
qualche volta|manchmal|sometimes|adv
preferire|lieber mögen; bevorzugen|to prefer|v
odiare|hassen|to hate|v
adorare|lieben; total gern mögen|to love; to adore|v
la passione|die Leidenschaft|the passion|n|La cucina è la mia passione.|Kochen ist meine Leidenschaft.|Cooking is my passion.`,
  say: `Mi piace leggere.|Ich lese gern.|I like reading.
Mi piace il calcio.|Ich mag Fußball.|I like football.
Mi piacciono i film italiani.|Ich mag italienische Filme.|I like Italian films.
Non mi piace correre.|Ich laufe nicht gern.|I don't like running.
Ti piace cucinare?|Kochst du gern?|Do you like cooking?
Preferisco il mare alla montagna.|Ich mag das Meer lieber als die Berge.|I prefer the sea to the mountains.
Anche a me!|Ich auch! (mir gefällt es auch)|Me too!
Neanche a me.|Mir auch nicht.|Me neither.`,
  gram: [
    ["h", TB("<i>piacere</i>: mi piace / mi piacciono", "<i>piacere</i>: mi piace / mi piacciono")],
    ["p", TB("Wörtlich: „Es gefällt mir.“ Das Ding ist das Subjekt: <b>Mi piace</b> + Singular oder Verb, <b>mi piacciono</b> + Plural. Wem? → <b>mi, ti, gli</b> (ihm), <b>le</b> (ihr/Ihnen), <b>ci, vi, gli</b>.", "Literally: \"It pleases me.\" The thing is the subject: <b>Mi piace</b> + singular or verb, <b>mi piacciono</b> + plural. To whom? → <b>mi, ti, gli</b> (him), <b>le</b> (her/you formal), <b>ci, vi, gli</b>.")],
    ["ex", [["Mi piace la pizza.", "Ich mag Pizza.", "I like pizza."], ["Mi piacciono le lingue.", "Ich mag Sprachen.", "I like languages."], ["A Luca piace nuotare.", "Luca schwimmt gern.", "Luca likes swimming."], ["Ti piacciono i gatti?", "Magst du Katzen?", "Do you like cats?"]]],
    ["h", TB("Verben auf -ere und -ire", "Verbs in -ere and -ire")],
    ["conj", { verbs: ["leggere", "dormire", "preferire"], tenses: ["Presente"] }],
    ["tip", TB("Manche -ire-Verben schieben <b>-isc-</b> ein (ich, du, er/sie, sie Pl.): prefer<b>isc</b>o, cap<b>isc</b>o, fin<b>isc</b>o.", "Some -ire verbs insert <b>-isc-</b> (I, you, he/she, they): prefer<b>isc</b>o, cap<b>isc</b>o, fin<b>isc</b>o.")]
  ],
  th: "presente", quiz: ["it-presente-reg"],
  drill: [
    ["Mi ___ la musica jazz.", ["piace", "piacciono", "piaci"], 0],
    ["Mi ___ i libri gialli.", ["piacciono", "piace", "piaccio"], 0],
    ["Ti ___ ballare?", ["piace", "piacciono", "piaci"], 0, TB("Verb (Infinitiv) → Singular: piace.", "A verb (infinitive) → singular: piace.")],
    ["A Giulia ___ piace il tennis.", ["le", "gli", "la"], 0],
    ["Io ___ il mare. (preferire)", "preferisco"],
    ["Tu ___ molto? (leggere)", "leggi"],
    ["Noi ___ fino alle nove. (dormire)", "dormiamo"],
    ["Loro ___ la lezione alle sei. (finire)", "finiscono"]
  ],
  talk: { t: TB("Smalltalk im Fitnessstudio", "Small talk at the gym"), scene: TB("Zwischen zwei Sätzen an der Hantelbank spricht dich Marco an.", "Between two sets at the bench press, Marco starts chatting with you."), who: "Marco", slots: { day: "lunedì" }, lines: `a|Scusa, quante serie hai ancora?|Entschuldige, wie viele Sätze hast du noch?|Sorry, how many sets have you got left?
me|Ancora due. Ci possiamo alternare, se vuoi.|Noch zwei. Wir können uns abwechseln, wenn du willst.|Two more. We can take turns if you like.|Ancora due serie. Se vuoi ci alterniamo.; Due. Possiamo alternarci, se vuoi.
a|Grazie, gentilissimo! Vieni spesso in palestra?|Danke, sehr nett! Kommst du oft ins Studio?|Thanks, very kind! Do you come to the gym often?
me|Sì, vengo quattro volte alla settimana.|Ja, ich komme viermal pro Woche.|Yes, I come four times a week.|Sì, quattro volte alla settimana.; Sì, abbastanza spesso.
a|Complimenti! E ti piace anche correre?|Respekt! Und läufst du auch gern?|Well done! And do you like running too?
me|No, non mi piace correre. Preferisco i pesi.|Nein, ich laufe nicht gern. Ich mag lieber Gewichte.|No, I don't like running. I prefer weights.|No, preferisco i pesi.; Non molto, preferisco i pesi.
a|Anche a me! E cosa fai nel tempo libero?|Ich auch! Und was machst du in deiner Freizeit?|Me too! And what do you do in your free time?
me|Mi piace cucinare e uscire con gli amici.|Ich koche gern und gehe gern mit Freunden aus.|I like cooking and going out with friends.|Cucino e esco con gli amici.; Mi piace cucinare e viaggiare.
a|Allora ci vediamo {day}! Io sono Marco.|Dann sehen wir uns am …! Ich bin Marco.|Then see you on …! I'm Marco.
me|Piacere, Marco! A presto!|Freut mich, Marco! Bis bald!|Nice to meet you, Marco! See you soon!|Piacere! A presto!` }
});

lesson("A1", { id: "it-a1-08", t: TB("In città – Orte und Wegbeschreibung", "In città – Places and directions"),
  goal: TB("Du kannst nach dem Weg fragen, einfache Wegbeschreibungen verstehen und c'è / ci sono benutzen.", "You can ask the way, understand simple directions and use c'è / ci sono."),
  words: `la stazione|der Bahnhof|the station|n|Scusi, dov'è la stazione?|Entschuldigung, wo ist der Bahnhof?|Excuse me, where's the station?
la fermata dell'autobus|die Bushaltestelle|the bus stop|n
la farmacia|die Apotheke|the pharmacy|n
il supermercato|der Supermarkt|the supermarket|n
la banca|die Bank|the bank|n
il bancomat|der Geldautomat|the cash machine|n
la piazza|der Platz|the square|n
la strada|die Straße|the road; the street|n
il museo|das Museum|the museum|n
la chiesa|die Kirche|the church|n
l'ospedale|das Krankenhaus|the hospital|n
a destra|rechts|on the right; right|adv|Giri a destra.|Biegen Sie rechts ab.|Turn right.
a sinistra|links|on the left; left|adv
dritto|geradeaus|straight on|adv|Vada sempre dritto.|Gehen Sie immer geradeaus.|Keep going straight on.
vicino|nah; in der Nähe|near; nearby|adv|C'è una farmacia qui vicino?|Gibt es hier in der Nähe eine Apotheke?|Is there a pharmacy near here?
lontano|weit|far|adv
all'angolo|an der Ecke|on the corner|ph
di fronte a|gegenüber von|opposite|ph
accanto a|neben|next to|ph
il semaforo|die Ampel|the traffic lights|n
l'incrocio|die Kreuzung|the crossroads|n
a piedi|zu Fuß|on foot|ph|Sono cinque minuti a piedi.|Es sind fünf Minuten zu Fuß.|It's five minutes on foot.`,
  say: `Scusi, dov'è la stazione?|Entschuldigung, wo ist der Bahnhof?|Excuse me, where is the station?
C'è un supermercato qui vicino?|Gibt es hier in der Nähe einen Supermarkt?|Is there a supermarket near here?
Ci sono due farmacie in questa strada.|In dieser Straße gibt es zwei Apotheken.|There are two pharmacies on this street.
Vada dritto e poi giri a sinistra.|Gehen Sie geradeaus und dann links.|Go straight on and then turn left.
È lontano?|Ist es weit?|Is it far?
È qui vicino, a cinque minuti a piedi.|Es ist hier in der Nähe, fünf Minuten zu Fuß.|It's near here, five minutes on foot.
Al semaforo giri a destra.|An der Ampel biegen Sie rechts ab.|At the traffic lights, turn right.`,
  gram: [
    ["h", TB("c'è / ci sono – es gibt", "c'è / ci sono – there is / there are")],
    ["ex", [["C'è un bar in piazza.", "Auf dem Platz gibt es eine Bar.", "There's a café in the square."], ["Ci sono tre musei.", "Es gibt drei Museen.", "There are three museums."], ["Non c'è problema.", "Kein Problem.", "No problem."]]],
    ["h", TB("Präpositionen mit Artikel", "Prepositions with the article")],
    ["p", TB("<b>a, da, di, in, su</b> verschmelzen mit dem bestimmten Artikel: a + il = <b>al</b>, a + la = <b>alla</b>, in + il = <b>nel</b>, in + la = <b>nella</b>, di + il = <b>del</b>.", "<b>a, da, di, in, su</b> merge with the definite article: a + il = <b>al</b>, a + la = <b>alla</b>, in + il = <b>nel</b>, in + la = <b>nella</b>, di + il = <b>del</b>.")],
    ["ex", [["Vado al supermercato.", "Ich gehe in den Supermarkt.", "I'm going to the supermarket."], ["La farmacia è accanto alla banca.", "Die Apotheke ist neben der Bank.", "The pharmacy is next to the bank."], ["Il museo è nella piazza principale.", "Das Museum ist am Hauptplatz.", "The museum is in the main square."]]],
    ["tip", TB("Wegbeschreibungen hörst du oft in der Lei-Form: <b>giri</b> (biegen Sie ab), <b>vada</b> (gehen Sie), <b>prenda</b> (nehmen Sie).", "You often hear directions in the formal form: <b>giri</b> (turn), <b>vada</b> (go), <b>prenda</b> (take).")]
  ],
  th: "prep", quiz: ["it-prep"],
  drill: [
    ["___ una farmacia qui vicino?", ["C'è", "Ci sono", "È"], 0],
    ["In centro ___ molti ristoranti.", ["ci sono", "c'è", "sono"], 0],
    ["Vado ___ stazione.", ["alla", "al", "nella"], 0],
    ["La banca è accanto ___ museo.", ["al", "alla", "allo"], 0],
    ["Il bar è ___ piazza.", ["in", "a", "su"], 0, TB("in piazza (ohne Artikel) – feste Wendung.", "in piazza (no article) – a fixed expression.")],
    ["Al semaforo ___ a destra. (girare, Lei)", "giri"],
    ["Il cinema è di fronte ___ chiesa.", ["alla", "la", "della"], 0]
  ],
  talk: { t: TB("Nach dem Weg fragen", "Asking the way"), scene: TB("Du bist in Verona und suchst den Bahnhof. Du sprichst eine Passantin an.", "You're in Verona looking for the station. You stop a passer-by."), who: "Signora Bianchi", slots: {}, lines: `me|Scusi, signora, dov'è la stazione?|Entschuldigung, wo ist der Bahnhof?|Excuse me, where is the station?|Scusi, sa dov'è la stazione?; Mi scusi, dov'è la stazione?
a|La stazione? Non è lontano. Vada dritto fino al semaforo.|Der Bahnhof? Nicht weit. Gehen Sie geradeaus bis zur Ampel.|The station? It's not far. Go straight on to the traffic lights.
me|Fino al semaforo, e poi?|Bis zur Ampel, und dann?|To the traffic lights, and then?|E poi?; Al semaforo, e poi?
a|Al semaforo giri a sinistra. La stazione è di fronte alla piazza.|An der Ampel links abbiegen. Der Bahnhof ist gegenüber vom Platz.|At the lights turn left. The station is opposite the square.
me|È lontano a piedi?|Ist es zu Fuß weit?|Is it far on foot?|È lontano?; Quanto ci vuole a piedi?
a|No, sono dieci minuti a piedi.|Nein, zehn Minuten zu Fuß.|No, it's ten minutes on foot.
me|C'è anche un bancomat vicino alla stazione?|Gibt es beim Bahnhof auch einen Geldautomaten?|Is there a cash machine near the station too?|C'è un bancomat lì vicino?
a|Sì, ce ne sono due, proprio accanto all'entrata.|Ja, es gibt zwei, direkt neben dem Eingang.|Yes, there are two, right next to the entrance.
me|Grazie mille, molto gentile!|Vielen Dank, sehr freundlich!|Thank you very much, very kind!|Grazie, gentilissima!; Grazie mille!` }
});
