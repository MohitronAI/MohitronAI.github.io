import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

const publicRoutes = [
  "/",
  "/projects/dagreement",
  "/projects/neuralixai",
  "/projects/green-model-advisor",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({ url: absoluteUrl(path) }));
}
