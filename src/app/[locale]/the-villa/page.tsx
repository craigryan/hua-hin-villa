import React from 'react';
import { getTranslations } from 'next-intl/server';
import PropertyPage from '@/components/PropertyPage';

// Define the expected shape of the params prop
interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

// Villa images (same as from gallery page)
const villaImages = [
  { src: '/images/villa_front.jpg', alt: 'Villa Front View' },
  { src: '/images/villa_front_distance.jpg', alt: 'Villa Front Distance View' },
  { src: '/images/villa_kitchen.jpg', alt: 'Villa Kitchen' },
  { src: '/images/villa_pool.jpg', alt: 'Villa Pool' },
  { src: '/images/villa_pool2.jpg', alt: 'Villa Pool Alternative View' },
  { src: '/images/villa_pool_view.jpg', alt: 'View from Villa Pool' },
];

// Villa features configuration
const villaFeatures = [
  { icon: '🛏️', titleKey: 'features.bedrooms.title', descriptionKey: 'features.bedrooms.description' },
  { icon: '🏊', titleKey: 'features.pool.title', descriptionKey: 'features.pool.description' },
  { icon: '🏠', titleKey: 'features.living.title', descriptionKey: 'features.living.description' },
  { icon: '👨‍🍳', titleKey: 'features.kitchen.title', descriptionKey: 'features.kitchen.description' },
  { icon: '❄️', titleKey: 'features.aircon.title', descriptionKey: 'features.aircon.description' },
  { icon: '📶', titleKey: 'features.wifi.title', descriptionKey: 'features.wifi.description' },
];

// Mark the component as async to use server-side translations
async function TheVillaPage({}: PageProps) {
  // Get the translations using the server-side method
  const t = await getTranslations('villa');

  return (
    <PropertyPage
      title={t('title')}
      images={villaImages}
      features={villaFeatures}
      t={t}
    />
  );
};

export default TheVillaPage;
