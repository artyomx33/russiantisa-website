import React from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

interface PillarCardProps {
  icon: string | React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function PillarCard({
  icon,
  title,
  description,
  className,
}: PillarCardProps) {
  return (
    <div className={twMerge(
      'flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300',
      className
    )}>
      {typeof icon === 'string' ? (
        <div className="w-16 h-16 mb-4">
          <Image 
            src={icon} 
            alt={`${title} icon`} 
            width={64} 
            height={64}
            className="object-contain"
          />
        </div>
      ) : (
        <div className="w-16 h-16 mb-4 text-[#C52233]">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}
