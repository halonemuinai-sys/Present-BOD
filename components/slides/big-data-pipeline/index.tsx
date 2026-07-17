"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Eye } from "lucide-react";
import { analyticsItems, consumerItems, dataSourceItems, middlewareItems } from "./data";
import StageLabel from "./StageLabel";
import ItemCard from "./ItemCard";
import DownArrow from "./DownArrow";
import WarehouseBox from "./WarehouseBox";
import ImpactChain from "./ImpactChain";
import Legend from "./Legend";
import CostImpactModal from "./cost-impact/CostImpactModal";
import BusinessGrowthModal from "./business-growth/BusinessGrowthModal";
import ActionableInsightModal from "./actionable-insight/ActionableInsightModal";
import BetterDecisionModal from "./better-decision/BetterDecisionModal";
import type { ImpactModalId } from "./types";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function BigDataPipelineSlide() {
  const [openModal, setOpenModal] = useState<ImpactModalId | null>(null);

  return (
    <div className="h-full w-full overflow-y-auto bg-[#faf9f4]">
      <div className="mx-auto flex min-h-full w-full max-w-5xl flex-col justify-center px-6 py-10 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-kalam"
        >
          <h1 className="text-3xl font-bold text-green-900 md:text-4xl text-center">
            <span className="underline decoration-2 underline-offset-4">Big Data Pipeline &amp; Analytics Architecture</span>
          </h1>

          <div className="mt-5 flex flex-col gap-3 text-lg text-green-900">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex w-6 shrink-0 justify-center">
                <Eye size={20} />
              </span>
              <span className="w-20 shrink-0 font-bold">Vision</span>
              <span className="rounded-full border-2 border-green-900 bg-white px-4 py-1.5 shadow-sm">
                Data Driven Decision Making
              </span>
              <span className="text-green-700">&rarr;</span>
              <span className="rounded-full border-2 border-green-900 bg-white px-4 py-1.5 shadow-sm">
                Action
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="w-6 shrink-0" />
              <span className="w-20 shrink-0 font-bold">Mission</span>
              <span className="rounded-full border-2 border-green-900 bg-white px-4 py-1.5 shadow-sm">
                Unify Data
              </span>
              <span className="text-green-700">&rarr;</span>
              <span className="text-green-800">Single Source of Truth</span>
            </div>
          </div>
          <div className="mt-5 h-px w-full bg-green-900/25" />
        </motion.div>

        <div className="flex flex-col gap-1">
          {/* Stage 1 — Data Source */}
          <div className="flex flex-col gap-3 md:flex-row">
            <StageLabel number="1" title="Data Source" subtitle="Fragmented" />
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-1 flex-wrap gap-3"
            >
              {dataSourceItems.map((item) => (
                <ItemCard key={item.title} item={item} />
              ))}
            </motion.div>
          </div>

          <DownArrow />

          {/* Stage 2 — Middleware */}
          <div className="flex flex-col gap-3 md:flex-row">
            <StageLabel number="2" title="Middleware" subtitle="Integration & Automation Layer" />
            <div className="flex-1 rounded-xl border-2 border-dashed border-green-800 p-4">
              <p className="mb-3 text-center font-kalam text-base font-bold text-green-900">
                Enterprise Middleware Platform
                <span className="block text-sm font-normal text-green-700">
                  Integration &bull; Processing &bull; Automation
                </span>
              </p>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {middlewareItems.map((item) => (
                  <ItemCard key={item.title} item={item} />
                ))}
              </motion.div>
            </div>
          </div>

          <DownArrow />

          {/* Stage 3 — Data Warehouse */}
          <div className="flex flex-col gap-3 md:flex-row">
            <StageLabel number="3" title="Data Warehouse" subtitle="System of Intelligence" />
            <WarehouseBox />
          </div>

          <DownArrow />

          {/* Stage 4 — Analytics & Insight */}
          <div className="flex flex-col gap-3 md:flex-row">
            <StageLabel
              number="4"
              title="Analytics & Insight"
              subtitle="System of Engagement & Intelligence"
            />
            <div className="flex-1 rounded-xl border-2 border-green-900 bg-white p-4">
              <p className="mb-3 text-center font-kalam text-base font-bold text-green-900">
                Dashboard & Analytics
              </p>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {analyticsItems.map((item) => (
                  <ItemCard key={item.title} item={item} />
                ))}
              </motion.div>

              <div className="mt-3 rounded-xl border-2 border-dashed border-green-800 p-3">
                <p className="mb-2 text-center font-kalam text-sm font-bold text-green-900">
                  Consumer Layer
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-kalam text-xs text-green-900">
                  {consumerItems.map((item, i) => (
                    <div key={item.label} className="flex items-center gap-3">
                      {i > 0 && <span className="text-green-300">|</span>}
                      <span className="flex items-center gap-1.5">
                        <item.icon size={16} className="text-green-700" />
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <DownArrow />

          {/* Stage 5 — Business Impact */}
          <div className="flex flex-col gap-3 md:flex-row">
            <StageLabel number="5" title="Business Impact" subtitle="Outcome" />
            <div className="flex-1">
              <ImpactChain onItemClick={setOpenModal} />
            </div>
          </div>
        </div>

        <Legend />
      </div>

      <AnimatePresence>
        {openModal === "cost-impact" && <CostImpactModal onClose={() => setOpenModal(null)} />}
        {openModal === "business-growth" && <BusinessGrowthModal onClose={() => setOpenModal(null)} />}
        {openModal === "actionable-insight" && (
          <ActionableInsightModal onClose={() => setOpenModal(null)} />
        )}
        {openModal === "better-decision" && <BetterDecisionModal onClose={() => setOpenModal(null)} />}
      </AnimatePresence>
    </div>
  );
}
