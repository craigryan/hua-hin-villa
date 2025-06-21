import Link from 'next/link';
import React from 'react';
import { ThaiPattern, DecorativeBorder } from './ThaiDecorations';

interface CallToActionProps {
  headline: string;
  buttonText: string;
  buttonLink: string;
}

// CallToAction component: Displays a prominent call to action with a button
const CallToAction: React.FC<CallToActionProps> = ({
  headline,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className='relative py-20 bg-thai-teal text-white text-center overflow-hidden'>
      {/* Thai pattern background */}
      <ThaiPattern 
        size="large" 
        color="gold" 
        opacity={0.1} 
        className="absolute inset-0" 
      />
      
      {/* Gradient overlay for depth */}
      <div className='absolute inset-0 bg-gradient-to-br from-thai-teal via-thai-teal-dark to-thai-teal opacity-90' />
      
      <div className='relative z-10 container mx-auto px-4 max-w-4xl'>
        {/* Decorative top border */}
        <DecorativeBorder 
          position="top" 
          color="gold" 
          className="mb-12"
        />
        
        <h2 className='text-4xl md:text-5xl font-bold mb-12 leading-tight'>
          <span className='bg-gradient-to-r from-thai-gold to-thai-gold-light bg-clip-text text-transparent'>
            {headline}
          </span>
        </h2>
        
        <div className='space-y-6'>
          <Link
            href={buttonLink}
            className='group inline-flex items-center bg-thai-gold hover:bg-thai-gold-light text-thai-teal-dark font-bold py-4 px-10 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all duration-300'
          >
            <span className='mr-2'>{buttonText}</span>
            <svg 
              className='w-6 h-6 group-hover:translate-x-1 transition-transform duration-300' 
              fill='currentColor' 
              viewBox='0 0 20 20'
            >
              <path fillRule='evenodd' d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z' clipRule='evenodd' />
            </svg>
          </Link>
          
          <p className='text-thai-cream text-lg font-light max-w-2xl mx-auto mt-8'>
            Experience the perfect blend of luxury and Thai hospitality in our exclusive villa retreat.
          </p>
        </div>
        
        {/* Decorative bottom border */}
        <DecorativeBorder 
          position="bottom" 
          color="gold" 
          className="mt-16"
        />
      </div>
    </section>
  );
};

export default CallToAction;
