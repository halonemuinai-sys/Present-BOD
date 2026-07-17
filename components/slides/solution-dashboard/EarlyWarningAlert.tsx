import { motion, type Variants } from "framer-motion";
import { TriangleAlert } from "lucide-react";
import { earlyWarnings } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function EarlyWarningAlert() {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
      <p className="text-[9px] font-bold uppercase tracking-wide text-white/60">Early Warning Alert</p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-2 flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:gap-4"
      >
        {earlyWarnings.map((w) => (
          <motion.div key={w.text} variants={item} className="flex items-center gap-1.5">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <TriangleAlert size={13} className="shrink-0 text-amber-400" />
            </motion.span>
            <p className="text-[10px] leading-tight text-white/80">
              {w.text} <span className="font-bold text-white">{w.detail}</span>
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
