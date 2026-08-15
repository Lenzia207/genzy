import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["de", "en"],

  // Used when no locale matches
  defaultLocale: "de",
  localePrefix: 'always',
  localeDetection: false,
});

export const getLocalizedPath = (locale: string, page: 'imprint' | 'privacy') => {
    const paths = {
        imprint: {
            de: { path: "/impressum", text: "Impressum" },
            en: { path: "/impressum", text: "Imprint" }
        },
        privacy: {
            de: { path: "/datenschutz", text: "Datenschutz" },
            en: { path: "/datenschutz", text: "Data Privacy" }
        }
    };
    
    return paths[page][locale as 'de' | 'en'];
};

export type Locale = (typeof routing.locales)[number];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
