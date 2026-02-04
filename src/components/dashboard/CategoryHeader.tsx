interface CategoryHeaderProps {
  title: string;
  percentage: number;
}

export function CategoryHeader({ title, percentage }: CategoryHeaderProps) {
  return (
    <div className="rounded-lg bg-[var(--color-primary)] px-2 py-2 text-white shadow-sm text-center">
      <p className="text-[11px] font-bold leading-tight">{title}</p>
      <p className="text-[12px] font-bold leading-tight mt-1">{percentage}%</p>
    </div>
  );
}
