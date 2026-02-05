import type { RecentActivity } from '../../types';
import { Card } from '../ui/Card';
import { ActivityListItem } from '../shared/ActivityListItem';

interface RecentActivitiesCardProps {
  activities: RecentActivity[];
}

export function RecentActivitiesCard({ activities }: RecentActivitiesCardProps) {
  return (
    <Card>
      <h3 className="mb-4 text-sm font-bold text-gray-800">Recent Activities</h3>
      <div className="-mx-1">
        {activities.map((activity) => (
          <ActivityListItem key={activity.id} activity={activity} />
        ))}
      </div>
    </Card>
  );
}
