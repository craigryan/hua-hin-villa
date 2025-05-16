'use client'; // This component uses client-side hooks

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import React, { ChangeEvent } from 'react';

// Define the structure for our supported locales
interface SupportedLocale {
  value: string; // The locale code (e.g., 'en', 'th')
  label: string; // The display name in English
  nativeLabel: string; // The display name in the native language
  flag: string; // An emoji flag for visual representation
}

// List of supported locales with their details
const supportedLocales: SupportedLocale[] = [
  { value: 'en', label: 'English', nativeLabel: 'English', flag: '🇺🇸' }, // Using US flag for English, can change if needed
  { value: 'th', label: 'Thai', nativeLabel: 'ไทย', flag: '🇹🇭' },
];

// LanguageSwitcher component
const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname(); // Gets the path without the locale prefix
  const currentLocale = useLocale(); // Gets the currently active locale

  // Handler for when the select value changes
  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    console.log('--> Selected locale:', nextLocale); // Debugging log
    router.push(`/${nextLocale}${pathname}`);
  };

  return (
    <div className='relative inline-block text-gray-700'>
      {/*
        Using a <select> element for simplicity in a minimal component.
        For more complex styling or custom dropdowns, you would use
        divs and state to manage the dropdown visibility.
      */}
      <select
        value={currentLocale} // Set the current value based on the active locale
        onChange={onSelectChange} // Call the handler when the value changes
        className='block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline cursor-pointer'
        aria-label='Select language' // Accessibility label
      >
        {/* Map through the supported locales to create options */}
        {supportedLocales.map((locale) => (
          <option key={locale.value} value={locale.value}>
            {/* Display flag and language names */}
            {locale.flag} {locale.label} ({locale.nativeLabel})
          </option>
        ))}
      </select>

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
