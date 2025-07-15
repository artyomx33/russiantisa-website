/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Check if we're on the homepage
  const isHomePage = pathname === '/';

  // Handle scroll events to change navigation appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    // Главная always goes to root
    { name: 'Главная', path: '/' },
    // About page with anchor to the Team section
    { name: 'О школе', path: '/about#team' },
    // Program page
    { name: 'Программа', path: '/program' },
    // Events timeline page
    { name: 'События', path: '/events' },
    // Apply / enrolment page
    { name: 'Записаться', path: '/apply' },
  ];

  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav
      className={twMerge(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'
      )}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-800">
            <span className="text-gold">Russian</span> TISA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={(e) => handleAnchorClick(e, item.path)}
                className={twMerge(
                  'text-gray-700 hover:text-gold transition-colors relative py-2',
                  pathname === item.path.split('#')[0] && 'text-gold font-medium'
                )}
              >
                {item.name}
                {pathname === item.path.split('#')[0] && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleAnchorClick(e, item.path)}
                  className={twMerge(
                    'text-gray-700 hover:text-gold transition-colors py-2',
                    pathname === item.path.split('#')[0] && 'text-gold font-medium'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
