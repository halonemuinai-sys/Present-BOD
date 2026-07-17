import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";
import type { KpiTileData } from "./types";
import { kpiColorClasses } from "./types";

const tile: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

export default function KpiTile({ data }: { data: KpiTileData }) {
  const c = kpiColorClasses[data.color];
  return (
    <motion.div variants={tile} className="rounded-lg border border-white/10 bg-white/5 p-2.5">
      <div className="flex items-center gap-1.5">
        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${c.bg}`}>
          <data.icon size={12} className={c.text} />
        </span>
        <p className="text-[9px] font-bold uppercase leading-tight text-white/60">{data.label}</p>
      </div>
      <div className="mt-2 flex items-baseline gap-1">
        <p className={`text-lg font-black leading-none ${c.text}`}>{data.value}</p>
        {data.trend && (
          <span className={data.trend === "up" ? "text-emerald-400" : "text-red-400"}>
            {data.trend === "up" ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
          </span>
        )}
      </div>
      <p className="mt-0.5 text-[9px] text-white/40">{data.note}</p>
    </motion.div>
  );
}
