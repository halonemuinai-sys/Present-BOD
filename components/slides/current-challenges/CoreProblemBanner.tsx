import { motion } from "framer-motion";
import { TriangleAlert } from "lucide-react";
import { coreProblemLabel, coreProblemText } from "./data";

export default function CoreProblemBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-4 rounded-2xl border border-red-200 bg-red-50/70 px-5 py-4"
    >
      <motion.span
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100"
      >
        <TriangleAlert size={22} className="text-red-500" />
      </motion.span>

      <p className="shrink-0 border-r border-red-200 pr-4 text-sm font-black uppercase leading-tight text-red-600 md:text-base">
        {coreProblemLabel}
      </p>

      <p className="text-sm font-semibold leading-snug text-[#101b3d] md:text-base">{coreProblemText}</p>
    </motion.div>
  );
}
