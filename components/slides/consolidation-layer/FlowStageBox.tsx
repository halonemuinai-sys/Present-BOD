import { motion } from "framer-motion";
import type { FlowStageData } from "./types";

export default function FlowStageBox({ data }: { data: FlowStageData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ x: 3 }}
      transition={{ duration: 0.3 }}
      className="flex cursor-pointer items-center gap-3 rounded-xl border border-emerald-200 border-l-4 border-l-emerald-600 bg-emerald-50/40 px-4 py-3"
    >
      <motion.span
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(21, 128, 61, 0.35)",
            "0 0 0 6px rgba(21, 128, 61, 0)",
            "0 0 0 0 rgba(21, 128, 61, 0.35)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700"
      >
        <data.icon size={18} className="text-white" />
      </motion.span>
      <div>
        <p className="text-sm font-black leading-tight text-[#101b3d] md:text-base">{data.title}</p>
        <p className="text-xs italic text-slate-500">{data.subtitle}</p>
      </div>
    </motion.div>
  );
}
