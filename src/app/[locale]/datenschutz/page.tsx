import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PrivacyDE from "./PrivacyDE";
import PrivacyEN from "./PrivacyEN";
import { LocaleParams } from "@/app/i18n/local-params";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

const base = "https://www.vision-it.at";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = (await params).locale || "de";
  const canonical = `${base}/${locale}/datenschutz/`;

  const shared = {
    alternates: {
      canonical,
      languages: {
        de: `${base}/de/datenschutz/`,
        en: `${base}/en/datenschutz/`,
        "x-default": `${base}/de/datenschutz/`,
      },
    },
  };

  if (locale === "en") {
    return {
      ...shared,
      title: "Privacy Policy",
      description: "How we process data, cookies and contact options.",
    };
  }

  return {
    ...shared,
    title: "Datenschutzerklärung",
    description: "Informationen zur Datenverarbeitung, Cookies und Kontaktmöglichkeiten.",
  };
}

export default async function Imprint(props: LocaleParams) {
  const { locale } = await props.params;

    return (
      <PageWrapper
      locale={locale}
      pageContent={locale === "de" ? <PrivacyDE /> : <PrivacyEN />}
      />
    )
}
