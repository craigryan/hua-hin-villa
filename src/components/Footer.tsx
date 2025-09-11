import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SimpleDivider } from './MinimalDecorations';

const Footer: React.FC = () => {
  const t = useTranslations('footer');

  return (
    <footer className='bg-neutral-100 py-16 mt-auto'>
      <div className='container mx-auto px-6'>
        <SimpleDivider className="mb-12" color="neutral" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-800">{t('theProperty')}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/rental-requirements" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-primary transition-colors"
                >
                  {t('rentalRequirements')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-and-conditions" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-primary transition-colors"
                >
                  {t('termsAndConditions')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-800">{t('contact')}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/contact-us" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-primary transition-colors"
                >
                  {t('contactUs')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/social-media" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-primary transition-colors"
                >
                  {t('socialMedia')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <SimpleDivider className="mb-8" color="neutral" />
        
        <div className="text-center">
          <p className='text-neutral-600 text-sm mb-2'>
            &copy; {new Date().getFullYear()} {t('copyright')}. {t('allRightsReserved')}.
          </p>
          <p className="text-neutral-500 text-sm">
            {t('tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
