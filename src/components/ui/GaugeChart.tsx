interface GaugeChartProps {
  value: number;
  color: string;
  size?: number;
}

export function GaugeChart({ value, color, size = 120 }: GaugeChartProps) {
  const percent = Math.min(100, Math.max(0, value)) / 100;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percent);

  const cx = size / 2;
  const startX = cx - radius;
  const endX = cx + radius;
  const y = size / 2;
  const pathD = `M ${endX} ${y} A ${radius} ${radius} 0 0 0 ${startX} ${y}`;

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size / 2 + strokeWidth} className="overflow-visible">
        <path
          d={pathD}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-[stroke-dashoffset] duration-500"
        />
      </svg>
      <span className="-mt-4 text-2xl font-bold text-gray-800">{value}%</span>
    </div>
  );
}
