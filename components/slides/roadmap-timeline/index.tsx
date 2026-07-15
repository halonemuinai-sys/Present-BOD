"use client";

import { motion } from "framer-motion";
import { eyebrow, subtitle, title, tracks } from "./data";
import MonthHeader from "./MonthHeader";
import TrackRow from "./TrackRow";
import Legend from "./Legend";

export default function RoadmapTimelineSlide() {
  return (
    <div className="h-full w-full overflow-y-auto bg-white">
      <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center px-6 py-8 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#25454a]">
            {eyebrow}
          </span>
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
            {title}
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-500">{subtitle}</p>
        </motion.div>

        <div className="relative">
          <MonthHeader />

          <div className="relative">
            <div
              className="pointer-events-none absolute inset-y-0 left-[220px] right-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, #e2e8f0 0, #e2e8f0 1px, transparent 1px, transparent 16.6667%)",
              }}
            />
            <div className="relative flex flex-col divide-y divide-slate-100">
              {tracks.map((track) => (
                <TrackRow key={track.title} track={track} />
              ))}
            </div>
          </div>
        </div>

        <Legend />
      </div>
    </div>
  );
}
