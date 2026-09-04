import { AngebotArea } from "../home/sections/data/types/home-types";
import { AngebotSeoGeoData } from "./data/seo-geo-types";
import SeoGeoDetailUI from "./SeoGeoDetailUI";


interface AngebotDetailViewProps {
  seoGeoPage: AngebotSeoGeoData;
  area: AngebotArea;
  locale: string;
}

export default function SeoGeoDetailView({ seoGeoPage, area, locale }: AngebotDetailViewProps) {
  return (
    <SeoGeoDetailUI  
      badge={area.badge}
      title={seoGeoPage.title}
      description={seoGeoPage.description}
      servicesTitle={seoGeoPage.servicesTitle}
      servicesDescription={seoGeoPage.servicesDescription}
      // services={area.services}
      processLabel={area.processLabel}
      ctaLabel={seoGeoPage.ctaLabel}
      process={area.process}
      locale={locale}
    />
  );
}
