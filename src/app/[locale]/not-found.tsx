import {unstable_setRequestLocale} from 'next-intl/server';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function NotFound({params: {locale}}: {params: {locale: string}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const t = useTranslations('NotFound');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="text-muted-foreground mb-8">
        {t('description')}
      </p>
      <Button asChild>
        <Link href="/">{t('homeBtn')}</Link>
      </Button>
    </div>
  );
}
