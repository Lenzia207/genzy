import type { Metadata } from "next";
import { LocaleParams } from "../i18n/local-params";
import HomeScreen from "./home/HomeScreen";
import fetchHomePageData from "./home/sections/data/home-page-data";

import PageWrapper from "@/components/PageWrapper";
export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

const base = "https://www.vision-it.at";

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const locale = (await params).locale || "de";
  const canonical = `${base}/${locale}/`;

  const shared = {
    alternates: {
      canonical,
      languages: {
        de: `${base}/de/`,
        en: `${base}/en/`,
        "x-default": `${base}/de/`,
      },
    },
  };

  if (locale === "en") {
    return {
      ...shared,
      title: "VisionIT Vienna | Web Development, Apps, SEO & GEO",
      description:
        "VisionIT in Vienna – custom web development, mobile apps, SEO and GEO for businesses and freelancers. Personally developed by Lena Zyadeh",
      openGraph: {
        title: "VisionIT Vienna | Web Development, Apps, SEO & GEO",
        description:
          "VisionIT in Vienna – custom web development, mobile apps, SEO and GEO for businesses and freelancers. Personally developed by Lena Zyadeh",
        url: canonical,
        siteName: "VisionIT",
        type: "website",
      },
    };
  }

  return {
    ...shared,
    title: "VisionIT Wien | Webentwicklung, Apps, SEO & GEO",
    description:
      "VisionIT in Wien – individuelle Webentwicklung, Mobile Apps, SEO & GEO für Unternehmen und Selbständige. Persönlich umgesetzt von Lena Zyadeh",
    openGraph: {
      title: "VisionIT Wien | Webentwicklung, Apps, SEO & GEO",
      description:
        "VisionIT in Wien – individuelle Webentwicklung, Mobile Apps, SEO & GEO für Unternehmen und Selbständige. Persönlich umgesetzt von Lena Zyadeh.",
      url: canonical,
      siteName: "VisionIT",
      type: "website",
    },
  };
}

export default async function Home(props: LocaleParams) {
  const { locale } = await props.params;
  console.log(locale);

  const data = await fetchHomePageData(locale);

  if (!data) return <div>Loading...</div>;

  return (
    <PageWrapper
      locale={locale}
      pageContent={<HomeScreen data={data} locale={locale} />}
    />
  );
}
