import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollStage } from '../hooks/useScrollStage';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useProductConfig } from '../hooks/useProductConfig';

interface ProductRenderProps {
  rotation?: number;
  exploded?: boolean;
  size?: number;
}

const finishColors: Record<string, { a: string; b: string }> = {
  Titanium: { a: '#E8E9EC', b: '#9A9DA4' },
  Midnight: { a: '#3A3D45', b: '#15171C' },
  Lunar: { a: '#C8A2FF', b: '#7FE3D4' },
};

export default function ProductRender({ rotation, size = 140 }: ProductRenderProps) {
  const stage = useScrollStage();
  const reduced = useReducedMotion();
  const { finish } = useProductConfig();
  const [hover, setHover] = useState(false);
  const c = finishColors[finish] || finishColors.Titanium;
  const rot = rotation ?? stage.rotation;
  const exploded = hover && !reduced;

  return (
    <motion.div
      className="relative z-10 flex cursor-pointer flex-col items-center justify-center"
      style={{ width: size, height: size }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      animate={reduced ? {} : { y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        animate={{ rotate: reduced ? 0 : rot * 0.08 }}
        style={{ filter: `drop-shadow(0 0 30px ${c.a}55)` }}
      >
        <defs>
          <radialGradient id="shell" cx="35%" cy="30%">
            <stop offset="0%" stopColor={c.a} />
            <stop offset="100%" stopColor={c.b} />
          </radialGradient>
          <radialGradient id="core" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#7FE3D4" />
            <stop offset="100%" stopColor="#0F1012" />
          </radialGradient>
        </defs>
        <motion.g animate={{ y: exploded ? -28 : 0 }} transition={{ type: 'spring', stiffness: 120, damping: 14 }}>
          <ellipse cx="100" cy="60" rx="62" ry="58" fill="url(#shell)" />
          <ellipse cx="100" cy="60" rx="62" ry="58" fill="none" stroke="#ffffff22" strokeWidth="1" />
        </motion.g>
        <motion.circle cx="100" cy="60" r="22" fill="url(#core)" animate={{ scale: exploded ? 1.15 : 1 }} transition={{ type: 'spring', stiffness: 120, damping: 14 }} />
        <motion.g animate={{ y: exploded ? 30 : 0 }} transition={{ type: 'spring', stiffness: 120, damping: 14 }}>
          <ellipse cx="100" cy="60" rx="70" ry="64" fill="none" stroke={c.a} strokeWidth="2" opacity="0.5" />
        </motion.g>
      </motion.svg>
      <motion.div
        className="absolute bottom-0 text-[10px] tracking-widest text-[#7C7F86]"
        animate={{ opacity: exploded ? 1 : 0 }}
      >
        TITANIUM · CORE · HAPTIC RING
      </motion.div>
    </motion.div>
  );
}
