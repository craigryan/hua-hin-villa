'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const RentalOption = ({ title, description, price }: { title: string; description: string; price: string }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <p className="text-lg font-bold text-indigo-600">{price}</p>
  </div>
);

const PropertyCard = ({ 
  image, 
  title, 
  link, 
  buttonText 
}: { 
  image: string; 
  title: string; 
  link: string; 
  buttonText: string;
}) => (
  <div className="relative group overflow-hidden rounded-lg">
    <Image
      src={image}
      alt={title}
      width={600}
      height={400}
      className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
      <Link
        href={link}
        className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  </div>
);

export default function SiteOptionsPage() {
  const t = useTranslations('SiteOptions');

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">{t('title')}</h1>
        
        {/* Rental Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <RentalOption
            title={t('options.guestHouseOnly.title')}
            description={t('options.guestHouseOnly.description')}
            price={t('options.guestHouseOnly.price')}
          />
          <RentalOption
            title={t('options.guestHousePool.title')}
            description={t('options.guestHousePool.description')}
            price={t('options.guestHousePool.price')}
          />
          <RentalOption
            title={t('options.mainHouse.title')}
            description={t('options.mainHouse.description')}
            price={t('options.mainHouse.price')}
          />
          <RentalOption
            title={t('options.fullProperty.title')}
            description={t('options.fullProperty.description')}
            price={t('options.fullProperty.price')}
          />
        </div>

        {/* Property Navigation Cards */}
        <h2 className="text-3xl font-semibold text-center mb-8">{t('exploreProperties')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <PropertyCard
            image="/images/villa_front.jpg"
            title={t('mainVilla.title')}
            buttonText={t('mainVilla.buttonText')}
            link="/the-villa"
          />
          <PropertyCard
            image="/images/guest_front.jpg"
            title={t('guestHouse.title')}
            buttonText={t('guestHouse.buttonText')}
            link="/guest-house"
          />
        </div>
      </div>
    </div>
  );
}
