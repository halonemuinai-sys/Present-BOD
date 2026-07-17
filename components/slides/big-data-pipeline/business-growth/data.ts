import { CircleDollarSign, Cog, Database, EyeOff, FileText, Globe, Puzzle, Search, Sprout, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type TransformItem = { icon: LucideIcon; label: string };

export const fromTitle = "From Cost Center";
export const fromItems: TransformItem[] = [
  { icon: Database, label: "Siloed Data" },
  { icon: FileText, label: "Manual Reporting" },
  { icon: CircleDollarSign, label: "Long Development Time" },
  { icon: Puzzle, label: "High Customization Cost" },
  { icon: EyeOff, label: "Limited Visibility" },
];

export const toTitle = "To Growth Engine";
export const toItems: TransformItem[] = [
  { icon: Globe, label: "Integrated Data" },
  { icon: Search, label: "Automated Insights" },
  { icon: UserRound, label: "Self Service Analytics" },
  { icon: Sprout, label: "Faster Decision Making" },
  { icon: Cog, label: "Scalable & Cost Efficient" },
];
