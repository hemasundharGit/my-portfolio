import { ProjectsSection } from '@/components/sections/projects';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function ProjectsPage({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  return <ProjectsSection />;
}
