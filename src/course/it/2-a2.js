/* Italiano A2 · 1–5 */
lesson("A2", { id: "it-a2-01", t: TB("Da bambino – Das Imperfetto", "Da bambino – The imperfetto"),
  goal: TB("Du kannst erzählen, wie etwas früher war, und Gewohnheiten in der Vergangenheit beschreiben.", "You can describe what things used to be like and talk about past habits."),
  words: `da bambino/a|als Kind|as a child|ph|Da bambino giocavo sempre a calcio.|Als Kind habe ich immer Fußball gespielt.|As a child I always played football.
da piccolo/a|als ich klein war|when I was little|ph
l'infanzia|die Kindheit|childhood|n
la scuola elementare|die Grundschule|primary school|n
il maestro / la maestra|der Lehrer / die Lehrerin (Grundschule)|the primary school teacher|n
il compagno di classe|der Klassenkamerad|the classmate|n
le vacanze estive|die Sommerferien|the summer holidays|n
la campagna|das Land (nicht Stadt)|the countryside|n|D'estate andavamo in campagna dai nonni.|Im Sommer fuhren wir zu den Großeltern aufs Land.|In summer we used to go to our grandparents' in the country.
il giocattolo|das Spielzeug|the toy|n
giocare a nascondino|Verstecken spielen|to play hide and seek|v
arrampicarsi|klettern|to climb|v
timido/a|schüchtern|shy|adj
vivace|lebhaft|lively|adj
tranquillo/a|ruhig|calm; quiet|adj
ogni estate|jeden Sommer|every summer|ph
una volta|früher; einmal|once; in the past|ph
di solito|normalerweise; gewöhnlich|usually|adv
mentre|während|while|x
ricordarsi|sich erinnern|to remember|v|Ti ricordi la tua prima maestra?|Erinnerst du dich an deine erste Lehrerin?|Do you remember your first teacher?
crescere|aufwachsen|to grow up|v
il ricordo|die Erinnerung|the memory|n
avere paura di|Angst haben vor|to be afraid of|ph`,
  say: `Dove sei cresciuto?|Wo bist du aufgewachsen?|Where did you grow up?
Da piccolo abitavo in un paesino in montagna.|Als ich klein war, wohnte ich in einem Bergdorf.|When I was little I lived in a mountain village.
Ogni domenica mangiavamo dai nonni.|Jeden Sonntag aßen wir bei den Großeltern.|Every Sunday we ate at our grandparents'.
Ero un bambino molto timido.|Ich war ein sehr schüchternes Kind.|I was a very shy child.
Mio padre lavorava in una fabbrica.|Mein Vater arbeitete in einer Fabrik.|My father worked in a factory.
Una volta qui c'era un cinema.|Früher war hier ein Kino.|There used to be a cinema here.
Avevo paura del buio.|Ich hatte Angst vor der Dunkelheit.|I was afraid of the dark.`,
  gram: [
    ["h", TB("Imperfetto: Bildung", "Imperfetto: forms")],
    ["p", TB("Stamm + <b>-avo / -evo / -ivo</b>. Fast alle Verben sind regelmäßig, auch <i>avere</i> (avevo) und <i>andare</i> (andavo). Ausnahmen: <b>essere</b> (ero), <b>fare</b> (facevo), <b>dire</b> (dicevo), <b>bere</b> (bevevo).", "Stem + <b>-avo / -evo / -ivo</b>. Almost all verbs are regular, even <i>avere</i> (avevo) and <i>andare</i> (andavo). Exceptions: <b>essere</b> (ero), <b>fare</b> (facevo), <b>dire</b> (dicevo), <b>bere</b> (bevevo).")],
    ["conj", { verbs: ["giocare", "essere", "fare"], tenses: ["Imperfetto"] }],
    ["h", TB("Wann Imperfetto?", "When to use the imperfetto?")],
    ["p", TB("Für <b>Gewohnheiten</b> (ogni estate, di solito, sempre), <b>Beschreibungen</b> (Wetter, Aussehen, Gefühle, Alter) und <b>Hintergründe</b>, die gerade andauerten.", "For <b>habits</b> (ogni estate, di solito, sempre), <b>descriptions</b> (weather, looks, feelings, age) and <b>background situations</b> that were going on.")],
    ["tip", TB("Merksatz: Imperfetto ist der Film, der läuft – das Passato prossimo ist das Foto eines Moments.", "Rule of thumb: the imperfetto is the film that keeps running – the passato prossimo is a snapshot of one moment.")]
  ],
  th: "imperfetto", quiz: ["it-imperfetto"], forms: { verbs: ["abitare", "avere", "essere", "fare", "andare", "leggere", "dormire"], tenses: ["Imperfetto"] },
  drill: [
    ["Da bambino ___ molto timido.", ["ero", "sono stato", "eri"], 0],
    ["Ogni estate ___ al mare con i miei.", ["andavamo", "siamo andati", "andiamo"], 0],
    ["Mia nonna ___ benissimo.", ["cucinava", "ha cucinato", "cucinavo"], 0],
    ["Quando ___ dieci anni, abitavo a Torino.", ["avevo", "ho avuto", "avevi"], 0],
    ["Tu cosa ___ il sabato? (fare)", "facevi"],
    ["Loro ___ sempre tardi. (arrivare)", "arrivavano"],
    ["Noi ___ in campagna. (vivere)", "vivevamo"]
  ],
  talk: { t: TB("Erinnerungen", "Memories"), scene: TB("Beim Abendessen erzählt dir deine Freundin Lucia von ihrer Kindheit in Sizilien und fragt nach deiner.", "Over dinner, your friend Lucia tells you about her childhood in Sicily and asks about yours."), who: "Lucia", slots: {}, lines: `a|Da bambina passavo tutte le estati da mia nonna a Siracusa. E tu, dove sei cresciuto?|Als Kind verbrachte ich alle Sommer bei meiner Oma in Syrakus. Und du, wo bist du aufgewachsen?|As a child I spent every summer at my grandmother's in Syracuse. And you, where did you grow up?
me|Sono cresciuto in un piccolo paese vicino a Stoccarda.|Ich bin in einem kleinen Ort bei Stuttgart aufgewachsen.|I grew up in a small village near Stuttgart.|Sono cresciuta in un piccolo paese vicino a Stoccarda.; Sono cresciuto in un paesino vicino a Stoccarda.
a|E com'eri da piccolo? Tranquillo?|Und wie warst du als Kind? Ruhig?|And what were you like as a child? Quiet?
me|No, ero molto vivace. Giocavo sempre fuori con i miei amici.|Nein, ich war sehr lebhaft. Ich spielte immer draußen mit meinen Freunden.|No, I was very lively. I always played outside with my friends.|No, ero vivace e giocavo sempre fuori.; Ero molto vivace, giocavo sempre fuori con gli amici.
a|Che carino! E cosa facevate d'estate?|Wie süß! Und was habt ihr im Sommer gemacht?|How sweet! And what did you do in the summer?
me|Di solito andavamo in vacanza al lago.|Normalerweise fuhren wir an den See in den Urlaub.|We usually went on holiday to the lake.|D'estate andavamo al lago.; Di solito andavamo al lago in vacanza.
a|Io invece avevo paura dell'acqua! Mio fratello nuotava benissimo.|Ich hatte dagegen Angst vor dem Wasser! Mein Bruder schwamm super.|I was afraid of the water, on the other hand! My brother swam really well.
me|Davvero? E adesso nuoti?|Wirklich? Und schwimmst du jetzt?|Really? And do you swim now?|Davvero? Adesso sai nuotare?
a|Sì, ho imparato a vent'anni!|Ja, ich habe es mit zwanzig gelernt!|Yes, I learnt at twenty!` }
});

