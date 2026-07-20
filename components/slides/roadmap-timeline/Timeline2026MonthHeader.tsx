import { Calendar } from "lucide-react";
import { timeline2026Eyebrow, timeline2026Months, timeline2026Year } from "./data";

export default function Timeline2026MonthHeader() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Calendar size={16} className="text-slate-500" />
        <span className="text-xs font-black uppercase tracking-wide text-slate-700">
          {timeline2026Eyebrow}
        </span>
      </div>
      <div className="flex">
        <div className="w-56 shrink-0 md:w-64" />
        <div className="grid flex-1 grid-cols-8 border-b border-slate-200 pb-3">
          {timeline2026Months.map((m) => (
            <div key={m} className="relative flex flex-col items-center">
              <span className="text-xs font-black text-slate-800">{m.toUpperCase()}</span>
              <span className="text-[10px] text-slate-400">{timeline2026Year}</span>
              <span className="absolute -bottom-[19px] h-2 w-2 rounded-full bg-slate-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
