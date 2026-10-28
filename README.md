# PLM – Personal Language Management

Sprach-App mit geführtem Kurs (A1–B2) und Flashcards für Italienisch, Englisch, Spanisch, Französisch und weitere Sprachen. Gleicher Aufbau wie PFM: eine Web-App, die offline läuft und sich auf iPhone und iPad wie eine normale App auf den Home-Bildschirm legen lässt.

## Auf GitHub Pages veröffentlichen

1. Repository anlegen, z. B. `plm` (ist schon da, wenn du 1.0 installiert hast).
2. Den **Inhalt** dieses Ordners hochladen (nicht den Ordner selbst), sodass `index.html` direkt im Repository liegt – inklusive der Ordner `ocr/` und `lib/` (Texterkennung und PDF-Leser, zusammen ca. 20 MB).
3. *Settings → Pages → Branch: main / root → Save*. Nach ein, zwei Minuten läuft die App unter `https://<name>.github.io/plm/`.
4. Auf iPhone und iPad in **Safari** öffnen → Teilen → **Zum Home-Bildschirm**.

Updates: Dateien im Repository ersetzen – seit 1.3 gehört auch der Ordner `course/` dazu (die Kurse, ca. 0,6 MB). Die App lädt die neue Version beim nächsten Öffnen mit Internet automatisch (der Cache-Name in `sw.js` ändert sich bei jedem Build). `ocr/` und `lib/` werden erst beim ersten Import geladen und danach offline vorgehalten.

## Was drin ist

- **Kurs A1 → A2 → B1 → B2** – pro Sprache ein geführter Kurs, der bei null anfängt. Jede Lektion: ① Wörter & Sätze anhören und lernen (landen im Wiederholungsplan, Projekt „Sprachkurs A1“ usw.), ② Grammatik mit Erklärung, Tabellen und Übung, ③ gemischte Übung (Wörter, Hören, Schreiben, Sätze bauen, Lückensätze, Konjugation – ab 70 % geschafft), ④ Gespräch zum Mitspielen (z. B. Kennenlernen auf einer Party, im Café bestellen, Vorstellungsgespräch): anhören, selbst sprechen oder tippen, Rollen tauschen. Am Ende jedes Niveaus ein Abschlusstest. Fertige Kurse: Italienisch (38 Lektionen), Englisch (30), Spanisch (29), Französisch (22). Für jede andere Sprache – und für zusätzliche Lektionen zu einem Thema deiner Wahl – schreibt der KI-Assistent neue Lektionen.
- **App-Sprache Deutsch oder Englisch** – *Einstellungen → App-Sprache*. Menüs, Hinweise und die Theorie wechseln, deine Karten bleiben unverändert.
- **Theorie & Grammatik** – pro Sprache ein Nachschlagebereich mit Erklärungen, Tabellen, Beispielen zum Anhören und Übungen dazu. Italienisch: Aussprache, Artikel (il, lo, l', la, un, uno, una, un'), Nomen & Plural, Adjektive, Pronomen, Possessiva, Präpositionen, Fragewörter, Präsens (regelmäßig und unregelmäßig), Passato prossimo, Imperfetto, Futuro, Condizionale, Imperativo, reflexive Verben, wichtige Strukturen. Englisch: Zeitformen, Present/Past/Future, If-Sätze, Modalverben, Passiv, Artikel, Steigerung, unregelmäßige Verben, typische Fehler von Deutschen.
- **Verb nachschlagen** – jedes Verb in allen wichtigen Zeitformen (Italienisch, Spanisch, Französisch; Englisch mit Stammformen). Schon beim Tippen erscheinen Vorschläge mit Übersetzung („beb“ → *bere – trinken*); du kannst auch eine konjugierte Form („bevo“, „went“, „suis“) oder die deutsche Bedeutung („trinken“) eingeben.
- **Aussprache überall** – jeder 🔊-Knopf in Theorie, Tabellen, Beispielen und Kurs liest vor.
- **Neue Wörter ansehen** – alle noch nicht gelernten Wörter zum Durchlesen und Anhören, nach Projekt und Thema.
- **Lernkarten mit Umdrehen** – vorne nur das Wort oder der Satz, Tippen dreht die Karte; hinten Übersetzung, Beispielsatz mit Übersetzung und Notiz. Neue Karten genauso.
- **Aussprache** – großer Lautsprecher-Knopf (normal und langsam), auch für den Beispielsatz. Mikrofon-Knopf: du sprichst nach, PLM zeigt Wort für Wort, was erkannt wurde.
- **Wiederholungsplan (FSRS)** – was du kannst, kommt seltener, was du vergisst, früher wieder. Neue Karten pro Tag je Sprache einstellbar.
- **Antwortmodi:** Umdrehen, Tippen (prüft Akzente, Artikel, Tippfehler), Auswahl aus vier.
- **Projekte & Themen** – z. B. „Kurs A1“ mit Themen pro Lektion; jedes Projekt hat Lernen, Üben, **Test** mit Note und Fehlerliste und **Sätze bauen**.
- **Sätze bauen** – deutscher Satz vorgegeben, du baust ihn aus Wortkacheln oder tippst ihn; PLM zeigt, welche Wörter fehlen oder falsch sind. Mit KI-Assistent: „KI fragen“, ob deine eigene Formulierung auch richtig ist.
- **Pakete:** Italienisch – Grundwortschatz, Verben, Grammatik in Sätzen, Alltagssätze 1 und 2 (Gym, Café, Bahn, Hotel, Wohnung, Ämter, Notfall, Dating, Uni …), Imperativ im Alltag (Dimmi! Fammi vedere! Non dirglielo!), Kurs A1. Englisch – Business & Uni, False Friends, Phrasal Verbs & Redewendungen, unregelmäßige Verben, Everyday Sentences 1 und 2. Spanisch und Französisch – Grundwortschatz, Alltagssätze, die 60 wichtigsten Verben mit allen Zeitformen. Portugiesisch, Niederländisch, Schwedisch – Grundwortschatz und Alltagssätze. Neue Sprache hinzufügen → *Starter-Pakete* → laden.
- **Import aus Fotos und PDFs** – Vokabellisten, Glossare und zweispaltige Tabellen werden direkt auf dem Gerät erkannt (kostenlos, offline). Buchseiten mit Übungen, deutsche Übersetzungen, Themen, Lückensätze und Verbtabellen: mit dem KI-Assistenten. Alles landet erst in einer Prüfliste.
- **Sync iPhone ↔ iPad** über ein privates GitHub-Gist (siehe unten).
- **Konjugation:** Tabellen pro Zeit + Schnelldrill einzelner Formen; automatisches Ausfüllen für regelmäßige Verben.
- **Listen-Import** aus Quizlet, Anki, Excel/Numbers; Backup/Export als JSON und CSV.
- **Erinnerung:** täglicher Kalendertermin (.ics) und optional die Zahl fälliger Karten am App-Symbol.

