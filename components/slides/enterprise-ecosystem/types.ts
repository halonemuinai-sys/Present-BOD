import type { LucideIcon } from "lucide-react";

export type LayerColor = "blue" | "green" | "purple";

export type IconItem = { icon: LucideIcon; label: string };
export type IconGroup = { icon: LucideIcon; label: string; items: string[] };

export type LayerScope = { label: string; logoSrc?: string };

export type Layer = {
  color: LayerColor;
  icon: LucideIcon;
  eyebrow: string;
  system: string;
  message: string;
  highlights: string[];
  analogy: string;
  analogyIcon: LucideIcon;
  panelTitle: string;
  panelSubtitle: string;
  footer: string;
  items?: IconItem[];
  groups?: IconGroup[];
  scope?: LayerScope;
};

export const colorClasses: Record<
  LayerColor,
  {
    solid: string;
    text: string;
    border: string;
    bg: string;
    gradient: string;
    glow: string;
    hoverShadow: string;
    dot: string;
  }
> = {
  blue: {
    solid: "bg-blue-700",
    text: "text-blue-700",
    border: "border-blue-200",
    bg: "bg-blue-50",
    gradient: "from-blue-600 to-blue-400",
    glow: "bg-blue-400",
    hoverShadow: "hover:shadow-blue-200/60",
    dot: "bg-blue-500",
  },
  green: {
    solid: "bg-green-700",
    text: "text-green-700",
    border: "border-green-200",
    bg: "bg-green-50",
    gradient: "from-green-600 to-green-400",
    glow: "bg-green-400",
    hoverShadow: "hover:shadow-green-200/60",
    dot: "bg-green-500",
  },
  purple: {
    solid: "bg-violet-700",
    text: "text-violet-700",
    border: "border-violet-200",
    bg: "bg-violet-50",
    gradient: "from-violet-600 to-violet-400",
    glow: "bg-violet-400",
    hoverShadow: "hover:shadow-violet-200/60",
    dot: "bg-violet-500",
  },
};
