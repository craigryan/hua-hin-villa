import React from 'react';
import { useTranslations } from 'next-intl';

export default function SocialMedia() {
  const t = useTranslations('socialMedia');

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
                  {t('connectWithUs.heading')}
                </h2>
                <p className="mb-4">
                  {t('connectWithUs.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('facebook.heading')}
                </h2>
                <p className="mb-4">
                  <a href="https://facebook.com/huahinluxuryvilla" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {t('facebook.link')}
                  </a>
                </p>
                <p className="mb-4">
                  {t('facebook.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('instagram.heading')}
                </h2>
                <p className="mb-4">
                  <a href="https://instagram.com/huahinvilla" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {t('instagram.link')}
                  </a>
                </p>
                <p className="mb-4">
                  {t('instagram.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('youtube.heading')}
                </h2>
                <p className="mb-4">
                  <a href="https://youtube.com/@huahinluxuryvilla" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {t('youtube.link')}
                  </a>
                </p>
                <p className="mb-4">
                  {t('youtube.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('whatsapp.heading')}
                </h2>
                <p className="mb-4">
                  <a href="https://wa.me/66123456789" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {t('whatsapp.link')}
                  </a>
                </p>
                <p className="mb-4">
                  {t('whatsapp.description')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('reviews.heading')}
                </h2>
                <p className="mb-4">
                  {t('reviews.description')}
                </p>
              </section>

              <section className="mb-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
                  {t('mediaPolicy.heading')}
                </h2>
                <p className="text-neutral-600">
                  {t('mediaPolicy.description')}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}