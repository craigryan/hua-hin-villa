import React from 'react';
import { getTranslations } from 'next-intl/server';
import Footer from '@/components/Footer';

// Define the expected shape of the params prop
interface PageProps {
  params: {
    locale: string;
  };
}

// Mark the component as async to use server-side translations
async function TheVillaPage({ params }: PageProps) {
  // Get the translations using the server-side method
  const t = await getTranslations('villa');

  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-grow container mx-auto px-4 py-16'>
        <section className='max-w-4xl mx-auto'>
          <h1 className='text-3xl md:text-4xl font-bold mb-6 text-gray-800'>
            {t('title')}
          </h1>
          <p className='text-lg text-gray-700 leading-relaxed mb-8'>
            {t('description')}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TheVillaPage;
