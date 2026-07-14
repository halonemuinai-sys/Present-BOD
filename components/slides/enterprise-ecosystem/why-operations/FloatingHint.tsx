import { motion } from "framer-motion";

export default function FloatingHint() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: [0, -5, 0] }}
      transition={{
        opacity: { delay: 1.2, duration: 0.4 },
        y: { delay: 1.2, duration: 1.6, repeat: Infinity, ease: "easeInOut" },
      }}
      className="pointer-events-none absolute -top-8 right-0 z-20 whitespace-nowrap rounded-lg bg-slate-900 px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg"
    >
      Kenapa perlu ini?
      <span className="absolute -bottom-1 right-3 h-2 w-2 rotate-45 bg-slate-900" />
    </motion.div>
  );
}