lesson("A2", { id: "it-a2-02", t: TB("Cosa è successo? – Passato prossimo oder Imperfetto", "Cosa è successo? – Passato prossimo or imperfetto"),
  goal: TB("Du kannst eine kleine Geschichte erzählen und Hintergrund und Ereignis unterscheiden.", "You can tell a short story and distinguish background from events."),
  words: `succedere|passieren|to happen|v|Cosa è successo?|Was ist passiert?|What happened?
all'improvviso|plötzlich|suddenly|adv|All'improvviso è andata via la luce.|Plötzlich ist der Strom ausgefallen.|Suddenly the power went off.
mentre|während|while|x
quando|als; wenn|when|x
a un certo punto|irgendwann; auf einmal|at some point|ph
alla fine|am Ende; schließlich|in the end|ph
per fortuna|zum Glück|luckily|ph
purtroppo|leider|unfortunately|adv
perdere|verlieren; verpassen|to lose; to miss|v|Ho perso il treno.|Ich habe den Zug verpasst.|I missed the train.
dimenticare|vergessen|to forget|v
rompersi|kaputtgehen; sich brechen|to break|v|Mi si è rotto il telefono.|Mein Handy ist kaputtgegangen.|My phone broke.
cadere|fallen; hinfallen|to fall|v
la pioggia|der Regen|the rain|n
piovere|regnen|to rain|v
il portafoglio|der Geldbeutel|the wallet|n
le chiavi|die Schlüssel|the keys|n
lo sciopero|der Streik|the strike|n
l'incidente|der Unfall|the accident|n
la polizia|die Polizei|the police|n
preoccupato/a|besorgt|worried|adj
spaventato/a|erschrocken|frightened|adj
che sfortuna!|so ein Pech!|what bad luck!|ph
che fortuna!|so ein Glück!|how lucky!|ph`,
  say: `Mentre aspettavo l'autobus, ha cominciato a piovere.|Während ich auf den Bus wartete, fing es an zu regnen.|While I was waiting for the bus, it started to rain.
Quando sono arrivato, il negozio era già chiuso.|Als ich ankam, war der Laden schon zu.|When I arrived, the shop was already closed.
Ho perso il portafoglio in metro.|Ich habe den Geldbeutel in der U-Bahn verloren.|I lost my wallet on the underground.
C'era uno sciopero dei treni.|Es gab einen Bahnstreik.|There was a train strike.
Per fortuna nessuno si è fatto male.|Zum Glück hat sich niemand verletzt.|Luckily nobody got hurt.
Non ci posso credere!|Ich kann es nicht glauben!|I can't believe it!
E poi cosa hai fatto?|Und was hast du dann gemacht?|And then what did you do?`,
  gram: [
    ["h", TB("Hintergrund + Ereignis", "Background + event")],
    ["table", { head: [TB("Imperfetto (Hintergrund)", "imperfetto (background)"), TB("Passato prossimo (Ereignis)", "passato prossimo (event)")], rows: [
      ["Mentre <b>dormivo</b>, …", "… <b>è suonato</b> il telefono."], ["<b>Era</b> tardi e <b>pioveva</b>.", "<b>Ho preso</b> un taxi."], ["<b>Avevo</b> fame, …", "… così <b>ho ordinato</b> una pizza."]] }],
    ["p", TB("Frage dich: Ist es eine <b>Situation</b> (Wie war es? Was lief gerade?) → Imperfetto. Ist es eine <b>abgeschlossene Handlung</b> (Was ist dann passiert?) → Passato prossimo.", "Ask yourself: is it a <b>situation</b> (What was it like? What was going on?) → imperfetto. Is it a <b>completed action</b> (What happened next?) → passato prossimo.")],
    ["tip", TB("Signalwörter: <i>mentre, di solito, sempre, ogni giorno</i> → Imperfetto. <i>all'improvviso, a un certo punto, ieri, una volta (einmal), poi</i> → Passato prossimo.", "Signal words: <i>mentre, di solito, sempre, ogni giorno</i> → imperfetto. <i>all'improvviso, a un certo punto, ieri, una volta (once), poi</i> → passato prossimo.")]
  ],
  th: "ppimp", quiz: ["it-pp-imp"],
  drill: [
    ["Mentre ___ la doccia, è arrivato un messaggio.", ["facevo", "ho fatto", "faccio"], 0],
    ["Ieri sera ___ un film bellissimo.", ["ho visto", "vedevo", "vedo"], 0],
    ["___ freddo, quindi ho messo il cappotto.", ["Faceva", "Ha fatto", "Fa"], 0],
    ["All'improvviso ___ la luce.", ["è andata via", "andava via", "va via"], 0],
    ["Quando ero piccolo, ___ sempre al parco.", ["andavo", "sono andato", "vado"], 0],
    ["Purtroppo ___ il treno delle otto. (perdere, io)", "ho perso"],
    ["Non sono uscito perché ___ . (piovere)", "pioveva"]
  ],
  talk: { t: TB("Ein chaotischer Tag", "A chaotic day"), scene: TB("Du kommst zu spät zum Treffen mit Alessandro und erklärst, was passiert ist.", "You're late meeting Alessandro and explain what happened."), who: "Alessandro", slots: {}, lines: `a|Finalmente! Ti aspetto da mezz'ora. Cosa è successo?|Endlich! Ich warte seit einer halben Stunde auf dich. Was ist passiert?|Finally! I've been waiting for you for half an hour. What happened?
me|Scusa! Stamattina ho perso il treno.|Entschuldige! Heute Morgen habe ich den Zug verpasst.|Sorry! This morning I missed the train.|Scusami, ho perso il treno stamattina.
a|Davvero? Come mai?|Echt? Wie das?|Really? How come?
me|Mentre uscivo di casa, mi sono accorto che non avevo le chiavi.|Als ich aus dem Haus ging, merkte ich, dass ich die Schlüssel nicht hatte.|As I was leaving the house, I realised I didn't have my keys.|Mentre uscivo, ho visto che non avevo le chiavi.
a|Che sfortuna! E poi?|So ein Pech! Und dann?|What bad luck! And then?
me|Le ho cercate per dieci minuti. Erano in cucina!|Ich habe sie zehn Minuten gesucht. Sie lagen in der Küche!|I looked for them for ten minutes. They were in the kitchen!|Le ho cercate dappertutto. Erano in cucina.
a|Ahah, classico! E il treno?|Haha, typisch! Und der Zug?|Haha, classic! And the train?
me|Quando sono arrivato in stazione, il treno era già partito.|Als ich am Bahnhof ankam, war der Zug schon weg.|When I got to the station, the train had already left.|Quando sono arrivata, il treno era già partito.
a|Va be', l'importante è che sei qui. Prendiamo un caffè?|Na gut, Hauptsache du bist da. Trinken wir einen Kaffee?|Oh well, the main thing is you're here. Shall we have a coffee?
me|Sì, offro io per farmi perdonare!|Ja, ich lade dich ein, als Entschuldigung!|Yes, it's on me to make up for it!|Volentieri, offro io!` }
});

