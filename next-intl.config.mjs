import { notFound } from 'next/navigation';

export default {
  // List of supported locales
  locales: ['en', 'th'],
  
  // Default locale
  defaultLocale: 'en',
  
  // Only add prefixes to non-default locales
  localePrefix: 'as-needed',
  
  // Load messages based on locale
  getMessages: async (locale) => {
    try {
      return (await import(`./src/messages/${locale}.json`)).default;
    } catch (error) {
      notFound();
    }
  }
}
