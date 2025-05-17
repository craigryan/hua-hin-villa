import React from 'react'; // Import React
import { useTranslations } from 'next-intl';

// Minimal Footer component
const Footer: React.FC = () => {
  const t = useTranslations('footer');

  return (
    <footer className='bg-gray-800 text-white py-6 text-center mt-auto'>
      {' '}
      {/* mt-auto pushes footer to the bottom */}
      <div className='container mx-auto px-4'>
        <p>
          &copy; {new Date().getFullYear()} {t('copyright')}. All rights
          reserved.
        </p>
        {/* Add minimal links here later if needed, e.g., Privacy Policy */}
      </div>
    </footer>
  );
};

export default Footer;
