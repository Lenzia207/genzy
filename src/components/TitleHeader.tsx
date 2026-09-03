export default function TitleHeader({
  title,
  description,
  tag,
  as: Tag = "h2",
  variant = "default",
  badge,
}: {
  title: string;
  description?: string;
  tag?: string;
  as?: "h1" | "h2";
  variant?: "default" | "badge";
  badge?: string;
}) {
  if (variant === "badge") {
    return (
      <div className="max-w-5xl mx-auto px-6 reveal-on-scroll">
        {badge && (
          <div className="label-mono mb-4" style={{ color: "var(--lime)" }}>
            {badge}
          </div>
        )}
        <Tag className="text-display-2">{title}</Tag>
        {description && (
          <p className="text-lg mt-4" style={{ color: "var(--text-300)" }}>
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center gap-4 mb-16 reveal-on-scroll">
      {tag && <span className="section-tag">{tag}</span>}
      <Tag className="text-display-2">{title}</Tag>
      {description && (
        <p className="text-lg max-w-5xl" style={{ color: "var(--text-300)" }}>
          {description}
        </p>
      )}
    </div>
  );
}