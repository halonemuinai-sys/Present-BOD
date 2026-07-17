import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { decisionColorClasses, decisionColumns } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const col: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

const iconStamp: Variants = {
  hidden: { scale: 0.5, rotate: -12, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 16, delay: 0.1 },
  },
};

const arrow: Variants = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.25, duration: 0.3 } },
};

export default function BetterDecisionModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white p-5 md:p-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <h2 className="text-lg font-extrabold uppercase tracking-tight text-slate-900 md:text-xl">
            Better Decision
          </h2>
          <button onClick={onClose} className="slide-nav-btn shrink-0" aria-label="Close details">
            <X size={18} />
          </button>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex items-stretch gap-1"
        >
          {decisionColumns.map((c, i) => {
            const cls = decisionColorClasses[c.color];
            return (
              <Fragment key={c.title}>
                <motion.div variants={col} className="flex min-w-0 flex-1 flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <motion.div
                      variants={iconStamp}
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 ${cls.ring}`}
                    >
                      <c.icon size={24} className={cls.iconText} />
                    </motion.div>
                    <p className={`text-sm font-extrabold uppercase leading-tight ${cls.titleText}`}>{c.title}</p>
                  </div>
                  <ul className="space-y-1">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-1.5 text-xs leading-snug text-slate-600">
                        <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${cls.dot}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-auto rounded-lg px-3 py-2 text-center text-xs font-medium ${cls.captionBg} ${cls.captionText}`}>
                    {c.caption}
                  </div>
                </motion.div>

                {i < decisionColumns.length - 1 && (
                  <motion.div variants={arrow} className="flex shrink-0 items-center px-1 pb-10">
                    <ChevronRight size={20} className="text-slate-300" />
                  </motion.div>
                )}
              </Fragment>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
