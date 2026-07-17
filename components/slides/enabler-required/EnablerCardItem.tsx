import { motion, type Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { EnablerCard } from "./types";
import { statusMeta } from "./data";

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

export default function EnablerCardItem({ data, showArrow }: { data: EnablerCard; showArrow?: boolean }) {
  const s = statusMeta[data.status];

  return (
    <div className="relative h-full">
      <motion.div
        variants={card}
        whileHover={{ y: -3 }}
        className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 pt-6 shadow-sm"
      >
        <span className="absolute -top-2.5 left-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#101b3d] text-xs font-black text-white ring-4 ring-white">
          {data.number}
        </span>

        <motion.div
          variants={iconStamp}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#101b3d]"
        >
          <data.icon size={22} className="text-white" />
        </motion.div>

        <p className="mt-3 text-sm font-black uppercase leading-tight text-[#101b3d] md:text-base">
          {data.title}
        </p>
        <div className="mt-1.5 h-0.5 w-8 bg-[#d99a2b]" />

        {data.description && (
          <p className="mt-2 flex-1 text-xs leading-snug text-slate-500">{data.description}</p>
        )}

        <span
          className={`mt-3 flex w-full items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-black uppercase ${s.bg} ${s.text}`}
        >
          {data.status === "in-development" ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="flex"
            >
              <s.icon size={13} />
            </motion.span>
          ) : data.status === "next-project" ? (
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              className="flex"
            >
              <s.icon size={13} />
            </motion.span>
          ) : (
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: [0, 1.3, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex"
            >
              <s.icon size={13} />
            </motion.span>
          )}
          {s.label}
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
