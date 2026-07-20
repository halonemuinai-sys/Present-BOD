import { motion } from "framer-motion";
import { Check, Settings2, Star } from "lucide-react";
import type { Timeline2026Track } from "./types";

const barBg: Record<Timeline2026Track["status"], string> = {
  completed: "bg-gradient-to-r from-green-600 to-green-500",
  validation: "bg-gradient-to-r from-indigo-700 to-indigo-600",
  planned: "bg-slate-300",
  golive: "bg-gradient-to-r from-green-800 to-green-700",
};

const endCircleBg: Record<Timeline2026Track["status"], string> = {
  completed: "bg-white",
  validation: "bg-white",
  planned: "bg-slate-100",
  golive: "bg-green-800",
};

const labelColor: Record<Timeline2026Track["status"], string> = {
  completed: "text-green-700",
  validation: "text-indigo-700",
  planned: "text-slate-500",
  golive: "text-green-800",
};

function segmentClipPath(index: number, count: number) {
  if (count === 1) return undefined;
  if (index === 0) return "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)";
  if (index === count - 1) return "polygon(0 50%, 10px 0, 100% 0, 100% 100%, 10px 100%)";
  return "polygon(0 50%, 10px 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 10px 100%)";
}

function EndIcon({ status }: { status: Timeline2026Track["status"] }) {
  if (status === "completed") return <Check size={14} className="text-green-600" strokeWidth={3} />;
  if (status === "planned") return <Settings2 size={13} className="text-slate-400" />;
  return null;
}

export default function Timeline2026Bar({ track }: { track: Timeline2026Track }) {
  const isGoLive = track.status === "golive";

  return (
    <div className="flex items-center">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ originX: 0 }}
        className={`relative flex h-8 flex-1 items-stretch overflow-hidden rounded-full shadow-md ${barBg[track.status]}`}
      >
        {track.segments?.map((seg, i, arr) => (
          <div
            key={seg.label}
            style={{
              flexGrow: seg.weight,
              flexBasis: 0,
              marginLeft: i > 0 ? -10 : 0,
              clipPath: segmentClipPath(i, arr.length),
            }}
            className="flex items-center justify-center px-3 text-center text-[9px] font-bold leading-tight text-white"
          >
            <span className="truncate">{seg.label}</span>
          </div>
        ))}

        {isGoLive && (
          <div className="flex flex-1 items-center justify-center">
            <Star size={16} className="fill-white text-white" />
          </div>
        )}
      </motion.div>

      {!isGoLive && (
        <span
          className={`z-10 -ml-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full shadow ring-[3px] ring-white ${endCircleBg[track.status]}`}
        >
          <EndIcon status={track.status} />
        </span>
      )}

      <span className={`shrink-0 pl-2.5 text-[11px] font-bold leading-tight ${labelColor[track.status]}`}>
        {track.statusLabel}
        {track.statusSubLabel && (
          <>
            <br />
            {track.statusSubLabel}
          </>
        )}
      </span>
    </div>
  );
}
