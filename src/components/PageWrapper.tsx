import { ReactNode } from "react";
import Footer from "../app/[locale]/home/sections/Footer";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import BottomNavigation from "@/components/AppNavigation/BottomNavigation";
import fetchHomePageData from "../app/[locale]/home/sections/data/home-page-data";
import MainNavigation from "./AppNavigation/MainNavigation";

interface PageWrapperProps {
  locale: string;
  readonly pageContent: ReactNode;
}

export default async function PageWrapper({
  locale,
  pageContent,
}: PageWrapperProps) {
      const data = await fetchHomePageData(locale);
  return (
    <main className="min-h-screen">
      <ScrollRevealObserver />
      <MainNavigation data={data} locale={locale} />
      {pageContent}
      <Footer locale={locale} />
      {/* Mobile View */}
      <BottomNavigation data={data} locale={locale} />
    </main>
  );
}
