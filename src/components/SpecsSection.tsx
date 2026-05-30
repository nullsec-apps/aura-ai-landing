import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { specs } from '../lib/content';
import { useInViewReveal } from '../hooks/useInViewReveal';
import { easeOutCubic } from '../lib/easing';

function CountUp({ value, run }: { value: string; run: boolean }) {
  const num = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!run || isNaN(num)) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setDisplay(Math.round(num * easeOutCubic(p)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, num]);
  return (
    <span>
      {isNaN(num) ? value : `${display}${suffix}`}
    </span>
  );
}

export default function SpecsSection() {
  const { ref, inView } = useInViewReveal<HTMLElement>(0.3);
  return (
    <section id="specs" ref={ref} className="relative flex min-h-screen flex-col items-center justify-center px-4 py-24 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-4 block text-xs tracking-[0.3em] text-[#7C7F86]"
        >
          SPECIFICATIONS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl font-800 tracking-tighter text-[#F4F5F7] sm:text-7xl"
        >
          The numbers.
        </motion.h2>
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="font-display text-6xl font-700 tracking-tighter text-[#F4F5F7] sm:text-7xl">
                <CountUp value={s.value} run={inView} />
              </div>
              <Separator className="my-4 bg-white/10" />
              <div className="text-sm tracking-wide text-[#7C7F86]">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
