import { FloatingNav } from '@/components/floating-nav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';


const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);


export default function ContactPage() {
  return (
    <>
      <FloatingNav />
      <main className="container py-16 md:py-24 flex items-center justify-center">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle className="text-center font-headline text-3xl md:text-4xl font-bold">Contact Me</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <p className="text-muted-foreground text-center">
              I'm always open to discussing new projects, creative ideas, freelancing opportunities, or opportunities to be part of an amazing team.
            </p>
            <div className="flex flex-col gap-4 w-full items-center">
              <Button variant="outline" className="w-full max-w-xs" asChild>
                <Link href="mailto:kollahemasundharam.tech9@gmail.com">
                  <Mail className="mr-2 h-5 w-5" /> kollahemasundharam.tech9@gmail.com
                </Link>
              </Button>
              <Button variant="outline" className="w-full max-w-xs" asChild>
                <Link href="https://wa.me/919505005629" target="_blank">
                  <WhatsAppIcon className="mr-2 h-5 w-5" /> +91 9505005629
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/hemasundharGit" target="_blank" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/kollahemasundharam9" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
