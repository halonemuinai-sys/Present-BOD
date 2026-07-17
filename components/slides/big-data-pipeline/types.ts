import type { LucideIcon } from "lucide-react";

export type ItemCardData = { icon: LucideIcon; title: string; subtitle: string; isInHouse?: boolean };

export type SmallItem = { icon: LucideIcon; label: string };

export type ImpactModalId = "cost-impact" | "business-growth" | "actionable-insight" | "better-decision";

export type ImpactStep = { icon: LucideIcon; label: string; modalId?: ImpactModalId };
