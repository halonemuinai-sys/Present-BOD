import { ClipboardList, Monitor, PieChart, Target } from "lucide-react";
import type { ObjectiveItem } from "./types";

export const slideNumber = "1";
export const slideTitle = "Objective";
export const introText = "Requesting approval for:";

export const objectiveItems: ObjectiveItem[] = [
  {
    number: 1,
    icon: ClipboardList,
    badgeIcon: Target,
    title: "KPI for Functions Support",
    description: "to build synergy across all functions support",
  },
  {
    number: 2,
    icon: Monitor,
    badgeIcon: PieChart,
    title: "Budget for System of Digitalization to Automation",
    description: "to support development of the system.",
  },
];