lesson("A2", { id: "it-a2-03", t: TB("Progetti – Futuro und Wetter", "Progetti – Future and weather"),
  goal: TB("Du kannst über Pläne und Vermutungen sprechen und das Wetter beschreiben.", "You can talk about plans and guesses and describe the weather."),
  words: `il progetto|das Vorhaben; das Projekt|the plan; the project|n
l'anno prossimo|nächstes Jahr|next year|ph|L'anno prossimo andrò in Sicilia.|Nächstes Jahr fahre ich nach Sizilien.|Next year I'll go to Sicily.
fra due settimane|in zwei Wochen|in two weeks|ph
dopodomani|übermorgen|the day after tomorrow|adv
il tempo|das Wetter; die Zeit|the weather; time|n|Che tempo fa oggi?|Wie ist das Wetter heute?|What's the weather like today?
fa bel tempo|das Wetter ist schön|the weather is nice|ph
fa brutto tempo|das Wetter ist schlecht|the weather is bad|ph
fa caldo|es ist heiß|it's hot|ph
fa freddo|es ist kalt|it's cold|ph
c'è il sole|die Sonne scheint|it's sunny|ph
è nuvoloso|es ist bewölkt|it's cloudy|ph
piove|es regnet|it's raining|ph
nevica|es schneit|it's snowing|ph
c'è vento|es ist windig|it's windy|ph
le previsioni del tempo|die Wettervorhersage|the weather forecast|n
la temperatura|die Temperatur|the temperature|n
il grado|das Grad|the degree|n
forse|vielleicht|maybe|adv
probabilmente|wahrscheinlich|probably|adv
sperare|hoffen|to hope|v|Spero che domani faccia bello.|Ich hoffe, morgen ist schönes Wetter.|I hope the weather's nice tomorrow.
cambiare lavoro|den Job wechseln|to change jobs|v
trasferirsi|umziehen (in andere Stadt)|to move (to another city)|v`,
  say: `Cosa farai quest'estate?|Was machst du diesen Sommer?|What will you do this summer?
Quest'estate andrò in Puglia con la mia ragazza.|Diesen Sommer fahre ich mit meiner Freundin nach Apulien.|This summer I'm going to Puglia with my girlfriend.
Domani pioverà tutto il giorno.|Morgen regnet es den ganzen Tag.|Tomorrow it will rain all day.
Saranno le otto.|Es wird wohl acht Uhr sein.|It must be about eight.
Quando avrò tempo, imparerò a suonare il piano.|Wenn ich Zeit habe, lerne ich Klavier spielen.|When I have time, I'll learn to play the piano.
Ci sono trenta gradi!|Es hat dreißig Grad!|It's thirty degrees!
Speriamo bene!|Hoffen wir das Beste!|Let's hope for the best!`,
  gram: [
    ["h", TB("Futuro semplice", "Simple future")],
    ["p", TB("Infinitiv ohne -e + Endung: parler<b>ò</b>, parler<b>ai</b>, parler<b>à</b>, parler<b>emo</b>, parler<b>ete</b>, parler<b>anno</b>. Bei -are wird a zu e: parlare → <b>parler</b>ò.", "Infinitive without -e + ending: parler<b>ò</b>, parler<b>ai</b>, parler<b>à</b>, parler<b>emo</b>, parler<b>ete</b>, parler<b>anno</b>. In -are verbs the a becomes e: parlare → <b>parler</b>ò.")],
    ["conj", { verbs: ["parlare", "essere", "andare"], tenses: ["Futuro semplice"] }],
    ["p", TB("Im Alltag benutzt man für die nahe Zukunft oft einfach das Präsens: <b>Domani vado a Roma.</b> Das Futur drückt auch <b>Vermutungen</b> aus: <b>Sarà stanco.</b> (Er ist wohl müde.)", "In everyday speech the present is often used for the near future: <b>Domani vado a Roma.</b> The future also expresses <b>guesses</b>: <b>Sarà stanco.</b> (He's probably tired.)")],
    ["tip", TB("Wetter mit <b>fare</b>: fa caldo, fa freddo, fa bel tempo. Aber: <b>c'è</b> il sole, <b>c'è</b> vento, <b>piove</b>, <b>nevica</b>.", "Weather with <b>fare</b>: fa caldo, fa freddo, fa bel tempo. But: <b>c'è</b> il sole, <b>c'è</b> vento, <b>piove</b>, <b>nevica</b>.")]
  ],
  th: "futuro", quiz: ["it-futuro"], forms: { verbs: ["parlare", "prendere", "partire", "essere", "avere", "andare", "fare", "venire"], tenses: ["Futuro semplice"] },
  drill: [
    ["L'anno prossimo ___ a Milano.", ["mi trasferirò", "mi trasferivo", "mi sono trasferito"], 0],
    ["Domani ___ bel tempo.", ["farà", "fa stato", "faceva"], 0],
    ["Non trovo le chiavi. ___ in macchina, forse.", ["Saranno", "Sono state", "Erano"], 0, TB("Vermutung → Futur: Sie werden wohl im Auto sein.", "A guess → future: They're probably in the car.")],
    ["Oggi ___ il sole.", ["c'è", "fa", "è"], 0],
    ["In inverno a Milano ___ freddo.", ["fa", "c'è", "è"], 0],
    ["Noi ___ alle nove. (partire)", "partiremo"],
    ["Tu ___ a cena da noi? (venire)", "verrai"]
  ],
  talk: { t: TB("Sommerpläne", "Summer plans"), scene: TB("Du telefonierst mit deinem Freund Andrea und ihr plant den Sommer.", "You're on the phone with your friend Andrea, planning the summer."), who: "Andrea", slots: {}, lines: `a|Allora, cosa farai quest'estate?|Also, was machst du diesen Sommer?|So, what are you going to do this summer?
me|Ad agosto andrò in Sardegna per due settimane.|Im August fahre ich zwei Wochen nach Sardinien.|In August I'm going to Sardinia for two weeks.|Ad agosto vado in Sardegna per due settimane.; Andrò in Sardegna ad agosto.
a|Che bello! Da solo?|Wie schön! Allein?|How lovely! On your own?
me|No, con degli amici. Affitteremo una casa vicino al mare.|Nein, mit Freunden. Wir mieten ein Haus am Meer.|No, with some friends. We'll rent a house near the sea.|No, con amici. Affittiamo una casa al mare.
a|Fantastico. Ma ad agosto farà un caldo terribile!|Fantastisch. Aber im August wird es schrecklich heiß!|Fantastic. But in August it'll be terribly hot!
me|Non importa, io adoro il caldo. E tu cosa farai?|Egal, ich liebe die Hitze. Und was machst du?|Never mind, I love the heat. And what will you do?|Non fa niente, amo il caldo. E tu?
a|Io forse cambierò lavoro, quindi non so ancora.|Ich wechsle vielleicht den Job, deshalb weiß ich es noch nicht.|I might change jobs, so I don't know yet.
me|Davvero? Quando lo saprai?|Wirklich? Wann weißt du es?|Really? When will you know?|Ah sì? Quando lo saprai?
a|Probabilmente a fine mese. Ti farò sapere!|Wahrscheinlich Ende des Monats. Ich sag dir Bescheid!|Probably at the end of the month. I'll let you know!
me|In bocca al lupo!|Viel Glück! (wörtl. In den Rachen des Wolfes)|Good luck!|In bocca al lupo, allora!` }
});

