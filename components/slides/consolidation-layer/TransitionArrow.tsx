import { motion } from "framer-motion";

export default function TransitionArrow({ color }: { color: string }) {
  return (
    <div className="hidden shrink-0 items-center justify-center lg:flex">
      <motion.svg
        width="26"
        height="36"
        viewBox="0 0 26 36"
        fill={color}
        animate={{ x: [0, 5, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M0 12H14V4L26 18L14 32V24H0V12Z" />
      </motion.svg>
    </div>
  );
}
