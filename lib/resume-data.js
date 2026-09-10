/** Stephan Ward's professional background — synced with stephanwardresume.docx (Sep 2026). */
const experience = [
  {
    role: 'Senior Software Engineer',
    org: 'Whiteville-Coin',
    period: 'July 2026 – Present',
    location: 'Whiteville, NC · Remote',
    bullets: [
      'Built a fully-functional community cryptocurrency platform with a fixed 210,000-coin supply and a live pricing oracle that averages the CoinGecko Top-50 USD prices every 60 seconds via SSE fan-out.',
      'Implemented a complete brokerage with Stripe checkout sessions, idempotent webhook settlement, and instant sell/withdraw logic priced at the live oracle rate with a 0.5% platform fee — sandbox mode when live keys are absent.',
      'Delivered a dependency-free SVG real-time chart with 1D/1W/1M/6M/1Y/ALL ranges, hover tooltips, and seeded history, plus an admin console, scrypt-hashed accounts, signed HttpOnly sessions, and a full ledger with P&L tracking.',
      'Architected a resilient data layer on SQLite with double-entry bookkeeping, atomic JSON writes, and a cloud backup that pushes the DB to a private GitHub repo every 5 minutes and restores at boot.',
      'Built auth middleware (pageAuth, apiAuth, adminOnly, sameOrigin), pdfkit + nodemailer tax reports (PDF/CSV/JSON), SEO (meta, canonical, OG/Twitter, sitemap, JSON-LD), and WhitevilleCoin.sol with a full compliance framework.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    org: 'BestBullion',
    period: 'Jan 2026 – July 2026',
    location: 'Whiteville, NC · Remote',
    bullets: [
      'Built BestBullion (bullionstore.onrender.com), a full-stack precious-metals e-commerce storefront where every product price is computed live as (weight × spot) + published premium, with gold, silver and platinum spot prices refreshing every 2 minutes.',
      'Implemented the bullion catalog with All Metals / Silver / Gold / Platinum filters and sorting (Featured, Price Low → High / High → Low, Lowest Premium/oz), covering Silver Eagles, Maple Leafs, Philharmonics, junk silver, 10–100 oz bars, Gold Eagles, PAMP Suisse and Platinum Eagles, plus Top Sellers and New Arrivals merchandising.',
      'Integrated secure checkout via Stripe Checkout with a 3% check/wire discount price, cart with price-lock flow, free account creation, and free discreet fully-insured shipping on orders over $199 with transparent per-ounce premiums and quantity breaks up to 100+ units.',
      'Built the Sell-To-Us reverse-logistics flow: intake form (name, email, metal type, description & quantity), melt-percentage pricing matrix (.999 silver 95–98%, government-minted silver 94–97%, .9999 gold 96–98%, junk silver 90–95%, platinum 92–96%), firm email quote within one business day, prepaid insured shipping label and check/wire payout on verification.',
      'Delivered the live spot-prices education hub (premium explainer, central-bank / geopolitical / industrial-demand / dollar-strength drivers) and dealer-comparison content, deployed on Render with responsive UI and SEO.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    org: 'National AI for Human',
    period: 'Jan 2026 – July 2026',
    location: 'Whiteville, NC · Remote',
    bullets: [
      'Drafted and executed a formal Affidavit of Organizational Intent and Financial Compliance under the NC Nonprofit Corporation Act (Chapter 55A), aligning an AI-focused nonprofit with IRS Section 501(c)(3) requirements.',
      'Structured governance and financial controls to prevent private inurement: board-approved compensation policies, documented service agreements, and safeguards separating nonprofit operations from independent engineering income.',
      'Codified ethical AI development standards within organizational bylaws and sworn statements, reinforcing public-benefit mission alignment and transparent financial stewardship.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    org: 'Instant Legal and Business AI Consultancy',
    period: 'Jan 2026 – July 2026',
    location: 'Whiteville, NC · Remote',
    bullets: [
      'Engineered and deployed Instant Legal and Business AI Consultancy on the Render pipeline, ensuring seamless performance and scalability.',
      'Utilized Python and HTML to develop a dynamic AI-powered legal document generation interface, enabling real-time customization for various business needs.',
      'Designed and implemented an intuitive form system for users to input business details, select legal document types, and receive AI-generated contracts instantly.',
      'Optimized frontend performance and responsiveness across desktop and mobile views to enhance user engagement and conversion rates.',
      'Integrated secure payment processing and user authentication for a seamless and protected transaction experience.',
      'Ensured compliance with state-specific legal standards by structuring document generation logic to meet diverse jurisdictional requirements.',
    ],
  },
  {
    role: 'Senior Full-Stack Developer (Contract)',
    org: 'Insight Global — America’s Job Link Alliance',
    period: 'Mar 2025 – Dec 2025',
    location: 'Kansas, MO · Remote',
    bullets: [
      'Architected and enhanced a scalable AI resume-building platform using Ruby on Rails, designing RESTful APIs and background job processing for dynamic updates, versioning, and real-time rendering.',
      'Designed and implemented a reusable Notes Card component for structured recruiter notes with PostgreSQL (RDS) persistence.',
      'Leveraged HAML templating to implement State Attorney General commerce-facing interfaces with WCAG alignment, QA/QC validation, and compliance checks.',
      'Delivered all contract objectives via GitHub PR governance, sprint reviews, and Ansible-based deployments for zero-defect releases.',
      'Architected a secure client-managed credential module with AES-256 encryption (MessageEncryptor), RBAC, BCrypt hashing, and TLS transport security.',
    ],
  },
  {
    role: 'Senior Frontend Developer (Contract)',
    org: 'MedSys — Baylor Health',
    period: 'Mar 2024 – May 2024',
    location: 'Plano, TX · Remote',
    bullets: [
      'Engineered TypeScript in-person/video appointment tile components for a redesigned web and mobile dashboard with designers.',
      'Integrated a “Things-To-Do” dashboard handling task arrays for patient appointments through card components.',
      'Updated hamburger menu navigation items and routes based on show/hide toggles for patient-enrolled programs.',
      'Leveraged BEM SCSS namespaces and Figma core to scale the design system to the front-end iFrame interface, shipping June 3rd on schedule.',
    ],
  },
  {
    role: 'Full-Stack Engineer',
    org: 'Take2IT, Booz Allen Hamilton, Veterans Affairs',
    period: 'Nov 2021 – Mar 2023',
    location: 'Washington, DC · Remote',
    bullets: [
      'Practiced SAFe for the Caseflow Application, lifting development efficiency ~30% and cutting delivery time ~20% via complex query design.',
      'Designed, developed, and deployed the 2022 priority AMA Board of Appeals split-stream project, improving appeals processing time ~40%.',
      'Streamlined Caseflow install/build on Windows 11 with Docker SOPs, cutting setup from 1–2 days to ~2 hours.',
      'Led Tier 4 resolution SOPs for stuck async REST threads, claims data, and privileges — improving resolution time ~50%.',
      'Optimized Arel/SQL queries, automation, and async jobs with the Optimization team, lifting app performance ~25% and cutting DB response ~30%.',
      'Partnered on release management with Git-flow merge strategies for conflict-free integration.',
      'Optimized claim processing under HIPAA controls, processing 10,000+ claims with encryption and data protection protocols.',
    ],
  },
  {
    role: 'Full-Stack Engineer',
    org: 'Denver Website and App Technology',
    period: 'Nov 2011 – Aug 2021',
    location: 'Denver, CO',
    bullets: [
      'Coordinated, designed, and developed cross-platform SaaS solutions and hardware through the SDLC, delivering on time and on budget.',
      'Delivered SaaS platforms across health, banking, mining, oil & gas, real estate, radio, networking, and property management.',
      'Drafted EULAs defining revocability/transferability while protecting company IP.',
      'Prepared SOWs, RFIs, RFPs, and contract proposals that won new business.',
      'Led a Hospital Management System build (PHP/MariaDB/MySQL/Bootstrap on XAMPP) covering records, scheduling, billing, and reporting.',
      'Shipped healthcare SaaS for patient records, scheduling, billing, and report generation.',
      'Integrated Google/Apple push notifications and managed Android/iOS app distribution.',
      'Evaluated business cases and vendors to select strategic partners.',
      'Reported progress to stakeholders, managing expectations and milestones.',
      'Architected Hitachi UCP HC + VMware vSAN infrastructure for Comcast binary bit-stream data processing.',
    ],
  },
  {
    role: 'Founder & CEO',
    org: 'Propurty (SaaS)',
    period: '2015 – 2016',
    location: 'North Carolina',
    bullets: [
      'Founded a property-management marketplace app connecting owners with contractors — schedule, negotiate, and accept contract prices end-to-end.',
      'Integrated Twilio for user messaging, PayPal for global payments, and Google Maps for geo-location; co-updated PayPal’s global country-code API.',
      'Shipped on iOS and web; secured US trademark (#87248451).',
    ],
  },
  {
    role: 'Field Service Representative → Tier III',
    org: 'Halliburton',
    period: '2012 – 2015',
    location: 'Multiple US field locations',
    bullets: [
      'Consulted on IT drilling-fluid software for ConocoPhillips, XTO Energy, HESS, Occidental and other majors across 17 rigs and 145 drilled wells.',
      'Monitored costs, quality and safety of drilling-fluid IT operations daily; managed chemical inventory and supply-chain orders.',
      'Promoted to Tier II (Jun 2013) then Tier III (Aug 2014) for exceptional resolution of field-critical issues.',
      'Identified software and operational changes for EnerVest saving ≈ $500,000 per well drilled.',
    ],
  },
];

const skills = {
  platforms: 'Windows, macOS, Linux/Unix, Ubuntu, AWS, Azure, Google Firebase, .NET, Apache',
  software: 'Jira, Confluence, Docker, Git, VS Code, MySQL Workbench, DBeaver, IntelliJ, NetBeans, Postman, Figma, Slack, Metabase',
  fullStack:
    'JavaScript, TypeScript, Node.js, React, Redux, Angular, Ruby on Rails, Spring, Java, Python, C#, C++, Swift, Kotlin, PHP, SQL (MySQL/Postgres/Oracle/SQLite), HTML5/CSS/SCSS, Bash/PowerShell, Jest, RSpec',
};

const education = [
  { school: 'Western Governors University', degree: 'B.S. Software Engineering', year: 'Aug 2021' },
  { school: 'Western Governors University', degree: 'M.Sc. Information Technology Management', year: 'Dec 2020' },
  { school: 'East Carolina University', degree: 'B.S. Biochemistry', year: 'May 2010' },
];

const certifications = [
  { name: 'Certified Associate Project Management (CAPM®)', issuer: 'PMI' },
  { name: 'AWS Certified Advanced Networking Specialty', issuer: 'Udemy Academy' },
  { name: 'Certified Information Systems Auditor (CISA)', issuer: 'Udemy Academy' },
  { name: 'Certified Project Management', issuer: 'uCertify' },
  { name: 'CompTIA Project+', issuer: 'CompTIA' },
  { name: 'CompTIA A+', issuer: 'CompTIA' },
  { name: 'ITIL 4 Foundation', issuer: 'AXELOS' },
];

const projects = [
  {
    name: 'Whiteville-Coin',
    kind: 'Crypto Platform · Brokerage',
    period: 'July 2026 – Present',
    icon: '🪙',
    summary:
      'Community cryptocurrency platform (210,000-coin supply) with a CoinGecko Top-50 oracle, Stripe brokerage, SVG live charts, SQLite double-entry ledger, WhitevilleCoin.sol, and full compliance framework — live on Render.',
    highlights: ['Live oracle + charts', 'Stripe brokerage', 'whiteville-coin.onrender.com'],
  },
  {
    name: 'BestBullion',
    kind: 'E-commerce · Precious Metals Storefront',
    period: 'Jan 2026 – July 2026',
    role: 'Senior Software Engineer',
    url: 'https://bullionstore.onrender.com/',
    icon: '🏦',
    summary:
      'Full-stack gold, silver & platinum storefront on Render where every price floats live with the market — (weight × spot) + published premium with spot refreshing every 2 minutes. Catalog with metal filters and premium sorting, Stripe Checkout with 3% check/wire discount, insured $199+ shipping, and a Sell-To-Us buyback flow — live at bullionstore.onrender.com.',
    highlights: ['Live 2-min spot pricing', 'Stripe Checkout + price lock', 'bullionstore.onrender.com'],
  },
  {
    name: 'National AI for Human',
    kind: 'Nonprofit AI Initiative',
    period: 'Jan 2026 – July 2026',
    icon: '🧠',
    summary:
      'An AI-focused nonprofit built on formal 501(c)(3)-aligned governance: charitable, educational, and scientific purposes codified in organizational bylaws with board-approved financial controls.',
    highlights: ['NC Chapter 55A compliance', 'Ethical-AI bylaws', 'Public-benefit mission'],
  },
  {
    name: 'Instant Legal & Business AI',
    kind: 'SaaS · Document Generation',
    period: 'Jan 2026 – July 2026',
    icon: '⚖️',
    summary:
      'AI-powered legal document generator deployed on Render: users input business details, select document types, and receive jurisdiction-aware contracts instantly — with secure payments and auth.',
    highlights: ['Python + HTML interface', 'State-specific compliance logic', 'Stripe-ready payments'],
  },
  {
    name: 'AJLA Résumé Platform (Insight Global)',
    kind: 'Enterprise Rails Platform',
    period: 'Mar 2025 – Dec 2025',
    icon: '📄',
    summary:
      'Scalable AI résumé-building platform: REST APIs, background jobs, versioned résumés and recruiter Notes Cards on PostgreSQL RDS — shipped via governed GitHub flow and Ansible SOPs.',
    highlights: ['Ruby on Rails', 'WCAG-aligned UI', 'Zero-defect releases'],
  },
  {
    name: 'QuarterlyEyes ML Engine',
    kind: 'Machine Learning · Finance',
    period: '2023 – 2024',
    icon: '📈',
    summary:
      'Neural-network microservices that ingest quarterly reports, predict next-quarter figures and forecast stock movement — served into a Java/Spring dashboard with regression-model benchmarking.',
    highlights: ['Custom NN algorithm', 'Java/Spring dashboard', 'Regression benchmarking'],
  },
  {
    name: 'Propurty',
    kind: 'iOS App · Marketplace SaaS',
    period: '2015 – 2016',
    icon: '🏠',
    summary:
      'Property management marketplace answering “What would you like done? By whom? When? Where? How much?” — camera postings, Twilio texting, PayPal global payments, Google Maps geolocation.',
    highlights: ['App Store + Web', 'Trademark #87248451', 'Twilio · PayPal · Maps'],
  },
  {
    name: 'Hospital Management System',
    kind: 'Healthcare SaaS',
    period: '2017 – 2020',
    icon: '🏥',
    summary:
      'Full SDLC delivery of a hospital platform on PHP/MariaDB/MySQL/Bootstrap: patient records, appointment scheduling, billing, and report generation for healthcare facilities.',
    highlights: ['SDLC ownership', 'RFP/SOW leadership', 'Vendor evaluation'],
  },
];

module.exports = { experience, skills, education, certifications, projects };

