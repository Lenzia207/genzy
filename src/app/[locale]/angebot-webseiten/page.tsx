import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import AngebotDetailView from "../angebot/AngebotDetailView";
import fetchHomePageData from "../home/sections/data/home-page-data";
import { LocaleParams } from "@/app/i18n/local-params";
import { baseUrl } from "@/app/configs/configs";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}


export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = (await params).locale || "de";
  const canonical = `${baseUrl}/${locale}/angebot-webseiten/`;

  const shared = {
    alternates: {
      canonical,
      languages: {
        de: `${baseUrl}/de/angebot-webseiten/`,
        en: `${baseUrl}/en/angebot-webseiten/`,
        "x-default": `${baseUrl}/de/angebot-webseiten/`,
      },
    },
  };

  if (locale === "en") {
    return {
      ...shared,
      title: "Website Development Vienna",
      description:
        "Custom websites built with modern web development for small businesses and freelancers. By VisionIT, Vienna.",
      openGraph: {
        title: "Website Development Vienna | VisionIT",
        description:
          "Custom websites built with modern web development for small businesses and freelancers.",
        url: canonical,
        siteName: "VisionIT",
        type: "website",
      },
    };
  }

  return {
    ...shared,
    title: "Webseiten Entwicklung Wien",
    description:
      "Individuelle Webseiten mit moderner Webentwicklung für kleine Unternehmen und Freelancer. Von VisionIT, Wien.",
    openGraph: {
      title: "Webseiten Entwicklung Wien | VisionIT",
      description:
        "Individuelle Webseiten mit moderner Webentwicklung für kleine Unternehmen und Freelancer.",
      url: canonical,
      siteName: "VisionIT",
      type: "website",
    },
  };
}

export default async function AngebotWebseitenPage(props: LocaleParams) {
  const { locale } = await props.params;
  const data = await fetchHomePageData(locale);
  const area = data.angebot_section.areas.find((a) => a.id === "webseiten")!;

  return (
    <PageWrapper
      locale={locale}
      pageContent={<AngebotDetailView area={area} locale={locale} />}
    />
  );
}
