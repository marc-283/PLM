/* Español A2 · 5–8 */
lesson("A2", { id: "es-a2-05", t: TB("En el médico – Körper und Imperativ", "En el médico – Body and imperative"),
  goal: TB("Du kannst Beschwerden beschreiben (me duele …) und Ratschläge im Imperativ verstehen und geben.", "You can describe symptoms (me duele …) and understand and give advice in the imperative."),
  words: `la cabeza|der Kopf|the head|n|Me duele la cabeza.|Ich habe Kopfschmerzen.|I have a headache.
la garganta|der Hals (innen)|the throat|n
el estómago|der Magen|the stomach|n
la espalda|der Rücken|the back|n
el brazo|der Arm|the arm|n
la pierna|das Bein|the leg|n
la rodilla|das Knie|the knee|n
el pie|der Fuß|the foot|n
la mano|die Hand|the hand|n
los ojos|die Augen|the eyes|n
la fiebre|das Fieber|fever|n
el resfriado|die Erkältung|the cold|n
la tos|der Husten|the cough|n
la gripe|die Grippe|the flu|n
la receta|das Rezept|the prescription|n
el medicamento|das Medikament|the medicine|n
la pastilla|die Tablette|the tablet|n
el dolor|der Schmerz|the pain|n
doler|wehtun|to hurt|v
estar resfriado/a|erkältet sein|to have a cold|ph
encontrarse mal|sich schlecht fühlen|to feel ill|v
la cita|der Termin|the appointment|n|Quería pedir cita con la doctora.|Ich hätte gern einen Termin bei der Ärztin.|I'd like an appointment with the doctor.
urgencias|die Notaufnahme|A&E; emergency room|n`,
  say: `No me encuentro bien.|Ich fühle mich nicht gut.|I don't feel well.
Me duele la garganta.|Mir tut der Hals weh.|My throat hurts.
Me duelen los pies.|Mir tun die Füße weh.|My feet hurt.
Tengo fiebre desde ayer.|Ich habe seit gestern Fieber.|I've had a temperature since yesterday.
Tome estas pastillas tres veces al día.|Nehmen Sie diese Tabletten dreimal täglich.|Take these tablets three times a day.
Bebe mucha agua y descansa.|Trink viel Wasser und ruh dich aus.|Drink lots of water and rest.
¡Que te mejores!|Gute Besserung!|Get well soon!`,
  gram: [
    ["h", TB("<i>doler</i>: me duele / me duelen", "<i>doler</i>: me duele / me duelen")],
    ["p", TB("Wie <i>gustar</i>: <b>Me duele</b> la cabeza, <b>me duelen</b> las piernas. Körperteile haben im Spanischen den Artikel, nicht das Possessiv: Me duele <b>la</b> espalda (nicht: mi espalda).", "Like <i>gustar</i>: <b>Me duele</b> la cabeza, <b>me duelen</b> las piernas. Body parts take the article, not the possessive: Me duele <b>la</b> espalda (not: mi espalda).")],
    ["h", TB("Imperativ", "Imperative")],
    ["table", { head: [TB("", ""), TB("tú", "tú"), TB("usted", "usted"), TB("vosotros", "vosotros")], rows: [["tomar", "toma", "tome", "tomad"], ["beber", "bebe", "beba", "bebed"], ["descansar", "descansa", "descanse", "descansad"], ["hacer", "haz", "haga", "haced"], ["tener", "ten", "tenga", "tened"], ["ir", "ve", "vaya", "id"]] }],
    ["p", TB("Verneint nimmt man den Subjuntivo: <b>No tomes</b> café. <b>No beba</b> alcohol. <b>No te preocupes.</b>", "The negative uses the subjunctive: <b>No tomes</b> café. <b>No beba</b> alcohol. <b>No te preocupes.</b>")],
    ["tip", TB("Pronomen hängen am bejahten Imperativ: <b>tómalas</b>, <b>descánsate</b> – mit Akzent, damit die Betonung bleibt.", "Pronouns attach to the affirmative imperative: <b>tómalas</b>, <b>descánsate</b> – with an accent to keep the stress.")]
  ],
  forms: { verbs: ["tomar", "beber", "descansar", "hacer", "tener", "ir", "venir", "decir"], tenses: ["Imperativo"] },
  drill: [
    ["Me ___ la cabeza.", ["duele", "duelen", "dolor"], 0],
    ["Me ___ las rodillas.", ["duelen", "duele", "dolen"], 0],
    ["Señora, ___ estas pastillas después de comer.", ["tome", "toma", "tomad"], 0],
    ["Pablo, ___ en la cama y descansa.", ["quédate", "quédese", "te quedas"], 0],
    ["No ___ café, por favor. (tú, tomar)", "tomes"],
    ["No te ___ , no es grave. (preocuparse)", "preocupes"],
    ["Tengo ___ desde hace dos días.", ["fiebre", "receta", "cita"], 0]
  ],
  talk: { t: TB("In der Arztpraxis", "At the doctor's"), scene: TB("Du bist im Urlaub in Málaga krank geworden und gehst zur Ärztin, Doctora Ruiz.", "You fell ill on holiday in Málaga and see the doctor, Dr Ruiz."), who: "Doctora Ruiz", slots: {}, lines: `a|Buenos días, siéntese. ¿Qué le pasa?|Guten Tag, setzen Sie sich. Was fehlt Ihnen?|Good morning, have a seat. What's wrong?
me|Buenos días. Me duele mucho la garganta y tengo tos.|Guten Tag. Mir tut der Hals sehr weh und ich habe Husten.|Good morning. My throat hurts a lot and I have a cough.|Me duele la garganta y tengo tos.
a|¿Desde cuándo?|Seit wann?|Since when?
me|Desde hace tres días. Anoche también tenía fiebre.|Seit drei Tagen. Gestern Abend hatte ich auch Fieber.|For three days. Last night I had a temperature too.|Desde hace tres días, y ayer tenía fiebre.
a|A ver… Es una gripe. ¿Es alérgico a algún medicamento?|Mal sehen … Das ist eine Grippe. Sind Sie gegen ein Medikament allergisch?|Let's see… It's flu. Are you allergic to any medicine?
me|No, no soy alérgico a nada.|Nein, ich bin gegen nichts allergisch.|No, I'm not allergic to anything.|No, no tengo alergias.; No, no soy alérgica a nada.
a|Bien. Tome estas pastillas tres veces al día y quédese en la cama.|Gut. Nehmen Sie diese Tabletten dreimal täglich und bleiben Sie im Bett.|Good. Take these tablets three times a day and stay in bed.
me|¿Las tomo antes o después de comer?|Nehme ich sie vor oder nach dem Essen?|Do I take them before or after meals?|¿Antes o después de las comidas?
a|Después de comer. Y beba mucha agua. Aquí tiene la receta.|Nach dem Essen. Und trinken Sie viel Wasser. Hier ist das Rezept.|After meals. And drink lots of water. Here's the prescription.
me|Muchas gracias, doctora. ¡Adiós!|Vielen Dank, Frau Doktor. Auf Wiedersehen!|Thank you very much, doctor. Goodbye!|Gracias, adiós.` }
});

