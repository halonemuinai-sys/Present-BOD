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
        <motion.div
          key={b.title}
          variants={row}
          whileHover={{ x: 6 }}
          className="group flex flex-1 cursor-pointer items-center gap-3 rounded-xl px-3 py-3 -mx-3 transition-colors duration-200 hover:bg-slate-50"
        >
          <motion.span
            animate={
              b.color === "amber"
                ? {
                    boxShadow: [
                      "0 0 0 0 rgba(217, 154, 43, 0.4)",
                      "0 0 0 8px rgba(217, 154, 43, 0)",
                      "0 0 0 0 rgba(217, 154, 43, 0.4)",
                    ],
                  }
                : undefined
            }
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110 ${
              b.color === "amber" ? "bg-[#d99a2b]" : "bg-[#101b3d]"
            }`}
          >
            <b.icon size={19} className="text-white" />
          </motion.span>
          <div>
            <p className="text-sm font-black uppercase leading-tight text-[#101b3d]">{b.title}</p>
            <p className="mt-0.5 text-xs text-slate-500">{b.text}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
