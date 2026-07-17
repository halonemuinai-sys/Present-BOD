"use client";

import { motion, type Variants } from "framer-motion";
import {
  enablerRow1,
  enablerRow2,
  slideNumber,
  slideSubtitleBold,
  slideSubtitlePrefix,
  slideSubtitleSuffix,
  slideTitle,
} from "./data";
import EnablerCardItem from "./EnablerCardItem";
import QuoteBanner from "./QuoteBanner";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

export default function EnablerRequiredSlide() {
  return (
    <div className="relative h-full w-full overflow-y-auto bg-white">
      <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-72 w-72 rounded-full bg-blue-400 opacity-[0.08] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-5%] h-72 w-72 rounded-full bg-blue-500 opacity-[0.08] blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-full w-full max-w-6xl flex-col gap-6 px-6 pb-16 pt-8 md:px-10 md:pb-20">
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
            <h1 className="text-2xl font-black leading-tight tracking-tight text-[#101b3d] md:text-4xl">
              {slideTitle}
            </h1>
            <p className="mt-1 inline-block border-b-2 border-[#d99a2b] pb-0.5 text-sm text-slate-500 md:text-base">
              {slideSubtitlePrefix}
              <span className="font-bold text-slate-700">{slideSubtitleBold}</span>
              {slideSubtitleSuffix}
            </p>
          </div>
        </motion.div>

        <QuoteBanner />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {enablerRow1.map((c, i) => (
            <EnablerCardItem key={c.number} data={c} showArrow={i < enablerRow1.length - 1} />
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {enablerRow2.map((c, i) => (
            <EnablerCardItem key={c.number} data={c} showArrow={i < enablerRow2.length - 1} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
