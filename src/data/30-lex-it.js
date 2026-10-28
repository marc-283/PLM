/* ================= Verb dictionary: Italian =================
   Line: infinitive | Deutsch | English | flags
   flags (separated by ";"): e = passato prossimo with essere, ae = avere or essere, isc = -isc- verb,
   irr = irregular, pp:… participle, P:/CP:/F:/I:/IMP: … forms (comma separated), like:base = forms of a base verb with a prefix (ottenere → tenere) */
const VERBS = {};
VERBS.it = `essere|sein|to be|e;irr
avere|haben|to have|irr
fare|machen; tun|to do; to make|irr
dire|sagen|to say; to tell|irr
andare|gehen; fahren|to go|e;irr
potere|können; dürfen|can; to be able to|irr
volere|wollen|to want|irr
dovere|müssen|must; to have to|irr
sapere|wissen; können (gelernt)|to know; to know how to|irr
stare|bleiben; sich befinden|to stay; to be|e;irr
venire|kommen|to come|e;irr
dare|geben|to give|irr
vedere|sehen|to see|pp:visto;F:vedrò, vedrai, vedrà, vedremo, vedrete, vedranno
parlare|sprechen|to speak; to talk|
prendere|nehmen|to take|pp:preso
mettere|legen; stellen; setzen|to put|pp:messo
uscire|ausgehen; hinausgehen|to go out|e;irr
sentire|hören; fühlen|to hear; to feel|
pensare|denken|to think|
trovare|finden|to find|
lasciare|lassen; verlassen|to leave; to let|
chiamare|rufen; anrufen|to call|
chiamarsi|heißen|to be called|
lavorare|arbeiten|to work|
mangiare|essen|to eat|
bere|trinken|to drink|irr
dormire|schlafen|to sleep|
capire|verstehen|to understand|isc
finire|beenden; aufhören|to finish; to end|isc;ae
cercare|suchen|to look for|
abitare|wohnen|to live (somewhere)|
vivere|leben|to live|ae;pp:vissuto;F:vivrò, vivrai, vivrà, vivremo, vivrete, vivranno
studiare|lernen; studieren|to study|
leggere|lesen|to read|pp:letto
scrivere|schreiben|to write|pp:scritto
aprire|öffnen|to open|pp:aperto
chiudere|schließen|to close|pp:chiuso
arrivare|ankommen|to arrive|e
partire|abfahren; abreisen|to leave; to depart|e
tornare|zurückkommen|to come back; to return|e
entrare|hineingehen; eintreten|to enter; to go in|e
restare|bleiben|to stay; to remain|e
rimanere|bleiben|to stay; to remain|e;irr
diventare|werden|to become|e
sembrare|scheinen; wirken|to seem|e
piacere|gefallen; mögen|to like; to please|e;irr
conoscere|kennen; kennenlernen|to know; to meet|pp:conosciuto
credere|glauben|to believe|
chiedere|fragen; bitten|to ask|pp:chiesto
rispondere|antworten|to answer; to reply|pp:risposto
aspettare|warten|to wait|
pagare|bezahlen|to pay|
comprare|kaufen|to buy|
vendere|verkaufen|to sell|
ascoltare|zuhören; hören|to listen|
guardare|ansehen; schauen|to look at; to watch|
giocare|spielen|to play|
cominciare|anfangen; beginnen|to begin; to start|ae
incominciare|anfangen|to begin|ae
imparare|lernen|to learn|
insegnare|unterrichten; lehren|to teach|
usare|benutzen|to use|
portare|bringen; tragen|to bring; to carry; to wear|
mandare|schicken|to send|
spedire|verschicken|to send; to ship|isc
ricevere|bekommen; empfangen|to receive|
aiutare|helfen|to help|
amare|lieben|to love|
odiare|hassen|to hate|
preferire|bevorzugen; lieber mögen|to prefer|isc
desiderare|wünschen|to wish; to desire|
sperare|hoffen|to hope|
cambiare|ändern; wechseln|to change|ae
provare|probieren; versuchen|to try|
decidere|entscheiden|to decide|pp:deciso
scegliere|wählen; aussuchen|to choose|irr
perdere|verlieren; verpassen|to lose; to miss|pp:perso
vincere|gewinnen|to win|pp:vinto
correre|laufen; rennen|to run|ae;pp:corso
camminare|gehen; spazieren|to walk|
passeggiare|spazieren gehen|to go for a walk|
viaggiare|reisen|to travel|
volare|fliegen|to fly|ae
nuotare|schwimmen|to swim|
ballare|tanzen|to dance|
cantare|singen|to sing|
suonare|spielen (Instrument); klingeln|to play (an instrument); to ring|
ridere|lachen|to laugh|pp:riso
sorridere|lächeln|to smile|like:ridere
piangere|weinen|to cry|pp:pianto
cucinare|kochen|to cook|
cuocere|garen; kochen|to cook (food)|P:cuocio, cuoci, cuoce, cuociamo, cuocete, cuociono;CP:cuocia, cuocia, cuocia, cuociamo, cuociate, cuociano;pp:cotto
pulire|putzen|to clean|isc
lavare|waschen|to wash|
lavarsi|sich waschen|to wash (oneself)|
alzarsi|aufstehen|to get up|
svegliarsi|aufwachen|to wake up|
addormentarsi|einschlafen|to fall asleep|
vestirsi|sich anziehen|to get dressed|
spogliarsi|sich ausziehen|to get undressed|
divertirsi|sich amüsieren|to have fun|
annoiarsi|sich langweilen|to get bored|
riposarsi|sich ausruhen|to rest|
rilassarsi|sich entspannen|to relax|
sentirsi|sich fühlen|to feel|
preoccuparsi|sich Sorgen machen|to worry|
arrabbiarsi|sich ärgern|to get angry|
sbrigarsi|sich beeilen|to hurry up|
fermarsi|anhalten; stehen bleiben|to stop|
sposarsi|heiraten|to get married|
innamorarsi|sich verlieben|to fall in love|
ricordarsi|sich erinnern|to remember|
dimenticarsi|vergessen|to forget|
trasferirsi|umziehen (in eine andere Stadt)|to move (to another place)|isc
laurearsi|den Abschluss machen|to graduate|
iscriversi|sich anmelden|to sign up; to enrol|like:scrivere
accorgersi|bemerken|to notice|pp:accorto
sedersi|sich setzen|to sit down|irr;P:mi siedo, ti siedi, si siede, ci sediamo, vi sedete, si siedono;CP:mi sieda, ti sieda, si sieda, ci sediamo, vi sediate, si siedano
abituarsi|sich gewöhnen|to get used to|
truccarsi|sich schminken|to put on make-up|
pettinarsi|sich kämmen|to comb one's hair|
ricordare|sich erinnern an|to remember|
dimenticare|vergessen|to forget|
pranzare|zu Mittag essen|to have lunch|
cenare|zu Abend essen|to have dinner|
ordinare|bestellen|to order|
prenotare|reservieren; buchen|to book; to reserve|
affittare|mieten; vermieten|to rent|
guidare|fahren (Auto); lenken|to drive|
parcheggiare|parken|to park|
scendere|aussteigen; hinuntergehen|to get off; to go down|ae;pp:sceso
salire|einsteigen; hinaufgehen|to get on; to go up|ae;P:salgo, sali, sale, saliamo, salite, salgono;CP:salga, salga, salga, saliamo, saliate, salgano
cadere|fallen|to fall|e;F:cadrò, cadrai, cadrà, cadremo, cadrete, cadranno
nascere|geboren werden|to be born|e;pp:nato
morire|sterben|to die|e;irr;P:muoio, muori, muore, moriamo, morite, muoiono;CP:muoia, muoia, muoia, moriamo, moriate, muoiano;pp:morto
crescere|wachsen; aufwachsen|to grow; to grow up|ae;pp:cresciuto
succedere|passieren; geschehen|to happen|e;pp:successo
accadere|geschehen|to happen|e;F:accadrò, accadrai, accadrà, accadremo, accadrete, accadranno
costare|kosten|to cost|e
durare|dauern|to last|e
bastare|reichen; genügen|to be enough|e
mancare|fehlen; vermissen|to be missing; to miss|e
servire|dienen; brauchen (mir serve)|to serve; to be needed|ae
bisognare|nötig sein|to be necessary|e
riuscire|schaffen; gelingen|to manage; to succeed|e;like:uscire
fuggire|fliehen|to flee; to run away|e
sparire|verschwinden|to disappear|e;isc
apparire|erscheinen|to appear|e;irr;P:appaio, appari, appare, appariamo, apparite, appaiono;CP:appaia, appaia, appaia, appariamo, appariate, appaiano;pp:apparso
scomparire|verschwinden|to disappear|e;like:apparire
esistere|existieren|to exist|e;pp:esistito
dipendere|abhängen|to depend|e;pp:dipeso
mostrare|zeigen|to show|
spiegare|erklären|to explain|
raccontare|erzählen|to tell (a story)|
descrivere|beschreiben|to describe|like:scrivere
tradurre|übersetzen|to translate|irr;P:traduco, traduci, traduce, traduciamo, traducete, traducono;CP:traduca, traduca, traduca, traduciamo, traduciate, traducano;F:tradurrò, tradurrai, tradurrà, tradurremo, tradurrete, tradurranno;pp:tradotto
produrre|herstellen; produzieren|to produce|like:tradurre
condurre|führen; leiten|to lead; to conduct|like:tradurre
ridurre|reduzieren|to reduce|like:tradurre
introdurre|einführen|to introduce|like:tradurre
porre|stellen; legen|to put; to pose|irr;P:pongo, poni, pone, poniamo, ponete, pongono;CP:ponga, ponga, ponga, poniamo, poniate, pongano;F:porrò, porrai, porrà, porremo, porrete, porranno;pp:posto
proporre|vorschlagen|to propose; to suggest|like:porre
comporre|zusammensetzen; komponieren|to compose; to dial|like:porre
supporre|annehmen; vermuten|to suppose|like:porre
esporre|ausstellen; darlegen|to exhibit; to explain|like:porre
imporre|aufzwingen|to impose|like:porre
trarre|ziehen|to draw; to pull|irr;P:traggo, trai, trae, traiamo, traete, traggono;CP:tragga, tragga, tragga, traiamo, traiate, traggano;F:trarrò, trarrai, trarrà, trarremo, trarrete, trarranno;pp:tratto
attrarre|anziehen|to attract|like:trarre
distrarre|ablenken|to distract|like:trarre
tenere|halten|to hold; to keep|irr
ottenere|erhalten; erreichen|to obtain; to get|like:tenere
mantenere|erhalten; behalten|to maintain; to keep|like:tenere
contenere|enthalten|to contain|like:tenere
sostenere|unterstützen; behaupten|to support; to claim|like:tenere
appartenere|gehören|to belong|ae;like:tenere
trattenere|zurückhalten|to hold back|like:tenere
convenire|sich lohnen; vereinbaren|to be worth it; to agree|e;like:venire
intervenire|eingreifen|to intervene|e;like:venire
avvenire|geschehen|to happen|e;like:venire
prevenire|vorbeugen|to prevent|like:venire
svenire|ohnmächtig werden|to faint|e;like:venire
divenire|werden|to become|e;like:venire
promettere|versprechen|to promise|like:mettere
permettere|erlauben|to allow; to permit|like:mettere
smettere|aufhören|to stop (doing)|like:mettere
ammettere|zugeben|to admit|like:mettere
scommettere|wetten|to bet|like:mettere
trasmettere|übertragen; senden|to transmit; to broadcast|like:mettere
comprendere|verstehen; umfassen|to understand; to include|like:prendere
sorprendere|überraschen|to surprise|like:prendere
riprendere|wieder aufnehmen|to resume; to take back|like:prendere
apprendere|erfahren; lernen|to learn|like:prendere
intraprendere|unternehmen|to undertake|like:prendere
richiedere|anfordern; erfordern|to request; to require|like:chiedere
nascondere|verstecken|to hide|pp:nascosto
prevedere|vorhersehen|to foresee; to predict|like:vedere
rivedere|wiedersehen; überarbeiten|to see again; to revise|like:vedere
riconoscere|erkennen; anerkennen|to recognize|like:conoscere
sopravvivere|überleben|to survive|e;like:vivere
dispiacere|leidtun|to be sorry|e;like:piacere
raccogliere|sammeln; aufheben|to collect; to pick up|like:cogliere
accogliere|empfangen; aufnehmen|to welcome|like:cogliere
cogliere|pflücken; ergreifen|to pick; to seize|irr;P:colgo, cogli, coglie, cogliamo, cogliete, colgono;CP:colga, colga, colga, cogliamo, cogliate, colgano;pp:colto
togliere|wegnehmen; ausziehen|to take off; to remove|irr;P:tolgo, togli, toglie, togliamo, togliete, tolgono;CP:tolga, tolga, tolga, togliamo, togliate, tolgano;pp:tolto
sciogliere|lösen; schmelzen|to untie; to melt|irr;P:sciolgo, sciogli, scioglie, sciogliamo, sciogliete, sciolgono;CP:sciolga, sciolga, sciolga, sciogliamo, sciogliate, sciolgano;pp:sciolto
spegnere|ausschalten; löschen|to switch off|irr;P:spengo, spegni, spegne, spegniamo, spegnete, spengono;CP:spenga, spenga, spenga, spegniamo, spegniate, spengano;pp:spento
accendere|einschalten; anzünden|to switch on; to light|pp:acceso
valere|wert sein; gelten|to be worth|e;irr;P:valgo, vali, vale, valiamo, valete, valgono;CP:valga, valga, valga, valiamo, valiate, valgano;F:varrò, varrai, varrà, varremo, varrete, varranno;pp:valso
tacere|schweigen|to be silent|irr;P:taccio, taci, tace, tacciamo, tacete, tacciono;CP:taccia, taccia, taccia, tacciamo, tacciate, tacciano;pp:taciuto
muovere|bewegen|to move|pp:mosso
muoversi|sich bewegen|to move; to hurry|pp:mosso
commuovere|rühren (emotional)|to move (emotionally)|like:muovere
rompere|zerbrechen; kaputt machen|to break|pp:rotto
spendere|ausgeben (Geld)|to spend (money)|pp:speso
offendere|beleidigen|to offend|pp:offeso
difendere|verteidigen|to defend|pp:difeso
attendere|warten; erwarten|to wait; to await|pp:atteso
sospendere|aussetzen; unterbrechen|to suspend|pp:sospeso
dividere|teilen|to divide; to share|pp:diviso
condividere|teilen (mit jdm.)|to share|like:dividere
uccidere|töten|to kill|pp:ucciso
concludere|abschließen|to conclude|pp:concluso
includere|einschließen|to include|pp:incluso
escludere|ausschließen|to exclude|pp:escluso
deludere|enttäuschen|to disappoint|pp:deluso
convincere|überzeugen|to convince|pp:convinto
dipingere|malen|to paint|pp:dipinto
spingere|schieben; drücken|to push|pp:spinto
raggiungere|erreichen|to reach|pp:raggiunto
aggiungere|hinzufügen|to add|pp:aggiunto
correggere|korrigieren|to correct|pp:corretto
proteggere|schützen|to protect|pp:protetto
distruggere|zerstören|to destroy|pp:distrutto
dirigere|leiten; dirigieren|to direct; to manage|pp:diretto
discutere|diskutieren|to discuss|pp:discusso
esprimere|ausdrücken|to express|pp:espresso
concedere|gewähren|to grant|pp:concesso
emergere|auftauchen|to emerge|e;pp:emerso
resistere|widerstehen|to resist|pp:resistito
insistere|darauf bestehen|to insist|pp:insistito
assistere|beiwohnen; betreuen|to attend; to assist|pp:assistito
offrire|anbieten; spendieren|to offer|pp:offerto
soffrire|leiden|to suffer|pp:sofferto
coprire|bedecken|to cover|pp:coperto
scoprire|entdecken|to discover|pp:scoperto
seguire|folgen|to follow|
servirsi|sich bedienen|to help oneself|
consentire|erlauben|to allow|
mentire|lügen|to lie|
bollire|kochen (Wasser)|to boil|ae
costruire|bauen|to build|isc
restituire|zurückgeben|to give back; to return|isc
sostituire|ersetzen|to replace|isc
distribuire|verteilen|to distribute|isc
contribuire|beitragen|to contribute|isc
fornire|liefern|to supply; to provide|isc
gestire|verwalten; managen|to manage|isc
garantire|garantieren|to guarantee|isc
impedire|verhindern|to prevent|isc
suggerire|vorschlagen|to suggest|isc
reagire|reagieren|to react|isc
agire|handeln|to act|isc
colpire|treffen; schlagen|to hit; to strike|isc
ferire|verletzen|to wound; to hurt|isc
guarire|heilen; gesund werden|to heal; to recover|isc;ae
stabilire|festlegen|to establish; to set|isc
definire|definieren|to define|isc
proibire|verbieten|to forbid|isc
unire|vereinen; verbinden|to unite; to join|isc
punire|bestrafen|to punish|isc
dimagrire|abnehmen (Gewicht)|to lose weight|isc;e
ingrassare|zunehmen (Gewicht)|to put on weight|e
arrossire|erröten|to blush|isc;e
obbedire|gehorchen|to obey|isc
chiarire|klären|to clarify|isc
favorire|begünstigen|to favour|isc
inserire|einfügen|to insert|isc
digerire|verdauen|to digest|isc
approfondire|vertiefen|to deepen|isc
tradire|verraten; betrügen|to betray|isc
partorire|gebären|to give birth|isc
condire|würzen; anmachen|to season; to dress|isc
avvertire|warnen; benachrichtigen|to warn; to notify|
divertire|unterhalten|to entertain|
vestire|anziehen|to dress|
coltivare|anbauen|to grow; to cultivate|
abbracciare|umarmen|to hug|
baciare|küssen|to kiss|
salutare|grüßen|to greet; to say goodbye|
presentare|vorstellen|to introduce; to present|
invitare|einladen|to invite|
accettare|annehmen|to accept|
rifiutare|ablehnen|to refuse|
ringraziare|danken|to thank|
scusare|entschuldigen|to excuse|
scusarsi|sich entschuldigen|to apologize|
festeggiare|feiern|to celebrate|
regalare|schenken|to give (as a present)|
telefonare|telefonieren; anrufen|to phone|
rispettare|respektieren|to respect|
fidarsi|vertrauen|to trust|
preparare|vorbereiten; zubereiten|to prepare|
organizzare|organisieren|to organize|
pianificare|planen|to plan|
progettare|planen; entwerfen|to plan; to design|
controllare|kontrollieren; prüfen|to check|
risolvere|lösen|to solve|pp:risolto
sbagliare|sich irren; falsch machen|to make a mistake|
sbagliarsi|sich irren|to be wrong|
riparare|reparieren|to repair|
funzionare|funktionieren|to work (machine)|
rompersi|kaputtgehen; sich brechen|to break|pp:rotto
accompagnare|begleiten|to accompany|
incontrare|treffen; begegnen|to meet|
conoscersi|sich kennenlernen|to get to know each other|pp:conosciuto
frequentare|besuchen (Kurs); verkehren mit|to attend; to hang out with|
visitare|besichtigen; untersuchen|to visit; to examine|
noleggiare|leihen; mieten (Auto)|to rent; to hire|
prestare|leihen (verleihen)|to lend|
restare|bleiben|to stay|e
abbandonare|verlassen; aufgeben|to abandon|
lamentarsi|sich beschweren|to complain|
discutere|diskutieren; streiten|to discuss; to argue|pp:discusso
litigare|streiten|to argue; to quarrel|
spiegarsi|sich verständlich machen|to explain oneself|
interessarsi|sich interessieren|to be interested|
occuparsi|sich kümmern|to take care of|
dedicarsi|sich widmen|to devote oneself|
impegnarsi|sich anstrengen; sich verpflichten|to commit; to make an effort|
tenersi|sich halten|to hold on; to keep|irr;P:mi tengo, ti tieni, si tiene, ci teniamo, vi tenete, si tengono;CP:mi tenga, ti tenga, si tenga, ci teniamo, vi teniate, si tengano;F:mi terrò, ti terrai, si terrà, ci terremo, vi terrete, si terranno
fumare|rauchen|to smoke|
smettere|aufhören|to stop|like:mettere
continuare|weitermachen; fortsetzen|to continue|
iniziare|beginnen|to begin; to start|ae
terminare|beenden|to end; to finish|ae
fermare|anhalten|to stop|
girare|drehen; abbiegen|to turn|ae
attraversare|überqueren|to cross|
seguire|folgen|to follow|
raggiungere|erreichen|to reach|pp:raggiunto
avvicinarsi|sich nähern|to approach|
allontanarsi|sich entfernen|to move away|
spostare|verschieben|to move; to shift|
spostarsi|sich bewegen; umziehen|to move|
trasferire|versetzen; überweisen|to transfer|isc
riempire|füllen; ausfüllen|to fill (in)|P:riempio, riempi, riempie, riempiamo, riempite, riempiono;CP:riempia, riempia, riempia, riempiamo, riempiate, riempiano
svuotare|leeren|to empty|
toccare|berühren|to touch|
tirare|ziehen; werfen|to pull; to throw|
lanciare|werfen|to throw|
prendersi|sich nehmen|to take (for oneself)|pp:preso
mantenersi|sich finanzieren|to support oneself|like:tenere
allenarsi|trainieren|to train; to work out|
riscaldarsi|sich aufwärmen|to warm up|
allungare|verlängern; dehnen|to lengthen; to stretch|
sollevare|heben|to lift|
spingere|drücken; schieben|to push|pp:spinto
respirare|atmen|to breathe|
sudare|schwitzen|to sweat|
bruciare|brennen; verbrennen|to burn|ae
risparmiare|sparen|to save (money)|
guadagnare|verdienen|to earn|
investire|investieren|to invest|
prelevare|abheben|to withdraw (money)|
versare|einzahlen; gießen|to deposit; to pour|
firmare|unterschreiben|to sign|
compilare|ausfüllen|to fill in|
consegnare|abgeben; liefern|to hand in; to deliver|
ritirare|abholen|to pick up; to collect|
rinunciare|verzichten|to give up|
rispondere|antworten|to answer|pp:risposto
cancellare|löschen; absagen|to delete; to cancel|
scaricare|herunterladen; entladen|to download; to unload|
caricare|hochladen; laden|to upload; to load|
salvare|speichern; retten|to save|
stampare|drucken|to print|
cliccare|klicken|to click|
collegarsi|sich verbinden|to connect|
installare|installieren|to install|
aggiornare|aktualisieren|to update|
condividere|teilen|to share|like:dividere
partecipare|teilnehmen|to take part|
votare|wählen (Wahl)|to vote|
sognare|träumen|to dream|
immaginare|sich vorstellen|to imagine|
notare|bemerken|to notice|
osservare|beobachten|to observe|
considerare|betrachten; berücksichtigen|to consider|
confrontare|vergleichen|to compare|
dimostrare|beweisen; zeigen|to demonstrate; to prove|
convincersi|sich überzeugen|to become convinced|pp:convinto
dubitare|zweifeln|to doubt|
temere|fürchten|to fear|
evitare|vermeiden|to avoid|
rischiare|riskieren|to risk|
tentare|versuchen|to try; to attempt|
ottenere|bekommen; erreichen|to obtain|like:tenere
aumentare|steigen; erhöhen|to increase|ae
diminuire|sinken; verringern|to decrease|isc;ae
migliorare|verbessern; besser werden|to improve|ae
peggiorare|verschlechtern|to get worse|ae
sviluppare|entwickeln|to develop|
crescere|wachsen|to grow|ae;pp:cresciuto
nevicare|schneien|to snow|ae
piovere|regnen|to rain|ae
`;
