/**
 * GitHub repository data for StephanFWard.
 * Live GitHub API fetch (cached 6 h) with a bundled snapshot fallback so
 * /repositories never renders empty, even if the API is rate-limited.
 */
const SNAPSHOT = require('./github-snapshot');

const USER = 'StephanFWard';
const PROFILE_URL = 'https://github.com/' + USER;
const CACHE_TTL = 1000 * 60 * 60 * 6;

let cache = { repos: null, fetchedAt: 0 };

/** GitHub language colors (linguist palette). */
const LANG_COLORS = {
  Python: '#3572A5',
  Java: '#b07219',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  'C#': '#178600',
  'C++': '#f34b7d',
  Ruby: '#701516',
  Rust: '#dea584',
  PHP: '#4F5D95',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'Jupyter Notebook': '#DA5B0B',
  YAML: '#cb171e',
  Shell: '#89e051',
};
function colorFor(lang) {
  return LANG_COLORS[lang] || '#8b8b9e';
}

/** Curated, recruiter-friendly blurbs per language — what was built and why. */
const EXPERTISE = {
  Python: {
    blurb:
      'Primary AI & automation language. Built a real-time USPTO patent-search engine, a GPT-4 gRPC client-server chat, Flask + SQLite audio analysis, DICOM medical-image slicing, a PyTorch Mixture-of-Experts demo behind Flask, and proxy-routed social automation.',
    why: 'Chosen for fast iteration, the richest AI/data ecosystem, and clean third-party API integrations.',
  },
  Java: {
    blurb:
      'Enterprise back ends: a Spring Boot inventory REST API on an embedded H2 database, plus a Spring Boot CRUD service wired to Keycloak single sign-on (SSO).',
    why: 'Used where typed, secure, production-grade services and enterprise auth matter.',
  },
  JavaScript: {
    blurb:
      'Interactive front ends and event streaming: a React visualizer for compression algorithms (Huffman, RLE, arithmetic, LZW), a dual-backend Apache Kafka app for real-time inventory order processing, and UI automation bots.',
    why: 'Picked for reactive UIs and high-throughput, event-driven pipelines.',
  },
  Ruby: {
    blurb:
      'Full-stack apps and scripting: a local chat/messaging system with a React front end, a USPTO API JSON parser that preps data for storage or JSON rendering, and a backtracking Sudoku solver.',
    why: 'Chosen for expressive, rapid full-stack development and clean API handling.',
  },
};

const EXPERTISE2 = {
  'C#': {
    blurb:
      '.NET engineering: a MongoDB-backed application using the repository pattern with a dedicated business layer deployed to MongoLab cloud, plus Unity multiplayer FPS work.',
    why: 'Used for strongly-typed .NET architecture and game-engine development.',
  },
  Rust: {
    blurb: 'Systems programming on the blockchain: a pegged cryptocurrency built on the Substrate framework.',
    why: 'Chosen where memory safety and performance are non-negotiable.',
  },
  PHP: {
    blurb: 'Classic LAMP delivery: a Hospital Management System on PHP/MariaDB/MySQL/Bootstrap with PDF generation.',
    why: 'Used for proven, low-cost web stacks in healthcare settings.',
  },
  HTML: {
    blurb: 'Web structure for AI demos — including the Mixture-of-Experts optimization interface served through Flask.',
    why: 'The presentation layer that makes models and tools usable.',
  },
  CSS: {
    blurb: 'Interface styling across projects, including the Spring Boot + Keycloak SSO application UI.',
    why: 'Keeps every deliverable polished and client-ready.',
  },
  'Jupyter Notebook': {
    blurb: 'Data-science notebooks for AI experimentation and model prototyping.',
    why: 'The fastest way to explore data before productizing models.',
  },
  Other: {
    blurb:
      'DevOps & utilities: YAML network-automation playbooks (BGP/OSPF WAN, VPN, ACLs), C++ coursework, marketing bots, and profile configuration.',
    why: 'Infrastructure-as-code and supporting tooling around the main products.',
  },
};
Object.assign(EXPERTISE, EXPERTISE2);

function normalize(raw) {
  return raw
    .filter((r) => !r.private)
    .map((r) => ({
      name: r.name,
      url: r.html_url,
      lang: r.language || null,
      fork: Boolean(r.fork),
      desc: (r.description || '').slice(0, 300),
      updated: (r.updated_at || '').slice(0, 10),
      stars: r.stargazers_count || 0,
    }));
}

async function fetchLive() {
  const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`, {
    headers: { 'User-Agent': 'stephanfward-bio-site', Accept: 'application/vnd.github+json' },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error('GitHub API responded ' + res.status);
  return normalize(await res.json());
}

async function getRepos() {
  if (cache.repos && Date.now() - cache.fetchedAt < CACHE_TTL) return cache.repos;
  try {
    const repos = await fetchLive();
    cache = { repos, fetchedAt: Date.now() };
    return repos;
  } catch (err) {
    console.error('[github-data] live fetch failed, using snapshot:', err.message);
    cache = { repos: SNAPSHOT, fetchedAt: Date.now() };
    return cache.repos;
  }
}

function summarize(allRepos) {
  const repos = allRepos
    .slice()
    .sort((a, b) => Number(a.fork) - Number(b.fork) || (b.updated || '').localeCompare(a.updated || ''));
  const own = repos.filter((r) => !r.fork);

  const counts = {};
  own.forEach((r) => {
    const key = r.lang || 'Other';
    counts[key] = (counts[key] || 0) + 1;
  });

  const total = own.length || 1;
  let languages = Object.entries(counts)
    .map(([name, count]) => ({
      name,
      count,
      color: colorFor(name === 'Other' ? null : name),
      pctNum: (count / total) * 100,
    }))
    .sort((a, b) => b.count - a.count)
    .map((l) => ({ ...l, pct: Math.round(l.pctNum) }));

  const sum = languages.reduce((a, l) => a + l.pct, 0);
  if (languages.length && sum !== 100) languages[languages.length - 1].pct += 100 - sum;

  let acc = 0;
  const gradient = languages
    .map((l, i) => {
      const start = acc;
      acc += l.pct;
      const end = i === languages.length - 1 ? 100 : acc;
      return `${l.color} ${start}% ${end}%`;
    })
    .join(', ');

  const expertise = languages.map((l) => {
    const curated = EXPERTISE[l.name];
    const names = own
      .filter((r) => (r.lang || 'Other') === l.name)
      .slice(0, 4)
      .map((r) => r.name.replace(/[-_]/g, ' '));
    return {
      name: l.name,
      count: l.count,
      color: l.color,
      blurb: curated ? curated.blurb : `Original work written primarily in ${l.name}.`,
      why: curated ? curated.why : 'Supporting projects that round out the portfolio.',
      projects: names.join(' · ') + (l.count > names.length ? ` +${l.count - names.length} more` : ''),
    };
  });

  return {
    total: repos.length,
    ownCount: own.length,
    forkCount: repos.length - own.length,
    languages,
    gradient,
    expertise,
    langTotals: repos.reduce((m, r) => {
      const k = r.lang || 'Other';
      m[k] = (m[k] || 0) + 1;
      return m;
    }, {}),
    repos: repos.map((r) => ({ ...r, langLabel: r.lang || 'Other' })),
    profileUrl: PROFILE_URL,
  };
}

module.exports = { getRepos, summarize, colorFor, PROFILE_URL };

