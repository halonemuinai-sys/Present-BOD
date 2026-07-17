import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";
import { governanceLabel, governanceSteps } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.7 } },
};

const step: Variants = {
  hidden: { opacity: 0, y: 12 },
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

function SolidArrow() {
  return (
    <svg width="22" height="18" viewBox="0 0 28 24" fill="none">
      <path d="M0 8H16V2L28 12L16 22V16H0V8Z" fill="#d99a2b" />
    </svg>
  );
}

export default function GovernancePanel() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-sm backdrop-blur-sm">
      <p className="text-center text-xs font-black uppercase tracking-wide text-[#101b3d] md:text-sm">
        {governanceLabel}
      </p>
      <div className="mx-auto mt-2 h-px w-24 bg-[#d99a2b]/60" />

      <motion.div variants={container} initial="hidden" animate="visible" className="mt-5 flex items-start gap-1">
        {governanceSteps.map((s, i) => (
          <Fragment key={s.title}>
            <motion.div variants={step} className="flex min-w-0 flex-1 flex-col items-center gap-2 text-center">
              <motion.div
                variants={iconStamp}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#101b3d] md:h-16 md:w-16"
              >
                <s.icon size={26} className="text-white" />
              </motion.div>
              <p className="text-[10px] font-black uppercase leading-tight text-[#101b3d] md:text-[11px]">
                {s.title}
              </p>
              <p className="text-[9px] leading-snug text-[#101b3d]/60 md:text-[10px]">{s.text}</p>
            </motion.div>

            {i < governanceSteps.length - 1 && (
              <div className="flex shrink-0 items-center px-0.5 pt-6">
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  <SolidArrow />
                </motion.div>
              </div>
            )}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}
