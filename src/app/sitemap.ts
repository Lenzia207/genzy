import { MetadataRoute } from 'next';
import { agenturenDetailUrl, baseUrl, briefingFormularUrl, mobileAppDetailUrl, seoGeoDetailUrl, websiteDetailUrl } from './configs/configs';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/de/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          de: `${baseUrl}/de/`,
          en: `${baseUrl}/en/`,
        },
      },
    },
    {
      url: `${baseUrl}/en/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          de: `${baseUrl}/de/`,
          en: `${baseUrl}/en/`,
        },
      },
    },
    {
      url: `${baseUrl}/de/impressum/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          de: `${baseUrl}/de/impressum/`,
          en: `${baseUrl}/en/impressum/`,
        },
      },
    },
    {
      url: `${baseUrl}/en/impressum/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          de: `${baseUrl}/de/impressum/`,
          en: `${baseUrl}/en/impressum/`,
        },
      },
    },
    {
      url: `${baseUrl}/de/datenschutz/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          de: `${baseUrl}/de/datenschutz/`,
          en: `${baseUrl}/en/datenschutz/`,
        },
      },
    },
    {
      url: `${baseUrl}/en/datenschutz/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          de: `${baseUrl}/de/datenschutz/`,
          en: `${baseUrl}/en/datenschutz/`,
        },
      },
    },
    {
      url: `${baseUrl}/de${briefingFormularUrl}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de${briefingFormularUrl}`,
          en: `${baseUrl}/en${briefingFormularUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/en${briefingFormularUrl}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de${briefingFormularUrl}`,
          en: `${baseUrl}/en${briefingFormularUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/de${seoGeoDetailUrl}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de${seoGeoDetailUrl}`,
          en: `${baseUrl}/en${seoGeoDetailUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/en${seoGeoDetailUrl}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de${seoGeoDetailUrl}`,
          en: `${baseUrl}/en${seoGeoDetailUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/de${mobileAppDetailUrl}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de${mobileAppDetailUrl}`,
          en: `${baseUrl}/en${mobileAppDetailUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/en${mobileAppDetailUrl}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de${mobileAppDetailUrl}`,
          en: `${baseUrl}/en${mobileAppDetailUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/de${agenturenDetailUrl}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de${agenturenDetailUrl}`,
          en: `${baseUrl}/en${agenturenDetailUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/en${agenturenDetailUrl}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de${agenturenDetailUrl}`,
          en: `${baseUrl}/en${agenturenDetailUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/de${websiteDetailUrl}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de${websiteDetailUrl}`,
          en: `${baseUrl}/en${websiteDetailUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/en${websiteDetailUrl}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de${websiteDetailUrl}`,
          en: `${baseUrl}/en${websiteDetailUrl}`,
        },
      },
    },
  ];
}
