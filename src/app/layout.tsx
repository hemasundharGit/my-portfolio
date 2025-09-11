import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import { PT_Sans, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: 'Hema Sundharam Kolla | Portfolio',
  description: 'DevOps & Full Stack Engineer. Computer Science undergraduate passionate about solving large-scale problems with scalable software systems.',
};

export default function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={cn("font-body antialiased bg-background text-foreground flex flex-col min-h-screen", ptSans.variable, playfairDisplay.variable)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex-grow bg-secondary">{children}</div>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
