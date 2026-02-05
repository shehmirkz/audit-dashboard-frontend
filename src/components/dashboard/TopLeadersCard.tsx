import type { PerspectiveLeader } from '../../types';
import { Card } from '../ui/Card';
import { LeaderListItem } from '../shared/LeaderListItem';

interface TopLeadersCardProps {
  leaders: PerspectiveLeader[];
}

export function TopLeadersCard({ leaders }: TopLeadersCardProps) {
  return (
    <Card>
      <h3 className="mb-4 text-sm font-bold text-gray-800">
        Top Performing Perspective Leaders
      </h3>
      <div className="-mx-1">
        {leaders.map((leader) => (
          <LeaderListItem key={leader.id} leader={leader} />
        ))}
      </div>
    </Card>
  );
}
