import type { Slide } from "@/lib/types";

export default function TitleSlide({ slide }: { slide: Extract<Slide, { type: "title" }> }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8 text-center">
      {slide.meta && (
        <span className="mb-4 text-sm font-medium tracking-wide text-[var(--text-muted)]">
          {slide.meta}
        </span>
      )}
      <h1 className="gradient-text-gold text-4xl font-bold md:text-6xl">{slide.heading}</h1>
      {slide.subheading && (
        <p className="mt-4 max-w-2xl text-lg text-[var(--text-muted)]">{slide.subheading}</p>
      )}
    </div>
  );
}
