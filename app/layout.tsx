import type { Metadata, Viewport } from "next";
import { site, siteUrl } from "./site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  title: { default: site.title, template: "%s | Vijay Saiwal" },
  description: site.description,
  applicationName: "Vijay Saiwal’s Portfolio",
  authors: [{ name: site.name, url: site.linkedIn }],
  creator: site.name,
  publisher: site.name,
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Vijay Saiwal’s Portfolio",
    title: site.title,
    description: site.description,
    ...(siteUrl ? { url: "/" } : {}),
    images: [{ url: site.cover, width: 1200, height: 630, alt: site.coverAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [{ url: site.cover, alt: site.coverAlt }],
  },
  robots: {
    index: Boolean(siteUrl),
    follow: Boolean(siteUrl),
    googleBot: { index: Boolean(siteUrl), follow: Boolean(siteUrl), "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {siteUrl && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${siteUrl}/#profile`,
          url: siteUrl,
          name: site.title,
          description: site.description,
          primaryImageOfPage: `${siteUrl}${site.cover}`,
          mainEntity: {
            "@type": "Person",
            "@id": `${siteUrl}/#vijay-saiwal`,
            name: site.name,
            url: siteUrl,
            jobTitle: "Product Designer",
            image: `${siteUrl}/assets/portfolio/profile.png`,
            sameAs: [site.linkedIn],
          },
        }).replace(/</g, "\\u003c") }} />}
        {children}
      </body>
    </html>
  );
}
