import type { CategoryProgress } from '../../types';
import { StatusLegend } from './StatusLegend';
import { CategoryProgressCard } from './CategoryProgressCard';

interface ProgressStatusSectionProps {
  categories: CategoryProgress[];
}

export function ProgressStatusSection({ categories }: ProgressStatusSectionProps) {
  return (
    <section className="mt-8 rounded-[10px] border border-[#E0E8ED] bg-[#FFFFFF] p-3">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h2 className="text-xl font-bold text-gray-900">Progress Status</h2>
        <StatusLegend />
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((category) => (
          <CategoryProgressCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
