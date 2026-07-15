import type { Track } from "./types";

export const eyebrow = "Roadmap Implementasi";
export const title = "Rencana 6 Bulan · Mei – Oktober 2026";
export const subtitle =
  "GA, Legal & Compliance sudah berjalan sejak Mei; modul Marketing Budget diinisiasi akhir Juni — semua bermuara ke integrasi & go-live menyeluruh di Oktober.";

export const months = ["Mei", "Jun", "Jul", "Agu", "Sep", "Okt"];

// start/end are in half-month units, 1–12 across the 6 months (inclusive).
export const tracks: Track[] = [
  {
    title: "Master Data & Infrastruktur",
    deliverable: "master data siap pakai",
    bars: [
      { label: "Setup infra", start: 1, end: 1, variant: "prep" },
      { label: "Skema data", start: 2, end: 2, variant: "prep" },
    ],
  },
  {
    title: "General Affairs",
    tag: { text: "sejak Mei", color: "green" },
    deliverable: "register aset + jadwal servis",
    bars: [
      { label: "Asset Inventory & Barcode", start: 1, end: 2, variant: "build" },
      { label: "Maintenance", start: 3, end: 4, variant: "build" },
      { label: "Rental & Sewa", start: 5, end: 6, variant: "build" },
    ],
  },
  {
    title: "Legal & Compliance",
    tag: { text: "sejak Mei", color: "green" },
    deliverable: "repositori kontrak + reminder",
    bars: [
      { label: "Contract Repository", start: 1, end: 2, variant: "build" },
      { label: "Milestone Alerts", start: 3, end: 4, variant: "build" },
      { label: "Compliance Matrix & SOP", start: 5, end: 8, variant: "build" },
    ],
  },
  {
    title: "Marketing Budget",
    tag: { text: "akhir Juni", color: "amber" },
    deliverable: "alur anggaran end-to-end",
    bars: [
      { label: "Budget Plan", start: 4, end: 5, variant: "build" },
      { label: "Magic Link", start: 6, end: 7, variant: "build" },
      { label: "Locking", start: 8, end: 9, variant: "build" },
      { label: "Payment", start: 10, end: 11, variant: "build" },
    ],
  },
  {
    title: "Integrasi, UAT & Migrasi",
    deliverable: "sign-off UAT + data termigrasi",
    bars: [
      { label: "UAT", start: 9, end: 9, variant: "prep" },
      { label: "Migrasi", start: 10, end: 11, variant: "prep" },
    ],
  },
  {
    title: "Go-Live & Adopsi",
    deliverable: "rollout, pelatihan & hypercare",
    bars: [{ label: "★ Go-Live", start: 11, end: 12, variant: "milestone" }],
  },
];

export const legend: { variant: "prep" | "build" | "milestone"; label: string }[] = [
  { variant: "prep", label: "Persiapan & pengujian" },
  { variant: "build", label: "Build modul" },
  { variant: "milestone", label: "Milestone Go-Live · Oktober 2026" },
];
