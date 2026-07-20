import { motion, type Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { PillarCard } from "./types";
import { statusLabel } from "./data";

const card: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 240, damping: 22 } },
};

const iconStamp: Variants = {
  hidden: { scale: 0.5, rotate: -10, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 16, delay: 0.1 },
  },
};

export default function PillarCardItem({ data, showArrow }: { data: PillarCard; showArrow?: boolean }) {
  return (
    <div className="relative h-full">
      <motion.div
        variants={card}
        whileHover={{ y: -3 }}
        className="relative flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white px-4 pb-4 pt-8 text-center shadow-sm"
      >
        <span className="absolute -top-3.5 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#101b3d] text-sm font-black text-white ring-4 ring-white">
          {data.number}
        </span>

        <motion.div
          variants={iconStamp}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#101b3d]"
        >
          <data.icon size={24} className="text-white" />
        </motion.div>

        <p className="mt-3 text-sm font-black leading-tight text-[#101b3d] md:text-base">{data.title}</p>
        <div className="mt-1.5 h-0.5 w-8 bg-[#d99a2b]" />

        <span className="mt-4 w-full rounded-full bg-[#d99a2b] px-3 py-2 text-xs font-black text-white md:text-sm">
          {statusLabel[data.status]}
        </span>
      </motion.div>

      {showArrow && (
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 sm:block"
        >
          <ChevronRight size={20} className="text-[#d99a2b]" />
        </motion.div>
      )}
    </div>
  );
}
