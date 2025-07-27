'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// Define the structure for our supported locales
interface SupportedLocale {
  value: string; // The locale code (e.g., 'en', 'th')
  label: string; // The display name in English
  nativeLabel: string; // The display name in the native language
  flagSrc: string; // Path to the flag image
}

// List of supported locales with their details
const supportedLocales: SupportedLocale[] = [
  { value: 'en', label: 'English', nativeLabel: 'English', flagSrc: '/images/flags/gb.svg' },
  { value: 'th', label: 'Thai', nativeLabel: 'ไทย', flagSrc: '/images/flags/th.svg' },
];

// LanguageSwitcher component
const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocaleData = supportedLocales.find(l => l.value === currentLocale) || supportedLocales[0];

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handler for language selection
  const handleLanguageChange = (nextLocale: string) => {
    // Get the current path without the locale prefix
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '';
    
    // Navigate to the same page but with the new locale
    router.push(`/${nextLocale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  return (
    <div className='relative' ref={dropdownRef}>
      {/* Mobile: Show only flag, Desktop: Show flag + text */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center space-x-2 p-2 rounded hover:bg-neutral-100 transition-colors duration-200'
        aria-label='Change language'
      >
        <Image
          src={currentLocaleData.flagSrc}
          alt={`${currentLocaleData.label} flag`}
          width={24}
          height={16}
          className='w-6 h-4 object-cover rounded'
        />
        {/* Show text only on desktop */}
        <span className='hidden md:inline-block text-sm font-medium text-neutral-700'>
          {currentLocaleData.nativeLabel}
        </span>
        <svg
          className={`w-4 h-4 text-neutral-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 z-50'>
          {supportedLocales.map((locale) => (
            <button
              key={locale.value}
              onClick={() => handleLanguageChange(locale.value)}
              className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-neutral-50 transition-colors duration-200 ${
                locale.value === currentLocale ? 'bg-neutral-50' : ''
              } ${locale.value === supportedLocales[0].value ? 'rounded-t-lg' : ''} ${
                locale.value === supportedLocales[supportedLocales.length - 1].value ? 'rounded-b-lg' : ''
              }`}
            >
              <Image
                src={locale.flagSrc}
                alt={`${locale.label} flag`}
                width={24}
                height={16}
                className='w-6 h-4 object-cover rounded'
              />
              <span className='text-sm font-medium text-neutral-700'>
                {locale.label} ({locale.nativeLabel})
              </span>
              {locale.value === currentLocale && (
                <svg
                  className='w-4 h-4 text-primary ml-auto'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;