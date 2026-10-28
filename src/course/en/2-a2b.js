/* English A2 · 5–8 */
lesson("A2", { id: "en-a2-05", t: TB("At the doctor's – Körper, <i>should / must</i>", "At the doctor's – The body, <i>should / must</i>"),
  goal: TB("Du kannst Beschwerden beschreiben, Ratschläge verstehen und geben.", "You can describe symptoms and understand and give advice."),
  words: `the appointment|der Termin||n|I'd like to make an appointment.|Ich möchte einen Termin vereinbaren.
the head|der Kopf||n
the back|der Rücken||n|My back hurts.|Mir tut der Rücken weh.
the stomach|der Magen; der Bauch||n
the throat|der Hals (innen)||n
the knee|das Knie||n
the headache|die Kopfschmerzen||n|I've got a headache.|Ich habe Kopfschmerzen.
the sore throat|die Halsschmerzen||n
the cold|die Erkältung||n|I think I've got a cold.|Ich glaube, ich bin erkältet.
the flu|die Grippe||n
the temperature|das Fieber; die Temperatur||n|Have you got a temperature?|Hast du Fieber?
the cough|der Husten||n
to feel sick|sich übel fühlen||v
dizzy|schwindelig||adj
the prescription|das Rezept||n
the medicine|das Medikament||n|Take this medicine twice a day.|Nehmen Sie dieses Medikament zweimal täglich.
the pharmacy|die Apotheke||n
to rest|sich ausruhen||v
to get better|gesund werden||v|I hope you get better soon.|Gute Besserung!
the sick note|die Krankmeldung||n`,
  say: `What's the matter?|Was fehlt Ihnen?
I've had a sore throat for three days.|Ich habe seit drei Tagen Halsschmerzen.
My knee hurts when I walk.|Mein Knie tut beim Gehen weh.
You should drink lots of water.|Sie sollten viel Wasser trinken.
You mustn't do any sport this week.|Sie dürfen diese Woche keinen Sport machen.
Do I need a prescription?|Brauche ich ein Rezept?
Get well soon!|Gute Besserung!`,
  gram: [
    ["h", TB("Ratschläge und Pflichten", "Advice and obligation")],
    ["table", { head: [TB("Verb", "verb"), TB("Bedeutung", "meaning"), TB("Beispiel", "example")], rows: [
      ["should / shouldn't", TB("sollte(st) – Rat", "advice"), "You should rest. You shouldn't go to work."],
      ["must", TB("muss – starke Pflicht", "strong obligation"), "You must take this twice a day."],
      ["mustn't", TB("darf nicht – Verbot!", "prohibition!"), "You mustn't drink alcohol with it."],
      ["don't have to", TB("muss nicht – nicht nötig", "not necessary"), "You don't have to come in tomorrow."]], say: 2 }],
    ["p", TB("Beschwerden mit <b>have got / have</b>: I'<b>ve got</b> a headache. Körperteil + <b>hurt(s)</b>: My back <b>hurts</b>.", "Symptoms with <b>have got / have</b>: I'<b>ve got</b> a headache. Body part + <b>hurt(s)</b>: My back <b>hurts</b>.")],
    ["tip", TB("Falle: <b>mustn't</b> ≠ „muss nicht“! <b>mustn't</b> = darf nicht, <b>don't have to</b> = muss nicht.", "Trap for Germans: <b>mustn't</b> means “darf nicht”, <b>don't have to</b> means “muss nicht”.")]
  ],
  th: "modals",
  quiz: ["en-modal"],
  drill: [
    ["You ___ stay in bed for a few days.", ["should", "should to", "must to"], 0],
    ["You ___ drive after taking this medicine – it's dangerous.", ["mustn't", "don't have to", "shouldn't to"], 0],
    ["It's Sunday – you ___ get up early.", ["don't have to", "mustn't", "can't"], 0],
    ["I've ___ a terrible headache.", ["got", "get", "have"], 0],
    ["My back ___ when I sit for a long time.", ["hurts", "hurt", "is hurt"], 0],
    ["I've had a cough ___ last week.", ["since", "for", "from"], 0],
    ["Du solltest zum Arzt gehen. → You ___ go to the doctor.", "should"]
  ],
  talk: { t: TB("Beim Hausarzt", "At the GP's"), scene: TB("Du bist erkältet und gehst in London zum Arzt.", "You've got a cold and go to a doctor in London."), who: "Dr Patel", slots: {}, lines: `a|Hello, come in. What seems to be the problem?|Hallo, kommen Sie rein. Was scheint das Problem zu sein?|
me|I've had a sore throat and a headache for three days.|Ich habe seit drei Tagen Halsschmerzen und Kopfschmerzen.||I've got a sore throat and a headache.
a|I see. Have you got a temperature?|Verstehe. Haben Sie Fieber?|
me|Yes, a little. And I feel very tired.|Ja, ein bisschen. Und ich bin sehr müde.||A bit, yes. I'm very tired too.
a|It's probably a bad cold. You should rest and drink lots of water.|Wahrscheinlich eine starke Erkältung. Sie sollten sich ausruhen und viel trinken.|
me|Do I need a prescription?|Brauche ich ein Rezept?||Do I need any medicine?
a|No, you can buy something at the pharmacy. But you mustn't go to the gym this week.|Nein, Sie können etwas in der Apotheke kaufen. Aber diese Woche dürfen Sie nicht ins Fitnessstudio.|
me|OK. Can I have a sick note for work, please?|Okay. Kann ich bitte eine Krankmeldung für die Arbeit haben?||Could I get a sick note, please?` }
});

