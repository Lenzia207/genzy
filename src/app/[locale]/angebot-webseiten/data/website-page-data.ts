import { cache } from "react";
import { AngebotWebsiteData } from "./website-dev-types";

/*
 * Fetches the translation data for the home page.
 * Using React cache() ensures the data is only fetched once per request
 * and reused across all components that need it.
 */
export const fetchWebsitePageData = cache(async function (
  locale: string
): Promise<AngebotWebsiteData> {
  const [websiteData] = await Promise.all([
    import(`@messages/${locale}/website-dev.json`),
    // import(`@/messages/${locale}/common.json`),
  ]);

  return {
    ...websiteData.default.angebot_website_data,
  };
});

export default fetchWebsitePageData;
