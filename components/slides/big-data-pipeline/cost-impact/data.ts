export type EffortRow = { no: number; activity: string; days: number };

export type ProjectionPoint = { year: string; value: number };

export type PlatformCard = {
  label: string;
  sub: string;
  value: string;
  items: string[];
  isTagList?: boolean;
};

export const costChartMax = 2.6;
export const costChartTicks = [0, 0.5, 1, 1.5, 2, 2.5];

export const netsuiteOption = {
  badge: "Option 1",
  vendorName: "NetSuite",
  vendorDomain: "netsuite.com",
  title: "Build Inside NetSuite (Customization)",
  rateLabel: "Consultant Rate",
  rateValue: "USD 450 / Man Day",
  effortRows: [
    { no: 1, activity: "Requirement Analysis", days: 10 },
    { no: 2, activity: "Custom Record Development", days: 8 },
    { no: 3, activity: "Custom Saved Search & Data Model", days: 12 },
    { no: 4, activity: "Dashboard Development", days: 15 },
    { no: 5, activity: "KPI & Metrics Development", days: 10 },
    { no: 6, activity: "Testing & Quality Assurance", days: 10 },
    { no: 7, activity: "Deployment & User Training", days: 5 },
  ] as EffortRow[],
  totalDays: 70,
  costImpact: {
    days: "70 MD",
    rate: "USD 450",
    usd: "USD 31,500",
    idr: "IDR 519,750,000",
    note: "*Assume Exchange Rate IDR 16,500 / USD",
  },
  projection: [
    { year: "Year 1", value: 0.52 },
    { year: "Year 2", value: 1.04 },
    { year: "Year 3", value: 1.56 },
    { year: "Year 4", value: 2.08 },
    { year: "Year 5", value: 2.6 },
  ] as ProjectionPoint[],
  warningTitle: "Cost Grows Linearly",
  warningPoints: [
    "Setiap request baru = Additional MD",
    "Setiap perubahan = Additional Cost",
    "High dependency on consultant",
    "Longer time to deliver",
  ],
};

export const platformOption = {
  badge: "Option 2",
  title: "Build Enterprise Data Platform",
  subtitle: "(Data Warehouse + Dashboard Layer)",
  techStackLabel: "Tech Stack Example",
  techStack: ["PostgreSQL | Supabase", "Metabase / Power BI", "Next.js"],
  cards: [
    {
      label: "Initial Investment",
      sub: "(One Time)",
      value: "IDR 150 – 300 Juta",
      items: [
        "Data Warehouse Setup",
        "ETL / Data Integration",
        "Dashboard Framework",
        "Security & Governance",
        "User Training",
      ],
    },
    {
      label: "Ongoing Maintenance",
      sub: "(Annual)",
      value: "IDR 24,642,000 / Year",
      items: [
        "Infrastructure (AWS)",
        "Maintenance & Support",
        "Monitoring & SLA",
        "AI Insight Engine (Basic)",
        "System Optimization",
      ],
    },
    {
      label: "Additional Dashboard",
      sub: "(Future)",
      value: "0 – 5 MD (Internal Team)",
      items: ["Low Incremental Cost", "High Flexibility", "Fast Delivery"],
      isTagList: true,
    },
  ] as PlatformCard[],
  projection: [
    { year: "Year 1", value: 0.17 },
    { year: "Year 2", value: 0.19 },
    { year: "Year 3", value: 0.22 },
    { year: "Year 4", value: 0.25 },
    { year: "Year 5", value: 0.27 },
  ] as ProjectionPoint[],
  successTitle: "Cost Grows Marginally",
  successPoints: [
    "Build once, use many times",
    "New dashboard = Low cost",
    "Scalable & Future Ready",
    "Owned by Internal Team",
    "Faster time to insight",
  ],
};
