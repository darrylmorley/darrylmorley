import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.domain}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
