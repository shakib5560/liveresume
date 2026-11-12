import type { MetadataRoute } from "next";
import { PROJECTS_DATA } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null) ||
    process.env.URL ||
    "https://shamiulshakib.dev";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects/autotaskx`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/gitrabbit`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/off-white`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/ainos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = Object.keys(PROJECTS_DATA)
    .filter((slug) => slug !== "autotaskx" && slug !== "gitrabbit" && slug !== "off-white" && slug !== "ainos")
    .map((slug) => ({
      url: `${baseUrl}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [...staticRoutes, ...projectRoutes];
}
