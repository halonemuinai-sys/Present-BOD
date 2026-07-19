import type { ComparisonColumn, SystemBoxData } from "./types";

export const slideNumber = "11";
export const slideLabel = "Solusi yang Diusulkan";
export const slideTitle = "Bukan Dashboard Duplikat, Melainkan Lapisan Konsolidasi";
export const slideSubtitle =
  "Sistem yang sudah berjalan tetap digunakan untuk operasional harian. Yang dikembangkan adalah satu strategic view tambahan yang menyatukan seluruh sistem tersebut untuk Board.";

export const sourceSystems: SystemBoxData[] = [
  { title: "NetSuite (Finance)" },
  { title: "Talenta (HR)" },
  { title: "SaaS GA / Legal" },
  { title: "SaaS Marketing / Ops" },
];

export const currentColumn: ComparisonColumn = {
  label: "Sistem Saat Ini",
  title: "System of Record",
  subtitle: "Per sumber data, untuk tim operasional",
  accent: "amber",
  steps: ["4–6 Dashboard Terpisah, Per Fungsi"],
  bullets: [
    "Single-domain, single-entity",
    "KPI mengikuti standar vendor masing-masing",
    "Tidak otomatis terkonsolidasi antar BU",
    "Penambahan fitur/kustomisasi = biaya tambahan ke vendor",
    "Hanya menampilkan present value (snapshot saat ini)",
  ],
};

export const proposedColumn: ComparisonColumn = {
  label: "Solusi yang Dibangun",
  title: "System of Insight",
  subtitle: "Konsolidasi lintas fungsi & BU, untuk Board/C-Level",
  accent: "green",
  steps: ["Data Warehouse (ETL/ELT)", "Executive Dashboard + AI Analytics"],
  bullets: [
    "Satu definisi KPI, apple-to-apple antar BU",
    "Korelasi lintas fungsi, misalnya cost HR vs margin BU",
    "Forecasting & anomaly detection otomatis",
    "Dikembangkan in-house, tanpa biaya tambahan ke vendor luar",
    "Mengakomodir past (tren historis) & future (forecast), bukan cuma present",
  ],
};
