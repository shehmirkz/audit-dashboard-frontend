import type { ProgressSubItem } from '../../types';
import { StatusIndicator } from '../ui/StatusIndicator';

interface SubSectionCardProps {
  item: ProgressSubItem;
}

export function SubSectionCard({ item }: SubSectionCardProps) {
  return (
    <div className="rounded-lg border border-[#E0E8ED] bg-[#F5F8FB] p-3 shadow-sm text-center h-full">
      <p className="text-[10px] font-medium text-gray-900 mb-2">{item.title}</p>
      <div className="flex flex-wrap gap-1.5">
        {item.indicators.map((ind) => (
          <StatusIndicator
            key={`${item.id}-${ind.number}`}
            number={ind.number}
            status={ind.status}
          />
        ))}
      </div>
    </div>
  );
}