lesson("A2", { id: "en-a2-06", t: TB("Flat hunting – Vergleiche", "Flat hunting – Comparisons"),
  goal: TB("Du kannst Wohnungen beschreiben und vergleichen und sagen, was dir am besten gefällt.", "You can describe and compare flats and say which one you like best."),
  words: `the flat|die Wohnung||n|I'm looking for a flat in the city centre.|Ich suche eine Wohnung in der Innenstadt.
the rent|die Miete||n|The rent is £900 a month.|Die Miete beträgt 900 Pfund im Monat.
the deposit|die Kaution||n
the landlord|der Vermieter||n
the flatmate|der Mitbewohner; die Mitbewohnerin||n
the bedroom|das Schlafzimmer||n
the living room|das Wohnzimmer||n
the kitchen|die Küche||n
the bathroom|das Badezimmer||n
the balcony|der Balkon||n
the garden|der Garten||n
furnished|möbliert||adj
spacious|geräumig||adj
bright|hell||adj
quiet|ruhig||adj|The second flat is much quieter.|Die zweite Wohnung ist viel ruhiger.
noisy|laut||adj
modern|modern||adj
convenient|praktisch (gelegen)||adj
the neighbourhood|die Gegend; das Viertel||n
to move in|einziehen||v|When can I move in?|Wann kann ich einziehen?`,
  say: `Is the flat still available?|Ist die Wohnung noch frei?
Are bills included?|Sind die Nebenkosten inklusive?
This flat is bigger than the other one.|Diese Wohnung ist größer als die andere.
It's the cheapest flat in the area.|Es ist die billigste Wohnung in der Gegend.
The bedroom isn't as big as I thought.|Das Schlafzimmer ist nicht so groß, wie ich dachte.
When can I move in?|Wann kann ich einziehen?`,
  gram: [
    ["h", TB("Komparativ und Superlativ", "Comparatives and superlatives")],
    ["table", { head: [TB("Adjektiv", "adjective"), TB("Komparativ", "comparative"), TB("Superlativ", "superlative")], rows: [["cheap", "cheaper (than)", "the cheapest"], ["big", "bigger", "the biggest"], ["quiet", "quieter", "the quietest"], ["expensive", "more expensive", "the most expensive"], ["good", "better", "the best"], ["bad", "worse", "the worst"], ["far", "further", "the furthest"]], say: 1 }],
    ["p", TB("Kurze Adjektive: <b>-er / -est</b>. Lange Adjektive (ab 2–3 Silben): <b>more / the most</b>. Gleich: <b>as … as</b> – not <b>as</b> big <b>as</b>.", "Short adjectives: <b>-er / -est</b>. Long adjectives (2–3+ syllables): <b>more / the most</b>. Equal: <b>as … as</b> – not <b>as</b> big <b>as</b>.")],
    ["tip", TB("„als“ heißt <b>than</b>, nicht <s>as</s>: bigger <b>than</b> mine. Und nicht doppelt steigern: <s>more cheaper</s>.", "“als” is <b>than</b>, not <s>as</s>: bigger <b>than</b> mine. And never double: <s>more cheaper</s>.")]
  ],
  th: "compare",
  drill: [
    ["This flat is ___ than the last one.", ["bigger", "more big", "biggest"], 0],
    ["It's the ___ flat we've seen.", ["most expensive", "expensivest", "more expensive"], 0],
    ["The kitchen is better ___ in the other flat.", ["than", "as", "then"], 0],
    ["The bedroom isn't as big ___ the living room.", ["as", "than", "like"], 0],
    ["This is the ___ neighbourhood in town – very safe.", ["best", "better", "goodest"], 0],
    ["The bathroom is ___ than I expected.", ["worse", "badder", "more bad"], 0],
    ["Die zweite Wohnung ist ruhiger. → The second flat is ___.", "quieter"]
  ],
  talk: { t: TB("Wohnungsbesichtigung", "Viewing a flat"), scene: TB("Du besichtigst mit dem Vermieter Mr Clarke eine Wohnung in Bristol.", "You're viewing a flat in Bristol with the landlord, Mr Clarke."), who: "Mr Clarke", slots: {}, lines: `a|Come in! So, this is the living room.|Kommen Sie rein! Das ist das Wohnzimmer.|
me|Oh, it's very bright. Is the flat furnished?|Oh, das ist sehr hell. Ist die Wohnung möbliert?||It's lovely and bright. Is it furnished?
a|Yes, everything is included. The bedroom is over here.|Ja, alles ist dabei. Das Schlafzimmer ist hier drüben.|
me|It's smaller than I thought, but it's quiet.|Es ist kleiner, als ich dachte, aber ruhig.||It's a bit small, but it's nice and quiet.
a|It's the quietest flat in the building. It faces the garden.|Es ist die ruhigste Wohnung im Haus. Sie geht zum Garten raus.|
me|How much is the rent? Are bills included?|Wie hoch ist die Miete? Sind die Nebenkosten inklusive?||What's the rent, and are bills included?
a|It's £950 a month, and bills are extra.|950 Pfund im Monat, Nebenkosten extra.|
me|OK. When can I move in?|Okay. Wann könnte ich einziehen?||I like it. When could I move in?` }
});

