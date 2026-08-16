"use client";

import { usePathname, useRouter } from "next/navigation";
import { SwitchLanguage } from "../LanguageSwitcher";
import { HomePageData } from "@/app/[locale]/home/sections/data/types/home-types";
import { useEffect, useState, useCallback } from "react";
import { checkSectionLocation, createScrollVisibilityHandler, navigate, setItemActive } from "./navigation-service";

interface MainNavigationProps {
  data: HomePageData;
  locale: string;
}

export default function MainNavigation({ data, locale }: MainNavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
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
  useEffect(() => createScrollVisibilityHandler(setScrolled), []);
  useEffect(() => setItemActive(data, setActiveSection), [data.main_navigation]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-center gap-3 md:gap-8 px-4 md:px-8 py-4 transition-all duration-300 ${scrolled ? "bg-white shadow-[0_4px_24px_rgba(2,70,75,0.1)]" : "bg-transparent"
        }`}
    >
      {data.main_navigation.slice(0, 2).map((item, index) => {
        const sectionId = item.pageId.replace("#", "");
        const isActive = sectionId === activeSection;

        return (
          <button
            key={index}
            type="button"
            className="hidden sm:block font-mono text-xs font-medium uppercase tracking-[0.16em] transition-colors"
            style={{ color: isActive ? "var(--lime-hover)" : scrolled ? "var(--text-100)" : "#FFFFFF" }}
            onClick={() => navigateToSection(sectionId)}
          >
            {item.name}
          </button>
        );
      })}

      <button
        type="button"
        aria-label={locale === "de" ? "Nach oben" : "Back to top"}
        onClick={() => navigateToSection("top")}
        className="flex items-center justify-center w-9 h-9 rotate-45 shrink-0"
        style={{ background: "var(--lime)" }}
      >
        <span className="-rotate-45 font-mono font-bold text-xs" style={{ color: "var(--teal)" }}>VI</span>
      </button>

      {data.main_navigation.slice(2).map((item, index) => {
        const sectionId = item.pageId.replace("#", "");
        const isActive = sectionId === activeSection;

        return (
          <button
            key={index}
            type="button"
            className="hidden sm:block font-mono text-xs font-medium uppercase tracking-[0.16em] transition-colors"
            style={{ color: isActive ? "var(--lime-hover)" : scrolled ? "var(--text-100)" : "#FFFFFF" }}
            onClick={() => navigateToSection(sectionId)}
          >
            {item.name}
          </button>
        );
      })}

      <SwitchLanguage />
    </nav>
  );
}
