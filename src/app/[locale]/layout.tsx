'use client';

import React, { useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: currentLocale } = React.use(params);
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
        setMessages({});
      }
    };

    loadMessages();
  }, [currentLocale]);

  if (!messages) {
    return <div>Loading...</div>;
  }

  return (
    <NextIntlClientProvider locale={currentLocale} messages={messages}>
      <div className="min-h-screen">
        <header className="flex justify-end p-4 bg-gray-200">
          <LanguageSwitcher />
        </header>
        <main className="flex-1">
          {children}
        </main>
      </div>
    </NextIntlClientProvider>
  );
}
