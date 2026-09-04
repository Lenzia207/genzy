import { cache } from "react";
import { AngebotAgenturenData } from "./agenturen-types";

/*
 * Fetches the translation data for the home page.
 * Using React cache() ensures the data is only fetched once per request
 * and reused across all components that need it.
 */
export const fetchAgenturenPageData = cache(async function (
  locale: string
): Promise<AngebotAgenturenData> {
  const [agenturenData] = await Promise.all([
    import(`@messages/${locale}/agenturen-work.json`),
    // import(`@/messages/${locale}/common.json`),
  ]);

  return {
    ...agenturenData.default.angebot_agenturen_data,
  };
});

export default fetchAgenturenPageData;
