"use client";

import Image from "next/image";
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
