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
  // Public contact details. Footer shows only the ones that are set.
  contact: {
    email: "" as string,
    phone: "" as string,
    location: "Kumasi, Ghana",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/husker-ai",
    x: "" as string,
  },
  // Brand colours (match globals.css).
  themeColor: "#f3ebe0",
  backgroundColor: "#f3ebe0",
} as const;

type SitemapEntry = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

// Add every public page here so it lands in sitemap.xml.
export const routes: SitemapEntry[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];
