import type { LucideIcon } from "lucide-react";

export type BandColor = "green" | "blue" | "dark";

export type BandItem = { icon: LucideIcon; label: string };

export type Band = {
  color: BandColor;
  number: string;
  title: string;
  brand?: string;
  items: BandItem[];
};

export type ChainItem = { icon: LucideIcon; text: string; highlight: string; color: BandColor };

export const colorClasses: Record<
  BandColor,
  { solid: string; gradient: string; glow: string; text: string; bg: string; border: string }
> = {
  green: {
    solid: "bg-green-600",
    gradient: "from-green-600 to-green-400",
    glow: "shadow-[0_0_20px_rgba(34,197,94,0.35)]",
    text: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  blue: {
    solid: "bg-blue-600",
    gradient: "from-blue-600 to-blue-400",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.35)]",
    text: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  dark: {
    solid: "bg-slate-800",
    gradient: "from-slate-800 to-slate-600",
    glow: "shadow-[0_0_20px_rgba(30,41,59,0.35)]",
    text: "text-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200",
  },
};
