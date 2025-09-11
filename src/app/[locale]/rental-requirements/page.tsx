import React from 'react';
import { useTranslations } from 'next-intl';

export default function RentalRequirements() {
  const t = useTranslations('rentalRequirements');

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
                  {t('minimumStay.heading')}
                </h2>
                <p className="mb-4">
                  {t('minimumStay.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('booking.heading')}
                </h2>
                <p className="mb-4">
                  {t('booking.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('guests.heading')}
                </h2>
                <p className="mb-4">
                  {t('guests.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('identity.heading')}
                </h2>
                <p className="mb-4">
                  {t('identity.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('payment.heading')}
                </h2>
                <p className="mb-4">
                  {t('payment.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('cancellation.heading')}
                </h2>
                <p className="mb-4">
                  {t('cancellation.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('checkIn.heading')}
                </h2>
                <p className="mb-4">
                  {t('checkIn.description')}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}