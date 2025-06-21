import React from 'react';
import { useTranslations } from 'next-intl';

const ThailandMap: React.FC = () => {
  const t = useTranslations('ThailandMap');
  
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-thai-gold/30">
      <h3 className="text-sm font-semibold text-gray-800 mb-3 text-center">
        {t('propertyLocation')}
      </h3>
      <div className="relative w-48 h-48">
        {/* Google Maps Embed - Roadmap style with Bangkok at top, property at bottom */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1152000!2d100.3!3d13.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4f6!3m3!1m2!1s0x30fdb16c57b2b5c7%3A0x4f8b6c8f4b8b6c8f!2sWang%20Pong%2C%20Hua%20Hin%20District%2C%20Prachuap%20Khiri%20Khan%2C%20Thailand!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus&iwloc=near&output=embed"
          width="100%"
          height="160"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        />
        
        {/* Distance indicator */}
        <div className="absolute bottom-0 left-0 right-0 bg-thai-gold/20 rounded-b-xl p-1">
          <p className="text-xs text-gray-800 font-medium text-center">
            Wang Pong, 5km south of Hua Hin
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThailandMap;