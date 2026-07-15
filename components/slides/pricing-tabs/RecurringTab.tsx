import { motion, type Variants } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { grandRecurringTotal, recurringItems, recurringNotes } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function RecurringTab() {
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {recurringItems.map((item) => (
          <motion.div
            key={item.code}
            variants={cardVariants}
            className="rounded-xl border border-slate-200 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-amber-700">
                  {item.code}
                </span>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
              </div>
              <div className="text-right">
                <span className="block text-base font-extrabold text-[#1e3a5f]">{item.annual}</span>
                <span className="text-[10px] text-slate-400">{item.percent}% of annual</span>
              </div>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.percent}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full rounded-full bg-amber-500"
              />
            </div>
            <p className="mt-2 text-xs leading-snug text-slate-500">{item.detail}</p>
            <span className="mt-2 inline-block rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">
              {item.monthly}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex items-center justify-between rounded-xl bg-[#1e3a5f] px-4 py-3">
        <span className="text-xs font-bold uppercase tracking-wide text-amber-300">
          Subtotal (Gross) — Annual
        </span>
        <span className="text-lg font-extrabold text-white">{grandRecurringTotal}</span>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <span className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-slate-500">
          <AlertCircle size={13} />
          Notes
        </span>
        <ul className="flex flex-col gap-1.5">
          {recurringNotes.map((note) => (
            <li key={note} className="flex items-start gap-2 text-xs leading-snug text-slate-500">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
