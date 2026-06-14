import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fivekidsonemom.com'
  const now = new Date()

  const blogPosts = [
    'the-day-i-found-a-tracker-in-my-car',
    'how-i-flipped-50-quid-into-300-in-one-weekend',
    'saying-no-when-youre-wired-to-say-yes',
    'premium-school-uniform-for-less-than-supermarket-price',
    'what-working-in-sen-taught-me-about-myself',
    'christmas-for-five-kids-under-200',
  ]

  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/reselling`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
