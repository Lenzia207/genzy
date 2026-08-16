import TitleHeader from "@/components/TitleHeader";
import IconLucide from "@/components/IconsLucide";
import { PricePackage } from "./data/types/home-types";
import AppButton from "@/components/AppButton";

interface PricePackagesProps {
  title: string;
  btnText: string;
  packages: PricePackage[];
}

export default function PricePackages({ title, btnText, packages }: PricePackagesProps) {
  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <TitleHeader tag="PAKETE" title={title} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5" style={{ background: "var(--teal)" }}>
          {packages.map((pkg, index) => {
            const isHighlighted = index === 1;

            return (
              <div
                key={index}
                className="group p-8 reveal-on-scroll flex flex-col"
                style={{ background: isHighlighted ? "var(--lime)" : "#FFFFFF" }}
              >
                <div className="mb-6">
                  <h3 className="font-mono text-2xl font-medium mb-2" style={{ color: "var(--teal)" }}>
                    {pkg.name}
                  </h3>
                  <div className="font-mono text-3xl font-bold mb-4" style={{ color: "var(--teal)" }}>
                    {pkg.price}
                  </div>
                  <p className="text-sm" style={{ color: isHighlighted ? "#2C4A22" : "var(--text-secondary)" }}>
                    {pkg.for}
                  </p>
                </div>

                <div className="grow">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <IconLucide
                          iconName="Check"
                          className="w-4 h-4 mr-3 shrink-0 mt-0.5"
                          style={{ color: isHighlighted ? "var(--teal)" : "var(--lime-hover)" }}
                        />
                        <span className="text-sm leading-relaxed" style={{ color: isHighlighted ? "#233D1B" : "var(--text-secondary)" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <AppButton btnText={btnText} packageName={pkg.name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}