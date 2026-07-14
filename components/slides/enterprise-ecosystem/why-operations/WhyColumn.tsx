import { motion, type Variants } from "framer-motion";
import type { WhyColumnData } from "./types";
import { colorClasses } from "./types";

const colVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 240, damping: 22 } },
};

export default function WhyColumn({ column }: { column: WhyColumnData }) {
  const c = colorClasses[column.color];

  return (
    <motion.div
      variants={colVariants}
      className={`flex flex-1 flex-col gap-3 rounded-2xl border bg-white p-4 ${c.border}`}
    >
      <div className="flex justify-center">
        <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-extrabold text-white ${c.solid}`}>
          {column.number}
        </span>
      </div>

      <h3 className={`text-center text-sm font-bold leading-snug ${c.text}`}>{column.question}</h3>

      <div className="flex justify-center py-1">
        <div className={`flex h-16 w-16 items-center justify-center rounded-full ${c.bg}`}>
          <column.icon size={28} className={c.text} />
        </div>
      </div>

      <div className="flex justify-center">
        <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white ${c.solid}`}>
          Jawaban
        </span>
      </div>

      <ul className="flex flex-col gap-2.5">
        {column.answers.map((answer) => (
          <li key={answer.text} className="flex items-start gap-2 text-xs leading-snug text-slate-600">
            <answer.icon size={14} className={`mt-0.5 shrink-0 ${c.text}`} />
            <span>
              {answer.text}
              {answer.stat && <span className={`mt-0.5 block text-sm font-bold ${c.text}`}>{answer.stat}</span>}
            </span>
          </li>
        ))}
      </ul>

      <p className={`mt-auto rounded-lg px-2 py-2 text-center text-xs font-semibold ${c.bg} ${c.text}`}>
        {column.summary}
      </p>
    </motion.div>
  );
}
