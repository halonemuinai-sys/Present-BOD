import {
  BellRing,
  Calendar,
  Database,
  FolderOpen,
  Gavel,
  Handshake,
  Link2,
  ShieldCheck,
  Timer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const legalTitle = "Legal Management";
export const legalSubtitle = "Centralized Record-Keeping & Automated Reminders for Stronger Legal Control";

export type LegalColumn = {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  valueIcon: LucideIcon;
  valueText: string;
};

export const legalColumns: LegalColumn[] = [
  {
    number: 1,
    title: "Centralized Record-Keeping",
    subtitle: "(Record-Keeping)",
    description: "Logs and stores all corporate deeds, business contracts, and court case files in a single digital database.",
    valueIcon: ShieldCheck,
    valueText: "Replaces scattered physical contracts with a secure, searchable history of all company legal agreements.",
  },
  {
    number: 2,
    title: "Automated Reminder System",
    subtitle: "(Reminder System)",
    description: "Automatically tracks contract end dates and sends email/dashboard alerts before the contracts expire.",
    valueIcon: Timer,
    valueText: "Prevents unwanted automatic renewals and ensures important business partnerships are renegotiated on time.",
  },
];

export const legalStats: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: FolderOpen, value: "12", label: "Corporate Deeds" },
  { icon: Handshake, value: "187", label: "Contracts" },
  { icon: Gavel, value: "24", label: "Litigation Cases" },
  { icon: Database, value: "223", label: "Total Documents" },
];

export type ContractStatus = "Active" | "Expiring" | "Overdue";

export type ContractRow = { name: string; party: string; endDate: string; status: ContractStatus };

export const recentContracts: ContractRow[] = [
  { name: "Office Lease HQ", party: "PT. MRA Property", endDate: "31 Dec 2025", status: "Active" },
  { name: "Vendor Agreement", party: "PT. ABC Solutions", endDate: "14 Mar 2026", status: "Active" },
  { name: "Distributor Agreement", party: "PT. XYZ Indonesia", endDate: "31 Jul 2025", status: "Active" },
  { name: "NDA – Confidentiality", party: "PT. Tech Partner", endDate: "09 Apr 2025", status: "Expiring" },
  { name: "Service Agreement", party: "PT. MNO Services", endDate: "19 May 2026", status: "Active" },
];

export const expiryTimeline = ["90 Days Before", "60 Days Before", "30 Days Before", "Expired (Overdue)"];

export type UpcomingExpiry = { name: string; party: string; endDate: string; badge: string };

export const upcomingExpiry: UpcomingExpiry[] = [
  { name: "Office Lease HQ", party: "PT. MRA Property", endDate: "31 Dec 2025", badge: "90 Days" },
  { name: "Vendor Agreement", party: "PT. ABC Solutions", endDate: "14 Mar 2026", badge: "60 Days" },
  { name: "Distributor Agreement", party: "PT. XYZ Indonesia", endDate: "31 Jul 2025", badge: "30 Days" },
  { name: "NDA – Confidentiality", party: "PT. Tech Partner", endDate: "09 Apr 2025", badge: "Overdue" },
];

export const emailReminder = {
  subject: "Contract Expiring Soon",
  to: "legal@yourcompany.com",
  fields: [
    { label: "Contract Name", value: "Vendor Agreement" },
    { label: "Party", value: "PT. ABC Solutions" },
    { label: "End Date", value: "14 March 2026" },
    { label: "Days Left", value: "30 Days" },
  ],
  cta: "View Contract Details",
  note: "This link is valid for 7 days.",
};

export type HowItWorksStep = { icon: LucideIcon; title: string; text: string; badge?: string };

export const howItWorks: HowItWorksStep[] = [
  { icon: Database, title: "Record", text: "All legal documents are uploaded and stored in one secure database." },
  { icon: Calendar, title: "Track", text: "System tracks key dates and expiration automatically." },
  {
    icon: BellRing,
    title: "Remind",
    text: "Email & dashboard alerts are sent at 90, 60, and 30 days before expiration.",
    badge: "1",
  },
  { icon: Link2, title: "Action", text: "User clicks the link to open the contract detail page and take action." },
  { icon: ShieldCheck, title: "Control", text: "Contracts are renewed on time and risk of legal issues is avoided." },
];

export const resultLabel = "Result";
export const resultItems = [
  "Complete Legal Visibility",
  "Timely Renewal & Negotiation",
  "Reduce Legal Risk",
  "Stronger Business Protection",
];
