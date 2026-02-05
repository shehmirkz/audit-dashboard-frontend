import type { MonthlyDataPoint } from '../../types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { Card } from '../ui/Card';

interface PerformanceChartCardProps {
  data: MonthlyDataPoint[];
}

export function PerformanceChartCard({ data }: PerformanceChartCardProps) {
  return (
    <Card>
      <h3 className="mb-4 text-sm font-bold text-gray-800">
        12-Month Performance
      </h3>
      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
            <XAxis
              dataKey="month"
              tick={{ fontSize: 11, fill: '#6b7280' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fontSize: 11, fill: '#6b7280' }}
              axisLine={false}
              tickLine={false}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <Tooltip
              contentStyle={{
                fontSize: 12,
                borderRadius: 8,
                border: '1px solid #e5e7eb',
              }}
              formatter={(value: number | undefined) => [`${value ?? 0}%`, 'Performance']}
            />
            <Bar
              dataKey="value"
              fill="url(#barGradient)"
              radius={[4, 4, 0, 0]}
              maxBarSize={28}
            />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
