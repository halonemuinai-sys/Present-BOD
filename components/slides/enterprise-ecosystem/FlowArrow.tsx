import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { colorClasses, type LayerColor } from "./types";

const arrowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function FlowArrow({ color }: { color: LayerColor }) {
  const c = colorClasses[color];

  return (
    <motion.div
      variants={arrowVariants}
      className="hidden h-12 w-12 shrink-0 items-center justify-center self-center rounded-full bg-white shadow-md md:flex"
    >
      <motion.div
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowRight size={20} className={c.text} />
      </motion.div>
    </motion.div>
  );
}
