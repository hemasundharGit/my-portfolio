import { CertificationsSection } from '@/components/sections/certifications';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function CertificationsPage({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  return <CertificationsSection />;
}
