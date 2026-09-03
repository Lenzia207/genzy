import TitleHeader from "@/components/TitleHeader";
import { AngebotProcessStep } from "../../home/sections/data/types/home-types";
import MobileCenterActivationObserver from "@/components/MobileCenterActivationObserver";

interface WebsiteProcessSectionProps {
    processLabel: string;
    process: AngebotProcessStep[];
}

export default function WebsiteProcessSection({ processLabel, process }: WebsiteProcessSectionProps) {
  return (
   <section className="section-dark section-padding" style={{ paddingTop: 0 }}>
           <MobileCenterActivationObserver selector=".process-card" threshold={90} />
           <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
             <TitleHeader title={processLabel} />
             <div className="process-grid">
               {process.map((step, i) => (
                 <div key={i} className="process-card">
                   <div className="process-step-label">{`Step ${step.step}`}</div>
                   <div className="process-title">{step.title}</div>
                   <p className="process-desc">{step.description}</p>
                 </div>
               ))}
             </div>
           </div>
         </section>
  );
}