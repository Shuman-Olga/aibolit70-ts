import type { MetadataRoute } from "next";
import { routes } from "@/routing/route-registry";
import { SITE_URL } from "@/config/site";

/** Only publish pages with migrated, reviewable content in the XML sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  return routes
    .filter((route) => route.indexable === true)
    .map((route) => ({
      url: new URL(route.path, SITE_URL).toString(),
      changeFrequency: "monthly",
      priority: route.path === "/" ? 1 : 0.7,
    }));
}
