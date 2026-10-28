/* Français A2 · 4–6 */
lesson("A2", { id: "fr-a2-04", t: TB("Chez le médecin – Körper, Imperativ, <i>il faut</i>", "Chez le médecin – The body, the imperative, <i>il faut</i>"),
  goal: TB("Du kannst Beschwerden beschreiben und Ratschläge und Anweisungen verstehen.", "You can describe symptoms and understand advice and instructions."),
  words: `le médecin|der Arzt; die Ärztin|the doctor|n
le rendez-vous|der Termin|the appointment|n|Je voudrais prendre rendez-vous.|Ich möchte einen Termin vereinbaren.|I'd like to make an appointment.
la tête|der Kopf|the head|n|J'ai mal à la tête.|Ich habe Kopfschmerzen.|I have a headache.
la gorge|der Hals|the throat|n
le dos|der Rücken|the back|n
le ventre|der Bauch|the stomach|n
le bras|der Arm|the arm|n
la jambe|das Bein|the leg|n
le genou|das Knie|the knee|n
avoir mal à|Schmerzen haben in|to have a pain in|v
la fièvre|das Fieber|the fever|n|J'ai de la fièvre.|Ich habe Fieber.|I have a temperature.
le rhume|die Erkältung; der Schnupfen|the cold|n
la grippe|die Grippe|the flu|n
tousser|husten|to cough|v
l'ordonnance|das Rezept (f)|the prescription|n
le médicament|das Medikament|the medicine|n|Prenez ce médicament trois fois par jour.|Nehmen Sie dieses Medikament dreimal täglich.|Take this medicine three times a day.
la pharmacie|die Apotheke|the pharmacy|n
se reposer|sich ausruhen|to rest|v
il faut|man muss|you have to; it's necessary|ph|Il faut boire beaucoup d'eau.|Man muss viel Wasser trinken.|You need to drink lots of water.
guérir|gesund werden; heilen|to get better; to heal|v`,
  say: `Qu'est-ce qui ne va pas ?|Was fehlt Ihnen?|What's the matter?
J'ai mal à la gorge depuis trois jours.|Ich habe seit drei Tagen Halsschmerzen.|I've had a sore throat for three days.
J'ai mal au dos quand je m'assois.|Mir tut der Rücken weh, wenn ich sitze.|My back hurts when I sit down.
Reposez-vous et buvez beaucoup.|Ruhen Sie sich aus und trinken Sie viel.|Rest and drink plenty.
Il ne faut pas faire de sport cette semaine.|Diese Woche dürfen Sie keinen Sport machen.|You mustn't do any sport this week.
Bon rétablissement !|Gute Besserung!|Get well soon!`,
  gram: [
    ["h", TB("<i>avoir mal à</i> + Körperteil", "<i>avoir mal à</i> + body part")],
    ["p", TB("j'ai mal <b>au</b> dos (à + le), <b>à la</b> tête, <b>à l'</b>épaule, <b>aux</b> pieds (à + les).", "j'ai mal <b>au</b> dos (à + le), <b>à la</b> tête, <b>à l'</b>épaule, <b>aux</b> pieds (à + les).")],
    ["h", TB("Imperativ", "The imperative")],
    ["conj", { verbs: ["prendre", "boire"], tenses: ["Impératif"] }],
    ["p", TB("Drei Formen ohne Subjekt: <b>tu</b> (prends, bois), <b>nous</b> (prenons), <b>vous</b> (prenez). Bei -er-Verben fällt in der tu-Form das <b>s</b> weg: Mange ! Reflexiv: Repose-<b>toi</b> ! Reposez-<b>vous</b> !", "Three forms without a subject: <b>tu</b> (prends, bois), <b>nous</b> (prenons), <b>vous</b> (prenez). With -er verbs the tu form drops the <b>s</b>: Mange ! Reflexive: Repose-<b>toi</b> ! Reposez-<b>vous</b> !")],
    ["tip", TB("<b>Il faut</b> + Infinitiv = man muss: Il faut se reposer. Verneint <b>il ne faut pas</b> = man darf nicht!", "<b>Il faut</b> + infinitive = you have to: Il faut se reposer. Negative <b>il ne faut pas</b> = you mustn't!")]
  ],
  forms: { verbs: ["prendre", "boire", "faire", "aller", "manger"], tenses: ["Impératif"] },
  drill: [
    ["J'ai mal ___ tête.", ["à la", "au", "à le"], 0],
    ["J'ai mal ___ dos.", ["au", "à la", "du"], 0],
    ["___ ce médicament deux fois par jour. (vous, prendre)", ["Prenez", "Prendre", "Vous prenez"], 0],
    ["___ beaucoup d'eau ! (tu, boire)", ["Bois", "Boit", "Buvez-tu"], 0],
    ["Repose-___ un peu !", ["toi", "te", "tu"], 0],
    ["Il ne faut pas ___ de café le soir.", ["boire", "bois", "buvez"], 0],
    ["Iss mehr Obst! → ___ plus de fruits !", "Mange"]
  ],
  talk: { t: TB("Beim Hausarzt", "At the GP's"), scene: TB("Du bist erkältet und gehst in Paris zum Arzt.", "You've got a cold and see a doctor in Paris."), who: "Docteur Martin", slots: {}, lines: `a|Bonjour, asseyez-vous. Qu'est-ce qui ne va pas ?|Guten Tag, setzen Sie sich. Was fehlt Ihnen?|Hello, sit down. What's the matter?
me|J'ai mal à la gorge et à la tête depuis trois jours.|Ich habe seit drei Tagen Hals- und Kopfschmerzen.|I've had a sore throat and a headache for three days.|J'ai mal à la gorge et à la tête.
a|Vous avez de la fièvre ?|Haben Sie Fieber?|Do you have a temperature?
me|Oui, un peu. Et je tousse beaucoup.|Ja, ein bisschen. Und ich huste viel.|Yes, a little. And I'm coughing a lot.|Un peu, oui. Je tousse aussi.
a|C'est une grippe. Reposez-vous et buvez beaucoup d'eau.|Das ist eine Grippe. Ruhen Sie sich aus und trinken Sie viel Wasser.|It's the flu. Rest and drink lots of water.
me|Il me faut une ordonnance ?|Brauche ich ein Rezept?|Do I need a prescription?|J'ai besoin d'une ordonnance ?
a|Oui, voilà. Prenez ce médicament trois fois par jour.|Ja, bitte. Nehmen Sie dieses Medikament dreimal täglich.|Yes, here you are. Take this medicine three times a day.
me|D'accord. Merci, docteur. Au revoir !|In Ordnung. Danke, Herr Doktor. Auf Wiedersehen!|OK. Thank you, doctor. Goodbye!|Merci beaucoup, au revoir !` }
});

