interface AboutMeInfoProps {
  subTitle: string;
  title: string;
  description: string;
}

export default function AboutMeInfo({
  subTitle,
  title,
  description,
}: AboutMeInfoProps) {
  const paragraphs = description.split("\n\n");

  return (
    <section id="about-me" className="section-dark section-padding relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center reveal-on-scroll">
        <p className="section-tag mb-4">{subTitle}</p>
        <h2 className="text-display-2 mb-6" >
          {title}
        </h2>

        {/* Squiggle divider */}
        <svg
          width="48"
          height="16"
          viewBox="0 0 48 16"
          fill="none"
          className="mx-auto mb-12"
          aria-hidden="true"
        >
          <path
            d="M2 8c3-6 6-6 9 0s6 6 9 0 6-6 9 0 6 6 9 0"
            stroke="var(--lime)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 text-left">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-base md:text-lg text-justify leading-relaxed"
              style={{ color: "var(--text-300)" }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
