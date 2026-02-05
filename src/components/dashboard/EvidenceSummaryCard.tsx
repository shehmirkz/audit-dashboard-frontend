import { Card } from '../ui/Card';
import { IconDocument } from '../ui/Icons';

interface EvidenceSummaryCardProps {
  value: number;
  label: string;
}

export function EvidenceSummaryCard({ value, label }: EvidenceSummaryCardProps) {
  return (
    <Card className="flex flex-row items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-[var(--color-accent)]">
        <IconDocument size={22} />
      </div>
      <div className="min-w-0">
        <p className="text-xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
    </Card>
  );
}
