import { LeadershipSection } from '@/components/sections/leadership';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function LeadershipPage({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  return <LeadershipSection />;
}
