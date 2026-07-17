import { motion, type Variants } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { keyQuestions, keyQuestionsLabel } from "./data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function KeyQuestionsBanner() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#101b3d] text-white">
          <HelpCircle size={20} />
        </span>
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-[#101b3d] md:text-base">
            {keyQuestionsLabel}
          </p>
          <div className="mt-1 h-0.5 w-10 bg-[#d99a2b]" />
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2"
      >
        {keyQuestions.map((q) => (
          <motion.div
            key={q.number}
            variants={item}
            className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-black text-[#101b3d]">
              {q.number}
            </span>
            <p className="text-sm leading-snug text-[#101b3d]">{q.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
