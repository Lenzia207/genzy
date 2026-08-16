import Image from "next/image";
import HeroStats from "./components/HeroStats";
import { HeroStat } from "../data/types/home-types";

interface HeroSectionProps {
  titleLine1: string;
  description: string;
  btnText: string;
  viewMore: string;
  stats: HeroStat[];
}

export default function HeroSection({
  titleLine1,
  description,
  btnText,
  viewMore,
  stats,
}: HeroSectionProps) {
  return (
    <section id="top" className="section-dark relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[38vw] h-[38vw] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[38vw] h-[38vw] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-36 pb-14">
        <h1 className="animate-enter font-mono uppercase" style={{ fontSize: "clamp(2.4rem,9vw,6.5rem)", fontWeight: 700, letterSpacing: "0.06em", lineHeight: 1 }}>
          Lena Zyadeh
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl font-medium animate-enter delay-100" style={{ color: "var(--lime)" }}>
          {titleLine1}
        </p>
        <p className="mt-4 max-w-xl leading-relaxed animate-enter delay-200" style={{ color: "var(--text-300)" }}>
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center animate-enter delay-300">
          <a href="#contact" className="btn btn-primary">{btnText}</a>
          <a href="#projects" className="btn btn-secondary">{viewMore}</a>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[520px] mx-auto aspect-4/5 animate-enter delay-400">
        <Image
          src="/images/me_transparent.png"
          alt="Lena Zyadeh"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 90vw, 520px"
        />
      </div>

      <HeroStats stats={stats} />
    </section>
  );
}
