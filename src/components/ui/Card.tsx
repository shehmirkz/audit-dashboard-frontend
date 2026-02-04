import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-lg bg-[var(--color-bg-card)] shadow-sm border border-gray-100 p-4 ${className}`}
    >
      {children}
    </div>
  );
}
