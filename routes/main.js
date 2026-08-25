const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const resumeData = require('../lib/resume-data');

const LIVE_APP = {
  name: 'BestBullion',
  url: 'https://bullionstore.onrender.com/',
  tagline: 'Buy Gold & Silver Bullion Online at Low Premiums',
  description:
    'A full-stack precious metals storefront where every price floats live with the market. Spot prices refresh every two minutes and feed directly into product pricing, so what a customer sees is always the real, current rate. Shoppers browse silver, gold and platinum coins and bars, see transparent per-ounce premiums with quantity breaks up to 100+ units, and pay securely through Stripe Checkout — or save 3% paying by check or wire.',
  features: [
    { icon: '📈', title: 'Live spot pricing', text: 'Gold, silver and platinum spot prices update every 2 minutes and drive all product prices in real time.' },
    { icon: '🪙', title: 'Full bullion catalog', text: 'Silver Eagles, Maple Leafs, Philharmonics, junk silver, 10–100 oz bars, Gold Eagles, PAMP Suisse and Platinum Eagles.' },
    { icon: '📉', title: 'Transparent premiums', text: 'Per-ounce premiums published on every product, with quantity discounts up to 100+ units.' },
    { icon: '💳', title: 'Secure checkout', text: 'Card payments via Stripe Checkout, or save 3% paying by check or wire transfer.' },
    { icon: '📦', title: 'Free insured shipping', text: 'Discreet, fully insured delivery on orders over $199.' },
    { icon: '💰', title: 'Sell to us', text: 'A dedicated flow for selling your bullion back at competitive buy prices.' },
    { icon: '⚖️', title: 'Dealer comparisons', text: 'SEO comparison hub benchmarking against SD Bullion, APMEX, JM Bullion, Kitco, Money Metals, Gainesville, Monument and Provident.' },
    { icon: '☁️', title: 'Deployed on Render', text: 'Runs in production on the Render pipeline with automated deploys straight from GitHub.' },
  ],
  links: [
    { label: 'Open BestBullion', url: 'https://bullionstore.onrender.com/' },
    { label: 'Browse the shop', url: 'https://bullionstore.onrender.com/shop' },
    { label: 'View live spot prices', url: 'https://bullionstore.onrender.com/spot-prices' },
    { label: 'Sell to us', url: 'https://bullionstore.onrender.com/sell-to-us' },
  ],
};

const SEO = {
  home: {
    title: 'Stephan Ward — Professional Bio',
    description:
      'North Carolina native and biochemist turned IT professional. Strategic planning, enterprise communications, software engineering and technical leadership.',
    canonical: '/',
  },
  about: {
    title: 'About Me — Stephan Ward',
    description:
      'Biochemist turned IT professional. Meet Stephan Ward: senior engineer, project leader and founder.',
    canonical: '/about',
  },
  resume: {
    title: 'Résumé — Stephan Ward',
    description:
      'Full résumé of Stephan Ward: CEO & software engineer, AWS and CompTIA certified, WGU M.Sc. IT Management.',
    canonical: '/resume',
  },
  portfolio: {
    title: 'Portfolio — Projects by Stephan Ward',
    description:
      'Selected projects: National AI for Human, Instant Legal AI, Propurty SaaS, hospital management systems and more.',
    canonical: '/portfolio',
  },
  classes: {
    title: 'IT Classes — Coursework | Stephan Ward',
    description:
      'Completed IT coursework: software engineering, web development, data management, networking, security, UX/UI and IT management.',
    canonical: '/classes',
  },
  liveApp: {
    title: 'Live Production App — BestBullion | Stephan Ward',
    description:
      'BestBullion by Stephan Ward: a live production e-commerce store for gold & silver bullion with real-time spot pricing, transparent premiums and Stripe Checkout.',
    canonical: '/live-app',
  },
  credentials: {
    title: 'Download Links — Degrees & Certifications | Stephan Ward',
    description:
      'Degrees and certifications: CAPM®, CompTIA Project+, A+, ITIL 4, AWS Advanced Networking, CISA, WGU degrees.',
    canonical: '/credentials',
  },
  contact: {
    title: 'Contact — Stephan Ward',
    description: 'Get in touch with Stephan Ward. Email stephan.ward5@icloud.com or use the contact form.',
    canonical: '/contact',
  },
};

router.get('/', (req, res) => res.render('home', { seo: SEO.home }));

router.get('/about', (req, res) => res.render('about', { seo: SEO.about }));

router.get('/resume', (req, res) =>
  res.render('resume', {
    seo: SEO.resume,
    experience: resumeData.experience,
    skills: resumeData.skills,
    education: resumeData.education,
    certifications: resumeData.certifications,
  })
);

router.get('/portfolio', (req, res) =>
  res.render('portfolio', { seo: SEO.portfolio, projects: resumeData.projects })
);

router.get('/classes', (req, res) =>
  res.render('classes', { seo: SEO.classes, courses: require('../lib/courses-data').courses })
);

router.get('/live-app', (req, res) =>
  res.render('live-app', { seo: SEO.liveApp, app: LIVE_APP })
);

router.get('/credentials', (req, res) =>
  res.render('credentials', { seo: SEO.credentials, certifications: resumeData.certifications })
);

router.get('/contact', (req, res) => {
  res.render('contact', { seo: SEO.contact, sent: false });
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).render('contact', {
      seo: SEO.contact,
      sent: false,
      error: 'Please fill in all fields with a valid email.',
      form: { name, email, message },
    });
  }
  db.saveContact({ name, email, message });
  res.render('contact', { seo: SEO.contact, sent: true });
});

module.exports = router;
