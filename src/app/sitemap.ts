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
      url: `${baseUrl}/de/impressum`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          de: `${baseUrl}/de/impressum`,
          en: `${baseUrl}/en/impressum`,
        },
      },
    },
    {
      url: `${baseUrl}/en/impressum`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          de: `${baseUrl}/de/impressum`,
          en: `${baseUrl}/en/impressum`,
        },
      },
    },
    {
      url: `${baseUrl}/de/datenschutz`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          de: `${baseUrl}/de/datenschutz`,
          en: `${baseUrl}/en/datenschutz`,
        },
      },
    },
    {
      url: `${baseUrl}/en/datenschutz`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          de: `${baseUrl}/de/datenschutz`,
          en: `${baseUrl}/en/datenschutz`,
        },
      },
    },
    {
      url: `${baseUrl}/de/briefing-formular`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/briefing-formular`,
          en: `${baseUrl}/en/briefing-formular`,
        },
      },
    },
    {
      url: `${baseUrl}/en/briefing-formular`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/briefing-formular`,
          en: `${baseUrl}/en/briefing-formular`,
        },
      },
    },
  ];
}
