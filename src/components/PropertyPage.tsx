import React from 'react';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import FeatureTile from '@/components/FeatureTile';

interface PropertyFeature {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

interface PropertyPageProps {
  title: string;
  images: { src: string; alt: string }[];
  features: PropertyFeature[];
  t: (key: string) => string;
}

const PropertyPage: React.FC<PropertyPageProps> = ({
  title,
  images,
  features,
  t
}) => {
  return (
    <div className='flex flex-col min-h-screen' style={{ background: 'linear-gradient(to bottom, #fafaf9 0%, #ffffff 100%)' }}>
      <main className='flex-grow'>
        {/* Header Section */}
        <div className='py-16' style={{ backgroundColor: '#2c2c2c' }}>
          <div className='container mx-auto px-4'>
            <h1 className='text-4xl md:text-5xl font-light text-center text-white mb-4'>
              {title}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </div>

        {/* Image Gallery Section */}
        <section className='py-12 bg-white'>
          <div className='container mx-auto px-4'>
            <ImageCarousel images={images} className='shadow-2xl rounded-2xl overflow-hidden' />
          </div>
        </section>

        {/* Property Features Section */}
        <section className='py-16 bg-neutral-50'>
          <div className='container mx-auto px-4 max-w-6xl'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-light text-neutral-800 mb-4'>
                {t('featuresTitle')}
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
              <p className='text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed'>
                {t('featuresDescription')}
              </p>
            </div>

            {/* Features Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {features.map((feature, index) => (
                <FeatureTile
                  key={index}
                  icon={feature.icon}
                  title={t(feature.titleKey)}
                  description={t(feature.descriptionKey)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyPage;