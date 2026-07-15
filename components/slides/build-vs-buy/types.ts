import type { LucideIcon } from "lucide-react";

export type ToolLink = { name: string; domain: string; url: string };

export type ItemColor = "orange" | "amber" | "yellow" | "purple" | "green" | "blue" | "teal";

export type LineItem = {
  title: string;
  subtitle: string;
  price: string;
  icon: LucideIcon;
  color: ItemColor;
  tools?: ToolLink[];
};

export type PanelTotal = { price: string; note: string };

export type SummaryStat = { icon: LucideIcon; value: string; label: string };

export const itemColorClasses: Record<ItemColor, { bg: string; text: string }> = {
  orange: { bg: "bg-orange-100", text: "text-orange-600" },
  amber: { bg: "bg-amber-100", text: "text-amber-700" },
  yellow: { bg: "bg-yellow-100", text: "text-yellow-700" },
  purple: { bg: "bg-purple-100", text: "text-purple-600" },
  green: { bg: "bg-green-100", text: "text-green-600" },
  blue: { bg: "bg-blue-100", text: "text-blue-600" },
  teal: { bg: "bg-teal-100", text: "text-teal-600" },
};
