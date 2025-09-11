
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, CheckCircle } from 'lucide-react';
import { FadeIn } from '../fade-in';
import { useTranslations } from 'next-intl';

export function ExperienceSection() {
  const t = useTranslations('Experience');

  const experience = {
      title: t('internship_title'),
      company: t('company_name'),
      duration: t('duration'),
      description: [
        t('desc_1'),
        t('desc_2'),
        t('desc_3')
      ]
  };

  return (
    <section id="experience" className="py-16 md:py-24 min-h-screen flex items-center justify-center bg-secondary">
      <FadeIn>
        <div className="container max-w-5xl">
          <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">
            {t('title')}
          </h2>
          <Card className="transform transition-transform hover:shadow-xl hover:-translate-y-1 w-full">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <CardTitle className="font-headline text-2xl">{experience.title}</CardTitle>
                    <CardDescription className="text-accent mt-1 flex items-center gap-2">
                        <Building className="h-4 w-4" /> {experience.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="mt-2 sm:mt-0">{experience.duration}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {experience.description.map((desc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{desc}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </FadeIn>
    </section>
  );
}
