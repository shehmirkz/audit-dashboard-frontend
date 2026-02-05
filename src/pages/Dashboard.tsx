import { ProjectTimeline } from '../components/dashboard/ProjectTimeline';
import { ProgressStatusSection } from '../components/dashboard/ProgressStatusSection';
import { ComplianceScoreCard } from '../components/dashboard/ComplianceScoreCard';
import { TopLeadersCard } from '../components/dashboard/TopLeadersCard';
import { RecentActivitiesCard } from '../components/dashboard/RecentActivitiesCard';
import { PerformanceChartCard } from '../components/dashboard/PerformanceChartCard';
import { AuditReadinessCard } from '../components/dashboard/AuditReadinessCard';
import { StatCard } from '../components/ui/StatCard';
import {
  timelineData,
  statCardsData,
  progressStatusData,
  complianceScore,
  topLeadersData,
  recentActivitiesData,
  monthlyPerformanceData,
  auditReadinessData,
} from '../data/dashboard';

export function Dashboard() {
  return (
    <div className="space-y-8">
      <ProjectTimeline milestones={timelineData} />
      <section>
        <div className="flex flex-wrap gap-3">
          {statCardsData.map((item) => (
            <StatCard key={item.id} item={item} />
          ))}
        </div>
      </section>
      <ProgressStatusSection categories={progressStatusData} />
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <ComplianceScoreCard
          value={complianceScore.value}
          subtitle={complianceScore.subtitle}
          color={complianceScore.color}
        />
        <TopLeadersCard leaders={topLeadersData} />
        <RecentActivitiesCard activities={recentActivitiesData} />
      </section>
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <PerformanceChartCard data={monthlyPerformanceData} />
        <AuditReadinessCard
          value={auditReadinessData.value}
          subtitle={auditReadinessData.subtitle}
          color={auditReadinessData.color}
          metrics={auditReadinessData.metrics}
        />
      </section>

    </div>
  );
}
