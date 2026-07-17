import {
  CheckCircle2,
  ClipboardCheck,
  FileText,
  FilePenLine,
  Link2,
  Mail,
  MailCheck,
  ShoppingCart,
  TrendingUp,
  XCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type WorkflowColor = "blue" | "amber" | "purple" | "teal" | "green";

export type WorkflowStep = {
  number: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  bullets: string[];
  color: WorkflowColor;
};

export const workflowSteps: WorkflowStep[] = [
  {
    number: 1,
    title: "Campaign Planning",
    subtitle: "(Plan)",
    icon: FilePenLine,
    bullets: [
      "Create new campaign plan",
      "Select LOB, Company (PT)",
      "Determine Branch / Location",
      "Set Start – End Dates",
      "Upload Proposal / Supporting Documents (doc_url)",
      "Set Total Budget Plan",
    ],
    color: "blue",
  },
  {
    number: 2,
    title: "Submission & Review",
    subtitle: "(Submit & Review)",
    icon: ClipboardCheck,
    bullets: [
      "Save as DRAFT",
      "Submit for approval",
      "Notify Approvers based on approval matrix",
      "Status transitions to PENDING",
    ],
    color: "amber",
  },
  {
    number: 3,
    title: "Budget Approval",
    subtitle: "(Approval)",
    icon: MailCheck,
    bullets: [
      "Approver receives email containing Magic Link",
      "Click link to view campaign & budget details",
      "Approve or Reject",
      "Status transitions to APPROVED or REJECTED",
    ],
    color: "purple",
  },
  {
    number: 4,
    title: "Execution & Spending",
    subtitle: "(Execution & Spending)",
    icon: ShoppingCart,
    bullets: [
      "Campaign runs according to timeline",
      "Vendor payments based on milestones / terms",
      "Upload Invoice & Payment Receipt",
      "System automatically logs Actual Spending (Burn Rate)",
    ],
    color: "teal",
  },
  {
    number: 5,
    title: "Monitoring & Evaluation",
    subtitle: "(Monitor & Control)",
    icon: TrendingUp,
    bullets: [
      "Monitor Burn Rate vs. Budget Plan",
      "View Remaining Budget",
      "Analyze campaign effectiveness",
      "Real-time Reports & Dashboards",
      "Archive campaigns for reference",
    ],
    color: "green",
  },
];

export const workflowColorClasses: Record<
  WorkflowColor,
  { numberBg: string; iconBg: string; iconText: string; titleText: string; dot: string }
> = {
  blue: {
    numberBg: "bg-blue-600",
    iconBg: "bg-blue-50",
    iconText: "text-blue-600",
    titleText: "text-blue-700",
    dot: "bg-blue-500",
  },
  amber: {
    numberBg: "bg-amber-600",
    iconBg: "bg-amber-50",
    iconText: "text-amber-600",
    titleText: "text-amber-700",
    dot: "bg-amber-500",
  },
  purple: {
    numberBg: "bg-purple-600",
    iconBg: "bg-purple-50",
    iconText: "text-purple-600",
    titleText: "text-purple-700",
    dot: "bg-purple-500",
  },
  teal: {
    numberBg: "bg-teal-600",
    iconBg: "bg-teal-50",
    iconText: "text-teal-600",
    titleText: "text-teal-700",
    dot: "bg-teal-500",
  },
  green: {
    numberBg: "bg-emerald-600",
    iconBg: "bg-emerald-50",
    iconText: "text-emerald-600",
    titleText: "text-emerald-700",
    dot: "bg-emerald-500",
  },
};

export type StatusColor = "slate" | "amber" | "green" | "red";

export type StatusStep = { label: string; caption: string; color: StatusColor };

export const statusFlow: StatusStep[] = [
  { label: "DRAFT", caption: "Prepared by Marketing", color: "slate" },
  { label: "PENDING", caption: "Awaiting Approval", color: "amber" },
  { label: "APPROVED", caption: "Approved, Ready to Execute", color: "green" },
  { label: "REJECTED", caption: "Rejected, Requires Revision", color: "red" },
];

export const statusColorClasses: Record<StatusColor, { bg: string; border: string; text: string }> = {
  slate: { bg: "bg-slate-100", border: "border-slate-300", text: "text-slate-700" },
  amber: { bg: "bg-amber-50", border: "border-amber-300", text: "text-amber-700" },
  green: { bg: "bg-emerald-50", border: "border-emerald-300", text: "text-emerald-700" },
  red: { bg: "bg-red-50", border: "border-red-300", text: "text-red-700" },
};

export type ApprovalMatrixRow = { lob: string; budget: string; approver1: string; approver2: string };

export const approvalMatrix: ApprovalMatrixRow[] = [
  { lob: "Retail", budget: "≤ 50 Million", approver1: "Marketing Manager", approver2: "Finance Manager" },
  {
    lob: "Retail",
    budget: "> 50 Million – ≤ 250 Million",
    approver1: "Marketing Director",
    approver2: "Finance Director",
  },
  { lob: "Retail", budget: "> 250 Million", approver1: "Director", approver2: "CFO" },
  { lob: "All LOBs", budget: "> 1 Billion", approver1: "Managing Director", approver2: "Board of Directors" },
];

export const approvalMatrixFootnote = "*Rules can be configured based on company policy";

export type MagicLinkStep = { icon: LucideIcon; label: string; tone?: "danger" };

export const magicLinkFlow: MagicLinkStep[] = [
  { icon: Mail, label: "Approver receives email" },
  { icon: Link2, label: "Click Magic Link (Secure & Unique)" },
  { icon: FileText, label: "View Campaign & Budget Details" },
  { icon: CheckCircle2, label: "Approve" },
  { icon: XCircle, label: "Reject", tone: "danger" },
];

export const magicLinkNote = "Approval results are saved automatically in the system";
