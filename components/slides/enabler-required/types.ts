import type { LucideIcon } from "lucide-react";

export type EnablerStatus = "established" | "in-development" | "next-project";

export type EnablerCard = {
  number: number;
  icon: LucideIcon;
  title: string;
  description?: string;
  status: EnablerStatus;
};
