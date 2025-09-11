import { PublicationsSection } from '@/components/sections/publications';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function PublicationsPage({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  return <PublicationsSection />;
}
