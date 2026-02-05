import type {
  EvidenceDocument,
  EvidenceComment,
  RecentActivity,
} from '../../types';
import { DocumentsTable } from './DocumentsTable';
import { CommentsSection } from './CommentsSection';
import { Card } from '../ui/Card';
import { ActivityListItem } from '../shared/ActivityListItem';

interface EvidenceTabContentProps {
  documents: EvidenceDocument[];
  comments: EvidenceComment[];
  activities: RecentActivity[];
}

export function EvidenceTabContent({
  documents,
  comments,
  activities,
}: EvidenceTabContentProps) {
  return (
    <div className="space-y-4">
      <DocumentsTable documents={documents} />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <CommentsSection comments={comments} />
        <Card>
          <h3 className="mb-4 text-sm font-bold text-gray-900">
            Recent Activities
          </h3>
          <div className="-mx-1">
            {activities.map((activity) => (
              <ActivityListItem key={activity.id} activity={activity} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
