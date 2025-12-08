export const foundaryMenus = [
  { title: "Palantier Foundary", slug: "/palantier-foundary" },
  { title: "About the Ontology", slug: "/palantier-foundary-ontology" },

  {
    title: "Industries",
    slug: "/industries",
    type: "mega",
    subMenu: [
      {
        category: "AUTOMOTIVE & MOBILITY",
        items: [
          { title: "Overview", slug: "/auto-overview" },
          { title: "Component Monitoring", slug: "/component-monitoring" },
          { title: "Quality Management", slug: "/quality-management" },
        ],
      },
      {
        category: "CPG",
        items: [
          { title: "Overview", slug: "/cpg-overview" },
          { title: "Customer Analytics", slug: "/customer-analytics" },
          { title: "Pricing Optimization", slug: "/pricing-optimization" },
          { title: "Retail", slug: "/retail" },
        ],
      },
      {
        category: "ENERGY",
        items: [
          { title: "Overview", slug: "/energy-overview" },
          { title: "Oil & Gas", slug: "/oil-gas" },
          { title: "Renewables", slug: "/renewables" },
          { title: "Utilities", slug: "/utilities" },
        ],
      },
      {
        category: "FINANCIAL SERVICES",
        items: [
          { title: "Overview", slug: "/fin-overview" },
          { title: "Anti-Money Laundering", slug: "/aml" },
          { title: "Cryptocurrency", slug: "/crypto" },
          { title: "Customer Intelligence", slug: "/customer-intel" },
        ],
      },
      {
        category: "HEALTHCARE & LIFE SCIENCES",
        items: [
          { title: "Life Sciences", slug: "/life-sciences" },
          { title: "Biomanufacturing", slug: "/biomanufacturing" },
          { title: "Federal Health", slug: "/federal-health" },
          { title: "Hospitals", slug: "/hospitals" },
        ],
      },
      {
        category: "SUPPLY CHAIN",
        items: [
          { title: "Overview", slug: "/sc-overview" },
          { title: "APEX", slug: "/apex" },
          { title: "Clear to Build+", slug: "/clear-to-build-plus" },
          { title: "Cost of Goods Sold", slug: "/cogs" },
        ],
      },
      {
        category: "TELECOMMUNICATIONS",
        items: [
          { title: "Overview", slug: "/telecom-overview" },
          { title: "5G Connectivity", slug: "/5g" },
          { title: "ECO-RAN", slug: "/eco-ran" },
          { title: "Network Reliability", slug: "/network-reliability" },
        ],
      },
      {
        category: "ALL INDUSTRIES",
        items: [{ title: "Overview", slug: "/all-industries" }],
      },
    ],
  },
  {
    title: "Capabilities",
    slug: "/palantir-capabilities",
    type: "capabilities", // identifies different UI layout
    subMenu: {
      title: "Capabilities",
      description:
        "Palantir Foundry offers an integrated suite of industry-agnostic capabilities for analysis, collaboration, and operations.",
      columns: [
        ["AI + ML", "Dynamic Scheduling", "Marketplace", "Real-Time Alerting"],
        ["Data Integration", "Edge AI", "MetaConstellation", "Streaming"],
        ["Digital Twin", "Entity Resolution", "Process Mining"],
      ],
    },
  },

  {
    title: "Learn Foundry",
    slug: "/palantir-learn-foundry",
    type: "learn",
    subMenu: {
      title: "Learn Foundry",
      description:
        "Palantir Foundry enables organizations to solve their toughest data and operations challenges. Learn how with first-class resources →",
      columns: [
        ["Blog", "Documentation"],
        ["Customer Success", "Learning Hub"],
        ["Developers Channel", "What's New in Foundry"],
      ],
    },
  },
  { title: "Start Building Now", slug: "/palantier-building-foundary" },
];
