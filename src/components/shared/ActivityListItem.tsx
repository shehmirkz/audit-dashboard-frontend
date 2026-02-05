import type { RecentActivity } from '../../types';

interface ActivityListItemProps {
  activity: RecentActivity;
}

export function ActivityListItem({ activity }: ActivityListItemProps) {
  return (
    <div className="flex items-start gap-2 py-3 first:pt-0 last:pb-0 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-gray-100">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-danger)]" />
      <div className="min-w-0 flex-1">
        <p className="text-sm text-gray-800">{activity.description}</p>
        <p className="mt-0.5 text-xs text-gray-500">{activity.timeAgo}</p>
      </div>
    </div>
  );
}
