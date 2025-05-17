'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent } from 'react';
import { routing } from '@/i18n/routing';

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
  const currentLocale = useLocale();

  // Handler for when the select value changes
  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    // Navigate to the new locale path
    router.push(`/${nextLocale}`);
  };

  return (
    <div className='relative inline-block text-gray-700'>
      {/*
        Using a <select> element for simplicity in a minimal component.
        For more complex styling or custom dropdowns, you would use
        divs and state to manage the dropdown visibility.
      */}
      <select
        value={currentLocale}
        onChange={onSelectChange}
        className='block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline cursor-pointer'
        aria-label='Select language'
        style={{ paddingLeft: '40px' }} // Make room for the flag image
      >
        {supportedLocales.map((locale) => (
          <option key={locale.value} value={locale.value}>
            {locale.label} ({locale.nativeLabel})
          </option>
        ))}
      </select>
      {/* Show current flag */}
      <img
        src={supportedLocales.find(l => l.value === currentLocale)?.flagSrc}
        alt={`${currentLocale} flag`}
        className='absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-4 object-cover rounded'
      />

      {/* Add a simple arrow icon for the select dropdown */}
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <svg
          className='fill-current h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
