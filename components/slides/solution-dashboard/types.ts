import type { LucideIcon } from "lucide-react";

export type SystemCardData = { icon: LucideIcon; title: string; subtitle: string; logoDomain?: string };

export type KpiColor = "blue" | "green" | "purple" | "amber";

export type KpiTileData = {
  icon: LucideIcon;
  color: KpiColor;
  label: string;
  value: string;
  note: string;
  trend?: "up" | "down";
};

export const kpiColorClasses: Record<KpiColor, { bg: string; text: string }> = {
  blue: { bg: "bg-blue-500/20", text: "text-blue-400" },
  green: { bg: "bg-emerald-500/20", text: "text-emerald-400" },
  purple: { bg: "bg-purple-500/20", text: "text-purple-400" },
  amber: { bg: "bg-amber-500/20", text: "text-amber-400" },
};

export type TrendPoint = { month: string; value: number };

export type UnitBar = { label: string; value: number };

export type EarlyWarning = { text: string; detail: string };

export type BenefitColor = "navy" | "amber";

export type BenefitItem = { icon: LucideIcon; color: BenefitColor; title: string; text: string };
