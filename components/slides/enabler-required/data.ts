import { ArrowRight, CheckCircle2, Clock, Cloud, Database, MonitorCheck, Workflow } from "lucide-react";
import type { EnablerCard, EnablerStatus } from "./types";

export const slideNumber = "5";
export const slideTitle = "Enabler Required";
export const slideSubtitlePrefix = "Through ";
export const slideSubtitleBold = "Disciplined";
export const slideSubtitleSuffix = " Execution and Data-Driven Decision Making";

export const quoteLine1 = "MRA Group's Ambition is Clear:";
export const quotePrefix = "To Achieve ";
export const quoteHighlight1 = "Aggressive Revenue";
export const quoteMid = " & ";
export const quoteHighlight2 = "Profit Growth";

export const enablerRow1: EnablerCard[] = [
  {
    number: 1,
    icon: Workflow,
    title: "Business Process",
    description:
      "Standardized governance, clear accountability, and consistent execution across all business units.",
    status: "established",
  },
  {
    number: 2,
    icon: Database,
    title: "System of Record",
    description: "Establishing a single source of trusted operational data for every support function.",
    status: "in-development",
  },
  {
    number: 3,
    icon: Cloud,
    title: "Data Integration & Middleware",
    description: "Connecting all systems into one integrated enterprise data platform.",
    status: "in-development",
  },
  {
    number: 4,
    icon: MonitorCheck,
    title: "Integrated Dashboard",
    description: "Providing real-time KPI monitoring, performance visibility, and executive decision support.",
    status: "in-development",
  },
];

export const statusMeta: Record<
  EnablerStatus,
  { bg: string; text: string; icon: typeof CheckCircle2; label: string }
> = {
  established: { bg: "bg-[#101b3d]", text: "text-white", icon: CheckCircle2, label: "Established" },
  "in-development": { bg: "bg-[#d99a2b]", text: "text-white", icon: Clock, label: "In Development" },
  "next-project": { bg: "bg-blue-50", text: "text-[#101b3d]", icon: ArrowRight, label: "Next Project" },
};
