import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import PrivacyDE from "./PrivacyDE";
import PrivacyEN from "./PrivacyEN";
import { LocaleParams } from "@/app/i18n/local-params";
import { baseUrl } from "@/app/configs/configs";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}



export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = (await params).locale || "de";
  const canonical = `${baseUrl}/${locale}/datenschutz/`;

  const shared = {
    alternates: {
      canonical,
      languages: {
        de: `${baseUrl}/de/datenschutz/`,
        en: `${baseUrl}/en/datenschutz/`,
        "x-default": `${baseUrl}/de/datenschutz/`,
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
