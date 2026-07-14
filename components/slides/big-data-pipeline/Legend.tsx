const legendItems: { label: string; style: "solid" | "dashed" | "dotted" }[] = [
  { label: "Data Flow", style: "solid" },
  { label: "Integration & Automation", style: "dashed" },
  { label: "Consumption", style: "dotted" },
];

export default function Legend() {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-6 font-kalam text-sm text-green-900">
      {legendItems.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <span
            className="h-0 w-8 border-t-2 border-green-800"
            style={{ borderStyle: item.style }}
          />
          {item.label}
        </div>
      ))}
    </div>
  );
}
