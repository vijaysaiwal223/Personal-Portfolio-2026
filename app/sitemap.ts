import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { selectedProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl ? [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    ...selectedProjects.map(({ slug }) => ({
      url: `${siteUrl}/projects/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ] : [];
}
