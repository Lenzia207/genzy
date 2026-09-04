

import type { Metadata } from "next";
import { LocaleParams } from "@/app/i18n/local-params";
import PageWrapper from "@/components/PageWrapper";
import { fetchBriefingFormData } from "./data/home-page-data";
import BriefingFormularScreen from "./BriefingFormularScreen";
import { baseUrl, briefingFormularUrl } from "@/app/configs/configs";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}
export default async function BriefingFormular(props: LocaleParams) {
  const { locale } = await props.params;
  console.log(locale);

  const data = await fetchBriefingFormData(locale);

  if (!data) return <div>Loading...</div>;

  return (
    <PageWrapper
      locale={locale}
      pageContent={
      
      <div className="flex flex-col gap-4">
        <BriefingFormularScreen data={data} locale={locale} />
      </div>
       } />
  );
}


export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = (await params).locale || "de";
  const canonical = `${baseUrl}/${locale}${briefingFormularUrl}`;

  const shared = {
    alternates: {
      canonical,
      languages: {
        de: `${baseUrl}/de${briefingFormularUrl}`,
        en: `${baseUrl}/en${briefingFormularUrl}`,
        "x-default": `${baseUrl}/de${briefingFormularUrl}`,
      },
    },
  };

  if (locale === "en") {
    return {
      ...shared,
      title: "Project Brief — Request a Quote",
      description:
        "Describe your project goals, scope and budget — get a tailored proposal from VisionIT.",
    };
  }

  return {
    ...shared,
    title: "Briefing-Formular — Projekt anfragen",
    description:
      "Beschreibe kurz Ziel, Umfang und Budget deines Webprojekts — wir melden uns mit einem Vorschlag.",
  };
}
