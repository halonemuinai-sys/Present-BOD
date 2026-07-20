import { motion, type Variants } from "framer-motion";
import { sourceSystems } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 18 },
  },
};

export default function SourceSystemsGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-2.5 sm:grid-cols-4"
    >
      {sourceSystems.map((s, i) => (
        <motion.div
          key={s.label}
          variants={item}
          whileHover={{
            y: -4,
            scale: 1.05,
            boxShadow: "0 12px 24px -8px rgba(217, 154, 43, 0.35)",
            borderColor: "#d99a2b",
          }}
          className="group flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-amber-200 bg-white px-2 py-4 text-center transition-colors duration-200"
        >
          <motion.span
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(217, 154, 43, 0.35)",
                "0 0 0 6px rgba(217, 154, 43, 0)",
                "0 0 0 0 rgba(217, 154, 43, 0.35)",
              ],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110 ${
              s.logoDomain ? "bg-white ring-2 ring-amber-100" : "bg-[#d99a2b]"
            }`}
          >
            {s.logoDomain ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`https://www.google.com/s2/favicons?domain=${s.logoDomain}&sz=64`}
                alt=""
                className="h-6 w-6"
              />
            ) : (
              <s.icon size={20} className="text-white" />
            )}
          </motion.span>
          <p className="text-xs font-black leading-tight text-[#101b3d]">{s.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
