import { PublicationsSection } from '@/components/sections/publications';
import { FloatingNav } from '@/components/floating-nav';

export default function PublicationsPage() {
  return (
    <>
      <FloatingNav />
      <main>
        <PublicationsSection />
      </main>
    </>
  );
}
