"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { HomePageData } from "@/app/[locale]/home/sections/data/types/home-types";
import { useState, useEffect, useCallback } from "react";
import { checkSectionLocation, navigate, setItemActive } from "./navigation-service";
import { SwitchLanguage } from "../LanguageSwitcher";
import { Link } from "@/app/i18n/routing";

interface BottomNavigationProps {
  data: HomePageData;
  locale: string;
}

export default function BottomNavigation({ data, locale }: BottomNavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
  const [hideOnHero, setHideOnHero] = useState(isHomePage);

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

  useEffect(() => setItemActive(data, setActiveSection), [data.main_navigation]);

  // Hide the bottom bar while the hero section ("#top") is visible on screen
  useEffect(() => {
    const heroEl = document.getElementById("top");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHideOnHero(entry.isIntersecting),
      { threshold: 1 }
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the fullscreen menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const openMenu = () => {
    setActiveItemIndex(null);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveItemIndex(null);
  };

  const handleItemClick = (item: HomePageData["main_navigation"][number], index: number) => {
    if (item.submenu && item.submenu.length > 0) {
      setActiveItemIndex(index);
      return;
    }
    navigateToSection(item.pageId.replace("#", ""));
    closeMenu();
  };

  const handleSubmenuClick = (pageId: string) => {
    const sectionId = pageId.replace("#", "");
    const wasActive = sectionId === activeSection;
    navigateToSection(sectionId);
    closeMenu();
    if (wasActive) {
      closeMenu();
    }
  };

  const activeItem = activeItemIndex !== null ? data.main_navigation[activeItemIndex] : null;

  return (
    <>
      {/* Bottom Bar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-8 py-3 bg-white shadow-[0_-4px_24px_rgba(2,70,75,0.25)] transition-transform duration-300 ease-in-out ${hideOnHero ? "translate-y-full" : "translate-y-0"
          }`}
      >
        {/* Left: Logo + Language */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={locale === "de" ? "Nach oben" : "Back to top"}
            onClick={() => navigateToSection("top")}
            className="relative flex items-center justify-center w-8 h-8 shrink-0"
          >
            <Image src="/images/logo-mark.svg" alt="" fill className="object-contain" />
          </button>
          {/* <SwitchLanguage /> */}
        </div>

        {/* Right: Burger button */}
        <button
          type="button"
          aria-label={locale === "de" ? "Menü öffnen" : "Open menu"}
          onClick={openMenu}
          className="flex flex-col items-center justify-center gap-[5px] w-9 h-9 shrink-0"
        >
          <span className="block w-6 h-0.5 rounded-full bg-(--teal)" />
          <span className="block w-6 h-0.5 rounded-full bg-(--teal)" />
          <span className="block w-6 h-0.5 rounded-full bg-(--teal)" />
        </button>
      </div>

      {/* Fullscreen Menu Overlay */}
      <div
        className={`fixed inset-0 z-60 bg-(--teal) transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden={!menuOpen}
      >
        {/* Close button */}
        <div className="flex justify-end px-4 md:px-8 py-4">
          <button
            type="button"
            aria-label={locale === "de" ? "Menü schließen" : "Close menu"}
            onClick={closeMenu}
            className="relative flex items-center justify-center w-9 h-9"
          >
            <span
              className="absolute block w-6 h-0.5 rounded-full rotate-45 bg-(--lime)"
            />
            <span
              className="absolute block w-6 h-0.5 rounded-full -rotate-45 bg-(--lime)"
            />
          </button>
        </div>

        {/* Page-turn sliding panels */}
        <div className="overflow-hidden" style={{ height: "calc(100% - 72px)" }}>
          <div
            className="flex h-full transition-transform duration-400 ease-out"
            style={{
              width: "200%",
              transform: activeItem ? "translateX(-50%)" : "translateX(0%)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Main Menu Panel */}
            <div className="w-1/2 flex flex-col items-center justify-center gap-7 px-6">
              {data.main_navigation.map((item, index) => {
                const sectionId = item.pageId.replace("#", "");
                const isActive = sectionId === activeSection;
                const hasSubmenu = !!item.submenu?.length;

                return (
                  <button
                    key={index}
                    type="button"
                    className={`font-mono text-2xl sm:text-3xl font-semibold uppercase tracking-[0.08em] transition-colors flex items-center gap-2 ${isActive ? "text-(--lime)" : "text-white"
                      }`}
                    onClick={() => handleItemClick(item, index)}
                  >
                    {item.name}
                    {hasSubmenu && (
                      <span aria-hidden="true" className="text-(--lime)">
                        &rsaquo;
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Submenu Panel */}
            <div className="w-1/2 relative flex flex-col items-center justify-center gap-7 px-6">
              <button
                type="button"
                onClick={() => setActiveItemIndex(null)}
                className="absolute top-2 left-6 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-(--lime)"
              >
                <span aria-hidden="true">&lsaquo;</span>
                {locale === "de" ? "Zurück" : "Back"}
              </button>

              {activeItem?.submenu?.map((sub, i) => (
                <button
                  key={i}
                  type="button"
                  className="font-mono text-xl sm:text-2xl font-medium uppercase tracking-[0.06em] text-white"
                  onClick={() => handleSubmenuClick(sub.pageId)}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
