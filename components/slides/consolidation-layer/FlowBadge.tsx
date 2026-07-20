import { motion } from "framer-motion";
import { flowBottom, flowTop } from "./data";

export default function FlowBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="relative flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-white shadow-sm md:h-40 md:w-40"
    >
      <motion.div
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(217, 154, 43, 0.35)",
            "0 0 0 10px rgba(217, 154, 43, 0)",
            "0 0 0 0 rgba(21, 128, 61, 0.35)",
            "0 0 0 10px rgba(21, 128, 61, 0)",
            "0 0 0 0 rgba(217, 154, 43, 0.35)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full border border-slate-200"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-3 rounded-full opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1.2px, transparent 1.2px)",
          backgroundSize: "10px 10px",
        }}
      />

      <div className="relative z-10 px-3 text-center">
        <p className="text-[11px] font-black uppercase leading-tight text-[#101b3d]">{flowTop}</p>
        <motion.div
          animate={{ width: [8, 32, 8], backgroundColor: ["#d99a2b", "#15803d", "#d99a2b"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto my-1.5 h-0.5 rounded-full"
        />
        <p className="text-[11px] font-black uppercase leading-tight text-emerald-700">{flowBottom}</p>
      </div>
    </motion.div>
  );
}
