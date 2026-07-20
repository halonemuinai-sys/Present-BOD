import { motion } from "framer-motion";
import { readyBannerText } from "./data";

export default function DecisionBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4 }}
      className="rounded-full bg-[#101b3d] px-6 py-4 text-center shadow-md"
    >
      <p className="text-base font-bold text-white md:text-lg">{readyBannerText}</p>
    </motion.div>
  );
}
