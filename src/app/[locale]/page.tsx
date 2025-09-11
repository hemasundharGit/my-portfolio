import { HeroSection } from '@/components/sections/hero';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function Home({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  return <HeroSection />;
}
