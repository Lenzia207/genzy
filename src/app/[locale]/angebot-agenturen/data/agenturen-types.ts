import { AngebotProcessStep } from "../../home/sections/data/types/home-types";

export interface AngebotAgenturenService {
  icon: string;
  title: string;
  description: string;
  
}

export interface AngebotAgenturenData {
  title: string;
  description: string;
  servicesTitle: string;
  servicesDescription: string;
  services: AngebotAgenturenService[];
  ctaLabel: string;
}
