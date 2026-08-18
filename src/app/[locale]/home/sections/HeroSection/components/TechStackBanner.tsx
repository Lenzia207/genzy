"use client";

interface TechStack {
  category: string;
  items: string[];
}

interface TechStackProps {
  stacks: TechStack[];
}

export default function TechStackBanner({ stacks }: TechStackProps) {
  const items = stacks.flatMap((stack) => stack.items);
  // Duplicate the list so the marquee can loop seamlessly.
  const marqueeItems = [...items, ...items];

  return (
    <div
      className="section-lime relative z-10 overflow-hidden"
      style={{
        borderTop: "2px solid var(--teal)",
        borderBottom: "2px solid var(--teal)",
      }}
    >
      <div className="marquee-track flex items-center whitespace-nowrap py-4">
        {marqueeItems.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="font-mono font-bold uppercase"
              style={{
                fontSize: "1.1rem",
                letterSpacing: "0.02em",
                color: "var(--teal)",
                padding: "0 1.5rem",
              }}
            >
              {item}
            </span>
            <span style={{ color: "var(--teal)", opacity: 0.5 }}>/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
