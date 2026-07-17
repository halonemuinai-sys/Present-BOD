import { motion, type Variants } from "framer-motion";
import { impactItems, impactLabel } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const row: Variants = {
  hidden: { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

const iconStamp: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 16, delay: 0.1 } },
};

export default function ImpactPanel() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-[#d99a2b]" />
        <p className="text-sm font-black uppercase tracking-wide text-[#101b3d] md:text-base">{impactLabel}</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-4 flex flex-1 flex-col divide-y divide-slate-100"
      >
        {impactItems.map((item) => (
          <motion.div key={item.title} variants={row} className="flex flex-1 items-center gap-3 py-3">
            <motion.span
              variants={iconStamp}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#101b3d]"
            >
              <item.icon size={17} className="text-white" />
            </motion.span>
            <span>
              <span className="block text-sm font-black uppercase leading-tight text-[#101b3d]">
                {item.title}
              </span>
              <span className="mt-0.5 block text-xs leading-snug text-slate-500">{item.text}</span>
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
