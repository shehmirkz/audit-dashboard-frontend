import { Fragment } from 'react';
import type { OverviewSection as OverviewSectionType } from '../../types';

interface OverviewContentProps {
  sections: OverviewSectionType[];
}

function isStringArray(content: string | string[]): content is string[] {
  return Array.isArray(content);
}

export function OverviewContent({ sections }: OverviewContentProps) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(140px,auto)_1fr]">
      {sections.map((section) => (
        <Fragment key={section.id}>
          <div className="flex items-center rounded-lg border border-gray-100 bg-gray-50 px-3 py-3">
            <p className="text-sm font-semibold text-gray-900">{section.label}</p>
          </div>
          <div className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-3 text-sm text-gray-700">
            {isStringArray(section.content) ? (
              <ul className="list-inside list-disc space-y-1">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{section.content}</p>
            )}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
