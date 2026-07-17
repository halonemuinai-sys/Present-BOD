"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronUp, Maximize, Minimize } from "lucide-react";
import SlideRenderer from "@/components/SlideRenderer";
import { slides } from "@/content/slides";

const variants = {
  enter: (direction: number) => ({ x: direction * 60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: -direction * 60, opacity: 0 }),
};

function formatSlideLabel(id: string) {
  return id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function SlideDeck() {
  const [[currentIndex, direction], setCurrent] = useState<[number, number]>([0, 0]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, index));
      setCurrent(([prevIndex]) => [clamped, clamped > prevIndex ? 1 : clamped < prevIndex ? -1 : 0]);
    },
    []
  );

  const next = useCallback(() => goTo(currentIndex + 1), [goTo, currentIndex]);
  const prev = useCallback(() => goTo(currentIndex - 1), [goTo, currentIndex]);

  const handleTrackClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      goTo(Math.round(ratio * (slides.length - 1)));
    },
    [goTo]
  );

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
        case "PageDown":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          prev();
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(slides.length - 1);
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
        case "Escape":
          if (pickerOpen) setPickerOpen(false);
          else if (document.fullscreenElement) document.exitFullscreen();
          break;
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev, goTo, toggleFullscreen, pickerOpen]);

  const slide = slides[currentIndex];

  return (
    <div className="slide-viewport">
      <div className="bg-glow-gold top-[5%] left-[-10%]" />
      <div className="bg-glow-emerald bottom-[5%] right-[-10%]" />

      <button
        onClick={toggleFullscreen}
        className="slide-nav-btn absolute right-6 top-6 z-50"
        aria-label="Toggle fullscreen"
      >
        {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
      </button>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          <SlideRenderer slide={slide} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="slide-nav-btn"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-3">
          <div
            className="slide-progress-track"
            onClick={handleTrackClick}
            role="slider"
            tabIndex={0}
            aria-label="Slide progress"
            aria-valuemin={1}
            aria-valuemax={slides.length}
            aria-valuenow={currentIndex + 1}
          >
            <motion.div
              className="slide-progress-fill"
              animate={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
          <div className="relative">
            <button
              onClick={() => setPickerOpen((v) => !v)}
              className="slide-counter flex items-center gap-1 rounded-full px-2 py-1 transition-colors hover:bg-[var(--surface)]"
              aria-label="Jump to slide"
              aria-expanded={pickerOpen}
            >
              {currentIndex + 1} / {slides.length}
              <ChevronUp
                size={12}
                className={`transition-transform ${pickerOpen ? "" : "rotate-180"}`}
              />
            </button>

            <AnimatePresence>
              {pickerOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setPickerOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full left-1/2 z-50 mb-3 max-h-72 w-64 -translate-x-1/2 overflow-y-auto rounded-xl border p-1.5"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                      boxShadow: "var(--shadow-lg)",
                    }}
                  >
                    {slides.map((s, i) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          goTo(i);
                          setPickerOpen(false);
                        }}
                        className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition-colors ${
                          i === currentIndex ? "bg-[var(--accent-emerald)] text-white" : "hover:bg-black/5"
                        }`}
                      >
                        <span
                          className={`text-xs tabular-nums ${
                            i === currentIndex ? "text-white/80" : "text-[var(--text-muted)]"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="truncate">{formatSlideLabel(s.id)}</span>
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button
          onClick={next}
          disabled={currentIndex === slides.length - 1}
          className="slide-nav-btn"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
