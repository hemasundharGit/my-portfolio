import { SkillsSection } from '@/components/sections/skills';
import { FloatingNav } from '@/components/floating-nav';

export default function SkillsPage() {
  return (
    <>
      <FloatingNav />
      <main>
        <SkillsSection />
      </main>
    </>
  );
}
