/**
 *
 * @author Awa Precious
 */

import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteChrome } from "@/components/layout/SiteChrome";
import "./overrides.css";
import { Toaster } from "@/components/ui/Toaster";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { TopBanner } from "@/components/layout/TopBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxwelltraining.net"),
  title: {
    default:
      "Maxwell Training — Cyber Security & Software Engineering Training in Douala",
    template: "%s | Maxwell Training",
  },
  description:
    "Work-based, one-on-one training in cyber security, software engineering and digital marketing in Douala, Cameroon. EC-Council certifications, paid internships, 80% practical.",
  applicationName: "Maxwell Training",
  authors: [{ name: "Maxwell Training" }],
  keywords: [
    "cyber security training Cameroon",
    "ethical hacking course Douala",
    "EC-Council certification Cameroon",
    "software engineering training Douala",
    "digital marketing course Cameroon",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://maxwelltraining.net",
    siteName: "Maxwell Training",
    title: "Maxwell Training — Learn Tech Skills Faster And More Effectively",
    description:
      "Work-based, one-on-one training in cyber security, software engineering and digital marketing. Every student is offered a paid internship.",
    images: [
      {
        url: "/assets/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Maxwell Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxwell Training — Learn Tech Skills Faster And More Effectively",
    description:
      "Work-based, one-on-one training in cyber security, software engineering and digital marketing in Douala, Cameroon.",
    images: ["/assets/images/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { shortcut: "/assets/images/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/assets/libs/line-awesome/css/line-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/libs/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/libs/swiper/swiper-bundle.min.css"
        />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <ScrollProgress />
        <div id="wrapper">
          <TopBanner />
          {children}
          <SiteFooter />
          <SiteChrome />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
