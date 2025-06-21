import Image from 'next/image';
import React from 'react';
import { WaveDivider } from './ThaiDecorations';

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
      <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10' />
      
      {/* Content overlay */}
      <div className='relative z-20 text-center px-4 max-w-4xl mx-auto'>
        <div className='bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-thai-gold/40'>
          <h1 className='text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg'>
            {headline}
          </h1>
          <p className='text-lg md:text-xl drop-shadow-lg font-light leading-relaxed text-thai-cream'>
            {subtitle}
          </p>
        </div>
      </div>
      
      {/* Bottom wave transition */}
      <div className='absolute bottom-0 left-0 right-0 z-30'>
        <WaveDivider color="cream" />
      </div>
    </div>
  );
};

export default HeroSection;
