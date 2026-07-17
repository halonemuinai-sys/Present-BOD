import { BarChart3, Brain, ClipboardCheck, Search, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type InsightColor = "emerald" | "green" | "blue" | "purple" | "amber";

export type InsightStep = {
  number: number;
  title: string;
  description: string;
  example: string;
  icon: LucideIcon;
  color: InsightColor;
};

export const insightSubtitle = "From Data to Action in 5 Simple Steps";

export const insightSteps: InsightStep[] = [
  {
    number: 1,
    title: "Detect",
    description: "System detects anomaly / opportunity",
    example: "Sales turun 10%",
    icon: Search,
    color: "emerald",
  },
  {
    number: 2,
    title: "Analyze",
    description: "Drill-down to root cause",
    example: "Conversion turun 7%",
    icon: BarChart3,
    color: "green",
  },
  {
    number: 3,
    title: "Recommend",
    description: "AI / Rule engine suggests best action",
    example: "Follow-up inactive customer",
    icon: Brain,
    color: "blue",
  },
  {
    number: 4,
    title: "Act",
    description: "User / Team executes action",
    example: "Campaign & advisor coaching",
    icon: Users,
    color: "purple",
  },
  {
    number: 5,
    title: "Measure",
    description: "Monitor result & continuous improvement",
    example: "Sales naik 8%",
    icon: ClipboardCheck,
    color: "amber",
  },
];

export const insightColorClasses: Record<
  InsightColor,
  { numberBg: string; iconBg: string; iconText: string; titleText: string; exampleBg: string; exampleLabel: string }
> = {
  emerald: {
    numberBg: "bg-emerald-600",
    iconBg: "bg-emerald-50",
    iconText: "text-emerald-600",
    titleText: "text-emerald-700",
    exampleBg: "bg-emerald-50",
    exampleLabel: "text-emerald-700",
  },
  green: {
    numberBg: "bg-green-800",
    iconBg: "bg-green-50",
    iconText: "text-green-800",
    titleText: "text-green-800",
    exampleBg: "bg-green-50",
    exampleLabel: "text-green-800",
  },
  blue: {
    numberBg: "bg-blue-600",
    iconBg: "bg-blue-50",
    iconText: "text-blue-600",
    titleText: "text-blue-700",
    exampleBg: "bg-blue-50",
    exampleLabel: "text-blue-700",
  },
  purple: {
    numberBg: "bg-purple-600",
    iconBg: "bg-purple-50",
    iconText: "text-purple-600",
    titleText: "text-purple-700",
    exampleBg: "bg-purple-50",
    exampleLabel: "text-purple-700",
  },
  amber: {
    numberBg: "bg-amber-500",
    iconBg: "bg-amber-50",
    iconText: "text-amber-600",
    titleText: "text-amber-600",
    exampleBg: "bg-amber-50",
    exampleLabel: "text-amber-600",
  },
};
