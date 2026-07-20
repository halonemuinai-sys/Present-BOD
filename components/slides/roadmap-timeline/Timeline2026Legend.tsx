import { Check, Star } from "lucide-react";

const swatches = [
  { bg: "bg-green-600", label: "Completed / Operational" },
  { bg: "bg-indigo-700", label: "Validation / Enhancement" },
  { bg: "bg-slate-300", label: "Planned" },
];

export default function Timeline2026Legend() {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-100 pt-3 text-[11px] text-slate-500">
      {swatches.map((s) => (
        <span key={s.label} className="flex items-center gap-1.5">
          <span className={`h-2.5 w-2.5 rounded-sm ${s.bg}`} />
          {s.label}
        </span>
      ))}
      <span className="flex items-center gap-1.5">
        <Check size={13} className="text-green-600" strokeWidth={3} />
        Milestone Achieved
      </span>
      <span className="flex items-center gap-1.5">
        <Star size={13} className="fill-green-800 text-green-800" />
        Go-Live Milestone
      </span>
    </div>
  );
}
