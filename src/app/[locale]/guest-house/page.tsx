import React from 'react';
import { getTranslations } from 'next-intl/server';
import PropertyPage from '@/components/PropertyPage';

// Define the expected shape of the params prop
interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

// Guest house images (same as from gallery page)
const guestImages = [
  { src: '/images/guest_from_villa.jpg', alt: 'Guest House from Villa' },
  { src: '/images/guest_front.jpg', alt: 'Guest House Front' },
  { src: '/images/guest_pool.jpg', alt: 'Guest House Pool' },
  { src: '/images/guest_side.jpg', alt: 'Guest House Side View' },
];

// Guest house features configuration
const guestFeatures = [
  { icon: '🛏️', titleKey: 'features.bedrooms.title', descriptionKey: 'features.bedrooms.description' },
  { icon: '🚪', titleKey: 'features.entrance.title', descriptionKey: 'features.entrance.description' },
  { icon: '🍳', titleKey: 'features.kitchenette.title', descriptionKey: 'features.kitchenette.description' },
  { icon: '🚿', titleKey: 'features.bathroom.title', descriptionKey: 'features.bathroom.description' },
  { icon: '❄️', titleKey: 'features.aircon.title', descriptionKey: 'features.aircon.description' },
  { icon: '📶', titleKey: 'features.wifi.title', descriptionKey: 'features.wifi.description' },
];

// Mark the component as async to use server-side translations
async function GuestHousePage({}: PageProps) {
  // Get the translations using the server-side method
  const t = await getTranslations('guesthouse');

  return (
    <PropertyPage
      title={t('title')}
      images={guestImages}
      features={guestFeatures}
      t={t}
    />
  );
};

export default GuestHousePage;
