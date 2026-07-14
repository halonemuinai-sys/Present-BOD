import { motion } from "framer-motion";

export default function RoadmapBadge() {
  return (
    <motion.p
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-700"
    >
      Roadmap Digitalisasi 2026
    </motion.p>
  );
}
