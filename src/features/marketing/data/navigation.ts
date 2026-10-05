import type { NavItem } from '@/types/navigation';

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-company' },
  {
    label: 'Cyber Security',
    href: '#',
    children: [
      { label: 'Certified Ethical Hacker', href: '/certified-ethical-hacker' },
      {
        label: 'Certified Penetration Testing Professional',
        href: '/certified-penetration-testing-professional',
      },
      {
        label: 'Certified Network Defender',
        href: '/certified-network-defender',
      },
      {
        label: 'Computer Hacking Forensic Investigator',
        href: '/computer-hacking-forensic-investigator',
      },
      {
        label: 'EC-Council Certified Incident Handler',
        href: '/certified-incident-handler',
      },
      {
        label: 'Ethical Hacking Essentials',
        href: '/ethical-hacking-essentials',
      },
      {
        label: 'Digital Forensic Essentials',
        href: '/digital-forensics-essentials',
      },
      {
        label: 'Certified Secure Computer User',
        href: '/certified-secure-computer-user',
      },
    ],
  },
  {
    label: 'Software Engineering',
    href: '#',
    children: [
      { label: '  Frontend Web Development', href: '/frontend-web-development' },
      { label: '  Backend Web Development', href: '/backend-web-development' },
      {
        label: 'Mobile frontend Development',
        href: '/mobile-frontend-development',
      },
      { label: 'Mobile Backend Development', href: '/mobile-backend-development' },
      { label: 'Web Design', href: '/webdesign' },
      { label: 'DevOps & Deployment', href: '/devops-and-deployment' },
    ],
  },
  {
    label: 'Digital Marketing',
    href: '#',
    children: [
      { label: 'Fundamentals & Strategy', href: '/fundamentals-and-strategy' },
      { label: 'Target Audience & positioning', href: '/target-audience-and-positioning' },
      { label: 'Content Strategy', href: '/content-strategy' },
      { label: 'Channels & Visibility', href: '/channels-and-visibility' },
      { label: 'SEO & acquisition', href: '/seo-and-acquisition' },
      { label: 'AI & Productivity', href: '/ai-and-Productivity' },
      { label: 'Performance & Analytics', href: '/performance-and-analytics' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];
