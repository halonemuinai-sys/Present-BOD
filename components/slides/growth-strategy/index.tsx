"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideNumber, slideSubtitleHighlight, slideSubtitlePrefix, slideTitle } from "./data";
import AmbitionPanel from "./AmbitionPanel";
import StrategyFlow from "./StrategyFlow";
import GovernancePanel from "./GovernancePanel";
import FooterBar from "./FooterBar";
import MountainDots from "./MountainDots";

export default function GrowthStrategySlide() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-y-auto pb-16 md:pb-20">
      <div className="absolute inset-0">
        <Image
          src="/growth-strategy/bg.png"
          alt=""
          fill
          priority
          className="object-cover object-[center_65%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.3) 45%, rgba(255,255,255,0.08) 70%, transparent 100%)",
          }}
        />
        <MountainDots />
      </div>

      <div className="relative z-10 flex flex-1 flex-col gap-5 px-6 pb-4 pt-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-4"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#101b3d] text-2xl font-black text-white md:h-14 md:w-14 md:text-3xl">
            {slideNumber}
          </span>
          <div>
            <h1 className="text-2xl font-black uppercase leading-tight tracking-tight text-[#101b3d] md:text-4xl">
              {slideTitle}
            </h1>
            <p className="mt-1 text-sm text-[#101b3d] md:text-base">
              {slideSubtitlePrefix} <span className="font-black text-[#d99a2b]">{slideSubtitleHighlight}</span>
            </p>
          </div>
        </motion.div>

        <div className="grid flex-1 grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AmbitionPanel />
          </motion.div>

          <div className="flex flex-col gap-5">
            <StrategyFlow />
            <GovernancePanel />
          </div>
        </div>
      </div>

      <FooterBar />
    </div>
  );
}
