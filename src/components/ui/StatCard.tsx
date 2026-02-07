import type { StatCardItem as StatCardItemType } from '../../types';
import { Card } from './Card';
import {
  IconChart,
  IconDocument,
  IconFolder,
  IconUpload,
} from './Icons';

const iconMap = {
  chart: IconChart,
  document: IconDocument,
  folder: IconFolder,
  upload: IconUpload,
};

interface StatCardProps {
  item: StatCardItemType;
}

const ICON_COLOR = '#DB1F26';

export function StatCard({ item }: StatCardProps) {
  const Icon = item.icon ? iconMap[item.icon] : null;

  return (
    <Card className="flex h-[80px] w-[180px] flex-row items-start justify-between gap-2 rounded-[10px] border border-[#E0E8ED] bg-[#FFFFFF] p-3 shadow-none">
      <div className="min-w-0">
        <p className="truncate text-[24px] font-bold leading-4 text-[#1D3557]">
          {item.value}
        </p>
        <p className="mt-2.5 text-[12px] font-normal leading-4 text-[#8597A8]">
          {item.label}
        </p>
      </div>
      {Icon && (
        <div className="flex-shrink-0" style={{ color: ICON_COLOR }}>
          <Icon size={24} />
        </div>
      )}
    </Card>
  );
}
