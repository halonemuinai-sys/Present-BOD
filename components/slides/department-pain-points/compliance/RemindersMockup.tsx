import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { documentDetail, emailReminder } from "./data";

export default function RemindersMockup() {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg border border-slate-200 bg-white p-2.5">
        <div className="flex items-center gap-1.5">
          <Mail size={12} className="text-emerald-700" />
          <p className="text-[9px] font-bold text-slate-700">Email Reminder</p>
        </div>
        <p className="mt-1.5 text-[9px] font-bold leading-snug text-slate-800">{emailReminder.subject}</p>
        <div className="mt-1.5 space-y-0.5">
          {emailReminder.fields.map((f) => (
            <p key={f.label} className="text-[8px] text-slate-500">
              <span className="font-semibold text-slate-600">{f.label}:</span> {f.value}
            </p>
          ))}
        </div>
        <span className="mt-2 inline-flex items-center gap-1 rounded-md bg-emerald-700 px-2 py-1 text-[8px] font-bold text-white">
          <ExternalLink size={9} /> {emailReminder.cta}
        </span>
      </div>

      <div className="flex justify-center text-emerald-400">
        <ArrowDown size={12} />
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-2.5">
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-bold text-slate-800">{documentDetail.title}</p>
          <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[8px] font-bold text-emerald-700">
            {documentDetail.status}
          </span>
        </div>
        <div className="mt-1.5 space-y-0.5">
          {documentDetail.fields.map((f) => (
            <p key={f.label} className="text-[8px] text-slate-500">
              <span className="font-semibold text-slate-600">{f.label}:</span> {f.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
