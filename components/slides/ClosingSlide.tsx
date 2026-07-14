import type { Slide } from "@/lib/types";

export default function ClosingSlide({ slide }: { slide: Extract<Slide, { type: "closing" }> }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8 text-center">
      <h1 className="gradient-text-gold text-4xl font-bold md:text-6xl">{slide.heading}</h1>
      {slide.subheading && (
        <p className="mt-4 text-lg text-[var(--text-muted)]">{slide.subheading}</p>
      )}
    </div>
  );
}
