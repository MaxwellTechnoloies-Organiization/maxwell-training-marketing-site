import type { MetadataRoute } from 'next';

const BASE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://maxwelltraining.cm').replace(/\/$/, '');

const LAST_CONTENT_UPDATE = new Date('2026-10-05');

type SitemapEntry = MetadataRoute.Sitemap[number];

interface PageEntry {
  path: string;
  priority: number;
  changeFrequency?: SitemapEntry['changeFrequency'];
  lastModified?: Date;
}

const PAGES: PageEntry[] = [
  // Core
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.9 },
  { path: '/about-company', priority: 0.9 },

  // Cybersecurity
  { path: '/certified-ethical-hacker', priority: 0.8 },
  { path: '/certified-penetration-testing-professional', priority: 0.8 },
  { path: '/certified-network-defender', priority: 0.8 },
  { path: '/computer-hacking-forensic-investigator', priority: 0.8 },
  { path: '/certified-incident-handler', priority: 0.8 },
  { path: '/ethical-hacking-essentials', priority: 0.8 },
  { path: '/digital-forensics-essentials', priority: 0.8 },
  { path: '/certified-secure-computer-user', priority: 0.8 },

  // Software engineering
  { path: '/frontend-web-development', priority: 0.9 },
  { path: '/backend-web-development', priority: 0.9 },
  { path: '/mobile-frontend-development', priority: 0.9 },
  { path: '/mobile-backend-development', priority: 0.9 },
  { path: '/devops-and-deployment', priority: 0.9 },
  { path: '/webdesign', priority: 0.8 },

  // Digital marketing
  { path: '/fundamentals-and-strategy', priority: 0.9 },
  { path: '/target-audience-and-positioning', priority: 0.9 },
  { path: '/content-strategy', priority: 0.9 },
  { path: '/channels-and-visibility', priority: 0.9 },
  { path: '/seo-and-acquisition', priority: 0.9 },
  { path: '/ai-and-productivity', priority: 0.9 },
  { path: '/performance-and-analytics', priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, priority, changeFrequency = 'monthly', lastModified }) => ({
    url: `${BASE}${path}`,
    lastModified: lastModified ?? LAST_CONTENT_UPDATE,
    changeFrequency,
    priority,
  }));
}
