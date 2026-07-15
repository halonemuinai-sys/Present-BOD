import { motion } from "framer-motion";
import { summaryStats } from "./data";

export default function SummaryStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="mt-4 grid grid-cols-1 gap-4 divide-y divide-slate-200 rounded-2xl bg-slate-50 p-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
    >
      {summaryStats.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex items-center gap-3 ${i > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
            <stat.icon size={20} />
          </div>
          <div>
            <span className="block text-2xl font-extrabold text-[#2c4a4e]">{stat.value}</span>
            <span className="text-xs text-slate-500">{stat.label}</span>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
