import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronsRight } from "lucide-react";
import { flowLabel, flowSteps } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
};

const step: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

const iconStamp: Variants = {
  hidden: { scale: 0.5, rotate: -10, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 16, delay: 0.1 },
  },
};

export default function StrategyFlow() {
  return (
    <div>
      <p className="text-center text-sm font-black uppercase tracking-wide text-[#101b3d] md:text-base">
        {flowLabel}
      </p>
      <div className="mx-auto mt-2 h-px w-24 bg-[#d99a2b]/60" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mt-6 flex items-start gap-1"
      >
        {flowSteps.map((s, i) => (
          <Fragment key={s.title}>
            <motion.div variants={step} className="flex min-w-0 flex-1 flex-col items-center gap-3 text-center">
              <motion.div variants={iconStamp}>
                <s.icon size={44} className="text-[#101b3d]" strokeWidth={1.75} />
              </motion.div>
              <p className="max-w-[8rem] text-xs font-black uppercase leading-tight text-[#101b3d] md:text-sm">
                {s.title}
              </p>
              <p className="max-w-[8rem] text-[11.5px] font-semibold leading-snug text-slate-600">{s.text}</p>
            </motion.div>

            {i < flowSteps.length - 1 && (
              <div className="flex shrink-0 items-center px-0.5 pt-10">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  <ChevronsRight size={22} className="text-[#d99a2b]" />
                </motion.div>
              </div>
            )}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}
