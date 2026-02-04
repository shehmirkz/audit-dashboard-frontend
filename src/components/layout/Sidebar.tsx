import { NavItem } from './NavItem';
import { navItems } from '../../data/navigation';

export function Sidebar() {
  return (
    <aside className="flex w-56 flex-col bg-[var(--color-primary)] text-white">
      <div className="flex min-h-[72px] items-center border-b border-white/10 p-4">
        <img
          src="/images/tahwul-logo.png"
          alt="Tahwul Logo"
          className="h-15 w-auto"
          draggable={false}
        />
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {navItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </nav>
    </aside>
  );
}
