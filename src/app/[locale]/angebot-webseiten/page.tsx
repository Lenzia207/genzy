import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import AngebotDetailView from "./WebsiteDetailView";
import fetchHomePageData from "../home/sections/data/home-page-data";
import { LocaleParams } from "@/app/i18n/local-params";
import { baseUrl, websiteDetailUrl } from "@/app/configs/configs";
import fetchWebsitePageData from "./data/website-page-data";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}


export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = (await params).locale || "de";
  const canonical = `${baseUrl}/${locale}${websiteDetailUrl}`;

  const shared = {
    alternates: {
      canonical,
      languages: {
        de: `${baseUrl}/de${websiteDetailUrl}`,
        en: `${baseUrl}/en${websiteDetailUrl}`,
        "x-default": `${baseUrl}/de${websiteDetailUrl}`,
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
    title: "Website erstellen lassen in Wien | Webentwicklung mit VisionIT",
    description:
      "Individuelle Websites für Unternehmen und Selbstständige – von Konzeption und Design bis Entwicklung, SEO und Launch.",
    openGraph: {
      title: "Website erstellen lassen in Wien | Webentwicklung mit VisionIT",
      description:
        "Individuelle Websites für Unternehmen und Selbstständige – von Konzeption und Design bis Entwicklung, SEO und Launch.",
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
  const websiteData = await fetchWebsitePageData(locale);

  return (
    <PageWrapper
      locale={locale}
      pageContent={<AngebotDetailView websitePage={websiteData} area={area} locale={locale} />}
    />
  );
}


