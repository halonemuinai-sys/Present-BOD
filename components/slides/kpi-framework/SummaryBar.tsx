import { Fragment } from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { summaryParts, summaryResult } from "./data";

export default function SummaryBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-2xl border border-slate-200 bg-slate-50/70 px-6 py-4"
    >
      <Trophy size={26} className="shrink-0 text-[#d99a2b]" />

      {summaryParts.map((p, i) => (
        <Fragment key={p}>
          {i > 0 && <span className="text-lg font-black text-[#d99a2b]">+</span>}
          <span className="text-sm font-black uppercase text-[#101b3d] md:text-base">{p}</span>
        </Fragment>
      ))}

      <span className="text-lg font-black text-[#d99a2b]">=</span>
      <span className="text-sm font-black uppercase text-[#101b3d] md:text-base">{summaryResult}</span>
    </motion.div>
  );
}
