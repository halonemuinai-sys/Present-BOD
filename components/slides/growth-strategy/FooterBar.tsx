import { motion, type Variants } from "framer-motion";
import { footerItems } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.9 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function FooterBar() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative z-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 bg-[#101b3d] px-6 py-3"
    >
      {footerItems.map((f, i) => (
        <motion.div key={f.text} variants={item} className="flex items-center gap-3">
          {i > 0 && <span className="hidden h-4 w-px bg-white/20 sm:block" />}
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d99a2b] text-[#d99a2b]">
            <f.icon size={15} />
          </span>
          <span className="text-xs font-medium text-white md:text-sm">{f.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
