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
