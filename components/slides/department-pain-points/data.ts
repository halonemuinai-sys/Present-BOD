import {
  Archive,
  Bell,
  Clock,
  Eye,
  FileSpreadsheet,
  FileText,
  Folder,
  Home,
  Lightbulb,
  Mail,
  Megaphone,
  Scale,
  Shield,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import type { Department, HighlightCardData, InsightData } from "./types";

export const highlightCards: HighlightCardData[] = [
  { icon: Clock, color: "green", title: "Slow & Inefficient", text: "Time-consuming manual processes" },
  { icon: Shield, color: "blue", title: "High Risk", text: "Compliance & legal risks" },
  { icon: FileText, color: "purple", title: "Siloed Data", text: "Hard to track & inaccurate data" },
  { icon: TrendingUp, color: "orange", title: "Uncontrolled Costs", text: "Duplication & low budget visibility" },
];

export const departments: Department[] = [
  {
    number: "01",
    color: "green",
    icon: Home,
    deptLabel: "General Affairs",
    title: "Manual Asset & Maintenance Management",
    painPoints: [
      "Asset tracking is still Excel-based",
      "Hard to monitor & alert leasing/contracts system-wide",
      "No integration between teams",
    ],
    examples: [
      { icon: FileSpreadsheet, label: "Excel" },
      { icon: FileText, label: "Manual Logs" },
    ],
    remark: "Development Adjustment",
    modalId: "general-affairs",
  },
  {
    number: "02",
    color: "blue",
    icon: Scale,
    deptLabel: "Legal",
    title: "Decentralized Document Management",
    painPoints: [
      "Siloed document storage spaces",
      "Uncontrolled document versioning",
      "Time-consuming document retrieval",
    ],
    examples: [
      { icon: Folder, label: "Local Folders" },
      { icon: Archive, label: "Filing Cabinets" },
    ],
    remark: "In Development",
  },
  {
    number: "03",
    color: "purple",
    icon: ShieldCheck,
    deptLabel: "Compliance",
    title: "Reactive Compliance",
    painPoints: [
      "Manual, non-real-time monitoring",
      "High risk of fines & penalties",
      "Lack of automated notifications & alerts",
    ],
    examples: [
      { icon: Eye, label: "Manual Audits" },
      { icon: Bell, label: "Reactive Approach" },
    ],
    remark: "In Development",
  },
  {
    number: "04",
    color: "orange",
    icon: Megaphone,
    deptLabel: "Marketing",
    title: "Limited Budget Visibility",
    painPoints: [
      "No system for planning, budget requests & realization — all via email & Excel",
      "Realization documentation restricted to DocHub",
      "Approval workflows are opaque",
    ],
    examples: [
      { icon: Mail, label: "Email" },
      { icon: FileSpreadsheet, label: "Excel" },
      { icon: FileText, label: "DocHub" },
    ],
    remark: "In Research",
    modalId: "marketing-platform",
  },
];

export const insights: InsightData[] = [
  {
    icon: Lightbulb,
    title: "Business Impact",
    text: "Slow processes increase risks and make decision-making difficult due to inaccurate, non-real-time data.",
  },
  {
    icon: Target,
    title: "Required Solution",
    text: "An integrated platform to unify processes, data, and visibility.",
  },
];
