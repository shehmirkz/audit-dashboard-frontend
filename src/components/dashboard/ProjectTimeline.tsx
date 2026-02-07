import type { TimelineMilestone } from '../../types';
import { IconChevron } from '../ui/Icons';

interface ProjectTimelineProps {
  milestones: TimelineMilestone[];
}

const COMPLETED_GREEN = '#1EA54E';
const PENDING_RED = '#DB1F26';

export function ProjectTimeline({ milestones }: ProjectTimelineProps) {
  const completedCount = milestones.filter((m) => m.status === 'completed').length;
  const segments = Math.max(milestones.length - 1, 1);
  const greenWidth =
    completedCount >= segments
      ? 100
      : (completedCount / segments) * 100;

  return (
    <section className="rounded-[10px] border border-[#E0E8ED] bg-[#FFFFFF] p-4">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#2C3E50]">Project Timeline</h2>
        <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2">
          <span className="text-sm font-medium text-gray-700">2026</span>
          <IconChevron size={16} className="text-gray-500" />
        </div>
      </div>

      <div className="relative pt-2">
        <div
          className="absolute left-0 right-0 top-[10px] h-[14px] rounded-full bg-[#F5F8FB]"
          aria-hidden
        />
        <div
          className="absolute left-0 top-[10px] h-[14px] rounded-l-full"
          style={{
            width: `${greenWidth}%`,
            backgroundColor: COMPLETED_GREEN,
          }}
          aria-hidden
        />

        <div className="relative z-10 flex">
          {milestones.map((m) => (
            <div
              key={m.id}
              className="flex flex-1 flex-col items-center justify-center"
            >
              <div
                className="h-4 w-4 shrink-0 rounded-full border-2 border-white shadow-sm"
                style={{
                  backgroundColor:
                    m.status === 'completed' ? COMPLETED_GREEN : PENDING_RED,
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-4 flex">
          {milestones.map((m) => (
            <div
              key={m.id}
              className="flex flex-1 flex-col items-center text-center"
            >
              <p className="text-[14px] font-normal leading-4 text-[#8597A8]">{m.date}</p>
              <p className="mt-1 text-[14px] font-medium leading-4 text-[#1D3557]">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
