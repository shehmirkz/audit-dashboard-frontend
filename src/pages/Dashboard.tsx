import { ProjectTimeline } from '../components/dashboard/ProjectTimeline';
import { ProgressStatusSection } from '../components/dashboard/ProgressStatusSection';
import { StatCard } from '../components/ui/StatCard';
import {
  timelineData,
  statCardsData,
  progressStatusData,
} from '../data/dashboard';

export function Dashboard() {
  return (
    <div className="space-y-8">
      <ProjectTimeline milestones={timelineData} />
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {statCardsData.map((item) => (
            <StatCard key={item.id} item={item} />
          ))}
        </div>
      </section>
      <ProgressStatusSection categories={progressStatusData} />
    </div>
  );
}
