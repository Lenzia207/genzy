import { NextIntlClientProvider } from "next-intl";
import Script from "next/script";
import { HtmlLang } from "@/components/HtmlLang";
import { Manrope, Space_Grotesk } from "next/font/google";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.vision-it.at/#business",
      name: "VisionIT",
      alternateName: "VisionIT Wien",
      url: "https://www.vision-it.at/",
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
      "@id": "https://www.vision-it.at/#website",
      url: "https://www.vision-it.at/",
      name: "VisionIT",
      alternateName: "VisionIT Wien",
      publisher: {
        "@id": "https://www.vision-it.at/#business",
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

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}
export default async function RootLayout({
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

        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}