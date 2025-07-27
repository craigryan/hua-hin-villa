import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

const ThailandMap: React.FC = () => {
  const t = useTranslations('ThailandMap');
  const locale = useLocale();

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-primary/30">
      <h3 className="text-sm font-semibold text-gray-800 mb-3 text-center">
        {t('propertyLocation')}
      </h3>
      <div className="relative w-58 h-60">
        {/* Google Maps Embed - Roadmap style with Bangkok at top, property at bottom */}
        <iframe src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1011853.7127363494!2d100.23373714075773!3d13.018578956750229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI0JzU4LjYiTiA5OcKwNTYnNTAuMSJF!5e1!3m2!1s${locale}!2sau!4v1750553532110!5m2!1s${locale}!2sau&hl=${locale}`}
          width="100%" 
          height="85%" 
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg">
        </iframe>
        {/* Distance indicator */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary/20 rounded-b-xl p-1">
          <p className="text-xs text-gray-800 font-medium text-center">
            {t('locationDescription')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThailandMap;