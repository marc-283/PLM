/* ================= Phrasebook ("Sprachführer") data =================
   pb(code, BCP-47 tag, flag, German name, English name, own name, intro, basics, insults)
   intro / basics / love: "key|text|pronunciation|note" – the meaning comes from PB_KEYS (same for every language).
   insults: "text|pronunciation|German|English|level 1–3|note".
   Pronunciation: Latin-script languages get a respelling for German speakers, the stressed syllable in CAPITALS;
   other scripts get their usual romanization (pinyin, Hepburn, Revised Romanization …). */
const PHRASEBOOK = [], PB_TAGS = {};
const PB_CATS = [
  { id: "intro", icon: "👋", t: TB("Vorstellen", "Introduce"), d: TB("Begrüßen, Namen sagen, woher du kommst – das erste Gespräch.", "Say hello, your name, where you're from – the first conversation.") },
  { id: "basics", icon: "🧭", t: TB("Basics", "Basics"), d: TB("Danke, bitte, Toilette, Bier – was man auf Reisen immer braucht.", "Thanks, please, toilet, beer – what you always need when travelling.") },
  { id: "love", icon: "❤️", t: TB("Liebe", "Love"), d: TB("Ich liebe dich, ich vermisse dich, du bist wunderschön – für Verliebte und zum Flirten.", "I love you, I miss you, you're beautiful – for lovers and for flirting.") },
  { id: "insults", icon: "🤬", t: TB("Beleidigungen", "Insults"), d: TB("Flüche und Beleidigungen von harmlos bis derb – zum Verstehen und Mitlachen. Benutzen auf eigene Gefahr 😉", "Swear words and insults from mild to strong – to understand and laugh along. Use at your own risk 😉") }
];
const PB_KEYS = {
  intro: [["hello", TB("Hallo!", "Hello!")], ["name", TB("Ich heiße …", "My name is …")], ["askname", TB("Wie heißt du?", "What's your name?")], ["from", TB("Ich komme aus Deutschland.", "I'm from Germany.")],
    ["nice", TB("Freut mich!", "Nice to meet you!")], ["how", TB("Wie geht's?", "How are you?")], ["fine", TB("Gut, danke. Und dir?", "Fine, thanks. And you?")], ["learn", TB("Ich lerne gerade {L}.", "I'm learning {L}.")], ["bye", TB("Tschüss! Bis bald!", "Bye! See you!")]],
  basics: [["thanks", TB("Danke!", "Thank you!")], ["please", TB("Bitte.", "Please.")], ["sorry", TB("Entschuldigung!", "Sorry! / Excuse me!")], ["yes", TB("Ja", "Yes")], ["no", TB("Nein", "No")],
    ["nounder", TB("Ich verstehe nicht.", "I don't understand.")], ["english", TB("Sprichst du Englisch?", "Do you speak English?")], ["toilet", TB("Wo ist die Toilette?", "Where's the toilet?")],
    ["price", TB("Wie viel kostet das?", "How much is it?")], ["beer", TB("Ein Bier, bitte!", "A beer, please!")], ["cheers", TB("Prost!", "Cheers!")], ["help", TB("Hilfe!", "Help!")]],
  love: [["love", TB("Ich liebe dich.", "I love you.")], ["like", TB("Ich mag dich.", "I like you.")], ["miss", TB("Ich vermisse dich.", "I miss you.")], ["beautiful", TB("Du bist wunderschön!", "You're beautiful!")],
    ["darling", TB("Mein Schatz", "My darling")], ["drink", TB("Gehen wir etwas trinken?", "Shall we go for a drink?")]]
};
function pb(code, tag, flag, de, en, native, intro, basics, insults) { PHRASEBOOK.push({ code, tag, flag, de, en, native, intro, basics, insults, love: "" }); PB_TAGS[code] = tag; }
/* more lines for one section of a language that is already registered: pbAdd("it", "love", `…`) */
function pbAdd(code, cat, lines) { const p = PHRASEBOOK.find((x) => x.code === code); if (p) p[cat] = (p[cat] ? p[cat] + "\n" : "") + lines.trim(); }

pb("it", "it-IT", "🇮🇹", "Italienisch", "Italian", "Italiano", `
hello|Ciao!|TSCHAA-o
name|Mi chiamo …|mi KJAA-mo
askname|Come ti chiami?|KO-me ti KJAA-mi
from|Vengo dalla Germania.|WENG-go dal-la dscher-MAA-nja
nice|Piacere!|pja-TSCHEE-re
how|Come stai?|KO-me STAI
fine|Bene, grazie. E tu?|BEE-ne, GRAT-tsje. e TU
learn|Sto imparando l'italiano.|sto im-pa-RAN-do li-ta-LJAA-no
bye|Ciao, a presto!|TSCHAA-o, a PRES-to`, `
thanks|Grazie!|GRAT-tsje
please|Per favore.|per fa-WOO-re
sorry|Scusa!|SKUU-sa|zu Fremden: Scusi!
yes|Sì|si
no|No|no
nounder|Non capisco.|non ka-PIS-ko
english|Parli inglese?|PAR-li ing-GLEE-se
toilet|Dov'è il bagno?|do-WE il BAN-jo
price|Quanto costa?|KWAN-to KOS-ta
beer|Una birra, per favore!|U-na BIR-ra, per fa-WOO-re
cheers|Salute! / Cin cin!|sa-LUU-te / tschin TSCHIN
help|Aiuto!|a-JUU-to`, `
Merda!|MER-da|Scheiße!|Shit!|2|
Che palle!|ke PAL-le|Wie nervig! / So ein Mist!|What a drag!|1|wörtlich „Was für Eier!“
Cazzo!|KAT-tso|Verdammt! / Scheiße!|Fuck! / Damn!|3|Allzweck-Fluch, sehr häufig
Idiota!|i-DJOO-ta|Idiot!|Idiot!|2|
Stai zitto!|stai TSIT-to|Halt die Klappe!|Shut up!|2|zu einer Frau: Stai zitta!
Stronzo!|STRON-tso|Arschloch!|Asshole!|3|
Stronza!|STRON-tsa|Miststück! / Blöde Kuh!|Bitch!|3|
Vaffanculo!|waf-fan-KUU-lo|Leck mich! / Verpiss dich!|Fuck off!|3|
Sei fuori di testa!|sei FUO-ri di TES-ta|Du spinnst!|You're nuts!|1|`);

pb("en", "en-GB", "🇬🇧", "Englisch", "English", "English", `
hello|Hello!|he-LOU
name|My name is …|mai NEIM is
askname|What's your name?|wots jor NEIM
from|I'm from Germany.|aim from DSCHÖR-me-ni
nice|Nice to meet you!|NAIS tu MIET ju
how|How are you?|hau AR ju
fine|Fine, thanks. And you?|FAIN, thänks. änd JU
learn|I'm learning English.|aim LÖR-ning ING-lisch
bye|Bye! See you!|BAI! SIE ju`, `
thanks|Thank you!|THÄNK ju|th wie im Englischen: Zunge zwischen die Zähne
please|Please.|plies
sorry|Sorry! / Excuse me!|SO-ri / iks-KJUUS mi
yes|Yes|jes
no|No|nou
nounder|I don't understand.|ai dount an-der-STÄND
toilet|Where's the toilet?|wers the TOI-let|britisch locker: Where's the loo?
price|How much is it?|hau MATSCH is it
beer|A beer, please!|e BIER, plies|im Pub: A pint, please!
cheers|Cheers!|tschiers
help|Help!|help`, `
Shit!|schit|Scheiße!|Shit!|2|
Damn it!|DÄM it|Verdammt!|Damn it!|1|
Bloody hell!|BLA-di HEL|Verdammt nochmal!|Bloody hell!|1|typisch britisch
Idiot!|I-di-ot|Idiot!|Idiot!|2|
Shut up!|schat AP|Halt die Klappe!|Shut up!|2|
Piss off!|pis OF|Verpiss dich!|Piss off!|2|britisch
Wanker!|WÄNG-ker|Wichser!|Wanker!|3|britisch, sehr häufig
Arsehole!|ARS-houl|Arschloch!|Arsehole!|3|amerikanisch: asshole
Bitch!|bitsch|Miststück! / Schlampe!|Bitch!|3|`);

pb("es", "es-ES", "🇪🇸", "Spanisch", "Spanish", "Español", `
hello|¡Hola!|O-la
name|Me llamo …|me JAA-mo
askname|¿Cómo te llamas?|KO-mo te JAA-mas
from|Soy de Alemania.|soi de a-le-MAA-nja
nice|¡Encantado!|en-kan-TAA-do|als Frau: ¡Encantada!
how|¿Qué tal?|ke TAL
fine|Bien, gracias. ¿Y tú?|BJEN, GRA-thjas. i TU|c vor i/e wie engl. „th“ (in Lateinamerika wie s)
learn|Estoy aprendiendo español.|es-TOI a-pren-DJEN-do es-pa-NJOL
bye|¡Adiós! ¡Hasta luego!|a-DJOS. AS-ta LUE-go`, `
thanks|¡Gracias!|GRA-thjas
please|Por favor.|por fa-BOR
sorry|¡Perdón!|per-DON
yes|Sí|si
no|No|no
nounder|No entiendo.|no en-TJEN-do
english|¿Hablas inglés?|AA-blas ing-GLES
toilet|¿Dónde está el baño?|DON-de es-TA el BA-njo
price|¿Cuánto cuesta?|KWAN-to KWES-ta
beer|¡Una cerveza, por favor!|U-na ther-BE-tha, por fa-BOR
cheers|¡Salud!|sa-LUD
help|¡Socorro!|so-KOR-ro`, `
¡Mierda!|MJER-da|Scheiße!|Shit!|2|
¡Joder!|cho-DER|Verdammt! / Scheiße!|Fuck! / Damn!|3|in Spanien ständig zu hören
¡Qué tonto!|ke TON-to|Wie dumm! / Du Dummkopf!|How stupid!|1|
¡Imbécil!|im-BE-thil|Idiot!|Idiot!|2|
¡Cállate!|KA-ja-te|Halt die Klappe!|Shut up!|2|
¡Gilipollas!|chi-li-PO-jas|Vollidiot! / Arschloch!|Dickhead!|3|typisch Spanien
¡Cabrón!|ka-BRON|Mistkerl!|Bastard!|3|unter Freunden auch fast liebevoll
¡Zorra!|THOR-ra|Miststück! / Schlampe!|Bitch!|3|
¡Vete a la mierda!|BE-te a la MJER-da|Verpiss dich!|Piss off!|3|
¡Pendejo!|pen-DE-cho|Idiot! / Arschloch!|Asshole! / Idiot!|3|vor allem Mexiko`);

pb("fr", "fr-FR", "🇫🇷", "Französisch", "French", "Français", `
hello|Salut !|sa-LÜ|höflicher: Bonjour ! (bõ-SCHUR)
name|Je m'appelle …|sche ma-PELL
askname|Tu t'appelles comment ?|tü ta-PELL ko-MÃ
from|Je viens d'Allemagne.|sche wjẽ dal-MANJ
nice|Enchanté !|ã-schã-TE|als Frau gleich ausgesprochen: Enchantée
how|Ça va ?|sa WA
fine|Ça va bien, merci. Et toi ?|sa wa BJẼ, mer-SI. e TWA
learn|J'apprends le français.|scha-PRÃ le frã-SE
bye|Salut, à plus !|sa-LÜ, a PLÜS`, `
thanks|Merci !|mer-SI
please|S'il vous plaît.|sil wu PLE|zu Freunden: S'il te plaît
sorry|Pardon !|par-DÕ
yes|Oui|wi
no|Non|nõ
nounder|Je ne comprends pas.|sche ne kõ-PRÃ PA
english|Tu parles anglais ?|tü PARL ã-GLE
toilet|Où sont les toilettes ?|u sõ le twa-LETT
price|C'est combien ?|se kõ-BJẼ
beer|Une bière, s'il vous plaît !|ün BJER, sil wu PLE
cheers|Santé !|sã-TE
help|Au secours !|o se-KUR`, `
Zut !|süt|Mist!|Darn!|1|harmlos, eher altmodisch
Merde !|MERD|Scheiße!|Shit!|2|
Putain !|pü-TẼ|Verdammt! / Scheiße!|Fuck!|3|Allzweck-Fluch, extrem häufig
Crétin !|kre-TẼ|Idiot! / Trottel!|Moron!|2|
Tais-toi !|te TWA|Sei still!|Be quiet!|1|
Ta gueule !|ta GÖL|Halt die Fresse!|Shut up!|3|
Connard !|ko-NAR|Arschloch!|Asshole!|3|zu einer Frau: Connasse !
Salope !|sa-LOP|Miststück! / Schlampe!|Bitch!|3|
Va te faire voir !|wa te fer WUAR|Hau ab! / Leck mich!|Get lost!|2|`);

