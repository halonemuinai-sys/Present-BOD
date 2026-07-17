import { motion, type Variants } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { insightColorClasses, insightSteps, insightSubtitle } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const step: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

const badge: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: "spring", stiffness: 400, damping: 18, delay: 0.05 } },
};

const iconStamp: Variants = {
  hidden: { scale: 0.5, rotate: -12, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 16, delay: 0.15 },
  },
};

const arrow: Variants = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.3 } },
};

export default function ActionableInsightModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white p-5 md:p-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-extrabold tracking-tight text-slate-900 md:text-xl">
              How <span className="text-emerald-600">Actionable Insight</span> Works
            </h2>
            <p className="text-sm text-slate-500">{insightSubtitle}</p>
          </div>
          <button onClick={onClose} className="slide-nav-btn shrink-0" aria-label="Close details">
            <X size={18} />
          </button>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex items-start gap-1"
        >
          {insightSteps.map((s, i) => {
            const c = insightColorClasses[s.color];
            return (
              <div key={s.number} className="flex min-w-0 flex-1 items-start">
                <motion.div variants={step} className="flex min-w-0 flex-1 flex-col items-center gap-3 text-center">
                  <div className="flex h-[124px] flex-col items-center justify-start gap-3">
                    <motion.span
                      variants={badge}
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-extrabold text-white ${c.numberBg}`}
                    >
                      {s.number}
                    </motion.span>
                    <motion.div
                      variants={iconStamp}
                      className={`flex h-20 w-20 items-center justify-center rounded-full ${c.iconBg}`}
                    >
                      <s.icon size={30} className={c.iconText} />
                    </motion.div>
                  </div>
                  <div>
                    <p className={`text-sm font-extrabold uppercase tracking-wide ${c.titleText}`}>{s.title}</p>
                    <p className="mt-1 text-xs leading-snug text-slate-600">{s.description}</p>
                  </div>
                  <div className={`w-full rounded-lg px-2.5 py-2 ${c.exampleBg}`}>
                    <p className={`text-[10px] font-bold ${c.exampleLabel}`}>Contoh:</p>
                    <p className="text-[11px] leading-snug text-slate-700">{s.example}</p>
                  </div>
                </motion.div>

                {i < insightSteps.length - 1 && (
                  <motion.div variants={arrow} className="flex h-[124px] shrink-0 items-center px-1.5">
                    <ArrowRight size={18} className="text-slate-300" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
