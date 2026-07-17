import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { howItWorks, resultItems, resultLabel } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } },
};

const step: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

const iconStamp: Variants = {
  hidden: { scale: 0.5, rotate: -10, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 16, delay: 0.1 },
  },
};

export default function HowItWorks() {
  return (
    <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row">
      <div className="flex-1">
        <p className="mb-4 text-center text-sm font-extrabold uppercase tracking-wide text-emerald-800">
          How It Works
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-start gap-1"
        >
          {howItWorks.map((s, i) => (
            <Fragment key={s.title}>
              <motion.div variants={step} className="flex min-w-0 flex-1 flex-col items-center gap-2 text-center">
                <motion.span
                  variants={iconStamp}
                  className="relative flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50"
                >
                  <s.icon size={22} className="text-emerald-700" />
                  {s.badge && (
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white ring-2 ring-white">
                      {s.badge}
                    </span>
                  )}
                </motion.span>
                <p className="text-[11px] font-black uppercase text-emerald-800">
                  {i + 1}. {s.title}
                </p>
                <p className="text-[10px] leading-snug text-slate-500">{s.text}</p>
              </motion.div>

              {i < howItWorks.length - 1 && (
                <div className="flex shrink-0 items-center px-0.5 pt-6">
                  <ArrowRight size={16} className="text-emerald-300" />
                </div>
              )}
            </Fragment>
          ))}
        </motion.div>
      </div>

      <div className="w-full shrink-0 rounded-xl bg-slate-50 p-4 lg:w-52">
        <p className="mb-2 text-xs font-extrabold uppercase tracking-wide text-emerald-800">{resultLabel}</p>
        <ul className="space-y-1.5">
          {resultItems.map((r) => (
            <li key={r} className="flex items-center gap-1.5 text-[11px] leading-snug text-slate-600">
              <CheckCircle2 size={13} className="shrink-0 text-emerald-600" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
