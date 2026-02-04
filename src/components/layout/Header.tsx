import { IconSearch, IconBell, IconChevron } from '../ui/Icons';

export function Header() {
  return (
    <header className="sticky top-0 z-[100] flex h-14 items-center justify-between gap-4 border-b border-gray-200 bg-[var(--color-bg-card)] px-6 shadow-sm">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <IconSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="search"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="relative p-2 rounded-lg hover:bg-gray-100 text-gray-600"
          aria-label="Notifications"
        >
          <IconBell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[var(--color-danger)]" />
        </button>
        <button
          type="button"
          className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-100"
        >
          <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-sm font-medium">
            M
          </div>
          <span className="text-sm font-medium text-gray-700 hidden sm:inline">
            Mohamed
          </span>
          <IconChevron size={16} className="text-gray-500" />
        </button>
        <div className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-gray-200 bg-gray-50">
          <span className="text-sm font-medium text-gray-700">2026</span>
          <IconChevron size={16} className="text-gray-500" />
        </div>
      </div>
    </header>
  );
}
