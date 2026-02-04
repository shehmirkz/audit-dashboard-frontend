import type {
  TimelineMilestone,
  StatCardItem,
  CategoryProgress,
} from '../types';

export const timelineData: TimelineMilestone[] = [
  { id: '1', date: 'Mar 17', label: 'Kickoff Workshop', status: 'completed' },
  { id: '2', date: 'March 18', label: 'Data Collection', status: 'completed' },
  { id: '3', date: 'May 8', label: 'Initial Phase', status: 'pending' },
  { id: '4', date: 'May 9-July 12', label: 'Verification', status: 'pending' },
  { id: '5', date: 'July 13', label: 'Completion Reviews', status: 'pending' },
  { id: '6', date: 'August 21', label: 'Cycle Conclusion', status: 'pending' },
];

export const statCardsData: StatCardItem[] = [
  {
    id: '1',
    value: '78.65%',
    label: 'Overall Progress',
    icon: 'chart',
    highlight: true,
  },
  {
    id: '2',
    value: 95,
    label: 'Total Criteria',
    icon: 'document',
    highlight: true,
  },
  {
    id: '3',
    value: 52,
    label: 'Completed Criteria',
    icon: 'document',
    highlight: true,
  },
  { id: '4', value: 386, label: 'Evidence Documents', icon: 'folder' },
  { id: '5', value: 302, label: 'Evidence (Completed)', icon: 'folder' },
  { id: '6', value: 258, label: 'Uploaded To DGA', icon: 'upload' },
];

export const progressStatusData: CategoryProgress[] = [
  {
    id: '1',
    title: 'Strategy And Planning',
    percentage: 97.78,
    items: [
      {
        id: '1-1',
        title: 'Digital Transformation',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'completed' },
        ],
      },
      {
        id: '1-2',
        title: 'Digital Governance',
        indicators: [{ number: 3, status: 'in_progress' }],
      },
      {
        id: '1-3',
        title: 'Innovation',
        indicators: [
          { number: 1, status: 'delayed' },
          { number: 2, status: 'delayed' },
          { number: 3, status: 'delayed' },
          { number: 4, status: 'delayed' },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Organization And Culture',
    percentage: 70.83,
    items: [
      {
        id: '2-1',
        title: 'Digital Culture And Environment',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in_progress' },
        ],
      },
      {
        id: '2-2',
        title: 'Skills & Capacity Building',
        indicators: [
          { number: 1, status: 'in_progress' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'in_progress' },
        ],
      },
      {
        id: '2-3',
        title: 'Support Systems',
        indicators: [
          { number: 1, status: 'fully_uploaded' },
          { number: 2, status: 'fully_uploaded' },
          { number: 3, status: 'partially_uploaded' },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'Operations And Execution',
    percentage: 80,
    items: [
      {
        id: '3-1',
        title: 'Process Automation',
        indicators: [
          { number: 1, status: 'in_progress' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'Business Continuity',
    percentage: 90.59,
    items: [
      {
        id: '4-1',
        title: 'Risk Management',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'completed' },
        ],
      },
      {
        id: '4-2',
        title: 'Business Continuity',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'fully_uploaded' },
          { number: 3, status: 'completed' },
          { number: 4, status: 'fully_uploaded' },
          { number: 5, status: 'completed' },
          { number: 6, status: 'fully_uploaded' },
          { number: 7, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: '5',
    title: 'Information Technology',
    percentage: 75,
    items: [
      {
        id: '5-1',
        title: 'Support Systems',
        indicators: [
          { number: 1, status: 'partially_uploaded' },
          { number: 2, status: 'partially_uploaded' },
        ],
      },
      {
        id: '5-2',
        title: 'IT Infrastructure',
        indicators: [
          { number: 4, status: 'partially_uploaded' },
          { number: 5, status: 'partially_uploaded' },
          { number: 6, status: 'partially_uploaded' },
        ],
      },
      {
        id: '5-3',
        title: 'Cloud Infrastructure',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: '6',
    title: 'Comprehensive Governance',
    percentage: 64.44,
    items: [
      {
        id: '6-1',
        title: 'Compliance',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in_progress' },
          { number: 3, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: '7',
    title: 'Channels And Services',
    percentage: 100,
    items: [
      {
        id: '7-1',
        title: 'Digital Services',
        indicators: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: '8',
    title: 'Beneficiary Centralization',
    percentage: 60,
    items: [
      {
        id: '8-1',
        title: 'User Engagement',
        indicators: [{ number: 1, status: 'in_progress' }],
      },
      {
        id: '8-2',
        title: 'User Relationship',
        indicators: [
          { number: 1, status: 'in_progress' },
          { number: 2, status: 'completed' },
        ],
      },
      {
        id: '8-3',
        title: 'User Experience',
        indicators: [
          { number: 1, status: 'in_progress' },
          { number: 2, status: 'in_progress' },
          { number: 3, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: '9',
    title: 'Government Data',
    percentage: 87.5,
    items: [
      {
        id: '9-1',
        title: 'Data Governance',
        indicators: [
          { number: 1, status: 'in_progress' },
          { number: 2, status: 'completed' },
        ],
      },
      {
        id: '9-2',
        title: 'Data Usage & Availability',
        indicators: [{ number: 1, status: 'in_progress' }],
      },
      {
        id: '9-3',
        title: 'Open Data',
        indicators: [
          { number: 1, status: 'in_progress' },
          { number: 2, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: '10',
    title: 'Research And Innovation',
    percentage: 17.65,
    items: [
      {
        id: '10-1',
        title: 'Innovation',
        indicators: [
          { number: 1, status: 'delayed' },
          { number: 2, status: 'delayed' },
          { number: 3, status: 'delayed' },
        ],
      },
      {
        id: '10-2',
        title: 'Creative Solutions',
        indicators: [
          { number: 1, status: 'in_progress' },
          { number: 2, status: 'not_started' },
        ],
      },
    ],
  },
];
