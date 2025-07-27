import Image from 'next/image';
import React from 'react';
import ThailandMap from './ThailandMap';

interface HeroSectionProps {
  bgImage: string;
  headline: string;
  subtitle: string;
}

// HeroSection component: Displays a background image with overlaid text
const HeroSection: React.FC<HeroSectionProps> = ({
  bgImage,
  headline,
  subtitle,
}) => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden'>
      {/* Background Image with Next.js Image optimization */}
      <Image
        src={bgImage}
        alt='Luxury Villa Background'
        fill
        className='object-cover z-0'
        quality={90}
        priority
      />
      
      {/* Subtle gradient overlay for text readability */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10' />
      
      {/* Thailand Map - Top Right Corner */}
      <div className='absolute top-6 right-6 z-30 hidden md:block'>
        <ThailandMap />
      </div>
      
      {/* Content overlay */}
      <div className='relative z-20 text-center px-6 max-w-4xl mx-auto'>
        <h1 className='text-4xl md:text-5xl font-light mb-6 text-white'>
          {headline}
        </h1>
        <p className='text-lg md:text-xl font-light leading-relaxed text-white/90 max-w-2xl mx-auto'>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
