import {
  BarChart3,
  Calendar,
  Code2,
  Database,
  FileText,
  Folder,
  Globe,
  Package,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Triangle,
  Wallet,
  Wrench,
} from "lucide-react";
import type { LineItem, PanelTotal, SummaryStat } from "./types";

export const headerLabel = "Build vs Buy · Market Comparison & Total Cost";
export const headerTitlePart1 = "10 SaaS Subscriptions";
export const headerTitlePart2 = "vs";
export const headerTitlePart3 = "One Platform";

export const footnote =
  "*Calculations are based on estimated monthly subscription costs. Actual costs may vary depending on needs & usage scale.";

export const saasPanel = {
  label: "If Purchased Separately",
  sublabel: "Market SaaS",
  note: "Example Bundle",
  items: [
    {
      title: "Budget Planning & Approval",
      subtitle: "Monday / Asana Enterprise",
      price: "$300",
      icon: Calendar,
      color: "orange",
      tools: [
        { name: "Monday", domain: "monday.com", url: "https://monday.com" },
        { name: "Asana Enterprise", domain: "asana.com", url: "https://asana.com" },
      ],
    },
    {
      title: "Asset Inventory (GA)",
      subtitle: "Asset Panda",
      price: "$250",
      icon: Package,
      color: "amber",
      tools: [{ name: "Asset Panda", domain: "assetpanda.com", url: "https://www.assetpanda.com" }],
    },
    {
      title: "Preventive Maintenance",
      subtitle: "UpKeep / MaintainX",
      price: "$400",
      icon: Wrench,
      color: "yellow",
      tools: [
        { name: "UpKeep", domain: "upkeep.com", url: "https://upkeep.com" },
        { name: "MaintainX", domain: "getmaintainx.com", url: "https://www.getmaintainx.com" },
      ],
    },
    {
      title: "Contract Lifecycle (Legal)",
      subtitle: "Concord / DocuSign CLM",
      price: "$500",
      icon: FileText,
      color: "purple",
      tools: [
        { name: "Concord", domain: "concord.app", url: "https://www.concord.app" },
        { name: "DocuSign CLM", domain: "docusign.com", url: "https://www.docusign.com" },
      ],
    },
    {
      title: "Compliance Management",
      subtitle: "VComply / AuditBoard",
      price: "$400",
      icon: ShieldCheck,
      color: "green",
      tools: [
        { name: "VComply", domain: "v-comply.com", url: "https://www.v-comply.com" },
        { name: "AuditBoard", domain: "auditboard.com", url: "https://auditboard.com" },
      ],
    },
    {
      title: "SOP Repository",
      subtitle: "Confluence / Process Street",
      price: "$150",
      icon: Folder,
      color: "blue",
      tools: [
        { name: "Confluence", domain: "atlassian.com", url: "https://www.atlassian.com/software/confluence" },
        { name: "Process Street", domain: "process.st", url: "https://www.process.st" },
      ],
    },
    {
      title: "Reporting & Dashboard",
      subtitle: "Power BI / Tableau",
      price: "$120",
      icon: BarChart3,
      color: "teal",
      tools: [
        { name: "Power BI", domain: "powerbi.microsoft.com", url: "https://powerbi.microsoft.com" },
        { name: "Tableau", domain: "tableau.com", url: "https://www.tableau.com" },
      ],
    },
  ] satisfies LineItem[],
  total: { price: "± $2,053 /mo", note: "≈ Rp 34 million / month" } satisfies PanelTotal,
};

export const platformPanel = {
  label: "MRA Hub",
  sublabel: "One Platform",
  badge: "Recommended",
  items: [
    {
      title: "Supabase Pro",
      subtitle: "database & auth",
      price: "$25",
      icon: Database,
      color: "green",
      tools: [{ name: "Supabase", domain: "supabase.com", url: "https://supabase.com" }],
    },
    {
      title: "Vercel Pro",
      subtitle: "hosting & deploy",
      price: "$20",
      icon: Triangle,
      color: "green",
      tools: [{ name: "Vercel", domain: "vercel.com", url: "https://vercel.com" }],
    },
    {
      title: "Claude",
      subtitle: "AI development",
      price: "$20",
      icon: Code2,
      color: "green",
      tools: [{ name: "Claude", domain: "claude.ai", url: "https://claude.ai" }],
    },
    {
      title: "Domain",
      subtitle: "mrahub.id",
      price: "$2",
      icon: Globe,
      color: "green",
      tools: [{ name: "MRA Hub", domain: "mrahub.id", url: "https://mrahub.id" }],
    },
  ] satisfies LineItem[],
  bullets: [
    "All 10 functions above in one platform & one master data",
    "No per-user fees — add users freely",
    "Full ownership of code & data, fully customizable",
  ],
  total: { price: "$67 /mo · flat", note: "≈ Rp 1.1 million / month" } satisfies PanelTotal,
};

export const summaryStats: SummaryStat[] = [
  { icon: TrendingDown, value: "± 96.84%", label: "lower than separate SaaS" },
  { icon: Wallet, value: "± $2,050", label: "cost difference per month" },
  { icon: TrendingUp, value: "± $24,636 /yr", label: "annual savings ≈ Rp 400 million" },
];
