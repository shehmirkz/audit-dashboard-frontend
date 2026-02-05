export type ProgressStatus =
  | 'not_started'
  | 'in_progress'
  | 'completed'
  | 'partially_uploaded'
  | 'fully_uploaded'
  | 'delayed';

export interface TimelineMilestone {
  id: string;
  date: string;
  label: string;
  status: 'completed' | 'pending';
}

export interface StatCardItem {
  id: string;
  value: string | number;
  label: string;
  icon?: 'chart' | 'document' | 'folder' | 'upload';
  highlight?: boolean;
}

export interface CategoryProgress {
  id: string;
  title: string;
  percentage: number;
  items: ProgressSubItem[];
}

export interface ProgressSubItem {
  id: string;
  title: string;
  indicators: { number: number; status: ProgressStatus }[];
}

export interface NavItemConfig {
  id: string;
  label: string;
  path: string;
  icon: string;
}

export interface PerspectiveLeader {
  id: string;
  name: string;
  perspective: string;
  score: number;
  avatarUrl?: string;
}

export interface RecentActivity {
  id: string;
  description: string;
  timeAgo: string;
}

export interface MonthlyDataPoint {
  month: string;
  value: number;
}

export interface EvidenceSummary {
  total: number;
  underReview: number;
  inProgress: number;
  completed: number;
}

export interface OverviewSection {
  id: string;
  label: string;
  content: string | string[];
}

export interface PerspectiveDetailLeader {
  id: string;
  name: string;
  perspective: string;
  avatarUrl?: string;
}

export interface PerspectiveDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  progress: number;
  evidence: EvidenceSummary;
  overviewSections: OverviewSection[];
  leaders: PerspectiveDetailLeader[];
}
