import {
  BarChart3,
  Brain,
  Briefcase,
  Building2,
  Cloud,
  Database,
  DollarSign,
  FileSpreadsheet,
  Landmark,
  Lightbulb,
  LineChart,
  ListChecks,
  PieChart,
  Plug,
  RefreshCw,
  Settings,
  ShieldCheck,
  Target,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import type { ImpactStep, ItemCardData, SmallItem } from "./types";

export const dataSourceItems: ItemCardData[] = [
  { icon: Briefcase, title: "Retailsoft", subtitle: "POS & Retail Data" },
  { icon: Landmark, title: "Netsuite", subtitle: "ERP & Finance Data" },
  { icon: Building2, title: "Enterprise Operations Platform", subtitle: "Operations & Workflow Data", isInHouse: true },
  { icon: Users, title: "Talenta", subtitle: "HR & Employee Data" },
  { icon: FileSpreadsheet, title: "Raw Data", subtitle: "Files / Spreadsheets / Unstructured Data" },
  { icon: Database, title: "Other Database", subtitle: "Internal / External Database" },
];

export const middlewareItems: ItemCardData[] = [
  { icon: Cloud, title: "API Gateway", subtitle: "& Connectors" },
  { icon: RefreshCw, title: "ETL / ELT Engine", subtitle: "(Extract, Transform, Load)" },
  { icon: ListChecks, title: "Data Validation & Quality", subtitle: "(Cleaning, Standardization, Deduplication)" },
  { icon: Settings, title: "Business Rules & Workflow Engine", subtitle: "(Automation & Orchestration)" },
  { icon: Database, title: "Master Data Management", subtitle: "(MDM)" },
];

export const warehouseChecklist = ["Consistent", "Scalable", "Reliable", "Secure"];

export const analyticsItems: ItemCardData[] = [
  { icon: BarChart3, title: "Performance Overview", subtitle: "Track KPI & Overall Performance" },
  { icon: LineChart, title: "Sales Trend Analysis", subtitle: "Growth & Trend Monitoring" },
  { icon: Building2, title: "Business Unit Performance", subtitle: "Revenue by Brand, Company, Channel" },
  { icon: PieChart, title: "Cost Analysis", subtitle: "OPEX, CAPEX, Budget Utilization" },
  { icon: Target, title: "Predictive Insights", subtitle: "Forecasting & Scenario Analysis" },
];

export const consumerItems: SmallItem[] = [
  { icon: Users, label: "Executive / Leadership" },
  { icon: BarChart3, label: "Finance Team" },
  { icon: User, label: "Operational Team" },
  { icon: TrendingUp, label: "Analytics Team" },
  { icon: Plug, label: "External System" },
  { icon: Brain, label: "AI / Automation" },
];

export const impactChain: ImpactStep[] = [
  { icon: Lightbulb, label: "Actionable Insight", modalId: "actionable-insight" },
  { icon: Target, label: "Better Decision", modalId: "better-decision" },
  { icon: DollarSign, label: "Cost Impact", modalId: "cost-impact" },
  { icon: TrendingUp, label: "Business Growth", modalId: "business-growth" },
];

export const warehouseIcon = ShieldCheck;
