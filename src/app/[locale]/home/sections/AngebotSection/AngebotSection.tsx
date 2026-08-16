import TitleHeader from "@/components/TitleHeader";
import { AngebotArea } from "../data/types/home-types";
import AngebotCard from "./AngebotCard";

interface AngebotSectionProps {
  title: string;
  description: string;
  areas: AngebotArea[];
  locale: string;
}

export default function AngebotSection({ title, description, areas, locale }: AngebotSectionProps) {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <TitleHeader tag="ANGEBOT" title={title} description={description} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <AngebotCard key={area.id} area={area} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
