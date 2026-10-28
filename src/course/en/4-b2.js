/* English B2 · 1–3 */
lesson("B2", { id: "en-b2-01", t: TB("Making a case – Konnektoren", "Making a case – Linking words"),
  goal: TB("Du kannst Argumente strukturieren, Gegensätze ausdrücken und eine Position überzeugend vertreten.", "You can structure arguments, express contrast and argue a position convincingly."),
  words: `although|obwohl||x|Although it was expensive, it was worth it.|Obwohl es teuer war, hat es sich gelohnt.
even though|obwohl (betont)||x
despite|trotz||x|Despite the rain, we went out.|Trotz des Regens sind wir rausgegangen.
in spite of|trotz||x
however|jedoch||adv
whereas|wohingegen||x|I prefer the city, whereas my partner loves the countryside.|Ich mag lieber die Stadt, wohingegen mein Partner das Land liebt.
on the other hand|andererseits||ph
furthermore|außerdem; ferner||adv
moreover|darüber hinaus||adv
therefore|deshalb; daher||adv
as a result|infolgedessen||ph
due to|aufgrund||ph|The flight was cancelled due to fog.|Der Flug wurde wegen Nebel gestrichen.
in order to|um … zu||ph
to argue|argumentieren; streiten||v
the drawback|der Nachteil||n
the benefit|der Vorteil; der Nutzen||n
to outweigh|überwiegen||v|The benefits outweigh the drawbacks.|Die Vorteile überwiegen die Nachteile.
to point out|darauf hinweisen||v
it's worth considering|es lohnt sich zu bedenken||ph
the trade-off|der Zielkonflikt; der Kompromiss||n`,
  say: `Although remote work is convenient, it can be isolating.|Obwohl Homeoffice bequem ist, kann es isolieren.
Despite the high costs, the project was a success.|Trotz der hohen Kosten war das Projekt ein Erfolg.
On the one hand it saves time; on the other hand it's lonely.|Einerseits spart es Zeit, andererseits ist es einsam.
The benefits clearly outweigh the drawbacks.|Die Vorteile überwiegen klar die Nachteile.
I'd like to point out that the data is from 2019.|Ich möchte darauf hinweisen, dass die Daten von 2019 sind.
That's a fair point; however, I see it differently.|Das ist ein berechtigter Punkt; ich sehe es jedoch anders.`,
  gram: [
    ["h", TB("Gegensätze ausdrücken", "Expressing contrast")],
    ["table", { head: [TB("Konnektor", "connector"), TB("danach folgt", "followed by"), TB("Beispiel", "example")], rows: [
      ["although / even though", TB("ganzer Satz", "a clause"), "Although it rained, we went out."],
      ["despite / in spite of", TB("Nomen oder -ing", "noun or -ing"), "Despite the rain / Despite feeling ill, …"],
      ["however", TB("neuer Satz, mit Komma", "new sentence, with a comma"), "It was cheap. However, it broke quickly."],
      ["whereas / while", TB("Vergleich zweier Seiten", "comparing two sides"), "I like tea, whereas she prefers coffee."]], say: 2 }],
    ["p", TB("Grund und Folge: <b>because of / due to</b> + Nomen, <b>because</b> + Satz, <b>therefore / as a result</b> leiten die Folge ein.", "Cause and result: <b>because of / due to</b> + noun, <b>because</b> + clause, <b>therefore / as a result</b> introduce the result.")],
    ["tip", TB("Typischer Fehler: <s>Despite it was raining</s> → <b>Despite the rain</b> oder <b>Although it was raining</b>. Und nie <s>despite of</s>.", "Typical mistake: <s>Despite it was raining</s> → <b>Despite the rain</b> or <b>Although it was raining</b>. And never <s>despite of</s>.")]
  ],
  quiz: ["en-mistakes"],
  drill: [
    ["___ the bad weather, the festival went ahead.", ["Despite", "Although", "However"], 0],
    ["___ she studied hard, she failed the exam.", ["Although", "Despite", "In spite of"], 0],
    ["The plan is good. ___, it's too expensive.", ["However", "Although", "Despite"], 0],
    ["I work best in the morning, ___ my colleague prefers evenings.", ["whereas", "despite", "therefore"], 0],
    ["The match was cancelled ___ heavy snow.", ["due to", "because", "although"], 0],
    ["The benefits ___ the drawbacks.", ["outweigh", "overweigh", "outweight"], 0],
    ["Trotz des Regens … → In ___ of the rain, …", "spite"]
  ],
  talk: { t: TB("Diskussion im Seminar", "A seminar debate"), scene: TB("Im Seminar diskutiert ihr, ob die Vier-Tage-Woche eingeführt werden sollte. James ist skeptisch.", "In a seminar you're discussing whether a four-day week should be introduced. James is sceptical."), who: "James", slots: {}, lines: `a|I'm not convinced. A four-day week would hurt productivity.|Ich bin nicht überzeugt. Eine Vier-Tage-Woche würde der Produktivität schaden.|
me|That's a fair point. However, several studies show the opposite.|Ein berechtigter Punkt. Mehrere Studien zeigen jedoch das Gegenteil.||I see your point, but studies show the opposite.
a|Such as?|Zum Beispiel?|
me|In the UK trial, productivity stayed the same, although people worked fewer hours.|Im britischen Versuch blieb die Produktivität gleich, obwohl die Leute weniger Stunden arbeiteten.||In the UK trial, productivity didn't fall.
a|But that won't work for hospitals or shops.|Aber für Krankenhäuser oder Läden funktioniert das nicht.|
me|True. Despite that, I think the benefits outweigh the drawbacks.|Stimmt. Trotzdem überwiegen meiner Meinung nach die Vorteile.||That's true, but overall the benefits outweigh the drawbacks.
a|What benefits exactly?|Welche Vorteile genau?|
me|People are less stressed and, as a result, they take fewer sick days.|Die Leute sind weniger gestresst und haben infolgedessen weniger Krankheitstage.||Less stress and therefore fewer sick days.` }
});

