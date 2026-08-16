interface TechStackSectionProps {
  title: string;
  stacks: { category: string; items: string[] }[];
}

export default function TechStackSection({ title, stacks }: TechStackSectionProps) {
  return (
    <div className="glass-panel" style={{ padding: "3rem" }}>
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          marginBottom: "2rem",
          color: "var(--text-100)",
        }}
      >
        {title}
      </h3>

      {stacks.map((stack, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          <h4
            className="label-mono"
            style={{
              fontSize: "0.85rem",
              color: "var(--text-400)",
              marginBottom: "1rem",
              letterSpacing: "0.1em",
            }}
          >
            {stack.category}
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {stack.items.map((item, i) => (
              <span key={i} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
