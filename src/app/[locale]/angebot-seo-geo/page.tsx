import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";
import AngebotDetailView from "../angebot/AngebotDetailView";
import fetchHomePageData from "../home/sections/data/home-page-data";
import { LocaleParams } from "@/app/i18n/local-params";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

const base = "https://www.vision-it.at";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = (await params).locale || "de";
  const canonical = `${base}/${locale}/angebot-seo-geo/`;

  const shared = {
    alternates: {
      canonical,
      languages: {
        de: `${base}/de/angebot-seo-geo/`,
        en: `${base}/en/angebot-seo-geo/`,
        "x-default": `${base}/de/angebot-seo-geo/`,
      },
    },
  };

  if (locale === "en") {
    return {
      ...shared,
      title: "SEO & GEO Services Vienna",
      description:
        "Technical SEO, on-page optimization and GEO (generative engine optimization) to help your business rank in search and AI answers. By VisionIT, Vienna.",
      openGraph: {
        title: "SEO & GEO Services Vienna | VisionIT",
        description:
          "Technical SEO, on-page optimization and GEO to help your business rank in search and AI answers.",
        url: canonical,
        siteName: "VisionIT",
        type: "website",
      },
    };
  }

  return {
    ...shared,
    title: "SEO & GEO Leistungen Wien",
    description:
      "Technisches SEO, On-Page-Optimierung und GEO (Generative Engine Optimization) für bessere Sichtbarkeit in Suche und KI-Antworten. Von VisionIT, Wien.",
    openGraph: {
      title: "SEO & GEO Leistungen Wien | VisionIT",
      description:
        "Technisches SEO, On-Page-Optimierung und GEO für bessere Sichtbarkeit in Suche und KI-Antworten.",
      url: canonical,
      siteName: "VisionIT",
      type: "website",
    },
  };
}

export default async function AngebotSeoGeoPage(props: LocaleParams) {
  const { locale } = await props.params;
  const data = await fetchHomePageData(locale);
  const area = data.angebot_section.areas.find((a) => a.id === "seo-geo")!;

  return (
    <PageWrapper
      locale={locale}
      pageContent={<AngebotDetailView area={area} locale={locale} />}
    />
  );
}
