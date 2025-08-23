import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Medal, BrainCircuit } from 'lucide-react';
import { FadeIn } from '../fade-in';
import { useTranslations } from 'next-intl';

export function LeadershipSection() {
  const t = useTranslations('Leadership');

  const leadershipItems = [
    {
      role: t('item1_role'),
      description: t('item1_desc'),
      icon: Medal
    },
    {
      role: t('item2_role'),
      description: t('item2_desc'),
      icon: BrainCircuit
    }
  ];

  return (
    <section id="leadership" className="py-16 md:py-24 min-h-screen flex items-center justify-center">
      <FadeIn>
        <div className="container">
          <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">
            {t('title')}
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipItems.map((item) => (
              <Card key={item.role} className="h-full transform transition-transform hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <item.icon className="h-8 w-8 text-accent"/>
                    <CardTitle className="font-headline text-2xl">{item.role}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
