import type { ProgressStatus } from '../../types';

const statusStyles: Record<ProgressStatus, string> = {
  not_started: 'bg-gray-300 text-gray-800',
  in_progress: 'bg-[var(--color-warning)] text-gray-900',
  completed: 'bg-[var(--color-success)] text-gray-900',
  partially_uploaded: 'bg-blue-800 text-white',
  fully_uploaded: 'bg-[var(--color-info-light)] text-gray-900',
  delayed: 'bg-[var(--color-danger)] text-white',
};

interface StatusIndicatorProps {
  number: number;
  status: ProgressStatus;
}

export function StatusIndicator({ number, status }: StatusIndicatorProps) {
  return (
    <span
      className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium ${statusStyles[status]}`}
      title={status.replace('_', ' ')}
    >
      {number}
    </span>
  );
}
