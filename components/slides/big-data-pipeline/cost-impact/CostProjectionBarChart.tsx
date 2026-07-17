import { motion } from "framer-motion";
import type { ProjectionPoint } from "./data";

export default function CostProjectionBarChart({
  points,
  max,
  ticks,
  barColor,
}: {
  points: ProjectionPoint[];
  max: number;
  ticks: number[];
  barColor: string;
}) {
  return (
    <div className="relative flex gap-2 pt-3">
      <span className="absolute left-0 top-0 text-[9px] text-slate-400">(Miliar)</span>
      <div className="flex h-40 flex-col justify-between text-right text-[10px] text-slate-400">
        {[...ticks].reverse().map((t) => (
          <span key={t}>{t.toFixed(1)}</span>
        ))}
      </div>
      <div className="flex-1">
        <div className="relative flex h-40 items-end gap-3">
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
            {ticks.map((t) => (
              <div key={t} className="h-px w-full bg-slate-100" />
            ))}
          </div>
          {points.map((p) => {
            const pct = (p.value / max) * 100;
            return (
              <div key={p.year} className="relative z-10 flex h-full flex-1 items-end justify-center">
                <span
                  className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-[10px] font-bold leading-tight text-slate-700"
                  style={{ bottom: `calc(${pct}% + 6px)` }}
                >
                  {p.value.toFixed(2)}
                  <br />
                  Miliar
                </span>
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`w-full max-w-10 rounded-t ${barColor}`}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-2 flex gap-3">
          {points.map((p) => (
            <span key={p.year} className="flex-1 text-center text-[10px] text-slate-400">
              {p.year}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
