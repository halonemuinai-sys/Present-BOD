"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GrowthVisual from "./GrowthVisual";

export default function CoverHeroSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      <GrowthVisual />

      <div className="relative z-10 flex h-full w-full items-center px-8 py-10 md:w-[52%] md:px-14">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/logos/mra-group.png"
              alt="MRA Group"
              width={320}
              height={128}
              className="h-24 w-auto object-contain md:h-28"
              priority
            />
            <div className="mt-6 flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="h-px w-8 bg-[#d99a2b]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#d99a2b]" />
                <span className="h-px w-8 bg-[#d99a2b]" />
              </span>
              <span className="text-base font-bold uppercase tracking-[0.35em] text-[#101b3d]">Project</span>
              <span className="flex items-center gap-1.5">
                <span className="h-px w-8 bg-[#d99a2b]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#d99a2b]" />
                <span className="h-px w-8 bg-[#d99a2b]" />
              </span>
            </div>
            <div className="relative">
              <div className="bg-glow-gold -left-10 -top-16" />
              <h1 className="relative mt-2 text-7xl font-black uppercase leading-[0.9] tracking-tight text-[#101b3d] md:text-8xl lg:text-9xl">
                Synergy
              </h1>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#d99a2b]" />
              <span className="h-0.5 w-28 bg-[#d99a2b]" />
            </div>
            <p className="mt-6 text-2xl font-bold leading-snug text-[#101b3d] md:text-3xl lg:text-4xl">
              <span className="text-[#d99a2b]">Aligning</span> Processes,
              <br />
              <span className="text-[#d99a2b]">Synergizing</span> Functions,
              <br />
              Sustainable Growth.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
