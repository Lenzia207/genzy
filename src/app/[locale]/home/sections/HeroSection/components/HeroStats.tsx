"use client";

import { useEffect, useRef, useState } from "react";
import { HeroStat } from "../../data/types/home-types";

interface HeroStatsProps {
  stats: HeroStat[];
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const dur = 1300;
            const tick = (now: number) => {
              const p = Math.min((now - start) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(value * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("de-DE")}
      {suffix}
    </span>
  );
}

export default function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="section-lime relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="reveal-on-scroll">
            <div className="font-mono text-4xl md:text-5xl font-bold tracking-tight">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-2 label-mono" style={{ color: "var(--text-300)" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
