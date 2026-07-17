"use client";

import { motion, type Variants } from "framer-motion";
import type { Track, Bar } from "./types";
import { variantClasses } from "./types";

const barVariants: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: { opacity: 1, scaleX: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const tagClasses = {
  green: "text-green-700",
  amber: "text-amber-700",
};

interface TrackRowProps {
  track: Track;
  cols: number;
  onBarClick?: (bar: Bar) => void;
}

export default function TrackRow({ track, cols, onBarClick }: TrackRowProps) {
  return (
    <div
      className="grid items-center gap-y-1.5 py-3"
      style={{ gridTemplateColumns: `220px repeat(${cols}, minmax(0, 1fr))` }}
    >
      <div className="pr-4">
        <h3 className="text-sm font-bold text-slate-900">
          {track.title}
          {track.tag && (
            <>
              {" "}
              <span className={`font-mono text-xs font-bold ${tagClasses[track.tag.color]}`}>
                · {track.tag.text}
              </span>
            </>
          )}
        </h3>
        <p className="text-xs text-slate-400">Deliverable: {track.deliverable}</p>
      </div>

      {track.bars.map((bar) => (
        <motion.div
          key={bar.label}
          variants={barVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onClick={() => onBarClick?.(bar)}
          style={{ gridColumn: `${bar.start + 1} / ${bar.end + 2}`, transformOrigin: "left" }}
          className={`mx-1 flex min-h-10 items-center justify-center rounded-lg px-2 py-1.5 text-center text-[11px] font-bold leading-tight cursor-pointer hover:brightness-105 active:scale-[0.98] transition-all select-none ${variantClasses[bar.variant]}`}
          whileHover={{ scale: 1.015 }}
        >
          {bar.label}
        </motion.div>
      ))}
    </div>
  );
}
