import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function DownArrow() {
  return (
    <div className="flex py-1">
      {/* Matches StageLabel's width so the arrow centers under the content column,
          not under the whole row (label + content). */}
      <div className="hidden shrink-0 md:block md:w-44" />
      <div className="flex flex-1 justify-center">
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={22} className="text-green-800" />
        </motion.div>
      </div>
    </div>
  );
}
