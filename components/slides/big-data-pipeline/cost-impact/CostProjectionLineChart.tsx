import { motion } from "framer-motion";
import type { ProjectionPoint } from "./data";

export default function CostProjectionLineChart({
  points,
  max,
  ticks,
  lineColor,
}: {
  points: ProjectionPoint[];
  max: number;
  ticks: number[];
  lineColor: string;
}) {
  const coords = points.map((p, i) => ({
    x: (i / (points.length - 1)) * 100,
    y: 100 - (p.value / max) * 100,
    p,
  }));
  const pathD = coords.map((c, i) => `${i === 0 ? "M" : "L"} ${c.x} ${c.y}`).join(" ");

  return (
    <div className="relative flex gap-2 pt-7">
      <span className="absolute left-0 top-4 text-[9px] text-slate-400">(Miliar)</span>
      <div className="flex h-40 flex-col justify-between text-right text-[10px] text-slate-400">
        {[...ticks].reverse().map((t) => (
          <span key={t}>{t.toFixed(1)}</span>
        ))}
      </div>
      <div className="flex-1">
        <div className="relative h-40">
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
            {ticks.map((t) => (
              <div key={t} className="h-px w-full bg-slate-100" />
            ))}
          </div>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            <motion.path
              d={pathD}
              fill="none"
              stroke={lineColor}
              strokeWidth={1.5}
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </svg>
          {coords.map((c) => (
            <div
              key={`dot-${c.p.year}`}
              className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-white"
              style={{ left: `${c.x}%`, top: `${c.y}%`, backgroundColor: lineColor }}
            />
          ))}
          {coords.map((c) => (
            <span
              key={`label-${c.p.year}`}
              className="absolute -translate-x-1/2 -translate-y-full whitespace-nowrap pb-2 text-center text-[10px] font-bold leading-tight text-emerald-800"
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
            >
              {c.p.value.toFixed(2)}
              <br />
              Miliar
            </span>
          ))}
        </div>
        <div className="mt-2 flex justify-between">
          {points.map((p) => (
            <span key={p.year} className="text-[10px] text-slate-400">
              {p.year}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
