import type { LucideIcon } from "lucide-react";

export type DeptColor = "green" | "blue" | "purple" | "orange";

export type HighlightCardData = { icon: LucideIcon; color: DeptColor; title: string; text: string };

export type ExampleTag = { icon: LucideIcon; label: string };

export type Department = {
  number: string;
  color: DeptColor;
  icon: LucideIcon;
  deptLabel: string;
  title: string;
  painPoints: string[];
  examples: ExampleTag[];
  remark: string;
};

export type InsightData = { icon: LucideIcon; title: string; text: string };

export const colorClasses: Record<
  DeptColor,
  { solid: string; text: string; bg: string; border: string; borderBottom: string }
> = {
  green: {
    solid: "bg-green-600",
    text: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
    borderBottom: "border-b-green-500",
  },
  blue: {
    solid: "bg-blue-600",
    text: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    borderBottom: "border-b-blue-500",
  },
  purple: {
    solid: "bg-violet-600",
    text: "text-violet-700",
    bg: "bg-violet-50",
    border: "border-violet-200",
    borderBottom: "border-b-violet-500",
  },
  orange: {
    solid: "bg-amber-600",
    text: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    borderBottom: "border-b-amber-500",
  },
};
