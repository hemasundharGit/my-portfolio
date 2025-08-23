import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/fade-in';
import { useTranslations } from 'next-intl';

export function AboutSection() {
  const t = useTranslations('About');
  return (
    <section id="about" className="py-16 md:py-24 min-h-screen flex items-center">
      <FadeIn>
        <div className="container">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="md:col-span-2">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                <Image
                  src="/images/pp.png?v=2"
                  alt="Hema Sundharam Kolla"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover"
                  data-ai-hint="professional portrait"
                />
              </div>
            </div>
            <div className="md:col-span-3 md:pr-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t('p1')}</p>
                <p>{t('p2')}</p>
                <p>{t('p3')}</p>
                <p>{t('p4')}</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
