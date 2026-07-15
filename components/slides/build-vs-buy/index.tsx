"use client";

import { motion } from "framer-motion";
import { footnote, headerLabel, headerTitlePart1, headerTitlePart2, headerTitlePart3 } from "./data";
import SaasPanel from "./SaasPanel";
import PlatformPanel from "./PlatformPanel";
import VsBadge from "./VsBadge";
import SummaryStats from "./SummaryStats";

export default function BuildVsBuySlide() {
  return (
    <div className="relative h-full w-full overflow-y-auto bg-white">
      <div
        className="pointer-events-none absolute right-8 top-8 h-24 w-24 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="relative mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center px-6 py-8 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            {headerLabel}
          </span>
          <span className="mt-1 block h-1 w-10 rounded-full bg-green-500" />
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
            <span className="text-slate-900">{headerTitlePart1}</span>{" "}
            <span className="font-semibold text-slate-400">{headerTitlePart2}</span>{" "}
            <span className="text-green-600">{headerTitlePart3}</span>
          </h1>
        </motion.div>

        <div className="relative mt-6 flex flex-col gap-4 md:flex-row md:items-stretch md:gap-14">
          <SaasPanel />
          <VsBadge />
          <PlatformPanel />
        </div>

        <SummaryStats />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-4 text-center text-xs italic text-slate-400"
        >
          {footnote}
        </motion.p>
      </div>
    </div>
  );
}
