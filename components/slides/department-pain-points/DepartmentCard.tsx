import { motion, type Variants } from "framer-motion";
import { MousePointerClick, XCircle } from "lucide-react";
import type { Department } from "./types";
import { colorClasses } from "./types";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 240, damping: 22 } },
};

export default function DepartmentCard({ dept, onOpenModal }: { dept: Department; onOpenModal?: () => void }) {
  const c = colorClasses[dept.color];
  const clickable = Boolean(dept.modalId && onOpenModal);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3 }}
      onClick={clickable ? onOpenModal : undefined}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onOpenModal?.();
            }
          : undefined
      }
      className={`relative flex flex-1 flex-col gap-3 overflow-hidden rounded-2xl border-2 border-b-4 bg-white p-4 shadow-sm transition-shadow hover:shadow-md ${clickable ? "cursor-pointer" : ""} ${c.border} ${c.borderBottom}`}
    >
      <div className="flex items-start justify-between">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${c.solid}`}>
          <dept.icon size={22} />
        </div>
        <span className={`text-3xl font-extrabold opacity-20 ${c.text}`}>{dept.number}</span>
      </div>

      <div>
        <span className={`text-xs font-bold uppercase tracking-wide ${c.text}`}>{dept.deptLabel}</span>
        <h3 className="text-lg font-bold leading-tight text-slate-900">{dept.title}</h3>
      </div>

      <div>
        <span className={`text-xs font-bold uppercase tracking-wide ${c.text}`}>Masalah Utama</span>
        <ul className="mt-1.5 flex flex-col gap-1.5">
          {dept.painPoints.map((point) => (
            <li key={point} className="flex items-start gap-1.5 text-xs leading-snug text-slate-600">
              <XCircle size={14} className={`mt-0.5 shrink-0 ${c.text}`} />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto border-t border-slate-100 pt-3">
        <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Contoh</span>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {dept.examples.map((ex) => (
            <span
              key={ex.label}
              className={`flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-medium ${c.border} ${c.bg} ${c.text}`}
            >
              <ex.icon size={12} />
              {ex.label}
            </span>
          ))}
        </div>
      </div>

      <div className={`-mx-4 -mb-4 flex items-center justify-center gap-2 rounded-b-2xl px-4 py-2.5 ${c.bg}`}>
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className={`h-1.5 w-1.5 rounded-full ${c.solid}`}
        />
        <span className={`text-xs font-bold ${c.text}`}>{dept.remark}</span>
        {clickable && (
          <span className={`ml-1 flex items-center gap-1 text-[10px] font-semibold ${c.text} opacity-70`}>
            <MousePointerClick size={11} />
            Lihat Detail
          </span>
        )}
      </div>
    </motion.div>
  );
}
