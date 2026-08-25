import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vision-it.at';
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
      url: `${baseUrl}/de/briefing-formular/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/briefing-formular/`,
          en: `${baseUrl}/en/briefing-formular/`,
        },
      },
    },
    {
      url: `${baseUrl}/en/briefing-formular/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/briefing-formular/`,
          en: `${baseUrl}/en/briefing-formular/`,
        },
      },
    },
    {
      url: `${baseUrl}/de/angebot-seo-geo/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de/angebot-seo-geo/`,
          en: `${baseUrl}/en/angebot-seo-geo/`,
        },
      },
    },
    {
      url: `${baseUrl}/en/angebot-seo-geo/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de/angebot-seo-geo/`,
          en: `${baseUrl}/en/angebot-seo-geo/`,
        },
      },
    },
    {
      url: `${baseUrl}/de/angebot-mobile-apps/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de/angebot-mobile-apps/`,
          en: `${baseUrl}/en/angebot-mobile-apps/`,
        },
      },
    },
    {
      url: `${baseUrl}/en/angebot-mobile-apps/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de/angebot-mobile-apps/`,
          en: `${baseUrl}/en/angebot-mobile-apps/`,
        },
      },
    },
    {
      url: `${baseUrl}/de/angebot-agenturen/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de/angebot-agenturen/`,
          en: `${baseUrl}/en/angebot-agenturen/`,
        },
      },
    },
    {
      url: `${baseUrl}/en/angebot-agenturen/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de/angebot-agenturen/`,
          en: `${baseUrl}/en/angebot-agenturen/`,
        },
      },
    },
    {
      url: `${baseUrl}/de/angebot-webseiten/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de/angebot-webseiten/`,
          en: `${baseUrl}/en/angebot-webseiten/`,
        },
      },
    },
    {
      url: `${baseUrl}/en/angebot-webseiten/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de/angebot-webseiten/`,
          en: `${baseUrl}/en/angebot-webseiten/`,
        },
      },
    },
  ];
}