lesson("A2", { id: "es-a2-06", t: TB("Buscar piso – Wohnung und Objektpronomen", "Buscar piso – Flat hunting and object pronouns"),
  goal: TB("Du kannst eine Wohnung beschreiben, bei einer Besichtigung nachfragen und lo/la/los/las benutzen.", "You can describe a flat, ask questions at a viewing and use lo/la/los/las."),
  words: `el piso|die Wohnung|the flat|n|Busco un piso en el centro.|Ich suche eine Wohnung im Zentrum.|I'm looking for a flat in the centre.
el estudio|die Einzimmerwohnung|the studio flat|n
el dormitorio|das Schlafzimmer|the bedroom|n
el salón|das Wohnzimmer|the living room|n
la cocina|die Küche|the kitchen|n
el baño|das Bad|the bathroom|n
la terraza|die Terrasse; der Balkon|the terrace; the balcony|n
la planta|das Stockwerk|the floor|n
el ascensor|der Aufzug|the lift|n
amueblado/a|möbliert|furnished|adj
el alquiler|die Miete|the rent|n
los gastos|die Nebenkosten|the bills|n
la fianza|die Kaution|the deposit|n
el casero / la casera|der Vermieter / die Vermieterin|the landlord / the landlady|n
el compañero de piso|der Mitbewohner|the flatmate|n
luminoso/a|hell|bright|adj
ruidoso/a|laut|noisy|adj
el sofá|das Sofa|the sofa|n
la cama|das Bett|the bed|n
el armario|der Schrank|the wardrobe|n
la lavadora|die Waschmaschine|the washing machine|n
mudarse|umziehen|to move house|v`,
  say: `¿Cuánto es el alquiler?|Wie hoch ist die Miete?|How much is the rent?
¿Los gastos están incluidos?|Sind die Nebenkosten inklusive?|Are the bills included?
¿El piso está amueblado?|Ist die Wohnung möbliert?|Is the flat furnished?
¿Puedo verlo mañana?|Kann ich sie morgen ansehen?|Can I see it tomorrow?
La cocina es pequeña, pero me encanta.|Die Küche ist klein, aber ich liebe sie.|The kitchen is small, but I love it.
¡Me lo quedo!|Ich nehme sie!|I'll take it!
¿Cuándo puedo mudarme?|Wann kann ich einziehen?|When can I move in?`,
  gram: [
    ["h", TB("Direkte Objektpronomen", "Direct object pronouns")],
    ["table", { head: [TB("", ""), TB("Singular", "singular"), TB("Plural", "plural")], rows: [[TB("1./2. Person", "1st/2nd person"), "me, te", "nos, os"], [TB("männlich", "masculine"), "lo", "los"], [TB("weiblich", "feminine"), "la", "las"]] }],
    ["p", TB("Vor dem konjugierten Verb: <b>Lo</b> veo. <b>La</b> compro. Am Infinitiv, Gerundium und bejahten Imperativ angehängt: ¿Puedo ver<b>lo</b>? – Cómpra<b>la</b>.", "Before the conjugated verb: <b>Lo</b> veo. <b>La</b> compro. Attached to the infinitive, gerund and affirmative imperative: ¿Puedo ver<b>lo</b>? – Cómpra<b>la</b>.")],
    ["tip", TB("Das Geschlecht richtet sich nach dem spanischen Wort: <i>el piso</i> → <b>lo</b> veo, auch wenn es auf Deutsch „sie“ (die Wohnung) heißt.", "Gender follows the Spanish word: <i>el piso</i> → <b>lo</b> veo, even though in German it's \"sie\" (die Wohnung).")]
  ],
  drill: [
    ["El piso? ___ alquilo.", ["Lo", "La", "Le"], 0],
    ["La terraza? ___ me encanta.", ["Me", "La", "Lo"], 0],
    ["Las llaves? No ___ encuentro.", ["las", "los", "les"], 0],
    ["Los muebles? ___ compramos en IKEA.", ["Los", "Las", "Les"], 0],
    ["¿Puedo ___ mañana? (ver + lo)", "verlo"],
    ["Vivo en la tercera ___ .", ["planta", "piso", "salón"], 0],
    ["El alquiler es de 800 euros, gastos ___ .", ["incluidos", "incluido", "incluidas"], 0]
  ],
  talk: { t: TB("Wohnungsbesichtigung", "Flat viewing"), scene: TB("Du besichtigst eine Wohnung in Barcelona. Die Vermieterin, Señora Puig, zeigt dir alles.", "You're viewing a flat in Barcelona. The landlady, Mrs Puig, shows you round."), who: "Señora Puig", slots: {}, lines: `a|Este es el salón. Es muy luminoso, ¿verdad?|Das ist das Wohnzimmer. Sehr hell, oder?|This is the living room. Very bright, isn't it?
me|Sí, es precioso. ¿Cuántos dormitorios tiene el piso?|Ja, wunderschön. Wie viele Schlafzimmer hat die Wohnung?|Yes, it's lovely. How many bedrooms does the flat have?|Muy bonito. ¿Cuántos dormitorios hay?
a|Dos dormitorios, una cocina y un baño completo.|Zwei Schlafzimmer, eine Küche und ein Bad.|Two bedrooms, a kitchen and a full bathroom.
me|¿El piso está amueblado?|Ist die Wohnung möbliert?|Is the flat furnished?|¿Está amueblado?
a|Sí, todo menos el dormitorio pequeño. La lavadora es nueva.|Ja, alles außer dem kleinen Schlafzimmer. Die Waschmaschine ist neu.|Yes, everything except the small bedroom. The washing machine is new.
me|¿Cuánto es el alquiler? ¿Los gastos están incluidos?|Wie hoch ist die Miete? Sind die Nebenkosten inklusive?|How much is the rent? Are the bills included?|¿Cuánto cuesta el alquiler, con gastos?
a|Novecientos euros al mes, más cien de gastos.|Neunhundert Euro im Monat, plus hundert Nebenkosten.|Nine hundred euros a month, plus a hundred for bills.
me|Es un poco caro, pero el barrio me gusta mucho.|Etwas teuer, aber das Viertel gefällt mir sehr.|It's a bit expensive, but I really like the area.|Es caro, pero el barrio es genial.
a|Entonces, ¿qué le parece?|Also, was meinen Sie?|So, what do you think?
me|¡Me lo quedo! ¿Cuándo podemos firmar el contrato?|Ich nehme sie! Wann können wir den Vertrag unterschreiben?|I'll take it! When can we sign the contract?|¡Lo alquilo! ¿Cuándo firmamos?` }
});

