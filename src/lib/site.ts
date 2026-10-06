import type { MetadataRoute } from "next";

function resolveSiteUrl() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000");
  return url.replace(/\/$/, "");
}

// Single source of truth for SEO: layout metadata, robots, sitemap,
// manifest, Open Graph image and JSON-LD all read from here.
export const siteConfig = {
  name: "Husker AI",
  shortName: "Husker AI",
  url: resolveSiteUrl(),
  // TODO: replace with final copy once the messaging is agreed.
  description:
    "Husker AI turns cocoa pod husks, the largest waste stream of cocoa farming, into valuable products and a new source of income for cocoa farmers.",
  tagline: "Cocoa pod husk valorization",
  locale: "en_US",
  keywords: [
    "cocoa pod husk",
    "cocoa pod husk valorization",
    "cocoa husk",
    "cocoa waste",
    "agricultural waste valorization",
    "circular economy",
    "biomass",
    "cocoa farmers",
  ],
  // TODO: placeholder brand colours until the design is set.
  themeColor: "#3b2416",
  backgroundColor: "#fbf7f2",
} as const;

type SitemapEntry = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

// Add every public page here so it lands in sitemap.xml.
export const routes: SitemapEntry[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
];
