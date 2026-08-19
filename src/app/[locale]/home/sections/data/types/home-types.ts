/**
 * Type declarations for the home page.
 */
export interface HomePageData {
  main_navigation: MainNavigation[];
  hero_section: HeroSection;
  angebot_section: AngebotSection;
  portfolio_section: PortfolioSection;
  tech_stack_section: TechStackSection;
  about_me_info_section: AboutMeInfoSection;
  about_me_section: AboutMeSection;
  contact_section: ContactSection;
  price_packages_section: PricePackagesSection;
}

export interface PricePackage {
  name: string;
  price: string;
  for: string;
  features: string[];
}

export interface PricePackagesSection {
  title: string;
  btnText: string;
  packages: PricePackage[];
}

export interface MainNavigationSubItem {
  name: string;
  pageId: string;
}

export interface MainNavigation {
  name: string;
  page: string;
  pageId: string;
  submenu?: MainNavigationSubItem[];
}

export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroSection {
  title_line1: string;
  sub_text: string;
  stats: HeroStat[];
}

export interface AngebotProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface AngebotArea {
  id: string;
  badge: string;
  title: string;
  servicesLabel: string;
  processLabel: string;
  linkLabel: string;
  link: string;
  services: string[];
  process: AngebotProcessStep[];
}

export interface AngebotSection {
  title: string;
  description: string;
  areas: AngebotArea[];
}

export interface PortfolioSection {
  title: string;
  description: string;
  categories: string[];
  projects: Project[];
}

export interface Project {
  title: string;
  description: string;
  category: string;
  image: string | null;
  url?: string;
  tags: string[];
}

export interface TechStackSection {
  title: string;
  description: string;
  stacks: {
    category: string;
    items: string[];
  }[];
}

export interface AboutMeInfoSection {
  subTitle: string;
  title: string;
  description: string;
}

export interface AboutMeSection {
  title: string;
  name: string;
  description: string;
  social_media: {
    name: string;
    icon: string;
    url: string;
  }[];
}
export interface ContactSection {
  title: string;
  description: string;
  nameLabel: string;
  namePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  btn_text: string;
  interestLabel: string;
  interestWebsite: string;
  interestMobileApp: string;
  interestGeneral: string;
  packageLabel: string;
  serviceLabel: string;
  serviceOptions: string[];
}
