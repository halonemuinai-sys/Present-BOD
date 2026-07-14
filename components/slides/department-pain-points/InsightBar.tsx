import { motion } from "framer-motion";
import { insights } from "./data";

export default function InsightBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.4 }}
      className="flex flex-col gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:flex-row sm:divide-x sm:divide-slate-100"
    >
      {insights.map((item) => (
        <div key={item.title} className="flex flex-1 items-start gap-3 sm:pl-4 sm:first:pl-0">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
            <item.icon size={16} />
          </div>
          <div>
            <span className="block text-sm font-bold text-slate-900">{item.title}</span>
            <span className="text-xs leading-snug text-slate-500">{item.text}</span>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
