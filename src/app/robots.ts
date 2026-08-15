import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [
          '/api/',
          '/keystatic/',
          '/_next/',
          '/animations/',
        ],
      },
    ],
    sitemap: 'https://www.vision-it.at/sitemap.xml',
  };
}
