const offerings = [
  {
    id: 1,
    title: "American Tech Fellowship",
    slug: "american-tech-fellowship",
  },
  { id: 2, title: "Anti-Money Laundering", slug: "anti-money-laundering" },
  { id: 3, title: "Automotive & Mobility", slug: "automotive-and-mobility" },
  { id: 4, title: "Data Protection", slug: "data-protection" },
  { id: 5, title: "Defense", slug: "defense" },
  { id: 6, title: "Energy", slug: "energy" },
  { id: 7, title: "Federal Health", slug: "federal-health" },
  { id: 8, title: "FedStart", slug: "fedstart" },
  { id: 9, title: "Financial Services", slug: "financial-services" },
  { id: 10, title: "Food & Beverage", slug: "food-and-beverage" },
  { id: 11, title: "Palantir for Builders", slug: "palantir-for-builders" },
  {
    id: 12,
    title: "Govt Financial Management",
    slug: "govt-financial-management",
  },
  { id: 13, title: "Hospital Operations", slug: "hospital-operations" },
  { id: 14, title: "Insurance", slug: "insurance" },
  { id: 15, title: "Intelligence", slug: "intelligence" },
  { id: 16, title: "Life Sciences", slug: "life-sciences" },
  { id: 17, title: "Mission Manager", slug: "mission-manager" },
  { id: 18, title: "Procurement", slug: "procurement" },
  { id: 19, title: "Rail", slug: "rail" },
  { id: 20, title: "Readiness", slug: "readiness" },
  { id: 21, title: "Retail", slug: "retail" },
  { id: 22, title: "Secure Collaboration", slug: "secure-collaboration" },
  { id: 23, title: "Semiconductors", slug: "semiconductors" },
  { id: 24, title: "Supply Chain", slug: "supply-chain" },
  { id: 25, title: "Telecommunications", slug: "telecommunications" },
  { id: 26, title: "Utilities", slug: "utilities" },
];

const impactStudies = [
  { id: 1, title: "Airbus", slug: "airbus" },
  { id: 2, title: "Axel Springer", slug: "axel-springer" },
  { id: 3, title: "Cleveland Clinic", slug: "cleveland-clinic" },
  { id: 4, title: "Concordance", slug: "concordance" },
  { id: 5, title: "Doosan Infracore", slug: "doosan-infracore" },
  { id: 6, title: "Fujitsu", slug: "fujitsu" },
  { id: 7, title: "HHS & CDC", slug: "hhs-and-cdc" },
  { id: 8, title: "Jacobs", slug: "jacobs" },
  { id: 9, title: "Kinder Morgan", slug: "kinder-morgan" },
  { id: 10, title: "NHS", slug: "nhs" },
  { id: 11, title: "Pacific Gas & Electric", slug: "pacific-gas-and-electric" },
  { id: 12, title: "Ringier", slug: "ringier" },
  { id: 13, title: "Sonnedix", slug: "sonnedix" },
  { id: 14, title: "SOMPO", slug: "sompo" },
  { id: 15, title: "Swiss Re", slug: "swiss-re" },
  { id: 16, title: "Tampa General Hospital", slug: "tampa-general-hospital" },
  { id: 17, title: "World Food Programme", slug: "world-food-programme" },
];

const capabilities = [
  { id: 1, title: "AI + ML", slug: "ai-and-ml" },
  { id: 2, title: "AIP for Developers", slug: "aip-for-developers" },
  { id: 3, title: "Data Integration", slug: "data-integration" },
  { id: 4, title: "Digital Twin", slug: "digital-twin" },
  { id: 5, title: "Dynamic Scheduling", slug: "dynamic-scheduling" },
  { id: 6, title: "Edge AI", slug: "edge-ai" },
  { id: 7, title: "Marketplace", slug: "marketplace" },
  { id: 8, title: "MetaConstellation", slug: "metaconstellation" },
  { id: 9, title: "Pipeline Builder", slug: "pipeline-builder" },
  { id: 10, title: "Process Mining", slug: "process-mining" },
  { id: 11, title: "Real-Time Alerting", slug: "real-time-alerting" },
  { id: 12, title: "Streaming", slug: "streaming" },
  { id: 13, title: "Titanium", slug: "titanium" },
  { id: 14, title: "Warp Speed", slug: "warp-speed" },
];

const documents = [
  { id: 1, title: "Developer Community", slug: "developer-community" },
  { id: 2, title: "Platform Documentation", slug: "platform-documentation" },
  { id: 3, title: "Palantir Developers", slug: "palantir-developers" },
  { id: 4, title: "Trust Center", slug: "trust-center" },
  {
    id: 5,
    title: "Modern Slavery Statement",
    slug: "modern-slavery-statement",
  },
  { id: 6, title: "Cookies", slug: "cookies" },
  {
    id: 7,
    title: "Privacy and Civil Liberties",
    slug: "privacy-and-civil-liberties",
  },
  { id: 8, title: "Palantir Explained", slug: "palantir-explained" },
  { id: 9, title: "Sustainability", slug: "sustainability" },
  { id: 10, title: "Human Rights Policy", slug: "human-rights-policy" },
  { id: 11, title: "Privacy Statement", slug: "privacy-statement" },
  { id: 12, title: "Terms of Use", slug: "terms-of-use" },
];

const country = [
  {
    id: 1,
    title: "US",
  },
  {
    id: 2,
    title: "UK",
  },
  {
    id: 3,
    title: "JP",
  },
  {
    id: 4,
    title: "KR",
  },
];

// Corrected typo: socialPlatfrom -> socialPlatform
const socialPlatform = [
  {
    id: 1,
    name: "Youtube",
    link: "https://www.youtube.com/",
  },
  {
    id: 2,
    name: "Linkedin",
    link: "https://www.linkedin.com/",
  },
  {
    id: 3,
    name: "Github",
    link: "https://github.com/",
  },
  {
    id: 4,
    name: "X",
    link: "https://x.com/",
  },
  {
    id: 5,
    name: "Instagram",
    link: "https://www.instagram.com/",
  },
];

export default {
  documents,
  capabilities,
  impactStudies,
  offerings,
  country,
  socialPlatform, 
};