import Image from "next/image";
import Typewriter from "./components/Typewriter";

interface HeroSectionProps {
  titleLine1: string;
  subText: string;
  stacks: { category: string; items: string[] }[];
}

export default function HeroSection({
  titleLine1,
  subText,
}: HeroSectionProps) {
  return (
    <section id="top" className="section-dark relative overflow-hidden min-h-screen">
      <div className="hero-deco-left absolute bottom-0 left-0 w-[58vw] lg:w-[35vw] aspect-square pointer-events-none">
        <Image src="/images/hero-left.png" alt="" fill priority className="object-contain" />
      </div>
      <div className="hero-deco-right absolute bottom-0 right-0 w-[58vw] lg:w-[35vw]  aspect-square pointer-events-none">
        <Image src="/images/hero-right.png" alt="" fill priority className="object-contain" />
      </div>

      <div className="hero-text-settle text-lg relative z-10 flex flex-col items-center text-center px-6 pt-36 pb-14">
        <h1 className="animate-enter font-mono uppercase" style={{  fontWeight: 700, letterSpacing: "0.06em", lineHeight: 1 }}>
          Lena Zyadeh
        </h1>
        <p className="mt-6 lg:max-w-2xl text-lg md:text-xl font-medium animate-enter delay-100" style={{ color: "var(--lime)" }}>
          {titleLine1}
        </p>
        <p
          className="mt-3 text-2xl md:text-2xl font-mono animate-enter delay-200"
          style={{  minHeight: "1.5em" }}
        >
          <Typewriter text={subText} startDelay={2000} speed={50} />
        </p>
      </div>

      <div className="hero-portrait-reveal relative z-10 w-full max-w-[520px] mx-auto aspect-4/5 overflow-hidden">
        <Image
          src="/images/me_transparent.png"
          alt="Lena Zyadeh"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
