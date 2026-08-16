"use client";

import { usePathname, useRouter } from "next/navigation";
import { HomePageData } from "@/app/[locale]/home/sections/data/types/home-types";
import { useState, useEffect, useCallback } from "react";
import { checkSectionLocation, navigate } from "./navigation-service";

interface BottomNavigationProps {
  data: HomePageData;
  locale: string;
}

export default function BottomNavigation({ data, locale }: BottomNavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  const navigateToSection = useCallback(
    (sectionId: string) => {
      navigate(sectionId, locale, isHomePage, router);
    },
    [isHomePage, router, locale]
  );

  // On home page load, check if we need to scroll to a section (cross-page nav)
  useEffect(() => {
    checkSectionLocation(isHomePage);
  }, [isHomePage]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  useEffect(() => {
    const ids = data.main_navigation
      .map((item) => item.pageId.replace("#", ""))
      .filter(Boolean);

    const getActive = () => {
      const threshold = window.innerHeight * 0.4;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", getActive, { passive: true });
    getActive();
    return () => window.removeEventListener("scroll", getActive);
  }, [data.main_navigation]);

  return (
    <div
      className={`md:hidden fixed z-50 bottom-6 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-[120%] opacity-0"
      }`}
    >
      <nav className="flex items-center gap-0.5 p-1 shadow-[0_8px_32px_rgba(2,70,75,0.35)]" style={{ background: "var(--teal)" }}>
        {data.main_navigation.map((item, index) => {
          const isFirst = index === 0;
          const sectionId = item.pageId.replace("#", "");
          const isActive = sectionId === activeSection || (!activeSection && isFirst);

          return (
            <button
              key={index}
              type="button"
              className="inline-flex items-center justify-center px-3 py-1.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.08em] whitespace-nowrap no-underline transition-all duration-200"
              style={{
                color: isActive ? "var(--teal)" : "#C7D9D8",
                background: isActive ? "var(--lime)" : "transparent",
              }}
              onClick={() => navigateToSection(sectionId)}
            >
              {item.name}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
