import React from 'react';
import { useTranslations } from 'next-intl';
import { ThaiPattern, DecorativeBorder, WaveDivider } from './ThaiDecorations';
import FeatureTile from './FeatureTile';

interface PropertyOverviewProps {
  title: string;
  description: string;
  // Add more props here for flexibility, e.g., features: string[]
}

// PropertyOverview component: Displays a section with a title and description
const PropertyOverview: React.FC<PropertyOverviewProps> = ({
  title,
  description,
}) => {
  const t = useTranslations('HomePage.features');
  return (
    <section className='relative py-20 bg-thai-subtle text-center overflow-hidden'>
      {/* Thai pattern background */}
      <ThaiPattern 
        size="medium" 
        color="teal" 
        opacity={0.05} 
        className="absolute inset-0" 
      />
      
      <div className='relative z-10 container mx-auto px-4 max-w-screen-lg'>
        {/* Decorative top border */}
        <DecorativeBorder 
          position="top" 
          color="gold" 
          className="mb-12"
        />
        
        <h2 className='text-3xl md:text-4xl font-bold mb-8 text-thai-teal-dark'>
          <span className='relative'>
            {title}
            <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-thai-gold rounded-full' />
          </span>
        </h2>
        
        <div className='max-w-4xl mx-auto'>
          <p className='text-xl md:text-2xl text-thai-teal leading-relaxed font-light mb-12'>
            {description}
          </p>
          
          {/* Feature highlights */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
            <FeatureTile
              icon="🏊"
              title={t('pool.title')}
              description={t('pool.description')}
            />
            
            <FeatureTile
              icon="🌴"
              title={t('gardens.title')}
              description={t('gardens.description')}
            />
            
            <FeatureTile
              icon="🏡"
              title={t('guestHouse.title')}
              description={t('guestHouse.description')}
            />
          </div>
        </div>
        
        {/* Decorative bottom border */}
        <DecorativeBorder 
          position="bottom" 
          color="gold" 
          className="mt-16"
        />
      </div>
      
      {/* Bottom wave transition */}
      <div className='absolute bottom-0 left-0 right-0'>
        <WaveDivider color="teal" flip={true} />
      </div>
    </section>
  );
};

export default PropertyOverview;
