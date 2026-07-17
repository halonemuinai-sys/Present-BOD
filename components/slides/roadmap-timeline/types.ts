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
