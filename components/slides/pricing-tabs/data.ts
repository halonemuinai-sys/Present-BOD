import {
  Compass,
  Database,
  LayoutDashboard,
  LayoutGrid,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import type { CompositionRow, GrandTotal, PricingSection, Tab } from "./types";

export const meta = {
  eyebrow: "Scope & Cost Overview — Internal",
  title: "MRA Analytics Platform",
  subtitle: "Centralized data & analytics infrastructure — HR, Finance & Operations",
  preparedFor: "MRA Group",
  preparedBy: "MRAMU",
  date: "June 2026",
  currency: "IDR",
  duration: "6–12 months",
  status: "For internal review",
  footnote: "Milestone payments available · All prices before PPN (11%)",
};

export const tabs: Tab[] = [
  { id: "overview", label: "Overview", icon: LayoutGrid },
  { id: "foundation", label: "Foundation", icon: Compass },
  { id: "data", label: "Data & ETL", icon: Database },
  { id: "dashboards", label: "Dashboards & AI", icon: LayoutDashboard },
  { id: "qa", label: "QA & Delivery", icon: ShieldCheck },
  { id: "recurring", label: "Recurring Costs", icon: RefreshCw },
];

export const grandFixedTotal = "Rp 257.500.000";
export const grandRecurringTotal = "Rp 24.642.000 /yr";

export const composition: CompositionRow[] = [
  { section: "A1", description: "Discovery & Architecture", price: "Rp 17.000.000", percent: 6.6 },
  { section: "A2", description: "Core Platform Engineering (incl. AWS Secrets Mgr)", price: "Rp 50.000.000", percent: 19.42 },
  { section: "A3a", description: "S3 Raw Data Layer Setup", price: "Rp 18.000.000", percent: 6.99 },
  { section: "A3b", description: "Source Connectors (Talenta HR + NetSuite ERP)", price: "Rp 15.000.000", percent: 5.83 },
  { section: "A3c", description: "Scheduling + Semantic Layer + Entity Resolution", price: "Rp 42.300.000", percent: 16.43 },
  { section: "A3d", description: "Data Quality + Alerting + Backfill + Staging", price: "Rp 31.000.000", percent: 12.04 },
  { section: "A4", description: "Dashboard Development — 7 dashboards per Mockup v2", price: "Rp 65.700.000", percent: 25.51 },
  { section: "A4-AI", description: "AI Insight Engine", price: "Rp 5.000.000", percent: 1.94 },
  { section: "A5", description: "Testing, QA & Delivery", price: "Rp 13.500.000", percent: 5.24 },
];

export const foundationSections: PricingSection[] = [
  {
    id: "A1",
    title: "A1 · Discovery & Architecture",
    items: [
      { number: 1, deliverable: "Discovery & Requirements Workshop", price: "Rp 5.000.000" },
      { number: 2, deliverable: "System Architecture Design", price: "Rp 7.000.000" },
      { number: 3, deliverable: "UI/UX Implementation of Mockup v2", price: "Rp 5.000.000" },
    ],
    subtotalLabel: "Subtotal A1",
    subtotalPrice: "Rp 17.000.000",
  },
  {
    id: "A2",
    title: "A2 · Core Platform Engineering",
    items: [
      { number: 4, deliverable: "Authentication & Session Management", price: "Rp 10.000.000" },
      { number: 5, deliverable: "RBAC System", price: "Rp 15.000.000" },
      { number: 6, deliverable: "Infrastructure Setup", price: "Rp 15.000.000" },
      { number: 7, deliverable: "AWS Secrets Manager", price: "Rp 5.000.000" },
      { number: 8, deliverable: "Base API Framework", price: "Rp 5.000.000" },
    ],
    subtotalLabel: "Subtotal A2",
    subtotalPrice: "Rp 50.000.000",
  },
];

export const dataSections: PricingSection[] = [
  {
    id: "A3a",
    title: "A3a · S3 Raw Data Layer (One-Time Setup)",
    items: [
      { number: 9, deliverable: "S3 Bucket Architecture", price: "Rp 7.200.000" },
      { number: 10, deliverable: "IAM & Access Policy", price: "Rp 4.500.000" },
      { number: 11, deliverable: "Raw Data Schema & Format Standard", price: "Rp 6.300.000" },
    ],
    subtotalLabel: "Subtotal A3a",
    subtotalPrice: "Rp 18.000.000",
  },
  {
    id: "A3b",
    title: "A3b · Source Connectors (Per Data Source)",
    items: [
      { number: 12, deliverable: "Talenta HR (Mekari)", price: "Rp 5.000.000" },
      { number: 13, deliverable: "NetSuite ERP (Oracle)", price: "Rp 10.000.000" },
    ],
    subtotalLabel: "Subtotal A3b — 2 Core Connectors",
    subtotalPrice: "Rp 15.000.000",
  },
  {
    id: "A3c",
    title: "A3c · Scheduling, Semantic Layer & Entity Resolution",
    items: [
      { number: 16, deliverable: "Data Scheduling System", price: "Rp 18.000.000" },
      { number: 17, deliverable: "DWH Schema & Semantic Layer", price: "Rp 13.500.000" },
      { number: 18, deliverable: "Cross-Source Entity Resolution", price: "Rp 10.800.000" },
    ],
    subtotalLabel: "Subtotal A3c",
    subtotalPrice: "Rp 42.300.000",
  },
  {
    id: "A3d",
    title: "A3d · Data Quality, Alerting & Infrastructure",
    items: [
      { number: 19, deliverable: "Data Quality Watchdog Backend", price: "Rp 10.000.000" },
      { number: 20, deliverable: "Notification & Alerting Delivery", price: "Rp 6.000.000" },
      { number: 21, deliverable: "Historical Data Backfill", price: "Rp 10.000.000" },
      { number: 22, deliverable: "Staging Environment Setup", price: "Rp 5.000.000" },
    ],
    subtotalLabel: "Subtotal A3d",
    subtotalPrice: "Rp 31.000.000",
  },
];

export const dataGrandTotal: GrandTotal = {
  label: "A3 TOTAL — ETL Pipeline & Data Integration",
  price: "Rp 106.300.000",
};

export const dashboardSections: PricingSection[] = [
  {
    id: "A4",
    title: "A4 · Dashboard Development — MRA Executive Workspace (per Mockup v2)",
    items: [
      { number: 23, deliverable: "Executive Dashboard [Leadership · Board]", price: "Rp 13.500.000" },
      { number: 24, deliverable: "Financial Dashboard [Finance · CFO]", price: "Rp 13.500.000" },
      { number: 25, deliverable: "HR Dashboard [People · CHRO]", price: "Rp 9.000.000" },
      { number: 26, deliverable: "Operational & Ritel Dashboard [Operations · COO]", price: "Rp 9.000.000" },
      { number: 27, deliverable: "GA Dashboard [General Affairs]", price: "Rp 7.200.000" },
      { number: 28, deliverable: "Compliance & Legal Dashboard [Compliance · Legal · Audit]", price: "Rp 7.200.000" },
      { number: 29, deliverable: "Data Watchdog [Data Quality · Ops]", price: "Rp 6.300.000" },
    ],
    subtotalLabel: "Subtotal A4 — 7 dashboards",
    subtotalPrice: "Rp 65.700.000",
  },
  {
    id: "A4-AI",
    title: "A4-AI · AI Insight Engine",
    items: [{ number: 30, deliverable: "AI Insight Engine", price: "Rp 5.000.000" }],
    subtotalLabel: "Subtotal A4-AI",
    subtotalPrice: "Rp 5.000.000",
  },
];

export const dashboardGrandTotal: GrandTotal = {
  label: "A4 TOTAL — Dashboard Development (7 dashboards + AI Insight Engine)",
  price: "Rp 70.700.000",
};

export const qaSections: PricingSection[] = [
  {
    id: "A5",
    title: "A5 · Testing, QA & Delivery",
    items: [{ number: 31, deliverable: "QA Security + UAT + Delivery", price: "Rp 13.500.000" }],
    subtotalLabel: "Subtotal A5",
    subtotalPrice: "Rp 13.500.000",
  },
];

export const recurringItems = [
  { code: "B1", title: "AWS Server (Standard tier)", annual: "Rp 13.392.000", percent: 54.3, monthly: "Rp 1.116.000/mo", detail: "Lightsail $12 + RDS prod $15 + S3 $3 + NAT Gateway $32" },
  { code: "B2", title: "Domain + SSL", annual: "Rp 250.000", percent: 1.0, monthly: "Rp 250.000/yr", detail: ".com domain (1 yr) · SSL (Let's Encrypt via Caddy) — Free" },
  { code: "B3", title: "Maintenance Fees (Basic, 8h/mo)", annual: "Rp 6.000.000", percent: 24.3, monthly: "Rp 500.000/mo", detail: "8 hrs/month — bug fixes, uptime monitoring · Response SLA 48h" },
  { code: "B4", title: "AI Insight Engine (Claude Sonnet 4.6)", annual: "Rp 5.000.000", percent: 20.3, monthly: "Rp 416.667/mo", detail: "New vertical, 3rd-party API, fine-tuning" },
];

export const recurringNotes = [
  "All prices quoted in Indonesian Rupiah (IDR), exclusive of PPN (11%).",
  "Estimated project duration: 6–12 months, milestone-based payments available.",
  "Historical data backfill beyond 2 years is billed at Rp 5.000.000/year/source.",
];
