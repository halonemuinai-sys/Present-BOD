export default function StageLabel({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex w-40 shrink-0 items-start gap-2 pt-2 font-kalam text-green-900 md:w-44">
      <span className="text-2xl leading-none">{number}</span>
      <div>
        <span className="block text-lg font-bold leading-tight">{title}</span>
        {subtitle && <span className="text-sm italic text-green-700">({subtitle})</span>}
      </div>
    </div>
  );
}
