import type { LucideIcon } from "lucide-react";

export type SystemCardData = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  logoDomain?: string;
};

export type ImpactItem = { icon: LucideIcon; title: string; text: string };

export type KeyQuestion = { number: string; text: string };
