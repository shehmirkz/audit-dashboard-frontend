import { Card } from '../ui/Card';
import { GaugeChart } from '../ui/GaugeChart';

interface AuditReadinessMetric {
  value: number;
  label: string;
}

interface AuditReadinessCardProps {
  value: number;
  subtitle: string;
  color: string;
  metrics: AuditReadinessMetric[];
}

export function AuditReadinessCard({
  value,
  subtitle,
  color,
  metrics,
}: AuditReadinessCardProps) {
  return (
    <Card>
      <h3 className="mb-4 text-sm font-bold text-gray-800">Audit Readiness</h3>
      <GaugeChart value={value} color={color} size={140} />
      <p className="mt-2 text-center text-xs text-gray-500">{subtitle}</p>
      <div className="mt-4 flex flex-wrap justify-center gap-6 border-t border-gray-100 pt-4">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <p className="text-lg font-bold text-gray-900">{m.value}</p>
            <p className="text-xs text-gray-500">{m.label}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
