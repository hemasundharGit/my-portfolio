
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";


export function HeroSection() {
    const t = useTranslations('Hero');
    const nameRef = useRef(null);
    const text = t('title');

    useEffect(() => {
        const nameEl = nameRef.current;
        if (nameEl) {
            gsap.fromTo(nameEl, { innerHTML: ""}, {
                duration: 2.5,
                innerHTML: text,
                ease: "power1.inOut",
            });
        }
    }, [text]);


  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-500/10 [mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)]"></div>
      
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-full">
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <div className="text-center">
                    <h1 ref={nameRef} className="font-headline text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 min-h-[1em]">
                        
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                        {t('subtitle')}
                    </p>
                </div>
                <div className="mt-8 flex gap-4">
                    <Button asChild>
                        <Link href="/about">{t('aboutBtn')}</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="https://drive.google.com/file/d/1KYOXSuTXCVNG_1blA872uonyQt1poLEI/view?usp=sharing" target="_blank">{t('resumeBtn')}</Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
