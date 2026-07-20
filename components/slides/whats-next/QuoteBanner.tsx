import { motion } from "framer-motion";
import { quoteEyebrow } from "./data";

export default function QuoteBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="relative px-8 text-center"
    >
      <span className="absolute left-0 top-0 text-4xl font-black leading-none text-[#101b3d]/70 md:text-5xl">
        &ldquo;
      </span>
      <span className="absolute right-0 top-0 text-4xl font-black leading-none text-[#101b3d]/70 md:text-5xl">
        &rdquo;
      </span>
      <p className="text-lg font-black uppercase leading-snug text-[#101b3d] md:text-xl">{quoteEyebrow}</p>
    </motion.div>
  );
}
