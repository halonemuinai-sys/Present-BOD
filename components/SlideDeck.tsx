"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import SlideRenderer from "@/components/SlideRenderer";
import { slides } from "@/content/slides";

const variants = {
  enter: (direction: number) => ({ x: direction * 60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: -direction * 60, opacity: 0 }),
};

export default function SlideDeck() {
  const [[currentIndex, direction], setCurrent] = useState<[number, number]>([0, 0]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, index));
      setCurrent(([prevIndex]) => [clamped, clamped > prevIndex ? 1 : clamped < prevIndex ? -1 : 0]);
    },
    []
  );

  const next = useCallback(() => goTo(currentIndex + 1), [goTo, currentIndex]);
  const prev = useCallback(() => goTo(currentIndex - 1), [goTo, currentIndex]);

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
          if (document.fullscreenElement) document.exitFullscreen();
          break;
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev, goTo, toggleFullscreen]);

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
        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={`slide-dot ${i === currentIndex ? "active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
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

      <span className="slide-counter absolute bottom-8 right-6 z-50">
        {currentIndex + 1} / {slides.length}
      </span>
    </div>
  );
}
