/* Français A2 · 1–3 */
lesson("A2", { id: "fr-a2-01", t: TB("Quand j'étais petit – Das Imparfait", "Quand j'étais petit – The imperfect"),
  goal: TB("Du kannst von deiner Kindheit erzählen und beschreiben, wie es früher war.", "You can talk about your childhood and describe how things used to be."),
  words: `l'enfance|die Kindheit (f)|childhood|n|J'ai eu une enfance heureuse.|Ich hatte eine glückliche Kindheit.|I had a happy childhood.
quand j'étais petit|als ich klein war|when I was little|ph
grandir|aufwachsen; wachsen|to grow up|v|J'ai grandi à la campagne.|Ich bin auf dem Land aufgewachsen.|I grew up in the countryside.
la campagne|das Land (nicht Stadt)|the countryside|n
le village|das Dorf|the village|n
l'école primaire|die Grundschule (f)|primary school|n
l'instituteur|der Grundschullehrer (m)|the primary school teacher|n
le jouet|das Spielzeug|the toy|n
jouer|spielen|to play|v
grimper aux arbres|auf Bäume klettern|to climb trees|v
avoir peur de|Angst haben vor|to be afraid of|v|J'avais peur du noir.|Ich hatte Angst im Dunkeln.|I was afraid of the dark.
timide|schüchtern|shy|adj
sage|brav|well-behaved|adj
sévère|streng|strict|adj
les vacances|die Ferien|the holidays|n|Chaque été, nous allions à la mer.|Jeden Sommer fuhren wir ans Meer.|Every summer we went to the seaside.
chaque été|jeden Sommer|every summer|ph
autrefois|früher|in the past|adv
maintenant|jetzt|now|adv
se souvenir de|sich erinnern an|to remember|v|Tu te souviens de ton premier prof ?|Erinnerst du dich an deinen ersten Lehrer?|Do you remember your first teacher?
le chien|der Hund|the dog|n`,
  say: `Quand j'étais petit, j'habitais à la campagne.|Als ich klein war, wohnte ich auf dem Land.|When I was little, I lived in the countryside.
Je jouais au foot tous les jours.|Ich habe jeden Tag Fußball gespielt.|I used to play football every day.
Mes parents étaient assez sévères.|Meine Eltern waren ziemlich streng.|My parents were quite strict.
Nous avions un chien qui s'appelait Rex.|Wir hatten einen Hund, der Rex hieß.|We had a dog called Rex.
Chaque été, on allait chez mes grands-parents.|Jeden Sommer fuhren wir zu meinen Großeltern.|Every summer we went to my grandparents'.
Avant, je n'aimais pas les légumes.|Früher mochte ich kein Gemüse.|I didn't use to like vegetables.`,
  gram: [
    ["h", TB("Imparfait – so war es früher", "Imparfait – how things used to be")],
    ["p", TB("Bildung: Stamm der <b>nous</b>-Form (nous <b>parl</b>ons, nous <b>finiss</b>ons, nous <b>av</b>ons) + <b>-ais, -ais, -ait, -ions, -iez, -aient</b>. Einzige Ausnahme: être → <b>ét</b>ais.", "Formation: stem of the <b>nous</b> form (nous <b>parl</b>ons, nous <b>finiss</b>ons, nous <b>av</b>ons) + <b>-ais, -ais, -ait, -ions, -iez, -aient</b>. Only exception: être → <b>ét</b>ais.")],
    ["conj", { verbs: ["être", "avoir", "jouer"], tenses: ["Imparfait"] }],
    ["p", TB("Das Imparfait beschreibt <b>Gewohnheiten</b> (je jouais tous les jours), <b>Zustände</b> (il faisait beau) und <b>Hintergründe</b> einer Geschichte.", "The imparfait describes <b>habits</b> (je jouais tous les jours), <b>states</b> (il faisait beau) and the <b>background</b> of a story.")],
    ["tip", TB("Die Endungen <b>-ais, -ait, -aient</b> klingen gleich – nur die Schrift unterscheidet sie.", "The endings <b>-ais, -ait, -aient</b> all sound the same – only the spelling differs.")]
  ],
  forms: { verbs: ["être", "avoir", "faire", "aller", "habiter", "jouer"], tenses: ["Imparfait"] },
  drill: [
    ["Quand j'___ petit, j'habitais à Lyon.", ["étais", "était", "suis"], 0],
    ["Nous ___ un grand jardin.", ["avions", "avons eu", "aviez"], 0],
    ["Chaque été, ils ___ à la mer.", ["allaient", "allait", "sont allés"], 0],
    ["Tu ___ au tennis quand tu étais jeune ?", ["jouais", "jouait", "joues"], 0],
    ["Il ___ beau et chaud.", ["faisait", "fait", "faisais"], 0],
    ["J'avais peur ___ chiens.", ["des", "de", "les"], 0],
    ["Wir wohnten in einem Dorf. → Nous ___ dans un village.", "habitions"]
  ],
  talk: { t: TB("Alte Fotos", "Old photos"), scene: TB("Deine Freundin Élodie findet Kinderfotos von dir.", "Your friend Élodie finds childhood photos of you."), who: "Élodie", slots: {}, lines: `a|C'est toi sur la photo ? Tu étais trop mignon !|Bist du das auf dem Foto? Du warst so süß!|Is that you in the photo? You were so cute!
me|Oui, c'est moi chez mes grands-parents. J'avais six ans.|Ja, das bin ich bei meinen Großeltern. Ich war sechs.|Yes, that's me at my grandparents'. I was six.|Oui, j'avais six ans.
a|Tu allais souvent chez eux ?|Warst du oft bei ihnen?|Did you often go to their place?
me|Oui, nous allions chez eux chaque été.|Ja, wir fuhren jeden Sommer zu ihnen.|Yes, we went there every summer.|Chaque été, oui.
a|Et tu étais un enfant sage ?|Und warst du ein braves Kind?|And were you a well-behaved child?
me|Pas vraiment ! Je grimpais tout le temps aux arbres.|Nicht wirklich! Ich bin ständig auf Bäume geklettert.|Not really! I was always climbing trees.|Non, je faisais beaucoup de bêtises.
a|Et maintenant tu as le vertige, non ?|Und jetzt hast du Höhenangst, oder?|And now you're afraid of heights, aren't you?
me|Exactement ! Avant, je n'avais peur de rien.|Genau! Früher hatte ich vor nichts Angst.|Exactly! I used to be afraid of nothing.|Oui ! Avant, je n'avais pas peur.` }
});

