import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import type { Timeline2026Track } from "./types";

const headerBg: Record<Timeline2026Track["status"], string> = {
  completed: "bg-gradient-to-r from-green-600 to-green-500",
  validation: "bg-gradient-to-r from-indigo-700 to-indigo-600",
  planned: "bg-gradient-to-r from-slate-500 to-slate-400",
  golive: "bg-gradient-to-r from-green-800 to-green-700",
};

export default function Timeline2026Modal({
  track,
  onClose,
}: {
  track: Timeline2026Track | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {track && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 cursor-pointer bg-slate-900/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl"
          >
            <div className={`flex items-center justify-between px-6 py-4 text-white ${headerBg[track.status]}`}>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <track.icon size={18} />
                </span>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-white/70">
                    {track.number}. {track.detailStatus ?? track.statusLabel}
                  </span>
                  <h4 className="text-base font-extrabold leading-tight">{track.title}</h4>
                </div>
              </div>
              <button
                onClick={onClose}
                className="cursor-pointer rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-6">
              {track.modules && track.modules.length > 0 ? (
                <>
                  <ul className="space-y-2">
                    {track.modules.map((mod) => (
                      <li key={mod} className="flex items-start gap-2.5 text-xs font-bold leading-normal text-slate-700">
                        <Check size={14} className="mt-0.5 shrink-0 text-emerald-600" />
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                  {track.modulesTotalLabel && (
                    <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Total</span>
                      <span className="text-sm font-extrabold text-slate-900">{track.modulesTotalLabel}</span>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-xs italic leading-relaxed text-slate-500 md:text-sm">{track.description}</p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
