import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import {
  approvalMatrix,
  approvalMatrixFootnote,
  magicLinkFlow,
  magicLinkNote,
  statusColorClasses,
  statusFlow,
  workflowColorClasses,
  workflowSteps,
} from "./data";

const steps: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const stepCard: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 240, damping: 22 } },
};

const iconStamp: Variants = {
  hidden: { scale: 0.5, rotate: -10, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 16, delay: 0.15 },
  },
};

const arrow: Variants = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.25, duration: 0.3 } },
};

const panelGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } },
};

const panel: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const workflowSubtitle = ["Plan", "Control", "Execute", "Approve", "Monitor"];

export default function MarketingPlatformModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-h-[92vh] w-full max-w-7xl overflow-y-auto rounded-2xl bg-white p-5 md:p-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative text-center">
          <button
            onClick={onClose}
            className="slide-nav-btn absolute right-0 top-0 shrink-0"
            aria-label="Close details"
          >
            <X size={18} />
          </button>
          <h2 className="text-lg font-extrabold uppercase tracking-tight text-slate-900 md:text-2xl">
            Marketing Campaign Management Platform
          </h2>
          <p className="mt-2 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-500">
            <span className="font-bold text-emerald-700">End-to-End Workflow</span>
            <span className="text-slate-300">|</span>
            {workflowSubtitle.map((w, i) => (
              <span key={w} className="flex items-center gap-2">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-emerald-400" />}
                {w}
              </span>
            ))}
          </p>
        </div>

        <motion.div
          variants={steps}
          initial="hidden"
          animate="visible"
          className="mt-6 flex flex-wrap items-stretch gap-2"
        >
          {workflowSteps.map((s, i) => {
            const c = workflowColorClasses[s.color];
            return (
              <Fragment key={s.number}>
                <motion.div variants={stepCard} className="flex min-w-[190px] flex-1 flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white ${c.numberBg}`}
                    >
                      {s.number}
                    </span>
                    <div>
                      <p className={`text-xs font-extrabold uppercase leading-tight ${c.titleText}`}>{s.title}</p>
                      <p className="text-[10px] text-slate-400">{s.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-start gap-2.5 rounded-xl border border-slate-200 bg-white p-3">
                    <motion.div
                      variants={iconStamp}
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${c.iconBg}`}
                    >
                      <s.icon size={20} className={c.iconText} />
                    </motion.div>
                    <ul className="space-y-1">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-1.5 text-[10.5px] leading-snug text-slate-600">
                          <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${c.dot}`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {i < workflowSteps.length - 1 && (
                  <motion.div variants={arrow} className="hidden shrink-0 items-center px-1 sm:flex">
                    <ArrowRight size={18} className="text-slate-300" />
                  </motion.div>
                )}
              </Fragment>
            );
          })}
        </motion.div>

        <motion.div
          variants={panelGroup}
          initial="hidden"
          animate="visible"
          className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3"
        >
          <motion.div variants={panel} className="rounded-xl border border-slate-200 p-4">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-wide text-slate-900">
              Alur Status Kampanye
            </p>
            <div className="flex items-start gap-1">
              {statusFlow.map((s, i) => {
                const c = statusColorClasses[s.color];
                return (
                  <Fragment key={s.label}>
                    <div className="flex flex-1 flex-col items-center gap-1.5 text-center">
                      <span
                        className={`w-full rounded-lg border px-1.5 py-1.5 text-[10px] font-extrabold ${c.bg} ${c.border} ${c.text}`}
                      >
                        {s.label}
                      </span>
                      <p className="text-[9px] leading-snug text-slate-400">{s.caption}</p>
                    </div>
                    {i < statusFlow.length - 1 && <ArrowRight size={13} className="mt-2 shrink-0 text-slate-300" />}
                  </Fragment>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={panel} className="rounded-xl border border-slate-200 p-4">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-wide text-slate-900">
              Matriks Persetujuan (Contoh)
            </p>
            <div className="overflow-hidden rounded-lg border border-slate-200">
              <table className="w-full text-[10px]">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-2 py-1.5 text-left font-semibold">LOB / Divisi</th>
                    <th className="px-2 py-1.5 text-left font-semibold">Nominal Budget</th>
                    <th className="px-2 py-1.5 text-left font-semibold">Approver 1</th>
                    <th className="px-2 py-1.5 text-left font-semibold">Approver 2</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {approvalMatrix.map((row) => (
                    <tr key={`${row.lob}-${row.budget}`}>
                      <td className="px-2 py-1.5 text-slate-700">{row.lob}</td>
                      <td className="px-2 py-1.5 text-slate-700">{row.budget}</td>
                      <td className="px-2 py-1.5 text-slate-700">{row.approver1}</td>
                      <td className="px-2 py-1.5 text-slate-700">{row.approver2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-[9px] italic text-slate-400">{approvalMatrixFootnote}</p>
          </motion.div>

          <motion.div variants={panel} className="rounded-xl border border-slate-200 p-4">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-wide text-slate-900">
              Magic Link Approval Flow
            </p>
            <div className="flex items-start gap-1">
              {magicLinkFlow.map((s, i) => (
                <Fragment key={s.label}>
                  <div className="flex flex-1 flex-col items-center gap-1.5 text-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        s.tone === "danger" ? "bg-red-50" : "bg-emerald-50"
                      }`}
                    >
                      <s.icon size={18} className={s.tone === "danger" ? "text-red-500" : "text-emerald-700"} />
                    </div>
                    <p className="text-[9px] leading-snug text-slate-600">{s.label}</p>
                  </div>
                  {i < magicLinkFlow.length - 1 && (
                    <ArrowRight size={13} className="mt-4 shrink-0 text-slate-300" />
                  )}
                </Fragment>
              ))}
            </div>
            <p className="mt-3 text-center text-[9px] italic text-emerald-600">{magicLinkNote}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
