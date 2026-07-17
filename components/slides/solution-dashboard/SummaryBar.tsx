import { Fragment } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { summaryParts, summaryResult } from "./data";

export default function SummaryBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-2xl bg-[#0b1530] px-6 py-4"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#d99a2b] text-[#d99a2b]">
        <TrendingUp size={20} />
      </span>

      {summaryParts.map((p, i) => (
        <Fragment key={p}>
          {i > 0 && <span className="text-lg font-black text-[#d99a2b]">+</span>}
          <span className="text-sm font-black uppercase text-white md:text-base">{p}</span>
        </Fragment>
      ))}

      <span className="text-lg font-black text-[#d99a2b]">=</span>
      <span className="text-sm font-black uppercase text-[#d99a2b] md:text-base">{summaryResult}</span>
    </motion.div>
  );
}
