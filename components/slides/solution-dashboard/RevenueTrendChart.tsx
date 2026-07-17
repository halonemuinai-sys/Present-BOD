import { motion } from "framer-motion";
import { revenueTrend } from "./data";

export default function RevenueTrendChart() {
  const max = Math.max(...revenueTrend.map((d) => d.value));
  const coords = revenueTrend.map((d, i) => ({
    x: (i / (revenueTrend.length - 1)) * 100,
    y: 100 - (d.value / max) * 100,
  }));
  const pathD = coords.map((c, i) => `${i === 0 ? "M" : "L"} ${c.x} ${c.y}`).join(" ");

  return (
    <div>
      <div className="relative h-16">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full overflow-visible">
          <motion.path
            d={pathD}
            fill="none"
            stroke="#4ade80"
            strokeWidth={1.5}
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        {coords.map((c, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4ade80]"
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
          />
        ))}
      </div>
      <div className="mt-1 flex justify-between text-[8px] text-white/40">
        {revenueTrend.map((d) => (
          <span key={d.month}>{d.month}</span>
        ))}
      </div>
    </div>
  );
}
