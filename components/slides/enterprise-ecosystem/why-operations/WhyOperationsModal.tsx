import { motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { whyColumns, whyTitle } from "./data";
import WhyColumn from "./WhyColumn";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function WhyOperationsModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-slate-50 p-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <h2 className="text-lg font-bold leading-snug text-slate-900 md:text-xl">{whyTitle}</h2>
          <button onClick={onClose} className="slide-nav-btn shrink-0" aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {whyColumns.map((column) => (
            <WhyColumn key={column.question} column={column} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
