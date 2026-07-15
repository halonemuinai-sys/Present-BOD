import type { Slide } from "@/lib/types";
import EnterpriseEcosystemSlide from "@/components/slides/enterprise-ecosystem";
import CoverHeroSlide from "@/components/slides/cover-hero";
import BigDataPipelineSlide from "@/components/slides/big-data-pipeline";
import DepartmentPainPointsSlide from "@/components/slides/department-pain-points";
import RoadmapTimelineSlide from "@/components/slides/roadmap-timeline";
import BuildVsBuySlide from "@/components/slides/build-vs-buy";
import PricingTabsSlide from "@/components/slides/pricing-tabs";

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
    id: "enterprise-ecosystem",
    Component: EnterpriseEcosystemSlide,
  },
  {
    type: "diagram",
    id: "big-data-pipeline",
    Component: BigDataPipelineSlide,
  },
  {
    type: "diagram",
    id: "department-pain-points",
    Component: DepartmentPainPointsSlide,
  },
  {
    type: "diagram",
    id: "roadmap-timeline",
    Component: RoadmapTimelineSlide,
  },
  {
    type: "diagram",
    id: "build-vs-buy",
    Component: BuildVsBuySlide,
  },
  {
    type: "diagram",
    id: "pricing-tabs",
    Component: PricingTabsSlide,
  },
];
