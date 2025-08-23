import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { FadeIn } from '../fade-in';
import { useTranslations } from 'next-intl';

export function ProjectsSection() {
  const t = useTranslations('Projects');

  const projectsData = [
    {
      year: t('p1_year'),
      role: t('p1_role'),
      title: t('p1_title'),
      description: t('p1_desc'),
      stack: t('p1_stack').split(', '),
      github: 'https://github.com/hemasundharGit/Kolla-Agencies-Business-Monitor',
      live: null,
    },
    {
      year: t('p2_year'),
      role: t('p2_role'),
      title: t('p2_title'),
      description: t('p2_desc'),
      stack: t('p2_stack').split(', '),
      github: null,
      live: '#',
    },
    {
      year: t('p3_year'),
      role: t('p3_role'),
      title: t('p3_title'),
      description: t('p3_desc'),
      stack: t('p3_stack').split(', '),
      github: null,
      live: null,
    },
     {
      year: t('p4_year'),
      role: t('p4_role'),
      title: t('p4_title'),
      description: t('p4_desc'),
      stack: t('p4_stack').split(', '),
      github: null,
      live: null,
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary min-h-screen flex items-center">
      <FadeIn>
        <div className="container">
          <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">
            {t('title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-xl">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                    <span className="text-sm text-muted-foreground font-semibold">{project.year}</span>
                  </div>
                  <CardDescription className="mb-2 text-sm text-accent-foreground">{project.role}</CardDescription>
                  <p className="text-muted-foreground flex-grow mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.stack.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                  </div>
                </div>
                <CardFooter className="mt-auto bg-background/50">
                  {project.github && (
                    <Button variant="ghost" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" /> {t('codeBtn')}
                      </Link>
                    </Button>
                  )}
                  {project.live && (
                    <Button variant="ghost" asChild>
                      <Link href={project.live} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" /> {t('liveBtn')}
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
