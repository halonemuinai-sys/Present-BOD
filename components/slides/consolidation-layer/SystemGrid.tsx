import { motion, type Variants } from "framer-motion";
import { sourceSystems } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function SystemGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-2"
    >
      {sourceSystems.map((s) => (
        <motion.div
          key={s.title}
          variants={item}
          className="rounded-lg bg-slate-100 px-3 py-3 text-center text-xs font-bold text-[#101b3d] md:text-sm"
        >
          {s.title}
        </motion.div>
      ))}
    </motion.div>
  );
}
