import { motion, type Variants } from "framer-motion";
import type { GrandTotal, PricingSection } from "./types";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function PricingTable({
  sections,
  grandTotal,
}: {
  sections: PricingSection[];
  grandTotal?: GrandTotal;
}) {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col gap-4">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          variants={sectionVariants}
          className="overflow-hidden rounded-xl border border-slate-200"
        >
          <div className="bg-[#1e3a5f] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white">
            {section.title}
          </div>
          <div className="divide-y divide-slate-100 bg-white">
            {section.items.map((item) => (
              <div key={item.number} className="flex items-center gap-3 px-4 py-2 text-sm">
                <span className="w-5 shrink-0 text-xs text-slate-300">{item.number}</span>
                <span className="flex-1 font-medium text-slate-700">{item.deliverable}</span>
                <span className="shrink-0 font-bold text-slate-900">{item.price}</span>
              </div>
            ))}
            <div className="flex items-center justify-between bg-slate-50 px-4 py-2.5">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                {section.subtotalLabel}
              </span>
              <span className="text-sm font-extrabold text-[#1e3a5f]">{section.subtotalPrice}</span>
            </div>
          </div>
        </motion.div>
      ))}

      {grandTotal && (
        <motion.div
          variants={sectionVariants}
          className="flex items-center justify-between rounded-xl bg-amber-50 px-4 py-3"
        >
          <span className="text-xs font-bold uppercase tracking-wide text-amber-700">
            {grandTotal.label}
          </span>
          <span className="text-lg font-extrabold text-amber-700">{grandTotal.price}</span>
        </motion.div>
      )}
    </motion.div>
  );
}