lesson("A2", { id: "en-a2-07", t: TB("Invitations – Einladen, zusagen, absagen", "Invitations – Inviting, accepting, declining"),
  goal: TB("Du kannst Leute einladen, Einladungen annehmen oder höflich absagen und Vorschläge machen.", "You can invite people, accept or politely decline invitations and make suggestions."),
  words: `to invite|einladen||v|We'd like to invite you to dinner.|Wir möchten dich zum Abendessen einladen.
the invitation|die Einladung||n
the party|die Party||n
the birthday|der Geburtstag||n
the barbecue|das Grillfest||n
to celebrate|feiern||v
to accept|annehmen||v
to turn down|ablehnen||v
to be free|Zeit haben||v|Are you free on Friday?|Hast du Freitag Zeit?
to fancy|Lust haben auf||v|Do you fancy a drink after work?|Hast du Lust auf einen Drink nach der Arbeit?
How about …?|Wie wäre es mit …?||ph|How about Saturday?|Wie wäre es mit Samstag?
Why don't we …?|Warum … wir nicht?||ph
I'd love to.|Sehr gern.||ph
I'm afraid I can't.|Leider kann ich nicht.||ph
another time|ein andermal||ph|Maybe another time?|Vielleicht ein andermal?
to bring|mitbringen||v|Shall I bring anything?|Soll ich etwas mitbringen?
the present|das Geschenk||n
to look forward to|sich freuen auf||v|I'm looking forward to it!|Ich freue mich darauf!
to cancel|absagen||v
the dress code|der Dresscode||n`,
  say: `Would you like to come to my birthday party?|Möchtest du zu meiner Geburtstagsparty kommen?
I'd love to! What time does it start?|Sehr gern! Wann fängt sie an?
I'm afraid I can't – I'm working that evening.|Leider kann ich nicht – ich arbeite an dem Abend.
Do you fancy going to the cinema?|Hast du Lust, ins Kino zu gehen?
How about Saturday instead?|Wie wäre es stattdessen mit Samstag?
Shall I bring anything?|Soll ich etwas mitbringen?
I'm really looking forward to it.|Ich freue mich wirklich darauf.`,
  gram: [
    ["h", TB("Einladen, vorschlagen, reagieren", "Inviting, suggesting, responding")],
    ["table", { head: [TB("Absicht", "purpose"), TB("so sagst du es", "how to say it")], rows: [
      [TB("einladen", "invite"), "Would you like to come …? / Do you fancy …ing?"],
      [TB("vorschlagen", "suggest"), "How about …ing? / Why don't we …? / Let's …"],
      [TB("zusagen", "accept"), "I'd love to. / That sounds great!"],
      [TB("absagen", "decline"), "I'm afraid I can't. / I'd love to, but …"],
      [TB("anbieten", "offer"), "Shall I bring something?"]], say: 1 }],
    ["p", TB("Nach <b>How about</b> und <b>fancy</b> steht die <b>-ing-Form</b>: How about <b>going</b> out? Nach <b>would like</b> steht <b>to</b>: Would you like <b>to come</b>?", "After <b>How about</b> and <b>fancy</b> use the <b>-ing form</b>: How about <b>going</b> out? After <b>would like</b> use <b>to</b>: Would you like <b>to come</b>?")],
    ["tip", TB("Ein einfaches <s>No.</s> klingt im Englischen unhöflich. Besser: <b>I'd love to, but I'm afraid I can't. Maybe another time?</b>", "A plain “No.” sounds rude in English. Better: <b>I'd love to, but I'm afraid I can't. Maybe another time?</b>")]
  ],
  drill: [
    ["Would you like ___ to dinner on Friday?", ["to come", "coming", "come"], 0],
    ["Do you fancy ___ to the beach?", ["going", "to go", "go"], 0],
    ["How about ___ a pizza tonight?", ["ordering", "to order", "order"], 0],
    ["___ I bring some wine?", ["Shall", "Will", "Do"], 0],
    ["I'm really looking forward to ___ you.", ["seeing", "see", "saw"], 0],
    ["I'd love to, but I'm ___ I can't.", ["afraid", "sorry that", "fear"], 0],
    ["Lass uns ins Kino gehen! → ___ go to the cinema!", "Let's"]
  ],
  talk: { t: TB("Eine Einladung", "An invitation"), scene: TB("Dein Kollege Chris lädt dich zu seiner Grillparty ein.", "Your colleague Chris invites you to his barbecue."), who: "Chris", slots: {}, lines: `a|Hey, we're having a barbecue on Saturday. Would you like to come?|Hey, wir grillen am Samstag. Möchtest du kommen?|
me|I'd love to! What time does it start?|Sehr gern! Wann geht's los?||That sounds great! What time?
a|Around four. Is that OK for you?|So gegen vier. Passt dir das?|
me|I'm afraid I'm working until five. Can I come a bit later?|Leider arbeite ich bis fünf. Kann ich etwas später kommen?||I work until five. Is it OK if I come later?
a|Of course, no problem!|Natürlich, kein Problem!|
me|Great. Shall I bring anything?|Super. Soll ich etwas mitbringen?||Should I bring something?
a|Maybe a salad or something to drink?|Vielleicht einen Salat oder etwas zu trinken?|
me|Sure, I'll bring a salad. I'm really looking forward to it!|Klar, ich bringe einen Salat mit. Ich freue mich schon sehr!||OK, I'll bring a salad. See you on Saturday!` }
});

