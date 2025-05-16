'use client';

import React, { useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import LanguageSwitcher from '../../components/LanguageSwitcher';

// Define the props expected by this layout component
interface LocaleLayoutProps {
  children: React.ReactNode; // The content of the current page or nested route
  params: Promise<{ locale: string }>;
}

// This layout component wraps all pages within the /[locale] route segment.
// It receives the locale from the URL params.
//
export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  // You can access the current locale here using params.locale
  const { locale: currentLocale } = React.use(params);

  // In a real application using next-intl, you would typically load
  // locale-specific translations or other data here and provide it
  // to the children using a Context Provider or similar mechanism.
  // For this minimal layout, we just need to render the children.

  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  React.useEffect(() => {
    const loadMessages = async () => {
      try {
        const loadedMessages = await import(
          `../../messages/${currentLocale}.json`
        );
        setMessages(loadedMessages.default);
      } catch (error) {
        console.error(
          `Could not load messages for locale "${currentLocale}"`,
          error
        );
        setMessages({}); // Fallback to an empty object if translations are missing
      }
    };

    loadMessages();
  }, [currentLocale]);

  // Render nothing until the messages are loaded
  if (!messages) {
    return null; // Optionally, you can render a loading spinner here
  }

  // The root app/layout.tsx handles the <html> and <body> tags.
  // This layout simply provides a wrapper for content specific to the locale.
  return (
    <>
      {/*
        Optional: Add locale-specific components here that should appear
        on every page within this locale route, e.g., a language switcher,
        a header that needs the current locale, etc.

        Example (conceptual):
        <LocaleAwareHeader locale={currentLocale} />
        <LanguageSwitcher currentLocale={currentLocale} />
      */}
      <NextIntlClientProvider locale={currentLocale} messages={messages}>
        <header className='p-4 bg-gray-200 text-right'>
          {' '}
          {/* Simple header for switcher */}
          <LanguageSwitcher />
        </header>
        {children}
      </NextIntlClientProvider>

      {/*
        Optional: Add locale-specific components here that should appear
        at the bottom of every page within this locale route, e.g.,
        a locale-aware footer (though your main Footer component might handle this).
      */}
    </>
  );
}
