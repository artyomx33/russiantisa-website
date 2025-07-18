import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  fullWidth = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    // Royal Gold primary button
    // Uses the brand colour `gold` from Tailwind theme (see tailwind.config.ts).
    // On hover we manually specify a slightly darker shade for good contrast.
    primary:
      'bg-gold hover:bg-[#B68F30] text-white focus:ring-gold/50',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-gray-300'
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const buttonClasses = twMerge(
    baseStyles,
    variantStyles[variant],
    widthStyles,
    className
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
