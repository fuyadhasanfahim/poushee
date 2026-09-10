import type { MetadataRoute } from "next";
import { MENU, allDishPaths } from "@/content/menu";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/menu`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...MENU.map((c) => ({
      url: `${base}/menu/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...allDishPaths().map(({ category, item }) => ({
      url: `${base}/menu/${category}/${item}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
