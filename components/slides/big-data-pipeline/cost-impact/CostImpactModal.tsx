import { motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import NetsuiteOption from "./NetsuiteOption";
import PlatformOption from "./PlatformOption";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const col: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function CostImpactModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-slate-50 p-4 md:p-5"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-slate-900 md:text-lg">Cost Impact — Build Comparison</h2>
            <p className="text-xs text-slate-500">NetSuite Customization vs. Enterprise Data Platform</p>
          </div>
          <button onClick={onClose} className="slide-nav-btn shrink-0" aria-label="Close details">
            <X size={18} />
          </button>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid items-stretch gap-4 md:grid-cols-2"
        >
          <motion.div variants={col}>
            <NetsuiteOption />
          </motion.div>
          <motion.div variants={col}>
            <PlatformOption />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
