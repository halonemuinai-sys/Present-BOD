import { motion, type Variants } from "framer-motion";
import { ArrowRight, RefreshCw } from "lucide-react";
import { hubLabel, hubPoints, systemRecordCards, systemRecordLabel, systemRecordSubtitle } from "./data";
import SystemCard from "./SystemCard";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const arrow: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const hub: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 220, damping: 16, delay: 0.5 } },
};

export default function SystemOfRecordPanel() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-sm">
      <p className="text-sm font-black uppercase leading-tight text-[#101b3d] md:text-base">{systemRecordLabel}</p>
      <p className="mt-1 text-xs text-slate-500">{systemRecordSubtitle}</p>

      <div className="mt-4 grid flex-1 grid-cols-[1fr_auto_auto] items-center gap-2">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          {systemRecordCards.map((c) => (
            <SystemCard key={c.title} data={c} />
          ))}
        </motion.div>

        <div className="flex flex-col justify-around gap-2">
          {systemRecordCards.map((c, i) => (
            <motion.div
              key={c.title}
              variants={arrow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.05 }}
            >
              <ArrowRight size={16} className="text-slate-300" />
            </motion.div>
          ))}
        </div>

        <motion.div variants={hub} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col items-center gap-2 text-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-slate-200 bg-[#101b3d]">
            <div className="text-white/90">
              <svg width="30" height="24" viewBox="0 0 24 20" fill="currentColor">
                <path d="M18 8.5c-.3-2.7-2.6-4.8-5.4-4.8-2.1 0-3.9 1.2-4.8 3-2.4.1-4.3 2.1-4.3 4.5 0 2.5 2 4.5 4.5 4.5h9.5c2.1 0 3.8-1.7 3.8-3.8 0-1.9-1.4-3.4-3.3-3.7z" />
              </svg>
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#d99a2b] ring-2 ring-white">
              <RefreshCw size={13} className="text-white" />
            </span>
          </div>
          <p className="max-w-[7.5rem] text-[10px] font-black uppercase leading-tight text-[#101b3d]">{hubLabel}</p>
          <div className="text-[10px] font-semibold leading-snug text-slate-500">
            {hubPoints.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
