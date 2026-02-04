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

export function StatCard({ item }: StatCardProps) {
  const Icon = item.icon ? iconMap[item.icon] : null;
  const iconClass = item.highlight
    ? 'text-[var(--color-accent)]'
    : 'text-[var(--color-muted)]';

  return (
    <Card className="flex flex-row items-start justify-between gap-2">
      <div className="min-w-0">
        <p className="text-2xl font-bold text-gray-900 truncate">{item.value}</p>
        <p className="text-sm text-gray-600 mt-0.5">{item.label}</p>
      </div>
      {Icon && (
        <div className={`flex-shrink-0 ${iconClass}`}>
          <Icon size={24} />
        </div>
      )}
    </Card>
  );
}
