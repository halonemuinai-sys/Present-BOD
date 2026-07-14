import type { Slide } from "@/lib/types";

export default function SectionSlide({ slide }: { slide: Extract<Slide, { type: "section" }> }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8 text-center">
      {slide.label && (
        <span className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-emerald)]">
          {slide.label}
        </span>
      )}
      <h2 className="text-4xl font-bold text-[var(--foreground)] md:text-5xl">{slide.heading}</h2>
    </div>
  );
}
