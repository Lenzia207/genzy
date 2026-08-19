"use client";
import { Link } from "@/app/i18n/routing";
import { getLocalizedPath } from "@/app/i18n/routing";

export default function Footer({locale}: {locale: string}) {
    const imprint = getLocalizedPath(locale, 'imprint');
    const privacy = getLocalizedPath(locale, 'privacy');

    return (
        <footer className="section-lime py-8 pb-28 md:pb-8 text-sm">
            <div className="max-w-6xl mx-auto px-6 flex flex-col flex-wrap items-center lg:justify-between gap-6">
                <p className="font-mono font-bold text-lg" style={{ color: "var(--teal)" }}>VisionIT</p>
                <div className="flex gap-8">
                    <Link href={imprint.path as string} locale={locale} className="transition-opacity hover:opacity-70" style={{ color: "var(--teal)" }}>
                        {imprint.text}
                    </Link>
                    <Link href={privacy.path as string} locale={locale} className="transition-opacity hover:opacity-70" style={{ color: "var(--teal)" }}>
                        {privacy.text}
                    </Link>
                </div>
                <p style={{ color: "var(--text-300)" }}>&copy; 2026 VisionIT. All rights reserved.</p>
            </div>
        </footer>
    );
}