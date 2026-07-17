import { motion, type Variants } from "framer-motion";
import { supportFunction } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const iconStamp: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 240, damping: 16 } },
};

export default function SupportFunctionCard() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-center">
      <p className="text-sm font-black uppercase tracking-wide text-[#101b3d] md:text-base">
        {supportFunction.label}
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-4 flex flex-1 flex-col items-center justify-center gap-5"
      >
        <motion.div
          variants={iconStamp}
          className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#101b3d]/25"
        >
          <supportFunction.icon size={44} className="text-[#101b3d]" />
        </motion.div>

        <motion.p variants={item} className="text-sm leading-snug text-slate-600">
          {supportFunction.description}
        </motion.p>

        <div className="h-px w-16 bg-slate-200" />

        <motion.div variants={item} className="flex flex-col gap-1.5">
          {supportFunction.outcomes.map((o) => (
            <p key={o} className="text-sm font-black text-[#101b3d]">
              {o}
            </p>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
