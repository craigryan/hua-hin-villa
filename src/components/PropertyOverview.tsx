import React from 'react';
import { useTranslations } from 'next-intl';
import { SimpleDivider, AccentLine, SubtleBackground } from './MinimalDecorations';
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
    <section className='relative py-24 bg-neutral-50 text-center overflow-hidden'>
      {/* Subtle background gradient */}
      <SubtleBackground variant="light" opacity={0.3} />
      
      <div className='relative z-10 container mx-auto px-6 max-w-screen-lg'>
        <h2 className='text-3xl md:text-4xl font-light mb-4 text-neutral-800'>
          {title}
        </h2>
        
        <AccentLine position="center" width="medium" className="mb-12" />
        
        <div className='max-w-4xl mx-auto'>
          <p className='text-lg md:text-xl text-neutral-600 leading-relaxed font-light mb-16'>
            {description}
          </p>
          
          {/* Feature highlights */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-20'>
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
      </div>
    </section>
  );
};

export default PropertyOverview;
