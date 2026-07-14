import type { Slide } from "@/lib/types";

export default function BulletSlide({ slide }: { slide: Extract<Slide, { type: "bullets" }> }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8">
      <h2 className="mb-10 text-3xl font-bold text-[var(--foreground)] md:text-4xl">
        {slide.heading}
      </h2>
      <ul className="flex w-full max-w-2xl flex-col gap-4">
        {slide.items.map((item, i) => (
          <li
            key={i}
            className="glass-card flex items-start gap-3 px-6 py-4 text-lg text-[var(--foreground)]"
          >
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--accent-emerald)]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
