"use client";

import { motion } from "framer-motion";

// Approximate positions (% of the background container) tracing the
// summit trail baked into bg.png, from base camp up to the flag.
const pathPoints = [
  { x: 16, y: 89 },
  { x: 18, y: 81 },
  { x: 21, y: 73 },
  { x: 24, y: 65 },
  { x: 26, y: 57 },
  { x: 27, y: 49 },
  { x: 29, y: 41 },
  { x: 29, y: 28 },
];

export default function ClimbingDot() {
  return (
    <motion.span
      className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5c563]"
      style={{ boxShadow: "0 0 10px 3px rgba(217,154,43,0.7)" }}
      animate={{
        left: pathPoints.map((p) => `${p.x}%`),
        top: pathPoints.map((p) => `${p.y}%`),
        opacity: [0, 1, 1, 1, 1, 1, 1, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "linear",
        times: [0, 0.14, 0.28, 0.42, 0.57, 0.71, 0.85, 1],
      }}
    />
  );
}
