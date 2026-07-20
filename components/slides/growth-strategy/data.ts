import {
  BarChart3,
  Building2,
  Calendar,
  Database,
  LineChart,
  Search,
  Target,
  Trophy,
  UserCheck,
  Users,
  UsersRound,
} from "lucide-react";
import type { AmbitionBullet, FlowStep, FooterItem, GovernanceStep } from "./types";

export const slideNumber = "1";
export const slideTitle = "MRA Group Growth Ambition";
export const slideSubtitlePrefix = "Creating the strategic foundation to deliver";
export const slideSubtitleHighlight = "Sustainable Revenue & Profit Growth.";

export const ambitionLabel = "Our Ambition";
export const ambitionTitle = ["Sustainable", "Revenue &", "Profit Growth"];
export const ambitionTagline = "Accelerate today. Sustain tomorrow.";

export const ambitionBullets: AmbitionBullet[] = [
  { icon: BarChart3, title: "Sustainable Growth", text: "Long term value creation" },
  { icon: Trophy, title: "Superior Profitability", text: "Maximize return & efficiency" },
  { icon: Target, title: "Market Leadership", text: "Strengthen position and competitiveness" },
];

export const flowLabel = "From Strategy to Performance";

export const flowSteps: FlowStep[] = [
  { icon: Target, title: "Clear Strategy", text: "Set direction and priorities" },
  { icon: Users, title: "Strong Governance", text: "Align, decide and empower" },
  { icon: BarChart3, title: "Excellent Execution", text: "Drive actions and deliver results" },
  { icon: LineChart, title: "Performance Monitoring", text: "Monitor, learn and improve" },
];

export const governanceLabel = "Integrated Governance for Decision & Accountability";

export const governanceSteps: GovernanceStep[] = [
  { icon: Users, title: "Strategy Forum", text: "Cascade & Bottom Up Budget" },
  { icon: UsersRound, title: "BOD Forum", text: "Review & Approval" },
  { icon: UserCheck, title: "COO Led Approval", text: "Final Decision" },
  { icon: Building2, title: "Business Unit Execution", text: "Execute Plan" },
  { icon: Search, title: "Monthly Meeting", text: "Monitor & Performance Review" },
  { icon: Calendar, title: "Quarterly Meeting", text: "Strategic Review & Course Correction" },
];

export const footerItems: FooterItem[] = [
  { icon: Users, text: "Governance creates alignment." },
  { icon: Database, text: "System of Record ensures accuracy." },
  { icon: LineChart, text: "Integrated Dashboard enables faster decisions." },
];
