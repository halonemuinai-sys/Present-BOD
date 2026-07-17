"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import NetworkParticles from "./NetworkParticles";

export default function GrowthVisual() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/cover/slide1-bg.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <NetworkParticles />

      {/* shimmer sweeping up the arrow's diagonal */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: "polygon(34% 100%, 47% 100%, 97% 6%, 84% 6%)" }}
      >
        <motion.div
          className="absolute -inset-1/2"
          style={{
            background: "linear-gradient(115deg, transparent 40%, rgba(255,241,199,0.9) 50%, transparent 60%)",
            backgroundSize: "300% 300%",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 26%, rgba(255,255,255,0.18) 44%, transparent 60%)",
        }}
      />
    </div>
  );
}
