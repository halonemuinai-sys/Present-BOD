import { legalStats, recentContracts, type ContractStatus } from "./data";

const statusClasses: Record<ContractStatus, string> = {
  Active: "bg-emerald-50 text-emerald-700",
  Expiring: "bg-amber-50 text-amber-700",
  Overdue: "bg-red-50 text-red-700",
};

export default function LegalRegistryMockup() {
  return (
    <div>
      <p className="mb-2 text-[10px] font-bold text-slate-600">Legal Documents Overview</p>
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
        {legalStats.map((s) => (
          <div key={s.label} className="rounded-lg border border-slate-200 bg-white p-2 text-center">
            <s.icon size={14} className="mx-auto text-emerald-700" />
            <p className="mt-1 text-sm font-black text-emerald-800">{s.value}</p>
            <p className="text-[7.5px] font-semibold leading-tight text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>

      <p className="mb-1 mt-3 text-[10px] font-bold text-slate-600">Recent Contracts</p>
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-[9px]">
          <thead className="bg-slate-100 text-slate-500">
            <tr>
              <th className="px-2 py-1 text-left font-semibold">Contract</th>
              <th className="px-2 py-1 text-left font-semibold">End Date</th>
              <th className="px-2 py-1 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {recentContracts.map((c) => (
              <tr key={c.name}>
                <td className="px-2 py-1">
                  <p className="text-slate-700">{c.name}</p>
                  <p className="text-[7.5px] text-slate-400">{c.party}</p>
                </td>
                <td className="px-2 py-1 text-slate-500">{c.endDate}</td>
                <td className="px-2 py-1">
                  <span className={`rounded-full px-1.5 py-0.5 text-[8px] font-bold ${statusClasses[c.status]}`}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
