interface CategoryHeaderProps {
  title: string;
  percentage: number;
}

export function CategoryHeader({ title, percentage }: CategoryHeaderProps) {
  return (
    <div className="flex h-[90px] flex-col items-center justify-center rounded-[10px] bg-[#1D3557] px-2 py-2 text-center text-white">
      <p className="text-[11px] font-bold leading-tight mb-1">{title}</p>
      <div className="mt-1 flex h-[22px] min-w-[63px] items-center justify-center rounded-[10px] bg-[#FFFFFF1A] px-[10px]">
        <span className="text-[14px] font-bold leading-4 text-white">
          {percentage}%
        </span>
      </div>
    </div>
  );
}
