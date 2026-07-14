import { motion, type Variants } from "framer-motion";
import { chain } from "./data";
import { colorClasses } from "./types";
import Connector from "./Connector";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

export default function ChainBar() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="mt-8 flex flex-wrap items-center justify-center gap-2"
    >
      {chain.map((item, i) => {
        const c = colorClasses[item.color];
        return (
          <div key={item.highlight} className="flex items-center gap-2">
            {i > 0 && <Connector />}
            <motion.div
              variants={card}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md"
            >
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white ${c.gradient} ${c.glow}`}
              >
                <item.icon size={20} />
              </motion.div>
              <div className="leading-tight">
                <p className="text-xs text-slate-500">{item.text}</p>
                <p className={`text-sm font-bold ${c.text}`}>{item.highlight}</p>
              </div>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}
