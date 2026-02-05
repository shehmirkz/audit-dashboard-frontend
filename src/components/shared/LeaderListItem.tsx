import type { PerspectiveLeader } from '../../types';

interface LeaderListItemProps {
  leader: PerspectiveLeader;
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function LeaderListItem({ leader }: LeaderListItemProps) {
  return (
    <div className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-gray-100">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-medium text-white">
          {leader.avatarUrl ? (
            <img
              src={leader.avatarUrl}
              alt=""
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            getInitials(leader.name)
          )}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-gray-900">
            {leader.name}
          </p>
          <p className="truncate text-xs text-gray-500">{leader.perspective}</p>
        </div>
      </div>
      <span className="shrink-0 text-sm font-bold text-gray-900">
        {leader.score}%
      </span>
    </div>
  );
}
