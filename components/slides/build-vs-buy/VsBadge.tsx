import { motion } from "framer-motion";

export default function VsBadge() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 flex-col items-center md:flex">
      <span className="h-16 w-px border-l-2 border-dashed border-slate-300" />
      <motion.span
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.3 }}
        className="my-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-extrabold text-slate-700 shadow-md"
      >
        VS
      </motion.span>
      <span className="h-16 w-px border-l-2 border-dashed border-slate-300" />
    </div>
  );
}
