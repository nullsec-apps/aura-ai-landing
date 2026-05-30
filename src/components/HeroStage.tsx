import { motion } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuraHalo from './AuraHalo';
import ProductRender from './ProductRender';
import OrbitingSpecs from './OrbitingSpecs';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface HeroStageProps {
  onWatchFilm: () => void;
}

export default function HeroStage({ onWatchFilm }: HeroStageProps) {
  const reduced = useReducedMotion();
  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-16 sm:px-6">
      <AuraHalo scale={1.3} hue={0.1} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center"
      >
        <span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-1.5 text-xs tracking-widest text-[#7C7F86]">
          INTRODUCING · SPRING 2026
        </span>
        <h1 className="font-display text-[18vw] font-800 leading-[0.85] tracking-tighter text-[#F4F5F7] sm:text-[14vw] md:text-[120px]">
          Meet Aura.
        </h1>
      </motion.div>

      <div className="relative z-10 my-2 flex h-[280px] w-full items-center justify-center sm:h-[360px]">
        <OrbitingSpecs />
        <ProductRender size={160} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-xl text-center"
      >
        <p className="text-base leading-relaxed text-[#7C7F86] sm:text-lg">
          A personal AI you wear, not a screen you stare at. It listens, thinks, and speaks — so your hands and eyes stay free.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            onClick={() => document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' })}
            className="h-12 w-full rounded-full bg-[#F4F5F7] px-8 text-base font-500 text-[#070708] transition-all duration-200 hover:bg-white hover:scale-105 sm:w-auto"
          >
            Reserve yours
          </Button>
          <Button
            onClick={onWatchFilm}
            variant="ghost"
            className="h-12 w-full rounded-full border border-white/10 px-8 text-base font-500 text-[#F4F5F7] transition-all duration-200 hover:bg-white/5 sm:w-auto"
          >
            <Play className="mr-2 h-4 w-4" strokeWidth={2} /> Watch the film
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[#7C7F86]"
        animate={reduced ? {} : { y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
