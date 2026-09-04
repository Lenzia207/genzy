

import { AngebotArea } from "../../home/sections/data/types/home-types";
import { AngebotMobileAppsData } from "../data/mobile-apps-types";
import MobileAppsDetailUI from "./MobileAppsDetailUI";


interface MobileAppsDetailViewProps {
  mobileAppsPage: AngebotMobileAppsData;
  area: AngebotArea;
  locale: string;
}

export default function MobileAppsDetailView({ mobileAppsPage, area, locale }: MobileAppsDetailViewProps) {
  return (
    <MobileAppsDetailUI  
      badge={area.badge}
      title={mobileAppsPage.title}
      description={mobileAppsPage.description}
      servicesTitle={mobileAppsPage.servicesTitle}
      servicesDescription={mobileAppsPage.servicesDescription}
      // services={area.services}
      processLabel={area.processLabel}
      ctaLabel={mobileAppsPage.ctaLabel}
      process={area.process}
      locale={locale}
    />
  );
}
