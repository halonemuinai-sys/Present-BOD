"use client";

import { motion } from "framer-motion";

export default function DashedArrow({ flip }: { flip?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className={`flex items-center justify-center ${flip ? "rotate-180" : ""}`}
    >
      <svg width="32" height="14" viewBox="0 0 32 14" fill="none">
        <motion.line
          x1="1"
          y1="7"
          x2="24"
          y2="7"
          stroke="#ef4444"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -8] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
        <path
          d="M22 3L28 7L22 11"
          stroke="#ef4444"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
