import BackgroundEffect from "@/components/BackgroundEffect";
import TitleHeader from "@/components/TitleHeader";

export default function PrivacyDE() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundEffect />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-16 max-w-4xl">
        <TitleHeader as="h1" title="Datenschutzerklärung" />

        <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-(--text-300)">
          <p>
            <strong>Verantwortlicher:</strong> Lena Zyadeh, BSc.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-(--text-100)">Kontakt</h3>
          <p>
            Für datenschutzrechtliche Anfragen erreichen Sie uns unter:{" "}
            <strong>office@vision-it.at</strong>.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-(--text-100)">Welche Daten verarbeiten wir?</h3>
          <p>
            Wir verarbeiten ausschließlich personenbezogene Daten, die Sie uns
            aktiv übermitteln (z. B. Name, E‑Mail‑Adresse und Nachricht im
            Kontaktformular). Technisch notwendige Daten (z. B. IP‑Adresse,
            Datum/Uhrzeit der Anfrage) werden in den Serverlogs des Hosters
            kurzfristig zur Gewährleistung des Betriebs und der Sicherheit
            gespeichert.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-(--text-100)">Zweck und Rechtsgrundlagen</h3>
          <ul>
            <li>
              Kontaktbearbeitung: Verarbeitung zur Erfüllung Ihrer Anfrage und
              zur Kommunikation (Art. 6 Abs. 1 lit. b und f DSGVO).
            </li>
            <li>
              Betrieb und Sicherheit der Website: berechtigtes Interesse des
              Betreibers (Art. 6 Abs. 1 lit. f DSGVO).
            </li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold text-(--text-100)">Keine Analytik/Tracking</h3>
          <p>
            Wir verwenden keine Analyse‑ oder Tracking‑Dienste (z. B. Google
            Analytics). Es erfolgt keine Profilbildung zu Marketingzwecken.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-(--text-100)">Kontaktformular / E‑Mail</h3>
          <p>
            Nach Absenden des Kontaktformulars werden Ihre Angaben per E‑Mail an{" "}
            <strong>office@genzy.dev</strong> übermittelt. Die E‑Mail‑Übertragung
            erfolgt über den E‑Mail‑Provider; prüfen Sie ggf. dessen
            Datenschutzbestimmungen. Die Verarbeitung erfolgt zur Bearbeitung
            Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO).
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-(--text-100)">Externe Links</h3>
          <p>
            Die Website kann Verlinkungen zu externen Websites enthalten. Für
            die Inhalte und Datenschutzpraxis externer Seiten sind deren
            Betreiber verantwortlich. Beim Verlassen unserer Seiten können unter
            Umständen Daten an Dritte übertragen werden.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-(--text-100)">Speicherdauer</h3>
          <p>
            Personenbezogene Daten werden nur so lange gespeichert, wie dies für
            die genannten Zwecke erforderlich ist oder gesetzliche
            Aufbewahrungsfristen dies verlangen.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-(--text-100)">Empfänger</h3>
          <p>
            Zur Bereitstellung des E‑Mail‑Dienstes und des Hostings können
            Dienstleister als Auftragsverarbeiter eingesetzt werden. Soweit
            erforderlich, werden entsprechende Verträge zur Auftragsverarbeitung
            abgeschlossen.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-(--text-100)">Ihre Rechte</h3>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit und
            Widerspruch. Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte
            per E‑Mail an <strong>hello@genzy.com</strong>.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-(--text-100)">Widerruf &amp; Beschwerde</h3>
          <p>
            Sie können erteilte Einwilligungen jederzeit mit Wirkung für die
            Zukunft widerrufen. Bei datenschutzrechtlichen Beschwerden steht
            Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-(--text-100)">Sicherheit</h3>
          <p>
            Wir setzen geeignete technische und organisatorische Maßnahmen ein,
            um die Sicherheit Ihrer Daten zu gewährleisten. Absolute Sicherheit
            kann jedoch nicht garantiert werden.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-(--text-100)">Google Fonts</h3>
          <p>
            Diese Website verwendet die Google Fonts <em>Urbanist</em> und
            <em> Playfair Display</em>. Schriftarten werden über die
            Next.js Font‑Optimierung (next/font) eingebunden und im Regelfall
            während der Build‑Zeit heruntergeladen und lokal vom Server ausgeliefert.
            Dadurch werden beim Aufruf der Website keine externen Verbindungen zu
            Google‑Servern (fonts.googleapis.com / fonts.gstatic.com) hergestellt.
            Falls die Fonts nicht lokal bereitgestellt werden, können beim Laden
            Informationen an Google übertragen werden; in diesem Fall erfolgt die
            Verarbeitung auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO)
            bzw. Sie können alternativ Self‑Hosting der Fonts wählen, um externe
            Übertragungen zu vermeiden.
          </p>
        </div>
      </div>
    </div>
  );
}
