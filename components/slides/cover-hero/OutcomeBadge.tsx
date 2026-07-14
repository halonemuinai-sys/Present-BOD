import { motion } from "framer-motion";
import { TrendingUp, Users } from "lucide-react";

export default function OutcomeBadge() {
  return (
    <div className="hidden self-stretch md:flex md:flex-col md:justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex w-40 flex-col items-center gap-2 rounded-2xl border border-green-200 bg-white p-5 text-center shadow-md"
      >
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 border-green-500">
          <TrendingUp size={22} className="text-green-500" />
          <Users size={16} className="-mt-0.5 text-green-700" />
        </div>
        <span className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
          Better Decisions
        </span>
        <div className="text-xs font-bold text-green-700">
          <p>Faster</p>
          <p>Smarter</p>
          <p>Data-Driven</p>
        </div>
      </motion.div>
    </div>
  );
}
