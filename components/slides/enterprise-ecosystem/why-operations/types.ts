import type { LucideIcon } from "lucide-react";

export type WhyColor = "green" | "blue" | "purple" | "orange" | "teal";

export type WhyAnswerItem = { icon: LucideIcon; text: string; stat?: string };

export type WhyColumnData = {
  number: string;
  color: WhyColor;
  question: string;
  icon: LucideIcon;
  answers: WhyAnswerItem[];
  summary: string;
};

export const colorClasses: Record<
  WhyColor,
  { solid: string; text: string; bg: string; border: string }
> = {
  green: { solid: "bg-green-600", text: "text-green-700", bg: "bg-green-50", border: "border-green-200" },
  blue: { solid: "bg-blue-600", text: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200" },
  purple: { solid: "bg-violet-600", text: "text-violet-700", bg: "bg-violet-50", border: "border-violet-200" },
  orange: { solid: "bg-amber-600", text: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200" },
  teal: { solid: "bg-teal-600", text: "text-teal-700", bg: "bg-teal-50", border: "border-teal-200" },
};
