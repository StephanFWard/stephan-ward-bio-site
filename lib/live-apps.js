/**
 * Live production apps deployed on Render.
 * Shared by routes/main.js and tests — keep URLs canonical (lowercase host).
 */
const LIVE_APPS = [
  {
    id: 'whiteville-coin',
    icon: '🪙',
    name: 'Whiteville-Coin',
    url: 'https://whiteville-coin.onrender.com/',
    domain: 'whiteville-coin.onrender.com',
    tagline: 'Community Cryptocurrency with a Live Price Oracle',
    accent: '#14b8a6',
    description:
      'A fully-functional community cryptocurrency platform with a fixed 210,000-coin supply and a live pricing oracle that averages the CoinGecko Top-50 USD prices every 60 seconds via SSE fan-out. A complete brokerage offers Stripe checkout sessions, idempotent webhook settlement, and instant sell/withdraw logic priced at the live oracle rate with a 0.5% platform fee — in a clearly-labelled sandbox mode when live keys are absent.',
    features: [
      { icon: '📡', title: 'Live price oracle', text: 'CoinGecko Top-50 average refreshed every 60 seconds and fanned out live over SSE.' },
      { icon: '💳', title: 'Brokerage + Stripe', text: 'Checkout sessions, idempotent webhooks, instant sell/withdraw at the oracle rate with a 0.5% fee.' },
      { icon: '📈', title: 'Real-time SVG charts', text: 'Dependency-free charts with 1D/1W/1M/6M/1Y/ALL ranges, hover tooltips, and seeded history.' },
      { icon: '📒', title: 'Ledger + P&L', text: 'Full transaction ledger with P&L tracking, scrypt-hashed accounts, and signed HttpOnly sessions.' },
      { icon: '💾', title: 'SQLite + cloud backup', text: 'Double-entry bookkeeping with atomic writes and a GitHub backup every 5 minutes that restores at boot.' },
      { icon: '📜', title: 'Contract + compliance', text: 'WhitevilleCoin.sol plus US/MiCA classification, AML/KYC, runbooks, and tax-report exports (PDF/CSV/JSON).' },
    ],
    links: [
      { label: 'Open Whiteville-Coin', url: 'https://whiteville-coin.onrender.com/' },
      { label: 'Launch live oracle charts', url: 'https://whiteville-coin.onrender.com/#chart' },
    ],
  },
  {
    id: 'bestbullion',
    icon: '🪙',
    name: 'BestBullion',
    url: 'https://bullionstore.onrender.com/',
    domain: 'bullionstore.onrender.com',
    tagline: 'Buy Gold & Silver Bullion Online at Low Premiums',
    accent: '#f59e0b',
    description:
      'A full-stack precious metals storefront where every price floats live with the market. Spot prices refresh every two minutes and feed directly into product pricing, so what a customer sees is always the real, current rate. Shoppers browse silver, gold and platinum coins and bars, see transparent per-ounce premiums with quantity breaks up to 100+ units, and pay securely through Stripe Checkout — or save 3% paying by check or wire.',
    features: [
      { icon: '📈', title: 'Live spot pricing', text: 'Gold, silver and platinum spot prices update every 2 minutes and drive all product prices in real time.' },
      { icon: '🪙', title: 'Full bullion catalog', text: 'Silver Eagles, Maple Leafs, Philharmonics, junk silver, 10–100 oz bars, Gold Eagles, PAMP Suisse and Platinum Eagles.' },
      { icon: '📉', title: 'Transparent premiums', text: 'Per-ounce premiums published on every product, with quantity discounts up to 100+ units.' },
      { icon: '💳', title: 'Secure checkout', text: 'Card payments via Stripe Checkout, or save 3% paying by check or wire transfer.' },
      { icon: '📦', title: 'Free insured shipping', text: 'Discreet, fully insured delivery on orders over $199.' },
      { icon: '💰', title: 'Sell to us', text: 'A dedicated flow for selling your bullion back at competitive buy prices.' },
    ],
    links: [
      { label: 'Open BestBullion', url: 'https://bullionstore.onrender.com/' },
      { label: 'Browse the shop', url: 'https://bullionstore.onrender.com/shop' },
      { label: 'View live spot prices', url: 'https://bullionstore.onrender.com/spot-prices' },
      { label: 'Sell to us', url: 'https://bullionstore.onrender.com/sell-to-us' },
    ],
  },
  {
    id: 'instantlegal',
    icon: '⚖️',
    name: 'InstantLegal AI',
    url: 'https://instantlegaldotai.onrender.com/',
    domain: 'instantlegaldotai.onrender.com',
    tagline: 'Professional Legal Documents in Minutes',
    accent: '#7c3aed',
    description:
      'An AI-powered legal document generator for modern businesses. Pick a document type — NDA, Terms of Service, Privacy Policy, freelance or employment contract, partnership agreement — enter your business details, and the AI drafts a custom document in about two minutes.',
    features: [
      { icon: '⚖️', title: 'Six document types', text: 'NDAs, website terms of service, privacy policies, freelance contracts, employment agreements and partnership agreements.' },
      { icon: '🏛️', title: 'State-specific compliance', text: 'Every document follows current legal standards for your jurisdiction — all 50 states plus DC.' },
      { icon: '🏭', title: 'Deep customization', text: 'Tailored by industry, business type and protection level, with special clauses: confidentiality, arbitration, advanced termination, IP protection.' },
      { icon: '📄', title: 'PDF + Word formats', text: 'Instantly downloadable, editable files — ready to sign and use immediately.' },
      { icon: '💸', title: '$19.99 per document', text: 'Save $500+ compared to traditional legal services, backed by a 100% money-back guarantee.' },
    ],
    links: [
      { label: 'Open InstantLegal AI', url: 'https://instantlegaldotai.onrender.com/' },
      { label: 'Generate a document', url: 'https://instantlegaldotai.onrender.com/#generator' },
    ],
  },
  {
    id: 'instantai',
    icon: '🤖',
    name: 'InstantAI Consultancy',
    url: 'https://instantaiconsultantcy.onrender.com/',
    domain: 'instantaiconsultantcy.onrender.com',
    tagline: 'AI Business Solutions in Minutes',
    accent: '#0891b2',
    description:
      'An AI business consultant on demand. Choose a consultancy type — AI strategy consultation, implementation plan, readiness audit, adoption roadmap, ethics framework or training program — describe your business, and receive a comprehensive, tailored report in about two minutes.',
    features: [
      { icon: '📊', title: 'Six consultancy services', text: 'AI strategy consultation, implementation plan, readiness audit, adoption roadmap, ethics framework and training program.' },
      { icon: '🏢', title: 'Tailored analysis', text: 'Reports adapt to your industry, business type and size (1–251+ employees) and selected focus areas.' },
      { icon: '📈', title: 'Data-driven output', text: 'Executive summary, current-state analysis, ROI projections, quarterly milestones and measurable success KPIs.' },
      { icon: '📄', title: 'PDF report instantly', text: 'Comprehensive, implementation-ready reports downloadable the moment generation completes.' },
      { icon: '🛡️', title: '$19.99 per report', text: 'A fraction of traditional consulting costs, with a 30-day satisfaction guarantee.' },
    ],
    links: [
      { label: 'Open InstantAI Consultancy', url: 'https://instantaiconsultantcy.onrender.com/' },
      { label: 'Generate a report', url: 'https://instantaiconsultantcy.onrender.com/#generator' },
    ],
  },
];

module.exports = { LIVE_APPS };