lesson("A2", { id: "fr-a2-02", t: TB("Qu'est-ce qui s'est passé ? – Passé composé oder Imparfait", "Qu'est-ce qui s'est passé ? – Passé composé or imparfait"),
  goal: TB("Du kannst eine kleine Geschichte erzählen – mit Hintergrund (Imparfait) und Ereignissen (Passé composé).", "You can tell a short story – with background (imparfait) and events (passé composé)."),
  words: `se passer|passieren|to happen|v|Qu'est-ce qui s'est passé ?|Was ist passiert?|What happened?
l'accident|der Unfall (m)|the accident|n
tomber|fallen; hinfallen|to fall|v|Je suis tombé dans la rue.|Ich bin auf der Straße hingefallen.|I fell over in the street.
se casser|sich brechen; kaputtgehen|to break|v|Il s'est cassé la jambe.|Er hat sich das Bein gebrochen.|He broke his leg.
perdre|verlieren|to lose|v
voler|stehlen; fliegen|to steal; to fly|v|On m'a volé mon portefeuille.|Man hat mir mein Portemonnaie gestohlen.|My wallet was stolen.
le portefeuille|das Portemonnaie|the wallet|n
tout à coup|plötzlich|suddenly|ph|Tout à coup, il a commencé à pleuvoir.|Plötzlich fing es an zu regnen.|Suddenly it started to rain.
pendant que|während|while|x
heureusement|zum Glück|fortunately|adv
malheureusement|leider|unfortunately|adv
finalement|schließlich; am Ende|in the end|adv
la police|die Polizei|the police|n
le témoin|der Zeuge|the witness|n
l'écran|der Bildschirm (m)|the screen|n
pleuvoir|regnen|to rain|v
attendre|warten|to wait|v
rencontrer|treffen; kennenlernen|to meet|v
la honte|die Schande; die Peinlichkeit|shame|n|J'avais trop honte !|Das war mir so peinlich!|I was so embarrassed!`,
  say: `Qu'est-ce qui s'est passé ?|Was ist passiert?|What happened?
Il pleuvait quand je suis sorti.|Es regnete, als ich rausging.|It was raining when I went out.
Pendant que j'attendais le bus, j'ai rencontré un vieil ami.|Während ich auf den Bus wartete, traf ich einen alten Freund.|While I was waiting for the bus, I met an old friend.
Tout à coup, mon téléphone est tombé.|Plötzlich ist mir das Handy runtergefallen.|Suddenly my phone fell.
Heureusement, personne n'a été blessé.|Zum Glück wurde niemand verletzt.|Fortunately nobody was hurt.
C'était trop la honte !|Das war so peinlich!|It was so embarrassing!`,
  gram: [
    ["h", TB("Imparfait oder Passé composé?", "Imparfait or passé composé?")],
    ["table", { head: [TB("Imparfait", "imparfait"), TB("Passé composé", "passé composé")], rows: [[TB("Hintergrund, Beschreibung", "background, description"), TB("Ereignis, Handlung", "event, action")], ["Il faisait froid.", "Je suis sorti."], [TB("lief gerade", "was in progress"), TB("unterbricht", "interrupts")], ["Je dormais …", "… quand le téléphone a sonné."], [TB("Gewohnheit", "habit"), TB("einmalig", "one-off")], ["Je prenais le bus.", "Ce jour-là, j'ai pris un taxi."]], say: 0 }],
    ["ex", [["Il était huit heures et il pleuvait.", "Es war acht Uhr und es regnete.", "It was eight o'clock and it was raining."], ["Je marchais dans la rue quand j'ai vu l'accident.", "Ich ging die Straße entlang, als ich den Unfall sah.", "I was walking down the street when I saw the accident."]]],
    ["tip", TB("Merkhilfe: Imparfait = die <b>Kulisse</b> im Theater, Passé composé = die <b>Handlung</b> auf der Bühne.", "Memory aid: imparfait = the <b>scenery</b> in a theatre, passé composé = the <b>action</b> on stage.")]
  ],
  forms: { verbs: ["être", "avoir", "faire", "tomber", "voir"], tenses: ["Imparfait", "Passé composé"] },
  drill: [
    ["Il ___ quand je suis sorti.", ["pleuvait", "a plu", "pleut"], 0],
    ["Je dormais quand le téléphone ___.", ["a sonné", "sonnait", "sonne"], 0],
    ["Pendant que nous ___ , il a commencé à neiger.", ["mangions", "avons mangé", "mangeons"], 0],
    ["Tout à coup, elle ___ tombée.", ["est", "a", "était"], 0],
    ["Quand j'étais jeune, je ___ le bus pour aller à l'école.", ["prenais", "ai pris", "prends"], 0],
    ["Il s'est cassé ___ bras.", ["le", "son", "sa"], 0, TB("Bei Körperteilen mit reflexivem Verb: Artikel statt Possessiv.", "Body parts with a reflexive verb: article instead of possessive.")],
    ["Es war kalt. → Il ___ froid.", "faisait"]
  ],
  talk: { t: TB("Ein Missgeschick", "A little mishap"), scene: TB("Dein Freund Théo sieht dein kaputtes Handy.", "Your friend Théo sees your broken phone."), who: "Théo", slots: {}, lines: `a|Oh là là, ton téléphone ! Qu'est-ce qui s'est passé ?|Oje, dein Handy! Was ist passiert?|Oh dear, your phone! What happened?
me|Je faisais du vélo et il est tombé de ma poche.|Ich bin Rad gefahren und es ist mir aus der Tasche gefallen.|I was cycling and it fell out of my pocket.|Il est tombé pendant que je faisais du vélo.
a|Tu roulais vite ?|Bist du schnell gefahren?|Were you going fast?
me|Non, mais tout à coup un chien a traversé la rue.|Nein, aber plötzlich ist ein Hund über die Straße gelaufen.|No, but suddenly a dog ran across the road.|Non, mais un chien est arrivé tout à coup.
a|Et toi, tu es tombé aussi ?|Und du, bist du auch gestürzt?|And did you fall too?
me|Oui, mais heureusement je n'ai rien.|Ja, aber zum Glück ist mir nichts passiert.|Yes, but luckily I'm fine.|Oui, mais je ne suis pas blessé.
a|Ouf ! Et le téléphone marche encore ?|Puh! Und funktioniert das Handy noch?|Phew! And does the phone still work?
me|Oui, mais l'écran est cassé.|Ja, aber der Bildschirm ist kaputt.|Yes, but the screen is broken.|Il marche, mais l'écran est cassé.` }
});