lesson("A2", { id: "es-a2-07", t: TB("De compras – Kleidung und Vergleiche", "De compras – Clothes and comparisons"),
  goal: TB("Du kannst Kleidung kaufen, nach Größe fragen, vergleichen und indirekte Pronomen benutzen.", "You can buy clothes, ask about sizes, compare and use indirect pronouns."),
  words: `la ropa|die Kleidung|clothes|n
la camiseta|das T-Shirt|the T-shirt|n
la camisa|das Hemd; die Bluse|the shirt|n
el jersey|der Pullover|the jumper|n
los pantalones|die Hose|the trousers|n
los vaqueros|die Jeans|the jeans|n
la falda|der Rock|the skirt|n
el vestido|das Kleid|the dress|n
la chaqueta|die Jacke|the jacket|n
el abrigo|der Mantel|the coat|n
los zapatos|die Schuhe|the shoes|n
la talla|die Größe (Kleidung)|the size|n|¿Qué talla usa?|Welche Größe tragen Sie?|What size are you?
el probador|die Umkleidekabine|the fitting room|n
probarse|anprobieren|to try on|v|¿Puedo probármela?|Kann ich sie anprobieren?|Can I try it on?
quedar bien|gut stehen; passen|to suit; to fit|ph|Esa chaqueta te queda genial.|Die Jacke steht dir super.|That jacket looks great on you.
estrecho/a|eng|tight|adj
ancho/a|weit|loose; wide|adj
las rebajas|der Schlussverkauf|the sales|n
negro/a|schwarz|black|adj
blanco/a|weiß|white|adj
azul|blau|blue|adj
rojo/a|rot|red|adj
verde|grün|green|adj`,
  say: `Solo estoy mirando, gracias.|Ich schaue mich nur um, danke.|I'm just looking, thanks.
¿Tiene esta camisa en azul?|Haben Sie dieses Hemd in Blau?|Do you have this shirt in blue?
Me queda un poco estrecha.|Sie ist mir etwas eng.|It's a bit tight on me.
¿Tiene una talla más grande?|Haben Sie eine Nummer größer?|Do you have a bigger size?
Le queda muy bien.|Das steht Ihnen sehr gut.|It suits you very well.
Este abrigo es más caro que el otro.|Dieser Mantel ist teurer als der andere.|This coat is more expensive than the other one.
Es el mejor regalo del mundo.|Das ist das beste Geschenk der Welt.|It's the best present in the world.`,
  gram: [
    ["h", TB("Indirekte Objektpronomen", "Indirect object pronouns")],
    ["p", TB("<b>me, te, le, nos, os, les</b> = mir, dir, ihm/ihr/Ihnen, uns, euch, ihnen: <b>Le</b> regalo un libro. <b>Te</b> queda bien.", "<b>me, te, le, nos, os, les</b> = to me, you, him/her/you (formal), us, you, them: <b>Le</b> regalo un libro. <b>Te</b> queda bien.")],
    ["h", TB("Vergleiche", "Comparisons")],
    ["table", { head: [TB("", ""), TB("Spanisch", "Spanish"), TB("Beispiel", "example")], rows: [
      [TB("mehr … als", "more … than"), "más … que", "Madrid es más grande que Sevilla."], [TB("weniger … als", "less … than"), "menos … que", "El tren es menos caro que el avión."], [TB("so … wie", "as … as"), "tan … como", "Es tan alto como su padre."], [TB("der/die/das …ste", "the …est"), "el/la más …", "Es la ciudad más bonita de España."]], say: 2 }],
    ["tip", TB("Unregelmäßig: bueno → <b>mejor</b>, malo → <b>peor</b>, grande (Alter) → <b>mayor</b>, pequeño (Alter) → <b>menor</b>. Sehr: <b>-ísimo</b>: carísimo, buenísimo.", "Irregular: bueno → <b>mejor</b>, malo → <b>peor</b>, grande (age) → <b>mayor</b>, pequeño (age) → <b>menor</b>. Very: <b>-ísimo</b>: carísimo, buenísimo.")]
  ],
  drill: [
    ["Esta chaqueta ___ queda muy bien, señora.", ["le", "la", "lo"], 0],
    ["A mi hermano ___ regalo una camisa.", ["le", "lo", "la"], 0],
    ["Madrid es más grande ___ Barcelona.", ["que", "de", "como"], 0],
    ["Mi hermana es tan alta ___ yo.", ["como", "que", "de"], 0],
    ["Este vino es ___ que el otro.", ["mejor", "más bueno", "bueno"], 0],
    ["Los zapatos me quedan ___ .", ["estrechos", "estrecho", "estrechas"], 0],
    ["Es la tienda ___ cara de la ciudad.", ["más", "muy", "tan"], 0]
  ],
  talk: { t: TB("Im Bekleidungsgeschäft", "In a clothes shop"), scene: TB("Du suchst in Madrid ein Hemd für eine Hochzeit. Die Verkäuferin Nuria hilft dir.", "You're looking for a shirt for a wedding in Madrid. The shop assistant, Nuria, helps you."), who: "Nuria", slots: {}, lines: `a|¡Hola! ¿Te puedo ayudar?|Hallo! Kann ich dir helfen?|Hi! Can I help you?
me|Sí, busco una camisa elegante para una boda.|Ja, ich suche ein elegantes Hemd für eine Hochzeit.|Yes, I'm looking for a smart shirt for a wedding.|Busco una camisa para una boda.
a|¿Qué talla usas?|Welche Größe trägst du?|What size are you?
me|Normalmente la L.|Normalerweise L.|Usually a large.|La L.
a|Mira, esta blanca es muy bonita. ¿Quieres probártela?|Schau, dieses weiße ist sehr schön. Willst du es anprobieren?|Look, this white one is very nice. Do you want to try it on?
me|Sí, gracias. ¿Dónde está el probador?|Ja, danke. Wo ist die Umkleide?|Yes, thanks. Where's the fitting room?|Vale. ¿Dónde están los probadores?
a|Al fondo a la derecha. … ¿Qué tal te queda?|Hinten rechts. … Wie passt es dir?|At the back on the right. … How does it fit?
me|Me queda un poco estrecha. ¿Tienes una talla más grande?|Es ist mir etwas eng. Hast du eine Nummer größer?|It's a bit tight. Do you have a bigger size?|Es un poco estrecha. ¿Hay una XL?
a|Sí, aquí tienes la XL. … ¡Te queda perfecta!|Ja, hier ist XL. … Sie passt perfekt!|Yes, here's the XL. … It fits perfectly!
me|Me la llevo. ¿Hay descuento?|Ich nehme es. Gibt es Rabatt?|I'll take it. Is there a discount?|Me la quedo. ¿Tiene descuento?` }
});

