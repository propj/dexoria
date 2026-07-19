export interface SitemapEntry {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export default function sitemap(): SitemapEntry[] {
  return [
    {
      url: "https://www.dexoria.space",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    }
  ];
}
