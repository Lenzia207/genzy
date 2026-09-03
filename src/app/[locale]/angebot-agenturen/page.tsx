import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import AngebotDetailView from "../angebot-webseiten/AngebotDetailView";
import fetchHomePageData from "../home/sections/data/home-page-data";
import { LocaleParams } from "@/app/i18n/local-params";
import { baseUrl } from "@/app/configs/configs";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}



export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = (await params).locale || "de";
  const canonical = `${baseUrl}/${locale}/angebot-agenturen/`;

  const shared = {
    alternates: {
      canonical,
      languages: {
        de: `${baseUrl}/de/angebot-agenturen/`,
        en: `${baseUrl}/en/angebot-agenturen/`,
        "x-default": `${baseUrl}/de/angebot-agenturen/`,
      },
    },
  };

  if (locale === "en") {
    return {
      ...shared,
      title: "Web Development for Agencies",
      description:
        "White-label web development and technical delivery for agencies that need a reliable development partner. By VisionIT, Vienna.",
      openGraph: {
        title: "Web Development for Agencies | VisionIT",
        description:
          "White-label web development and technical delivery for agencies that need a reliable development partner.",
        url: canonical,
        siteName: "VisionIT",
        type: "website",
      },
    };
  }

  return {
    ...shared,
    title: "Webentwicklung für Agenturen",
    description:
      "White-Label-Webentwicklung und technische Umsetzung für Agenturen, die einen verlässlichen Entwicklungspartner suchen. Von VisionIT, Wien.",
    openGraph: {
      title: "Webentwicklung für Agenturen | VisionIT",
      description:
        "White-Label-Webentwicklung und technische Umsetzung für Agenturen, die einen verlässlichen Entwicklungspartner suchen.",
      url: canonical,
      siteName: "VisionIT",
      type: "website",
    },
  };
}

export default async function AngebotAgenturenPage(props: LocaleParams) {
  const { locale } = await props.params;
  const data = await fetchHomePageData(locale);
  const area = data.angebot_section.areas.find((a) => a.id === "agenturen")!;

  return (
    <PageWrapper
      locale={locale}
      pageContent={<AngebotDetailView area={area} locale={locale} />}
    />
  );
}
