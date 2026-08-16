interface ToggleButtonProps {
    onClick: () => void;
    isActive: boolean;
    label: string;
}
export default function ToggleButton({ onClick, isActive, label }: ToggleButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex items-center gap-2.5 px-4 py-2.5 border text-sm font-medium transition-all duration-200"
            style={{
                background: isActive ? "var(--accent-purple-glow)" : "var(--bg-surface)",
                borderColor: isActive ? "var(--border-accent)" : "var(--border)",
                color: isActive ? "var(--teal)" : "var(--text-secondary)",
            }}
        >
            <span
                className="w-4 h-4 flex items-center justify-center border-2 transition-all shrink-0"
                style={{
                    background: isActive ? "var(--accent-purple)" : "transparent",
                    borderColor: isActive ? "var(--accent-purple)" : "var(--border-hover)",
                }}
            >
                {isActive && (
                    <svg
                        className="w-2.5 h-2.5"
                        style={{ color: "var(--teal)" }}
                        viewBox="0 0 10 8"
                        fill="none"
                    >
                        <path
                            d="M1 4L4 7L9 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </span>
            {label}
        </button>
    )
}