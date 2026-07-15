import type { LucideIcon } from "lucide-react";

export type TabId = "overview" | "foundation" | "data" | "dashboards" | "qa" | "recurring";

export type Tab = { id: TabId; label: string; icon: LucideIcon };

export type PriceItem = { number: number; deliverable: string; price: string };

export type PricingSection = {
  id: string;
  title: string;
  items: PriceItem[];
  subtotalLabel: string;
  subtotalPrice: string;
};

export type GrandTotal = { label: string; price: string };

export type CompositionRow = { section: string; description: string; price: string; percent: number };
