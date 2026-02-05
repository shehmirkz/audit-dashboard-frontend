import { useState } from 'react';
import type { EvidenceComment } from '../../types';
import { Card } from '../ui/Card';
import { IconSend } from '../ui/Icons';

interface CommentsSectionProps {
  comments: EvidenceComment[];
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function CommentsSection({ comments }: CommentsSectionProps) {
  const [newComment, setNewComment] = useState('');

  return (
    <Card>
      <h3 className="mb-4 text-sm font-bold text-gray-900">Comments</h3>
      <div className="space-y-4">
        {comments.map((c) => (
          <div
            key={c.id}
            className="flex gap-3 rounded-lg border border-gray-100 bg-gray-50/50 p-3"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-xs font-medium text-white">
              {getInitials(c.authorName)}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-gray-900">
                  {c.authorName}
                </span>
                <span className="text-xs text-gray-500">{c.date}</span>
              </div>
              <p className="mt-1 text-sm text-gray-700">{c.text}</p>
            </div>
          </div>
        ))}
        <div className="space-y-2">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            rows={3}
            className="w-full resize-y rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
          />
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            <IconSend size={16} />
            Post Comment
          </button>
        </div>
      </div>
    </Card>
  );
}
