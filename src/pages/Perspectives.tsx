import { useState } from 'react';

import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Pill } from '../components/ui/Pill';
import { CircularProgress } from '../components/ui/CircularProgress';
import { Tabs } from '../components/ui/Tabs';
import { EvidenceSummaryCard } from '../components/dashboard/EvidenceSummaryCard';
import { OverviewContent } from '../components/dashboard/OverviewContent';
import { LeadersSection } from '../components/dashboard/LeadersSection';
import { EvidenceTabContent } from '../components/dashboard/EvidenceTabContent';
import { perspectiveDetailData } from '../data/perspectives';

export function Perspectives() {
  const [activeTab, setActiveTab] = useState('overview');
  const data = perspectiveDetailData;
  const documents = data.evidenceDocuments ?? [];
  const comments = data.evidenceComments ?? [];
  const activities = data.evidenceActivities ?? [];

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-6">
          <OverviewContent sections={data.overviewSections} />
          <LeadersSection leaders={data.leaders} />
        </div>
      ),
    },
    {
      id: 'evidence',
      label: 'Evidence',
      content: (
        <EvidenceTabContent
          documents={documents}
          comments={comments}
          activities={activities}
        />
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title={data.title} backTo="/" />

      <Card className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0 flex-1">
          <Pill className="mb-2">{data.category}</Pill>
          <h2 className="text-lg font-bold text-gray-900">{data.title}</h2>
          <p className="mt-1 text-sm text-gray-600">{data.description}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <CircularProgress value={data.progress} size={72} strokeWidth={6} />
        </div>
      </Card>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <EvidenceSummaryCard value={data.evidence.total} label="Total Evidence" />
        <EvidenceSummaryCard
          value={data.evidence.underReview}
          label="Under Review Evidence"
        />
        <EvidenceSummaryCard
          value={data.evidence.inProgress}
          label="In Progress Evidence"
        />
        <EvidenceSummaryCard
          value={data.evidence.completed}
          label="Completed Evidence"
        />
      </section>

      <Tabs tabs={tabs} activeId={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
