import { Fragment } from "react";
import { Bell } from "lucide-react";
import { expiryTimeline, upcomingExpiry } from "./data";

const badgeClasses: Record<string, string> = {
  "90 Days": "bg-emerald-50 text-emerald-700",
  "60 Days": "bg-amber-50 text-amber-700",
  "30 Days": "bg-amber-50 text-amber-700",
  Overdue: "bg-red-50 text-red-700",
};

export default function ReminderMockup() {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="mb-2 text-[10px] font-bold text-slate-600">Contract Expiry Timeline</p>
        <div className="flex items-center">
          {expiryTimeline.map((label, i) => (
            <Fragment key={label}>
              <div className="flex flex-col items-center gap-1">
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-white ${
                    i === expiryTimeline.length - 1 ? "bg-red-500" : "bg-emerald-600"
                  }`}
                >
                  <Bell size={10} />
                </span>
                <span className="max-w-[3.2rem] text-center text-[7.5px] font-semibold leading-tight text-slate-500">
                  {label}
                </span>
              </div>
              {i < expiryTimeline.length - 1 && <div className="h-px flex-1 bg-slate-300" />}
            </Fragment>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-1 text-[9px] font-bold text-slate-600">Upcoming Expiry (Next 90 Days)</p>
        <div className="flex flex-col gap-1">
          {upcomingExpiry.map((e) => (
            <div
              key={e.name}
              className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-2 py-1"
            >
              <div>
                <p className="text-[9px] text-slate-700">{e.name}</p>
                <p className="text-[7.5px] text-slate-400">{e.party}</p>
              </div>
              <span className={`rounded-full px-1.5 py-0.5 text-[8px] font-bold ${badgeClasses[e.badge]}`}>
                {e.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
