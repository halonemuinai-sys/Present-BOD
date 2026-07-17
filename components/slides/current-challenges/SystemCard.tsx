import { motion, type Variants } from "framer-motion";
import type { SystemCardData } from "./types";

const card: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

export default function SystemCard({ data, flip }: { data: SystemCardData; flip?: boolean }) {
  return (
    <motion.div
      variants={flip ? { hidden: { opacity: 0, x: 12 }, visible: card.visible } : card}
      whileHover={{ y: -2 }}
      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#101b3d] text-white">
        <data.icon size={18} />
      </span>
      <div>
        <p className="flex items-center gap-1.5 text-sm font-black uppercase leading-tight text-[#101b3d]">
          {data.title}
        </p>
        <span className="flex items-center gap-1 text-xs text-slate-500">
          {data.subtitle}
          {data.logoDomain && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`https://www.google.com/s2/favicons?domain=${data.logoDomain}&sz=64`}
              alt=""
              className="h-3.5 w-3.5 rounded-sm"
            />
          )}
        </span>
      </div>
    </motion.div>
  );
}