lesson("A2", { id: "fr-a2-05", t: TB("Chercher un appartement – Objektpronomen", "Chercher un appartement – Object pronouns"),
  goal: TB("Du kannst eine Wohnung suchen, besichtigen und mit Pronomen kürzer und natürlicher sprechen.", "You can look for and view a flat and use pronouns to sound shorter and more natural."),
  words: `l'appartement|die Wohnung (m)|the flat|n|Je cherche un appartement au centre.|Ich suche eine Wohnung im Zentrum.|I'm looking for a flat in the centre.
le loyer|die Miete|the rent|n|Le loyer est de 800 euros par mois.|Die Miete beträgt 800 Euro im Monat.|The rent is 800 euros a month.
les charges|die Nebenkosten|the service charges|n
la caution|die Kaution|the deposit|n
le propriétaire|der Vermieter; der Eigentümer|the landlord; the owner|n
la colocation|die WG|the flatshare|n
le colocataire|der Mitbewohner|the flatmate|n
la pièce|das Zimmer (allgemein)|the room|n|Un trois-pièces avec balcon.|Eine Dreizimmerwohnung mit Balkon.|A three-room flat with a balcony.
la chambre|das Schlafzimmer|the bedroom|n
la cuisine|die Küche|the kitchen|n
la salle de bains|das Badezimmer|the bathroom|n
le balcon|der Balkon|the balcony|n
l'étage|das Stockwerk (m)|the floor|n
l'ascenseur|der Aufzug (m)|the lift|n
meublé|möbliert|furnished|adj
lumineux|hell|bright|adj
calme|ruhig|quiet|adj
bruyant|laut|noisy|adj
visiter|besichtigen|to view; to visit|v
emménager|einziehen|to move in|v`,
  say: `L'appartement est encore libre ?|Ist die Wohnung noch frei?|Is the flat still available?
Je peux le visiter quand ?|Wann kann ich sie besichtigen?|When can I view it?
Les charges sont comprises ?|Sind die Nebenkosten inklusive?|Are the service charges included?
La cuisine ? Je la trouve un peu petite.|Die Küche? Ich finde sie ein bisschen klein.|The kitchen? I find it a bit small.
Je vous appelle demain.|Ich rufe Sie morgen an.|I'll call you tomorrow.
Je peux emménager quand ?|Wann kann ich einziehen?|When can I move in?`,
  gram: [
    ["h", TB("Direkte und indirekte Objektpronomen", "Direct and indirect object pronouns")],
    ["table", { head: [TB("Person", "person"), TB("direkt (wen?)", "direct"), TB("indirekt (wem?)", "indirect")], rows: [["je", "me", "me"], ["tu", "te", "te"], ["il / elle", "le / la", "lui"], ["nous", "nous", "nous"], ["vous", "vous", "vous"], ["ils / elles", "les", "leur"]], say: 0 }],
    ["p", TB("Das Pronomen steht <b>vor dem konjugierten Verb</b>: Je <b>la</b> visite. Je <b>lui</b> téléphone. Im Passé composé vor <i>avoir</i>: Je <b>l'</b>ai vue. Mit Infinitiv davor: Je vais <b>le</b> visiter.", "The pronoun goes <b>before the conjugated verb</b>: Je <b>la</b> visite. Je <b>lui</b> téléphone. In the passé composé before <i>avoir</i>: Je <b>l'</b>ai vue. With an infinitive, before it: Je vais <b>le</b> visiter.")],
    ["tip", TB("Verben mit <b>à</b> (téléphoner à, parler à, demander à) brauchen <b>lui / leur</b>: Je téléphone <b>au</b> propriétaire → Je <b>lui</b> téléphone.", "Verbs with <b>à</b> (téléphoner à, parler à, demander à) take <b>lui / leur</b>: Je téléphone <b>au</b> propriétaire → Je <b>lui</b> téléphone.")]
  ],
  drill: [
    ["L'appartement ? Je ___ visite demain.", ["le", "la", "lui"], 0],
    ["La cuisine ? Je ___ trouve trop petite.", ["la", "le", "lui"], 0],
    ["Le propriétaire ? Je ___ téléphone ce soir.", ["lui", "le", "leur"], 0],
    ["Mes parents ? Je ___ parle souvent.", ["leur", "les", "lui"], 0],
    ["Les clés ? Je ___ ai oubliées !", ["les", "leur", "la"], 0],
    ["Je vais ___ appeler demain. (Sie)", ["vous", "lui", "le"], 0],
    ["Die Wohnung? Ich nehme sie! → L'appartement ? Je ___ prends !", "le"]
  ],
  talk: { t: TB("Wohnungsbesichtigung", "Viewing a flat"), scene: TB("Du besichtigst mit dem Vermieter Monsieur Dubois eine Wohnung in Lyon.", "You're viewing a flat in Lyon with the landlord, Monsieur Dubois."), who: "M. Dubois", slots: {}, lines: `a|Bonjour ! Entrez. Voici le salon.|Guten Tag! Kommen Sie rein. Hier ist das Wohnzimmer.|Hello! Come in. This is the living room.
me|Il est très lumineux ! L'appartement est meublé ?|Es ist sehr hell! Ist die Wohnung möbliert?|It's very bright! Is the flat furnished?|C'est lumineux. C'est meublé ?
a|Oui, tout est compris. Voilà la cuisine.|Ja, alles inklusive. Hier ist die Küche.|Yes, everything's included. Here's the kitchen.
me|Elle est petite, mais je la trouve pratique.|Sie ist klein, aber ich finde sie praktisch.|It's small, but I find it practical.|Elle est un peu petite, mais ça va.
a|Et la chambre donne sur la cour, c'est très calme.|Und das Schlafzimmer geht zum Hof, es ist sehr ruhig.|And the bedroom looks onto the courtyard, it's very quiet.
me|Parfait. Le loyer, c'est combien ? Les charges sont comprises ?|Perfekt. Wie hoch ist die Miete? Sind die Nebenkosten inklusive?|Perfect. How much is the rent? Are the service charges included?|Combien coûte le loyer, charges comprises ?
a|Huit cent cinquante euros, charges comprises.|Achthundertfünfzig Euro, inklusive Nebenkosten.|Eight hundred and fifty euros including service charges.
me|D'accord. Je réfléchis et je vous appelle demain.|In Ordnung. Ich überlege es mir und rufe Sie morgen an.|OK. I'll think about it and call you tomorrow.|Je vous rappelle demain, d'accord ?` }
});

