"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { inHouseData, agencyData } from "./data";
import MonthHeader from "./MonthHeader";
import TrackRow from "./TrackRow";
import Legend from "./Legend";
import type { Bar } from "./types";

export default function RoadmapTimelineSlide() {
  const [tab, setTab] = useState<"inHouse" | "agency">("inHouse");
  const [selectedBar, setSelectedBar] = useState<Bar | null>(null);

  const data = tab === "inHouse" ? inHouseData : agencyData;
  const cols = data.months.length * 2;
  const monthPercentage = 100 / data.months.length;

  return (
    <div className="h-full w-full overflow-y-auto bg-slate-50/20">
      <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center px-6 py-8 md:px-10">
        
        {/* Header and Tab switcher aligned horizontally */}
        <div className="mb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#25454a]">
              {data.eyebrow}
            </span>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl transition-all duration-300">
              {data.title}
            </h1>
          </div>
          
          <div className="inline-flex rounded-full bg-slate-200/50 p-1 backdrop-blur-sm shrink-0">
            <button
              onClick={() => {
                setTab("inHouse");
                setSelectedBar(null);
              }}
              className={`cursor-pointer rounded-full px-5 py-1.5 text-xs font-bold transition-all duration-300 ${
                tab === "inHouse"
                  ? "bg-[#25454a] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              In-house Developer
            </button>
            <button
              onClick={() => {
                setTab("agency");
                setSelectedBar(null);
              }}
              className={`cursor-pointer rounded-full px-5 py-1.5 text-xs font-bold transition-all duration-300 ${
                tab === "agency"
                  ? "bg-[#25454a] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              MRAMU
            </button>
          </div>
        </div>

        <p className="mb-6 max-w-3xl text-sm text-slate-500 leading-relaxed transition-all duration-300">
          {data.subtitle}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >

            {/* Gantt Chart Container */}
            <div className="relative rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
              <MonthHeader months={data.months} cols={cols} />

              <div className="relative mt-2">
                {/* Vertical grid lines */}
                <div
                  className="pointer-events-none absolute inset-y-0 left-[220px] right-0"
                  style={{
                    backgroundImage: `repeating-linear-gradient(to right, #f1f5f9 0, #f1f5f9 1px, transparent 1px, transparent ${monthPercentage}%)`,
                  }}
                />
                
                <div className="relative flex flex-col divide-y divide-slate-100">
                  {data.tracks.map((track) => (
                    <TrackRow
                      key={track.title}
                      track={track}
                      cols={cols}
                      onBarClick={setSelectedBar}
                    />
                  ))}
                </div>
              </div>

              <Legend legend={data.legend} />
            </div>

            {/* Extra OLAP deliverables & note section */}
            {tab === "agency" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.25 }}
              >
                {/* Deliverables Section */}
                <div className="mt-8">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">What Ships in Each Phase</h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Phase 1 Card */}
                    <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm border-t-4 border-t-[#7c9a9e]">
                      <h4 className="font-bold text-slate-900 text-sm">{agencyData.deliverables.phase1.title}</h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {agencyData.deliverables.phase1.items.map((item, idx) => (
                          <span key={item} className="inline-flex items-center rounded-full bg-[#7c9a9e]/10 px-3 py-1 text-xs font-semibold text-[#1f3a3d] border border-[#7c9a9e]/20">
                            {item}
                            {idx === 0 && <span className="ml-1 text-[9px] uppercase tracking-wider opacity-60">v1</span>}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Phase 2 Card */}
                    <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm border-t-4 border-t-[#25454a]">
                      <h4 className="font-bold text-slate-900 text-sm">{agencyData.deliverables.phase2.title}</h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {agencyData.deliverables.phase2.items.map((item, idx) => (
                          <span key={item} className="inline-flex items-center rounded-full bg-[#25454a]/10 px-3 py-1 text-xs font-semibold text-[#25454a] border border-[#25454a]/20">
                            {item}
                            {idx === 3 && <span className="ml-1 text-[9px] uppercase tracking-wider opacity-60">enriched</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why December Card */}
                <div className="mt-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#1f3a3d] to-[#2c4a4e] p-6 shadow-md text-white">
                  <div className="flex flex-col md:flex-row gap-4 items-baseline">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#86efac] shrink-0">
                      {agencyData.whyDecember.title}
                    </span>
                    <p className="text-xs text-slate-200/90 leading-relaxed">
                      {agencyData.whyDecember.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

          </motion.div>
        </AnimatePresence>

        {/* Detail Popup Modal */}
        <AnimatePresence>
          {selectedBar && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedBar(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
              />

              {/* Modal Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl"
              >
                {/* Header colored based on bar variant */}
                <div
                  className={`flex items-center justify-between px-6 py-4 text-white ${
                    selectedBar.variant === "prep"
                      ? "bg-gradient-to-r from-[#7c9a9e] to-[#607e81]"
                      : selectedBar.variant === "build"
                      ? "bg-gradient-to-r from-[#25454a] to-[#1f3a3d]"
                      : "bg-gradient-to-r from-amber-700 to-amber-800"
                  }`}
                >
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-white/70">
                      {selectedBar.variant === "prep"
                        ? "Preparation & Setup"
                        : selectedBar.variant === "build"
                        ? "Module Development"
                        : "Milestone Release"}
                    </span>
                    <h4 className="text-base font-extrabold">{selectedBar.label}</h4>
                  </div>
                  <button
                    onClick={() => setSelectedBar(null)}
                    className="cursor-pointer rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  {selectedBar.description ? (
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                      {selectedBar.description}
                    </p>
                  ) : (
                    <p className="text-xs md:text-sm italic text-slate-400">
                      No detailed description available.
                    </p>
                  )}

                  {selectedBar.features && selectedBar.features.length > 0 && (
                    <div className="mt-4">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key deliverables &amp; features
                      </span>
                      <ul className="space-y-2">
                        {selectedBar.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-700 font-bold leading-normal">
                            <Check size={14} className="mt-0.5 shrink-0 text-emerald-600" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
