"use client";

import { useState } from "react";
import { Link } from "@/app/i18n/routing";
import { AngebotArea } from "../data/types/home-types";

interface AngebotCardProps {
  area: AngebotArea;
  locale: string;
}

export default function AngebotCard({ area, locale }: AngebotCardProps) {
  const [tab, setTab] = useState<"services" | "process">("services");

  return (
    <div id={area.id} className="card-dark flex flex-col reveal-on-scroll">
      <div className="p-6 bg-(--teal) text-white">
        <div className="label-mono mb-2 text-(--lime)">{area.badge}</div>
        <h3 className="font-mono text-lg font-medium">{area.title}</h3>
      </div>

      <div className="flex gap-0.5 p-0.5 bg-(--teal)">
        <button
          type="button"
          onClick={() => setTab("services")}
          className={`flex-1 py-2.5 font-mono text-[0.68rem] font-medium uppercase tracking-widest transition-colors cursor-pointer ${
            tab === "services" ? "bg-(--lime) text-(--teal)" : "bg-(--teal-2) text-[#9DB3B2]"
          }`}
        >
          {area.servicesLabel}
        </button>
        <button
          type="button"
          onClick={() => setTab("process")}
          className={`flex-1 py-2.5 font-mono text-[0.68rem] font-medium uppercase tracking-widest transition-colors cursor-pointer ${
            tab === "process" ? "bg-(--lime) text-(--teal)" : "bg-(--teal-2) text-[#9DB3B2]"
          }`}
        >
          {area.processLabel}
        </button>
      </div>

      <div className="grow p-6">
        {tab === "services" ? (
          <ul className="flex flex-col gap-3">
            {area.services.map((service, i) => (
              <li key={i} className="flex gap-2.5 items-start text-sm leading-relaxed text-(--text-300)">
                <span className="w-2 h-2 mt-1.5 shrink-0 bg-(--lime-hover)" />
                {service}
              </li>
            ))}
          </ul>
        ) : (
          <ol className="flex flex-col gap-4">
            {area.process.map((step, i) => (
              <li key={i} className="grid grid-cols-[26px_1fr] gap-2.5">
                <span className="font-mono text-sm font-bold text-(--teal)/50">{step.step}</span>
                <div>
                  <div className="font-mono text-sm font-medium mb-1">{step.title}</div>
                  <p className="text-sm leading-relaxed text-(--text-300)">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className="p-6 pt-0">
        <Link href={`/${area.link}`} locale={locale} className="btn btn-primary">
          {area.linkLabel}
        </Link>
      </div>
    </div>
  );
}

