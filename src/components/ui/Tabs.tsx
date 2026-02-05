import { type ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  activeId: string;
  onTabChange: (id: string) => void;
}

export function Tabs({ tabs, activeId, onTabChange }: TabsProps) {
  const active = tabs.find((t) => t.id === activeId);
  return (
    <div>
      <div className="flex gap-1 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`rounded-t-lg px-4 py-2.5 text-sm font-medium transition-colors ${
              tab.id === activeId
                ? 'bg-white text-gray-900 shadow-[0_-1px_0_0_#e5e7eb]'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {active && (
        <div className="rounded-b-lg border border-t-0 border-gray-200 bg-white p-4">
          {active.content}
        </div>
      )}
    </div>
  );
}
