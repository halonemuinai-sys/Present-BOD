"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  dashboardGrandTotal,
  dashboardSections,
  dataGrandTotal,
  dataSections,
  foundationSections,
  meta,
  qaSections,
} from "./data";
import type { TabId } from "./types";
import TabNav from "./TabNav";
import PricingTable from "./PricingTable";
import OverviewTab from "./OverviewTab";
import RecurringTab from "./RecurringTab";

export default function PricingTabsSlide() {
  const [tab, setTab] = useState<TabId>("overview");

  return (
    <div className="h-full w-full overflow-hidden bg-white">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col px-6 pb-16 pt-8 md:px-10 md:pb-20">
        <div className="shrink-0">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              {meta.eyebrow}
            </span>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
              {meta.title}
            </h1>
            <p className="mt-1 text-sm text-slate-500">{meta.subtitle}</p>
          </motion.div>

          <TabNav active={tab} onChange={setTab} />
        </div>

        <div className="mt-5 flex-1 overflow-y-auto">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {tab === "overview" && <OverviewTab />}
            {tab === "foundation" && <PricingTable sections={foundationSections} />}
            {tab === "data" && <PricingTable sections={dataSections} grandTotal={dataGrandTotal} />}
            {tab === "dashboards" && (
              <PricingTable sections={dashboardSections} grandTotal={dashboardGrandTotal} />
            )}
            {tab === "qa" && <PricingTable sections={qaSections} />}
            {tab === "recurring" && <RecurringTab />}
          </motion.div>
        </div>

        <p className="shrink-0 pt-4 text-center text-xs italic text-slate-400">{meta.footnote}</p>
      </div>
    </div>
  );
}
