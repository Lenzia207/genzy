import { AngebotArea } from "../../home/sections/data/types/home-types";
import { AngebotAgenturenData } from "../data/agenturen-types";
import AgenturenDetailUI from "./AgenturenDetailUI";



interface AgenturenDetailViewProps {
  agenturenPage: AngebotAgenturenData;
  area: AngebotArea;
  locale: string;
}

export default function AgenturenDetailView({ agenturenPage, area, locale }: AgenturenDetailViewProps) {
  return (
    <AgenturenDetailUI  
      badge={area.badge}
      title={agenturenPage.title}
      description={agenturenPage.description}
      servicesTitle={agenturenPage.servicesTitle}
      servicesDescription={agenturenPage.servicesDescription}
      // services={area.services}
      processLabel={area.processLabel}
      ctaLabel={agenturenPage.ctaLabel}
      process={area.process}
      locale={locale}
    />
  );
}
