import {
  BarChart3,
  Clock,
  Compass,
  Database,
  MoreHorizontal,
  PieChart,
  Settings,
  Target,
  TrendingUp,
  TriangleAlert,
  Truck,
  Users,
} from "lucide-react";
import type {
  BenefitItem,
  EarlyWarning,
  KpiTileData,
  SystemCardData,
  TrendPoint,
  UnitBar,
} from "./types";

export const slideNumber = "4";
export const slideTitle = "The Solution: System of Record & Integrated Dashboard";
export const slideSubtitle = "One data. One platform. One truth. Real time.";

export const systemRecordLabel = "Build the Foundation: System of Record";
export const systemRecordSubtitle = "Standardized, reliable, and integrated systems";

export const systemRecordCards: SystemCardData[] = [
  { icon: Database, title: "Finance", subtitle: "NetSuite" },
  { icon: Users, title: "HR", subtitle: "talenta", logoDomain: "talenta.co" },
  { icon: BarChart3, title: "Sales & CRM", subtitle: "(To Be Defined)" },
  { icon: Settings, title: "Operation", subtitle: "(To Be Defined)" },
  { icon: Truck, title: "Supply Chain", subtitle: "(To Be Defined)" },
  { icon: MoreHorizontal, title: "Other Functions", subtitle: "(To Be Defined)" },
];

export const hubLabel = "Data Integration / Middleware";
export const hubPoints = ["One Data Model", "One Standard", "One Truth"];

export const dashboardLabel = "Integrated Performance Dashboard";
export const dashboardSubtitle = "Real-time visibility for Top Management";

export const kpiTiles: KpiTileData[] = [
  { icon: Target, color: "blue", label: "Sales Achievement", value: "102%", note: "vs Target", trend: "up" },
  { icon: TrendingUp, color: "green", label: "ROI Effectiveness", value: "118%", note: "vs Target", trend: "up" },
  { icon: PieChart, color: "purple", label: "OPEX Ratio", value: "21.5%", note: "vs Target", trend: "down" },
  { icon: Database, color: "amber", label: "EBITDA", value: "IDR 86.7 B", note: "YTD" },
];

export const revenueTrend: TrendPoint[] = [
  { month: "Jan", value: 20 },
  { month: "Feb", value: 30 },
  { month: "Mar", value: 28 },
  { month: "Apr", value: 55 },
  { month: "May", value: 50 },
  { month: "Jun", value: 88 },
];

export const npbtTrend: TrendPoint[] = [
  { month: "Jan", value: 1 },
  { month: "Feb", value: 1.8 },
  { month: "Mar", value: 3.2 },
  { month: "Apr", value: 2.6 },
  { month: "May", value: 3.8 },
  { month: "Jun", value: 4.6 },
];

export const topUnits: UnitBar[] = [
  { label: "Unit A", value: 90 },
  { label: "Unit B", value: 72 },
  { label: "Unit C", value: 60 },
  { label: "Unit D", value: 45 },
  { label: "Unit E", value: 38 },
];

export const earlyWarnings: EarlyWarning[] = [
  { text: "OPEX above threshold", detail: "Unit C" },
  { text: "Sales below target", detail: "Unit D" },
  { text: "ROI below target", detail: "Campaign X" },
];

export const benefits: BenefitItem[] = [
  { icon: Clock, color: "navy", title: "Real-Time Monitoring", text: "Live data, always up to date" },
  { icon: Target, color: "navy", title: "Accurate KPI Tracking", text: "Consistent & reliable KPI" },
  { icon: TriangleAlert, color: "amber", title: "Early Warning", text: "Detect issues sooner" },
  { icon: Compass, color: "navy", title: "Faster Decision", text: "Act with confidence" },
  { icon: TrendingUp, color: "navy", title: "Sustainable Growth", text: "Data-driven growth" },
];

export const summaryParts = ["System of Record", "Integrated Dashboard"];
export const summaryResult = "Accurate Insight, Better Decision, Sustainable Growth";
