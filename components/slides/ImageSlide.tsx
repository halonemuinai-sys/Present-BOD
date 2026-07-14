import Image from "next/image";
import type { Slide } from "@/lib/types";

export default function ImageSlide({ slide }: { slide: Extract<Slide, { type: "image" }> }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-8 py-16 md:px-16">
      {slide.title && (
        <h2 className="gradient-text-gold text-2xl font-bold md:text-3xl">{slide.title}</h2>
      )}
      <div className="glass-card flex items-center justify-center p-3 md:p-4">
        <Image
          src={slide.src}
          alt={slide.alt}
          width={1600}
          height={1000}
          className="max-h-[65vh] max-w-[85vw] h-auto w-auto rounded-lg object-contain"
        />
      </div>
      {slide.caption && (
        <p className="max-w-2xl text-center text-sm text-[var(--text-muted)]">{slide.caption}</p>
      )}
    </div>
  );
}
