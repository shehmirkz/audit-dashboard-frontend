import type { CategoryProgress as CategoryProgressType } from '../../types';
import { CategoryHeader } from './CategoryHeader';
import { SubSectionCard } from './SubSectionCard';

interface CategoryProgressCardProps {
  category: CategoryProgressType;
}

export function CategoryProgressCard({ category }: CategoryProgressCardProps) {
  return (
    <div className="flex flex-col gap-3 min-w-[100px]">
      <CategoryHeader title={category.title} percentage={category.percentage} />
      <div className="flex flex-col gap-2 h-full">
        {category.items.map((item) => (
          <SubSectionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
