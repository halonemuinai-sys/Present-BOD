import type { LucideIcon } from "lucide-react";

export type Timeline2026Status = "completed" | "validation" | "planned" | "golive";

export type Timeline2026Segment = { label: string; weight: number };

export type Timeline2026Track = {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  status: Timeline2026Status;
  startMonth: number;
  span: number;
  segments?: Timeline2026Segment[];
  statusLabel: string;
  statusSubLabel?: string;
  modules?: string[];
  modulesTotalLabel?: string;
  detailStatus?: string;
};

export type BarVariant = "prep" | "build" | "milestone";

export type Bar = {
  label: string;
  start: number;
  end: number;
  variant: BarVariant;
  description?: string;
  features?: string[];
};

export type TrackTag = { text: string; color: "green" | "amber" };

export type Track = {
  title: string;
  tag?: TrackTag;
  deliverable: string;
  bars: Bar[];
};

export const variantClasses: Record<BarVariant, string> = {
  prep: "bg-[#7c9a9e] text-white",
  build: "bg-[#25454a] text-white",
  milestone: "bg-amber-800 text-white",
};
