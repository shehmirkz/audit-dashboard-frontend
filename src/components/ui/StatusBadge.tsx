import type { DocumentStatus } from '../../types';

const statusConfig: Record<DocumentStatus, { label: string; className: string }> = {
  approved: {
    label: 'Approved',
    className: 'bg-[var(--color-success)] text-white',
  },
  pending_review: {
    label: 'Pending Review',
    className: 'bg-amber-100 text-amber-800',
  },
};

interface StatusBadgeProps {
  status: DocumentStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const { label, className } = statusConfig[status];
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}
    >
      {label}
    </span>
  );
}
