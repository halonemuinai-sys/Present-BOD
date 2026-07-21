import { motion } from "framer-motion";
import { Search } from "lucide-react";
import {
  advantageLabel,
  advantages,
  architectureLabel,
  phase2Label,
  phase2Tagline,
  phase2Title,
} from "./data";
import RibbonTag from "./RibbonTag";
import DataFlowChain from "./DataFlowChain";
import BulletList from "./BulletList";

export default function Phase2Panel() {
  return (
    <div className="relative flex-1 rounded-2xl border border-slate-200 bg-white p-5 pt-7 shadow-sm">
      <RibbonTag label={phase2Label} bg="#15803d" />

      <div className="flex items-center gap-3">
        <motion.span
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(21, 128, 61, 0.4)",
              "0 0 0 8px rgba(21, 128, 61, 0)",
              "0 0 0 0 rgba(21, 128, 61, 0.4)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-700"
        >
          <Search size={26} className="text-white" />
        </motion.span>
        <div>
          <h3 className="text-lg font-black text-[#101b3d] md:text-xl">{phase2Title}</h3>
        </div>
      </div>
      <p className="mt-2 text-xs italic text-slate-500">{phase2Tagline}</p>

      <p className="mb-2 mt-4 text-[11px] font-black uppercase tracking-wide text-emerald-700">
        {architectureLabel}
      </p>
      <DataFlowChain />

      <div className="mt-5">
        <BulletList label={advantageLabel} items={advantages} variant="advantage" />
      </div>
    </div>
  );
}
