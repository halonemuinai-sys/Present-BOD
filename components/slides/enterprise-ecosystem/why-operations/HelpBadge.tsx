import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

export default function HelpBadge({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, type: "spring", stiffness: 300, damping: 15 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="relative flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white shadow-lg ring-4 ring-white"
      aria-label="Mengapa membutuhkan Enterprise Operations Platform?"
      title="Mengapa membutuhkan platform ini?"
    >
      <motion.span
        animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        className="absolute inset-0 -z-10 rounded-full bg-green-500"
      />
      <motion.span
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="flex"
      >
        <HelpCircle size={18} />
      </motion.span>
    </motion.button>
  );
}
