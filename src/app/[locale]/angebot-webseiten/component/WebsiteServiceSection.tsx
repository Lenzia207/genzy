import IconLucide from "@/components/IconsLucide";
import TitleHeader from "@/components/TitleHeader";
import { Link } from "@/app/i18n/routing";
import MobileCenterActivationObserver from "@/components/MobileCenterActivationObserver";
import { AngebotWebsiteService } from "../data/website-dev-types";

interface WebsiteServiceSectionProps {
    servicesTitle: string;
    servicesDescription?: string;
    services: AngebotWebsiteService[];
    ctaLabel: string;
    locale: string;
}

export default function WebsiteServiceSection({
    servicesTitle,
    servicesDescription,
    services,
    ctaLabel,
    locale,
}: WebsiteServiceSectionProps) {
    return (
        <section className="section-padding">
            <MobileCenterActivationObserver selector=".service-card" threshold={150} />
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <TitleHeader title={servicesTitle} description={servicesDescription} />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <div key={i} className="flex service-card reveal-on-scroll justify-between">
                            <div>
                                <div className="service-card-icon">
                                    <IconLucide iconName={service.icon} size={22} />
                                </div>
                                <h3 className="service-card-title">{service.title}</h3>
                                <p className="service-card-desc">{service.description}</p>
                            </div>

                            <Link
                                href="/#contact"
                                locale={locale}
                                className="service-card-cta"
                            >
                                {ctaLabel}
                                <IconLucide iconName="arrow-right" size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

