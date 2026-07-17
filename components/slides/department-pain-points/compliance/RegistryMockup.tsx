import { Plus } from "lucide-react";
import { registryRows } from "./data";

export default function RegistryMockup() {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[10px] font-bold text-slate-600">Compliance Registry</p>
        <span className="flex items-center gap-1 rounded-md bg-emerald-700 px-2 py-1 text-[9px] font-bold text-white">
          <Plus size={10} /> Add New
        </span>
      </div>
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-[9px]">
          <thead className="bg-slate-100 text-slate-500">
            <tr>
              <th className="px-2 py-1 text-left font-semibold">Type</th>
              <th className="px-2 py-1 text-left font-semibold">Valid Until</th>
              <th className="px-2 py-1 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {registryRows.map((r) => (
              <tr key={r.type}>
                <td className="px-2 py-1 text-slate-700">{r.type}</td>
                <td className="px-2 py-1 text-slate-500">{r.validUntil}</td>
                <td className="px-2 py-1">
                  <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[8px] font-bold text-emerald-700">
                    {r.status}
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