lesson("A2", { id: "fr-a2-03", t: TB("Projets – Zukunft und Wetter", "Projets – The future and the weather"),
  goal: TB("Du kannst über Pläne und Vorhersagen sprechen – und über das Wetter.", "You can talk about plans and predictions – and about the weather."),
  words: `le projet|der Plan; das Projekt|the plan; the project|n|Tu as des projets pour l'été ?|Hast du Pläne für den Sommer?|Do you have plans for the summer?
aller + infinitif|gleich / bald etwas tun|to be going to|ph|Je vais partir en Bretagne.|Ich fahre in die Bretagne.|I'm going to go to Brittany.
réserver|reservieren; buchen|to book|v
le voyage|die Reise|the trip|n
la météo|der Wetterbericht|the weather forecast|n|D'après la météo, il va pleuvoir.|Laut Wetterbericht wird es regnen.|According to the forecast, it's going to rain.
il fait beau|es ist schönes Wetter|the weather's nice|ph
il fait mauvais|das Wetter ist schlecht|the weather's bad|ph
il fait chaud|es ist warm / heiß|it's hot|ph
il fait froid|es ist kalt|it's cold|ph
il pleut|es regnet|it's raining|ph
il neige|es schneit|it's snowing|ph
le soleil|die Sonne|the sun|n|Il y a du soleil.|Die Sonne scheint.|It's sunny.
le vent|der Wind|the wind|n
le nuage|die Wolke|the cloud|n
l'orage|das Gewitter (m)|the storm|n
le degré|das Grad|the degree|n
demain|morgen|tomorrow|adv
la semaine prochaine|nächste Woche|next week|ph
l'année prochaine|nächstes Jahr (f)|next year|ph
le parapluie|der Regenschirm|the umbrella|n`,
  say: `Qu'est-ce que tu vas faire ce week-end ?|Was machst du dieses Wochenende?|What are you going to do this weekend?
Je vais voir mes amis à Nantes.|Ich treffe meine Freunde in Nantes.|I'm going to see my friends in Nantes.
L'année prochaine, j'apprendrai l'espagnol.|Nächstes Jahr lerne ich Spanisch.|Next year I'll learn Spanish.
Quel temps fait-il ?|Wie ist das Wetter?|What's the weather like?
Il fait beau et il fait vingt-cinq degrés.|Es ist schön und fünfundzwanzig Grad warm.|It's nice and twenty-five degrees.
Prends ton parapluie, il va pleuvoir.|Nimm deinen Regenschirm, es wird regnen.|Take your umbrella, it's going to rain.`,
  gram: [
    ["h", TB("Zwei Wege in die Zukunft", "Two ways to talk about the future")],
    ["table", { head: [TB("Form", "form"), TB("wofür?", "use"), TB("Beispiel", "example")], rows: [["futur proche: aller + Infinitiv", TB("nahe Zukunft, feste Absicht – sehr häufig", "near future, intention – very common"), "Je vais partir demain."], ["futur simple", TB("fernere Zukunft, Vorhersagen, Versprechen", "more distant future, predictions, promises"), "Un jour, j'habiterai en France."]], say: 2 }],
    ["conj", { verbs: ["aller", "faire"], tenses: ["Futur simple"] }],
    ["p", TB("Futur simple: Infinitiv + <b>-ai, -as, -a, -ons, -ez, -ont</b> (parler<b>ai</b>, finir<b>as</b>; -re verliert das e: prendr<b>a</b>). Unregelmäßige Stämme: <b>ser-</b> (être), <b>aur-</b> (avoir), <b>ir-</b> (aller), <b>fer-</b> (faire), <b>viendr-</b> (venir), <b>pourr-</b> (pouvoir).", "Futur simple: infinitive + <b>-ai, -as, -a, -ons, -ez, -ont</b> (parler<b>ai</b>, finir<b>as</b>; -re drops the e: prendr<b>a</b>). Irregular stems: <b>ser-</b> (être), <b>aur-</b> (avoir), <b>ir-</b> (aller), <b>fer-</b> (faire), <b>viendr-</b> (venir), <b>pourr-</b> (pouvoir).")],
    ["tip", TB("Wetter fast immer mit <b>il fait</b>: il fait beau, il fait chaud, il fait 20 degrés. Aber: <b>il pleut, il neige</b>.", "Weather almost always uses <b>il fait</b>: il fait beau, il fait chaud, il fait 20 degrés. But: <b>il pleut, il neige</b>.")]
  ],
  forms: { verbs: ["être", "avoir", "aller", "faire", "venir", "parler"], tenses: ["Futur simple"] },
  drill: [
    ["Demain, je ___ voir mes parents.", ["vais", "vas", "va"], 0],
    ["Un jour, nous ___ en Provence.", ["habiterons", "habitons", "allons habiter de"], 0],
    ["Quel temps ___-il ?", ["fait", "est", "a"], 0],
    ["Aujourd'hui, il ___ très chaud.", ["fait", "est", "a"], 0],
    ["L'année prochaine, tu ___ 30 ans.", ["auras", "seras", "vas avoir de"], 0],
    ["Regarde les nuages, il va ___.", ["pleuvoir", "pleut", "plu"], 0],
    ["Ich werde morgen reisen. → Je ___ demain. (futur simple, partir)", "partirai"]
  ],
  talk: { t: TB("Pläne für die Ferien", "Holiday plans"), scene: TB("Deine Kollegin Sarah fragt dich nach deinen Sommerplänen.", "Your colleague Sarah asks about your summer plans."), who: "Sarah", slots: {}, lines: `a|Tu as des projets pour les vacances ?|Hast du schon Pläne für die Ferien?|Do you have plans for the holidays?
me|Oui, je vais partir en Bretagne avec des amis.|Ja, ich fahre mit Freunden in die Bretagne.|Yes, I'm going to Brittany with some friends.|Oui, je vais en Bretagne.
a|Super ! Qu'est-ce que vous allez faire là-bas ?|Super! Was habt ihr dort vor?|Great! What are you going to do there?
me|On va faire du vélo et visiter Saint-Malo.|Wir werden Rad fahren und Saint-Malo besichtigen.|We're going to cycle and visit Saint-Malo.|Du vélo et des visites.
a|Mais attention, en Bretagne il pleut souvent !|Aber Vorsicht, in der Bretagne regnet es oft!|But careful, it often rains in Brittany!
me|Je sais. D'après la météo, il fera beau la première semaine.|Ich weiß. Laut Wetterbericht wird es in der ersten Woche schön.|I know. According to the forecast, it'll be nice the first week.|La météo dit qu'il fera beau.
a|Tant mieux ! Tu partiras quand ?|Umso besser! Wann fährst du los?|All the better! When will you leave?
me|Je partirai le premier août. Je t'enverrai des photos !|Ich fahre am ersten August los. Ich schicke dir Fotos!|I'll leave on the first of August. I'll send you photos!|Le premier août. Je t'envoie des photos !` }
});
