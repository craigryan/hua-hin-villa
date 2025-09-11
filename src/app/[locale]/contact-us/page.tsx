import React from 'react';
import { useTranslations } from 'next-intl';

export default function ContactUs() {
  const t = useTranslations('contactUs');

  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-neutral-800 mb-8 text-center">
              {t('title')}
            </h1>
            
            <div className="prose prose-lg max-w-none text-neutral-600">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('getInTouch.heading')}
                </h2>
                <p className="mb-4">
                  {t('getInTouch.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('email.heading')}
                </h2>
                <p className="mb-4">
                  <a href="mailto:info@huahinvilla.com" className="text-primary hover:underline">
                    {t('email.address')}
                  </a>
                </p>
                <p className="mb-4">
                  {t('email.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('phone.heading')}
                </h2>
                <p className="mb-4">
                  <a href="tel:+66123456789" className="text-primary hover:underline">
                    {t('phone.number')}
                  </a>
                </p>
                <p className="mb-4">
                  {t('phone.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('address.heading')}
                </h2>
                <p className="mb-4">
                  {t('address.line1')}<br />
                  {t('address.line2')}<br />
                  {t('address.line3')}<br />
                  {t('address.country')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('bookingInquiries.heading')}
                </h2>
                <p className="mb-4">
                  {t('bookingInquiries.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('responseTime.heading')}
                </h2>
                <p className="mb-4">
                  {t('responseTime.description')}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}