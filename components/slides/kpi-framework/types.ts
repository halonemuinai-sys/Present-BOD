import type { LucideIcon } from "lucide-react";

export type KpiColor = "navy" | "amber";

export type KpiItem = { icon: LucideIcon; title: string; text: string };

export type KpiColumnData = { label: string; color: KpiColor; items: KpiItem[] };

export const kpiColorClasses: Record<
  KpiColor,
  { header: string; ring: string; icon: string; border: string }
> = {
  navy: {
    header: "bg-[#101b3d]",
    ring: "border-[#101b3d]/25",
    icon: "text-[#101b3d]",
    border: "border-[#101b3d]",
  },
  amber: {
    header: "bg-[#d99a2b]",
    ring: "border-[#d99a2b]/35",
    icon: "text-[#d99a2b]",
    border: "border-[#d99a2b]",
  },
};