pb("pt", "pt-PT", "🇵🇹", "Portugiesisch", "Portuguese", "Português", `
hello|Olá!|o-LA
name|Chamo-me …|SCHA-mu-me|Brasilien: Meu nome é …
askname|Como te chamas?|KO-mu te SCHA-masch|Brasilien: Qual é o seu nome?
from|Sou da Alemanha.|so da a-le-MA-nja
nice|Muito prazer!|MUĨ-tu pra-SER
how|Tudo bem?|TU-du BÃĨ
fine|Bem, obrigado. E tu?|bãĩ, o-bri-GA-du. i TU|als Frau: obrigada
learn|Estou a aprender português.|schto a a-pren-DER pur-tu-GESCH|Brasilien: Estou aprendendo português.
bye|Adeus! Até logo!|a-DE-usch. a-TE LO-gu`, `
thanks|Obrigado!|o-bri-GA-du|als Frau: Obrigada!
please|Por favor.|pur fa-WOR
sorry|Desculpe!|desch-KUL-pe
yes|Sim|sĩ
no|Não|nãu
nounder|Não percebo.|nãu per-SE-bu|Brasilien: Não entendo.
english|Falas inglês?|FA-lasch ĩ-GLESCH
toilet|Onde é a casa de banho?|ON-de E a KA-sa de BA-nju|Brasilien: Onde fica o banheiro?
price|Quanto custa?|KWAN-tu KUSCH-ta
beer|Uma cerveja, por favor!|U-ma ser-WE-scha, pur fa-WOR
cheers|Saúde!|sa-U-de
help|Socorro!|su-KO-rru`, `
Caramba!|ka-RAM-ba|Mensch! / Verflixt!|Darn it!|1|
Merda!|MER-da|Scheiße!|Shit!|2|
Porra!|PO-rra|Verdammt! / Scheiße!|Damn! / Fuck!|2|in Portugal und Brasilien sehr häufig
Idiota!|i-DJO-ta|Idiot!|Idiot!|2|
Cala-te!|KA-la-te|Halt den Mund!|Shut up!|2|Brasilien: Cala a boca!
Otário!|o-TA-rju|Trottel!|Sucker! / Fool!|2|vor allem Brasilien
Cabrão!|ka-BRÃU|Mistkerl! / Arschloch!|Bastard!|3|typisch Portugal
Vaca!|WA-ka|Miststück! / Blöde Kuh!|Bitch!|3|wörtlich „Kuh“
Vai à merda!|wai a MER-da|Verpiss dich!|Piss off!|3|`);

pb("nl", "nl-NL", "🇳🇱", "Niederländisch", "Dutch", "Nederlands", `
hello|Hoi! / Hallo!|hoi / HA-lo
name|Ik heet …|ik HEET
askname|Hoe heet je?|hu HEET je
from|Ik kom uit Duitsland.|ik kom öit DÖITS-lant
nice|Leuk je te ontmoeten!|LÖÖK je te ont-MU-ten
how|Hoe gaat het?|hu CHAAT et|g wie „ch“ in „ach“
fine|Goed, dank je. En met jou?|chut, DANK je. en met JAU
learn|Ik leer Nederlands.|ik leer NEE-der-lants
bye|Doei! Tot ziens!|dui. tot SIENS`, `
thanks|Dank je wel!|DANK je wel
please|Alsjeblieft.|als-je-BLIEFT|zu Fremden: Alstublieft
sorry|Sorry! / Pardon!|SO-ri / par-DON
yes|Ja|ja
no|Nee|nee
nounder|Ik begrijp het niet.|ik be-CHREIP et niet
english|Spreek je Engels?|spreek je ENG-els
toilet|Waar is de wc?|waar is de wee-SEE
price|Hoeveel kost dat?|hu-WEEL kost dat
beer|Een biertje, alsjeblieft!|en BIER-tje, als-je-BLIEFT
cheers|Proost!|proost
help|Help!|help`, `
Shit!|schit|Scheiße!|Shit!|1|wird im Niederländischen ständig benutzt
Sukkel!|SÖK-kel|Trottel!|Loser! / Dummy!|1|
Verdomme!|wer-DOM-me|Verdammt!|Damn it!|2|
Hou je bek!|hau je BEK|Halt die Klappe!|Shut up!|2|
Rot op!|rot OP|Hau ab! / Verpiss dich!|Piss off!|2|
Lul!|löl|Idiot! / Depp!|Prick!|2|wörtlich „Schwanz“
Trut!|tröt|Blöde Kuh! / Zicke!|Bitch!|2|
Klootzak!|KLOOT-sak|Arschloch! / Mistkerl!|Asshole!|3|
Kut!|köt|Scheiße! (derb)|Fuck!|3|sehr derb`);

