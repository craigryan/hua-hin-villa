'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const NavButton = ({ 
  children, 
  onClick, 
  href, 
  label 
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  href?: string;
  label: string;
}) => {
  const baseStyles = `
    p-2 rounded
    hover:bg-neutral-100
    active:bg-neutral-200
    transition-all duration-200 ease-in-out
    flex items-center justify-center
  `;

  if (href) {
    return (
      <Link href={href} className={baseStyles} aria-label={label}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles} aria-label={label}>
      {children}
    </button>
  );
};

const Navigation = () => {
  const pathname = usePathname();
  const t = useTranslations('Navigation');
  
  // Only show back button if we're not on the home page
  // and not on the language selection page (e.g., /en or /th)
  const showBackButton = pathname && pathname.split('/').length > 2;

  return (
    <div className="flex items-center space-x-2">
      {showBackButton && (
        <NavButton onClick={() => window.history.back()} label="Go back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5 text-neutral-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </NavButton>
      )}
      <NavButton href="/" label="Home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-5 h-5 text-neutral-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </NavButton>
      {/* Hide location text on mobile, show on tablet and up */}
      <Link href="/" className="hidden sm:flex items-center space-x-1 text-neutral-600 text-sm hover:text-primary transition-colors duration-200">
        <span>{t('locationName')}</span>
        <Image
          src="/images/flags/th.svg"
          alt="Thailand flag"
          width={16}
          height={16}
          className="w-4 h-4"
        />
      </Link>
    </div>
  );
};

export default Navigation;
