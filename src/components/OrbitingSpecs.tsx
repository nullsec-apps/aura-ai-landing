import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const chips = ['18hr presence', '0ms wake word', 'pendant-light', '34g titanium'];

export default function OrbitingSpecs() {
  const reduced = useReducedMotion();
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <motion.div
        className="relative h-[260px] w-[280px] sm:h-[320px] sm:w-[420px]"
        animate={reduced ? {} : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {chips.map((chip, i) => {
          const angle = (i / chips.length) * Math.PI * 2;
          const rx = 140;
          const ry = 120;
          const x = Math.cos(angle) * rx;
          const y = Math.sin(angle) * ry;
          return (
            <motion.div
              key={chip}
              className="absolute left-1/2 top-1/2"
              style={{ x, y }}
              animate={reduced ? {} : { rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <div className="glass -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-500 text-[#F4F5F7]">
                {chip}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
