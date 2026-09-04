import TitleHeader from "@/components/TitleHeader";
import { AngebotProcessStep } from "../../home/sections/data/types/home-types";
import WebsiteProcessSection from "../component/WebsiteProcessSection";
import WebsiteServiceSection from "../component/WebsiteServiceSection";
import { AngebotWebsiteService } from "../data/website-dev-types";


interface WebsiteDetailUIProps {
  badge: string;
  title: string;
  description: string;
  servicesTitle: string;
  servicesDescription?: string;
  processLabel: string;
  ctaLabel: string;
  services: AngebotWebsiteService[];
  process: AngebotProcessStep[];
  locale: string;
}

export default function WebsiteDetailUI({ badge, title, description, servicesTitle, servicesDescription, processLabel, ctaLabel, services, process, locale }: WebsiteDetailUIProps) {
  return (
    <>
      <section className="section-dark relative section-padding" style={{ paddingTop: "8rem" }}>
        <TitleHeader as="h1" variant="badge" badge={badge} title={title} description={description} />
      </section>

      <WebsiteServiceSection servicesTitle={servicesTitle} servicesDescription={servicesDescription} services={services} ctaLabel={ctaLabel} locale={locale} />
      {/* Website Pakete in white BG */}

      {/* <Link href="/#contact" locale={locale} className="btn btn-primary">
            {linkLabel}
          </Link> */}


      <WebsiteProcessSection processLabel={processLabel} process={process} />
    </>
  );
}
