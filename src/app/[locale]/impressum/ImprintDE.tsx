
import BackgroundEffect from "@/components/BackgroundEffect";
import TitleHeader from "@/components/TitleHeader";

export default function ImprintDE() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <BackgroundEffect />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-16 max-w-4xl">

                {/* Header */}
                <TitleHeader as="h1" title="Impressum" />

                {/* Imprint Details */}
                <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-(--text-300)">

                    <div className="space-y-1">
                        <p className="text-xl font-medium text-(--text-100)">Lena Zyadeh, BSc.</p>
                        <p>Softwareentwicklung für Webseiten und Applikationen</p>
                    </div>

                    <div className="space-y-1">
                        <p>Zuckerkandlgasse 48/2</p>
                        <p>1190 Wien</p>
                        <p>Österreich</p>
                    </div>

                    <div className="space-y-1">
                        {/* <p><span className="text-zinc-500">Tel:</span> +43 6765700757</p> */}
                        <p><span className="text-(--text-300)">E-Mail:</span> <a href="mailto:office@vision-it.at" className="text-(--accent-cyan) hover:underline transition-colors">office@vision-it.at</a></p>
                    </div>

                    <div className="pt-4 space-y-4">
                        {/* <p>
                            <span className="block text-sm text-zinc-500 uppercase tracking-wider mb-1">UID-Nummer</span>
                            k.A.
                        </p> */}

                        {/* <p>
                            <span className="block text-sm text-zinc-500 uppercase tracking-wider mb-1">Mitgliedschaften</span>
                            Mitglied der WKÖ
                        </p> */}

                        <p>
                            <span className="block text-sm uppercase tracking-wider mb-1 text-(--text-300)">Gewerbeordnung</span>
                            EPU                        </p>

                        <p>
                            <span className="block text-sm uppercase tracking-wider mb-1 text-(--text-300)">Aufsichtsbehörde</span>
                            Bezirkshauptmannschaft Wien
                        </p>

                        {/* <p>
                            <span className="block text-sm text-zinc-500 uppercase tracking-wider mb-1">Meisterbetrieb</span>
                            Meisterprüfung abgelegt in Österreich
                        </p> */}
                    </div>

                </div>
            </div>
        </div>
    );
}