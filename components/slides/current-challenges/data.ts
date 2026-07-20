import {
  BarChart3,
  Clock,
  Database,
  Eye,
  Hourglass,
  MoreHorizontal,
  Settings,
  Truck,
  Users,
  Wallet,
} from "lucide-react";
import type { ImpactItem, KeyQuestion, SystemCardData } from "./types";

export const slideNumber = "4";
export const slideTitle = "Current Challenges";
export const slideSubtitle = "Our challenge is not the lack of strategy, but the lack of integrated system.";

export const fragmentedLabel = "Current State: Fragmented Systems";

export const hubLabel = "Manual Reporting & Data Silo";

export const leftSystemCards: SystemCardData[] = [
  { icon: Database, title: "Finance", subtitle: "NetSuite (In Development)" },
  { icon: BarChart3, title: "Sales & CRM", subtitle: "Various Tools" },
  { icon: Truck, title: "Supply Chain", subtitle: "Various Tools" },
];

export const rightSystemCards: SystemCardData[] = [
  { icon: Users, title: "HR", subtitle: "Talenta (In Use)", logoDomain: "talenta.co" },
  { icon: Settings, title: "Operation", subtitle: "Various Tools" },
  { icon: MoreHorizontal, title: "Others Functions", subtitle: "No Standard System" },
];

export const impactLabel = "Impact to the Business";

export const impactItems: ImpactItem[] = [
  { icon: Database, title: "Data Inconsistency", text: "Different numbers, different interpretation" },
  { icon: Clock, title: "Delayed Reporting", text: "Manual process causes late information" },
  { icon: Eye, title: "Limited Visibility", text: "Management cannot see real-time performance" },
  { icon: Hourglass, title: "Slow Decision Making", text: "Opportunities and risks are not addressed early" },
  { icon: Wallet, title: "High Operational Cost", text: "Duplicate work and low process efficiency" },
];

export const coreProblemLabel = "Core Problem";
export const coreProblemText = "Without one trusted data source, we cannot manage the business effectively.";

export const keyQuestionsLabel = "Key Questions";

export const keyQuestions: KeyQuestion[] = [
  {
    number: "01",
    text: "How do we establish a reliable System of Record across every support function?",
  },
  {
    number: "02",
    text: "How can all systems be integrated into one baseline report for business analysis?",
  },
];
