import type { NavItemConfig } from '../types';

export const navItems: NavItemConfig[] = [
  { id: 'dashboard', label: 'Dashboard', path: '/', icon: 'dashboard' },
  { id: 'perspectives', label: 'Perspectives', path: '/perspectives', icon: 'perspectives' },
  { id: 'tasks', label: 'Tasks', path: '/tasks', icon: 'tasks' },
  { id: 'documents', label: 'Documents', path: '/documents', icon: 'documents' },
  { id: 'reports', label: 'Reports', path: '/reports', icon: 'reports' },
  { id: 'users', label: 'Users & Roles', path: '/users', icon: 'users' },
];
