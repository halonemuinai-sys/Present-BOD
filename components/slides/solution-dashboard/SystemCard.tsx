import { motion, type Variants } from "framer-motion";
import type { SystemCardData } from "./types";

const row: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

export default function SystemCard({ data }: { data: SystemCardData }) {
  return (
    <motion.div
      variants={row}
      whileHover={{ y: -2 }}
      className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#101b3d] text-white">
        <data.icon size={15} />
      </span>
      <div>
        <p className="text-xs font-black uppercase leading-tight text-[#101b3d]">{data.title}</p>
        <span className="flex items-center gap-1 text-[10px] text-slate-500">
          {data.subtitle}
          {data.logoDomain && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`https://www.google.com/s2/favicons?domain=${data.logoDomain}&sz=64`}
              alt=""
              className="h-3 w-3 rounded-sm"
            />
          )}
        </span>
      </div>
    </motion.div>
  );
}
