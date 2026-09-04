
import TitleHeader from "@/components/TitleHeader";
import { AngebotProcessStep } from "../../home/sections/data/types/home-types";


interface MobileAppsDetailUIProps {
  badge: string;
  title: string;
  description: string;
  servicesTitle: string;
  servicesDescription?: string;
  processLabel: string;
  ctaLabel: string;
  // services: AngebotWebsiteService[];
  process: AngebotProcessStep[];
  locale: string;
}

export default function MobileAppsDetailUI({ badge, title, description, servicesTitle, servicesDescription, processLabel, ctaLabel, // services,
 process, locale }: MobileAppsDetailUIProps) {
  return (
    <>
      <section className="section-dark relative section-padding" style={{ paddingTop: "8rem" }}>
        <TitleHeader as="h1" variant="badge" badge={badge} title={title} description={description} />
      </section>

      {/* <WebsiteServiceSection servicesTitle={servicesTitle} servicesDescription={servicesDescription} services={services} ctaLabel={ctaLabel} locale={locale} /> */}
      {/* Website Pakete in white BG */}

      {/* <Link href="/#contact" locale={locale} className="btn btn-primary">
            {linkLabel}
          </Link> */}


      {/* <WebsiteProcessSection processLabel={processLabel} process={process} /> */}
    </>
  );
}
