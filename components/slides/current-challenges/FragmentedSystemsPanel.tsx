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
        className="mt-5 grid grid-cols-[1fr_auto_auto_auto_1fr] items-center gap-1.5"
      >
        <div className="flex flex-col gap-3">
          {leftSystemCards.map((c) => (
            <SystemCard key={c.title} data={c} />
          ))}
        </div>

        <div className="flex flex-col justify-around gap-3 py-4">
          {leftSystemCards.map((c) => (
            <DashedArrow key={c.title} flip />
          ))}
        </div>

        <motion.div
          variants={hub}
          className="relative flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full border-4 border-red-100 bg-red-50 text-center shadow-sm"
        >
          <Database size={22} className="text-red-500" />
          <p className="mt-1.5 px-3 text-[10px] font-black uppercase leading-tight text-[#101b3d]">{hubLabel}</p>
        </motion.div>

        <div className="flex flex-col justify-around gap-3 py-4">
          {rightSystemCards.map((c) => (
            <DashedArrow key={c.title} />
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {rightSystemCards.map((c) => (
            <SystemCard key={c.title} data={c} flip />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
