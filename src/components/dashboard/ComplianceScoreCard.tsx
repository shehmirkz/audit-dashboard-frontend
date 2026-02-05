import { Card } from '../ui/Card';
import { GaugeChart } from '../ui/GaugeChart';

interface ComplianceScoreCardProps {
  value: number;
  subtitle: string;
  color: string;
}

export function ComplianceScoreCard({
  value,
  subtitle,
  color,
}: ComplianceScoreCardProps) {
  return (
    <Card>
      <h3 className="mb-5 text-sm font-bold text-gray-800">
        Overall Compliance Score
      </h3>
      <GaugeChart value={value} color={color} size={140} />
      <p className="mt-2 text-center text-xs text-gray-500">{subtitle}</p>
    </Card>
  );
}
