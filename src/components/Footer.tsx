import React from 'react';
import { useTranslations } from 'next-intl';
import { ThaiPattern } from './ThaiDecorations';

// Minimal Footer component
const Footer: React.FC = () => {
  const t = useTranslations('footer');

  return (
    <footer 
      className='relative text-white py-12 text-center mt-auto overflow-hidden border-t-4'
      style={{ 
        backgroundColor: '#1F6B6B',
        borderTopColor: '#D4AF37'
      }}
    >
      {/* Thai pattern background */}
      <ThaiPattern 
        size="small" 
        color="gold" 
        opacity={0.08} 
        className="absolute inset-0" 
      />
      
      <div className='relative z-10 container mx-auto px-4'>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-thai-cream">{t('title')}</h3>
          <div className="w-16 h-1 bg-thai-gold mx-auto rounded-full mb-4" />
        </div>
        <p className='text-thai-cream/90 text-lg'>
          &copy; {new Date().getFullYear()} {t('copyright')}. {t('allRightsReserved')}.
        </p>
        <div className="mt-6 pt-4 border-t border-thai-gold/30">
          <p className="text-thai-cream/70 text-sm">
            {t('tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
