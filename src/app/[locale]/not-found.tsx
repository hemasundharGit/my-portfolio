import {unstable_setRequestLocale} from 'next-intl/server';
import Link from 'next/link';
import {Button} from '@/components/ui/button';

export default function NotFound({params: {locale}}: {params: {locale: string}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-muted-foreground mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
}
