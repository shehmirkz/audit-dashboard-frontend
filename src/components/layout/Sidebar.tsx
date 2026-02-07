import { useState } from 'react';
import { NavItem } from './NavItem';
import { navItems } from '../../data/navigation';
import { IconCollapse } from '../ui/Icons';

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`relative flex flex-col bg-[var(--color-primary)] text-white transition-[width] duration-200 ${collapsed ? 'w-16' : 'w-56'
        }`}
    >
      <div className="flex min-h-[72px] items-center border-b border-white/10 p-4">
        {!collapsed && (
          <img
            src="/images/tahwul-logo.png"
            alt="Tahwul Logo"
            className="h-12 w-auto"
            draggable={false}
          />
        )}
      </div>

      <button
        type="button"
        onClick={() => setCollapsed((c) => !c)}
        className="absolute right-[-15px] top-[20px] z-10000 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-[0px_0px_2px_0px_#0000001A] hover:bg-gray-50"
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <IconCollapse
          size={16}
          className={`text-gray-500 transition-transform duration-200 ${collapsed ? 'rotate-180' : ''
            }`}
        />
      </button>

      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {navItems.map((item) => (
          <NavItem key={item.id} item={item} collapsed={collapsed} />
        ))}
      </nav>
    </aside>
  );
}
