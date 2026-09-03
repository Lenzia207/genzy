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
  const canonical = `${baseUrl}/${locale}/angebot-mobile-apps/`;

  const shared = {
    alternates: {
      canonical,
      languages: {
        de: `${baseUrl}/de/angebot-mobile-apps/`,
        en: `${baseUrl}/en/angebot-mobile-apps/`,
        "x-default": `${baseUrl}/de/angebot-mobile-apps/`,
      },
    },
  };

  if (locale === "en") {
    return {
      ...shared,
      title: "Mobile App Development Vienna",
      description:
        "Custom mobile apps for iOS and Android, built from concept to launch. By VisionIT, Vienna.",
      openGraph: {
        title: "Mobile App Development Vienna | VisionIT",
        description:
          "Custom mobile apps for iOS and Android, built from concept to launch.",
        url: canonical,
        siteName: "VisionIT",
        type: "website",
      },
    };
  }

  return {
    ...shared,
    title: "Mobile App Entwicklung Wien",
    description:
      "Individuelle Mobile Apps für iOS und Android – von der Konzeption bis zum Launch. Von VisionIT, Wien.",
    openGraph: {
      title: "Mobile App Entwicklung Wien | VisionIT",
      description:
        "Individuelle Mobile Apps für iOS und Android – von der Konzeption bis zum Launch.",
      url: canonical,
      siteName: "VisionIT",
      type: "website",
    },
  };
}

export default async function AngebotMobileAppsPage(props: LocaleParams) {
  const { locale } = await props.params;
  const data = await fetchHomePageData(locale);
  const area = data.angebot_section.areas.find((a) => a.id === "mobile-apps")!;

  return (
    <PageWrapper
      locale={locale}
      pageContent={<AngebotDetailView area={area} locale={locale} />}
    />
  );
}
