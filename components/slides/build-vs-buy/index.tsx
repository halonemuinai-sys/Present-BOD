"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  footnote,
  headerLabel,
  headerTitlePart1,
  headerTitlePart2,
  headerTitlePart3,
  devMeta,
  devTabs,
  composition,
  grandFixedTotal,
  grandRecurringTotal,
  foundationSections,
  dataSections,
  dataGrandTotal,
  dashboardSections,
  dashboardGrandTotal,
  qaSections,
  recurringItems,
  recurringNotes,
} from "./data";
import SaasPanel from "./SaasPanel";
import PlatformPanel from "./PlatformPanel";
import VsBadge from "./VsBadge";
import SummaryStats from "./SummaryStats";
import type { DevTabId } from "./data";
import type { PricingSection, GrandTotal } from "./types";

export default function BuildVsBuySlide() {
  const [tab, setTab] = useState<"market" | "development">("market");
  const [devTab, setDevTab] = useState<DevTabId>("overview");

  return (
    <div className="relative h-full w-full overflow-y-auto bg-slate-50/20">
      <div
        className="pointer-events-none absolute right-8 top-8 h-24 w-24 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="relative mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center px-6 py-8 md:px-10">
        
        {/* Header and Tab switcher aligned horizontally */}
        <div className="mb-5 flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#101b3d] text-2xl font-black text-white md:h-14 md:w-14 md:text-3xl">
            9
          </span>
          <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2c4a4e]">
                {headerLabel}
              </span>
              <motion.span
                key={tab}
                animate={{
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(217, 154, 43, 0.5)",
                    "0 0 0 6px rgba(217, 154, 43, 0)",
                    "0 0 0 0 rgba(217, 154, 43, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-full bg-[#101b3d] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-white"
              >
                {tab === "market" ? "Phase 1" : "Phase 2"}
              </motion.span>
            </div>
            <span className="mt-1 block h-1 w-10 rounded-full bg-green-500" />
            <h1 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
              {tab === "market" && (
                <>
                  <span className="text-slate-900">{headerTitlePart1}</span>{" "}
                  <span className="font-semibold text-slate-400">{headerTitlePart2}</span>{" "}
                  <span className="text-green-600">{headerTitlePart3}</span>
                </>
              )}
              {tab === "development" && (
                <span className="text-slate-900">Project Development Scope &amp; Budget</span>
              )}
            </h1>
          </div>
          
          <div className="inline-flex rounded-full bg-slate-200/50 p-1 backdrop-blur-sm shrink-0">
            <button
              onClick={() => setTab("market")}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-300 ${
                tab === "market"
                  ? "bg-[#2c4a4e] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Market Comparison
            </button>
            <button
              onClick={() => setTab("development")}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-300 ${
                tab === "development"
                  ? "bg-[#2c4a4e] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Dev Budget &amp; Scope
            </button>
          </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Tab 1: Market Comparison (SaaS vs One Platform) */}
            {tab === "market" && (
              <div>
                <p className="mb-6 max-w-3xl text-sm text-slate-500 leading-relaxed">
                  Comparing the direct subscription costs of purchasing 10 separate specialized SaaS products versus building a consolidated platform (MRA Hub).
                </p>
                <div className="relative flex flex-col gap-4 md:flex-row md:items-stretch md:gap-10">
                  <SaasPanel />
                  <VsBadge />
                  <PlatformPanel />
                </div>
                <SummaryStats />
                <p className="mt-4 text-center text-xs italic text-slate-400">{footnote}</p>
              </div>
            )}

            {/* Tab 2: Development Budget & Scope */}
            {tab === "development" && (
              <div>
                <p className="mb-6 max-w-3xl text-sm text-slate-500 leading-relaxed">
                  Scope of work and cost breakdown for setting up the unified core platform infrastructure, data pipelines (Talenta + NetSuite Connectors), and 7 executive dashboards.
                </p>

                {/* Sub-tabs Navigation */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {devTabs.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setDevTab(t.id)}
                      className={`cursor-pointer flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-bold border transition-all duration-200 ${
                        devTab === t.id
                          ? "bg-[#1f3a3d] text-white border-[#1f3a3d] shadow-sm"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <t.icon size={13} />
                      {t.label}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={devTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {devTab === "overview" && <OverviewSubTab />}
                    {devTab === "foundation" && <PricingTable sections={foundationSections} />}
                    {devTab === "data" && <PricingTable sections={dataSections} grandTotal={dataGrandTotal} />}
                    {devTab === "dashboards" && (
                      <PricingTable sections={dashboardSections} grandTotal={dashboardGrandTotal} />
                    )}
                    {devTab === "qa" && <PricingTable sections={qaSections} />}
                    {devTab === "recurring" && <RecurringSubTab />}
                  </motion.div>
                </AnimatePresence>

                <p className="mt-5 text-center text-xs italic text-slate-400">{devMeta.footnote}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Sub-Tab Helpers
function OverviewSubTab() {
  const metaRows = [
    { label: "Prepared For", value: devMeta.preparedFor },
    { label: "Prepared By", value: devMeta.preparedBy },
    { label: "Date", value: devMeta.date },
    { label: "Currency", value: devMeta.currency },
    { label: "Duration", value: devMeta.duration },
    { label: "Status", value: devMeta.status },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-[#1f3a3d] p-5 text-white shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-[#86efac]">
            Fixed Development Cost (One-Time)
          </span>
          <span className="mt-1 block text-3xl font-extrabold">{grandFixedTotal}</span>
          <span className="text-xs text-white/70">Section A — total scope, before PPN (11%)</span>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Ongoing Recurring Cost (Annual)
          </span>
          <span className="mt-1 block text-3xl font-extrabold text-[#1f3a3d]">{grandRecurringTotal}</span>
          <span className="text-xs text-slate-400">Section B — from Year 1 onward</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-3">
        {metaRows.map((row) => (
          <div key={row.label}>
            <span className="block text-[10px] font-bold uppercase tracking-wide text-slate-400">
              {row.label}
            </span>
            <span className="text-sm font-bold text-slate-800">{row.value}</span>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
          Fixed Cost Composition
        </span>
        <p className="mb-4 text-xs text-slate-400">Relative share of one-time development scope</p>
        <div className="flex flex-col gap-2.5">
          {composition.map((row) => (
            <div key={row.section} className="flex items-center gap-3 text-xs">
              <span className="w-10 shrink-0 font-bold text-slate-400">{row.section}</span>
              <span className="w-56 shrink-0 truncate text-slate-700 font-medium">{row.description}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${row.percent}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-full rounded-full bg-teal-600"
                />
              </div>
              <span className="w-12 shrink-0 text-right font-bold text-slate-600">{row.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RecurringSubTab() {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-[#1f3a3d] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white">
          Section B · Ongoing Recurring Costs (Annualized)
        </div>
        <div className="divide-y divide-slate-100">
          {recurringItems.map((item) => (
            <div
              key={item.code}
              className="flex flex-col gap-2 px-4 py-3 text-xs md:flex-row md:items-center md:justify-between"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#1f3a3d]">{item.code}</span>
                  <span className="font-bold text-slate-700">{item.title}</span>
                </div>
                <span className="mt-0.5 block text-[10.5px] text-slate-400">{item.detail}</span>
              </div>
              <div className="flex shrink-0 items-baseline justify-between gap-2 md:flex-col md:items-end md:justify-center">
                <span className="text-sm font-extrabold text-slate-900">{item.annual}</span>
                <span className="text-[10px] text-slate-400">({item.monthly})</span>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between bg-slate-50 px-4 py-3">
            <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
              Total Annual Recurring Costs
            </span>
            <span className="text-md font-extrabold text-[#1f3a3d]">{grandRecurringTotal}</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <span className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-slate-400">Notes</span>
        <ul className="list-disc space-y-1 pl-4 text-xs text-slate-500">
          {recurringNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PricingTable({
  sections,
  grandTotal,
}: {
  sections: PricingSection[];
  grandTotal?: GrandTotal;
}) {
  return (
    <div className="flex flex-col gap-4">
      {sections.map((section) => (
        <div
          key={section.id}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="bg-[#1f3a3d] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white">
            {section.title}
          </div>
          <div className="divide-y divide-slate-100">
            {section.items.map((item) => (
              <div key={item.number} className="flex items-center gap-3 px-4 py-2 text-xs md:text-sm">
                <span className="w-5 shrink-0 text-xs text-slate-300">{item.number}</span>
                <span className="flex-1 font-medium text-slate-700">{item.deliverable}</span>
                <span className="shrink-0 font-bold text-slate-900">{item.price}</span>
              </div>
            ))}
            <div className="flex items-center justify-between bg-slate-50 px-4 py-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                {section.subtotalLabel}
              </span>
              <span className="text-sm font-extrabold text-[#1f3a3d]">{section.subtotalPrice}</span>
            </div>
          </div>
        </div>
      ))}

      {grandTotal && (
        <div className="flex items-center justify-between rounded-xl bg-amber-50 px-4 py-3 border border-amber-200">
          <span className="text-xs font-bold uppercase tracking-wide text-amber-800">
            {grandTotal.label}
          </span>
          <span className="text-lg font-extrabold text-amber-800">{grandTotal.price}</span>
        </div>
      )}
    </div>
  );
}
