"use client";

import { motion } from "framer-motion";
import { headerLabel, headerTitle } from "./data";
import SaasPanel from "./SaasPanel";
import PlatformPanel from "./PlatformPanel";
import SummaryStats from "./SummaryStats";

export default function BuildVsBuySlide() {
  return (
    <div className="h-full w-full overflow-y-auto bg-white">
      <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center px-6 py-8 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            {headerLabel}
          </span>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            {headerTitle}
          </h1>
        </motion.div>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-stretch">
          <SaasPanel />
          <PlatformPanel />
        </div>

        <SummaryStats />
      </div>
    </div>
  );
}
