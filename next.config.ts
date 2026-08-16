import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

const withNextIntl = createNextIntlPlugin("./src/app/i18n/request.ts");

const nextConfig: NextConfig = {
  trailingSlash: true,
  // output: "export", // Keystatic needs server routes
  webpack(config) {
    config.resolve.alias["@messages"] = path.resolve(__dirname, "messages");
    return config;
  },
};

export default withNextIntl(nextConfig);
