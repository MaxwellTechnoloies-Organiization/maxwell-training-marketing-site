import type { NavItem } from "@/types/navigation";

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-company" },
  {
    label: "Cyber Security",
    href: "#",
    children: [
      { label: "Certified Ethical Hacker", href: "/certified-ethical-hacker" },
      {
        label: "Certified Penetration Testing Professional",
        href: "/certified-penetration-testing-professional",
      },
      {
        label: "Certified Network Defender",
        href: "/certified-network-defender",
      },
      {
        label: "Computer Hacking Forensic Investigator",
        href: "/computer-hacking-forensic-investigator",
      },
      {
        label: "EC-Council Certified Incident Handler",
        href: "/certified-incident-handler",
      },
      {
        label: "Ethical Hacking Essentials",
        href: "/ethical-hacking-essentials",
      },
      {
        label: "Digital Forensic Essentials",
        href: "/digital-forensics-essentials",
      },
      {
        label: "Certified Secure Computer User",
        href: "/certified-secure-computer-user",
      },
    ],
  },
  {
    label: "Software Engineering",
    href: "#",
    children: [
      { label: "Web Application Development", href: "/web-app-dev" },
      {
        label: "Mobile Application Development",
        href: "/mobile-application-development",
      },
      { label: "Web Design", href: "/webdesign" },
    ],
  },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Contact", href: "/contact" },
];
