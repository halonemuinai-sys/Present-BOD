import { ExternalLink, Mail } from "lucide-react";
import { emailReminder } from "./data";

export default function EmailMockup() {
  return (
    <div>
      <p className="mb-2 text-[10px] font-bold text-slate-600">Email Reminder (Example)</p>
      <div className="rounded-lg border border-slate-200 bg-white p-2.5">
        <div className="flex items-center gap-1.5">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700">
            <Mail size={12} className="text-white" />
          </span>
          <div>
            <p className="text-[9px] font-bold text-slate-800">{emailReminder.subject}</p>
            <p className="text-[7.5px] text-slate-400">To: {emailReminder.to}</p>
          </div>
        </div>
        <div className="mt-2 space-y-0.5">
          {emailReminder.fields.map((f) => (
            <p key={f.label} className="text-[8px] text-slate-500">
              <span className="font-semibold text-slate-600">{f.label}:</span> {f.value}
            </p>
          ))}
        </div>
        <span className="mt-2 inline-flex items-center gap-1 rounded-md bg-emerald-700 px-2 py-1 text-[8px] font-bold text-white">
          <ExternalLink size={9} /> {emailReminder.cta}
        </span>
        <p className="mt-1 text-[7.5px] italic text-slate-400">{emailReminder.note}</p>
      </div>
    </div>
  );
}
