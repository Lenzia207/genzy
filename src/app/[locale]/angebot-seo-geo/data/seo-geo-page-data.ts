import { cache } from "react";
import { AngebotSeoGeoData } from "./seo-geo-types";

/*
 * Fetches the translation data for the home page.
 * Using React cache() ensures the data is only fetched once per request
 * and reused across all components that need it.
 */
export const fetchSeoGeoPageData = cache(async function (
  locale: string
): Promise<AngebotSeoGeoData> {
  const [seoGeoData] = await Promise.all([
    import(`@messages/${locale}/seo-geo.json`),
    // import(`@/messages/${locale}/common.json`),
  ]);

  return {
    ...seoGeoData.default.angebot_seo_geo_data,
  };
});

export default fetchSeoGeoPageData;
