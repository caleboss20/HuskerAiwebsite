<div align="center">

# Husker AI

**AI that helps cocoa farmers turn discarded pod husks into extra income.**

[Website](https://huskerai.vercel.app) · [LinkedIn](https://www.linkedin.com/company/husker-ai) · [Instagram](https://www.instagram.com/huskertechnologies/) · [Contact](mailto:huskertechnologies@gmail.com)

</div>

---

## The problem

About **70% of every cocoa pod is husk**. After harvest, smallholder farmers
leave these husks to rot or burn them on the farm. Ghana alone has **800,000+
cocoa farm families**, and nearly all of them treat husk as waste.

At the same time, companies across Ghana already turn cocoa pod husk into
valuable products: animal feed, cocoa potash, soap and cosmetics, biochar and
organic fertiliser. They need a steady supply of husk. Farmers have it, but
there is no simple way to know what a pile is worth or who will buy it.

## Our solution

Husker AI is a mobile app that connects the two sides.

1. **Scan.** The farmer takes one photo of a husk pile.
2. **Grade.** On-device AI detects each husk, grades the pile **A, B or C** and
   estimates its weight and value.
3. **Sell.** A marketplace matches the grade to companies that buy it and
   shows what they pay.

The app is built for real farm conditions: it **works offline** and supports
**local languages**.

| Grade | Condition | Typical buyers |
| --- | --- | --- |
| A | Fresh, clean and dry | Animal feed, cosmetics and skincare |
| B | Part fresh, part rotting | Cocoa potash, soap making |
| C | Older or partly decomposed | Biochar, organic fertiliser |

## Impact

| Metric | Figure | Basis |
| --- | --- | --- |
| Cocoa farm families in Ghana | 800,000+ | USDA FAS, *Ghana Cocoa Sector Overview* (2025) |
| Share of each pod that is husk | ~70% | *Heliyon* (2024), cocoa by-products review |
| CO₂ to be avoided (first target) | ~10,000 t | Husker AI estimate* |
| Extra income per farmer, per season | ~GH₵ 1,500 | Husker AI estimate* |

\* Estimates based on app prices and published emission factors. They will be
replaced with measured pilot data.

## Recognition

- **Winner, 2026 Pan African AI Summit Hack-AI-Thon**: US$1,000 prize and
  startup mentorship.
- Covered by YEN News, Modern Ghana, the Business & Financial Times, KNUST and
  the KNUST College of Science.

## Team

Built at the Kwame Nkrumah University of Science and Technology (KNUST),
Kumasi, Ghana.

| Name | Role |
| --- | --- |
| [Frank Agyare](https://www.linkedin.com/in/frank-agyare-141269334) | Co-founder & AI/ML Lead |
| [Caleb Antwi](https://www.linkedin.com/in/calebantwi1) | Co-founder & Mobile App Engineer |
| [Wilhelmina Adjah](https://www.linkedin.com/in/wilhelmina-adjah-261219330) | Head of Marketing, Research & Partnerships |
| Ayinomba Elijah | Backend Engineer |
| [Joseph Amankwah](https://www.linkedin.com/in/joseph-amankwah-3a646926a) | Software Engineer |

---

## About this repository

This repository contains the **Husker AI marketing website and waitlist**,
live at [huskerai.vercel.app](https://huskerai.vercel.app). The mobile app is
developed separately.

### Tech stack

- **Next.js 16** (App Router) with **React 19** and the React Compiler
- **TypeScript** and **Tailwind CSS v4**
- **Server Components** by default, with client components only for
  interactive parts (scan demo, count-up stats, waitlist form, 404 page)
- **Server Actions** for the waitlist form
- Deployed on **Vercel**

### Highlights

- **SEO first:** all pages are statically prerendered. Site-wide metadata,
  Open Graph and Twitter cards, canonical URLs, `robots.txt`, `sitemap.xml`,
  a web manifest and JSON-LD (`Organization` with founders and `WebSite`)
  are all generated from a single config in `src/lib/site.ts`.
- **Interactive scan demo:** a rotating set of farm photos with
  computer-vision-style detection boxes, drawn in CSS and aligned to each
  photo.
- **Waitlist:** validated server-side, with a spam honeypot. Sign-ups are
  posted to a webhook such as a Google Sheet; see
  [`docs/waitlist-google-sheet.md`](docs/waitlist-google-sheet.md).
- **Built for low-end phones:** responsive layouts, AVIF/WebP images sized
  per screen, honours reduced-motion settings, and works as an installable
  PWA.
- **Branded 404 page** with an interactive "lost cocoa pod".

### Project structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout, site-wide metadata, JSON-LD
│   ├── page.tsx              # Home page
│   ├── privacy/              # Privacy policy
│   ├── not-found.tsx         # Branded 404
│   ├── actions/waitlist.ts   # Waitlist Server Action
│   ├── robots.ts · sitemap.ts · manifest.ts · opengraph-image.tsx
│   └── icon.png · apple-icon.png · favicon.ico
├── components/
│   ├── home/                 # Hero, Impact, How it works, Scan demo, About, Waitlist
│   ├── navbar.tsx · footer.tsx
│   └── count-up.tsx · lost-pod.tsx · phone-mockup.tsx · json-ld.tsx
├── content/                  # Copy and data: stats, grades, scan scenes, team
├── assets/                   # Optimised images (imported via next/image)
└── lib/site.ts               # Site config: name, URL, contact, social, routes
```

### Getting started

Requires Node.js 20.9 or later.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

### Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production | Public URL with no trailing slash. Used for canonical URLs, Open Graph, `robots.txt` and the sitemap. |
| `WAITLIST_WEBHOOK_URL` | Production | Endpoint that receives waitlist sign-ups as JSON. In development, sign-ups are logged to the terminal if this is unset. |

### Editing content

Most content lives in plain TypeScript files, so it can be updated without
touching layout code:

- `src/lib/site.ts`: name, description, contact email, social links, sitemap routes
- `src/content/impact.ts`: stats and sources, and the company marquee
- `src/content/how-it-works.ts`: steps, grades and scan demo scenes
- `src/content/team.ts`: team members, photos and LinkedIn links

### Image credits

Some photos are from Wikimedia Commons:
"Cacao black pod rot" by Scot Nelson (CC0) and "Cocoa pods 001" by
Otuo-Akyampong Boakye (CC BY-SA 4.0).

---

<div align="center">

© 2026 Husker AI · Kumasi, Ghana · [huskertechnologies@gmail.com](mailto:huskertechnologies@gmail.com)

</div>
