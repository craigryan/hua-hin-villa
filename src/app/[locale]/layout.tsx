import React from 'react';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { Geist, Geist_Mono, Lato } from 'next/font/google';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import ClientLayout from '@/components/ClientLayout';

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
            <ClientLayout messages={messages} />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>

  );
}
