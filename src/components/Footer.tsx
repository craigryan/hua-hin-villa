import React from 'react';
import { useTranslations } from 'next-intl';
import { SimpleDivider } from './MinimalDecorations';

// Minimal Footer component
const Footer: React.FC = () => {
  const t = useTranslations('footer');

  return (
    <footer className='bg-neutral-100 py-16 text-center mt-auto'>
      <div className='container mx-auto px-6'>
        <SimpleDivider className="mb-8" color="neutral" />
        <div className="mb-6">
          <h3 className="text-base font-medium mb-2 text-neutral-700">{t('title')}</h3>
        </div>
        <p className='text-neutral-600 text-sm'>
          &copy; {new Date().getFullYear()} {t('copyright')}. {t('allRightsReserved')}.
        </p>
        <div className="mt-4">
          <p className="text-neutral-500 text-sm">
            {t('tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
