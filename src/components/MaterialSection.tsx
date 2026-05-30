import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { materials } from '../lib/content';
import { useInViewReveal } from '../hooks/useInViewReveal';
import AuraHalo from './AuraHalo';
import ProductRender from './ProductRender';

export default function MaterialSection() {
  const { ref, inView } = useInViewReveal<HTMLElement>(0.3);
  return (
    <section
      id="materials"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 sm:px-6"
    >
      <AuraHalo scale={1} hue={0.3} />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <ProductRender size={220} />
        </div>
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-4 block text-xs tracking-[0.3em] text-[#7C7F86]"
          >
            MATERIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-700 tracking-tighter text-[#F4F5F7] sm:text-6xl"
          >
            Made of almost
            <br />
            nothing.
          </motion.h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#7C7F86]">
            Every gram is considered. Aura disappears against your skin and lasts the way heirlooms do.
          </p>
          <div className="mt-10 space-y-6">
            {materials.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-lg font-600 text-[#F4F5F7]">{m.name}</span>
                  <span className="text-right text-sm text-[#7C7F86]">{m.detail}</span>
                </div>
                {i < materials.length - 1 && <Separator className="mt-6 bg-white/5" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
