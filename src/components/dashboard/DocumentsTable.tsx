import type { EvidenceDocument } from '../../types';
import { StatusBadge } from '../ui/StatusBadge';
import { IconChevronUpDown } from '../ui/Icons';

const columns: { key: keyof EvidenceDocument | 'documentName'; label: string }[] = [
  { key: 'documentNumber', label: 'Document Number' },
  { key: 'documentName', label: 'Document Name' },
  { key: 'documentLead', label: 'Document Lead' },
  { key: 'documentPreparer', label: 'Document Preparer' },
  { key: 'date', label: 'Date' },
  { key: 'dueDate', label: 'Due Date' },
  { key: 'status', label: 'Status' },
];

interface DocumentsTableProps {
  documents: EvidenceDocument[];
}

function getCellValue(doc: EvidenceDocument, key: string) {
  if (key === 'documentName') {
    return (
      <a
        href="#"
        className="text-[var(--color-primary)] hover:underline"
        onClick={(e) => e.preventDefault()}
      >
        {doc.documentName}
      </a>
    );
  }
  if (key === 'status') {
    return <StatusBadge status={doc.status} />;
  }
  return String(doc[key as keyof EvidenceDocument] ?? '');
}

export function DocumentsTable({ documents }: DocumentsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="w-full min-w-[800px] text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 font-semibold text-gray-700"
              >
                <span className="inline-flex items-center gap-1">
                  {col.label}
                  <IconChevronUpDown size={14} className="text-gray-400" />
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr
              key={doc.id}
              className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50"
            >
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-gray-800">
                  {getCellValue(doc, col.key)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