## Sync zwischen iPhone und iPad einrichten

1. Auf github.com: *Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token (classic)*.
2. Name z. B. „PLM Sync“, Ablauf „No expiration“ (oder ein Jahr), **nur das Häkchen `gist`** setzen → *Generate token* → Token kopieren (`ghp_…`).
3. In PLM auf dem iPhone: *Einstellungen → iPhone ↔ iPad → Token einfügen → Verbinden*. PLM legt ein privates Gist „plm-sync.json“ an.
4. Auf dem iPad dasselbe Token eintragen – die Karten und der Lernstand kommen rüber.

Danach synchronisiert PLM automatisch beim Öffnen, beim Schließen und nach dem Lernen. Gleichzeitige Änderungen werden zusammengeführt: Karten nach letzter Änderung, Lernstand pro Karte nach letzter Wiederholung, gelöschte Karten bleiben gelöscht. Das Token bleibt auf dem jeweiligen Gerät.

## KI-Assistent (optional)

Für Kurs-PDFs mit Bildern und Übungen, deutsche Übersetzungen und automatische Themen:

1. Auf platform.claude.com ein Konto anlegen, unter *Billing* etwas Guthaben aufladen (z. B. 5 $ reichen lange).
2. *API Keys → Create Key* → Schlüssel kopieren (`sk-ant-…`).
3. In PLM: *Einstellungen → KI-Assistent → Schlüssel einfügen → Speichern*.

Ein Foto kostet meist unter 1 Cent, ein PDF mit 10 Seiten einige Cent. Der Schlüssel bleibt auf dem Gerät und wird nicht synchronisiert (auf dem iPad separat eintragen).

## Hinweise

- **Stimmen:** Bessere Stimmen unter iOS *Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → Italienisch* laden (z. B. „Alice (Erweitert)“). Die Stimme pro Sprache wählst du in den Spracheinstellungen von PLM.
- **Aussprache prüfen** braucht unter iOS eingeschaltetes Diktieren (*Einstellungen → Allgemein → Tastatur → Diktierfunktion*) und einmal die Mikrofon-Erlaubnis.
- Alle Daten liegen auf dem Gerät (plus im eigenen Gist, wenn Sync an ist). Ab und zu *Einstellungen → Backup sichern*.

## Selbst ändern

Der Quellcode liegt in `src/`. Nach Änderungen `python3 build.py` ausführen – das erzeugt `index.html`, `sw.js` und `manifest.webmanifest` neu. Tests: `node test/core.test.js` (Lernlogik, Konjugation, Listen- und Foto-Erkennung). Die englischen Texte der Oberfläche stehen in `src/i18n-en.json` (deutscher Text → englischer Text), die Theorie in `src/data/20-theory-it.js` und `21-theory-en.js`, die Kurse in `src/course/<sprache>/` (eine Datei pro paar Lektionen; `build.py` macht daraus `course/<sprache>.js`), die Verb-Wörterbücher in `src/data/30-lex-*.js`. Kurs-Prüfung: `node test/course.test.js`.

Drittsoftware: Tesseract.js (Apache 2.0, `ocr/`), PDF.js (Apache 2.0, `lib/pdfjs/`).