pb("sv", "sv-SE", "🇸🇪", "Schwedisch", "Swedish", "Svenska", `
hello|Hej!|hej
name|Jag heter …|ja HEE-ter
askname|Vad heter du?|wa HEE-ter dü
from|Jag kommer från Tyskland.|ja KOM-mer fron TÜSK-land
nice|Trevligt att träffas!|TREEW-lit at TREF-fas
how|Hur mår du?|hür MOR dü
fine|Bra, tack. Och du?|BRAA, tack. ok DÜ
learn|Jag lär mig svenska.|ja LÄR mej SWEN-ska
bye|Hej då!|hej DO`, `
thanks|Tack!|tack
please|Snälla.|SNEL-la|beim Bestellen sagt man meist einfach „…, tack“
sorry|Förlåt! / Ursäkta!|för-LOT / ür-SCHEK-ta
yes|Ja|ja
no|Nej|nej
nounder|Jag förstår inte.|ja för-STOR IN-te
english|Pratar du engelska?|PRAA-tar dü ENG-el-ska
toilet|Var är toaletten?|war är to-a-LET-ten
price|Hur mycket kostar det?|hür MÜK-ke KOS-tar de
beer|En öl, tack!|en ÖÖL, tack
cheers|Skål!|skool
help|Hjälp!|jelp`, `
Fan!|faan|Verdammt!|Damn!|2|wörtlich „der Teufel“
Skit!|schiit|Scheiße!|Shit!|2|
Jävlar!|JEW-lar|Verdammt nochmal!|Damn it!|2|
Idiot!|i-di-OOT|Idiot!|Idiot!|2|
Håll käften!|holl SCHEF-ten|Halt die Klappe!|Shut up!|2|
Dra åt helvete!|dra ot HEL-we-te|Fahr zur Hölle!|Go to hell!|3|
Din jävel!|din JEE-wel|Du Mistkerl!|You bastard!|3|
Subba!|SÖB-ba|Miststück! / Schlampe!|Bitch!|3|`);

pb("no", "nb-NO", "🇳🇴", "Norwegisch", "Norwegian", "Norsk", `
hello|Hei!|hei
name|Jeg heter …|jei HEE-ter
askname|Hva heter du?|wa HEE-ter dü
from|Jeg kommer fra Tyskland.|jei KOM-mer fra TÜSK-lan
nice|Hyggelig å treffe deg!|HÜG-ge-li o TREF-fe dei
how|Hvordan går det?|WUR-dan gor de
fine|Bra, takk. Og du?|BRAA, takk. o DÜ
learn|Jeg lærer norsk.|jei LÄÄ-rer NORSCHK
bye|Ha det!|HAA de`, `
thanks|Takk!|takk
please|Vær så snill.|wär so SNILL
sorry|Unnskyld!|ÜN-schül
yes|Ja|ja
no|Nei|nei
nounder|Jeg forstår ikke.|jei for-STOR IK-ke
english|Snakker du engelsk?|SNAK-ker dü ENG-elsk
toilet|Hvor er toalettet?|wur är to-a-LET-te
price|Hva koster det?|wa KOS-ter de
beer|En øl, takk!|en ÖL, takk
cheers|Skål!|skool
help|Hjelp!|jelp`, `
Pokker!|POK-ker|Mist! / Verflixt!|Darn!|1|harmlos
Faen!|FAA-en|Verdammt! / Scheiße!|Damn! / Fuck!|2|wörtlich „der Teufel“, sehr häufig
Dritt!|dritt|Scheiße!|Shit!|2|
Hold kjeft!|holl SCHEFT|Halt die Klappe!|Shut up!|2|
Kom deg vekk!|kom dei WEKK|Hau ab!|Get lost!|2|
Jævla idiot!|JEW-la i-di-OOT|Verdammter Idiot!|Bloody idiot!|3|
Drittsekk!|DRITT-sekk|Arschloch! / Mistkerl!|Asshole!|3|wörtlich „Scheißsack“
Kjerring!|SCHÄR-ring|Alte Hexe! / Miststück!|Bitch!|3|`);

