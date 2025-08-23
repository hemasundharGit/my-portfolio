
"use client";

import Link from 'next/link';
import { Home, User, Code, Briefcase, Award, Rss, BrainCircuit, Mail, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useTranslations } from 'next-intl';


const navLinks = [
  { href: '/', labelKey: 'home', icon: Home },
  { href: '/about', labelKey: 'about', icon: User },
  { href: '/skills', labelKey: 'skills', icon: Code },
  { href: '/experience', labelKey: 'experience', icon: Network },
  { href: '/projects', labelKey: 'projects', icon: Briefcase },
  { href: '/certifications', labelKey: 'certifications', icon: Award },
  { href: '/publications', labelKey: 'publications', icon: Rss },
  { href: '/leadership', labelKey: 'leadership', icon: BrainCircuit },
  { href: '/contact', labelKey: 'contact', icon: Mail },
];

export function FloatingNav() {
  const t = useTranslations('Nav');

  return (
    <TooltipProvider>
      <nav className="fixed top-1/2 md:right-4 -translate-y-1/2 z-50 flex-col gap-2 hidden md:flex">
        {navLinks.map((link) => (
           <Tooltip key={link.href} delayDuration={0}>
             <TooltipTrigger asChild>
                <Button asChild variant="outline" size="icon" className="bg-background/80 backdrop-blur-sm transition-transform hover:scale-110">
                  <Link href={link.href} aria-label={t(link.labelKey)}>
                    <link.icon className="h-5 w-5" />
                  </Link>
                </Button>
             </TooltipTrigger>
             <TooltipContent side="left">
               <p>{t(link.labelKey)}</p>
             </TooltipContent>
           </Tooltip>
        ))}
      </nav>
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-row gap-2 md:hidden bg-background/80 backdrop-blur-sm p-2 rounded-full border">
        {navLinks.map((link) => (
           <Tooltip key={link.href} delayDuration={0}>
             <TooltipTrigger asChild>
                <Button asChild variant="ghost" size="icon" className="transition-transform hover:scale-110">
                  <Link href={link.href} aria-label={t(link.labelKey)}>
                    <link.icon className="h-5 w-5" />
                  </Link>
                </Button>
             </TooltipTrigger>
             <TooltipContent side="top">
               <p>{t(link.labelKey)}</p>
             </TooltipContent>
           </Tooltip>
        ))}
      </nav>
    </TooltipProvider>
  );
}
