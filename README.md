# Stephan Ward — Professional Bio Site

Welcome to Stephan Ward's Professional Bio Site

## Pages (mirroring the original site)

| Route | Original page |
|---|---|
| `/` | Home / About Me (bio, expertise areas) |
| `/resume` | Résumé — 9 roles incl. Whiteville-Coin + Word docx view/download |
| `/portfolio` | Portfolio — incl. Whiteville-Coin project card |
| `/classes` | IT Classes (completed coursework) |
| `/live-app` | Live Production Apps — Whiteville-Coin (whiteville-coin.onrender.com), BestBullion, InstantLegal AI, InstantAI |
| `/repositories` | Repositories & Code (GitHub language chart) |
| `/credentials` | Download Links (degrees & certifications) |
| `/contact` | Contact (working form, messages stored to `data/db.json`) |

Plus `/sitemap.xml`, `/robots.txt`, a styled 404, Open Graph/Twitter meta on every page.

## Design improvements over the original

- Modern sticky navigation with active-page highlighting and a mobile hamburger menu
- Professional navy/blue palette, card layouts, hover states and smooth transitions
- Responsive grid — clean on phone, tablet and desktop
- Semantic HTML5, canonical URLs and meta descriptions everywhere
- Contact form with validation and a real success state

## Run locally

```bash
npm install
npm start          # http://localhost:3000
npm test           # 8 node:test assertions (resume + live apps + docx)
```

Environment (`.env`): `PORT`, `SITE_URL` (canonical URLs; Render's `RENDER_EXTERNAL_URL` is picked up automatically),
`CONTACT_EMAIL` (defaults to stephan.ward5@icloud.com).

## Deploy (Render)

Build command: `npm install` · Start command: `npm start`.