lesson("A2", { id: "fr-a2-06", t: TB("Je voudrais… – Der Conditionnel", "Je voudrais… – The conditional"),
  goal: TB("Du kannst höflich bitten, Wünsche äußern und Ratschläge geben.", "You can make polite requests, express wishes and give advice."),
  words: `le souhait|der Wunsch|the wish|n
le rêve|der Traum|the dream|n|Mon rêve, ce serait de vivre au bord de la mer.|Mein Traum wäre, am Meer zu leben.|My dream would be to live by the sea.
le conseil|der Rat|the advice|n
conseiller|raten|to advise|v
le service|der Gefallen|the favour|n|Tu pourrais me rendre un service ?|Könntest du mir einen Gefallen tun?|Could you do me a favour?
aimable|freundlich|kind|adj
avec plaisir|gern|with pleasure|ph
à ta place|an deiner Stelle|in your place|ph|À ta place, je parlerais au chef.|An deiner Stelle würde ich mit dem Chef reden.|If I were you, I'd talk to the boss.
gagner au loto|im Lotto gewinnen|to win the lottery|v
faire le tour du monde|eine Weltreise machen|to travel around the world|v
arrêter de fumer|mit dem Rauchen aufhören|to stop smoking|v
stressé|gestresst|stressed|adj
prendre une pause|eine Pause machen|to take a break|v
ouvrir|öffnen; eröffnen|to open|v
riche|reich|rich|adj
devoir|müssen; sollen|to have to; should|v|Tu devrais dormir plus.|Du solltest mehr schlafen.|You should sleep more.
pouvoir|können; dürfen|can; could|v
vouloir|wollen|to want|v
aimer bien|gern mögen|to quite like|v|J'aimerais bien voyager plus.|Ich würde gern mehr reisen.|I'd like to travel more.
volontiers|gern|gladly|adv`,
  say: `Tu pourrais m'aider ?|Könntest du mir helfen?|Could you help me?
Vous pourriez fermer la fenêtre, s'il vous plaît ?|Könnten Sie bitte das Fenster schließen?|Could you close the window, please?
J'aimerais faire le tour du monde.|Ich würde gern eine Weltreise machen.|I'd love to travel around the world.
À ta place, j'accepterais l'offre.|An deiner Stelle würde ich das Angebot annehmen.|If I were you, I'd accept the offer.
Tu devrais te reposer.|Du solltest dich ausruhen.|You should rest.
Ce serait génial !|Das wäre toll!|That would be great!`,
  gram: [
    ["h", TB("Conditionnel présent", "Present conditional")],
    ["p", TB("Futur-Stamm + Imparfait-Endungen: <b>-ais, -ais, -ait, -ions, -iez, -aient</b>: parler<b>ais</b>, voudr<b>ais</b>, pourr<b>ais</b>, devr<b>ais</b>, ser<b>ais</b>, aur<b>ais</b>, fer<b>ais</b>.", "Future stem + imperfect endings: <b>-ais, -ais, -ait, -ions, -iez, -aient</b>: parler<b>ais</b>, voudr<b>ais</b>, pourr<b>ais</b>, devr<b>ais</b>, ser<b>ais</b>, aur<b>ais</b>, fer<b>ais</b>.")],
    ["conj", { verbs: ["vouloir", "pouvoir", "devoir"], tenses: ["Conditionnel présent"] }],
    ["table", { head: [TB("wofür?", "use"), TB("Beispiel", "example")], rows: [[TB("höfliche Bitte", "polite request"), "Vous pourriez m'aider ?"], [TB("Wunsch", "wish"), "Je voudrais un café. J'aimerais voyager."], [TB("Rat", "advice"), "Tu devrais dormir plus."], [TB("Vorschlag", "suggestion"), "On pourrait aller au cinéma."]], say: 1 }],
    ["tip", TB("<b>Je voudrais</b> ist die Standardform im Geschäft – <b>je veux</b> klingt fordernd.", "<b>Je voudrais</b> is the standard form in shops – <b>je veux</b> sounds demanding.")]
  ],
  forms: { verbs: ["être", "avoir", "faire", "aller", "aimer", "pouvoir"], tenses: ["Conditionnel présent"] },
  drill: [
    ["Je ___ un café, s'il vous plaît.", ["voudrais", "veux bien que", "voudrai"], 0],
    ["Vous ___ m'aider, s'il vous plaît ?", ["pourriez", "pourrez", "pouvez de"], 0],
    ["Tu es fatigué : tu ___ dormir plus.", ["devrais", "devras", "dois de"], 0],
    ["Avec un million d'euros, nous ___ le tour du monde.", ["ferions", "ferons", "faisons"], 0],
    ["Ce ___ génial !", ["serait", "sera", "était"], 0],
    ["À ta place, je ___ à mon chef. (parler)", ["parlerais", "parlerai", "parlais"], 0],
    ["Ich würde gern reisen. → J'___ voyager.", "aimerais"]
  ],
  talk: { t: TB("Tagträume", "Daydreams"), scene: TB("Ein entspannter Abend mit deiner Freundin Julie. Ihr träumt ein bisschen.", "A relaxed evening with your friend Julie. You're daydreaming a little."), who: "Julie", slots: {}, lines: `a|Quelle semaine ! J'aimerais partir demain sur une île.|Was für eine Woche! Ich würde gern morgen auf eine Insel fliegen.|What a week! I'd love to go to an island tomorrow.
me|Moi aussi ! Tu irais où ?|Ich auch! Wohin würdest du fliegen?|Me too! Where would you go?|Moi aussi. Où est-ce que tu irais ?
a|En Martinique, sans téléphone. Et toi, qu'est-ce que tu ferais avec un mois de libre ?|Nach Martinique, ohne Handy. Und du, was würdest du mit einem freien Monat machen?|To Martinique, without a phone. And you, what would you do with a month off?
me|Je ferais le tour de l'Italie en train.|Ich würde mit dem Zug durch Italien reisen.|I'd travel around Italy by train.|Je voyagerais en Italie.
a|Super idée ! Moi, j'ouvrirais un petit café à la plage.|Tolle Idee! Ich würde ein kleines Café am Strand eröffnen.|Great idea! I'd open a little café on the beach.
me|Ce serait génial ! Je pourrais travailler avec toi ?|Das wäre toll! Könnte ich mit dir arbeiten?|That would be great! Could I work with you?|Génial ! Je pourrais t'aider ?
a|Bien sûr ! Mais tu devrais apprendre à faire des cocktails.|Klar! Aber du müsstest lernen, Cocktails zu machen.|Of course! But you'd have to learn to make cocktails.
me|Avec plaisir ! J'apprendrais tout de suite.|Sehr gern! Das würde ich sofort lernen.|Gladly! I'd learn straight away.|Volontiers !` }
});
