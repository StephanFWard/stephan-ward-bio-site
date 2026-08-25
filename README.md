# Stephan Ward — Professional Bio Site

A modern rebuild of [stephanfward.wordpress.com](https://stephanfward.wordpress.com/): same pages and content,
upgraded design and navigation. Built with Node.js + Express + EJS, fully server-rendered for speed and SEO.

## Pages (mirroring the original site)

| Route | Original page |
|---|---|
| `/` | Home / About Me (bio, expertise areas) |
| `/resume` | Résumé |
| `/portfolio` | Portfolio |
| `/classes` | IT Classes (completed coursework) |
| `/live-app` | Live Production App — BestBullion (bullionstore.onrender.com) |
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
```

Environment (`.env`): `PORT`, `SITE_URL` (canonical URLs; Render's `RENDER_EXTERNAL_URL` is picked up automatically),
`CONTACT_EMAIL` (defaults to stephan.ward5@icloud.com).

## Deploy (Render)

Build command: `npm install` · Start command: `npm start`.

