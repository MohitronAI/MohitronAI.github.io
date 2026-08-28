import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

const publicRoutes = [
  "/",
  "/projects/dagreement",
  "/projects/neuralixai",
  "/projects/green-model-advisor",
  "/writing/mind-reading-robots",
  "/writing/falling-into-the-cloud",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({ url: absoluteUrl(path) }));
}
