"use client";
import { useEffect } from "react";

interface MobileCenterActivationObserverProps {
  /** CSS selector for elements to observe */
  selector: string;
  /** Class toggled when an element is within the threshold of viewport center (default: "is-active") */
  activeClass?: string;
  /** Px distance from viewport center to activate (default: 50) */
  threshold?: number;
  /** Max-width media query breakpoint (px) up to which this observer is active (default: 1024, covers phones + tablets) */
  maxWidth?: number;
}

/**
 * Generic scroll observer that toggles an "active" class on any elements
 * matching `selector` once their center passes within `threshold`px of the
 * viewport's vertical center. Useful for triggering hover-like effects on
 * touch devices as the user scrolls elements through the center of the screen.
 *
 * Only runs on mobile/tablet viewports (<= `maxWidth`, default 1024px) since
 * desktop already gets the equivalent effect via CSS `:hover`.
 *
 * Mount once per selector you need (e.g. one for process cards, one for
 * portfolio items, etc.) — each instance runs independently.
 */
export default function MobileCenterActivationObserver({
  selector,
  activeClass = "is-active",
  threshold = 50,
  maxWidth = 1024,
}: MobileCenterActivationObserverProps) {
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${maxWidth}px)`);
    let rafId: number | null = null;

    const clearActiveElements = () => {
      document
        .querySelectorAll<HTMLElement>(selector)
        .forEach((el) => el.classList.remove(activeClass));
    };

    const updateActiveElements = () => {
      rafId = null;
      const viewportCenter = window.innerHeight / 2;
      const elements = document.querySelectorAll<HTMLElement>(selector);

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elCenter - viewportCenter);

        el.classList.toggle(activeClass, distance <= threshold);
      });
    };

    const onScrollOrResize = () => {
      if (!mql.matches) return;
      if (rafId === null) {
        rafId = requestAnimationFrame(updateActiveElements);
      }
    };

    const onMqlChange = () => {
      if (mql.matches) {
        onScrollOrResize();
      } else {
        clearActiveElements();
      }
    };

    if (mql.matches) {
      updateActiveElements();
    }

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    mql.addEventListener("change", onMqlChange);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      mql.removeEventListener("change", onMqlChange);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [selector, activeClass, threshold, maxWidth]);

  return null;
}
