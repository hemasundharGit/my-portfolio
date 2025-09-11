import { ExperienceSection } from '@/components/sections/experience';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function ExperiencePage({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  return <ExperienceSection />;
}
