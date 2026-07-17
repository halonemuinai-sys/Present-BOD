"use client";

import { motion, type Variants } from "framer-motion";
import { Database } from "lucide-react";
import { fragmentedLabel, hubLabel, leftSystemCards, rightSystemCards } from "./data";
import SystemCard from "./SystemCard";
import DashedArrow from "./DashedArrow";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const hub: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 220, damping: 16, delay: 0.15 } },
};

export default function FragmentedSystemsPanel() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-[#d99a2b]" />
        <p className="text-sm font-black uppercase tracking-wide text-[#101b3d] md:text-base">{fragmentedLabel}</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-5 grid grid-cols-[1fr_auto_auto_auto_1fr] grid-rows-3 items-center gap-x-2 gap-y-3"
      >
        {/* Row 1 Left */}
        <div className="col-start-1 row-start-1">
          <SystemCard data={leftSystemCards[0]} />
        </div>
        <div className="col-start-2 row-start-1">
          <DashedArrow flip />
        </div>

        {/* Row 2 Left */}
        <div className="col-start-1 row-start-2">
          <SystemCard data={leftSystemCards[1]} />
        </div>
        <div className="col-start-2 row-start-2">
          <DashedArrow flip />
        </div>

        {/* Row 3 Left */}
        <div className="col-start-1 row-start-3">
          <SystemCard data={leftSystemCards[2]} />
        </div>
        <div className="col-start-2 row-start-3">
          <DashedArrow flip />
        </div>

        {/* Center Hub: spans all 3 rows in column 3 */}
        <motion.div
          variants={hub}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(239, 68, 68, 0.4)",
              "0 0 0 12px rgba(239, 68, 68, 0)",
              "0 0 0 0 rgba(239, 68, 68, 0.4)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="col-start-3 row-start-1 row-span-3 self-center relative flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full border-4 border-red-100 bg-red-50 text-center shadow-sm z-10"
        >
          <Database size={22} className="text-red-500" />
          <p className="mt-1.5 px-3 text-[10px] font-black uppercase leading-tight text-[#101b3d]">{hubLabel}</p>
        </motion.div>

        {/* Row 1 Right */}
        <div className="col-start-4 row-start-1">
          <DashedArrow />
        </div>
        <div className="col-start-5 row-start-1">
          <SystemCard data={rightSystemCards[0]} flip />
        </div>

        {/* Row 2 Right */}
        <div className="col-start-4 row-start-2">
          <DashedArrow />
        </div>
        <div className="col-start-5 row-start-2">
          <SystemCard data={rightSystemCards[1]} flip />
        </div>

        {/* Row 3 Right */}
        <div className="col-start-4 row-start-3">
          <DashedArrow />
        </div>
        <div className="col-start-5 row-start-3">
          <SystemCard data={rightSystemCards[2]} flip />
        </div>
      </motion.div>
    </div>
  );
}
