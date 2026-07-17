import {
  AlertTriangle,
  BarChart3,
  Building2,
  Calendar,
  Car,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Eye,
  FileCheck,
  FileText,
  Fuel,
  Laptop,
  Monitor,
  Package,
  Printer,
  QrCode,
  RefreshCw,
  Scale,
  ScanLine,
  ShieldCheck,
  Star,
  Target,
  Timer,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type GaFeature = { icon: LucideIcon; label: string };

export type GaCard = {
  number: number;
  title: string;
  icon: LucideIcon;
  features: GaFeature[];
  valueIcon: LucideIcon;
  valueText: string;
};

export const gaTitle = "General Affairs Management Platform";
export const gaSubtitle = "One Platform for Asset, Facility & Operational Management";

export const gaCards: GaCard[] = [
  {
    number: 1,
    title: "Asset Management",
    icon: Monitor,
    features: [
      { icon: Package, label: "Fixed Asset Inventory" },
      { icon: QrCode, label: "Asset Tagging (QR Code)" },
      { icon: Laptop, label: "IT Hardware Rental" },
      { icon: Printer, label: "Printer & Device Rental" },
      { icon: RefreshCw, label: "Asset Ownership Tracking" },
    ],
    valueIcon: BarChart3,
    valueText: "Asset Visibility & Lifecycle Control",
  },
  {
    number: 2,
    title: "Stock Opname & Audit",
    icon: QrCode,
    features: [
      { icon: ScanLine, label: "QR / Barcode Scanner" },
      { icon: ClipboardList, label: "Stock Opname" },
      { icon: FileCheck, label: "Asset Reconciliation" },
      { icon: AlertTriangle, label: "Missing Asset Detection" },
    ],
    valueIcon: Target,
    valueText: "Faster Audit & Reduce Human Error",
  },
  {
    number: 3,
    title: "Maintenance Management",
    icon: Wrench,
    features: [
      { icon: Wrench, label: "Preventive Maintenance" },
      { icon: Calendar, label: "Maintenance Scheduler" },
      { icon: Wallet, label: "Maintenance Cost Tracking" },
      { icon: ClipboardCheck, label: "Work Order Management" },
    ],
    valueIcon: TrendingUp,
    valueText: "Reduce Downtime & Cost Efficiency",
  },
  {
    number: 4,
    title: "Compliance & Risk Management",
    icon: ShieldCheck,
    features: [
      { icon: ShieldCheck, label: "Insurance Tracking" },
      { icon: FileText, label: "Permit Monitoring" },
      { icon: FileText, label: "Contract Management" },
      { icon: Timer, label: "Expiration Reminder" },
    ],
    valueIcon: ShieldCheck,
    valueText: "Compliance Assurance & Risk Reduction",
  },
  {
    number: 5,
    title: "Fleet Management",
    icon: Car,
    features: [
      { icon: Car, label: "Vehicle Registry" },
      { icon: ClipboardList, label: "Service Schedule" },
      { icon: FileText, label: "STNK & Tax Tracking" },
      { icon: Fuel, label: "Fuel Monitoring" },
    ],
    valueIcon: Car,
    valueText: "Operational Readiness & Fleet Optimization",
  },
  {
    number: 6,
    title: "Vendor Management",
    icon: Building2,
    features: [
      { icon: Building2, label: "Vendor Directory" },
      { icon: Scale, label: "Vendor Scorecard" },
      { icon: Scale, label: "Cost Benchmark" },
      { icon: CheckCircle2, label: "Contract Evaluation" },
    ],
    valueIcon: Star,
    valueText: "Better Negotiation & Data-Driven Procurement",
  },
];

export type BusinessImpactItem = { icon: LucideIcon; title: string; text: string };

export const businessImpactLabel = "Business Impact";

export const businessImpact: BusinessImpactItem[] = [
  { icon: Eye, title: "Visibility", text: "Real-time visibility of assets & operations" },
  { icon: ShieldCheck, title: "Control", text: "Stronger control & accountability" },
  { icon: BarChart3, title: "Efficiency", text: "Improve operational efficiency" },
  { icon: TrendingDown, title: "Cost Saving", text: "Reduce cost through better management" },
  { icon: ShieldCheck, title: "Compliance", text: "Ensure compliance & minimize risk" },
  { icon: Users, title: "Governance", text: "Better governance & decision making" },
];
