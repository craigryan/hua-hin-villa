import Image from 'next/image';
import React from 'react'; // Import React

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
        layout='fill' // Fill the parent container
        objectFit='cover' // Cover the container while maintaining aspect ratio
        quality={90} // Image quality
        className='z-[-1]' // Position behind text content
      />
      {/* Overlay content */}
      <div className='text-center px-4 z-10 bg-black bg-opacity-30 p-6 rounded-lg'>
        {' '}
        {/* Added a subtle overlay for text readability */}
        <h1 className='text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg'>
          {headline}
        </h1>{' '}
        {/* Added drop shadow for text */}
        <p className='text-xl md:text-2xl drop-shadow-lg'>{subtitle}</p>{' '}
        {/* Added drop shadow for text */}
        {/* You could add a button here if you want a primary CTA */}
      </div>
    </div>
  );
};

export default HeroSection;
