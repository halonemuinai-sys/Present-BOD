"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { footerQuote, pillars } from "./data";
import GrowthVisual from "./GrowthVisual";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const pillarItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 240, damping: 22 } },
};

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
              className="h-20 w-auto object-contain md:h-24"
              priority
            />
            <h1 className="mt-3 text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl">
              <span className="text-[#101b3d]">
                MRA
                <br />
                Integrated
                <br />
              </span>
              <span className="text-[#d99a2b]">Performance Platform</span>
            </h1>
            <div className="mt-5 h-1 w-16 bg-[#d99a2b]" />
            <p className="mt-5 text-base font-black uppercase leading-snug tracking-wide text-[#101b3d] md:text-lg">
              Building a Secure, Accountable,
              <br />
              and Consistent System
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-10 flex items-stretch gap-2"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.label1}
                variants={pillarItem}
                className={`flex w-28 shrink-0 flex-col items-center gap-2.5 text-center md:w-32 ${
                  i > 0 ? "border-l border-slate-200 pl-4 md:pl-6" : ""
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#101b3d] md:h-16 md:w-16">
                  <p.icon size={26} className="text-[#d99a2b]" />
                </div>
                <p className="break-words text-[11px] font-black uppercase leading-tight text-[#101b3d] md:text-xs">
                  {p.label1}
                  <br />
                  <span className="text-[#d99a2b]">{p.label2}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-10 max-w-sm border-l-2 border-[#d99a2b] pl-3 text-base font-medium leading-snug text-slate-600"
          >
            {footerQuote}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