pb("da", "da-DK", "🇩🇰", "Dänisch", "Danish", "Dansk", `
hello|Hej!|hai
name|Jeg hedder …|jai HEDH-er|dh = weiches, gelispeltes d
askname|Hvad hedder du?|wä HEDH-er du
from|Jeg kommer fra Tyskland.|jai KOM-mer fra TÜSK-lan
nice|Hyggeligt at møde dig!|HÜG-ge-lit a MÖÖ-dhe dai
how|Hvordan går det?|wo-DAN gor de
fine|Godt, tak. Og dig?|got, TAK. o DAI
learn|Jeg lærer dansk.|jai LÄÄ-a dansk
bye|Hej hej! Vi ses!|hai HAI. wi SEES`, `
thanks|Tak!|tak
please|Vær så venlig.|wär so WEN-li
sorry|Undskyld!|ON-skül
yes|Ja|ja
no|Nej|nai
nounder|Jeg forstår det ikke.|jai fo-STOR de IG-ge
english|Taler du engelsk?|TAA-ler du ENG-elsk
toilet|Hvor er toilettet?|wor är toa-LET-tet
price|Hvad koster det?|wä KOS-ter de
beer|En øl, tak!|en ÖL, tak
cheers|Skål!|skol
help|Hjælp!|jelp`, `
Pis!|pis|Mist! / Scheiße!|Damn! / Shit!|1|sehr häufig, eher mild
Lort!|lort|Scheiße!|Shit!|2|
For fanden!|fo FAN-en|Verdammt nochmal!|Damn it!|2|wörtlich „zum Teufel“
Idiot!|i-di-OOT|Idiot!|Idiot!|2|
Hold kæft!|holl KEFT|Halt die Klappe!|Shut up!|2|
Skrid!|skridh|Hau ab!|Get lost!|2|
Røvhul!|RÖW-hul|Arschloch!|Asshole!|3|
Kælling!|KEL-ling|Miststück! / Schlampe!|Bitch!|3|`);

pb("fi", "fi-FI", "🇫🇮", "Finnisch", "Finnish", "Suomi", `
hello|Moi! / Hei!|moi / hei|im Finnischen ist immer die erste Silbe betont
name|Minun nimeni on …|MI-nun NI-me-ni on
askname|Mikä sinun nimesi on?|MI-kä SI-nun NI-me-si on
from|Olen Saksasta.|O-len SAK-sas-ta
nice|Hauska tavata!|HAUS-ka TA-wa-ta
how|Mitä kuuluu?|MI-tä KUU-luu
fine|Hyvää, kiitos. Entä sinulle?|HÜ-wää, KII-tos. EN-tä SI-nul-le
learn|Opiskelen suomea.|O-pis-ke-len SUO-me-a
bye|Moikka! Nähdään!|MOIK-ka. NÄH-dään`, `
thanks|Kiitos!|KII-tos
please|Ole hyvä.|O-le HÜ-wä|beim Bestellen sagt man meist „…, kiitos“
sorry|Anteeksi!|AN-teek-si
yes|Kyllä|KÜL-lä
no|Ei|ei
nounder|En ymmärrä.|en ÜM-mär-rä
english|Puhutko englantia?|PU-hut-ko ENG-lan-ti-a
toilet|Missä on vessa?|MIS-sä on WES-sa
price|Paljonko tämä maksaa?|PAL-jon-ko TÄ-mä MAK-saa
beer|Yksi olut, kiitos!|ÜK-si O-lut, KII-tos
cheers|Kippis!|KIP-pis
help|Apua!|A-pu-a`, `
Perkele!|PER-ke-le|Verdammt! / Teufel nochmal!|Damn it!|2|der finnische Fluch schlechthin
Paska!|PAS-ka|Scheiße!|Shit!|2|
Idiootti!|I-di-oot-ti|Idiot!|Idiot!|2|
Ääliö!|ÄÄ-li-ö|Trottel!|Moron!|2|
Turpa kiinni!|TUR-pa KIIN-ni|Halt die Fresse!|Shut up!|3|
Painu helvettiin!|PAI-nu HEL-wet-tiin|Fahr zur Hölle!|Go to hell!|3|
Voi vittu!|woi WIT-tu|Verdammte Scheiße!|Fucking hell!|3|sehr derb, aber häufig
Narttu!|NART-tu|Miststück! / Schlampe!|Bitch!|3|wörtlich „Hündin“`);
