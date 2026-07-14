import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { colorClasses, type BandColor } from "./types";

export default function VerticalArrow({ color }: { color: BandColor }) {
  const c = colorClasses[color];

  return (
    <div className="flex justify-center">
      <motion.div
        animate={{ y: [4, -4, 4], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowUp size={22} className={c.text} />
      </motion.div>
    </div>
  );
}