lesson("A2", { id: "it-a2-04", t: TB("Al lavoro – Beruf, Büro, Telefon", "Al lavoro – Job, office, phone"),
  goal: TB("Du kannst über deinen Beruf sprechen, formell telefonieren und sagen, was du gerade tust.", "You can talk about your job, make formal phone calls and say what you're doing right now."),
  words: `il lavoro|die Arbeit; der Job|the work; the job|n|Che lavoro fai?|Was machst du beruflich?|What do you do for a living?
l'ufficio|das Büro|the office|n
il/la collega|der/die Kollege/Kollegin|the colleague|n
il capo|der Chef|the boss|n
la riunione|die Besprechung; das Meeting|the meeting|n|Ho una riunione alle tre.|Ich habe um drei ein Meeting.|I have a meeting at three.
l'azienda|die Firma; das Unternehmen|the company|n
il cliente|der Kunde|the client; the customer|n
lo stipendio|das Gehalt|the salary|n
il contratto|der Vertrag|the contract|n
l'ingegnere|der Ingenieur|the engineer|n
l'impiegato/a|der/die Angestellte|the employee; the clerk|n
il medico|der Arzt|the doctor|n
l'avvocato|der Anwalt|the lawyer|n
lo studente / la studentessa|der Student / die Studentin|the student|n
lavorare in proprio|selbständig sein|to be self-employed|v
fare uno stage|ein Praktikum machen|to do an internship|v
la scadenza|die Frist; die Deadline|the deadline|n
il messaggio|die Nachricht|the message|n
richiamare|zurückrufen|to call back|v|La richiamo più tardi.|Ich rufe Sie später zurück.|I'll call you back later.
occupato/a|beschäftigt; besetzt|busy; engaged|adj
attendere in linea|in der Leitung bleiben|to hold the line|ph
pronto?|hallo? (am Telefon)|hello? (on the phone)|ph`,
  say: `Faccio l'ingegnere in un'azienda di Monaco.|Ich bin Ingenieur in einer Firma in München.|I'm an engineer at a company in Munich.
Lavoro nel marketing.|Ich arbeite im Marketing.|I work in marketing.
In questo momento sto lavorando a un progetto nuovo.|Im Moment arbeite ich an einem neuen Projekt.|At the moment I'm working on a new project.
Pronto, parlo con l'ufficio vendite?|Hallo, spreche ich mit dem Vertrieb?|Hello, am I speaking to the sales office?
Vorrei parlare con la dottoressa Ferri.|Ich möchte mit Frau Dr. Ferri sprechen.|I'd like to speak to Dr Ferri.
In questo momento è in riunione.|Sie ist gerade in einer Besprechung.|She's in a meeting at the moment.
Posso lasciare un messaggio?|Kann ich eine Nachricht hinterlassen?|Can I leave a message?`,
  gram: [
    ["h", TB("stare + Gerundium: gerade etwas tun", "stare + gerund: doing something right now")],
    ["p", TB("<b>sto, stai, sta, stiamo, state, stanno</b> + Gerundium. Gerundium: -are → <b>-ando</b>, -ere/-ire → <b>-endo</b>. Unregelmäßig: fare → <b>facendo</b>, dire → <b>dicendo</b>, bere → <b>bevendo</b>.", "<b>sto, stai, sta, stiamo, state, stanno</b> + gerund. Gerund: -are → <b>-ando</b>, -ere/-ire → <b>-endo</b>. Irregular: fare → <b>facendo</b>, dire → <b>dicendo</b>, bere → <b>bevendo</b>.")],
    ["ex", [["Sto lavorando.", "Ich arbeite gerade.", "I'm working."], ["Cosa stai facendo?", "Was machst du gerade?", "What are you doing?"], ["Stanno scrivendo un'email.", "Sie schreiben gerade eine E-Mail.", "They're writing an email."]]],
    ["h", TB("Berufe mit <i>fare</i>", "Jobs with <i>fare</i>")],
    ["p", TB("<b>Faccio l'ingegnere</b> oder <b>Sono ingegnere</b> – beides heißt: Ich bin Ingenieur. Mit <i>fare</i> steht der Artikel.", "<b>Faccio l'ingegnere</b> or <b>Sono ingegnere</b> – both mean I'm an engineer. With <i>fare</i> you use the article.")],
    ["tip", TB("Am Telefon im Beruf siezt man: <b>La</b> richiamo (ich rufe <i>Sie</i> zurück), <b>Le</b> mando un'email (ich schicke <i>Ihnen</i> …). Groß geschrieben in Briefen, im Gespräch egal.", "On business calls you use the formal form: <b>La</b> richiamo (I'll call <i>you</i> back), <b>Le</b> mando un'email (I'll send <i>you</i> …).")]
  ],
  th: "strutture",
  drill: [
    ["Non posso parlare, sto ___ .", ["guidando", "guidato", "guidare"], 0],
    ["Cosa stai ___ ? (fare)", "facendo"],
    ["Loro stanno ___ la presentazione. (preparare)", "preparando"],
    ["___ l'avvocato da dieci anni.", ["Faccio", "Sono", "Lavoro"], 0],
    ["Il dottor Bassi è ___ , può richiamare?", ["occupato", "occupata", "lavoro"], 0],
    ["La ___ domani mattina. (richiamare, io)", "richiamo"],
    ["Ho una ___ con un cliente alle dieci.", ["riunione", "scadenza", "stipendio"], 0]
  ],
  talk: { t: TB("Ein Geschäftsanruf", "A business call"), scene: TB("Du rufst bei der Firma Ferri & Co. in Turin an und möchtest Herrn Conti sprechen.", "You phone the company Ferri & Co. in Turin and want to speak to Mr Conti."), who: "Segretaria", slots: { name: "Weber" }, lines: `a|Ferri e Co., buongiorno!|Ferri & Co., guten Tag!|Ferri & Co., good morning!
me|Buongiorno, sono {name} della ditta Siemens. Vorrei parlare con il signor Conti.|Guten Tag, hier ist … von der Firma Siemens. Ich möchte Herrn Conti sprechen.|Good morning, this is … from Siemens. I'd like to speak to Mr Conti.|Buongiorno, sono {name}. Posso parlare con il signor Conti?
a|Un attimo, prego. Mi dispiace, il signor Conti è in riunione.|Einen Moment, bitte. Tut mir leid, Herr Conti ist in einer Besprechung.|One moment, please. I'm sorry, Mr Conti is in a meeting.
me|Posso lasciare un messaggio?|Kann ich eine Nachricht hinterlassen?|Can I leave a message?|Allora posso lasciare un messaggio?
a|Certo, mi dica.|Natürlich, bitte.|Of course, go ahead.
me|Può dirgli che ho ricevuto il contratto e lo sto controllando?|Können Sie ihm sagen, dass ich den Vertrag bekommen habe und ihn gerade prüfe?|Could you tell him that I've received the contract and I'm checking it?|Gli dica che ho ricevuto il contratto e lo sto controllando.
a|Senz'altro. Vuole essere richiamato?|Selbstverständlich. Möchten Sie zurückgerufen werden?|Certainly. Would you like him to call you back?
me|Sì, grazie. Il mio numero è zero zero quattro nove, otto nove, uno due tre.|Ja, danke. Meine Nummer ist 0049 89 123.|Yes, please. My number is 0049 89 123.|Sì, grazie. Il numero è zero zero quattro nove otto nove uno due tre.
a|Perfetto. Glielo dico appena finisce la riunione.|Perfekt. Ich sage es ihm, sobald die Besprechung vorbei ist.|Perfect. I'll tell him as soon as the meeting's over.
me|Grazie mille, buona giornata!|Vielen Dank, schönen Tag noch!|Thank you very much, have a nice day!|Grazie, arrivederci!` }
});

