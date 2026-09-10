/**
 * Site regression tests — run with `npm test` (node:test, no extra deps).
 * Covers the Sep-2026 resume refresh: Whiteville-Coin job card, four live
 * apps with two Whiteville-Coin entry points, and the resume upload system.
 */
const { describe, test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const fileUrl = (...parts) => path.join(root, ...parts);

describe('resume data', () => {
  const { experience, projects } = require('../lib/resume-data');

  test('leads with Senior Software Engineer @ Whiteville-Coin', () => {
    assert.equal(experience[0].role, 'Senior Software Engineer');
    assert.equal(experience[0].org, 'Whiteville-Coin');
    assert.equal(experience[0].period, 'July 2026 – Present');
    assert.equal(experience[0].location, 'Whiteville, NC · Remote');
    assert.ok(experience[0].bullets.length >= 5);
  });

  test('uses Senior Software Engineer titles and updated dates', () => {
    const byOrg = Object.fromEntries(experience.map((j) => [j.org, j]));
    assert.equal(byOrg['BestBullion'].role, 'Senior Software Engineer');
    assert.equal(byOrg['BestBullion'].period, 'Jan 2026 – July 2026');
    assert.ok(byOrg['BestBullion'].bullets.length >= 5);
    assert.equal(byOrg['National AI for Human'].role, 'Senior Software Engineer');
    assert.equal(byOrg['National AI for Human'].period, 'Jan 2026 – July 2026');
    assert.equal(byOrg['Instant Legal and Business AI Consultancy'].role, 'Senior Software Engineer');
    assert.equal(byOrg['Instant Legal and Business AI Consultancy'].period, 'Jan 2026 – July 2026');
    assert.equal(byOrg['Insight Global — America’s Job Link Alliance'].period, 'Mar 2025 – Dec 2025');
    assert.equal(byOrg['MedSys — Baylor Health'].role, 'Senior Frontend Developer (Contract)');
    assert.equal(byOrg['Take2IT, Booz Allen Hamilton, Veterans Affairs'].role, 'Full-Stack Engineer');
  });

  test('adds a Whiteville-Coin portfolio project', () => {
    assert.ok(projects.some((p) => p.name === 'Whiteville-Coin'));
  });

  test('adds a BestBullion portfolio card (Jan 2026 – Jul 2026, Senior Software Engineer)', () => {
    const card = projects.find((p) => p.name === 'BestBullion');
    assert.ok(card, 'BestBullion card must exist');
    assert.equal(card.period, 'Jan 2026 – July 2026');
    assert.equal(card.role, 'Senior Software Engineer');
    assert.equal(card.url, 'https://bullionstore.onrender.com/');
    assert.match(card.summary, /spot/i);
    assert.match(card.summary, /Stripe/i);
    assert.ok(card.highlights.length >= 3);
  });
});

describe('resume document', () => {
  test('ships a current Word resume in public/files', () => {
    const file = fileUrl('public', 'files', 'stephanwardresume.docx');
    assert.ok(fs.existsSync(file));
    assert.ok(fs.statSync(file).size > 20000);
  });

  test('exposes resume-document download route', () => {
    const routes = fs.readFileSync(fileUrl('routes', 'main.js'), 'utf8');
    assert.match(routes, /resume-document/);
    assert.match(routes, /stephanwardresume\.docx/);
  });
});

describe('live apps', () => {
  const { LIVE_APPS } = require('../lib/live-apps');

  test('lists four apps led by Whiteville-Coin', () => {
    assert.equal(LIVE_APPS.length, 4);
    assert.equal(LIVE_APPS[0].id, 'whiteville-coin');
    assert.equal(LIVE_APPS[0].url, 'https://whiteville-coin.onrender.com/');
  });

  test('gives Whiteville-Coin two live visit options', () => {
    assert.ok(LIVE_APPS[0].links.length >= 2);
    LIVE_APPS[0].links.forEach((l) => {
      assert.match(l.url, /^https:\/\/whiteville-coin\.onrender\.com\//);
    });
  });

  test('renders every app card on the live-app page', () => {
    const view = fs.readFileSync(fileUrl('views', 'live-app.ejs'), 'utf8');
    assert.match(view, /apps\.forEach/);
    assert.match(view, /whiteville-coin\.onrender\.com/);
    assert.match(view, /Visit Whiteville-Coin/);
  });
});
