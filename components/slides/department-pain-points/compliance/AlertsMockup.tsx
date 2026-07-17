import { Fragment } from "react";
import { Bell } from "lucide-react";
import { dashboardStats, expiringSoon, reminderTimeline, type ReminderTone } from "./data";

const toneBg: Record<ReminderTone, string> = {
  ok: "bg-emerald-600",
  warn: "bg-amber-500",
  danger: "bg-red-500",
};

const toneText: Record<ReminderTone, string> = {
  ok: "text-emerald-700",
  warn: "text-amber-600",
  danger: "text-red-600",
};

export default function AlertsMockup() {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="mb-2 text-[10px] font-bold text-slate-600">Reminder Timeline</p>
        <div className="flex items-center">
          {reminderTimeline.map((s, i) => (
            <Fragment key={s.label}>
              <div className="flex flex-col items-center gap-1">
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-white ${toneBg[s.tone]}`}
                >
                  <Bell size={10} />
                </span>
                <span className="max-w-[3.2rem] text-center text-[7.5px] font-semibold leading-tight text-slate-500">
                  {s.label}
                </span>
              </div>
              {i < reminderTimeline.length - 1 && <div className="h-px flex-1 bg-slate-300" />}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {dashboardStats.map((s) => (
          <div key={s.label} className="rounded-lg border border-slate-200 bg-white p-2 text-center">
            <p className={`text-sm font-black ${toneText[s.tone]}`}>{s.value}</p>
            <p className="text-[7.5px] font-semibold leading-tight text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="mb-1 text-[9px] font-bold text-slate-600">Documents Expiring Soon</p>
        <div className="flex flex-col gap-1">
          {expiringSoon.map((e) => (
            <div
              key={e.document}
              className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-2 py-1"
            >
              <span className="text-[9px] text-slate-700">{e.document}</span>
              <span className="rounded-full bg-amber-50 px-1.5 py-0.5 text-[8px] font-bold text-amber-700">
                {e.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
