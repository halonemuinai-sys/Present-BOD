import type { Slide } from "@/lib/types";
// import EnterpriseEcosystemSlide from "@/components/slides/enterprise-ecosystem"; // hidden — re-add to slides[] below to restore
import CoverHeroSlide from "@/components/slides/cover-hero";
import ObjectiveSlide from "@/components/slides/objective";
import GrowthStrategySlide from "@/components/slides/growth-strategy";
import KpiFrameworkSlide from "@/components/slides/kpi-framework";
import CurrentChallengesSlide from "@/components/slides/current-challenges";
import SolutionDashboardSlide from "@/components/slides/solution-dashboard";
import EnablerRequiredSlide from "@/components/slides/enabler-required";
// import BigDataPipelineSlide from "@/components/slides/big-data-pipeline"; // hidden — re-add to slides[] below to restore
import DepartmentPainPointsSlide from "@/components/slides/department-pain-points";
import RoadmapTimelineSlide from "@/components/slides/roadmap-timeline";
import BuildVsBuySlide from "@/components/slides/build-vs-buy";
import ConsolidationLayerSlide from "@/components/slides/consolidation-layer";
import WhatsNextSlide from "@/components/slides/whats-next";


// Edit this array to build your own deck.
// - "image" slides are the main content: drop screenshots into public/slides/
//   and point `src` at "/slides/your-file.png".
// - Reorder freely; each slide's `id` keeps animations stable across edits.
export const slides: Slide[] = [
  {
    type: "diagram",
    id: "cover",
    Component: CoverHeroSlide,
  },
  {
    type: "diagram",
    id: "objective",
    Component: ObjectiveSlide,
  },
  {
    type: "diagram",
    id: "growth-strategy",
    Component: GrowthStrategySlide,
  },
  {
    type: "diagram",
    id: "kpi-framework",
    Component: KpiFrameworkSlide,
  },
  {
    type: "diagram",
    id: "current-challenges",
    Component: CurrentChallengesSlide,
  },
  {
    type: "diagram",
    id: "solution-dashboard",
    Component: SolutionDashboardSlide,
  },
  {
    type: "diagram",
    id: "enabler-required",
    Component: EnablerRequiredSlide,
  },
  {
    type: "diagram",
    id: "consolidation-layer",
    Component: ConsolidationLayerSlide,
  },
  {
    type: "diagram",
    id: "department-pain-points",
    Component: DepartmentPainPointsSlide,
  },
  {
    type: "diagram",
    id: "build-vs-buy",
    Component: BuildVsBuySlide,
  },
  {
    type: "diagram",
    id: "roadmap-timeline",
    Component: RoadmapTimelineSlide,
  },
  {
    type: "diagram",
    id: "whats-next",
    Component: WhatsNextSlide,
  },
  // Hidden slides (kept in the codebase, just not in the active deck):
  // {
  //   type: "diagram",
  //   id: "enterprise-ecosystem",
  //   Component: EnterpriseEcosystemSlide,
  // },
  // {
  //   type: "diagram",
  //   id: "big-data-pipeline",
  //   Component: BigDataPipelineSlide,
  // },
];
