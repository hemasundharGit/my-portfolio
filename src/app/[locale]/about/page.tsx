import { AboutSection } from '@/components/sections/about';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function AboutPage({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  return <AboutSection />;
}
