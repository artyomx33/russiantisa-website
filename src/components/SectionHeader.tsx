import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={twMerge(
      'mb-8',
      centered ? 'text-center' : 'text-left',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      
      <div className={twMerge(
        'h-1 bg-gold w-16 mt-4',
        centered ? 'mx-auto' : ''
      )} />
    </div>
  );
}
