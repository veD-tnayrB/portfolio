import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/projects`, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${SITE_URL}/experience`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
