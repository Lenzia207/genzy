import { AngebotProcessStep } from "../../home/sections/data/types/home-types";

export interface AngebotMobileAppsService {
  icon: string;
  title: string;
  description: string;
  
}

export interface AngebotMobileAppsData {
  title: string;
  description: string;
  servicesTitle: string;
  servicesDescription: string;
  services: AngebotMobileAppsService[];
  ctaLabel: string;
}
