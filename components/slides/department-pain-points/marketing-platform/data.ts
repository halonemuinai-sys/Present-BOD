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
    title: "Perencanaan Kampanye",
    subtitle: "(Plan)",
    icon: FilePenLine,
    bullets: [
      "Buat rencana kampanye baru",
      "Pilih LOB, Perusahaan (PT)",
      "Tentukan Cabang / Lokasi",
      "Set Tanggal Mulai – Selesai",
      "Upload Proposal / Dokumen Pendukung (doc_url)",
      "Set Total Budget Plan",
    ],
    color: "blue",
  },
  {
    number: 2,
    title: "Pengajuan & Review",
    subtitle: "(Submit & Review)",
    icon: ClipboardCheck,
    bullets: [
      "Save as DRAFT",
      "Ajukan untuk persetujuan",
      "Notifikasi ke Approver sesuai matriks persetujuan",
      "Status berubah menjadi PENDING",
    ],
    color: "amber",
  },
  {
    number: 3,
    title: "Persetujuan Anggaran",
    subtitle: "(Approval)",
    icon: MailCheck,
    bullets: [
      "Approver menerima Email (Magic Link)",
      "Klik link untuk melihat detail kampanye & anggaran",
      "Approve / Reject",
      "Status berubah menjadi APPROVED atau REJECTED",
    ],
    color: "purple",
  },
  {
    number: 4,
    title: "Eksekusi & Realisasi",
    subtitle: "(Execution & Spending)",
    icon: ShoppingCart,
    bullets: [
      "Kampanye berjalan sesuai timeline",
      "Pembayaran ke Vendor berdasarkan Milestone / Termin",
      "Upload Invoice & Bukti Bayar",
      "Sistem mencatat Actual Spending (Burn Rate) otomatis",
    ],
    color: "teal",
  },
  {
    number: 5,
    title: "Monitoring & Evaluasi",
    subtitle: "(Monitor & Control)",
    icon: TrendingUp,
    bullets: [
      "Pantau Burn Rate vs Budget Plan",
      "Lihat Remaining Budget",
      "Analisa efektivitas kampanye",
      "Laporan & Dashboard Real-time",
      "Arsip kampanye sebagai referensi",
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
  { label: "DRAFT", caption: "Disiapkan oleh Marketing", color: "slate" },
  { label: "PENDING", caption: "Menunggu Persetujuan", color: "amber" },
  { label: "APPROVED", caption: "Disetujui, Siap Dieksekusi", color: "green" },
  { label: "REJECTED", caption: "Ditolak, Perlu Revisi", color: "red" },
];

export const statusColorClasses: Record<StatusColor, { bg: string; border: string; text: string }> = {
  slate: { bg: "bg-slate-100", border: "border-slate-300", text: "text-slate-700" },
  amber: { bg: "bg-amber-50", border: "border-amber-300", text: "text-amber-700" },
  green: { bg: "bg-emerald-50", border: "border-emerald-300", text: "text-emerald-700" },
  red: { bg: "bg-red-50", border: "border-red-300", text: "text-red-700" },
};

export type ApprovalMatrixRow = { lob: string; budget: string; approver1: string; approver2: string };

export const approvalMatrix: ApprovalMatrixRow[] = [
  { lob: "Retail", budget: "≤ 50 Juta", approver1: "Marketing Manager", approver2: "Finance Manager" },
  {
    lob: "Retail",
    budget: "> 50 Juta – ≤ 250 Juta",
    approver1: "Marketing Director",
    approver2: "Finance Director",
  },
  { lob: "Retail", budget: "> 250 Juta", approver1: "Direktur", approver2: "CFO" },
  { lob: "Semua LOB", budget: "> 1 Miliar", approver1: "Direktur Utama", approver2: "Board of Directors" },
];

export const approvalMatrixFootnote = "*Aturan dapat dikonfigurasi sesuai kebijakan perusahaan";

export type MagicLinkStep = { icon: LucideIcon; label: string; tone?: "danger" };

export const magicLinkFlow: MagicLinkStep[] = [
  { icon: Mail, label: "Approver terima Email" },
  { icon: Link2, label: "Klik Magic Link (Aman & Unik)" },
  { icon: FileText, label: "Lihat Detail Kampanye & Budget" },
  { icon: CheckCircle2, label: "Approve" },
  { icon: XCircle, label: "Reject", tone: "danger" },
];

export const magicLinkNote = "Hasil persetujuan tersimpan otomatis di sistem";
