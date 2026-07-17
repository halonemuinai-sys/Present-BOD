"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideNumber, slideSubtitle, slideTitle } from "./data";
import FragmentedSystemsPanel from "./FragmentedSystemsPanel";
import ImpactPanel from "./ImpactPanel";
import CoreProblemBanner from "./CoreProblemBanner";
import KeyQuestionsBanner from "./KeyQuestionsBanner";

export default function CurrentChallengesSlide() {
  return (
    <div className="relative h-full w-full overflow-y-auto bg-white">
      <div
        className="pointer-events-none absolute right-0 top-0 h-48 w-[45%] opacity-20"
        style={{
          maskImage: "linear-gradient(to left, black 30%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 30%, transparent 100%)",
        }}
      >
        <Image src="/growth-strategy/bg.png" alt="" fill className="object-cover object-[80%_15%]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-full w-full max-w-6xl flex-col gap-4 px-6 pb-16 pt-8 md:px-10 md:pb-20">
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
            <p className="mt-1 inline-block border-b-2 border-[#d99a2b] pb-0.5 text-sm text-slate-600 md:text-base">
              {slideSubtitle}
            </p>
          </div>
        </motion.div>

        <div className="grid flex-1 grid-cols-1 gap-4 lg:grid-cols-[1.35fr_1fr]">
          <FragmentedSystemsPanel />
          <ImpactPanel />
        </div>

        <CoreProblemBanner />
        <KeyQuestionsBanner />
      </div>
    </div>
  );
}
