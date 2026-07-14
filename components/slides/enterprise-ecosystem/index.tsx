"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { layers } from "./data";
import LayerCard from "./LayerCard";
import FlowArrow from "./FlowArrow";
import LayerDetailModal from "./LayerDetailModal";
import HelpBadge from "./why-operations/HelpBadge";
import FloatingHint from "./why-operations/FloatingHint";
import WhyOperationsModal from "./why-operations/WhyOperationsModal";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export default function EnterpriseEcosystemSlide() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [whyOpen, setWhyOpen] = useState(false);
  const openLayer = openIndex !== null ? layers[openIndex] : null;

  useEffect(() => {
    if (openIndex === null && !whyOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenIndex(null);
        setWhyOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, whyOpen]);

  return (
    <div className="relative h-full w-full overflow-y-auto">
      <div className="pointer-events-none absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-blue-400 opacity-[0.08] blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-[10%] h-72 w-72 -translate-x-1/2 rounded-full bg-green-400 opacity-[0.08] blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-[20%] h-72 w-72 rounded-full bg-violet-400 opacity-[0.08] blur-3xl" />

      <div className="relative flex min-h-full w-full flex-col items-center justify-center px-8 py-12 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-16 text-center"
        >
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Integrated Enterprise Ecosystem
          </h1>
          <p className="mt-2 text-base italic text-[var(--text-muted)]">
            Three Systems. One Data Flow. Smarter Decisions.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative flex w-full max-w-6xl flex-col items-stretch gap-4 md:flex-row"
        >
          {layers.map((layer, i) => (
            <div key={layer.eyebrow} className="flex flex-1 items-stretch gap-4">
              <div className="relative flex flex-1">
                <LayerCard layer={layer} index={i} onOpen={() => setOpenIndex(i)} />
                {layer.color === "green" && (
                  <div className="absolute -right-2 -top-2 z-20">
                    <HelpBadge onClick={() => setWhyOpen(true)} />
                    {!whyOpen && <FloatingHint />}
                  </div>
                )}
              </div>
              {i < layers.length - 1 && <FlowArrow color={layer.color} />}
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="relative mt-8 text-sm text-[var(--text-muted)]"
        >
          Click any card to see its full breakdown
        </motion.p>

        <AnimatePresence>
          {openLayer && <LayerDetailModal layer={openLayer} onClose={() => setOpenIndex(null)} />}
          {whyOpen && <WhyOperationsModal onClose={() => setWhyOpen(false)} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
