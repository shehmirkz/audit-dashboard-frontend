import type { ProgressStatus } from '../../types';

const legendItems: { status: ProgressStatus; label: string }[] = [
  { status: 'not_started', label: 'Not Started' },
  { status: 'in_progress', label: 'In Progress' },
  { status: 'completed', label: 'Completed' },
  { status: 'partially_uploaded', label: 'Partially Uploaded' },
  { status: 'fully_uploaded', label: 'Fully Uploaded' },
  { status: 'delayed', label: 'Delayed' },
];

const dotColors: Record<ProgressStatus, string> = {
  not_started: 'bg-gray-300',
  in_progress: 'bg-[var(--color-warning)]',
  completed: 'bg-[var(--color-success)]',
  partially_uploaded: 'bg-blue-800',
  fully_uploaded: 'bg-[var(--color-info-light)]',
  delayed: 'bg-[var(--color-danger)]',
};

export function StatusLegend() {
  return (
    <div className="flex flex-wrap gap-4 justify-end">
      {legendItems.map(({ status, label }) => (
        <div key={status} className="flex items-center gap-1.5">
          <span
            className={`w-2.5 h-2.5 rounded-full ${dotColors[status]}`}
          />
          <span className="text-xs text-gray-600">{label}</span>
        </div>
      ))}
    </div>
  );
}
