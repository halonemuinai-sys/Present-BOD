"use client";

import { motion, type Variants } from "framer-motion";
import GrowthVisual from "@/components/slides/cover-hero/GrowthVisual";
import { introText, objectiveItems, slideNumber, slideTitle } from "./data";
import ObjectiveCard from "./ObjectiveCard";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

export default function ObjectiveSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      <GrowthVisual />

      <div className="relative z-10 flex h-full w-full items-center px-8 py-10 md:w-[52%] md:px-14">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#101b3d] text-2xl font-black text-white md:h-14 md:w-14 md:text-3xl">
              {slideNumber}
            </span>
            <div>
              <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#101b3d] md:text-6xl">
                {slideTitle}
              </h1>
              <div className="mt-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d99a2b]" />
                <span className="h-0.5 w-24 bg-[#d99a2b]" />
              </div>
              <p className="mt-4 text-lg font-bold text-[#101b3d] md:text-xl">{introText}</p>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col gap-6"
          >
            {objectiveItems.map((item) => (
              <ObjectiveCard key={item.number} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
