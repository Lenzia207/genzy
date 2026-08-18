import { HomePageData } from "@/app/[locale]/home/sections/data/types/home-types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const navigate = (
    sectionId: string,
    locale: string,
    isHomePage: boolean,
    router: AppRouterInstance,
) => {
    if (isHomePage) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        sessionStorage.setItem("scrollTarget", sectionId);
        router.push(`/${locale}`);
    }
};

export const checkSectionLocation = (isHomePage: boolean) => {
    if (!isHomePage) return;
    const target = sessionStorage.getItem("scrollTarget");
    if (!target) return;
    sessionStorage.removeItem("scrollTarget");
    const timer = setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
    return () => clearTimeout(timer);
};

/**
 * Returns an onScroll handler that hides the nav when scrolling down
 * and shows it when scrolling up or near the top.
 *
 * Uses a ref for lastY to avoid stale closures — safe to use with an
 * empty dependency array.
 *
 * @example
 * useEffect(() => createScrollVisibilityHandler(lastYRef, setVisible), []);
 */
export const createScrollVisibilityHandler = (
    setScrolled: React.Dispatch<React.SetStateAction<boolean>>
) => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
};

export const setItemActive = (data: HomePageData, setActiveSection: React.Dispatch<React.SetStateAction<string>>) => {
    const ids = data.main_navigation
        .map((item) => item.pageId.replace("#", ""))
        .filter(Boolean);

    const getActive = () => {
        const threshold = window.innerHeight * 0.4; // 40% from top
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
};

/**
 * Returns an onScroll handler that continuously rotates a value:
 * clockwise while the user scrolls down, counter-clockwise while
 * scrolling up. The rotation amount is proportional to the scroll
 * delta, so faster scrolling spins it faster.
 *
 * @example
 * useEffect(() => createScrollRotationHandler(setRotation), []);
 */
export const createScrollRotationHandler = (
    setRotation: React.Dispatch<React.SetStateAction<number>>
) => {
    let lastY = window.scrollY;

    const onScroll = () => {
        const currentY = window.scrollY;
        const delta = currentY - lastY;
        lastY = currentY;
        setRotation((prev) => prev + delta * 1.1);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
};