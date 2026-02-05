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
  evidenceDocuments: [
    {
      id: '1',
      documentNumber: '5.4.1.1',
      documentName: 'Digital_Transformation_Plan.Pdf',
      documentLead: 'Ahmed Khaled',
      documentPreparer: 'Ahmed Khaled',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'approved',
    },
    {
      id: '2',
      documentNumber: '5.4.1.2',
      documentName: 'KPI_Framework.Xlsx',
      documentLead: 'Mona Hamed',
      documentPreparer: 'Mona Hamed',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'pending_review',
    },
    {
      id: '3',
      documentNumber: '5.4.1.3',
      documentName: 'Roadmap_Version1.Docx',
      documentLead: 'Rami AlSharif',
      documentPreparer: 'Rami AlSharif',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'pending_review',
    },
  ],
  evidenceComments: [
    {
      id: '1',
      authorName: 'Sara Ibrahim',
      date: '2025-08-05',
      text: 'Ensure The Plan Includes A Clear Governance Model.',
    },
    {
      id: '2',
      authorName: 'Mona Hamed',
      date: '2025-08-05',
      text: 'Consider Adding A Section On Risk Mitigation.',
    },
  ],
  evidenceActivities: [
    { id: '1', description: 'Roadmap_Version1.Docx Uploaded By Rami AlSharif', timeAgo: '5 Mins Ago' },
    { id: '2', description: 'KPI_Framework.Xlsx Uploaded By Mona Hamed', timeAgo: '20 Mins Ago' },
    { id: '3', description: 'Digital_Transformation_Plan.Pdf Approved By Advisory Team', timeAgo: '1 Hour Ago' },
  ],
};
