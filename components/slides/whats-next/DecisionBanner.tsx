import { motion } from "framer-motion";
import { CircleAlert } from "lucide-react";
import { decisionLabel, decisionText } from "./data";

export default function DecisionBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.005, boxShadow: "0 8px 30px rgba(217, 154, 43, 0.12)" }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-3 rounded-2xl border-2 border-[#d99a2b] bg-amber-50/70 px-6 py-5 text-center transition-colors duration-200 sm:flex-row sm:justify-center sm:text-left"
    >
      <motion.span
        animate={{
          scale: [1, 1.06, 1],
          boxShadow: [
            "0 0 0 0 rgba(217, 154, 43, 0.35)",
            "0 0 0 10px rgba(217, 154, 43, 0)",
            "0 0 0 0 rgba(217, 154, 43, 0.35)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d99a2b]"
      >
        <CircleAlert size={24} className="text-white" />
      </motion.span>

      <p className="text-base font-bold leading-snug text-[#101b3d] md:text-xl">
        <span className="font-black uppercase text-[#d99a2b]">{decisionLabel}</span>
        <span className="mx-2 hidden text-slate-300 sm:inline">|</span>
        <br className="sm:hidden" />
        {decisionText}
      </p>
    </motion.div>
  );
}
