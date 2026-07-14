import { motion } from "framer-motion";
import { summaryStats } from "./data";

export default function SummaryStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="mt-4 grid grid-cols-1 gap-4 rounded-2xl bg-slate-50 p-5 sm:grid-cols-3"
    >
      {summaryStats.map((stat) => (
        <div key={stat.label} className="text-center sm:text-left">
          <span className="block text-2xl font-extrabold text-[#2c4a4e]">{stat.value}</span>
          <span className="text-xs text-slate-500">{stat.label}</span>
        </div>
      ))}
    </motion.div>
  );
}
