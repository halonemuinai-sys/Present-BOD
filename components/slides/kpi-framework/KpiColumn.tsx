import { motion, type Variants } from "framer-motion";
import type { KpiColumnData } from "./types";
import { kpiColorClasses } from "./types";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const row: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

const iconStamp: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 16, delay: 0.1 } },
};

export default function KpiColumn({ column }: { column: KpiColumnData }) {
  const c = kpiColorClasses[column.color];

  return (
    <div className={`flex h-full flex-col overflow-hidden rounded-2xl border-2 ${c.border} bg-white shadow-sm`}>
      <div className={`px-4 py-3.5 text-center ${c.header}`}>
        <p className="text-sm font-black uppercase tracking-wide text-white md:text-base">{column.label}</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-1 flex-col divide-y divide-slate-100 px-5"
      >
        {column.items.map((item) => (
          <motion.div key={item.title} variants={row} className="flex flex-1 items-center gap-4 py-4">
            <span
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 ${c.ring}`}
            >
              <motion.span variants={iconStamp}>
                <item.icon size={24} className={c.icon} />
              </motion.span>
            </span>
            <span>
              <span className="block text-sm font-black uppercase leading-tight text-[#101b3d] md:text-base">
                {item.title}
              </span>
              <span className="mt-1 block text-xs leading-snug text-slate-600 md:text-sm">{item.text}</span>
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
