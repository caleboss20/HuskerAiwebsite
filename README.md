# Husker AI

Website for Husker AI, a cocoa pod husk valorization project.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and the React Compiler. Pages are server components by default, so content is rendered as HTML for search engines.

## Getting started

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev
```

Open http://localhost:3000.

## SEO setup

All SEO values come from `src/lib/site.ts`:

| File | Output |
| --- | --- |
| `src/app/layout.tsx` | Site-wide metadata (title template, Open Graph, Twitter, robots), viewport and JSON-LD |
| `src/app/robots.ts` | `/robots.txt` |
| `src/app/sitemap.ts` | `/sitemap.xml` (from the `routes` list in `site.ts`) |
| `src/app/manifest.ts` | `/manifest.webmanifest` |
| `src/app/opengraph-image.tsx` | Default social share image |

When you add a page, export `metadata` (or `generateMetadata`) from it and add its path to `routes` in `src/lib/site.ts`.
