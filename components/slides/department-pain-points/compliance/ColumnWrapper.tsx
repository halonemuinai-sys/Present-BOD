import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import type { ComplianceColumn } from "./data";

const card: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 240, damping: 22 } },
};

export default function ColumnWrapper({ data, children }: { data: ComplianceColumn; children: ReactNode }) {
  return (
    <motion.div variants={card} className="flex h-full flex-col">
      <div className="flex items-start gap-2.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-black text-white">
          {data.number}
        </span>
        <div>
          <p className="text-sm font-black uppercase leading-tight text-emerald-800">{data.title}</p>
          <p className="text-[10px] font-semibold text-slate-400">{data.subtitle}</p>
        </div>
      </div>

      <p className="mt-2 text-xs leading-snug text-slate-600">{data.description}</p>

      <div className="mt-3 flex-1 rounded-xl border border-slate-200 bg-slate-50/60 p-3">{children}</div>

      <div className="mt-3 flex items-start gap-2 rounded-lg bg-emerald-50 p-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white">
          <data.valueIcon size={14} />
        </span>
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-wide text-emerald-800">Business Value</p>
          <p className="text-[11px] leading-snug text-slate-600">{data.valueText}</p>
        </div>
      </div>
    </motion.div>
  );
}
