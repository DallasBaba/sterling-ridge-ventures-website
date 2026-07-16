import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://sterlingridgeventures.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://sterlingridgeventures.com/become-a-dispatch-partner", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
