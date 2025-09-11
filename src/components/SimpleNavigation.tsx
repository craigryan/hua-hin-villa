'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const SimpleNavigation = () => {
  const t = useTranslations('Navigation');
  
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1 text-neutral-600 text-sm">
        <span>{t('locationName')}</span>
        <Image
          src="/images/flags/th.svg"
          alt="Thailand flag"
          width={16}
          height={16}
          className="w-4 h-4"
        />
      </div>
    </div>
  );
};

export default SimpleNavigation;