/** Stephan Ward's professional background, carried over from the original bio site. */
const experience = [
  {
    role: 'CEO & Software Engineer',
    org: 'National AI for Human',
    period: 'Feb 2026 – Present',
    location: 'Whiteville, NC · Remote',
    bullets: [
      'Drafted and executed a formal Affidavit of Organizational Intent and Financial Compliance under the NC Nonprofit Corporation Act (Chapter 55A), aligning an AI-focused nonprofit with IRS Section 501(c)(3) requirements.',
      'Structured governance and financial controls to prevent private inurement: board-approved compensation policies, documented service agreements, and separation between nonprofit operations and independent engineering income.',
      'Codified ethical AI development standards within organizational bylaws, reinforcing public-benefit mission alignment and transparent financial stewardship.',
    ],
  },
  {
    role: 'CEO & Software Engineer',
    org: 'Instant Legal and Business AI Consultancy',
    period: 'Jan 2025 – Present',
    location: 'Whiteville, NC · Remote',
    bullets: [
      'Engineered and deployed the platform on the Render pipeline, ensuring seamless performance and scalability.',
      'Built a dynamic AI-powered legal document generation interface in Python and HTML enabling real-time customization for business needs.',
      'Designed form flows where users enter business details, pick document types, and receive AI-drafted contracts instantly.',
      'Integrated secure payment processing and user authentication for a protected transaction experience.',
      'Structured generation logic to meet diverse state-level legal standards across jurisdictions.',
    ],
  },
  {
    role: 'Senior Full-Stack Developer (Contract)',
    org: 'Insight Global — America’s Job Link Alliance',
    period: 'Mar 2025 – Dec 2025',
    location: 'Kansas City, MO · Remote',
    bullets: [
      'Architected and enhanced a scalable AI résumé-building platform in Ruby on Rails — RESTful APIs and background jobs for dynamic updates, versioning, and real-time rendering for job seekers.',
      'Designed a reusable Notes Card component letting recruiters capture, timestamp, and manage structured notes; persisted securely to PostgreSQL (RDS).',
      'Delivered State Attorney General commerce-facing interfaces with HAML, meeting WCAG accessibility standards through rigorous QA/QC.',
      'Enforced GitHub PR governance, led weekly sprint reviews, and executed standardized Ansible deployments for zero-defect production releases.',
    ],
  },
];


experience.push(
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
  }
);

const skills = {
  platforms: 'Windows, macOS, Linux/Unix, Ubuntu, AWS, Azure, Google Firebase, .NET, Apache',
  software: 'Jira, Confluence, Docker, Git, VS Code, MySQL Workbench, DBeaver, IntelliJ, NetBeans, Postman, Figma, Slack, Metabase',
  fullStack:
    'JavaScript, TypeScript, Node.js, React, Redux, Angular, Ruby on Rails, Spring, Java, Python, C#, C++, Swift, Kotlin, PHP, SQL (MySQL/Postgres/Oracle/SQLite), HTML5/CSS/SCSS, Bash/PowerShell, Jest, RSpec',
};

const education = [
  { school: 'Western Governors University', degree: 'B.S. Software Development', year: 'Aug 2021' },
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
    name: 'National AI for Human',
    kind: 'Nonprofit AI Initiative',
    period: '2026 – Present',
    icon: '🧠',
    summary:
      'An AI-focused nonprofit built on formal 501(c)(3)-aligned governance: charitable, educational, and scientific purposes codified in organizational bylaws with board-approved financial controls.',
    highlights: ['NC Chapter 55A compliance', 'Ethical-AI bylaws', 'Public-benefit mission'],
  },
  {
    name: 'Instant Legal & Business AI',
    kind: 'SaaS · Document Generation',
    period: '2025 – Present',
    icon: '⚖️',
    summary:
      'AI-powered legal document generator deployed on Render: users input business details, select document types, and receive jurisdiction-aware contracts instantly — with secure payments and auth.',
    highlights: ['Python + HTML interface', 'State-specific compliance logic', 'Stripe-ready payments'],
  },
  {
    name: 'AJLA Résumé Platform (Insight Global)',
    kind: 'Enterprise Rails Platform',
    period: '2025',
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
    period: 'Consulting engagement',
    icon: '🏥',
    summary:
      'Full SDLC delivery of a hospital platform on PHP/MariaDB/MySQL/Bootstrap: patient records, appointment scheduling, billing, and report generation for healthcare facilities.',
    highlights: ['SDLC ownership', 'RFP/SOW leadership', 'Vendor evaluation'],
  },
];

module.exports = { experience, skills, education, certifications, projects };

