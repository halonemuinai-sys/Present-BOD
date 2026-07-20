import { Cloud, Database, LayoutTemplate } from "lucide-react";
import type { PillarCard, PillarStatus } from "./types";

export const slideNumber = "10";
export const slideTitle = "What's Next";
export const slideSubtitle = "Action-Oriented";

export const quoteEyebrow = "Mitigation Pillars & Operational Standardization";

export const pillars: PillarCard[] = [
  { number: 1, icon: Database, title: "Risk Assessment", status: "next" },
  { number: 2, icon: Cloud, title: "SODA & SOP", status: "development" },
  { number: 3, icon: LayoutTemplate, title: "Document Template", status: "development" },
];

export const statusLabel: Record<PillarStatus, string> = {
  next: "Next Project",
  development: "IN DEVELOPMENT",
};

export const readyBannerText = "Ready for Execution: Standing by for Board Authorization to Launch";
