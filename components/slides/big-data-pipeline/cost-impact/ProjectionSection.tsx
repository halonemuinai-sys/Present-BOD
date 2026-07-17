import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type CalloutColor = "red" | "emerald";

const calloutClasses: Record<
  CalloutColor,
  { border: string; bg: string; icon: string; title: string; dot: string; text: string }
> = {
  red: {
    border: "border-red-200",
    bg: "bg-red-50",
    icon: "text-red-500",
    title: "text-red-700",
    dot: "bg-red-500",
    text: "text-red-600",
  },
  emerald: {
    border: "border-emerald-200",
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    title: "text-emerald-700",
    dot: "bg-emerald-500",
    text: "text-emerald-700",
  },
};

export default function ProjectionSection({
  title,
  titleColor,
  chart,
  calloutIcon: CalloutIcon,
  calloutColor,
  calloutTitle,
  calloutPoints,
}: {
  title: string;
  titleColor: string;
  chart: ReactNode;
  calloutIcon: LucideIcon;
  calloutColor: CalloutColor;
  calloutTitle: string;
  calloutPoints: string[];
}) {
  const c = calloutClasses[calloutColor];
  return (
    <div className="rounded-lg border border-slate-200 p-3">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
        <div className="flex-1">
          <p className={`mb-2 text-xs font-extrabold uppercase tracking-wide ${titleColor}`}>{title}</p>
          {chart}
        </div>

        <div className={`w-full shrink-0 rounded-lg border ${c.border} ${c.bg} p-3.5 sm:w-48`}>
          <div className="mb-2 flex items-center gap-2">
            <CalloutIcon size={18} className={c.icon} />
            <p className={`text-xs font-extrabold uppercase leading-tight tracking-wide ${c.title}`}>
              {calloutTitle}
            </p>
          </div>
          <ul className="space-y-1.5">
            {calloutPoints.map((pt) => (
              <li key={pt} className={`flex items-start gap-1.5 text-[11px] leading-snug ${c.text}`}>
                <span className={`mt-1 h-1 w-1 shrink-0 rounded-full ${c.dot}`} />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
