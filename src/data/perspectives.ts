import type { PerspectiveDetail } from '../types';

export const perspectiveDetailData: PerspectiveDetail = {
  id: '1',
  title: 'Digital Transformation Strategic Planning',
  category: 'Strategy & Planning',
  description:
    'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals',
  progress: 100,
  evidence: {
    total: 4,
    underReview: 3,
    inProgress: 2,
    completed: 1,
  },
  overviewSections: [
    {
      id: '1',
      label: 'Objective',
      content:
        "Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.",
    },
    {
      id: '2',
      label: 'Implementation Requirements',
      content: [
        'Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:',
        "A. The Organization's Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization's Overall Strategy.",
        'B. Strategic Initiatives, Programs, And Performance Indicators.',
        'C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy\'s Objectives.',
        'D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy\'s Objectives.',
      ],
    },
    {
      id: '3',
      label: 'Evidence Documents',
      content:
        'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
    },
    {
      id: '4',
      label: 'Related Regulations',
      content:
        'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
    },
    {
      id: '5',
      label: 'Scope',
      content: 'All Government Entities.',
    },
  ],
  leaders: [
    { id: '1', name: 'Ahmed Al-Ali', perspective: 'Strategy Perspective' },
    { id: '2', name: 'Sarah Al-Khaled', perspective: 'Beneficiary Perspective' },
  ],
};
