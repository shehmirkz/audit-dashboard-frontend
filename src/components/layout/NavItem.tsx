import type { ComponentType } from 'react';
import { NavLink } from 'react-router-dom';

import type { NavItemConfig } from '../../types';
import {
  IconDashboard,
  IconEye,
  IconTasks,
  IconDocuments,
  IconReports,
  IconUsers,
} from '../ui/Icons';



const iconMap: Record<string, ComponentType<{ className?: string; size?: number }>> = {
  dashboard: IconDashboard,
  perspectives: IconEye,
  tasks: IconTasks,
  documents: IconDocuments,
  reports: IconReports,
  users: IconUsers,
};

interface NavItemProps {
  item: NavItemConfig;
  collapsed?: boolean;
}

export function NavItem({ item, collapsed = false }: NavItemProps) {
  const Icon = iconMap[item.icon] ?? IconDashboard;

  return (
    <NavLink
      to={item.path}
      title={collapsed ? item.label : undefined}
      className={({ isActive }) =>
        `flex items-center rounded-lg text-white/90 transition-colors ${
          collapsed ? 'justify-center px-0 py-2.5' : 'gap-3 px-3 py-2.5'
        } ${isActive ? 'bg-blue-500/30 text-white' : 'hover:bg-white/10'}`
      }
    >
      <Icon size={20} className="flex-shrink-0" />
      {!collapsed && (
        <span className="text-sm font-medium">{item.label}</span>
      )}
    </NavLink>
  );
}
