import type { PerspectiveDetailLeader } from '../../types';
import { Card } from '../ui/Card';

interface LeadersSectionProps {
  leaders: PerspectiveDetailLeader[];
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function LeadersSection({ leaders }: LeadersSectionProps) {
  return (
    <Card>
      <h3 className="mb-4 text-lg font-bold text-gray-900">Leaders</h3>
      <div className="flex flex-wrap gap-3">
        {leaders.map((leader) => (
          <div
            key={leader.id}
            className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-medium text-white">
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
            <div>
              <p className="font-medium text-gray-900">{leader.name}</p>
              <p className="text-sm text-gray-500">{leader.perspective}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
