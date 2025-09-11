"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const variants = {
  initialState: {
    opacity: 0,
    x: '100vw',
  },
  animateState: {
    opacity: 1,
    x: 0,
  },
  exitState: {
    opacity: 0,
    x: '-100vw',
  },
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
