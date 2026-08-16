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
    <section id="top" className="section-dark relative overflow-hidden min-h-screen">
      <div className="hero-deco-left absolute bottom-20 left-0 w-[35vw]  aspect-square pointer-events-none">
        <Image src="/images/hero-left.png" alt="" fill priority className="object-contain" />
      </div>
      <div className="hero-deco-right absolute bottom-20 right-0 w-[35vw]  aspect-square pointer-events-none">
        <Image src="/images/hero-right.png" alt="" fill priority className="object-contain" />
      </div>

      <div className="hero-text-settle relative z-10 flex flex-col items-center text-center px-6 pt-36 pb-14">
        <h1 className="animate-enter font-mono uppercase" style={{  fontWeight: 700, letterSpacing: "0.06em", lineHeight: 1 }}>
          Lena Zyadeh
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl font-medium animate-enter delay-100" style={{ color: "var(--lime)" }}>
          {titleLine1}
        </p>
        {/* <p className="mt-4 max-w-xl leading-relaxed animate-enter delay-200" style={{ color: "var(--text-300)" }}>
          {description}
        </p> */}
        {/* <div className="mt-8 flex flex-wrap gap-4 justify-center animate-enter delay-300">
          <a href="#contact" className="btn btn-primary">{btnText}</a>
          <a href="#projects" className="btn btn-secondary">{viewMore}</a>
        </div> */}
      </div>

      <div className="hero-portrait-reveal relative z-10 w-full max-w-[520px] mx-auto aspect-4/5 overflow-hidden">
        <Image
          src="/images/me_transparent.png"
          alt="Lena Zyadeh"
          fill
          priority
          className="object-cover"
          // sizes="(max-width: 640px) 90vw, 520px"
        />
      </div>

      <HeroStats stats={stats} />
    </section>
  );
}
