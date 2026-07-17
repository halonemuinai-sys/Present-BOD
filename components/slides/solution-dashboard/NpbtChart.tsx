import { motion } from "framer-motion";
import { npbtTrend } from "./data";

export default function NpbtChart() {
  const max = Math.max(...npbtTrend.map((d) => d.value));

  return (
    <div>
      <div className="flex h-16 items-end gap-1">
        {npbtTrend.map((d, i) => (
          <motion.div
            key={d.month}
            initial={{ height: 0 }}
            whileInView={{ height: `${(d.value / max) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            className="flex-1 rounded-t bg-[#3b82f6]"
          />
        ))}
      </div>
      <div className="mt-1 flex justify-between text-[8px] text-white/40">
        {npbtTrend.map((d) => (
          <span key={d.month}>{d.month}</span>
        ))}
      </div>
    </div>
  );
}