lesson("B2", { id: "en-b2-02", t: TB("Regrets – Third conditional und <i>wish</i>", "Regrets – Third conditional and <i>wish</i>"),
  goal: TB("Du kannst über verpasste Chancen sprechen, Bedauern ausdrücken und Wünsche formulieren.", "You can talk about missed opportunities, express regret and make wishes."),
  words: `to regret|bereuen||v|I regret not studying abroad.|Ich bereue, nicht im Ausland studiert zu haben.
the regret|das Bedauern||n
the opportunity|die Gelegenheit||n
to miss out on|verpassen; sich entgehen lassen||v
to turn down an offer|ein Angebot ablehnen||v
if only|wenn doch nur||ph|If only I had listened to you!|Hätte ich doch nur auf dich gehört!
I wish|ich wünschte||ph
hindsight|im Nachhinein||n|In hindsight, it was a mistake.|Im Nachhinein war es ein Fehler.
to look back|zurückblicken||v
the consequence|die Folge||n
to make a mistake|einen Fehler machen||v
to take the plunge|den Sprung wagen||v
to have second thoughts|Zweifel bekommen||v
fortunately|glücklicherweise||adv
by chance|zufällig||ph|We met by chance at a conference.|Wir haben uns zufällig auf einer Konferenz kennengelernt.
should have|hätte … sollen||ph|I should have left earlier.|Ich hätte früher losfahren sollen.
the turning point|der Wendepunkt||n
to make the most of|das Beste machen aus||v
it's no use crying over spilt milk|was passiert ist, ist passiert||ph`,
  say: `If I had known, I would have told you.|Wenn ich es gewusst hätte, hätte ich es dir gesagt.
If we hadn't missed the train, we wouldn't have met.|Wenn wir den Zug nicht verpasst hätten, hätten wir uns nicht kennengelernt.
I wish I had studied harder.|Ich wünschte, ich hätte mehr gelernt.
I wish I could speak Italian fluently.|Ich wünschte, ich könnte fließend Italienisch.
I should have accepted the offer.|Ich hätte das Angebot annehmen sollen.
If only I hadn't said that!|Hätte ich das doch nur nicht gesagt!`,
  gram: [
    ["h", TB("Third conditional – irreale Vergangenheit", "Third conditional – the unreal past")],
    ["p", TB("<b>If + past perfect, would have + Partizip</b>: If I <b>had known</b>, I <b>would have come</b>. Für Dinge, die nicht passiert sind.", "<b>If + past perfect, would have + participle</b>: If I <b>had known</b>, I <b>would have come</b>. For things that didn't happen.")],
    ["h", TB("<i>wish / if only</i>", "<i>wish / if only</i>")],
    ["table", { head: [TB("bezieht sich auf", "refers to"), TB("Form", "form"), TB("Beispiel", "example")], rows: [[TB("Gegenwart", "present"), "wish + past simple", "I wish I had more time."], [TB("Vergangenheit", "past"), "wish + past perfect", "I wish I had taken the job."], [TB("Fähigkeit", "ability"), "wish + could", "I wish I could sing."], [TB("Ärger über andere", "annoyance"), "wish + would", "I wish you would stop talking."]], say: 2 }],
    ["tip", TB("Gemischt: Vergangenheit → Folge heute: If I <b>had studied</b> medicine, I <b>would be</b> a doctor now.", "Mixed: past condition → present result: If I <b>had studied</b> medicine, I <b>would be</b> a doctor now.")]
  ],
  th: "cond",
  quiz: ["en-cond"],
  drill: [
    ["If I ___ about the party, I would have come.", ["had known", "knew", "would know"], 0],
    ["If she had left earlier, she ___ the flight.", ["wouldn't have missed", "wouldn't miss", "hadn't missed"], 0],
    ["I wish I ___ more time to travel. (jetzt)", ["had", "have", "would have"], 0],
    ["I wish I ___ that – it was a mistake. (gestern)", ["hadn't said", "didn't say", "wouldn't say"], 0],
    ["I should ___ the job offer.", ["have accepted", "accepted", "accept"], 0],
    ["If I had studied law, I ___ a lawyer now.", ["would be", "would have been", "am"], 0],
    ["Hätte ich doch nur zugehört! → If ___ I had listened!", "only"]
  ],
  talk: { t: TB("Rückblick", "Looking back"), scene: TB("Beim Abendessen sprichst du mit deinem alten Studienfreund Matt über eure Entscheidungen.", "Over dinner you and your old uni friend Matt talk about the decisions you've made."), who: "Matt", slots: {}, lines: `a|Do you ever regret not doing your master's in London?|Bereust du manchmal, deinen Master nicht in London gemacht zu haben?|
me|Sometimes. If I had gone, my English would be even better now.|Manchmal. Wenn ich gegangen wäre, wäre mein Englisch jetzt noch besser.||A bit. If I'd gone, my English would be better now.
a|But then you wouldn't have met Laura!|Aber dann hättest du Laura nicht kennengelernt!|
me|True. If I hadn't stayed, we would never have met.|Stimmt. Wenn ich nicht geblieben wäre, hätten wir uns nie kennengelernt.||That's true. I wouldn't have met her.
a|I wish I had taken a gap year after school.|Ich wünschte, ich hätte nach der Schule ein Jahr Pause gemacht.|
me|It's not too late! You could take a sabbatical.|Es ist nicht zu spät! Du könntest ein Sabbatical machen.||Why don't you take a sabbatical now?
a|Maybe. But in hindsight, I'm happy with my choices.|Vielleicht. Aber im Nachhinein bin ich mit meinen Entscheidungen zufrieden.|
me|Me too. There's no point in regretting things.|Ich auch. Es bringt nichts, Dinge zu bereuen.||Same here. It's no use crying over spilt milk.` }
});

