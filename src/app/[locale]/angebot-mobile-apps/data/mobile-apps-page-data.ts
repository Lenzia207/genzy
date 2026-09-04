import { cache } from "react";
import { AngebotMobileAppsData } from "./mobile-apps-types";

/*
 * Fetches the translation data for the home page.
 * Using React cache() ensures the data is only fetched once per request
 * and reused across all components that need it.
 */
export const fetchMobileAppsPageData = cache(async function (
  locale: string
): Promise<AngebotMobileAppsData> {
  const [mobileAppsData] = await Promise.all([
    import(`@messages/${locale}/mobile-apps.json`),
    // import(`@/messages/${locale}/common.json`),
  ]);

  return {
    ...mobileAppsData.default.angebot_mobile_apps_data,
  };
});

export default fetchMobileAppsPageData;
