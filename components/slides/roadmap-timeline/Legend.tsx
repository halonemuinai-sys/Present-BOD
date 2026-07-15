import { legend } from "./data";
import { variantClasses } from "./types";

export default function Legend() {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-5 border-t border-slate-100 pt-4">
      {legend.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <span className={`h-3 w-5 rounded-sm ${variantClasses[item.variant]}`} />
          <span className="text-xs text-slate-600">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
