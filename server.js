require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const db = require('./lib/db');
db.init();

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.disable('x-powered-by');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1d' }));
app.use(cookieParser());

// Shared view locals
const SITE_URL =
  process.env.RENDER_EXTERNAL_URL || process.env.SITE_URL || `http://localhost:${process.env.PORT || 3000}`;
app.locals.SITE_URL = SITE_URL.replace(/\/$/, '');
app.locals.CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'stephan.ward5@icloud.com';
app.locals.year = new Date().getFullYear();
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  res.locals.siteUrl = app.locals.SITE_URL;
  next();
});

app.use(require('./routes/main'));

// SEO
app.get('/sitemap.xml', (req, res) => {
  const base = app.locals.SITE_URL;
  const pages = [
    { loc: '/', freq: 'monthly' },
    { loc: '/resume', freq: 'monthly' },
    { loc: '/portfolio', freq: 'monthly' },
    { loc: '/live-app', freq: 'weekly' },
    { loc: '/repositories', freq: 'weekly' },
    { loc: '/classes', freq: 'monthly' },
    { loc: '/credentials', freq: 'monthly' },
    { loc: '/contact', freq: 'yearly' },
  ];
  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${base}${p.loc}</loc><changefreq>${p.freq}</changefreq><priority>0.8</priority></url>`).join('\n')}
</urlset>`);
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain').send(`User-agent: *\nAllow: /\nSitemap: ${app.locals.SITE_URL}/sitemap.xml\n`);
});

// 404
app.use((req, res) => {
  res.status(404).render('404', {
    seo: { title: 'Page Not Found · Stephan Ward', description: 'The page you requested could not be found.', canonical: '/404' },
  });
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('[error]', err);
  res.status(500).render('404', {
    seo: { title: 'Something Went Wrong · Stephan Ward', description: 'An unexpected error occurred.', canonical: '/500' },
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Stephan Ward — professional bio site running at http://localhost:${PORT}`);
});
