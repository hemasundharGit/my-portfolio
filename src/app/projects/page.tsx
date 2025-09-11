import { ProjectsSection } from '@/components/sections/projects';
import { FloatingNav } from '@/components/floating-nav';

export default function ProjectsPage() {
  return (
    <>
      <FloatingNav />
      <main>
        <ProjectsSection />
      </main>
    </>
  );
}
