import { motion, type Variants } from "framer-motion";
import { sourceSystems } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function FlowSourceRow() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-2 sm:grid-cols-4"
    >
      {sourceSystems.map((s) => (
        <motion.div
          key={s.label}
          variants={item}
          whileHover={{ y: -2, boxShadow: "0 8px 16px -6px rgba(0, 0, 0, 0.12)" }}
          className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-2 transition-colors duration-200"
        >
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
            style={s.logoDomain ? undefined : { backgroundColor: s.color }}
          >
            {s.logoDomain ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`https://www.google.com/s2/favicons?domain=${s.logoDomain}&sz=64`}
                alt=""
                className="h-5 w-5"
              />
            ) : (
              <s.icon size={14} className="text-white" />
            )}
          </span>
          <p className="text-[11px] font-black leading-tight text-[#101b3d]">{s.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
