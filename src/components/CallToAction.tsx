import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('HomePage.cta');
  return (
    <section className='relative py-24 text-white text-center' style={{ backgroundColor: '#2c2c2c' }}>
      <div className='container mx-auto px-6 max-w-4xl'>
        <h2 className='text-3xl md:text-4xl font-light mb-8 leading-tight text-neutral-100'>
          {headline}
        </h2>
        
        <div className='space-y-8'>
          <Link
            href={buttonLink}
            className='group inline-flex items-center bg-primary hover:bg-primary-light text-white font-medium py-3 px-8 rounded text-base transition-all duration-300 hover:shadow-lg'
          >
            <span className='mr-2'>{buttonText}</span>
            <svg 
              className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' 
              fill='currentColor' 
              viewBox='0 0 20 20'
            >
              <path fillRule='evenodd' d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z' clipRule='evenodd' />
            </svg>
          </Link>
          
          <p className='text-neutral-300 text-base font-light max-w-2xl mx-auto mt-6'>
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
