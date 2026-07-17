import { motion, type Variants } from "framer-motion";
import { ArrowDown, TrendingUp, X } from "lucide-react";
import { fromItems, fromTitle, toItems, toTitle } from "./data";

const topList: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const bottomList: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.75 } },
};

const row: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

const badgePop: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: "spring", stiffness: 400, damping: 18 } },
};

export default function BusinessGrowthModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-h-[92vh] w-full max-w-sm overflow-y-auto rounded-2xl bg-white p-1.5 shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="slide-nav-btn absolute right-3 top-3 z-20" aria-label="Close details">
          <X size={18} />
        </button>

        <div className="relative overflow-hidden rounded-xl border border-slate-200">
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-50 px-6 pb-10 pt-6 text-center"
          >
            <p className="text-sm font-extrabold uppercase tracking-wide text-[#101b3d]">{fromTitle}</p>
            <motion.div
              initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
            >
              <TrendingUp size={40} className="mx-auto mt-3 text-slate-400" />
            </motion.div>
            <motion.ul variants={topList} initial="hidden" animate="visible" className="mt-5 space-y-3 text-left">
              {fromItems.map((item) => (
                <motion.li key={item.label} variants={row} className="flex items-center gap-3">
                  <motion.span
                    variants={badgePop}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600"
                  >
                    <item.icon size={16} />
                  </motion.span>
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-emerald-50 px-6 pb-6 pt-10 text-center"
          >
            <p className="text-sm font-extrabold uppercase tracking-wide text-emerald-800">{toTitle}</p>
            <motion.div
              initial={{ scale: 0.4, rotate: 10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.65 }}
            >
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
              >
                <TrendingUp size={40} className="mx-auto mt-3 text-emerald-600" />
              </motion.div>
            </motion.div>
            <motion.ul
              variants={bottomList}
              initial="hidden"
              animate="visible"
              className="mt-5 space-y-3 text-left"
            >
              {toItems.map((item) => (
                <motion.li key={item.label} variants={row} className="flex items-center gap-3">
                  <motion.span
                    variants={badgePop}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
                  >
                    <item.icon size={16} />
                  </motion.span>
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ y: -18, opacity: 0, scale: 0.4 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.4 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-slate-200 bg-white shadow-md"
            >
              <ArrowDown size={20} className="text-slate-400" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
