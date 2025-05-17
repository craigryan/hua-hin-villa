'use client';

// import Image from 'next/image'; // Next.js Image component for optimization
// import Link from 'next/link';   // Next.js Link component for client-side navigation

import { useTranslations } from 'next-intl';

// Import the components we'll create next
import HeroSection from '../../components/HeroSection';
import PropertyOverview from '../../components/PropertyOverview';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer'; // Minimal footer component

// The main component for your landing page
export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className='flex flex-col min-h-screen'>
      {/*
        Optional: Add a Header/Navigation component here later if needed.
        For a minimal site, you might just have links in the footer or CTA.
      */}
      {/* <Header /> */}

      {/* Hero Section: Full-height section with background image and main title */}
      <HeroSection
        // Replace with the path to your actual hero image in the public directory
        bgImage='/images/site_villa_guest_background.jpeg'
        headline={t('headline')} // Use translation keys
        subtitle={t('subtitle')}
      />

      {/* Property Overview Section: Introduce the villa and its key features */}
      <PropertyOverview
        title={t('title')}
        description={t('description')}
        // You can add props here later for specific features like number of beds, pool size, etc.
      />

      {/* Call to Action Section: Encourage users to explore further or inquire */}
      <CallToAction
        headline={t('cta.headline')}
        buttonText={t('cta.buttonText')}
        buttonLink='/the-villa' // Link to the page detailing the main house and guest house
      />

      {/*
        Optional: Add a Gallery Preview Section here later
        to show a few images before the full gallery page.
      */}
      {/* <GalleryPreview /> */}

      {/* Footer: Minimal footer with copyright or basic links */}
      <Footer />
    </div>
  );
}
