import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, Rss, BookOpen } from 'lucide-react';
import { FadeIn } from '../fade-in';
import { useTranslations } from 'next-intl';

export function PublicationsSection() {
  const t = useTranslations('Publications');

  const publications = [
    {
      type: t('pub1_type'),
      title: t('pub1_title'),
      platform: t('pub1_platform'),
      link: "https://drive.google.com/file/d/1gRjTzYCndPyT2HW6BOT70qGMhW9IxOwr/view?usp=sharing"
    },
    {
      type: t('pub2_type'),
      title: t('pub2_title'),
      platform: t('pub2_platform'),
      link: "https://hemasundharamkolla.hashnode.dev/"
    }
  ];

  return (
    <section id="publications" className="py-16 md:py-24 bg-secondary min-h-screen flex items-center justify-center">
      <FadeIn>
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">
            {t('title')}
          </h2>
          <div className="space-y-6">
            {publications.map((pub) => (
              <Card key={pub.title} className="flex flex-col sm:flex-row items-center justify-between p-6 transform transition-transform hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center gap-4">
                    {pub.type === t('pub1_type') ? <BookOpen className="h-8 w-8 text-accent flex-shrink-0"/> : <Rss className="h-8 w-8 text-accent flex-shrink-0"/>}
                    <div>
                      <CardTitle className="text-xl font-body font-bold">{pub.title}</CardTitle>
                      <CardDescription className="mt-1 text-accent">{pub.platform}</CardDescription>
                    </div>
                </div>
                <Button variant="outline" asChild className="mt-4 sm:mt-0">
                  <Link href={pub.link} target="_blank">
                    {t('readMoreBtn')} <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
