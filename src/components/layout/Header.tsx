import { IconSearch, IconBell, IconChevron } from '../ui/Icons';

export function Header() {
  return (
    <header className="sticky top-0 z-[100] flex h-[60px] items-center justify-between gap-4 border-b border-[#E0E8ED] bg-[var(--color-bg-card)] px-6">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <IconSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="search"
            placeholder="Search"
            className="w-full rounded-lg border border-[#E0E8ED] bg-[#F5F8FA] py-2 pl-10 pr-4 text-[14px] font-normal placeholder:text-[14px] placeholder:font-normal focus:border-[#E0E8ED] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
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
          className="flex h-8 w-[128px] shrink-0 items-center gap-2 rounded-[30px] bg-[#F9FAFA] px-2.5 hover:opacity-90"
        >
          <div className="flex h-6 w-6 shrink-0 overflow-hidden rounded-full bg-[#D9D9D9]">
            <img
              src="/images/avatar.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <span className="truncate font-['Inter',sans-serif] text-[12px] font-medium leading-4 text-[#23252A] capitalize">
            Mohamed
          </span>
          <IconChevron size={16} className="shrink-0 text-gray-500" />
        </button>
        <div className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-gray-200 bg-gray-50">
          <span className="text-sm font-medium text-gray-700">2026</span>
          <IconChevron size={16} className="text-gray-500" />
        </div>
      </div>
    </header>
  );
}
