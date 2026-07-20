import { Cloud, Database, LayoutTemplate } from "lucide-react";
import type { PillarCard, PillarStatus } from "./types";

export const slideNumber = "12";
export const slideTitle = "What's Next";
export const slideSubtitlePrefix = "Through ";
export const slideSubtitleBold = "Disciplined";
export const slideSubtitleSuffix = " Execution and Data-Driven Decision Making";

export const quoteEyebrow = "Mitigation Pillars & Operational Standardization";
export const quoteHighlight = "Building a Secure, Accountable, and Consistent System";

export const pillars: PillarCard[] = [
  { number: 1, icon: Database, title: "Risk Assessment", status: "next" },
  { number: 2, icon: Cloud, title: "SODA & SOP", status: "development" },
  { number: 3, icon: LayoutTemplate, title: "Document Template", status: "development" },
];

export const statusLabel: Record<PillarStatus, string> = {
  next: "Next Project",
  development: "IN DEVELOPMENT",
};

export const decisionLabel = "Decision Required";
export const decisionText = "Approval of: KPI Framework, IT & MRA MU Project";
