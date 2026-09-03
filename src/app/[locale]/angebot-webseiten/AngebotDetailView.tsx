import { AngebotWebsiteData } from "./data/website-dev-types";
import { AngebotArea } from "../home/sections/data/types/home-types";
import AngebotDetailUI from "./AngebotDetailUI";


interface AngebotDetailViewProps {
  websitePage: AngebotWebsiteData;
  area: AngebotArea;
  locale: string;
}

export default function AngebotDetailView({ websitePage, area, locale }: AngebotDetailViewProps) {
  return (
    <AngebotDetailUI  
      badge={area.badge}
      title={websitePage.title}
      description={websitePage.description}
      servicesTitle={websitePage.servicesTitle}
      servicesDescription={websitePage.servicesDescription}
      services={websitePage.services}
      processLabel={area.processLabel}
      ctaLabel={websitePage.ctaLabel}
      process={area.process}
      locale={locale}
    />
  );
}
