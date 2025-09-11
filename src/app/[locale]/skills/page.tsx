import { SkillsSection } from '@/components/sections/skills';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function SkillsPage({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  return <SkillsSection />;
}
