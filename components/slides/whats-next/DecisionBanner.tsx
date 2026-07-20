import { motion, type Variants } from "framer-motion";
import { CheckCircle2, CircleAlert } from "lucide-react";
import { approvalItems, decisionIntro, decisionLabel } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const chip: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
};

export default function DecisionBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.005, boxShadow: "0 16px 40px rgba(0, 0, 0, 0.18)" }}
      transition={{ duration: 0.4 }}
      className="relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-[#101b3d] to-[#1c2c5c] px-6 py-6 text-center shadow-lg sm:flex-row sm:items-center sm:text-left"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#d99a2b]/10 blur-2xl" />
      <span className="absolute inset-y-0 left-0 w-1.5 bg-[#d99a2b]" />

      <motion.span
        animate={{
          scale: [1, 1.08, 1],
          boxShadow: [
            "0 0 0 0 rgba(217, 154, 43, 0.45)",
            "0 0 0 12px rgba(217, 154, 43, 0)",
            "0 0 0 0 rgba(217, 154, 43, 0.45)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d99a2b]"
      >
        <CircleAlert size={26} className="text-white" />
      </motion.span>

      <div className="relative z-10 flex flex-1 flex-col items-center gap-2.5 sm:items-start">
        <span className="rounded-full bg-[#d99a2b] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#101b3d]">
          {decisionLabel}
        </span>

        <p className="text-sm font-semibold text-white/80 md:text-base">{decisionIntro}</p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:justify-start"
        >
          {approvalItems.map((item) => (
            <motion.span
              key={item}
              variants={chip}
              whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.16)" }}
              className="flex cursor-pointer items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white transition-colors duration-200 md:text-sm"
            >
              <CheckCircle2 size={14} className="text-[#d99a2b]" />
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
