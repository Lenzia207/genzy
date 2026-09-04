import { AngebotProcessStep } from "../../home/sections/data/types/home-types";

export interface AngebotSeoGeoService {
  icon: string;
  title: string;
  description: string;
  
}

export interface AngebotSeoGeoData {
  title: string;
  description: string;
  servicesTitle: string;
  servicesDescription: string;
  services: AngebotSeoGeoService[];
  ctaLabel: string;
}
