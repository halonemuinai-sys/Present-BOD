import { motion, type Variants } from "framer-motion";
import { impactChain } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const step: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

export default function ImpactChain() {
  return (
    <div className="relative rounded-xl border-2 border-green-900 bg-white p-5 font-kalam">
      <div className="absolute left-[12%] right-[12%] top-12 hidden h-0 border-t-2 border-dashed border-green-300 sm:block" />
      <motion.div
        className="absolute top-12 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600 sm:block"
        animate={{ left: ["12%", "88%"] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4"
      >
        {impactChain.map((item, i) => (
          <motion.div key={item.label} variants={step} className="flex flex-col items-center gap-2 text-center">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-green-800 text-white shadow-md"
            >
              <item.icon size={22} />
            </motion.div>
            <span className="text-sm font-bold leading-tight text-green-900">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