lesson("A2", { id: "en-a2-08", t: TB("Food & cooking – <i>some / any, much / many</i>", "Food & cooking – <i>some / any, much / many</i>"),
  goal: TB("Du kannst über Essen und Einkäufe sprechen, ein Rezept verstehen und Mengen richtig ausdrücken.", "You can talk about food and shopping, follow a recipe and talk about quantities correctly."),
  words: `the ingredient|die Zutat||n|What ingredients do we need?|Welche Zutaten brauchen wir?
the recipe|das Rezept (Kochen)||n
the onion|die Zwiebel||n
the garlic|der Knoblauch||n
the pepper|der Pfeffer; die Paprika||n
the flour|das Mehl||n
the butter|die Butter||n
the egg|das Ei||n
the rice|der Reis||n
the oil|das Öl||n
to chop|klein schneiden||v|Chop the onions.|Schneide die Zwiebeln klein.
to fry|braten||v
to boil|kochen (in Wasser)||v
to bake|backen||v
to stir|umrühren||v
to add|hinzufügen||v|Add a pinch of salt.|Gib eine Prise Salz dazu.
the pan|die Pfanne||n
the oven|der Ofen||n|Preheat the oven to 180 degrees.|Heize den Ofen auf 180 Grad vor.
spicy|scharf||adj
a bit of|ein bisschen||ph`,
  say: `Is there any milk in the fridge?|Ist noch Milch im Kühlschrank?
We need some eggs and a bit of butter.|Wir brauchen ein paar Eier und ein bisschen Butter.
How much sugar do I need?|Wie viel Zucker brauche ich?
How many people are coming?|Wie viele Leute kommen?
There isn't much time left.|Es ist nicht mehr viel Zeit übrig.
Can you pass me the salt, please?|Kannst du mir bitte das Salz geben?
This is delicious – can I have the recipe?|Das ist köstlich – kann ich das Rezept haben?`,
  gram: [
    ["h", TB("Zählbar oder nicht zählbar?", "Countable or uncountable?")],
    ["table", { head: ["", TB("zählbar", "countable"), TB("nicht zählbar", "uncountable")], rows: [["", "an egg, two onions", "rice, milk, butter, water"], [TB("wie viel(e)?", "how much / many?"), "How many eggs?", "How much milk?"], [TB("viel(e)", "a lot"), "many eggs / a lot of eggs", "much milk / a lot of milk"], [TB("ein paar / etwas", "some"), "some eggs", "some milk"]], say: 1 }],
    ["p", TB("<b>some</b> in Aussagen, <b>any</b> in Fragen und Verneinungen: We need <b>some</b> eggs. Have we got <b>any</b> eggs? We haven't got <b>any</b> milk. Bei Angeboten und Bitten aber <b>some</b>: Would you like <b>some</b> tea?", "<b>some</b> in positive sentences, <b>any</b> in questions and negatives: We need <b>some</b> eggs. Have we got <b>any</b> eggs? We haven't got <b>any</b> milk. But for offers and requests: Would you like <b>some</b> tea?")],
    ["tip", TB("Im Alltag sagt man in Aussagen eher <b>a lot of</b> als <i>much/many</i>: I drink <b>a lot of</b> coffee.", "In everyday positive sentences people prefer <b>a lot of</b> to <i>much/many</i>: I drink <b>a lot of</b> coffee.")]
  ],
  drill: [
    ["How ___ eggs do we need?", ["many", "much", "lot"], 0],
    ["How ___ flour is there?", ["much", "many", "lot of"], 0],
    ["Have we got ___ garlic?", ["any", "some", "a"], 0],
    ["Would you like ___ cake?", ["some", "any", "many"], 0, TB("Angebot → some.", "Offer → some.")],
    ["There isn't ___ rice left.", ["much", "many", "some"], 0],
    ["She drinks a ___ of coffee.", ["lot", "lots", "much"], 0],
    ["Wir brauchen ein paar Zwiebeln. → We need ___ onions.", "some"]
  ],
  talk: { t: TB("Gemeinsam kochen", "Cooking together"), scene: TB("Du kochst mit deiner Mitbewohnerin Grace ein Curry.", "You're cooking a curry with your flatmate Grace."), who: "Grace", slots: {}, lines: `a|OK, let's make the curry. Have we got any onions?|Okay, machen wir das Curry. Haben wir Zwiebeln?|
me|Yes, there are some in the cupboard. How many do we need?|Ja, es sind welche im Schrank. Wie viele brauchen wir?||Yes, we've got some. How many?
a|Two. Can you chop them?|Zwei. Kannst du sie klein schneiden?|
me|Sure. How much rice should I cook?|Klar. Wie viel Reis soll ich kochen?||Of course. And how much rice do we need?
a|About 300 grams. Oh no, there isn't any coconut milk!|Etwa 300 Gramm. Oh nein, es ist keine Kokosmilch da!|
me|No problem, I'll go to the shop. Do we need anything else?|Kein Problem, ich gehe zum Laden. Brauchen wir sonst noch etwas?||I'll get some. Anything else?
a|Maybe some fresh coriander. And we haven't got much rice left either.|Vielleicht frischen Koriander. Und Reis haben wir auch nicht mehr viel.|
me|OK, coconut milk, coriander and rice. Back in ten minutes!|Okay, Kokosmilch, Koriander und Reis. In zehn Minuten bin ich zurück!||Got it. I'll be back in ten minutes!` }
});
