import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { warehouseChecklist, warehouseIcon as WarehouseIcon } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
};

const badge: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 280, damping: 22 } },
};

export default function WarehouseBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex-1 overflow-hidden rounded-xl border-2 border-green-900 font-kalam shadow-sm"
    >
      <div className="flex flex-col items-center gap-2 bg-green-900 px-5 py-4 text-center sm:flex-row sm:justify-center sm:gap-3">
        <motion.div
          initial={{ scale: 0.6, rotate: -8 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 240, damping: 16 }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white/80 text-white"
        >
          <WarehouseIcon size={22} />
        </motion.div>
        <div>
          <span className="block text-xl font-bold leading-tight text-white">Data Warehouse</span>
          <span className="text-xs font-bold uppercase tracking-widest text-green-300">
            Single Source of Truth
          </span>
        </div>
      </div>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2.5 bg-white px-4 py-3.5"
      >
        {warehouseChecklist.map((item) => (
          <motion.li
            key={item}
            variants={badge}
            className="flex items-center gap-1.5 rounded-md border-2 border-green-800 px-3 py-1.5 text-sm font-bold text-green-900"
          >
            <CheckCircle2 size={16} className="text-green-700" />
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
