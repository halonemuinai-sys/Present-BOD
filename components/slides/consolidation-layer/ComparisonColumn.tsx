import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { ComparisonColumn as ComparisonColumnData } from "./types";
import SystemGrid from "./SystemGrid";

const accentStyles = {
  amber: {
    arrow: "text-[#d99a2b]",
    box: "border-[#d99a2b] bg-white text-[#101b3d]",
    bullet: "text-slate-500",
  },
  green: {
    arrow: "text-emerald-700",
    box: "border-emerald-600 bg-emerald-50 text-[#101b3d]",
    bullet: "text-[#101b3d]",
  },
} as const;

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function ComparisonColumn({ data }: { data: ComparisonColumnData }) {
  const style = accentStyles[data.accent];

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
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
        className="inline-block w-fit rounded-full bg-[#101b3d] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-white md:text-xs"
      >
        {data.label}
      </motion.span>
      <h2 className="mt-1 text-2xl font-bold text-[#101b3d] md:text-3xl">{data.title}</h2>
      <p className="mt-1 text-sm italic text-slate-500">{data.subtitle}</p>

      <div className="mt-5">
        <SystemGrid />
      </div>

      {data.steps.map((step) => (
        <div key={step} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="py-2"
          >
            <ArrowDown size={20} className={style.arrow} />
          </motion.div>
          <div className={`w-full rounded-lg border-2 px-4 py-3 text-center text-sm font-black md:text-base ${style.box}`}>
            {step}
          </div>
        </div>
      ))}

      <motion.ul
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-4 flex flex-1 flex-col gap-2"
      >
        {data.bullets.map((b) => (
          <motion.li
            key={b}
            variants={item}
            className={`flex gap-2 text-sm leading-snug ${style.bullet}`}
          >
            <span className="shrink-0">–</span>
            <span>{b}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
