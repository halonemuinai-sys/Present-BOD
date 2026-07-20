import { motion, type Variants } from "framer-motion";
import type { ObjectiveItem } from "./types";

const row: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 240, damping: 22 } },
};

export default function ObjectiveCard({ item }: { item: ObjectiveItem }) {
  return (
    <motion.div variants={row} className="flex items-start gap-4">
      <motion.span
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(217, 154, 43, 0.35)",
            "0 0 0 8px rgba(217, 154, 43, 0)",
            "0 0 0 0 rgba(217, 154, 43, 0.35)",
          ],
        }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#d99a2b] bg-[#101b3d] md:h-[4.5rem] md:w-[4.5rem]"
      >
        <item.icon size={28} className="text-white" strokeWidth={1.75} />
        <item.badgeIcon size={16} className="absolute bottom-2.5 right-2.5 text-[#d99a2b]" strokeWidth={2} />
      </motion.span>

      <div className="flex flex-1 items-start gap-4 rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-sm">
        <span className="text-3xl font-black leading-none text-[#d99a2b] md:text-4xl">{item.number}.</span>
        <div className="min-w-0 border-l border-slate-200 pl-4">
          <p className="text-base font-black leading-tight text-[#101b3d] md:text-lg">{item.title}</p>
          <div className="mt-2 h-0.5 w-8 bg-[#d99a2b]" />
          <p className="mt-2 text-sm leading-snug text-slate-500 md:text-base">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
