import {
  Bell,
  BellRing,
  Calendar,
  Database,
  Link2,
  Send,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const complianceTitle = "Compliance Management";
export const complianceSubtitle = "Record-keeping & Reminder System that Protects Your Business";

export type ComplianceColumn = {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  valueIcon: LucideIcon;
  valueText: string;
};

export const complianceColumns: ComplianceColumn[] = [
  {
    number: 1,
    title: "Centralized Compliance Registry",
    subtitle: "(Record-keeping)",
    description: "Logs every license, permit, tax deadline, and SOP audit in one secure database.",
    valueIcon: Database,
    valueText: "Eliminates scattered paperwork and prevents losing critical documents when staff members change.",
  },
  {
    number: 2,
    title: "Auto-Renewal Alerts",
    subtitle: "(Reminder System)",
    description: "Monitors expiration dates and automatically triggers email and dashboard alerts at set intervals.",
    valueIcon: Bell,
    valueText: "Guarantees the team has enough time to renew permits, preventing legal fines or business shutdowns.",
  },
  {
    number: 3,
    title: "Actionable Reminders",
    subtitle: "(Direct Link Notifications)",
    description: "Sends email reminders with “Magic Links” that open the exact document's detail page directly.",
    valueIcon: Send,
    valueText: "Saves time by directing the responsible team member straight to the renewal page with one click.",
  },
];

export type RegistryRow = { type: string; validUntil: string; status: string };

export const registryRows: RegistryRow[] = [
  { type: "Business License", validUntil: "31 Dec 2025", status: "Active" },
  { type: "Building Permit", validUntil: "14 Feb 2026", status: "Active" },
  { type: "Tax Registration", validUntil: "31 Dec 2025", status: "Active" },
  { type: "SOP Audit", validUntil: "10 Mar 2025", status: "Active" },
  { type: "Food Safety Cert.", validUntil: "04 Apr 2025", status: "Active" },
];

export type ReminderTone = "ok" | "warn" | "danger";

export const reminderTimeline: { label: string; tone: ReminderTone }[] = [
  { label: "90 Days Before", tone: "ok" },
  { label: "60 Days Before", tone: "ok" },
  { label: "30 Days Before", tone: "warn" },
  { label: "Expired (Overdue)", tone: "danger" },
];

export const dashboardStats: { label: string; value: string; note: string; tone: ReminderTone }[] = [
  { label: "Total Documents", value: "128", note: "All Active", tone: "ok" },
  { label: "Expiring Soon", value: "24", note: "Needs Attention", tone: "warn" },
  { label: "Overdue", value: "3", note: "Immediate Action", tone: "danger" },
];

export type ExpiringDoc = { document: string; badge: string };

export const expiringSoon: ExpiringDoc[] = [
  { document: "Building Permit", badge: "60 Days" },
  { document: "Business License", badge: "90 Days" },
  { document: "BPOM Certificate", badge: "30 Days" },
];

export const emailReminder = {
  subject: "Reminder: Building Permit Will Expire in 30 Days",
  fields: [
    { label: "Document", value: "Building Permit (IMB)" },
    { label: "Entity / Location", value: "MRA Office HQ" },
    { label: "Days Left", value: "30 Days" },
  ],
  cta: "View Document Details",
};

export const documentDetail = {
  title: "Building Permit (IMB)",
  status: "Active",
  fields: [
    { label: "Document No.", value: "IMB-2023-0456" },
    { label: "Valid Until", value: "14 Feb 2026" },
    { label: "Days Left", value: "30 Days" },
  ],
};

export type HowItWorksStep = { icon: LucideIcon; title: string; text: string };

export const howItWorks: HowItWorksStep[] = [
  {
    icon: Database,
    title: "Record",
    text: "All compliance documents are recorded in the system with important details and attachments.",
  },
  {
    icon: Calendar,
    title: "Monitor",
    text: "System monitors expiration dates and calculates reminder schedule automatically.",
  },
  {
    icon: BellRing,
    title: "Remind",
    text: "Email & dashboard alerts are sent at 90, 60, and 30 days before expiration (or when expired).",
  },
  {
    icon: Link2,
    title: "Action",
    text: "User clicks the magic link in the email to open the exact document details page.",
  },
  {
    icon: ShieldCheck,
    title: "Comply",
    text: "Take action, renew on time, and stay compliant. Business runs smoothly without legal risks.",
  },
];

export const resultLabel = "Result";
export const resultItems = [
  "Avoid Fines & Penalties",
  "Prevent Business Disruption",
  "Improve Compliance Score",
  "Increase Operational Efficiency",
];
