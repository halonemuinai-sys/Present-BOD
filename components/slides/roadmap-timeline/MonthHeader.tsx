import { months } from "./data";

export default function MonthHeader() {
  return (
    <div className="grid" style={{ gridTemplateColumns: "220px repeat(12, minmax(0, 1fr))" }}>
      <div />
      {months.map((month) => (
        <span
          key={month}
          style={{ gridColumn: "span 2" }}
          className="pb-2 font-mono text-sm text-slate-500"
        >
          {month}
        </span>
      ))}
    </div>
  );
}
