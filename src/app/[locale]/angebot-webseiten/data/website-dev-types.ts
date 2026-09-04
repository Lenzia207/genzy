
export interface AngebotWebsiteService {
  icon: string;
  title: string;
  description: string;
  
}

export interface AngebotWebsiteData {
  title: string;
  description: string;
  servicesTitle: string;
  servicesDescription: string;
  services: AngebotWebsiteService[];
  ctaLabel: string;
}
