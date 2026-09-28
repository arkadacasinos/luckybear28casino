import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://luckybear28casino.vercel.app/',
      lastModified: new Date('2026-09-29T00:00:00.000Z'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
