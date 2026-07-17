import type { Track } from "./types";

export interface TimelineData {
  eyebrow: string;
  title: string;
  subtitle: string;
  months: string[];
  tracks: Track[];
  legend: { variant: "prep" | "build" | "milestone"; label: string }[];
}

export const inHouseData: TimelineData = {
  eyebrow: "Implementation Roadmap",
  title: "In-house Dev Team · 6-Month Plan",
  subtitle: "GA, Legal & Compliance running since May; Marketing Budget module initiated in late June — full go-live in October.",
  months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  tracks: [
    {
      title: "Master Data & Infrastructure",
      deliverable: "ready-to-use master data",
      bars: [
        { label: "Infra setup", start: 1, end: 1, variant: "prep" },
        { label: "Data schema", start: 2, end: 2, variant: "prep" },
      ],
    },
    {
      title: "General Affairs",
      tag: { text: "since May", color: "green" },
      deliverable: "asset register + maintenance schedule",
      bars: [
        { label: "Asset Inventory & Barcode", start: 1, end: 2, variant: "build" },
        { label: "Maintenance", start: 3, end: 4, variant: "build" },
        { label: "Rental & Leasing", start: 5, end: 6, variant: "build" },
      ],
    },
    {
      title: "Legal & Compliance",
      tag: { text: "since May", color: "green" },
      deliverable: "contract repository + reminders",
      bars: [
        { label: "Contract Repository", start: 1, end: 2, variant: "build" },
        { label: "Milestone Alerts", start: 3, end: 4, variant: "build" },
        { label: "Compliance Matrix & SOP", start: 5, end: 8, variant: "build" },
      ],
    },
    {
      title: "Marketing Budget",
      tag: { text: "late June", color: "amber" },
      deliverable: "end-to-end budget flow",
      bars: [
        { label: "Budget Plan", start: 4, end: 5, variant: "build" },
        { label: "Magic Link", start: 6, end: 7, variant: "build" },
        { label: "Locking", start: 8, end: 9, variant: "build" },
        { label: "Payment", start: 10, end: 11, variant: "build" },
      ],
    },
    {
      title: "Integration, UAT & Migration",
      deliverable: "UAT sign-off + migrated data",
      bars: [
        { label: "UAT", start: 9, end: 9, variant: "prep" },
        { label: "Migration", start: 10, end: 11, variant: "prep" },
      ],
    },
    {
      title: "Go-Live & Adoption",
      deliverable: "rollout, training & hypercare",
      bars: [{ label: "★ Go-Live", start: 11, end: 12, variant: "milestone" }],
    },
  ],
  legend: [
    { variant: "prep", label: "Preparation & testing" },
    { variant: "build", label: "Module building" },
    { variant: "milestone", label: "Go-Live Milestone · October 2026" },
  ]
};

export interface AgencyDeliverables {
  phase1: { title: string; items: string[] };
  phase2: { title: string; items: string[] };
}

export interface AgencyData extends TimelineData {
  deliverables: AgencyDeliverables;
  whyDecember: { title: string; text: string };
}

export const agencyData: AgencyData = {
  eyebrow: "OLAP & Dashboarding Track",
  title: "MRAMU · Two-Phase Plan",
  subtitle: "Phase 1 (FDM) runs August–November; Phase 2 (NetSuite) integrated in December when data stabilizes — Go-live March 2027.",
  months: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
  tracks: [
    {
      title: "Foundation & Infra",
      deliverable: "discovery, RBAC, AWS setup (A1–A2)",
      bars: [
        { label: "Infra Setup", start: 1, end: 2, variant: "prep" },
      ],
    },
    {
      title: "S3 & Connectors",
      deliverable: "raw layer + source ingestion (A3a–A3b)",
      bars: [
        { label: "S3 + FDM", start: 1, end: 4, variant: "prep" },
        { label: "★ NetSuite", start: 9, end: 10, variant: "build" },
      ],
    },
    {
      title: "Scheduling & Semantic",
      deliverable: "DWH schema, entity resolution (A3c)",
      bars: [
        { label: "Semantic Layer", start: 3, end: 6, variant: "prep" },
        { label: "+ NetSuite", start: 9, end: 14, variant: "build" },
      ],
    },
    {
      title: "Data Quality",
      deliverable: "watchdog, alerting, backfill (A3d)",
      bars: [
        { label: "Data Quality", start: 5, end: 6, variant: "prep" },
      ],
    },
    {
      title: "Dashboards",
      deliverable: "7 pages per Mockup v2 (A4)",
      bars: [
        { label: "Wave 1 (FDM)", start: 5, end: 8, variant: "prep" },
        { label: "Wave 2 (NetSuite)", start: 11, end: 16, variant: "build" },
      ],
    },
    {
      title: "QA, UAT & Go-Live",
      deliverable: "testing, UAT, revision, handover (A5)",
      bars: [
        { label: "QA", start: 7, end: 8, variant: "prep" },
        { label: "QA + Rev + UAT · ★ Go-Live", start: 9, end: 16, variant: "build" },
      ],
    },
  ],
  legend: [
    { variant: "prep", label: "Phase 1 — FDM Data Source" },
    { variant: "build", label: "Phase 2 — NetSuite Integration" },
    { variant: "milestone", label: "Milestones — NetSuite (Dec 2026) · Go-Live (Mar 2027)" },
  ],
  deliverables: {
    phase1: {
      title: "Phase 1 (Aug – Nov 2026 · FDM Source)",
      items: [
        "Executive Dashboard v1",
        "GA Dashboard",
        "Compliance & Legal Dashboard",
        "Data Watchdog"
      ]
    },
    phase2: {
      title: "Phase 2 (Dec 2026 – Q1 2027 · NetSuite)",
      items: [
        "HR Dashboard",
        "Financial Dashboard",
        "Operational & Retail Dashboard",
        "Executive Dashboard enriched"
      ]
    }
  },
  whyDecember: {
    title: "Why December",
    text: "NetSuite ERP soft-launches in September 2026 — we estimate its data won't be reliable enough to build on until December 2026, which is the trigger for Phase 2 kickoff. Phase 1 runs fully on FDM in the meantime, including working out exactly which historical records in FDM are usable, so dashboard delivery doesn't wait on NetSuite maturing. FDM and NetSuite data both land in the same S3 raw layer + RDS warehouse either way — Phase 2 extends the existing pipeline, it doesn't rebuild it."
  }
};
