import React from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

interface TeacherCardProps {
  image: string;
  name: string;
  title?: string;
  bio: string;
  className?: string;
}

export default function TeacherCard({
  image,
  name,
  title,
  bio,
  className,
}: TeacherCardProps) {
  return (
    <div className={twMerge(
      'flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300',
      className
    )}>
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-gold">
        <Image 
          src={image} 
          alt={`${name} photo`} 
          width={128} 
          height={128}
          className="object-cover w-full h-full"
        />
      </div>
      
      <h3 className="text-xl font-bold mb-1 text-center">{name}</h3>
      {title && <p className="text-gold font-medium mb-2 text-center">{title}</p>}
      <p className="text-gray-600 text-center">{bio}</p>
    </div>
  );
}
