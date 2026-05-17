import HeroSection from "./sections/HeroSection/HeroSection";
import ServiceSection from "./sections/ServiceSection/ServiceSection";
import PortfolioSection from "./sections/PortfolioSection";
import TechStackSection from "./sections/TechStackSection";
import AboutMeSection from "./sections/AboutMeSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import { HomePageData } from "./sections/data/types/home-types";
import ProjectPhases from "./ProjectPhases/ProjectPhases";
import TitleHeader from "@/components/TitleHeader";

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
        description={data.hero_section.description}
        btnText={data.hero_section.btn_text}
        viewMore={data.hero_section.view_more}
      />

      {/* Services Section */}
      <ServiceSection
        title={data.service_section.title}
        description={data.service_section.description}
        services={data.service_section.services}
        btnText={data.service_section.btnText}
      />

      {/* Project Phases */}
      <ProjectPhases
        title={data.project_phases_section.title}
        description={data.project_phases_section.description}
        phases={data.project_phases_section.phases}
        btnText={data.project_phases_section.btnText}
      />

      {/* Portfolio Section */}
      {/* <PortfolioSection
        title={data.portfolio_section.title}
        description={data.portfolio_section.description}
        categories={data.portfolio_section.categories}
        projects={data.portfolio_section.projects}
      /> */}

      {/* Dashboard: Tech Stack + About Me */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-linear-to-r from-transparent via-(--border-light) to-transparent" />
      </div>
      <section id="about" className="section-padding">
        <TitleHeader title="Me Myself and I" tag="[ WHOAMI ]" />
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
      </section>

      {/* Contact / Footer */}
      <ContactSection
        contactData={data.contact_section}
        services={data.service_section.services}
        packages={data.price_packages_section.packages}
        locale={locale}
      />
    </>
  );
}
