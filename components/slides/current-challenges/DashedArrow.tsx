import { motion } from "framer-motion";

export default function DashedArrow({ flip }: { flip?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className={`flex items-center justify-center ${flip ? "rotate-180" : ""}`}
    >
      <svg width="26" height="14" viewBox="0 0 28 14" fill="none">
        <line x1="1" y1="7" x2="20" y2="7" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
        <path
          d="M18 3L24 7L18 11"
          stroke="#cbd5e1"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
