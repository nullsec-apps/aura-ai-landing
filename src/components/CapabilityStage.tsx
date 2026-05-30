import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInViewReveal } from '../hooks/useInViewReveal';
import AuraHalo from './AuraHalo';

interface CapabilityStageProps {
  id?: string;
  index?: string;
  headline: string;
  support: string;
  hue?: number;
  visual?: ReactNode;
}

export default function CapabilityStage({ id, index, headline, support, hue = 0.5, visual }: CapabilityStageProps) {
  const { ref, inView } = useInViewReveal<HTMLElement>(0.35);

  return (
    <section
      id={id}
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 sm:px-6"
    >
      <AuraHalo scale={1.1} hue={hue} />
      {visual}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {index && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-6 block text-xs tracking-[0.3em] text-[#7C7F86]"
          >
            {index}
          </motion.span>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' }}
          animate={inView ? { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' } : {}}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[16vw] font-800 leading-[0.9] tracking-tighter text-[#F4F5F7] sm:text-[12vw] md:text-[110px]"
        >
          {headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-[#7C7F86] sm:text-lg"
        >
          {support}
        </motion.p>
      </div>
    </section>
  );
}
