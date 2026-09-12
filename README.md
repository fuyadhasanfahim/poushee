# Poushee — Hotel & Restaurant

A bilingual (English / Bengali), premium marketing website for **Poushee Hotel & Restaurant**, on the world's longest sea beach at Kolatoli, Cox's Bazar, Bangladesh. Built with Next.js 16 (App Router) as a fully static site and deployed on Vercel.

**Live:** [poushee.vercel.app](https://poushee.vercel.app)

## Features

- **Bilingual** — every page, string, and menu item renders in English and Bengali (বাংলা), with a persistent language toggle synced to `localStorage` and hydrated before paint (no flash of the wrong language).
- **Full digital menu** — 15 printed-menu sections (categories) and their individual dishes, each with localized names, descriptions, prices, and imagery.
- **Smooth, animated UX** — [Lenis](https://github.com/darkroomengineering/lenis)-powered smooth scrolling, scroll-spy navigation, viewport-triggered reveal animations, and a scroll-progress rail.
- **Static & fast** — pages and dish/category data are statically generated at build time; no database or backend required.
- **SEO-ready** — dynamic `sitemap.xml` and `robots.txt`, per-page metadata.
- **Quick actions** — floating call-now / WhatsApp buttons for one-tap reservations and directions.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, static export) |
| UI | React 19, Tailwind CSS 4 |
| Motion | Lenis (smooth scroll), CSS scroll-timelines + JS fallback |
| Language | TypeScript |
| Linting | ESLint 9 (`eslint-config-next`) |
| Hosting | [Vercel](https://vercel.com) |

## Project Structure

```
poushee/
├─ src/
│  ├─ app/                     # Next.js App Router routes
│  │  ├─ page.tsx              # Home
│  │  ├─ menu/                 # Menu index → category → dish
│  │  ├─ sitemap.ts            # Dynamic sitemap.xml
│  │  └─ robots.ts             # Dynamic robots.txt
│  ├─ components/
│  │  ├─ views/                # Page-level view compositions
│  │  ├─ menu/                 # Category / dish / featured-dish cards
│  │  ├─ motion/                # Lenis smooth-scroll + reveal animation primitives
│  │  ├─ decor/                 # Decorative SVG motifs & section framing
│  │  └─ ...                    # Navbar, footer, logo, floating actions, etc.
│  ├─ content/
│  │  ├─ menu.ts               # All menu categories & dishes (bilingual content)
│  │  └─ types.ts              # Shared content types
│  └─ lib/
│     ├─ site.ts               # Central business info (address, phones, socials, hours)
│     └─ i18n/                 # Language provider + EN/BN dictionary
├─ public/                     # Static assets (brand, dish & category photography)
└─ package.json
```

## Getting Started

**Requirements:** Node.js 18+.

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

### Other scripts

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Deployment

The site is deployed on [Vercel](https://vercel.com) and auto-builds from this repository.

**Production:** [poushee.vercel.app](https://poushee.vercel.app)

## Author

**Fuyad Hasan Fahim**

- Website: [fuyadhasanfahim.com](https://fuyadhasanfahim.com)
- LinkedIn: [linkedin.com/in/fuyadhasanfahim0](https://www.linkedin.com/in/fuyadhasanfahim0/)
- X (Twitter): [x.com/codewithfuyad](https://x.com/codewithfuyad)
- Instagram: [instagram.com/codewithfuyad](https://www.instagram.com/codewithfuyad/)
- Facebook: [facebook.com/fuyad.code](https://www.facebook.com/fuyad.code)
