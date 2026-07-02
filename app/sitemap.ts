import type { MetadataRoute } from "next";
import { articles } from "@/lib/journal";

const BASE_URL = "https://maisonvereen.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                         lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/the-house`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/our-story`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/the-founder`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/edition-i`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/the-first-250`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/registry`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/philosophy`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/future`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/housebook`,          lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/fragrance-library`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/faq`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/access`,             lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/waitlist`,           lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/contact`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/legacy`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/social-proof`,       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/final-invitation`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // /discover is intentionally excluded from sitemap (standalone shareable page, noindex)
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url:             `${BASE_URL}/housebook/${article.slug}`,
    lastModified:    new Date(),
    changeFrequency: "monthly" as const,
    priority:        0.6,
  }));

  return [...staticPages, ...articlePages];
}