lesson("A2", { id: "es-a2-08", t: TB("Me gustaría… – Der Condicional", "Me gustaría… – The conditional"),
  goal: TB("Du kannst höflich bitten, Wünsche äußern und Ratschläge geben.", "You can make polite requests, express wishes and give advice."),
  words: `el deseo|der Wunsch|the wish|n
el sueño|der Traum; der Schlaf|the dream; sleep|n|Mi sueño sería vivir junto al mar.|Mein Traum wäre, am Meer zu leben.|My dream would be to live by the sea.
el consejo|der Rat|the advice|n
aconsejar|raten|to advise|v
el favor|der Gefallen|the favour|n|¿Me harías un favor?|Würdest du mir einen Gefallen tun?|Would you do me a favour?
amable|freundlich|kind|adj
ojalá|hoffentlich|I hope; if only|x
con mucho gusto|sehr gern|with pleasure|ph
la jubilación|der Ruhestand|retirement|n
tocar la lotería|im Lotto gewinnen|to win the lottery|v
dejar de fumar|mit dem Rauchen aufhören|to stop smoking|v
hacer deporte|Sport treiben|to do sport|v
adelgazar|abnehmen|to lose weight|v
estresado/a|gestresst|stressed|adj
tomarse un descanso|eine Pause machen|to take a break|v
dar la vuelta al mundo|eine Weltreise machen|to go round the world|v
abrir un restaurante|ein Restaurant eröffnen|to open a restaurant|v
rico/a|reich|rich|adj
en tu lugar|an deiner Stelle|in your place|ph`,
  say: `¿Podrías ayudarme?|Könntest du mir helfen?|Could you help me?
¿Me pasarías la sal?|Würdest du mir das Salz reichen?|Would you pass me the salt?
Me gustaría dar la vuelta al mundo.|Ich würde gern eine Weltreise machen.|I'd like to go round the world.
Yo en tu lugar hablaría con el jefe.|An deiner Stelle würde ich mit dem Chef reden.|If I were you, I'd talk to the boss.
Deberías dormir más.|Du solltest mehr schlafen.|You should sleep more.
¡Sería genial!|Das wäre toll!|That would be great!
¿Qué harías con un millón de euros?|Was würdest du mit einer Million Euro machen?|What would you do with a million euros?`,
  gram: [
    ["h", TB("Condicional simple", "Simple conditional")],
    ["p", TB("Infinitiv + <b>-ía, -ías, -ía, -íamos, -íais, -ían</b>: hablar<b>ía</b>, comer<b>ía</b>. Gleiche unregelmäßige Stämme wie im Futur: tendr<b>ía</b>, har<b>ía</b>, podr<b>ía</b>, dir<b>ía</b>.", "Infinitive + <b>-ía, -ías, -ía, -íamos, -íais, -ían</b>: hablar<b>ía</b>, comer<b>ía</b>. Same irregular stems as the future: tendr<b>ía</b>, har<b>ía</b>, podr<b>ía</b>, dir<b>ía</b>.")],
    ["conj", { verbs: ["gustar", "poder", "deber"], tenses: ["Condicional"] }],
    ["table", { head: [TB("wofür?", "use"), TB("Beispiel", "example")], rows: [[TB("höfliche Bitte", "polite request"), "¿Podría abrir la ventana?"], [TB("Wunsch", "wish"), "Me gustaría vivir en Madrid."], [TB("Rat", "advice"), "Deberías descansar."], [TB("Vermutung (Vergangenheit)", "guess (past)"), "Serían las diez cuando llegó."]], say: 1 }],
    ["tip", TB("Achtung: Der Condicional hat <b>immer</b> ein í mit Akzent – auch das Imperfecto von -er/-ir-Verben (comía). Unterschied: comer<b>ía</b> (würde essen) vs. com<b>ía</b> (aß).", "Careful: the conditional <b>always</b> has an accented í – so does the imperfect of -er/-ir verbs (comía). Difference: comer<b>ía</b> (would eat) vs. com<b>ía</b> (was eating).")]
  ],
  forms: { verbs: ["hablar", "comer", "vivir", "tener", "hacer", "poder", "decir", "querer", "ser"], tenses: ["Condicional"] },
  drill: [
    ["¿___ cerrar la puerta, por favor? (usted)", ["Podría", "Podrá", "Puede ser"], 0],
    ["Me ___ aprender a bailar salsa.", ["gustaría", "gustará", "gusta ría"], 0],
    ["Estás muy cansado: ___ dormir más.", ["deberías", "deberás", "debes ser"], 0],
    ["Con un millón de euros, ___ un restaurante.", ["abriría", "abriré", "abría"], 0],
    ["Nosotros ___ encantados de venir. (estar)", "estaríamos"],
    ["¿Qué ___ tú en mi lugar? (hacer)", "harías"],
    ["Yo no se lo ___ a nadie. (decir)", "diría"]
  ],
  talk: { t: TB("Tagträume", "Daydreams"), scene: TB("Ein entspannter Abend mit deiner Freundin Clara. Ihr träumt ein bisschen.", "A relaxed evening with your friend Clara. You're daydreaming a little."), who: "Clara", slots: {}, lines: `a|¡Qué semana! Me gustaría irme mañana a una isla tropical.|Was für eine Woche! Ich würde gern morgen auf eine tropische Insel fliegen.|What a week! I'd love to go to a tropical island tomorrow.
me|¡A mí también! ¿Adónde irías?|Ich auch! Wohin würdest du fliegen?|Me too! Where would you go?|¡Yo también! ¿Y adónde irías?
a|A las Maldivas, sin móvil. ¿Y tú, qué harías con un mes libre?|Auf die Malediven, ohne Handy. Und du, was würdest du mit einem freien Monat machen?|To the Maldives, without a phone. And you, what would you do with a month off?
me|Viajaría por Latinoamérica y aprendería a bailar salsa.|Ich würde durch Lateinamerika reisen und Salsa tanzen lernen.|I'd travel around Latin America and learn to dance salsa.|Viajaría por Latinoamérica y aprendería salsa.
a|¡Qué bonito! Yo abriría un chiringuito en la playa.|Wie schön! Ich würde eine Strandbar eröffnen.|How lovely! I'd open a beach bar.
me|¡Sería genial! ¿Podría trabajar contigo?|Das wäre toll! Könnte ich mit dir arbeiten?|That would be great! Could I work with you?|¡Qué guay! ¿Puedo trabajar contigo?
a|¡Claro! Pero primero deberías aprender a hacer cócteles.|Klar! Aber zuerst müsstest du lernen, Cocktails zu mixen.|Sure! But first you'd have to learn how to make cocktails.
me|¡Con mucho gusto! Aprendería enseguida.|Sehr gern! Das würde ich sofort lernen.|Gladly! I'd learn straight away.|¡Por supuesto! Aprendería rápido.` }
});
