import React from 'react';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import LanguageSwitcher from '@/components/LanguageSwitcher';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  // const { locale: currentLocale } = React.use(params);
  const {locale} = await params;
  // const [messages, setMessages] = useState<Record<string, string> | null>(null);
  
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  //if (!messages) {
  //  return <div>Loading...</div>;
  //}

  return (
    <NextIntlClientProvider>
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
