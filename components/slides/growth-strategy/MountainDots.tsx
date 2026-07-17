"use client";

import { motion } from "framer-motion";

// Approximate positions (% of the background container) tracing the
// summit trail baked into bg.png, so the glow overlays roughly line up
// with the path markers in the photo.
const dots = [
  { x: 29, y: 28 },
  { x: 29, y: 41 },
  { x: 27, y: 49 },
  { x: 26, y: 57 },
  { x: 24, y: 65 },
  { x: 21, y: 73 },
  { x: 18, y: 81 },
  { x: 16, y: 89 },
];

export default function MountainDots() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5c563]"
          style={{ left: `${d.x}%`, top: `${d.y}%`, boxShadow: "0 0 8px 2px rgba(217,154,43,0.65)" }}
          animate={{ opacity: [0.35, 1, 0.35], scale: [0.85, 1.3, 0.85] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
        />
      ))}
    </div>
  );
}
