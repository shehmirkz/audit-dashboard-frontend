import { Link } from 'react-router-dom';
import { IconArrowLeft } from '../ui/Icons';

interface PageHeaderProps {
  title: string;
  backTo?: string;
}

export function PageHeader({ title, backTo = '/' }: PageHeaderProps) {
  return (
    <div className="mb-4 flex items-center gap-2">
      {backTo && (
        <Link
          to={backTo}
          className="flex items-center justify-center rounded-lg p-1.5 text-gray-600 hover:bg-gray-100"
          aria-label="Go back"
        >
          <IconArrowLeft size={20} />
        </Link>
      )}
      <h1 className="text-xl font-bold text-gray-900">{title}</h1>
    </div>
  );
}
