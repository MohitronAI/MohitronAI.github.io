import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { articles } from "@/data/writing";
import { absoluteUrl, siteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Sitemap entries must be absolute; omit them until the deployment origin is configured.
  if (!siteUrl) return [];

  const publicRoutes = [
    "/",
    ...caseStudies.map(({ slug }) => `/projects/${slug}/`),
    ...articles.map(({ slug }) => `/writing/${slug}/`),
  ];

  return publicRoutes.map((path) => ({ url: absoluteUrl(path) }));
}
