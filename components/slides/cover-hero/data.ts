import {
  Brain,
  Database,
  FileText,
  Megaphone,
  Network,
  PieChart,
  ShieldCheck,
  TrendingUp,
  Users,
  BarChart3,
  Wallet,
  ShoppingCart,
  Package,
  Building2,
  ClipboardList,
  FolderOpen,
} from "lucide-react";
import type { Band, ChainItem } from "./types";

// Top -> bottom, matching the reading order in the reference visual.
export const bands: Band[] = [
  {
    color: "green",
    number: "03",
    title: "System of Intelligence",
    items: [
      { icon: BarChart3, label: "Executive Dashboard" },
      { icon: PieChart, label: "Analytics & Reporting" },
      { icon: Brain, label: "AI Insight Engine" },
      { icon: Database, label: "Data Warehouse & Big Data" },
    ],
  },
  {
    color: "blue",
    number: "02",
    title: "System of Engagement",
    items: [
      { icon: Users, label: "General Affairs" },
      { icon: FileText, label: "Legal" },
      { icon: ShieldCheck, label: "Compliance" },
      { icon: Megaphone, label: "Marketing" },
      { icon: Network, label: "Workflow & Approval" },
      { icon: FolderOpen, label: "Document Management" },
    ],
  },
  {
    color: "dark",
    number: "01",
    title: "System of Record",
    brand: "NetSuite",
    items: [
      { icon: Wallet, label: "Finance & Accounting" },
      { icon: ShoppingCart, label: "Procurement" },
      { icon: Package, label: "Inventory" },
      { icon: Building2, label: "Fixed Asset" },
      { icon: ClipboardList, label: "Projects" },
    ],
  },
];

export const chain: ChainItem[] = [
  { icon: Database, text: "NetSuite remains the", highlight: "System of Record", color: "dark" },
  { icon: Users, text: "Enterprise Operations Platform becomes the", highlight: "System of Engagement", color: "blue" },
  { icon: TrendingUp, text: "Enterprise Data Platform becomes the", highlight: "System of Intelligence", color: "green" },
];