lesson("B2", { id: "en-b2-03", t: TB("Meetings – Diplomatisch formulieren", "Meetings – Diplomatic language"),
  goal: TB("Du kannst in Meetings höflich widersprechen, Vorschläge machen und Kritik abfedern.", "You can disagree politely in meetings, make suggestions and soften criticism."),
  words: `the agenda|die Tagesordnung||n|Let's move on to the next item on the agenda.|Kommen wir zum nächsten Punkt der Tagesordnung.
to chair a meeting|eine Besprechung leiten||v
the minutes|das Protokoll||n|Could you take the minutes?|Könntest du Protokoll führen?
to sum up|zusammenfassen||v
to clarify|klarstellen; klären||v
to raise a point|einen Punkt ansprechen||v
the concern|die Sorge; das Bedenken||n|I have some concerns about the budget.|Ich habe einige Bedenken wegen des Budgets.
the stakeholder|der Interessenvertreter; der Stakeholder||n
the proposal|der Vorschlag||n
to postpone|verschieben||v|We'll have to postpone the launch.|Wir müssen den Start verschieben.
to follow up|nachfassen; weiterverfolgen||v
the action point|die nächste Aufgabe (aus dem Meeting)||n
slightly|etwas; leicht||adv
a bit of a|ein bisschen ein||ph|That might be a bit of a problem.|Das könnte ein bisschen ein Problem sein.
to some extent|bis zu einem gewissen Grad||ph
to be on the same page|auf dem gleichen Stand sein||ph
to touch base|sich kurz abstimmen||ph
feasible|machbar||adj
to go over budget|das Budget überschreiten||v
the deadline is tight|die Frist ist knapp||ph`,
  say: `I see what you mean, but I'm not sure that's feasible.|Ich verstehe, was du meinst, aber ich bin nicht sicher, ob das machbar ist.
Could I just come in here?|Darf ich kurz einhaken?
I'm afraid I have to disagree.|Leider muss ich widersprechen.
Wouldn't it be better to postpone the launch?|Wäre es nicht besser, den Start zu verschieben?
Just to clarify – are we talking about Q3?|Nur zur Klarstellung – reden wir über Q3?
So, to sum up: we'll go with option B.|Also, zusammengefasst: Wir nehmen Option B.
Let's touch base again next week.|Stimmen wir uns nächste Woche nochmal ab.`,
  gram: [
    ["h", TB("Diplomatisch statt direkt", "Diplomatic instead of direct")],
    ["table", { head: [TB("direkt", "direct"), TB("diplomatisch", "diplomatic")], rows: [["That's wrong.", "I'm not sure that's quite right."], ["That's a bad idea.", "I'm not convinced that would work."], ["We must change it.", "It might be worth changing it."], ["It's too expensive.", "It seems slightly expensive."], ["You didn't finish it.", "It looks like it isn't quite finished yet."]], say: 1 }],
    ["p", TB("Weichmacher: <b>might, could, would</b>, <b>slightly / a bit</b>, <b>I'm afraid</b>, <b>it seems</b>, verneinte Fragen (<i>Wouldn't it be better …?</i>) und Passiv (<i>Mistakes were made</i>).", "Softeners: <b>might, could, would</b>, <b>slightly / a bit</b>, <b>I'm afraid</b>, <b>it seems</b>, negative questions (<i>Wouldn't it be better …?</i>) and the passive (<i>Mistakes were made</i>).")],
    ["tip", TB("Deutsche Direktheit wirkt auf Briten schnell schroff. „Quite interesting“ kann im britischen Englisch sogar höfliche Ablehnung bedeuten!", "German directness can sound blunt to British ears. In British English “quite interesting” can even be a polite way of saying no!")]
  ],
  drill: [
    ["I'm ___ I can't agree with that.", ["afraid", "sorry that", "fear"], 0],
    ["___ it be better to wait until next quarter?", ["Wouldn't", "Won't", "Isn't"], 0],
    ["The deadline seems ___ tight.", ["slightly", "slight", "a slightly"], 0],
    ["Could I just come ___ here?", ["in", "on", "up"], 0],
    ["Let's move ___ to the next point.", ["on", "in", "over"], 0],
    ["Just to ___ – do you mean the UK team?", ["clarify", "clear", "clean"], 0],
    ["Wir müssen das Meeting verschieben. → We have to ___ the meeting.", "postpone"]
  ],
  talk: { t: TB("Projektmeeting", "Project meeting"), scene: TB("Im Projektmeeting schlägt Projektleiterin Sophie einen sehr knappen Zeitplan vor.", "In a project meeting the project lead Sophie proposes a very tight schedule."), who: "Sophie", slots: {}, lines: `a|So, my proposal is to launch the new app on the first of March.|Also, mein Vorschlag ist, die neue App am ersten März zu starten.|
me|Could I just come in here? I'm not sure that's feasible.|Darf ich kurz einhaken? Ich bin nicht sicher, ob das machbar ist.||I'm not sure that's realistic.
a|Why not? What are your concerns?|Warum nicht? Was sind deine Bedenken?|
me|Testing hasn't finished yet, and the deadline seems a bit tight.|Die Tests sind noch nicht abgeschlossen, und die Frist scheint etwas knapp.||We haven't finished testing yet.
a|I see your point. What would you suggest?|Ich verstehe. Was würdest du vorschlagen?|
me|Wouldn't it be better to postpone the launch by two weeks?|Wäre es nicht besser, den Start um zwei Wochen zu verschieben?||Maybe we could launch two weeks later?
a|OK, that sounds reasonable. Can you check with the developers?|Okay, das klingt vernünftig. Kannst du das mit den Entwicklern klären?|
me|Sure, I'll follow up today and touch base with you tomorrow.|Klar, ich kümmere mich heute darum und melde mich morgen bei dir.||Of course, I'll follow up and get back to you tomorrow.` }
});
