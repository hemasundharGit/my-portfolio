import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Cpu, Layers, GitBranch, ClipboardCheck, Cloud } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { FadeIn } from '../fade-in';
import { useTranslations } from 'next-intl';

interface SkillCardProps {
  category: string;
  icon: LucideIcon;
  skills: string[];
}

function SkillCard({ category, icon: Icon, skills }: SkillCardProps) {
  return (
    <Card className="h-full transform transition-transform hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <Icon className="h-8 w-8 text-accent" />
        <CardTitle className="font-headline text-2xl">{category}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function SkillsSection() {
  const t = useTranslations('Skills');

  const skillsData = [
    {
      category: t('programming'),
      icon: Code,
      skills: t('programming_skills').split(', '),
    },
    {
      category: t('core_cs'),
      icon: Cpu,
      skills: t('core_cs_skills').split(', '),
    },
    {
      category: t('development'),
      icon: Layers,
      skills: t('development_skills').split(', '),
    },
    {
      category: t('testing'),
      icon: ClipboardCheck,
      skills: t('testing_skills').split(', '),
    },
    {
      category: t('tools'),
      icon: GitBranch,
      skills: t('tools_skills').split(', '),
    },
    {
      category: t('cloud'),
      icon: Cloud,
      skills: t('cloud_skills').split(', '),
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 min-h-screen flex items-center">
      <FadeIn>
        <div className="container md:pr-16">
          <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">
            {t('title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((data) => (
              <SkillCard key={data.category} {...data} />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
