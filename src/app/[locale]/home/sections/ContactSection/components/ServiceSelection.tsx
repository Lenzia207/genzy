interface ServiceSelectionProps {
    serviceLabel: string;
    services: string[];
    selectedServices: string[];
    toggleService: (serviceName: string) => void;

}

export default function ServiceSelection({ serviceLabel, services, selectedServices, toggleService }: ServiceSelectionProps) {
    return (
        <div className="mt-1 pl-1 space-y-2.5">

            <label className="text-sm font-medium ml-1 block" style={{ color: "var(--text-muted)" }}>
                {serviceLabel}
            </label>
            <div className="space-y-2">
                {services.map((service) => (
                    <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className="w-full flex items-center gap-3 px-4 py-3 border text-sm transition-all duration-200"
                        style={{
                            background: selectedServices.includes(service) ? "var(--accent-purple-glow)" : "var(--bg-surface)",
                            borderColor: selectedServices.includes(service) ? "var(--border-accent)" : "var(--border)",
                            color: selectedServices.includes(service) ? "var(--text-primary)" : "var(--text-secondary)",
                        }}
                    >
                        <span
                            className="w-4 h-4 flex items-center justify-center border-2 transition-all shrink-0"
                            style={{
                                background: selectedServices.includes(service) ? "var(--accent)" : "transparent",
                                borderColor: selectedServices.includes(service) ? "var(--accent)" : "var(--border-hover)",
                            }}
                        >
                            {selectedServices.includes(service) && (
                                <svg className="w-2.5 h-2.5" style={{ color: "var(--teal)" }} viewBox="0 0 10 8" fill="none">
                                    <path d="M1 4L4 7L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </span>
                        <span className="font-medium text-left">{service}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}