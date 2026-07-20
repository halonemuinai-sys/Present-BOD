import type { ComparisonColumn, SystemBoxData } from "./types";

export const slideNumber = "6";
export const slideLabel = "Proposed Solution";
export const slideTitle = "Not a Duplicate Dashboard, But a Consolidation Layer";
export const slideSubtitle =
  "Existing systems stay in place for day-to-day operations. What we're building is one additional strategic view that unifies all of them for the Board.";

export const sourceSystems: SystemBoxData[] = [
  { title: "NetSuite (Finance)" },
  { title: "Talenta (HR)" },
  { title: "SaaS GA / Legal" },
  { title: "SaaS Marketing / Ops" },
];

export const currentColumn: ComparisonColumn = {
  label: "Phase 1",
  title: "System of Record",
  subtitle: "Per data source, for operational teams",
  accent: "amber",
  steps: ["4–6 Separate Dashboards, Per Function"],
  bullets: [
    "Single-domain, single-entity",
    "KPIs follow each vendor's own standard",
    "Not automatically consolidated across BUs",
    "Adding features/customization = extra cost to the vendor",
    "Shows only present value (a current snapshot)",
  ],
};

export const proposedColumn: ComparisonColumn = {
  label: "Phase 2",
  title: "System of Insight",
  subtitle: "Consolidated across functions & BUs, for Board/C-Level",
  accent: "green",
  steps: ["Data Warehouse (ETL/ELT)", "Executive Dashboard + AI Analytics"],
  bullets: [
    "One KPI definition, apple-to-apple across BUs",
    "Cross-functional correlation, e.g. HR cost vs BU margin",
    "Automated forecasting & anomaly detection",
    "Developed in-house, no extra cost to external vendors",
    "Covers past (historical trends) & future (forecast), not just present",
  ],
};
