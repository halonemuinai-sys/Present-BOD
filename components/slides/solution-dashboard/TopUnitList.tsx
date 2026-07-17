import { motion } from "framer-motion";
import { topUnits } from "./data";

export default function TopUnitList() {
  const max = Math.max(...topUnits.map((u) => u.value));

  return (
    <div className="flex flex-col gap-1.5">
      {topUnits.map((u, i) => (
        <div key={u.label} className="flex items-center gap-2">
          <span className="w-10 shrink-0 text-[9px] text-white/60">{u.label}</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(u.value / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="h-full rounded-full bg-[#3b82f6]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
