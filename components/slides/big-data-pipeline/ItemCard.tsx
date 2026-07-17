"use client";

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
      animate={
        item.isInHouse
          ? {
              borderColor: ["#d99a2b", "#f59e0b", "#d99a2b"],
              boxShadow: [
                "0 0 0 0 rgba(217, 154, 43, 0.35)",
                "0 0 0 10px rgba(217, 154, 43, 0)",
                "0 0 0 0 rgba(217, 154, 43, 0.35)",
              ],
            }
          : undefined
      }
      transition={
        item.isInHouse
          ? {
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : undefined
      }
      className={`relative flex flex-1 flex-col items-center gap-1.5 rounded-xl border-2 px-3 py-3 text-center font-kalam ${
        item.isInHouse
          ? "border-[#d99a2b] bg-amber-50/15"
          : "border-green-900 bg-white"
      }`}
    >

      <item.icon size={26} className={item.isInHouse ? "text-amber-600" : "text-green-700"} />
      <span className={`text-sm font-bold leading-tight ${item.isInHouse ? "text-amber-900" : "text-green-900"}`}>
        {item.title}
      </span>
      <span className={`text-xs leading-tight ${item.isInHouse ? "text-amber-800/80" : "text-slate-600"}`}>
        {item.subtitle}
      </span>
    </motion.div>
  );
}
