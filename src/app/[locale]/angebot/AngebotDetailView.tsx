import { Link } from "@/app/i18n/routing";
import TitleHeader from "@/components/TitleHeader";
import { AngebotArea } from "../home/sections/data/types/home-types";

interface AngebotDetailViewProps {
  area: AngebotArea;
  locale: string;
}

export default function AngebotDetailView({ area, locale }: AngebotDetailViewProps) {
  return (
    <>
      <section className="section-dark relative section-padding" style={{ paddingTop: "8rem" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="label-mono mb-4" style={{ color: "var(--lime)" }}>{area.badge}</div>
          <h1 className="text-display-2">{area.title}</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <TitleHeader tag="" title={area.servicesLabel} />
            <ul className="flex flex-col gap-4 -mt-10">
              {area.services.map((service, i) => (
                <li key={i} className="flex gap-3 items-start text-sm leading-relaxed" style={{ color: "var(--text-300)" }}>
                  <span className="w-2 h-2 mt-1.5 shrink-0" style={{ background: "var(--lime-hover)" }} />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <TitleHeader tag="" title={area.processLabel} />
            <ol className="flex flex-col gap-6 -mt-10">
              {area.process.map((step, i) => (
                <li key={i} className="grid grid-cols-[32px_1fr] gap-3">
                  <span className="font-mono text-base font-bold" style={{ color: "var(--lime-hover)" }}>{step.step}</span>
                  <div>
                    <div className="font-mono text-base font-medium mb-1" style={{ color: "var(--text-100)" }}>{step.title}</div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-300)" }}>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-16">
          <Link href="/#contact" locale={locale} className="btn btn-primary">
            {area.linkLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
