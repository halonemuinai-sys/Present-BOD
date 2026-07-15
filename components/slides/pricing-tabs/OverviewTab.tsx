import { motion, type Variants } from "framer-motion";
import { composition, grandFixedTotal, grandRecurringTotal, meta } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const metaRows: { label: string; value: string }[] = [
  { label: "Prepared For", value: meta.preparedFor },
  { label: "Prepared By", value: meta.preparedBy },
  { label: "Date", value: meta.date },
  { label: "Currency", value: meta.currency },
  { label: "Duration", value: meta.duration },
  { label: "Status", value: meta.status },
];

export default function OverviewTab() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-[#1e3a5f] p-5 text-white">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            Fixed Development (One-Time)
          </span>
          <span className="mt-1 block text-3xl font-extrabold">{grandFixedTotal}</span>
          <span className="text-xs text-white/60">Section A — total scope, before PPN (11%)</span>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Recurring Costs (Annual)
          </span>
          <span className="mt-1 block text-3xl font-extrabold text-[#1e3a5f]">{grandRecurringTotal}</span>
          <span className="text-xs text-slate-400">Section B — from Year 1 onward</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 p-4 sm:grid-cols-3">
        {metaRows.map((row) => (
          <div key={row.label}>
            <span className="block text-[10px] font-bold uppercase tracking-wide text-slate-400">
              {row.label}
            </span>
            <span className="text-sm font-bold text-slate-800">{row.value}</span>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 p-4">
        <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
          Fixed Cost Composition
        </span>
        <p className="mb-3 text-xs text-slate-400">Relative share of one-time development scope</p>
        <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col gap-2.5">
          {composition.map((row) => (
            <motion.div key={row.section} variants={rowVariants} className="flex items-center gap-3 text-xs">
              <span className="w-10 shrink-0 font-bold text-slate-400">{row.section}</span>
              <span className="w-56 shrink-0 truncate text-slate-700">{row.description}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${row.percent}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-full rounded-full bg-amber-500"
                />
              </div>
              <span className="w-14 shrink-0 text-right font-bold text-slate-600">{row.percent}%</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
