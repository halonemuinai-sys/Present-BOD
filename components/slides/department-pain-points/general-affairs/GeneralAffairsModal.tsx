import { motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { businessImpact, businessImpactLabel, gaCards, gaSubtitle, gaTitle } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 240, damping: 22 } },
};

const iconStamp: Variants = {
  hidden: { scale: 0.5, rotate: -10, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 16, delay: 0.15 },
  },
};

const bulletList: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.3 } },
};

const bulletRow: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

const impactContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.7 } },
};

const impactItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function GeneralAffairsModal({ onClose }: { onClose: () => void }) {
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
        <div className="relative text-center">
          <button
            onClick={onClose}
            className="slide-nav-btn absolute right-0 top-0 shrink-0"
            aria-label="Close details"
          >
            <X size={18} />
          </button>
          <h2 className="text-lg font-extrabold uppercase tracking-tight text-emerald-800 md:text-2xl">
            {gaTitle}
          </h2>
          <p className="mt-1 text-sm text-slate-500">{gaSubtitle}</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {gaCards.map((c) => (
            <motion.div
              key={c.number}
              variants={card}
              className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-4 pt-6 shadow-sm"
            >
              <span className="absolute -top-2.5 left-4 flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-xs font-black text-white ring-4 ring-white">
                {c.number}
              </span>

              <p className="text-sm font-black uppercase leading-tight text-emerald-800 md:text-base">
                {c.title}
              </p>

              <div className="mt-3 flex flex-1 items-start gap-3">
                <motion.div
                  variants={iconStamp}
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-50"
                >
                  <c.icon size={30} className="text-emerald-700" />
                </motion.div>

                <motion.ul variants={bulletList} className="flex-1 space-y-1.5">
                  {c.features.map((f) => (
                    <motion.li
                      key={f.label}
                      variants={bulletRow}
                      className="flex items-center gap-1.5 text-[11px] leading-tight text-slate-600"
                    >
                      <f.icon size={13} className="shrink-0 text-emerald-600" />
                      {f.label}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="mt-3 flex items-start gap-2 rounded-lg bg-emerald-50 p-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white">
                  <c.valueIcon size={14} />
                </span>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wide text-emerald-800">Value</p>
                  <p className="text-[11px] leading-snug text-slate-600">{c.valueText}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
          <p className="mb-4 text-center text-sm font-extrabold uppercase tracking-wide text-emerald-800">
            {businessImpactLabel}
          </p>
          <motion.div
            variants={impactContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          >
            {businessImpact.map((b) => (
              <motion.div key={b.title} variants={impactItem} className="flex flex-col items-center gap-2 text-center">
                <b.icon size={26} className="text-emerald-700" />
                <p className="text-xs font-extrabold uppercase tracking-wide text-emerald-800">{b.title}</p>
                <p className="text-[10px] leading-snug text-slate-500">{b.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
