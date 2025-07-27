import React from 'react';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { Geist, Geist_Mono, Lato } from 'next/font/google';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import Navigation from '@/components/Navigation';
import ThaiRoofIcon from '@/components/ThaiRoofIcon';

const lato = Lato({
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${lato.variable} ${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="min-h-screen">
            <header className="relative bg-white border-b border-neutral-200">
              {/* Mobile layout */}
              <div className="sm:hidden">
                <div className="flex justify-between items-center p-4">
                  <Navigation />
                  <ThaiRoofIcon className="w-10 h-10 text-primary" />
                  <LanguageSwitcher />
                </div>
                <div className="text-center pb-4 px-4">
                  <h1 className="text-xl font-light tracking-wider text-neutral-800">
                    {messages.Navigation?.houseName || 'Baan Lom Yen'}
                  </h1>
                  <p className="text-xs text-neutral-500 mt-1 tracking-wide">
                    {messages.Navigation?.houseTagline || 'Private Holiday Villa'}
                  </p>
                </div>
              </div>
              
              {/* Desktop layout */}
              <div className="hidden sm:grid grid-cols-3 items-center p-6">
                <div className="justify-self-start">
                  <Navigation />
                </div>
                <div className="justify-self-center text-center">
                  <ThaiRoofIcon className="w-12 h-12 text-primary mx-auto mb-2" />
                  <h1 className="text-2xl md:text-3xl font-light tracking-wider text-neutral-800">
                    {messages.Navigation?.houseName || 'Baan Lom Yen'}
                  </h1>
                  <p className="text-xs md:text-sm text-neutral-500 mt-1 tracking-wide">
                    {messages.Navigation?.houseTagline || 'Private Holiday Villa'}
                  </p>
                </div>
                <div className="justify-self-end">
                  <LanguageSwitcher />
                </div>
              </div>
            </header>
            <main className="flex-1">
              {children}
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>

  );
}
