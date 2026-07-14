import type { LineItem, PanelTotal, SummaryStat } from "./types";

export const headerLabel = "Build vs Buy · Padanan Pasar & Total Biaya";
export const headerTitle = "10 Langganan SaaS vs Satu Platform";

export const saasPanel = {
  label: "Jika Dibeli Terpisah · SaaS Pasar",
  note: "contoh bundle",
  items: [
    {
      title: "Budget Planning & Approval",
      subtitle: "Monday / Asana Enterprise",
      price: "$300",
      tools: [
        { name: "Monday", domain: "monday.com", url: "https://monday.com" },
        { name: "Asana Enterprise", domain: "asana.com", url: "https://asana.com" },
      ],
    },
    {
      title: "Asset Inventory (GA)",
      subtitle: "Asset Panda",
      price: "$250",
      tools: [{ name: "Asset Panda", domain: "assetpanda.com", url: "https://www.assetpanda.com" }],
    },
    {
      title: "Preventive Maintenance",
      subtitle: "UpKeep / MaintainX",
      price: "$400",
      tools: [
        { name: "UpKeep", domain: "upkeep.com", url: "https://upkeep.com" },
        { name: "MaintainX", domain: "getmaintainx.com", url: "https://www.getmaintainx.com" },
      ],
    },
    {
      title: "Contract Lifecycle (Legal)",
      subtitle: "Concord / DocuSign CLM",
      price: "$500",
      tools: [
        { name: "Concord", domain: "concord.app", url: "https://www.concord.app" },
        { name: "DocuSign CLM", domain: "docusign.com", url: "https://www.docusign.com" },
      ],
    },
    {
      title: "Compliance Management",
      subtitle: "VComply / AuditBoard",
      price: "$400",
      tools: [
        { name: "VComply", domain: "v-comply.com", url: "https://www.v-comply.com" },
        { name: "AuditBoard", domain: "auditboard.com", url: "https://auditboard.com" },
      ],
    },
    {
      title: "SOP Repository",
      subtitle: "Confluence / Process Street",
      price: "$150",
      tools: [
        { name: "Confluence", domain: "atlassian.com", url: "https://www.atlassian.com/software/confluence" },
        { name: "Process Street", domain: "process.st", url: "https://www.process.st" },
      ],
    },
    {
      title: "Reporting & Dashboard",
      subtitle: "Power BI / Tableau",
      price: "$120",
      tools: [
        { name: "Power BI", domain: "powerbi.microsoft.com", url: "https://powerbi.microsoft.com" },
        { name: "Tableau", domain: "tableau.com", url: "https://www.tableau.com" },
      ],
    },
  ] satisfies LineItem[],
  total: { price: "± $2.053 /bln", note: "≈ Rp 34 juta / bulan" } satisfies PanelTotal,
};

export const platformPanel = {
  label: "MRA Hub · Satu Platform",
  badge: "Rekomendasi",
  items: [
    {
      title: "Supabase Pro",
      subtitle: "database & auth",
      price: "$25",
      tools: [{ name: "Supabase", domain: "supabase.com", url: "https://supabase.com" }],
    },
    {
      title: "Vercel Pro",
      subtitle: "hosting & deploy",
      price: "$20",
      tools: [{ name: "Vercel", domain: "vercel.com", url: "https://vercel.com" }],
    },
    {
      title: "Claude",
      subtitle: "AI development",
      price: "$20",
      tools: [{ name: "Claude", domain: "claude.ai", url: "https://claude.ai" }],
    },
    {
      title: "Domain",
      subtitle: "mrahub.id",
      price: "$2",
      tools: [{ name: "MRA Hub", domain: "mrahub.id", url: "https://mrahub.id" }],
    },
  ] satisfies LineItem[],
  bullets: [
    "10 fungsi di atas dalam satu platform & satu master data",
    "Tanpa biaya per-user — bebas tambah pengguna",
    "Kepemilikan penuh kode & data, bebas kustomisasi",
  ],
  total: { price: "$67 /bln · flat", note: "≈ Rp 1,1 juta / bulan" } satisfies PanelTotal,
};

export const summaryStats: SummaryStat[] = [
  { value: "± 96,84%", label: "lebih rendah dari SaaS terpisah" },
  { value: "± $2.050", label: "selisih biaya per bulan" },
  { value: "± $24.636 /thn", label: "hemat tahunan ≈ Rp 400 juta" },
];
