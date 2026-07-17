import { motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { legalColumns, legalSubtitle, legalTitle } from "./data";
import ColumnWrapper from "./ColumnWrapper";
import LegalRegistryMockup from "./LegalRegistryMockup";
import ReminderMockup from "./ReminderMockup";
import EmailMockup from "./EmailMockup";
import HowItWorks from "./HowItWorks";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function LegalModal({ onClose }: { onClose: () => void }) {
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
            {legalTitle}
          </h2>
          <p className="mt-1 text-sm text-slate-500">{legalSubtitle}</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2"
        >
          <ColumnWrapper data={legalColumns[0]}>
            <LegalRegistryMockup />
          </ColumnWrapper>

          <ColumnWrapper data={legalColumns[1]}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ReminderMockup />
              <EmailMockup />
            </div>
          </ColumnWrapper>
        </motion.div>

        <HowItWorks />
      </motion.div>
    </motion.div>
  );
}
