import type { ReactNode } from "react";

export default function ChartCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
      <p className="text-[9px] font-bold uppercase tracking-wide text-white/60">{title}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}
