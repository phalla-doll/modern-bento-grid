'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  scale?: number;
  offset?: number;
}

export function ParallaxImage({ 
  src, 
  alt, 
  className, 
  scale = 1.2,
  offset = 15 // Percentage offset for parallax
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [`-${offset}%`, `${offset}%`]);

  return (
    <div ref={ref} className={cn("absolute inset-0 w-full h-full overflow-hidden", className)}>
      <motion.div 
        style={{ y, scale }} 
        className="w-full h-full relative"
      >
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
