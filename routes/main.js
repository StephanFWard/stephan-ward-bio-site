const express = require('express');
const path = require('path');
const router = express.Router();
const db = require('../lib/db');
const resumeData = require('../lib/resume-data');
const githubData = require('../lib/github-data');
const { LIVE_APPS } = require('../lib/live-apps');

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
      'Full résumé of Stephan Ward: Senior Software Engineer, AWS and CompTIA certified, WGU M.Sc. IT Management.',
    canonical: '/resume',
  },
  portfolio: {
    title: 'Portfolio — Projects by Stephan Ward',
    description:
      'Selected projects: Whiteville-Coin, National AI for Human, Instant Legal AI, Propurty SaaS, hospital management systems and more.',
    canonical: '/portfolio',
  },
  classes: {
    title: 'IT Classes — Coursework | Stephan Ward',
    description:
      'Completed IT coursework: software engineering, web development, data management, networking, security, UX/UI and IT management.',
    canonical: '/classes',
  },
  liveApp: {
    title: 'Live Production Apps — Whiteville-Coin, BestBullion, InstantLegal AI & InstantAI | Stephan Ward',
    description:
      'Four live production apps by Stephan Ward: Whiteville-Coin (community crypto with live oracle), BestBullion (gold & silver storefront), InstantLegal AI (legal documents) and InstantAI Consultancy (AI business reports) — all deployed on Render.',
    canonical: '/live-app',
  },
  repositories: {
    title: 'GitHub Repositories & Languages — Code Portfolio | Stephan Ward',
    description:
      'StephanFWard repositories grouped by language: pie chart of code languages, repo cards with direct links, and a plain-English breakdown of software expertise.',
    canonical: '/repositories',
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

router.get('/resume', (req, res) => {
  let docBytes = 0;
  try {
    docBytes = require('fs').statSync(
      path.join(__dirname, '..', 'public', 'files', 'stephanwardresume.docx')
    ).size;
  } catch (_) {
    docBytes = 0;
  }
  res.render('resume', {
    seo: SEO.resume,
    experience: resumeData.experience,
    skills: resumeData.skills,
    education: resumeData.education,
    certifications: resumeData.certifications,
    docKb: docBytes ? Math.max(1, Math.round(docBytes / 1024)) : null,
  });
});

router.get('/portfolio', (req, res) =>
  res.render('portfolio', { seo: SEO.portfolio, projects: resumeData.projects })
);

router.get('/classes', (req, res) =>
  res.render('classes', { seo: SEO.classes, courses: require('../lib/courses-data').courses })
);

router.get('/live-app', (req, res) =>
  res.render('live-app', { seo: SEO.liveApp, apps: LIVE_APPS })
);

router.get('/repositories', async (req, res, next) => {
  try {
    const repos = await githubData.getRepos();
    const stats = githubData.summarize(repos);
    res.render('repositories', { seo: SEO.repositories, stats, githubColor: githubData.colorFor });
  } catch (err) {
    next(err);
  }
});

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

router.get('/resume-document', (req, res) => {
  const file = path.join(__dirname, '..', 'public', 'files', 'stephanwardresume.docx');
  res.download(file, 'stephanwardresume.docx', (err) => {
    if (err && !res.headersSent) {
      res.status(404).send('Résumé document not found.');
    }
  });
});

module.exports = router;
