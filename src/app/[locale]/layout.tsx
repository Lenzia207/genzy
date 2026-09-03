import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import Script from "next/script";
import { Manrope, Space_Grotesk } from "next/font/google";
import "../globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://vision-it.at/#business",
      name: "VisionIT",
      alternateName: "VisionIT Wien",
      url: "https://vision-it.at/",
      email: "office@vision-it.at",
      sameAs: [
        "https://www.linkedin.com/in/lena-z-230b01176",
        "https://github.com/Lenzia207",
      ],

      address: {
        "@type": "PostalAddress",
        streetAddress: "Zuckerkandlgasse 48/2",
        addressLocality: "Wien",
        postalCode: "1190",
        addressCountry: "AT",
      },

      areaServed: {
        "@type": "City",
        name: "Wien",
      },

      founder: {
        "@type": "Person",
        name: "Lena Zyadeh",
      },
    },

    {
      "@type": "WebSite",
      "@id": "https://vision-it.at/#website",
      url: "https://vision-it.at/",
      name: "VisionIT",
      alternateName: "VisionIT Wien",
      publisher: {
        "@id": "https://vision-it.at/#business",
      },
      inLanguage: ["de", "en"],
    },
  ],
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vision-it.at"),
  title: {
    default: "VisionIT",
    template: "%s | VisionIT",
  },
  description:
    "Individuelles Webdesign und moderne Webentwicklung für kleine Unternehmen und Freelancer. Portfolio, Preise & Kontakt.",
  applicationName: "VisionIT",
  openGraph: {
    title: "VisionIT",
    description:
      "Individuelles Webdesign und moderne Webentwicklung für kleine Unternehmen und Freelancer.",
    siteName: "VisionIT",
    images: [
      {
        url: "/og/og-default.png",
        width: 1200,
        height: 630,
        alt: "VisionIT – Webdesign & Webentwicklung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
