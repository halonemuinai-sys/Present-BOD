"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { bands } from "./data";
import BandRow from "./BandRow";
import VerticalArrow from "./VerticalArrow";
import OutcomeBadge from "./OutcomeBadge";
import ChainBar from "./ChainBar";
import RoadmapBadge from "./RoadmapBadge";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export default function CoverHeroSlide() {
  return (
    <div className="h-full w-full overflow-y-auto bg-white">
      <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center px-6 py-10 md:px-10">
        <div className="mb-4 flex justify-center">
          <Image
            src="/logos/mra-group.png"
            alt="MRA Group"
            width={220}
            height={90}
            className="h-12 w-auto object-contain"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <div className="flex justify-center">
            <RoadmapBadge />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Enterprise <span className="text-green-600">Digital Ecosystem</span> Strategy
          </h1>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-slate-300" />
            <p className="text-base font-medium text-slate-500">
              Building an Integrated Platform Beyond ERP
            </p>
            <span className="h-px w-10 bg-slate-300" />
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Presented by <span className="font-semibold text-slate-600">Aris Setiyono</span>
          </p>
        </motion.div>

        <div className="flex items-stretch gap-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-1 flex-col gap-4"
          >
            {bands.map((band, i) => (
              <div key={band.title}>
                <BandRow band={band} />
                {i < bands.length - 1 && <VerticalArrow color={band.color} />}
              </div>
            ))}
          </motion.div>

          <OutcomeBadge />
        </div>

        <ChainBar />
      </div>
    </div>
  );
}
