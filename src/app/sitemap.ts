import type { MetadataRoute } from "next";

import { getAllProjectSlugs } from "@/lib/projects";

const BASE_URL = "https://samuelkadams.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllProjectSlugs();

  return [
    { url: BASE_URL, priority: 1 },
    { url: `${BASE_URL}/projects`, priority: 0.8 },
    { url: `${BASE_URL}/resume`, priority: 0.9 },
    { url: `${BASE_URL}/timeline`, priority: 0.6 },
    { url: `${BASE_URL}/contact`, priority: 0.5 },
    ...slugs.map((slug) => ({
      url: `${BASE_URL}/projects/${slug}`,
      priority: 0.7,
    })),
  ];
}
