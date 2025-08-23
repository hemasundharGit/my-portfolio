import { HeroSection } from '@/components/sections/hero';
import { FloatingNav } from '@/components/floating-nav';

export default function Home() {
  return (
    <>
      <FloatingNav />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
