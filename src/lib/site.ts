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
    "Husker AI helps cocoa farmers turn discarded cocoa pod husks into extra income. Scan husks with a smartphone to estimate quantity, quality and value, then connect with buyers. Works offline, in local languages.",
  tagline: "AI for cocoa pod husk valorization",
  locale: "en_GH",
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
  // Brand colours (match globals.css).
  themeColor: "#050d09",
  backgroundColor: "#050d09",
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
