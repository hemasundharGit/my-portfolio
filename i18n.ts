import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

const locales = ['en', 'te'];

export default getRequestConfig(async () => {
  // This function is intentionally left empty.
  // The actual locale and messages are handled by the middleware and layout.
  // This configuration is primarily to satisfy the build process.
  
  // A default locale and messages can be provided here if needed for specific scenarios,
  // but for a standard setup where middleware handles routing, this is often sufficient.
  const locale = 'en'; // Default fallback
  
  return {
    locale,
    messages: (await import(`./src/locales/${locale}/common.json`)).default
  };
});
