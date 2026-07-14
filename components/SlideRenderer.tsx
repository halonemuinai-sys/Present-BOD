import type { Slide } from "@/lib/types";
import TitleSlide from "@/components/slides/TitleSlide";
import SectionSlide from "@/components/slides/SectionSlide";
import ImageSlide from "@/components/slides/ImageSlide";
import BulletSlide from "@/components/slides/BulletSlide";
import ClosingSlide from "@/components/slides/ClosingSlide";

export default function SlideRenderer({ slide }: { slide: Slide }) {
  switch (slide.type) {
    case "title":
      return <TitleSlide slide={slide} />;
    case "section":
      return <SectionSlide slide={slide} />;
    case "image":
      return <ImageSlide slide={slide} />;
    case "bullets":
      return <BulletSlide slide={slide} />;
    case "closing":
      return <ClosingSlide slide={slide} />;
    case "diagram":
      return <slide.Component />;
  }
}
