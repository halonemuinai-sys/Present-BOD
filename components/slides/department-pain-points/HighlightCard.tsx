import { motion, type Variants } from "framer-motion";
import type { HighlightCardData } from "./types";
import { colorClasses } from "./types";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

export default function HighlightCard({ item }: { item: HighlightCardData }) {
  const c = colorClasses[item.color];

  return (
    <motion.div
      variants={cardVariants}
      className={`flex flex-1 items-center gap-3 rounded-xl border bg-white p-3 ${c.border}`}
    >
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${c.bg}`}>
        <item.icon size={20} className={c.text} />
      </div>
      <div>
        <span className="block text-sm font-bold text-slate-900">{item.title}</span>
        <span className="text-xs text-slate-500">{item.text}</span>
      </div>
    </motion.div>
  );
}
