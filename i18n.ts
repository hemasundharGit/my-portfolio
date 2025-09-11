import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

const locales = ['en', 'te'];

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`./src/locales/${locale}/common.json`)).default
  };
});
