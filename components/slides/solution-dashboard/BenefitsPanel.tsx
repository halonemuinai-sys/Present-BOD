import { motion, type Variants } from "framer-motion";
import { benefits } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const row: Variants = {
  hidden: { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

export default function BenefitsPanel() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex h-full flex-col divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-sm"
    >
      {benefits.map((b) => (
        <motion.div key={b.title} variants={row} className="flex flex-1 items-center gap-3 py-3">
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
              b.color === "amber" ? "bg-[#d99a2b]" : "bg-[#101b3d]"
            }`}
          >
            <b.icon size={19} className="text-white" />
          </span>
          <div>
            <p className="text-sm font-black uppercase leading-tight text-[#101b3d]">{b.title}</p>
            <p className="mt-0.5 text-xs text-slate-500">{b.text}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
