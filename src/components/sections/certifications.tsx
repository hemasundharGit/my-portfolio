import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import { FadeIn } from '../fade-in';
import { useTranslations } from 'next-intl';

export function CertificationsSection() {
  const t = useTranslations('Certifications');

  const certifications = [
    { 
      name: t('c1_name'), 
      year: t('c1_year'),
      link: "https://drive.google.com/file/d/14JSP6UCR6DWs22V8kqR4_tyTFnxeaWja/view?usp=sharing"
    },
    { 
      name: t('c2_name'), 
      year: t('c2_year'),
      link: "https://drive.google.com/file/d/1XctARkUp8Gkdadj0s4_6LjLCV2jVtKA0/view?usp=sharing" 
    },
    { 
      name: t('c3_name'), 
      year: t('c3_year'),
      link: "https://drive.google.com/file/d/1ZV-g1MA9X2B1Aoj4o35P7XDm4XwIkVwY/view?usp=sharing" 
    },
  ];

  return (
    <section id="certifications" className="py-16 md:py-24 min-h-screen flex items-center justify-center">
      <FadeIn>
        <div className="container">
          <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">
            {t('title')}
          </h2>
          <div className="flex justify-center">
            <Card className="transform transition-transform hover:shadow-xl w-full max-w-4xl">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {certifications.map((cert) => (
                    <li key={cert.name} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <BadgeCheck className="h-6 w-6 text-accent flex-shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-muted-foreground">{cert.name}</span>
                          {cert.year && <span className="text-sm text-muted-foreground">{cert.year}</span>}
                        </div>
                      </div>
                      {cert.link && (
                        <Button variant="outline" size="sm" asChild className="mt-2 sm:mt-0 w-full sm:w-auto">
                          <Link href={cert.link} target="_blank">
                            {t('viewBtn')} <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