lesson("A2", { id: "it-a2-05", t: TB("Dal medico – Körper, Beschwerden, Imperativ", "Dal medico – Body, symptoms, imperative"),
  goal: TB("Du kannst sagen, was dir wehtut, beim Arzt Beschwerden beschreiben und Ratschläge verstehen.", "You can say what hurts, describe symptoms at the doctor's and understand advice."),
  words: `la testa|der Kopf|the head|n|Ho mal di testa.|Ich habe Kopfschmerzen.|I have a headache.
la gola|der Hals (innen)|the throat|n
la pancia|der Bauch|the stomach; the belly|n
la schiena|der Rücken|the back|n
il braccio (le braccia)|der Arm (die Arme)|the arm|n
la gamba|das Bein|the leg|n
il ginocchio|das Knie|the knee|n
il piede|der Fuß|the foot|n
la mano (le mani)|die Hand (die Hände)|the hand|n
l'occhio|das Auge|the eye|n
la febbre|das Fieber|fever; temperature|n
il raffreddore|die Erkältung; der Schnupfen|the cold|n
la tosse|der Husten|the cough|n
l'influenza|die Grippe|the flu|n
la ricetta|das Rezept|the prescription|n
la medicina|das Medikament|the medicine|n
la pastiglia|die Tablette|the tablet|n
il dolore|der Schmerz|the pain|n
fare male|wehtun|to hurt|v|Mi fa male la schiena.|Mir tut der Rücken weh.|My back hurts.
riposare|sich ausruhen|to rest|v
guarire|gesund werden; heilen|to get better; to heal|v
stare male|sich schlecht fühlen|to feel ill|v
il pronto soccorso|die Notaufnahme|A&E; emergency room|n`,
  say: `Non mi sento bene.|Ich fühle mich nicht gut.|I don't feel well.
Mi fa male la gola.|Mir tut der Hals weh.|My throat hurts.
Mi fanno male le gambe.|Mir tun die Beine weh.|My legs hurt.
Ho la febbre da due giorni.|Ich habe seit zwei Tagen Fieber.|I've had a temperature for two days.
Prenda queste pastiglie due volte al giorno.|Nehmen Sie diese Tabletten zweimal täglich.|Take these tablets twice a day.
Resti a letto e beva molta acqua.|Bleiben Sie im Bett und trinken Sie viel Wasser.|Stay in bed and drink plenty of water.
Guarisci presto!|Gute Besserung!|Get well soon!`,
  gram: [
    ["h", TB("<i>mi fa male</i> / <i>mi fanno male</i>", "<i>mi fa male</i> / <i>mi fanno male</i>")],
    ["p", TB("Wie <i>piacere</i>: Das schmerzende Körperteil ist das Subjekt. <b>Mi fa male</b> la testa – <b>mi fanno male</b> i piedi.", "Like <i>piacere</i>: the part that hurts is the subject. <b>Mi fa male</b> la testa – <b>mi fanno male</b> i piedi.")],
    ["h", TB("Imperativ: tu und Lei", "Imperative: tu and Lei")],
    ["table", { head: [TB("", ""), "tu", "Lei", "voi"], rows: [["prendere", "prendi", "prenda", "prendete"], ["riposare", "riposa", "riposi", "riposate"], ["dormire", "dormi", "dorma", "dormite"], ["fare", "fa' / fai", "faccia", "fate"], ["bere", "bevi", "beva", "bevete"]] }],
    ["p", TB("Verneinung bei <i>tu</i>: <b>non + Infinitiv</b>: <b>Non preoccuparti!</b> – <b>Non toccarlo!</b> Bei Lei/voi einfach <b>non</b> davor: <b>Non si preoccupi.</b>", "Negative with <i>tu</i>: <b>non + infinitive</b>: <b>Non preoccuparti!</b> – <b>Non toccarlo!</b> With Lei/voi just put <b>non</b> in front: <b>Non si preoccupi.</b>")],
    ["tip", TB("Bei Lei sind die Endungen „vertauscht“: -are → <b>-i</b> (riposi), -ere/-ire → <b>-a</b> (prenda, dorma).", "With Lei the endings are \"swapped\": -are → <b>-i</b> (riposi), -ere/-ire → <b>-a</b> (prenda, dorma).")]
  ],
  th: "imperativo", quiz: ["it-imperativo"],
  drill: [
    ["Mi ___ male la testa.", ["fa", "fanno", "fai"], 0],
    ["Mi ___ male gli occhi.", ["fanno", "fa", "fate"], 0],
    ["Signora, ___ queste pastiglie dopo i pasti.", ["prenda", "prendi", "prende"], 0],
    ["Marco, ___ a letto e riposati!", ["resta", "resti", "restare"], 0],
    ["Non ___ , non è niente di grave! (preoccuparsi, tu)", "preoccuparti"],
    ["Ho mal ___ gola.", ["di", "a", "alla"], 0],
    ["Dottore, ho la ___ a trentotto.", ["febbre", "tosse", "ricetta"], 0]
  ],
  talk: { t: TB("In der Arztpraxis", "At the doctor's"), scene: TB("Du bist im Urlaub in Lecce krank geworden und gehst zur Ärztin, Dottoressa Greco.", "You got ill on holiday in Lecce and see the doctor, Dr Greco."), who: "Dottoressa Greco", slots: {}, lines: `a|Buongiorno, si accomodi. Cosa si sente?|Guten Tag, nehmen Sie Platz. Was fehlt Ihnen?|Good morning, take a seat. What seems to be the problem?
me|Buongiorno, dottoressa. Mi fa male la gola e ho la tosse.|Guten Tag, Frau Doktor. Mir tut der Hals weh und ich habe Husten.|Good morning, doctor. My throat hurts and I have a cough.|Ho mal di gola e la tosse.; Mi fa male la gola e ho anche la tosse.
a|Da quanto tempo?|Seit wann?|Since when?
me|Da tre giorni. Ieri sera avevo anche la febbre.|Seit drei Tagen. Gestern Abend hatte ich auch Fieber.|For three days. Last night I had a temperature too.|Da tre giorni, e ieri avevo la febbre.
a|Vediamo… È un'influenza. È allergico a qualche medicina?|Schauen wir mal … Das ist eine Grippe. Sind Sie gegen Medikamente allergisch?|Let's see… It's flu. Are you allergic to any medicine?
me|No, non sono allergico a niente.|Nein, ich bin gegen nichts allergisch.|No, I'm not allergic to anything.|No, non ho allergie.; No, non sono allergica a niente.
a|Bene. Prenda queste pastiglie tre volte al giorno e resti a letto.|Gut. Nehmen Sie diese Tabletten dreimal täglich und bleiben Sie im Bett.|Good. Take these tablets three times a day and stay in bed.
me|Devo prenderle prima o dopo i pasti?|Muss ich sie vor oder nach dem Essen nehmen?|Should I take them before or after meals?|Le prendo prima o dopo mangiato?
a|Dopo i pasti. E beva molta acqua. Ecco la ricetta.|Nach dem Essen. Und trinken Sie viel. Hier ist das Rezept.|After meals. And drink plenty of water. Here's the prescription.
me|Grazie mille, dottoressa. Arrivederci!|Vielen Dank, Frau Doktor. Auf Wiedersehen!|Thank you very much, doctor. Goodbye!|Grazie, arrivederci!` }
});
