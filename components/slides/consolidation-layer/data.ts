import { BarChart3, Database, LineChart, Megaphone, Scale, Users } from "lucide-react";
import type { FlowStageData, ListItem, SourceSystem } from "./types";

export const slideNumber = "7";
export const slideLabel = "Proposed Solution";
export const slideTitle = "Not a Duplicate Dashboard, But a Consolidation Layer";
export const slideSubtitleLine1 = "Existing systems stay in place for day-to-day operations.";
export const slideSubtitleLine2 =
  "What we're building is one additional strategic view that unifies all of them for the Board.";

export const flowTop = "From Operational Data";
export const flowBottom = "To Strategic Insight";

// Phase 1 — System of Record
export const phase1Label = "Phase 1";
export const phase1Title = "System of Record";
export const phase1Tagline = "Per data source, for operational teams";

export const sourceSystems: SourceSystem[] = [
  { icon: BarChart3, label: "NetSuite (Finance)", logoDomain: "netsuite.com", color: "#2563eb" },
  { icon: Users, label: "Talenta (HR)", logoDomain: "talenta.co", color: "#7c3aed" },
  { icon: Scale, label: "SaaS GA / Legal", color: "#0d9488" },
  { icon: Megaphone, label: "SaaS Marketing / Ops", color: "#16a34a" },
];

export const phase1OutputTitle = "4–6 Separate Dashboards, Per Function";

export const limitationLabel = "Limitation";
export const limitations: ListItem[] = [
  "Single-domain, single-entity",
  "KPIs follow each vendor's own standard",
  "Not automatically consolidated across BUs",
  "Adding features/customization = extra cost to the vendor",
  "Shows only present value (a current snapshot)",
];

// Phase 2 — System of Insight
export const phase2Label = "Phase 2";
export const phase2Title = "System of Insight";
export const phase2Tagline = "Consolidated across functions & BUs, for Board/C-Level";

export const architectureLabel = "Data Flow Architecture";
export const flowStages: FlowStageData[] = [
  {
    icon: Database,
    title: "Data Warehouse (ETL/ELT)",
    subtitle: "Clean, integrated, and trusted data foundation",
  },
  {
    icon: LineChart,
    title: "Executive Dashboard + AI Analytics",
    subtitle: "Strategic insight for faster, smarter decisions",
  },
];

export const advantageLabel = "Advantage";
export const advantages: ListItem[] = [
  "One KPI definition, apple-to-apple across BUs",
  "Cross-functional correlation, e.g. HR cost vs BU margin",
  "Automated forecasting & anomaly detection",
  "Developed in-house, no extra cost to external vendors",
  "Covers past (historical trends) & future (forecast), not just present",
];
