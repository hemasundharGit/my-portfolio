import { AboutSection } from '@/components/sections/about';
import { FloatingNav } from '@/components/floating-nav';

export default function AboutPage() {
  return (
    <>
      <FloatingNav />
      <main>
        <AboutSection />
      </main>
    </>
  );
}
