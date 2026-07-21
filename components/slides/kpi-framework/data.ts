import {
  BarChart3,
  CircleDollarSign,
  ClipboardCheck,
  Coins,
  PieChart,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import type { KpiColumnData } from "./types";

export const slideNumber = "3";
export const slideTitle = "Performance Management Framework";
export const slideSubtitle = "We measure what matters to achieve our ambition.";

export const kpiColumns: KpiColumnData[] = [
  {
    label: "Revenue KPI",
    color: "navy",
    items: [
      { icon: BarChart3, title: "Sales Achievement", text: "Measure growth and target achievement" },
      { icon: Target, title: "ROI Effectiveness", text: "Ensure every investment delivers optimal return" },
      {
        icon: ClipboardCheck,
        title: "Budget Accuracy",
        text: "Ensure planning accuracy and financial discipline",
      },
    ],
  },
  {
    label: "(Cost) KPI",
    color: "amber",
    items: [
      { icon: CircleDollarSign, title: "Cost Efficiency", text: "Optimize cost to drive higher productivity" },
      { icon: PieChart, title: "OPEX Ratio", text: "Maintain cost discipline to maximize profitability" },
      { icon: Coins, title: "NPBT", text: "Improve operating profit before tax" },
      { icon: TrendingUp, title: "EBITDA", text: "Drive operational excellence and sustainable profit" },
    ],
  },
];

export const supportFunction = {
  label: "Support Function KPI",
  icon: Users,
  description: "Each support function has a clear KPI that drives business performance.",
  outcomes: ["Aligned KPI", "Stronger Execution", "Better Decision"],
};

export const summaryParts = ["Right KPI", "Accurate Data", "Real Time Monitoring"];
export const summaryResult = "Better Decision & Sustainable Growth";
