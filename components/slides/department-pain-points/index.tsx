"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { departments, highlightCards } from "./data";
import HighlightCard from "./HighlightCard";
import DepartmentCard from "./DepartmentCard";
import InsightBar from "./InsightBar";
import MarketingPlatformModal from "./marketing-platform/MarketingPlatformModal";
import GeneralAffairsModal from "./general-affairs/GeneralAffairsModal";
import ComplianceModal from "./compliance/ComplianceModal";
import LegalModal from "./legal/LegalModal";
import type { Department } from "./types";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

export default function DepartmentPainPointsSlide() {
  const [openModal, setOpenModal] = useState<Department["modalId"] | null>(null);

  return (
    <div className="h-full w-full overflow-y-auto bg-white">
      <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center gap-5 px-6 py-8 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-4"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#101b3d] text-2xl font-black text-white md:h-14 md:w-14 md:text-3xl">
            8
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="h-4 w-1 rounded-full bg-green-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-green-700">
                Current Issues &amp; Pain Points
              </span>
              <motion.span
                animate={{
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(217, 154, 43, 0.5)",
                    "0 0 0 6px rgba(217, 154, 43, 0)",
                    "0 0 0 0 rgba(217, 154, 43, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-full bg-[#101b3d] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-white"
              >
                Phase 1
              </motion.span>
            </div>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Four Departments, Four Silos
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-slate-500 md:text-base">
              Operations run in isolation with high reliance on local Excel sheets and paper archives
              — causing delays, compliance risks, and uncontrolled spending.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3 sm:flex-row"
        >
          {highlightCards.map((item) => (
            <HighlightCard key={item.title} item={item} />
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {departments.map((dept) => (
            <DepartmentCard
              key={dept.deptLabel}
              dept={dept}
              onOpenModal={dept.modalId ? () => setOpenModal(dept.modalId) : undefined}
            />
          ))}
        </motion.div>

        <InsightBar />
      </div>

      <AnimatePresence>
        {openModal === "marketing-platform" && (
          <MarketingPlatformModal onClose={() => setOpenModal(null)} />
        )}
        {openModal === "general-affairs" && (
          <GeneralAffairsModal onClose={() => setOpenModal(null)} />
        )}
        {openModal === "compliance" && <ComplianceModal onClose={() => setOpenModal(null)} />}
        {openModal === "legal" && <LegalModal onClose={() => setOpenModal(null)} />}
      </AnimatePresence>
    </div>
  );
}
