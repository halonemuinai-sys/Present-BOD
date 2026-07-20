import { motion } from "framer-motion";
import type { Timeline2026Track } from "./types";
import Timeline2026Bar from "./Timeline2026Bar";

const iconBg: Record<Timeline2026Track["status"], string> = {
  completed: "bg-green-50 text-green-700",
  validation: "bg-indigo-50 text-indigo-700",
  planned: "bg-slate-100 text-slate-500",
  golive: "bg-slate-100 text-slate-700",
};

export default function Timeline2026Row({
  track,
  onOpen,
}: {
  track: Timeline2026Track;
  onOpen: (track: Timeline2026Track) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ x: 2 }}
      transition={{ duration: 0.3, delay: track.number * 0.03 }}
      onClick={() => onOpen(track)}
      className="group flex cursor-pointer items-center gap-4 rounded-lg py-2.5 transition-colors duration-200 hover:bg-slate-50"
    >
      <div className="flex w-56 shrink-0 items-start gap-2.5 md:w-64">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110 ${iconBg[track.status]}`}
        >
          <track.icon size={16} />
        </span>
        <div className="min-w-0">
          <p className="text-[11.5px] font-black leading-tight text-slate-900">
            {track.number}. {track.title}
          </p>
          <p className="mt-0.5 text-[10px] leading-snug text-slate-400">{track.description}</p>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-8 items-center">
        <div style={{ gridColumn: `${track.startMonth + 1} / span ${track.span}` }}>
          <Timeline2026Bar track={track} />
        </div>
      </div>
    </motion.div>
  );
}
