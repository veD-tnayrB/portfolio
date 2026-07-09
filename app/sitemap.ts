import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => [
    { url: `${SITE_URL}/${locale}`, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/${locale}/projects`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/${locale}/experience`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]);
}
