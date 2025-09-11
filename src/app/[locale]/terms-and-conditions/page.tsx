import React from 'react';
import { useTranslations } from 'next-intl';

export default function TermsAndConditions() {
  const t = useTranslations('termsAndConditions');

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
                  {t('agreement.heading')}
                </h2>
                <p className="mb-4">
                  {t('agreement.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('propertyUse.heading')}
                </h2>
                <p className="mb-4">
                  {t('propertyUse.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('houseRules.heading')}
                </h2>
                <p className="mb-4">
                  {t('houseRules.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('liability.heading')}
                </h2>
                <p className="mb-4">
                  {t('liability.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('damages.heading')}
                </h2>
                <p className="mb-4">
                  {t('damages.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('privacy.heading')}
                </h2>
                <p className="mb-4">
                  {t('privacy.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('disputeResolution.heading')}
                </h2>
                <p className="mb-4">
                  {t('disputeResolution.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('modifications.heading')}
                </h2>
                <p className="mb-4">
                  {t('modifications.description')}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}