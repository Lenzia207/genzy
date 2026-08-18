import HeroSection from "./sections/HeroSection/HeroSection";
import AngebotSection from "./sections/AngebotSection/AngebotSection";
import PricePackages from "./sections/PricePackages";
import PortfolioSection from "./sections/PortfolioSection";
import TechStackSection from "./sections/TechStackSection";
import AboutMeInfo from "./sections/AboutMeInfo";
import AboutMeSection from "./sections/AboutMeSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import { HomePageData } from "./sections/data/types/home-types";
import TitleHeader from "@/components/TitleHeader";
import TechStackBanner from "./sections/HeroSection/components/TechStackBanner";

interface HomeScreenProps {
  data: HomePageData;
  locale: string;
}

export default function HomeScreen({ data, locale }: HomeScreenProps) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        titleLine1={data.hero_section.title_line1}
        subText={data.hero_section.sub_text}
        stacks={data.tech_stack_section.stacks}
      />

      <TechStackBanner stacks={data.tech_stack_section.stacks} />

      {/* About Me Info */}
      <AboutMeInfo
        subTitle={data.about_me_info_section.subTitle}
        title={data.about_me_info_section.title}
        description={data.about_me_info_section.description}
      />

      {/* Angebot Section */}
      <AngebotSection
        title={data.angebot_section.title}
        description={data.angebot_section.description}
        areas={data.angebot_section.areas}
        locale={locale}
      />

      {/* Pricing */}
      {/* <PricePackages
        title={data.price_packages_section.title}
        btnText={data.price_packages_section.btnText}
        packages={data.price_packages_section.packages}
      /> */}

      {/* Portfolio Section */}
      {/* <PortfolioSection
        title={data.portfolio_section.title}
        description={data.portfolio_section.description}
        categories={data.portfolio_section.categories}
        projects={data.portfolio_section.projects}
      /> */}

      {/* Dashboard: Tech Stack + About Me */}
      {/* <section id="about" className="section-padding">
        <TitleHeader title={data.about_me_section.title} tag="ÜBER MICH" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="dashboard-layout">
              <AboutMeSection
              title={data.about_me_section.title}
              description={data.about_me_section.description}
              social_media={data.about_me_section.social_media}
              fullname={data.about_me_section.name}
            />
            <TechStackSection
              title={data.tech_stack_section.title}
              stacks={data.tech_stack_section.stacks}
            />

          </div>
        </div>
      </section> */}

      {/* Contact / Footer */}
      <ContactSection
        contactData={data.contact_section}
        services={data.contact_section.serviceOptions}
        packages={data.price_packages_section.packages}
        locale={locale}
      />
    </>
  );
}
