import React from 'react';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import { getTranslations } from 'next-intl/server';

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
  searchParams?: Promise<{
    type?: 'villa' | 'guest';
  }>;
}

const villaImages = [
  { src: '/images/villa_front.jpg', alt: 'Villa Front View' },
  { src: '/images/villa_front_distance.jpg', alt: 'Villa Front Distance View' },
  { src: '/images/villa_kitchen.jpg', alt: 'Villa Kitchen' },
  { src: '/images/villa_pool.jpg', alt: 'Villa Pool' },
  { src: '/images/villa_pool2.jpg', alt: 'Villa Pool Alternative View' },
  { src: '/images/villa_pool_view.jpg', alt: 'View from Villa Pool' },
];

const guestImages = [
  { src: '/images/guest_from_villa.jpg', alt: 'Guest House from Villa' },
  { src: '/images/guest_front.jpg', alt: 'Guest House Front' },
  { src: '/images/guest_pool.jpg', alt: 'Guest House Pool' },
  { src: '/images/guest_side.jpg', alt: 'Guest House Side View' },
];

const GalleryPage: React.FC<PageProps> = async ({ searchParams }) => {
  // const { locale } = await params;
  const searchParamsResolved = await searchParams;
  const galleryType = searchParamsResolved?.type || 'villa'; // Default to villa if no type specified
  
  // Get translations
  const t = await getTranslations('Gallery');
  
  // Determine which images to show and the title
  const images = galleryType === 'guest' ? guestImages : villaImages;
  const title = galleryType === 'guest' ? t('guestTitle') : t('villaTitle');

  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-grow container mx-auto px-4 py-8'>
        <section>
          <h1 className='text-4xl font-bold mb-8 text-center text-gray-800'>{title}</h1>
          <ImageCarousel images={images} className='mb-8' />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
