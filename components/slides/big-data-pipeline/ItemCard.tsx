import { motion, type Variants } from "framer-motion";
import type { ItemCardData } from "./types";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

export default function ItemCard({ item }: { item: ItemCardData }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3 }}
      className="flex flex-1 flex-col items-center gap-1.5 rounded-xl border-2 border-green-900 bg-white px-3 py-3 text-center font-kalam"
    >
      <item.icon size={26} className="text-green-700" />
      <span className="text-sm font-bold leading-tight text-green-900">{item.title}</span>
      <span className="text-xs leading-tight text-slate-600">{item.subtitle}</span>
    </motion.div>
  );
}
