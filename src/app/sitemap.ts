import type { MetadataRoute } from "next";

const BASE = "https://maxwelltraining.net";

const PAGES: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1.0 },
  { path: "/contact", priority: 0.9 },
  { path: "/about-company", priority: 0.8 },
  { path: "/certified-ethical-hacker", priority: 0.9 },
  { path: "/certified-penetration-testing-professional", priority: 0.8 },
  { path: "/certified-network-defender", priority: 0.8 },
  { path: "/computer-hacking-forensic-investigator", priority: 0.8 },
  { path: "/certified-incident-handler", priority: 0.8 },
  { path: "/ethical-hacking-essentials", priority: 0.8 },
  { path: "/digital-forensics-essentials", priority: 0.8 },
  { path: "/certified-secure-computer-user", priority: 0.8 },
  { path: "/web-app-dev", priority: 0.9 },
  { path: "/mobile-application-development", priority: 0.9 },
  { path: "/webdesign", priority: 0.8 },
  { path: "/digital-marketing", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGES.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority,
  }));
}
