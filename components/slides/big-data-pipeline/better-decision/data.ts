import { Search, Split, Target, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type DecisionColor = "green" | "blue" | "purple" | "amber";

export type DecisionColumn = {
  title: string;
  bullets: string[];
  caption: string;
  icon: LucideIcon;
  color: DecisionColor;
};

export const decisionColumns: DecisionColumn[] = [
  {
    title: "Decision Based on Data",
    bullets: ["Data yang akurat", "Real-time", "Lengkap & terintegrasi"],
    caption: "Mengurangi keputusan berdasarkan asumsi",
    icon: Target,
    color: "green",
  },
  {
    title: "Insight yang Tepat",
    bullets: ["Menemukan akar masalah", "Memahami dampak", "Fokus pada prioritas"],
    caption: "Fokus pada hal yang benar-benar penting",
    icon: Search,
    color: "blue",
  },
  {
    title: "Aksi yang Efektif",
    bullets: ["Rekomendasi jelas", "Mudah dieksekusi", "Tim selaras"],
    caption: "Eksekusi lebih cepat, tepat & terarah",
    icon: Split,
    color: "purple",
  },
  {
    title: "Hasil yang Terukur",
    bullets: ["Outcome meningkat", "Impact dapat diukur", "Perbaikan berkelanjutan"],
    caption: "Keputusan yang konsisten menghasilkan pertumbuhan",
    icon: TrendingUp,
    color: "amber",
  },
];

export const decisionColorClasses: Record<
  DecisionColor,
  { ring: string; iconText: string; titleText: string; dot: string; captionBg: string; captionText: string }
> = {
  green: {
    ring: "border-emerald-500",
    iconText: "text-emerald-600",
    titleText: "text-emerald-700",
    dot: "bg-emerald-500",
    captionBg: "bg-emerald-50",
    captionText: "text-emerald-700",
  },
  blue: {
    ring: "border-blue-500",
    iconText: "text-blue-600",
    titleText: "text-blue-700",
    dot: "bg-blue-500",
    captionBg: "bg-blue-50",
    captionText: "text-blue-700",
  },
  purple: {
    ring: "border-purple-500",
    iconText: "text-purple-600",
    titleText: "text-purple-700",
    dot: "bg-purple-500",
    captionBg: "bg-purple-50",
    captionText: "text-purple-700",
  },
  amber: {
    ring: "border-amber-500",
    iconText: "text-amber-600",
    titleText: "text-amber-700",
    dot: "bg-amber-500",
    captionBg: "bg-amber-50",
    captionText: "text-amber-700",
  },
};
