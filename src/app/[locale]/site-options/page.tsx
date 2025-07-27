'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../../components/Footer';

const RentalOption = ({ 
  title, 
  description, 
  price, 
  icon 
}: { 
  title: string; 
  description: string; 
  price: string;
  icon: string;
}) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 p-6 group">
    <div className="flex items-center mb-3">
      <span className="text-2xl mr-3">{icon}</span>
      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
    <div className="rounded-lg p-3 border-l-4" style={{ backgroundColor: '#2c2c2c', borderLeftColor: '#a8883a' }}>
      <p className="text-lg font-bold text-white">{price}</p>
    </div>
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
  <div className="relative group overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
    <Image
      src={image}
      alt={title}
      width={600}
      height={360}
      className="w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-103"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
      <Link
        href={link}
        className="inline-flex items-center bg-primary hover:bg-primary-light text-white font-medium px-4 py-2 rounded transition-colors duration-200 text-sm"
      >
        {buttonText}
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
);

export default function SiteOptionsPage() {
  const t = useTranslations('SiteOptions');

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #f5f5f4 0%, #ffffff 100%)' }}>
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-light text-neutral-800 mb-6">{t('title')}</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
        
        {/* Rental Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <RentalOption
            icon="🏡"
            title={t('options.guestHouseOnly.title')}
            description={t('options.guestHouseOnly.description')}
            price={t('options.guestHouseOnly.price')}
          />
          <RentalOption
            icon="🏖️"
            title={t('options.mainHouse.title')}
            description={t('options.mainHouse.description')}
            price={t('options.mainHouse.price')}
          />
          <RentalOption
            icon="🏘️"
            title={t('options.fullProperty.title')}
            description={t('options.fullProperty.description')}
            price={t('options.fullProperty.price')}
          />
        </div>

        {/* Property Navigation Cards */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">{t('exploreProperties')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('exploreDescription')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
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
      
      <Footer />
    </div>
  );
}
