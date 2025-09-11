import { PageTransition } from '@/components/page-transition';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale);
  
  return (
    <PageTransition>
      <FloatingNav />
      <main>{children}</main>
      <Footer />
    </PageTransition>
  );
}
