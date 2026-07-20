export default function RibbonTag({ label, bg }: { label: string; bg: string }) {
  return (
    <span
      className="absolute -top-3 left-5 z-10 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-white shadow-sm"
      style={{ backgroundColor: bg, clipPath: "polygon(0 0, 100% 0, 100% 65%, 90% 100%, 0 100%)" }}
    >
      {label}
    </span>
  );
}
