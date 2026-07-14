"use client";

import { motion, type Variants } from "framer-motion";
import { departments, highlightCards } from "./data";
import HighlightCard from "./HighlightCard";
import DepartmentCard from "./DepartmentCard";
import InsightBar from "./InsightBar";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

export default function DepartmentPainPointsSlide() {
  return (
    <div className="h-full w-full overflow-y-auto bg-white">
      <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center gap-5 px-6 py-8 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <span className="h-4 w-1 rounded-full bg-green-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-green-700">
              Current Issues &amp; Pain Points
            </span>
          </div>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Empat Departemen, Empat Silo
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-500 md:text-base">
            Operasional berjalan terpisah dengan ketergantungan tinggi pada Excel lokal dan berkas fisik
            — menimbulkan keterlambatan, risiko hukum, dan biaya yang tidak terkendali.
          </p>
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
            <DepartmentCard key={dept.deptLabel} dept={dept} />
          ))}
        </motion.div>

        <InsightBar />
      </div>
    </div>
  );
}
