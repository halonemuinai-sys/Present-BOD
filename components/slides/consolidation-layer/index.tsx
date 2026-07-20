"use client";

import { motion } from "framer-motion";
import { slideLabel, slideNumber, slideSubtitleLine1, slideSubtitleLine2, slideTitle } from "./data";
import Phase1Panel from "./Phase1Panel";
import Phase2Panel from "./Phase2Panel";
import FlowBadge from "./FlowBadge";
import TransitionArrow from "./TransitionArrow";

export default function ConsolidationLayerSlide() {
  return (
    <div className="h-full w-full overflow-y-auto bg-white">
      <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center gap-5 px-6 py-8 md:px-10">
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
            <h1 className="text-xl font-black leading-tight tracking-tight text-[#101b3d] md:text-3xl">
              {slideTitle}
            </h1>
            <p className="mt-1.5 text-xs text-slate-500 md:text-sm">
              {slideSubtitleLine1}
              <br />
              {slideSubtitleLine2}
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <Phase1Panel />
          <TransitionArrow color="#d99a2b" />
          <FlowBadge />
          <TransitionArrow color="#15803d" />
          <Phase2Panel />
        </div>
      </div>
    </div>
  );
}
