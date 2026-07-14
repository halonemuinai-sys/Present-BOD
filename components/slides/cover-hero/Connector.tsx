import { motion } from "framer-motion";

export default function Connector() {
  return (
    <div className="relative hidden h-0 w-8 items-center md:flex">
      <div className="h-0 w-full border-t-2 border-dashed border-slate-200" />
      <motion.div
        className="absolute h-1.5 w-1.5 rounded-full bg-slate-400"
        animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
