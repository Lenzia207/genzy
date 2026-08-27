import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import ImprintDE from "./ImprintDE";
import ImprintEN from "./ImprintEN";
import { LocaleParams } from "@/app/i18n/local-params";


export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

const base = "https://www.vision-it.at";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = (await params).locale || "de";
  const canonical = `${base}/${locale}/impressum/`;

  const shared = {
    alternates: {
      canonical,
      languages: {
        de: `${base}/de/impressum/`,
        en: `${base}/en/impressum/`,
        "x-default": `${base}/de/impressum/`,
      },
    },
  };

  if (locale === "en") {
    return {
      ...shared,
      title: "Imprint",
      description: "Legal notice and contact details for VisionIT.",
    };
  }

  return {
    ...shared,
    title: "Impressum",
    description: "Anbieterinformationen und Kontaktangaben zu VisionIT.",
  };
}

export default async function Imprint(props: LocaleParams) {
  const { locale } = await props.params;

  return (

      <PageWrapper
      locale={locale}
      pageContent={locale === "de" ? <ImprintDE /> : <ImprintEN />}
      />
    )
}
