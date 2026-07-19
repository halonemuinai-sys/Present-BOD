"use client";

import { motion } from "framer-motion";
import { currentColumn, proposedColumn, slideLabel, slideNumber, slideSubtitle, slideTitle } from "./data";
import ComparisonColumn from "./ComparisonColumn";

export default function ConsolidationLayerSlide() {
  return (
    <div className="h-full w-full overflow-y-auto bg-white">
      <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col gap-5 px-6 pb-16 pt-8 md:px-10 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-4"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#101b3d] text-2xl font-black text-white md:h-14 md:w-14 md:text-3xl">
            {slideNumber}
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-wide text-[#d99a2b] md:text-sm">{slideLabel}</p>
            <h1 className="text-2xl font-black leading-tight tracking-tight text-[#101b3d] md:text-4xl">
              {slideTitle}
            </h1>
            <p className="mt-2 max-w-4xl text-sm text-slate-600 md:text-base">{slideSubtitle}</p>
          </div>
        </motion.div>

        <div className="grid flex-1 grid-cols-1 gap-4 lg:grid-cols-2">
          <ComparisonColumn data={currentColumn} />
          <ComparisonColumn data={proposedColumn} />
        </div>
      </div>
    </div>
  );
}
